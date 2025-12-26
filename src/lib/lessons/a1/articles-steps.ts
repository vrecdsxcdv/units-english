export type BlankItem = {
  // split sentence into parts; number of blanks = answers.length
  parts: string[];
  answers: ("a" | "an" | "the" | "—")[];
  explain?: string; // shown if wrong
};

export const STEP_TITLES = [
  "Определение",
  "Вставьте артикли",
  "Закрепление",
  "Мини-тест",
  "Итоги",
];

export const THEORY_HTML = `
<p><strong>Артикль</strong> — это особое служебное слово, которое ставится перед существительным и показывает, о каком именно предмете или понятии идет речь.</p>
<p>В английском языке всего три типа артиклей, каждый из которых выполняет свою функцию:</p>
<ul>
  <li><strong>Неопределённый артикль (a/an)</strong> — когда речь идёт о чём-то неопределённом, общем или впервые упоминаемом.<br/><em>I saw a bracelet in the store.</em> — Я увидела <em>какой-то</em> браслет в магазине.</li>
  <li><strong>Определённый артикль (the)</strong> — указывает на конкретный объект, который уже известен или был упомянут ранее.<br/><em>I saw the bracelet again and bought it.</em> — Я снова увидела <em>тот</em> браслет и купила его.</li>
  <li><strong>Нулевой артикль (—)</strong> — когда говорят о чём-то в общем смысле, абстрактно, либо артикль не нужен по правилу.<br/><em>Bracelets are great accessories for women.</em> — Браслеты — отличные аксессуары для женщин.</li>
  </ul>
`;

export const EXERCISE_ITEMS: BlankItem[] = [
  // 1) "This is ... pen. That is ... pencil."
  {
    parts: ["1. This is ", " pen. That is ", " pencil."],
    answers: ["a", "a"],
    explain: "Первое упоминание → неопределённый артикль a.",
  },

  // 2) "This is ... book. It is my ... book."
  {
    parts: ["2. This is ", " book. It is my ", " book."],
    answers: ["a", "—"],
    explain: "Во второй части притяжательная my исключает артикль.",
  },

  // 3) "Is this your ... pencil? - No, it isn't my ... pencil, it is my sister's ... pencil."
  {
    parts: [
      "3. Is this your ",
      " pencil? — No, it isn't my ",
      " pencil, it is my sister's ",
      " pencil.",
    ],
    answers: ["—", "—", "—"],
    explain: "Притяжательные (your/my/sister's) → без артикля.",
  },

  // 4) "I have ... sister. My ... sister is ... engineer. My sister's ... husband is ... doctor. They have got two ... children."
  {
    parts: [
      "4. I have ",
      " sister. My ",
      " sister is ",
      " engineer. My sister's ",
      " husband is ",
      " doctor. They have got two ",
      " children.",
    ],
    answers: ["a", "—", "an", "—", "a", "—"],
    explain:
      "Профессии с артиклем a/an; притяжательные — без артикля; plural (children) в общем — без артикля.",
  },

  // 5) "This is ... girl. This ... girl is their ... daughter. Their daughter's ... name is Vera."
  {
    parts: [
      "5. This is ",
      " girl. This ",
      " girl is their ",
      " daughter. Their daughter's ",
      " name is Vera.",
    ],
    answers: ["a", "—", "—", "—"],
    explain:
      "Первое упоминание — a; далее указательное this/притяжательное — без артикля; 'name' с притяжат. — без артикля.",
  },

  // 6) "That is ... boy. That ... boy is her ... brother. Her brother's ... name is Nick."
  {
    parts: [
      "6. That is ",
      " boy. That ",
      " boy is her ",
      " brother. Her brother's ",
      " name is Nick.",
    ],
    answers: ["a", "—", "—", "—"],
    explain: "Аналогично пункту 5.",
  },

  // 7) "This is our ... flat."
  {
    parts: ["7. This is our ", " flat."],
    answers: ["—"],
    explain: "С притяжат. our — без артикля.",
  },

  // 8) "We have got ... car. Our ... car is not very expensive but reliable."
  {
    parts: [
      "8. We have got ",
      " car. Our ",
      " car is not very expensive but reliable.",
    ],
    answers: ["a", "—"],
    explain: "Первое упоминание — a; затем our → без артикля.",
  },

  // 9) "I have no ... pet."
  {
    parts: ["9. I have no ", " pet."],
    answers: ["—"],
    explain: "После no обычно артикль не ставится.",
  },

  // 10) "My granny has got ... headache. She has no ... idea what to do."
  {
    parts: [
      "10. My granny has got ",
      " headache. She has no ",
      " idea what to do.",
    ],
    answers: ["a", "—"],
    explain: "Идиома: have a headache; после no idea — без артикля.",
  },
];

