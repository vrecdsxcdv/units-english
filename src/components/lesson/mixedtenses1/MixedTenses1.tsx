"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function MixedTenses1({ step }: Props) {
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

/* ===== ШАГ 1: Обзор времён ===== */
function Step1() {
  return (
    <>
      <UiSection title="🔄 Mixed Tenses Review 1 — Повторение времён">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-6 mb-4 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            Акцент на Present Perfect Continuous и связанные времена
          </p>
          <p className="text-zinc-700 mb-2">
            В этом уроке мы повторим и сравним{" "}
            <strong>Present Perfect Continuous</strong> с другими временами,
            научимся правильно выбирать время в зависимости от контекста.
          </p>
        </div>
      </UiSection>

      <UiSection title="📊 Времена, которые мы повторим">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-indigo-100 to-sky-100 rounded-lg p-6 border-2 border-indigo-300">
            <h4 className="text-xl font-bold text-indigo-900 mb-3">
              ⏱️ Present Perfect Continuous
            </h4>
            <div className="bg-white rounded-lg p-4">
              <p className="font-mono text-sm mb-2">have/has been + V-ing</p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong> Длительность действия до настоящего
              </p>
              <div className="bg-indigo-50 rounded p-2">
                <p className="text-sm">
                  I <strong>have been studying</strong> for 3 hours.
                </p>
                <p className="text-xs text-zinc-600">Я учусь уже 3 часа.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-lg p-6 border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-900 mb-3">
              ✅ Present Perfect
            </h4>
            <div className="bg-white rounded-lg p-4">
              <p className="font-mono text-sm mb-2">have/has + V3</p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong> Результат или факт (связь с настоящим)
              </p>
              <div className="bg-blue-50 rounded p-2">
                <p className="text-sm">
                  I <strong>have finished</strong> my work.
                </p>
                <p className="text-xs text-zinc-600">Я закончил свою работу.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6 border-2 border-purple-300">
            <h4 className="text-xl font-bold text-purple-900 mb-3">
              🔄 Present Continuous
            </h4>
            <div className="bg-white rounded-lg p-4">
              <p className="font-mono text-sm mb-2">am/is/are + V-ing</p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong> Действие происходит СЕЙЧАС
              </p>
              <div className="bg-purple-50 rounded p-2">
                <p className="text-sm">
                  I <strong>am studying</strong> right now.
                </p>
                <p className="text-xs text-zinc-600">Я учусь прямо сейчас.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-100 to-indigo-100 rounded-lg p-6 border-2 border-sky-300">
            <h4 className="text-xl font-bold text-sky-900 mb-3">
              📅 Present Simple
            </h4>
            <div className="bg-white rounded-lg p-4">
              <p className="font-mono text-sm mb-2">V1 / V1+s</p>
              <p className="text-sm text-zinc-700 mb-2">
                <strong>Когда:</strong> Регулярность, факты, привычки
              </p>
              <div className="bg-sky-50 rounded p-2">
                <p className="text-sm">
                  I <strong>study</strong> English every day.
                </p>
                <p className="text-xs text-zinc-600">
                  Я учу английский каждый день.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎯 Цель урока">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-300">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <p className="font-semibold text-amber-900">
                  Научиться различать Present Perfect Continuous и другие
                  времена
                </p>
                <p className="text-sm text-zinc-600">
                  Понять, когда использовать какое время
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <p className="font-semibold text-orange-900">
                  Практиковать выбор правильного времени
                </p>
                <p className="text-sm text-zinc-600">
                  Через контекстные упражнения
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <p className="font-semibold text-amber-900">
                  Избегать типичных ошибок
                </p>
                <p className="text-sm text-zinc-600">
                  Разобрать частые путаницы
                </p>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== ШАГ 2: Present Perfect Continuous vs Present Perfect ===== */
function Step2() {
  return (
    <>
      <UiSection title="⚖️ Present Perfect Continuous vs Present Perfect">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Главное различие: ПРОЦЕСС vs РЕЗУЛЬТАТ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                Present Perfect Continuous
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Акцент на <strong>ПРОЦЕССЕ</strong> и{" "}
                <strong>ДЛИТЕЛЬНОСТИ</strong>
              </p>
              <div className="space-y-3">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    I've been reading for 2 hours.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я читаю уже 2 часа (процесс длится)
                  </p>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    She's been working all morning.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Она работает всё утро (длительность)
                  </p>
                </div>
              </div>
              <div className="mt-3 bg-indigo-100 rounded p-2">
                <p className="text-xs font-bold text-indigo-900">
                  💡 Важна длительность!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                Present Perfect
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Акцент на <strong>РЕЗУЛЬТАТЕ</strong> или <strong>ФАКТЕ</strong>
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    I've read 3 books.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я прочитал 3 книги (результат: 3 книги)
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    She's finished her work.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Она закончила работу (результат: готово)
                  </p>
                </div>
              </div>
              <div className="mt-3 bg-blue-100 rounded p-2">
                <p className="text-xs font-bold text-blue-900">
                  💡 Важен результат!
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Ключевые различия">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-blue-100">
                <th className="border px-4 py-3 text-left">Критерий</th>
                <th className="border px-4 py-3 text-left">
                  Present Perfect Continuous
                </th>
                <th className="border px-4 py-3 text-left">Present Perfect</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border px-4 py-3 font-semibold">Вопрос</td>
                <td className="border px-4 py-3">КАК ДОЛГО? (How long?)</td>
                <td className="border px-4 py-3">СКОЛЬКО? (How many/much?)</td>
              </tr>
              <tr>
                <td className="border px-4 py-3 font-semibold">Фокус</td>
                <td className="border px-4 py-3">Процесс, длительность</td>
                <td className="border px-4 py-3">Результат, количество</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-3 font-semibold">Пример 1</td>
                <td className="border px-4 py-3">
                  I've been painting (процесс)
                </td>
                <td className="border px-4 py-3">
                  I've painted the door (готово)
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-3 font-semibold">Пример 2</td>
                <td className="border px-4 py-3">
                  She's been cooking (всё ещё готовит)
                </td>
                <td className="border px-4 py-3">
                  She's cooked 5 dishes (результат)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="🧪 Практика: процесс или результат?">
        <CheckableExercise
          title="Подберите правильное время"
          instruction="Вставьте форму Present Perfect Continuous или Present Perfect в зависимости от контекста."
          items={[
            {
              left: "1. I",
              answers: ["have been working", "'ve been working"],
              right: "on this project all week. (work)",
              explanation:
                "all week = длительность → Present Perfect Continuous.",
            },
            {
              left: "2. She",
              answers: ["has written", "'s written"],
              right: "10 emails today. (write)",
              explanation: "Количество (10 emails) → Present Perfect.",
            },
            {
              left: "3. They",
              answers: ["have been studying", "'ve been studying"],
              right: "since 9 AM. (study)",
              explanation: "since + точка начала → Present Perfect Continuous.",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 3: Present Perfect Continuous vs Present Continuous ===== */
function Step3() {
  return (
    <>
      <UiSection title="⚖️ Present Perfect Continuous vs Present Continuous">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Главное различие: ДЛИТЕЛЬНОСТЬ vs ПРЯМО СЕЙЧАС
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                Present Perfect Continuous
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Началось в прошлом, продолжается/недавно закончилось
              </p>
              <div className="space-y-3">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    I've been waiting for 30 minutes.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я жду уже 30 минут (начал раньше, всё ещё жду)
                  </p>
                </div>
              </div>
              <div className="mt-3 bg-indigo-100 rounded p-2">
                <p className="text-xs font-bold text-indigo-900">
                  💡 Важна длительность с момента начала!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-purple-900 mb-3">
                Present Continuous
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Происходит прямо СЕЙЧАС (в момент речи)
              </p>
              <div className="space-y-3">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    I'm waiting for the bus.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я жду автобус (прямо в данный момент)
                  </p>
                </div>
              </div>
              <div className="mt-3 bg-purple-100 rounded p-2">
                <p className="text-xs font-bold text-purple-900">
                  💡 Важен момент "сейчас"!
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔑 Ключевые маркеры">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-300">
            <h4 className="font-bold text-indigo-900 mb-3">
              Present Perfect Continuous:
            </h4>
            <div className="flex flex-wrap gap-2">
              {["for", "since", "all day", "how long", "lately"].map(
                (word, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm"
                  >
                    {word}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-300">
            <h4 className="font-bold text-purple-900 mb-3">
              Present Continuous:
            </h4>
            <div className="flex flex-wrap gap-2">
              {["now", "right now", "at the moment", "currently", "today"].map(
                (word, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-200 text-purple-900 px-3 py-1 rounded-full text-sm"
                  >
                    {word}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Сейчас или длительность?"
          instruction="Выберите Present Continuous или Present Perfect Continuous."
          items={[
            {
              left: "1. She",
              answers: ["is talking", "'s talking"],
              right: "on the phone right now. (talk)",
              explanation: "right now → Present Continuous.",
            },
            {
              left: "2. They",
              answers: ["have been living", "'ve been living"],
              right: "here for 5 years. (live)",
              explanation: "for 5 years → длительность с момента начала.",
            },
            {
              left: "3. I",
              answers: ["am watching", "'m watching"],
              right: "a movie at the moment. (watch)",
              explanation: "at the moment → Present Continuous.",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 4: Present Perfect Continuous vs Present Simple ===== */
function Step4() {
  return (
    <>
      <UiSection title="⚖️ Present Perfect Continuous vs Present Simple">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Главное различие: ДЛИТЕЛЬНОСТЬ vs РЕГУЛЯРНОСТЬ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                Present Perfect Continuous
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Длительное действие с момента начала до сейчас
              </p>
              <div className="space-y-3">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    I've been learning English for 3 years.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я учу английский 3 года (начал 3 года назад, до сих пор учу)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="text-xl font-bold text-sky-900 mb-3">
                Present Simple
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Регулярное действие, привычка, факт
              </p>
              <div className="space-y-3">
                <div className="bg-sky-50 border-l-4 border-sky-500 p-3">
                  <p className="font-semibold text-sm mb-1">
                    I learn English every day.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я учу английский каждый день (регулярная привычка)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Сравнительные примеры">
        <div className="space-y-4">
          {[
            {
              ppc: "She's been working here since 2020.",
              ppcRu: "Она работает здесь с 2020 года.",
              ps: "She works here.",
              psRu: "Она работает здесь.",
              diff: "PPC подчёркивает длительность (с 2020), PS — просто факт",
            },
            {
              ppc: "I've been studying all evening.",
              ppcRu: "Я учусь весь вечер.",
              ps: "I study in the evenings.",
              psRu: "Я учусь по вечерам.",
              diff: "PPC — конкретный вечер, длительность; PS — регулярность",
            },
            {
              ppc: "They've been living in London for 5 years.",
              ppcRu: "Они живут в Лондоне 5 лет.",
              ps: "They live in London.",
              psRu: "Они живут в Лондоне.",
              diff: "PPC — акцент на 5 лет; PS — просто факт о месте жительства",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-indigo-200 rounded-lg p-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="font-bold text-indigo-900 mb-2">
                    Present Perfect Continuous:
                  </p>
                  <p className="text-sm mb-1">{item.ppc}</p>
                  <p className="text-xs text-zinc-600">{item.ppcRu}</p>
                </div>
                <div className="bg-sky-50 rounded-lg p-4">
                  <p className="font-bold text-sky-900 mb-2">Present Simple:</p>
                  <p className="text-sm mb-1">{item.ps}</p>
                  <p className="text-xs text-zinc-600">{item.psRu}</p>
                </div>
              </div>
              <div className="bg-amber-50 rounded-lg p-3">
                <p className="text-sm text-amber-900">
                  <strong>Разница:</strong> {item.diff}
                </p>
              </div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ===== ШАГ 5: Контекстные упражнения 1 ===== */
function Step5() {
  const fillItems1: FillItem[] = [
    {
      left: "I",
      answers: ["have been working", "'ve been working"],
      right: "on this project for 2 months. (work)",
      explanation: "'for 2 months' = длительность → Present Perfect Continuous",
    },
    {
      left: "She",
      answers: ["is reading", "'s reading"],
      right: "a book right now. (read)",
      explanation: "'right now' = прямо сейчас → Present Continuous",
    },
    {
      left: "They",
      answers: ["have finished", "'ve finished"],
      right: "5 tasks today. (finish)",
      explanation: "'5 tasks' = количество, результат → Present Perfect",
    },
    {
      left: "We",
      answers: ["study"],
      right: "English every Monday. (study)",
      explanation: "'every Monday' = регулярность → Present Simple",
    },
    {
      left: "He",
      answers: ["has been living", "'s been living"],
      right: "here since 2020. (live)",
      explanation: "'since 2020' = длительность → Present Perfect Continuous",
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Выберите правильное время">
        <div className="bg-indigo-50 rounded-lg p-5 mb-6 border-2 border-indigo-300">
          <p className="font-bold text-indigo-900 mb-2">
            💡 Подсказки для выбора времени:
          </p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • <strong>for/since/how long</strong> → Present Perfect Continuous
            </li>
            <li>
              • <strong>now/right now/at the moment</strong> → Present
              Continuous
            </li>
            <li>
              • <strong>количество (3 books, 5 emails)</strong> → Present
              Perfect
            </li>
            <li>
              • <strong>every day/always/usually</strong> → Present Simple
            </li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение: Mixed Tenses"
          instruction="Поставьте глагол в скобках в правильное время:"
          items={fillItems1}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 6: Контекстные упражнения 2 ===== */
function Step6() {
  return (
    <>
      <UiSection title="🔄 Практика: определите время по контексту">
        <CheckableExercise
          title="Вставьте форму глагола"
          instruction="Определите, какое время требуется (PPC / PC / PS / Present Simple)."
          items={[
            {
              left: "1. Look at her! She's tired. She",
              answers: ["has been working", "'s been working"],
              right: "all day. (work)",
              explanation:
                "Видимый результат + all day → Present Perfect Continuous.",
            },
            {
              left: "2. What's that noise? Someone",
              answers: ["is playing", "'s playing"],
              right: "the piano upstairs. (play)",
              explanation:
                "Действие происходит прямо сейчас → Present Continuous.",
            },
            {
              left: "3. She's a great writer. She",
              answers: ["has written", "'s written"],
              right: "10 novels. (write)",
              explanation: "Количество → Present Perfect.",
            },
            {
              left: "4. I'm so exhausted! I",
              answers: ["have been running", "'ve been running"],
              right: "for 3 hours without a break. (run)",
              explanation:
                "Длительность + результат → Present Perfect Continuous.",
            },
            {
              left: "5. What do you do in your free time? I usually",
              answers: ["read"],
              right: "books. (read)",
              explanation: "usually → Present Simple.",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 7: Типичные ошибки ===== */
function Step7() {
  return (
    <>
      <UiSection title="⚠️ Типичные ошибки при выборе времени">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-2 border-red-300">
            <h4 className="text-lg font-bold text-red-900 mb-4">
              ❌ Ошибка 1: Путают PPC и PC с "for"
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4">
                <p className="font-bold text-red-900 mb-2">❌ Неправильно:</p>
                <p className="text-sm">
                  I <strong>am waiting</strong> for 2 hours.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (for = длительность, нужно PPC!)
                </p>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">✅ Правильно:</p>
                <p className="text-sm">
                  I <strong>have been waiting</strong> for 2 hours.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (длительность с момента начала)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-300">
            <h4 className="text-lg font-bold text-orange-900 mb-4">
              ❌ Ошибка 2: Используют PPC для количества
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4">
                <p className="font-bold text-red-900 mb-2">❌ Неправильно:</p>
                <p className="text-sm">
                  She <strong>has been writing</strong> 3 emails.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (количество = результат, нужно PP!)
                </p>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">✅ Правильно:</p>
                <p className="text-sm">
                  She <strong>has written</strong> 3 emails.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (результат: 3 письма готовы)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
            <h4 className="text-lg font-bold text-purple-900 mb-4">
              ❌ Ошибка 3: Используют PS вместо PPC для длительности
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4">
                <p className="font-bold text-red-900 mb-2">❌ Неправильно:</p>
                <p className="text-sm">
                  They <strong>live</strong> here for 5 years.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (for = длительность, нужно PPC!)
                </p>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">✅ Правильно:</p>
                <p className="text-sm">
                  They <strong>have been living</strong> here for 5 years.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (начали 5 лет назад, всё ещё живут)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg p-6 border-2 border-blue-300">
            <h4 className="text-lg font-bold text-blue-900 mb-4">
              ❌ Ошибка 4: Используют PPC с "right now"
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 rounded-lg p-4">
                <p className="font-bold text-red-900 mb-2">❌ Неправильно:</p>
                <p className="text-sm">
                  She <strong>has been cooking</strong> right now.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (right now = сейчас, нужно PC!)
                </p>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-2">✅ Правильно:</p>
                <p className="text-sm">
                  She <strong>is cooking</strong> right now.
                </p>
                <p className="text-xs text-zinc-600 mt-1">(в данный момент)</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== ШАГ 8: Практика со сложными случаями ===== */
function Step8() {
  const fillItems: FillItem[] = [
    {
      left: "Look! Your hands are dirty. What",
      answers: ["have you been doing", "'ve you been doing"],
      right: "? (you/do)",
      explanation:
        "Видимый результат (dirty hands) → спрашиваем о процессе → Present Perfect Continuous",
    },
    {
      left: "How many books",
      answers: ["has she read"],
      right: "this month? (she/read)",
      explanation: "'How many' = вопрос о количестве → Present Perfect",
    },
    {
      left: "Shh! The baby",
      answers: ["is sleeping", "'s sleeping"],
      right: "right now. (sleep)",
      explanation: "'Shh!' + 'right now' = прямо сейчас → Present Continuous",
    },
    {
      left: "He",
      answers: ["has been studying", "'s been studying"],
      right: "German since January. (study)",
      explanation:
        "'since January' = длительность с момента начала → Present Perfect Continuous",
    },
    {
      left: "My sister usually",
      answers: ["goes"],
      right: "to the gym on Fridays. (go)",
      explanation: "'usually' + 'on Fridays' = регулярность → Present Simple",
    },
  ];

  return (
    <>
      <UiSection title="💪 Сложные случаи">
        <div className="bg-amber-50 rounded-lg p-5 mb-6 border-2 border-amber-300">
          <p className="font-bold text-amber-900 mb-3">
            💡 Обратите внимание на контекст!
          </p>
          <ul className="text-sm text-zinc-700 space-y-2">
            <li>• Видимый результат (dirty hands, tired) → часто PPC</li>
            <li>• Вопрос "How many/much?" → Present Perfect (количество)</li>
            <li>
              • Прямое указание на момент (Look!, Shh!) → Present Continuous
            </li>
            <li>• Since + точка начала → Present Perfect Continuous</li>
            <li>• Usually/often/always → Present Simple</li>
          </ul>
        </div>

        <CheckableExercise
          title="Упражнение: Сложные случаи"
          instruction="Поставьте глагол в скобках в правильное время, обращая внимание на контекст:"
          items={fillItems}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 9: Итоговая практика ===== */
function Step9() {
  return (
    <>
      <UiSection title="🎯 Итоговая практика: впишите форму">
        <CheckableExercise
          title="Смешанные времена"
          instruction="Вставьте правильную форму глагола в зависимости от подсказки."
          items={[
            {
              left: "1. I'm tired. I",
              answers: ["have been working", "'ve been working"],
              right: "all day without a rest. (work)",
              explanation:
                "Длительность + результат → Present Perfect Continuous.",
            },
            {
              left: "2. She",
              answers: ["has visited", "'s visited"],
              right: "15 countries so far. (visit)",
              explanation: "Количество до сих пор → Present Perfect.",
            },
            {
              left: "3. What's wrong? You",
              answers: ["are acting", "'re acting"],
              right: "strange today. (act)",
              explanation:
                "today (с временным значением) → Present Continuous.",
            },
            {
              left: "4. They",
              answers: ["have been living", "'ve been living"],
              right: "here since 2015. (live)",
              explanation: "since + точка → Present Perfect Continuous.",
            },
            {
              left: "5. My brother",
              answers: ["plays"],
              right: "football every Saturday. (play)",
              explanation: "Регулярность → Present Simple.",
            },
            {
              left: "6. How long",
              answers: ["have you been waiting"],
              right: "for me? (you/wait)",
              explanation: "Вопрос How long → Present Perfect Continuous.",
            },
            {
              left: "7. I can't talk now. I",
              answers: ["am having", "'m having"],
              right: "an important call. (have)",
              explanation: "now → Present Continuous.",
            },
            {
              left: "8. She",
              answers: ["has written", "'s written"],
              right: "three books this year. (write)",
              explanation: "Количество + незавершённый период (this year).",
            },
          ]}
        />
      </UiSection>
    </>
  );
}

/* ===== ШАГ 10: Итоговое резюме ===== */
function Step10() {
  return (
    <>
      <UiSection title="🎓 Итоговое резюме: Mixed Tenses Review 1">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-6 mb-6 border-2 border-indigo-400">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            Что мы повторили:
          </h3>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-indigo-900 mb-3">
                ⏱️ Present Perfect Continuous
              </h4>
              <ul className="text-sm space-y-1 text-zinc-700">
                <li>• Акцент на ДЛИТЕЛЬНОСТИ и ПРОЦЕССЕ</li>
                <li>• Маркеры: for, since, how long, all day, lately</li>
                <li>• Часто с видимым результатом (tired, dirty hands)</li>
                <li>• Формула: have/has been + V-ing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-blue-900 mb-3">
                ✅ Present Perfect
              </h4>
              <ul className="text-sm space-y-1 text-zinc-700">
                <li>• Акцент на РЕЗУЛЬТАТЕ и КОЛИЧЕСТВЕ</li>
                <li>• Вопросы: How many? How much?</li>
                <li>• Завершённое действие с видимым результатом</li>
                <li>• Формула: have/has + V3</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-purple-900 mb-3">
                🔄 Present Continuous
              </h4>
              <ul className="text-sm space-y-1 text-zinc-700">
                <li>• Действие происходит ПРЯМО СЕЙЧАС</li>
                <li>• Маркеры: now, right now, at the moment, currently</li>
                <li>• Временные ситуации (today, this week)</li>
                <li>• Формула: am/is/are + V-ing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h4 className="font-bold text-sky-900 mb-3">📅 Present Simple</h4>
              <ul className="text-sm space-y-1 text-zinc-700">
                <li>• РЕГУЛЯРНОСТЬ, ПРИВЫЧКИ, ФАКТЫ</li>
                <li>• Маркеры: every day, always, usually, often</li>
                <li>• Расписание и неизменные истины</li>
                <li>• Формула: V1 / V1+s</li>
              </ul>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔑 Ключевые различия">
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-blue-100">
                <th className="border px-3 py-2 text-left text-sm">Время</th>
                <th className="border px-3 py-2 text-left text-sm">Вопрос</th>
                <th className="border px-3 py-2 text-left text-sm">Фокус</th>
                <th className="border px-3 py-2 text-left text-sm">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border px-3 py-2 text-sm font-semibold">PPC</td>
                <td className="border px-3 py-2 text-sm">How long?</td>
                <td className="border px-3 py-2 text-sm">Длительность</td>
                <td className="border px-3 py-2 text-sm">
                  I've been working for 3 hours
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 text-sm font-semibold">PP</td>
                <td className="border px-3 py-2 text-sm">How many?</td>
                <td className="border px-3 py-2 text-sm">Результат</td>
                <td className="border px-3 py-2 text-sm">
                  I've finished 5 tasks
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-3 py-2 text-sm font-semibold">PC</td>
                <td className="border px-3 py-2 text-sm">What now?</td>
                <td className="border px-3 py-2 text-sm">Прямо сейчас</td>
                <td className="border px-3 py-2 text-sm">
                  I'm working right now
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 text-sm font-semibold">PS</td>
                <td className="border px-3 py-2 text-sm">How often?</td>
                <td className="border px-3 py-2 text-sm">Регулярность</td>
                <td className="border px-3 py-2 text-sm">I work every day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="💡 Правила выбора времени">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-purple-900 mb-2">
                1. Смотри на временные маркеры:
              </p>
              <p className="text-sm text-zinc-700">
                for/since → PPC | now/right now → PC | every day → PS | How
                many? → PP
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-pink-900 mb-2">
                2. Анализируй контекст:
              </p>
              <p className="text-sm text-zinc-700">
                Длительность? → PPC | Количество? → PP | Сейчас? → PC |
                Привычка? → PS
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-bold text-purple-900 mb-2">
                3. Ищи видимый результат:
              </p>
              <p className="text-sm text-zinc-700">
                tired/dirty/red eyes → часто PPC (процесс только что закончился)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-8 text-center border-2 border-indigo-400">
          <div className="text-6xl mb-4">🎓</div>
          <p className="text-2xl font-bold text-indigo-900 mb-2">
            Отлично! Вы завершили Mixed Tenses Review 1!
          </p>
          <p className="text-indigo-700">
            Теперь вы умеете различать Present Perfect Continuous, Present
            Perfect, Present Continuous и Present Simple!
          </p>
        </div>
      </UiSection>
    </>
  );
}
