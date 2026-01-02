/**
 * Lesson Modal V3 Schema
 *
 * Complete JSON schema for AI-generated learning modals (3-7 pages).
 * This is the definitive schema for frontend rendering.
 */

import type { SkillType, CEFRLevel } from './skills';

// ============================================
// SCHEMA VERSION
// ============================================

export const LESSON_MODAL_SCHEMA_VERSION = '3.0';

// ============================================
// MAIN LESSON MODAL INTERFACE
// ============================================

/**
 * Complete lesson modal - UI-ready structure
 */
export interface LessonModalV3 {
  // Identity
  type: 'lesson_modal';
  schemaVersion: typeof LESSON_MODAL_SCHEMA_VERSION;
  lessonId: string;
  templateId: string;

  // Display
  title: string;           // English title (e.g., "Articles: A vs AN")
  titleRu: string;         // Russian title (e.g., "Артикли: A и AN")
  description: string;     // Brief description
  descriptionRu: string;

  // Learning context
  cefrLevel: CEFRLevel;
  targetSkills: SkillType[];
  difficulty: number;        // 1-10

  // IELTS relevance (optional)
  ielts?: {
    relevance: 'none' | 'low' | 'medium' | 'high';
    components?: ('listening' | 'reading' | 'writing' | 'speaking')[];
    bandTarget?: number;
    note?: string;           // e.g., "Важно для Writing Task 1"
  };

  // Content pages (3-7)
  pages: LessonPageV3[];

  // Timing
  estimatedMinutes: number;

  // Personalization
  personalizedFor: {
    userId: string;
    interests: string[];
    weakSkills: SkillType[];
    recentErrors: string[];
  };

  // Progress tracking (runtime state)
  progress: {
    currentPageIndex: number;
    completedPages: number[];
    totalScore: number;
    timeSpentSeconds: number;
    skillScores: Partial<Record<SkillType, number>>;
  };

  // Generation metadata
  generatedAt: string;
  generatedBy: 'ai' | 'template' | 'hybrid';
}

// ============================================
// PAGE TYPES
// ============================================

export type LessonPageType =
  | 'hook'        // Engaging intro (fact, situation, challenge)
  | 'theory'      // Main explanation with rule
  | 'examples'    // Multiple examples
  | 'check'       // Understanding check (1-3 questions)
  | 'practice'    // Exercises and drills (2-5 tasks)
  | 'mistakes'    // Common mistakes to avoid
  | 'summary'     // Wrap-up and next steps
  | 'ielts_bridge'; // Mini-IELTS section (optional, B1+)

/**
 * Single page in lesson modal
 */
export interface LessonPageV3 {
  pageIndex: number;
  pageId: string;
  type: LessonPageType;

  // Display
  title: string;
  titleRu: string;

  // Content blocks
  contentBlocks: ContentBlockV3[];

  // Interactive elements (for check/practice pages)
  interactions: InteractionV3[];

  // Hints for stuck users
  hints: string[];

  // Page-level settings
  settings: {
    canSkip: boolean;
    minScore: number;          // 0-100, required to pass
    allowRetry: boolean;
    maxRetries: number;
    showFeedback: boolean;
    showCorrectAnswers: boolean;
  };

  // Runtime state
  state: {
    completed: boolean;
    score: number;
    attemptCount: number;
    timeSpentSeconds: number;
  };
}

// ============================================
// CONTENT BLOCKS
// ============================================

export type ContentBlockType =
  | 'text'        // Plain text explanation
  | 'heading'     // Section heading
  | 'example'     // Example sentence with translation
  | 'rule'        // Grammar/usage rule box
  | 'comparison'  // Correct vs incorrect
  | 'tip'         // Helpful tip (lightbulb icon)
  | 'warning'     // Common mistake warning (warning icon)
  | 'table'       // Structured data
  | 'list'        // Bullet or numbered list
  | 'image'       // Image (optional)
  | 'audio';      // Audio content

export interface ContentBlockV3 {
  blockId: string;
  type: ContentBlockType;

  // Main content (always present)
  content: string;
  contentRu?: string;

  // === Type-specific fields ===

  // For 'example' type
  example?: {
    english: string;
    russian: string;
    highlight?: string;      // Word/phrase to highlight
    context?: string;        // Usage context
    audioUrl?: string;       // Pronunciation audio
  };

