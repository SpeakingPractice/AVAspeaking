export type IELTSPart = 'part1' | 'part2' | 'part3' | 'auto';

export interface QuestionTypeOption {
  id: string;
  part: 'part1' | 'part2' | 'part3';
  label: string;
  labelVi: string;
  example: string;
  strategy: string;
}

export interface VocabularyItem {
  term: string;
  type: string; // e.g. "collocation", "phrasal verb", "idiomatic expression"
  definition: string;
  pronunciation?: string;
  example: string;
}

export interface CoachResponse {
  part: string; // "Part 1" | "Part 2" | "Part 3"
  questionType: string;
  questionStrategy: string;
  structureOutline: string[];
  ideas: string[];
  vocabulary: VocabularyItem[];
  sampleAnswer: string;
  commonMistakes: string[];
  followUpQuestions?: string[];
}

export interface EvaluationCriterion {
  score: number;
  feedback: string;
}

export interface EvaluationResult {
  overallBand: number;
  fluencyAndCoherence: EvaluationCriterion;
  lexicalResource: EvaluationCriterion;
  grammaticalRange: EvaluationCriterion;
  pronunciation: EvaluationCriterion;
  improvedAnswer: string;
  keyImprovements: string[];
  suggestedCollocations: string[];
}

export interface PracticeHistoryItem {
  id: string;
  timestamp: number;
  part: string;
  question: string;
  questionType?: string;
  userAnswer?: string;
  coachResponse: CoachResponse;
  evaluation?: EvaluationResult;
  isFavorite?: boolean;
}

export interface TopicPreset {
  id: string;
  topicName: string;
  topicVi: string;
  icon: string;
  part1Questions: string[];
  part2CueCards: {
    title: string;
    bulletPoints: string[];
  }[];
  part3Questions: string[];
}
