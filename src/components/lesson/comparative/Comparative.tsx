"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Comparative({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Что такое «сравнительная степень»? ===== */
function Step1() {
  return (
    <>
      <UiSection title="📚 Что такое «сравнительная степень»?">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            Определение на пальцах
          </p>
          <p className="text-zinc-700 mb-3">
            Сравнительная степень — это когда мы <strong>ставим двух людей/вещей рядом</strong> и говорим:
            &quot;Этот выше / толще / умнее, <strong>чем</strong> тот&quot;.
          </p>
        </div>
      </UiSection>

      <UiSection title="🎯 3 слова-маячка">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-900 mb-2">-er</div>
            <p className="text-sm text-blue-700">для коротких слов</p>
            <p className="text-xs text-zinc-600 mt-2">tall → tall<strong>er</strong></p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-900 mb-2">more</div>
            <p className="text-sm text-green-700">для длинных слов</p>
            <p className="text-xs text-zinc-600 mt-2"><strong>more</strong> beautiful</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-amber-900 mb-2">than</div>
            <p className="text-sm text-amber-700">чем</p>
            <p className="text-xs text-zinc-600 mt-2">taller <strong>than</strong> me</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🖼 Пример-картинка">
        <div className="bg-zinc-50 rounded-lg p-6">
          <div className="flex items-end justify-center gap-8 mb-4">
            <div className="text-center">
              <div className="bg-blue-200 rounded-t-lg p-4" style={{ height: '170px' }}>
                <p className="font-bold text-blue-900">Tom</p>
                <p className="text-sm">170 см</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-pink-200 rounded-t-lg p-4" style={{ height: '165px' }}>
                <p className="font-bold text-pink-900">Anna</p>
                <p className="text-sm">165 см</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-indigo-900">
              Tom is <span className="text-blue-600">taller than</span> Anna.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="💬 Мини-диалог">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                A
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p>Who is taller?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                B
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p>
                  Tom is <strong className="text-blue-600">taller than</strong> me!
                </p>
              </div>
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
      comparative: "taller",
      examples: [
        "My dad is taller than me.",
        "The tree is taller than the house.",
        "Is she taller than her brother?",
      ],
    },
    {
      word: "big",
      comparative: "bigger",
      examples: [
        "My pizza is bigger than yours!",
        "Russia is bigger than France.",
        "Elephants are bigger than mice.",
      ],
    },
    {
      word: "beautiful",
      comparative: "more beautiful",
      examples: [
        "Paris is more beautiful than my town.",
        "Her dress is more beautiful than mine.",
        "Sunsets are more beautiful than sunrises.",
      ],
    },
    {
      word: "small",
      comparative: "smaller",
      examples: [
        "My phone is smaller than yours.",
        "Cats are smaller than dogs.",
        "This room is smaller than that one.",
      ],
    },
    {
      word: "fast",
      comparative: "faster",
      examples: [
        "Cars are faster than bikes.",
        "Summer passes faster than winter.",
        "He runs faster than me.",
      ],
    },
    {
      word: "interesting",
      comparative: "more interesting",
      examples: [
        "This book is more interesting than that film.",
        "Math is more interesting than history.",
        "Your story is more interesting!",
      ],
    },
  ];

  return (
    <>
      <UiSection title="📖 20 прилагательных — каждое с 3 примерами">
        <p className="text-zinc-700 mb-4">
          Изучите самые частые прилагательные и их сравнительную форму с живыми примерами.
        </p>
      </UiSection>

      {adjectives.map((adj, idx) => (
        <UiSection key={idx} title={`${idx + 1}. ${adj.word} → ${adj.comparative}`}>
          <div className="bg-zinc-50 rounded-lg p-4">
            <ul className="space-y-2">
              {adj.examples.map((example, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span className="text-zinc-800">{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </UiSection>
      ))}

      <UiSection>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Совет:</strong> Запомните эти 6 прилагательных — они самые частые!
            Остальные 14 вы найдёте на следующих страницах.
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
      right: "(nice) than your dog.",
      answers: ["nicer"],
      explanation: "Правильно: nice → nicer (просто добавляем -er)",
    },
    {
      left: "2. I come",
      right: "(late) than you.",
      answers: ["later"],
      explanation: "Правильно: late → later (на -e, добавляем -r)",
    },
    {
      left: "3. Summer is",
      right: "(hot) than spring.",
      answers: ["hotter"],
      explanation: "Правильно: hot → hotter (удваиваем согласную)",
    },
    {
      left: "4. My coffee is",
      right: "(hot) than ice-cream.",
      answers: ["hotter"],
      explanation: "Правильно: hot → hotter",
    },
    {
      left: "5. This game is",
      right: "(easy) than math.",
      answers: ["easier"],
      explanation: "Правильно: easy → easier (y меняется на i + er)",
    },
  ];

  return (
    <>
      <UiSection title="📐 Короткие прилагательные — 3 правила">
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-5">
            <p className="font-bold text-blue-900 mb-2">Правило 1: просто + -er</p>
            <p className="text-zinc-700 mb-2">nice → <strong>nicer</strong></p>
            <p className="text-sm text-zinc-600">
              → My cat is <strong>nicer than</strong> your dog.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-5">
            <p className="font-bold text-green-900 mb-2">Правило 2: на -e → + -r</p>
            <p className="text-zinc-700 mb-2">late → <strong>later</strong></p>
            <p className="text-sm text-zinc-600">
              → I come <strong>later than</strong> you.
            </p>
          </div>

          <div className="bg-amber-50 rounded-lg p-5">
            <p className="font-bold text-amber-900 mb-2">
              Правило 3: гласная+согласная → удваиваем
            </p>
            <p className="text-zinc-700 mb-2">hot → <strong>hotter</strong></p>
            <p className="text-sm text-zinc-600">
              → Summer is <strong>hotter than</strong> spring.
            </p>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Короткие прилагательные"
        instruction="Вставьте прилагательное в сравнительной форме из скобок (например: nice → nicer)."
        items={exercise1}
      />

      <UiSection title="💡 Больше примеров">
        <div className="bg-purple-50 rounded-lg p-4">
          <ul className="space-y-2 text-sm">
            <li>• Your joke is <strong>funnier than</strong> mine!</li>
            <li>• This pen is <strong>cheaper than</strong> that one.</li>
            <li>• My bag is <strong>heavier than</strong> yours.</li>
          </ul>
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
      right: "(difficult) than drawing.",
      answers: ["more difficult"],
      explanation: "Правильно: more difficult (3 слога, используем more)",
    },
    {
      left: "2. London is",
      right: "(expensive) than my city.",
      answers: ["more expensive"],
      explanation: "Правильно: more expensive",
    },
    {
      left: "3. My phone is",
      right: "(modern) than Dad's.",
      answers: ["more modern"],
      explanation: "Правильно: more modern",
    },
    {
      left: "4. This book is",
      right: "(interesting) than that film.",
      answers: ["more interesting"],
      explanation: "Правильно: more interesting",
    },
  ];

  return (
    <>
      <UiSection title="📚 Длинные прилагательные">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-indigo-900 mb-3">Определение</p>
          <p className="text-zinc-700 mb-3">
            Слово из 3+ слогов → <strong>more + слово + than</strong>
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-center text-xl">
              interesting → <strong className="text-indigo-600">more interesting</strong>
            </p>
            <p className="text-center text-sm text-zinc-600 mt-2">
              This book is <strong>more interesting than</strong> that film.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 6 примеров с длинными прилагательными">
        <div className="bg-zinc-50 rounded-lg p-5">
          <ol className="space-y-2">
            <li>1. English is <strong>more difficult than</strong> drawing.</li>
            <li>2. London is <strong>more expensive than</strong> my city.</li>
            <li>3. My phone is <strong>more modern than</strong> Dad&apos;s.</li>
            <li>4. Winter holidays are <strong>more exciting than</strong> summer.</li>
            <li>5. Pandas are <strong>more dangerous than</strong> they look.</li>
            <li>6. Her story is <strong>more boring than</strong> silence.</li>
          </ol>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Длинные прилагательные"
        instruction="Вставьте прилагательное в сравнительной форме, используя more (например: difficult → more difficult)."
        items={exercise2}
      />

      <UiSection title="💬 Диалог">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                A
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p>Is Moscow <strong>more beautiful than</strong> Paris?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                B
              </div>
              <div className="bg-white rounded-lg p-3 flex-1">
                <p>No, Paris is <strong>more beautiful</strong>!</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Исключения ===== */
function Step5() {
  const exercise3: FillItem[] = [
    {
      left: "1. Pizza is",
      right: "(good) than salad.",
      answers: ["better"],
      explanation: "Правильно: good → better (исключение!)",
    },
    {
      left: "2. My headache is",
      right: "(bad) than yours.",
      answers: ["worse"],
      explanation: "Правильно: bad → worse (исключение!)",
    },
    {
      left: "3. The shop is",
      right: "(far) than the park.",
      answers: ["farther", "further"],
      explanation: "Правильно: far → farther/further",
    },
    {
      left: "4. My marks are",
      right: "(good) than last month.",
      answers: ["better"],
      explanation: "Правильно: good → better",
    },
    {
      left: "5. This weather is",
      right: "(bad) than yesterday.",
      answers: ["worse"],
      explanation: "Правильно: bad → worse",
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
                good → <span className="text-green-600">better</span>
              </p>
              <p className="text-sm text-zinc-600 mt-1">
                My marks are <strong>better than</strong> last month.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-xl font-bold">
                bad → <span className="text-red-600">worse</span>
              </p>
              <p className="text-sm text-zinc-600 mt-1">
                This weather is <strong>worse than</strong> yesterday.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-xl font-bold">
                far → <span className="text-blue-600">farther</span>
              </p>
              <p className="text-sm text-zinc-600 mt-1">
                The shop is <strong>farther than</strong> the park.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 9 предложений с исключениями">
        <div className="bg-zinc-50 rounded-lg p-5">
          <ol className="space-y-2">
            <li>1. Pizza is <strong>better than</strong> salad.</li>
            <li>2. My headache is <strong>worse than</strong> yours.</li>
            <li>3. The Moon is <strong>farther than</strong> the Sun looks.</li>
            <li>4. His English is <strong>better than</strong> mine.</li>
            <li>5. Today is <strong>worse than</strong> yesterday.</li>
            <li>6. The cinema is <strong>farther than</strong> I thought.</li>
            <li>7. Your answer is <strong>better</strong>!</li>
            <li>8. The traffic is <strong>worse</strong> today.</li>
            <li>9. My house is <strong>farther</strong> from school.</li>
          </ol>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Исключения"
        instruction="Вставьте правильную форму исключения (good → better, bad → worse, far → farther)."
        items={exercise3}
      />

      <UiSection title="🎮 Мини-игра">
        <div className="bg-purple-50 rounded-lg p-5">
          <p className="font-semibold mb-3">Заполни пропуск:</p>
          <p className="text-lg">
            My English is <span className="text-purple-600 font-bold">________</span> than last year.
          </p>
          <p className="text-sm text-zinc-600 mt-2">
            (Подсказка: Выбери better или worse в зависимости от твоего прогресса!)
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
      left: "1. I / tall / my sister →",
      right: "",
      answers: ["I am taller than my sister", "I am taller than my sister."],
      explanation: "Правильно: I am taller than my sister.",
      wide: true,
    },
    {
      left: "2. Cats / fast / turtles →",
      right: "",
      answers: ["Cats are faster than turtles", "Cats are faster than turtles."],
      explanation: "Правильно: Cats are faster than turtles.",
      wide: true,
    },
    {
      left: "3. This bag / cheap / that one →",
      right: "",
      answers: ["This bag is cheaper than that one", "This bag is cheaper than that one."],
      explanation: "Правильно: This bag is cheaper than that one.",
      wide: true,
    },
    {
      left: "4. My phone / modern / yours →",
      right: "",
      answers: ["My phone is more modern than yours", "My phone is more modern than yours."],
      explanation: "Правильно: My phone is more modern than yours.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📐 Полная формула сравнительной степени">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-4">
          <div className="text-center mb-4">
            <div className="inline-block bg-white rounded-lg p-4 shadow-md">
              <p className="text-xl font-bold text-indigo-900">
                [Кто/что] + is/are + сравн.степень + <span className="text-red-600">than</span> + [кого/чего]
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="bg-white rounded-lg p-3 text-sm">
              <p className="font-bold text-blue-900 mb-1">Пример 1:</p>
              <p>Tom <span className="text-blue-600">is taller than</span> Anna.</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-sm">
              <p className="font-bold text-blue-900 mb-1">Пример 2:</p>
              <p>Cats <span className="text-blue-600">are faster than</span> dogs.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 12 готовых фраз">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-zinc-50 rounded-lg p-4">
            <ol className="space-y-2 text-sm">
              <li>1. I am <strong>taller than</strong> my sister.</li>
              <li>2. Cats are <strong>faster than</strong> turtles.</li>
              <li>3. This bag is <strong>cheaper than</strong> that one.</li>
              <li>4. Winter is <strong>colder than</strong> autumn.</li>
              <li>5. My phone is <strong>more modern than</strong> yours.</li>
              <li>6. English is <strong>more difficult than</strong> drawing.</li>
            </ol>
          </div>
          <div className="bg-zinc-50 rounded-lg p-4">
            <ol start={7} className="space-y-2 text-sm">
              <li>7. Coffee is <strong>hotter than</strong> tea.</li>
              <li>8. Summer is <strong>better than</strong> winter.</li>
              <li>9. This film is <strong>worse than</strong> that one.</li>
              <li>10. The park is <strong>farther than</strong> school.</li>
              <li>11. Pizza is <strong>tastier than</strong> soup.</li>
              <li>12. Dogs are <strong>friendlier than</strong> cats.</li>
            </ol>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Составь предложения"
        instruction="Составьте полное предложение в сравнительной степени (например: I / tall / sister → I am taller than my sister)."
        items={exercise4}
      />

      <UiSection title="❓ Вопросы">
        <div className="bg-blue-50 rounded-lg p-5">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-blue-900">Вопрос:</p>
              <p>Is your bike <strong>faster than</strong> mine?</p>
            </div>
            <div>
              <p className="font-semibold text-green-900">Ответ:</p>
              <p>Yes, it is <strong>faster</strong>!</p>
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
      left: "1. My house more big. →",
      right: "",
      answers: ["My house is bigger", "My house is bigger."],
      explanation: "Правильно: My house is bigger (не more big!)",
      wide: true,
    },
    {
      left: "2. She is beautifuller. →",
      right: "",
      answers: ["She is more beautiful", "She is more beautiful."],
      explanation: "Правильно: She is more beautiful (не beautifuller!)",
      wide: true,
    },
    {
      left: "3. I am gooder. →",
      right: "",
      answers: ["I am better", "I am better."],
      explanation: "Правильно: I am better (исключение!)",
      wide: true,
    },
    {
      left: "4. He tall than me. →",
      right: "",
      answers: ["He is taller than me", "He is taller than me."],
      explanation: "Правильно: He is taller than me (нужен глагол is!)",
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
                ❌ My house <del>more big</del>.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ My house is <strong>bigger</strong>.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-red-600 mb-2">
                ❌ She is <del>beautifuller</del>.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ She is <strong>more beautiful</strong>.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-red-600 mb-2">
                ❌ I am <del>gooder</del>.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ I am <strong>better</strong>.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-red-600 mb-2">
                ❌ This film <del>interesting than</del> that.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ This film is <strong>more interesting than</strong> that.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-red-600 mb-2">
                ❌ He <del>tall than</del> me.
              </p>
              <p className="text-green-600 font-semibold">
                ✅ He <strong>is taller than</strong> me.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🤔 Почему так?">
        <div className="bg-yellow-50 rounded-lg p-5">
          <p className="font-semibold text-yellow-900 mb-3">
            Русский язык vs Английский:
          </p>
          <p className="text-zinc-700">
            В русском: &quot;дом больше&quot; → кажется, что <strong>more</strong> везде подходит.
          </p>
          <p className="text-zinc-700 mt-2">
            В английском: короткие слова → <strong>-er</strong>, длинные → <strong>more</strong>
          </p>
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
                <td className="border border-zinc-300 p-3">more big</td>
                <td className="border border-zinc-300 p-3 bg-green-50"><strong>bigger</strong></td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">gooder</td>
                <td className="border border-zinc-300 p-3 bg-green-50"><strong>better</strong></td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">more better</td>
                <td className="border border-zinc-300 p-3 bg-green-50"><strong>better</strong></td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">He tall than me</td>
                <td className="border border-zinc-300 p-3 bg-green-50"><strong>He is taller than me</strong></td>
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
      left: "1. My dog / fat / your cat →",
      right: "",
      answers: ["My dog is fatter than your cat", "My dog is fatter than your cat."],
      explanation: "Правильно: My dog is fatter than your cat.",
      wide: true,
    },
    {
      left: "2. This book / interesting / that film →",
      right: "",
      answers: ["This book is more interesting than that film", "This book is more interesting than that film."],
      explanation: "Правильно: This book is more interesting than that film.",
      wide: true,
    },
    {
      left: "3. She is more thinner. →",
      right: "",
      answers: ["She is thinner", "She is thinner."],
      explanation: "Правильно: She is thinner (не more thinner!)",
      wide: true,
    },
    {
      left: "4. Winter / cold / summer? →",
      right: "",
      answers: ["Is winter colder than summer", "Is winter colder than summer?"],
      explanation: "Правильно: Is winter colder than summer?",
      wide: true,
    },
    {
      left: "5. My sister / young / me →",
      right: "",
      answers: ["My sister is younger than me", "My sister is younger than me."],
      explanation: "Правильно: My sister is younger than me.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📝 Упражнения — 20 примеров">
        <p className="text-zinc-700 mb-4">
          Потренируйтесь составлять предложения в сравнительной степени и исправлять ошибки.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Основные упражнения"
        instruction="Составьте предложения или исправьте ошибки. Пишите полное предложение."
        items={exercise6}
      />

      <UiSection title="✍️ Задание для самостоятельной работы">
        <div className="bg-blue-50 rounded-lg p-5">
          <p className="font-semibold text-blue-900 mb-3">
            Сделай 3 своих примера:
          </p>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">1.</span>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full border-b-2 border-blue-300 bg-transparent pb-1 focus:border-blue-600 outline-none"
                  placeholder="Напишите своё предложение..."
                />
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">2.</span>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full border-b-2 border-blue-300 bg-transparent pb-1 focus:border-blue-600 outline-none"
                  placeholder="Напишите своё предложение..."
                />
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">3.</span>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full border-b-2 border-blue-300 bg-transparent pb-1 focus:border-blue-600 outline-none"
                  placeholder="Напишите своё предложение..."
                />
              </div>
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="💡 Подсказка">
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-green-900">
            <strong>Совет:</strong> Сравните вещи вокруг вас! Телефон vs книга, стол vs стул,
            кот vs собака. Это поможет запомнить структуру.
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
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-purple-900 mb-2">Задание 1:</p>
              <p className="text-zinc-700">Выучи 3 исключения наизусть:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>good → better</li>
                <li>bad → worse</li>
                <li>far → farther</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-purple-900 mb-2">Задание 2:</p>
              <p className="text-zinc-700">
                Напиши 10 своих сравнений (о семье, друзьях, вещах).
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-purple-900 mb-2">Задание 3:</p>
              <p className="text-zinc-700">
                Сфотографируй 2 вещи и напиши: &quot;My pencil is <strong>longer than</strong> my eraser.&quot;
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="💬 5 готовых диалогов">
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>Is your phone <strong>more expensive than</strong> mine?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>Yes, it&apos;s <strong>more expensive</strong>!</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>Are you <strong>taller than</strong> Dad?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>No, Dad is <strong>taller</strong>!</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>Is English <strong>easier than</strong> Math?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>For me, yes! It&apos;s <strong>easier</strong>.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>Who is <strong>better</strong> at football?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>Max is <strong>better than</strong> Tom.</p>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">A:</span>
                <p>Is winter <strong>colder than</strong> autumn?</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-green-600">B:</span>
                <p>Yes, much <strong>colder</strong>!</p>
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
      left: "1. Какой телефон дороже?",
      right: "",
      answers: ["Samsung", "samsung", "A"],
      explanation: "Правильно: Samsung is more expensive.",
    },
    {
      left: "2. Какой меньше?",
      right: "",
      answers: ["Nokia", "nokia", "B"],
      explanation: "Правильно: Nokia is smaller.",
    },
    {
      left: "3. Какая камера лучше?",
      right: "",
      answers: ["Samsung", "samsung", "Samsung's", "A"],
      explanation: "Правильно: Samsung's camera is better.",
    },
    {
      left: "4. Какая батарея дольше живёт?",
      right: "",
      answers: ["Nokia", "nokia", "Nokia's", "B"],
      explanation: "Правильно: Nokia's battery is better.",
    },
  ];

  return (
    <>
      <UiSection title="📖 Большой текст: My Two Phones">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-4">
          <div className="prose max-w-none">
            <p className="mb-3">
              I have two phones: old Nokia and new Samsung.
            </p>
            <p className="mb-3">
              Samsung is <strong className="text-blue-600">more modern than</strong> Nokia.
              Nokia is <strong className="text-green-600">cheaper</strong> and{" "}
              <strong className="text-green-600">smaller</strong>.
              Samsung is <strong className="text-blue-600">bigger</strong>,{" "}
              <strong className="text-blue-600">faster</strong> and{" "}
              <strong className="text-blue-600">more expensive</strong>.
            </p>
            <p className="mb-3">
              The camera on Samsung is <strong className="text-blue-600">better than</strong> on Nokia.
              But Nokia&apos;s battery is <strong className="text-green-600">better</strong> — it lives 5 days!
              Samsung dies <strong className="text-red-600">faster than</strong> Nokia.
            </p>
            <p>
              Which phone is <strong>worse</strong>? None — both are cool!
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Перевод текста">
        <div className="bg-zinc-50 rounded-lg p-5 text-sm">
          <p className="mb-2">У меня два телефона: старая Nokia и новый Samsung.</p>
          <p className="mb-2">
            Samsung более современный, чем Nokia. Nokia дешевле и меньше.
            Samsung больше, быстрее и дороже.
          </p>
          <p className="mb-2">
            Камера на Samsung лучше, чем на Nokia. Но батарея Nokia лучше — она живёт 5 дней!
            Samsung разряжается быстрее, чем Nokia.
          </p>
          <p>Какой телефон хуже? Никакой — оба классные!</p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 ОГЭ-задание: Сопоставление"
        instruction="Ответьте на вопросы по тексту (напишите Samsung, Nokia, или подходящий ответ)."
        items={exercise7}
      />

      <UiSection title="✅ Полные ответы">
        <div className="bg-green-50 rounded-lg p-5">
          <ol className="space-y-2 text-sm">
            <li><strong>1. A</strong> - Samsung (более дорогой)</li>
            <li><strong>2. B</strong> - Nokia (меньше)</li>
            <li><strong>3. A</strong> - Samsung (лучше камера)</li>
            <li><strong>4. B</strong> - Nokia (батарея живёт 5 дней)</li>
            <li><strong>5. A</strong> - Samsung (быстрее разряжается)</li>
            <li><strong>6. A</strong> - Samsung (более современный)</li>
            <li><strong>7. C</strong> - None (оба хороши)</li>
            <li><strong>8. E</strong> - Better battery (лучше батарея)</li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 text-center">
          <p className="text-2xl font-bold text-green-900 mb-3">
            Вы завершили тему &quot;Сравнительная степень&quot;! 🎊
          </p>
          <p className="text-zinc-700 mb-4">
            Теперь вы можете сравнивать людей, вещи и явления на английском языке!
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-sm text-zinc-600">Переходите к следующей теме:</p>
            <p className="text-lg font-bold text-indigo-900 mt-1">
              Превосходная степень (The Superlative Degree)
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