  // For 'rule' type
  rule?: {
    formula: string;         // e.g., "a + consonant sound"
    formulaRu: string;
    exceptions?: string[];
  };

  // For 'comparison' type
  comparison?: {
    items: Array<{
      label: string;
      correct: string;
      incorrect: string;
      explanation: string;
      explanationRu: string;
    }>;
  };

  // For 'table' type
  table?: {
    headers: string[];
    headersRu?: string[];
    rows: string[][];
  };

  // For 'list' type
  list?: {
    items: Array<{
      text: string;
      textRu?: string;
    }>;
    ordered: boolean;
  };

  // For 'tip' and 'warning' types
  icon?: 'info' | 'warning' | 'lightbulb' | 'star' | 'check' | 'x';

  // Styling hints
  style?: {
    emphasis?: 'normal' | 'highlight' | 'muted';
    size?: 'small' | 'medium' | 'large';
  };
}

// ============================================
// INTERACTIONS (Tasks)
// ============================================

export type InteractionType =
  | 'mcq'           // Multiple choice question
  | 'fill_blank'    // Fill in the blank(s)
  | 'input'         // Free text input
  | 'match'         // Match pairs
  | 'reorder'       // Reorder items
  | 'select_error'  // Select the error in sentence
  | 'speaking'      // Voice recording
  | 'listening'     // Listen and answer
  | 'writing';      // Short writing task

export interface InteractionV3 {
  interactionId: string;
  type: InteractionType;

  // Prompt (always in Russian for explanation)
  prompt: string;
  promptRu: string;

  // Content structure depends on type
  data: InteractionData;

  // Expected answer for auto-checking
  answer: {
    correct: string | string[] | number | number[];
    alternatives?: string[];
    caseSensitive?: boolean;
    partialCredit?: boolean;
  };

  // Metadata
  targetSkills: SkillType[];
  difficulty: number;        // 1-10
  points: number;            // Points for this task

  // Hints (shown progressively)
  hints: string[];

  // Feedback templates
  feedback: {
    correct: string;
    incorrect: string;
    partial?: string;
  };

  // Runtime state
  state: {
    attempted: boolean;
    userAnswer?: unknown;
    score: number;
    hintsUsed: number;
    feedbackShown?: string;
  };
}

// ============================================
// INTERACTION DATA TYPES
// ============================================

export type InteractionData =
  | MCQData
  | FillBlankData
  | InputData
  | MatchData
  | ReorderData
  | SelectErrorData
  | SpeakingData
  | ListeningData
  | WritingData;

export interface MCQData {
  type: 'mcq';
  question: string;
  questionRu?: string;
  options: Array<{
    id: string;
    text: string;
    textRu?: string;
  }>;
  correctOptionId: string;
  explanation?: string;
  explanationRu?: string;
}

export interface FillBlankData {
  type: 'fill_blank';
  sentence: string;
  sentenceRu?: string;
  blanks: Array<{
    position: number;        // Position of ___ in sentence
    answer: string;
    alternatives?: string[];
    hint?: string;
  }>;
}

export interface InputData {
  type: 'input';
  question: string;
  questionRu?: string;
  placeholder?: string;
  maxLength?: number;
}

export interface MatchData {
  type: 'match';
  leftItems: Array<{ id: string; text: string }>;
  rightItems: Array<{ id: string; text: string }>;
  correctPairs: Array<{ left: string; right: string }>;
}

export interface ReorderData {
  type: 'reorder';
  items: Array<{ id: string; text: string }>;
  correctOrder: string[];    // Array of IDs in correct order
}

export interface SelectErrorData {
  type: 'select_error';
  sentence: string;
  sentenceRu?: string;
  words: Array<{
    id: string;
    text: string;
    isError: boolean;
    correction?: string;
  }>;
}

export interface SpeakingData {
  type: 'speaking';
  promptText: string;
  promptTextRu?: string;
  referenceAudio?: string;
  expectedKeyPhrases?: string[];
  maxDurationSeconds: number;
}

export interface ListeningData {
  type: 'listening';
  audioUrl: string;
  transcript?: string;
  questions: MCQData[];
}

export interface WritingData {
  type: 'writing';
  promptText: string;
  promptTextRu?: string;
  minWords: number;
  maxWords: number;
  keyPhrases?: string[];
  rubric: {
    grammar: number;         // Weight 0-1
    vocabulary: number;
    coherence: number;
  };
}

