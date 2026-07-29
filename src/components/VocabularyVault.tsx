import React, { useState } from 'react';
import { Volume2, Search, BookOpen, Sparkles, RotateCw } from 'lucide-react';
import { VAULT_TOPIC_VOCABULARY, VaultVocabItem } from '../data/vaultVocabulary';

interface VocabularyVaultProps {
  theme?: 'dark' | 'light';
}

export const VocabularyVault: React.FC<VocabularyVaultProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState('All');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('All');
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Extract all unique topics and sort alphabetically
  const uniqueTopics = Array.from(new Set(VAULT_TOPIC_VOCABULARY.map((item) => item.topic))).sort((a, b) =>
    a.localeCompare(b)
  );
  const topics = ['All', ...uniqueTopics];
  const types = ['All', 'collocation', 'phrasal verb', 'idiom', 'verb', 'noun'];

  const filteredVocab = VAULT_TOPIC_VOCABULARY.filter((item: VaultVocabItem) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopicFilter === 'All' || item.topic === selectedTopicFilter;
    const matchesType = selectedTypeFilter === 'All' || item.type === selectedTypeFilter;
    return matchesSearch && matchesTopic && matchesType;
  });

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const currentFlashcard = filteredVocab[flashcardIndex] || filteredVocab[0];

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
            <BookOpen className="w-5 h-5 text-cyan-500" />
            Kho Từ Vựng & Collocations Band 7.0+ ({VAULT_TOPIC_VOCABULARY.length} cụm từ)
          </h2>
          <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Tổng hợp collocations, phrasal verbs & idioms phân theo {uniqueTopics.length} chủ đề IELTS Speaking
          </p>
        </div>

        <button
          onClick={() => {
            setFlashcardMode(!flashcardMode);
            setIsFlipped(false);
          }}
          className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all flex items-center gap-2 ${
            flashcardMode
              ? 'bg-cyan-600 text-white border-cyan-400 shadow-md shadow-cyan-600/30'
              : isDark
                ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>{flashcardMode ? 'Tắt Chế Độ Flashcard' : 'Luyện Flashcard'}</span>
        </button>
      </div>

      {/* Flashcard Interactive View */}
      {flashcardMode && currentFlashcard && (
        <div className={`border rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6 relative min-h-[260px] ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className={`text-xs font-mono px-3 py-1 rounded-full border ${
            isDark
              ? 'bg-slate-800 text-cyan-300 border-slate-700'
              : 'bg-white text-cyan-700 border-slate-300 shadow-2xs'
          }`}>
            Thẻ {flashcardIndex + 1} / {filteredVocab.length} - [{currentFlashcard.topic}]
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`w-full max-w-lg p-6 border rounded-2xl cursor-pointer transition-all shadow-xl ${
              isDark
                ? 'bg-slate-900 border-slate-700 hover:border-cyan-500/50'
                : 'bg-white border-slate-300 hover:border-cyan-500'
            }`}
          >
            {!isFlipped ? (
              <div className="space-y-3">
                <span className={`text-[10px] uppercase font-bold ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                }`}>Mặt trước (Tiếng Anh):</span>
                <h3 className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-300">{currentFlashcard.term}</h3>
                <p className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>({currentFlashcard.pronunciation})</p>
                <p className={`text-xs italic pt-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Ấn vào thẻ để lật xem nghĩa tiếng Việt</p>
              </div>
            ) : (
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold text-amber-600">Mặt sau (Nghĩa & Ví dụ):</span>
                <h3 className="text-lg font-bold text-amber-700 dark:text-amber-300">{currentFlashcard.definition}</h3>
                <div className={`p-3 rounded-xl border text-xs italic ${
                  isDark
                    ? 'bg-slate-950 border-slate-800 text-slate-200'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}>
                  "{currentFlashcard.example}"
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => speakText(currentFlashcard.term)}
              className={`px-3 py-2 text-xs font-bold rounded-xl border flex items-center gap-1.5 ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-2xs'
              }`}
            >
              <Volume2 className="w-4 h-4 text-emerald-500" /> Nghe đọc
            </button>

            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev + 1) % filteredVocab.length);
              }}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5"
            >
              <RotateCw className="w-3.5 h-3.5" /> Thẻ tiếp theo
            </button>
          </div>
        </div>
      )}

      {/* Filters Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Search input */}
        <div className="relative">
          <Search className={`w-4 h-4 absolute left-3.5 top-3 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm cụm từ, nghĩa hoặc chủ đề..."
            className={`w-full rounded-xl pl-10 pr-4 py-2 text-xs border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
              isDark
                ? 'bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500'
                : 'bg-slate-100 border-slate-300 text-slate-800 placeholder:text-slate-400'
            }`}
          />
        </div>

        {/* Topic Filter */}
        <select
          value={selectedTopicFilter}
          onChange={(e) => setSelectedTopicFilter(e.target.value)}
          className={`rounded-xl px-3 py-2 text-xs border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            isDark
              ? 'bg-slate-800 border-slate-700 text-slate-200'
              : 'bg-white border-slate-300 text-slate-800 shadow-2xs'
          }`}
        >
          {topics.map((t) => (
            <option key={t} value={t}>Chủ đề: {t}</option>
          ))}
        </select>

        {/* Type Filter */}
        <select
          value={selectedTypeFilter}
          onChange={(e) => setSelectedTypeFilter(e.target.value)}
          className={`rounded-xl px-3 py-2 text-xs border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            isDark
              ? 'bg-slate-800 border-slate-700 text-slate-200'
              : 'bg-white border-slate-300 text-slate-800 shadow-2xs'
          }`}
        >
          {types.map((tp) => (
            <option key={tp} value={tp}>Loại từ: {tp}</option>
          ))}
        </select>
      </div>

      {/* Vocabulary List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
        {filteredVocab.length === 0 ? (
          <div className={`col-span-2 text-center py-10 text-xs ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Không tìm thấy từ vựng nào phù hợp với bộ lọc hiện tại.
          </div>
        ) : (
          filteredVocab.map((item, idx) => (
            <div
              key={idx}
              className={`border rounded-xl p-4 space-y-2 transition-all shadow-2xs ${
                isDark
                  ? 'bg-slate-800/60 border-slate-700/80 hover:border-cyan-500/50'
                  : 'bg-slate-50 border-slate-200 hover:border-cyan-400'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-sm text-cyan-600 dark:text-cyan-300">{item.term}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isDark ? 'bg-slate-700/90 text-slate-300' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {item.type}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 border rounded-full ${
                    isDark
                      ? 'bg-indigo-900/60 text-indigo-300 border-indigo-700/50'
                      : 'bg-indigo-100 text-indigo-800 border-indigo-200'
                  }`}>
                    {item.topic}
                  </span>
                </div>

                <button
                  onClick={() => speakText(item.term)}
                  className={`p-1.5 rounded-lg transition-all shrink-0 border ${
                    isDark
                      ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                  title="Nghe phát âm"
                >
                  <Volume2 className="w-3.5 h-3.5 text-emerald-500" />
                </button>
              </div>

              <p className={`text-xs font-medium ${
                isDark ? 'text-amber-300' : 'text-amber-800'
              }`}>
                → {item.definition} <span className={`font-mono text-[11px] ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>({item.pronunciation})</span>
              </p>

              <p className={`text-xs p-2.5 rounded-lg border italic ${
                isDark
                  ? 'text-slate-300 bg-slate-950/70 border-slate-800/80'
                  : 'text-slate-700 bg-white border-slate-200'
              }`}>
                "{item.example}"
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

