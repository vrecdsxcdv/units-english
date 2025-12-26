"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ReviewTenses({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение в времена и их различия ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое эти времена?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Эта тема повторяет и закрепляет четыре ключевых времени, чтобы вы
          могли уверенно их использовать:
        </p>

        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm text-zinc-700">
              Привычки, регулярные действия, факты{" "}
              <span className="font-mono text-indigo-700">
                (I play football every day)
              </span>
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Continuous:</p>
            <p className="text-sm text-zinc-700">
              Действия, происходящие сейчас или временно{" "}
              <span className="font-mono text-green-700">
                (I am playing football now)
              </span>
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Past Simple:</p>
            <p className="text-sm text-zinc-700">
              Завершённые действия в прошлом{" "}
              <span className="font-mono text-blue-700">
                (I played football yesterday)
              </span>
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Past Continuous:</p>
            <p className="text-sm text-zinc-700">
              Длительные действия в прошлом в определённый момент{" "}
              <span className="font-mono text-amber-700">
                (I was playing football at 5 p.m.)
              </span>
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>Повторяет основы времён, чтобы закрепить знания.</li>
          <li>Помогает различать времена в речи и письме.</li>
          <li>Даёт много практики для уверенного использования.</li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Present Simple:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                Формула: <strong>play</strong>, <strong>do/does</strong> для
                вопросов, <strong>don't/doesn't</strong> для отрицаний.
              </li>
              <li>
                Примеры: <em>I play</em>, <em>Do you play?</em>,{" "}
                <em>I don't play.</em>
              </li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Present Continuous:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                Формула: <strong>am/is/are + глагол + -ing</strong>.
              </li>
              <li>
                Примеры: <em>I am playing</em>, <em>Are you playing?</em>,{" "}
                <em>I am not playing.</em>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Past Simple:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                Формула: <strong>played</strong> (правильные),{" "}
                <strong>went</strong> (неправильные), <strong>didn't</strong>{" "}
                для отрицаний, <strong>Did</strong> для вопросов.
              </li>
              <li>
                Примеры: <em>I played</em>, <em>Did you play?</em>,{" "}
                <em>I didn't play.</em>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Past Continuous:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                Формула: <strong>was/were + глагол + -ing</strong>.
              </li>
              <li>
                Примеры: <em>I was playing</em>, <em>Were you playing?</em>,{" "}
                <em>I wasn't playing.</em>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Произношение:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                <strong>Play</strong> [pleɪ], <strong>playing</strong>{" "}
                [ˈpleɪɪŋ], <strong>played</strong> [pleɪd],{" "}
                <strong>went</strong> [wɛnt].
              </li>
              <li>
                <strong>Was</strong> [wɒz], <strong>were</strong> [wɜːr],{" "}
                <strong>-ing</strong> [ɪŋ].
              </li>
            </ul>
          </div>

          <div className="bg-pink-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Временные слова:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                <strong>Present Simple:</strong> always, every day, usually.
              </li>
              <li>
                <strong>Present Continuous:</strong> now, at the moment, today.
              </li>
              <li>
                <strong>Past Simple:</strong> yesterday, last week, ago.
              </li>
              <li>
                <strong>Past Continuous:</strong> at 5 p.m., when, while.
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">
              Present Simple: I play football every day.
            </p>
            <p className="text-sm text-gray-600">
              Я играю в футбол каждый день. — Привычка.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">
              Present Continuous: I am playing football now.
            </p>
            <p className="text-sm text-gray-600">
              Я играю в футбол сейчас. — Сейчас.
            </p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">
              Past Simple: I played football yesterday.
            </p>
            <p className="text-sm text-gray-600">
              Я играл в футбол вчера. — Завершено.
            </p>
          </div>

          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <p className="font-semibold">
              Past Continuous: I was playing football at 5 p.m.
            </p>
            <p className="text-sm text-gray-600">
              Я играл в футбол в 5 вечера. — Длилось.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              В русском нет чёткого разделения на привычки (Present Simple),
              текущие действия (Present Continuous), завершённые (Past Simple) и
              длительные действия (Past Continuous). Например, «я играю» может
              означать и <em>I play</em>, и <em>I am playing</em>.
            </li>
            <li>
              Английский требует точных временных слов (<em>now</em>,{" "}
              <em>yesterday</em>), в русском они часто опускаются.
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Лексика для всех времён ===== */
function Step2() {
  return (
    <>
      <UiSection title="Список слов (20)">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Глаголы:</h4>
            <div className="space-y-1 text-sm">
              <p>
                1. <strong>Play</strong> [pleɪ] → <strong>Played</strong>{" "}
                [pleɪd] / <strong>Playing</strong> [ˈpleɪɪŋ] — Играть → Играл /
                Играя
              </p>
              <p>
                2. <strong>Go</strong> [ɡoʊ] → <strong>Went</strong> [wɛnt] /{" "}
                <strong>Going</strong> [ˈɡoʊɪŋ] — Идти → Шёл / Идущий
              </p>
              <p>
                3. <strong>Watch</strong> [wɒtʃ] → <strong>Watched</strong>{" "}
                [wɒtʃt] / <strong>Watching</strong> [ˈwɒtʃɪŋ] — Смотреть →
                Смотрел / Смотря
              </p>
              <p>
                4. <strong>Read</strong> [riːd] → <strong>Read</strong> [rɛd] /{" "}
                <strong>Reading</strong> [ˈriːdɪŋ] — Читать → Читал / Читая
              </p>
              <p>
                5. <strong>Eat</strong> [iːt] → <strong>Ate</strong> [eɪt] /{" "}
                <strong>Eating</strong> [ˈiːtɪŋ] — Есть → Ел / Едящий
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Временные слова:</h4>
            <div className="space-y-1 text-sm">
              <p>
                6. <strong>Always</strong> [ˈɔːlweɪz] — Всегда
              </p>
              <p>
                7. <strong>Every day</strong> [ˈɛvri deɪ] — Каждый день
              </p>
              <p>
                8. <strong>Now</strong> [naʊ] — Сейчас
              </p>
              <p>
                9. <strong>At the moment</strong> [æt ðə ˈmoʊmənt] — В данный
                момент
              </p>
              <p>
                10. <strong>Yesterday</strong> [ˈjɛstərdeɪ] — Вчера
              </p>
              <p>
                11. <strong>Last</strong> [læst] — Прошлый
              </p>
              <p>
                12. <strong>At</strong> [æt] — В (время)
              </p>
              <p>
                13. <strong>When</strong> [wɛn] — Когда
              </p>
              <p>
                14. <strong>While</strong> [waɪl] — Пока
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Существительные:</h4>
            <div className="space-y-1 text-sm">
              <p>
                15. <strong>Book</strong> [bʊk] — Книга
              </p>
              <p>
                16. <strong>Friend</strong> [frend] — Друг
              </p>
              <p>
                17. <strong>Park</strong> [pɑːrk] — Парк
              </p>
              <p>
                18. <strong>TV</strong> [ˌtiː ˈviː] — Телевизор
              </p>
              <p>
                19. <strong>School</strong> [skuːl] — Школа
              </p>
              <p>
                20. <strong>Football</strong> [ˈfʊtbɔːl] — Футбол
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">
              Present Simple: I play football every day.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">
              Present Continuous: I am playing football now.
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">
              Past Simple: I played football yesterday.
            </p>
          </div>
          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <p className="font-semibold">
              Past Continuous: I was playing football at 5 p.m.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Повторяйте с аудио (<em>played</em> [pleɪd], <em>was playing</em>{" "}
              [wɒz ˈpleɪɪŋ]).
            </li>
            <li>
              Составляйте предложения: <em>I read a book.</em> /{" "}
              <em>I am reading a book.</em>
            </li>
            <li>Карточки: начальная форма + формы времён + перевод.</li>
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
                  Present Simple
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Present Continuous
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Past Simple
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Past Continuous
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Play</td>
                <td className="border border-gray-300 p-2">I play football</td>
                <td className="border border-gray-300 p-2">
                  I am playing football
                </td>
                <td className="border border-gray-300 p-2">
                  I played football
                </td>
                <td className="border border-gray-300 p-2">
                  I was playing football
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Go</td>
                <td className="border border-gray-300 p-2">I go to school</td>
                <td className="border border-gray-300 p-2">
                  I am going to school
                </td>
                <td className="border border-gray-300 p-2">I went to school</td>
                <td className="border border-gray-300 p-2">
                  I was going to school
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные путают времена (<em>I play yesterday</em> вместо{" "}
            <em>I played yesterday</em> или <em>I read now</em> вместо{" "}
            <em>I am reading now</em>).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Present Simple — Повторение ===== */
function Step3() {
  const presentSimpleExercise: FillItem[] = [
    {
      left: "1. I",
      right: "football every day. (play)",
      answers: ["play"],
      explanation: "Ответ: play — Present Simple для привычек.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "TV every evening. (watch)",
      answers: ["watches"],
      explanation: "Ответ: watches — He/she/it требует -es.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. We",
      right: "to school every day. (go)",
      answers: ["go"],
      explanation: "Ответ: go — Регулярное действие.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать Present Simple?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Привычки:</p>
            <p className="text-sm">
              I play football every day. (Я играю в футбол каждый день.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Регулярные действия:</p>
            <p className="text-sm">
              She watches TV every evening. (Она смотрит телевизор каждый
              вечер.)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Факты:</p>
            <p className="text-sm">
              The sun rises in the east. (Солнце встаёт на востоке.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Схема">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Утверждения:</strong> Подлежащее + глагол (<em>I play</em>
              ).
            </li>
            <li>
              <strong>Отрицания:</strong> Подлежащее + don't/doesn't + глагол (
              <em>I don't play</em>).
            </li>
            <li>
              <strong>Вопросы:</strong> Do/Does + подлежащее + глагол (
              <em>Do you play?</em>).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Рутина:</strong> I go to school every day.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Привычка:</strong> She reads books.
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> We watch TV every evening.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <p className="text-sm text-zinc-700">
          <strong>Play</strong> [pleɪ], <strong>plays</strong> [pleɪz],{" "}
          <strong>don't</strong> [doʊnt].
        </p>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I plays football.</div>
              <div className="text-green-600">✅ Right: I play football.</div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I am play now.</div>
              <div className="text-green-600">✅ Right: I play every day.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Present Simple"
        instruction="Заполните пропуски правильной формой глагола."
        items={presentSimpleExercise}
      />
    </>
  );
}

/* ===== СТРАНИЦА 4: Present Continuous — Повторение ===== */
function Step4() {
  const presentContinuousExercise: FillItem[] = [
    {
      left: "1. I",
      right: "football now. (play)",
      answers: ["am playing"],
      explanation: "Ответ: am playing — Действие сейчас.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "a book at the moment. (read)",
      answers: ["is reading"],
      explanation: "Ответ: is reading — Текущее действие.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. We",
      right: "to the park. (go)",
      answers: ["are going"],
      explanation: "Ответ: are going — План в процессе.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать Present Continuous?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Действия сейчас:</p>
            <p className="text-sm">
              I am playing football now. (Я играю в футбол сейчас.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Временные действия:</p>
            <p className="text-sm">
              She is studying English this month. (Она учит английский в этом
              месяце.)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Планы:</p>
            <p className="text-sm">
              We are going to the park. (Мы идём в парк.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Схема">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Утверждения:</strong> Подлежащее + am/is/are + глагол +
              -ing (<em>I am playing</em>).
            </li>
            <li>
              <strong>Отрицания:</strong> Подлежащее + am/is/are + not + -ing (
              <em>I am not playing</em>).
            </li>
            <li>
              <strong>Вопросы:</strong> Am/Is/Are + подлежащее + -ing (
              <em>Are you playing?</em>).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Момент:</strong> I am reading a book now.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> She is watching TV at the moment.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <p className="text-sm text-zinc-700">
          <strong>Am</strong> [æm], <strong>is</strong> [ɪz],{" "}
          <strong>are</strong> [ɑːr], <strong>-ing</strong> [ɪŋ].
        </p>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I am play football.</div>
              <div className="text-green-600">
                ✅ Right: I am playing football.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: I am playing every day.
              </div>
              <div className="text-green-600">✅ Right: I play every day.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Present Continuous"
        instruction="Заполните пропуски правильной формой глагола."
        items={presentContinuousExercise}
      />
    </>
  );
}

/* ===== СТРАНИЦА 5: Past Simple — Повторение ===== */
function Step5() {
  const pastSimpleExercise: FillItem[] = [
    {
      left: "1. I",
      right: "football yesterday. (play)",
      answers: ["played"],
      explanation: "Ответ: played — Завершённое действие.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "to school. (go)",
      answers: ["went"],
      explanation: "Ответ: went — Неправильный глагол.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. We",
      right: "TV last night. (watch)",
      answers: ["watched"],
      explanation: "Ответ: watched — Правильный глагол + ed.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать Past Simple?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Завершённые действия:</p>
            <p className="text-sm">
              I played football yesterday. (Я играл в футбол вчера.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Последовательные события:</p>
            <p className="text-sm">
              I went to school and ate lunch. (Я пошёл в школу и поел.)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Факты:</p>
            <p className="text-sm">
              She visited London last year. (Она посетила Лондон в прошлом
              году.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Схема">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Утверждения:</strong> Подлежащее + глагол (Past Simple) (
              <em>I played</em>).
            </li>
            <li>
              <strong>Отрицания:</strong> Подлежащее + didn't + начальная форма
              (<em>I didn't play</em>).
            </li>
            <li>
              <strong>Вопросы:</strong> Did + подлежащее + начальная форма (
              <em>Did you play?</em>).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> I watched TV yesterday.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Событие:</strong> She went to the park.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <p className="text-sm text-zinc-700">
          <strong>Played</strong> [pleɪd], <strong>went</strong> [wɛnt],{" "}
          <strong>didn't</strong> [ˈdɪdnt].
        </p>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I play yesterday.</div>
              <div className="text-green-600">
                ✅ Right: I played yesterday.
              </div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I didn't played.</div>
              <div className="text-green-600">✅ Right: I didn't play.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Past Simple"
        instruction="Заполните пропуски правильной формой глагола."
        items={pastSimpleExercise}
      />
    </>
  );
}

/* ===== СТРАНИЦА 6: Past Continuous — Повторение ===== */
function Step6() {
  const pastContinuousExercise: FillItem[] = [
    {
      left: "1. I",
      right: "reading a book at 5 p.m. (read)",
      answers: ["was"],
      explanation: "Ответ: was — I was reading.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "watching TV when I came. (watch)",
      answers: ["was"],
      explanation: "Ответ: was — She was watching.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "talking in the park. (talk)",
      answers: ["were"],
      explanation: "Ответ: were — They were talking.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать Past Continuous?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              1. Длительные действия в момент:
            </p>
            <p className="text-sm">
              I was playing football at 5 p.m. (Я играл в футбол в 5 вечера.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Фон для другого действия:</p>
            <p className="text-sm">
              I was reading when you called. (Я читал, когда ты позвонил.)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Атмосфера:</p>
            <p className="text-sm">
              It was raining, and we were talking. (Шёл дождь, и мы
              разговаривали.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Схема">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Утверждения:</strong> Подлежащее + was/were + глагол +
              -ing (<em>I was playing</em>).
            </li>
            <li>
              <strong>Отрицания:</strong> Подлежащее + wasn't/weren't + -ing (
              <em>I wasn't playing</em>).
            </li>
            <li>
              <strong>Вопросы:</strong> Was/Were + подлежащее + -ing (
              <em>Were you playing?</em>).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Момент:</strong> I was eating at 8 a.m.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Фон:</strong> She was watching TV when I came.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <p className="text-sm text-zinc-700">
          <strong>Was</strong> [wɒz], <strong>were</strong> [wɜːr],{" "}
          <strong>-ing</strong> [ɪŋ].
        </p>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I was play football.</div>
              <div className="text-green-600">
                ✅ Right: I was playing football.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: I was reading yesterday.
              </div>
              <div className="text-green-600">✅ Right: I read yesterday.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Past Continuous"
        instruction="Заполните пропуски с was или were."
        items={pastContinuousExercise}
      />
    </>
  );
}

/* ===== СТРАНИЦА 7: Сравнение времён и ошибки ===== */
function Step7() {
  return (
    <>
      <UiSection title="Сравнение времён">
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
                <td className="border border-gray-300 p-2">
                  I play football every day.
                </td>
                <td className="border border-gray-300 p-2">Привычка, факт</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Present Continuous
                </td>
                <td className="border border-gray-300 p-2">
                  I am playing football now.
                </td>
                <td className="border border-gray-300 p-2">Действие сейчас</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Past Simple</td>
                <td className="border border-gray-300 p-2">
                  I played football yesterday.
                </td>
                <td className="border border-gray-300 p-2">
                  Завершённое действие
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Past Continuous</td>
                <td className="border border-gray-300 p-2">
                  I was playing football at 5 p.m.
                </td>
                <td className="border border-gray-300 p-2">
                  Длительное действие в прошлом
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Ошибки русскоязычных">
        <div className="space-y-3">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              1. Present Simple вместо Present Continuous:
            </p>
            <div className="ml-4">
              <div className="text-red-600">❌ Wrong: I play football now.</div>
              <div className="text-green-600">
                ✅ Right: I am playing football now.
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              2. Past Simple вместо Past Continuous:
            </p>
            <div className="ml-4">
              <div className="text-red-600">❌ Wrong: I read at 5 p.m.</div>
              <div className="text-green-600">
                ✅ Right: I was reading at 5 p.m.
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Неправильные формы:</p>
            <div className="ml-4 space-y-1">
              <div>
                <span className="text-red-600">❌ I am play.</span> →{" "}
                <span className="text-green-600">✅ I am playing.</span>
              </div>
              <div>
                <span className="text-red-600">❌ I didn't played.</span> →{" "}
                <span className="text-green-600">✅ I didn't play.</span>
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">4. Путаница с was/were:</p>
            <div className="ml-4">
              <div className="text-red-600">❌ Wrong: I were playing.</div>
              <div className="text-green-600">✅ Right: I was playing.</div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Русский «я играю» не различает привычку и текущее действие,
              английский требует <em>play</em> или <em>am playing</em>.
            </li>
            <li>
              Русский «я играл» не различает завершённое и длительное действие,
              английский требует <em>played</em> или <em>was playing</em>.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица различий">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <p className="font-semibold mb-1">I play</p>
            <p className="text-xs text-gray-600">Привычка</p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3">
            <p className="font-semibold mb-1">I am playing</p>
            <p className="text-xs text-gray-600">Сейчас</p>
          </div>
          <div className="bg-blue-50/50 rounded-lg p-3">
            <p className="font-semibold mb-1">I played</p>
            <p className="text-xs text-gray-600">Завершено</p>
          </div>
          <div className="bg-amber-50/50 rounded-lg p-3">
            <p className="font-semibold mb-1">I was playing</p>
            <p className="text-xs text-gray-600">Длилось</p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнения Part 1 ===== */
function Step8() {
  const exercise1: FillItem[] = [
    {
      left: "1. I ______ football every day.",
      right: "",
      answers: ["play"],
      explanation: "Ответ: play — Present Simple, привычка.",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. She ______ TV at the moment.",
      right: "",
      answers: ["is watching"],
      explanation: "Ответ: is watching — Present Continuous, сейчас.",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. They ______ to school yesterday.",
      right: "",
      answers: ["went"],
      explanation: "Ответ: went — Past Simple, завершено.",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
    {
      left: "4. I ______ a book at 5 p.m. yesterday.",
      right: "",
      answers: ["was reading"],
      explanation: "Ответ: was reading — Past Continuous, длилось.",
      ariaLabel: "Вопрос 4",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I",
      right: "(play) football every weekend.",
      answers: ["play"],
      explanation: "Ответ: play",
      ariaLabel: "Задание 1",
    },
    {
      left: "2. She",
      right: "(watch) TV now.",
      answers: ["is watching"],
      explanation: "Ответ: is watching",
      ariaLabel: "Задание 2",
    },
    {
      left: "3. They",
      right: "(go) to the park yesterday.",
      answers: ["went"],
      explanation: "Ответ: went",
      ariaLabel: "Задание 3",
    },
    {
      left: "4. We",
      right: "(read) a book at 6 p.m. yesterday.",
      answers: ["were reading"],
      explanation: "Ответ: were reading",
      ariaLabel: "Задание 4",
    },
    {
      left: "5.",
      right: "you (eat) now?",
      answers: ["Are", "are"],
      explanation: "Ответ: Are",
      ariaLabel: "Задание 5",
    },
    {
      left: "6.",
      right: "he (study) when I called?",
      answers: ["Was", "was"],
      explanation: "Ответ: Was",
      ariaLabel: "Задание 6",
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. I play football every day. →",
      right: "",
      answers: [
        "I don't play football every day",
        "I don't play football every day.",
      ],
      explanation: "Ответ: I don't play football every day.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. She is watching TV now. →",
      right: "",
      answers: [
        "She isn't watching TV now",
        "She isn't watching TV now.",
        "She is not watching TV now",
        "She is not watching TV now.",
      ],
      explanation: "Ответ: She isn't watching TV now.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
    {
      left: "3. They went to school. →",
      right: "",
      answers: ["They didn't go to school", "They didn't go to school."],
      explanation: "Ответ: They didn't go to school.",
      ariaLabel: "Отрицание 3",
      wide: true,
    },
    {
      left: "4. We were reading a book. →",
      right: "",
      answers: [
        "We weren't reading a book",
        "We weren't reading a book.",
        "We were not reading a book",
        "We were not reading a book.",
      ],
      explanation: "Ответ: We weren't reading a book.",
      ariaLabel: "Отрицание 4",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения (Часть 1)">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания всех четырёх времён!
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильную форму"
        instruction="Вставьте глагол в правильном времени согласно контексту (Present Simple, Present/Past Continuous, Past Simple)."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски"
        instruction="Используйте глаголы в скобках в правильной форме."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Сделайте отрицания"
        instruction="Переделайте предложения в отрицательные."
        items={exercise3}
      />
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнения Part 2 ===== */
function Step9() {
  const exercise4: FillItem[] = [
    {
      left: "1. I play football every day. →",
      right: "",
      answers: [
        "Do I play football every day",
        "Do I play football every day?",
      ],
      explanation: "Ответ: Do I play football every day?",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. She is watching TV now. →",
      right: "",
      answers: ["Is she watching TV now", "Is she watching TV now?"],
      explanation: "Ответ: Is she watching TV now?",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. They went to school. →",
      right: "",
      answers: ["Did they go to school", "Did they go to school?"],
      explanation: "Ответ: Did they go to school?",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
    {
      left: "4. We were reading a book. →",
      right: "",
      answers: ["Were we reading a book", "Were we reading a book?"],
      explanation: "Ответ: Were we reading a book?",
      ariaLabel: "Вопрос 4",
      wide: true,
    },
  ];

  const exercise5: FillItem[] = [
    {
      left: "1. Я играю в футбол каждый день. →",
      right: "",
      answers: ["I play football every day", "I play football every day."],
      explanation: "Ответ: I play football every day.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Она смотрит телевизор сейчас. →",
      right: "",
      answers: ["She is watching TV now", "She is watching TV now."],
      explanation: "Ответ: She is watching TV now.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Я пошёл в школу вчера. →",
      right: "",
      answers: ["I went to school yesterday", "I went to school yesterday."],
      explanation: "Ответ: I went to school yesterday.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
    {
      left: "4. Мы читали книгу в 6 вечера. →",
      right: "",
      answers: [
        "We were reading a book at 6 p.m",
        "We were reading a book at 6 p.m.",
      ],
      explanation: "Ответ: We were reading a book at 6 p.m.",
      ariaLabel: "Перевод 4",
      wide: true,
    },
  ];

  const exercise6: FillItem[] = [
    {
      left: "1. ❌ I am play football every day. →",
      right: "",
      answers: ["I play football every day", "I play football every day."],
      explanation: "Исправление: I play football every day.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ She watches TV at the moment. →",
      right: "",
      answers: [
        "She is watching TV at the moment",
        "She is watching TV at the moment.",
      ],
      explanation: "Исправление: She is watching TV at the moment.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ I go to school yesterday. →",
      right: "",
      answers: ["I went to school yesterday", "I went to school yesterday."],
      explanation: "Исправление: I went to school yesterday.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
    {
      left: "4. ❌ I was read a book at 5 p.m. →",
      right: "",
      answers: [
        "I was reading a book at 5 p.m",
        "I was reading a book at 5 p.m.",
      ],
      explanation: "Исправление: I was reading a book at 5 p.m.",
      ariaLabel: "Исправьте 4",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения (Часть 2)">
        <p className="text-zinc-700 leading-relaxed">
          Продолжаем практиковаться!
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 4: Задайте вопросы"
        instruction="Переделайте предложения в вопросительные."
        items={exercise4}
      />

      <CheckableExercise
        title="📝 Упражнение 5: Перевод"
        instruction="Переведите с русского на английский."
        items={exercise5}
      />

      <CheckableExercise
        title="📝 Упражнение 6: Исправьте ошибки"
        instruction="Найдите ошибки в предложениях и напишите правильный вариант целиком."
        items={exercise6}
      />

      <UiSection title="💡 Домашнее задание">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="font-semibold mb-2">Составьте предложения:</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>8 предложений: 2 для каждого времени</li>
            <li>
              Используйте утвердительные, отрицательные и вопросительные формы
            </li>
            <li>
              Пример: <em>I play football every day.</em> /{" "}
              <em>She is watching TV now.</em> /{" "}
              <em>They didn't go to school.</em> /{" "}
              <em>Were you reading a book?</em>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и True/False ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const trueFalseItems: FillItem[] = [
    {
      left: "1. I play football every day.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I play football every day with my friends.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. I am reading a book now.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — Now, I am reading a book.",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. I played football yesterday.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — Yesterday, I played football in the park.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. I was watching TV at 6 p.m.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation:
        "Ответ: False — At 5 p.m., I was watching TV (not at 6 p.m.).",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. My sister was studying at 6 p.m.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — She wasn't studying at 6 p.m.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Week">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            I play football every day with my friends. Now, I am reading a book.
            Yesterday, I played football in the park. At 5 p.m., I was watching
            TV. My sister went to school yesterday. She wasn't studying at 6
            p.m. Do I watch TV every day? Yes, I do. Was I playing football at 6
            p.m.? No, I wasn't.
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
              Я играю в футбол каждый день с друзьями. Сейчас я читаю книгу.
              Вчера я играл в футбол в парке. В 5 вечера я смотрел телевизор.
              Моя сестра пошла в школу вчера. Она не училась в 6 вечера. Смотрю
              ли я телевизор каждый день? Да, смотрю. Играл ли я в футбол в 6
              вечера? Нет, не играл.
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
            Подчеркните в тексте ключевые слова: <em>play</em>,{" "}
            <em>am reading</em>, <em>played</em>, <em>was watching</em>.
            Обратите внимание на временные маркеры!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Повторение времён"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            Различать Present Simple (привычки) и Present Continuous (действия
            сейчас)
          </li>
          <li>
            Различать Past Simple (завершённые действия) и Past Continuous
            (длительные действия)
          </li>
          <li>Правильно выбирать время для описания событий</li>
          <li>
            Использовать временные маркеры (every day, now, yesterday, at 5
            p.m.)
          </li>
          <li>Строить предложения со всеми четырьмя временами</li>
          <li>Избегать типичных ошибок русскоязычных</li>
        </ul>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Описывайте свой день, используя все четыре времени</li>
            <li>
              Present Simple для привычек: <em>I play every day</em>
            </li>
            <li>
              Present Continuous для текущих действий: <em>I am reading now</em>
            </li>
            <li>
              Past Simple для завершённых действий: <em>I played yesterday</em>
            </li>
            <li>
              Past Continuous для процессов: <em>I was reading at 5 p.m.</em>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}


