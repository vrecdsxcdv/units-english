export type TheoryBlock = {
  title: string;
  html: string; // safe markup
  visual?: string; // optional key for infographic
};

export type ExerciseBase = {
  id: string;
  type: "fill" | "choice" | "match" | "sort";
  title: string;
  prompt?: string;
  buttonLabel?: string; // default: "Проверить"
};

export type FillExercise = ExerciseBase & {
  type: "fill";
  items: {
    id: string;
    question: string;
    answer: string | string[];
    hint?: string;
  }[];
};

export type ChoiceExercise = ExerciseBase & {
  type: "choice";
  items: {
    id: string;
    question: string;
    options: string[];
    correct: number;
    hint?: string;
  }[];
};

export type MatchExercise = ExerciseBase & {
  type: "match";
  left: { id: string; text: string }[];
  right: { id: string; text: string }[];
  pairs: Record<string, string>; // left.id -> right.id
};

export type SortExercise = ExerciseBase & {
  type: "sort";
  groups: { key: string; title: string }[];
  items: { id: string; text: string; group: string }[];
};

export type Step = {
  number: number;
  theory?: TheoryBlock[];
  exercises?: (FillExercise | ChoiceExercise | MatchExercise | SortExercise)[];
};

export type Topic = {
  slug: "nouns";
  title: string;
  steps: Step[];
  totalSteps: number; // 10
};

const br = (s: string) => s;

