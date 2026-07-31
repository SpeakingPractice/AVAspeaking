import React, { useState } from 'react';
import { IELTSPart, QuestionTypeOption } from '../types';
import { QUESTION_TYPES } from '../data/questionTypes';
import { TOPIC_PRESETS } from '../data/topics';
import {
  HelpCircle, Sparkles, Send, RefreshCw, BookOpen, Layers, MessageSquare, Compass, Utensils,
  Briefcase, Smartphone, Home, Smile, Palette, Repeat, Building, Car, Shirt, Gift, Film,
  Headphones, Laugh, Eye, Sun, Music, Users, Moon, Trees, Atom, Footprints, ShoppingBag,
  Mic, Share2, Trophy, GraduationCap, CheckSquare, Plane, Watch, Droplets, Globe, Search,
  GlassWater, Calendar, Coffee, Fish, Volume2, Keyboard
} from 'lucide-react';

interface QuestionInputSectionProps {
  onSubmitQuestion: (payload: {
    question: string;
    part: IELTSPart;
    questionTypeId?: string;
    customContext?: string;
  }) => void;
  isLoading: boolean;
  userAnswer: string;
  setUserAnswer: (val: string) => void;
  onEvaluateUserAnswer: () => void;
  isEvaluating: boolean;
  theme?: 'dark' | 'light';
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Home: <Home className="w-3.5 h-3.5 text-rose-400" />,
  Palette: <Palette className="w-3.5 h-3.5 text-pink-400" />,
  Repeat: <Repeat className="w-3.5 h-3.5 text-amber-400" />,
  Building: <Building className="w-3.5 h-3.5 text-blue-400" />,
  Car: <Car className="w-3.5 h-3.5 text-red-400" />,
  Shirt: <Shirt className="w-3.5 h-3.5 text-purple-400" />,
  Utensils: <Utensils className="w-3.5 h-3.5 text-amber-500" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5 text-yellow-400" />,
  Gift: <Gift className="w-3.5 h-3.5 text-rose-500" />,
  Film: <Film className="w-3.5 h-3.5 text-indigo-400" />,
  Headphones: <Headphones className="w-3.5 h-3.5 text-cyan-400" />,
  BookOpen: <BookOpen className="w-3.5 h-3.5 text-emerald-400" />,
  Smile: <Smile className="w-3.5 h-3.5 text-teal-400" />,
  Compass: <Compass className="w-3.5 h-3.5 text-emerald-500" />,
  Laugh: <Laugh className="w-3.5 h-3.5 text-yellow-500" />,
  Eye: <Eye className="w-3.5 h-3.5 text-sky-400" />,
  Sun: <Sun className="w-3.5 h-3.5 text-orange-400" />,
  Music: <Music className="w-3.5 h-3.5 text-violet-400" />,
  Users: <Users className="w-3.5 h-3.5 text-lime-400" />,
  Moon: <Moon className="w-3.5 h-3.5 text-indigo-300" />,
  Trees: <Trees className="w-3.5 h-3.5 text-green-500" />,
  Atom: <Atom className="w-3.5 h-3.5 text-cyan-500" />,
  Footprints: <Footprints className="w-3.5 h-3.5 text-amber-600" />,
  ShoppingBag: <ShoppingBag className="w-3.5 h-3.5 text-fuchsia-400" />,
  Mic: <Mic className="w-3.5 h-3.5 text-rose-400" />,
  Share2: <Share2 className="w-3.5 h-3.5 text-blue-500" />,
  Trophy: <Trophy className="w-3.5 h-3.5 text-amber-300" />,
  GraduationCap: <GraduationCap className="w-3.5 h-3.5 text-blue-300" />,
  Smartphone: <Smartphone className="w-3.5 h-3.5 text-purple-500" />,
  CheckSquare: <CheckSquare className="w-3.5 h-3.5 text-teal-300" />,
  Plane: <Plane className="w-3.5 h-3.5 text-sky-500" />,
  Watch: <Watch className="w-3.5 h-3.5 text-slate-300" />,
  Droplets: <Droplets className="w-3.5 h-3.5 text-blue-400" />,
  Globe: <Globe className="w-3.5 h-3.5 text-emerald-400" />,
  Briefcase: <Briefcase className="w-3.5 h-3.5 text-blue-500" />,
  GlassWater: <GlassWater className="w-3.5 h-3.5 text-pink-400" />,
  Calendar: <Calendar className="w-3.5 h-3.5 text-amber-400" />,
  Coffee: <Coffee className="w-3.5 h-3.5 text-amber-600" />,
  Fish: <Fish className="w-3.5 h-3.5 text-cyan-400" />,
  Volume2: <Volume2 className="w-3.5 h-3.5 text-indigo-400" />,
  Keyboard: <Keyboard className="w-3.5 h-3.5 text-purple-400" />
};

