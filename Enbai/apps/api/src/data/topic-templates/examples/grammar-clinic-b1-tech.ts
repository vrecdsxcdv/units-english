/**
 * Example: Filled Grammar Clinic template
 *
 * User profile:
 * - CEFR: B1
 * - Interests: технологии, игры
 * - Focus: Present Perfect vs Past Simple
 */

import type { GeneratedTopic } from '@enbai/types';

export const grammarClinicB1TechExample: GeneratedTopic = {
  id: 'topic-grammar-clinic-20250101-001',
  templateId: 'grammar-clinic',
  userId: 'example-user-id',

  userLevel: 'B1',
  userInterests: ['технологии', 'игры'],
  targetSkills: ['grammar', 'comprehension'],

  title: 'Present Perfect vs Past Simple: Gaming Achievements',

  pages: [
    // PAGE 1: Hook
    {
      pageId: 'hook',
      templatePageId: 'hook',
      title: 'Когда это случилось?',
      content: [
        {
          type: 'text',
          content: 'Посмотри на два предложения:\n\n"I played this game yesterday."\n"I have played this game many times."\n\nОба говорят о прошлом, но в чём разница?',
        },
        {
          type: 'example',
          content: '🎮 "I finished Elden Ring last month." — конкретное время\n🎮 "I have finished Elden Ring three times." — важен опыт, не время',
        },
      ],
      exercises: [
        {
          id: 'hook-q1',
          type: 'multiple_choice',
          instruction: 'Какое предложение говорит о конкретном моменте в прошлом?',
          content: {
            options: [
              'I have bought a new gaming mouse.',
              'I bought a new gaming mouse yesterday.',
              'I have used this mouse for two years.',
            ],
          },
          correctAnswer: 1,
          explanation: '"Yesterday" указывает на конкретное время в прошлом, поэтому используем Past Simple.',
          userAnswer: undefined,
          isCorrect: undefined,
        },
      ],
      completed: false,
      attempts: 0,
      hintsUsed: 0,
      timeSpentSeconds: 0,
    },

    // PAGE 2: Explanation
    {
      pageId: 'explanation',
      templatePageId: 'explanation',
      title: 'Present Perfect vs Past Simple',
      content: [
        {
          type: 'rule',
          content: '**Past Simple** используется когда:\n• Есть конкретное время (yesterday, last week, in 2020)\n• Действие завершено и не связано с настоящим\n\n**Present Perfect** используется когда:\n• Важен опыт или результат, а не время\n• Действие имеет связь с настоящим\n• Используются слова: ever, never, already, yet, just',
        },
        {
          type: 'comparison',
          content: '| Past Simple | Present Perfect |\n|------------|----------------|\n| I played the demo **last week**. | I **have played** the demo. (когда-то) |\n| The game **crashed** five minutes ago. | The game **has crashed** again! (уже не первый раз) |\n| They **released** the update **yesterday**. | They **have just released** the update. |',
        },
        {
          type: 'tip',
          content: '💡 Подсказка: Если можешь добавить "когда именно?" — скорее всего Past Simple. Если важен сам факт или опыт — Present Perfect.',
        },
      ],
      exercises: [],
      completed: false,
      attempts: 0,
      hintsUsed: 0,
      timeSpentSeconds: 0,
    },

    // PAGE 3: Drill
    {
      pageId: 'drill',
      templatePageId: 'drill',
      title: 'Тренировка',
      content: [
        {
          type: 'text',
          content: 'Заполни пропуски правильной формой глагола.',
        },
      ],
      exercises: [
        {
          id: 'drill-1',
          type: 'fill_gap',
          instruction: 'Выбери правильную форму глагола',
          content: {
            sentence: 'I _____ (play) Minecraft since 2015.',
            verb: 'play',
          },
          correctAnswer: 'have played',
          explanation: 'Since 2015 указывает на период до настоящего момента — используем Present Perfect.',
        },
        {
          id: 'drill-2',
          type: 'fill_gap',
          instruction: 'Выбери правильную форму глагола',
          content: {
            sentence: 'The servers _____ (go) down two hours ago.',
            verb: 'go',
          },
          correctAnswer: 'went',
          explanation: '"Two hours ago" — конкретное время в прошлом, поэтому Past Simple.',
        },
        {
          id: 'drill-3',
          type: 'fill_gap',
          instruction: 'Выбери правильную форму глагола',
          content: {
            sentence: '_____ you ever _____ (try) VR gaming?',
            verb: 'try',
          },
          correctAnswer: 'Have ... tried',
          explanation: '"Ever" — маркер Present Perfect, спрашиваем об опыте.',
        },
        {
          id: 'drill-4',
          type: 'fill_gap',
          instruction: 'Выбери правильную форму глагола',
          content: {
            sentence: 'They _____ (announce) the new GPU at CES last month.',
            verb: 'announce',
          },
          correctAnswer: 'announced',
          explanation: '"At CES last month" — конкретное время и место, Past Simple.',
        },
        {
          id: 'drill-5',
          type: 'fill_gap',
          instruction: 'Выбери правильную форму глагола',
          content: {
            sentence: 'I _____ just _____ (finish) downloading the update.',
            verb: 'finish',
          },
          correctAnswer: 'have ... finished',
          explanation: '"Just" — только что, связь с настоящим моментом, Present Perfect.',
        },
        {
          id: 'drill-6',
          type: 'fill_gap',
          instruction: 'Выбери правильную форму глагола',
          content: {
            sentence: 'She _____ (stream) on Twitch for 8 hours yesterday.',
            verb: 'stream',
          },
          correctAnswer: 'streamed',
          explanation: '"Yesterday" — конкретный день в прошлом, Past Simple.',
        },
      ],
      completed: false,
      attempts: 0,
      hintsUsed: 0,
      timeSpentSeconds: 0,
    },

    // PAGE 4: Use in context
    {
      pageId: 'use',
      templatePageId: 'use',
      title: 'Применение',
      content: [
        {
          type: 'text',
          content: 'Прочитай диалог двух геймеров и исправь ошибки во временах.',
        },
        {
          type: 'example',
          content: '**Alex:** Hey! I just bought a new gaming laptop!\n**Sam:** Nice! When have you bought it?\n**Alex:** I have bought it last weekend. It has an RTX 4080.\n**Sam:** Wow! I never tried ray tracing. Is it worth it?\n**Alex:** Absolutely! I played Cyberpunk with ray tracing yesterday and it looked amazing.',
        },
      ],
      exercises: [
        {
          id: 'use-1',
          type: 'error_correction',
          instruction: 'Найди и исправь ошибку в предложении Sam',
          content: {
            sentence: 'When have you bought it?',
            context: 'Sam спрашивает о конкретном времени покупки',
          },
          correctAnswer: 'When did you buy it?',
          explanation: 'Вопрос "когда?" требует Past Simple, потому что спрашиваем о конкретном моменте.',
        },
        {
          id: 'use-2',
          type: 'error_correction',
          instruction: 'Найди и исправь ошибку в ответе Alex',
          content: {
            sentence: 'I have bought it last weekend.',
            context: 'Alex называет конкретное время — last weekend',
          },
          correctAnswer: 'I bought it last weekend.',
          explanation: '"Last weekend" — конкретное время, нужен Past Simple.',
        },
        {
          id: 'use-3',
          type: 'error_correction',
          instruction: 'Найди и исправь ошибку Sam про ray tracing',
          content: {
            sentence: 'I never tried ray tracing.',
            context: 'Sam говорит об опыте (никогда не пробовал)',
          },
          correctAnswer: "I have never tried ray tracing.",
          explanation: '"Never" с опытом — Present Perfect. Важен факт отсутствия опыта до сейчас.',
        },
      ],
      completed: false,
      attempts: 0,
      hintsUsed: 0,
      timeSpentSeconds: 0,
    },

    // PAGE 5: Mini-test
    {
      pageId: 'mini-test',
      templatePageId: 'mini-test',
      title: 'Проверка',
      content: [
        {
          type: 'text',
          content: 'Финальная проверка. Выбери правильный вариант.',
        },
      ],
      exercises: [
        {
          id: 'test-1',
          type: 'multiple_choice',
          instruction: 'Выбери правильный вариант',
          content: {
            sentence: 'I _____ this game before. It\'s really good!',
            options: ['played', 'have played', 'was playing'],
          },
          correctAnswer: 1,
          explanation: 'Опыт (играл раньше, до настоящего момента) — Present Perfect.',
        },
        {
          id: 'test-2',
          type: 'multiple_choice',
          instruction: 'Выбери правильный вариант',
          content: {
            sentence: 'Sony _____ the PS6 at the conference yesterday.',
            options: ['has announced', 'announced', 'has been announcing'],
          },
          correctAnswer: 1,
          explanation: '"Yesterday" — конкретное время, Past Simple.',
        },
        {
          id: 'test-3',
          type: 'multiple_choice',
          instruction: 'Выбери правильный вариант',
          content: {
            sentence: '_____ you _____ the new update yet?',
            options: ['Did ... download', 'Have ... downloaded', 'Were ... downloading'],
          },
          correctAnswer: 1,
          explanation: '"Yet" — маркер Present Perfect, спрашиваем о результате к настоящему моменту.',
        },
        {
          id: 'test-4',
          type: 'multiple_choice',
          instruction: 'Выбери правильный вариант',
          content: {
            sentence: 'The game _____ three times while I was playing last night.',
            options: ['has crashed', 'crashed', 'have crashed'],
          },
          correctAnswer: 1,
          explanation: '"Last night" — конкретное время в прошлом, Past Simple.',
        },
      ],
      completed: false,
      attempts: 0,
      hintsUsed: 0,
      timeSpentSeconds: 0,
    },

    // PAGE 6: Reflection
    {
      pageId: 'reflection',
      templatePageId: 'reflection',
      title: 'Итоги',
      content: [
        {
          type: 'text',
          content: '🎯 **Что мы изучили:**\n\n• **Past Simple** — для действий с конкретным временем в прошлом (yesterday, last week, in 2020)\n\n• **Present Perfect** — для опыта и результатов, связанных с настоящим (ever, never, just, already, yet)\n\n💡 **Главное правило:** Если можешь ответить "когда именно?" — Past Simple. Если важен сам факт — Present Perfect.',
        },
        {
          type: 'tip',
          content: '🎮 **Практика в играх:**\nОбращай внимание на времена в диалогах NPC и в чатах с иностранными игроками. Это отличный способ закрепить материал!',
        },
      ],
      exercises: [],
      completed: false,
      attempts: 0,
      hintsUsed: 0,
      timeSpentSeconds: 0,
    },
  ],

  currentPageIndex: 0,
  completedPages: [],
  startedAt: '2025-01-01T10:00:00Z',
  completedAt: undefined,

  totalScore: 0,
  skillScores: {},
  timeSpentMinutes: 0,
};
