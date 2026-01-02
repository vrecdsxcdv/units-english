import type { TopicTemplate } from '@enbai/types';

/**
 * WORD FORMATION FACTORY
 *
 * Изучение словообразования: приставки, суффиксы, конверсия.
 * Паттерн: Корень → Правила → Тренировка → Производные → Применение
 */
export const wordFormationFactoryTemplate: TopicTemplate = {
  id: 'word-formation-factory',
  schemaVersion: '1.0',

  name: 'Word Formation Factory',
  description: 'Освоение словообразования для расширения словарного запаса.',
  icon: '🏭',
  category: 'word_formation',

  applicableCEFR: ['A2', 'B1', 'B2', 'C1'],
  ieltsFocus: 'reading',

  primarySkills: ['word_formation'],
  secondarySkills: ['vocabulary', 'grammar', 'comprehension'],

  whenToUse: {
    skillConditions: [
      { skill: 'word_formation', condition: 'below', value: 0.5 }
    ],
    recentErrorTopics: ['wrong_word_form', 'suffix_error', 'prefix_error'],
    interestBoost: ['reading', 'writing', 'exams'],
    sessionPosition: 'middle',
  },
  priority: 6,
  cooldownDays: 3,

  estimatedTotalMinutes: { min: 12, max: 18 },

  pages: [
    // PAGE 1: Корневое слово
    {
      pageId: 'root-word',
      type: 'explanation',
      title: 'Корень: {rootWord}',
      goal: 'Понять базовое значение корня',
      targetSkills: ['vocabulary', 'word_formation'],
      estimatedMinutes: 2,

      contentBlocks: [
        { type: 'text', placeholder: 'Корневое слово, его происхождение и базовое значение', required: true, maxLength: 200 },
        { type: 'example', placeholder: '3-4 примера использования корневого слова в контексте', required: true, maxLength: 300 },
        { type: 'tip', placeholder: 'Мнемоника или ассоциация для запоминания', required: true, maxLength: 100 },
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
        description: 'Понять корень слова',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 2: Приставки
    {
      pageId: 'prefixes',
      type: 'explanation',
      title: 'Приставки',
      goal: 'Изучить приставки для данного корня',
      targetSkills: ['word_formation', 'vocabulary'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'table', placeholder: 'Таблица: Приставка | Значение | Слово | Перевод', required: true, maxLength: 600 },
        { type: 'rule', placeholder: 'Правила сочетания приставок с данным корнем', required: true, maxLength: 200 },
        { type: 'warning', placeholder: 'Частые ошибки с приставками (un- vs in- и т.д.)', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'matching', count: 5, difficulty: 'adaptive', placeholder: 'Соедини приставку с результирующим словом' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['word_formation'],
        typicalErrors: ['wrong_prefix'],
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

    // PAGE 3: Суффиксы
    {
      pageId: 'suffixes',
      type: 'explanation',
      title: 'Суффиксы',
      goal: 'Изучить суффиксы и части речи',
      targetSkills: ['word_formation', 'grammar'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'table', placeholder: 'Таблица: Суффикс | Часть речи | Слово | Пример в предложении', required: true, maxLength: 700 },
        { type: 'rule', placeholder: 'Как суффикс меняет часть речи и значение', required: true, maxLength: 200 },
        { type: 'comparison', placeholder: 'Сравнение похожих суффиксов (-tion vs -ment, -ful vs -less)', required: true, maxLength: 200 },
      ],

      exercises: [
        { type: 'fill_gap', count: 5, difficulty: 'adaptive', placeholder: 'Вставь правильную форму слова (суффикс)' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['word_formation', 'grammar'],
        typicalErrors: ['wrong_suffix', 'wrong_part_of_speech'],
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

    // PAGE 4: Семья слов
    {
      pageId: 'word-family',
      type: 'drill',
      title: 'Семья слов',
      goal: 'Освоить все формы слова',
      targetSkills: ['word_formation', 'vocabulary'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'table', placeholder: 'Полная таблица: Noun | Verb | Adjective | Adverb', required: true, maxLength: 400 },
      ],

      exercises: [
        { type: 'fill_gap', count: 6, difficulty: 'adaptive', placeholder: 'Заполни пропуск правильной формой слова в предложении' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['word_formation', 'grammar'],
        typicalErrors: ['wrong_word_form', 'context_mismatch'],
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

    // PAGE 5: Применение
    {
      pageId: 'application',
      type: 'test',
      title: 'Словообразование в текстах',
      goal: 'Применить знания в контексте',
      targetSkills: ['word_formation', 'comprehension', 'vocabulary'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Короткий текст (80-100 слов) с пропусками для словообразования', required: true, maxLength: 500 },
      ],

      exercises: [
        { type: 'fill_gap', count: 5, difficulty: 'fixed', placeholder: 'Образуй правильную форму слова для заполнения пропуска' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['word_formation', 'comprehension'],
        typicalErrors: ['wrong_word_form', 'spelling_error'],
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
    tone: 'neutral',
    useUserInterests: true,
    exampleStyle: 'realistic',
    difficultyAdaptation: 'flexible',
  },

  version: '1.0.0',
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-01-01T00:00:00Z',
};
