"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import TopicModal from "@/components/topics/TopicModal";
import dynamic from "next/dynamic";

// Динамический импорт всех компонентов уроков
const Nouns = dynamic(() => import("@/components/lesson/nouns/Nouns"));
const Articles = dynamic(() => import("@/components/lesson/articles/Articles"));
const Pronouns = dynamic(() => import("@/components/lesson/pronouns/Pronouns"));
const Demonstrative = dynamic(
  () => import("@/components/lesson/demonstrative/Demonstrative")
);
const Greetings = dynamic(
  () => import("@/components/lesson/greetings/Greetings")
);
const Possessive = dynamic(
  () => import("@/components/lesson/possessive/Possessive")
);
const Adverbs = dynamic(() => import("@/components/lesson/adverbs/Adverbs"));
const ToBe = dynamic(() => import("@/components/lesson/tobe/ToBe"));
const HaveGot = dynamic(() => import("@/components/lesson/havegot/HaveGot"));
const PersonalInfo = dynamic(
  () => import("@/components/lesson/personalinfo/PersonalInfo")
);
const PresentSimple = dynamic(
  () => import("@/components/lesson/presentsimple/PresentSimple")
);
const PresentSimpleHabits = dynamic(
  () => import("@/components/lesson/presentsimplehabits/PresentSimpleHabits")
);
const Imperatives = dynamic(
  () => import("@/components/lesson/imperatives/Imperatives")
);
const CanAbility = dynamic(
  () => import("@/components/lesson/canability/CanAbility")
);
const ThereIsAre = dynamic(
  () => import("@/components/lesson/thereisare/ThereIsAre")
);
const Prepositions = dynamic(
  () => import("@/components/lesson/prepositions/Prepositions")
);
const PrepositionsOfTime = dynamic(
  () => import("@/components/lesson/prepositionsoftime/PrepositionsOfTime")
);
const PresentContinuous = dynamic(
  () => import("@/components/lesson/presentcontinuous/PresentContinuous")
);
const PresentContinuousAdvanced = dynamic(
  () =>
    import(
      "@/components/lesson/presentcontinuousadvanced/PresentContinuousAdvanced"
    )
);
const PresentComparison = dynamic(
  () => import("@/components/lesson/presentcomparison/PresentComparison")
);
const PastSimpleWas = dynamic(
  () => import("@/components/lesson/pastsimplewas/PastSimpleWas")
);
const PastSimpleVerbs = dynamic(
  () => import("@/components/lesson/pastsimpleverbs/PastSimpleVerbs")
);
const PastContinuous = dynamic(
  () => import("@/components/lesson/pastcontinuous/PastContinuous")
);
const PastVsPast = dynamic(
  () => import("@/components/lesson/pastvspast/PastVsPast")
);
const ReviewTenses = dynamic(
  () => import("@/components/lesson/reviewtenses/ReviewTenses")
);
const TestTenses = dynamic(
  () => import("@/components/lesson/testtenses/TestTenses")
);
const FutureSimple = dynamic(
  () => import("@/components/lesson/futuresimple/FutureSimple")
);
const PresentContinuousFuture = dynamic(
  () =>
    import(
      "@/components/lesson/presentcontinuousfuture/PresentContinuousFuture"
    )
);
const FutureSimpleOffers = dynamic(
  () => import("@/components/lesson/futuresimpleoffers/FutureSimpleOffers")
);
const VerbsInfinitive = dynamic(
  () => import("@/components/lesson/verbsinfinitive/VerbsInfinitive")
);
const Modals = dynamic(() => import("@/components/lesson/modals/Modals"));
const ModalsConsolidation = dynamic(
  () => import("@/components/lesson/modalsconsolidation/ModalsConsolidation")
);
const TestModals = dynamic(
  () => import("@/components/lesson/testmodals/TestModals")
);
const Comparative = dynamic(
  () => import("@/components/lesson/comparative/Comparative")
);
const Superlative = dynamic(
  () => import("@/components/lesson/superlative/Superlative")
);
const Family = dynamic(() => import("@/components/lesson/family/Family"));
const Chores = dynamic(() => import("@/components/lesson/chores/Chores"));
const Quantifiers = dynamic(
  () => import("@/components/lesson/quantifiers/Quantifiers")
);
const PresentPerfect = dynamic(
  () => import("@/components/lesson/presentperfect/PresentPerfect")
);
const FirstConditional = dynamic(
  () => import("@/components/lesson/firstconditional/FirstConditional")
);
const PresentPerfectVsContinuous = dynamic(
  () =>
    import(
      "@/components/lesson/presentperfectvscontinuous/PresentPerfectVsContinuous"
    )
);
const PresentPerfectVsPast = dynamic(
  () => import("@/components/lesson/presentperfectvspast/PresentPerfectVsPast")
);
const ZeroConditional = dynamic(
  () => import("@/components/lesson/zeroconditional/ZeroConditional")
);
const TimeAndDates = dynamic(
  () => import("@/components/lesson/timeanddates/TimeAndDates")
);
const Questions = dynamic(
  () => import("@/components/lesson/questions/Questions")
);
const QuestionTags = dynamic(
  () => import("@/components/lesson/questiontags/QuestionTags")
);
const FoodAndDrinks = dynamic(
  () => import("@/components/lesson/foodanddrinks/FoodAndDrinks")
);
const PlacesAndDirections = dynamic(
  () => import("@/components/lesson/placesanddirections/PlacesAndDirections")
);
const HobbiesAndFreeTime = dynamic(
  () => import("@/components/lesson/hobbiesandfreetime/HobbiesAndFreeTime")
);
const PassiveVoice1 = dynamic(
  () => import("@/components/lesson/passivevoice1/PassiveVoice1")
);
const RelativeClauses = dynamic(
  () => import("@/components/lesson/relativeclauses/RelativeClauses")
);
const PassiveVoice2 = dynamic(
  () => import("@/components/lesson/passivevoice2/PassiveVoice2")
);
const HouseAndHome = dynamic(
  () => import("@/components/lesson/houseandhome/HouseAndHome")
);
const CityAndShops = dynamic(
  () => import("@/components/lesson/cityandshops/CityAndShops")
);
const SportsAndMusic = dynamic(
  () => import("@/components/lesson/sportsandmusic/SportsAndMusic")
);
const TravelAndTransport = dynamic(
  () => import("@/components/lesson/travelandtransport/TravelAndTransport")
);
const RelativeClausesDetailed = dynamic(
  () =>
    import(
      "@/components/lesson/relativeclausesdetailed/RelativeClausesDetailed"
    )
);
const WorkAndJobs = dynamic(
  () => import("@/components/lesson/workandjobs/WorkAndJobs")
);
const WeatherAndSeasons = dynamic(
  () => import("@/components/lesson/weatherandseasons/WeatherAndSeasons")
);
const ShoppingAndMoney = dynamic(
  () => import("@/components/lesson/shoppingandmoney/ShoppingAndMoney")
);
const HealthAndBody = dynamic(
  () => import("@/components/lesson/healthandbody/HealthAndBody")
);
const TechnologyAndGadgets = dynamic(
  () => import("@/components/lesson/technologyandgadgets/TechnologyAndGadgets")
);
const Conjunctions = dynamic(
  () => import("@/components/lesson/conjunctions/Conjunctions")
);
const Experiences = dynamic(
  () => import("@/components/lesson/experiences/Experiences")
);
const PoliticalVocabulary = dynamic(
  () => import("@/components/lesson/politicalvocabulary/PoliticalVocabulary")
);
const LegalEnglish = dynamic(
  () => import("@/components/lesson/legalenglish/LegalEnglish")
);
const MediaJournalism = dynamic(
  () => import("@/components/lesson/mediajournalism/MediaJournalism")
);

