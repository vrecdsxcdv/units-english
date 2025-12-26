import type { Metadata } from "next";

interface LessonSEO {
  title: string;
  description: string;
  level: string;
  topicId: string;
  step?: number;
  totalSteps?: number;
  keywords?: string[];
}

const BASE_URL = "https://english-learning.vercel.app";

// Уровни с полными названиями
export const levelNames: Record<string, string> = {
  a1: "A1 Elementary",
  a2: "A2 Pre-Intermediate",
  b1: "B1 Intermediate",
  b2: "B2 Upper-Intermediate",
  c1: "C1 Advanced",
  c2: "C2 Proficiency",
};

// Количество шагов для каждой темы A1
export const a1StepCounts: Record<string, number> = {
  nouns: 5,
  articles: 3,
  pronouns: 3,
  demonstrative: 3,
  greetings: 3,
  possessive: 3,
  adverbs: 5,
  tobe: 7,
  havegot: 7,
  personalinfo: 10,
  presentsimple: 7,
  presentsimplehabits: 7,
  imperatives: 7,
  canability: 10,
  thereisare: 10,
  prepositions: 10,
  prepositionsoftime: 10,
  presentcontinuous: 10,
  presentcontinuousadvanced: 10,
  presentcomparison: 10,
  pastsimplewas: 10,
  pastsimpleverbs: 10,
  pastcontinuous: 10,
  pastvspast: 10,
  reviewtenses: 10,
  testtenses: 10,
  futuresimple: 10,
  presentcontinuousfuture: 10,
  futuresimpleoffers: 10,
  verbsinfinitive: 10,
  modals: 10,
  modalsconsolidation: 10,
  testmodals: 10,
  comparative: 10,
  superlative: 10,
  family: 10,
  chores: 10,
  quantifiers: 10,
  presentperfect: 10,
  firstconditional: 10,
  presentperfectvscontinuous: 10,
  presentperfectvspast: 10,
  zeroconditional: 4,
  timeanddates: 6,
  questions: 6,
  questiontags: 5,
  foodanddrinks: 10,
  placesanddirections: 10,
  hobbiesandfreetime: 10,
  passivevoice1: 10,
  relativeclauses: 10,
  passivevoice2: 15,
  houseandhome: 10,
  cityandshops: 10,
  sportsandmusic: 10,
  travelandtransport: 10,
  relativeclausesdetailed: 10,
  workandjobs: 10,
  weatherandseasons: 7,
  shoppingandmoney: 7,
  healthandbody: 7,
  technologyandgadgets: 10,
  conjunctions: 8,
  experiences: 8,
  review1: 15,
  review2: 15,
  finaltest: 1,
};

// Количество шагов для каждой темы B1
export const b1StepCounts: Record<string, number> = {
  presentperfectcontinuous: 10,
  pastperfect: 10,
  pastperfectcomparison: 10,
  mixedtenses1: 10,
  mixedtenses2: 10,
  futureforms: 10,
  usedtowould: 10,
  conditionals: 10,
  conditional2: 10,
  conditional3: 10,
  mixedconditionals: 10,
  allconditionals: 10,
  modalsdeduction: 10,
  modalsobligationpermission: 10,
  passivevoice: 10,
  causative: 10,
  reportedstatements: 10,
  reportedquestions: 10,
  reportedcommands: 10,
  reportingverbs: 10,
  presentparticiple: 10,
  pastparticiple: 10,
  participleclauses: 10,
  wishifonly: 10,
  gerundsinfinitives: 10,
  articlesadvanced: 10,
  adjectivesasnouns: 10,
  adverbsposition: 10,
  quantifiers: 10,
  comparativesmodifiers: 10,
  sosuch: 10,
  preferwouldrather: 10,
  ellipsis: 10,
  inversion: 10,
  personalityadjectives: 10,
  relationshipsphrasalverbs: 10,
  workbusiness: 10,
  educationlearning: 10,
  moneyfinance: 10,
  healthlifestyle: 10,
  environmentnature: 10,
  crimelaw: 10,
  medianews: 10,
  technologyscience: 10,
  traveltourism: 10,
  societyculture: 10,
  foodcooking: 10,
  fashionappearance: 10,
  houseliving: 10,
  transporttraffic: 10,
  entertainment: 10,
  sportcompetition: 10,
  emotions: 10,
  phrasalverbs: 10,
  collocations: 10,
  idioms: 10,
  wordformation: 10,
  synonymsantonyms: 10,
  givingopinions: 10,
  writingemails: 10,
  describinggraphs: 10,
  jobinterviews: 10,
};

// Количество шагов для каждой темы B2
export const b2StepCounts: Record<string, number> = {
  futureinthepast: 10,
  perfectmodals: 10,
  inversion: 10,
  frontingemphasis: 10,
  cleftsentences: 10,
  nominalisation: 10,
  advancedpassives: 10,
  complexnounphrases: 10,
  participleclausesall: 10,
  reducedrelatives: 10,
  ellipsis: 10,
  substitution: 10,
  advancedconditionals: 10,
  unrealtime: 10,
  mixedconditionalsfull: 10,
  hypotheticalwish: 10,
  advancedgerundsinfinitives: 10,
  verbsofperception: 10,
  complexprepositions: 10,
  discoursemarkers: 10,
  parallelismbalance: 10,
  parenthesisapposition: 10,
  punctuationcomplex: 10,
  academicvocabulary: 10,
  collocations: 10,
  workbusiness: 10,
  medicalenglish: 10,
  politicalvocabulary: 10,
  mediajournalism: 10,
  psychologyemotions: 10,
  sciencetechnology: 10,
  environmentsustainability: 10,
  literaturecriticism: 10,
  artarchitecture: 10,
  philosophy: 10,
  idiomsadvanced: 10,
  phrasalverbsrare: 10,
  binomialstrinomials: 10,
  oxymoronsparadoxes: 10,
  euphemismsdysphemisms: 10,
  slanginformal: 10,
  britishamericanenglish: 10,
  falsefriends: 10,
  debating: 10,
  diplomaticlanguage: 10,
  businesscorrespondence: 10,
  rhetoricaldevices: 10,
};

