export type TaskItem = {
  id: string;
  prompt: string; // «a cat → …»
  answer: string; // «cats»
  rule?: string; // «+s», «y→ies», «'s», «s'», «irregular», и т.п.
  hint?: string; // краткое объяснение (показывать, если ошибся)
};

// Шаги 3, 5, 7, 9, 11, 13 - существующие упражнения (адаптируем под CheckableTask)
export const step3Plural = [
  {
    id: "p1",
    prompt: "a cat →",
    answer: "cats",
    rule: "+s",
    hint: "Обычное мн. число: +s",
  },
  {
    id: "p2",
    prompt: "a box →",
    answer: "boxes",
    rule: "+es (s,x,ch,sh)",
    hint: "После -x, -s, -ch, -sh добавляем -es",
  },
  {
    id: "p3",
    prompt: "a city →",
    answer: "cities",
    rule: "y→ies",
    hint: "Согласная + y → ies",
  },
  {
    id: "p4",
    prompt: "a boy →",
    answer: "boys",
    rule: "+s",
    hint: "Гласная + y → просто -s",
  },
  {
    id: "p5",
    prompt: "a leaf →",
    answer: "leaves",
    rule: "f→ves",
    hint: "f/fe → ves",
  },
];

export const step5Possessive = [
  {
    id: "s1",
    prompt: "the book of the boy →",
    answer: "the boy's book",
    rule: "'s",
    hint: "Единственное число: добавляем 's",
  },
  {
    id: "s2",
    prompt: "the toys of the children →",
    answer: "the children's toys",
    rule: "'s (irregular pl.)",
    hint: "children → 's",
  },
  {
    id: "s3",
    prompt: "the room of my friend →",
    answer: "my friend's room",
    rule: "'s",
    hint: "'s у владельца",
  },
  {
    id: "s4",
    prompt: "the voices of the boys →",
    answer: "the boys' voices",
    rule: "s'",
    hint: "Мн. число на -s: апостроф после s",
  },
  {
    id: "s5",
    prompt: "the poems of Pushkin →",
    answer: "Pushkin's poems",
    rule: "'s (proper)",
    hint: "Собственные имена: 's",
  },
];

export const step7Articles = [
  {
    id: "a1",
    prompt: "___ apple",
    answer: "an",
    rule: "an (vowel sound)",
    hint: "Перед гласной звук → an",
  },
  {
    id: "a2",
    prompt: "___ university",
    answer: "a",
    rule: "a (consonant sound)",
    hint: "Перед согласной звук → a",
  },
  {
    id: "a3",
    prompt: "___ water",
    answer: "—",
    rule: "no article (uncountable)",
    hint: "Неисчисляемое существительное без артикля",
  },
  {
    id: "a4",
    prompt: "___ sun",
    answer: "the",
    rule: "the (unique)",
    hint: "Уникальный объект → the",
  },
  {
    id: "a5",
    prompt: "___ books",
    answer: "the",
    rule: "the (definite)",
    hint: "Определенное множество → the",
  },
];

export const step9Mixed = [
  {
    id: "m1",
    prompt: "___ information about ___ project",
    answer: "—, the",
    rule: "uncountable, definite",
    hint: "information — неисчисляемое, project — определенный",
  },
  {
    id: "m2",
    prompt: "___ children are playing in ___ garden",
    answer: "The, the",
    rule: "definite both",
    hint: "Определенные дети в определенном саду",
  },
  {
    id: "m3",
    prompt: "She bought ___ new car and ___ furniture",
    answer: "a, —",
    rule: "countable, uncountable",
    hint: "car — исчисляемое, furniture — неисчисляемое",
  },
  {
    id: "m4",
    prompt: "___ advice you gave me was very helpful",
    answer: "The",
    rule: "definite",
    hint: "Определенный совет",
  },
  {
    id: "m5",
    prompt: "We need ___ more time to finish ___ work",
    answer: "—, the",
    rule: "uncountable, definite",
    hint: "time — неисчисляемое, work — определенная",
  },
];

export const step11Final = [
  {
    id: "f1",
    prompt: "___ water is essential for life",
    answer: "—",
    rule: "uncountable",
    hint: "Неисчисляемое существительное без артикля",
  },
  {
    id: "f2",
    prompt: "a mouse →",
    answer: "mice",
    rule: "irregular",
    hint: "Нерегулярное множественное число",
  },
  {
    id: "f3",
    prompt: "the book of the teacher →",
    answer: "the teacher's book",
    rule: "'s",
    hint: "Притяжательный падеж",
  },
  {
    id: "f4",
    prompt: "___ university is very old",
    answer: "The",
    rule: "definite",
    hint: "Определенный университет",
  },
  {
    id: "f5",
    prompt: "a potato →",
    answer: "potatoes",
    rule: "+es",
    hint: "Множественное число с -es",
  },
];

export const step13Additional = [
  {
    id: "ad1",
    prompt: "the book of the boy →",
    answer: "the boy's book",
    rule: "'s",
    hint: "Единственное число: 's",
  },
  {
    id: "ad2",
    prompt: "the toys of the children →",
    answer: "the children's toys",
    rule: "'s (irregular)",
    hint: "children → 's",
  },
  {
    id: "ad3",
    prompt: "the room of my friend →",
    answer: "my friend's room",
    rule: "'s",
    hint: "'s у владельца",
  },
  {
    id: "ad4",
    prompt: "the voices of the boys →",
    answer: "the boys' voices",
    rule: "s'",
    hint: "Мн. число на -s: апостроф после s",
  },
  {
    id: "ad5",
    prompt: "the poems of Pushkin →",
    answer: "Pushkin's poems",
    rule: "'s (proper)",
    hint: "Собственные имена: 's",
  },
];

