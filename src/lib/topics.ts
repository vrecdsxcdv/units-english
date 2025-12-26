// Конфигурация тем для разных уровней

export type Topic = {
  id: string;
  title: string;
};

export const A1_TOPICS: Topic[] = [
  { id: "nouns", title: "Существительные" },
  { id: "articles", title: "Артикли" },
  { id: "pronouns", title: "Местоимения" },
  { id: "demonstrative", title: "Указательные местоимения" },
  { id: "greetings", title: "Приветствие" },
  { id: "possessive", title: "Притяжательный падеж" },
  { id: "adverbs", title: "Наречия" },
  { id: "tobe", title: "Глагол to be" },
  { id: "havegot", title: "Have/Has Got" },
  { id: "personalinfo", title: "Личная информация" },
  { id: "presentsimple", title: "Present Simple" },
  { id: "presentsimplehabits", title: "PS: Привычки" },
  { id: "imperatives", title: "Повелительное наклонение" },
  { id: "canability", title: "Can/Can't" },
  { id: "thereisare", title: "There is/There are" },
  { id: "prepositions", title: "Предлоги места" },
  { id: "prepositionsoftime", title: "Предлоги времени" },
  { id: "presentcontinuous", title: "Present Continuous" },
  { id: "presentcontinuousadvanced", title: "PC: Расширенное" },
  { id: "presentcomparison", title: "PS vs PC" },
  { id: "pastsimplewas", title: "Past Simple: Was/Were" },
  { id: "pastsimpleverbs", title: "Past Simple: Глаголы" },
  { id: "pastcontinuous", title: "Past Continuous" },
  { id: "pastvspast", title: "Past C vs Past S" },
  { id: "reviewtenses", title: "Повторение времён" },
  { id: "testtenses", title: "Тест: Времена" },
  { id: "futuresimple", title: "Future Simple & Going to" },
  { id: "presentcontinuousfuture", title: "PC: Будущие договорённости" },
  { id: "futuresimpleoffers", title: "FS: Предложения и желания" },
  { id: "verbsinfinitive", title: "Глаголы: -ing или to" },
  { id: "modals", title: "Модальные глаголы" },
  { id: "modalsconsolidation", title: "Закрепление модальных" },
  { id: "testmodals", title: "ТЕСТ: Модальные глаголы" },
  { id: "comparative", title: "Сравнительная степень" },
  { id: "superlative", title: "Превосходная степень" },
  { id: "family", title: "Семья и родственники" },
  { id: "chores", title: "Домашние дела" },
  { id: "quantifiers", title: "Квантификаторы" },
  { id: "presentperfect", title: "Present Perfect" },
  { id: "firstconditional", title: "First Conditional" },
  { id: "presentperfectvscontinuous", title: "PP vs PC" },
  { id: "presentperfectvspast", title: "PP vs Past S" },
  { id: "zeroconditional", title: "Zero Conditional" },
  { id: "timeanddates", title: "Time & Dates" },
  { id: "questions", title: "Questions" },
  { id: "questiontags", title: "Question Tags" },
  { id: "foodanddrinks", title: "Food & Drinks" },
  { id: "placesanddirections", title: "Places & Directions" },
  { id: "hobbiesandfreetime", title: "Hobbies & Free Time" },
  { id: "passivevoice1", title: "Passive Voice 1" },
  { id: "relativeclauses", title: "Relative Clauses" },
  { id: "passivevoice2", title: "Passive Voice 2" },
  { id: "houseandhome", title: "House and Home" },
  { id: "cityandshops", title: "City and Shops" },
  { id: "sportsandmusic", title: "Sports, Music & Reading" },
  { id: "travelandtransport", title: "Travel & Transport" },
  { id: "relativeclausesdetailed", title: "Relative Clauses Detailed" },
  { id: "workandjobs", title: "Work and Jobs" },
  { id: "weatherandseasons", title: "Weather & Seasons" },
  { id: "shoppingandmoney", title: "Shopping & Money" },
  { id: "healthandbody", title: "Health & Body" },
  { id: "technologyandgadgets", title: "Technology & Gadgets" },
  { id: "conjunctions", title: "Conjunctions" },
  { id: "experiences", title: "Experiences & Stories" },
  { id: "review1", title: "📚 Review 1" },
  { id: "review2", title: "📚 Review 2" },
  { id: "finaltest", title: "📝 Final Test" },
];