// Полная база SEO данных для всех тем
export const allTopicsSEO: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  // A1 ТЕМЫ
  nouns: {
    title: "Существительные (Nouns)",
    description:
      "Изучите существительные в английском: типы, множественное число, исчисляемые и неисчисляемые существительные, притяжательный падеж",
    keywords: [
      "nouns",
      "существительные английский",
      "множественное число",
      "countable uncountable",
      "possessive case",
    ],
  },
  articles: {
    title: "Артикли (Articles)",
    description:
      "Полное руководство по артиклям: a/an, the, нулевой артикль. Правила использования с примерами и упражнениями",
    keywords: [
      "articles",
      "артикли английский",
      "a an the",
      "определенный артикль",
      "неопределенный артикль",
    ],
  },
  pronouns: {
    title: "Местоимения (Pronouns)",
    description:
      "Местоимения в английском: личные, притяжательные, возвратные, указательные, вопросительные местоимения",
    keywords: [
      "pronouns",
      "местоимения английский",
      "personal pronouns",
      "possessive pronouns",
      "reflexive pronouns",
    ],
  },
  demonstrative: {
    title: "Указательные местоимения",
    description:
      "This, that, these, those: правила использования указательных местоимений в английском языке",
    keywords: ["demonstrative pronouns", "this that", "these those"],
  },
  greetings: {
    title: "Приветствие и знакомство",
    description:
      "Фразы для приветствия и знакомства на английском: формальное и неформальное общение",
    keywords: ["greetings", "приветствие английский", "знакомство английский"],
  },
  possessive: {
    title: "Притяжательный падеж",
    description:
      "Притяжательный падеж в английском: apostrophe s, правила образования и употребления",
    keywords: ["possessive case", "притяжательный падеж", "apostrophe s"],
  },
  adverbs: {
    title: "Наречия (Adverbs)",
    description:
      "Наречия в английском языке: типы, образование, степени сравнения, позиция в предложении",
    keywords: ["adverbs", "наречия английский", "adverbs of frequency"],
  },
  tobe: {
    title: "Глагол to be",
    description:
      "Глагол to be: формы am/is/are/was/were, правила употребления, утверждения, отрицания, вопросы",
    keywords: ["to be", "глагол to be", "am is are", "was were"],
  },
  havegot: {
    title: "Have/Has Got",
    description:
      "Конструкция have got/has got для выражения обладания в английском языке",
    keywords: ["have got", "has got", "обладание английский"],
  },
  personalinfo: {
    title: "Личная информация",
    description:
      "Как рассказать о себе на английском: имя, возраст, профессия, хобби, семья",
    keywords: [
      "personal information",
      "рассказ о себе английский",
      "introduce yourself",
    ],
  },
  presentsimple: {
    title: "Present Simple",
    description:
      "Настоящее простое время: правила образования, случаи употребления, глаголы в Present Simple",
    keywords: [
      "present simple",
      "настоящее простое время",
      "present tense",
      "английские времена",
    ],
  },
  presentsimplehabits: {
    title: "Present Simple: Привычки",
    description:
      "Использование Present Simple для описания привычек, рутины и постоянных действий",
    keywords: ["present simple habits", "привычки английский", "daily routine"],
  },
  imperatives: {
    title: "Повелительное наклонение",
    description:
      "Imperatives в английском: приказы, просьбы, инструкции, запреты",
    keywords: ["imperatives", "повелительное наклонение", "commands"],
  },
  canability: {
    title: "Can/Can't: Способности",
    description:
      "Модальный глагол can для выражения способности, возможности, разрешения",
    keywords: ["can cant", "модальный глагол can", "ability"],
  },
  thereisare: {
    title: "There is/There are",
    description:
      "Конструкция there is/are для описания наличия и существования предметов",
    keywords: ["there is there are", "существование английский"],
  },
  prepositions: {
    title: "Предлоги места",
    description:
      "Предлоги места в английском: in, on, at, under, behind, between, next to",
    keywords: ["prepositions of place", "предлоги места", "in on at"],
  },
  prepositionsoftime: {
    title: "Предлоги времени",
    description:
      "Предлоги времени: in, on, at для дат, месяцев, времени суток, дней недели",
    keywords: ["prepositions of time", "предлоги времени", "in on at time"],
  },
  presentcontinuous: {
    title: "Present Continuous",
    description:
      "Настоящее продолженное время: правила образования, употребление, отличие от Present Simple",
    keywords: [
      "present continuous",
      "настоящее продолженное",
      "present progressive",
      "ing форма",
    ],
  },
  presentcontinuousadvanced: {
    title: "Present Continuous: Расширенное",
    description:
      "Продвинутое использование Present Continuous: будущие планы, временные ситуации",
    keywords: ["present continuous advanced", "future plans"],
  },
  presentcomparison: {
    title: "Present Simple vs Present Continuous",
    description:
      "Сравнение Present Simple и Present Continuous: когда использовать каждое время",
    keywords: ["present simple vs continuous", "сравнение времен"],
  },
  pastsimplewas: {
    title: "Past Simple: Was/Were",
    description:
      "Прошедшее время глагола to be: was/were в утверждениях, отрицаниях, вопросах",
    keywords: ["past simple was were", "глагол to be прошедшее"],
  },
  pastsimpleverbs: {
    title: "Past Simple: Правильные и неправильные глаголы",
    description:
      "Прошедшее простое время: regular и irregular verbs, правила образования Past Simple",
    keywords: [
      "past simple",
      "irregular verbs",
      "неправильные глаголы",
      "past tense",
    ],
  },
  pastcontinuous: {
    title: "Past Continuous",
    description:
      "Прошедшее продолженное время: формирование, использование, примеры",
    keywords: ["past continuous", "прошедшее продолженное", "was were ing"],
  },
  pastvspast: {
    title: "Past Continuous vs Past Simple",
    description:
      "Разница между Past Continuous и Past Simple: параллельные и последовательные действия",
    keywords: ["past continuous vs simple", "разница прошедших времен"],
  },
  reviewtenses: {
    title: "Повторение времён",
    description:
      "Комплексное повторение всех изученных времен: Present, Past, Future",
    keywords: ["tenses review", "повторение времен", "english tenses"],
  },
  testtenses: {
    title: "Тест: Времена",
    description:
      "Тест на проверку знания английских времен: Present, Past, Future",
    keywords: ["tenses test", "тест времена английский"],
  },
  futuresimple: {
    title: "Future Simple и Going to",
    description:
      "Будущее время: will, shall, going to. Правила, различия, случаи употребления",
    keywords: [
      "future simple",
      "будущее время",
      "will shall",
      "going to",
      "future tense",
    ],
  },
  presentcontinuousfuture: {
    title: "Present Continuous для будущего",
    description:
      "Использование Present Continuous для выражения будущих договоренностей и планов",
    keywords: ["present continuous future", "будущие планы английский"],
  },
  futuresimpleoffers: {
    title: "Future Simple: Предложения и желания",
    description: "Will для предложений помощи, обещаний, спонтанных решений",
    keywords: ["will offers", "предложения английский", "promises"],
  },
  verbsinfinitive: {
    title: "Глаголы с -ing или инфинитивом",
    description:
      "Герундий и инфинитив: глаголы с -ing формой и to-infinitive",
    keywords: [
      "gerunds infinitives",
      "verb patterns",
      "герундий инфинитив",
    ],
  },
  modals: {
    title: "Модальные глаголы",
    description:
      "Модальные глаголы: can, could, may, might, must, should, would. Правила и употребление",
    keywords: [
      "modal verbs",
      "модальные глаголы",
      "can could may might must should",
    ],
  },
  modalsconsolidation: {
    title: "Закрепление модальных глаголов",
    description:
      "Практика использования модальных глаголов в различных ситуациях",
    keywords: ["modals practice", "практика модальных глаголов"],
  },
  testmodals: {
    title: "Тест: Модальные глаголы",
    description:
      "Проверочный тест на знание модальных глаголов английского языка",
    keywords: ["modals test", "тест модальные глаголы"],
  },
  comparative: {
    title: "Сравнительная степень прилагательных",
    description:
      "Comparative adjectives: правила образования сравнительной степени",
    keywords: [
      "comparative",
      "сравнительная степень",
      "comparative adjectives",
    ],
  },
  superlative: {
    title: "Превосходная степень прилагательных",
    description:
      "Superlative adjectives: превосходная степень, правила и исключения",
    keywords: ["superlative", "превосходная степень", "superlative adjectives"],
  },
  family: {
    title: "Семья и родственные отношения",
    description:
      "Лексика о семье на английском: члены семьи, родственники, семейные отношения",
    keywords: ["family", "семья английский", "relatives", "family members"],
  },
  chores: {
    title: "Домашние дела и привычки",
    description: "Household chores: домашние обязанности и ежедневные дела",
    keywords: ["chores", "домашние дела английский", "household chores"],
  },
  quantifiers: {
    title: "Квантификаторы",
    description:
      "Some, any, much, many, a few, a little: правила использования квантификаторов",
    keywords: ["quantifiers", "some any", "much many", "a few a little"],
  },
  presentperfect: {
    title: "Present Perfect",
    description:
      "Настоящее совершенное время: формирование, употребление, отличие от Past Simple",
    keywords: [
      "present perfect",
      "настоящее совершенное",
      "have has",
      "past participle",
    ],
  },
  firstconditional: {
    title: "First Conditional",
    description:
      "Условные предложения первого типа: if + Present Simple, will + infinitive",
    keywords: [
      "first conditional",
      "условные предложения",
      "if clauses",
      "type 1",
    ],
  },
  presentperfectvscontinuous: {
    title: "Present Perfect vs Present Continuous",
    description:
      "Разница между Present Perfect и Present Continuous: правила выбора времени",
    keywords: ["present perfect vs continuous"],
  },
  presentperfectvspast: {
    title: "Present Perfect vs Past Simple",
    description:
      "Когда использовать Present Perfect, а когда Past Simple: ключевые различия",
    keywords: ["present perfect vs past simple", "разница времен"],
  },
  zeroconditional: {
    title: "Zero Conditional",
    description:
      "Условные предложения нулевого типа: общие истины и научные факты",
    keywords: ["zero conditional", "условные предложения тип 0"],
  },
  timeanddates: {
    title: "Время и даты",
    description:
      "Как говорить о времени и датах на английском: часы, дни недели, месяцы, годы",
    keywords: ["time dates", "время английский", "даты английский"],
  },
  questions: {
    title: "Вопросительные предложения",
    description:
      "Порядок слов в вопросах, вопросительные слова: who, what, where, when, why, how",
    keywords: ["questions", "вопросы английский", "question words", "wh words"],
  },
  questiontags: {
    title: "Разделительные вопросы",
    description:
      "Question tags: разделительные вопросы в английском языке, правила образования",
    keywords: ["question tags", "разделительные вопросы", "tag questions"],
  },
  foodanddrinks: {
    title: "Еда и напитки",
    description:
      "Лексика по теме еда и напитки: названия продуктов, блюд, напитков на английском",
    keywords: ["food drinks", "еда английский", "напитки английский"],
  },
  placesanddirections: {
    title: "Места и направления",
    description:
      "Как спросить и объяснить дорогу на английском: предлоги направления, места в городе",
    keywords: ["places directions", "места английский", "как пройти английский"],
  },
  hobbiesandfreetime: {
    title: "Хобби и свободное время",
    description:
      "Лексика о хобби и досуге на английском: занятия в свободное время, увлечения",
    keywords: ["hobbies", "хобби английский", "free time", "leisure"],
  },
  passivevoice1: {
    title: "Passive Voice 1",
    description:
      "Пассивный залог в Present и Past Simple: образование и употребление",
    keywords: [
      "passive voice",
      "страдательный залог",
      "passive form",
      "be + past participle",
    ],
  },
  relativeclauses: {
    title: "Relative Clauses",
    description:
      "Относительные придаточные предложения: who, which, that, where, when",
    keywords: ["relative clauses", "придаточные предложения", "who which that"],
  },
  passivevoice2: {
    title: "Passive Voice 2",
    description:
      "Пассивный залог во всех временах: Present, Past, Future, Perfect",
    keywords: ["passive voice all tenses", "пассив все времена"],
  },
  houseandhome: {
    title: "Дом и мебель",
    description:
      "Комнаты в доме, мебель, предметы интерьера на английском языке",
    keywords: ["house home", "дом английский", "rooms", "furniture", "мебель"],
  },
  cityandshops: {
    title: "Город и магазины",
    description:
      "Места в городе, виды магазинов, покупки на английском языке",
    keywords: ["city shops", "город английский", "магазины английский"],
  },
  sportsandmusic: {
    title: "Спорт, музыка и чтение",
    description:
      "Лексика о спорте, музыке и чтении: виды спорта, музыкальные инструменты, жанры",
    keywords: ["sports music", "спорт английский", "музыка английский"],
  },
  travelandtransport: {
    title: "Путешествия и транспорт",
    description:
      "Виды транспорта, путешествия, отпуск на английском языке",
    keywords: [
      "travel transport",
      "путешествия английский",
      "транспорт английский",
    ],
  },
  relativeclausesdetailed: {
    title: "Relative Clauses: Детально",
    description:
      "Подробное изучение относительных придаточных: defining и non-defining clauses",
    keywords: [
      "relative clauses detailed",
      "defining non-defining",
      "придаточные детально",
    ],
  },
  workandjobs: {
    title: "Работа и профессии",
    description:
      "Профессии, места работы, должности, офис на английском языке",
    keywords: ["work jobs", "работа английский", "профессии английский"],
  },
  weatherandseasons: {
    title: "Погода и времена года",
    description:
      "Как говорить о погоде и временах года на английском: описание погодных условий",
    keywords: ["weather seasons", "погода английский", "времена года английский"],
  },
  shoppingandmoney: {
    title: "Покупки и деньги",
    description:
      "Шопинг, деньги, цены на английском: как совершать покупки и говорить о ценах",
    keywords: ["shopping money", "покупки английский", "деньги английский"],
  },
  healthandbody: {
    title: "Здоровье и тело",
    description:
      "Части тела, здоровье, болезни, визит к врачу на английском языке",
    keywords: ["health body", "здоровье английский", "части тела английский"],
  },
  technologyandgadgets: {
    title: "Технологии и гаджеты",
    description:
      "Компьютер, телефон, интернет, технологии на английском языке",
    keywords: [
      "technology gadgets",
      "технологии английский",
      "гаджеты английский",
    ],
  },
  conjunctions: {
    title: "Союзы",
    description:
      "Союзы в английском языке: and, but, or, so, because для связи предложений",
    keywords: ["conjunctions", "союзы английский", "and but or so because"],
  },
  experiences: {
    title: "Опыты и истории",
    description:
      "Как рассказывать о прошлых событиях и будущих планах на английском",
    keywords: ["experiences", "stories", "рассказы английский"],
  },
  review1: {
    title: "Повторение 1: Грамматика и лексика",
    description:
      "Комплексное повторение пройденной грамматики и лексики уровня A1",
    keywords: ["review", "повторение A1", "grammar vocabulary"],
  },
  review2: {
    title: "Повторение 2: Продвинутая практика",
    description:
      "Продвинутое повторение всех тем уровня A1 перед финальным тестом",
    keywords: ["advanced review", "повторение продвинутое"],
  },
  finaltest: {
    title: "Финальный тест A1",
    description:
      "Финальный тест уровня A1: 100 вопросов на проверку всех знаний Elementary",
    keywords: ["final test A1", "финальный тест", "100 questions"],
  },

  // B1 ТЕМЫ
  presentperfectcontinuous: {
    title: "Present Perfect Continuous",
    description:
      "Настоящее совершенное продолженное время: формирование, употребление, отличия от Present Perfect",
    keywords: [
      "present perfect continuous",
      "настоящее совершенное продолженное",
      "have been ing",
    ],
  },
  pastperfect: {
    title: "Past Perfect",
    description:
      "Прошедшее совершенное время: had + past participle, употребление и примеры",
    keywords: ["past perfect", "прошедшее совершенное", "had done"],
  },
  pastperfectcomparison: {
    title: "Сравнение Past Perfect и Past Simple",
    description:
      "Когда использовать Past Perfect вместо Past Simple: последовательность событий",
    keywords: ["past perfect vs simple", "сравнение прошедших"],
  },
  mixedtenses1: {
    title: "Смешанные времена 1",
    description:
      "Практика использования разных времен в одном тексте: Present, Past, Perfect",
    keywords: ["mixed tenses", "смешанные времена", "tenses practice"],
  },
  mixedtenses2: {
    title: "Смешанные времена 2",
    description:
      "Продвинутая практика всех времен английского языка в комплексе",
    keywords: ["advanced mixed tenses", "все времена практика"],
  },
  futureforms: {
    title: "Формы будущего времени",
    description:
      "Все способы выражения будущего: will, going to, Present Continuous, Present Simple",
    keywords: ["future forms", "формы будущего", "ways to express future"],
  },
  usedtowould: {
    title: "Used to / Would",
    description:
      "Used to и would для описания прошлых привычек и повторяющихся действий",
    keywords: ["used to would", "прошлые привычки", "past habits"],
  },
  conditionals: {
    title: "Все условные предложения",
    description:
      "Полный обзор условных предложений: Zero, First, Second, Third Conditional",
    keywords: ["all conditionals", "все условные", "if clauses complete"],
  },
  conditional2: {
    title: "Second Conditional",
    description:
      "Условные предложения второго типа: if + Past Simple, would + infinitive",
    keywords: ["second conditional", "условные 2 тип", "hypothetical"],
  },
  conditional3: {
    title: "Third Conditional",
    description:
      "Условные предложения третьего типа: if + Past Perfect, would have + past participle",
    keywords: ["third conditional", "условные 3 тип", "unreal past"],
  },
  mixedconditionals: {
    title: "Смешанные условные предложения",
    description:
      "Mixed conditionals: комбинация Second и Third Conditional",
    keywords: ["mixed conditionals", "смешанные условные"],
  },
  allconditionals: {
    title: "Все условные: Полный обзор",
    description:
      "Комплексная практика всех типов условных предложений",
    keywords: ["all conditionals review", "все условные повторение"],
  },
  modalsdeduction: {
    title: "Модальные глаголы: Дедукция",
    description:
      "Must, might, may, can't для выражения догадок и предположений",
    keywords: ["modals deduction", "модалы догадки", "must might cant"],
  },
  modalsobligationpermission: {
    title: "Модальные: Обязательство и разрешение",
    description:
      "Must, have to, should, can, may для выражения обязательств и разрешений",
    keywords: [
      "modals obligation",
      "модалы обязательство",
      "permission",
      "разрешение",
    ],
  },
  passivevoice: {
    title: "Passive Voice: Все времена",
    description:
      "Пассивный залог во всех временах и с модальными глаголами",
    keywords: ["passive voice complete", "пассив все времена полный"],
  },
  causative: {
    title: "Causative: Have/Get something done",
    description:
      "Каузативные конструкции: have/get something done для выражения услуг",
    keywords: ["causative", "have done get done", "каузатив"],
  },
  reportedstatements: {
    title: "Reported Speech: Утверждения",
    description:
      "Косвенная речь: перевод утверждений из прямой речи в косвенную",
    keywords: ["reported statements", "косвенная речь утверждения"],
  },
  reportedquestions: {
    title: "Reported Speech: Вопросы",
    description:
      "Косвенные вопросы: правила перевода вопросов в косвенную речь",
    keywords: ["reported questions", "косвенные вопросы"],
  },
  reportedcommands: {
    title: "Reported Speech: Приказы",
    description:
      "Косвенные приказы и просьбы: tell/ask/order + infinitive",
    keywords: ["reported commands", "косвенные приказы"],
  },
  reportingverbs: {
    title: "Reporting Verbs",
    description:
      "Глаголы для передачи чужих слов: say, tell, ask, explain, suggest",
    keywords: ["reporting verbs", "глаголы косвенной речи"],
  },
  presentparticiple: {
    title: "Present Participle",
    description:
      "Причастие настоящего времени: -ing формы в различных конструкциях",
    keywords: ["present participle", "причастие настоящего", "ing forms"],
  },
  pastparticiple: {
    title: "Past Participle",
    description:
      "Причастие прошедшего времени: третья форма глагола в разных функциях",
    keywords: ["past participle", "причастие прошедшего", "verb form 3"],
  },
  participleclauses: {
    title: "Participle Clauses",
    description:
      "Причастные обороты: замена придаточных предложений причастиями",
    keywords: ["participle clauses", "причастные обороты"],
  },
  wishifonly: {
    title: "Wish / If only",
    description:
      "Конструкции wish и if only для выражения желаний и сожалений",
    keywords: ["wish if only", "желания сожаления", "wishes"],
  },
  gerundsinfinitives: {
    title: "Герундий и инфинитив: Продвинутый",
    description:
      "Продвинутое использование герундия и инфинитива: verb patterns",
    keywords: [
      "gerunds infinitives advanced",
      "герундий инфинитив продвинутый",
    ],
  },
  articlesadvanced: {
    title: "Артикли: Продвинутый уровень",
    description:
      "Сложные случаи использования артиклей: географические названия, абстрактные понятия",
    keywords: ["articles advanced", "артикли продвинутый"],
  },
  adjectivesasnouns: {
    title: "Прилагательные в роли существительных",
    description:
      "Использование прилагательных как существительных: the rich, the poor",
    keywords: ["adjectives as nouns", "прилагательные существительные"],
  },
  adverbsposition: {
    title: "Позиция наречий",
    description:
      "Правила расположения наречий в предложении: начало, середина, конец",
    keywords: ["adverbs position", "позиция наречий", "word order"],
  },
  quantifiers2: {
    title: "Квантификаторы: Продвинутый",
    description:
      "Продвинутые квантификаторы: all, every, each, both, neither, either",
    keywords: ["quantifiers advanced", "квантификаторы продвинутый"],
  },
  comparativesmodifiers: {
    title: "Степени сравнения с модификаторами",
    description:
      "Much, far, a lot, slightly с comparative и superlative формами",
    keywords: ["comparative modifiers", "модификаторы сравнения"],
  },
  sosuch: {
    title: "So / Such",
    description:
      "Разница между so и such для усиления: правила использования",
    keywords: ["so such", "разница so such", "intensifiers"],
  },
  preferwouldrather: {
    title: "Prefer / Would rather",
    description:
      "Выражение предпочтений: prefer, would prefer, would rather",
    keywords: ["prefer would rather", "предпочтения английский"],
  },
  ellipsis: {
    title: "Эллипсис",
    description:
      "Опущение повторяющихся слов в английском для краткости",
    keywords: ["ellipsis", "эллипсис", "omission"],
  },
  inversion: {
    title: "Инверсия",
    description:
      "Обратный порядок слов для эмфазы: never, seldom, rarely в начале предложения",
    keywords: ["inversion", "инверсия", "word order emphasis"],
  },
  personalityadjectives: {
    title: "Прилагательные личности",
    description:
      "Описание характера человека: personality adjectives",
    keywords: [
      "personality adjectives",
      "прилагательные характер",
      "character",
    ],
  },
  relationshipsphrasalverbs: {
    title: "Фразовые глаголы: Отношения",
    description:
      "Phrasal verbs о взаимоотношениях: get on with, fall out, make up",
    keywords: ["phrasal verbs relationships", "фразовые глаголы отношения"],
  },
  workbusiness: {
    title: "Работа и бизнес",
    description:
      "Деловая лексика: работа, бизнес, офис, карьера на английском",
    keywords: ["work business", "деловой английский", "business vocabulary"],
  },
  educationlearning: {
    title: "Образование и обучение",
    description:
      "Лексика об образовании: школа, университет, обучение, учебные предметы",
    keywords: ["education learning", "образование английский"],
  },
  moneyfinance: {
    title: "Деньги и финансы",
    description:
      "Финансовая лексика: деньги, банки, инвестиции, экономика",
    keywords: ["money finance", "деньги финансы английский"],
  },
  healthlifestyle: {
    title: "Здоровье и образ жизни",
    description:
      "Здоровый образ жизни, фитнес, питание, медицина на английском",
    keywords: ["health lifestyle", "здоровье образ жизни английский"],
  },
  environmentnature: {
    title: "Окружающая среда и природа",
    description:
      "Экология, природа, защита окружающей среды на английском языке",
    keywords: ["environment nature", "экология английский", "природа"],
  },
  crimelaw: {
    title: "Преступление и закон",
    description:
      "Юридическая лексика: преступления, суд, закон, полиция",
    keywords: ["crime law", "преступление закон английский"],
  },
  medianews: {
    title: "Медиа и новости",
    description:
      "СМИ, новости, журналистика, пресса на английском языке",
    keywords: ["media news", "медиа новости английский"],
  },
  technologyscience: {
    title: "Технологии и наука",
    description:
      "Научная и технологическая лексика на английском языке",
    keywords: ["technology science", "технологии наука английский"],
  },
  traveltourism: {
    title: "Путешествия и туризм",
    description:
      "Туристическая лексика: отели, экскурсии, достопримечательности",
    keywords: ["travel tourism", "путешествия туризм английский"],
  },
  societyculture: {
    title: "Общество и культура",
    description:
      "Социальные и культурные темы на английском языке",
    keywords: ["society culture", "общество культура английский"],
  },
  foodcooking: {
    title: "Еда и кулинария",
    description:
      "Продвинутая кулинарная лексика: рецепты, приготовление, кухни мира",
    keywords: ["food cooking", "кулинария английский", "recipes"],
  },
  fashionappearance: {
    title: "Мода и внешность",
    description:
      "Одежда, стиль, мода, описание внешности на английском",
    keywords: ["fashion appearance", "мода внешность английский"],
  },
  houseliving: {
    title: "Дом и проживание",
    description:
      "Жилье, аренда, покупка дома, обустройство на английском",
    keywords: ["house living", "дом жилье английский"],
  },
  transporttraffic: {
    title: "Транспорт и движение",
    description:
      "Виды транспорта, дорожное движение, общественный транспорт",
    keywords: ["transport traffic", "транспорт движение английский"],
  },
  entertainment: {
    title: "Развлечения",
    description:
      "Досуг, развлечения, кино, театр, концерты на английском",
    keywords: ["entertainment", "развлечения английский"],
  },
  sportcompetition: {
    title: "Спорт и соревнования",
    description:
      "Спортивная лексика: виды спорта, соревнования, чемпионаты",
    keywords: ["sport competition", "спорт соревнования английский"],
  },
  emotions: {
    title: "Эмоции и чувства",
    description:
      "Описание эмоций и чувств на английском: happiness, sadness, anger",
    keywords: ["emotions feelings", "эмоции чувства английский"],
  },
  phrasalverbs: {
    title: "Фразовые глаголы",
    description:
      "Популярные фразовые глаголы английского языка с примерами",
    keywords: ["phrasal verbs", "фразовые глаголы", "phrasal verbs list"],
  },
  collocations: {
    title: "Коллокации",
    description:
      "Устойчивые словосочетания в английском: common collocations",
    keywords: ["collocations", "коллокации", "word combinations"],
  },
  idioms: {
    title: "Идиомы",
    description:
      "Популярные идиомы и выражения английского языка",
    keywords: ["idioms", "идиомы английский", "expressions"],
  },
  wordformation: {
    title: "Словообразование",
    description:
      "Префиксы и суффиксы для образования новых слов в английском",
    keywords: ["word formation", "словообразование", "prefixes suffixes"],
  },
  synonymsantonyms: {
    title: "Синонимы и антонимы",
    description:
      "Расширение словарного запаса через синонимы и антонимы",
    keywords: ["synonyms antonyms", "синонимы антонимы"],
  },
  givingopinions: {
    title: "Выражение мнений",
    description:
      "Как выражать свое мнение на английском: I think, In my opinion, I believe",
    keywords: ["giving opinions", "выражение мнения английский"],
  },
  writingemails: {
    title: "Написание email",
    description:
      "Деловая переписка: как писать формальные и неформальные письма",
    keywords: ["writing emails", "деловые письма английский"],
  },
  describinggraphs: {
    title: "Описание графиков",
    description:
      "Как описывать графики, диаграммы, статистику на английском",
    keywords: ["describing graphs", "описание графиков английский"],
  },
  jobinterviews: {
    title: "Собеседования",
    description:
      "Подготовка к собеседованию на английском: вопросы и ответы",
    keywords: ["job interviews", "собеседование английский"],
  },

  // B2 ТЕМЫ
  futureinthepast: {
    title: "Future in the Past",
    description:
      "Будущее в прошедшем: was going to, was to have done для выражения планов в прошлом",
    keywords: ["future in the past", "was going to", "would"],
  },
  perfectmodals: {
    title: "Perfect Modals",
    description:
      "Модальные глаголы с перфектным инфинитивом: should have done, could have been",
    keywords: ["perfect modals", "modal perfect", "should have done"],
  },
  frontingemphasis: {
    title: "Fronting & Emphasis",
    description:
      "Вынос на первое место для эмфазы: Rarely do we see, Such was his anger",
    keywords: ["fronting", "emphasis", "инверсия эмфаза"],
  },
  cleftsentences: {
    title: "Cleft Sentences",
    description:
      "Расщепленные предложения для акцента: It was John who, What I need is",
    keywords: ["cleft sentences", "расщепленные предложения", "it was who"],
  },
  nominalisation: {
    title: "Nominalisation",
    description:
      "Номинализация: превращение глаголов и прилагательных в существительные",
    keywords: ["nominalisation", "номинализация", "word formation"],
  },
  advancedpassives: {
    title: "Advanced Passives",
    description:
      "Продвинутый пассивный залог: have sth done, be rumoured to, be said to",
    keywords: ["advanced passive", "have done", "be said to"],
  },
  complexnounphrases: {
    title: "Complex Noun Phrases",
    description:
      "Сложные именные группы: a two-hour delay, a heart-breakingly beautiful sunset",
    keywords: ["complex noun phrases", "compound nouns"],
  },
  participleclausesall: {
    title: "Participle Clauses: All Types",
    description:
      "Все типы причастных оборотов: Having been told, Being French, Written in 1984",
    keywords: ["participle clauses", "причастные обороты"],
  },
  reducedrelatives: {
    title: "Reduced Relative Clauses",
    description:
      "Сокращенные относительные предложения: Anyone wanting to leave",
    keywords: ["reduced relatives", "сокращенные придаточные"],
  },
  substitution: {
    title: "Substitution",
    description:
      "Замена повторов: do so, one/ones, such, so, neither",
    keywords: ["substitution", "замена повторов", "do so"],
  },
  advancedconditionals: {
    title: "Advanced Conditionals",
    description:
      "Продвинутые условные предложения: инверсия, смешанные типы",
    keywords: ["advanced conditionals", "продвинутые условные"],
  },
  unrealtime: {
    title: "Unreal Time",
    description:
      "Нереальное время: it's time, would rather, as if, as though",
    keywords: ["unreal time", "its time", "would rather"],
  },
  mixedconditionalsfull: {
    title: "Mixed Conditionals: Full",
    description:
      "Полный курс смешанных условных предложений всех типов",
    keywords: ["mixed conditionals complete", "смешанные условные полный"],
  },
  hypotheticalwish: {
    title: "Hypothetical Wish",
    description:
      "Гипотетические желания и сожаления: wish, if only, hope",
    keywords: ["wish if only", "гипотетические желания"],
  },
  advancedgerundsinfinitives: {
    title: "Advanced Gerunds & Infinitives",
    description:
      "Продвинутые герундий и инфинитив: сложные конструкции и исключения",
    keywords: ["advanced gerunds", "герундий продвинутый"],
  },
  verbsofperception: {
    title: "Verbs of Perception",
    description:
      "Глаголы восприятия: see, watch, hear, feel + object + infinitive/ing",
    keywords: ["verbs of perception", "глаголы восприятия"],
  },
  complexprepositions: {
    title: "Complex Prepositions",
    description:
      "Сложные предлоги: in spite of, by means of, on behalf of",
    keywords: ["complex prepositions", "сложные предлоги"],
  },
  discoursemarkers: {
    title: "Discourse Markers",
    description:
      "Дискурсивные маркеры для связности речи: moreover, furthermore, nevertheless",
    keywords: ["discourse markers", "связующие слова"],
  },
  parallelismbalance: {
    title: "Parallelism & Balance",
    description:
      "Параллельные конструкции для красоты речи: not only...but also",
    keywords: ["parallelism", "параллелизм", "balance"],
  },
  parenthesisapposition: {
    title: "Parenthesis & Apposition",
    description:
      "Вводные конструкции и приложения в английском языке",
    keywords: ["parenthesis", "apposition", "вводные конструкции"],
  },
  punctuationcomplex: {
    title: "Complex Punctuation",
    description:
      "Сложная пунктуация: semicolons, colons, dashes в академическом письме",
    keywords: ["punctuation", "пунктуация английский"],
  },
  academicvocabulary: {
    title: "Academic Vocabulary",
    description:
      "Академическая лексика для научных работ и эссе",
    keywords: ["academic vocabulary", "академический английский"],
  },
  medicalenglish: {
    title: "Medical English",
    description:
      "Медицинский английский: термины, симптомы, лечение",
    keywords: ["medical english", "медицинский английский"],
  },
  politicalvocabulary: {
    title: "Political Vocabulary",
    description:
      "Политическая лексика: правительство, выборы, политика",
    keywords: ["political vocabulary", "политический английский"],
  },
  mediajournalism: {
    title: "Media & Journalism",
    description:
      "Язык медиа и журналистики: пресса, новости, репортажи",
    keywords: ["media journalism", "журналистика английский"],
  },
  psychologyemotions: {
    title: "Psychology & Emotions",
    description:
      "Психологическая лексика: эмоции, поведение, ментальное здоровье",
    keywords: ["psychology emotions", "психология английский"],
  },
  sciencetechnology: {
    title: "Science & Technology",
    description:
      "Научная и технологическая лексика высокого уровня",
    keywords: ["science technology advanced", "наука технологии"],
  },
  environmentsustainability: {
    title: "Environment & Sustainability",
    description:
      "Экология и устойчивое развитие: климат, загрязнение, green energy",
    keywords: ["environment sustainability", "экология устойчивое развитие"],
  },
  literaturecriticism: {
    title: "Literature & Criticism",
    description:
      "Литературоведение: анализ текстов, литературная критика",
    keywords: ["literature criticism", "литературоведение английский"],
  },
  artarchitecture: {
    title: "Art & Architecture",
    description:
      "Искусство и архитектура: стили, движения, термины",
    keywords: ["art architecture", "искусство архитектура английский"],
  },
  philosophy: {
    title: "Philosophy",
    description:
      "Философская лексика: этика, логика, философские концепции",
    keywords: ["philosophy", "философия английский"],
  },
  idiomsadvanced: {
    title: "Advanced Idioms",
    description:
      "Продвинутые идиомы английского языка: редкие и литературные",
    keywords: ["advanced idioms", "продвинутые идиомы"],
  },
  phrasalverbsrare: {
    title: "Rare Phrasal Verbs",
    description:
      "Редкие фразовые глаголы для продвинутого уровня",
    keywords: ["rare phrasal verbs", "редкие фразовые глаголы"],
  },
  binomialstrinomials: {
    title: "Binomials & Trinomials",
    description:
      "Бинарные и тернарные выражения: black and white, lock, stock and barrel",
    keywords: ["binomials trinomials", "бинарные выражения"],
  },
  oxymoronsparadoxes: {
    title: "Oxymorons & Paradoxes",
    description:
      "Оксюмороны и парадоксы в английском: bittersweet, deafening silence",
    keywords: ["oxymorons paradoxes", "оксюмороны"],
  },
  euphemismsdysphemisms: {
    title: "Euphemisms & Dysphemisms",
    description:
      "Эвфемизмы и дисфемизмы: вежливые и грубые выражения",
    keywords: ["euphemisms", "эвфемизмы английский"],
  },
  slanginformal: {
    title: "Slang & Informal Language",
    description:
      "Сленг и неформальный английский: современный разговорный язык",
    keywords: ["slang", "сленг английский", "informal language"],
  },
  britishamericanenglish: {
    title: "British vs American English",
    description:
      "Различия между британским и американским английским",
    keywords: ["british american", "британский американский английский"],
  },
  falsefriends: {
    title: "False Friends",
    description:
      "Ложные друзья переводчика: слова похожие, но с разным значением",
    keywords: ["false friends", "ложные друзья переводчика"],
  },
  debating: {
    title: "Debating",
    description:
      "Язык дебатов: аргументация, опровержение, риторические приемы",
    keywords: ["debating", "дебаты английский", "argumentation"],
  },
  diplomaticlanguage: {
    title: "Diplomatic Language",
    description:
      "Дипломатический язык: вежливость, тактичность, формальность",
    keywords: ["diplomatic language", "дипломатический английский"],
  },
  businesscorrespondence: {
    title: "Business Correspondence",
    description:
      "Деловая переписка высокого уровня: контракты, предложения, переговоры",
    keywords: ["business correspondence", "деловая переписка"],
  },
  rhetoricaldevices: {
    title: "Rhetorical Devices",
    description:
      "Риторические приемы: метафора, аллитерация, анафора",
    keywords: ["rhetorical devices", "риторические приемы"],
  },
};

