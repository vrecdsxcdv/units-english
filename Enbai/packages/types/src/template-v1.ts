/**
 * Template V1 - Clean Template Schema
 *
 * Unified template format for generating LessonModalV3.
 * Replaces legacy TopicTemplate, TopicModal, and hardcoded steps.
 *
 * Schema version: 1.0
 */

import type { SkillType, CEFRLevel } from './skills';

export const TEMPLATE_V1_SCHEMA_VERSION = '1.0';

// ============================================
// PAGE TYPES
// ============================================

export type TemplatePageType =
  | 'hook'        // Интересный факт/история для привлечения внимания
  | 'theory'      // Объяснение правила/концепции
  | 'examples'    // Примеры использования (2-5 примеров)
  | 'check'       // Проверка понимания (1-2 простых вопроса)
  | 'practice'    // Практические задания (1-3 упражнения)
  | 'mistakes'    // Типичные ошибки и как их избежать
  | 'summary'     // Краткое резюме + что запомнить
  | 'ielts';      // IELTS-специфичный контент (только B1+)

// ============================================
// INTERACTION TYPES
// ============================================

export type TemplateInteractionType =
  | 'mcq'           // Multiple choice question
  | 'fill_blank'    // Fill in the blank(s)
  | 'input'         // Free text input
  | 'match'         // Match pairs
  | 'reorder'       // Reorder items
  | 'select_error'  // Find and select error
  | 'speaking'      // Speaking prompt (record)
  | 'listening'     // Listening comprehension
  | 'writing';      // Writing task

// ============================================
// CONTENT BLOCK TYPES
// ============================================

export type TemplateContentType =
  | 'text'        // Plain text
  | 'rule'        // Grammar/usage rule (boxed)
  | 'example'     // Example with translation
  | 'comparison'  // Before/after or correct/incorrect
  | 'table'       // Structured data
  | 'tip'         // Helpful tip
  | 'warning'     // Common mistake warning
  | 'list';       // Bullet list

// ============================================
// TEMPLATE PAGE DEFINITION
// ============================================

export interface TemplatePageV1 {
  id: string;
  type: TemplatePageType;
  title: string;                    // Display title
  goal: string;                     // What student should learn
  estimatedSeconds: number;         // Expected time (60-300)

  // Content placeholders for AI generation
  contentPlaceholders: {
    type: TemplateContentType;
    placeholder: string;            // Description of what to generate
    required: boolean;
    maxLength?: number;
  }[];

  // Interaction placeholders
  interactionPlaceholders?: {
    type: TemplateInteractionType;
    count: number;                  // How many of this type
    placeholder: string;            // What to generate
    difficulty: 'adaptive' | number; // Adaptive or fixed 1-10
  }[];

  // Optional settings
  settings?: {
    allowHints?: boolean;
    maxHints?: number;
    showTranslation?: boolean;
    autoAdvance?: boolean;
  };
}

// ============================================
// SELECTION CRITERIA
// ============================================

export interface TemplateSelectionV1 {
  // Skill weakness triggers (0-1 threshold)
  weakSkillThresholds?: {
    skill: SkillType;
    below: number;                  // Trigger if skill < this value
  }[];

  // Error pattern triggers
  errorTopics?: string[];           // Trigger if user made these errors

  // Interest boost
  interestTags?: string[];          // Boost priority if user has these interests

  // Cooldown (don't repeat too soon)
  cooldownDays?: number;

  // Session position preference
  position?: 'start' | 'middle' | 'end' | 'any';
}

// ============================================
// MAIN TEMPLATE V1 INTERFACE
// ============================================

export interface TemplateV1 {
  // Identity
  id: string;
  schemaVersion: typeof TEMPLATE_V1_SCHEMA_VERSION;

  // Metadata
  name: string;
  description: string;
  icon: string;                     // Emoji
  category: string;                 // Grammar, Vocabulary, Speaking, etc.

  // CEFR & Skills
  cefrLevels: CEFRLevel[];          // Which levels this applies to
  primarySkill: SkillType;          // Main skill being taught
  secondarySkills?: SkillType[];    // Supporting skills (0-2)

  // IELTS (only for B1+)
  ieltsRelevant?: boolean;
  ieltsBand?: number;               // Target band (5-9)

  // Content settings
  language: {
    explanation: 'ru' | 'en';       // Language for explanations
    examples: 'en' | 'both';        // Language for examples
    practice: 'en' | 'mixed';       // Language for practice
  };

  // Pages (3-7)
  pages: TemplatePageV1[];

  // Selection
  selection: TemplateSelectionV1;
  priority: number;                 // 1-10, higher = more likely

  // Timing
  estimatedMinutes: { min: number; max: number };

  // AI generation hints
  generationHints: {
    tone: 'friendly' | 'neutral' | 'academic';
    useInterests: boolean;
    exampleCount: number;           // 2-5
    difficultyAdaptation: boolean;
  };

  // Versioning
  version: string;
  createdAt: string;
  updatedAt: string;
}

