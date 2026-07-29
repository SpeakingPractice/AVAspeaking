import React from 'react';
import { Sparkles, BookOpen, History, Award, Sun, Moon, Key } from 'lucide-react';

interface HeaderProps {
  activeTab: 'generator' | 'vocabulary' | 'history';
  setActiveTab: (tab: 'generator' | 'vocabulary' | 'history') => void;
  savedCount: number;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  userApiKey?: string;
  onOpenApiKeyModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  theme,
  onToggleTheme,
  userApiKey = '',
  onOpenApiKeyModal,
}) => {
  const isDark = theme === 'dark';
  const hasCustomKey = Boolean(userApiKey.trim());

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
      isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-800 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3.5 gap-3">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  IELTS Speaking Coach
                </h1>
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full flex items-center gap-1 border ${
                  isDark
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    : 'bg-emerald-100 text-emerald-700 border-emerald-300'
                }`}>
                  <Award className="w-3 h-3" /> Band 7.0 Target
                </span>
              </div>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Gia sư bản ngữ phân tích Part & Dạng câu hỏi chuẩn tư duy IELTS
              </p>
            </div>
          </div>

          {/* Navigation Tabs & Right Buttons */}
          <div className="flex items-center justify-between md:justify-end gap-2.5">
            <nav className={`flex items-center space-x-1 p-1 rounded-xl border overflow-x-auto scrollbar-none ${
              isDark ? 'bg-slate-800/80 border-slate-700/60' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setActiveTab('generator')}
                className={`flex items-center space-x-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'generator'
                    ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Phân Tích & Ý Tưởng</span>
              </button>

              <button
                onClick={() => setActiveTab('vocabulary')}
                className={`flex items-center space-x-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeTab === 'vocabulary'
                    ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                <BookOpen className="w-4 h-4 text-cyan-300" />
                <span>Từ Vựng Band 7.0</span>
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className={`flex items-center space-x-2 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap relative ${
                  activeTab === 'history'
                    ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                <History className="w-4 h-4 text-purple-300" />
                <span>Lịch Sử Bài Học</span>
                {savedCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold bg-indigo-500 text-white rounded-full">
                    {savedCount}
                  </span>
                )}
              </button>
            </nav>

            {/* Custom API Key Button */}
            <button
              onClick={onOpenApiKeyModal}
              title={hasCustomKey ? 'Đang dùng Gemini API Key cá nhân' : 'Nhập Gemini API Key cá nhân (Miễn phí)'}
              className={`p-2 rounded-xl border transition-all flex items-center justify-center gap-1.5 text-xs font-semibold ${
                hasCustomKey
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                  : isDark
                    ? 'bg-slate-800 hover:bg-slate-700 text-indigo-300 border-slate-700'
                    : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200 shadow-sm'
              }`}
            >
              <Key className="w-4 h-4" />
              <span className="hidden sm:inline">
                {hasCustomKey ? 'Key Cá Nhân' : 'API Key'}
              </span>
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={onToggleTheme}
              title={isDark ? 'Chuyển sang Chế độ Sáng' : 'Chuyển sang Chế độ Tối'}
              className={`p-2 rounded-xl border transition-all flex items-center justify-center gap-1.5 text-xs font-semibold ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 shadow-sm'
              }`}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-300" />
                  <span className="hidden sm:inline">Sáng</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-600" />
                  <span className="hidden sm:inline">Tối</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


