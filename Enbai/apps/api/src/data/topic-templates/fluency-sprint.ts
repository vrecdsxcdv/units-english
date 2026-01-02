import type { TopicTemplate } from '@enbai/types';

/**
 * FLUENCY SPRINT
 *
 * Интенсивная тренировка беглости речи.
 * Паттерн: Разминка → Скорость → Связность → Спонтанность → Марафон
 */
export const fluencySprintTemplate: TopicTemplate = {
  id: 'fluency-sprint',
  schemaVersion: '1.0',

  name: 'Fluency Sprint',
  description: 'Интенсивная тренировка беглости и скорости речи.',
  icon: '🏃',
  category: 'fluency',

  applicableCEFR: ['A2', 'B1', 'B2', 'C1'],
  ieltsFocus: 'speaking',

  primarySkills: ['fluency'],
  secondarySkills: ['speaking', 'vocabulary', 'grammar'],

  whenToUse: {
    skillConditions: [
      { skill: 'fluency', condition: 'below', value: 0.5 }
    ],
    recentErrorTopics: ['hesitation', 'long_pauses', 'slow_speech'],
    interestBoost: ['speaking', 'communication', 'travel'],
    sessionPosition: 'middle',
  },
  priority: 7,
  cooldownDays: 2,

  estimatedTotalMinutes: { min: 10, max: 15 },

  pages: [
    // PAGE 1: Разминка
    {
      pageId: 'warmup',
      type: 'drill',
      title: 'Разминка: быстрые ответы',
      goal: 'Разогреть речевой аппарат',
      targetSkills: ['speaking', 'fluency'],
      estimatedMinutes: 2,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: отвечай быстро, не думай долго!', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'speaking_prompt', count: 5, difficulty: 'fixed', placeholder: 'Простые вопросы для быстрых ответов (1-2 предложения)' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['fluency', 'speaking'],
        typicalErrors: ['long_pause', 'hesitation'],
        passingScore: 0.6,
      },
      exitCriteria: {
        type: 'completion',
        value: 5,
        description: 'Ответить на все 5 вопросов',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 2: Скоростной раунд
    {
      pageId: 'speed-round',
      type: 'drill',
      title: 'Скоростной раунд',
      goal: 'Говорить без пауз 30 секунд',
      targetSkills: ['fluency', 'speaking'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: говори 30 секунд без остановки на заданную тему', required: true, maxLength: 100 },
        { type: 'tip', placeholder: 'Филлеры для заполнения пауз: well, so, you know, I mean', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'speaking_prompt', count: 2, difficulty: 'adaptive', placeholder: 'Тема для 30-секундного монолога' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['fluency'],
        typicalErrors: ['long_pause', 'topic_drift', 'repetition'],
        passingScore: 0.7,
      },
      exitCriteria: {
        type: 'completion',
        value: 2,
        description: 'Завершить оба монолога',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 3: Связующие слова
    {
      pageId: 'connectors',
      type: 'explanation',
      title: 'Связующие слова',
      goal: 'Использовать коннекторы для плавности',
      targetSkills: ['fluency', 'grammar'],
      estimatedMinutes: 2,

      contentBlocks: [
        { type: 'table', placeholder: 'Таблица коннекторов: Добавление (also, moreover) | Контраст (however, but) | Причина (because, so)', required: true, maxLength: 400 },
        { type: 'example', placeholder: 'Примеры использования коннекторов в речи', required: true, maxLength: 200 },
      ],

      exercises: [
        { type: 'fill_gap', count: 4, difficulty: 'adaptive', placeholder: 'Вставь подходящий коннектор' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['grammar', 'fluency'],
        typicalErrors: ['wrong_connector'],
        passingScore: 0.75,
      },
      exitCriteria: {
        type: 'score',
        value: 0.75,
        description: 'Минимум 3 из 4 правильно',
      },
      hintsAvailable: true,
      maxHints: 1,
    },

    // PAGE 4: Спонтанная речь
    {
      pageId: 'spontaneous',
      type: 'use',
      title: 'Спонтанная речь',
      goal: 'Говорить на неожиданную тему',
      targetSkills: ['fluency', 'speaking', 'vocabulary'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: у тебя 10 секунд на подготовку, потом говори 1 минуту', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'speaking_prompt', count: 1, difficulty: 'adaptive', placeholder: 'Неожиданная тема для спонтанного монолога (1 минута)' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['fluency', 'speaking'],
        typicalErrors: ['hesitation', 'repetition', 'topic_abandon'],
        passingScore: 0.7,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Завершить монолог',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 5: Финальный марафон
    {
      pageId: 'marathon',
      type: 'test',
      title: 'Финальный марафон',
      goal: 'Говорить 2 минуты связно',
      targetSkills: ['fluency', 'speaking', 'vocabulary', 'grammar'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Тема для 2-минутного монолога (связанная с интересами пользователя)', required: true, maxLength: 150 },
        { type: 'tip', placeholder: 'Структура: Introduction → Point 1 → Point 2 → Point 3 → Conclusion', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'speaking_prompt', count: 1, difficulty: 'fixed', placeholder: '2-минутный структурированный монолог' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['fluency', 'speaking', 'grammar'],
        typicalErrors: ['long_pause', 'structure_loss', 'time_management'],
        passingScore: 0.75,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Завершить 2-минутный монолог',
      },
      hintsAvailable: false,
      maxHints: 0,
    },
  ],

  contentGuidelines: {
    tone: 'casual',
    useUserInterests: true,
    exampleStyle: 'realistic',
    difficultyAdaptation: 'flexible',
  },

  version: '1.0.0',
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-01-01T00:00:00Z',
};
