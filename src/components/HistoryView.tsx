import React, { useState } from 'react';
import { PracticeHistoryItem } from '../types';
import { BookmarkCheck, Trash2, Search, ExternalLink, Calendar, Award, Layers } from 'lucide-react';

interface HistoryViewProps {
  items: PracticeHistoryItem[];
  onSelectItem: (item: PracticeHistoryItem) => void;
  onDeleteItem: (id: string) => void;
  onClearAll: () => void;
  theme?: 'dark' | 'light';
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  items,
  onSelectItem,
  onDeleteItem,
  onClearAll,
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.coachResponse.questionType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFav = onlyFavorites ? item.isFavorite : true;
    return matchesSearch && matchesFav;
  });

  return (
    <div className={`border rounded-2xl p-6 shadow-xl space-y-6 transition-colors ${
      isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
    }`}>
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <h2 className={`text-lg font-bold flex items-center gap-2 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            <BookmarkCheck className="w-5 h-5 text-purple-500" />
            Lịch Sử & Bộ Sưu Tập Bài Học Đã Lưu ({items.length})
          </h2>
          <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Xem lại các câu hỏi, dàn ý triển khai & bộ từ vựng Band 7.0 đã lưu trước đây
          </p>
        </div>

        {items.length > 0 && (
          <button
            onClick={onClearAll}
            className={`text-xs flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${
              isDark
                ? 'text-rose-400 hover:text-rose-300 bg-rose-500/10 border-rose-500/20'
                : 'text-rose-700 hover:text-rose-900 bg-rose-50 border-rose-200'
            }`}
          >
            <Trash2 className="w-3.5 h-3.5" /> Xóa tất cả lịch sử
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className={`w-4 h-4 absolute left-3.5 top-3 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm câu hỏi đã lưu..."
            className={`w-full rounded-xl pl-10 pr-4 py-2 text-xs border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              isDark
                ? 'bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500'
                : 'bg-slate-100 border-slate-300 text-slate-800 placeholder:text-slate-400'
            }`}
          />
        </div>

        <button
          onClick={() => setOnlyFavorites(!onlyFavorites)}
          className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
            onlyFavorites
              ? isDark
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-amber-100 text-amber-800 border-amber-300'
              : isDark
                ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:text-slate-900'
          }`}
        >
          {onlyFavorites ? '★ Đang hiện Yêu thích' : 'Hiện Yêu thích'}
        </button>
      </div>

      {/* Items List */}
      {filteredItems.length === 0 ? (
        <div className={`p-12 text-center text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          Chưa có bài học nào trong lịch sử. Hãy tạo hoặc lưu bài học ở mục Phân Tích & Ý Tưởng!
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`p-4 border rounded-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isDark
                  ? 'bg-slate-800/60 border-slate-700/80 hover:border-purple-500/50'
                  : 'bg-slate-50 border-slate-200 hover:border-purple-300 shadow-2xs'
              }`}
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-0.5 font-bold text-[10px] rounded-full border ${
                    isDark
                      ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                      : 'bg-indigo-100 text-indigo-700 border-indigo-300'
                  }`}>
                    {item.part}
                  </span>
                  <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full border ${
                    isDark
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                      : 'bg-amber-100 text-amber-800 border-amber-300'
                  }`}>
                    Dạng: {item.coachResponse.questionType}
                  </span>
                  <span className={`text-[10px] flex items-center gap-1 ${
                    isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    <Calendar className="w-3 h-3" />
                    {new Date(item.timestamp).toLocaleDateString('vi-VN')}
                  </span>
                  {item.evaluation && (
                    <span className={`px-2 py-0.5 font-bold text-[10px] rounded-full flex items-center gap-1 border ${
                      isDark
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                        : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    }`}>
                      <Award className="w-3 h-3" />
                      Band {item.evaluation.overallBand.toFixed(1)}
                    </span>
                  )}
                </div>

                <h4 className={`text-sm font-bold leading-snug ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  "{item.question}"
                </h4>

                <p className={`text-xs line-clamp-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Từ vựng: {item.coachResponse.vocabulary.map((v) => v.term).slice(0, 4).join(', ')}...
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onSelectItem(item)}
                  className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Xem Chi Tiết
                </button>

                <button
                  onClick={() => onDeleteItem(item.id)}
                  className={`p-2 rounded-lg transition-all ${
                    isDark
                      ? 'text-slate-400 hover:text-rose-400 hover:bg-slate-700/60'
                      : 'text-slate-500 hover:text-rose-600 hover:bg-slate-200'
                  }`}
                  title="Xóa bài học này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
