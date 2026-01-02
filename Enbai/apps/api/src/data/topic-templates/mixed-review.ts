import type { TopicTemplate } from '@enbai/types';

/**
 * MIXED REVIEW / CHECKPOINT
 *
 * Смешанное повторение всех навыков.
 * Паттерн: Диагностика → Мини-блоки по навыкам → Интеграция → Оценка
 */
export const mixedReviewTemplate: TopicTemplate = {
  id: 'mixed-review',
  schemaVersion: '1.0',

  name: 'Mixed Review',
  description: 'Комплексное повторение и проверка всех навыков.',
  icon: '🎯',
  category: 'review',

  applicableCEFR: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  ieltsFocus: 'none',

  primarySkills: ['grammar', 'vocabulary', 'comprehension'],
  secondarySkills: ['listening', 'speaking', 'writing'],

  whenToUse: {
    streakMin: 5,
    daysSinceSkillPractice: {
      skill: 'grammar',
      minDays: 3,
    },
    sessionPosition: 'end',
  },
  priority: 4,
  cooldownDays: 5,

  estimatedTotalMinutes: { min: 15, max: 22 },

  pages: [
    // PAGE 1: Быстрая диагностика
    {
      pageId: 'diagnostic',
      type: 'test',
      title: 'Быстрая проверка',
      goal: 'Определить текущий уровень по всем навыкам',
      targetSkills: ['grammar', 'vocabulary', 'comprehension'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: ответь быстро, не задумывайся долго', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'multiple_choice', count: 3, difficulty: 'adaptive', placeholder: 'Грамматика: выбери правильный вариант' },
        { type: 'multiple_choice', count: 3, difficulty: 'adaptive', placeholder: 'Лексика: выбери правильное значение' },
        { type: 'multiple_choice', count: 2, difficulty: 'adaptive', placeholder: 'Понимание: ответь на вопрос по тексту' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['grammar', 'vocabulary', 'comprehension'],
        typicalErrors: ['various'],
        passingScore: 0.5,
      },
      exitCriteria: {
        type: 'completion',
        value: 8,
        description: 'Ответить на все вопросы',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 2: Грамматический блок
    {
      pageId: 'grammar-block',
      type: 'drill',
      title: 'Грамматика: повторение',
      goal: 'Закрепить грамматические конструкции',
      targetSkills: ['grammar'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'rule', placeholder: 'Краткое напоминание грамматического правила (на основе ошибок)', required: true, maxLength: 200 },
      ],

      exercises: [
        { type: 'fill_gap', count: 4, difficulty: 'adaptive', placeholder: 'Заполни пропуск правильной формой' },
        { type: 'error_correction', count: 2, difficulty: 'adaptive', placeholder: 'Найди и исправь ошибку' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['grammar'],
        typicalErrors: ['tense_error', 'agreement_error', 'article_error'],
        passingScore: 0.67,
      },
      exitCriteria: {
        type: 'score',
        value: 0.67,
        description: 'Минимум 4 из 6 правильно',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 3: Лексический блок
    {
      pageId: 'vocabulary-block',
      type: 'drill',
      title: 'Лексика: повторение',
      goal: 'Закрепить изученные слова',
      targetSkills: ['vocabulary'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Слова для повторения (из недавних уроков)', required: true, maxLength: 300 },
      ],

      exercises: [
        { type: 'matching', count: 4, difficulty: 'adaptive', placeholder: 'Соедини слово с определением' },
        { type: 'fill_gap', count: 3, difficulty: 'adaptive', placeholder: 'Вставь подходящее слово' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['vocabulary'],
        typicalErrors: ['wrong_word', 'collocation_error'],
        passingScore: 0.71,
      },
      exitCriteria: {
        type: 'score',
        value: 0.71,
        description: 'Минимум 5 из 7 правильно',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 4: Комплексное понимание
    {
      pageId: 'comprehension-block',
      type: 'use',
      title: 'Понимание текста',
      goal: 'Применить все навыки для понимания',
      targetSkills: ['comprehension', 'vocabulary', 'grammar'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Короткий текст (100-120 слов) на интересную пользователю тему', required: true, maxLength: 600 },
        { type: 'audio', placeholder: 'Аудио версия текста (опционально)', required: false },
      ],

      exercises: [
        { type: 'multiple_choice', count: 3, difficulty: 'adaptive', placeholder: 'Вопросы на понимание текста' },
        { type: 'fill_gap', count: 2, difficulty: 'adaptive', placeholder: 'Заполни пропуски словами из текста' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['comprehension', 'vocabulary'],
        typicalErrors: ['detail_miss', 'inference_error'],
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

    // PAGE 5: Интегрированное задание
    {
      pageId: 'integration',
      type: 'test',
      title: 'Интегрированное задание',
      goal: 'Объединить все навыки',
      targetSkills: ['grammar', 'vocabulary', 'writing', 'comprehension'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Контекст для письменного задания (продолжение темы из текста)', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'writing_task', count: 1, difficulty: 'adaptive', placeholder: 'Напиши 3-5 предложений, используя изученную лексику и грамматику' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['writing', 'grammar', 'vocabulary'],
        typicalErrors: ['grammar_in_writing', 'vocabulary_range', 'coherence'],
        passingScore: 0.7,
      },
      exitCriteria: {
        type: 'score',
        value: 0.7,
        description: 'Оценка письменного задания ≥ 70%',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 6: Рефлексия
    {
      pageId: 'reflection',
      type: 'reflection',
      title: 'Итоги и рекомендации',
      goal: 'Понять прогресс и зоны роста',
      targetSkills: ['comprehension'],
      estimatedMinutes: 2,

      contentBlocks: [
        { type: 'text', placeholder: 'Персонализированный анализ результатов и рекомендации', required: true, maxLength: 400 },
        { type: 'tip', placeholder: 'Что повторить в следующий раз', required: true, maxLength: 200 },
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
        description: 'Прочитать рекомендации',
      },
      hintsAvailable: false,
      maxHints: 0,
    },
  ],

  contentGuidelines: {
    tone: 'neutral',
    useUserInterests: true,
    exampleStyle: 'realistic',
    difficultyAdaptation: 'strict',
  },

  version: '1.0.0',
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-01-01T00:00:00Z',
};
