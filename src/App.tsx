import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { QuestionInputSection } from './components/QuestionInputSection';
import { CoachResultView } from './components/CoachResultView';
import { VocabularyVault } from './components/VocabularyVault';
import { HistoryView } from './components/HistoryView';
import { ApiKeyModal } from './components/ApiKeyModal';
import { CoachResponse, PracticeHistoryItem, IELTSPart } from './types';
import { Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'generator' | 'vocabulary' | 'history'>('generator');

  // Custom User API Key state
  const [userApiKey, setUserApiKey] = useState<string>(() => {
    try {
      return localStorage.getItem('user_gemini_api_key') || '';
    } catch {
      return '';
    }
  });

  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  const handleSaveApiKey = (key: string) => {
    setUserApiKey(key);
    try {
      if (key) {
        localStorage.setItem('user_gemini_api_key', key);
        showToast('Đã lưu Gemini API Key cá nhân thành công!');
      } else {
        localStorage.removeItem('user_gemini_api_key');
        showToast('Đã chuyển về Gemini API Key mặc định của hệ thống.');
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Theme state: dark or light
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const savedTheme = localStorage.getItem('ielts_coach_theme');
      return savedTheme === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    try {
      localStorage.setItem('ielts_coach_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const isDark = theme === 'dark';

  // Active question state
  const [currentQuestion, setCurrentQuestion] = useState<string>('Do you like cooking?');
  const [currentPart, setCurrentPart] = useState<string>('Part 1');

  // AI responses
  const [coachResponse, setCoachResponse] = useState<CoachResponse | null>(null);

  // Loading states
  const [isLoadingCoach, setIsLoadingCoach] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Local storage history
  const [historyItems, setHistoryItems] = useState<PracticeHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('ielts_coach_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ielts_coach_history', JSON.stringify(historyItems));
    } catch (e) {
      console.error(e);
    }
  }, [historyItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Trigger Speaking Coach Analysis API
  const handleAnalyzeQuestion = async (payload: {
    question: string;
    part: IELTSPart;
    questionTypeId?: string;
    customContext?: string;
  }) => {
    setIsLoadingCoach(true);
    setErrorMessage(null);
    setCoachResponse(null);
    setCurrentQuestion(payload.question);

    try {
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (userApiKey.trim()) {
        headers['x-gemini-api-key'] = userApiKey.trim();
      }

      const response = await fetch('/api/speaking-coach', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get('content-type') || '';
      let data: any;
      if (contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Máy chủ chưa sẵn sàng hoặc phản hồi không đúng định dạng JSON (Mã ${response.status}). Vui lòng bấm thử lại sau vài giây.`);
      }

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Không thể lấy dữ liệu phản hồi từ AI Coach.');
      }

      setCoachResponse(data.data);
      setCurrentPart(data.data.part || 'Part 1');

      // Auto-save session to history
      const newItem: PracticeHistoryItem = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        part: data.data.part,
        question: payload.question,
        questionType: data.data.questionType,
        coachResponse: data.data,
        isFavorite: false,
      };

      setHistoryItems((prev) => [newItem, ...prev.filter((i) => i.question !== payload.question)]);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Có lỗi xảy ra khi kết nối tới AI Coach.');
    } finally {
      setIsLoadingCoach(false);
    }
  };

  const handleToggleFavoriteCurrent = () => {
    if (!coachResponse) return;

    setHistoryItems((prev) =>
      prev.map((item) => {
        if (item.question === currentQuestion) {
          const newFav = !item.isFavorite;
          showToast(newFav ? 'Đã lưu vào bài học yêu thích' : 'Đã bỏ khỏi bài học yêu thích');
          return { ...item, isFavorite: newFav };
        }
        return item;
      })
    );
  };

  const isCurrentFavorite = historyItems.some((item) => item.question === currentQuestion && item.isFavorite);

  const handleSelectHistoryItem = (item: PracticeHistoryItem) => {
    setCurrentQuestion(item.question);
    setCurrentPart(item.part);
    setCoachResponse(item.coachResponse);
    setActiveTab('generator');
  };

  const handleDeleteHistoryItem = (id: string) => {
    setHistoryItems((prev) => prev.filter((i) => i.id !== id));
    showToast('Đã xóa khỏi lịch sử');
  };

  const handleClearAllHistory = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử bài học?')) {
      setHistoryItems([]);
      showToast('Đã xóa toàn bộ lịch sử');
    }
  };

  return (
    <div
      className={`min-h-screen font-sans flex flex-col transition-colors duration-200 selection:bg-indigo-500 selection:text-white ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-800'
      }`}
    >
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-indigo-600 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-indigo-400 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={historyItems.filter((i) => i.isFavorite).length}
        theme={theme}
        onToggleTheme={toggleTheme}
        userApiKey={userApiKey}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
      />

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        userApiKey={userApiKey}
        onSaveApiKey={handleSaveApiKey}
        theme={theme}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Error Alert */}
        {errorMessage && (
          <div className="p-4 bg-rose-950/40 border border-rose-800/60 rounded-2xl text-xs text-rose-200 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <div>
              <span className="font-bold block text-rose-300">Thông báo lỗi:</span>
              {errorMessage}
            </div>
          </div>
        )}

        {/* TAB 1: Generator & AI Coach */}
        {activeTab === 'generator' && (
          <div className="space-y-8">
            <QuestionInputSection
              onSubmitQuestion={handleAnalyzeQuestion}
              isLoading={isLoadingCoach}
              userAnswer=""
              setUserAnswer={() => {}}
              onEvaluateUserAnswer={() => {}}
              isEvaluating={false}
              theme={theme}
            />

            {/* AI Response output */}
            {coachResponse ? (
              <div className="space-y-8">
                <CoachResultView
                  data={coachResponse}
                  question={currentQuestion}
                  onSaveToFavorites={handleToggleFavoriteCurrent}
                  isSaved={isCurrentFavorite}
                  theme={theme}
                  onSelectFollowUp={(q) => {
                    handleAnalyzeQuestion({
                      question: q,
                      part: 'auto',
                    });
                  }}
                />
              </div>
            ) : (
              !isLoadingCoach && (
                <div
                  className={`border rounded-2xl p-10 text-center space-y-3 ${
                    isDark
                      ? 'bg-slate-900/60 border-slate-800/80 text-slate-100'
                      : 'bg-white border-slate-200 shadow-sm text-slate-800'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Sẵn Sàng Cho Bài Luyện IELTS Speaking Band 7.0
                  </h3>
                  <p className={`text-xs max-w-lg mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Chọn một câu hỏi mẫu ở trên hoặc tự nhập câu hỏi/chủ đề của bạn. AI Coach sẽ tự động xác định Dạng câu hỏi, lập Dàn ý triển khai và chọn bộ Từ vựng Band 7.0 chuẩn bản ngữ.
                  </p>
                </div>
              )
            )}
          </div>
        )}

        {/* TAB 2: Band 7.0 Vocabulary Vault */}
        {activeTab === 'vocabulary' && <VocabularyVault theme={theme} />}

        {/* TAB 3: History & Saved Lessons */}
        {activeTab === 'history' && (
          <HistoryView
            items={historyItems}
            onSelectItem={handleSelectHistoryItem}
            onDeleteItem={handleDeleteHistoryItem}
            onClearAll={handleClearAllHistory}
            theme={theme}
          />
        )}
      </main>

      {/* Footer */}
      <footer
        className={`border-t py-6 text-center text-xs transition-colors ${
          isDark
            ? 'bg-slate-900 border-slate-800/80 text-slate-500'
            : 'bg-white border-slate-200 text-slate-600 shadow-sm'
        }`}
      >
        <p>IELTS Speaking Assistant Coach • Band 7.0 Native Strategy & Collocations • Powered by Gemini AI</p>
      </footer>
    </div>
  );
}