export const nounsTopic: Topic = {
  slug: "nouns",
  title: "Существительные",
  totalSteps: 10,
  steps: [
    {
      number: 1,
      theory: [
        {
          title: "1. Что такое существительные (Nouns)?",
          html: br(`
<p><b>Noun</b> — слово, называющее людей, места, вещи или идеи: <i>people, places, things, ideas</i>.</p>
<ul>
  <li>People: <b>teacher</b> — учитель</li>
  <li>Places: <b>office</b> — офис</li>
  <li>Things: <b>phone</b> — телефон</li>
  <li>Ideas: <b>happiness</b> — счастье</li>
</ul>
<p>Бывают <b>concrete</b> (book) и <b>abstract</b> (love).</p>
`),
        },
        {
          title: "Мини-словарь (40)",
          html: br(`
<p>Повтори 3 раза вслух каждое слово.</p>
<ul>
<li>boy [bɔɪ] — мальчик; girl [gɜːrl] — девочка; man [mæn] — мужчина; woman [ˈwʊmən] — женщина</li>
<li>teacher [ˈtiːtʃər] — учитель; student [ˈstuːdənt] — студент; friend [frɛnd] — друг</li>
<li>city [ˈsɪti] — город; house [haʊs] — дом; school [skuːl] — школа; park [pɑːrk] — парк</li>
<li>book [bʊk] — книга; pen [pɛn] — ручка; phone [fəʊn] — телефон; car [kɑːr] — машина</li>
<li>apple [ˈæpl] — яблоко; table [ˈteɪbl] — стол; chair [tʃɛər] — стул; computer [kəmˈpjuːtər] — компьютер</li>
<li>love [lʌv] — любовь; happiness [ˈhæpɪnɪs] — счастье; time [taɪm] — время; idea [aɪˈdɪə] — идея</li>
<li>job [dʒɒb] — работа; money [ˈmʌni] — деньги; health [hɛlθ] — здоровье; family [ˈfæmɪli] — семья</li>
<li>dog, cat, bird, tree, flower, sun, moon, star, river, mountain</li>
</ul>
`),
        },
      ],
    },
    {
      number: 2,
      theory: [
        {
          title: "2. Единственное число (Singular)",
          html: br(`
<p>Singular — когда речь про <b>один</b> предмет/человека/идею.</p>
<p>Перед singular часто ставим <b>a/an</b>: <b>a</b> перед согласным звуком (a car), <b>an</b> перед гласным (an apple); исключения: <i>an hour</i>, <i>a university</i> (смотрим на звук).</p>
`),
        },
      ],
      exercises: [
        {
          id: "sing-fill-1",
          type: "fill",
          title: "Вставьте a или an",
          items: [
            {
              id: "1",
              question: "___ apple",
              answer: "an",
              hint: "гласный звук",
            },
            { id: "2", question: "___ car", answer: "a" },
            { id: "3", question: "___ hour", answer: "an", hint: "немая h" },
            {
              id: "4",
              question: "___ university",
              answer: "a",
              hint: "звук /juː/",
            },
          ],
        },
        {
          id: "sing-choice-1",
          type: "choice",
          title: "Выберите singular",
          items: [
            {
              id: "1",
              question: "Which is singular?",
              options: ["Books", "Book"],
              correct: 1,
              hint: "Singular = one",
            },
            {
              id: "2",
              question: "Which is singular?",
              options: ["Apples", "An apple"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      number: 3,
      exercises: [
        {
          id: "sing-sort-a-an",
          type: "sort",
          title: "Разложите: a / an",
          groups: [
            { key: "a", title: "a" },
            { key: "an", title: "an" },
          ],
          items: [
            { id: "car", text: "car", group: "a" },
            { id: "egg", text: "egg", group: "an" },
            { id: "phone", text: "phone", group: "a" },
            { id: "umbrella", text: "umbrella", group: "an" },
            { id: "hour", text: "hour", group: "an" },
            { id: "university", text: "university", group: "a" },
          ],
        },
        {
          id: "sing-choice-2",
          type: "choice",
          title: "Что поставить?",
          items: [
            { id: "1", question: "___ idea", options: ["a", "an"], correct: 1 },
            { id: "2", question: "___ book", options: ["a", "an"], correct: 0 },
            {
              id: "3",
              question: "___ apple",
              options: ["a", "an"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      number: 4,
      theory: [
        {
          title: "4. Множественное число (Plural)",
          html: br(`
<p>Plural — когда предметов <b>два и больше</b>.</p>
<ul>
  <li>Обычно: +s (<i>book → books</i>)</li>
  <li>После s/sh/ch/x/o: +es (<i>bus → buses</i>)</li>
  <li>y → ies (<i>city → cities</i>)</li>
  <li>f/fe → ves (<i>leaf → leaves</i>)</li>
  <li>Irregular: <i>child → children</i>, <i>man → men</i>, <i>tooth → teeth</i> …</li>
  <li>No change: <i>sheep → sheep</i></li>
</ul>
`),
        },
      ],
      exercises: [
        {
          id: "pl-fill-1",
          type: "fill",
          title: "Сделайте plural",
          items: [
            { id: "1", question: "book →", answer: "books" },
            { id: "2", question: "bus →", answer: "buses" },
            { id: "3", question: "city →", answer: "cities" },
            { id: "4", question: "leaf →", answer: ["leaves"] },
            { id: "5", question: "child →", answer: "children" },
          ],
        },
      ],
    },
    {
      number: 5,
      exercises: [
        {
          id: "pl-match-1",
          type: "match",
          title: "Соотнесите singular ↔ plural",
          left: [
            { id: "l1", text: "man" },
            { id: "l2", text: "tooth" },
            { id: "l3", text: "mouse" },
            { id: "l4", text: "box" },
          ],
          right: [
            { id: "r1", text: "men" },
            { id: "r2", text: "teeth" },
            { id: "r3", text: "mice" },
            { id: "r4", text: "boxes" },
          ],
          pairs: { l1: "r1", l2: "r2", l3: "r3", l4: "r4" },
        },
        {
          id: "pl-choice-1",
          type: "choice",
          title: "Выберите plural форму",
          items: [
            {
              id: "1",
              question: "man → ?",
              options: ["mans", "men"],
              correct: 1,
            },
            {
              id: "2",
              question: "city → ?",
              options: ["citys", "cities"],
              correct: 1,
            },
            {
              id: "3",
              question: "sheep → ?",
              options: ["sheeps", "sheep"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      number: 6,
      theory: [
        {
          title: "6. Исчисляемые (Countable)",
          html: br(`
<p>Можно посчитать (one, two…). Имеют singular и plural. Вопрос: <b>How many?</b></p>
<ul><li>Примеры: apples, books, cars, friends…</li></ul>
`),
        },
      ],
      exercises: [
        {
          id: "cnt-sort-1",
          type: "sort",
          title: "Разложите по группам",
          groups: [
            { key: "count", title: "Countable" },
            { key: "uncount", title: "Uncountable" },
          ],
          items: [
            { id: "apples", text: "apples", group: "count" },
            { id: "books", text: "books", group: "count" },
            { id: "water", text: "water", group: "uncount" },
            { id: "rice", text: "rice", group: "uncount" },
            { id: "friends", text: "friends", group: "count" },
          ],
        },
      ],
    },
    {
      number: 7,
      theory: [
        {
          title: "7. Неисчисляемые (Uncountable)",
          html: br(`
<p>Нельзя посчитать поштучно. Обычно только singular. Вопрос: <b>How much?</b></p>
<p>Категории: liquids (water), materials (wood), abstracts (information), food (rice)…</p>
<p>Нет a/an и чисел: неправильно <i>two furnitures</i>. Нужны единицы измерения: <i>a piece of furniture</i>, <i>a glass of water</i>.</p>
`),
        },
      ],
      exercises: [
        {
          id: "uncnt-choice-1",
          type: "choice",
          title: "How many / How much?",
          items: [
            {
              id: "1",
              question: "___ water?",
              options: ["How many", "How much"],
              correct: 1,
            },
            {
              id: "2",
              question: "___ apples?",
              options: ["How many", "How much"],
              correct: 0,
            },
            {
              id: "3",
              question: "___ information?",
              options: ["How many", "How much"],
              correct: 1,
            },
          ],
        },
      ],
    },
    {
      number: 8,
      exercises: [
        {
          id: "mix-sort-1",
          type: "sort",
          title: "Countable vs Uncountable (большой микс)",
          groups: [
            { key: "count", title: "Countable" },
            { key: "uncount", title: "Uncountable" },
          ],
          items: [
            { id: "milk", text: "milk", group: "uncount" },
            { id: "money", text: "money", group: "uncount" },
            { id: "chairs", text: "chairs", group: "count" },
            { id: "news", text: "news", group: "uncount" },
            { id: "tables", text: "tables", group: "count" },
            { id: "bread", text: "bread", group: "uncount" },
            { id: "eggs", text: "eggs", group: "count" },
          ],
        },
        {
          id: "mix-fill-1",
          type: "fill",
          title: "Вставьте many / much",
          items: [
            { id: "1", question: "How ___ books do you read?", answer: "many" },
            { id: "2", question: "How ___ milk do we need?", answer: "much" },
            { id: "3", question: "How ___ apples?", answer: "many" },
          ],
        },
      ],
    },
    {
      number: 9,
      theory: [
        {
          title: "9. Частые ошибки",
          html: br(`
<ul>
  <li>✗ <i>informations</i> → ✓ <b>information</b></li>
  <li>✗ <i>a water</i> → ✓ <b>water</b> / <b>a glass of water</b></li>
  <li>✗ <i>two furnitures</i> → ✓ <b>two pieces of furniture</b></li>
</ul>
`),
        },
      ],
      exercises: [
        {
          id: "fix-choice-1",
          type: "choice",
          title: "Правильно или нет?",
          items: [
            {
              id: "1",
              question: "I have some advice.",
              options: ["Correct", "Incorrect"],
              correct: 0,
            },
            {
              id: "2",
              question: "I need many money.",
              options: ["Correct", "Incorrect"],
              correct: 1,
              hint: "money → much",
            },
            {
              id: "3",
              question: "Two pieces of furniture.",
              options: ["Correct", "Incorrect"],
              correct: 0,
            },
          ],
        },
      ],
    },
    {
      number: 10,
      theory: [
        {
          title: "10. Повторение",
          html: br(`
<p>Итоговая карта: <b>singular</b> — один; <b>plural</b> — много; <b>countable</b> — считаем; <b>uncountable</b> — нет.</p>
`),
        },
      ],
      exercises: [
        {
          id: "final-choice-1",
          type: "choice",
          title: "Big Quiz (выжимка)",
          items: [
            {
              id: "1",
              question: "Plural of “child”?",
              options: ["childs", "children"],
              correct: 1,
            },
            {
              id: "2",
              question: "Is “news” countable?",
              options: ["Yes", "No"],
              correct: 1,
            },
            {
              id: "3",
              question: "Choose: How ___ sugar do we need?",
              options: ["many", "much"],
              correct: 1,
            },
            {
              id: "4",
              question: "Pick singular:",
              options: ["books", "book"],
              correct: 1,
            },
          ],
        },
        {
          id: "final-sort-1",
          type: "sort",
          title: "Разложи 10 слов",
          groups: [
            { key: "sing", title: "Singular/Unit" },
            { key: "pl", title: "Plural" },
          ],
          items: [
            { id: "book", text: "book", group: "sing" },
            { id: "books", text: "books", group: "pl" },
            { id: "man", text: "man", group: "sing" },
            { id: "men", text: "men", group: "pl" },
            { id: "city", text: "city", group: "sing" },
            { id: "cities", text: "cities", group: "pl" },
            { id: "leaf", text: "leaf", group: "sing" },
            { id: "leaves", text: "leaves", group: "pl" },
            { id: "mouse", text: "mouse", group: "sing" },
            { id: "mice", text: "mice", group: "pl" },
          ],
        },
      ],
    },
  ],
};
