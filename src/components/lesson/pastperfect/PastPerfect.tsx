"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PastPerfect({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ========== ШАГ 1: Что такое Past Perfect ========== */
function Step1() {
  return (
    <>
      <UiSection title="⏪ Past Perfect — Предпрошедшее время">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-6 border-2 border-purple-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">⏰</div>
            <h2 className="text-3xl font-bold text-purple-900 mb-3">
              Past Perfect
            </h2>
            <p className="text-xl text-purple-700">
              Прошедшее совершённое время
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              🎯 Главная идея:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed">
              Past Perfect показывает действие, которое произошло{" "}
              <strong>ДО другого действия или момента в прошлом</strong>. Это
              "прошлое в прошлом" или "предпрошедшее" время.
            </p>
          </div>

          <div className="bg-purple-100 rounded-lg p-5 border-2 border-purple-400">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🕐 Временная линия:
            </p>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">📍</div>
                  <p className="text-xs font-bold text-purple-900">
                    PAST PERFECT
                  </p>
                  <p className="text-xs text-zinc-600">
                    Первое действие
                    <br />
                    (раньше)
                  </p>
                </div>
                <div className="text-3xl">→</div>
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">📍</div>
                  <p className="text-xs font-bold text-blue-900">PAST SIMPLE</p>
                  <p className="text-xs text-zinc-600">
                    Второе действие
                    <br />
                    (позже)
                  </p>
                </div>
                <div className="text-3xl">→</div>
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">👤</div>
                  <p className="text-xs font-bold text-green-900">NOW</p>
                  <p className="text-xs text-zinc-600">Сейчас</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-purple-50 rounded">
                <p className="text-sm text-center">
                  <strong>Пример:</strong> When I arrived, the train{" "}
                  <span className="text-purple-700 font-bold">had left</span>.
                </p>
                <p className="text-xs text-center text-zinc-600 mt-1">
                  (Когда я прибыл, поезд уже уехал)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔍 Когда используется Past Perfect?">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">1️⃣</div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 text-lg mb-2">
                  Последовательность действий в прошлом
                </h4>
                <div className="bg-white rounded-lg p-4 mb-2">
                  <p className="mb-1">
                    She{" "}
                    <strong className="text-purple-700">had finished</strong>{" "}
                    her homework before dinner.
                  </p>
                  <p className="text-sm text-zinc-600">
                    Она закончила домашнюю работу до ужина.
                  </p>
                </div>
                <p className="text-sm text-blue-800 italic">
                  💡 Сначала закончила (had finished), потом ужин (dinner)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">2️⃣</div>
              <div className="flex-1">
                <h4 className="font-bold text-purple-900 text-lg mb-2">
                  Результат к моменту в прошлом
                </h4>
                <div className="bg-white rounded-lg p-4 mb-2">
                  <p className="mb-1">
                    By 2020, I{" "}
                    <strong className="text-purple-700">had lived</strong> in
                    London for 5 years.
                  </p>
                  <p className="text-sm text-zinc-600">
                    К 2020 году я прожил в Лондоне 5 лет.
                  </p>
                </div>
                <p className="text-sm text-purple-800 italic">
                  💡 К определённому моменту (2020) уже был результат (5 лет)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">3️⃣</div>
              <div className="flex-1">
                <h4 className="font-bold text-green-900 text-lg mb-2">
                  Объяснение причины в прошлом
                </h4>
                <div className="bg-white rounded-lg p-4 mb-2">
                  <p className="mb-1">
                    I was hungry because I{" "}
                    <strong className="text-purple-700">hadn't eaten</strong>{" "}
                    breakfast.
                  </p>
                  <p className="text-sm text-zinc-600">
                    Я был голоден, потому что не ел завтрак.
                  </p>
                </div>
                <p className="text-sm text-green-800 italic">
                  💡 Причина в прошлом объясняет состояние (был голоден)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300">
            <div className="flex items-start gap-4">
              <div className="text-4xl">4️⃣</div>
              <div className="flex-1">
                <h4 className="font-bold text-amber-900 text-lg mb-2">
                  Косвенная речь (reported speech)
                </h4>
                <div className="bg-white rounded-lg p-4 mb-2">
                  <p className="mb-1 text-sm">
                    <strong>Прямая речь:</strong> "I finished the work."
                  </p>
                  <p className="mb-2 text-sm">
                    <strong>Косвенная речь:</strong> He said that he{" "}
                    <strong className="text-purple-700">had finished</strong>{" "}
                    the work.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Он сказал, что закончил работу.
                  </p>
                </div>
                <p className="text-sm text-amber-800 italic">
                  💡 При передаче чужих слов Past Simple → Past Perfect
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 Сравнение с русским языком">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            Как это работает в русском?
          </h3>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5">
              <p className="font-bold text-indigo-900 mb-3">
                ⚠️ В русском языке НЕТ отдельного времени для Past Perfect!
              </p>
              <p className="text-zinc-700 mb-3">
                Мы используем обычное прошедшее время + слова-подсказки:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-700">
                <li>
                  <strong>уже</strong> — показывает завершённость
                </li>
                <li>
                  <strong>до того как</strong> — показывает последовательность
                </li>
                <li>
                  <strong>к тому времени</strong> — показывает момент
                </li>
                <li>
                  <strong>ранее, раньше</strong> — показывает "что было до"
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="font-bold text-purple-900 mb-2">🇬🇧 English:</p>
                <p className="text-sm mb-1">
                  When I arrived, she <strong>had left</strong>.
                </p>
                <p className="text-xs text-purple-700">Past Perfect</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                <p className="font-bold text-pink-900 mb-2">🇷🇺 Русский:</p>
                <p className="text-sm mb-1">
                  Когда я пришёл, она <strong>уже ушла</strong>.
                </p>
                <p className="text-xs text-pink-700">Прошедшее + "уже"</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎭 Визуальные примеры">
        <div className="space-y-4">
          {[
            {
              situation: "🎬 История о фильме",
              pp: "The movie had started when we arrived at the cinema.",
              ps: "We missed the beginning.",
              ru: "Фильм уже начался, когда мы пришли в кинотеатр. Мы пропустили начало.",
              timeline: "1️⃣ Фильм начался → 2️⃣ Мы пришли",
            },
            {
              situation: "🍽️ История о еде",
              pp: "I had already eaten when she invited me to dinner.",
              ps: "I wasn't hungry.",
              ru: "Я уже поел, когда она пригласила меня на ужин. Я не был голоден.",
              timeline: "1️⃣ Я поел → 2️⃣ Она пригласила",
            },
            {
              situation: "📚 История об учёбе",
              pp: "She had studied English before she moved to London.",
              ps: "She could speak fluently.",
              ru: "Она учила английский до того, как переехала в Лондон. Она могла свободно говорить.",
              timeline: "1️⃣ Учила английский → 2️⃣ Переехала",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-indigo-200"
            >
              <div className="bg-indigo-50 rounded p-3 mb-3">
                <p className="font-bold text-indigo-900">{item.situation}</p>
              </div>
              <div className="space-y-2 mb-3">
                <p className="text-sm">
                  <span className="font-semibold text-purple-700">
                    Past Perfect:
                  </span>{" "}
                  {item.pp}
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-blue-700">
                    Past Simple:
                  </span>{" "}
                  {item.ps}
                </p>
                <p className="text-sm text-zinc-600">{item.ru}</p>
              </div>
              <div className="bg-purple-50 rounded p-2">
                <p className="text-xs text-purple-800">
                  ⏰ Временная линия: {item.timeline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: Образование Past Perfect ========== */
function Step2() {
  return (
    <>
      <UiSection title="📐 Как образуется Past Perfect">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6 border-2 border-indigo-400">
          <h3 className="text-2xl font-bold text-indigo-900 text-center mb-6">
            Формула Past Perfect
          </h3>

          <div className="bg-white rounded-xl p-6 mb-6 border-2 border-indigo-300">
            <div className="text-center">
              <p className="text-3xl font-mono font-bold text-indigo-900 mb-4">
                had + V3 (Past Participle)
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-indigo-50 rounded p-3">
                  <p className="font-bold text-indigo-900 mb-1">had</p>
                  <p className="text-xs text-zinc-600">
                    вспомогательный глагол
                    <br />
                    (для всех лиц)
                  </p>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">V3</p>
                  <p className="text-xs text-zinc-600">
                    Past Participle
                    <br />
                    (3-я форма глагола)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300">
            <p className="font-bold text-amber-900 mb-2">⚠️ Важно помнить:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • <strong>HAD</strong> — один и тот же для всех лиц
                (I/you/he/she/it/we/they)
              </li>
              <li>
                • Глагол всегда в <strong>3-й форме (V3)</strong> — Past
                Participle
              </li>
              <li>
                • Правильные глаголы: <strong>V + ed</strong> (worked, played)
              </li>
              <li>
                • Неправильные глаголы: <strong>особая форма</strong> (gone,
                eaten, seen)
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 Таблица спряжения">
        <div className="overflow-x-auto">
          <table className="w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-purple-100">
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">
                  Местоимение
                </th>
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">
                  Формула
                </th>
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">
                  Пример
                </th>
                <th className="border-2 border-indigo-300 px-4 py-3 text-left">
                  Перевод
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  pronoun: "I",
                  formula: "had worked",
                  example: "I had worked.",
                  translation: "Я (уже) работал",
                },
                {
                  pronoun: "You",
                  formula: "had worked",
                  example: "You had worked.",
                  translation: "Ты (уже) работал",
                },
                {
                  pronoun: "He",
                  formula: "had worked",
                  example: "He had worked.",
                  translation: "Он (уже) работал",
                },
                {
                  pronoun: "She",
                  formula: "had worked",
                  example: "She had worked.",
                  translation: "Она (уже) работала",
                },
                {
                  pronoun: "It",
                  formula: "had worked",
                  example: "It had worked.",
                  translation: "Оно (уже) работало",
                },
                {
                  pronoun: "We",
                  formula: "had worked",
                  example: "We had worked.",
                  translation: "Мы (уже) работали",
                },
                {
                  pronoun: "They",
                  formula: "had worked",
                  example: "They had worked.",
                  translation: "Они (уже) работали",
                },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="border border-indigo-200 px-4 py-3 font-bold text-indigo-900">
                    {row.pronoun}
                  </td>
                  <td className="border border-indigo-200 px-4 py-3 font-mono text-sm">
                    {row.formula}
                  </td>
                  <td className="border border-indigo-200 px-4 py-3">
                    {row.example}
                  </td>
                  <td className="border border-indigo-200 px-4 py-3 text-sm text-zinc-600">
                    {row.translation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="📚 Past Participle (V3) — Третья форма глагола">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
            <h4 className="font-bold text-green-900 text-lg mb-3">
              ✅ Правильные глаголы (Regular Verbs)
            </h4>
            <p className="text-sm mb-3">
              Просто добавляем <strong>-ed</strong>:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { v1: "work", v3: "worked" },
                { v1: "play", v3: "played" },
                { v1: "finish", v3: "finished" },
                { v1: "watch", v3: "watched" },
                { v1: "clean", v3: "cleaned" },
                { v1: "cook", v3: "cooked" },
                { v1: "walk", v3: "walked" },
                { v1: "talk", v3: "talked" },
              ].map((verb, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded p-2 border border-green-200"
                >
                  <p className="text-xs text-zinc-600">{verb.v1}</p>
                  <p className="font-bold text-green-900">→ {verb.v3}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-2 border-red-300">
            <h4 className="font-bold text-red-900 text-lg mb-3">
              ⚠️ Неправильные глаголы (Irregular Verbs)
            </h4>
            <p className="text-sm mb-3">
              Особая форма — нужно запомнить! Вот самые частые:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { v1: "go", v2: "went", v3: "gone", ru: "идти" },
                { v1: "eat", v2: "ate", v3: "eaten", ru: "есть" },
                { v1: "see", v2: "saw", v3: "seen", ru: "видеть" },
                { v1: "do", v2: "did", v3: "done", ru: "делать" },
                { v1: "make", v2: "made", v3: "made", ru: "делать" },
                { v1: "take", v2: "took", v3: "taken", ru: "брать" },
                { v1: "give", v2: "gave", v3: "given", ru: "давать" },
                { v1: "write", v2: "wrote", v3: "written", ru: "писать" },
                { v1: "speak", v2: "spoke", v3: "spoken", ru: "говорить" },
                { v1: "break", v2: "broke", v3: "broken", ru: "ломать" },
                { v1: "know", v2: "knew", v3: "known", ru: "знать" },
                { v1: "buy", v2: "bought", v3: "bought", ru: "покупать" },
              ].map((verb, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded p-3 border border-red-200"
                >
                  <p className="text-xs text-zinc-600 mb-1">
                    {verb.v1} — {verb.v2} —{" "}
                    <strong className="text-red-900">{verb.v3}</strong>
                  </p>
                  <p className="text-xs text-red-700">{verb.ru}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="💬 Примеры предложений">
        <div className="space-y-3">
          {[
            {
              en: "I had finished my work before 5 PM.",
              ru: "Я закончил работу до 5 вечера.",
              note: "Правильный глагол: finish → finished",
            },
            {
              en: "She had left when I arrived.",
              ru: "Она ушла, когда я пришёл.",
              note: "Неправильный глагол: leave → left",
            },
            {
              en: "They had eaten dinner before the movie.",
              ru: "Они поужинали до фильма.",
              note: "Неправильный глагол: eat → eaten",
            },
            {
              en: "We had already seen that film.",
              ru: "Мы уже видели этот фильм.",
              note: "Неправильный глагол: see → seen",
            },
            {
              en: "He had never visited Paris before 2019.",
              ru: "Он никогда не был в Париже до 2019.",
              note: "Неправильный глагол: visit → visited",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-2 border-indigo-200"
            >
              <p className="text-lg mb-1">{item.en}</p>
              <p className="text-sm text-zinc-600 mb-2">{item.ru}</p>
              <p className="text-xs text-indigo-700 italic">💡 {item.note}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 3: Утвердительные предложения + упражнение ========== */
function Step3() {
  return (
    <>
      <UiSection title="✅ Утвердительные предложения (Affirmative)">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6 border-2 border-green-300">
          <h3 className="text-xl font-bold text-green-900 mb-4">
            Структура утвердительного предложения:
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="text-2xl font-mono text-center font-bold text-green-900 mb-3">
              Subject + had + V3
            </p>
            <div className="grid grid-cols-3 gap-3 text-sm text-center">
              <div className="bg-green-50 rounded p-2">
                <p className="font-bold">Подлежащее</p>
              </div>
              <div className="bg-emerald-50 rounded p-2">
                <p className="font-bold">had</p>
              </div>
              <div className="bg-teal-50 rounded p-2">
                <p className="font-bold">V3</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-green-900">Примеры:</h4>
            {[
              {
                en: "I had finished the report.",
                ru: "Я закончил отчёт.",
              },
              {
                en: "She had visited Rome before.",
                ru: "Она посещала Рим раньше.",
              },
              {
                en: "They had left the party early.",
                ru: "Они ушли с вечеринки рано.",
              },
              {
                en: "We had studied French at school.",
                ru: "Мы учили французский в школе.",
              },
              {
                en: "He had already eaten breakfast.",
                ru: "Он уже позавтракал.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-3 border border-green-200"
              >
                <p className="mb-1">{item.en}</p>
                <p className="text-sm text-zinc-600">{item.ru}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="✏️ Практика: Утвердительные предложения">
        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Подсказки:</p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • Используйте <strong>had</strong> для всех лиц
            </li>
            <li>• Глагол в 3-й форме (V3): worked, gone, eaten</li>
            <li>
              • Можно использовать сокращение <strong>'d</strong> (I'd, she'd)
            </li>
            <li>• Обращайте внимание на неправильные глаголы</li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение 1"
          instruction="Поставьте глагол в Past Perfect:"
          items={[
            {
              left: "She",
              answers: ["had finished", "'d finished"],
              right: "her homework before dinner. (finish)",
              explanation:
                "She + had finished. Правильный глагол: finish → finished",
            },
            {
              left: "They",
              answers: ["had gone", "'d gone"],
              right: "to bed when I arrived. (go)",
              explanation:
                "They + had gone. Неправильный глагол: go → went → gone",
            },
            {
              left: "I",
              answers: ["had seen", "'d seen"],
              right: "that movie before. (see)",
              explanation:
                "I + had seen. Неправильный глагол: see → saw → seen",
            },
            {
              left: "He",
              answers: ["had eaten", "'d eaten"],
              right: "lunch before the meeting. (eat)",
              explanation:
                "He + had eaten. Неправильный глагол: eat → ate → eaten",
            },
            {
              left: "We",
              answers: ["had lived", "'d lived"],
              right: "in Paris for 3 years. (live)",
              explanation: "We + had lived. Правильный глагол: live → lived",
            },
            {
              left: "My sister",
              answers: ["had bought", "'d bought"],
              right: "a new car. (buy)",
              explanation:
                "My sister + had bought. Неправильный глагол: buy → bought → bought",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 4: Отрицательные предложения + упражнение ========== */
function Step4() {
  return (
    <>
      <UiSection title="❌ Отрицательные предложения (Negative)">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 mb-6 border-2 border-red-300">
          <h3 className="text-xl font-bold text-red-900 mb-4">
            Структура отрицательного предложения:
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="text-2xl font-mono text-center font-bold text-red-900 mb-3">
              Subject + had not + V3
            </p>
            <div className="grid grid-cols-4 gap-3 text-sm text-center">
              <div className="bg-red-50 rounded p-2">
                <p className="font-bold">Подлежащее</p>
              </div>
              <div className="bg-pink-50 rounded p-2">
                <p className="font-bold">had</p>
              </div>
              <div className="bg-rose-50 rounded p-2">
                <p className="font-bold">not</p>
              </div>
              <div className="bg-red-50 rounded p-2">
                <p className="font-bold">V3</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 mb-4 border-2 border-amber-300">
            <p className="font-bold text-amber-900 mb-2">📝 Сокращение:</p>
            <div className="text-sm">
              <p>
                <strong>had not</strong> = <strong>hadn't</strong>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-red-900">Примеры:</h4>
            {[
              {
                en: "I had not finished my work.",
                short: "I hadn't finished my work.",
                ru: "Я не закончил работу.",
              },
              {
                en: "She had not seen him before.",
                short: "She hadn't seen him before.",
                ru: "Она не видела его раньше.",
              },
              {
                en: "They had not eaten breakfast.",
                short: "They hadn't eaten breakfast.",
                ru: "Они не ели завтрак.",
              },
              {
                en: "We had not visited London.",
                short: "We hadn't visited London.",
                ru: "Мы не посещали Лондон.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-3 border border-red-200"
              >
                <p className="mb-1 text-zinc-500">{item.en}</p>
                <p className="mb-1 font-semibold">{item.short}</p>
                <p className="text-sm text-zinc-600">{item.ru}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="✏️ Практика: Отрицательные предложения">
        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Подсказки:</p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • Добавьте <strong>not</strong> после had
            </li>
            <li>
              • Можно использовать сокращение: <strong>hadn't</strong>
            </li>
            <li>• Глагол всё равно в 3-й форме (V3)</li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение 2"
          instruction="Составьте отрицательное предложение. Используйте сокращённую форму (hadn't):"
          items={[
            {
              left: "I",
              answers: ["hadn't seen", "had not seen"],
              right: "that movie before. (see)",
              explanation: "I + hadn't seen (had not = hadn't). See → seen",
            },
            {
              left: "She",
              answers: ["hadn't finished", "had not finished"],
              right: "her homework. (finish)",
              explanation: "She + hadn't finished. Finish → finished",
            },
            {
              left: "They",
              answers: ["hadn't been", "had not been"],
              right: "to Paris before. (be)",
              explanation: "They + hadn't been. Be → was/were → been",
            },
            {
              left: "He",
              answers: ["hadn't eaten", "had not eaten"],
              right: "lunch. (eat)",
              explanation: "He + hadn't eaten. Eat → ate → eaten",
            },
            {
              left: "We",
              answers: ["hadn't met", "had not met"],
              right: "him before. (meet)",
              explanation: "We + hadn't met. Meet → met → met",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: Вопросы + упражнение ========== */
function Step5() {
  return (
    <>
      <UiSection title="❓ Вопросы (Questions)">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-6 border-2 border-purple-300">
          <h3 className="text-xl font-bold text-purple-900 mb-4">
            Два типа вопросов:
          </h3>

          <div className="space-y-6">
            {/* Yes/No Questions */}
            <div className="bg-white rounded-lg p-5 border-2 border-purple-200">
              <h4 className="font-bold text-purple-900 text-lg mb-3">
                1️⃣ Общие вопросы (Yes/No Questions)
              </h4>
              <p className="text-2xl font-mono text-center font-bold text-purple-900 mb-3">
                Had + Subject + V3?
              </p>
              <div className="grid grid-cols-3 gap-2 text-sm text-center mb-4">
                <div className="bg-purple-50 rounded p-2">
                  <p className="font-bold">Had</p>
                </div>
                <div className="bg-indigo-50 rounded p-2">
                  <p className="font-bold">Subject</p>
                </div>
                <div className="bg-purple-50 rounded p-2">
                  <p className="font-bold">V3?</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  {
                    q: "Had you seen that movie?",
                    a: "Yes, I had. / No, I hadn't.",
                    ru: "Ты видел этот фильм?",
                  },
                  {
                    q: "Had she finished her work?",
                    a: "Yes, she had. / No, she hadn't.",
                    ru: "Она закончила работу?",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-purple-50 rounded p-3">
                    <p className="font-semibold mb-1">{item.q}</p>
                    <p className="text-sm text-green-700 mb-1">{item.a}</p>
                    <p className="text-xs text-zinc-600">{item.ru}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wh- Questions */}
            <div className="bg-white rounded-lg p-5 border-2 border-indigo-200">
              <h4 className="font-bold text-indigo-900 text-lg mb-3">
                2️⃣ Специальные вопросы (Wh- Questions)
              </h4>
              <p className="text-2xl font-mono text-center font-bold text-indigo-900 mb-3">
                Wh-word + had + Subject + V3?
              </p>
              <div className="grid grid-cols-4 gap-2 text-sm text-center mb-4">
                <div className="bg-indigo-50 rounded p-2">
                  <p className="font-bold">What/Where/Why</p>
                </div>
                <div className="bg-purple-50 rounded p-2">
                  <p className="font-bold">had</p>
                </div>
                <div className="bg-indigo-50 rounded p-2">
                  <p className="font-bold">Subject</p>
                </div>
                <div className="bg-purple-50 rounded p-2">
                  <p className="font-bold">V3?</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  {
                    q: "What had you done?",
                    ru: "Что ты сделал?",
                  },
                  {
                    q: "Where had she gone?",
                    ru: "Куда она ушла?",
                  },
                  {
                    q: "Why had they left?",
                    ru: "Почему они ушли?",
                  },
                  {
                    q: "How long had you lived there?",
                    ru: "Как долго ты там жил?",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-indigo-50 rounded p-3">
                    <p className="font-semibold mb-1">{item.q}</p>
                    <p className="text-xs text-zinc-600">{item.ru}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="✏️ Практика: Вопросы">
        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Подсказки:</p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • Общий вопрос: <strong>Had</strong> выходит на первое место
            </li>
            <li>
              • Специальный вопрос: сначала <strong>Wh-word</strong>, потом Had
            </li>
            <li>• Глагол всегда в 3-й форме (V3)</li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение 3"
          instruction="Составьте вопрос, используя Past Perfect:"
          items={[
            {
              left: "",
              answers: ["Had you finished", "had you finished"],
              right: "your homework? (you/finish)",
              explanation: "Общий вопрос: Had + you + finished",
            },
            {
              left: "Where",
              answers: ["had she gone", "had she gone"],
              right: "? (she/go)",
              explanation: "Where + had she gone (специальный вопрос)",
            },
            {
              left: "What",
              answers: ["had they done", "had they done"],
              right: "? (they/do)",
              explanation: "What + had they done",
            },
            {
              left: "",
              answers: ["Had he eaten", "had he eaten"],
              right: "breakfast? (he/eat)",
              explanation: "Общий вопрос: Had + he + eaten",
            },
            {
              left: "Why",
              answers: ["had you left", "had you left"],
              right: "early? (you/leave)",
              explanation: "Why + had you left",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 6: Past Perfect vs Past Simple + упражнение ========== */
function Step6() {
  return (
    <>
      <UiSection title="⚖️ Past Perfect vs Past Simple">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6 border-2 border-purple-300">
          <h3 className="text-2xl font-bold text-purple-900 text-center mb-6">
            В чём разница? ПОСЛЕДОВАТЕЛЬНОСТЬ vs ПРОСТОЕ ПРОШЛОЕ
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 border-2 border-purple-300">
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">⏪</div>
                <h4 className="text-xl font-bold text-purple-900">
                  Past Perfect
                </h4>
                <p className="text-sm text-purple-700 font-semibold mt-2">
                  had + V3
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 mb-3">
                <p className="font-bold text-purple-900 mb-2">Показывает:</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Действие ДО другого прошлого действия</li>
                  <li>✓ ПЕРВОЕ из двух действий</li>
                  <li>✓ Результат к моменту в прошлом</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded p-3 border border-green-300">
                <p className="font-semibold mb-1">
                  When I arrived, she <strong>had left</strong>.
                </p>
                <p className="text-xs text-zinc-600 mb-2">
                  Когда я пришёл, она уже ушла.
                </p>
                <p className="text-xs text-purple-700">
                  💡 Сначала ушла (had left), потом я пришёл (arrived)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-blue-300">
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">⏺️</div>
                <h4 className="text-xl font-bold text-blue-900">Past Simple</h4>
                <p className="text-sm text-blue-700 font-semibold mt-2">
                  V2 (Past)
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <p className="font-bold text-blue-900 mb-2">Показывает:</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Простое действие в прошлом</li>
                  <li>✓ Конкретный момент</li>
                  <li>✓ ВТОРОЕ (более позднее) действие</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded p-3 border border-green-300">
                <p className="font-semibold mb-1">
                  I <strong>arrived</strong> at 5 PM.
                </p>
                <p className="text-xs text-zinc-600 mb-2">
                  Я пришёл в 5 вечера.
                </p>
                <p className="text-xs text-blue-700">
                  💡 Просто констатация факта в прошлом
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
            <h4 className="font-bold text-purple-900 mb-4 text-lg">
              📊 Сравнение на примерах:
            </h4>
            <div className="space-y-4">
              {[
                {
                  pp: "When I got home, my wife had cooked dinner.",
                  ppNote: "Сначала приготовила (1), потом я пришёл (2)",
                  ps: "When I got home, my wife cooked dinner.",
                  psNote: "Я пришёл (1), потом она приготовила (2)",
                },
                {
                  pp: "The train had left when we arrived at the station.",
                  ppNote: "Поезд уехал раньше нашего прибытия",
                  ps: "The train left at 6 PM.",
                  psNote: "Просто констатация: поезд уехал в 6",
                },
                {
                  pp: "I had studied English before I moved to London.",
                  ppNote: "Учил английский ДО переезда",
                  ps: "I studied English in London.",
                  psNote: "Учил английский В Лондоне (простой факт)",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-300">
                    <p className="font-semibold text-purple-900 mb-1">
                      {item.pp}
                    </p>
                    <p className="text-xs text-zinc-600">{item.ppNote}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-300">
                    <p className="font-semibold text-blue-900 mb-1">
                      {item.ps}
                    </p>
                    <p className="text-xs text-zinc-600">{item.psNote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="✏️ Практика: Past Perfect или Past Simple?">
        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Подсказки:</p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • Если два действия в прошлом → <strong>ПЕРВОЕ</strong> = Past
              Perfect
            </li>
            <li>
              • Если два действия в прошлом → <strong>ВТОРОЕ</strong> = Past
              Simple
            </li>
            <li>
              • Слова-помощники:{" "}
              <strong>before, after, when, by the time</strong>
            </li>
            <li>• Одно действие без последовательности → Past Simple</li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение 4"
          instruction="Выберите правильную форму глагола:"
          items={[
            {
              left: "When I arrived, the film",
              answers: ["had started", "'d started"],
              right: ". (start - первое действие)",
              explanation:
                "Фильм начался ДО моего прибытия → Past Perfect (had started)",
            },
            {
              left: "She",
              answers: ["finished"],
              right: "her work yesterday. (finish - простой факт)",
              explanation:
                "Просто факт в прошлом (yesterday) → Past Simple (finished)",
            },
            {
              left: "They",
              answers: ["had eaten", "'d eaten"],
              right: "before I came. (eat - первое действие)",
              explanation:
                "Они поели ДО моего прихода → Past Perfect (had eaten)",
            },
            {
              left: "I",
              answers: ["saw"],
              right: "that movie last week. (see - простой факт)",
              explanation: "Просто факт (last week) → Past Simple (saw)",
            },
            {
              left: "By 2020, we",
              answers: ["had lived", "'d lived"],
              right: "there for 5 years. (live - к моменту)",
              explanation:
                "К моменту в прошлом (by 2020) → Past Perfect (had lived)",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 7: Маркеры времени + упражнение ========== */
function Step7() {
  return (
    <>
      <UiSection title="🔑 Маркеры времени (Time markers)">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-6 border-2 border-blue-300">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
            Слова-подсказки для Past Perfect
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-indigo-300">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">⏰</div>
                <h4 className="font-bold text-indigo-900 text-xl">
                  Показывают последовательность
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  {
                    word: "before",
                    meaning: "до того как",
                    example: "I had eaten before he arrived.",
                  },
                  {
                    word: "after",
                    meaning: "после того как",
                    example: "After she had left, I called her.",
                  },
                  {
                    word: "when",
                    meaning: "когда",
                    example: "When I came, they had left.",
                  },
                  {
                    word: "by the time",
                    meaning: "к тому времени как",
                    example: "By the time we arrived, the show had started.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-indigo-50 rounded p-3 border border-indigo-200"
                  >
                    <p className="font-bold text-indigo-900">{item.word}</p>
                    <p className="text-xs text-zinc-600 mb-1">{item.meaning}</p>
                    <p className="text-xs text-blue-700 italic">
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border-2 border-purple-300">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">✅</div>
                <h4 className="font-bold text-purple-900 text-xl">
                  Показывают завершённость
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  {
                    word: "already",
                    meaning: "уже",
                    example: "I had already seen that film.",
                  },
                  {
                    word: "just",
                    meaning: "только что",
                    example: "She had just finished.",
                  },
                  {
                    word: "never",
                    meaning: "никогда",
                    example: "I had never been to Paris.",
                  },
                  {
                    word: "ever",
                    meaning: "когда-либо",
                    example: "Had you ever visited Rome?",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-purple-50 rounded p-3 border border-purple-200"
                  >
                    <p className="font-bold text-purple-900">{item.word}</p>
                    <p className="text-xs text-zinc-600 mb-1">{item.meaning}</p>
                    <p className="text-xs text-purple-700 italic">
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border-2 border-green-300">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">📍</div>
                <h4 className="font-bold text-green-900 text-xl">
                  Показывают момент времени
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  {
                    word: "by",
                    meaning: "к (моменту)",
                    example: "By 2020, I had finished university.",
                  },
                  {
                    word: "by then",
                    meaning: "к тому времени",
                    example: "By then, they had left.",
                  },
                  {
                    word: "until",
                    meaning: "до",
                    example: "I had lived there until 2019.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-green-50 rounded p-3 border border-green-200"
                  >
                    <p className="font-bold text-green-900">{item.word}</p>
                    <p className="text-xs text-zinc-600 mb-1">{item.meaning}</p>
                    <p className="text-xs text-green-700 italic">
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border-2 border-amber-300">
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">📅</div>
                <h4 className="font-bold text-amber-900 text-xl">
                  Показывают период
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  {
                    word: "for",
                    meaning: "в течение",
                    example: "I had worked there for 5 years.",
                  },
                  {
                    word: "since",
                    meaning: "с (момента)",
                    example: "She had lived there since 2015.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-amber-50 rounded p-3 border border-amber-200"
                  >
                    <p className="font-bold text-amber-900">{item.word}</p>
                    <p className="text-xs text-zinc-600 mb-1">{item.meaning}</p>
                    <p className="text-xs text-amber-700 italic">
                      {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="✏️ Практика: Маркеры времени">
        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Подсказки:</p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • <strong>Before/after/when</strong> — последовательность событий
            </li>
            <li>
              • <strong>Already/just/never</strong> — завершённость действия
            </li>
            <li>
              • <strong>By</strong> — к определённому моменту
            </li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение 5"
          instruction="Выберите подходящий маркер времени:"
          items={[
            {
              left: "I had",
              answers: ["already", "Already"],
              right: "seen that movie.",
              explanation:
                "Already (уже) показывает завершённость действия к моменту в прошлом",
            },
            {
              left: "",
              answers: ["By", "by"],
              right: "2020, she had moved to London.",
              explanation:
                "By (к моменту) показывает конкретное время в прошлом",
            },
            {
              left: "They left",
              answers: ["after", "After"],
              right: "they had finished dinner.",
              explanation:
                "After (после того как) — сначала закончили ужин, потом ушли",
            },
            {
              left: "I had never",
              answers: ["been"],
              right: "to Paris before. (be)",
              explanation:
                "Never (никогда) + Past Perfect показывает, что не было опыта до этого момента. Be → been",
            },
            {
              left: "She had",
              answers: ["just", "Just"],
              right: "finished when I called.",
              explanation:
                "Just (только что) показывает, что действие закончилось незадолго до другого",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 8: Перевод с русского на английский ========== */
function Step8() {
  return (
    <>
      <UiSection title="🇷🇺 → 🇬🇧 Перевод с русского на английский">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            Задание: переведите предложения с русского на английский
          </h3>
          <p className="text-sm text-zinc-700 mb-4">
            Используйте Past Perfect там, где это необходимо. Обращайте внимание
            на слова-подсказки.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">
            💡 Подсказки для перевода:
          </p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • "уже" обычно = <strong>already</strong>
            </li>
            <li>
              • "до того как" = <strong>before</strong>
            </li>
            <li>
              • "когда" = <strong>when</strong>
            </li>
            <li>
              • "к тому времени" = <strong>by that time / by then</strong>
            </li>
            <li>• Первое действие → Past Perfect</li>
            <li>• Второе действие → Past Simple</li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение 6: Перевод с русского (часть 1)"
          instruction="Переведите предложения на английский:"
          items={[
            {
              left: "Когда я пришёл, она",
              answers: [
                "had already left",
                "had left",
                "'d already left",
                "'d left",
              ],
              right: ". (уже уйти)",
              explanation:
                "When I arrived/came, she had already left. Она ушла ДО моего прихода → Past Perfect",
            },
            {
              left: "Я",
              answers: ["had never seen", "'d never seen"],
              right: "that film before. (никогда не видеть)",
              explanation:
                "I had never seen. Never + Past Perfect для опыта в прошлом. See → seen",
            },
            {
              left: "Они",
              answers: [
                "had eaten",
                "'d eaten",
                "had already eaten",
                "'d already eaten",
              ],
              right: "before I came. (поесть до того как)",
              explanation:
                "They had eaten / had already eaten before I came. Поели ДО моего прихода",
            },
            {
              left: "К 2020 году мы",
              answers: ["had lived", "'d lived"],
              right: "there for 5 years. (жить)",
              explanation:
                "By 2020, we had lived there for 5 years. By 2020 = к моменту → Past Perfect",
            },
            {
              left: "Она",
              answers: [
                "had finished",
                "'d finished",
                "had already finished",
                "'d already finished",
              ],
              right: "her work before dinner. (закончить)",
              explanation:
                "She had finished her work before dinner. Закончила ДО ужина",
            },
          ]}
        />
      </UiSection>

      <UiSection title="🇷🇺 → 🇬🇧 Перевод (продолжение)">
        <CheckableExercise
          title="Упражнение 7: Перевод с русского (часть 2)"
          instruction="Переведите более сложные предложения:"
          items={[
            {
              left: "Когда фильм начался, мы",
              answers: [
                "had not arrived",
                "hadn't arrived",
                "had not arrived yet",
                "hadn't arrived yet",
              ],
              right: ". (ещё не прийти)",
              explanation:
                "When the film started, we had not arrived (yet). Фильм начался, но мы ещё не пришли → Past Perfect отрицание",
            },
            {
              left: "Он был голоден, потому что",
              answers: ["had not eaten", "hadn't eaten"],
              right: "breakfast. (не есть)",
              explanation:
                "He was hungry because he had not eaten / hadn't eaten breakfast. Причина в прошлом (не поел) объясняет состояние (был голоден)",
            },
            {
              left: "After they",
              answers: ["had finished", "'d finished"],
              right: "dinner, they went to the cinema. (закончить)",
              explanation:
                "After they had finished dinner, they went... После того как закончили → Past Perfect, потом пошли → Past Simple",
            },
            {
              left: "I",
              answers: ["had studied", "'d studied"],
              right: "English before I moved to London. (учить)",
              explanation:
                "I had studied English before I moved to London. Учил ДО переезда → Past Perfect",
            },
            {
              left: "By the time we arrived, the train",
              answers: [
                "had left",
                "'d left",
                "had already left",
                "'d already left",
              ],
              right: ". (уехать)",
              explanation:
                "By the time we arrived, the train had left. К моменту прибытия поезд уже уехал",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 9: Работа с текстом + составление предложений ========== */
function Step9() {
  return (
    <>
      <UiSection title="📖 Работа с текстом">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-6 border-2 border-amber-300">
          <h3 className="text-xl font-bold text-amber-900 mb-4">
            Прочитайте текст и ответьте TRUE или FALSE
          </h3>

          <div className="bg-white rounded-lg p-6 border-2 border-amber-200 mb-4">
            <h4 className="font-bold text-lg mb-3 text-center">
              A Missed Flight
            </h4>
            <p className="text-base leading-relaxed mb-3">
              Last week, Tom <strong>had planned</strong> to fly to New York for
              an important meeting. He <strong>had booked</strong> his ticket
              three months earlier and <strong>had prepared</strong> all his
              documents carefully.
            </p>
            <p className="text-base leading-relaxed mb-3">
              On the day of the flight, Tom <strong>woke up</strong> late
              because his alarm clock <strong>hadn't rung</strong>. When he{" "}
              <strong>arrived</strong> at the airport, he{" "}
              <strong>realized</strong> that his flight{" "}
              <strong>had already departed</strong>. The plane{" "}
              <strong>had left</strong> 20 minutes before he{" "}
              <strong>got</strong> there.
            </p>
            <p className="text-base leading-relaxed">
              Tom <strong>was</strong> very upset because he{" "}
              <strong>had never missed</strong> a flight before. He{" "}
              <strong>had to</strong> buy a new, more expensive ticket for the
              next flight. By the time he <strong>arrived</strong> in New York,
              the meeting <strong>had already finished</strong>.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
            <p className="font-bold text-blue-900 mb-2">💡 Подсказка:</p>
            <p className="text-sm text-zinc-700">
              Внимательно читайте текст и обращайте внимание на
              последовательность событий
            </p>
          </div>

          <CheckableExercise
            title="Упражнение 8: TRUE or FALSE"
            instruction="Прочитайте утверждение и напишите true или false:"
            items={[
              {
                left: "Tom had booked his ticket three months before the flight.",
                answers: ["true", "True", "TRUE"],
                right: "",
                explanation:
                  "Правда! В тексте: 'He had booked his ticket three months earlier'",
              },
              {
                left: "Tom's alarm clock rang on time.",
                answers: ["false", "False", "FALSE"],
                right: "",
                explanation:
                  "Ложь! В тексте: 'his alarm clock hadn't rung' (будильник НЕ зазвонил)",
              },
              {
                left: "The plane had already left when Tom arrived at the airport.",
                answers: ["true", "True", "TRUE"],
                right: "",
                explanation:
                  "Правда! 'his flight had already departed' — самолёт улетел ДО его прибытия",
              },
              {
                left: "Tom had missed flights many times before.",
                answers: ["false", "False", "FALSE"],
                right: "",
                explanation:
                  "Ложь! 'he had never missed a flight before' — он НИКОГДА раньше не опаздывал",
              },
              {
                left: "Tom arrived in New York before the meeting finished.",
                answers: ["false", "False", "FALSE"],
                right: "",
                explanation:
                  "Ложь! 'By the time he arrived in New York, the meeting had already finished' — встреча уже закончилась",
              },
              {
                left: "Tom had to buy a more expensive ticket.",
                answers: ["true", "True", "TRUE"],
                right: "",
                explanation:
                  "Правда! 'He had to buy a new, more expensive ticket'",
              },
            ]}
          />
        </div>
      </UiSection>

      <UiSection title="✍️ Составление предложений по тексту">
        <div className="bg-purple-50 rounded-lg p-4 mb-4 border-2 border-purple-300">
          <p className="font-bold text-purple-900 mb-2">💡 Задание:</p>
          <p className="text-sm text-zinc-700">
            Составьте предложения на основе текста, используя Past Perfect
          </p>
        </div>

        <CheckableExercise
          title="Упражнение 9: Составление предложений"
          instruction="Составьте предложение из слов в скобках:"
          items={[
            {
              left: "Tom",
              answers: [
                "had planned to fly to New York",
                "'d planned to fly to New York",
              ],
              right: ". (plan / fly / New York)",
              explanation:
                "Tom + had planned + to fly to New York. Планировал ДО того как что-то пошло не так",
            },
            {
              left: "He",
              answers: [
                "had prepared all his documents",
                "'d prepared all his documents",
              ],
              right: ". (prepare / documents)",
              explanation:
                "He + had prepared + all his documents. Подготовил заранее",
            },
            {
              left: "His alarm clock",
              answers: ["hadn't rung", "had not rung"],
              right: ". (not ring)",
              explanation:
                "His alarm clock + hadn't rung. Отрицание: будильник НЕ зазвонил",
            },
            {
              left: "The plane",
              answers: [
                "had left",
                "'d left",
                "had already left",
                "'d already left",
              ],
              right: "20 minutes before. (leave)",
              explanation:
                "The plane + had left + 20 minutes before. Самолёт улетел раньше",
            },
            {
              left: "He",
              answers: ["had never missed", "'d never missed"],
              right: "a flight before. (never miss)",
              explanation:
                "He + had never missed + a flight before. Never + Past Perfect",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 10: Косвенная речь (Reported Speech) ========== */
function Step10() {
  return (
    <>
      <UiSection title="💬 Past Perfect в косвенной речи">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6 border-2 border-green-300">
          <h3 className="text-xl font-bold text-green-900 mb-4">
            Reported Speech — Косвенная речь
          </h3>

          <div className="bg-white rounded-lg p-6 mb-4">
            <p className="text-lg text-zinc-800 leading-relaxed mb-4">
              Когда мы передаём чужие слова, время часто "сдвигается назад":
            </p>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-bold text-green-900 mb-2">
                📌 Правило сдвига времён:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>Present Simple → Past Simple</strong>
                </li>
                <li>
                  • <strong>Present Continuous → Past Continuous</strong>
                </li>
                <li>
                  • <strong>Past Simple → Past Perfect</strong> ⭐
                </li>
                <li>
                  • <strong>Present Perfect → Past Perfect</strong> ⭐
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-green-900 text-lg">Примеры:</h4>

            {[
              {
                direct: '"I finished my work."',
                reported: "He said (that) he had finished his work.",
                ru: "Он сказал, что закончил работу.",
                rule: "Past Simple (finished) → Past Perfect (had finished)",
              },
              {
                direct: '"I have seen that movie."',
                reported: "She said (that) she had seen that movie.",
                ru: "Она сказала, что видела этот фильм.",
                rule: "Present Perfect (have seen) → Past Perfect (had seen)",
              },
              {
                direct: '"We visited Paris."',
                reported: "They said (that) they had visited Paris.",
                ru: "Они сказали, что посетили Париж.",
                rule: "Past Simple (visited) → Past Perfect (had visited)",
              },
              {
                direct: '"I have never been to London."',
                reported: "He told me (that) he had never been to London.",
                ru: "Он сказал мне, что никогда не был в Лондоне.",
                rule: "Present Perfect (have never been) → Past Perfect (had never been)",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-2 border-green-200"
              >
                <div className="bg-blue-50 rounded p-3 mb-2">
                  <p className="font-bold text-blue-900 mb-1">
                    Прямая речь (Direct Speech):
                  </p>
                  <p className="text-sm">{item.direct}</p>
                </div>
                <div className="bg-green-100 rounded p-3 mb-2">
                  <p className="font-bold text-green-900 mb-1">
                    Косвенная речь (Reported Speech):
                  </p>
                  <p className="text-sm">{item.reported}</p>
                </div>
                <p className="text-sm text-zinc-600 mb-2">{item.ru}</p>
                <p className="text-xs text-green-700 italic">💡 {item.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="✏️ Практика: Косвенная речь">
        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Подсказки:</p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>• Past Simple в прямой речи → Past Perfect в косвенной</li>
            <li>• Present Perfect в прямой речи → Past Perfect в косвенной</li>
            <li>
              • Используйте <strong>said (that)</strong> или{" "}
              <strong>told me (that)</strong>
            </li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение 10"
          instruction='Переведите в косвенную речь (начните с "He said that..."):'
          items={[
            {
              left: "He said that he",
              answers: ["had finished", "'d finished"],
              right: 'the work. ("I finished the work.")',
              explanation:
                "Past Simple (finished) → Past Perfect (had finished) в косвенной речи",
            },
            {
              left: "She told me that she",
              answers: ["had seen", "'d seen"],
              right: 'that movie before. ("I have seen that movie before.")',
              explanation:
                "Present Perfect (have seen) → Past Perfect (had seen)",
            },
            {
              left: "They said that they",
              answers: ["had bought", "'d bought"],
              right: 'a new car. ("We bought a new car.")',
              explanation: "Past Simple (bought) → Past Perfect (had bought)",
            },
            {
              left: "He told me that he",
              answers: ["had never visited", "'d never visited"],
              right: 'Paris before. ("I have never visited Paris before.")',
              explanation:
                "Present Perfect (have never visited) → Past Perfect (had never visited)",
            },
            {
              left: "She said that she",
              answers: ["had lived", "'d lived"],
              right:
                'in London for 5 years. ("I lived in London for 5 years.")',
              explanation: "Past Simple (lived) → Past Perfect (had lived)",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 11: Исправление ошибок + дописывание ========== */
function Step11() {
  return (
    <>
      <UiSection title="🔧 Исправление ошибок">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 mb-6 border-2 border-red-300">
          <h3 className="text-xl font-bold text-red-900 mb-4">
            Задание: найдите и исправьте ошибки
          </h3>
          <p className="text-sm text-zinc-700 mb-4">
            В каждом предложении есть ошибка. Напишите правильный вариант.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Подсказки:</p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • Проверьте формулу: <strong>had + V3</strong>
            </li>
            <li>• Проверьте 3-ю форму глагола (V3)</li>
            <li>• Проверьте последовательность времён</li>
            <li>• Проверьте правильность маркеров (for/since, before/after)</li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение 11: Исправьте ошибки"
          instruction="Найдите ошибку и напишите правильное предложение:"
          items={[
            {
              left: "❌ I have finished my work before he arrived. → ✅ I",
              answers: ["had finished", "'d finished"],
              right: "my work before he arrived.",
              explanation:
                "Когда два действия в прошлом, ПЕРВОЕ = Past Perfect (have → had)",
            },
            {
              left: "❌ She had went to the shop. → ✅ She",
              answers: ["had gone", "'d gone"],
              right: "to the shop.",
              explanation:
                "Go → went → GONE (3-я форма). Неправильно: had went ❌, правильно: had gone ✅",
            },
            {
              left: "❌ They lived there since 2015. → ✅ They",
              answers: ["had lived", "'d lived"],
              right: "there since 2015.",
              explanation:
                "Since 2015 = с момента в прошлом → нужен Past Perfect (had lived)",
            },
            {
              left: "❌ When I arrived, the film already started. → ✅ When I arrived, the film",
              answers: ["had already started", "'d already started"],
              right: ".",
              explanation:
                "Фильм начался ДО прибытия → Past Perfect (had already started)",
            },
            {
              left: "❌ He had finish his homework. → ✅ He",
              answers: ["had finished", "'d finished"],
              right: "his homework.",
              explanation:
                "Глагол должен быть в 3-й форме! Had + finished (не finish)",
            },
          ]}
        />
      </UiSection>

      <UiSection title="✏️ Дописывание предложений">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 mb-6 border-2 border-green-300">
          <h3 className="text-xl font-bold text-green-900 mb-4">
            Задание: дополните предложения
          </h3>
          <p className="text-sm text-zinc-700 mb-4">
            Прочитайте начало и дополните логичным окончанием, используя Past
            Perfect.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Подсказки:</p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>• Смотрите на контекст и результат</li>
            <li>• Используйте Past Perfect для первого действия</li>
            <li>• Можно добавлять already/just/never</li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение 12: Дополните предложения"
          instruction="Дополните предложение логичным окончанием:"
          items={[
            {
              left: "When I arrived at the cinema, the film",
              answers: [
                "had started",
                "'d started",
                "had already started",
                "'d already started",
              ],
              right: ".",
              explanation:
                "Фильм начался → результат: я опоздал. Варианты: had started / had already started",
            },
            {
              left: "She was tired because she",
              answers: [
                "had worked all day",
                "'d worked all day",
                "had been working all day",
                "'d been working all day",
              ],
              right: ".",
              explanation:
                "Причина усталости → работала весь день. Варианты: had worked all day / had been working all day",
            },
            {
              left: "They couldn't enter the house because they",
              answers: [
                "had lost the keys",
                "'d lost the keys",
                "had lost their keys",
                "'d lost their keys",
              ],
              right: ".",
              explanation:
                "Не могли войти → причина: потеряли ключи. Had lost the keys",
            },
            {
              left: "I wasn't hungry because I",
              answers: [
                "had eaten",
                "'d eaten",
                "had already eaten",
                "'d already eaten",
                "had just eaten",
                "'d just eaten",
              ],
              right: ".",
              explanation:
                "Не был голоден → уже поел. Варианты: had eaten / had already eaten / had just eaten",
            },
            {
              left: "By 2020, we",
              answers: [
                "had lived there for 5 years",
                "'d lived there for 5 years",
                "had been living there for 5 years",
                "'d been living there for 5 years",
              ],
              right: ".",
              explanation:
                "К 2020 году + результат за период. Варианты: had lived there for 5 years / had been living there for 5 years",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ========== ШАГ 12: Финальный тест ========== */
function Step12() {
  return (
    <>
      <UiSection title="🎓 Финальный тест: Past Perfect">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6 mb-6 border-2 border-indigo-400">
          <h3 className="text-2xl font-bold text-indigo-900 text-center mb-4">
            Проверьте, как вы усвоили материал!
          </h3>
          <p className="text-center text-zinc-700">
            Этот тест проверит ваше понимание Past Perfect
          </p>
        </div>
      </UiSection>

      <UiSection title="Part 1: TRUE or FALSE">
        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Инструкция:</p>
          <p className="text-sm text-zinc-700">
            Прочитайте утверждения и напишите <strong>true</strong> (правда) или{" "}
            <strong>false</strong> (ложь)
          </p>
        </div>

        <CheckableExercise
          title="True or False"
          instruction="Напишите true или false:"
          items={[
            {
              left: "Past Perfect показывает действие, которое произошло ДО другого действия в прошлом.",
              answers: ["true", "True", "TRUE"],
              right: "",
              explanation:
                "Правда! Past Perfect = действие ДО другого прошлого действия",
            },
            {
              left: "Формула Past Perfect: have/has + V3",
              answers: ["false", "False", "FALSE"],
              right: "",
              explanation: "Ложь! Правильная формула: HAD + V3 (не have/has)",
            },
            {
              left: "'By 2020' — это маркер для Past Perfect.",
              answers: ["true", "True", "TRUE"],
              right: "",
              explanation:
                "Правда! By + год/момент = к определённому времени в прошлом",
            },
            {
              left: "В предложении с before/after всегда нужны Past Perfect и Past Simple.",
              answers: ["true", "True", "TRUE"],
              right: "",
              explanation:
                "Правда! Before/after показывают последовательность: первое действие = Past Perfect, второе = Past Simple",
            },
            {
              left: "В косвенной речи Past Simple становится Past Perfect.",
              answers: ["true", "True", "TRUE"],
              right: "",
              explanation:
                "Правда! При передаче чужих слов: Past Simple → Past Perfect",
            },
            {
              left: "Можно сказать: 'I had went to the shop'",
              answers: ["false", "False", "FALSE"],
              right: "",
              explanation:
                "Ложь! Правильно: had GONE (3-я форма), не 'had went'",
            },
          ]}
        />
      </UiSection>

      <UiSection title="Part 2: Комплексная практика">
        <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
          <p className="font-bold text-blue-900 mb-2">💡 Инструкция:</p>
          <p className="text-sm text-zinc-700">
            Используйте все знания о Past Perfect для решения задач
          </p>
        </div>

        <CheckableExercise
          title="Комплексное упражнение"
          instruction="Поставьте глагол в правильную форму (Past Perfect или Past Simple):"
          items={[
            {
              left: "When I got to the station, the train",
              answers: [
                "had left",
                "'d left",
                "had already left",
                "'d already left",
              ],
              right: ". (leave)",
              explanation:
                "Поезд уехал ДО моего прибытия → Past Perfect (had left)",
            },
            {
              left: "She was happy because she",
              answers: ["had passed", "'d passed"],
              right: "the exam. (pass)",
              explanation:
                "Причина радости в прошлом → Past Perfect (had passed)",
            },
            {
              left: "They",
              answers: ["visited"],
              right: "Paris last year. (visit)",
              explanation:
                "Last year = конкретное время → Past Simple (visited)",
            },
            {
              left: "I",
              answers: ["had never seen", "'d never seen"],
              right: "such a beautiful sunset before. (never see)",
              explanation:
                "Never + опыт до момента в прошлом → Past Perfect (had never seen)",
            },
            {
              left: "By the time we arrived, they",
              answers: [
                "had finished",
                "'d finished",
                "had already finished",
                "'d already finished",
              ],
              right: "dinner. (finish)",
              explanation:
                "By the time = к моменту → Past Perfect (had finished)",
            },
            {
              left: "After she",
              answers: ["had done", "'d done"],
              right: "her homework, she watched TV. (do)",
              explanation:
                "After + первое действие → Past Perfect (had done), второе → Past Simple (watched)",
            },
            {
              left: "He told me that he",
              answers: ["had bought", "'d bought"],
              right: "a new car. (buy)",
              explanation:
                "Косвенная речь: Past Simple → Past Perfect (had bought)",
            },
            {
              left: "When they arrived home, they realized they",
              answers: ["had forgotten", "'d forgotten"],
              right: "the keys. (forget)",
              explanation:
                "Забыли ключи ДО прибытия домой → Past Perfect (had forgotten)",
            },
          ]}
        />
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-8 text-center border-2 border-green-400">
          <div className="text-7xl mb-4">🎓</div>
          <h3 className="text-3xl font-bold text-green-900 mb-3">
            Вы освоили Past Perfect!
          </h3>
          <p className="text-lg text-green-700 mb-4">
            Теперь вы знаете, как показывать последовательность событий в
            прошлом и правильно использовать "прошлое в прошлом"!
          </p>
          <div className="bg-white rounded-lg p-6 inline-block">
            <p className="font-bold text-indigo-900 mb-3">Что вы изучили:</p>
            <ul className="text-left text-sm space-y-1">
              <li>✅ Когда использовать Past Perfect</li>
              <li>✅ Формула: had + V3 (Past Participle)</li>
              <li>✅ Утверждения, отрицания и вопросы</li>
              <li>✅ Past Perfect vs Past Simple</li>
              <li>✅ Маркеры времени (before, after, by, already, never)</li>
              <li>✅ Перевод с русского на английский</li>
              <li>✅ Работа с текстами</li>
              <li>✅ Косвенная речь (Reported Speech)</li>
              <li>✅ Исправление типичных ошибок</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-sm text-green-800 italic">
              💪 Past Perfect теперь в ваших руках! Продолжайте практиковаться и
              следите за последовательностью событий!
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