type Topic = {
  id: string;
  title: string;
  level: string;
  steps: number;
  description: string;
  icon: string;
};

const TOPICS: Topic[] = [
  {
    id: "nouns",
    title: "Существительные",
    level: "A1",
    steps: 5,
    description:
      "Основы существительных: единственное и множественное число, исчисляемые и неисчисляемые",
    icon: "📦",
  },
  {
    id: "articles",
    title: "Артикли",
    level: "A1",
    steps: 3,
    description: "Использование артиклей a, an, the в английском языке",
    icon: "🔤",
  },
  {
    id: "pronouns",
    title: "Местоимения",
    level: "A1",
    steps: 3,
    description: "Личные местоимения и их использование",
    icon: "👤",
  },
  {
    id: "demonstrative",
    title: "Указательные местоимения",
    level: "A1",
    steps: 3,
    description: "This, that, these, those",
    icon: "👉",
  },
  {
    id: "greetings",
    title: "Приветствие и знакомство",
    level: "A1",
    steps: 3,
    description: "Основные фразы приветствия и знакомства",
    icon: "👋",
  },
  {
    id: "possessive",
    title: "Притяжательный падеж",
    level: "A1",
    steps: 3,
    description: "Использование 's для выражения принадлежности",
    icon: "🔑",
  },
  {
    id: "adverbs",
    title: "Наречия",
    level: "A1",
    steps: 5,
    description: "Основные наречия времени, места и образа действия",
    icon: "⚡",
  },
  {
    id: "tobe",
    title: "Глагол to be",
    level: "A1",
    steps: 7,
    description: "Формы глагола to be и их использование",
    icon: "🎭",
  },
  {
    id: "havegot",
    title: "Have/Has Got",
    level: "A1",
    steps: 7,
    description: "Конструкция have got для выражения обладания",
    icon: "🎒",
  },
  {
    id: "personalinfo",
    title: "Личная информация",
    level: "A1",
    steps: 10,
    description: "Рассказ о себе: имя, возраст, профессия, хобби",
    icon: "📝",
  },
  {
    id: "presentsimple",
    title: "Present Simple: Структура",
    level: "A1",
    steps: 7,
    description: "Настоящее простое время: формы и базовое использование",
    icon: "🔄",
  },
  {
    id: "presentsimplehabits",
    title: "Present Simple: Привычки",
    level: "A1",
    steps: 7,
    description: "Использование Present Simple для описания привычек",
    icon: "📅",
  },
  {
    id: "imperatives",
    title: "Повелительное наклонение",
    level: "A1",
    steps: 7,
    description: "Команды, просьбы и инструкции",
    icon: "❗",
  },
  {
    id: "canability",
    title: "Can/Can't: Способности",
    level: "A1",
    steps: 10,
    description: "Модальный глагол can для выражения способностей",
    icon: "💪",
  },
  {
    id: "thereisare",
    title: "There is/There are",
    level: "A1",
    steps: 10,
    description: "Конструкции для описания наличия предметов",
    icon: "📍",
  },
  {
    id: "prepositions",
    title: "Предлоги места",
    level: "A1",
    steps: 10,
    description: "In, on, at, under, behind и другие предлоги места",
    icon: "🗺️",
  },
  {
    id: "prepositionsoftime",
    title: "Предлоги времени",
    level: "A1",
    steps: 10,
    description: "In, on, at для выражения времени",
    icon: "⏰",
  },
  {
    id: "presentcontinuous",
    title: "Present Continuous",
    level: "A1",
    steps: 10,
    description: "Настоящее длительное время для действий в момент речи",
    icon: "▶️",
  },
  {
    id: "presentcontinuousadvanced",
    title: "Present Continuous: Расширенное",
    level: "A1",
    steps: 10,
    description: "Дополнительные случаи использования Present Continuous",
    icon: "⏭️",
  },
  {
    id: "presentcomparison",
    title: "Present Simple vs Present Continuous",
    level: "A1",
    steps: 10,
    description: "Сравнение и выбор между двумя временами",
    icon: "⚖️",
  },
  {
    id: "pastsimplewas",
    title: "Past Simple: Was/Were",
    level: "A1",
    steps: 10,
    description: "Прошедшее время глагола to be",
    icon: "⏮️",
  },
  {
    id: "pastsimpleverbs",
    title: "Past Simple: Глаголы",
    level: "A1",
    steps: 10,
    description: "Правильные и неправильные глаголы в прошедшем времени",
    icon: "📚",
  },
  {
    id: "pastcontinuous",
    title: "Past Continuous",
    level: "A1",
    steps: 10,
    description: "Прошедшее длительное время",
    icon: "🔙",
  },
  {
    id: "pastvspast",
    title: "Past Continuous vs Past Simple",
    level: "A1",
    steps: 10,
    description: "Различия между прошедшими временами",
    icon: "🔀",
  },
  {
    id: "reviewtenses",
    title: "Повторение времён",
    level: "A1",
    steps: 10,
    description: "Обзор всех изученных времён",
    icon: "🔁",
  },
  {
    id: "testtenses",
    title: "Тест: Времена",
    level: "A1",
    steps: 10,
    description: "Проверочный тест по временам",
    icon: "✅",
  },
  {
    id: "futuresimple",
    title: "Future Simple и Going to",
    level: "A1",
    steps: 10,
    description: "Будущее время для предсказаний, решений и планов",
    icon: "🔮",
  },
  {
    id: "presentcontinuousfuture",
    title: "Present Continuous для будущего",
    level: "A1",
    steps: 10,
    description: "Использование Present Continuous для будущих договорённостей",
    icon: "📆",
  },
  {
    id: "futuresimpleoffers",
    title: "Future Simple: Предложения",
    level: "A1",
    steps: 10,
    description: "Will для предложений и желаний",
    icon: "🎁",
  },
  {
    id: "verbsinfinitive",
    title: "Глаголы с -ing или to",
    level: "A1",
    steps: 10,
    description: "Выбор формы после глаголов",
    icon: "🔤",
  },
  {
    id: "modals",
    title: "Модальные глаголы",
    level: "A1",
    steps: 10,
    description: "Must, have to, should, could",
    icon: "🎯",
  },
  {
    id: "modalsconsolidation",
    title: "Закрепление модальных",
    level: "A1",
    steps: 10,
    description: "Практика использования модальных глаголов",
    icon: "🎲",
  },
  {
    id: "testmodals",
    title: "ТЕСТ: Модальные глаголы",
    level: "A1",
    steps: 10,
    description: "Проверочный тест по модальным глаголам",
    icon: "✔️",
  },
  {
    id: "comparative",
    title: "Сравнительная степень",
    level: "A1",
    steps: 10,
    description: "Сравнение прилагательных: bigger, more interesting",
    icon: "📈",
  },
  {
    id: "superlative",
    title: "Превосходная степень",
    level: "A1",
    steps: 10,
    description: "Превосходная форма: the biggest, the most interesting",
    icon: "🏆",
  },
  {
    id: "family",
    title: "Семья и родственники",
    level: "A1",
    steps: 10,
    description: "Словарь семейных отношений и фразы",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: "chores",
    title: "Домашние дела",
    level: "A1",
    steps: 10,
    description: "Лексика домашних обязанностей",
    icon: "🧹",
  },
  {
    id: "quantifiers",
    title: "Квантификаторы",
    level: "A1",
    steps: 10,
    description: "Some, any, much, many, a few, a little",
    icon: "🔢",
  },
  {
    id: "presentperfect",
    title: "Present Perfect",
    level: "A1",
    steps: 10,
    description: "Настоящее совершённое время",
    icon: "✨",
  },
  {
    id: "firstconditional",
    title: "First Conditional",
    level: "A1",
    steps: 10,
    description: "Условные предложения первого типа",
    icon: "🌟",
  },
  {
    id: "presentperfectvscontinuous",
    title: "Present Perfect vs Continuous",
    level: "A1",
    steps: 10,
    description: "Сравнение Present Perfect и Present Perfect Continuous",
    icon: "🔄",
  },
  {
    id: "presentperfectvspast",
    title: "Present Perfect vs Past Simple",
    level: "A1",
    steps: 10,
    description: "Различия между Present Perfect и Past Simple",
    icon: "⏱️",
  },
  {
    id: "zeroconditional",
    title: "Zero Conditional",
    level: "A1",
    steps: 10,
    description: "Условные предложения нулевого типа",
    icon: "🌐",
  },
  {
    id: "timeanddates",
    title: "Time & Dates",
    level: "A1",
    steps: 10,
    description: "Время и даты на английском",
    icon: "📅",
  },
  {
    id: "questions",
    title: "Questions",
    level: "A1",
    steps: 10,
    description: "Вопросительные предложения",
    icon: "❓",
  },
  {
    id: "questiontags",
    title: "Question Tags",
    level: "A1",
    steps: 10,
    description: "Разделительные вопросы",
    icon: "🏷️",
  },
  {
    id: "foodanddrinks",
    title: "Food & Drinks",
    level: "A1",
    steps: 10,
    description: "Еда и напитки",
    icon: "🍔",
  },
  {
    id: "placesanddirections",
    title: "Places & Directions",
    level: "A1",
    steps: 10,
    description: "Места и направления",
    icon: "🗺️",
  },
  {
    id: "hobbiesandfreetime",
    title: "Hobbies & Free Time",
    level: "A1",
    steps: 10,
    description: "Хобби и свободное время",
    icon: "🎮",
  },
  {
    id: "passivevoice1",
    title: "Passive Voice 1",
    level: "A1",
    steps: 10,
    description: "Пассивный залог (основы)",
    icon: "🔄",
  },
  {
    id: "relativeclauses",
    title: "Relative Clauses",
    level: "A1",
    steps: 10,
    description: "Относительные придаточные предложения",
    icon: "🔗",
  },
  {
    id: "passivevoice2",
    title: "Passive Voice 2",
    level: "A1",
    steps: 10,
    description: "Пассивный залог (продвинутый)",
    icon: "🔄",
  },
  {
    id: "houseandhome",
    title: "House and Home",
    level: "A1",
    steps: 10,
    description: "Дом и жильё",
    icon: "🏠",
  },
  {
    id: "cityandshops",
    title: "City and Shops",
    level: "A1",
    steps: 10,
    description: "Город и магазины",
    icon: "🏙️",
  },
  {
    id: "sportsandmusic",
    title: "Sports, Music & Reading",
    level: "A1",
    steps: 10,
    description: "Спорт, музыка и чтение",
    icon: "⚽",
  },
  {
    id: "travelandtransport",
    title: "Travel & Transport",
    level: "A1",
    steps: 10,
    description: "Путешествия и транспорт",
    icon: "✈️",
  },
  {
    id: "relativeclausesdetailed",
    title: "Relative Clauses Detailed",
    level: "A1",
    steps: 10,
    description: "Детальное изучение относительных предложений",
    icon: "📝",
  },
  {
    id: "workandjobs",
    title: "Work and Jobs",
    level: "A1",
    steps: 10,
    description: "Работа и профессии",
    icon: "💼",
  },
  {
    id: "weatherandseasons",
    title: "Weather & Seasons",
    level: "A1",
    steps: 7,
    description: "Погода и времена года",
    icon: "☀️",
  },
  {
    id: "shoppingandmoney",
    title: "Shopping & Money",
    level: "A1",
    steps: 7,
    description: "Покупки и деньги",
    icon: "💰",
  },
  {
    id: "healthandbody",
    title: "Health & Body",
    level: "A1",
    steps: 7,
    description: "Здоровье и тело",
    icon: "🏥",
  },
  {
    id: "technologyandgadgets",
    title: "Technology & Gadgets",
    level: "A1",
    steps: 10,
    description: "Технологии и гаджеты",
    icon: "💻",
  },
  {
    id: "conjunctions",
    title: "Conjunctions",
    level: "A1",
    steps: 8,
    description: "Союзы: and, but, or, so, because",
    icon: "🔗",
  },
  {
    id: "experiences",
    title: "Experiences & Stories",
    level: "A1",
    steps: 8,
    description: "Опыт и истории",
    icon: "📖",
  },
  {
    id: "politicalvocabulary",
    title: "Political Vocabulary",
    level: "B1",
    steps: 8,
    description: "Политическая лексика: sovereignty, referendum, coalition, filibuster",
    icon: "🏛️",
  },
  {
    id: "legalenglish",
    title: "Legal English",
    level: "B1",
    steps: 8,
    description: "Юридический английский: контракты, суд, правовые термины",
    icon: "⚖️",
  },
  {
    id: "mediajournalism",
    title: "Media & Journalism",
    level: "B1",
    steps: 8,
    description: "Медиа и журналистика: spin, scoop, op-ed, editorial, soundbite",
    icon: "📰",
  },
];

