import { notFound } from "next/navigation";
import Link from "next/link";
import StepSquares from "@/components/lesson/StepSquares";
import Sidebar from "@/components/lesson/Sidebar";
import CompletionButton from "@/components/course/CompletionButton";
import Nouns from "@/components/lesson/nouns/Nouns";
import Articles from "@/components/lesson/articles/Articles";
import { articlesTopic } from "@/content/a1/articles";
import Pronouns from "@/components/lesson/pronouns/Pronouns";
import Demonstrative from "@/components/lesson/demonstrative/Demonstrative";
import Greetings from "@/components/lesson/greetings/Greetings";
import Possessive from "@/components/lesson/possessive/Possessive";
import Adverbs from "@/components/lesson/adverbs/Adverbs";
import ToBe from "@/components/lesson/tobe/ToBe";
import HaveGot from "@/components/lesson/havegot/HaveGot";
import PersonalInfo from "@/components/lesson/personalinfo/PersonalInfo";
import PresentSimple from "@/components/lesson/presentsimple/PresentSimple";
import PresentSimpleHabits from "@/components/lesson/presentsimplehabits/PresentSimpleHabits";
import Imperatives from "@/components/lesson/imperatives/Imperatives";
import CanAbility from "@/components/lesson/canability/CanAbility";
import ThereIsAre from "@/components/lesson/thereisare/ThereIsAre";
import Prepositions from "@/components/lesson/prepositions/Prepositions";
import PrepositionsOfTime from "@/components/lesson/prepositionsoftime/PrepositionsOfTime";
import PresentContinuous from "@/components/lesson/presentcontinuous/PresentContinuous";
import PresentContinuousAdvanced from "@/components/lesson/presentcontinuousadvanced/PresentContinuousAdvanced";
import PresentComparison from "@/components/lesson/presentcomparison/PresentComparison";
import PastSimpleWas from "@/components/lesson/pastsimplewas/PastSimpleWas";
import PastSimpleVerbs from "@/components/lesson/pastsimpleverbs/PastSimpleVerbs";
import PastContinuous from "@/components/lesson/pastcontinuous/PastContinuous";
import PastVsPast from "@/components/lesson/pastvspast/PastVsPast";
import ReviewTenses from "@/components/lesson/reviewtenses/ReviewTenses";
import TestTenses from "@/components/lesson/testtenses/TestTenses";
import FutureSimple from "@/components/lesson/futuresimple/FutureSimple";
import PresentContinuousFuture from "@/components/lesson/presentcontinuousfuture/PresentContinuousFuture";
import FutureSimpleOffers from "@/components/lesson/futuresimpleoffers/FutureSimpleOffers";
import VerbsInfinitive from "@/components/lesson/verbsinfinitive/VerbsInfinitive";
import Modals from "@/components/lesson/modals/Modals";
import ModalsConsolidation from "@/components/lesson/modalsconsolidation/ModalsConsolidation";
import TestModals from "@/components/lesson/testmodals/TestModals";
import Comparative from "@/components/lesson/comparative/Comparative";
import Superlative from "@/components/lesson/superlative/Superlative";
import Family from "@/components/lesson/family/Family";
import Chores from "@/components/lesson/chores/Chores";
import Quantifiers from "@/components/lesson/quantifiers/Quantifiers";
import PresentPerfect from "@/components/lesson/presentperfect/PresentPerfect";
import FirstConditional from "@/components/lesson/firstconditional/FirstConditional";
import PresentPerfectVsContinuous from "@/components/lesson/presentperfectvscontinuous/PresentPerfectVsContinuous";
import PresentPerfectVsPast from "@/components/lesson/presentperfectvspast/PresentPerfectVsPast";
import ZeroConditional from "@/components/lesson/zeroconditional/ZeroConditional";
import TimeAndDates from "@/components/lesson/timeanddates/TimeAndDates";
import Questions from "@/components/lesson/questions/Questions";
import QuestionTags from "@/components/lesson/questiontags/QuestionTags";
import FoodAndDrinks from "@/components/lesson/foodanddrinks/FoodAndDrinks";
import PlacesAndDirections from "@/components/lesson/placesanddirections/PlacesAndDirections";
import HobbiesAndFreeTime from "@/components/lesson/hobbiesandfreetime/HobbiesAndFreeTime";
import PassiveVoice1 from "@/components/lesson/passivevoice1/PassiveVoice1";
import RelativeClauses from "@/components/lesson/relativeclauses/RelativeClauses";
import PassiveVoice2 from "@/components/lesson/passivevoice2/PassiveVoice2";
import HouseAndHome from "@/components/lesson/houseandhome/HouseAndHome";
import CityAndShops from "@/components/lesson/cityandshops/CityAndShops";
import SportsAndMusic from "@/components/lesson/sportsandmusic/SportsAndMusic";
import TravelAndTransport from "@/components/lesson/travelandtransport/TravelAndTransport";
import RelativeClausesDetailed from "@/components/lesson/relativeclausesdetailed/RelativeClausesDetailed";
import WorkAndJobs from "@/components/lesson/workandjobs/WorkAndJobs";
import WeatherAndSeasons from "@/components/lesson/weatherandseasons/WeatherAndSeasons";
import ShoppingAndMoney from "@/components/lesson/shoppingandmoney/ShoppingAndMoney";
import HealthAndBody from "@/components/lesson/healthandbody/HealthAndBody";
import TechnologyAndGadgets from "@/components/lesson/technologyandgadgets/TechnologyAndGadgets";
import Conjunctions from "@/components/lesson/conjunctions/Conjunctions";
import Experiences from "@/components/lesson/experiences/Experiences";
import Review1 from "@/components/lesson/review1/Review1";
import Review2 from "@/components/lesson/review2/Review2";
import FinalTest from "@/components/lesson/finaltest/FinalTest";
import { CourseStructuredData } from "@/components/seo/StructuredData";
import {
  generateDynamicLessonMetadata,
  getTopicSEO,
  a1StepCounts,
} from "@/lib/seo";

