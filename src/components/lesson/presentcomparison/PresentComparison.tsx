"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentComparison({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое Present Continuous и Present Simple?">
        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm text-zinc-700">
              Используется для описания привычек, фактов, регулярных действий и
              постоянных состояний.
            </p>
            <p className="text-sm text-zinc-700 mt-2 italic">
              Пример: I read books. (Я читаю книги, регулярно.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Continuous:</p>
            <p className="text-sm text-zinc-700">
              Используется для действий, происходящих прямо сейчас, временных
              действий, планов на будущее и постепенных изменений.
            </p>
            <p className="text-sm text-zinc-700 mt-2 italic">
              Пример: I am reading a book now. (Я читаю книгу сейчас.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает понять, когда говорить I read (привычка) или I am reading
            (сейчас).
          </li>
          <li>
            Учит избегать путаницы в разговорах: I live in Moscow (всегда) vs. I
            am living in London this year (временно).
          </li>
          <li>
            Закрепляет использование времён для описания повседневной жизни,
            планов и изменений.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Present Simple:</strong> I/you/we/they + глагол, he/she/it
              + глагол + -s (I read, he reads).
            </li>
            <li>
              <strong>Present Continuous:</strong> am/is/are + глагол + -ing (I
              am reading, he is reading).
            </li>
            <li>
              <strong>Произношение:</strong> Reads [riːdz] (ридз), Reading
              [ˈriːdɪŋ] (ридинг).
            </li>
            <li>
              <strong>Интонация:</strong> Утверждения — ровная, вопросы (Do
              you…?, Are you…?) — восходящая (↑).
            </li>
            <li>
              <strong>Временные слова:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Simple: every day, always, usually.</li>
                <li>Continuous: now, at the moment, this week, tomorrow.</li>
              </ul>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Я читаю книги.</p>
            <p className="text-indigo-600 font-semibold">
              English: I read books. (привычка) или I am reading a book now.
              (сейчас)
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Я живу в Москве.</p>
            <p className="text-green-600 font-semibold">
              English: I live in Moscow. (постоянно) или I am living in London
              this month. (временно)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 mb-2">
            Человек читает книгу регулярно: <strong>I read books</strong>
          </p>
          <p className="text-sm text-zinc-700">
            Человек читает сейчас: <strong>I am reading now</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> Русский «я читаю» не
              различает привычку и текущее действие, английский строго разделяет
              (I read vs. I am reading).
            </li>
            <li>
              <strong>Статичные глаголы:</strong> Глаголы вроде know, like не
              используются в Continuous (I know, не I am knowing).
            </li>
            <li>
              <strong>Временные слова:</strong> Английский требует now для
              Continuous (I am reading now), русский может опускать (Читаю).
            </li>
          </ul>
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
          Для сравнения времён важно выучить глаголы, слова времени и контексты.
          Вот список из <strong>20 ключевых слов/фраз</strong> с переводом и
          произношением для A1-A2.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Глаголы действия:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Read</strong> [riːd] — Читать
              </p>
              <p>
                <strong>Write</strong> [raɪt] — Писать
              </p>
              <p>
                <strong>Play</strong> [pleɪ] — Играть
              </p>
              <p>
                <strong>Work</strong> [wɜːrk] — Работать
              </p>
              <p>
                <strong>Live</strong> [lɪv] — Жить
              </p>
              <p>
                <strong>Study</strong> [ˈstʌdi] — Учиться
              </p>
              <p>
                <strong>Meet</strong> [miːt] — Встречать
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Стативные глаголы:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Know</strong> [noʊ] — Знать
              </p>
              <p>
                <strong>Like</strong> [laɪk] — Нравиться
              </p>
              <p>
                <strong>Want</strong> [wɒnt] — Хотеть
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Слова времени (Simple):</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Every day</strong> [ˈɛvri deɪ] — Каждый день
              </p>
              <p>
                <strong>Always</strong> [ˈɔːlweɪz] — Всегда
              </p>
              <p>
                <strong>Usually</strong> [ˈjuːʒuəli] — Обычно
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Слова времени (Continuous):</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Now</strong> [naʊ] — Сейчас
              </p>
              <p>
                <strong>At the moment</strong> [æt ðə ˈmoʊmənt] — В данный
                момент
              </p>
              <p>
                <strong>This week</strong> [ðɪs wiːk] — На этой неделе
              </p>
              <p>
                <strong>Tomorrow</strong> [təˈmɒroʊ] — Завтра
              </p>
            </div>
          </div>

          <div className="bg-purple-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Существительные:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Book</strong> [bʊk] — Книга
              </p>
              <p>
                <strong>Friend</strong> [frend] — Друг
              </p>
              <p>
                <strong>What</strong> [wɒt] — Что
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">
              Present Simple: I read books every day.
            </p>
            <p className="text-sm text-gray-600">Я читаю книги каждый день.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">
              Present Continuous: I am reading a book now.
            </p>
            <p className="text-sm text-gray-600">Я читаю книгу сейчас.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">Present Simple: I know English.</p>
            <p className="text-sm text-gray-600">Я знаю английский.</p>
          </div>

          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <p className="font-semibold">
              Present Continuous: We are meeting tomorrow.
            </p>
            <p className="text-sm text-gray-600">Мы встречаемся завтра.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Повторяйте слова с аудио (read [riːd], reading [ˈriːdɪŋ]).</li>
            <li>Составляйте предложения: I read books. / I am reading now.</li>
            <li>Используйте карточки: слово + перевод + время.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные путают времена (I read now вместо I am reading now) и
            используют стативные глаголы в Continuous (I am knowing).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Present Simple ===== */
function Step3() {
  const simpleExercise: FillItem[] = [
    {
      left: "1. I",
      right: "books every day. (читаю)",
      answers: ["read"],
      explanation: "Ответ: read — Привычка, Present Simple.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "in Moscow. (живёт)",
      answers: ["lives"],
      explanation: "Ответ: lives — Постоянное состояние, she + -s.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. The train",
      right: "at 7 p.m. (отправляется)",
      answers: ["leaves"],
      explanation: "Ответ: leaves — Расписание.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать Present Simple?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Simple описывает:
        </p>

        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <p className="font-semibold">Привычки:</p>
            <p className="text-sm">
              Регулярные действия (I read books every day).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <p className="font-semibold">Факты:</p>
            <p className="text-sm">
              Постоянные истины (The sun rises in the east).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <p className="font-semibold">Состояния:</p>
            <p className="text-sm">Постоянные состояния (I live in Moscow).</p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-3">
            <p className="font-semibold">Расписания:</p>
            <p className="text-sm">
              Фиксированные события (The bus leaves at 8 a.m.).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I read books every day.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я читаю книги каждый день.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Привычка, I + read + every day.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She lives in Moscow.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она живёт в Москве.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Постоянное состояние, she + lives.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The train leaves at 7 p.m.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Поезд отправляется в 7 вечера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Расписание, the train + leaves.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Форма:</strong> I/you/we/they + глагол, he/she/it + глагол
              + -s (read, reads).
            </li>
            <li>
              <strong>Временные слова:</strong> every day, always, usually,
              never.
            </li>
            <li>
              <strong>Произношение:</strong> Reads [riːdz] (ридз), Lives [lɪvz]
              (ливз).
            </li>
            <li>
              <strong>Статичные глаголы:</strong> know, like, want — только в
              Present Simple.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Привычка:</strong> I play football every weekend. (Я играю
              в футбол каждые выходные.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Состояние:</strong> She knows English. (Она знает
              английский.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Расписание:</strong> The shop opens at 9 a.m. (Магазин
              открывается в 9 утра.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для действий сейчас:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I read a book now.</div>
                <div className="text-green-600">
                  ✅ Right: I am reading a book now.
                </div>
              </div>
            </li>
            <li>
              НЕ для временных действий:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I live in London this month.
                </div>
                <div className="text-green-600">
                  ✅ Right: I am living in London this month.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Present Simple"
        instruction="Заполните пропуски для Present Simple."
        items={simpleExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я читаю» может быть привычкой или действием сейчас,
            английский требует I read для привычки.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Present Simple = привычки, факты,
            состояния, расписания.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Present Continuous ===== */
function Step4() {
  const continuousExercise: FillItem[] = [
    {
      left: "1. I am",
      right: "a book now. (читаю)",
      answers: ["reading"],
      explanation: "Ответ: reading — Действие сейчас.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She is",
      right: "in London this year. (живёт)",
      answers: ["living"],
      explanation: "Ответ: living — Временное действие.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. We are",
      right: "tomorrow. (встречаемся)",
      answers: ["meeting"],
      explanation: "Ответ: meeting — План.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать Present Continuous?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Continuous описывает:
        </p>

        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <p className="font-semibold">Действия сейчас:</p>
            <p className="text-sm">
              То, что происходит в момент речи (I am reading now).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <p className="font-semibold">Временные действия:</p>
            <p className="text-sm">
              Действия на определённый период (I am studying this month).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <p className="font-semibold">Планы на будущее:</p>
            <p className="text-sm">
              Запланированные события (We are meeting tomorrow).
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-3">
            <p className="font-semibold">Изменения:</p>
            <p className="text-sm">
              Постепенные изменения (It is getting dark).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I am reading a book now.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я читаю книгу сейчас.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Действие сейчас, I + am + reading +
              now.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She is living in London this year.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она живёт в Лондоне в этом году.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Временное действие, she + is + living
              + this year.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              We are meeting tomorrow.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Мы встречаемся завтра.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> План, we + are + meeting + tomorrow.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Форма:</strong> am/is/are + глагол + -ing (I am reading).
            </li>
            <li>
              <strong>Временные слова:</strong> now, at the moment, this week,
              tomorrow.
            </li>
            <li>
              <strong>-ing форма:</strong> read → reading, write → writing, run
              → running.
            </li>
            <li>
              <strong>Произношение:</strong> Reading [ˈriːdɪŋ], Living [ˈlɪvɪŋ].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Действие сейчас:</strong> I am writing a letter now. (Я
              пишу письмо сейчас.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Временное действие:</strong> He is working in a shop this
              summer. (Он работает в магазине этим летом.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Изменение:</strong> It is getting cold. (Холодает.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I am knowing.</div>
                <div className="text-green-600">✅ Right: I know.</div>
              </div>
            </li>
            <li>
              НЕ для привычек:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I am reading every day.
                </div>
                <div className="text-green-600">
                  ✅ Right: I read every day.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Present Continuous"
        instruction="Заполните пропуски для Present Continuous."
        items={continuousExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я живу» не различает постоянное и временное, английский
            требует I am living для временного.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Present Continuous = действия сейчас,
            временные действия, планы, изменения.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Статичные глаголы ===== */
function Step5() {
  return (
    <>
      <UiSection title="Что такое стативные глаголы?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Статичные глаголы (know, like, want, understand) описывают состояния,
          чувства, мысли и не используются в Present Continuous, только в
          Present Simple.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">I know English.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я знаю английский.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Состояние, know в Present Simple.
            </p>
            <p className="text-sm text-red-600 mt-2">
              ❌ Wrong: I am knowing English.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She likes books.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Ей нравятся книги.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Чувства, like в Present Simple.
            </p>
            <p className="text-sm text-red-600 mt-2">
              ❌ Wrong: She is liking books.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">We want coffee.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Мы хотим кофе.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Желание, want в Present Simple.
            </p>
            <p className="text-sm text-red-600 mt-2">
              ❌ Wrong: We are wanting coffee.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Список стативных глаголов (для A1-A2)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>• know</p>
            <p>• like</p>
            <p>• love</p>
            <p>• hate</p>
            <p>• want</p>
            <p>• need</p>
            <p>• understand</p>
            <p>• think (считать)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Исключения">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Некоторые глаголы могут быть стативными или динамическими:
        </p>

        <div className="space-y-3">
          <div className="bg-purple-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">think:</p>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-indigo-600">
                  I think it's good. (Я считаю, это хорошо, состояние, Simple.)
                </p>
              </div>
              <div>
                <p className="text-green-600">
                  I am thinking about my friend. (Я думаю о друге, процесс,
                  Continuous.)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">have:</p>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-indigo-600">
                  I have a book. (У меня есть книга, владение, Simple.)
                </p>
              </div>
              <div>
                <p className="text-green-600">
                  I am having dinner. (Я ужинаю, действие, Continuous.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Чувства:</strong> I like tea. (Мне нравится чай.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Действие:</strong> I am drinking tea now. (Я пью чай
              сейчас.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Глагол</th>
                <th className="border border-gray-300 p-2 text-left">
                  Present Simple
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Present Continuous
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">know</td>
                <td className="border border-gray-300 p-2 text-green-600">
                  I know English.
                </td>
                <td className="border border-gray-300 p-2 text-red-600">❌</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">think</td>
                <td className="border border-gray-300 p-2 text-green-600">
                  I think it's good.
                </td>
                <td className="border border-gray-300 p-2 text-green-600">
                  I am thinking about you.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто используют стативные глаголы в Continuous (I am
            knowing), так как в русском нет такого ограничения.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Статичные глаголы — только в Present Simple
            (I know), действия — в Continuous (I am reading).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Вопросы и отрицания ===== */
function Step6() {
  return (
    <>
      <UiSection title="Вопросы в Present Simple">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Do/Does + подлежащее + глагол?</strong>
        </p>

        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold">Do you read books?</p>
            <p className="text-sm text-gray-600">Ты читаешь книги?</p>
            <p className="text-sm text-zinc-700 mt-2">
              Короткие ответы: Yes, I do. / No, I don't.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold">Does she live in Moscow?</p>
            <p className="text-sm text-gray-600">Она живёт в Москве?</p>
            <p className="text-sm text-zinc-700 mt-2">
              Короткие ответы: Yes, she does. / No, she doesn't.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Вопросы в Present Continuous">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Am/Is/Are + подлежащее + глагол + -ing?</strong>
        </p>

        <div className="space-y-3">
          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold">Are you reading a book?</p>
            <p className="text-sm text-gray-600">Ты читаешь книгу сейчас?</p>
            <p className="text-sm text-zinc-700 mt-2">
              Короткие ответы: Yes, I am. / No, I'm not.
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold">Is she living in London?</p>
            <p className="text-sm text-gray-600">Она живёт в Лондоне сейчас?</p>
            <p className="text-sm text-zinc-700 mt-2">
              Короткие ответы: Yes, she is. / No, she isn't.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Отрицания в Present Simple">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Подлежащее + don't/doesn't + глагол</strong>.
        </p>

        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>I don't read books. (Я не читаю книги.)</p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>She doesn't live in Moscow. (Она не живёт в Москве.)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Отрицания в Present Continuous">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Подлежащее + am/is/are + not + глагол + -ing</strong>.
        </p>

        <div className="space-y-2">
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>I'm not reading a book. (Я не читаю книгу сейчас.)</p>
          </div>
          <div className="border-l-4 border-amber-400 pl-3 py-1">
            <p>She isn't living in London. (Она не живёт в Лондоне сейчас.)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Present Simple:</strong> Do для I/you/we/they, does для
              he/she/it.
            </li>
            <li>
              <strong>Present Continuous:</strong> Am для I, is для he/she/it,
              are для you/we/they.
            </li>
            <li>
              <strong>Произношение:</strong> Do [duː], Does [dʌz], Am [æm], Is
              [ɪz], Are [ɑːr].
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Привычка:</strong> Do you play football? (Ты играешь в
              футбол?)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Действие сейчас:</strong> Are you playing football now?
              (Ты играешь в футбол сейчас?)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ путать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: Do you reading?</div>
              <div className="text-green-600">✅ Right: Are you reading?</div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I don't reading.</div>
              <div className="text-green-600">✅ Right: I'm not reading.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Время</th>
                <th className="border border-gray-300 p-2 text-left">Вопрос</th>
                <th className="border border-gray-300 p-2 text-left">
                  Отрицание
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Present Simple</td>
                <td className="border border-gray-300 p-2">Do you read?</td>
                <td className="border border-gray-300 p-2">I don't read.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Present Continuous
                </td>
                <td className="border border-gray-300 p-2">Are you reading?</td>
                <td className="border border-gray-300 p-2">I'm not reading.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «ты читаешь?» не различает времена, английский требует Do
            you read? (привычка) или Are you reading? (сейчас).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Отличия от русского ===== */
function Step7() {
  return (
    <>
      <UiSection title="Отличия от русского языка (все мелочи)">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Разделение времён:</strong> Русский «я читаю» может быть
              привычкой (I read) или действием сейчас (I am reading). Английский
              строго разделяет.
            </li>
            <li>
              <strong>Статичные глаголы:</strong> В русском «я знаю» = I know,
              но русскоязычные могут сказать I am knowing.
            </li>
            <li>
              <strong>Временные слова:</strong> Английский требует now для
              Continuous (I am reading now), русский может опускать (Читаю).
            </li>
            <li>
              <strong>Планы:</strong> Русский «встречаемся завтра» = We are
              meeting tomorrow, а не We meet.
            </li>
            <li>
              <strong>Произношение:</strong> Русскоязычные путают reads [riːdz]
              и reading [ˈriːdɪŋ].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Путаница времён:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I read now.</div>
                <div className="text-green-600">✅ I am reading now.</div>
              </div>
            </li>
            <li>
              <strong>Статичные глаголы:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I am knowing English.</div>
                <div className="text-green-600">✅ I know English.</div>
              </div>
            </li>
            <li>
              <strong>Неправильное -ing:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I am read.</div>
                <div className="text-green-600">✅ I am reading.</div>
              </div>
            </li>
            <li>
              <strong>Неправильные вопросы:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ Do you reading?</div>
                <div className="text-green-600">✅ Are you reading?</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица сравнения">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">
                  Русский
                </th>
                <th className="border border-gray-300 p-2 text-left">Ошибка</th>
                <th className="border border-gray-300 p-2 text-left">
                  Правильно
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Я читаю (сейчас)</td>
                <td className="border border-gray-300 p-2 text-red-600">
                  ❌ I read now
                </td>
                <td className="border border-gray-300 p-2 text-green-600">
                  ✅ I am reading now
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Я знаю</td>
                <td className="border border-gray-300 p-2 text-red-600">
                  ❌ I am knowing
                </td>
                <td className="border border-gray-300 p-2 text-green-600">
                  ✅ I know
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Домашнее задание ===== */
function Step8() {
  return (
    <>
      <UiSection title="Домашнее задание для запоминания слов">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Задание:</strong> Выучите <strong>20 слов</strong> из списка
          на странице 2.
        </p>
      </UiSection>

      <UiSection title="Как выполнять">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Повторение:</p>
            <p className="text-sm">
              Прочитайте каждое слово вслух 3 раза (read [riːd], reading
              [ˈriːdɪŋ]). Используйте аудио на сайте.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Карточки:</p>
            <p className="text-sm">
              Напишите слова на карточках (слово + перевод + время). Проверяйте
              себя.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Предложения:</p>
            <p className="text-sm mb-2">
              Составьте <strong>10 предложений</strong>:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>3 для Present Simple: I read books every day.</li>
              <li>3 для Present Continuous: I am reading a book now.</li>
              <li>2 отрицания: I don't like tea. / I'm not reading now.</li>
              <li>2 вопроса: Do you read? / Are you reading?</li>
            </ul>
            <p className="text-sm mt-2 italic">
              Пример: She lives in Moscow. / She is living in London this year.
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">4. Диалог:</p>
            <p className="text-sm mb-2">
              Напишите диалог (5-6 реплик) с минимум 5 словами из списка.
            </p>
            <div className="bg-white rounded p-3 text-sm">
              <p>
                <strong>Пример:</strong>
              </p>
              <p>A: Do you read books every day?</p>
              <p>B: Yes, I read books every day.</p>
              <p>A: Are you reading now?</p>
              <p>B: No, I'm not reading now.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Практикуйте в реальных ситуациях (опишите свои привычки и что
              делаете сейчас).
            </li>
            <li>Проверяйте произношение (reads [riːdz], reading [ˈriːdɪŋ]).</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнения ===== */
function Step9() {
  const exercise1: FillItem[] = [
    {
      left: "1. I ______ books every day.",
      right: "",
      answers: ["read"],
      explanation: "Ответ: read — Привычка, Present Simple.",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. I ______ a book now.",
      right: "",
      answers: ["am reading"],
      explanation: "Ответ: am reading — Действие сейчас, Present Continuous.",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. She ______ English.",
      right: "",
      answers: ["knows"],
      explanation: "Ответ: knows — Статичный глагол, Present Simple.",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I read books every day. →",
      right: "",
      answers: [
        "I don't read books every day",
        "I don't read books every day.",
      ],
      explanation: "Ответ: I don't read books every day.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. I am reading a book now. →",
      right: "",
      answers: ["I'm not reading a book now", "I'm not reading a book now."],
      explanation: "Ответ: I'm not reading a book now.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Я играю в футбол каждый день. →",
      right: "",
      answers: ["I play football every day", "I play football every day."],
      explanation: "Ответ: I play football every day.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Я не читаю книгу сейчас. →",
      right: "",
      answers: ["I'm not reading a book now", "I'm not reading a book now."],
      explanation: "Ответ: I'm not reading a book now.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Ты встречаешься с друзьями завтра? →",
      right: "",
      answers: [
        "Are you meeting friends tomorrow",
        "Are you meeting friends tomorrow?",
      ],
      explanation: "Ответ: Are you meeting friends tomorrow?",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. ❌ I am read a book now. →",
      right: "",
      answers: ["I am reading a book now", "I am reading a book now."],
      explanation: "Исправление: I am reading a book now. — Глагол с -ing.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ She know English. →",
      right: "",
      answers: ["She knows English", "She knows English."],
      explanation:
        "Исправление: She knows English. — Для she используется knows.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Do you reading now? →",
      right: "",
      answers: ["Are you reading now", "Are you reading now?"],
      explanation:
        "Исправление: Are you reading now? — Вопрос с are для Continuous.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по Present Continuous и Present Simple">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильное время"
        instruction="Вставьте правильную форму глагола."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Сделайте отрицания"
        instruction="Переделайте предложения в отрицательные."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Переведите"
        instruction="Переведите с русского на английский."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Исправьте ошибки"
        instruction="Найдите ошибки в предложениях и напишите правильный вариант целиком."
        items={exercise4}
      />
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и True/False ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const trueFalseItems: FillItem[] = [
    {
      left: "1. I read books every day.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I read books every day.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. I am reading a book now.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — I am not reading now.",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. My friend lives in Moscow.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — My friend lives in Moscow.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. My friend is living in Moscow this month.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — She is living in London this month.",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. We are meeting tomorrow.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — We are meeting tomorrow at 6 p.m.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Day">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            I read books every day, but I am not reading now. I am writing a
            letter at the moment. My friend lives in Moscow, but she is living
            in London this month. We are meeting tomorrow at 6 p.m. I like tea,
            but I am drinking coffee now.
          </p>
        </div>

        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="mb-4 px-4 py-2 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium transition-colors flex items-center gap-2"
        >
          {showTranslation ? "🔼 Скрыть перевод" : "🔽 Показать перевод"}
        </button>

        {showTranslation && (
          <div className="bg-amber-50/50 rounded-lg p-6 mb-4">
            <p className="font-semibold text-zinc-900 mb-2">Перевод текста:</p>
            <p className="text-zinc-700 leading-relaxed">
              Я читаю книги каждый день, но сейчас я не читаю. Я пишу письмо в
              данный момент. Мой друг живёт в Москве, но в этом месяце она живёт
              в Лондоне. Мы встречаемся завтра в 6 вечера. Мне нравится чай, но
              сейчас я пью кофе.
            </p>
          </div>
        )}
      </UiSection>

      <CheckableExercise
        title="📝 Задание True/False"
        instruction="Прочитайте текст и определите, верны ли утверждения (True) или ложны (False)."
        items={trueFalseItems}
      />

      <UiSection title="💡 Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            Подчеркните глаголы (read, am reading, live, is living) для поиска
            ответов. Обратите внимание на детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Сравнение Present Continuous и Present
          Simple"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            Различать привычки (Present Simple) и действия сейчас (Present
            Continuous)
          </li>
          <li>Правильно использовать стативные глаголы (только Simple)</li>
          <li>Задавать вопросы и строить отрицания в обоих временах</li>
          <li>Избегать типичных ошибок русскоязычных</li>
          <li>Понимать разницу между временами в английском и русском</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Present Simple:</strong> Привычки, факты, состояния (I
              read, I know).
            </li>
            <li>
              <strong>Present Continuous:</strong> Действия сейчас, временные
              действия, планы, изменения (I am reading, I am meeting).
            </li>
            <li>
              <strong>Статичные глаголы:</strong> Только в Present Simple (I
              know, не I am knowing).
            </li>
            <li>
              <strong>Отличия от русского:</strong> Английский разделяет
              привычки (I read) и текущие действия (I am reading).
            </li>
            <li>
              <strong>Произношение:</strong> Reads [riːdz], Reading [ˈriːdɪŋ],
              Do [duː], Are [ɑːr].
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Описывайте свой день: что делаете регулярно (Simple) и что делаете
              сейчас (Continuous)
            </li>
            <li>
              Помните: every day, always — маркеры Simple; now, at the moment —
              маркеры Continuous
            </li>
            <li>Не используйте стативные глаголы (know, like) в Continuous</li>
            <li>Различайте: I live (постоянно) vs. I am living (временно)</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