// Генерация динамического metadata для страниц с query параметрами
export function generateDynamicLessonMetadata({
  title,
  description,
  level,
  topicId,
  step,
  totalSteps,
  keywords = [],
}: LessonSEO): Metadata {
  const levelName = levelNames[level.toLowerCase()] || level.toUpperCase();

  // Формируем title со step если есть
  const stepText = step && totalSteps ? ` — Шаг ${step}/${totalSteps}` : "";
  const fullTitle = `${title}${stepText} — ${levelName}`;

  // Формируем description
  const stepDescription = step && totalSteps
    ? ` Урок ${step} из ${totalSteps} для уровня ${levelName}.`
    : ` Интерактивный урок для уровня ${levelName}.`;
  const fullDescription = `${description}${stepDescription}`;

  // Canonical указывает на шаг 1 (без step в URL) чтобы избежать дублей
  const canonicalUrl = `${BASE_URL}/blocks/${level}?t=${topicId}`;

  const defaultKeywords = [
    "английский язык",
    `английский ${level.toUpperCase()}`,
    `урок английского ${level.toUpperCase()}`,
    title.toLowerCase(),
    "грамматика английского",
    "изучение английского",
    "английский онлайн",
  ];

  return {
    title: fullTitle,
    description: fullDescription.slice(0, 160), // max 160 символов
    keywords: [...defaultKeywords, ...keywords].slice(0, 15), // max 15 keywords
    openGraph: {
      title: `${fullTitle} | English Learning Platform`,
      description: fullDescription.slice(0, 155),
      type: "article",
      locale: "ru_RU",
      url: `${BASE_URL}/blocks/${level}?t=${topicId}${step ? `&s=${step}` : ""}`,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription.slice(0, 155),
    },
    alternates: {
      canonical: canonicalUrl, // Всегда канонический без step
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Генерация metadata для обычных страниц (не уроков)
export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  keywords: string[] = [],
  robots?: { index: boolean; follow: boolean }
): Metadata {
  return {
    title,
    description: description.slice(0, 160),
    keywords: [
      "английский язык",
      "изучение английского",
      "английский онлайн",
      ...keywords,
    ].slice(0, 15),
    openGraph: {
      title: `${title} | English Learning Platform`,
      description: description.slice(0, 155),
      type: "website",
      locale: "ru_RU",
      url: `${BASE_URL}${path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | English Learning Platform`,
      description: description.slice(0, 155),
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
    robots: robots || {
      index: true,
      follow: true,
    },
  };
}

// Функция для получения SEO данных темы
export function getTopicSEO(topicId: string) {
  return allTopicsSEO[topicId] || {
    title: topicId.charAt(0).toUpperCase() + topicId.slice(1),
    description: `Урок английского языка по теме ${topicId}`,
    keywords: [topicId],
  };
}
