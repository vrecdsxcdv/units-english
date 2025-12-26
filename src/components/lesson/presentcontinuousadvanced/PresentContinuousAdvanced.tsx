"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentContinuousAdvanced({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение в расширенное использование ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое расширенное использование Present Continuous?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Continuous не только описывает действия{" "}
          <strong>прямо сейчас</strong> (I am reading now), но и:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Временные действия:</p>
            <p className="text-sm text-zinc-700">
              Действия, происходящие в определённый период (I am studying
              English this month).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Планы на будущее:</p>
            <p className="text-sm text-zinc-700">
              Запланированные события (We are meeting tomorrow).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Изменения:</p>
            <p className="text-sm text-zinc-700">
              Постепенные изменения (It is getting dark).
            </p>
          </div>
        </div>

        <p className="text-zinc-700 leading-relaxed">
          Эта подтема также сравнивает Present Continuous с Present Simple (I
          read books vs. I am reading a book).
        </p>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает описывать временные ситуации: I am living in London this
            year. (Я живу в Лондоне в этом году.)
          </li>
          <li>
            Учит говорить о планах: We are meeting at 7 p.m. (Мы встречаемся в 7
            вечера.)
          </li>
          <li>
            Разъясняет разницу между привычками (I read every day) и текущими
            действиями (I am reading now).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Формула: <strong>am/is/are + глагол + -ing</strong>.
            </li>
            <li>
              <strong>Am:</strong> Для I. <strong>Is:</strong> Для he, she, it.{" "}
              <strong>Are:</strong> Для you, we, they.
            </li>
            <li>
              <strong>Произношение:</strong> Am [æm] (эм), Is [ɪz] (из), Are
              [ɑːr] (ар), -ing [ɪŋ].
            </li>
            <li>
              <strong>Временные слова:</strong> this week, this month, tomorrow
              (временные действия/планы), now, getting (изменения).
            </li>
            <li>
              <strong>Интонация:</strong> Утверждения — ровная, вопросы (Are you
              meeting?) — восходящая (↑).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">
              Русский: Я изучаю английский в этом месяце.
            </p>
            <p className="text-indigo-600 font-semibold">
              English: I am studying English this month.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">
              Русский: Мы встречаемся завтра.
            </p>
            <p className="text-green-600 font-semibold">
              English: We are meeting tomorrow.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 mb-2">
            Человек учит английский: <strong>I am studying this month</strong>
          </p>
          <p className="text-sm text-zinc-700">
            Календарь с планом: <strong>We are meeting tomorrow</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> Русский «я читаю» не
              различает привычку (I read) и текущее действие (I am reading).
              Английский строго разделяет времена.
            </li>
            <li>
              <strong>Планы:</strong> Русский «встречаемся завтра» звучит как
              настоящее, английский использует Present Continuous (We are
              meeting tomorrow).
            </li>
            <li>
              <strong>Изменения:</strong> Русский «темнеет» = It is getting
              dark, что непривычно для русскоязычных.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Present Continuous = временные действия,
            планы, изменения.
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
          Для этой подтемы важно выучить глаголы для временных действий, планов,
          изменений и слова времени. Вот список из{" "}
          <strong>20 ключевых слов/фраз</strong> с переводом и произношением для
          A1-A2.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Глаголы действия:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Live</strong> [lɪv] — Жить
              </p>
              <p>
                <strong>Stay</strong> [steɪ] — Оставаться
              </p>
              <p>
                <strong>Work</strong> [wɜːrk] — Работать
              </p>
              <p>
                <strong>Study</strong> [ˈstʌdi] — Учиться
              </p>
              <p>
                <strong>Meet</strong> [miːt] — Встречаться
              </p>
              <p>
                <strong>Visit</strong> [ˈvɪzɪt] — Посещать
              </p>
              <p>
                <strong>Get</strong> [ɡet] — Становиться
              </p>
              <p>
                <strong>Change</strong> [tʃeɪndʒ] — Меняться
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Слова времени:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>This week</strong> [ðɪs wiːk] — На этой неделе
              </p>
              <p>
                <strong>This month</strong> [ðɪs mʌnθ] — В этом месяце
              </p>
              <p>
                <strong>Tomorrow</strong> [təˈmɒroʊ] — Завтра
              </p>
              <p>
                <strong>Today</strong> [təˈdeɪ] — Сегодня
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Существительные:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>City</strong> [ˈsɪti] — Город
              </p>
              <p>
                <strong>Friend</strong> [frend] — Друг
              </p>
              <p>
                <strong>Party</strong> [ˈpɑːrti] — Вечеринка
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Вспомогательные:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Am</strong> [æm] — (Для I)
              </p>
              <p>
                <strong>Is</strong> [ɪz] — (Для he, she, it)
              </p>
              <p>
                <strong>Are</strong> [ɑːr] — (Для you, we, they)
              </p>
              <p>
                <strong>Now</strong> [naʊ] — Сейчас
              </p>
              <p>
                <strong>When</strong> [wɛn] — Когда
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">I am studying English this month.</p>
            <p className="text-sm text-gray-600">
              Я изучаю английский в этом месяце.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">We are meeting tomorrow.</p>
            <p className="text-sm text-gray-600">Мы встречаемся завтра.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">It is getting cold.</p>
            <p className="text-sm text-gray-600">Холодает.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Повторяйте слова с аудио (am [æm], studying [ˈstʌdiɪŋ]).</li>
            <li>Составляйте предложения: I am living in London this year.</li>
            <li>Используйте карточки: слово + перевод.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные путают Present Continuous для планов (We are meeting
            tomorrow) с Present Simple (We meet tomorrow).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Временные действия ===== */
