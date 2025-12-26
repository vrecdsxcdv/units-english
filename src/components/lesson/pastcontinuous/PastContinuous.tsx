"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PastContinuous({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Базовое введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое Past Continuous?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Past Continuous — это время в английском языке, которое описывает
          действия, которые происходили в определённый момент в прошлом или
          продолжались в прошлом. Оно строится по формуле:{" "}
          <strong>was/were + глагол + -ing</strong>.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Примеры:</p>
            <div className="space-y-1 text-sm text-zinc-700">
              <p className="italic">
                I was reading a book at 5 p.m. (Я читал книгу в 5 вечера.)
              </p>
              <p className="italic">
                She was running in the park. (Она бежала в парке.)
              </p>
              <p className="italic">
                They were talking yesterday. (Они разговаривали вчера.)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает описывать, что происходило в прошлом: I was eating at that
            time. (Я ел в то время.)
          </li>
          <li>Учит задавать вопросы: Were you reading? (Ты читал?)</li>
          <li>
            Формирует базу для рассказов о прошлом (что происходило в момент
            речи).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Was:</strong> Для I, he, she, it.
            </li>
            <li>
              <strong>Were:</strong> Для you, we, they.
            </li>
            <li>
              <strong>Глагол + -ing:</strong> read → reading, run → running.
            </li>
            <li>
              <strong>Произношение:</strong> Was [wɒz] (воз), Were [wɜːr] (вёр),
              reading [ˈriːdɪŋ].
            </li>
            <li>
              <strong>Интонация:</strong> Утверждения — ровная, вопросы (Were
              you…?) — восходящая (↑).
            </li>
            <li>
              <strong>Временные слова:</strong> at 5 p.m., yesterday, when,
              while указывают на момент в прошлом.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Я читал книгу вчера.</p>
            <p className="text-indigo-600 font-semibold">
              English: I was reading a book yesterday. (действие продолжалось)
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Они бежали.</p>
            <p className="text-green-600 font-semibold">
              English: They were running.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 mb-2">
            Человек читает книгу: <strong>I was reading</strong>
          </p>
          <p className="text-sm text-zinc-700">
            Другой бежит: <strong>She was running</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> В русском прошедшее время
              (читал) не различает продолжительность, в английском Past
              Continuous подчёркивает, что действие длилось (I was reading).
            </li>
            <li>
              <strong>Глагол обязателен:</strong> Русский может опускать детали
              (Читал вчера), английский требует was/were (I was reading
              yesterday).
            </li>
            <li>
              <strong>-ing форма:</strong> В русском нет аналога -ing, это нужно
              запомнить как маркер продолжения.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Past Continuous = действие продолжалось в
            прошлом.
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
          Для Past Continuous важно выучить глаголы действия и слова времени,
          связанные с прошлым. Вот список из{" "}
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
                <strong>Read</strong> [riːd] — Читать
              </p>
              <p>
                <strong>Write</strong> [raɪt] — Писать
              </p>
              <p>
                <strong>Run</strong> [rʌn] — Бежать
              </p>
              <p>
                <strong>Eat</strong> [iːt] — Есть (пищу)
              </p>
              <p>
                <strong>Drink</strong> [drɪŋk] — Пить
              </p>
              <p>
                <strong>Talk</strong> [tɔːk] — Разговаривать
              </p>
              <p>
                <strong>Play</strong> [pleɪ] — Играть
              </p>
              <p>
                <strong>Listen</strong> [ˈlɪsn] — Слушать
              </p>
              <p>
                <strong>Watch</strong> [wɒtʃ] — Смотреть
              </p>
              <p>
                <strong>Study</strong> [ˈstʌdi] — Учиться
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Слова времени и другие:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Yesterday</strong> [ˈjɛstərdeɪ] — Вчера
              </p>
              <p>
                <strong>At</strong> [æt] — В (время)
              </p>
              <p>
                <strong>When</strong> [wɛn] — Когда
              </p>
              <p>
                <strong>While</strong> [waɪl] — Пока
              </p>
              <p>
                <strong>Last night</strong> [læst naɪt] — Вчера вечером
              </p>
              <p>
                <strong>Book</strong> [bʊk] — Книга
              </p>
              <p>
                <strong>Friend</strong> [frend] — Друг
              </p>
              <p>
                <strong>TV</strong> [ˌtiː ˈviː] — Телевизор
              </p>
              <p>
                <strong>Was</strong> [wɒz] — (Для I, he, she, it)
              </p>
              <p>
                <strong>Were</strong> [wɜːr] — (Для you, we, they)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">I was reading a book yesterday.</p>
            <p className="text-sm text-gray-600">Я читал книгу вчера.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">She was running in the park.</p>
            <p className="text-sm text-gray-600">Она бежала в парке.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">They were talking at that time.</p>
            <p className="text-sm text-gray-600">
              Они разговаривали в то время.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Повторяйте слова с аудио (was [wɒz], reading [ˈriːdɪŋ]).</li>
            <li>Составляйте предложения: I was eating at 5 p.m.</li>
            <li>Используйте карточки: слово + перевод.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="mb-2">
            <strong>Was:</strong> I was reading a book.
          </div>
          <div>
            <strong>Were:</strong> They were playing now.
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто путают Past Continuous с Past Simple (I read
            yesterday вместо I was reading yesterday), так как в русском нет
            такого разделения.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Утвердительные предложения ===== */