// ============================================
// LESSON TEMPLATE (for generating lessons)
// ============================================

export interface LessonTemplateV3 {
  templateId: string;
  schemaVersion: typeof LESSON_MODAL_SCHEMA_VERSION;

  // Identity
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;

  // Topic info
  topic: string;             // e.g., "articles_a_an"
  category: string;          // e.g., "grammar"
  tags: string[];

  // Skill mapping
  primarySkill: SkillType;
  secondarySkills: SkillType[];

  // Level constraints
  applicableLevels: CEFRLevel[];
  difficultyRange: [number, number];  // [min, max] 1-10

  // IELTS mapping
  ieltsRelevance: 'none' | 'low' | 'medium' | 'high';
  ieltsComponents?: ('listening' | 'reading' | 'writing' | 'speaking')[];

  // Page structure (what pages to generate)
  pageStructure: Array<{
    type: LessonPageType;
    required: boolean;
    minInteractions?: number;
    maxInteractions?: number;
  }>;

  // Prerequisites
  prerequisites: string[];   // Template IDs

  // Selection criteria (for topic recommendation)
  selectionCriteria: {
    weaknessThreshold: number;    // Select if skill < this
    errorPatterns: string[];      // Select if recent errors match
    interestBoost: string[];      // Boost priority if interests match
    cooldownDays: number;         // Don't repeat within X days
  };

  // Timing
  estimatedMinutes: number;

  // Versioning
  version: string;
  createdAt: string;
  updatedAt: string;
}

// ============================================
// EXAMPLE: A1 LESSON "ARTICLES A/AN"
// ============================================

