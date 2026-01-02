import type { TopicTemplate } from '@enbai/types';

/**
 * VOCABULARY BUILDER
 *
 * Изучение лексики по тематическому блоку.
 * Паттерн: Слова в контексте → Значения → Использование → Коллокации → Проверка
 */
export const vocabularyBuilderTemplate: TopicTemplate = {
  id: 'vocabulary-builder',
  schemaVersion: '1.0',

  name: 'Vocabulary Builder',
  description: 'Освоение 8-12 новых слов по теме с контекстом, коллокациями и практикой.',
  icon: '📚',
  category: 'vocabulary',

  applicableCEFR: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  ieltsFocus: 'reading',

  primarySkills: ['vocabulary'],
  secondarySkills: ['comprehension', 'word_formation'],

  whenToUse: {
    skillConditions: [
      { skill: 'vocabulary', condition: 'below', value: 0.7 }
    ],
    recentErrorTopics: ['unknown_word', 'wrong_collocation', 'meaning_confusion'],
    interestBoost: ['technology', 'travel', 'business', 'science', 'entertainment'],
    sessionPosition: 'any',
  },
  priority: 7,
  cooldownDays: 2,

  estimatedTotalMinutes: { min: 15, max: 25 },

  pages: [
    // PAGE 1: Знакомство со словами в контексте
    {
      pageId: 'words-in-context',
      type: 'explanation',
      title: '{topic}: Новые слова',
      goal: 'Познакомиться с новыми словами в естественном контексте',
      targetSkills: ['vocabulary', 'comprehension'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Короткий текст (80-120 слов) по теме интересов, содержащий 8-12 целевых слов', required: true, maxLength: 600 },
        { type: 'tip', placeholder: 'Совет: как угадывать значение из контекста', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'multiple_choice', count: 3, difficulty: 'adaptive', placeholder: 'Угадай значение выделенного слова из контекста' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['comprehension'],
        typicalErrors: ['context_misread'],
        passingScore: 0.66,
      },
      exitCriteria: {
        type: 'score',
        value: 0.66,
        description: 'Угадать минимум 2 из 3 слов',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 2: Определения и произношение
    {
      pageId: 'definitions',
      type: 'explanation',
      title: 'Значения и произношение',
      goal: 'Выучить точные значения и правильное произношение',
      targetSkills: ['vocabulary', 'pronunciation'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'table', placeholder: 'Таблица: Слово | Транскрипция | Перевод | Пример', required: true, maxLength: 1000 },
        { type: 'audio', placeholder: 'Аудио произношение каждого слова (TTS)', required: true },
        { type: 'tip', placeholder: 'Мнемоника или ассоциация для запоминания', required: false, maxLength: 200 },
      ],

      exercises: [
        { type: 'listen_and_repeat', count: 4, difficulty: 'adaptive', placeholder: 'Послушай и повтори слово' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['pronunciation'],
        typicalErrors: ['stress_position', 'vowel_sound'],
        passingScore: 1.0,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Прослушать и повторить все слова',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 3: Сопоставление
    {
      pageId: 'matching',
      type: 'drill',
      title: 'Соедини слово и значение',
      goal: 'Закрепить связь между словом и значением',
      targetSkills: ['vocabulary'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: соедини слова с определениями', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'matching', count: 8, difficulty: 'adaptive', placeholder: 'Слова ↔ Определения на английском' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['vocabulary'],
        typicalErrors: ['meaning_confusion', 'similar_words'],
        passingScore: 0.75,
      },
      exitCriteria: {
        type: 'score',
        value: 0.75,
        description: 'Минимум 6 из 8 правильно',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 4: Коллокации
    {
      pageId: 'collocations',
      type: 'use',
      title: 'С какими словами сочетается?',
      goal: 'Выучить естественные сочетания слов',
      targetSkills: ['vocabulary', 'fluency'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Объяснение: почему коллокации важны', required: true, maxLength: 150 },
        { type: 'example', placeholder: 'Примеры коллокаций для каждого слова', required: true, maxLength: 400 },
        { type: 'warning', placeholder: 'Типичная ошибка: неправильная коллокация (русский интерференс)', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'fill_gap', count: 5, difficulty: 'adaptive', placeholder: 'Выбери правильную коллокацию: make/do, have/take, etc.' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['vocabulary', 'fluency'],
        typicalErrors: ['wrong_collocation', 'literal_translation'],
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

    // PAGE 5: Использование в предложениях
    {
      pageId: 'sentence-building',
      type: 'use',
      title: 'Используй в предложении',
      goal: 'Научиться активно использовать новые слова',
      targetSkills: ['vocabulary', 'writing'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: заполни пропуски подходящим словом из списка', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'fill_gap', count: 6, difficulty: 'adaptive', placeholder: 'Предложения с пропусками, выбор из изученных слов' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['vocabulary', 'writing'],
        typicalErrors: ['wrong_word_choice', 'wrong_form'],
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

    // PAGE 6: Финальный тест
    {
      pageId: 'vocabulary-test',
      type: 'test',
      title: 'Проверка словарного запаса',
      goal: 'Подтвердить усвоение новых слов',
      targetSkills: ['vocabulary'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Покажи что запомнил все слова', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'translation', count: 4, difficulty: 'fixed', placeholder: 'Переведи слово (RU→EN)' },
        { type: 'fill_gap', count: 3, difficulty: 'fixed', placeholder: 'Контекстные предложения' },
        { type: 'multiple_choice', count: 3, difficulty: 'fixed', placeholder: 'Выбери правильное значение/коллокацию' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['vocabulary'],
        typicalErrors: ['spelling', 'meaning_confusion', 'wrong_collocation'],
        passingScore: 0.8,
      },
      exitCriteria: {
        type: 'score',
        value: 0.8,
        description: 'Минимум 8 из 10 правильно',
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