function Step3() {
  const temporaryExercise: FillItem[] = [
    {
      left: "1. I am",
      right: "English this month. (изучаю)",
      answers: ["studying"],
      explanation: "Ответ: studying — Study + ing.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She is",
      right: "in London this year. (живёт)",
      answers: ["living"],
      explanation: "Ответ: living — Live + ing (убираем e).",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. We are",
      right: "in a shop this summer. (работаем)",
      answers: ["working"],
      explanation: "Ответ: working — Work + ing.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать для временных действий?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Continuous описывает действия, которые происходят в
          определённый период, но не навсегда (this week, this month, this
          year).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I am studying English this month.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я изучаю английский в этом месяце.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + am + studying + this month
              (временный период).
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
              <strong>Почему так:</strong> She + is + living + this year.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              We are working in a shop this summer.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Мы работаем в магазине этим летом.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> We + are + working + this summer.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Формула:</strong> Am/is/are + глагол + -ing.
            </li>
            <li>
              <strong>Временные слова:</strong> this week, this month, this
              year, this summer.
            </li>
            <li>
              <strong>-ing форма:</strong> study → studying, live → living, work
              → working.
            </li>
            <li>
              <strong>Произношение:</strong> Studying [ˈstʌdiɪŋ], living
              [ˈlɪvɪŋ].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Поездка:</strong> I am staying with my friend this week.
              (Я живу у друга на этой неделе.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Работа:</strong> He is working in a café this summer. (Он
              работает в кафе этим летом.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Учёба:</strong> They are studying French this month. (Они
              изучают французский в этом месяце.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для постоянных действий:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I am living in London (если навсегда).
                </div>
                <div className="text-green-600">
                  ✅ Right: I live in London.
                </div>
              </div>
            </li>
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I am knowing English.
                </div>
                <div className="text-green-600">✅ Right: I know English.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Временные действия"
        instruction="Заполните пропуски для описания временных действий."
        items={temporaryExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я живу» не различает временное и постоянное, английский
            требует I am living для временного.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Present Continuous = временные действия с
            this week/month/year.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Планы на будущее ===== */
function Step4() {
  const plansExercise: FillItem[] = [
    {
      left: "1. We are",
      right: "tomorrow. (встречаемся)",
      answers: ["meeting"],
      explanation: "Ответ: meeting — Meet + ing.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She is",
      right: "her friend at 6 p.m. (навещает)",
      answers: ["visiting"],
      explanation: "Ответ: visiting — Visit + ing.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. I am",
      right: "to the party tonight. (иду)",
      answers: ["going"],
      explanation: "Ответ: going — Go + ing.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать для планов?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Continuous описывает запланированные события в будущем,
          особенно с точным временем (tomorrow, at 7 p.m.).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              We are meeting tomorrow.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Мы встречаемся завтра.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> We + are + meeting + tomorrow.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She is visiting her friend at 6 p.m.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она навещает друга в 6 вечера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + is + visiting + at 6 p.m.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I am going to the party tonight.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я иду на вечеринку сегодня вечером.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + am + going + tonight.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Формула:</strong> Am/is/are + глагол + -ing.
            </li>
            <li>
              <strong>Временные слова:</strong> tomorrow, tonight, at 7 p.m.,
              next week.
            </li>
            <li>
              <strong>Глаголы:</strong> Часто meet, visit, go, come.
            </li>
            <li>
              <strong>Произношение:</strong> Meeting [ˈmiːtɪŋ], visiting
              [ˈvɪzɪtɪŋ].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Планы:</strong> I am meeting my friend tomorrow. (Я
              встречаюсь с другом завтра.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> We are going to the cinema tonight. (Мы
              идём в кино сегодня вечером.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Поездка:</strong> He is visiting his family next week. (Он
              навещает семью на следующей неделе.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для общих намерений:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I am going to Paris next year (без плана).
                </div>
                <div className="text-green-600">
                  ✅ Right: I am going to visit Paris next week (конкретный
                  план).
                </div>
              </div>
            </li>
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I am wanting to go.
                </div>
                <div className="text-green-600">✅ Right: I want to go.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Планы на будущее"
        instruction="Заполните пропуски для описания планов."
        items={plansExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «встречаемся завтра» звучит как настоящее, английский
            использует We are meeting tomorrow для планов.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Present Continuous = планы с tomorrow,
            tonight.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Изменения ===== */
function Step5() {
  const changesExercise: FillItem[] = [
    {
      left: "1. It is",
      right: "dark. (темнеет)",
      answers: ["getting"],
      explanation: "Ответ: getting — Get + ting (удваиваем t).",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. The weather is",
      right: "(меняется)",
      answers: ["changing"],
      explanation: "Ответ: changing — Change + ing.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. She is getting",
      right: "(устаёт)",
      answers: ["tired"],
      explanation: "Ответ: tired — Прилагательное после getting.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать для изменений?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Continuous описывает постепенные изменения или процессы
          (getting, becoming).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">It is getting dark.</p>
            <p className="text-sm text-gray-600 mb-2">Перевод: Темнеет.</p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> It + is + getting + dark.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The weather is changing.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Погода меняется.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> The weather + is + changing.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She is getting tired.</p>
            <p className="text-sm text-gray-600 mb-2">Перевод: Она устаёт.</p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + is + getting + tired.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Формула:</strong> Am/is/are + глагол + -ing.
            </li>
            <li>
              <strong>Глаголы:</strong> Часто get, become, change.
            </li>
            <li>
              <strong>Дополнения:</strong> Прилагательные (dark, cold, tired,
              better).
            </li>
            <li>
              <strong>Произношение:</strong> Getting [ˈɡetɪŋ], changing
              [ˈtʃeɪndʒɪŋ].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Погода:</strong> It is getting cold. (Холодает.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Здоровье:</strong> He is getting better. (Он
              выздоравливает.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Окружение:</strong> The city is changing. (Город
              меняется.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для статичных состояний:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: It is being cold.</div>
                <div className="text-green-600">✅ Right: It is cold.</div>
              </div>
            </li>
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I am knowing more.</div>
                <div className="text-green-600">✅ Right: I know more.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Изменения"
        instruction="Заполните пропуски для описания изменений."
        items={changesExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «темнеет» = It is getting dark, но русскоязычные часто
            используют Present Simple (It gets dark).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Present Continuous = постепенные изменения
            с get/change.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Сравнение с Present Simple ===== */
function Step6() {
  return (
    <>
      <UiSection title="Когда использовать Present Simple и Present Continuous?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm">
              Для привычек, фактов, постоянных действий (I read books).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Continuous:</p>
            <p className="text-sm">
              Для действий сейчас, временных действий, планов, изменений (I am
              reading a book now).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры для сравнения">
        <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
          <div>
            <p className="font-semibold mb-1">Пример 1:</p>
            <p className="text-sm text-indigo-600">
              Present Simple: I live in Moscow. (Я живу в Москве, всегда.)
            </p>
            <p className="text-sm text-green-600">
              Present Continuous: I am living in London this year. (Я живу в
              Лондоне в этом году, временно.)
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Пример 2:</p>
            <p className="text-sm text-indigo-600">
              Present Simple: We meet every day. (Мы встречаемся каждый день.)
            </p>
            <p className="text-sm text-green-600">
              Present Continuous: We are meeting tomorrow. (Мы встречаемся
              завтра, план.)
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Пример 3:</p>
            <p className="text-sm text-indigo-600">
              Present Simple: It gets cold in winter. (Зимой холодно, факт.)
            </p>
            <p className="text-sm text-green-600">
              Present Continuous: It is getting cold. (Сейчас холодает.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Present Simple:</strong> Do/does для вопросов/отрицаний
              (Do you read?).
            </li>
            <li>
              <strong>Present Continuous:</strong> Am/is/are (Are you reading?).
            </li>
            <li>
              <strong>Временные слова:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Simple: every day, always, usually.</li>
                <li>Continuous: now, this week, tomorrow.</li>
              </ul>
            </li>
            <li>
              <strong>Статичные глаголы:</strong> Like, know, want — только в
              Simple (I like, не I am liking).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ путать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I read now.</div>
              <div className="text-green-600">✅ Right: I am reading now.</div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: I am living in Moscow (если навсегда).
              </div>
              <div className="text-green-600">✅ Right: I live in Moscow.</div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: I am knowing English.
              </div>
              <div className="text-green-600">✅ Right: I know English.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я читаю» не различает привычку и текущее действие,
            английский требует I read или I am reading.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Present Simple = привычки, Present
            Continuous = сейчас/временно/планы.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Отличия от русского и типичные ошибки ===== */
function Step7() {
  return (
    <>
      <UiSection title="Отличия от русского языка (все мелочи)">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Разделение времён:</strong> Русский «я живу» может быть
              постоянным (I live) или временным (I am living). Английский строго
              разделяет.
            </li>
            <li>
              <strong>Планы:</strong> Русский «встречаемся завтра» = We are
              meeting tomorrow, а не We meet.
            </li>
            <li>
              <strong>Изменения:</strong> Русский «темнеет» = It is getting
              dark, а не It gets dark.
            </li>
            <li>
              <strong>-ing форма:</strong> В русском нет аналога -ing, это
              сложно для запоминания.
            </li>
            <li>
              <strong>Произношение:</strong> Русскоязычные путают am [æm] и is
              [ɪz], а -ing [ɪŋ] звучит как «ин».
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Путаница с Present Simple:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">
                  ❌ I live in London this year.
                </div>
                <div className="text-green-600">
                  ✅ I am living in London this year.
                </div>
              </div>
            </li>
            <li>
              <strong>Статичные глаголы в Continuous:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I am knowing English.</div>
                <div className="text-green-600">✅ I know English.</div>
              </div>
            </li>
            <li>
              <strong>Неправильное -ing:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I am studing.</div>
                <div className="text-green-600">✅ I am studying.</div>
              </div>
            </li>
            <li>
              <strong>Пропуск am/is/are:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I studying now.</div>
                <div className="text-green-600">✅ I am studying now.</div>
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
                <th className="border border-gray-300 p-2 text-left">
                  Английский (неверно)
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Правильно
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  Я живу в Лондоне (временно)
                </td>
                <td className="border border-gray-300 p-2 text-red-600">
                  ❌ I live in London this year
                </td>
                <td className="border border-gray-300 p-2 text-green-600">
                  ✅ I am living in London this year
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Я знаю английский
                </td>
                <td className="border border-gray-300 p-2 text-red-600">
                  ❌ I am knowing English
                </td>
                <td className="border border-gray-300 p-2 text-green-600">
                  ✅ I know English
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
              Прочитайте каждое слово вслух 3 раза (am [æm], studying
              [ˈstʌdiɪŋ]). Используйте аудио на сайте.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Карточки:</p>
            <p className="text-sm">
              Напишите слова на карточках (английское слово + перевод).
              Проверяйте себя.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Предложения:</p>
            <p className="text-sm mb-2">
              Составьте <strong>10 предложений</strong> с Present Continuous:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                3 для временных действий: I am studying English this month.
              </li>
              <li>3 для планов: We are meeting tomorrow.</li>
              <li>2 для изменений: It is getting cold.</li>
              <li>2 вопроса: Are you visiting your friend?</li>
            </ul>
            <p className="text-sm mt-2 italic">
              Пример: She is living in Paris this summer.
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
              <p>A: What are you doing this month?</p>
              <p>B: I am studying English.</p>
              <p>A: Are you meeting friends tomorrow?</p>
              <p>B: Yes, we are meeting at 7 p.m.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Практикуйте в реальных ситуациях (опишите свои планы или
              изменения).
            </li>
            <li>Проверяйте произношение (am [æm], meeting [ˈmiːtɪŋ]).</li>
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
      left: "1. I",
      right: "studying English this month.",
      answers: ["am"],
      explanation: "Ответ: am — Для I.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. We",
      right: "meeting tomorrow.",
      answers: ["are"],
      explanation: "Ответ: are — Для we.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. It",
      right: "getting dark.",
      answers: ["is"],
      explanation: "Ответ: is — Для it.",
      ariaLabel: "Вопрос 3",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I am studying English this month. →",
      right: "",
      answers: [
        "I'm not studying English this month",
        "I'm not studying English this month.",
      ],
      explanation: "Ответ: I'm not studying English this month.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. We are meeting tomorrow. →",
      right: "",
      answers: ["We aren't meeting tomorrow", "We aren't meeting tomorrow."],
      explanation: "Ответ: We aren't meeting tomorrow.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Я живу в Париже в этом месяце. →",
      right: "",
      answers: [
        "I am living in Paris this month",
        "I am living in Paris this month.",
      ],
      explanation: "Ответ: I am living in Paris this month.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Мы не встречаемся завтра. →",
      right: "",
      answers: ["We aren't meeting tomorrow", "We aren't meeting tomorrow."],
      explanation: "Ответ: We aren't meeting tomorrow.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Погода меняется? →",
      right: "",
      answers: ["Is the weather changing", "Is the weather changing?"],
      explanation: "Ответ: Is the weather changing?",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. ❌ I live in London this year. →",
      right: "",
      answers: [
        "I am living in London this year",
        "I am living in London this year.",
      ],
      explanation:
        "Исправление: I am living in London this year. — Временное действие.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ We are meet tomorrow. →",
      right: "",
      answers: ["We are meeting tomorrow", "We are meeting tomorrow."],
      explanation: "Исправление: We are meeting tomorrow. — Глагол с -ing.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ It is geting cold. →",
      right: "",
      answers: ["It is getting cold", "It is getting cold."],
      explanation:
        "Исправление: It is getting cold. — Правильное -ing (get → getting).",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  const exercise5: FillItem[] = [
    {
      left: "1. I ______ books every day. (read)",
      right: "",
      answers: ["read"],
      explanation: "Ответ: read — Привычка (Present Simple).",
      ariaLabel: "Simple/Continuous 1",
      wide: true,
    },
    {
      left: "2. I ______ a book now. (read)",
      right: "",
      answers: ["am reading"],
      explanation: "Ответ: am reading — Действие сейчас (Present Continuous).",
      ariaLabel: "Simple/Continuous 2",
      wide: true,
    },
    {
      left: "3. We ______ our friend tomorrow. (meet)",
      right: "",
      answers: ["are meeting"],
      explanation: "Ответ: are meeting — План (Present Continuous).",
      ariaLabel: "Simple/Continuous 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по Present Continuous">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильную форму"
        instruction="Вставьте am, is или are в зависимости от подлежащего (I → am, We → are, It → is)."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Сделайте отрицания"
        instruction="Переделайте предложения в отрицательные, используя am not / isn't / aren't."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Переведите"
        instruction="Переведите предложения с русского на английский, используя Present Continuous."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Исправьте ошибки"
        instruction="Найдите ошибки в предложениях и напишите правильный вариант целиком."
        items={exercise4}
      />

      <CheckableExercise
        title="📝 Упражнение 5: Выберите правильное время"
        instruction="Вставьте глагол в правильной форме: Present Simple (read) или Present Continuous (am reading)."
        items={exercise5}
      />
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и True/False ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const trueFalseItems: FillItem[] = [
    {
      left: "1. I am studying English this month.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I am studying English this month.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. I am living in London now.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — I am not living in London now.",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. We are meeting tomorrow at 7 p.m.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — We are meeting tomorrow at 7 p.m.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. The weather is getting warm.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — The weather is getting cold.",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. We are visiting the city tomorrow.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — Yes, we are.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Plans and Changes">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            I am studying English this month. I am not living in London now, but
            I am staying with my friend this week. We are meeting tomorrow at 7
            p.m. The weather is getting cold. It isn't changing fast. Are we
            visiting the city tomorrow? Yes, we are.
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
              Я изучаю английский в этом месяце. Я не живу в Лондоне сейчас, но
              я живу у друга на этой неделе. Мы встречаемся завтра в 7 вечера.
              Погода холодает. Она не меняется быстро. Мы посещаем город завтра?
              Да, посещаем.
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
            Подчеркните am/is/are и -ing в тексте для поиска ответов. Обратите
            внимание на детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Present Continuous: Расширенное
          использование"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Описывать временные действия (this week, this month)</li>
          <li>Говорить о запланированных событиях (tomorrow, tonight)</li>
          <li>Описывать постепенные изменения (getting, changing)</li>
          <li>Различать Present Simple и Present Continuous</li>
          <li>Избегать типичных ошибок русскоязычных</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Временные действия:</strong> I am studying this month.
            </li>
            <li>
              <strong>Планы:</strong> We are meeting tomorrow.
            </li>
            <li>
              <strong>Изменения:</strong> It is getting cold.
            </li>
            <li>
              <strong>Present Simple vs. Continuous:</strong> I read (привычка)
              vs. I am reading (сейчас/временно).
            </li>
            <li>
              <strong>Отличия от русского:</strong> Английский разделяет
              привычки (I live) и временные действия (I am living).
            </li>
            <li>
              <strong>Произношение:</strong> Am [æm], Is [ɪz], Are [ɑːr], -ing
              [ɪŋ].
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Описывайте свои планы на завтра, используя Present Continuous
            </li>
            <li>Помните: this week, tomorrow — маркеры временных действий</li>
            <li>Различайте: I live (постоянно) vs. I am living (временно)</li>
            <li>Для изменений используйте: It is getting cold</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