export const EXAMPLE_LESSON_A1_ARTICLES: LessonModalV3 = {
  type: 'lesson_modal',
  schemaVersion: LESSON_MODAL_SCHEMA_VERSION,
  lessonId: 'lesson_articles_a_an_001',
  templateId: 'grammar_articles_a_an',

  title: 'Articles: A vs AN',
  titleRu: 'Артикли: A и AN',
  description: 'Learn when to use "a" and when to use "an" before nouns.',
  descriptionRu: 'Научись правильно использовать артикли "a" и "an" перед существительными.',

  cefrLevel: 'A1',
  targetSkills: ['grammar', 'vocabulary'],
  difficulty: 2,

  ielts: {
    relevance: 'low',
    note: 'Базовое правило, важно для всех частей экзамена',
  },

  pages: [
    // Page 1: Hook
    {
      pageIndex: 0,
      pageId: 'hook',
      type: 'hook',
      title: 'Did you know?',
      titleRu: 'А ты знал?',
      contentBlocks: [
        {
          blockId: 'hook_1',
          type: 'text',
          content: '90% русскоязычных учеников путают "a" и "an"! Но на самом деле правило очень простое — нужно слушать ЗВУК, а не букву.',
          contentRu: '90% русскоязычных учеников путают "a" и "an"! Но на самом деле правило очень простое — нужно слушать ЗВУК, а не букву.',
        },
        {
          blockId: 'hook_2',
          type: 'example',
          content: '',
          example: {
            english: 'an hour (час)',
            russian: 'Буква H, но звук гласный!',
            highlight: 'an',
          },
        },
      ],
      interactions: [],
      hints: [],
      settings: {
        canSkip: true,
        minScore: 0,
        allowRetry: false,
        maxRetries: 0,
        showFeedback: false,
        showCorrectAnswers: false,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },

    // Page 2: Theory (Rule)
    {
      pageIndex: 1,
      pageId: 'theory',
      type: 'theory',
      title: 'The Rule',
      titleRu: 'Правило',
      contentBlocks: [
        {
          blockId: 'rule_main',
          type: 'rule',
          content: 'Используй A или AN в зависимости от ЗВУКА следующего слова.',
          contentRu: 'Используй A или AN в зависимости от ЗВУКА следующего слова.',
          rule: {
            formula: 'A + согласный ЗВУК',
            formulaRu: 'A перед согласным звуком',
            exceptions: [],
          },
        },
        {
          blockId: 'rule_an',
          type: 'rule',
          content: '',
          rule: {
            formula: 'AN + гласный ЗВУК',
            formulaRu: 'AN перед гласным звуком',
            exceptions: [],
          },
        },
        {
          blockId: 'tip_sound',
          type: 'tip',
          content: 'Важно: смотри на ЗВУК, не на букву! Буква U в слове "university" звучит как "ю" (согласный), поэтому: a university.',
          contentRu: 'Важно: смотри на ЗВУК, не на букву! Буква U в слове "university" звучит как "ю" (согласный), поэтому: a university.',
          icon: 'lightbulb',
        },
      ],
      interactions: [],
      hints: [],
      settings: {
        canSkip: false,
        minScore: 0,
        allowRetry: false,
        maxRetries: 0,
        showFeedback: false,
        showCorrectAnswers: false,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },

    // Page 3: Examples
    {
      pageIndex: 2,
      pageId: 'examples',
      type: 'examples',
      title: 'Examples',
      titleRu: 'Примеры',
      contentBlocks: [
        {
          blockId: 'example_a_1',
          type: 'example',
          content: '',
          example: {
            english: 'a book',
            russian: 'книга',
            highlight: 'a',
            context: 'B — согласный звук',
          },
        },
        {
          blockId: 'example_a_2',
          type: 'example',
          content: '',
          example: {
            english: 'a cat',
            russian: 'кошка',
            highlight: 'a',
            context: 'C — согласный звук',
          },
        },
        {
          blockId: 'example_an_1',
          type: 'example',
          content: '',
          example: {
            english: 'an apple',
            russian: 'яблоко',
            highlight: 'an',
            context: 'A — гласный звук',
          },
        },
        {
          blockId: 'example_an_2',
          type: 'example',
          content: '',
          example: {
            english: 'an orange',
            russian: 'апельсин',
            highlight: 'an',
            context: 'O — гласный звук',
          },
        },
        {
          blockId: 'example_tricky_1',
          type: 'example',
          content: '',
          example: {
            english: 'an hour',
            russian: 'час',
            highlight: 'an',
            context: 'H не произносится! Звук — гласный',
          },
        },
        {
          blockId: 'example_tricky_2',
          type: 'example',
          content: '',
          example: {
            english: 'a university',
            russian: 'университет',
            highlight: 'a',
            context: 'U звучит как "ю" — согласный звук!',
          },
        },
      ],
      interactions: [],
      hints: [],
      settings: {
        canSkip: true,
        minScore: 0,
        allowRetry: false,
        maxRetries: 0,
        showFeedback: false,
        showCorrectAnswers: false,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },

    // Page 4: Check (Understanding)
    {
      pageIndex: 3,
      pageId: 'check',
      type: 'check',
      title: 'Quick Check',
      titleRu: 'Проверка понимания',
      contentBlocks: [
        {
          blockId: 'check_intro',
          type: 'text',
          content: 'Давай проверим, понял ли ты правило. Это не экзамен — просто убедимся, что всё ясно!',
          contentRu: 'Давай проверим, понял ли ты правило. Это не экзамен — просто убедимся, что всё ясно!',
        },
      ],
      interactions: [
        {
          interactionId: 'check_1',
          type: 'mcq',
          prompt: 'Почему мы говорим "an hour", хотя слово начинается с H?',
          promptRu: 'Почему мы говорим "an hour", хотя слово начинается с H?',
          data: {
            type: 'mcq',
            question: 'Why do we say "an hour"?',
            questionRu: 'Почему мы говорим "an hour"?',
            options: [
              { id: 'a', text: 'Because H is a vowel', textRu: 'Потому что H — гласная' },
              { id: 'b', text: 'Because H is silent, so the sound is a vowel', textRu: 'Потому что H не произносится, и звук — гласный' },
              { id: 'c', text: 'Just an exception', textRu: 'Просто исключение' },
            ],
            correctOptionId: 'b',
            explanation: 'In "hour", the H is silent. The word starts with an "au" sound (vowel), so we use "an".',
            explanationRu: 'В слове "hour" буква H не произносится. Слово начинается со звука "au" (гласный), поэтому используем "an".',
          },
          answer: { correct: 'b' },
          targetSkills: ['grammar', 'comprehension'],
          difficulty: 2,
          points: 10,
          hints: ['Подумай о ЗВУКЕ, не о букве'],
          feedback: {
            correct: 'Точно! Ты понял главную идею — важен ЗВУК!',
            incorrect: 'Почти! Вспомни: мы смотрим на ЗВУК, а не на букву.',
          },
          state: { attempted: false, score: 0, hintsUsed: 0 },
        },
      ],
      hints: ['Правило про a/an основано на ЗВУКЕ'],
      settings: {
        canSkip: false,
        minScore: 50,
        allowRetry: true,
        maxRetries: 2,
        showFeedback: true,
        showCorrectAnswers: true,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },

    // Page 5: Practice
    {
      pageIndex: 4,
      pageId: 'practice',
      type: 'practice',
      title: 'Practice',
      titleRu: 'Практика',
      contentBlocks: [
        {
          blockId: 'practice_intro',
          type: 'text',
          content: 'Теперь попробуй сам! Заполни пропуски правильным артиклем.',
          contentRu: 'Теперь попробуй сам! Заполни пропуски правильным артиклем.',
        },
      ],
      interactions: [
        {
          interactionId: 'practice_1',
          type: 'fill_blank',
          prompt: 'Заполни пропуск:',
          promptRu: 'Заполни пропуск:',
          data: {
            type: 'fill_blank',
            sentence: 'I have ___ dog.',
            sentenceRu: 'У меня есть собака.',
            blanks: [{ position: 0, answer: 'a', hint: 'D — согласный звук' }],
          },
          answer: { correct: 'a', caseSensitive: false },
          targetSkills: ['grammar'],
          difficulty: 1,
          points: 10,
          hints: ['С какого ЗВУКА начинается "dog"?'],
          feedback: {
            correct: 'Отлично! "Dog" начинается с согласного звука D.',
            incorrect: 'Не совсем. "Dog" начинается с согласного D → используем "a".',
          },
          state: { attempted: false, score: 0, hintsUsed: 0 },
        },
        {
          interactionId: 'practice_2',
          type: 'fill_blank',
          prompt: 'Заполни пропуск:',
          promptRu: 'Заполни пропуск:',
          data: {
            type: 'fill_blank',
            sentence: 'She is ___ engineer.',
            sentenceRu: 'Она инженер.',
            blanks: [{ position: 0, answer: 'an', hint: 'E — гласный звук' }],
          },
          answer: { correct: 'an', caseSensitive: false },
          targetSkills: ['grammar'],
          difficulty: 1,
          points: 10,
          hints: ['С какого ЗВУКА начинается "engineer"?'],
          feedback: {
            correct: 'Верно! "Engineer" начинается с гласного E → "an".',
            incorrect: 'Попробуй ещё раз. "Engineer" начинается с гласного E.',
          },
          state: { attempted: false, score: 0, hintsUsed: 0 },
        },
        {
          interactionId: 'practice_3',
          type: 'fill_blank',
          prompt: 'Заполни пропуск:',
          promptRu: 'Заполни пропуск:',
          data: {
            type: 'fill_blank',
            sentence: 'He waited for ___ hour.',
            sentenceRu: 'Он ждал час.',
            blanks: [{ position: 0, answer: 'an', hint: 'H не произносится!' }],
          },
          answer: { correct: 'an', caseSensitive: false },
          targetSkills: ['grammar'],
          difficulty: 3,
          points: 15,
          hints: ['Вспомни: H в "hour" не произносится'],
          feedback: {
            correct: 'Молодец! Сложный случай, но ты справился!',
            incorrect: 'Хитрый случай! В "hour" H не произносится → звук гласный → "an".',
          },
          state: { attempted: false, score: 0, hintsUsed: 0 },
        },
        {
          interactionId: 'practice_4',
          type: 'mcq',
          prompt: 'Выбери правильный вариант:',
          promptRu: 'Выбери правильный вариант:',
          data: {
            type: 'mcq',
            question: 'I study at ___ university.',
            questionRu: 'Я учусь в университете.',
            options: [
              { id: 'a', text: 'a university', textRu: 'a university' },
              { id: 'b', text: 'an university', textRu: 'an university' },
            ],
            correctOptionId: 'a',
            explanation: 'University starts with "yu" sound (consonant), so we use "a".',
            explanationRu: 'University начинается со звука "ю" (согласный), поэтому используем "a".',
          },
          answer: { correct: 'a' },
          targetSkills: ['grammar'],
          difficulty: 4,
          points: 15,
          hints: ['Как произносится U в "university"?'],
          feedback: {
            correct: 'Отлично! Ты понял, что важен ЗВУК, а не буква!',
            incorrect: 'Трюк! U в "university" звучит как "ю" — это согласный звук.',
          },
          state: { attempted: false, score: 0, hintsUsed: 0 },
        },
      ],
      hints: ['Помни: ЗВУК важнее буквы!'],
      settings: {
        canSkip: false,
        minScore: 60,
        allowRetry: true,
        maxRetries: 3,
        showFeedback: true,
        showCorrectAnswers: true,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },

    // Page 6: Common Mistakes
    {
      pageIndex: 5,
      pageId: 'mistakes',
      type: 'mistakes',
      title: 'Common Mistakes',
      titleRu: 'Частые ошибки',
      contentBlocks: [
        {
          blockId: 'mistakes_intro',
          type: 'text',
          content: 'Эти ошибки делают почти все. Запомни их — и не повторяй!',
          contentRu: 'Эти ошибки делают почти все. Запомни их — и не повторяй!',
        },
        {
          blockId: 'mistake_1',
          type: 'comparison',
          content: '',
          comparison: {
            items: [
              {
                label: 'Hour',
                correct: 'an hour ✓',
                incorrect: 'a hour ✗',
                explanation: 'H is silent, vowel sound',
                explanationRu: 'H не произносится, звук гласный',
              },
              {
                label: 'University',
                correct: 'a university ✓',
                incorrect: 'an university ✗',
                explanation: 'U sounds like "yu" (consonant)',
                explanationRu: 'U звучит как "ю" (согласный)',
              },
              {
                label: 'European',
                correct: 'a European ✓',
                incorrect: 'an European ✗',
                explanation: 'E sounds like "yu" (consonant)',
                explanationRu: 'E звучит как "ю" (согласный)',
              },
            ],
          },
        },
        {
          blockId: 'warning_1',
          type: 'warning',
          content: 'Не смотри на букву! Всегда слушай ЗВУК первого слога.',
          contentRu: 'Не смотри на букву! Всегда слушай ЗВУК первого слога.',
          icon: 'warning',
        },
      ],
      interactions: [],
      hints: [],
      settings: {
        canSkip: true,
        minScore: 0,
        allowRetry: false,
        maxRetries: 0,
        showFeedback: false,
        showCorrectAnswers: false,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },

    // Page 7: Summary
    {
      pageIndex: 6,
      pageId: 'summary',
      type: 'summary',
      title: 'Great job!',
      titleRu: 'Отлично!',
      contentBlocks: [
        {
          blockId: 'summary_1',
          type: 'text',
          content: 'Ты изучил важное правило! Теперь ты знаешь:',
          contentRu: 'Ты изучил важное правило! Теперь ты знаешь:',
        },
        {
          blockId: 'summary_list',
          type: 'list',
          content: '',
          list: {
            items: [
              { text: 'A перед согласным ЗВУКОМ', textRu: 'A перед согласным ЗВУКОМ' },
              { text: 'AN перед гласным ЗВУКОМ', textRu: 'AN перед гласным ЗВУКОМ' },
              { text: 'Важен ЗВУК, а не буква!', textRu: 'Важен ЗВУК, а не буква!' },
            ],
            ordered: false,
          },
        },
        {
          blockId: 'summary_tip',
          type: 'tip',
          content: 'Совет: когда сомневаешься — произнеси слово вслух и послушай первый звук.',
          contentRu: 'Совет: когда сомневаешься — произнеси слово вслух и послушай первый звук.',
          icon: 'star',
        },
        {
          blockId: 'gamification',
          type: 'text',
          content: '+3% к навыку Grammar! Продолжай в том же духе!',
          contentRu: '+3% к навыку Grammar! Продолжай в том же духе!',
          style: { emphasis: 'highlight' },
        },
      ],
      interactions: [],
      hints: [],
      settings: {
        canSkip: true,
        minScore: 0,
        allowRetry: false,
        maxRetries: 0,
        showFeedback: false,
        showCorrectAnswers: false,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },
  ],

  estimatedMinutes: 10,

  personalizedFor: {
    userId: 'example_user',
    interests: ['music', 'travel'],
    weakSkills: ['grammar', 'vocabulary'],
    recentErrors: ['article usage'],
  },

  progress: {
    currentPageIndex: 0,
    completedPages: [],
    totalScore: 0,
    timeSpentSeconds: 0,
    skillScores: {},
  },

  generatedAt: new Date().toISOString(),
  generatedBy: 'template',
};