// ============================================
// TEMPLATE LIBRARY INDEX
// ============================================

export interface TemplateLibraryV1 {
  version: string;
  templates: TemplateV1[];
  categories: {
    id: string;
    name: string;
    icon: string;
  }[];
}

// ============================================
// EXAMPLE TEMPLATES
// ============================================

export const TEMPLATE_A1_ARTICLES: TemplateV1 = {
  id: 'grammar-articles-a1',
  schemaVersion: TEMPLATE_V1_SCHEMA_VERSION,

  name: 'Articles: A, An, The',
  description: 'Learn when to use a, an, and the in English sentences',
  icon: '📝',
  category: 'Grammar',

  cefrLevels: ['A1', 'A2'],
  primarySkill: 'grammar',
  secondarySkills: ['vocabulary'],

  language: {
    explanation: 'ru',
    examples: 'both',
    practice: 'mixed',
  },

  pages: [
    {
      id: 'hook',
      type: 'hook',
      title: 'Почему артикли важны?',
      goal: 'Заинтересовать студента темой',
      estimatedSeconds: 60,
      contentPlaceholders: [
        {
          type: 'text',
          placeholder: 'Интересный факт о том, как носители языка используют артикли и почему это важно',
          required: true,
          maxLength: 200,
        },
      ],
    },
    {
      id: 'theory',
      type: 'theory',
      title: 'Правила использования A, An, The',
      goal: 'Понять базовые правила артиклей',
      estimatedSeconds: 120,
      contentPlaceholders: [
        {
          type: 'rule',
          placeholder: 'Правило использования a/an (неопределенный артикль)',
          required: true,
          maxLength: 150,
        },
        {
          type: 'rule',
          placeholder: 'Правило использования the (определенный артикль)',
          required: true,
          maxLength: 150,
        },
        {
          type: 'tip',
          placeholder: 'Простой способ запомнить разницу',
          required: true,
          maxLength: 100,
        },
      ],
    },
    {
      id: 'examples',
      type: 'examples',
      title: 'Примеры',
      goal: 'Увидеть правила в действии',
      estimatedSeconds: 90,
      contentPlaceholders: [
        {
          type: 'example',
          placeholder: 'Пример с a + перевод',
          required: true,
        },
        {
          type: 'example',
          placeholder: 'Пример с an + перевод',
          required: true,
        },
        {
          type: 'example',
          placeholder: 'Пример с the + перевод',
          required: true,
        },
        {
          type: 'comparison',
          placeholder: 'Сравнение: предложение с артиклем vs без',
          required: true,
        },
      ],
    },
    {
      id: 'check',
      type: 'check',
      title: 'Проверим понимание',
      goal: 'Убедиться, что правила поняты',
      estimatedSeconds: 60,
      contentPlaceholders: [],
      interactionPlaceholders: [
        {
          type: 'mcq',
          count: 2,
          placeholder: 'Простой вопрос на выбор правильного артикля',
          difficulty: 2,
        },
      ],
    },
    {
      id: 'practice',
      type: 'practice',
      title: 'Практика',
      goal: 'Применить знания',
      estimatedSeconds: 120,
      contentPlaceholders: [],
      interactionPlaceholders: [
        {
          type: 'fill_blank',
          count: 3,
          placeholder: 'Вставить правильный артикль в предложение',
          difficulty: 'adaptive',
        },
      ],
      settings: {
        allowHints: true,
        maxHints: 2,
      },
    },
    {
      id: 'mistakes',
      type: 'mistakes',
      title: 'Типичные ошибки',
      goal: 'Знать, чего избегать',
      estimatedSeconds: 60,
      contentPlaceholders: [
        {
          type: 'warning',
          placeholder: 'Самая частая ошибка с артиклями',
          required: true,
        },
        {
          type: 'comparison',
          placeholder: 'Неправильно vs Правильно',
          required: true,
        },
      ],
    },
    {
      id: 'summary',
      type: 'summary',
      title: 'Итоги',
      goal: 'Закрепить главное',
      estimatedSeconds: 45,
      contentPlaceholders: [
        {
          type: 'list',
          placeholder: '3 главных правила для запоминания',
          required: true,
        },
        {
          type: 'tip',
          placeholder: 'Как практиковать артикли в повседневной жизни',
          required: false,
        },
      ],
    },
  ],

  selection: {
    weakSkillThresholds: [
      { skill: 'grammar', below: 0.4 },
    ],
    errorTopics: ['articles', 'a/an', 'the'],
    cooldownDays: 7,
    position: 'start',
  },
  priority: 8,

  estimatedMinutes: { min: 8, max: 12 },

  generationHints: {
    tone: 'friendly',
    useInterests: true,
    exampleCount: 4,
    difficultyAdaptation: true,
  },

  version: '1.0.0',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
};

