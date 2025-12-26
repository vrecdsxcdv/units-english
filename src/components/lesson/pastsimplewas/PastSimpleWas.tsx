"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PastSimpleWas({ step }: Props) {
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
      <UiSection title="Что такое Was/Were в Past Simple?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Глагол <strong>to be</strong> в прошедшем времени имеет формы{" "}
          <strong>was</strong> и <strong>were</strong>. Они используются для
          описания:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Состояний в прошлом:</p>
            <p className="text-sm text-zinc-700 italic">
              I was happy. (Я был счастлив.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Местоположения:</p>
            <p className="text-sm text-zinc-700 italic">
              We were at school. (Мы были в школе.)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Характеристик/возраста:</p>
            <p className="text-sm text-zinc-700 italic">
              She was ten. (Ей было десять.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает говорить о прошлом: I was tired yesterday. (Я был уставшим
            вчера.)
          </li>
          <li>Учит задавать вопросы: Were you at home? (Ты был дома?)</li>
          <li>
            Формирует базу для Past Simple, так как was/were проще, чем другие
            глаголы (нет did).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Was</strong> — для I, he, she, it.
            </li>
            <li>
              <strong>Were</strong> — для you, we, they.
            </li>
            <li>
              <strong>Произношение:</strong> Was [wɒz] (воз), Were [wɜːr] (вёр).
            </li>
            <li>
              <strong>Интонация:</strong> Утверждения — ровная, вопросы (Was
              I…?) — восходящая (↑).
            </li>
            <li>
              <strong>Временные слова:</strong> Yesterday, last week, ago
              указывают на прошлое.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Я был в школе вчера.</p>
            <p className="text-indigo-600 font-semibold">
              English: I was at school yesterday.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Мы были счастливы.</p>
            <p className="text-green-600 font-semibold">
              English: We were happy.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📸 Визуализация прошедшего времени">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🏫
              </div>
              <p className="text-sm text-zinc-600 mb-2">Единственное число (was)</p>
              <p className="text-xl font-bold text-blue-900">
                I <span className="text-blue-600">was</span> at school
              </p>
              <p className="text-sm text-zinc-600 mt-2 italic">Я был в школе (вчера)</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center text-4xl mb-3">
                😊
              </div>
              <p className="text-sm text-zinc-600 mb-2">Множественное число (were)</p>
              <p className="text-xl font-bold text-green-900">
                We <span className="text-green-600">were</span> happy
              </p>
              <p className="text-sm text-zinc-600 mt-2 italic">Мы были счастливы</p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
          <p className="text-center font-semibold text-amber-900">
            💡 Правило: I/He/She/It → <span className="text-blue-600">was</span> | You/We/They → <span className="text-green-600">were</span>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> В русском «был» меняется по
              родам (был/была/было), в английском was/were — по числу и лицу (I
              was, they were).
            </li>
            <li>
              <strong>Глагол обязателен:</strong> Русский «Вчера в школе»
              требует в английском I was at school.
            </li>
            <li>
              <strong>Артикли:</strong> Английский часто использует the/a (I was
              at the party), русский их опускает.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Was/were — это to be в прошлом.
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
          Для описания прошлого с was/were важно выучить прилагательные, места и
          слова времени. Вот список из <strong>20 ключевых слов/фраз</strong> с
          переводом и произношением для A1-A2.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Прилагательные (состояния):</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Happy</strong> [ˈhæpi] — Счастливый
              </p>
              <p>
                <strong>Tired</strong> [ˈtaɪərd] — Усталый
              </p>
              <p>
                <strong>Sad</strong> [sæd] — Грустный
              </p>
              <p>
                <strong>Hungry</strong> [ˈhʌŋɡri] — Голодный
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Места:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>School</strong> [skuːl] — Школа
              </p>
              <p>
                <strong>Home</strong> [hoʊm] — Дом
              </p>
              <p>
                <strong>Park</strong> [pɑːrk] — Парк
              </p>
              <p>
                <strong>Party</strong> [ˈpɑːrti] — Вечеринка
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Слова времени:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Yesterday</strong> [ˈjɛstərdeɪ] — Вчера
              </p>
              <p>
                <strong>Last</strong> [læst] — Прошлый
              </p>
              <p>
                <strong>Week</strong> [wiːk] — Неделя
              </p>
              <p>
                <strong>Month</strong> [mʌnθ] — Месяц
              </p>
              <p>
                <strong>Ago</strong> [əˈɡoʊ] — Назад
              </p>
              <p>
                <strong>Day</strong> [deɪ] — День
              </p>
              <p>
                <strong>Time</strong> [taɪm] — Время
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Глаголы и другие слова:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Was</strong> [wɒz] — Был (I, he, she, it)
              </p>
              <p>
                <strong>Were</strong> [wɜːr] — Были (you, we, they)
              </p>
              <p>
                <strong>At</strong> [æt] — В (место)
              </p>
              <p>
                <strong>In</strong> [ɪn] — В (место/время)
              </p>
              <p>
                <strong>Where</strong> [wɛər] — Где
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">I was happy yesterday.</p>
            <p className="text-sm text-gray-600">Я был счастлив вчера.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">We were at the party.</p>
            <p className="text-sm text-gray-600">Мы были на вечеринке.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">Where were you?</p>
            <p className="text-sm text-gray-600">Где ты был?</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Повторяйте слова с аудио (was [wɒz], yesterday [ˈjɛstərdeɪ]).
            </li>
            <li>Составляйте предложения: I was at school yesterday.</li>
            <li>Используйте карточки: слово + перевод.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто забывают was/were (I at school yesterday вместо
            I was at school), так как в русском глагол иногда опускается.
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
      right: "happy yesterday. (был)",
      answers: ["was"],
      explanation: "Ответ: was — Для I используется was.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. We",
      right: "at school. (были)",
      answers: ["were"],
      explanation: "Ответ: were — Для we используется were.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. She",
      right: "ten last year. (было)",
      answers: ["was"],
      explanation: "Ответ: was — Для she используется was.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как использовать Was/Were?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема:{" "}
          <strong>Подлежащее + was/were + дополнение (состояние/место)</strong>.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">I was happy yesterday.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я был счастлив вчера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + was + happy + yesterday.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">We were at school.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Мы были в школе.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> We + were + at school.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She was ten last year.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Ей было десять в прошлом году.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + was + ten + last year.
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
              <strong>Дополнение:</strong> Прилагательное (happy, tired), место
              (at school), возраст (ten).
            </li>
            <li>
              <strong>Временные слова:</strong> Yesterday, last week, two days
              ago в конце предложения.
            </li>
            <li>
              <strong>Произношение:</strong> Was [wɒz] — короткое, were [wɜːr] —
              длинный звук [ɜː].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>После работы:</strong> I was tired last night. (Я был
              уставшим вчера вечером.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Отдых:</strong> They were at the park. (Они были в парке.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Возраст:</strong> He was ten in 2020. (Ему было десять в
              2020 году.)
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
                <div className="text-red-600">❌ Wrong: I were happy.</div>
                <div className="text-green-600">✅ Right: I was happy.</div>
              </div>
            </li>
            <li>
              НЕ опускайте глагол:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I at school.</div>
                <div className="text-green-600">✅ Right: I was at school.</div>
              </div>
            </li>
            <li>
              НЕ используйте am/is/are:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I am happy yesterday.
                </div>
                <div className="text-green-600">
                  ✅ Right: I was happy yesterday.
                </div>
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
            Русский «я был счастлив» меняется по родам (был/была), английский
            was — только для I, he, she, it.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Was/were = подлежащее + состояние/место +
            время.
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
      right: "happy yesterday. (не был)",
      answers: ["wasn't", "wasnt", "was not"],
      explanation: "Ответ: wasn't — I wasn't happy.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. They",
      right: "at school. (не были)",
      answers: ["weren't", "werent", "were not"],
      explanation: "Ответ: weren't — They weren't at school.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. She",
      right: "tired. (не была)",
      answers: ["wasn't", "wasnt", "was not"],
      explanation: "Ответ: wasn't — She wasn't tired.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как строить отрицания?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Подлежащее + wasn't/weren't + дополнение</strong>.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          • Wasn't = was not
          <br />• Weren't = were not
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I wasn't happy yesterday.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я не был счастлив вчера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + wasn't + happy + yesterday.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              They weren't at school.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они не были в школе.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> They + weren't + at school.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She wasn't tired.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она не была уставшей.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + wasn't + tired.
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
              <strong>Произношение:</strong> Wasn't [ˈwɒznt] (вознт), weren't
              [wɜːrnt] (вёрнт).
            </li>
            <li>
              <strong>Временные слова:</strong> Yesterday, last night для
              контекста.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> I wasn't at home last night. (Я не был дома
              вчера вечером.)
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Еда:</strong> We weren't hungry. (Мы не были голодны.)
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> He wasn't at the party. (Он не был на
              вечеринке.)
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
                <div className="text-red-600">❌ Wrong: I weren't happy.</div>
                <div className="text-green-600">✅ Right: I wasn't happy.</div>
              </div>
            </li>
            <li>
              НЕ используйте don't:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I don't was happy.</div>
                <div className="text-green-600">✅ Right: I wasn't happy.</div>
              </div>
            </li>
            <li>
              НЕ путайте с Present Simple:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I'm not happy yesterday.
                </div>
                <div className="text-green-600">
                  ✅ Right: I wasn't happy yesterday.
                </div>
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

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «не был» меняется по родам (не был/не была), английский
            wasn't — нет. Русскоязычные могут путать wasn't/weren't.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Отрицания = Подлежащее + wasn't/weren't +
            дополнение.
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
      right: "I happy yesterday? (был я)",
      answers: ["Was", "was"],
      explanation: "Ответ: Was — Для I используем Was.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2.",
      right: "you at school? (ты был)",
      answers: ["Were", "were"],
      explanation: "Ответ: Were — Для you используем Were.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3.",
      right: "she ten last year? (ей было)",
      answers: ["Was", "was"],
      explanation: "Ответ: Was — Для she используем Was.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как задавать вопросы?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Was/Were + подлежащее + дополнение?</strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Was I happy yesterday?</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я был счастлив вчера?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Was + I + happy + yesterday.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Were you at school?</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Ты был в школе?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Were + you + at school.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Was she ten last year?</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Ей было десять в прошлом году?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Was + she + ten + last year.
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
              Yes, you were. / No, you weren't.
            </li>
            <li>
              <strong>Произношение:</strong> Вопросы с восходящей интонацией
              (↑): Was I…? [wɒz aɪ].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> Were you at the park yesterday? (Ты был в
              парке вчера?)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>После работы:</strong> Was he tired last night? (Он был
              уставшим вчера вечером?)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Погода:</strong> Was it cold last week? (Было холодно на
              прошлой неделе?)
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
                <div className="text-red-600">❌ Wrong: Were I happy?</div>
                <div className="text-green-600">✅ Right: Was I happy?</div>
              </div>
            </li>
            <li>
              НЕ используйте do:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: Do you were at school?
                </div>
                <div className="text-green-600">
                  ✅ Right: Were you at school?
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

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «Ты был дома?» гибкий, английский Were you at home? —
            строгий порядок (Was/Were в начале).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Вопросы = Was/Were + подлежащее +
            дополнение?
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
      <UiSection title="Как Was/Were связаны с Am/Is/Are?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm">I am happy. (Я счастлив сейчас.)</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Past Simple:</p>
            <p className="text-sm">
              I was happy yesterday. (Я был счастлив вчера.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры для сравнения">
        <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
          <div>
            <p className="font-semibold mb-1">Пример 1:</p>
            <p className="text-sm text-indigo-600">
              Present: I am at school. (Я в школе.)
            </p>
            <p className="text-sm text-green-600">
              Past: I was at school yesterday. (Я был в школе вчера.)
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Пример 2:</p>
            <p className="text-sm text-indigo-600">
              Present: They are tired. (Они устали.)
            </p>
            <p className="text-sm text-green-600">
              Past: They were tired last night. (Они были устали вчера вечером.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Am/Is → Was:</strong> Для I, he, she, it в прошлом — was.
            </li>
            <li>
              <strong>Are → Were:</strong> Для you, we, they в прошлом — were.
            </li>
            <li>
              <strong>Временные слова:</strong> В Past Simple добавляют
              yesterday, last week, в Present Simple — now, today.
            </li>
            <li>
              <strong>Контекст:</strong> Was/were для завершённых событий,
              am/is/are для текущих.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ путать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">
                ❌ Wrong: I am happy yesterday.
              </div>
              <div className="text-green-600">
                ✅ Right: I was happy yesterday.
              </div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: They were happy now.</div>
              <div className="text-green-600">
                ✅ Right: They are happy now.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Временная линия">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 text-center">
            Past (I was happy yesterday) ← <strong>Present</strong> (I am happy
            now)
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные путают времена (I am yesterday), так как русский
            использует одно прошедшее время (был) без таких различий.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Was/were — прошлое, am/is/are — настоящее.
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
              <strong>Формы глагола:</strong> Русский «был» меняется по родам
              (был/была/было), английский was/were — по числу и лицу (I was,
              they were).
            </li>
            <li>
              <strong>Обязательный глагол:</strong> Русский «Вчера в школе»
              опускает глагол, английский требует I was at school.
            </li>
            <li>
              <strong>Временные слова:</strong> Русский может опускать «вчера»
              (Я счастлив), английский часто требует (I was happy yesterday).
            </li>
            <li>
              <strong>Вопросы:</strong> Русский «Ты был дома?» гибкий,
              английский Were you at home? — строгий порядок.
            </li>
            <li>
              <strong>Произношение:</strong> Русскоязычные путают was [wɒz] и
              were [wɜːr], делая их похожими.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Путаница was/were:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I were happy.</div>
                <div className="text-green-600">✅ I was happy.</div>
              </div>
            </li>
            <li>
              <strong>Пропуск глагола:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I at school yesterday.</div>
                <div className="text-green-600">
                  ✅ I was at school yesterday.
                </div>
              </div>
            </li>
            <li>
              <strong>Использование Present Simple:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I am happy yesterday.</div>
                <div className="text-green-600">✅ I was happy yesterday.</div>
              </div>
            </li>
            <li>
              <strong>Неправильные отрицания:</strong>
              <div className="ml-4 mt-1">
                <div className="text-red-600">❌ I not was happy.</div>
                <div className="text-green-600">✅ I wasn't happy.</div>
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
                <td className="border border-gray-300 p-2">Я был счастлив</td>
                <td className="border border-gray-300 p-2 text-red-600">
                  ❌ I were happy
                </td>
                <td className="border border-gray-300 p-2 text-green-600">
                  ✅ I was happy
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Вчера в школе</td>
                <td className="border border-gray-300 p-2 text-red-600">
                  ❌ I at school
                </td>
                <td className="border border-gray-300 p-2 text-green-600">
                  ✅ I was at school
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
              Прочитайте каждое слово вслух 3 раза (was [wɒz], happy [ˈhæpi]).
              Используйте аудио на сайте.
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
              Составьте <strong>10 предложений</strong> с was/were:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>4 утвердительных: I was happy yesterday.</li>
              <li>3 отрицательных: I wasn't at school.</li>
              <li>3 вопроса: Were you tired?</li>
            </ul>
            <p className="text-sm mt-2 italic">
              Пример: They were at the park last week.
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
              <p>A: Were you at school yesterday?</p>
              <p>B: No, I wasn't. I was at home.</p>
              <p>A: Was it fun?</p>
              <p>B: Yes, I was happy.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Практикуйте в реальных ситуациях (опишите, где вы были вчера).
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
      left: "1. I ______ happy yesterday.",
      right: "",
      answers: ["was"],
      explanation: "Ответ: was — Для I.",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. They ______ at the party last night.",
      right: "",
      answers: ["were"],
      explanation: "Ответ: were — Для they.",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. ______ you at school?",
      right: "",
      answers: ["Were", "were"],
      explanation: "Ответ: Were — Вопрос для you.",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I was happy. →",
      right: "",
      answers: ["I wasn't happy", "I wasn't happy."],
      explanation: "Ответ: I wasn't happy.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. They were at school. →",
      right: "",
      answers: ["They weren't at school", "They weren't at school."],
      explanation: "Ответ: They weren't at school.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Я был в школе вчера. →",
      right: "",
      answers: ["I was at school yesterday", "I was at school yesterday."],
      explanation: "Ответ: I was at school yesterday.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Они не были счастливы. →",
      right: "",
      answers: ["They weren't happy", "They weren't happy."],
      explanation: "Ответ: They weren't happy.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Ты был дома? →",
      right: "",
      answers: ["Were you at home", "Were you at home?"],
      explanation: "Ответ: Were you at home?",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. ❌ I were happy yesterday. →",
      right: "",
      answers: ["I was happy yesterday", "I was happy yesterday."],
      explanation:
        "Исправление: I was happy yesterday. — Для I используется was.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ They was at school. →",
      right: "",
      answers: ["They were at school", "They were at school."],
      explanation:
        "Исправление: They were at school. — Для they используется were.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ I not was at home. →",
      right: "",
      answers: ["I wasn't at home", "I wasn't at home."],
      explanation: "Исправление: I wasn't at home. — Отрицание с wasn't.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по Was/Were">
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
      left: "1. I was at school yesterday.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I was at school in the morning.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. I was tired.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — I wasn't tired.",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. My friends were at the park.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — My friends were at the park.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. I was at the party.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — No, I wasn't (не на вечеринке).",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. My friends were at home.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — No, they weren't (не дома).",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Day Yesterday">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            Yesterday was fun. I was at school in the morning. I wasn't tired.
            My friends were at the park. They were happy. Was I at the party?
            No, I wasn't. Were my friends at home? No, they weren't.
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
              Вчера было весело. Я был в школе утром. Я не был уставшим. Мои
              друзья были в парке. Они были счастливы. Был ли я на вечеринке?
              Нет, не был. Были ли мои друзья дома? Нет, не были.
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
            Подчеркните was/were в тексте для поиска ответов. Обратите внимание
            на детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Past Simple с Was/Were"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Говорить о прошлом, используя was и were</li>
          <li>Описывать состояния, местоположение и возраст в прошлом</li>
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
              <strong>Was:</strong> Для I, he, she, it (I was happy).
            </li>
            <li>
              <strong>Were:</strong> Для you, we, they (They were at school).
            </li>
            <li>
              <strong>Отрицания:</strong> Wasn't/weren't (I wasn't tired).
            </li>
            <li>
              <strong>Вопросы:</strong> Was/Were в начале (Were you at home?).
            </li>
            <li>
              <strong>Отличия от русского:</strong> Was/were по числу, не по
              роду; глагол обязателен.
            </li>
            <li>
              <strong>Произношение:</strong> Was [wɒz], Were [wɜːr].
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Описывайте, где вы были вчера, используя was/were</li>
            <li>Помните: yesterday, last week, ago — маркеры прошлого</li>
            <li>Не путайте was (I, he, she, it) и were (you, we, they)</li>
            <li>Всегда используйте глагол: I was at school, не I at school</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




