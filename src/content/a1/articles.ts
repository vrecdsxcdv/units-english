const br = (s: string) => s;

export const articlesTopic = {
  slug: "articles",
  title: "Артикли (Articles)",
  totalSteps: 3,
  steps: [
    {
      number: 1,
      theory: [
        {
          title:
            "What are Articles? Basic Introduction (Что такое артикли? Базовое введение) — Теория",
          html: br(`
[ВСТАВИТЬ ВЕРБАТИМ: весь блок «введение» + 6 примеров с объяснениями]
`),
        },
      ],
    },
    {
      number: 2,
      exercises: [
        {
          id: "a-an-matching",
          type: "match",
          title: "Matching (a/an) — 30 пар",
          left: [],
          right: [],
          pairs: {},
        },
        {
          id: "a-an-fill",
          type: "fill",
          title: "Fill-in-the-blanks (a/an) — 20 предложений",
          items: [],
        },
        {
          id: "a-vs-an-sorting",
          type: "sort",
          title: "Sorting (a vs an) — 25 слов",
          groups: [
            { key: "a", title: "a" },
            { key: "an", title: "an" },
          ],
          items: [],
        },
        {
          id: "a-an-quiz",
          type: "choice",
          title: "Quiz (a/an) — 20 вопросов",
          items: [],
        },
        {
          id: "a-an-dnd-pics",
          type: "match",
          title: "Drag-and-drop with Pictures — 20 пар",
          left: [],
          right: [],
          pairs: {},
        },
      ],
    },
    {
      number: 3,
      theory: [
        {
          title:
            "Comparing Articles: A/An vs The vs No (Сравнение артиклей: A/An vs The vs No) — Теория",
          html: br(`
[ВСТАВИТЬ ВЕРБАТИМ: сравнение, включая “Vocabulary list”, “Повторение”, “Common mistakes”, “Культурная заметка”]
`),
        },
      ],
    },
  ],
} as const;
