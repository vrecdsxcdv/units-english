const br = (s: string) => s;

export const possessiveTopic = {
  slug: "possessive",
  title: "Притяжательный падеж (Possessive 's)",
  totalSteps: 3,
  steps: [
    {
      number: 1,
      theory: [
        {
          title:
            "What are Possessive 's? Basic Introduction (Что такое Possessive 's? Базовое введение) — Теория",
          html: br(`
<p><b>Possessive 's</b> (притяжательный 's) — это способ показать владение (ownership) или связь между существительными. Добавляем <b>'s</b> (апостроф + s) к существительному, чтобы сказать "чьё-то".</p>
<p>Например, вместо "The book of the boy" (Книга мальчика), говорим <b>"The boy's book"</b> (Книга мальчика). Это делает предложения короче и естественнее.</p>
<p>'s используется для <b>людей, животных, групп, времени</b>, но не всегда для вещей (для вещей чаще "of").</p>
<p><b>Повтор:</b> 's показывает "belongs to" (принадлежит).</p>
`),
        },
      ],
    },
    {
      number: 2,
      exercises: [],
    },
    {
      number: 3,
      theory: [
        {
          title:
            "Comparing Possessive 's vs Possessive Pronouns vs Of (Сравнение)",
          html: br(`
<p>Possessive 's, possessive pronouns (my, your, his/her) и "of" — все показывают владение.</p>
<p><b>'s</b> для nouns (boy's), <b>pronouns</b> для замены (his вместо boy's), <b>"of"</b> для формальности/неодушевлённых (the book of the boy).</p>
<p><b>Повтор:</b> 's для конкретных nouns, pronouns для краткости, "of" для вещей.</p>
`),
        },
      ],
    },
  ],
} as const;