// Новые шаги 14, 15, 16
export const step14Plural = [
  {
    id: "p1",
    prompt: "a cat →",
    answer: "cats",
    rule: "+s",
    hint: "Обычное мн. число: +s",
  },
  {
    id: "p2",
    prompt: "a box →",
    answer: "boxes",
    rule: "+es (s,x,ch,sh)",
    hint: "После -x, -s, -ch, -sh добавляем -es",
  },
  {
    id: "p3",
    prompt: "a city →",
    answer: "cities",
    rule: "y→ies",
    hint: "Согласная + y → ies",
  },
  {
    id: "p4",
    prompt: "a boy →",
    answer: "boys",
    rule: "+s",
    hint: "Гласная + y → просто -s",
  },
  {
    id: "p5",
    prompt: "a dress →",
    answer: "dresses",
    rule: "+es",
    hint: "-ss → -es",
  },
  {
    id: "p6",
    prompt: "a potato →",
    answer: "potatoes",
    rule: "+es (o)",
    hint: "После -o часто -es",
  },
  {
    id: "p7",
    prompt: "a leaf →",
    answer: "leaves",
    rule: "f→ves",
    hint: "f/fe → ves",
  },
  {
    id: "p8",
    prompt: "a photo →",
    answer: "photos",
    rule: "+s (exceptions)",
    hint: "Исключение: photo → photos",
  },
  {
    id: "p9",
    prompt: "a child →",
    answer: "children",
    rule: "irregular",
    hint: "Неправильная форма",
  },
  {
    id: "p10",
    prompt: "a mouse →",
    answer: "mice",
    rule: "irregular",
    hint: "Неправильная форма",
  },
];

export const step15Possessive = [
  {
    id: "s1",
    prompt: "the ball of the dog →",
    answer: "the dog's ball",
    rule: "'s",
    hint: "Единственное число: добавляем 's",
  },
  {
    id: "s2",
    prompt: "the skateboard of that man →",
    answer: "that man's skateboard",
    rule: "'s",
    hint: "Указат. слово + 's у «man»",
  },
  {
    id: "s3",
    prompt: "the songs of the children →",
    answer: "the children's songs",
    rule: "'s (irregular pl.)",
    hint: "children → 's",
  },
  {
    id: "s4",
    prompt: "the umbrella of this woman →",
    answer: "this woman's umbrella",
    rule: "'s",
    hint: "Единственное число: 's",
  },
  {
    id: "s5",
    prompt: "the room of my friend →",
    answer: "my friend's room",
    rule: "'s",
    hint: "'s у владельца",
  },
  {
    id: "s6",
    prompt: "the questions of my son →",
    answer: "my son's questions",
    rule: "'s",
    hint: "'s у владельца",
  },
  {
    id: "s7",
    prompt: "the wife of my brother →",
    answer: "my brother's wife",
    rule: "'s",
    hint: "'s у владельца",
  },
  {
    id: "s8",
    prompt: "the table of our teacher →",
    answer: "our teacher's table",
    rule: "'s",
    hint: "'s у владельца",
  },
  {
    id: "s9",
    prompt: "the poems of Pushkin →",
    answer: "Pushkin's poems",
    rule: "'s (proper)",
    hint: "Собственные имена: 's",
  },
  {
    id: "s10",
    prompt: "the voice of the girl →",
    answer: "the girl's voice",
    rule: "'s",
    hint: "Единственное число: 's",
  },
];

export const step16Mixed = [
  {
    id: "m1",
    prompt: "a wolf → (plural)",
    answer: "wolves",
    rule: "f→ves",
    hint: "f/fe → ves",
  },
  {
    id: "m2",
    prompt: "the toys of the boys →",
    answer: "the boys' toys",
    rule: "s'",
    hint: "Мн. число на -s: апостроф после s",
  },
  {
    id: "m3",
    prompt: "a goose → (plural)",
    answer: "geese",
    rule: "irregular",
    hint: "Неправильная форма",
  },
  {
    id: "m4",
    prompt: "the books of my parents →",
    answer: "my parents' books",
    rule: "s'",
    hint: "Мн. число на -s",
  },
  {
    id: "m5",
    prompt: "a city → (plural)",
    answer: "cities",
    rule: "y→ies",
    hint: "Согласная + y → ies",
  },
  {
    id: "m6",
    prompt: "the room of our children →",
    answer: "our children's room",
    rule: "'s",
    hint: "children → 's",
  },
  {
    id: "m7",
    prompt: "a photo → (plural)",
    answer: "photos",
    rule: "+s (exception)",
    hint: "photo → photos",
  },
  {
    id: "m8",
    prompt: "the car of James →",
    answer: "James's car",
    rule: "'s (style)",
    hint: "По стилю проекта: используем 's",
  },
  {
    id: "m9",
    prompt: "a knife → (plural)",
    answer: "knives",
    rule: "f→ves",
    hint: "f/fe → ves",
  },
  {
    id: "m10",
    prompt: "the house of my friend →",
    answer: "my friend's house",
    rule: "'s",
    hint: "'s у владельца",
  },
];