export const QuestionInputSection: React.FC<QuestionInputSectionProps> = ({
  onSubmitQuestion,
  isLoading,
  userAnswer,
  setUserAnswer,
  onEvaluateUserAnswer,
  isEvaluating,
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';
  const [selectedPart, setSelectedPart] = useState<IELTSPart>('auto');
  const [selectedTypeId, setSelectedTypeId] = useState<string>('');
  const [questionText, setQuestionText] = useState<string>('Do you like cooking?');
  const [customContext, setCustomContext] = useState<string>('');
  const [activePresetTopic, setActivePresetTopic] = useState<string>('accommodation');
  const [showUserAnswerField, setShowUserAnswerField] = useState<boolean>(false);
  const [topicSearchTerm, setTopicSearchTerm] = useState<string>('');

  // Filter question types based on selected Part
  const filteredQuestionTypes = QUESTION_TYPES.filter((qt) => {
    if (selectedPart === 'auto') return true;
    return qt.part === selectedPart;
  });

  const selectedTopicData = TOPIC_PRESETS.find((t) => t.id === activePresetTopic) || TOPIC_PRESETS[0];

  const filteredTopics = TOPIC_PRESETS.filter((t) => {
    if (!topicSearchTerm.trim()) return true;
    const term = topicSearchTerm.toLowerCase();
    return t.topicName.toLowerCase().includes(term) || t.topicVi.toLowerCase().includes(term);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    onSubmitQuestion({
      question: questionText.trim(),
      part: selectedPart,
      questionTypeId: selectedTypeId,
      customContext: customContext.trim(),
    });
  };

  const handleSelectQuestion = (q: string, part: IELTSPart) => {
    setQuestionText(q);
    setSelectedPart(part);
  };

  const handleSelectCueCard = (title: string, bullets: string[]) => {
    const fullCueCard = `${title}\nYou should say:\n- ${bullets.join('\n- ')}`;
    setQuestionText(fullCueCard);
    setSelectedPart('part2');
    setSelectedTypeId('cue_card');
  };

  return (
    <div className={`border rounded-2xl p-6 shadow-xl transition-colors ${
      isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
    }`}>
      <div className={`flex items-center justify-between mb-6 pb-4 border-b ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <h2 className={`text-lg font-bold flex items-center gap-2 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            <Layers className="w-5 h-5 text-indigo-500" />
            Nhập Đề Bài hoặc Chọn Chủ Đề Mẫu
          </h2>
          <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Chọn Part và Dạng câu hỏi để AI Coach xây dựng dàn ý, từ vựng Band 7.0 & câu trả lời chuẩn.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const randomTopic = TOPIC_PRESETS[Math.floor(Math.random() * TOPIC_PRESETS.length)];
            setActivePresetTopic(randomTopic.id);
            const q = randomTopic.part1Questions[Math.floor(Math.random() * randomTopic.part1Questions.length)];
            setQuestionText(q);
            setSelectedPart('part1');
          }}
          className={`text-xs font-medium flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all ${
            isDark
              ? 'text-indigo-300 hover:text-white bg-indigo-500/10 border-indigo-500/20'
              : 'text-indigo-700 hover:text-indigo-900 bg-indigo-50 border-indigo-200'
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" /> Đổi câu hỏi ngẫu nhiên
        </button>
      </div>

      {/* Topic Presets Bar */}
      <div className="mb-6 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label className={`text-xs font-semibold uppercase tracking-wider ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Chủ đề IELTS Speaking (A-Z - {TOPIC_PRESETS.length} chủ đề):
          </label>
          <div className="relative w-full sm:w-64">
            <Search className={`w-3.5 h-3.5 absolute left-3 top-2.5 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`} />
            <input
              type="text"
              value={topicSearchTerm}
              onChange={(e) => setTopicSearchTerm(e.target.value)}
              placeholder="Tìm nhanh chủ đề (ví dụ: park, music)..."
              className={`w-full rounded-lg pl-8 pr-3 py-1 text-xs border focus:outline-none focus:ring-1 focus:ring-indigo-500 ${
                isDark
                  ? 'bg-slate-800/90 border-slate-700/80 text-slate-200'
                  : 'bg-slate-100 border-slate-300 text-slate-800'
              }`}
            />
          </div>
        </div>

        <div className={`flex flex-wrap gap-2 max-h-52 overflow-y-auto pr-1 p-1.5 border rounded-xl ${
          isDark
            ? 'bg-slate-950/40 border-slate-800/80'
            : 'bg-slate-50 border-slate-200'
        }`}>
          {filteredTopics.length === 0 ? (
            <div className={`p-4 text-xs text-center w-full ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Không tìm thấy chủ đề nào khớp với "{topicSearchTerm}"
            </div>
          ) : (
            filteredTopics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActivePresetTopic(topic.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border transition-all ${
                  activePresetTopic === topic.id
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30 font-semibold'
                    : isDark
                      ? 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-700 hover:text-white'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900 shadow-2xs'
                }`}
              >
                {ICON_MAP[topic.icon] || <BookOpen className="w-3.5 h-3.5 text-indigo-500" />}
                <span>{topic.topicName} ({topic.topicVi})</span>
              </button>
            ))
          )}
        </div>

        {/* Selected Topic Question Chips */}
        {selectedTopicData && (
          <div className={`mt-3 p-3.5 rounded-xl border space-y-2 ${
            isDark
              ? 'bg-slate-800/50 border-slate-700/50'
              : 'bg-indigo-50/60 border-indigo-100'
          }`}>
            <div className={`text-xs font-medium flex items-center gap-2 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <Compass className="w-3.5 h-3.5 text-indigo-500" />
              Gợi ý câu hỏi chủ đề <span className="text-indigo-600 font-bold dark:text-indigo-300">{selectedTopicData.topicVi}</span>:
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {/* Part 1 */}
              {selectedTopicData.part1Questions.slice(0, 2).map((q, idx) => (
                <button
                  key={`p1-${idx}`}
                  type="button"
                  onClick={() => handleSelectQuestion(q, 'part1')}
                  className={`px-2.5 py-1 text-xs border rounded-lg transition-all text-left ${
                    isDark
                      ? 'bg-slate-900/80 text-slate-200 border-slate-700/80 hover:border-indigo-500 hover:text-indigo-300'
                      : 'bg-white text-slate-800 border-slate-300 hover:border-indigo-500 hover:text-indigo-700 shadow-2xs'
                  }`}
                >
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 mr-1">Part 1:</span> {q}
                </button>
              ))}

              {/* Part 2 */}
              {selectedTopicData.part2CueCards.slice(0, 1).map((cc, idx) => (
                <button
                  key={`p2-${idx}`}
                  type="button"
                  onClick={() => handleSelectCueCard(cc.title, cc.bulletPoints)}
                  className={`px-2.5 py-1 text-xs border rounded-lg transition-all text-left ${
                    isDark
                      ? 'bg-slate-900/80 text-slate-200 border-slate-700/80 hover:border-indigo-500 hover:text-indigo-300'
                      : 'bg-white text-slate-800 border-slate-300 hover:border-indigo-500 hover:text-indigo-700 shadow-2xs'
                  }`}
                >
                  <span className="font-semibold text-purple-600 dark:text-purple-400 mr-1">Part 2:</span> {cc.title}
                </button>
              ))}

              {/* Part 3 */}
              {selectedTopicData.part3Questions.slice(0, 2).map((q, idx) => (
                <button
                  key={`p3-${idx}`}
                  type="button"
                  onClick={() => handleSelectQuestion(q, 'part3')}
                  className={`px-2.5 py-1 text-xs border rounded-lg transition-all text-left ${
                    isDark
                      ? 'bg-slate-900/80 text-slate-200 border-slate-700/80 hover:border-indigo-500 hover:text-indigo-300'
                      : 'bg-white text-slate-800 border-slate-300 hover:border-indigo-500 hover:text-indigo-700 shadow-2xs'
                  }`}
                >
                  <span className="font-semibold text-amber-600 dark:text-amber-400 mr-1">Part 3:</span> {q}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Part Selection */}
        <div>
          <label className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            1. Chọn IELTS Part:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'auto', label: 'Tự động nhận diện', desc: 'AI tự đoán Part' },
              { id: 'part1', label: 'Part 1', desc: 'Câu hỏi cá nhân ngắn' },
              { id: 'part2', label: 'Part 2', desc: 'Cue Card (1-2 phút)' },
              { id: 'part3', label: 'Part 3', desc: 'Thảo luận xã hội' },
            ].map((part) => (
              <button
                key={part.id}
                type="button"
                onClick={() => setSelectedPart(part.id as IELTSPart)}
                className={`p-3 text-left rounded-xl border transition-all ${
                  selectedPart === part.id
                    ? isDark
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-sm ring-1 ring-indigo-500'
                      : 'bg-indigo-50 border-indigo-500 text-indigo-950 ring-1 ring-indigo-500 font-semibold'
                    : isDark
                      ? 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className={`font-semibold text-xs ${
                  selectedPart === part.id
                    ? 'text-indigo-600 dark:text-indigo-300'
                    : isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {part.label}
                </div>
                <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {part.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Question Type Selector */}
        <div>
          <label className={`text-xs font-semibold uppercase tracking-wider mb-2 flex items-center justify-between ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <span>2. Chọn Dạng câu hỏi (Tùy chọn):</span>
            <span className={`text-[11px] normal-case ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Dạng câu hỏi xác định chiến lược triển khai
            </span>
          </label>
          <select
            value={selectedTypeId}
            onChange={(e) => setSelectedTypeId(e.target.value)}
            className={`w-full rounded-xl px-4 py-2.5 text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDark
                ? 'bg-slate-800 border-slate-700 text-slate-200'
                : 'bg-white border-slate-300 text-slate-800 shadow-2xs'
            }`}
          >
            <option value="">-- AI Tự động nhận diện Dạng câu hỏi --</option>
            {filteredQuestionTypes.map((qt) => (
              <option key={qt.id} value={qt.id}>
                [{qt.part.toUpperCase()}] {qt.label} - {qt.example}
              </option>
            ))}
          </select>
        </div>

        {/* Row 3: Main Question Input */}
        <div>
          <label className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            3. Câu hỏi hoặc Chủ đề cụ thể:
          </label>
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            rows={selectedPart === 'part2' ? 5 : 3}
            placeholder="Ví dụ: Do you like cooking? hoặc Describe a memorable journey..."
            className={`w-full rounded-xl p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans leading-relaxed ${
              isDark
                ? 'bg-slate-800/90 border-slate-700 text-slate-100 placeholder:text-slate-500'
                : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 shadow-2xs'
            }`}
            required
          />
        </div>

        {/* Custom requirements toggle */}
        <div className="pt-1">
          <div className={`flex items-center justify-between text-xs mb-2 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <span>Ghi chú hoặc Yêu cầu bổ sung (Tùy chọn):</span>
            <button
              type="button"
              onClick={() => setShowUserAnswerField(!showUserAnswerField)}
              className="text-indigo-500 hover:underline font-medium"
            >
              {showUserAnswerField ? 'Ẩn ghi chú' : '+ Thêm ghi chú/yêu cầu cho bài học'}
            </button>
          </div>

          {showUserAnswerField && (
            <div className={`p-4 rounded-xl border ${
              isDark
                ? 'bg-slate-800/40 border-slate-700/60'
                : 'bg-slate-50 border-slate-200'
            }`}>
              <label className={`text-xs font-medium block mb-1 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Yêu cầu thêm cho AI Coach (ví dụ: "Cho thêm câu hỏi follow-up", "Nhấn mạnh vào góc nhìn cá nhân"):
              </label>
              <input
                type="text"
                value={customContext}
                onChange={(e) => setCustomContext(e.target.value)}
                placeholder="Ghi chú thêm cho bài học..."
                className={`w-full rounded-lg px-3 py-2 text-xs border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-200'
                    : 'bg-white border-slate-300 text-slate-800'
                }`}
              />
            </div>
          )}
        </div>

        {/* Submit Main Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>AI Coach đang phân tích Dạng câu hỏi & Biên soạn Từ vựng...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Phân Tích Dạng Câu Hỏi & Lập Dàn Ý Band 7.0</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
