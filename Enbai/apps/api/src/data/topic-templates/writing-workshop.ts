import type { TopicTemplate } from '@enbai/types';

/**
 * WRITING WORKSHOP
 *
 * Развитие письменных навыков через структурированную практику.
 * Паттерн: Модель → Анализ → Планирование → Написание → Редактирование
 */
export const writingWorkshopTemplate: TopicTemplate = {
  id: 'writing-workshop',
  schemaVersion: '1.0',

  name: 'Writing Workshop',
  description: 'Пошаговое создание текста: от модели до собственного произведения.',
  icon: '✍️',
  category: 'writing',

  applicableCEFR: ['A2', 'B1', 'B2', 'C1', 'C2'],
  ieltsFocus: 'writing',

  primarySkills: ['writing'],
  secondarySkills: ['grammar', 'vocabulary'],

  whenToUse: {
    skillConditions: [
      { skill: 'writing', condition: 'below', value: 0.5 }
    ],
    recentErrorTopics: ['structure', 'cohesion', 'register'],
    interestBoost: ['blogging', 'business', 'academic'],
    sessionPosition: 'start',
    preferredTimeOfDay: 'morning',
  },
  priority: 6,
  cooldownDays: 4,

  estimatedTotalMinutes: { min: 20, max: 35 },

  pages: [
    // PAGE 1: Модель текста
    {
      pageId: 'model-text',
      type: 'example',
      title: '{textType}: Образец',
      goal: 'Увидеть хороший пример целевого типа текста',
      targetSkills: ['comprehension', 'writing'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Описание задачи: что нужно написать (email, эссе, отзыв)', required: true, maxLength: 150 },
        { type: 'example', placeholder: 'Образцовый текст (150-250 слов) с выделенными структурными элементами', required: true, maxLength: 1200 },
        { type: 'tip', placeholder: 'Что делает этот текст хорошим', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'multiple_choice', count: 3, difficulty: 'adaptive', placeholder: 'Вопросы на анализ структуры текста' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['comprehension'],
        typicalErrors: ['structure_misunderstanding'],
        passingScore: 0.66,
      },
      exitCriteria: {
        type: 'score',
        value: 0.66,
        description: 'Ответить на 2 из 3 вопросов',
      },
      hintsAvailable: true,
      maxHints: 1,
    },

    // PAGE 2: Структура и связки
    {
      pageId: 'structure-connectors',
      type: 'explanation',
      title: 'Структура и связки',
      goal: 'Выучить структуру и слова-связки',
      targetSkills: ['writing', 'vocabulary'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'rule', placeholder: 'Структура текста: введение → основная часть → заключение', required: true, maxLength: 300 },
        { type: 'table', placeholder: 'Таблица связок: Функция | Примеры (firstly, however, in conclusion)', required: true, maxLength: 500 },
        { type: 'warning', placeholder: 'Типичная ошибка русскоговорящих: злоупотребление "and", "but"', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'fill_gap', count: 4, difficulty: 'adaptive', placeholder: 'Вставь подходящую связку в предложение' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['vocabulary', 'writing'],
        typicalErrors: ['wrong_connector', 'overuse'],
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

    // PAGE 3: Планирование
    {
      pageId: 'planning',
      type: 'use',
      title: 'Планирование текста',
      goal: 'Создать план своего текста',
      targetSkills: ['writing'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Твоя задача: напиши [тип текста] на тему [тема из интересов]', required: true, maxLength: 200 },
        { type: 'tip', placeholder: 'Шаблон плана: 3-5 пунктов', required: true, maxLength: 200 },
      ],

      exercises: [
        { type: 'ordering', count: 1, difficulty: 'adaptive', placeholder: 'Расположи идеи в логическом порядке' },
        { type: 'writing_task', count: 1, difficulty: 'adaptive', placeholder: 'Напиши 3-5 ключевых идей для своего текста' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['writing'],
        typicalErrors: ['no_structure', 'irrelevant_points'],
        passingScore: 0.7,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Создать план текста',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 4: Написание черновика
    {
      pageId: 'drafting',
      type: 'use',
      title: 'Пишем черновик',
      goal: 'Написать первый вариант текста',
      targetSkills: ['writing', 'grammar', 'vocabulary'],
      estimatedMinutes: 10,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: напиши текст 100-150 слов, используя план', required: true, maxLength: 150 },
        { type: 'tip', placeholder: 'Не думай о совершенстве, просто пиши', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'writing_task', count: 1, difficulty: 'adaptive', placeholder: 'Написать текст по плану (100-150 слов)' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['writing', 'grammar', 'vocabulary'],
        typicalErrors: ['off_topic', 'grammar_errors', 'limited_vocabulary', 'no_structure'],
        passingScore: 0.6,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Написать черновик',
      },
      hintsAvailable: true,
      maxHints: 3,
    },

    // PAGE 5: Редактирование
    {
      pageId: 'editing',
      type: 'reflection',
      title: 'Редактирование',
      goal: 'Улучшить текст на основе обратной связи',
      targetSkills: ['writing', 'grammar'],
      estimatedMinutes: 6,

      contentBlocks: [
        { type: 'text', placeholder: 'AI анализ твоего текста: что хорошо, что улучшить', required: true, maxLength: 500 },
        { type: 'comparison', placeholder: 'Пример улучшения: было → стало', required: true, maxLength: 300 },
      ],

      exercises: [
        { type: 'rewrite', count: 2, difficulty: 'adaptive', placeholder: 'Перепиши предложение лучше (на основе feedback)' },
        { type: 'writing_task', count: 1, difficulty: 'adaptive', placeholder: 'Улучши свой текст с учётом замечаний' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['writing', 'grammar'],
        typicalErrors: ['same_mistakes', 'overcorrection'],
        passingScore: 0.7,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Отредактировать текст',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 6: Финальная версия
    {
      pageId: 'final-version',
      type: 'test',
      title: 'Финальная версия',
      goal: 'Создать финальную версию текста',
      targetSkills: ['writing'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Чек-лист: структура ✓, связки ✓, грамматика ✓, лексика ✓', required: true, maxLength: 200 },
      ],

      exercises: [
        { type: 'writing_task', count: 1, difficulty: 'fixed', placeholder: 'Финальная версия текста' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['writing', 'grammar', 'vocabulary'],
        typicalErrors: ['remaining_errors', 'poor_structure'],
        passingScore: 0.75,
      },
      exitCriteria: {
        type: 'score',
        value: 0.75,
        description: 'Получить минимум 75% за финальный текст',
      },
      hintsAvailable: false,
      maxHints: 0,
    },
  ],

  contentGuidelines: {
    tone: 'neutral',
    useUserInterests: true,
    exampleStyle: 'realistic',
    difficultyAdaptation: 'flexible',
  },

  version: '1.0.0',
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-01-01T00:00:00Z',
};
