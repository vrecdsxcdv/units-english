import { notFound } from "next/navigation";
import Link from "next/link";
import StepSquares from "@/components/lesson/StepSquares";
import Sidebar from "@/components/lesson/Sidebar";
import CompletionButton from "@/components/course/CompletionButton";
import PresentPerfectContinuous from "@/components/lesson/presentperfectcontinuous/PresentPerfectContinuous";
import PastPerfect from "@/components/lesson/pastperfect/PastPerfect";
import PastPerfectComparison from "@/components/lesson/pastperfectcomparison/PastPerfectComparison";
import MixedTenses1 from "@/components/lesson/mixedtenses1/MixedTenses1";
import MixedTenses2 from "@/components/lesson/mixedtenses2/MixedTenses2";
import FutureForms from "@/components/lesson/futureforms/FutureForms";
import UsedToWould from "@/components/lesson/usedtowould/UsedToWould";
import Conditionals from "@/components/lesson/conditionals/Conditionals";
import Conditional2 from "@/components/lesson/conditional2/Conditional2";
import Conditional3 from "@/components/lesson/conditional3/Conditional3";
import MixedConditionals from "@/components/lesson/mixedconditionals/MixedConditionals";
import AllConditionals from "@/components/lesson/allconditionals/AllConditionals";
import ModalsDeduction from "@/components/lesson/modalsdeduction/ModalsDeduction";
import ModalsObligationPermission from "@/components/lesson/modalsobligationpermission/ModalsObligationPermission";
import PassiveVoice from "@/components/lesson/passivevoice/PassiveVoice";
import Causative from "@/components/lesson/causative/Causative";
import ReportedStatements from "@/components/lesson/reportedstatements/ReportedStatements";
import ReportedQuestions from "@/components/lesson/reportedquestions/ReportedQuestions";
import ReportedCommands from "@/components/lesson/reportedcommands/ReportedCommands";
import ReportingVerbs from "@/components/lesson/reportingverbs/ReportingVerbs";
import PresentParticiple from "@/components/lesson/presentparticiple/PresentParticiple";
import PastParticiple from "@/components/lesson/pastparticiple/PastParticiple";
import ParticipleClauses from "@/components/lesson/participleclauses/ParticipleClauses";
import WishIfOnly from "@/components/lesson/wishifonly/WishIfOnly";
import GerundsInfinitives from "@/components/lesson/gerundsinfinitives/GerundsInfinitives";
import ArticlesAdvanced from "@/components/lesson/articlesadvanced/ArticlesAdvanced";
import AdjectivesAsNouns from "@/components/lesson/adjectivesasnouns/AdjectivesAsNouns";
import AdverbsPosition from "@/components/lesson/adverbsposition/AdverbsPosition";
import QuestionTags from "@/components/lesson/questiontags/QuestionTags";
import Quantifiers2 from "@/components/lesson/quantifiers2/Quantifiers2";
import ComparativesModifiers from "@/components/lesson/comparativesmodifiers/ComparativesModifiers";
import SoSuch from "@/components/lesson/sosuch/SoSuch";
import PreferWouldRather from "@/components/lesson/preferwouldrather/PreferWouldRather";
import Ellipsis from "@/components/lesson/ellipsis/Ellipsis";
import Inversion from "@/components/lesson/inversion/Inversion";
import PersonalityAdjectives from "@/components/lesson/personalityadjectives/PersonalityAdjectives";
import RelationshipsPhrasalVerbs from "@/components/lesson/relationshipsphrasalverbs/RelationshipsPhrasalVerbs";
import WorkBusiness from "@/components/lesson/workbusiness/WorkBusiness";
import EducationLearning from "@/components/lesson/educationlearning/EducationLearning";
import MoneyFinance from "@/components/lesson/moneyfinance/MoneyFinance";
import HealthLifestyle from "@/components/lesson/healthlifestyle/HealthLifestyle";
import EnvironmentNature from "@/components/lesson/environmentnature/EnvironmentNature";
import CrimeLaw from "@/components/lesson/crimelaw/CrimeLaw";
import MediaNews from "@/components/lesson/medianews/MediaNews";
import TechnologyScience from "@/components/lesson/technologyscience/TechnologyScience";
import TravelTourism from "@/components/lesson/traveltourism/TravelTourism";
import SocietyCulture from "@/components/lesson/societyculture/SocietyCulture";
import FoodCooking from "@/components/lesson/foodcooking/FoodCooking";
import FashionAppearance from "@/components/lesson/fashionappearance/FashionAppearance";
import HouseLiving from "@/components/lesson/houseliving/HouseLiving";
import TransportTraffic from "@/components/lesson/transporttraffic/TransportTraffic";
import Entertainment from "@/components/lesson/entertainment/Entertainment";
import SportCompetition from "@/components/lesson/sportcompetition/SportCompetition";
import Emotions from "@/components/lesson/emotions/Emotions";
import PhrasalVerbs from "@/components/lesson/phrasalverbs/PhrasalVerbs";
import Collocations from "@/components/lesson/collocations/Collocations";
import Idioms from "@/components/lesson/idioms/Idioms";
import WordFormation from "@/components/lesson/wordformation/WordFormation";
import SynonymsAntonyms from "@/components/lesson/synonymsantonyms/SynonymsAntonyms";
import GivingOpinions from "@/components/lesson/givingopinions/GivingOpinions";
import WritingEmails from "@/components/lesson/writingemails/WritingEmails";
import DescribingGraphs from "@/components/lesson/describinggraphs/DescribingGraphs";
import JobInterviews from "@/components/lesson/jobinterviews/JobInterviews";
import { CourseStructuredData } from "@/components/seo/StructuredData";
import {
  generateDynamicLessonMetadata,
  getTopicSEO,
  b1StepCounts,
} from "@/lib/seo";

