import { notFound } from "next/navigation";
import Link from "next/link";
import StepSquares from "@/components/lesson/StepSquares";
import Sidebar from "@/components/lesson/Sidebar";
import CompletionButton from "@/components/course/CompletionButton";
import FutureInThePast from "@/components/lesson/futureinthepast/FutureInThePast";
import PerfectModals from "@/components/lesson/perfectmodals/PerfectModals";
import Inversion from "@/components/lesson/inversion/Inversion";
import FrontingEmphasis from "@/components/lesson/frontingemphasis/FrontingEmphasis";
import CleftSentences from "@/components/lesson/cleftsentences/CleftSentences";
import Nominalisation from "@/components/lesson/nominalisation/Nominalisation";
import AdvancedPassives from "@/components/lesson/advancedpassives/AdvancedPassives";
import ComplexNounPhrases from "@/components/lesson/complexnounphrases/ComplexNounPhrases";
import ParticipleClausesAll from "@/components/lesson/participleclausesall/ParticipleClausesAll";
import ReducedRelatives from "@/components/lesson/reducedrelatives/ReducedRelatives";
import Ellipsis from "@/components/lesson/ellipsis/Ellipsis";
import Substitution from "@/components/lesson/substitution/Substitution";
import AdvancedConditionals from "@/components/lesson/advancedconditionals/AdvancedConditionals";
import UnrealTime from "@/components/lesson/unrealtime/UnrealTime";
import MixedConditionalsFull from "@/components/lesson/mixedconditionalsfull/MixedConditionalsFull";
import HypotheticalWish from "@/components/lesson/hypotheticalwish/HypotheticalWish";
import AdvancedGerundsInfinitives from "@/components/lesson/advancedgerundsinfinitives/AdvancedGerundsInfinitives";
import VerbsOfPerception from "@/components/lesson/verbsofperception/VerbsOfPerception";
import ComplexPrepositions from "@/components/lesson/complexprepositions/ComplexPrepositions";
import DiscourseMarkers from "@/components/lesson/discoursemarkers/DiscourseMarkers";
import ParallelismBalance from "@/components/lesson/parallelismbalance/ParallelismBalance";
import ParenthesisApposition from "@/components/lesson/parenthesisapposition/ParenthesisApposition";
import PunctuationComplex from "@/components/lesson/punctuationcomplex/PunctuationComplex";
import AcademicVocabulary from "@/components/lesson/academicvocabulary/AcademicVocabulary";
import Collocations from "@/components/lesson/collocations/Collocations";
import WorkBusiness from "@/components/lesson/workbusiness/WorkBusiness";
import MedicalEnglish from "@/components/lesson/medicalenglish/MedicalEnglish";
import PoliticalVocabulary from "@/components/lesson/politicalvocabulary/PoliticalVocabulary";
import MediaJournalism from "@/components/lesson/mediajournalism/MediaJournalism";
import PsychologyEmotions from "@/components/lesson/psychologyemotions/PsychologyEmotions";
import ScienceTechnology from "@/components/lesson/sciencetechnology/ScienceTechnology";
import EnvironmentSustainability from "@/components/lesson/environmentsustainability/EnvironmentSustainability";
import LiteratureCriticism from "@/components/lesson/literaturecriticism/LiteratureCriticism";
import ArtArchitecture from "@/components/lesson/artarchitecture/ArtArchitecture";
import Philosophy from "@/components/lesson/philosophy/Philosophy";
import IdiomsAdvanced from "@/components/lesson/idiomsadvanced/IdiomsAdvanced";
import PhrasalVerbsRare from "@/components/lesson/phrasalverbsrare/PhrasalVerbsRare";
import BinomialsTrinomials from "@/components/lesson/binomialstrinomials/BinomialsTrinomials";
import OxymoronsParadoxes from "@/components/lesson/oxymoronsparadoxes/OxymoronsParadoxes";
import EuphemismsDysphemisms from "@/components/lesson/euphemismsdysphemisms/EuphemismsDysphemisms";
import SlangInformal from "@/components/lesson/slanginformal/SlangInformal";
import BritishAmericanEnglish from "@/components/lesson/britishamericanenglish/BritishAmericanEnglish";
import FalseFriends from "@/components/lesson/falsefriends/FalseFriends";
import Debating from "@/components/lesson/debating/Debating";
import DiplomaticLanguage from "@/components/lesson/diplomaticlanguage/DiplomaticLanguage";
import BusinessCorrespondence from "@/components/lesson/businesscorrespondence/BusinessCorrespondence";
import RhetoricalDevices from "@/components/lesson/rhetoricaldevices/RhetoricalDevices";
import { CourseStructuredData } from "@/components/seo/StructuredData";
import {
  generateDynamicLessonMetadata,
  getTopicSEO,
  b2StepCounts,
} from "@/lib/seo";

