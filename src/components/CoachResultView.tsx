import React, { useState } from 'react';
import { CoachResponse, VocabularyItem } from '../types';
import {
  Volume2, Copy, Check, Bookmark, BookmarkCheck, Lightbulb, AlertTriangle,
  HelpCircle, Layers, Sparkles, BookOpen, Quote, FileText
} from 'lucide-react';
import { exportLessonToPDF } from '../utils/pdfExporter';

interface CoachResultViewProps {
  data: CoachResponse;
  question: string;
  onSaveToFavorites?: () => void;
  isSaved?: boolean;
  onSelectFollowUp?: (q: string) => void;
  theme?: 'dark' | 'light';
}

export const CoachResultView: React.FC<CoachResultViewProps> = ({
  data,
  question,
  onSaveToFavorites,
  isSaved = false,
  onSelectFollowUp,
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';
  const [copiedSample, setCopiedSample] = useState(false);
  const [speakingTerm, setSpeakingTerm] = useState<string | null>(null);
  const [speakingSample, setSpeakingSample] = useState(false);
  const [isExportingPDF, setIsExportingPDF] = useState(false);

  // Text-To-Speech handler using Web Speech API
  const speakText = (text: string, identifier: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn không hỗ trợ tính năng phát âm Text-to-Speech.');
      return;
    }

    window.speechSynthesis.cancel(); // Stop current speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for clear IELTS pronunciation

    if (identifier === 'sample') {
      setSpeakingSample(true);
      utterance.onend = () => setSpeakingSample(false);
      utterance.onerror = () => setSpeakingSample(false);
    } else {
      setSpeakingTerm(identifier);
      utterance.onend = () => setSpeakingTerm(null);
      utterance.onerror = () => setSpeakingTerm(null);
    }

    window.speechSynthesis.speak(utterance);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSample(true);
    setTimeout(() => setCopiedSample(false), 2000);
  };

  const handleExportPDF = async () => {
    setIsExportingPDF(true);
    try {
      await exportLessonToPDF(data, question);
    } catch (err) {
      console.error('Lỗi khi xuất PDF:', err);
      alert('Không thể tạo PDF. Vui lòng thử lại.');
    } finally {
      setIsExportingPDF(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Info Banner */}
      <div className={`border rounded-2xl p-6 shadow-xl relative overflow-hidden transition-colors ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 font-bold text-xs rounded-full flex items-center gap-1.5 border ${
              isDark
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                : 'bg-indigo-100 text-indigo-700 border-indigo-300'
            }`}>
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              {data.part}
            </span>
            <span className={`px-3 py-1 font-semibold text-xs rounded-full border ${
              isDark
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                : 'bg-amber-100 text-amber-800 border-amber-300'
            }`}>
              Dạng: {data.questionType}
            </span>
            <span className={`px-3 py-1 font-semibold text-xs rounded-full border ${
              isDark
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : 'bg-emerald-100 text-emerald-800 border-emerald-300'
            }`}>
              Mục tiêu Band 7.0+
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Export PDF Button */}
            <button
              onClick={handleExportPDF}
              disabled={isExportingPDF}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isDark
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400 shadow-sm'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-600 shadow-sm'
              }`}
              title="Xuất kế hoạch bài học & từ vựng dạng PDF"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>{isExportingPDF ? 'Đang tạo PDF...' : 'Xuất File PDF'}</span>
            </button>

            {onSaveToFavorites && (
              <button
                onClick={onSaveToFavorites}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isSaved
                    ? isDark
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-amber-100 text-amber-800 border-amber-300'
                    : isDark
                      ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                      : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {isSaved ? <BookmarkCheck className="w-4 h-4 text-amber-500" /> : <Bookmark className="w-4 h-4" />}
                <span>{isSaved ? 'Đã lưu' : 'Lưu bài học'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Question Title */}
        <div className="mt-4">
          <label className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Câu hỏi đang luyện:
          </label>
          <p className={`text-lg font-bold leading-snug whitespace-pre-line ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            "{question}"
          </p>
        </div>

        {/* Strategy Summary */}
        <div className={`mt-4 p-3.5 rounded-xl text-xs flex items-start gap-3 border ${
          isDark
            ? 'bg-indigo-950/40 border-indigo-800/50 text-indigo-200'
            : 'bg-indigo-50 border-indigo-200 text-indigo-950 font-medium'
        }`}>
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className={`font-bold block mb-0.5 ${
              isDark ? 'text-amber-300' : 'text-amber-800'
            }`}>
              Chiến Lược Trả Lời Cốt Lõi:
            </span>
            {data.questionStrategy}
          </div>
        </div>
      </div>

      {/* Grid: Structure & Content Ideas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Structure Outline */}
        <div className={`border rounded-2xl p-6 shadow-xl transition-colors ${
          isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <h3 className={`text-sm font-bold mb-3 flex items-center gap-2 pb-2 border-b ${
            isDark ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'
          }`}>
            <BookOpen className="w-4 h-4 text-indigo-500" />
            Cấu Trúc Triển Khai {data.part}
          </h3>
          <ul className="space-y-2.5 text-xs">
            {data.structureOutline.map((step, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700/50 text-slate-300'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 border ${
                  isDark
                    ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500/40'
                    : 'bg-indigo-100 text-indigo-700 border-indigo-300'
                }`}>
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideas Directions */}
        <div className={`border rounded-2xl p-6 shadow-xl transition-colors ${
          isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <h3 className={`text-sm font-bold mb-3 flex items-center gap-2 pb-2 border-b ${
            isDark ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'
          }`}>
            <Lightbulb className="w-4 h-4 text-amber-500" />
            Gợi Ý Hướng Ý Tưởng
          </h3>
          <ul className="space-y-2.5 text-xs">
            {data.ideas.map((idea, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                  isDark
                    ? 'bg-amber-950/20 border-amber-800/30 text-slate-200'
                    : 'bg-amber-50/80 border-amber-200 text-slate-800'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                <span className="leading-relaxed">{idea}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Band 7.0 Target Vocabulary List */}
      <div className={`border rounded-2xl p-6 shadow-xl transition-colors ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className={`flex items-center justify-between mb-4 pb-3 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div>
            <h3 className={`text-sm font-bold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <Sparkles className="w-4 h-4 text-emerald-500" />
              Từ Vựng & Collocations Mục Tiêu Band 7.0+
            </h3>
            <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Ưu tiên collocations & phrasal verbs tự nhiên, dễ áp dụng vào câu nói
            </p>
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${
            isDark
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : 'bg-emerald-100 text-emerald-800 border-emerald-300'
          }`}>
            {data.vocabulary.length} cụm từ
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.vocabulary.map((vocab, idx) => (
            <div
              key={idx}
              className={`border rounded-xl p-3.5 transition-all flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-sm ${
                      isDark ? 'text-emerald-300' : 'text-emerald-700'
                    }`}>
                      {vocab.term}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                      isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {vocab.type}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => speakText(vocab.term, vocab.term)}
                    className={`p-1.5 rounded-lg border transition-all ${
                      speakingTerm === vocab.term
                        ? 'bg-emerald-500 text-white border-emerald-400 animate-pulse'
                        : isDark
                          ? 'bg-slate-700 text-slate-300 hover:text-white hover:bg-slate-600 border-slate-600'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                    }`}
                    title="Nghe phát âm chuẩn"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className={`text-xs font-medium mb-1 ${
                  isDark ? 'text-amber-200' : 'text-amber-800'
                }`}>
                  → {vocab.definition}
                  {vocab.pronunciation && (
                    <span className={`ml-2 text-[11px] font-mono ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      ({vocab.pronunciation})
                    </span>
                  )}
                </p>
              </div>

              <div className={`mt-2 text-xs p-2 rounded-lg border italic ${
                isDark
                  ? 'text-slate-300 bg-slate-900/60 border-slate-800'
                  : 'text-slate-700 bg-white border-slate-200'
              }`}>
                "{vocab.example}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Sample Answer */}
      <div className={`border rounded-2xl p-6 shadow-xl relative transition-colors ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className={`flex items-center justify-between mb-4 pb-3 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-indigo-500" />
            <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Câu Trả Lời Mẫu Band 7.0 (Mô Phỏng Thi)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => speakText(data.sampleAnswer, 'sample')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                speakingSample
                  ? 'bg-indigo-600 text-white border-indigo-400 animate-pulse'
                  : isDark
                    ? 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-300'
              }`}
            >
              <Volume2 className="w-4 h-4 text-emerald-500" />
              <span>{speakingSample ? 'Đang đọc mẫu...' : 'Nghe Bài Mẫu'}</span>
            </button>

            <button
              onClick={() => copyToClipboard(data.sampleAnswer)}
              className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-xl text-xs font-medium transition-all ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border-slate-300'
              }`}
            >
              {copiedSample ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copiedSample ? 'Đã chép' : 'Sao chép'}</span>
            </button>
          </div>
        </div>

        <div className={`p-4 border rounded-xl text-sm leading-relaxed whitespace-pre-line font-sans ${
          isDark
            ? 'bg-slate-950/80 border-slate-800 text-slate-200'
            : 'bg-indigo-50/60 border-indigo-200 text-slate-900 font-medium'
        }`}>
          {data.sampleAnswer}
        </div>
      </div>

      {/* Common Vietnamese Mistakes Callout - HIGH CONTRAST IN BOTH LIGHT & DARK MODES */}
      {data.commonMistakes && data.commonMistakes.length > 0 && (
        <div className={`border rounded-2xl p-5 text-xs transition-colors ${
          isDark
            ? 'bg-rose-950/30 border-rose-900/50 text-rose-200'
            : 'bg-rose-50 border-rose-200 text-rose-950 shadow-sm'
        }`}>
          <h4 className={`font-bold text-sm mb-2 flex items-center gap-2 ${
            isDark ? 'text-rose-300' : 'text-rose-800'
          }`}>
            <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
            Lỗi Thường Gặp Của Người Việt Với Dạng Câu Hỏi Nhất Định:
          </h4>
          <ul className={`space-y-1.5 pl-6 list-disc leading-relaxed ${
            isDark ? 'text-rose-200/90' : 'text-rose-900 font-medium'
          }`}>
            {data.commonMistakes.map((mistake, idx) => (
              <li key={idx}>{mistake}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Follow-up practice questions */}
      {data.followUpQuestions && data.followUpQuestions.length > 0 && (
        <div className={`border rounded-2xl p-5 transition-colors ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            Câu Hỏi Mở Rộng / Follow-up Luyện Phản Xạ Tiếp Theo:
          </h4>
          <div className="space-y-2">
            {data.followUpQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => onSelectFollowUp?.(q)}
                className={`w-full text-left p-3 border rounded-xl text-xs flex items-center justify-between group transition-all ${
                  isDark
                    ? 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-200'
                    : 'bg-slate-50 hover:bg-indigo-50/70 border-slate-200 text-slate-800'
                }`}
              >
                <span>"{q}"</span>
                <span className="text-[11px] text-indigo-500 font-semibold group-hover:underline shrink-0 ml-2">
                  Luyện câu này →
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
