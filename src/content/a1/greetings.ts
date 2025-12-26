const br = (s: string) => s;

export const greetingsTopic = {
  slug: "greetings",
  title: "Приветствия (Greetings)",
  totalSteps: 3,
  steps: [
    {
      number: 1,
      theory: [
        {
          title:
            "What are Greetings? Basic Introduction (Что такое приветствия? Базовое введение) — Теория",
          html: br(`
<p><b>Приветствия (Greetings)</b> — это слова или фразы, которые мы используем, чтобы начать разговор, поприветствовать кого-то или показать вежливость. Они помогают установить контакт и сделать общение дружелюбным.</p>
<p>В английском приветствия зависят от <b>времени дня</b>, <b>ситуации</b> (формальной или неформальной) и <b>отношений с человеком</b>.</p>
<p><i>Например:</i> "Hello" (Привет) — общее, а "Good morning" (Доброе утро) — для утра.</p>
<p><b>Повтор:</b> Greetings — для начала разговора, показывают уважение.</p>
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
            "Comparing Greetings: Formal vs Informal vs Responses (Сравнение приветствий)",
          html: br(`
<p>Formal, informal и responses — все для начала разговора, но <b>formal</b> вежливые (Good morning), <b>informal</b> дружеские (Hi), <b>responses</b> — ответы (I'm fine).</p>
<p><b>Повтор:</b> Formal для уважения, informal для расслабленности, responses для продолжения.</p>
`),
        },
      ],
    },
  ],
} as const;
