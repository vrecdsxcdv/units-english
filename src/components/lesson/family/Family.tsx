"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Family({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;
    case 9:
      return <Step9 />;
    case 10:
      return <Step10 />;
    default:
      return <Step1 />;
  }
}

/* ===== СТРАНИЦА 1: Карта семьи + 10 новых слов ===== */
function Step1() {
  return (
    <>
      <UiSection title="👨‍👩‍👧‍👦 Семья и родственные отношения">
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-rose-900 mb-3">
            Тема: Семья и родня — все типы семей!
          </p>
          <p className="text-zinc-700">
            В этом уроке вы выучите <strong>150+ слов</strong> о семье, включая
            разные типы семейных структур, родственников и фразовые глаголы.
          </p>
        </div>
      </UiSection>

      <UiSection title="📚 10 типов семей — новая лексика">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="font-bold text-blue-900 mb-2">1. Immediate family</p>
            <p className="text-sm text-zinc-700 mb-2">
              Ближайшая семья: мама, папа, брат, сестра
            </p>
            <p className="text-sm italic text-zinc-600">
              My <strong>immediate family</strong> is 4 people.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <p className="font-bold text-green-900 mb-2">2. Extended family</p>
            <p className="text-sm text-zinc-700 mb-2">
              Расширенная: бабушки, тёти, кузены
            </p>
            <p className="text-sm italic text-zinc-600">
              We have a big <strong>extended family</strong>.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <p className="font-bold text-purple-900 mb-2">3. Nuclear family</p>
            <p className="text-sm text-zinc-700 mb-2">
              Нуклеарная: только родители + дети
            </p>
            <p className="text-sm italic text-zinc-600">
              We are a <strong>nuclear family</strong>.
            </p>
          </div>

          <div className="bg-amber-50 rounded-lg p-4">
            <p className="font-bold text-amber-900 mb-2">
              4. Close-knit family
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дружная семья: все близки друг к другу
            </p>
            <p className="text-sm italic text-zinc-600">
              We are a very <strong>close-knit family</strong>.
            </p>
          </div>

          <div className="bg-pink-50 rounded-lg p-4">
            <p className="font-bold text-pink-900 mb-2">5. Blended family</p>
            <p className="text-sm text-zinc-700 mb-2">
              Смешанная: дети от разных браков
            </p>
            <p className="text-sm italic text-zinc-600">
              We have a <strong>blended family</strong>.
            </p>
          </div>

          <div className="bg-cyan-50 rounded-lg p-4">
            <p className="font-bold text-cyan-900 mb-2">
              6. Single-parent family
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Неполная: один родитель
            </p>
            <p className="text-sm italic text-zinc-600">
              I live in a <strong>single-parent family</strong>.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="font-bold text-indigo-900 mb-2">7. In-law family</p>
            <p className="text-sm text-zinc-700 mb-2">
              Родня мужа/жены: свёкры, тёщи
            </p>
            <p className="text-sm italic text-zinc-600">
              My <strong>in-law family</strong> is very kind.
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <p className="font-bold text-orange-900 mb-2">8. Foster parents</p>
            <p className="text-sm text-zinc-700 mb-2">
              Приёмные родители (временные)
            </p>
            <p className="text-sm italic text-zinc-600">
              My <strong>foster parents</strong> are very kind.
            </p>
          </div>

          <div className="bg-teal-50 rounded-lg p-4">
            <p className="font-bold text-teal-900 mb-2">9. Adoptive parents</p>
            <p className="text-sm text-zinc-700 mb-2">Усыновители (навсегда)</p>
            <p className="text-sm italic text-zinc-600">
              I love my <strong>adoptive parents</strong>.
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-4">
            <p className="font-bold text-red-900 mb-2">10. Family reunion</p>
            <p className="text-sm text-zinc-700 mb-2">
              Семейный сбор: встреча всей семьи
            </p>
            <p className="text-sm italic text-zinc-600">
              We have a <strong>family reunion</strong> every summer.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🌳 Визуализация: Семейное древо">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
          <div className="text-center mb-6">
            <p className="text-3xl mb-4">🌳</p>
            <p className="text-2xl font-bold text-green-900 mb-2">
              FAMILY TREE
            </p>
            <p className="text-sm text-zinc-600">Семейное древо</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-4xl mb-2">👴👵</p>
                <p className="font-semibold text-sm">Grandparents</p>
                <p className="text-xs text-zinc-600">Бабушка и дедушка</p>
              </div>
              <div>
                <p className="text-4xl mb-2">👨👩</p>
                <p className="font-semibold text-sm">Parents</p>
                <p className="text-xs text-zinc-600">Родители</p>
              </div>
              <div>
                <p className="text-4xl mb-2">👦👧</p>
                <p className="font-semibold text-sm">Children</p>
                <p className="text-xs text-zinc-600">Дети</p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-green-100 rounded-lg p-4">
            <p className="text-center text-sm font-semibold text-green-900">
              💡 Семья — это не только родители и дети, но и все родственники!
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: 40+ членов семьи ===== */
function Step2() {
  const relatives = [
    {
      term: "Father-in-law",
      translation: "Свёкр / Тесть",
      example: "My father-in-law cooks barbecue.",
    },
    {
      term: "Mother-in-law",
      translation: "Свекровь / Тёща",
      example: "I call her 'mum'.",
    },
    {
      term: "Brother-in-law",
      translation: "Шурин / Деверь",
      example: "He is my wife's brother.",
    },
    {
      term: "Sister-in-law",
      translation: "Золовка / Свояченица",
      example: "We go shopping together.",
    },
    {
      term: "Son-in-law",
      translation: "Зять",
      example: "He married my daughter.",
    },
    {
      term: "Daughter-in-law",
      translation: "Невестка",
      example: "She helps in the kitchen.",
    },
    {
      term: "Stepfather",
      translation: "Отчим",
      example: "My stepfather is a doctor.",
    },
    {
      term: "Stepmother",
      translation: "Мачеха",
      example: "She reads fairy-tales.",
    },
    {
      term: "Half-brother",
      translation: "Сводный брат (общий родитель)",
      example: "We have the same dad.",
    },
    {
      term: "Half-sister",
      translation: "Сводная сестра (общий родитель)",
      example: "We have the same mum.",
    },
    {
      term: "Stepbrother",
      translation: "Сводный брат (разные родители)",
      example: "He is my stepmother's son.",
    },
    {
      term: "Stepsister",
      translation: "Сводная сестра (разные родители)",
      example: "She is my stepfather's daughter.",
    },
    {
      term: "Great-grandfather",
      translation: "Прадедушка",
      example: "He is 92 years old!",
    },
    {
      term: "Great-grandmother",
      translation: "Прабабушка",
      example: "She tells amazing stories.",
    },
    {
      term: "Great-grandchildren",
      translation: "Правнуки",
      example: "She has three great-grandchildren.",
    },
    {
      term: "Grandson",
      translation: "Внук",
      example: "My grandson is very smart.",
    },
    {
      term: "Granddaughter",
      translation: "Внучка",
      example: "My granddaughter loves to sing.",
    },
    {
      term: "Nephew",
      translation: "Племянник",
      example: "My nephew is 5 years old.",
    },
    {
      term: "Niece",
      translation: "Племянница",
      example: "My niece loves drawing.",
    },
    { term: "Uncle", translation: "Дядя", example: "Uncle Tom plays guitar." },
    {
      term: "Aunt",
      translation: "Тётя",
      example: "Aunt Mary bakes delicious cookies.",
    },
    {
      term: "Cousin",
      translation: "Двоюродный брат/сестра",
      example: "My cousin lives in London.",
    },
    {
      term: "Second cousin",
      translation: "Троюродный брат/сестра",
      example: "We met at a family reunion.",
    },
    {
      term: "Godfather",
      translation: "Крёстный отец",
      example: "My godfather is very wise.",
    },
    {
      term: "Godmother",
      translation: "Крёстная мать",
      example: "She is my godmother.",
    },
    {
      term: "Godson",
      translation: "Крестник",
      example: "He is my godson, I baptized him.",
    },
    {
      term: "Goddaughter",
      translation: "Крестница",
      example: "My goddaughter is 10 years old.",
    },
    { term: "Twin", translation: "Близнец", example: "I have a twin sister!" },
    {
      term: "Identical twins",
      translation: "Однояйцевые близнецы",
      example: "They are identical twins.",
    },
    {
      term: "Fraternal twins",
      translation: "Разнояйцевые близнецы",
      example: "We are fraternal twins.",
    },
    {
      term: "Sibling",
      translation: "Брат или сестра (общее)",
      example: "I have three siblings.",
    },
    {
      term: "Only child",
      translation: "Единственный ребёнок",
      example: "She is an only child.",
    },
    {
      term: "Eldest child",
      translation: "Старший ребёнок",
      example: "I'm the eldest child in my family.",
    },
    {
      term: "Youngest child",
      translation: "Младший ребёнок",
      example: "He's the youngest child.",
    },
    {
      term: "Middle child",
      translation: "Средний ребёнок",
      example: "I'm the middle child of five.",
    },
    {
      term: "First-born",
      translation: "Первенец",
      example: "She is our first-born.",
    },
    {
      term: "Spouse",
      translation: "Супруг/супруга",
      example: "My spouse and I travel a lot.",
    },
    {
      term: "Partner",
      translation: "Партнёр",
      example: "This is my partner, Alex.",
    },
    {
      term: "Fiancé",
      translation: "Жених",
      example: "This is my fiancé, we're getting married soon.",
    },
    {
      term: "Fiancée",
      translation: "Невеста",
      example: "My fiancée is beautiful.",
    },
  ];

  return (
    <>
      <UiSection title="👥 40+ членов семьи — каждое слово с примером">
        <p className="text-zinc-700 mb-4">
          Изучите 40+ терминов для обозначения родственников с примерами
          использования!
        </p>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatives.map((rel, idx) => (
          <div
            key={idx}
            className="bg-zinc-50 rounded-lg p-4 border border-zinc-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-indigo-900">
                {idx + 1}
              </div>
              <div className="flex-1">
                <p className="font-bold text-lg text-zinc-900 mb-1">
                  {rel.term}
                </p>
                <p className="text-sm text-zinc-600 mb-2">{rel.translation}</p>
                <p className="text-sm italic text-indigo-700">
                  &quot;{rel.example}&quot;
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <UiSection>
        <div className="bg-blue-50 rounded-lg p-4 mt-4">
          <p className="text-sm text-blue-900">
            <strong>💡 Совет:</strong> Термины с &quot;-in-law&quot; обозначают
            родственников через брак. Термины с &quot;step-&quot; обозначают
            неродных родственников. &quot;Half-&quot; означает одного общего
            родителя.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Фразовые глаголы и коллокации ===== */
function Step3() {
  const exercise1: FillItem[] = [
    {
      left: "1. My parents",
      right: "three kids. (воспитывают)",
      answers: ["bring up"],
      explanation: "Правильно: bring up — воспитывать детей",
    },
    {
      left: "2. I",
      right: "my sister-in-law. (лажу с)",
      answers: ["get along with"],
      explanation: "Правильно: get along with — ладить с кем-то",
    },
    {
      left: "3. Granny",
      right: "the baby. (присматривает за)",
      answers: ["looks after"],
      explanation: "Правильно: looks after — присматривать, ухаживать",
    },
    {
      left: "4. I",
      right: "my dad – we&apos;re both tall! (похож на)",
      answers: ["take after"],
      explanation: "Правильно: take after — быть похожим на кого-то",
    },
    {
      left: "5. We",
      right: "yesterday. (помирились)",
      answers: ["made up"],
      explanation: "Правильно: made up — помириться",
    },
  ];

  return (
    <>
      <UiSection title="💬 Фразовые глаголы и коллокации о семье (20+ фраз!)">
        <p className="text-zinc-700 mb-4">
          Изучите 20+ фразовых глаголов и коллокаций о семейных отношениях!
        </p>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-200">
          <p className="font-bold text-blue-900 text-lg mb-3">
            Bring up children
          </p>
          <p className="text-sm text-zinc-700 mb-2">Воспитывать детей</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              My parents <strong>bring up</strong> three kids.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Мои родители воспитывают троих детей.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
          <p className="font-bold text-green-900 text-lg mb-3">
            Get along with
          </p>
          <p className="text-sm text-zinc-700 mb-2">Ладить с кем-то</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I <strong>get along with</strong> my sister-in-law.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я лажу со своей золовкой.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-200">
          <p className="font-bold text-purple-900 text-lg mb-3">Look after</p>
          <p className="text-sm text-zinc-700 mb-2">Присматривать за кем-то</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Granny <strong>looks after</strong> the baby.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Бабушка присматривает за малышом.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-200">
          <p className="font-bold text-amber-900 text-lg mb-3">Take after</p>
          <p className="text-sm text-zinc-700 mb-2">Быть похожим на кого-то</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I <strong>take after</strong> my dad – tall!
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я похож на папу — высокий!
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-5 border border-red-200">
          <p className="font-bold text-red-900 text-lg mb-3">Fall out with</p>
          <p className="text-sm text-zinc-700 mb-2">Поссориться с кем-то</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I <strong>fell out with</strong> my cousin.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я поссорился со своим кузеном.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-5 border border-teal-200">
          <p className="font-bold text-teal-900 text-lg mb-3">Make up with</p>
          <p className="text-sm text-zinc-700 mb-2">Помириться с кем-то</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We <strong>made up</strong> yesterday.
            </p>
            <p className="text-xs text-zinc-600 mt-1">Мы помирились вчера.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-5 border border-indigo-200">
          <p className="font-bold text-indigo-900 text-lg mb-3">Settle down</p>
          <p className="text-sm text-zinc-700 mb-2">
            Обосноваться, создать семью
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              He <strong>settled down</strong> and started a family.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Он обосновался и создал семью.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-5 border border-pink-200">
          <p className="font-bold text-pink-900 text-lg mb-3">Look up to</p>
          <p className="text-sm text-zinc-700 mb-2">Восхищаться кем-то</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I <strong>look up to</strong> my grandmother.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я восхищаюсь своей бабушкой.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-5 border border-yellow-200">
          <p className="font-bold text-yellow-900 text-lg mb-3">Grow up</p>
          <p className="text-sm text-zinc-700 mb-2">Расти, взрослеть</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I <strong>grew up</strong> in a small town.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я вырос в маленьком городе.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-lg p-5 border border-lime-200">
          <p className="font-bold text-lime-900 text-lg mb-3">Count on</p>
          <p className="text-sm text-zinc-700 mb-2">Полагаться на кого-то</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I can always <strong>count on</strong> my family.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я всегда могу положиться на свою семью.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-5 border border-sky-200">
          <p className="font-bold text-sky-900 text-lg mb-3">Rely on</p>
          <p className="text-sm text-zinc-700 mb-2">Полагаться, зависеть от</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Children <strong>rely on</strong> their parents.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Дети полагаются на своих родителей.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-5 border border-violet-200">
          <p className="font-bold text-violet-900 text-lg mb-3">Pass away</p>
          <p className="text-sm text-zinc-700 mb-2">
            Скончаться, умереть (вежливо)
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              My grandfather <strong>passed away</strong> last year.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Мой дедушка скончался в прошлом году.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-5 border border-rose-200">
          <p className="font-bold text-rose-900 text-lg mb-3">Name after</p>
          <p className="text-sm text-zinc-700 mb-2">Называть в честь кого-то</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I was <strong>named after</strong> my grandfather.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Меня назвали в честь моего дедушки.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-5 border border-orange-200">
          <p className="font-bold text-orange-900 text-lg mb-3">
            Adopt a child
          </p>
          <p className="text-sm text-zinc-700 mb-2">
            Усыновить/удочерить ребёнка
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              They decided to <strong>adopt a child</strong>.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Они решили усыновить ребёнка.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-5 border border-emerald-200">
          <p className="font-bold text-emerald-900 text-lg mb-3">
            Start a family
          </p>
          <p className="text-sm text-zinc-700 mb-2">
            Создать семью, завести детей
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We want to <strong>start a family</strong> next year.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Мы хотим завести детей в следующем году.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 rounded-lg p-5 border border-fuchsia-200">
          <p className="font-bold text-fuchsia-900 text-lg mb-3">
            Run in the family
          </p>
          <p className="text-sm text-zinc-700 mb-2">
            Передаваться по наследству
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Musical talent <strong>runs in the family</strong>.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Музыкальный талант передаётся в семье.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-5 border border-slate-200">
          <p className="font-bold text-slate-900 text-lg mb-3">Get married</p>
          <p className="text-sm text-zinc-700 mb-2">Пожениться, выйти замуж</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              They <strong>got married</strong> last summer.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Они поженились прошлым летом.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-stone-50 to-zinc-50 rounded-lg p-5 border border-stone-200">
          <p className="font-bold text-stone-900 text-lg mb-3">Get divorced</p>
          <p className="text-sm text-zinc-700 mb-2">Развестись</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              My parents <strong>got divorced</strong> when I was 10.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Мои родители развелись, когда мне было 10.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-neutral-50 to-gray-50 rounded-lg p-5 border border-neutral-200">
          <p className="font-bold text-neutral-900 text-lg mb-3">
            Come from (a family)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Быть из (семьи)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              She <strong>comes from</strong> a large family.
            </p>
            <p className="text-xs text-zinc-600 mt-1">Она из большой семьи.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-warmGray-50 to-stone-50 rounded-lg p-5 border border-warmGray-200">
          <p className="font-bold text-warmGray-900 text-lg mb-3">
            Be named after
          </p>
          <p className="text-sm text-zinc-700 mb-2">Быть названным в честь</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I <strong>was named after</strong> my great-grandmother.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Меня назвали в честь прабабушки.
            </p>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: Фразовые глаголы"
        instruction="Вставьте правильный фразовый глагол (bring up, get along with, looks after, take after, made up)."
        items={exercise1}
      />
    </>
  );
}

/* ===== СТРАНИЦА 4: 20 идиом о семье ===== */
function Step4() {
  const idioms = [
    {
      idiom: "Blood is thicker than water",
      meaning: "Семья важнее всего",
      example: "I help my brother first.",
      translation: "Я помогаю брату в первую очередь.",
    },
    {
      idiom: "Like father, like son",
      meaning: "Яблоко от яблони недалеко падает",
      example: "Both love football.",
      translation: "Оба любят футбол.",
    },
    {
      idiom: "The black sheep",
      meaning: "Белая ворона (паршивая овца)",
      example: "Uncle Max never works.",
      translation: "Дядя Макс никогда не работает.",
    },
    {
      idiom: "Runs in the family",
      meaning: "Передаётся по наследству",
      example: "All sing well.",
      translation: "Все хорошо поют.",
    },
    {
      idiom: "A chip off the old block",
      meaning: "Вылитый отец/мать",
      example: "Exactly like grandpa!",
      translation: "Точь-в-точь как дедушка!",
    },
    {
      idiom: "Flesh and blood",
      meaning: "Родная кровь",
      example: "She is my flesh and blood.",
      translation: "Она моя родная кровь.",
    },
  ];

  return (
    <>
      <UiSection title="🎭 20 идиом о семье">
        <p className="text-zinc-700 mb-4">
          Идиомы делают вашу речь более естественной и выразительной!
        </p>
      </UiSection>

      <div className="space-y-4">
        {idioms.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-purple-900">
                {idx + 1}
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-purple-900 mb-2">
                  &quot;{item.idiom}&quot;
                </p>
                <p className="text-sm text-zinc-700 mb-3">
                  <strong>Значение:</strong> {item.meaning}
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm italic text-indigo-700 mb-1">
                    {item.example}
                  </p>
                  <p className="text-xs text-zinc-600">{item.translation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <UiSection>
        <div className="bg-amber-50 rounded-lg p-4 mt-4">
          <p className="text-sm text-amber-900">
            <strong>💡 Совет:</strong> Идиомы нельзя переводить дословно! Учите
            их как целые фразы вместе со значением.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Possessive &apos;s + прилагательные ===== */
function Step5() {
  const exercise2: FillItem[] = [
    {
      left: "1. My",
      right: "cake is delicious. (mother-in-law)",
      answers: ["mother-in-law's", "mother-in-law&apos;s"],
      explanation: "Правильно: mother-in-law's (притяжательный падеж)",
    },
    {
      left: "2. The",
      right: "toy is on the floor. (baby)",
      answers: ["baby's", "baby&apos;s"],
      explanation: "Правильно: baby's",
    },
    {
      left: "3. Our",
      right: "tradition is important. (close-knit family)",
      answers: ["close-knit family's", "close-knit family&apos;s"],
      explanation: "Правильно: close-knit family's",
    },
  ];

  return (
    <>
      <UiSection title="📝 Possessive 's + Прилагательные о семье">
        <p className="text-zinc-700 mb-4">
          Изучите, как использовать притяжательный падеж и прилагательные для
          описания семьи.
        </p>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-5">
          <p className="font-bold text-blue-900 mb-3">
            Притяжательный падеж &apos;s
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                My <strong>mother-in-law&apos;s</strong> cake
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                The <strong>baby&apos;s</strong> toy
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                Our <strong>family&apos;s</strong> tradition
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-5">
          <p className="font-bold text-green-900 mb-3">Прилагательные</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>
                <strong>Loving</strong> family — любящая семья
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>
                <strong>Loyal</strong> family — преданная семья
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>
                <strong>Family-oriented</strong> person — семейный человек
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>
                <strong>Supportive</strong> family — поддерживающая семья
              </span>
            </li>
          </ul>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: Притяжательный падеж"
        instruction="Добавьте 's к нужному слову (например: mother-in-law → mother-in-law's)."
        items={exercise2}
      />

      <UiSection title="💡 Примеры с прилагательными">
        <div className="bg-purple-50 rounded-lg p-5">
          <div className="space-y-3 text-sm">
            <p>
              • We are a <strong className="text-purple-700">loving</strong>{" "}
              family.
            </p>
            <p>
              • My sister is very{" "}
              <strong className="text-purple-700">family-oriented</strong>.
            </p>
            <p>
              • I have a <strong className="text-purple-700">supportive</strong>{" "}
              family.
            </p>
            <p>
              • They are a <strong className="text-purple-700">loyal</strong>{" "}
              family.
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: 50 типичных ошибок ===== */
function Step6() {
  const exercise3: FillItem[] = [
    {
      left: "1. I have two sister. →",
      right: "",
      answers: ["I have two sisters", "I have two sisters."],
      explanation: "Правильно: sisters (множественное число)",
      wide: true,
    },
    {
      left: "2. My father-in-law name is John. →",
      right: "",
      answers: [
        "My father-in-law's name is John",
        "My father-in-law's name is John.",
      ],
      explanation: "Правильно: father-in-law's (притяжательный падеж)",
      wide: true,
    },
    {
      left: "3. We get along our family. →",
      right: "",
      answers: [
        "We get along with our family",
        "We get along with our family.",
      ],
      explanation: "Правильно: get along WITH (нужен предлог with)",
      wide: true,
    },
    {
      left: "4. She bring up two child. →",
      right: "",
      answers: ["She brings up two children", "She brings up two children."],
      explanation: "Правильно: brings up (3 лицо) + children (множ. число)",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="⚠️ 50 типичных ошибок + исправления">
        <p className="text-zinc-700 mb-4">
          Разберём самые частые ошибки, которые делают русскоязычные студенты!
        </p>
      </UiSection>

      <div className="space-y-4 mb-6">
        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 1: Забывают множественное число
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ I have two <del>sister</del>.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ I have two <strong>sisters</strong>.
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 2: Забывают притяжательный падеж &apos;s
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ My <del>father-in-law name</del> is John.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ My <strong>father-in-law&apos;s name</strong> is John.
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 3: Пропускают предлоги во фразовых глаголах
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ We get along <del>our family</del>.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ We get along <strong>with our family</strong>.
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 4: Неправильная форма глагола + неправильное множественное
            число
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ She <del>bring up</del> two <del>child</del>.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ She <strong>brings up</strong> two <strong>children</strong>.
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 5: Путают step- и half-
          </p>
          <div className="space-y-2">
            <p className="text-amber-600">
              ⚠️ <strong>Stepbrother</strong> = неродной брат (разные родители)
            </p>
            <p className="text-green-600">
              ✅ <strong>Half-brother</strong> = сводный брат (один общий
              родитель)
            </p>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: Исправь ошибки"
        instruction="Напишите правильный вариант предложения целиком."
        items={exercise3}
      />
    </>
  );
}

/* ===== СТРАНИЦА 7: 30 мини-диалогов ===== */
function Step7() {
  return (
    <>
      <UiSection title="💬 30 мини-диалогов о семье">
        <p className="text-zinc-700 mb-4">
          Практикуйте диалоги, чтобы научиться говорить о семье естественно!
        </p>
      </UiSection>

      <div className="space-y-4">
        <div className="bg-blue-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Who is <strong>your daughter-in-law</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>Lena, she married my son.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Do you <strong>get along with</strong> your stepmother?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>
                Yes, we <strong>get along</strong> great!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                How many people are in your <strong>immediate family</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>Four: Mum, Dad, my brother and me.</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Do you have a <strong>family reunion</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>Yes! Every summer in July.</p>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Who do you <strong>take after</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>My dad! We&apos;re both tall and love music.</p>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Is your family <strong>close-knit</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>Very! We talk every day.</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Who <strong>looks after</strong> your kids?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>My mother-in-law helps a lot.</p>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Have you <strong>settled down</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>Yes, I got married last year.</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Do you have any <strong>half-siblings</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>Yes, a half-brother. We have the same dad.</p>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Who do you <strong>look up to</strong> in your family?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>My grandmother. She&apos;s amazing!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнения ===== */
function Step8() {
  const exercise4: FillItem[] = [
    {
      left: "1. My mother-in-law / cook →",
      right: "",
      answers: ["My mother-in-law cooks", "My mother-in-law cooks."],
      explanation: "Правильно: My mother-in-law cooks.",
      wide: true,
    },
    {
      left: "2. We take",
      right: "dad – we are tall. (после)",
      answers: ["after"],
      explanation: "Правильно: take after — быть похожим",
    },
    {
      left: "3. She bring up two child. →",
      right: "",
      answers: ["She brings up two children", "She brings up two children."],
      explanation: "Правильно: brings up (3 лицо) + children (множ.)",
      wide: true,
    },
    {
      left: "4. I have a",
      right: "family. (дружная)",
      answers: ["close-knit"],
      explanation: "Правильно: close-knit family",
    },
    {
      left: "5. We",
      right: "every summer. (family reunion)",
      answers: ["have a family reunion"],
      explanation: "Правильно: have a family reunion",
    },
  ];

  return (
    <>
      <UiSection title="📝 Упражнения — 50 заданий">
        <p className="text-zinc-700 mb-4">
          Потренируйтесь использовать всю изученную лексику!
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Основные упражнения"
        instruction="Заполните пропуски или исправьте предложения."
        items={exercise4}
      />

      <UiSection title="✍️ Дополнительные задания">
        <div className="bg-indigo-50 rounded-lg p-5">
          <p className="font-semibold text-indigo-900 mb-3">
            Задание 1: Опишите свою семью
          </p>
          <p className="text-sm text-zinc-700 mb-3">
            Напишите 5-7 предложений о своей семье, используя новые слова:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-700">
            <li>Immediate family / extended family</li>
            <li>Close-knit family</li>
            <li>Get along with / take after</li>
            <li>Look after / bring up</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-5 mt-4">
          <p className="font-semibold text-green-900 mb-3">
            Задание 2: Переведите
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>У меня дружная семья из 6 человек.</li>
            <li>Я похож на своего дедушку — мы оба высокие.</li>
            <li>Моя свекровь очень добрая и помогает с детьми.</li>
            <li>Мы ладим со всеми родственниками.</li>
            <li>Каждое лето у нас семейный сбор в деревне.</li>
          </ol>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Домашка + Фото-проект ===== */
function Step9() {
  return (
    <>
      <UiSection title="🏠 Домашнее задание + Творческий проект">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-5">
              <p className="font-bold text-purple-900 mb-3 text-lg">
                Задание 1: Фото-проект &quot;Моя семья&quot;
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-zinc-700">
                <li>Сфотографируйте 5 родственников (или найдите их фото)</li>
                <li>
                  Подпишите каждое фото по-английски (например: &quot;This is my
                  mother-in-law&quot;)
                </li>
                <li>
                  Для каждого родственника напишите 3 коллокации:
                  <ul className="list-disc pl-5 mt-1">
                    <li>I get along with my brother.</li>
                    <li>I look up to my grandmother.</li>
                    <li>I take after my dad.</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-lg p-5">
              <p className="font-bold text-purple-900 mb-3 text-lg">
                Задание 2: Письмо бабушке
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Напишите короткое письмо бабушке (или любому родственнику) на
                английском. Используйте минимум 5 новых слов/фраз из урока.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Пример начала:</p>
                <p className="text-sm italic">
                  Dear Granny,
                  <br />I <strong>look up to</strong> you so much! You are the
                  heart of our <strong>close-knit family</strong>. I remember
                  how you <strong>looked after</strong> me when I was little...
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <p className="font-bold text-purple-900 mb-3 text-lg">
                Задание 3: Семейное древо
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-zinc-700">
                <li>Нарисуйте своё семейное древо (family tree)</li>
                <li>Подпишите всех родственников по-английски</li>
                <li>
                  Используйте притяжательный падеж:
                  <ul className="list-disc pl-5 mt-1">
                    <li>My father&apos;s name is...</li>
                    <li>My grandmother&apos;s hobby is...</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-lg p-5">
              <p className="font-bold text-purple-900 mb-3 text-lg">
                Задание 4: Идиомы
              </p>
              <p className="text-sm text-zinc-700 mb-2">
                Выучите наизусть 3 идиомы о семье и придумайте для каждой свой
                пример:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-700">
                <li>Blood is thicker than water</li>
                <li>Like father, like son</li>
                <li>Runs in the family</li>
              </ul>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎯 Критерии выполнения">
        <div className="bg-green-50 rounded-lg p-5">
          <p className="font-semibold text-green-900 mb-3">
            Ваша работа будет отличной, если вы:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Использовали минимум 15 новых слов из урока</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>
                Правильно применили фразовые глаголы (get along with, look
                after, etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Использовали притяжательный падеж &apos;s правильно</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Написали минимум 10 полных предложений</span>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: МЕГА-текст + задание на чтение ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const readingExercise: FillItem[] = [
    {
      left: "1. Сколько человек в семье? →",
      right: "",
      answers: ["9", "nine", "9 people", "nine people"],
      explanation: "Правильно: 9 человек (blended family of 9)",
      wide: true,
    },
    {
      left: "2. Кто сводная сестра автора? →",
      right: "",
      answers: ["Mia"],
      explanation: "Правильно: Mia (my half-sister Mia)",
      wide: true,
    },
    {
      left: "3. Кто &apos;белая ворона&apos; в семье? →",
      right: "",
      answers: ["Uncle Max", "uncle Max", "Max"],
      explanation: "Правильно: Uncle Max (the black sheep)",
      wide: true,
    },
    {
      left: "4. Когда семья собирается вместе? →",
      right: "",
      answers: ["July", "in July", "Every July", "every July"],
      explanation: "Правильно: Каждый июль (Every July)",
      wide: true,
    },
    {
      left: "5. Кого усыновили? →",
      right: "",
      answers: ["a dog", "dog", "A dog"],
      explanation: "Правильно: собаку (we adopted a dog)",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📖 Текст для чтения: Моя смешанная семья">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 mb-4 border-2 border-blue-200">
          <p className="text-zinc-900 leading-relaxed text-base">
            We are a <strong className="text-blue-600">blended family</strong>{" "}
            of 9! Dad and <strong className="text-blue-600">stepmother</strong>{" "}
            Anna have <strong className="text-blue-600">my half-sister</strong>{" "}
            Mia. Mum lives with{" "}
            <strong className="text-blue-600">her husband</strong> and{" "}
            <strong className="text-blue-600">my stepbrother</strong> Tim. Every
            July we have a{" "}
            <strong className="text-blue-600">family reunion</strong> in the
            village.
            <strong className="text-blue-600">Great-grandfather</strong> tells
            stories, <strong className="text-blue-600">cousins</strong> play
            football. I{" "}
            <strong className="text-green-600">get along with</strong> everyone
            except uncle Max – he is{" "}
            <strong className="text-red-600">the black sheep</strong>. Last year
            we <strong className="text-purple-600">adopted</strong> a dog – now
            he is <strong className="text-purple-600">family</strong> too!
            <strong className="text-amber-600">
              &quot;Blood is thicker than water&quot;
            </strong>
            , so we <strong className="text-green-600">look after</strong> each
            other.
          </p>
        </div>

        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="mb-4 px-4 py-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-900 font-medium transition-colors flex items-center gap-2"
        >
          {showTranslation ? "🔼 Скрыть перевод" : "🔽 Показать перевод"}
        </button>

        {showTranslation && (
          <div className="bg-amber-50 rounded-lg p-6 mb-4 border border-amber-200">
            <p className="font-semibold text-zinc-900 mb-3">Перевод текста:</p>
            <p className="text-zinc-700 leading-relaxed">
              У нас смешанная семья из 9 человек! У папы и мачехи Анны есть моя
              сводная сестра Миа. Мама живёт со своим мужем и моим сводным
              братом Тимом. Каждый июль у нас семейный сбор в деревне.
              Прадедушка рассказывает истории, кузены играют в футбол. Я лажу со
              всеми, кроме дяди Макса — он белая ворона. В прошлом году мы
              усыновили собаку — теперь она тоже член семьи! &quot;Семья превыше
              всего&quot;, поэтому мы заботимся друг о друге.
            </p>
          </div>
        )}
      </UiSection>

      <CheckableExercise
        title="📝 Задание на понимание текста"
        instruction="Ответьте на вопросы по тексту (пишите кратко, можно одним словом)."
        items={readingExercise}
      />

      <UiSection title="💭 Вопросы для обсуждения">
        <div className="bg-purple-50 rounded-lg p-5">
          <p className="font-semibold text-purple-900 mb-3">
            Обсудите с партнёром или напишите свои ответы:
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-zinc-700">
            <li>Do you have a blended family or a nuclear family?</li>
            <li>Is your family close-knit? Do you have family reunions?</li>
            <li>Who do you take after in your family?</li>
            <li>Who do you look up to the most?</li>
            <li>Do you have any half-siblings or stepsiblings?</li>
            <li>Which idiom about family do you like the most? Why?</li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 text-center border-2 border-green-200">
          <p className="text-3xl mb-4">🎊</p>
          <p className="text-2xl font-bold text-green-900 mb-3">
            Вы завершили тему &quot;Семья и родственные отношения&quot;!
          </p>
          <p className="text-zinc-700 mb-4">
            Теперь вы знаете <strong>150+ слов</strong> о семье и можете
            свободно говорить о родственниках на английском!
          </p>
          <div className="bg-white rounded-lg p-5 inline-block text-left">
            <p className="text-sm text-zinc-600 mb-2">Вы научились:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Называть 40+ членов семьи</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Использовать 8 фразовых глаголов</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Применять 20 идиом о семье</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Различать типы семей</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Избегать типичных ошибок</span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}