export const B1_TOPICS: Topic[] = [
  {
    id: "presentperfectcontinuous",
    title: "Present Perfect Continuous — Длительность с результатом",
  },
  { id: "pastperfect", title: "Past Perfect — Предпрошедшее время" },
  {
    id: "pastperfectcomparison",
    title: "Past Perfect vs Past Perfect Continuous — Сравнение",
  },
  { id: "mixedtenses1", title: "Смешанные времена: Повторение 1" },
  { id: "mixedtenses2", title: "Смешанные времена: Повторение 2" },
  { id: "futureforms", title: "Все формы будущего времени" },
  { id: "usedtowould", title: "Used to / Would — Привычки в прошлом" },
  { id: "conditionals", title: "Conditionals 0 & 1 — Реальные условия" },
  { id: "conditional2", title: "Second Conditional — Нереальное настоящее" },
  { id: "conditional3", title: "Third Conditional — Нереальное прошлое" },
  { id: "mixedconditionals", title: "Mixed Conditionals — Смешанные условия" },
  {
    id: "allconditionals",
    title: "All Conditionals — Полное повторение всех типов",
  },
  {
    id: "modalsdeduction",
    title: "Modals of Deduction — Предположения (must, can't, might)",
  },
  {
    id: "modalsobligationpermission",
    title: "Modals of Obligation & Permission — Обязанность и разрешение",
  },
  {
    id: "passivevoice",
    title: "Passive Voice — Страдательный залог (все времена)",
  },
  {
    id: "causative",
    title: "Causative: have/get sth done, get sb to do",
  },
  {
    id: "reportedstatements",
    title: "Reported Speech 1: Statements (Утверждения)",
  },
  {
    id: "reportedquestions",
    title: "Reported Speech 2: Questions (Вопросы)",
  },
  {
    id: "reportedcommands",
    title: "Reported Speech 3: Commands (Команды)",
  },
  {
    id: "reportingverbs",
    title: "Reporting Verbs (suggest, advise, promise, warn)",
  },
  {
    id: "presentparticiple",
    title: "Present Participle Clauses (-ing причастия)",
  },
  {
    id: "pastparticiple",
    title: "Past Participle Clauses (-ed/V3 причастия)",
  },
  {
    id: "participleclauses",
    title: "Participle Clauses — Сравнение и комбинации",
  },
  {
    id: "wishifonly",
    title: "Wish / If Only — Желания и сожаления",
  },
  {
    id: "gerundsinfinitives",
    title: "Gerunds & Infinitives — Продвинутые паттерны",
  },
  {
    id: "articlesadvanced",
    title: "Articles — Продвинутое использование",
  },
  {
    id: "adjectivesasnouns",
    title: "Adjectives as Nouns — THE Rich, THE Poor",
  },
  {
    id: "adverbsposition",
    title: "Adverbs: Position & Advanced Types",
  },
  {
    id: "questiontags",
    title: "Question Tags: Advanced — Разделительные вопросы",
  },
  {
    id: "quantifiers",
    title: "Quantifiers: plenty of, loads of, heaps of",
  },
  {
    id: "comparativesmodifiers",
    title: "Comparatives & Superlatives: Modifiers",
  },
  {
    id: "sosuch",
    title: "So / Such / Too / Enough",
  },
  {
    id: "preferwouldrather",
    title: "Prefer / Would Rather / Had Better",
  },
  {
    id: "ellipsis",
    title: "Ellipsis & Substitution — Avoiding Repetition",
  },
  {
    id: "inversion",
    title: "Inversion — Never have I..., No sooner...",
  },
  {
    id: "personalityadjectives",
    title: "Personality Adjectives — Describing Character",
  },
  {
    id: "relationshipsphrasalverbs",
    title: "Relationships: Phrasal Verbs",
  },
  {
    id: "workbusiness",
    title: "Work & Business Vocabulary",
  },
  {
    id: "educationlearning",
    title: "Education & Learning Vocabulary",
  },
  {
    id: "moneyfinance",
    title: "Money & Finance Vocabulary",
  },
  {
    id: "healthlifestyle",
    title: "Health & Lifestyle Vocabulary",
  },
  {
    id: "environmentnature",
    title: "Environment & Nature — 250 Words",
  },
  {
    id: "crimelaw",
    title: "Crime & Law — 100 Words",
  },
  {
    id: "medianews",
    title: "Media & News — 150 Words",
  },
  {
    id: "technologyscience",
    title: "Technology & Science — 200+ Words",
  },
  {
    id: "traveltourism",
    title: "Travel & Tourism — 150+ Words",
  },
  {
    id: "societyculture",
    title: "Society & Culture — 150+ Words",
  },
  {
    id: "foodcooking",
    title: "Food & Cooking — 150+ Words",
  },
  {
    id: "fashionappearance",
    title: "Fashion & Appearance — 150+ Words",
  },
  {
    id: "houseliving",
    title: "House & Living — 150+ Words",
  },
  {
    id: "transporttraffic",
    title: "Transport & Traffic — 70 Words",
  },
  {
    id: "entertainment",
    title: "Entertainment — 120+ Words",
  },
  {
    id: "sportcompetition",
    title: "Sport & Competition — 120+ Words",
  },
  {
    id: "emotions",
    title: "Emotions & Reactions — 100+ Words",
  },
  {
    id: "phrasalverbs",
    title: "Phrasal Verbs — 20 Most Common",
  },
  {
    id: "collocations",
    title: "Collocations — Verb + Noun",
  },
  {
    id: "idioms",
    title: "Idioms & Expressions — 30+ Phrases",
  },
  {
    id: "wordformation",
    title: "Word Formation — Suffixes",
  },
  {
    id: "synonymsantonyms",
    title: "Synonyms & Antonyms — Nuances",
  },
  {
    id: "givingopinions",
    title: "Giving Opinions & Agreeing/Disagreeing",
  },
  {
    id: "writingemails",
    title: "Writing Formal & Informal Emails",
  },
  {
    id: "describinggraphs",
    title: "Describing Graphs & Trends",
  },
  {
    id: "jobinterviews",
    title: "Job Interviews: Questions & Answers",
  },
];