import type { Metadata } from "next";

type Props = { searchParams: Promise<{ t?: string; s?: string }> };

// Динамическая генерация metadata для каждой темы и шага
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { t = "presentperfectcontinuous", s = "1" } = await searchParams;
  const step = Math.max(1, Number(s) || 1);

  // Получаем SEO данные темы из полной базы
  const topicSEO = getTopicSEO(t);
  const totalSteps = b1StepCounts[t] || 10;

  return generateDynamicLessonMetadata({
    title: topicSEO.title,
    description: topicSEO.description,
    level: "b1",
    topicId: t,
    step,
    totalSteps,
    keywords: topicSEO.keywords,
  });
}

export default async function Page({ searchParams }: Props) {
  const { t = "presentperfectcontinuous", s = "1" } = await searchParams;
  const step = Math.max(1, Number(s) || 1);

  // TODO: Add B1 topics here
  const topics = [
    "presentperfectcontinuous",
    "pastperfect",
    "pastperfectcomparison",
    "mixedtenses1",
    "mixedtenses2",
    "futureforms",
    "usedtowould",
    "conditionals",
    "conditional2",
    "conditional3",
    "mixedconditionals",
    "allconditionals",
    "modalsdeduction",
    "modalsobligationpermission",
    "passivevoice",
    "causative",
    "reportedstatements",
    "reportedquestions",
    "reportedcommands",
    "reportingverbs",
    "presentparticiple",
    "pastparticiple",
    "participleclauses",
    "wishifonly",
    "gerundsinfinitives",
    "articlesadvanced",
    "adjectivesasnouns",
    "adverbsposition",
    "questiontags",
    "quantifiers",
    "comparativesmodifiers",
    "sosuch",
    "preferwouldrather",
    "ellipsis",
    "inversion",
    "personalityadjectives",
    "relationshipsphrasalverbs",
    "workbusiness",
    "educationlearning",
    "moneyfinance",
    "healthlifestyle",
    "environmentnature",
    "crimelaw",
    "medianews",
    "technologyscience",
    "traveltourism",
    "societyculture",
    "foodcooking",
    "fashionappearance",
    "houseliving",
    "transporttraffic",
    "entertainment",
    "sportcompetition",
    "emotions",
    "phrasalverbs",
    "collocations",
    "idioms",
    "wordformation",
    "synonymsantonyms",
    "givingopinions",
    "writingemails",
    "describinggraphs",
    "jobinterviews",
  ];

  if (!topics.includes(t)) notFound();

  const topicTitles: Record<string, string> = {
    presentperfectcontinuous:
      "Present Perfect Continuous — Длительность с результатом",
    pastperfect: "Past Perfect — Предпрошедшее время",
    pastperfectcomparison: "Past Perfect vs Past Perfect Continuous — Сравнение",
    mixedtenses1: "Смешанные времена: Повторение 1",
    mixedtenses2: "Смешанные времена: Повторение 2",
    futureforms: "Все формы будущего времени",
    usedtowould: "Used to / Would — Привычки в прошлом",
    conditionals: "Conditionals 0 & 1 — Реальные условия",
    conditional2: "Second Conditional — Нереальное настоящее",
    conditional3: "Third Conditional — Нереальное прошлое",
    mixedconditionals: "Mixed Conditionals — Смешанные условия",
    allconditionals: "All Conditionals — Полное повторение всех типов",
    modalsdeduction: "Modals of Deduction — Предположения (must, can't, might)",
    modalsobligationpermission:
      "Modals of Obligation & Permission — Обязанность и разрешение",
    passivevoice: "Passive Voice — Страдательный залог (все времена)",
    causative: "Causative: have/get sth done, get sb to do",
    reportedstatements: "Reported Speech 1: Statements (Утверждения)",
    reportedquestions: "Reported Speech 2: Questions (Вопросы)",
    reportedcommands: "Reported Speech 3: Commands (Команды)",
    reportingverbs: "Reporting Verbs (suggest, advise, promise, warn)",
    presentparticiple: "Present Participle Clauses (-ing причастия)",
    pastparticiple: "Past Participle Clauses (-ed/V3 причастия)",
    participleclauses: "Participle Clauses — Сравнение и комбинации",
    wishifonly: "Wish / If Only — Желания и сожаления",
    gerundsinfinitives: "Gerunds & Infinitives — Продвинутые паттерны",
    articlesadvanced: "Articles — Продвинутое использование",
    adjectivesasnouns: "Adjectives as Nouns — THE Rich, THE Poor",
    adverbsposition: "Adverbs: Position & Advanced Types",
    questiontags: "Question Tags: Advanced — Разделительные вопросы",
    quantifiers: "Quantifiers: plenty of, loads of, heaps of",
    comparativesmodifiers: "Comparatives & Superlatives: Modifiers",
    sosuch: "So / Such / Too / Enough",
    preferwouldrather: "Prefer / Would Rather / Had Better",
    ellipsis: "Ellipsis & Substitution — Avoiding Repetition",
    inversion: "Inversion — Never have I..., No sooner...",
    personalityadjectives: "Personality Adjectives — Describing Character",
    relationshipsphrasalverbs: "Relationships: Phrasal Verbs",
    workbusiness: "Work & Business Vocabulary",
    educationlearning: "Education & Learning Vocabulary",
    moneyfinance: "Money & Finance Vocabulary",
    healthlifestyle: "Health & Lifestyle Vocabulary",
    environmentnature: "Environment & Nature — 250 Words",
    crimelaw: "Crime & Law — 100 Words",
    medianews: "Media & News — 150 Words",
    technologyscience: "Technology & Science — 200+ Words",
    traveltourism: "Travel & Tourism — 150+ Words",
    societyculture: "Society & Culture — 150+ Words",
    foodcooking: "Food & Cooking — 150+ Words",
    fashionappearance: "Fashion & Appearance — 150+ Words",
    houseliving: "House & Living — 150+ Words",
    transporttraffic: "Transport & Traffic — 70 Words",
    entertainment: "Entertainment — 120+ Words",
    sportcompetition: "Sport & Competition — 120+ Words",
    emotions: "Emotions & Reactions — 100+ Words",
    phrasalverbs: "Phrasal Verbs — 20 Most Common",
    collocations: "Collocations — Verb + Noun",
    idioms: "Idioms & Expressions — 30+ Phrases",
    wordformation: "Word Formation — Suffixes",
    synonymsantonyms: "Synonyms & Antonyms — Nuances",
    givingopinions: "Giving Opinions & Agreeing/Disagreeing",
    writingemails: "Writing Formal & Informal Emails",
    describinggraphs: "Describing Graphs & Trends",
    jobinterviews: "Job Interviews: Questions & Answers",
  };

  // Placeholder content component
  const PlaceholderContent = () => (
    <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border border-indigo-100">
      <div className="text-center space-y-4">
        <div className="text-6xl">📚</div>
        <h2 className="text-2xl font-bold text-gray-800">Тема в разработке</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Эта тема находится в процессе разработки. Скоро здесь появится
          структурированный контент с теорией, примерами и упражнениями.
        </p>
        <div className="pt-4">
          <Link
            href="/blocks"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            ← Вернуться к выбору уровня
          </Link>
        </div>
      </div>
    </div>
  );

  let Content: React.JSX.Element;
  switch (t) {
    case "presentperfectcontinuous":
      Content = (
        <PresentPerfectContinuous
          step={step}
          key={`presentperfectcontinuous-${step}`}
        />
      );
      break;
    case "pastperfect":
      Content = <PastPerfect step={step} key={`pastperfect-${step}`} />;
      break;
    case "pastperfectcomparison":
      Content = <PastPerfectComparison step={step} key={`pastperfectcomparison-${step}`} />;
      break;
    case "mixedtenses1":
      Content = <MixedTenses1 step={step} key={`mixedtenses1-${step}`} />;
      break;
    case "mixedtenses2":
      Content = <MixedTenses2 step={step} key={`mixedtenses2-${step}`} />;
      break;
    case "futureforms":
      Content = <FutureForms step={step} key={`futureforms-${step}`} />;
      break;
    case "usedtowould":
      Content = <UsedToWould step={step} key={`usedtowould-${step}`} />;
      break;
    case "conditionals":
      Content = <Conditionals step={step} key={`conditionals-${step}`} />;
      break;
    case "conditional2":
      Content = <Conditional2 step={step} key={`conditional2-${step}`} />;
      break;
    case "conditional3":
      Content = <Conditional3 step={step} key={`conditional3-${step}`} />;
      break;
    case "mixedconditionals":
      Content = (
        <MixedConditionals step={step} key={`mixedconditionals-${step}`} />
      );
      break;
    case "allconditionals":
      Content = <AllConditionals step={step} key={`allconditionals-${step}`} />;
      break;
    case "modalsdeduction":
      Content = <ModalsDeduction step={step} key={`modalsdeduction-${step}`} />;
      break;
    case "modalsobligationpermission":
      Content = (
        <ModalsObligationPermission
          step={step}
          key={`modalsobligationpermission-${step}`}
        />
      );
      break;
    case "passivevoice":
      Content = <PassiveVoice step={step} key={`passivevoice-${step}`} />;
      break;
    case "causative":
      Content = <Causative step={step} key={`causative-${step}`} />;
      break;
    case "reportedstatements":
      Content = (
        <ReportedStatements step={step} key={`reportedstatements-${step}`} />
      );
      break;
    case "reportedquestions":
      Content = (
        <ReportedQuestions step={step} key={`reportedquestions-${step}`} />
      );
      break;
    case "reportedcommands":
      Content = (
        <ReportedCommands step={step} key={`reportedcommands-${step}`} />
      );
      break;
    case "reportingverbs":
      Content = <ReportingVerbs step={step} key={`reportingverbs-${step}`} />;
      break;
    case "presentparticiple":
      Content = (
        <PresentParticiple step={step} key={`presentparticiple-${step}`} />
      );
      break;
    case "pastparticiple":
      Content = <PastParticiple step={step} key={`pastparticiple-${step}`} />;
      break;
    case "participleclauses":
      Content = (
        <ParticipleClauses step={step} key={`participleclauses-${step}`} />
      );
      break;
    case "wishifonly":
      Content = <WishIfOnly step={step} key={`wishifonly-${step}`} />;
      break;
    case "gerundsinfinitives":
      Content = (
        <GerundsInfinitives step={step} key={`gerundsinfinitives-${step}`} />
      );
      break;
    case "articlesadvanced":
      Content = (
        <ArticlesAdvanced step={step} key={`articlesadvanced-${step}`} />
      );
      break;
    case "adjectivesasnouns":
      Content = (
        <AdjectivesAsNouns step={step} key={`adjectivesasnouns-${step}`} />
      );
      break;
    case "adverbsposition":
      Content = <AdverbsPosition step={step} key={`adverbsposition-${step}`} />;
      break;
    case "questiontags":
      Content = <QuestionTags step={step} key={`questiontags-${step}`} />;
      break;
    case "quantifiers":
      Content = <Quantifiers2 step={step} key={`quantifiers-${step}`} />;
      break;
    case "comparativesmodifiers":
      Content = (
        <ComparativesModifiers
          step={step}
          key={`comparativesmodifiers-${step}`}
        />
      );
      break;
    case "sosuch":
      Content = <SoSuch step={step} key={`sosuch-${step}`} />;
      break;
    case "preferwouldrather":
      Content = (
        <PreferWouldRather step={step} key={`preferwouldrather-${step}`} />
      );
      break;
    case "ellipsis":
      Content = <Ellipsis step={step} key={`ellipsis-${step}`} />;
      break;
    case "inversion":
      Content = <Inversion step={step} key={`inversion-${step}`} />;
      break;
    case "personalityadjectives":
      Content = (
        <PersonalityAdjectives
          step={step}
          key={`personalityadjectives-${step}`}
        />
      );
      break;
    case "relationshipsphrasalverbs":
      Content = (
        <RelationshipsPhrasalVerbs
          step={step}
          key={`relationshipsphrasalverbs-${step}`}
        />
      );
      break;
    case "workbusiness":
      Content = <WorkBusiness step={step} key={`workbusiness-${step}`} />;
      break;
    case "educationlearning":
      Content = (
        <EducationLearning step={step} key={`educationlearning-${step}`} />
      );
      break;
    case "moneyfinance":
      Content = <MoneyFinance step={step} key={`moneyfinance-${step}`} />;
      break;
    case "healthlifestyle":
      Content = <HealthLifestyle step={step} key={`healthlifestyle-${step}`} />;
      break;
    case "environmentnature":
      Content = (
        <EnvironmentNature step={step} key={`environmentnature-${step}`} />
      );
      break;
    case "crimelaw":
      Content = <CrimeLaw step={step} key={`crimelaw-${step}`} />;
      break;
    case "medianews":
      Content = <MediaNews step={step} key={`medianews-${step}`} />;
      break;
    case "technologyscience":
      Content = (
        <TechnologyScience step={step} key={`technologyscience-${step}`} />
      );
      break;
    case "traveltourism":
      Content = <TravelTourism step={step} key={`traveltourism-${step}`} />;
      break;
    case "societyculture":
      Content = (
        <SocietyCulture
          step={step}
          key={`societyculture-${step}`}
          lessonKey="societyculture"
        />
      );
      break;
    case "foodcooking":
      Content = (
        <FoodCooking
          step={step}
          key={`foodcooking-${step}`}
          lessonKey="foodcooking"
        />
      );
      break;
    case "fashionappearance":
      Content = (
        <FashionAppearance
          step={step}
          key={`fashionappearance-${step}`}
          lessonKey="fashionappearance"
        />
      );
      break;
    case "houseliving":
      Content = (
        <HouseLiving
          step={step}
          key={`houseliving-${step}`}
          lessonKey="houseliving"
        />
      );
      break;
    case "transporttraffic":
      Content = (
        <TransportTraffic
          step={step}
          key={`transporttraffic-${step}`}
          lessonKey="transporttraffic"
        />
      );
      break;
    case "entertainment":
      Content = (
        <Entertainment step={step} key={`entertainment-${step}`} />
      );
      break;
    case "sportcompetition":
      Content = (
        <SportCompetition step={step} key={`sportcompetition-${step}`} />
      );
      break;
    case "emotions":
      Content = <Emotions step={step} key={`emotions-${step}`} />;
      break;
    case "phrasalverbs":
      Content = <PhrasalVerbs step={step} key={`phrasalverbs-${step}`} />;
      break;
    case "collocations":
      Content = <Collocations step={step} key={`collocations-${step}`} />;
      break;
    case "idioms":
      Content = <Idioms step={step} key={`idioms-${step}`} />;
      break;
    case "wordformation":
      Content = <WordFormation step={step} key={`wordformation-${step}`} />;
      break;
    case "synonymsantonyms":
      Content = (
        <SynonymsAntonyms step={step} key={`synonymsantonyms-${step}`} />
      );
      break;
    case "givingopinions":
      Content = (
        <GivingOpinions step={step} key={`givingopinions-${step}`} />
      );
      break;
    case "writingemails":
      Content = (
        <WritingEmails step={step} key={`writingemails-${step}`} />
      );
      break;
    case "describinggraphs":
      Content = (
        <DescribingGraphs step={step} key={`describinggraphs-${step}`} />
      );
      break;
    case "jobinterviews":
      Content = (
        <JobInterviews step={step} key={`jobinterviews-${step}`} />
      );
      break;
    default:
      Content = <PlaceholderContent />;
  }

  const stepCounts: Record<string, number> = {
    presentperfectcontinuous: 12,
    pastperfect: 12,
    pastperfectcomparison: 10,
    mixedtenses1: 10,
    mixedtenses2: 10,
    futureforms: 12,
    usedtowould: 7,
    conditionals: 12,
    conditional2: 14,
    conditional3: 14,
    mixedconditionals: 14,
    allconditionals: 13,
    modalsdeduction: 14,
    modalsobligationpermission: 14,
    passivevoice: 15,
    causative: 15,
    reportedstatements: 11,
    reportedquestions: 11,
    reportedcommands: 11,
    reportingverbs: 11,
    presentparticiple: 11,
    pastparticiple: 11,
    participleclauses: 11,
    wishifonly: 11,
    gerundsinfinitives: 11,
    articlesadvanced: 11,
    adjectivesasnouns: 11,
    adverbsposition: 11,
    questiontags: 11,
    quantifiers: 7,
    comparativesmodifiers: 7,
    sosuch: 7,
    preferwouldrather: 7,
    ellipsis: 7,
    inversion: 7,
    personalityadjectives: 7,
    relationshipsphrasalverbs: 7,
    workbusiness: 7,
    educationlearning: 7,
    moneyfinance: 7,
    healthlifestyle: 10,
    environmentnature: 15,
    crimelaw: 9,
    medianews: 10,
    technologyscience: 12,
    traveltourism: 10,
    societyculture: 10,
    foodcooking: 10,
    fashionappearance: 10,
    houseliving: 10,
    transporttraffic: 6,
    entertainment: 7,
    sportcompetition: 7,
    emotions: 5,
    phrasalverbs: 10,
    collocations: 7,
    idioms: 7,
    wordformation: 7,
    synonymsantonyms: 7,
    givingopinions: 15,
    writingemails: 15,
    describinggraphs: 10,
    jobinterviews: 12,
  };

  const totalSteps = stepCounts[t] || 10;

  const steps = Array.from({ length: Math.max(1, totalSteps) }, (_, i) => ({
    n: i + 1,
    href: `/blocks/b1?t=${t}&s=${i + 1}`,
  }));

  return (
    <>
      <CourseStructuredData
        level="B1"
        name="Intermediate English"
        description="Курс английского языка уровня B1 Intermediate: продвинутая грамматика, времена, модальные глаголы, условные предложения. Более 60 интерактивных уроков для среднего уровня."
      />
      <div className="min-h-screen bg-white">
        <Sidebar activeTopic={t} level="b1" />
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
              href={`/blocks/b1?t=${t}&s=${step - 1}`}
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
              href={`/blocks/b1?t=${t}&s=${step + 1}`}
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Далее →
            </Link>
          ) : (
            <CompletionButton
              currentTopic={t}
              isLastTopic={step === totalSteps}
              level="b1"
            />
          )}
        </div>
      </main>
    </div>
    </>
  );
}
