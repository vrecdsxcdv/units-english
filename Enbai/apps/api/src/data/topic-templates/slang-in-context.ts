import type { TopicTemplate } from '@enbai/types';

/**
 * SLANG IN CONTEXT
 *
 * Изучение сленга и неформальной речи в контексте.
 * Паттерн: Ситуация → Выражения → Регистр → Практика → Применение
 */
export const slangInContextTemplate: TopicTemplate = {
  id: 'slang-in-context',
  schemaVersion: '1.0',

  name: 'Slang in Context',
  description: 'Освоение сленга и неформальной речи для естественного общения.',
  icon: '😎',
  category: 'slang',

  applicableCEFR: ['B1', 'B2', 'C1', 'C2'],
  ieltsFocus: 'speaking',

  primarySkills: ['slang'],
  secondarySkills: ['vocabulary', 'speaking', 'comprehension'],

  whenToUse: {
    skillConditions: [
      { skill: 'slang', condition: 'below', value: 0.4 }
    ],
    recentErrorTopics: ['wrong_register', 'too_formal', 'idiom_misuse'],
    interestBoost: ['movies', 'social_media', 'music', 'gaming'],
    sessionPosition: 'middle',
  },
  priority: 5,
  cooldownDays: 4,

  estimatedTotalMinutes: { min: 15, max: 22 },

  pages: [
    // PAGE 1: Ситуация и контекст
    {
      pageId: 'context-intro',
      type: 'explanation',
      title: '{slangContext}: Как говорят на самом деле',
      goal: 'Понять когда и где используется неформальная речь',
      targetSkills: ['comprehension', 'slang'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Описание ситуации: разговор друзей, соцсети, мемы', required: true, maxLength: 200 },
        { type: 'comparison', placeholder: 'Формально vs Неформально: одна мысль двумя способами', required: true, maxLength: 250 },
        { type: 'warning', placeholder: 'Когда НЕ использовать сленг (формальные ситуации)', required: true, maxLength: 150 },
      ],

      exercises: [],
      evaluation: {
        autoCheck: false,
        skillsMeasured: [],
        typicalErrors: [],
        passingScore: 1.0,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Понять контекст использования',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 2: Выражения
    {
      pageId: 'expressions',
      type: 'explanation',
      title: 'Популярные выражения',
      goal: 'Выучить 6-8 сленговых выражений',
      targetSkills: ['slang', 'vocabulary'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'table', placeholder: 'Таблица: Выражение | Значение | Пример использования', required: true, maxLength: 800 },
        { type: 'audio', placeholder: 'Аудио произношения (естественно, быстро)', required: true },
        { type: 'tip', placeholder: 'Происхождение или мнемоника для запоминания', required: true, maxLength: 200 },
      ],

      exercises: [
        { type: 'matching', count: 6, difficulty: 'adaptive', placeholder: 'Соедини сленг с переводом' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['vocabulary', 'slang'],
        typicalErrors: ['meaning_confusion'],
        passingScore: 0.83,
      },
      exitCriteria: {
        type: 'score',
        value: 0.83,
        description: 'Минимум 5 из 6 правильно',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 3: Регистр и уместность
    {
      pageId: 'register',
      type: 'drill',
      title: 'Уместно или нет?',
      goal: 'Понимать когда сленг уместен',
      targetSkills: ['slang', 'comprehension'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Объяснение регистров: формальный, нейтральный, неформальный', required: true, maxLength: 200 },
      ],

      exercises: [
        { type: 'multiple_choice', count: 5, difficulty: 'adaptive', placeholder: 'Ситуация + фраза: уместно или нет?' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['slang', 'comprehension'],
        typicalErrors: ['wrong_register'],
        passingScore: 0.8,
      },
      exitCriteria: {
        type: 'score',
        value: 0.8,
        description: 'Минимум 4 из 5 правильно',
      },
      hintsAvailable: true,
      maxHints: 1,
    },

    // PAGE 4: Понимание в контексте
    {
      pageId: 'comprehension',
      type: 'use',
      title: 'Понимание в диалоге',
      goal: 'Понимать сленг в реальных диалогах',
      targetSkills: ['listening', 'slang', 'comprehension'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Диалог/переписка с использованием сленга', required: true, maxLength: 600 },
        { type: 'audio', placeholder: 'Аудио диалога (быстрая речь)', required: false },
      ],

      exercises: [
        { type: 'multiple_choice', count: 4, difficulty: 'adaptive', placeholder: 'Что имел в виду говорящий?' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['comprehension', 'slang'],
        typicalErrors: ['literal_interpretation', 'context_miss'],
        passingScore: 0.75,
      },
      exitCriteria: {
        type: 'score',
        value: 0.75,
        description: 'Минимум 3 из 4 правильно',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 5: Активное использование
    {
      pageId: 'active-use',
      type: 'test',
      title: 'Говори как native',
      goal: 'Использовать сленг в своей речи',
      targetSkills: ['speaking', 'slang', 'fluency'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: перефразируй формально → неформально', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'rewrite', count: 3, difficulty: 'fixed', placeholder: 'Перепиши формальное предложение используя сленг' },
        { type: 'mini_dialogue', count: 2, difficulty: 'fixed', placeholder: 'Ответь неформально на сообщение друга' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['slang', 'fluency'],
        typicalErrors: ['too_formal', 'wrong_expression', 'overuse'],
        passingScore: 0.8,
      },
      exitCriteria: {
        type: 'score',
        value: 0.8,
        description: 'Минимум 4 из 5 правильно',
      },
      hintsAvailable: false,
      maxHints: 0,
    },
  ],

  contentGuidelines: {
    tone: 'casual',
    useUserInterests: true,
    exampleStyle: 'fun',
    difficultyAdaptation: 'flexible',
  },

  version: '1.0.0',
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-01-01T00:00:00Z',
};
