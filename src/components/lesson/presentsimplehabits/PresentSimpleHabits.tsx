"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentSimpleHabits({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ===== СТРАНИЦА 1: Базовое введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое привычки, рутина и факты?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Simple используется для описания:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              Привычки (Habits):
            </h4>
            <p className="text-sm text-zinc-700">
              Регулярные действия, которые человек делает часто.
            </p>
            <p className="text-sm text-indigo-700 mt-2 italic">
              Пример: I drink coffee every morning. (Я пью кофе каждое утро.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              Рутина (Routines):
            </h4>
            <p className="text-sm text-zinc-700">
              Повседневные дела, связанные с расписанием.
            </p>
            <p className="text-sm text-green-700 mt-2 italic">
              Пример: I go to school at 8 a.m. (Я иду в школу в 8 утра.)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">Факты (Facts):</h4>
            <p className="text-sm text-zinc-700">
              Общеизвестные истины, которые всегда верны.
            </p>
            <p className="text-sm text-blue-700 mt-2 italic">
              Пример: The sun rises in the east. (Солнце встаёт на востоке.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает говорить о своей жизни: привычках (I play football),
            распорядке дня (I wake up at 7), и фактах (Water boils at 100°C).
          </li>
          <li>
            Учит использовать наречия частотности (always, sometimes, never) для
            описания, как часто что-то происходит.
          </li>
          <li>
            Необходима для общения в школе, на работе, в путешествиях, где нужно
            рассказать о себе или мире.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые моменты">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Present Simple часто сочетается с наречиями частотности: always
              [ˈɔːlweɪz] (олвэйз), sometimes [ˈsʌmtaɪmz] (самтаймз), never
              [ˈnevər] (нэвэр).
            </li>
            <li>
              Используется с глаголами действия (work, play, eat) и подлежащими
              (I, you, he/she/it, we, they).
            </li>
            <li>
              Русскоязычным важно привыкнуть к строгому порядку слов и наречиям,
              так как в русском они могут быть менее строгими (Я иногда читаю
              vs. I sometimes read).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="border-l-4 border-indigo-400 pl-4 py-2">
          <p className="font-semibold text-lg mb-2">
            Русский: Я всегда хожу в школу
          </p>
          <p className="font-semibold text-lg text-indigo-600">
            English: I always go to school.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Здесь always (наречие частотности) стоит перед глаголом go, а для
            he/she/it добавляется -s (He goes).
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычным ученикам может быть непривычно использовать наречия
            частотности перед глаголом (I always read), так как в русском они
            часто в конце (Я читаю всегда). Также в английском Present Simple
            обязателен для фактов (The earth is round), тогда как в русском
            глагол может опускаться (Земля круглая).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Эта подтема учит, как говорить о привычках,
            рутине и фактах, используя Present Simple.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Лексика ===== */
function Step2() {
  return (
    <>
      <UiSection title="Какие слова нужно знать?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для описания привычек, рутины и фактов важно выучить глаголы действия
          и наречия частотности. Вот список из 20 ключевых слов/фраз с переводом
          и произношением для A1-A2.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Глаголы действия:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Wake up</strong> [вэйк ап] — Просыпаться
              </p>
              <p>
                <strong>Get up</strong> [гэт ап] — Вставать
              </p>
              <p>
                <strong>Eat</strong> [ит] — Есть
              </p>
              <p>
                <strong>Drink</strong> [дринк] — Пить
              </p>
              <p>
                <strong>Go</strong> [гоу] — Идти/ехать
              </p>
              <p>
                <strong>Work</strong> [ворк] — Работать
              </p>
              <p>
                <strong>Study</strong> [стади] — Учиться
              </p>
              <p>
                <strong>Play</strong> [плэй] — Играть
              </p>
              <p>
                <strong>Watch</strong> [вотч] — Смотреть
              </p>
              <p>
                <strong>Read</strong> [рид] — Читать
              </p>
              <p>
                <strong>Sleep</strong> [слип] — Спать
              </p>
              <p>
                <strong>Live</strong> [лив] — Жить
              </p>
              <p>
                <strong>Like</strong> [лайк] — Нравиться
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Наречия частотности:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Always</strong> [ˈɔːlweɪz] — Всегда
              </p>
              <p>
                <strong>Usually</strong> [ˈjuːʒuəli] — Обычно
              </p>
              <p>
                <strong>Often</strong> [ˈɒfən] — Часто
              </p>
              <p>
                <strong>Sometimes</strong> [ˈsʌmtaɪmz] — Иногда
              </p>
              <p>
                <strong>Rarely</strong> [ˈreərli] — Редко
              </p>
              <p>
                <strong>Never</strong> [ˈnevər] — Никогда
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Выражения времени:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Every day</strong> [ˈevri deɪ] — Каждый день
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">I always wake up at 7 a.m.</p>
            <p className="text-sm text-gray-600">
              Я всегда просыпаюсь в 7 утра. — Привычка.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">She goes to school every day.</p>
            <p className="text-sm text-gray-600">
              Она ходит в школу каждый день. — Рутина.
            </p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">The sun rises in the east.</p>
            <p className="text-sm text-gray-600">
              Солнце встаёт на востоке. — Факт.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Повторяйте слова с аудио на сайте, чтобы освоить произношение
              (always [олвэйз]).
            </li>
            <li>Составляйте предложения о себе: I often read books.</li>
            <li>
              Используйте карточки: слово на английском с одной стороны, перевод
              — с другой.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            В английском наречия частотности (always, sometimes) обычно ставятся
            перед глаголом, что отличается от русского, где они могут быть в
            конце предложения (Я пью кофе всегда).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Привычки ===== */
function Step3() {
  const habitsExercise: FillItem[] = [
    {
      left: "1. I",
      right: "drink coffee. (always)",
      answers: ["always"],
      explanation:
        "Ответ: always — Наречие частотности ставится перед глаголом drink.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "plays football. (sometimes)",
      answers: ["sometimes"],
      explanation: "Ответ: sometimes — Наречие ставится перед глаголом plays.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "watch TV. (never)",
      answers: ["never"],
      explanation: "Ответ: never — Наречие ставится перед глаголом watch.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Что такое привычки?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Привычки — это действия, которые человек делает регулярно, часто
          бессознательно. Present Simple с наречиями частотности (always, often,
          sometimes, never) идеально подходит для их описания.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I always drink coffee in the morning.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я всегда пью кофе утром.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + always (наречие частотности) +
              drink (глагол).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She sometimes plays football.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она иногда играет в футбол.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + sometimes + plays (с -s для
              she).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">They never watch TV.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они никогда не смотрят телевизор.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> They + never + watch (без -s для
              they).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Наречия частотности (always, usually, often, sometimes, rarely,
              never) ставятся <strong>перед</strong> основным глаголом: I always
              read.
            </li>
            <li>
              <strong>Исключение:</strong> с to be наречия ставятся{" "}
              <strong>после</strong>: I am always tired.
            </li>
            <li>
              Порядок слов строгий: Подлежащее + наречие + глагол (или + -s для
              he/she/it).
            </li>
            <li>
              Произношение: Always [ˈɔːlweɪz] (олвэйз), Never [ˈnevər] (нэвэр).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>I often read books.</strong> (Я часто читаю книги.) —
              Привычка чтения.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>He rarely eats fast food.</strong> (Он редко ест фастфуд.)
              — Пищевая привычка.
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>We usually walk to school.</strong> (Мы обычно ходим в
              школу пешком.) — Регулярное действие.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не путайте с to be:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I always am happy.</div>
                <div className="text-green-600">
                  ✅ Right: I am always happy.
                </div>
              </div>
            </li>
            <li>
              Не ставьте наречия в конец:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I read always books.
                </div>
                <div className="text-green-600">
                  ✅ Right: I always read books.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте наречие частотности"
        instruction="Поместите наречие в правильное место в предложении."
        items={habitsExercise}
      />

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Привычки: Подлежащее + наречие частотности
            + глагол (+ -s для he/she/it).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Рутина ===== */
function Step4() {
  const routineExercise: FillItem[] = [
    {
      left: "1. I wake up",
      right: "7 a.m. every day.",
      answers: ["at"],
      explanation: "Ответ: at — Используем 'at' для точного времени (7 a.m.).",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She goes to school",
      right: "8 a.m.",
      answers: ["at"],
      explanation: "Ответ: at — Используем 'at' для точного времени.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They study",
      right: "the evening.",
      answers: ["in"],
      explanation:
        "Ответ: in — Используем 'in' для частей дня (in the evening).",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Что такое рутина?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Рутина — это ежедневные или регулярные дела, связанные с расписанием
          (работа, учёба, сон). Present Simple идеально подходит для описания
          распорядка дня, особенно с выражениями времени (every day, at 7 a.m.).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I wake up at 7 a.m. every day.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я просыпаюсь в 7 утра каждый день.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + wake up + at 7 a.m. + every day
              (время).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She goes to school at 8 a.m.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она идёт в школу в 8 утра.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + goes (с -es для she) + to
              school + at 8 a.m.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              They eat dinner at 6 p.m.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они ужинают в 6 вечера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> They + eat + dinner + at 6 p.m.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Выражения времени (every day, every morning, at 7 a.m.) обычно
              стоят в <strong>конце</strong> предложения.
            </li>
            <li>
              Наречия частотности (always, usually) могут добавляться для
              уточнения: I always wake up at 7 a.m.
            </li>
            <li>
              Используйте <strong>at</strong> для точного времени (at 7 a.m.),{" "}
              <strong>in</strong> для частей дня (in the morning),{" "}
              <strong>on</strong> для дней недели (on Monday).
            </li>
            <li>Произношение: Every [ˈevri] (эври), At [æt] (эт).</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>I work from 9 a.m. to 5 p.m.</strong> (Я работаю с 9 утра
              до 5 вечера.) — Рабочий день.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>He studies in the evening.</strong> (Он учится вечером.) —
              Учёба.
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>We sleep at 10 p.m.</strong> (Мы спим в 10 вечера.) — Сон.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не путайте с Present Continuous для текущих действий:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I am waking up every day.
                </div>
                <div className="text-green-600">
                  ✅ Right: I wake up every day.
                </div>
              </div>
            </li>
            <li>
              Не пропускайте предлоги времени:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I work 9 a.m.</div>
                <div className="text-green-600">✅ Right: I work at 9 a.m.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте правильный предлог"
        instruction="Выберите правильный предлог времени (at, in, on)."
        items={routineExercise}
      />

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Рутина: Подлежащее + глагол (+ -s для
            he/she/it) + выражение времени.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Факты ===== */
function Step5() {
  const factsExercise: FillItem[] = [
    {
      left: "1. The sun",
      right: "in the east. (rise)",
      answers: ["rises"],
      explanation:
        "Ответ: rises — Для 'the sun' (it) добавляем -s к глаголу rise.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. Water",
      right: "at 100°C. (boil)",
      answers: ["boils"],
      explanation:
        "Ответ: boils — Для 'water' (it) добавляем -s к глаголу boil.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. Cats",
      right: "milk. (like)",
      answers: ["like"],
      explanation:
        "Ответ: like — Для 'cats' (множественное число) глагол без -s.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Что такое факты?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Факты — это общеизвестные истины, которые всегда верны, или
          научные/природные явления. Present Simple используется, чтобы говорить
          о том, что не меняется.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The sun rises in the east.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Солнце встаёт на востоке.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> The sun + rises (с -s для it).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Water boils at 100°C.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Вода кипит при 100°C.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Water + boils (с -s для it).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Cats like milk.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Кошки любят молоко.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Cats + like (без -s для
              множественного числа).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Для фактов используйте Present Simple без наречий частотности, так
              как факты всегда верны.
            </li>
            <li>
              Глагол согласуется с подлежащим: -s/-es для he/she/it, без
              изменений для I/you/we/they.
            </li>
            <li>
              Часто используются слова: know [ноу] (знать), like [лайк]
              (любить), live [лив] (жить).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>The earth is round.</strong> (Земля круглая.) — Научный
              факт.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Dogs bark.</strong> (Собаки лают.) — Общее наблюдение.
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>People need food.</strong> (Людям нужна еда.) — Истина.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Не используйте Present Continuous для фактов:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: The sun is rising in the east.
                </div>
                <div className="text-green-600">
                  ✅ Right: The sun rises in the east.
                </div>
              </div>
            </li>
            <li>
              Не добавляйте лишние слова:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: Water always boils at 100°C.
                </div>
                <div className="text-green-600">
                  ✅ Right: Water boils at 100°C.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Напишите правильную форму глагола"
        instruction="Вставьте правильную форму глагола для описания фактов."
        items={factsExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            В русском факты часто выражаются без глагола (Земля круглая), но в
            английском Present Simple обязателен (The earth is round).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Факты: Подлежащее + глагол (+ -s для
            he/she/it).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Сравнение с другими темами ===== */
function Step6() {
  return (
    <>
      <UiSection title="Что общего с другими темами?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              Личные местоимения (I, you, he/she/it):
            </p>
            <p className="text-sm text-zinc-700">
              Определяют форму глагола (I work, he works).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Глагол to be:</p>
            <p className="text-sm text-zinc-700">
              Используется для состояния (I am tired), а Present Simple — для
              действий (I work).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Have/has got:</p>
            <p className="text-sm text-zinc-700">
              Для владения (I have got a book), а Present Simple — для
              привычек/рутины (I read books).
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Личная информация:</p>
            <p className="text-sm text-zinc-700">
              Present Simple дополняет описание (I live in Moscow, I work in a
              shop).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Что разного?">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">To be vs Present Simple:</p>
            <p className="text-sm">
              To be: Для роли/состояния (She is a teacher)
              <br />
              Present Simple: Для действий (She teaches)
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">Have got vs Present Simple:</p>
            <p className="text-sm">
              Have got: Для владения (He has got a car)
              <br />
              Present Simple: Для регулярных действий (He drives)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Отличия от русского языка">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Добавление -s/-es:</strong> В русском нет окончания для
              третьего лица (Я работаю, Он работает), а в английском для
              he/she/it добавляется -s (He works).
            </li>
            <li>
              <strong>Наречия частотности:</strong> В английском они стоят перед
              глаголом (I always read), в русском — часто в конце (Я всегда
              читаю).
            </li>
            <li>
              <strong>Факты без глагола:</strong> В русском можно сказать Земля
              круглая, в английском нужен глагол (The earth is round).
            </li>
            <li>
              <strong>Вопросы и отрицания:</strong> В русском просто добавляем
              «не» (Я не работаю) или меняем интонацию (Ты работаешь?). В
              английском нужны do/does (I don't work, Do you work?).
            </li>
            <li>
              <strong>Время в рутине:</strong> В английском предлоги (at 7 a.m.,
              in the morning) обязательны, в русском можно сказать «утром».
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры сравнения">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <p className="font-semibold">To be:</p>
            <p className="text-sm">I am a student. (Я студент.)</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <p className="font-semibold">Have got:</p>
            <p className="text-sm">I have got a book. (У меня книга.)</p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <p className="font-semibold">Present Simple:</p>
            <p className="text-sm">
              I read books every day. (Я читаю книги каждый день.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            В англоязычных странах обсуждение рутины (I start work at 9) или
            привычек (I often play football) — обычная тема для small talk, что
            для русскоязычных может быть менее привычным.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Упражнения ===== */
function Step7() {
  const exercise1: FillItem[] = [
    {
      left: "1. I",
      right: "coffee every morning.",
      answers: ["drink"],
      explanation: "Ответ: drink — Для 'I' глагол без -s.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. The sun",
      right: "in the east.",
      answers: ["rises"],
      explanation: "Ответ: rises — Для 'the sun' (it) глагол с -s.",
      ariaLabel: "Вопрос 2",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I",
      right: "at 7 a.m. every day.",
      answers: ["wake up"],
      explanation: "Ответ: wake up — Рутина, без -s для 'I'.",
      ariaLabel: "Заполните 1",
      wide: true,
    },
    {
      left: "2. She",
      right: "to school at 8 a.m.",
      answers: ["goes"],
      explanation: "Ответ: goes — Рутина, с -es для 'she'.",
      ariaLabel: "Заполните 2",
      wide: true,
    },
    {
      left: "3. Water",
      right: "at 100°C.",
      answers: ["boils"],
      explanation: "Ответ: boils — Факт, с -s для 'water' (it).",
      ariaLabel: "Заполните 3",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. I play tennis every day. →",
      right: "",
      answers: [
        "I don't play tennis every day",
        "I don't play tennis every day.",
      ],
      explanation: "Ответ: I don't play tennis every day. — Don't + глагол.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. She watches TV in the evening. →",
      right: "",
      answers: [
        "She doesn't watch TV in the evening",
        "She doesn't watch TV in the evening.",
      ],
      explanation:
        "Ответ: She doesn't watch TV in the evening. — Doesn't + глагол без -es.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. He goes to school at 8 a.m. →",
      right: "",
      answers: [
        "Does he go to school at 8 a.m",
        "Does he go to school at 8 a.m.?",
      ],
      explanation:
        "Ответ: Does he go to school at 8 a.m.? — Does + глагол без -es.",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. You like coffee. →",
      right: "",
      answers: ["Do you like coffee", "Do you like coffee?"],
      explanation: "Ответ: Do you like coffee? — Do + глагол.",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
  ];

  const exercise5: FillItem[] = [
    {
      left: "1. Я всегда ем завтрак в 7 утра. →",
      right: "",
      answers: [
        "I always eat breakfast at 7 a.m",
        "I always eat breakfast at 7 a.m.",
      ],
      explanation:
        "Ответ: I always eat breakfast at 7 a.m. — Привычка + рутина.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Земля вращается вокруг солнца. →",
      right: "",
      answers: [
        "The earth goes around the sun",
        "The earth goes around the sun.",
        "The Earth goes around the sun",
        "The Earth goes around the sun.",
      ],
      explanation: "Ответ: The earth goes around the sun. — Факт.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
  ];

  const exercise6: FillItem[] = [
    {
      left: "1. ❌ I always reads books. →",
      right: "",
      answers: ["I always read books", "I always read books."],
      explanation: "Исправление: I always read books. — Без -s для 'I'.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ She don't go to school. →",
      right: "",
      answers: ["She doesn't go to school", "She doesn't go to school."],
      explanation:
        "Исправление: She doesn't go to school. — Doesn't для 'she'.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Water boil at 100°C. →",
      right: "",
      answers: ["Water boils at 100°C", "Water boils at 100°C."],
      explanation:
        "Исправление: Water boils at 100°C. — С -s для 'water' (it).",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Финальные упражнения">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания по теме "Present Simple: Привычки, рутина,
          факты"! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильную форму"
        instruction="Вставьте правильную форму глагола."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски"
        instruction="Вставьте правильную форму глагола или наречие."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Сделайте отрицания"
        instruction="Переделайте предложения в отрицательные."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Задайте вопросы"
        instruction="Превратите утверждения в вопросы."
        items={exercise4}
      />

      <CheckableExercise
        title="📝 Упражнение 5: Переведите предложения"
        instruction="Переведите с русского на английский."
        items={exercise5}
      />

      <CheckableExercise
        title="📝 Упражнение 6: Исправьте ошибки"
        instruction="Найдите и исправьте ошибки в предложениях."
        items={exercise6}
      />

      <UiSection title="🎊 Поздравляем!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили тему "Present Simple: Привычки, рутина, факты"! Теперь вы
          знаете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Как описывать привычки с наречиями частотности</li>
          <li>Как говорить о своей рутине и распорядке дня</li>
          <li>Как выражать общеизвестные факты</li>
          <li>Отличия Present Simple от to be и have got</li>
          <li>Особенности для русскоязычных учеников</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Привычки:</strong> Подлежащее + наречие частотности
              (always, sometimes) + глагол (+ -s для he/she/it)
            </li>
            <li>
              <strong>Рутина:</strong> Подлежащее + глагол (+ -s) + выражение
              времени (at 7 a.m.)
            </li>
            <li>
              <strong>Факты:</strong> Подлежащее + глагол (+ -s)
            </li>
            <li>
              <strong>Отличия от русского:</strong> -s для he/she/it, наречия
              перед глаголом, do/does для вопросов/отрицаний
            </li>
            <li>
              <strong>Произношение:</strong> Always [ˈɔːlweɪz], Never [ˈnevər],
              Goes [ɡoʊz]
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Практикуйте в диалогах о своей жизни (I always wake up at 7)
            </li>
            <li>
              Используйте наречия частотности, чтобы говорить о своих привычках
            </li>
            <li>Опишите свой распорядок дня на английском</li>
            <li>Придумайте 5 фактов о мире на английском языке</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




