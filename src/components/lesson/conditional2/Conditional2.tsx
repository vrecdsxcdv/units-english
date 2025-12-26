"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Conditional2({ step }: Props) {
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
    case 11:
      return <Step11 />;
    case 12:
      return <Step12 />;
    case 13:
      return <Step13 />;
    case 14:
      return <Step14 />;
    default:
      return <Step1 />;
  }
}

/* ========== ШАГ 1: Что такое Second Conditional ========== */
function Step1() {
  return (
    <>
      <UiSection title="🌠 Second Conditional — Нереальное настоящее">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-6 border-2 border-purple-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">💭</div>
            <h2 className="text-3xl font-bold text-purple-900 mb-3">
              Second Conditional
            </h2>
            <p className="text-xl text-purple-700">
              Нереальные и маловероятные ситуации
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              🎯 Главная идея:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed">
              Second Conditional описывает{" "}
              <strong>
                нереальные, воображаемые или маловероятные ситуации
              </strong>{" "}
              в настоящем или будущем. Это мечты, фантазии, советы и ситуации
              "если бы да кабы".
            </p>
          </div>

          <div className="bg-purple-100 rounded-lg p-5 border-2 border-purple-400">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              💫 Схема нереального:
            </p>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">💭</div>
                  <p className="text-xs font-bold text-purple-900">
                    IF (ЕСЛИ БЫ)
                  </p>
                  <p className="text-xs text-zinc-600">Нереальное условие</p>
                </div>
                <div className="text-3xl">→</div>
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">✨</div>
                  <p className="text-xs font-bold text-pink-900">WOULD (БЫ)</p>
                  <p className="text-xs text-zinc-600">Нереальный результат</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-purple-50 rounded">
                <p className="text-sm text-center">
                  <strong>Пример:</strong>{" "}
                  <span className="text-purple-700 font-bold">
                    If I had wings
                  </span>
                  , I <span className="text-pink-700 font-bold">would fly</span>
                  .
                </p>
                <p className="text-xs text-center text-zinc-600 mt-1">
                  (Если бы у меня были крылья, я бы летал — но их нет!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔍 Когда использовать Second Conditional">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            {
              icon: "💭",
              title: "Воображаемые ситуации",
              desc: "То, что не соответствует реальности сейчас",
              example: "If I were rich, I would buy a yacht.",
              ru: "Если бы я был богатым (но я не богат).",
            },
            {
              icon: "🌟",
              title: "Мечты и желания",
              desc: "Что бы вы хотели, но это маловероятно",
              example: "If I could fly, I would travel the world.",
              ru: "Если бы я мог летать (но не могу).",
            },
            {
              icon: "💡",
              title: "Советы",
              desc: "Что бы вы сделали на месте другого",
              example: "If I were you, I would accept the offer.",
              ru: "На твоём месте я бы принял предложение.",
            },
            {
              icon: "🎲",
              title: "Маловероятные события",
              desc: "Теоретически возможно, но шансы малы",
              example: "If I won the lottery, I would quit my job.",
              ru: "Если бы я выиграл в лотерею (шанс мал).",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-purple-200"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-purple-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-700">{item.desc}</p>
                </div>
              </div>
              <div className="bg-purple-50 rounded p-3 mb-2">
                <p className="text-sm font-semibold">{item.example}</p>
              </div>
              <p className="text-xs text-zinc-600">{item.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📊 Сравнение с русским языком">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            Как это работает в русском?
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-indigo-900 mb-3">
              💡 В русском используем частицу "БЫ"!
            </p>
            <p className="text-zinc-700 mb-3">
              Мы добавляем "бы" к глаголу в прошедшем времени:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>
                <strong>"Если бы + глагол (прошедшее)"</strong>
              </li>
              <li>
                <strong>"Я бы + глагол (прошедшее)"</strong>
              </li>
              <li>
                Форма одинакова для всех времён (настоящее/будущее/прошлое)
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <p className="font-bold text-purple-900 mb-2">🇬🇧 English:</p>
              <p className="text-sm mb-1">
                If I <strong>had</strong> money, I <strong>would buy</strong> a
                car.
              </p>
              <p className="text-xs text-purple-700">
                (Past Simple + would + V1)
              </p>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <p className="font-bold text-pink-900 mb-2">🇷🇺 Русский:</p>
              <p className="text-sm mb-1">
                Если бы у меня <strong>были</strong> деньги, я{" "}
                <strong>бы купил</strong> машину.
              </p>
              <p className="text-xs text-pink-700">(Прошедшее + "бы")</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Нереальные ситуации">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "if I were you",
              transcr: "/ɪf aɪ wɜː juː/",
              translation: "на твоём месте",
            },
            {
              word: "imagine",
              transcr: "/ɪˈmædʒɪn/",
              translation: "представь",
            },
            {
              word: "suppose",
              transcr: "/səˈpəʊz/",
              translation: "предположим",
            },
            {
              word: "dream",
              transcr: "/driːm/",
              translation: "мечта, мечтать",
            },
            {
              word: "wish",
              transcr: "/wɪʃ/",
              translation: "желание, желать",
            },
            {
              word: "lottery",
              transcr: "/ˈlɒtəri/",
              translation: "лотерея",
            },
            {
              word: "millionaire",
              transcr: "/ˌmɪljəˈneə/",
              translation: "миллионер",
            },
            {
              word: "change",
              transcr: "/tʃeɪndʒ/",
              translation: "изменить",
            },
            {
              word: "opportunity",
              transcr: "/ˌɒpəˈtjuːnəti/",
              translation: "возможность",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-purple-400"
            >
              <p className="font-bold text-purple-900 text-lg">{item.word}</p>
              <p className="text-xs text-purple-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: Формула Second Conditional ========== */
function Step2() {
  return (
    <>
      <UiSection title="📐 Формула Second Conditional">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-6 border-2 border-purple-400">
          <h3 className="text-2xl font-bold text-purple-900 text-center mb-6">
            Формула нереальных условий
          </h3>

          <div className="bg-white rounded-xl p-6 mb-6 border-2 border-purple-300">
            <div className="text-center">
              <p className="text-3xl font-mono font-bold text-purple-900 mb-4">
                If + Past Simple, would + V1
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-purple-50 rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">If-часть</p>
                  <p className="text-xs text-zinc-600">
                    Past Simple
                    <br />
                    (но о настоящем/будущем!)
                  </p>
                </div>
                <div className="bg-pink-50 rounded p-3">
                  <p className="font-bold text-pink-900 mb-1">Result</p>
                  <p className="text-xs text-zinc-600">
                    would + V1
                    <br />
                    (нереальный результат)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mb-4">
            <p className="font-bold text-amber-900 mb-2">⚠️ Важно помнить:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • If-часть: <strong>Past Simple</strong>, НО говорим о
                настоящем/будущем!
              </li>
              <li>
                • Result: <strong>would + инфинитив</strong> (не will!)
              </li>
              <li>
                • С I/he/she/it чаще используем <strong>were</strong> (не was)
              </li>
              <li>• Вероятность &lt;50% (нереально или маловероятно)</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
            <p className="font-bold text-green-900 mb-2">
              ✅ Особенность: "were" для всех лиц!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              В Second Conditional принято использовать <strong>were</strong>{" "}
              для всех местоимений:
            </p>
            <div className="space-y-1 text-sm">
              <p>
                ✓ If I <strong>were</strong> rich... (формально правильно)
              </p>
              <p className="text-zinc-600">
                (Хотя "If I was" тоже встречается в разговорной речи)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📋 Таблица спряжения">
        <div className="overflow-x-auto">
          <table className="w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-100 to-pink-100">
                <th className="border-2 border-purple-300 px-4 py-3 text-left">
                  Местоимение
                </th>
                <th className="border-2 border-purple-300 px-4 py-3 text-left">
                  If-часть (Past Simple)
                </th>
                <th className="border-2 border-purple-300 px-4 py-3 text-left">
                  Result (would + V1)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { subj: "I", ifPart: "had", result: "would buy" },
                { subj: "You", ifPart: "were", result: "would travel" },
                { subj: "He/She/It", ifPart: "knew", result: "would tell" },
                { subj: "We", ifPart: "could", result: "would help" },
                { subj: "They", ifPart: "lived", result: "would visit" },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-purple-50" : ""}>
                  <td className="border-2 border-purple-200 px-4 py-3">
                    {row.subj}
                  </td>
                  <td className="border-2 border-purple-200 px-4 py-3">
                    {row.ifPart}
                  </td>
                  <td className="border-2 border-purple-200 px-4 py-3">
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="🎯 Примеры Second Conditional">
        <div className="space-y-4">
          {[
            {
              category: "💰 Деньги и богатство",
              examples: [
                {
                  en: "If I won the lottery, I would quit my job.",
                  ru: "Если бы я выиграл в лотерею, я бы уволился с работы.",
                },
                {
                  en: "If she were a millionaire, she would buy an island.",
                  ru: "Если бы она была миллионершей, она бы купила остров.",
                },
                {
                  en: "If we had more money, we would travel more often.",
                  ru: "Если бы у нас было больше денег, мы бы чаще путешествовали.",
                },
              ],
            },
            {
              category: "🌍 Путешествия и мечты",
              examples: [
                {
                  en: "If I could fly, I would visit every country.",
                  ru: "Если бы я мог летать, я бы посетил каждую страну.",
                },
                {
                  en: "If they lived in Paris, they would learn French.",
                  ru: "Если бы они жили в Париже, они бы учили французский.",
                },
                {
                  en: "If he had more time, he would read more books.",
                  ru: "Если бы у него было больше времени, он бы читал больше книг.",
                },
              ],
            },
            {
              category: "💡 Советы (If I were you)",
              examples: [
                {
                  en: "If I were you, I would accept the job offer.",
                  ru: "На твоём месте я бы принял предложение о работе.",
                },
                {
                  en: "If I were you, I wouldn't worry about it.",
                  ru: "На твоём месте я бы не беспокоился об этом.",
                },
                {
                  en: "If I were you, I would apologize.",
                  ru: "На твоём месте я бы извинился.",
                },
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-purple-200"
            >
              <div className="bg-purple-50 rounded p-3 mb-3">
                <p className="font-bold text-purple-900">{section.category}</p>
              </div>
              <div className="space-y-3">
                {section.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="bg-purple-50/30 rounded p-3 border-l-4 border-purple-400"
                  >
                    <p className="text-sm font-semibold">{ex.en}</p>
                    <p className="text-xs text-zinc-600 mt-1">{ex.ru}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Мечты и желания">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "win the lottery",
              transcr: "/wɪn ðə ˈlɒtəri/",
              translation: "выиграть в лотерею",
            },
            {
              word: "quit a job",
              transcr: "/kwɪt ə dʒɒb/",
              translation: "уволиться с работы",
            },
            {
              word: "buy an island",
              transcr: "/baɪ ən ˈaɪlənd/",
              translation: "купить остров",
            },
            {
              word: "travel the world",
              transcr: "/ˈtrævl ðə wɜːld/",
              translation: "путешествовать по миру",
            },
            {
              word: "learn a language",
              transcr: "/lɜːn ə ˈlæŋɡwɪdʒ/",
              translation: "выучить язык",
            },
            {
              word: "accept an offer",
              transcr: "/əkˈsept ən ˈɒfə/",
              translation: "принять предложение",
            },
            {
              word: "apologize",
              transcr: "/əˈpɒlədʒaɪz/",
              translation: "извиниться",
            },
            {
              word: "worry about",
              transcr: "/ˈwʌri əˈbaʊt/",
              translation: "беспокоиться о",
            },
            {
              word: "have time",
              transcr: "/hæv taɪm/",
              translation: "иметь время",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-purple-400"
            >
              <p className="font-bold text-purple-900 text-lg">{item.word}</p>
              <p className="text-xs text-purple-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 3: Практика Second Conditional ========== */
function Step3() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "a million dollars, I would buy a house. (have)",
      answers: ["had"],
      explanation: "If-часть → Past Simple (had).",
      wide: true,
    },
    {
      left: "2. If she",
      right: "more time, she would study Spanish. (have)",
      answers: ["had"],
      explanation: "Нереальная ситуация → Past Simple.",
    },
    {
      left: "3. If I were you, I",
      right: "that job. (accept)",
      answers: ["would accept", "'d accept"],
      explanation: "Совет → would + V1.",
    },
    {
      left: "4. If they",
      right: "in London, they would visit us. (live)",
      answers: ["lived"],
      explanation: "Нереальная ситуация (они не живут) → Past Simple.",
      wide: true,
    },
    {
      left: "5. If he",
      right: "the truth, he would tell you. (know)",
      answers: ["knew"],
      explanation: "Нереальное условие → Past Simple (knew).",
    },
    {
      left: "6. If we",
      right: "fly, we would travel around the world. (can)",
      answers: ["could"],
      explanation: "Can в Past Simple → could.",
      wide: true,
    },
    {
      left: "7. If I",
      right: "rich, I would help poor people. (be)",
      answers: ["were", "was"],
      explanation: "Формально were, но was тоже допустим.",
    },
    {
      left: "8. If you studied harder, you",
      right: "better grades. (get)",
      answers: ["would get", "'d get"],
      explanation: "Result → would + get.",
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Second Conditional">
        <div className="bg-gradient-to-r from-purple-50 to-white rounded-lg p-5 mb-4 border border-purple-200">
          <p className="text-sm text-zinc-700 mb-3">
            Поставьте глагол в <strong>Past Simple</strong> (if-часть) или{" "}
            <strong>would + V1</strong> (result). Все ситуации нереальные!
          </p>
          <p className="text-sm font-semibold text-purple-900">
            Цель: 7/8 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Заполните пропуски"
          instruction="Вставьте глагол в правильной форме."
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 4: Отрицание в Second Conditional ========== */
function Step4() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "so busy, I would help you. (not be)",
      answers: ["weren't", "wasn't", "were not", "was not"],
      explanation: "Отрицание: were not / weren't.",
      wide: true,
    },
    {
      left: "2. If they",
      right: "so expensive, I would buy them. (not be)",
      answers: ["weren't", "wasn't", "were not", "was not"],
      explanation: "They → множественное, но формально were not.",
    },
    {
      left: "3. If she",
      right: "so far away, we would visit her. (not live)",
      answers: ["didn't live", "did not live"],
      explanation: "Отрицание в Past Simple: didn't + V1.",
      wide: true,
    },
    {
      left: "4. If I were you, I",
      right: "that decision. (not make)",
      answers: ["wouldn't make", "would not make"],
      explanation: "Отрицательный совет: wouldn't + V1.",
    },
    {
      left: "5. If he",
      right: "to work on Sundays, he would be happier. (not have)",
      answers: ["didn't have", "did not have"],
      explanation: "Нереальное условие → didn't have.",
      wide: true,
    },
    {
      left: "6. If we",
      right: "so much homework, we would go out. (not have)",
      answers: ["didn't have", "did not have"],
      explanation: "Отрицательное условие: didn't have.",
    },
  ];

  return (
    <>
      <UiSection title="❌ Отрицание в Second Conditional">
        <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg p-6 border-2 border-rose-300 mb-6">
          <h3 className="text-xl font-bold text-rose-900 mb-4">
            Как строить отрицание?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-rose-900 mb-2">❌ If-часть:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>didn't + V1</strong>
                </li>
                <li>
                  • <strong>weren't / wasn't</strong>
                </li>
                <li>
                  • <strong>couldn't</strong>
                </li>
              </ul>
              <div className="bg-rose-50 rounded p-2 mt-2">
                <p className="text-xs">
                  If I <strong>didn't have</strong> a car...
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-orange-900 mb-2">❌ Result:</p>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • <strong>wouldn't + V1</strong>
                </li>
                <li>
                  • <strong>would not + V1</strong>
                </li>
              </ul>
              <div className="bg-orange-50 rounded p-2 mt-2">
                <p className="text-xs">
                  ..., I <strong>wouldn't</strong> go there.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
            <p className="font-bold text-amber-900 mb-2">💡 Примеры:</p>
            <div className="space-y-2 text-sm">
              <p>
                ✓ If I <strong>weren't</strong> so tired, I{" "}
                <strong>would go</strong> out.
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Если бы я не был таким уставшим, я бы пошёл гулять.
              </p>
              <p>
                ✓ If she <strong>didn't work</strong> on Saturdays, she{" "}
                <strong>would spend</strong> time with us.
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Если бы она не работала по субботам, она бы проводила с нами
                время.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Отрицание"
        instruction="Поставьте глагол в отрицательную форму."
        items={items}
        wideInputs
      />

      <UiSection title="📝 Словарь: Условия и обстоятельства">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "busy", transcr: "/ˈbɪzi/", translation: "занятой" },
            {
              word: "expensive",
              transcr: "/ɪkˈspensɪv/",
              translation: "дорогой",
            },
            { word: "far away", transcr: "/fɑː əˈweɪ/", translation: "далеко" },
            { word: "decision", transcr: "/dɪˈsɪʒn/", translation: "решение" },
            {
              word: "work on",
              transcr: "/wɜːk ɒn/",
              translation: "работать над",
            },
            {
              word: "homework",
              transcr: "/ˈhəʊmwɜːk/",
              translation: "домашняя работа",
            },
            {
              word: "go out",
              transcr: "/ɡəʊ aʊt/",
              translation: "пойти гулять",
            },
            { word: "tired", transcr: "/taɪəd/", translation: "уставший" },
            {
              word: "spend time",
              transcr: "/spend taɪm/",
              translation: "проводить время",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-rose-400"
            >
              <p className="font-bold text-rose-900 text-lg">{item.word}</p>
              <p className="text-xs text-rose-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: Вопросы в Second Conditional ========== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "1. What would you do if you",
      right: "a million dollars? (win)",
      answers: ["won"],
      explanation: "Вопрос с what → if-часть остаётся Past Simple.",
      wide: true,
    },
    {
      left: "2. Where would you live if you",
      right: "choose any country? (can)",
      answers: ["could"],
      explanation: "Can → could в вопросе.",
    },
    {
      left: "3. Would you travel the world if you",
      right: "enough money? (have)",
      answers: ["had"],
      explanation: "Вопрос Yes/No: Would you..., if you had...?",
      wide: true,
    },
    {
      left: "4. What",
      right: "you buy if you were rich? (would)",
      answers: ["would"],
      explanation: "What would you...? — стандартный порядок.",
    },
    {
      left: "5. If you",
      right: "anywhere, where would you go? (can/go)",
      answers: ["could go"],
      explanation: "Could go — способность в нереальной ситуации.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="❓ Вопросы в Second Conditional">
        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-lg p-6 border-2 border-sky-300 mb-6">
          <h3 className="text-xl font-bold text-sky-900 mb-4">
            Как задавать вопросы?
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-sky-900 mb-3">
              1️⃣ Вопросы с WH-словами:
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>What/Where/Who + would + подлежащее + V1</strong>, if +
                Past Simple?
              </p>
              <div className="bg-sky-50 rounded p-3 mt-2">
                <p className="font-semibold">
                  <strong>What</strong> would you do if you won the lottery?
                </p>
                <p className="text-xs text-zinc-600">
                  Что бы ты сделал, если бы выиграл в лотерею?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-cyan-900 mb-3">2️⃣ Yes/No вопросы:</p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Would + подлежащее + V1</strong>, if + Past Simple?
              </p>
              <div className="bg-cyan-50 rounded p-3 mt-2">
                <p className="font-semibold">
                  <strong>Would</strong> you travel the world if you had enough
                  money?
                </p>
                <p className="text-xs text-zinc-600">
                  Ты бы путешествовал по миру, если бы у тебя было достаточно
                  денег?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
            <p className="font-bold text-amber-900 mb-2">💡 Ещё примеры:</p>
            <div className="space-y-2 text-sm">
              <p>
                ✓ <strong>Where</strong> would you live if you could choose?
              </p>
              <p>
                ✓ <strong>Who</strong> would you meet if you could meet anyone?
              </p>
              <p>
                ✓ <strong>Would</strong> you accept the offer if you were me?
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Вопросы"
        instruction="Составьте вопрос в Second Conditional."
        items={items}
        wideInputs
      />

      <UiSection title="📝 Словарь: Вопросительные слова и фразы">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "What would you do?",
              transcr: "/wɒt wʊd juː duː/",
              translation: "Что бы ты сделал?",
            },
            {
              word: "Where would you go?",
              transcr: "/weə wʊd juː ɡəʊ/",
              translation: "Куда бы ты пошёл?",
            },
            {
              word: "Who would you meet?",
              transcr: "/huː wʊd juː miːt/",
              translation: "Кого бы ты встретил?",
            },
            { word: "choose", transcr: "/tʃuːz/", translation: "выбирать" },
            { word: "enough", transcr: "/ɪˈnʌf/", translation: "достаточно" },
            { word: "anyone", transcr: "/ˈeniwʌn/", translation: "кто угодно" },
            {
              word: "anywhere",
              transcr: "/ˈeniweə/",
              translation: "куда угодно",
            },
            { word: "accept", transcr: "/əkˈsept/", translation: "принять" },
            { word: "offer", transcr: "/ˈɒfə/", translation: "предложение" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-sky-400"
            >
              <p className="font-bold text-sky-900 text-lg">{item.word}</p>
              <p className="text-xs text-sky-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 6: Модальные глаголы в Second Conditional ========== */
function Step6() {
  const items: FillItem[] = [
    {
      left: "1. If I had more time, I",
      right: "learn Japanese. (could)",
      answers: ["could"],
      explanation: "could = был бы способен.",
      wide: true,
    },
    {
      left: "2. If she were here, she",
      right: "help us. (might)",
      answers: ["might"],
      explanation: "might = возможно, помогла бы.",
    },
    {
      left: "3. If you studied harder, you",
      right: "pass the exam. (could)",
      answers: ["could"],
      explanation: "could = смог бы.",
      wide: true,
    },
    {
      left: "4. If I were you, I",
      right: "see a doctor. (should)",
      answers: ["should"],
      explanation: "should = следовало бы (совет).",
    },
    {
      left: "5. If we had a car, we",
      right: "visit them more often. (could)",
      answers: ["could"],
      explanation: "could = могли бы.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🔧 Модальные глаголы в Second Conditional">
        <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-lg p-6 border-2 border-violet-300 mb-6">
          <h3 className="text-xl font-bold text-violet-900 mb-4">
            Замена would на модальные глаголы
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="text-zinc-700 mb-3">
              Вместо <strong>would</strong> можно использовать модальные
              глаголы:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-2xl">💪</span>
                <div>
                  <strong>could</strong> — мог бы, был бы способен
                  <p className="text-xs text-zinc-600">
                    If I had wings, I <strong>could</strong> fly.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">🤔</span>
                <div>
                  <strong>might</strong> — возможно, может быть
                  <p className="text-xs text-zinc-600">
                    If she were free, she <strong>might</strong> come.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl">💡</span>
                <div>
                  <strong>should</strong> — следовало бы (совет)
                  <p className="text-xs text-zinc-600">
                    If I were you, I <strong>should</strong> apologize.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-violet-100 rounded-lg p-4 border border-violet-300">
            <p className="font-bold text-violet-900 mb-2">🎯 Разница:</p>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                <strong>would</strong> → определённый результат (100%)
              </p>
              <p>
                <strong>could</strong> → возможность (способность)
              </p>
              <p>
                <strong>might</strong> → неуверенность (~50%)
              </p>
              <p>
                <strong>should</strong> → рекомендация
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Модальные глаголы"
        instruction="Вставьте подходящий модальный глагол."
        items={items}
        wideInputs
      />

      <UiSection title="📝 Словарь: Способности и возможности">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "ability",
              transcr: "/əˈbɪləti/",
              translation: "способность",
            },
            {
              word: "opportunity",
              transcr: "/ˌɒpəˈtjuːnəti/",
              translation: "возможность",
            },
            {
              word: "pass an exam",
              transcr: "/pɑːs ən ɪɡˈzæm/",
              translation: "сдать экзамен",
            },
            {
              word: "see a doctor",
              transcr: "/siː ə ˈdɒktə/",
              translation: "пойти к врачу",
            },
            { word: "visit", transcr: "/ˈvɪzɪt/", translation: "посещать" },
            { word: "more often", transcr: "/mɔː ˈɒfn/", translation: "чаще" },
            { word: "wings", transcr: "/wɪŋz/", translation: "крылья" },
            { word: "free", transcr: "/friː/", translation: "свободный" },
            {
              word: "apologize",
              transcr: "/əˈpɒlədʒaɪz/",
              translation: "извиниться",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-violet-400"
            >
              <p className="font-bold text-violet-900 text-lg">{item.word}</p>
              <p className="text-xs text-violet-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 7: Unless в Second Conditional ========== */
function Step7() {
  const items: FillItem[] = [
    {
      left: "1. I wouldn't go",
      right: "you came with me. (unless)",
      answers: ["unless"],
      explanation: "unless = если не.",
      wide: true,
    },
    {
      left: "2. Unless she",
      right: "harder, she wouldn't pass. (study)",
      answers: ["studied"],
      explanation: "Unless + Past Simple (в Second Conditional).",
    },
    {
      left: "3. They wouldn't buy it",
      right: "it were cheaper. (unless)",
      answers: ["unless"],
      explanation: "unless = if not (если бы не).",
      wide: true,
    },
    {
      left: "4. Unless he",
      right: "me, I wouldn't know. (tell)",
      answers: ["told"],
      explanation: "Unless + told → если бы он не сказал.",
    },
    {
      left: "5. I wouldn't trust him",
      right: "I knew him well. (unless)",
      answers: ["unless"],
      explanation: "unless = только если не.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🚫 Unless в Second Conditional">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-300 mb-6">
          <h3 className="text-xl font-bold text-orange-900 mb-4">
            Unless = If not (Если не)
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-orange-900 mb-3">💡 Формула:</p>
            <p className="text-sm text-zinc-700 mb-2">
              <strong>Unless + Past Simple, would + V1</strong>
            </p>
            <p className="text-sm text-zinc-700">
              Unless = <strong>if not</strong> (но короче и элегантнее!)
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mb-4">
            <p className="font-bold text-orange-900 mb-2">🔄 Сравнение:</p>
            <div className="space-y-2 text-sm">
              <p>
                ✓ If you <strong>didn't</strong> help me, I{" "}
                <strong>wouldn't</strong> finish.
              </p>
              <p>
                ✓ <strong>Unless</strong> you helped me, I{" "}
                <strong>wouldn't</strong> finish.
              </p>
              <p className="text-xs text-zinc-600 mt-2">
                (Если бы ты не помог, я бы не закончил)
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
            <p className="font-bold text-amber-900 mb-2">⚠️ Важно:</p>
            <p className="text-sm text-zinc-700">
              После <strong>unless</strong> НЕ используем отрицание!
            </p>
            <div className="mt-2 space-y-1 text-sm">
              <p className="text-red-700">❌ Unless you didn't help...</p>
              <p className="text-green-700">✅ Unless you helped...</p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Unless"
        instruction="Вставьте unless или глагол в Past Simple."
        items={items}
        wideInputs
      />

      <UiSection title="📝 Словарь: Условия и исключения">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "unless", transcr: "/ʌnˈles/", translation: "если не" },
            { word: "except", transcr: "/ɪkˈsept/", translation: "кроме" },
            { word: "trust", transcr: "/trʌst/", translation: "доверять" },
            { word: "come with", transcr: "/kʌm wɪð/", translation: "пойти с" },
            { word: "pass", transcr: "/pɑːs/", translation: "пройти, сдать" },
            { word: "cheaper", transcr: "/ˈtʃiːpə/", translation: "дешевле" },
            { word: "tell", transcr: "/tel/", translation: "сказать" },
            {
              word: "know well",
              transcr: "/nəʊ wel/",
              translation: "хорошо знать",
            },
            {
              word: "condition",
              transcr: "/kənˈdɪʃn/",
              translation: "условие",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-orange-400"
            >
              <p className="font-bold text-orange-900 text-lg">{item.word}</p>
              <p className="text-xs text-orange-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 8: Сравнение First vs Second Conditional ========== */
function Step8() {
  return (
    <>
      <UiSection title="⚖️ First vs Second Conditional">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
          <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
            В чём разница?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-100 rounded-lg p-5 border-2 border-blue-400">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                ✅ First Conditional
              </h4>
              <ul className="text-sm text-zinc-700 space-y-2 list-disc pl-4">
                <li>
                  <strong>Формула:</strong> If + PS, will + V1
                </li>
                <li>
                  <strong>Вероятность:</strong> 50%+ (реально)
                </li>
                <li>
                  <strong>Время:</strong> Будущее
                </li>
                <li>
                  <strong>Примеры:</strong> планы, предсказания
                </li>
              </ul>
              <div className="bg-white rounded p-3 mt-3">
                <p className="text-sm font-semibold">
                  If it <strong>rains</strong>, I <strong>will</strong> stay
                  home.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (Может пойти дождь — реально)
                </p>
              </div>
            </div>

            <div className="bg-purple-100 rounded-lg p-5 border-2 border-purple-400">
              <h4 className="text-xl font-bold text-purple-900 mb-3">
                💭 Second Conditional
              </h4>
              <ul className="text-sm text-zinc-700 space-y-2 list-disc pl-4">
                <li>
                  <strong>Формула:</strong> If + Past, would + V1
                </li>
                <li>
                  <strong>Вероятность:</strong> &lt;50% (нереально)
                </li>
                <li>
                  <strong>Время:</strong> Настоящее/Будущее
                </li>
                <li>
                  <strong>Примеры:</strong> мечты, фантазии
                </li>
              </ul>
              <div className="bg-white rounded p-3 mt-3">
                <p className="text-sm font-semibold">
                  If I <strong>had</strong> wings, I <strong>would</strong> fly.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (У меня нет крыльев — нереально)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
            <p className="font-bold text-amber-900 mb-3">
              🎯 Одинаковая ситуация:
            </p>
            {[
              {
                situation: "💰 Деньги",
                first:
                  "If I have money, I will buy a car. (Реально — я жду зарплату)",
                second:
                  "If I had money, I would buy a car. (Нереально — сейчас денег нет)",
              },
              {
                situation: "🌤️ Погода",
                first:
                  "If it's sunny, we will go to the beach. (Возможно будет солнечно)",
                second:
                  "If it were sunny, we would go to the beach. (Но сейчас идёт дождь)",
              },
              {
                situation: "⏰ Время",
                first:
                  "If I have time, I will visit you. (Возможно у меня будет время)",
                second: "If I had time, I would visit you. (Но я очень занят)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 mb-3">
                <p className="font-bold text-zinc-900 mb-2">{item.situation}</p>
                <div className="space-y-2">
                  <div className="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                    <p className="text-sm">
                      <strong>First:</strong> {item.first}
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded p-3 border-l-4 border-purple-400">
                    <p className="text-sm">
                      <strong>Second:</strong> {item.second}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Вероятность и реальность">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "likely", transcr: "/ˈlaɪkli/", translation: "вероятный" },
            {
              word: "unlikely",
              transcr: "/ʌnˈlaɪkli/",
              translation: "маловероятный",
            },
            {
              word: "possible",
              transcr: "/ˈpɒsəbl/",
              translation: "возможный",
            },
            {
              word: "impossible",
              transcr: "/ɪmˈpɒsəbl/",
              translation: "невозможный",
            },
            {
              word: "reality",
              transcr: "/riˈæləti/",
              translation: "реальность",
            },
            { word: "dream", transcr: "/driːm/", translation: "мечта" },
            { word: "fantasy", transcr: "/ˈfæntəsi/", translation: "фантазия" },
            {
              word: "prediction",
              transcr: "/prɪˈdɪkʃn/",
              translation: "предсказание",
            },
            {
              word: "imagination",
              transcr: "/ɪˌmædʒɪˈneɪʃn/",
              translation: "воображение",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-blue-400"
            >
              <p className="font-bold text-blue-900 text-lg">{item.word}</p>
              <p className="text-xs text-blue-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 9: Практика First vs Second ========== */
function Step9() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "time tomorrow, I will call you. (have) — реально",
      answers: ["have"],
      explanation: "First Conditional (реальная ситуация) → Present Simple.",
      wide: true,
    },
    {
      left: "2. If I",
      right: "a million dollars, I would buy a yacht. (have) — нереально",
      answers: ["had"],
      explanation: "Second Conditional (нереально) → Past Simple.",
      wide: true,
    },
    {
      left: "3. If it",
      right: "sunny tomorrow, we will go to the beach. (be) — возможно",
      answers: ["is", "'s"],
      explanation: "First Conditional (возможно) → Present Simple.",
      wide: true,
    },
    {
      left: "4. If I",
      right: "you, I would apologize. (be) — совет",
      answers: ["were", "was"],
      explanation: "Second Conditional (совет) → Past Simple.",
    },
    {
      left: "5. If she",
      right: "harder, she will pass the exam. (study) — реально",
      answers: ["studies"],
      explanation: "First Conditional → Present Simple.",
      wide: true,
    },
    {
      left: "6. If he",
      right: "English, he would move to London. (speak) — нереально",
      answers: ["spoke"],
      explanation: "Second Conditional (он не говорит) → Past Simple.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎯 Практика: Выбери правильное условие">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-sky-50 rounded-lg p-5 mb-4 border-2 border-purple-200">
          <p className="text-sm text-zinc-700 mb-3">
            Определите, реальная это ситуация (First) или нереальная (Second), и
            вставьте глагол в правильную форму. Подсказки в скобках!
          </p>
          <p className="text-sm font-semibold text-purple-900">
            Цель: 5/6 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="First или Second?"
          instruction="Вставьте глагол в правильной форме."
          items={items}
          wideInputs
        />
      </UiSection>

      <UiSection title="📝 Словарь: Действия и события">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "call", transcr: "/kɔːl/", translation: "позвонить" },
            {
              word: "buy a yacht",
              transcr: "/baɪ ə jɒt/",
              translation: "купить яхту",
            },
            {
              word: "go to the beach",
              transcr: "/ɡəʊ tə ðə biːtʃ/",
              translation: "пойти на пляж",
            },
            {
              word: "apologize",
              transcr: "/əˈpɒlədʒaɪz/",
              translation: "извиниться",
            },
            {
              word: "pass an exam",
              transcr: "/pɑːs ən ɪɡˈzæm/",
              translation: "сдать экзамен",
            },
            {
              word: "move to",
              transcr: "/muːv tuː/",
              translation: "переехать в",
            },
            {
              word: "speak English",
              transcr: "/spiːk ˈɪŋɡlɪʃ/",
              translation: "говорить по-английски",
            },
            {
              word: "study hard",
              transcr: "/ˈstʌdi hɑːd/",
              translation: "усердно учиться",
            },
            { word: "tomorrow", transcr: "/təˈmɒrəʊ/", translation: "завтра" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-purple-400"
            >
              <p className="font-bold text-purple-900 text-lg">{item.word}</p>
              <p className="text-xs text-purple-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 10: Wish в Second Conditional ========== */
function Step10() {
  const items: FillItem[] = [
    {
      left: "1. I wish I",
      right: "more money. (have)",
      answers: ["had"],
      explanation: "Wish + Past Simple (хотел бы иметь, но нет).",
      wide: true,
    },
    {
      left: "2. She wishes she",
      right: "speak French. (can)",
      answers: ["could"],
      explanation: "Can → could после wish.",
    },
    {
      left: "3. I wish it",
      right: "sunny today. (be)",
      answers: ["were", "was"],
      explanation: "Wish + were/was (хотелось бы, но не так).",
      wide: true,
    },
    {
      left: "4. They wish they",
      right: "in a bigger house. (live)",
      answers: ["lived"],
      explanation: "Wish + Past Simple (мечта о нереальном).",
    },
    {
      left: "5. I wish you",
      right: "here. (be)",
      answers: ["were", "was"],
      explanation: "Wish + were (сожаление о текущем моменте).",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🌟 Wish для сожалений и желаний">
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border-2 border-pink-300 mb-6">
          <h3 className="text-xl font-bold text-pink-900 mb-4">
            I wish... — Как жаль, что...
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-pink-900 mb-3">💫 Формула:</p>
            <p className="text-lg text-zinc-800">
              <strong>I wish + Past Simple</strong>
            </p>
            <p className="text-sm text-zinc-600 mt-2">
              Используем, когда хотим, чтобы настоящее было другим (но это
              невозможно).
            </p>
          </div>

          <div className="bg-pink-50 rounded-lg p-4 border border-pink-200 mb-4">
            <p className="font-bold text-pink-900 mb-2">🎯 Примеры:</p>
            <div className="space-y-2 text-sm">
              <p>
                ✓ I <strong>wish</strong> I <strong>had</strong> more time.
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Как жаль, что у меня нет времени (но нет).
              </p>
              <p>
                ✓ She <strong>wishes</strong> she <strong>could</strong> fly.
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Она хотела бы уметь летать (но не может).
              </p>
              <p>
                ✓ We <strong>wish</strong> we <strong>lived</strong> by the sea.
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Мы бы хотели жить у моря (но не живём).
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
            <p className="font-bold text-amber-900 mb-2">💡 Сравнение:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-bold text-purple-900 mb-1">
                  Second Conditional:
                </p>
                <p>
                  <strong>If I had</strong> money, I <strong>would buy</strong>{" "}
                  a car.
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-bold text-pink-900 mb-1">Wish:</p>
                <p>
                  I <strong>wish I had</strong> money (to buy a car).
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-600 mt-2">
              Wish короче, выражает сожаление без условия.
            </p>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Практика: Wish"
        instruction="Вставьте глагол в Past Simple после wish."
        items={items}
        wideInputs
      />

      <UiSection title="📝 Словарь: Желания и сожаления">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "wish", transcr: "/wɪʃ/", translation: "желать, хотеть" },
            { word: "regret", transcr: "/rɪˈɡret/", translation: "сожалеть" },
            { word: "hope", transcr: "/həʊp/", translation: "надеяться" },
            {
              word: "by the sea",
              transcr: "/baɪ ðə siː/",
              translation: "у моря",
            },
            { word: "sunny", transcr: "/ˈsʌni/", translation: "солнечный" },
            {
              word: "bigger house",
              transcr: "/ˈbɪɡə haʊs/",
              translation: "дом побольше",
            },
            {
              word: "speak French",
              transcr: "/spiːk frentʃ/",
              translation: "говорить по-французски",
            },
            {
              word: "have time",
              transcr: "/hæv taɪm/",
              translation: "иметь время",
            },
            {
              word: "be here",
              transcr: "/biː hɪə/",
              translation: "быть здесь",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-pink-400"
            >
              <p className="font-bold text-pink-900 text-lg">{item.word}</p>
              <p className="text-xs text-pink-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 11: Продвинутая практика ========== */
function Step11() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "a superpower, I would choose invisibility. (have)",
      answers: ["had"],
      explanation: "Нереальная ситуация → Past Simple.",
      wide: true,
    },
    {
      left: "2. What would you do if you",
      right: "the president? (be)",
      answers: ["were", "was"],
      explanation: "Вопрос в Second Conditional → were/was.",
      wide: true,
    },
    {
      left: "3. If we",
      right: "harder last year, we would be better now. (work)",
      answers: ["had worked"],
      explanation: "Осторожно! Это Mixed Conditional (но ответ: had worked).",
      wide: true,
    },
    {
      left: "4. She wouldn't be tired if she",
      right: "enough sleep. (get)",
      answers: ["got"],
      explanation: "Обратный порядок: result, if-часть.",
      wide: true,
    },
    {
      left: "5. If I",
      right: "you were coming, I would have prepared dinner. (know)",
      answers: ["had known"],
      explanation: "Mixed Conditional (прошлое → настоящее).",
      wide: true,
    },
    {
      left: "6. Unless they",
      right: "soon, they would miss the train. (leave)",
      answers: ["left"],
      explanation: "Unless + Past Simple.",
    },
    {
      left: "7. I wish I",
      right: "play the guitar. (can)",
      answers: ["could"],
      explanation: "Wish + could (хотел бы уметь).",
    },
    {
      left: "8. If you",
      right: "me the truth, I might forgive you. (tell)",
      answers: ["told"],
      explanation: "Might (может быть) вместо would.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🚀 Продвинутая практика Second Conditional">
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-lg p-5 mb-4 border-2 border-indigo-200">
          <p className="text-sm text-zinc-700 mb-3">
            Это сложнее! Здесь есть Mixed Conditionals, модальные, wish и
            unless. Будьте внимательны!
          </p>
          <p className="text-sm font-semibold text-indigo-900">
            Цель: 6/8 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Продвинутые упражнения"
          instruction="Вставьте глагол в правильной форме."
          items={items}
          wideInputs
        />
      </UiSection>

      <UiSection title="📝 Словарь: Продвинутая лексика">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "superpower",
              transcr: "/ˈsuːpəpaʊə/",
              translation: "сверхспособность",
            },
            {
              word: "invisibility",
              transcr: "/ɪnˌvɪzəˈbɪləti/",
              translation: "невидимость",
            },
            {
              word: "president",
              transcr: "/ˈprezɪdənt/",
              translation: "президент",
            },
            {
              word: "get sleep",
              transcr: "/ɡet sliːp/",
              translation: "выспаться",
            },
            {
              word: "prepare dinner",
              transcr: "/prɪˈpeə ˈdɪnə/",
              translation: "приготовить ужин",
            },
            {
              word: "miss the train",
              transcr: "/mɪs ðə treɪn/",
              translation: "опоздать на поезд",
            },
            {
              word: "play the guitar",
              transcr: "/pleɪ ðə ɡɪˈtɑː/",
              translation: "играть на гитаре",
            },
            { word: "forgive", transcr: "/fəˈɡɪv/", translation: "простить" },
            {
              word: "tell the truth",
              transcr: "/tel ðə truːθ/",
              translation: "сказать правду",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
            >
              <p className="font-bold text-indigo-900 text-lg">{item.word}</p>
              <p className="text-xs text-indigo-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 12: Реальные ситуации ========== */
function Step12() {
  return (
    <>
      <UiSection title="🌍 Second Conditional в реальной жизни">
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-6 border-2 border-teal-300 mb-6">
          <h3 className="text-xl font-bold text-teal-900 mb-4">
            Где используется Second Conditional?
          </h3>

          <div className="space-y-4">
            {[
              {
                title: "💼 На работе — совет коллеге",
                sentence: "If I were you, I would ask for a raise.",
                ru: "На твоём месте я бы попросил прибавку.",
                type: "Совет",
              },
              {
                title: "🏠 Дома — мечты о будущем",
                sentence:
                  "If we won the lottery, we would buy a house by the beach.",
                ru: "Если бы мы выиграли в лотерею, купили бы дом у пляжа.",
                type: "Мечта",
              },
              {
                title: "🎓 В учёбе — объяснение причин",
                sentence:
                  "If I had more time, I would study for the test properly.",
                ru: "Если бы у меня было больше времени, я бы нормально готовился к тесту.",
                type: "Объяснение",
              },
              {
                title: "💬 В разговоре — вежливая просьба",
                sentence: "If you could help me, I would really appreciate it.",
                ru: "Если бы вы могли мне помочь, я был бы очень признателен.",
                type: "Вежливость",
              },
              {
                title: "🌟 Интервью — гипотетические вопросы",
                sentence:
                  "If you were CEO, what would you change in our company?",
                ru: "Если бы вы были CEO, что бы вы изменили в нашей компании?",
                type: "Интервью",
              },
              {
                title: "🎬 В фильмах — философские размышления",
                sentence:
                  "If you could go back in time, would you change anything?",
                ru: "Если бы ты мог вернуться в прошлое, ты бы что-то изменил?",
                type: "Философия",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-2 border-teal-200"
              >
                <div className="bg-teal-50 rounded p-3 mb-3">
                  <p className="font-bold text-teal-900">{item.title}</p>
                  <span className="text-xs bg-teal-200 text-teal-900 px-2 py-1 rounded">
                    {item.type}
                  </span>
                </div>
                <div className="bg-teal-50/30 rounded p-3 border-l-4 border-teal-400">
                  <p className="text-sm font-semibold mb-1">{item.sentence}</p>
                  <p className="text-xs text-zinc-600">{item.ru}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Профессиональная и повседневная лексика">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "ask for a raise",
              transcr: "/ɑːsk fɔː ə reɪz/",
              translation: "попросить прибавку",
            },
            {
              word: "colleague",
              transcr: "/ˈkɒliːɡ/",
              translation: "коллега",
            },
            {
              word: "appreciate",
              transcr: "/əˈpriːʃieɪt/",
              translation: "ценить",
            },
            {
              word: "CEO",
              transcr: "/siː iː əʊ/",
              translation: "генеральный директор",
            },
            {
              word: "go back in time",
              transcr: "/ɡəʊ bæk ɪn taɪm/",
              translation: "вернуться в прошлое",
            },
            {
              word: "change",
              transcr: "/tʃeɪndʒ/",
              translation: "изменить",
            },
            {
              word: "properly",
              transcr: "/ˈprɒpəli/",
              translation: "должным образом",
            },
            {
              word: "polite request",
              transcr: "/pəˈlaɪt rɪˈkwest/",
              translation: "вежливая просьба",
            },
            {
              word: "philosophical",
              transcr: "/ˌfɪləˈsɒfɪkl/",
              translation: "философский",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-teal-400"
            >
              <p className="font-bold text-teal-900 text-lg">{item.word}</p>
              <p className="text-xs text-teal-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 13: Идиомы и устойчивые выражения ========== */
function Step13() {
  return (
    <>
      <UiSection title="🎭 Идиомы с Second Conditional">
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-6 border-2 border-amber-300 mb-6">
          <h3 className="text-xl font-bold text-amber-900 mb-4">
            Популярные выражения
          </h3>

          <div className="space-y-4">
            {[
              {
                idiom: "If I were in your shoes",
                meaning: "На твоём месте",
                example: "If I were in your shoes, I would take that job.",
                ru: "На твоём месте я бы взял эту работу.",
              },
              {
                idiom: "If pigs could fly",
                meaning: "Если бы свиньи летали (невозможное)",
                example: "He said he'd pay me back. Yeah, if pigs could fly!",
                ru: "Он сказал, что вернёт деньги. Ага, щас!",
              },
              {
                idiom: "If I had a dollar for every time...",
                meaning: "Если бы мне платили каждый раз...",
                example:
                  "If I had a dollar for every time you said that, I'd be rich!",
                ru: "Если бы мне платили каждый раз, когда ты это говоришь, я был бы богат!",
              },
              {
                idiom: "If wishes were horses",
                meaning:
                  "Если бы желания были лошадьми (мечты не всегда сбываются)",
                example:
                  "I wish I could travel the world. Well, if wishes were horses...",
                ru: "Хотел бы я путешествовать по миру. Ну, мечтать не вредно...",
              },
              {
                idiom: "If I had my way",
                meaning: "Если бы я решал / по-моему",
                example: "If I had my way, we'd all work from home.",
                ru: "Если бы я решал, мы бы все работали из дома.",
              },
              {
                idiom: "If it were up to me",
                meaning: "Если бы от меня зависело",
                example: "If it were up to me, I'd cancel the meeting.",
                ru: "Если бы от меня зависело, я бы отменил встречу.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-2 border-amber-200"
              >
                <div className="bg-amber-100 rounded p-3 mb-3">
                  <p className="font-bold text-amber-900 text-lg mb-1">
                    {item.idiom}
                  </p>
                  <p className="text-sm text-amber-700">{item.meaning}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">{item.example}</p>
                  <p className="text-xs text-zinc-600">{item.ru}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Идиомы и фразеологизмы">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "in your shoes",
              transcr: "/ɪn jɔː ʃuːz/",
              translation: "на твоём месте",
            },
            {
              word: "pigs could fly",
              transcr: "/pɪɡz kʊd flaɪ/",
              translation: "когда рак на горе свистнет",
            },
            {
              word: "pay back",
              transcr: "/peɪ bæk/",
              translation: "вернуть деньги",
            },
            {
              word: "have my way",
              transcr: "/hæv maɪ weɪ/",
              translation: "поступить по-моему",
            },
            {
              word: "up to me",
              transcr: "/ʌp tə miː/",
              translation: "зависеть от меня",
            },
            {
              word: "cancel",
              transcr: "/ˈkænsəl/",
              translation: "отменить",
            },
            {
              word: "work from home",
              transcr: "/wɜːk frɒm həʊm/",
              translation: "работать из дома",
            },
            {
              word: "take a job",
              transcr: "/teɪk ə dʒɒb/",
              translation: "взять работу",
            },
            {
              word: "travel the world",
              transcr: "/ˈtrævl ðə wɜːld/",
              translation: "путешествовать по миру",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-amber-400"
            >
              <p className="font-bold text-amber-900 text-lg">{item.word}</p>
              <p className="text-xs text-amber-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 14: Финальный тест + Самооценка ========== */
function Step14() {
  const finalItems: FillItem[] = [
    {
      left: "1. If I",
      right: "rich, I would donate to charity. (be)",
      answers: ["were", "was"],
      explanation: "Second Conditional → Past Simple (were/was).",
      wide: true,
    },
    {
      left: "2. What would you do if you",
      right: "invisible for a day? (can/be)",
      answers: ["could be"],
      explanation: "Вопрос: could be (способность).",
      wide: true,
    },
    {
      left: "3. If she",
      right: "so far, I would visit her every week. (not live)",
      answers: ["didn't live", "did not live"],
      explanation: "Отрицание: didn't live.",
      wide: true,
    },
    {
      left: "4. Unless you",
      right: "me, I wouldn't know. (tell)",
      answers: ["told"],
      explanation: "Unless + Past Simple.",
    },
    {
      left: "5. I wish I",
      right: "drive. (can)",
      answers: ["could"],
      explanation: "Wish + could (сожаление).",
    },
    {
      left: "6. If I were you, I",
      right: "apologize immediately. (would)",
      answers: ["would"],
      explanation: "Совет: would + V1.",
    },
    {
      left: "7. If we",
      right: "more time, we might finish this project. (have)",
      answers: ["had"],
      explanation: "Might (может быть) вместо would.",
      wide: true,
    },
    {
      left: "8. She wouldn't be so stressed if she",
      right: "more. (sleep)",
      answers: ["slept"],
      explanation: "Обратный порядок: result, if-часть.",
      wide: true,
    },
    {
      left: "9. If they",
      right: "English, they would move to Canada. (speak)",
      answers: ["spoke"],
      explanation: "Нереальная ситуация → Past Simple.",
      wide: true,
    },
    {
      left: "10. What",
      right: "you change if you could go back in time? (would)",
      answers: ["would"],
      explanation: "Вопрос: What would you...?",
    },
  ];

  return (
    <>
      <UiSection title="🏆 Финальный тест: Second Conditional">
        <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-sky-50 rounded-lg p-5 mb-4 border-2 border-purple-200">
          <p className="text-sm text-zinc-700 mb-3">
            Проверьте всё, что вы изучили: формула, отрицание, вопросы, unless,
            wish, модальные. Удачи! 🍀
          </p>
          <p className="text-sm font-semibold text-purple-900">
            Цель: 8/10 или выше для полного освоения! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Финальная проверка"
          instruction="Вставьте глагол в правильной форме."
          items={finalItems}
          wideInputs
        />
      </UiSection>

      <UiSection title="📚 Дополнительные материалы">
        <div className="bg-white rounded-lg p-5 border-2 border-indigo-200">
          <h3 className="font-bold text-indigo-900 mb-3">
            Рекомендации для практики:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-700">
            <li>
              📝 Каждый день пишите 3 предложения о том, что бы вы сделали, если
              бы выиграли в лотерею.
            </li>
            <li>
              🗣️ Практикуйте советы: "If I were you, I would..." — давайте
              советы друзьям на английском.
            </li>
            <li>
              🎬 Смотрите фильмы и отмечайте, где герои используют Second
              Conditional.
            </li>
            <li>💭 Ведите дневник мечтаний: "If I could..., I would..."</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}
