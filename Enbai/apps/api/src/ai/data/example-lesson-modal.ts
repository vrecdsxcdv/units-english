/**
 * Example LessonModal
 *
 * This shows what a complete, UI-ready LessonModal looks like
 * when generated from a TeachingTopicTemplate (blueprint).
 */

import type { LessonModal, LessonPage, TeachingContentBlock, Interaction } from '@enbai/types';

/**
 * Example lesson for A1 student with weak grammar, interested in technology
 */
export const EXAMPLE_LESSON_ARTICLES: LessonModal = {
  id: 'lesson_articles_20240115_user123',
  templateId: 'grammar_articles_basic',

  // Metadata
  title: 'Articles: A, An, The',
  titleRu: 'Артикли: A, An, The',
  cefrLevel: 'A1',
  targetSkills: ['grammar', 'vocabulary'],
  ieltsComponents: ['writing', 'speaking'],
  estimatedMinutes: 8,

  // Pages (5 pages based on blueprint)
  pages: [
    // Page 1: Hook
    {
      pageIndex: 0,
      pageId: 'page_hook',
      type: 'hook',
      title: 'Зачем нужны артикли?',
      titleRu: 'Зачем нужны артикли?',
      contentBlocks: [
        {
          type: 'text',
          content: 'В русском языке артиклей нет, но в английском они очень важны! Они помогают понять, о чём именно мы говорим.',
          contentRu: 'В русском языке артиклей нет, но в английском они очень важны!',
        },
        {
          type: 'example',
          content: 'Сравни:',
          english: 'I need a phone. vs I need the phone.',
          russian: 'Мне нужен (какой-то) телефон. vs Мне нужен (тот самый) телефон.',
          highlight: 'a phone, the phone',
          context: 'Артикль меняет смысл!',
        },
      ],
      interactions: [],
      hints: [],
      successCriteria: {
        minScore: 0,
        requiredInteractionsCorrect: 0,
        allowRetry: false,
        maxRetries: 0,
      },
      completed: false,
      attemptCount: 0,
    },

    // Page 2: Explain
    {
      pageIndex: 1,
      pageId: 'page_explain_a_an',
      type: 'explain',
      title: 'Правило a/an',
      titleRu: 'Правило a/an',
      contentBlocks: [
        {
          type: 'rule',
          content: 'Используй "a" перед согласными звуками, "an" перед гласными.',
          rule: 'Используй "a" перед согласными звуками, "an" перед гласными.',
          ruleRu: 'Используй "a" перед согласными звуками, "an" перед гласными.',
          exceptions: ['an hour (h не произносится)', 'a university (звук "ю")'],
        },
        {
          type: 'example',
          content: 'Примеры с "a":',
          english: 'a computer, a phone, a laptop',
          russian: 'компьютер, телефон, ноутбук',
          highlight: 'a',
        },
        {
          type: 'example',
          content: 'Примеры с "an":',
          english: 'an app, an iPhone, an email',
          russian: 'приложение, айфон, имейл',
          highlight: 'an',
        },
        {
          type: 'tip',
          content: 'Смотри на ЗВУК, а не букву! "Hour" пишется с h, но произносится "аур", поэтому "an hour".',
          icon: 'lightbulb',
        },
      ],
      interactions: [
        {
          interactionId: 'check_a_an_1',
          kind: 'mcq',
          prompt: 'Выбери правильный артикль: ___ Apple (компания)',
          promptRu: 'Выбери правильный артикль',
          content: {
            type: 'multiple_choice',
            question: 'Выбери правильный артикль: ___ Apple (компания)',
            options: [
              { id: 'a', text: 'a' },
              { id: 'b', text: 'an' },
            ],
            correctOptionId: 'b',
            explanation: 'Apple начинается с гласного звука "э", поэтому "an Apple".',
          },
          expectedAnswer: 'b',
          rubric: {
            type: 'auto',
            scoringMethod: 'exact',
            skillWeights: { grammar: 1.0 },
          },
          targetSkills: ['grammar'],
          difficulty: 2,
          hints: ['Как произносится первая буква?'],
          attempted: false,
        },
      ],
      hints: ['Думай о звуке, не о букве'],
      successCriteria: {
        minScore: 0.8,
        requiredInteractionsCorrect: 1,
        allowRetry: true,
        maxRetries: 2,
      },
      completed: false,
      attemptCount: 0,
    },

    // Page 3: Check
    {
      pageIndex: 2,
      pageId: 'page_check',
      type: 'check',
      title: 'Проверка понимания',
      titleRu: 'Проверка понимания',
      contentBlocks: [
        {
          type: 'text',
          content: 'Давай проверим, понял ли ты правило. Заполни пропуски:',
        },
      ],
      interactions: [
        {
          interactionId: 'fill_1',
          kind: 'fill_blank',
          prompt: 'I bought ___ new smartphone yesterday.',
          content: {
            type: 'fill_blanks',
            text: 'I bought {{blank_1}} new smartphone yesterday.',
            blanks: [{ id: 'blank_1', correctAnswers: ['a'] }],
          },
          expectedAnswer: 'a',
          acceptableVariants: ['a'],
          rubric: {
            type: 'auto',
            scoringMethod: 'exact',
            skillWeights: { grammar: 1.0 },
          },
          targetSkills: ['grammar'],
          difficulty: 3,
          hints: ['Smartphone начинается с согласного звука "с"'],
          attempted: false,
        },
        {
          interactionId: 'fill_2',
          kind: 'fill_blank',
          prompt: 'She is ___ engineer at Google.',
          content: {
            type: 'fill_blanks',
            text: 'She is {{blank_1}} engineer at Google.',
            blanks: [{ id: 'blank_1', correctAnswers: ['an'] }],
          },
          expectedAnswer: 'an',
          acceptableVariants: ['an'],
          rubric: {
            type: 'auto',
            scoringMethod: 'exact',
            skillWeights: { grammar: 1.0 },
          },
          targetSkills: ['grammar'],
          difficulty: 3,
          hints: ['Engineer начинается с гласного звука "э"'],
          attempted: false,
        },
      ],
      hints: ['Помни: смотри на звук, не на букву'],
      successCriteria: {
        minScore: 0.7,
        requiredInteractionsCorrect: 1,
        allowRetry: true,
        maxRetries: 2,
      },
      completed: false,
      attemptCount: 0,
    },

    // Page 4: Practice
    {
      pageIndex: 3,
      pageId: 'page_practice',
      type: 'practice',
      title: 'Практика',
      titleRu: 'Практика',
      contentBlocks: [
        {
          type: 'text',
          content: 'Отлично! Теперь больше практики:',
        },
      ],
      interactions: [
        {
          interactionId: 'practice_1',
          kind: 'fill_blank',
          prompt: 'My brother works as ___ IT specialist.',
          content: {
            type: 'fill_blanks',
            text: 'My brother works as {{blank_1}} IT specialist.',
            blanks: [{ id: 'blank_1', correctAnswers: ['an'] }],
          },
          expectedAnswer: 'an',
          rubric: {
            type: 'auto',
            scoringMethod: 'exact',
            skillWeights: { grammar: 0.8, vocabulary: 0.2 },
          },
          targetSkills: ['grammar', 'vocabulary'],
          difficulty: 4,
          hints: ['IT читается "ай-ти" - начинается с гласного звука'],
          attempted: false,
        },
        {
          interactionId: 'practice_2',
          kind: 'mcq',
          prompt: 'Какое предложение правильное?',
          content: {
            type: 'multiple_choice',
            question: 'Какое предложение правильное?',
            options: [
              { id: 'a', text: 'I need a USB cable.' },
              { id: 'b', text: 'I need an USB cable.' },
            ],
            correctOptionId: 'a',
            explanation: 'USB читается "ю-эс-би", начинается с согласного звука "ю".',
          },
          expectedAnswer: 'a',
          rubric: {
            type: 'auto',
            scoringMethod: 'exact',
            skillWeights: { grammar: 1.0 },
          },
          targetSkills: ['grammar'],
          difficulty: 4,
          hints: ['Как произносится USB?'],
          attempted: false,
        },
      ],
      hints: [],
      successCriteria: {
        minScore: 0.6,
        requiredInteractionsCorrect: 1,
        allowRetry: true,
        maxRetries: 3,
      },
      completed: false,
      attemptCount: 0,
    },

    // Page 5: Summary
    {
      pageIndex: 4,
      pageId: 'page_summary',
      type: 'summary',
      title: 'Итог',
      titleRu: 'Итог',
      contentBlocks: [
        {
          type: 'rule',
          content: 'a + согласный звук, an + гласный звук',
          rule: 'a + согласный звук, an + гласный звук',
          ruleRu: 'a + согласный звук, an + гласный звук',
          exceptions: ['Смотри на ЗВУК, не на букву!'],
        },
        {
          type: 'tip',
          content: 'Продолжай практиковаться! В следующий раз изучим "the" - определённый артикль.',
          icon: 'star',
        },
      ],
      interactions: [],
      hints: [],
      successCriteria: {
        minScore: 0,
        requiredInteractionsCorrect: 0,
        allowRetry: false,
        maxRetries: 0,
      },
      completed: false,
      attemptCount: 0,
    },
  ],

  // Progress tracking
  currentPageIndex: 0,
  completedPages: [],

  // Evaluation
  evaluationRubric: {
    passingScore: 0.7,
    skillWeights: { grammar: 0.8, vocabulary: 0.2 },
    bonusForSpeed: true,
    penaltyForHints: true,
  },

  // Generation metadata
  generatedAt: new Date().toISOString(),
  generatedFor: 'user123',
  personalizedFor: {
    interests: ['technology', 'programming'],
    weakSkills: ['grammar', 'vocabulary'],
    recentErrors: ['articles', 'a_an_confusion'],
  },
};

/**
 * Example of AI response with lesson JSON
 */
export const EXAMPLE_AI_RESPONSE = `Привет! Я вижу, что тебе нужно подтянуть грамматику, особенно артикли.

Сегодня разберём простое правило: когда использовать "a" и когда "an".

В русском языке артиклей нет, поэтому эта тема часто вызывает сложности. Но не волнуйся — правило очень простое!

Главное правило:
• "a" — перед согласными ЗВУКАМИ (a phone, a computer)
• "an" — перед гласными ЗВУКАМИ (an app, an email)

Важно: смотри на ЗВУК, а не на букву!
Например: "an hour" (h не произносится), но "a university" (звук "ю").

Давай сразу проверим — как ты думаешь, что правильно: "a iPhone" или "an iPhone"?

\`\`\`json
{
  "state": "EXPLAIN",
  "nextState": "CHECK",
  "microTopic": "articles_a_an",
  "targetSkill": "grammar",
  "checkQuestion": "a iPhone или an iPhone?",
  "simplificationNeeded": false,
  "conceptsToReview": []
}
\`\`\``;

export default EXAMPLE_LESSON_ARTICLES;
