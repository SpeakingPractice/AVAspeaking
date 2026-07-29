import React, { useState, useEffect } from 'react';
import { Key, ExternalLink, Eye, EyeOff, Check, X, ShieldCheck, Sparkles } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  userApiKey: string;
  onSaveApiKey: (key: string) => void;
  theme?: 'dark' | 'light';
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  userApiKey,
  onSaveApiKey,
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';
  const [inputKey, setInputKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setInputKey(userApiKey);
  }, [userApiKey, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveApiKey(inputKey.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleClear = () => {
    setInputKey('');
    onSaveApiKey('');
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const hasCustomKey = Boolean(userApiKey.trim());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className={`w-full max-w-lg rounded-2xl border p-6 shadow-2xl transition-all relative ${
          isDark
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors ${
            isDark
              ? 'text-slate-400 hover:text-white hover:bg-slate-800'
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Cấu Hình Gemini API Key Cá Nhân
            </h3>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Sử dụng Quota cá nhân để tránh gặp hạn chế lượt gọi API
            </p>
          </div>
        </div>

        {/* Current Key Status Badge */}
        <div className="mb-4">
          {hasCustomKey ? (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Đang sử dụng API Key cá nhân của bạn. Quota cá nhân được ưu tiên.</span>
            </div>
          ) : (
            <div className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-medium ${
              isDark
                ? 'bg-slate-800/80 border-slate-700/80 text-slate-300'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Đang sử dụng Quota API Key mặc định của hệ thống.</span>
            </div>
          )}
        </div>

        {/* Guide / Instruction */}
        <div className={`p-3.5 rounded-xl border text-xs mb-5 space-y-2 ${
          isDark ? 'bg-indigo-950/30 border-indigo-900/50 text-slate-300' : 'bg-indigo-50 border-indigo-100 text-slate-700'
        }`}>
          <p className="font-semibold text-indigo-600 dark:text-indigo-400">
            💡 Cách lấy Gemini API Key miễn phí (mất chưa tới 30 giây):
          </p>
          <ol className="list-decimal list-inside space-y-1 text-[11px] leading-relaxed">
            <li>Truy cập Google AI Studio: <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline inline-flex items-center gap-0.5 font-bold"
            >
              aistudio.google.com/app/apikey <ExternalLink className="w-3 h-3" />
            </a></li>
            <li>Bấm <strong>"Create API key"</strong> và dán mã key nhận được vào ô dưới đây.</li>
            <li>API Key được lưu an toàn trên trình duyệt của bạn (localStorage).</li>
          </ol>
        </div>

        {/* Input Field */}
        <div className="space-y-2 mb-6">
          <label className={`text-xs font-semibold block ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Gemini API Key của bạn (bắt đầu bằng AIzaSy...):
          </label>
          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              placeholder="Dán mã AIzaSy... vào đây"
              className={`w-full rounded-xl pl-4 pr-11 py-2.5 text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isDark
                  ? 'bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowKey(!showKey)}
              className={`absolute right-3 top-2.5 p-1 rounded-md text-slate-400 hover:text-slate-200 transition-colors`}
              title={showKey ? 'Ẩn Key' : 'Hiện Key'}
            >
              {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Success message */}
        {savedSuccess && (
          <div className="mb-4 p-2.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
            <Check className="w-4 h-4" />
            <span>Đã lưu cài đặt thành công!</span>
          </div>
        )}

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-2 border-t border-slate-800/60">
          {hasCustomKey && (
            <button
              type="button"
              onClick={handleClear}
              className={`w-full sm:w-auto px-4 py-2 text-xs font-medium rounded-xl border transition-colors ${
                isDark
                  ? 'bg-rose-500/10 text-rose-400 border-rose-500/30 hover:bg-rose-500/20'
                  : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
              }`}
            >
              Xóa Key Cá Nhân (Về Mặc Định)
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className={`w-full sm:w-auto px-4 py-2 text-xs font-medium rounded-xl border transition-colors ${
              isDark
                ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
            }`}
          >
            Hủy
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="w-full sm:w-auto px-5 py-2 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-1.5 transition-all"
          >
            <Check className="w-4 h-4" />
            <span>Lưu API Key</span>
          </button>
        </div>
      </div>
    </div>
  );
};