import type { Metadata } from "next";

type Props = { searchParams: Promise<{ t?: string; s?: string }> };

// Динамическая генерация metadata для каждой темы и шага
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { t = "futureinthepast", s = "1" } = await searchParams;
  const step = Math.max(1, Number(s) || 1);

  // Получаем SEO данные темы из полной базы
  const topicSEO = getTopicSEO(t);
  const totalSteps = b2StepCounts[t] || 10;

  return generateDynamicLessonMetadata({
    title: topicSEO.title,
    description: topicSEO.description,
    level: "c2",
    topicId: t,
    step,
    totalSteps,
    keywords: topicSEO.keywords,
  });
}

export default async function Page({ searchParams }: Props) {
  const { t = "futureinthepast", s = "1" } = await searchParams;
  const step = Math.max(1, Number(s) || 1);

  const topics = [
    "futureinthepast",
    "perfectmodals",
    "inversion",
    "frontingemphasis",
    "cleftsentences",
    "nominalisation",
    "advancedpassives",
    "complexnounphrases",
    "participleclausesall",
    "reducedrelatives",
    "ellipsis",
    "substitution",
    "advancedconditionals",
    "unrealtime",
    "mixedconditionalsfull",
    "hypotheticalwish",
    "advancedgerundsinfinitives",
    "verbsofperception",
    "complexprepositions",
    "discoursemarkers",
    "parallelismbalance",
    "parenthesisapposition",
    "punctuationcomplex",
    "academicvocabulary",
    "collocations",
    "workbusiness",
    "medicalenglish",
    "politicalvocabulary",
    "mediajournalism",
    "psychologyemotions",
    "sciencetechnology",
    "environmentsustainability",
    "literaturecriticism",
    "artarchitecture",
    "philosophy",
    "idiomsadvanced",
    "phrasalverbsrare",
    "binomialstrinomials",
    "oxymoronsparadoxes",
    "euphemismsdysphemisms",
    "slanginformal",
    "britishamericanenglish",
    "falsefriends",
    "debating",
    "diplomaticlanguage",
    "businesscorrespondence",
    "rhetoricaldevices",
  ];

  if (!topics.includes(t)) notFound();

  const topicTitles: Record<string, string> = {
    futureinthepast: "Future in the Past (was going to, was to have done)",
    perfectmodals:
      "Perfect Modals (should have done, could have been, might have lost)",
    inversion: "Inversion (Not only…, Hardly had I…, Under no circumstances…)",
    frontingemphasis:
      "Fronting & Emphasis (Rarely do we see…, Such was his anger that…)",
    cleftsentences: "Cleft Sentences (It was John who…, What I need is…)",
    nominalisation:
      "Nominalisation (decide → decision, happy → happiness, grow → growth)",
    advancedpassives:
      "Advanced Passives (have sth done, get sth done, be rumoured to, be said to)",
    complexnounphrases:
      "Complex Noun Phrases (a two-hour delay, a heart-breakingly beautiful sunset)",
    participleclausesall:
      "Participle Clauses: All Types (Having been told…, Being French…, Written in 1984…)",
    reducedrelatives:
      "Reduced Relative Clauses (Anyone wanting to leave…, The book published last year…)",
    ellipsis:
      "Ellipsis: Advanced (I can swim and she can too. / He said he would, but didn't.)",
    substitution: "Substitution: do so, one/ones, such, so, neither",
    advancedconditionals:
      "Advanced Conditionals (If it weren't for…, Had it not been for…, Supposing…)",
    unrealtime:
      "Unreal Time (It's time you learned…, I'd rather you didn't…, I wish you were…)",
    mixedconditionalsfull:
      "Mixed Conditionals: Full Course (If I had studied, I would be a doctor now)",
    hypotheticalwish:
      "Hypothetical Wish (I wish I hadn't said that…, If only she were here…)",
    advancedgerundsinfinitives:
      "Advanced Gerunds & Infinitives (regret doing/to do, go on doing/to do, mean doing/to do)",
    verbsofperception:
      "Verbs of Perception + Object + -ing/bare inf (see sb doing/do, hear sb doing/do)",
    complexprepositions:
      "Complex Prepositions (in light of, with regard to, by virtue of, in spite of)",
    discoursemarkers:
      "Discourse Markers (as regards, insofar as, with respect to, albeit)",
    parallelismbalance:
      "Parallelism & Balance (Not only… but also…, Either… or…, Both… and…)",
    parenthesisapposition:
      "Parenthesis & Apposition (My brother, a doctor, lives in London)",
    punctuationcomplex:
      "Punctuation in Complex Sentences (colons, semicolons, dashes)",
    academicvocabulary:
      "Academic Vocabulary (hypothesis, empirical, paradigm, methodology)",
    collocations:
      "Collocations: academic (conduct research, draw a conclusion, reach a consensus)",
    workbusiness:
      "Work & Business (stakeholder, ROI, merger, downsize, leverage)",
    medicalenglish:
      "Medical English (diagnosis, prognosis, chronic, palliative)",
    politicalvocabulary:
      "Political Vocabulary (sovereignty, referendum, coalition, filibuster)",
    mediajournalism:
      "Media & Journalism (spin, scoop, op-ed, editorial, soundbite)",
    psychologyemotions:
      "Psychology & Emotions (cognitive dissonance, empathy, resilience, burnout)",
    sciencetechnology:
      "Science & Technology (quantum, algorithm, biotech, neural network)",
    environmentsustainability:
      "Environment & Sustainability (carbon footprint, biodiversity, deforestation, greenwashing)",
    literaturecriticism:
      "Literature & Criticism (metaphor, allegory, dystopia, foreshadowing)",
    artarchitecture:
      "Art & Architecture (avant-garde, baroque, perspective, medium)",
    philosophy:
      "Philosophy (epistemology, existentialism, utilitarianism, dialectic)",
    idiomsadvanced:
      "Idioms: Advanced & Literary (a Pyrrhic victory, hoist with his own petard)",
    phrasalverbsrare:
      "Phrasal Verbs: Rare & Nuanced (fob off, palm off, drum up, eke out)",
    binomialstrinomials:
      "Binomials & Trinomials (safe and sound, cool, calm and collected)",
    oxymoronsparadoxes:
      "Oxymorons & Paradoxes (deafening silence, bittersweet)",
    euphemismsdysphemisms:
      "Euphemisms & Dysphemisms (passed away vs kicked the bucket)",
    slanginformal: "Slang & Informal (lit, sus, ghosting, flex, no cap)",
    britishamericanenglish:
      "British vs American vs Global English (flat/apartment, colour/color)",
    falsefriends:
      "False Friends: Advanced (sensible vs sensitive, eventually vs actually)",
    debating:
      "Debating & Argumentation (structure, linking, evidence, countering)",
    diplomaticlanguage:
      "Diplomatic Language (I'm afraid..., With all due respect...)",
    businesscorrespondence:
      "Business Correspondence (Yours faithfully, Regards, Enclosed please find…)",
    rhetoricaldevices:
      "Rhetorical Devices (anaphora, chiasmus, antithesis, zeugma)",
  };

  const PlaceholderContent = () => (
    <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 p-8 border border-indigo-100">
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
    case "futureinthepast":
      Content = <FutureInThePast step={step} key={`futureinthepast-${step}`} />;
      break;
    case "perfectmodals":
      Content = <PerfectModals step={step} key={`perfectmodals-${step}`} />;
      break;
    case "inversion":
      Content = <Inversion step={step} key={`inversion-${step}`} />;
      break;
    case "frontingemphasis":
      Content = (
        <FrontingEmphasis step={step} key={`frontingemphasis-${step}`} />
      );
      break;
    case "cleftsentences":
      Content = <CleftSentences step={step} key={`cleftsentences-${step}`} />;
      break;
    case "nominalisation":
      Content = <Nominalisation step={step} key={`nominalisation-${step}`} />;
      break;
    case "advancedpassives":
      Content = (
        <AdvancedPassives step={step} key={`advancedpassives-${step}`} />
      );
      break;
    case "complexnounphrases":
      Content = (
        <ComplexNounPhrases step={step} key={`complexnounphrases-${step}`} />
      );
      break;
    case "participleclausesall":
      Content = (
        <ParticipleClausesAll
          step={step}
          key={`participleclausesall-${step}`}
        />
      );
      break;
    case "reducedrelatives":
      Content = (
        <ReducedRelatives step={step} key={`reducedrelatives-${step}`} />
      );
      break;
    case "ellipsis":
      Content = <Ellipsis step={step} key={`ellipsis-${step}`} />;
      break;
    case "substitution":
      Content = <Substitution step={step} key={`substitution-${step}`} />;
      break;
    case "advancedconditionals":
      Content = (
        <AdvancedConditionals
          step={step}
          key={`advancedconditionals-${step}`}
        />
      );
      break;
    case "unrealtime":
      Content = <UnrealTime step={step} key={`unrealtime-${step}`} />;
      break;
    case "mixedconditionalsfull":
      Content = (
        <MixedConditionalsFull
          step={step}
          key={`mixedconditionalsfull-${step}`}
        />
      );
      break;
    case "hypotheticalwish":
      Content = (
        <HypotheticalWish step={step} key={`hypotheticalwish-${step}`} />
      );
      break;
    case "advancedgerundsinfinitives":
      Content = (
        <AdvancedGerundsInfinitives
          step={step}
          key={`advancedgerundsinfinitives-${step}`}
        />
      );
      break;
    case "verbsofperception":
      Content = (
        <VerbsOfPerception step={step} key={`verbsofperception-${step}`} />
      );
      break;
    case "complexprepositions":
      Content = (
        <ComplexPrepositions step={step} key={`complexprepositions-${step}`} />
      );
      break;
    case "discoursemarkers":
      Content = (
        <DiscourseMarkers step={step} key={`discoursemarkers-${step}`} />
      );
      break;
    case "parallelismbalance":
      Content = (
        <ParallelismBalance step={step} key={`parallelismbalance-${step}`} />
      );
      break;
    case "parenthesisapposition":
      Content = (
        <ParenthesisApposition
          step={step}
          key={`parenthesisapposition-${step}`}
        />
      );
      break;
    case "punctuationcomplex":
      Content = (
        <PunctuationComplex step={step} key={`punctuationcomplex-${step}`} />
      );
      break;
    case "academicvocabulary":
      Content = (
        <AcademicVocabulary step={step} key={`academicvocabulary-${step}`} />
      );
      break;
    case "collocations":
      Content = <Collocations step={step} key={`collocations-${step}`} />;
      break;
    case "workbusiness":
      Content = <WorkBusiness step={step} key={`workbusiness-${step}`} />;
      break;
    case "medicalenglish":
      Content = <MedicalEnglish step={step} key={`medicalenglish-${step}`} />;
      break;
    case "politicalvocabulary":
      Content = (
        <PoliticalVocabulary step={step} key={`politicalvocabulary-${step}`} />
      );
      break;
    case "mediajournalism":
      Content = <MediaJournalism step={step} key={`mediajournalism-${step}`} />;
      break;
    case "psychologyemotions":
      Content = (
        <PsychologyEmotions step={step} key={`psychologyemotions-${step}`} />
      );
      break;
    case "sciencetechnology":
      Content = (
        <ScienceTechnology step={step} key={`sciencetechnology-${step}`} />
      );
      break;
    case "environmentsustainability":
      Content = (
        <EnvironmentSustainability
          step={step}
          key={`environmentsustainability-${step}`}
        />
      );
      break;
    case "literaturecriticism":
      Content = (
        <LiteratureCriticism step={step} key={`literaturecriticism-${step}`} />
      );
      break;
    case "artarchitecture":
      Content = <ArtArchitecture step={step} key={`artarchitecture-${step}`} />;
      break;
    case "philosophy":
      Content = <Philosophy step={step} key={`philosophy-${step}`} />;
      break;
    case "idiomsadvanced":
      Content = <IdiomsAdvanced step={step} key={`idiomsadvanced-${step}`} />;
      break;
    case "phrasalverbsrare":
      Content = (
        <PhrasalVerbsRare step={step} key={`phrasalverbsrare-${step}`} />
      );
      break;
    case "binomialstrinomials":
      Content = (
        <BinomialsTrinomials step={step} key={`binomialstrinomials-${step}`} />
      );
      break;
    case "oxymoronsparadoxes":
      Content = (
        <OxymoronsParadoxes step={step} key={`oxymoronsparadoxes-${step}`} />
      );
      break;
    case "euphemismsdysphemisms":
      Content = (
        <EuphemismsDysphemisms
          step={step}
          key={`euphemismsdysphemisms-${step}`}
        />
      );
      break;
    case "slanginformal":
      Content = <SlangInformal step={step} key={`slanginformal-${step}`} />;
      break;
    case "britishamericanenglish":
      Content = (
        <BritishAmericanEnglish
          step={step}
          key={`britishamericanenglish-${step}`}
        />
      );
      break;
    case "falsefriends":
      Content = <FalseFriends step={step} key={`falsefriends-${step}`} />;
      break;
    case "debating":
      Content = <Debating step={step} key={`debating-${step}`} />;
      break;
    case "diplomaticlanguage":
      Content = <DiplomaticLanguage step={step} key={`diplomaticlanguage-${step}`} />;
      break;
    case "businesscorrespondence":
      Content = <BusinessCorrespondence step={step} key={`businesscorrespondence-${step}`} />;
      break;
    case "rhetoricaldevices":
      Content = <RhetoricalDevices step={step} key={`rhetoricaldevices-${step}`} />;
      break;
    default:
      Content = <PlaceholderContent />;
  }

  const stepCounts: Record<string, number> = {
    futureinthepast: 14,
    perfectmodals: 15,
    inversion: 7,
    frontingemphasis: 7,
    cleftsentences: 12,
    nominalisation: 7,
    advancedpassives: 16,
    complexnounphrases: 7,
    participleclausesall: 8,
    reducedrelatives: 7,
    ellipsis: 7,
    substitution: 7,
    advancedconditionals: 8,
    unrealtime: 9,
    mixedconditionalsfull: 10,
    hypotheticalwish: 10,
    advancedgerundsinfinitives: 10,
    verbsofperception: 10,
    complexprepositions: 10,
    discoursemarkers: 10,
    parallelismbalance: 10,
    parenthesisapposition: 10,
    punctuationcomplex: 10,
    academicvocabulary: 15,
    collocations: 8,
    workbusiness: 10,
    medicalenglish: 12,
    legalenglish: 10,
    politicalvocabulary: 10,
    mediajournalism: 10,
    psychologyemotions: 10,
    sciencetechnology: 10,
    environmentsustainability: 10,
    literaturecriticism: 10,
    artarchitecture: 10,
    philosophy: 10,
    idiomsadvanced: 8,
    phrasalverbsrare: 10,
    binomialstrinomials: 8,
    oxymoronsparadoxes: 8,
    euphemismsdysphemisms: 7,
    slanginformal: 13,
    britishamericanenglish: 10,
    falsefriends: 10,
    debating: 10,
    diplomaticlanguage: 10,
    businesscorrespondence: 10,
    rhetoricaldevices: 10,
  };

  const totalSteps = stepCounts[t] || 10;

  const steps = Array.from({ length: Math.max(1, totalSteps) }, (_, i) => ({
    n: i + 1,
    href: `/blocks/c2?t=${t}&s=${i + 1}`,
  }));

  return (
    <>
      <CourseStructuredData
        level="B2-C1"
        name="Advanced English"
        description="Курс английского языка уровня B2-C1 Advanced: сложная грамматика, идиомы, академический английский, деловая лексика. Более 50 продвинутых уроков для достижения высокого уровня владения языком."
      />
      <div className="flex min-h-screen bg-white">
        <Sidebar activeTopic={t} level="c2" />
        <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Тема урока: <span className="text-indigo-600">{topicTitles[t]}</span>
        </h1>

        <div className="mb-8">
          <StepSquares steps={steps} active={step} />
        </div>

        {Content}

        <div className="mt-12 flex items-center justify-between pt-8 border-t">
          {step > 1 ? (
            <Link
              href={`/blocks/c2?t=${t}&s=${step - 1}`}
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
              href={`/blocks/c2?t=${t}&s=${step + 1}`}
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Далее →
            </Link>
          ) : (
            <CompletionButton
              currentTopic={t}
              isLastTopic={step === totalSteps}
              level="c2"
            />
          )}
        </div>
      </main>
    </div>
    </>
  );
}