import type { Metadata } from "next";

type Props = { searchParams: Promise<{ t?: string; s?: string }> };

// Динамическая генерация metadata для каждой темы и шага
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { t = "nouns", s = "1" } = await searchParams;
  const step = Math.max(1, Number(s) || 1);

  // Получаем SEO данные темы из полной базы
  const topicSEO = getTopicSEO(t);
  const totalSteps = a1StepCounts[t] || 10;

  return generateDynamicLessonMetadata({
    title: topicSEO.title,
    description: topicSEO.description,
    level: "a1",
    topicId: t,
    step,
    totalSteps,
    keywords: topicSEO.keywords,
  });
}

export default async function Page({ searchParams }: Props) {
  const { t = "nouns", s = "1" } = await searchParams;
  const step = Math.max(1, Number(s) || 1);

  const topics = [
    "nouns",
    "articles",
    "pronouns",
    "demonstrative",
    "greetings",
    "possessive",
    "adverbs",
    "tobe",
    "havegot",
    "personalinfo",
    "presentsimple",
    "presentsimplehabits",
    "imperatives",
    "canability",
    "thereisare",
    "prepositions",
    "prepositionsoftime",
    "presentcontinuous",
    "presentcontinuousadvanced",
    "presentcomparison",
    "pastsimplewas",
    "pastsimpleverbs",
    "pastcontinuous",
    "pastvspast",
    "reviewtenses",
    "testtenses",
    "futuresimple",
    "presentcontinuousfuture",
    "futuresimpleoffers",
    "verbsinfinitive",
    "modals",
    "modalsconsolidation",
    "testmodals",
    "comparative",
    "superlative",
    "family",
    "chores",
    "quantifiers",
    "presentperfect",
    "firstconditional",
    "presentperfectvscontinuous",
    "presentperfectvspast",
    "zeroconditional",
    "timeanddates",
    "questions",
    "questiontags",
    "foodanddrinks",
    "placesanddirections",
    "hobbiesandfreetime",
    "passivevoice1",
    "relativeclauses",
    "passivevoice2",
    "houseandhome",
    "cityandshops",
    "sportsandmusic",
    "travelandtransport",
    "relativeclausesdetailed",
    "workandjobs",
    "weatherandseasons",
    "shoppingandmoney",
    "healthandbody",
    "technologyandgadgets",
    "conjunctions",
    "experiences",
    "review1",
    "review2",
    "finaltest",
  ];
  if (!topics.includes(t)) notFound();

  const topicTitles: Record<string, string> = {
    nouns: "Существительные",
    articles: "Артикли",
    pronouns: "Местоимения",
    demonstrative: "Указательные местоимения",
    greetings: "Приветствие и знакомство",
    possessive: "Притяжательный падеж",
    adverbs: "Наречия",
    tobe: "Глагол to be",
    havegot: "Have/Has Got",
    personalinfo: "Личная информация",
    presentsimple: "Present Simple: Структура",
    presentsimplehabits: "Present Simple: Привычки",
    imperatives: "Повелительное наклонение",
    canability: "Can/Can't: Способности",
    thereisare: "There is/There are: Существование",
    prepositions: "Предлоги места",
    prepositionsoftime: "Предлоги времени",
    presentcontinuous: "Present Continuous: Действие сейчас",
    presentcontinuousadvanced: "Present Continuous: Расширенное",
    presentcomparison: "Сравнение Present Simple и Present Continuous",
    pastsimplewas: "Past Simple: Was/Were",
    pastsimpleverbs: "Past Simple: Правильные и неправильные глаголы",
    pastcontinuous: "Past Continuous: Формирование и базовое использование",
    pastvspast: "Past Continuous vs Past Simple: Основы и различия",
    reviewtenses: "Повторение времён: Past & Present",
    testtenses: "Тест: Времена",
    futuresimple: "Future Simple и Going to: Предсказания, решения и планы",
    presentcontinuousfuture: "Present Continuous для будущих договорённостей",
    futuresimpleoffers: "Future Simple для предложений и желаний",
    verbsinfinitive: "Глаголы с -ing или инфинитивом с to",
    modals: "Модальные глаголы: Must / Have to / Should / Could",
    modalsconsolidation: "Закрепление модальных глаголов",
    testmodals: "ТЕСТ по модальным глаголам",
    comparative: "Сравнительная степень прилагательных",
    superlative: "Превосходная степень прилагательных",
    family: "Семья и родственные отношения",
    chores: "Домашние дела и привычки",
    quantifiers: "Квантификаторы: some/any, much/many, a few/a little",
    presentperfect: "Present Perfect: Настоящее совершённое время",
    firstconditional: "First Conditional: Условные предложения 1-го типа",
    presentperfectvscontinuous: "Present Perfect vs Present Continuous",
    presentperfectvspast: "Present Perfect vs Past Simple",
    zeroconditional: "Zero Conditional: Условные предложения нулевого типа",
    timeanddates: "Time and Dates: Время, числа и даты",
    questions: "Questions: Порядок слов и вопросительные слова",
    questiontags: "Question Tags: Разделительные вопросы",
    foodanddrinks: "Food and Drinks: Еда и напитки",
    placesanddirections: "Places and Directions: Места и направления",
    hobbiesandfreetime: "Hobbies and Free Time: Хобби и свободное время",
    passivevoice1: "Passive Voice 1: Пассивный залог (Present & Past Simple)",
    relativeclauses:
      "Relative Clauses: Относительные придаточные (who, which, that)",
    passivevoice2: "Passive Voice 2: Все времена пассивного залога",
    houseandhome: "House and Home: Rooms, Furniture — Дом и мебель",
    cityandshops: "City and Shops: Places, Directions — Город и магазины",
    sportsandmusic: "Sports, Music and Reading — Спорт, музыка и чтение",
    travelandtransport:
      "Travel and Transport: Bus, Train, Holiday — Путешествия и транспорт",
    relativeclausesdetailed:
      "Relative Clauses: Who, Which, Where — Относительные придаточные",
    workandjobs:
      "Work and Jobs: Office, Teacher, Student, Science — Работа и профессии",
    weatherandseasons:
      "Weather and Seasons: Sunny, Rain, Summer — Погода и времена года",
    shoppingandmoney:
      "Shopping and Money: Buy, Price, Clothes — Покупки и деньги",
    healthandbody:
      "Health and Body: Doctor, Headache, Exercise — Здоровье и тело",
    technologyandgadgets:
      "Technology and Gadgets: Phone, Computer, Internet — Технологии и гаджеты",
    conjunctions: "Conjunctions: and, but, or, so, because — Союзы",
    experiences:
      "Experiences and Stories: past events, future plans — Опыты и истории",
    review1: "Review 1: Grammar & Vocabulary — Повторение 1",
    review2: "Review 2: Advanced Practice — Повторение 2",
    finaltest: "Final Test: 100 Questions — Финальный тест",
  };

  let Content: React.JSX.Element;
  switch (t) {
    case "nouns":
      Content = <Nouns step={step} key={`nouns-${step}`} />;
      break;
    case "articles":
      Content = <Articles step={step} key={`articles-${step}`} />;
      break;
    case "pronouns":
      Content = <Pronouns step={step} key={`pronouns-${step}`} />;
      break;
    case "demonstrative":
      Content = <Demonstrative step={step} key={`demo-${step}`} />;
      break;
    case "greetings":
      Content = <Greetings step={step} key={`gr-${step}`} />;
      break;
    case "possessive":
      Content = <Possessive step={step} key={`poss-${step}`} />;
      break;
    case "adverbs":
      Content = <Adverbs step={step} key={`adverbs-${step}`} />;
      break;
    case "tobe":
      Content = <ToBe step={step} key={`tobe-${step}`} />;
      break;
    case "havegot":
      Content = <HaveGot step={step} key={`havegot-${step}`} />;
      break;
    case "personalinfo":
      Content = <PersonalInfo step={step} key={`personalinfo-${step}`} />;
      break;
    case "presentsimple":
      Content = <PresentSimple step={step} key={`presentsimple-${step}`} />;
      break;
    case "presentsimplehabits":
      Content = (
        <PresentSimpleHabits step={step} key={`presentsimplehabits-${step}`} />
      );
      break;
    case "imperatives":
      Content = <Imperatives step={step} key={`imperatives-${step}`} />;
      break;
    case "canability":
      Content = <CanAbility step={step} key={`canability-${step}`} />;
      break;
    case "thereisare":
      Content = <ThereIsAre step={step} key={`thereisare-${step}`} />;
      break;
    case "prepositions":
      Content = <Prepositions step={step} key={`prepositions-${step}`} />;
      break;
    case "prepositionsoftime":
      Content = (
        <PrepositionsOfTime step={step} key={`prepositionsoftime-${step}`} />
      );
      break;
    case "presentcontinuous":
      Content = (
        <PresentContinuous step={step} key={`presentcontinuous-${step}`} />
      );
      break;
    case "presentcontinuousadvanced":
      Content = (
        <PresentContinuousAdvanced
          step={step}
          key={`presentcontinuousadvanced-${step}`}
        />
      );
      break;
    case "presentcomparison":
      Content = (
        <PresentComparison step={step} key={`presentcomparison-${step}`} />
      );
      break;
    case "pastsimplewas":
      Content = <PastSimpleWas step={step} key={`pastsimplewas-${step}`} />;
      break;
    case "pastsimpleverbs":
      Content = <PastSimpleVerbs step={step} key={`pastsimpleverbs-${step}`} />;
      break;
    case "pastcontinuous":
      Content = <PastContinuous step={step} key={`pastcontinuous-${step}`} />;
      break;
    case "pastvspast":
      Content = <PastVsPast step={step} key={`pastvspast-${step}`} />;
      break;
    case "reviewtenses":
      Content = <ReviewTenses step={step} key={`reviewtenses-${step}`} />;
      break;
    case "testtenses":
      Content = <TestTenses step={step} key={`testtenses-${step}`} />;
      break;
    case "futuresimple":
      Content = <FutureSimple step={step} key={`futuresimple-${step}`} />;
      break;
    case "presentcontinuousfuture":
      Content = (
        <PresentContinuousFuture
          step={step}
          key={`presentcontinuousfuture-${step}`}
        />
      );
      break;
    case "futuresimpleoffers":
      Content = (
        <FutureSimpleOffers step={step} key={`futuresimpleoffers-${step}`} />
      );
      break;
    case "verbsinfinitive":
      Content = <VerbsInfinitive step={step} key={`verbsinfinitive-${step}`} />;
      break;
    case "modals":
      Content = <Modals step={step} key={`modals-${step}`} />;
      break;
    case "modalsconsolidation":
      Content = (
        <ModalsConsolidation step={step} key={`modalsconsolidation-${step}`} />
      );
      break;
    case "testmodals":
      Content = <TestModals step={step} key={`testmodals-${step}`} />;
      break;
    case "comparative":
      Content = <Comparative step={step} key={`comparative-${step}`} />;
      break;
    case "superlative":
      Content = <Superlative step={step} key={`superlative-${step}`} />;
      break;
    case "family":
      Content = <Family step={step} key={`family-${step}`} />;
      break;
    case "chores":
      Content = <Chores step={step} key={`chores-${step}`} />;
      break;
    case "quantifiers":
      Content = <Quantifiers step={step} key={`quantifiers-${step}`} />;
      break;
    case "presentperfect":
      Content = <PresentPerfect step={step} key={`presentperfect-${step}`} />;
      break;
    case "firstconditional":
      Content = (
        <FirstConditional step={step} key={`firstconditional-${step}`} />
      );
      break;
    case "presentperfectvscontinuous":
      Content = (
        <PresentPerfectVsContinuous
          step={step}
          key={`presentperfectvscontinuous-${step}`}
        />
      );
      break;
    case "presentperfectvspast":
      Content = (
        <PresentPerfectVsPast
          step={step}
          key={`presentperfectvspast-${step}`}
        />
      );
      break;
    case "zeroconditional":
      Content = <ZeroConditional step={step} key={`zeroconditional-${step}`} />;
      break;
    case "timeanddates":
      Content = <TimeAndDates step={step} key={`timeanddates-${step}`} />;
      break;
    case "questions":
      Content = <Questions step={step} key={`questions-${step}`} />;
      break;
    case "questiontags":
      Content = <QuestionTags step={step} key={`questiontags-${step}`} />;
      break;
    case "foodanddrinks":
      Content = <FoodAndDrinks step={step} key={`foodanddrinks-${step}`} />;
      break;
    case "placesanddirections":
      Content = (
        <PlacesAndDirections step={step} key={`placesanddirections-${step}`} />
      );
      break;
    case "hobbiesandfreetime":
      Content = (
        <HobbiesAndFreeTime step={step} key={`hobbiesandfreetime-${step}`} />
      );
      break;
    case "passivevoice1":
      Content = <PassiveVoice1 step={step} key={`passivevoice1-${step}`} />;
      break;
    case "relativeclauses":
      Content = <RelativeClauses step={step} key={`relativeclauses-${step}`} />;
      break;
    case "passivevoice2":
      Content = <PassiveVoice2 step={step} key={`passivevoice2-${step}`} />;
      break;
    case "houseandhome":
      Content = <HouseAndHome step={step} key={`houseandhome-${step}`} />;
      break;
    case "cityandshops":
      Content = <CityAndShops step={step} key={`cityandshops-${step}`} />;
      break;
    case "sportsandmusic":
      Content = <SportsAndMusic step={step} key={`sportsandmusic-${step}`} />;
      break;
    case "travelandtransport":
      Content = (
        <TravelAndTransport step={step} key={`travelandtransport-${step}`} />
      );
      break;
    case "relativeclausesdetailed":
      Content = (
        <RelativeClausesDetailed
          step={step}
          key={`relativeclausesdetailed-${step}`}
        />
      );
      break;
    case "workandjobs":
      Content = <WorkAndJobs step={step} key={`workandjobs-${step}`} />;
      break;
    case "weatherandseasons":
      Content = (
        <WeatherAndSeasons step={step} key={`weatherandseasons-${step}`} />
      );
      break;
    case "shoppingandmoney":
      Content = (
        <ShoppingAndMoney step={step} key={`shoppingandmoney-${step}`} />
      );
      break;
    case "healthandbody":
      Content = <HealthAndBody step={step} key={`healthandbody-${step}`} />;
      break;
    case "technologyandgadgets":
      Content = (
        <TechnologyAndGadgets
          step={step}
          key={`technologyandgadgets-${step}`}
        />
      );
      break;
    case "conjunctions":
      Content = <Conjunctions step={step} key={`conjunctions-${step}`} />;
      break;
    case "experiences":
      Content = <Experiences step={step} key={`experiences-${step}`} />;
      break;
    case "review1":
      Content = <Review1 step={step} key={`review1-${step}`} />;
      break;
    case "review2":
      Content = <Review2 step={step} key={`review2-${step}`} />;
      break;
    case "finaltest":
      Content = <FinalTest step={step} key={`finaltest-${step}`} />;
      break;
    default:
      Content = <Nouns step={step} key={`nouns-${step}`} />;
  }

  // Different topics have different number of steps
  const stepCounts: Record<string, number> = {
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

  const totalSteps = stepCounts[t] || 10;

  // Create serializable step array for StepSquares
  const steps = Array.from({ length: Math.max(1, totalSteps) }, (_, i) => ({
    n: i + 1,
    href: `/blocks/a1?t=${t}&s=${i + 1}`,
  }));

  return (
    <>
      <CourseStructuredData
        level="A1"
        name="Elementary English"
        description="Полный курс английского языка уровня A1 Elementary: грамматика, лексика, упражнения. Изучите основы английского языка от нуля до уровня A1. 71 интерактивная тема с практическими заданиями."
      />
      <div className="min-h-screen bg-white">
        <Sidebar activeTopic={t} level="a1" />
        <main className="p-4 md:p-6 pt-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Тема урока: <span className="text-indigo-600">{topicTitles[t]}</span>
        </h1>

        <div className="mb-8">
          <StepSquares steps={steps} active={step} />
        </div>

        {Content}

        <div className="mt-12 flex items-center justify-between pt-8 border-t">
          {step > 1 ? (
            <Link
              href={`/blocks/a1?t=${t}&s=${step - 1}`}
              className="px-6 py-2 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition"
            >
              ← Назад
            </Link>
          ) : (
            <div />
          )}
          <div className="text-sm text-zinc-500">
            Шаг {step} / {totalSteps}
          </div>
          {step < totalSteps ? (
            <Link
              href={`/blocks/a1?t=${t}&s=${step + 1}`}
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Далее →
            </Link>
          ) : (
            <CompletionButton
              currentTopic={t}
              isLastTopic={step === totalSteps}
              level="a1"
            />
          )}
        </div>
      </main>
    </div>
    </>
  );
}