export const B2_TOPICS: Topic[] = [
  {
    id: "futureinthepast",
    title: "Future in the Past (was going to, was to have done)",
  },
  {
    id: "perfectmodals",
    title:
      "Perfect Modals (should have done, could have been, might have lost)",
  },
  {
    id: "inversion",
    title: "Inversion (Not only…, Hardly had I…, Under no circumstances…)",
  },
  {
    id: "frontingemphasis",
    title: "Fronting & Emphasis (Rarely do we see…, Such was his anger that…)",
  },
  {
    id: "cleftsentences",
    title: "Cleft Sentences (It was John who…, What I need is…)",
  },
  {
    id: "nominalisation",
    title:
      "Nominalisation (decide → decision, happy → happiness, grow → growth)",
  },
  {
    id: "advancedpassives",
    title:
      "Advanced Passives (have sth done, get sth done, be rumoured to, be said to)",
  },
  {
    id: "complexnounphrases",
    title:
      "Complex Noun Phrases (a two-hour delay, a heart-breakingly beautiful sunset)",
  },
  {
    id: "participleclausesall",
    title:
      "Participle Clauses: All Types (Having been told…, Being French…, Written in 1984…)",
  },
  {
    id: "reducedrelatives",
    title:
      "Reduced Relative Clauses (Anyone wanting to leave…, The book published last year…)",
  },
  {
    id: "ellipsis",
    title:
      "Ellipsis: Advanced (I can swim and she can too. / He said he would, but didn't.)",
  },
  {
    id: "substitution",
    title: "Substitution: do so, one/ones, such, so, neither",
  },
  {
    id: "advancedconditionals",
    title:
      "Advanced Conditionals (If it weren't for…, Had it not been for…, Supposing…)",
  },
  {
    id: "unrealtime",
    title:
      "Unreal Time (It's time you learned…, I'd rather you didn't…, I wish you were…)",
  },
  {
    id: "mixedconditionalsfull",
    title:
      "Mixed Conditionals: Full Course (If I had studied, I would be a doctor now)",
  },
  {
    id: "hypotheticalwish",
    title:
      "Hypothetical Wish (I wish I hadn't said that…, If only she were here…)",
  },
  {
    id: "advancedgerundsinfinitives",
    title:
      "Advanced Gerunds & Infinitives (regret doing/to do, go on doing/to do, mean doing/to do)",
  },
  {
    id: "verbsofperception",
    title:
      "Verbs of Perception + Object + -ing/bare inf (see sb doing/do, hear sb doing/do)",
  },
  {
    id: "complexprepositions",
    title:
      "Complex Prepositions (in light of, with regard to, by virtue of, in spite of)",
  },
  {
    id: "discoursemarkers",
    title:
      "Discourse Markers (as regards, insofar as, with respect to, albeit)",
  },
  {
    id: "parallelismbalance",
    title:
      "Parallelism & Balance (Not only… but also…, Either… or…, Both… and…)",
  },
  {
    id: "parenthesisapposition",
    title: "Parenthesis & Apposition (My brother, a doctor, lives in London)",
  },
  {
    id: "punctuationcomplex",
    title: "Punctuation in Complex Sentences (colons, semicolons, dashes)",
  },
  {
    id: "academicvocabulary",
    title: "Academic Vocabulary (hypothesis, empirical, paradigm, methodology)",
  },
  {
    id: "collocations",
    title:
      "Collocations: academic (conduct research, draw a conclusion, reach a consensus)",
  },
  {
    id: "workbusiness",
    title: "Work & Business (stakeholder, ROI, merger, downsize, leverage)",
  },
  {
    id: "medicalenglish",
    title: "Medical English (diagnosis, prognosis, chronic, palliative)",
  },
  {
    id: "legalenglish",
    title: "Legal English (breach of contract, liable, precedent, litigation)",
  },
  {
    id: "politicalvocabulary",
    title:
      "Political Vocabulary (sovereignty, referendum, coalition, filibuster)",
  },
  {
    id: "mediajournalism",
    title: "Media & Journalism (spin, scoop, op-ed, editorial, soundbite)",
  },
  {
    id: "psychologyemotions",
    title:
      "Psychology & Emotions (cognitive dissonance, empathy, resilience, burnout)",
  },
  {
    id: "sciencetechnology",
    title: "Science & Technology (quantum, algorithm, biotech, neural network)",
  },
  {
    id: "environmentsustainability",
    title:
      "Environment & Sustainability (carbon footprint, biodiversity, deforestation, greenwashing)",
  },
  {
    id: "literaturecriticism",
    title:
      "Literature & Criticism (metaphor, allegory, dystopia, foreshadowing)",
  },
  {
    id: "artarchitecture",
    title: "Art & Architecture (avant-garde, baroque, perspective, medium)",
  },
  {
    id: "philosophy",
    title:
      "Philosophy (epistemology, existentialism, utilitarianism, dialectic)",
  },
  {
    id: "idiomsadvanced",
    title:
      "Idioms: Advanced & Literary (a Pyrrhic victory, hoist with his own petard)",
  },
  {
    id: "phrasalverbsrare",
    title:
      "Phrasal Verbs: Rare & Nuanced (fob off, palm off, drum up, eke out)",
  },
  {
    id: "binomialstrinomials",
    title: "Binomials & Trinomials (safe and sound, cool, calm and collected)",
  },
  {
    id: "oxymoronsparadoxes",
    title: "Oxymorons & Paradoxes (deafening silence, bittersweet)",
  },
  {
    id: "euphemismsdysphemisms",
    title: "Euphemisms & Dysphemisms (passed away vs kicked the bucket)",
  },
  {
    id: "slanginformal",
    title: "Slang & Informal (lit, sus, ghosting, flex, no cap)",
  },
  {
    id: "britishamericanenglish",
    title:
      "British vs American vs Global English (flat/apartment, colour/color)",
  },
  {
    id: "falsefriends",
    title:
      "False Friends: Advanced (sensible vs sensitive, eventually vs actually)",
  },
  {
    id: "debating",
    title:
      "Debating & Argumentation (structure, linking, evidence, countering)",
  },
  {
    id: "diplomaticlanguage",
    title: "Diplomatic Language (I'm afraid..., With all due respect...)",
  },
  {
    id: "businesscorrespondence",
    title: "Business Correspondence (Yours faithfully, Regards, Enclosed please find…)",
  },
  {
    id: "rhetoricaldevices",
    title: "Rhetorical Devices (anaphora, chiasmus, antithesis, zeugma)",
  },
];

export function getTopicsByLevel(level: string): Topic[] {
  switch (level) {
    case "a1":
      return A1_TOPICS;
    case "b1":
      return B1_TOPICS;
    case "c2":
      return B2_TOPICS;
    default:
      return A1_TOPICS;
  }
}

export function getLevelTitle(level: string): string {
  switch (level) {
    case "a1":
      return "A1-A2";
    case "b1":
      return "B1-B2";
    case "c2":
      return "C1-C2";
    default:
      return "Курс";
  }
}