export default function TopicsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const levels = ["all", "A1", "A2", "B1", "B2"];

  const filteredTopics = TOPICS.filter((topic) => {
    const matchesSearch = topic.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLevel =
      selectedLevel === "all" || topic.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(topicId);
    setCurrentStep(1);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTopic(null);
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    const topic = TOPICS.find((t) => t.id === selectedTopic);
    if (topic && currentStep < topic.steps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Функция для рендеринга нужного компонента урока
  const renderLessonContent = () => {
    if (!selectedTopic) return null;

    const props = { step: currentStep };

    switch (selectedTopic) {
      case "nouns":
        return <Nouns {...props} />;
      case "articles":
        return <Articles {...props} />;
      case "pronouns":
        return <Pronouns {...props} />;
      case "demonstrative":
        return <Demonstrative {...props} />;
      case "greetings":
        return <Greetings {...props} />;
      case "possessive":
        return <Possessive {...props} />;
      case "adverbs":
        return <Adverbs {...props} />;
      case "tobe":
        return <ToBe {...props} />;
      case "havegot":
        return <HaveGot {...props} />;
      case "personalinfo":
        return <PersonalInfo {...props} />;
      case "presentsimple":
        return <PresentSimple {...props} />;
      case "presentsimplehabits":
        return <PresentSimpleHabits {...props} />;
      case "imperatives":
        return <Imperatives {...props} />;
      case "canability":
        return <CanAbility {...props} />;
      case "thereisare":
        return <ThereIsAre {...props} />;
      case "prepositions":
        return <Prepositions {...props} />;
      case "prepositionsoftime":
        return <PrepositionsOfTime {...props} />;
      case "presentcontinuous":
        return <PresentContinuous {...props} />;
      case "presentcontinuousadvanced":
        return <PresentContinuousAdvanced {...props} />;
      case "presentcomparison":
        return <PresentComparison {...props} />;
      case "pastsimplewas":
        return <PastSimpleWas {...props} />;
      case "pastsimpleverbs":
        return <PastSimpleVerbs {...props} />;
      case "pastcontinuous":
        return <PastContinuous {...props} />;
      case "pastvspast":
        return <PastVsPast {...props} />;
      case "reviewtenses":
        return <ReviewTenses {...props} />;
      case "testtenses":
        return <TestTenses {...props} />;
      case "futuresimple":
        return <FutureSimple {...props} />;
      case "presentcontinuousfuture":
        return <PresentContinuousFuture {...props} />;
      case "futuresimpleoffers":
        return <FutureSimpleOffers {...props} />;
      case "verbsinfinitive":
        return <VerbsInfinitive {...props} />;
      case "modals":
        return <Modals {...props} />;
      case "modalsconsolidation":
        return <ModalsConsolidation {...props} />;
      case "testmodals":
        return <TestModals {...props} />;
      case "comparative":
        return <Comparative {...props} />;
      case "superlative":
        return <Superlative {...props} />;
      case "family":
        return <Family {...props} />;
      case "chores":
        return <Chores {...props} />;
      case "quantifiers":
        return <Quantifiers {...props} />;
      case "presentperfect":
        return <PresentPerfect {...props} />;
      case "firstconditional":
        return <FirstConditional {...props} />;
      case "presentperfectvscontinuous":
        return <PresentPerfectVsContinuous {...props} />;
      case "presentperfectvspast":
        return <PresentPerfectVsPast {...props} />;
      case "zeroconditional":
        return <ZeroConditional {...props} />;
      case "timeanddates":
        return <TimeAndDates {...props} />;
      case "questions":
        return <Questions {...props} />;
      case "questiontags":
        return <QuestionTags {...props} />;
      case "foodanddrinks":
        return <FoodAndDrinks {...props} />;
      case "placesanddirections":
        return <PlacesAndDirections {...props} />;
      case "hobbiesandfreetime":
        return <HobbiesAndFreeTime {...props} />;
      case "passivevoice1":
        return <PassiveVoice1 {...props} />;
      case "relativeclauses":
        return <RelativeClauses {...props} />;
      case "passivevoice2":
        return <PassiveVoice2 {...props} />;
      case "houseandhome":
        return <HouseAndHome {...props} />;
      case "cityandshops":
        return <CityAndShops {...props} />;
      case "sportsandmusic":
        return <SportsAndMusic {...props} />;
      case "travelandtransport":
        return <TravelAndTransport {...props} />;
      case "relativeclausesdetailed":
        return <RelativeClausesDetailed {...props} />;
      case "workandjobs":
        return <WorkAndJobs {...props} />;
      case "weatherandseasons":
        return <WeatherAndSeasons {...props} />;
      case "shoppingandmoney":
        return <ShoppingAndMoney {...props} />;
      case "healthandbody":
        return <HealthAndBody {...props} />;
      case "technologyandgadgets":
        return <TechnologyAndGadgets {...props} />;
      case "conjunctions":
        return <Conjunctions {...props} />;
      case "experiences":
        return <Experiences {...props} />;
      case "politicalvocabulary":
        return <PoliticalVocabulary {...props} />;
      case "legalenglish":
        return <LegalEnglish {...props} />;
      case "mediajournalism":
        return <MediaJournalism {...props} />;
      default:
        return <div className="text-center text-gray-500">Урок не найден</div>;
    }
  };

  const selectedTopicData = TOPICS.find((t) => t.id === selectedTopic);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Обучение по темам
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Выберите интересующую тему и начните обучение с любого шага. Гибкий
            подход для повторения и закрепления материала.
          </p>

          {/* Switch to blocks button */}
          <div className="mt-6">
            <button
              onClick={() => router.push("/blocks")}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-white px-5 py-2.5 text-sm font-medium text-indigo-700 hover:bg-indigo-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Учиться по блокам
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Поиск темы..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Level filter */}
          <div className="flex gap-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  selectedLevel === level
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-white text-gray-700 border border-zinc-300 hover:bg-gray-50"
                }`}
              >
                {level === "all" ? "Все" : level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-16">
        {filteredTopics.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Темы не найдены. Попробуйте изменить фильтры.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleTopicClick(topic.id)}
                className="group relative rounded-xl border border-zinc-200 bg-white p-5 text-left transition-all hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Level badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
                    {topic.level}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-3 text-3xl">{topic.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors mb-2">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {topic.description}
                </p>

                {/* Steps */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>{topic.steps} шагов</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="border-t border-zinc-200 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-semibold text-gray-900 mb-1">
                Целевое обучение
              </div>
              <div className="text-sm text-gray-600">
                Выбирайте только те темы, которые вам нужны прямо сейчас.
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <div className="text-2xl mb-2">🔄</div>
              <div className="font-semibold text-gray-900 mb-1">Повторение</div>
              <div className="text-sm text-gray-600">
                Освежите знания по конкретным темам без прохождения всего курса.
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-gray-900 mb-1">Прогресс</div>
              <div className="text-sm text-gray-600">
                Каждая тема состоит из нескольких шагов с постепенным
                усложнением.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Modal */}
      {selectedTopicData && (
        <TopicModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          topicId={selectedTopic!}
          topicTitle={selectedTopicData.title}
          step={currentStep}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          totalSteps={selectedTopicData.steps}
        >
          {renderLessonContent()}
        </TopicModal>
      )}
    </div>
  );
}
