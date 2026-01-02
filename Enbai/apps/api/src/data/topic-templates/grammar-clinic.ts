import type { TopicTemplate } from '@enbai/types';

/**
 * GRAMMAR CLINIC
 *
 * Глубокое изучение одной грамматической темы.
 * Паттерн: Правило → Примеры → Практика → Применение → Проверка
 */
export const grammarClinicTemplate: TopicTemplate = {
  id: 'grammar-clinic',
  schemaVersion: '1.0',

  name: 'Grammar Clinic',
  description: 'Глубокое погружение в одну грамматическую тему с объяснением, примерами и практикой.',
  icon: '📐',
  category: 'grammar',

  applicableCEFR: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  ieltsFocus: 'writing',

  primarySkills: ['grammar'],
  secondarySkills: ['writing', 'comprehension'],

  whenToUse: {
    skillConditions: [
      { skill: 'grammar', condition: 'below', value: 0.6 }
    ],
    recentErrorTopics: ['tenses', 'articles', 'prepositions', 'conditionals', 'passive'],
    interestBoost: [],
    sessionPosition: 'start',
  },
  priority: 8,
  cooldownDays: 3,

  estimatedTotalMinutes: { min: 15, max: 25 },

  pages: [
    // PAGE 1: Введение и правило
    {
      pageId: 'intro-rule',
      type: 'explanation',
      title: '{grammarTopic}: Основы',
      goal: 'Понять правило и когда его использовать',
      targetSkills: ['grammar', 'comprehension'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Краткое введение: зачем нужна эта конструкция (2-3 предложения)', required: true, maxLength: 200 },
        { type: 'rule', placeholder: 'Основное правило с формулой: Subject + Verb + ...', required: true, maxLength: 300 },
        { type: 'tip', placeholder: 'Полезный совет для запоминания', required: true, maxLength: 150 },
        { type: 'warning', placeholder: 'Типичная ошибка, которую делают русскоговорящие', required: true, maxLength: 150 },
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
        description: 'Прочитать страницу',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 2: Примеры
    {
      pageId: 'examples',
      type: 'example',
      title: 'Примеры использования',
      goal: 'Увидеть правило в контексте реальных предложений',
      targetSkills: ['grammar', 'comprehension'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'example', placeholder: 'Пример 1: простое предложение + перевод', required: true, maxLength: 200 },
        { type: 'example', placeholder: 'Пример 2: предложение посложнее + перевод', required: true, maxLength: 200 },
        { type: 'example', placeholder: 'Пример 3: из интересов пользователя + перевод', required: true, maxLength: 200 },
        { type: 'comparison', placeholder: 'Правильно vs Неправильно: показать типичную ошибку', required: true, maxLength: 250 },
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
        description: 'Изучить примеры',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 3: Распознавание
    {
      pageId: 'recognition-drill',
      type: 'drill',
      title: 'Найди правильный вариант',
      goal: 'Научиться распознавать правильное использование',
      targetSkills: ['grammar'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: выбери правильный вариант', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'multiple_choice', count: 4, difficulty: 'adaptive', placeholder: 'Выбор между правильной и неправильной формой' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['grammar'],
        typicalErrors: ['wrong_form', 'wrong_tense', 'missing_element'],
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

    // PAGE 4: Заполнение пропусков
    {
      pageId: 'fill-gaps',
      type: 'drill',
      title: 'Заполни пропуски',
      goal: 'Применить правило самостоятельно',
      targetSkills: ['grammar', 'writing'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: заполни пропуски правильной формой', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'fill_gap', count: 5, difficulty: 'adaptive', placeholder: 'Предложения с пропусками, контекст из интересов пользователя' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['grammar', 'writing'],
        typicalErrors: ['spelling', 'wrong_form', 'wrong_word'],
        passingScore: 0.8,
      },
      exitCriteria: {
        type: 'score',
        value: 0.8,
        description: 'Минимум 4 из 5 правильно',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 5: Исправление ошибок
    {
      pageId: 'error-correction',
      type: 'use',
      title: 'Найди и исправь ошибки',
      goal: 'Развить чувство языка через поиск ошибок',
      targetSkills: ['grammar', 'comprehension'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: найди ошибку и исправь', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'error_correction', count: 3, difficulty: 'adaptive', placeholder: 'Предложения с грамматическими ошибками' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['grammar', 'comprehension'],
        typicalErrors: ['missed_error', 'wrong_correction'],
        passingScore: 0.66,
      },
      exitCriteria: {
        type: 'score',
        value: 0.66,
        description: 'Минимум 2 из 3 правильно',
      },
      hintsAvailable: true,
      maxHints: 1,
    },

    // PAGE 6: Финальный тест
    {
      pageId: 'final-test',
      type: 'test',
      title: 'Проверь себя',
      goal: 'Подтвердить понимание темы',
      targetSkills: ['grammar', 'writing'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Финальная проверка: покажи что усвоил', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'multiple_choice', count: 2, difficulty: 'fixed', placeholder: 'Сложные случаи использования' },
        { type: 'fill_gap', count: 2, difficulty: 'fixed', placeholder: 'Контекстные предложения' },
        { type: 'rewrite', count: 1, difficulty: 'fixed', placeholder: 'Перепиши предложение используя изученную конструкцию' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['grammar', 'writing'],
        typicalErrors: ['wrong_form', 'incomplete_transformation'],
        passingScore: 0.8,
      },
      exitCriteria: {
        type: 'score',
        value: 0.8,
        description: 'Минимум 80% правильных ответов',
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