export const TEMPLATE_B1_PRESENT_PERFECT: TemplateV1 = {
  id: 'grammar-present-perfect-b1',
  schemaVersion: TEMPLATE_V1_SCHEMA_VERSION,

  name: 'Present Perfect: Have/Has + V3',
  description: 'Master the present perfect tense for life experiences and recent actions',
  icon: '⏰',
  category: 'Grammar',

  cefrLevels: ['B1', 'B2'],
  primarySkill: 'grammar',
  secondarySkills: ['speaking', 'writing'],

  ieltsRelevant: true,
  ieltsBand: 6,

  language: {
    explanation: 'ru',
    examples: 'both',
    practice: 'en',
  },

  pages: [
    {
      id: 'hook',
      type: 'hook',
      title: 'Время, которого нет в русском',
      goal: 'Понять, почему Present Perfect особенный',
      estimatedSeconds: 60,
      contentPlaceholders: [
        {
          type: 'text',
          placeholder: 'Интригующее объяснение, почему Present Perfect сбивает с толку русскоговорящих',
          required: true,
          maxLength: 250,
        },
      ],
    },
    {
      id: 'theory',
      type: 'theory',
      title: 'Формула и использование',
      goal: 'Знать структуру и 3 главных случая',
      estimatedSeconds: 150,
      contentPlaceholders: [
        {
          type: 'rule',
          placeholder: 'Формула: have/has + V3 (past participle)',
          required: true,
        },
        {
          type: 'table',
          placeholder: 'Таблица: I/you/we/they have vs he/she/it has',
          required: true,
        },
        {
          type: 'rule',
          placeholder: 'Случай 1: Опыт (Have you ever...?)',
          required: true,
        },
        {
          type: 'rule',
          placeholder: 'Случай 2: Результат в настоящем',
          required: true,
        },
        {
          type: 'rule',
          placeholder: 'Случай 3: Незавершённое время (for/since)',
          required: true,
        },
      ],
    },
    {
      id: 'examples',
      type: 'examples',
      title: 'Примеры для каждого случая',
      goal: 'Увидеть разницу между случаями',
      estimatedSeconds: 120,
      contentPlaceholders: [
        {
          type: 'example',
          placeholder: 'Пример: опыт (I have visited Paris)',
          required: true,
        },
        {
          type: 'example',
          placeholder: 'Пример: результат (I have lost my keys)',
          required: true,
        },
        {
          type: 'example',
          placeholder: 'Пример: for/since (I have lived here for 5 years)',
          required: true,
        },
        {
          type: 'comparison',
          placeholder: 'Present Perfect vs Past Simple: когда что использовать',
          required: true,
        },
      ],
    },
    {
      id: 'check',
      type: 'check',
      title: 'Quick Check',
      goal: 'Проверить понимание',
      estimatedSeconds: 90,
      contentPlaceholders: [],
      interactionPlaceholders: [
        {
          type: 'mcq',
          count: 3,
          placeholder: 'Выбрать Present Perfect или Past Simple',
          difficulty: 5,
        },
      ],
    },
    {
      id: 'practice',
      type: 'practice',
      title: 'Practice Time',
      goal: 'Применить на практике',
      estimatedSeconds: 180,
      contentPlaceholders: [],
      interactionPlaceholders: [
        {
          type: 'fill_blank',
          count: 3,
          placeholder: 'Поставить глагол в правильную форму',
          difficulty: 'adaptive',
        },
        {
          type: 'reorder',
          count: 2,
          placeholder: 'Составить предложение из слов',
          difficulty: 5,
        },
      ],
      settings: {
        allowHints: true,
        maxHints: 3,
      },
    },
    {
      id: 'mistakes',
      type: 'mistakes',
      title: 'Common Mistakes',
      goal: 'Избежать типичных ошибок',
      estimatedSeconds: 90,
      contentPlaceholders: [
        {
          type: 'warning',
          placeholder: 'Ошибка: использование Past Simple вместо Present Perfect для результата',
          required: true,
        },
        {
          type: 'warning',
          placeholder: 'Ошибка: неправильная форма V3',
          required: true,
        },
        {
          type: 'comparison',
          placeholder: 'Wrong vs Right примеры',
          required: true,
        },
      ],
    },
    {
      id: 'summary',
      type: 'summary',
      title: 'Key Takeaways',
      goal: 'Запомнить главное',
      estimatedSeconds: 60,
      contentPlaceholders: [
        {
          type: 'list',
          placeholder: '4 ключевых момента Present Perfect',
          required: true,
        },
        {
          type: 'tip',
          placeholder: 'Как практиковать в разговоре',
          required: false,
        },
      ],
    },
  ],

  selection: {
    weakSkillThresholds: [
      { skill: 'grammar', below: 0.5 },
    ],
    errorTopics: ['present perfect', 'have/has', 'past participle', 'for/since'],
    interestTags: ['travel', 'career', 'life experiences'],
    cooldownDays: 5,
    position: 'any',
  },
  priority: 9,

  estimatedMinutes: { min: 12, max: 18 },

  generationHints: {
    tone: 'friendly',
    useInterests: true,
    exampleCount: 5,
    difficultyAdaptation: true,
  },

  version: '1.0.0',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
};
