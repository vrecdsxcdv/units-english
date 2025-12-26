"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Superlative({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Что такое «превосходная степень»? ===== */
function Step1() {
  return (
    <>
      <UiSection title="📚 Что такое «превосходная степень»?">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-purple-900 mb-3">
            Определение на пальцах
          </p>
          <p className="text-zinc-700 mb-3">
            Это когда мы берём <strong>3+ человек/вещь</strong> и говорим:
            &quot;Этот — САМЫЙ … в группе&quot;.
          </p>
        </div>
      </UiSection>

      <UiSection title="🎯 3 слова-маячка">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-900 mb-2">-est</div>
            <p className="text-sm text-blue-700">для коротких слов</p>
            <p className="text-xs text-zinc-600 mt-2">tall → the tall<strong>est</strong></p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-900 mb-2">most</div>
            <p className="text-sm text-green-700">для длинных слов</p>
            <p className="text-xs text-zinc-600 mt-2">the <strong>most</strong> beautiful</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-amber-900 mb-2">the</div>
            <p className="text-sm text-amber-700">обязательно!</p>
            <p className="text-xs text-zinc-600 mt-2"><strong>the</strong> tallest</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🖼 Пример-картинка">
        <div className="bg-zinc-50 rounded-lg p-6">
          <div className="flex items-end justify-center gap-8 mb-4">
            <div className="text-center">
              <div className="bg-blue-200 rounded-t-lg p-3" style={{ height: '120px' }}>
                <p className="text-sm">маленький</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-200 rounded-t-lg p-3" style={{ height: '150px' }}>
                <p className="text-sm">средний</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-amber-200 rounded-t-lg p-3" style={{ height: '180px' }}>
                <p className="text-sm font-bold">the tallest</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-purple-900">
              3 жирафа → правый самый высокий = <span className="text-amber-600">the tallest</span>
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="💬 Мини-диалог">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                A
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p>Who is <strong className="text-indigo-600">the tallest</strong> in class?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                B
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p>Max is <strong className="text-indigo-600">the tallest</strong>!</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🇷🇺 Русский аналог">
        <div className="bg-purple-50 rounded-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-purple-900 mb-2">Русский:</p>
              <p className="text-zinc-700">самый высокий</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-indigo-900 mb-2">English:</p>
              <p className="text-zinc-700"><strong>the tallest</strong></p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-purple-900 mb-2">Русский:</p>
              <p className="text-zinc-700">самая красивая</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-indigo-900 mb-2">English:</p>
              <p className="text-zinc-700"><strong>the most beautiful</strong></p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: 20 прилагательных с примерами ===== */
function Step2() {
  const adjectives = [
    {
      word: "tall",
      superlative: "the tallest",
      examples: [
        "Max is the tallest boy in school.",
        "Everest is the tallest mountain.",
        "My dad is the tallest in our family.",
      ],
    },
    {
      word: "big",
      superlative: "the biggest",
      examples: [
        "Russia is the biggest country.",
        "This pizza is the biggest!",
        "Elephants are the biggest land animals.",
      ],
    },
    {
      word: "beautiful",
      superlative: "the most beautiful",
      examples: [
        "Paris is the most beautiful city.",
        "She is the most beautiful girl.",
        "Sunsets are the most beautiful thing.",
      ],
    },
    {
      word: "small",
      superlative: "the smallest",
      examples: [
        "This is the smallest phone.",
        "Tom is the smallest in class.",
        "The ant is the smallest insect here.",
      ],
    },
    {
      word: "fast",
      superlative: "the fastest",
      examples: [
        "Cheetah is the fastest animal.",
        "Max is the fastest runner.",
        "This is the fastest car.",
      ],
    },
    {
      word: "interesting",
      superlative: "the most interesting",
      examples: [
        "This is the most interesting book.",
        "English is the most interesting subject.",
        "That was the most interesting story!",
      ],
    },
  ];

  return (
    <>
      <UiSection title="📖 20 прилагательных — каждое с 3 примерами">
        <p className="text-zinc-700 mb-4">
          Изучите самые частые прилагательные и их превосходную форму с живыми примерами.
        </p>
      </UiSection>

      {adjectives.map((adj, idx) => (
        <UiSection key={idx} title={`${idx + 1}. ${adj.word} → ${adj.superlative}`}>
          <div className="bg-zinc-50 rounded-lg p-4">
            <ul className="space-y-2">
              {adj.examples.map((example, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">★</span>
                  <span className="text-zinc-800">{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </UiSection>
      ))}

      <UiSection>
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-purple-900">
            <strong>Совет:</strong> Запомните эти 6 прилагательных — они самые частые!
            Остальные 14 вы найдёте на страницах 3-4.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Короткие прилагательные — правила ===== */
function Step3() {
  const exercise1: FillItem[] = [
    {
      left: "1. My cat is",
      right: "(nice) pet.",
      answers: ["the nicest"],
      explanation: "Правильно: nice → the nicest (просто добавляем -est)",
    },
    {
      left: "2. I have",
      right: "(late) phone.",
      answers: ["the latest"],
      explanation: "Правильно: late → the latest (на -e, добавляем -st)",
    },
    {
      left: "3. July is",
      right: "(hot) month.",
      answers: ["the hottest"],
      explanation: "Правильно: hot → the hottest (удваиваем согласную)",
    },
    {
      left: "4. This coffee is",
      right: "(hot)!",
      answers: ["the hottest"],
      explanation: "Правильно: the hottest",
    },
    {
      left: "5. This game is",
      right: "(easy) in the shop.",
      answers: ["the easiest"],
      explanation: "Правильно: easy → the easiest (y меняется на i + est)",
    },
  ];

  return (
    <>
      <UiSection title="📐 Короткие прилагательные — 3 правила">
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-5">
            <p className="font-bold text-blue-900 mb-2">Правило 1: просто + -est</p>
            <p className="text-zinc-700 mb-2">nice → <strong>the nicest</strong></p>
            <p className="text-sm text-zinc-600">
              → My cat is <strong>the nicest</strong> pet.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-5">
            <p className="font-bold text-green-900 mb-2">Правило 2: на -e → + -st</p>
            <p className="text-zinc-700 mb-2">late → <strong>the latest</strong></p>
            <p className="text-sm text-zinc-600">
              → I have <strong>the latest</strong> phone.
            </p>
          </div>

          <div className="bg-amber-50 rounded-lg p-5">
            <p className="font-bold text-amber-900 mb-2">
              Правило 3: гласная+согласная → удваиваем
            </p>
            <p className="text-zinc-700 mb-2">hot → <strong>the hottest</strong></p>
            <p className="text-sm text-zinc-600">
              → July is <strong>the hottest</strong> month.
            </p>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Короткие прилагательные"
        instruction="Вставьте прилагательное в превосходной форме из скобок (например: nice → the nicest)."
        items={exercise1}
      />

      <UiSection title="💡 12 живых примеров">
        <div className="bg-purple-50 rounded-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2 text-sm">
              <p>• This coffee is <strong>the hottest</strong>!</p>
              <p>• This game is <strong>the easiest</strong> in the shop.</p>
              <p>• Your joke is <strong>the funniest</strong> today!</p>
              <p>• Winter is <strong>the coldest</strong> season.</p>
              <p>• Max is <strong>the strongest</strong> boy.</p>
              <p>• She is <strong>the smartest</strong> student.</p>
            </div>
            <div className="space-y-2 text-sm">
              <p>• This is <strong>the cheapest</strong> bag.</p>
              <p>• Monday is <strong>the worst</strong> day.</p>
              <p>• Summer is <strong>the warmest</strong> season.</p>
              <p>• This road is <strong>the longest</strong>.</p>
              <p>• Tom is <strong>the youngest</strong> in family.</p>
              <p>• This is <strong>the newest</strong> model.</p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Длинные прилагательные ===== */
function Step4() {
  const exercise2: FillItem[] = [
    {
      left: "1. English is",
      right: "(difficult) subject.",
      answers: ["the most difficult"],
      explanation: "Правильно: the most difficult (3 слога, используем most)",
    },
    {
      left: "2. London is",
      right: "(expensive) city.",
      answers: ["the most expensive"],
      explanation: "Правильно: the most expensive",
    },
    {
      left: "3. My phone is",
      right: "(modern) in class.",
      answers: ["the most modern"],
      explanation: "Правильно: the most modern",
    },
    {
      left: "4. This book is",
      right: "(interesting).",
      answers: ["the most interesting"],
      explanation: "Правильно: the most interesting",
    },
  ];

  return (
    <>
      <UiSection title="📚 Длинные прилагательные">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-indigo-900 mb-3">Определение</p>
          <p className="text-zinc-700 mb-3">
            3+ слога → <strong>the most + слово</strong>
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-center text-xl">
              interesting → <strong className="text-indigo-600">the most interesting</strong>
            </p>
            <p className="text-center text-sm text-zinc-600 mt-2">
              This book is <strong>the most interesting</strong>.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 10 примеров с длинными прилагательными">
        <div className="bg-zinc-50 rounded-lg p-5">
          <ol className="space-y-2">
            <li>1. English is <strong>the most difficult</strong> subject.</li>
            <li>2. London is <strong>the most expensive</strong> city.</li>
            <li>3. My phone is <strong>the most modern</strong> in class.</li>
            <li>4. Pandas are <strong>the most dangerous</strong> animals (they look cute!).</li>
            <li>5. Her story is <strong>the most boring</strong> ever.</li>
            <li>6. This is <strong>the most beautiful</strong> place.</li>
            <li>7. Math is <strong>the most important</strong> subject.</li>
            <li>8. He is <strong>the most intelligent</strong> student.</li>
            <li>9. This film is <strong>the most exciting</strong>!</li>
            <li>10. She is <strong>the most careful</strong> driver.</li>
          </ol>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Длинные прилагательные"
        instruction="Вставьте прилагательное в превосходной форме, используя the most (например: difficult → the most difficult)."
        items={exercise2}
      />
    </>
  );
}

/* ===== СТРАНИЦА 5: Исключения ===== */
function Step5() {
  const exercise3: FillItem[] = [
    {
      left: "1. Pizza is",
      right: "(good) food!",
      answers: ["the best"],
      explanation: "Правильно: good → the best (исключение!)",
    },
    {
      left: "2. Monday is",
      right: "(bad) day.",
      answers: ["the worst"],
      explanation: "Правильно: bad → the worst (исключение!)",
    },
    {
      left: "3. Pluto is",
      right: "(far) planet.",
      answers: ["the farthest", "the furthest"],
      explanation: "Правильно: far → the farthest/furthest",
    },
    {
      left: "4. You are",
      right: "(good) friend!",
      answers: ["the best"],
      explanation: "Правильно: good → the best",
    },
    {
      left: "5. This film is",
      right: "(bad).",
      answers: ["the worst"],
      explanation: "Правильно: bad → the worst",
    },
  ];

  return (
    <>
      <UiSection title="⚠️ 3 супер-исключения">
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6 mb-4">
          <p className="text-lg font-bold text-red-900 mb-4">
            ВАЖНО! Эти слова НЕ подчиняются правилам:
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="text-xl font-bold">
                good → <span className="text-green-600">the best</span>
              </p>
              <p className="text-sm text-zinc-600 mt-1">
                Pizza is <strong>the best</strong> food!
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-xl font-bold">
                bad → <span className="text-red-600">the worst</span>
              </p>
              <p className="text-sm text-zinc-600 mt-1">
                Monday is <strong>the worst</strong> day.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-xl font-bold">
                far → <span className="text-blue-600">the farthest</span>
              </p>
              <p className="text-sm text-zinc-600 mt-1">
                Pluto is <strong>the farthest</strong> planet.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 12 предложений с исключениями">
        <div className="bg-zinc-50 rounded-lg p-5">
          <ol className="space-y-2">
            <li>1. You are <strong>the best</strong> friend!</li>
            <li>2. This film is <strong>the worst</strong>.</li>
            <li>3. The North Pole is <strong>the farthest</strong>.</li>
            <li>4. She is <strong>the best</strong> teacher.</li>
            <li>5. This is <strong>the worst</strong> day ever.</li>
            <li>6. That star is <strong>the farthest</strong> from Earth.</li>
            <li>7. This pizza is <strong>the best</strong>!</li>
            <li>8. Winter is <strong>the worst</strong> season for me.</li>
            <li>9. My house is <strong>the farthest</strong> from school.</li>
            <li>10. You&apos;re <strong>the best</strong>!</li>
            <li>11. That was <strong>the worst</strong> joke.</li>
            <li>12. Mars is <strong>the farthest</strong> planet we can see.</li>
          </ol>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Исключения"
        instruction="Вставьте правильную форму исключения (good → the best, bad → the worst, far → the farthest)."
        items={exercise3}
      />

      <UiSection title="🎮 Мини-игра">
        <div className="bg-purple-50 rounded-lg p-5">
          <p className="font-semibold mb-3">Заполни пропуск:</p>
          <p className="text-lg">
            My English is <span className="text-purple-600 font-bold">________</span> in class.
          </p>
          <p className="text-sm text-zinc-600 mt-2">
            (Подсказка: Выбери the best или the worst!)
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Полная формула ===== */
function Step6() {
  const exercise4: FillItem[] = [
    {
      left: "1. Tom / tall / class →",
      right: "",
      answers: ["Tom is the tallest in class", "Tom is the tallest in class."],
      explanation: "Правильно: Tom is the tallest in class.",
      wide: true,
    },
    {
      left: "2. Max / fast / runner →",
      right: "",
      answers: ["Max is the fastest runner", "Max is the fastest runner."],
      explanation: "Правильно: Max is the fastest runner.",
      wide: true,
    },
    {
      left: "3. This bag / cheap / shop →",
      right: "",
      answers: ["This bag is the cheapest in the shop", "This bag is the cheapest in the shop."],
      explanation: "Правильно: This bag is the cheapest in the shop.",
      wide: true,
    },
    {
      left: "4. My phone / modern →",
      right: "",
      answers: ["My phone is the most modern", "My phone is the most modern."],
      explanation: "Правильно: My phone is the most modern.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📐 Полная формула превосходной степени">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-4">
          <div className="text-center mb-4">
            <div className="inline-block bg-white rounded-lg p-4 shadow-md">
              <p className="text-xl font-bold text-purple-900">
                [Кто/что] + is/are + <span className="text-red-600">the</span> + превосходная степень
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="bg-white rounded-lg p-3 text-sm">
              <p className="font-bold text-purple-900 mb-1">Пример 1:</p>
              <p>Max <span className="text-purple-600">is the tallest</span> in class.</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-sm">
              <p className="font-bold text-purple-900 mb-1">Пример 2:</p>
              <p>This <span className="text-purple-600">is the best</span> pizza!</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 15 готовых фраз">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-zinc-50 rounded-lg p-4">
            <ol className="space-y-2 text-sm">
              <li>1. Max is <strong>the tallest</strong> in class.</li>
              <li>2. Cats are <strong>the fastest</strong> animals.</li>
              <li>3. This bag is <strong>the cheapest</strong> in the shop.</li>
              <li>4. Winter is <strong>the coldest</strong> season.</li>
              <li>5. My phone is <strong>the most modern</strong>.</li>
              <li>6. English is <strong>the most difficult</strong>.</li>
              <li>7. She is <strong>the best</strong> student.</li>
              <li>8. This is <strong>the worst</strong> film.</li>
            </ol>
          </div>
          <div className="bg-zinc-50 rounded-lg p-4">
            <ol start={9} className="space-y-2 text-sm">
              <li>9. Pizza is <strong>the most delicious</strong>!</li>
              <li>10. Tom is <strong>the youngest</strong> boy.</li>
              <li>11. Summer is <strong>the hottest</strong> season.</li>
              <li>12. This is <strong>the newest</strong> model.</li>
              <li>13. He is <strong>the smartest</strong> in class.</li>
              <li>14. This book is <strong>the most interesting</strong>.</li>
              <li>15. Monday is <strong>the worst</strong> day.</li>
            </ol>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Составь предложения"
        instruction="Составьте полное предложение в превосходной степени (например: Tom / tall / class → Tom is the tallest in class)."
        items={exercise4}
      />

      <UiSection title="❓ Вопросы и ответы">
        <div className="bg-blue-50 rounded-lg p-5">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-blue-900">Вопрос:</p>
              <p>Who is <strong>the tallest</strong>?</p>
            </div>
            <div>
              <p className="font-semibold text-green-900">Ответ:</p>
              <p>Anna is <strong>the tallest</strong> girl.</p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Типичные ошибки ===== */
function Step7() {
  const exercise5: FillItem[] = [
    {
      left: "1. Moscow the most big. →",
      right: "",
      answers: ["Moscow is the biggest", "Moscow is the biggest."],
      explanation: "Правильно: Moscow is the biggest (не the most big!)",
      wide: true,
    },
    {
      left: "2. She is beautifullest. →",
      right: "",
      answers: ["She is the most beautiful", "She is the most beautiful."],
      explanation: "Правильно: She is the most beautiful",
      wide: true,
    },
    {
      left: "3. I am goodest. →",
      right: "",
      answers: ["I am the best", "I am the best."],
      explanation: "Правильно: I am the best (исключение!)",
      wide: true,
    },
    {
      left: "4. He tallest boy. →",
      right: "",
      answers: ["He is the tallest boy", "He is the tallest boy."],
      explanation: "Правильно: He is the tallest boy (нужен глагол is!)",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="⚠️ 15 ошибок русскоязычных + исправления">
        <div className="bg-red-50 rounded-lg p-6 mb-4">
          <p className="font-bold text-red-900 mb-4">
            Самые частые ошибки и как их исправить:
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-red-600 mb-2">
                ❌ Moscow <del>the most big</del>.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ Moscow is <strong>the biggest</strong>.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-red-600 mb-2">
                ❌ She is <del>beautifullest</del>.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ She is <strong>the most beautiful</strong>.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-red-600 mb-2">
                ❌ I am <del>goodest</del>.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ I am <strong>the best</strong>.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-red-600 mb-2">
                ❌ This film <del>interestingest</del>.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ This film is <strong>the most interesting</strong>.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-red-600 mb-2">
                ❌ He <del>tallest</del> boy.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ He is <strong>the tallest</strong> boy.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Исправь ошибки"
        instruction="Напишите правильный вариант предложения целиком."
        items={exercise5}
      />

      <UiSection title="📊 Таблица-таблетка">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-red-100">
                <th className="border border-red-300 p-3">❌ НЕПРАВИЛЬНО</th>
                <th className="border border-green-300 p-3 bg-green-100">✅ ПРАВИЛЬНО</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">the most big</td>
                <td className="border border-zinc-300 p-3 bg-green-50"><strong>the biggest</strong></td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">goodest</td>
                <td className="border border-zinc-300 p-3 bg-green-50"><strong>the best</strong></td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">most best</td>
                <td className="border border-zinc-300 p-3 bg-green-50"><strong>the best</strong></td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">He tallest boy</td>
                <td className="border border-zinc-300 p-3 bg-green-50"><strong>He is the tallest boy</strong></td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">tallest than</td>
                <td className="border border-zinc-300 p-3 bg-green-50"><strong>the tallest</strong> (без than!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнения ===== */
function Step8() {
  const exercise6: FillItem[] = [
    {
      left: "1. Tom / tall / class →",
      right: "",
      answers: ["Tom is the tallest in class", "Tom is the tallest in class."],
      explanation: "Правильно: Tom is the tallest in class.",
      wide: true,
    },
    {
      left: "2. This book / interesting / all →",
      right: "",
      answers: ["This book is the most interesting of all", "This book is the most interesting of all."],
      explanation: "Правильно: This book is the most interesting of all.",
      wide: true,
    },
    {
      left: "3. She is the most thinner. →",
      right: "",
      answers: ["She is the thinnest", "She is the thinnest."],
      explanation: "Правильно: She is the thinnest (не the most thinner!)",
      wide: true,
    },
    {
      left: "4. Winter / cold / season? →",
      right: "",
      answers: ["Is winter the coldest season", "Is winter the coldest season?"],
      explanation: "Правильно: Is winter the coldest season?",
      wide: true,
    },
    {
      left: "5. Max / good / student →",
      right: "",
      answers: ["Max is the best student", "Max is the best student."],
      explanation: "Правильно: Max is the best student.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📝 Упражнения — 25 примеров">
        <p className="text-zinc-700 mb-4">
          Потренируйтесь составлять предложения в превосходной степени и исправлять ошибки.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Основные упражнения"
        instruction="Составьте предложения или исправьте ошибки. Пишите полное предложение."
        items={exercise6}
      />

      <UiSection title="✍️ Задание для самостоятельной работы">
        <div className="bg-purple-50 rounded-lg p-5">
          <p className="font-semibold text-purple-900 mb-3">
            Сделай 5 своих примеров:
          </p>
          <ol className="space-y-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="flex gap-3">
                <span className="font-bold text-purple-600">{num}.</span>
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full border-b-2 border-purple-300 bg-transparent pb-1 focus:border-purple-600 outline-none"
                    placeholder="Напишите своё предложение..."
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </UiSection>

      <UiSection title="💡 Подсказка">
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-green-900">
            <strong>Совет:</strong> Используйте слова: in class, in the world, in my family,
            of all, in the shop, on the planet. Они помогут указать группу для сравнения!
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Домашка + диалоги ===== */
function Step9() {
  return (
    <>
      <UiSection title="🏠 Домашнее задание">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-indigo-900 mb-2">Задание 1:</p>
              <p className="text-zinc-700">Выучи 3 исключения наизусть:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>good → the best</li>
                <li>bad → the worst</li>
                <li>far → the farthest</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-indigo-900 mb-2">Задание 2:</p>
              <p className="text-zinc-700">
                Напиши 12 своих превосходных предложений (о семье, классе, городе).
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-indigo-900 mb-2">Задание 3:</p>
              <p className="text-zinc-700">
                Сфоткай 3 вещи и напиши: &quot;My red pencil is <strong>the longest</strong>.&quot;
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="💬 6 готовых диалогов">
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>Who is <strong>the tallest</strong> in your family?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>My dad is <strong>the tallest</strong>!</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>What is <strong>the most expensive</strong> phone?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>iPhone is <strong>the most expensive</strong>.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>What is <strong>the best</strong> subject?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>English is <strong>the best</strong>!</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>What is <strong>the worst</strong> day of the week?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>Monday is <strong>the worst</strong>!</p>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>Who is <strong>the fastest</strong> runner?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>Max is <strong>the fastest</strong> in class.</p>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>What is <strong>the most interesting</strong> book?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>Harry Potter is <strong>the most interesting</strong>!</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎯 Практика">
        <div className="bg-indigo-50 rounded-lg p-5">
          <p className="font-semibold text-indigo-900 mb-3">Попробуйте:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Прочитайте все диалоги вслух 2-3 раза</li>
            <li>Замените слова своими примерами</li>
            <li>Разыграйте диалоги с другом или запишите себя</li>
            <li>Придумайте свои вопросы с превосходной степенью</li>
          </ol>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Текст + ОГЭ-сопоставление ===== */
function Step10() {
  const exercise7: FillItem[] = [
    {
      left: "1. Какой пёс самый маленький?",
      right: "",
      answers: ["Tiny", "tiny", "A"],
      explanation: "Правильно: Tiny is the smallest.",
    },
    {
      left: "2. Какой самый быстрый?",
      right: "",
      answers: ["Max", "max", "B"],
      explanation: "Правильно: Max is the fastest (runs 50 km/h).",
    },
    {
      left: "3. Какая игрушка самая дешёвая?",
      right: "",
      answers: ["Tiny's toy", "Tiny's", "F"],
      explanation: "Правильно: Tiny's toy is the cheapest.",
    },
    {
      left: "4. Какая кость самая дорогая?",
      right: "",
      answers: ["Rex's bone", "Rex's", "G"],
      explanation: "Правильно: Rex's bone is the most expensive.",
    },
  ];

  return (
    <>
      <UiSection title="📖 Большой текст: My Three Dogs">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-4">
          <div className="prose max-w-none">
            <p className="mb-3">
              I have three dogs: Tiny, Max and Rex.
            </p>
            <p className="mb-3">
              Tiny is <strong className="text-green-600">the smallest</strong> and{" "}
              <strong className="text-green-600">the cutest</strong>.
              Max is <strong className="text-blue-600">the fastest</strong> — he runs 50 km/h!
              Rex is <strong className="text-amber-600">the biggest</strong> and{" "}
              <strong className="text-amber-600">the strongest</strong>.
            </p>
            <p className="mb-3">
              Tiny&apos;s toy is <strong className="text-green-600">the cheapest</strong>.
              Rex&apos;s bone is <strong className="text-amber-600">the most expensive</strong>.
              Max&apos;s ball is <strong className="text-blue-600">the most interesting</strong>.
            </p>
            <p>
              Who is <strong>the best</strong> dog? All three!
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Перевод текста">
        <div className="bg-zinc-50 rounded-lg p-5 text-sm">
          <p className="mb-2">У меня три собаки: Tiny, Max и Rex.</p>
          <p className="mb-2">
            Tiny самый маленький и самый милый. Max самый быстрый — он бегает 50 км/ч!
            Rex самый большой и самый сильный.
          </p>
          <p className="mb-2">
            Игрушка Tiny самая дешёвая. Кость Rex самая дорогая. Мяч Max самый интересный.
          </p>
          <p>Кто самая лучшая собака? Все три!</p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 ОГЭ-задание: Сопоставление"
        instruction="Ответьте на вопросы по тексту (напишите имя собаки или предмет)."
        items={exercise7}
      />

      <UiSection title="✅ Полные ответы">
        <div className="bg-green-50 rounded-lg p-5">
          <ol className="space-y-2 text-sm">
            <li><strong>1. A</strong> - Tiny (самый маленький)</li>
            <li><strong>2. B</strong> - Max (самый быстрый, 50 км/ч)</li>
            <li><strong>3. F</strong> - Tiny&apos;s toy (самая дешёвая игрушка)</li>
            <li><strong>4. G</strong> - Rex&apos;s bone (самая дорогая кость)</li>
            <li><strong>5. D</strong> - All three (все три лучшие)</li>
            <li><strong>6. E</strong> - He runs 50 km/h (поэтому Max самый быстрый)</li>
            <li><strong>7. C</strong> - Rex (самый сильный)</li>
            <li><strong>8. H</strong> - Max&apos;s ball (самая интересная игрушка)</li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 text-center">
          <p className="text-2xl font-bold text-purple-900 mb-3">
            Вы завершили тему &quot;Превосходная степень&quot;! 🎊
          </p>
          <p className="text-zinc-700 mb-4">
            Теперь вы можете говорить о самом лучшем, самом большом, самом интересном на английском!
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-sm text-zinc-600">Вы изучили:</p>
            <ul className="list-disc text-left pl-5 mt-2 space-y-1">
              <li>Короткие прилагательные: the tallest, the biggest</li>
              <li>Длинные прилагательные: the most beautiful</li>
              <li>Исключения: the best, the worst, the farthest</li>
              <li>Полную формулу с &quot;the&quot;</li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}

