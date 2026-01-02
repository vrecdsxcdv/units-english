/**
 * Task Schema v2 - Improved task format with CEFR/IELTS alignment
 */

import type { CEFRLevel } from './skills';

// IELTS band mapping (0-9, we use 1-9 practical range)
export type IELTSBand = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// 10-dimensional skill vector keys
export type SkillKey =
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'listening'
  | 'speaking'
  | 'slang'
  | 'word_formation'
  | 'fluency'
  | 'writing'
  | 'comprehension';

// Task types
export type TaskType =
  | 'multiple_choice'      // Выбор из вариантов
  | 'fill_blanks'          // Заполнение пропусков
  | 'match_pairs'          // Сопоставление пар
  | 'reorder'              // Восстановление порядка
  | 'error_correction'     // Исправление ошибок
  | 'translation'          // Перевод
  | 'free_response'        // Свободный ответ
  | 'dialogue_completion'  // Завершение диалога
  | 'listening_comprehension' // Понимание на слух
  | 'situation_response';  // Ответ на ситуацию

// Scoring method
export type ScoringMethod =
  | 'exact'           // Точное совпадение
  | 'semantic'        // Семантическое сходство (AI оценка)
  | 'rubric'          // По рубрике (несколько критериев)
  | 'partial';        // Частичный балл

// Feedback tone
export type FeedbackTone =
  | 'encouraging'     // Поддерживающий (для начинающих)
  | 'neutral'         // Нейтральный
  | 'challenging';    // Вызывающий (для продвинутых)

// Skill weight in task (how much this task tests each skill)
export interface SkillWeights {
  grammar?: number;        // 0-1
  vocabulary?: number;
  pronunciation?: number;
  listening?: number;
  speaking?: number;
  slang?: number;
  word_formation?: number;
  fluency?: number;
  writing?: number;
  comprehension?: number;
}

// Expected answer format
export interface ExpectedAnswerSchema {
  type: 'string' | 'array' | 'object' | 'number';
  format?: 'exact' | 'contains' | 'regex' | 'semantic';
  pattern?: string;           // Regex pattern if format is 'regex'
  acceptableVariants?: string[]; // Alternative correct answers
  caseSensitive?: boolean;
  minLength?: number;
  maxLength?: number;
}

// Scoring rubric item
export interface RubricItem {
  criterion: string;          // e.g., "Grammar accuracy"
  skillKey: SkillKey;         // Which skill this measures
  maxPoints: number;          // Maximum points for this criterion
  levels: {
    points: number;
    description: string;      // What earns these points
  }[];
}

// Retry/hint policy
export interface RetryPolicy {
  maxAttempts: number;        // How many tries allowed
  hintsAvailable: boolean;    // Can user request hints
  hintPenalty: number;        // Score reduction per hint (0-1)
  hints: string[];            // Progressive hints
}

// Spaced repetition metadata
export interface SpacedRepetitionMeta {
  conceptKey: string;         // Unique key for this concept (e.g., "past_simple_regular")
  relatedConcepts: string[];  // Related concepts to reinforce
  prerequisiteConcepts: string[]; // What should be known before
}

// Main Task v2 interface
export interface TaskV2 {
  // Identity
  id: string;                 // UUID
  slug: string;               // Human-readable ID (e.g., "a1-greeting-001")
  version: '2.0';             // Schema version

  // Level targeting
  level: {
    cefr: CEFRLevel;
    ieltsBandMin: IELTSBand;
    ieltsBandMax: IELTSBand;
  };

  // Task classification
  type: TaskType;
  difficulty: number;         // 0-1 (normalized)
  estimatedMinutes: number;   // Expected time to complete

  // Skills
  targetSkills: SkillKey[];   // Primary skills tested (1-3)
  skillWeights: SkillWeights; // How much each skill is tested (should sum to 1)

  // Content
  content: {
    instruction: string;      // What to do (in Russian)
    context?: string;         // Situation/background (optional)
    question: string;         // The actual question/prompt

    // Type-specific inputs
    options?: string[];       // For multiple_choice
    blanks?: number;          // For fill_blanks (number of blanks)
    pairs?: { left: string; right: string }[]; // For match_pairs
    items?: string[];         // For reorder
    text?: string;            // For error_correction
    audioScript?: string;     // For listening (TTS will generate)
    dialogue?: { speaker: string; text: string }[]; // For dialogue_completion
  };

  // Answer validation
  expectedAnswer: {
    correct: string | string[] | Record<string, string>; // The correct answer(s)
    schema: ExpectedAnswerSchema;
    explanation: string;      // Why this is correct (shown after)
  };

  // Scoring
  scoring: {
    method: ScoringMethod;
    rubric?: RubricItem[];    // For rubric scoring
    partialCreditRules?: {    // For partial scoring
      rule: string;
      creditPercent: number;
    }[];
  };

  // UX
  feedbackTone: FeedbackTone;
  retryPolicy: RetryPolicy;

  // Categorization
  tags: {
    topics: string[];         // e.g., ['travel', 'airport', 'greetings']
    interests: string[];      // Matched to user interests
    grammarPoints?: string[]; // e.g., ['past_simple', 'articles']
    vocabThemes?: string[];   // e.g., ['food', 'technology']
  };

  // Spaced repetition
  spacedRepetition: SpacedRepetitionMeta;

  // Metadata
  createdAt: string;          // ISO timestamp
  generatedBy: 'template' | 'ai' | 'human';
  templateId?: string;        // If generated from template
}