function Step3() {
  const affirmativeExercise: FillItem[] = [
    {
      left: "1. I",
      right: "reading a book at 5 p.m. (читал)",
      answers: ["was"],
      explanation: "Ответ: was — I was reading.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "running in the park yesterday. (бежала)",
      answers: ["was"],
      explanation: "Ответ: was — She was running.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "talking while I was eating. (разговаривали)",
      answers: ["were"],
      explanation: "Ответ: were — They were talking.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как строить утверждения?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема:{" "}
          <strong>
            Подлежащее + was/were + глагол + -ing + (временное слово)
          </strong>
          .
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I was reading a book at 5 p.m.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я читал книгу в 5 вечера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + was + reading + a book + at 5
              p.m.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She was running in the park yesterday.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она бежала в парке вчера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + was + running + in the park +
              yesterday.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              They were talking while I was eating.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они разговаривали, пока я ел.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> They + were + talking + while + I was
              eating.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Was:</strong> Для I, he, she, it.
            </li>
            <li>
              <strong>Were:</strong> Для you, we, they.
            </li>
            <li>
              <strong>-ing форма:</strong>
              <ul className="ml-5 mt-1">
                <li>Обычные: read → reading.</li>
                <li>На -e: write → writing (убираем e).</li>
                <li>
                  Короткая гласная + согласная: run → running (удваиваем).
                </li>
              </ul>
            </li>
            <li>
              <strong>Временные слова:</strong> at 5 p.m., yesterday, while,
              when в конце или середине.
            </li>
            <li>
              <strong>Произношение:</strong> Was [wɒz], were [wɜːr], -ing [ɪŋ].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Рутина:</strong> I was eating breakfast at 8 a.m.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> He was watching TV last night.
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Прерывание:</strong> We were studying when you called.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте was/were:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I were reading.</div>
                <div className="text-green-600">✅ Right: I was reading.</div>
              </div>
            </li>
            <li>
              НЕ забывайте -ing:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I was read.</div>
                <div className="text-green-600">✅ Right: I was reading.</div>
              </div>
            </li>
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I was knowing.</div>
                <div className="text-green-600">✅ Right: I knew.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Утвердительные предложения"
        instruction="Заполните пропуски с was или were."
        items={affirmativeExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я читал» не подчёркивает продолжительность, английский I
            was reading показывает, что действие длилось.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Утверждения = Подлежащее + was/were +
            глагол + -ing.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Отрицания ===== */
function Step4() {
  const negativeExercise: FillItem[] = [
    {
      left: "1. I",
      right: "reading a book at 5 p.m. (не читал)",
      answers: ["wasn't", "wasnt", "was not"],
      explanation: "Ответ: wasn't — I wasn't reading.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "running in the park. (не бежала)",
      answers: ["wasn't", "wasnt", "was not"],
      explanation: "Ответ: wasn't — She wasn't running.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "talking yesterday. (не разговаривали)",
      answers: ["weren't", "werent", "were not"],
      explanation: "Ответ: weren't — They weren't talking.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как строить отрицания?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Подлежащее + was/were + not + глагол + -ing</strong>.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          • Сокращения: wasn't, weren't.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I wasn't reading a book at 5 p.m.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я не читал книгу в 5 вечера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + was not + reading + a book + at 5
              p.m.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She wasn't running in the park.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она не бежала в парке.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + was not + running + in the
              park.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              They weren't talking yesterday.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они не разговаривали вчера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> They + were not + talking +
              yesterday.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Wasn't:</strong> Для I, he, she, it.
            </li>
            <li>
              <strong>Weren't:</strong> Для you, we, they.
            </li>
            <li>
              <strong>Произношение:</strong> Wasn't [ˈwɒznt], weren't [wɜːrnt].
            </li>
            <li>
              <strong>-ing форма:</strong> Те же правила (read → reading).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Рутина:</strong> I wasn't eating breakfast at 8 a.m.
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> He wasn't watching TV last night.
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Прерывание:</strong> We weren't studying when you called.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте формы:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I weren't reading.</div>
                <div className="text-green-600">
                  ✅ Right: I wasn't reading.
                </div>
              </div>
            </li>
            <li>
              НЕ используйте didn't:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I didn't reading.</div>
                <div className="text-green-600">
                  ✅ Right: I wasn't reading.
                </div>
              </div>
            </li>
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I wasn't liking.</div>
                <div className="text-green-600">✅ Right: I didn't like.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Отрицательные предложения"
        instruction="Заполните пропуски с wasn't или weren't."
        items={negativeExercise}
      />

      <UiSection title="Визуал: Таблица">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="mb-2">
            <strong>Wasn't:</strong> I wasn't reading a book.
          </div>
          <div>
            <strong>Weren't:</strong> They weren't talking.
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я не читал» не подчёркивает продолжительность, английский I
            wasn't reading показывает, что действие не длилось.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Отрицания = Подлежащее + was/were + not +
            глагол + -ing.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Вопросы ===== */
function Step5() {
  const questionExercise: FillItem[] = [
    {
      left: "1.",
      right: "I reading a book at 5 p.m.? (читал я)",
      answers: ["Was", "was"],
      explanation: "Ответ: Was — Was I reading?",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2.",
      right: "she running in the park? (бежала она)",
      answers: ["Was", "was"],
      explanation: "Ответ: Was — Was she running?",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3.",
      right: "they talking yesterday? (разговаривали они)",
      answers: ["Were", "were"],
      explanation: "Ответ: Were — Were they talking?",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как задавать вопросы?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема:{" "}
          <strong>
            Was/Were + подлежащее + глагол + -ing + (временное слово)?
          </strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Was I reading a book at 5 p.m.?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я читал книгу в 5 вечера?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Was + I + reading + a book + at 5
              p.m.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Was she running in the park?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она бежала в парке?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Was + she + running + in the park.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Were they talking yesterday?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они разговаривали вчера?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Were + they + talking + yesterday.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Was:</strong> Для I, he, she, it.
            </li>
            <li>
              <strong>Were:</strong> Для you, we, they.
            </li>
            <li>
              <strong>Короткие ответы:</strong> Yes, I was. / No, I wasn't.;
              Yes, they were. / No, they weren't.
            </li>
            <li>
              <strong>Произношение:</strong> Was [wɒz], were [wɜːr], восходящая
              интонация (↑).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Рутина:</strong> Were you eating breakfast at 8 a.m.?
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> Was he watching TV last night?
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Прерывание:</strong> Were we studying when you called?
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте формы:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Were I reading?</div>
                <div className="text-green-600">✅ Right: Was I reading?</div>
              </div>
            </li>
            <li>
              НЕ используйте did:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Did you reading?</div>
                <div className="text-green-600">
                  ✅ Right: Were you reading?
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вопросы"
        instruction="Заполните пропуски с Was или Were."
        items={questionExercise}
      />

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 text-center">
            Вопросительный знак с <strong>Was I reading?</strong>,{" "}
            <strong>Were they talking?</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «ты читал?» гибкий, английский Were you reading? — строгий
            порядок.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Вопросы = Was/Were + подлежащее + глагол +
            -ing?
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Правила добавления -ing ===== */
function Step6() {
  return (
    <>
      <UiSection title="Как добавлять -ing?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Past Continuous использует ту же -ing форму, что и Present Continuous.
        </p>
      </UiSection>

      <UiSection title="Правила и примеры">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Обычные глаголы:</strong> read → reading, play → playing.
            </li>
            <li>
              <strong>На -e:</strong> Убираем e, добавляем -ing (write →
              writing).
            </li>
            <li>
              <strong>Короткая гласная + согласная:</strong> Удваиваем согласную
              (run → running).
            </li>
            <li>
              <strong>На -ie:</strong> ie → y + -ing (die → dying).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры в предложениях">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">I was reading a book.</p>
            <p className="text-sm text-gray-600">читал</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">She was writing a letter.</p>
            <p className="text-sm text-gray-600">писала</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">He was running in the park.</p>
            <p className="text-sm text-gray-600">бежал</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>-ing</strong> [ɪŋ] (инг).
            </li>
            <li>
              <strong>Ударение:</strong> REAding [ˈriːdɪŋ], RUNning [ˈrʌnɪŋ].
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ забывайте -ing:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I was read.</div>
                <div className="text-green-600">✅ Right: I was reading.</div>
              </div>
            </li>
            <li>
              НЕ удваивайте без причины:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: read → readding.</div>
                <div className="text-green-600">✅ Right: reading.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Глагол</th>
                <th className="border border-gray-300 p-2 text-left">
                  Форма -ing
                </th>
                <th className="border border-gray-300 p-2 text-left">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">read</td>
                <td className="border border-gray-300 p-2">reading</td>
                <td className="border border-gray-300 p-2">I was reading.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">write</td>
                <td className="border border-gray-300 p-2">writing</td>
                <td className="border border-gray-300 p-2">She was writing.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">run</td>
                <td className="border border-gray-300 p-2">running</td>
                <td className="border border-gray-300 p-2">He was running.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные ошибаются с -ing (writeing вместо writing), так как в
            русском нет подобной формы.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> -ing добавляется по правилам (read →
            reading, run → running).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Сравнение ===== */
function Step7() {
  return (
    <>
      <UiSection title="Сравнение с Present Simple">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm">Привычки (I play football).</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Past Continuous:</p>
            <p className="text-sm">
              Продолжительные действия в прошлом (I was playing football).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры для сравнения">
        <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
          <div>
            <p className="font-semibold mb-1">Present Simple:</p>
            <p className="text-sm text-indigo-600">
              I read books. (Я читаю книги, регулярно.)
            </p>
            <p className="font-semibold mb-1 mt-2">Past Continuous:</p>
            <p className="text-sm text-green-600">
              I was reading a book yesterday. (Я читал книгу вчера.)
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Present Simple:</p>
            <p className="text-sm text-indigo-600">
              She runs in the park. (Она бегает в парке, привычка.)
            </p>
            <p className="font-semibold mb-1 mt-2">Past Continuous:</p>
            <p className="text-sm text-green-600">
              She was running in the park when I saw her. (Она бежала в парке,
              когда я увидел её.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Сравнение с was/were">
        <div className="space-y-3">
          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Was/Were:</p>
            <p className="text-sm">Состояния (I was tired).</p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Past Continuous:</p>
            <p className="text-sm">Действия (I was running).</p>
          </div>
        </div>

        <div className="mt-3">
          <p className="font-semibold mb-1">Пример:</p>
          <p className="text-sm">Was/Were: I was at school. (Я был в школе.)</p>
          <p className="text-sm">
            Past Continuous: I was studying at school. (Я учился в школе.)
          </p>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Present Simple: do/does для вопросов (Do you play?).</li>
            <li>Past Continuous: was/were (Was you playing?).</li>
            <li>
              Was/Were: Без -ing (I was happy), Past Continuous: С -ing (I was
              reading).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I read yesterday.</div>
              <div className="text-green-600">
                ✅ Right: I was reading yesterday.
              </div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I was play.</div>
              <div className="text-green-600">✅ Right: I was playing.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица сравнения">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Время</th>
                <th className="border border-gray-300 p-2 text-left">Пример</th>
                <th className="border border-gray-300 p-2 text-left">Когда?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Present Simple</td>
                <td className="border border-gray-300 p-2">I read books.</td>
                <td className="border border-gray-300 p-2">Привычка</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Past Continuous</td>
                <td className="border border-gray-300 p-2">
                  I was reading yesterday.
                </td>
                <td className="border border-gray-300 p-2">
                  Продолжительное действие в прошлом
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Was/Were</td>
                <td className="border border-gray-300 p-2">I was happy.</td>
                <td className="border border-gray-300 p-2">
                  Состояние в прошлом
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные путают Past Continuous с Past Simple (I read yesterday
            вместо I was reading), так как в русском нет такого разделения.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Past Continuous = продолжительные действия
            в прошлом, Present Simple = привычки.
          </p>
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
              Прочитайте каждое слово вслух 3 раза (was [wɒz], reading
              [ˈriːdɪŋ]). Используйте аудио на сайте.
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
              Составьте <strong>10 предложений</strong> с Past Continuous:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>4 утвердительных: I was reading a book yesterday.</li>
              <li>3 отрицательных: I wasn't eating now.</li>
              <li>3 вопроса: Were you running?</li>
            </ul>
            <p className="text-sm mt-2 italic">
              Пример: She was watching TV last night.
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
              <p>A: Were you reading a book yesterday?</p>
              <p>B: Yes, I was reading.</p>
              <p>A: Was she running?</p>
              <p>B: No, she wasn't running.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Практикуйте в реальных ситуациях (опишите, что вы делали вчера).
            </li>
            <li>Проверяйте произношение (was [wɒz], were [wɜːr]).</li>
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
      left: "1. I ______ reading a book yesterday.",
      right: "",
      answers: ["was"],
      explanation: "Ответ: was — Для I.",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. They ______ running in the park.",
      right: "",
      answers: ["were"],
      explanation: "Ответ: were — Для they.",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. ______ you talking yesterday?",
      right: "",
      answers: ["Were", "were"],
      explanation: "Ответ: Were — Вопрос для you.",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I was reading a book. →",
      right: "",
      answers: ["I wasn't reading a book", "I wasn't reading a book."],
      explanation: "Ответ: I wasn't reading a book.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. They were talking yesterday. →",
      right: "",
      answers: [
        "They weren't talking yesterday",
        "They weren't talking yesterday.",
      ],
      explanation: "Ответ: They weren't talking yesterday.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Я читал книгу вчера. →",
      right: "",
      answers: [
        "I was reading a book yesterday",
        "I was reading a book yesterday.",
      ],
      explanation: "Ответ: I was reading a book yesterday.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Они не разговаривали. →",
      right: "",
      answers: ["They weren't talking", "They weren't talking."],
      explanation: "Ответ: They weren't talking.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Ты бежал в парке? →",
      right: "",
      answers: [
        "Were you running in the park",
        "Were you running in the park?",
      ],
      explanation: "Ответ: Were you running in the park?",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. ❌ I were reading a book. →",
      right: "",
      answers: ["I was reading a book", "I was reading a book."],
      explanation:
        "Исправление: I was reading a book. — Для I используется was.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ She was run in the park. →",
      right: "",
      answers: ["She was running in the park", "She was running in the park."],
      explanation:
        "Исправление: She was running in the park. — Глагол с -ing (run → running).",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Did you were talking? →",
      right: "",
      answers: ["Were you talking", "Were you talking?"],
      explanation: "Исправление: Were you talking? — Без did, с were.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по Past Continuous">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильную форму"
        instruction="Вставьте was или were в зависимости от подлежащего (I/He/She/It → was, You/We/They → were)."
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
      left: "1. I was studying English at 3 p.m.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I was studying English at 3 p.m.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. I was watching TV.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — I wasn't watching TV.",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. My friends were playing football.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — My friends were playing football.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. My friends were talking on the phone.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — They weren't talking on the phone.",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. I was eating lunch at noon.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — Yes, I was.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Yesterday">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            Yesterday was busy. I was studying English at 3 p.m. I wasn't
            watching TV. My friends were playing football in the park. They
            weren't talking on the phone. Was I eating lunch at noon? Yes, I
            was. Were my friends running? No, they weren't.
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
              Вчера был занятный день. Я учил английский в 3 дня. Я не смотрел
              телевизор. Мои друзья играли в футбол в парке. Они не
              разговаривали по телефону. Ел ли я обед в полдень? Да, ел. Бежали
              ли мои друзья? Нет, не бежали.
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
            Подчеркните was/were и -ing в тексте. Обратите внимание на детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Past Continuous: Formation and Basic Use"!
          Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Описывать действия, которые происходили в прошлом</li>
          <li>Использовать was/were + глагол + -ing</li>
          <li>Строить утверждения, отрицания и вопросы</li>
          <li>Различать was (I, he, she, it) и were (you, we, they)</li>
          <li>Избегать типичных ошибок русскоязычных</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Was/Were:</strong> Was для I, he, she, it, were для you,
              we, they.
            </li>
            <li>
              <strong>-ing форма:</strong> read → reading, run → running.
            </li>
            <li>
              <strong>Отрицания:</strong> wasn't/weren't (I wasn't reading).
            </li>
            <li>
              <strong>Вопросы:</strong> Was/Were в начале (Were you running?).
            </li>
            <li>
              <strong>Отличия от русского:</strong> Английский I was reading
              подчёркивает продолжительность, русский «я читал» — нет.
            </li>
            <li>
              <strong>Произношение:</strong> Was [wɒz], Were [wɜːr], -ing [ɪŋ].
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Описывайте, что вы делали вчера, используя Past Continuous</li>
            <li>
              Помните: at 5 p.m., yesterday, while — маркеры продолжительного
              действия в прошлом
            </li>
            <li>Не забывайте -ing после was/were</li>
            <li>Всегда используйте глагол: I was reading, не I reading</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




