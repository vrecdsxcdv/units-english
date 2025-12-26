const br = (s: string) => s;

export const adverbsTopic = {
  slug: "adverbs",
  title: "Наречия (Adverbs)",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      theory: [
        {
          title:
            "What are Adverbs of Manner and Frequency? (Что такое наречия способа действия и частоты?) — Теория",
          html: br(`
<p><b>Наречия (Adverbs)</b> — это слова, которые описывают или модифицируют глаголы (verbs), прилагательные (adjectives), другие наречия или целые предложения.</p>
<p>В этой теме мы сосредоточимся на двух типах: <b>наречиях способа действия (manner)</b> и <b>частоты (frequency)</b>.</p>

<h3>Наречия способа действия (Adverbs of Manner)</h3>
<p>Эти наречия описывают, <strong>как</strong> выполняется действие (gladly, sadly, quickly, slowly).</p>
<ul>
  <li><b>Slowly</b> [ˈsloʊli] — Медленно</li>
  <li><b>Quickly</b> [ˈkwɪkli] — Быстро</li>
  <li><b>Carefully</b> [ˈkɛərfəli] — Осторожно</li>
  <li><b>Happily</b> [ˈhæpɪli] — Счастливо</li>
</ul>

<h3>Наречия частоты (Adverbs of Frequency)</h3>
<p>Эти наречия указывают, <strong>как часто</strong> происходит действие.</p>
<ul>
  <li><b>Always</b> [ˈɔːlweɪz] — Всегда (100%)</li>
  <li><b>Usually</b> [ˈjuːʒuəli] — Обычно (80%)</li>
  <li><b>Often</b> [ˈɔːfn] — Часто (70%)</li>
  <li><b>Sometimes</b> [ˈsʌmtaɪmz] — Иногда (50%)</li>
  <li><b>Rarely</b> [ˈrɛərli] — Редко (20%)</li>
  <li><b>Never</b> [ˈnɛvər] — Никогда (0%)</li>
</ul>

<p><b>Зачем нужны:</b></p>
<ul>
  <li>Наречия manner делают описание действий более живым и точным</li>
  <li>Наречия frequency уточняют привычки или рутину</li>
  <li>Они важны для повседневной речи, рассказов и описаний</li>
</ul>
`),
        },
      ],
    },
    {
      number: 2,
      theory: [
        {
          title: "Примеры предложений с наречиями manner и frequency",
          html: br(`
<h3>Примеры с наречиями способа действия (Manner)</h3>
<ol>
  <li><b>He walks slowly to school.</b> — Он идёт медленно в школу.</li>
  <li><b>She eats quickly before work.</b> — Она ест быстро перед работой.</li>
  <li><b>Drive carefully on the road.</b> — Веди осторожно по дороге.</li>
</ol>

<h3>Примеры с наречиями частоты (Frequency)</h3>
<ol start="4">
  <li><b>I always brush my teeth.</b> — Я всегда чищу зубы.</li>
  <li><b>We sometimes watch movies.</b> — Мы иногда смотрим фильмы.</li>
  <li><b>He never smokes.</b> — Он никогда не курит.</li>
</ol>

<p><b>Повтор:</b> Manner — КАК действие (после глагола), Frequency — КАК ЧАСТО (перед глаголом).</p>
`),
        },
      ],
    },
    {
      number: 3,
      theory: [
        {
          title: "Подробное объяснение наречий способа действия",
          html: br(`
<h3>Формирование</h3>
<p><b>Основное правило:</b> adjective + -ly (slow → slowly, quick → quickly)</p>

<h4>Тонкости:</h4>
<ul>
  <li>Если adjective на -y, замените на -ily: happy → happily</li>
  <li>На -ic: + -ally (basic → basically)</li>
  <li><b>Исключения без -ly:</b> fast, hard, late, early</li>
  <li><b>Двойные формы:</b> hard (усердно) / hardly (едва); late (поздно) / lately (недавно)</li>
</ul>

<h3>Позиция в предложении</h3>
<ul>
  <li><b>После глагола/объекта:</b> He read the book carefully.</li>
  <li><b>Перед глаголом для акцента:</b> Carefully open the door.</li>
</ul>

<h3>Когда НЕ использовать</h3>
<ul>
  <li><b>Не с linking verbs (look, feel):</b> Wrong: She looks happily; Right: She looks happy</li>
  <li><b>Не используйте adjective как adverb:</b> Wrong: He runs quick; Right: He runs quickly</li>
</ul>
`),
        },
      ],
      exercises: [],
    },
    {
      number: 4,
      theory: [
        {
          title: "Подробное объяснение наречий частоты",
          html: br(`
<h3>Шкала наречий частоты</h3>
<ul>
  <li><b>100%</b> — always (всегда)</li>
  <li><b>80%</b> — usually (обычно)</li>
  <li><b>70%</b> — often (часто)</li>
  <li><b>50%</b> — sometimes (иногда)</li>
  <li><b>20%</b> — rarely/seldom (редко)</li>
  <li><b>0%</b> — never (никогда)</li>
</ul>

<h3>Позиция в предложении</h3>
<ul>
  <li><b>Перед основным глаголом:</b> She usually sleeps late.</li>
  <li><b>После глагола be:</b> He is always late.</li>
  <li><b>После модальных/auxiliary:</b> I can sometimes help.</li>
  <li><b>В начале/конце для акцента:</b> Sometimes I forget.</li>
</ul>

<h3>Важные правила</h3>
<ul>
  <li><b>Не используйте с not:</b> Wrong: not always; Right: sometimes not или never</li>
  <li><b>Never/hardly ever</b> — отрицательные, не используйте двойное отрицание</li>
  <li><b>В вопросах:</b> Do you ever go?</li>
</ul>
`),
        },
      ],
      exercises: [],
    },
    {
      number: 5,
      exercises: [
        {
          id: "adverbs-final",
          type: "fill",
          title: "Комплексные упражнения по наречиям",
          items: [],
        },
      ],
    },
  ],
} as const;