// CEFR to IELTS mapping
export const CEFR_TO_IELTS: Record<CEFRLevel, { min: IELTSBand; max: IELTSBand }> = {
  A1: { min: 1, max: 2 },
  A2: { min: 3, max: 3 },
  B1: { min: 4, max: 5 },
  B2: { min: 5, max: 6 },
  C1: { min: 7, max: 8 },
  C2: { min: 8, max: 9 },
};

// Skill to CEFR descriptors (what each level means for each skill)
export const SKILL_CEFR_DESCRIPTORS: Record<SkillKey, Record<CEFRLevel, string>> = {
  grammar: {
    A1: 'Простые структуры: to be, present simple, единственное/множественное',
    A2: 'Past simple, future (will/going to), сравнительные степени',
    B1: 'Present perfect, модальные глаголы, пассивный залог (простой)',
    B2: 'Условные предложения, reported speech, сложные времена',
    C1: 'Инверсия, эмфатические конструкции, нюансы модальных',
    C2: 'Все грамматические структуры на уровне носителя',
  },
  vocabulary: {
    A1: '500-1000 слов: базовые существительные, глаголы, прилагательные',
    A2: '1000-2000 слов: повседневные темы, простые фразовые глаголы',
    B1: '2000-4000 слов: абстрактные понятия, идиомы начального уровня',
    B2: '4000-6000 слов: профессиональная лексика, устойчивые выражения',
    C1: '6000-10000 слов: нюансы значений, редкие слова, сленг',
    C2: '10000+ слов: полный диапазон как у образованного носителя',
  },
  pronunciation: {
    A1: 'Отдельные звуки, базовая интонация вопросов/утверждений',
    A2: 'Связная речь в простых фразах, основные звуки',
    B1: 'Понятная речь с акцентом, правильное ударение в словах',
    B2: 'Четкая речь, правильная интонация, минимальные ошибки',
    C1: 'Естественный ритм, appropriate stress, легкий акцент допустим',
    C2: 'Неотличимо от носителя или очень близко',
  },
  listening: {
    A1: 'Отдельные слова, очень медленная четкая речь',
    A2: 'Простые фразы, медленная речь на знакомые темы',
    B1: 'Основная мысль в стандартной речи, радио/ТВ на знакомые темы',
    B2: 'Лекции, дискуссии, фильмы на стандартном языке',
    C1: 'Быстрая речь, имплицитные значения, специализированные темы',
    C2: 'Любая речь включая диалекты, сленг, быструю речь',
  },
  speaking: {
    A1: 'Заученные фразы, простые ответы на вопросы',
    A2: 'Простые описания, базовый разговор на знакомые темы',
    B1: 'Связные высказывания, выражение мнения, описание опыта',
    B2: 'Дискуссии, аргументация, гипотетические ситуации',
    C1: 'Спонтанная беглая речь, сложные темы, нюансы',
    C2: 'Полная свобода выражения как у носителя',
  },
  slang: {
    A1: 'Не применимо',
    A2: 'Базовые неформальные выражения (OK, cool)',
    B1: 'Распространенные идиомы и фразовые глаголы',
    B2: 'Сленг в контексте, понимание неформального регистра',
    C1: 'Активное использование сленга, понимание юмора',
    C2: 'Полное владение неформальным регистром',
  },
  word_formation: {
    A1: 'Базовые суффиксы (-er, -ing)',
    A2: 'Простые приставки и суффиксы (un-, -tion, -ly)',
    B1: 'Продуктивное словообразование, конверсия',
    B2: 'Сложные аффиксы, понимание незнакомых слов по частям',
    C1: 'Нюансы словообразования, латинские/греческие корни',
    C2: 'Создание неологизмов, игра слов',
  },
  fluency: {
    A1: 'Паузы для поиска слов, очень медленно',
    A2: 'Короткие высказывания с паузами',
    B1: 'Поддержание разговора с заметными паузами',
    B2: 'Достаточно беглая речь, редкие паузы для сложных тем',
    C1: 'Беглая спонтанная речь, естественные паузы',
    C2: 'Полная беглость как у носителя',
  },
  writing: {
    A1: 'Заполнение форм, простые фразы',
    A2: 'Короткие записки, простые предложения',
    B1: 'Связный текст на знакомые темы, письма',
    B2: 'Эссе, отчеты, аргументированный текст',
    C1: 'Сложные тексты, стилистическое разнообразие',
    C2: 'Любой жанр на профессиональном уровне',
  },
  comprehension: {
    A1: 'Отдельные слова и простейшие фразы',
    A2: 'Короткие простые тексты, объявления',
    B1: 'Тексты на знакомые темы, личные письма',
    B2: 'Статьи, современная проза, специализированные тексты',
    C1: 'Сложные тексты, имплицитные значения',
    C2: 'Любой текст включая абстрактный и технический',
  },
};

// Convert skill vector (0-1) to CEFR level
export function skillToCEFR(value: number): CEFRLevel {
  if (value < 0.17) return 'A1';
  if (value < 0.33) return 'A2';
  if (value < 0.50) return 'B1';
  if (value < 0.67) return 'B2';
  if (value < 0.83) return 'C1';
  return 'C2';
}

// Convert skill vector (0-1) to IELTS band
export function skillToIELTS(value: number): IELTSBand {
  if (value < 0.11) return 1;
  if (value < 0.22) return 2;
  if (value < 0.33) return 3;
  if (value < 0.44) return 4;
  if (value < 0.56) return 5;
  if (value < 0.67) return 6;
  if (value < 0.78) return 7;
  if (value < 0.89) return 8;
  return 9;
}

// Calculate overall CEFR from skill vector
export function calculateOverallCEFR(skillVector: Record<SkillKey, number>): CEFRLevel {
  const values = Object.values(skillVector);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return skillToCEFR(avg);
}
