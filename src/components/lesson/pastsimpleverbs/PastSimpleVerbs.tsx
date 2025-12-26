"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PastSimpleVerbs({ step }: Props) {
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
      <UiSection title="Что такое Past Simple?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Past Simple описывает действия, завершённые в прошлом. Глаголы делятся
          на:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Правильные (Regular):</p>
            <p className="text-sm text-zinc-700">
              Добавляют <strong>-ed</strong> (play → played, work → worked).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Неправильные (Irregular):</p>
            <p className="text-sm text-zinc-700">
              Имеют уникальные формы (go → went, see → saw).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Использование">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">Действия:</p>
            <p className="text-sm text-zinc-700">
              I played football yesterday. (Я играл в футбол вчера.)
            </p>
            <p className="text-sm text-zinc-700">
              I went to school. (Я ходил в школу.)
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">События:</p>
            <p className="text-sm text-zinc-700">
              She watched TV last night. (Она смотрела телевизор вчера.)
            </p>
            <p className="text-sm text-zinc-700">
              She saw a film. (Она видела фильм.)
            </p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold mb-1">Ситуации с временем:</p>
            <p className="text-sm text-zinc-700">
              We visited London last year. (Мы посетили Лондон в прошлом году.)
            </p>
            <p className="text-sm text-zinc-700">
              We bought a book. (Мы купили книгу.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает рассказывать о прошлом: I played football. / I saw my
            friend.
          </li>
          <li>Учит задавать вопросы: Did you play? / Did you go?</li>
          <li>Дополняет Past Simple с was/were для полной картины.</li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Правильные глаголы:</strong> -ed (play → played).
            </li>
            <li>
              <strong>Неправильные глаголы:</strong> Заучивать формы (go →
              went).
            </li>
            <li>
              <strong>Отрицания:</strong> didn't + начальная форма (I didn't
              play, I didn't go).
            </li>
            <li>
              <strong>Вопросы:</strong> Did + подлежащее + начальная форма (Did
              you play?).
            </li>
            <li>
              <strong>Произношение:</strong>
              <ul className="ml-5 mt-1">
                <li>
                  -ed: [d] (played [pleɪd]), [t] (worked [wɜːrkt]), [ɪd]
                  (visited [ˈvɪzɪtɪd]).
                </li>
                <li>Неправильные: went [wɛnt], saw [sɔː].</li>
              </ul>
            </li>
            <li>
              <strong>Интонация:</strong> Утверждения — ровная, вопросы (Did
              you…?) — восходящая (↑).
            </li>
            <li>
              <strong>Временные слова:</strong> yesterday, last week, ago.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">
              Русский: Я играл в футбол вчера.
            </p>
            <p className="text-indigo-600 font-semibold">
              English: I played football yesterday.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Я ходил в школу.</p>
            <p className="text-green-600 font-semibold">
              English: I went to school.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 mb-2">
            Человек играет в футбол: <strong>I played football</strong>
          </p>
          <p className="text-sm text-zinc-700">
            Другой идёт в школу: <strong>I went to school</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Русский «я играл»/«я ходил» меняется по родам (играл/играла,
              ходил/ходила), английский played/went — универсален.
            </li>
            <li>
              Русский может опускать «вчера» (Я смотрел телевизор), английский
              часто требует (I watched TV yesterday).
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
      <UiSection title="Список слов (20)">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">
              Правильные глаголы (Regular):
            </h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Play</strong> [pleɪ] → <strong>Played</strong> [pleɪd] —
                Играть → Играл
              </p>
              <p>
                <strong>Watch</strong> [wɒtʃ] → <strong>Watched</strong> [wɒtʃt]
                — Смотреть → Смотрел
              </p>
              <p>
                <strong>Visit</strong> [ˈvɪzɪt] → <strong>Visited</strong>{" "}
                [ˈvɪzɪtɪd] — Посещать → Посетил
              </p>
              <p>
                <strong>Study</strong> [ˈstʌdi] → <strong>Studied</strong>{" "}
                [ˈstʌdid] — Учиться → Учился
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">
              Неправильные глаголы (Irregular):
            </h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Go</strong> [ɡoʊ] → <strong>Went</strong> [wɛnt] — Идти
                → Шёл
              </p>
              <p>
                <strong>See</strong> [siː] → <strong>Saw</strong> [sɔː] — Видеть
                → Видел
              </p>
              <p>
                <strong>Buy</strong> [baɪ] → <strong>Bought</strong> [bɔːt] —
                Покупать → Купил
              </p>
              <p>
                <strong>Eat</strong> [iːt] → <strong>Ate</strong> [eɪt] — Есть →
                Ел
              </p>
              <p>
                <strong>Drink</strong> [drɪŋk] → <strong>Drank</strong> [dræŋk]
                — Пить → Пил
              </p>
              <p>
                <strong>Come</strong> [kʌm] → <strong>Came</strong> [keɪm] —
                Приходить → Пришёл
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Слова времени и другие:</h4>
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
                <strong>Friend</strong> [frend] — Друг
              </p>
              <p>
                <strong>Park</strong> [pɑːrk] — Парк
              </p>
              <p>
                <strong>TV</strong> [ˌtiː ˈviː] — Телевизор
              </p>
              <p>
                <strong>School</strong> [skuːl] — Школа
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
            <p className="font-semibold">I played football yesterday.</p>
            <p className="text-sm text-gray-600">Я играл в футбол вчера.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">I went to school yesterday.</p>
            <p className="text-sm text-gray-600">Я ходил в школу вчера.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">She watched TV last night.</p>
            <p className="text-sm text-gray-600">
              Она смотрела телевизор вчера.
            </p>
          </div>

          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <p className="font-semibold">She saw a film last week.</p>
            <p className="text-sm text-gray-600">
              Она видела фильм на прошлой неделе.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Повторяйте с аудио: played [pleɪd], went [wɛnt].</li>
            <li>Составляйте предложения: I studied English. / I ate pizza.</li>
            <li>Карточки: начальная форма + Past Simple + перевод.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="mb-2">
            <strong>Play → Played:</strong> I played football.
          </div>
          <div>
            <strong>Go → Went:</strong> I went to school.
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные забывают -ed (I play yesterday) или путают формы (I
            goed вместо I went).
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
      right: "football yesterday. (играл - play)",
      answers: ["played"],
      explanation: "Ответ: played — Правильный глагол play + -ed.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. I",
      right: "to school yesterday. (ходил - go)",
      answers: ["went"],
      explanation: "Ответ: went — Неправильный глагол go → went.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. She",
      right: "TV last night. (смотрела - watch)",
      answers: ["watched"],
      explanation: "Ответ: watched — Правильный глагол watch + -ed.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Схема утвердительных предложений">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>
            Подлежащее + форма Past Simple (глагол + -ed / неправильная форма) +
            дополнение + (временное слово)
          </strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I played football yesterday.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я играл в футбол вчера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Тип:</strong> Правильный глагол (play + -ed).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I went to school yesterday.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я ходил в школу вчера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Тип:</strong> Неправильный глагол (go → went).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She watched TV last night.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она смотрела телевизор вчера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Тип:</strong> Правильный глагол (watch + -ed).
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She saw a film last week.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она видела фильм на прошлой неделе.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Тип:</strong> Неправильный глагол (see → saw).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Правильные глаголы:</strong> -ed (play → played).
            </li>
            <li>
              <strong>Неправильные глаголы:</strong> Вторая форма (go → went).
            </li>
            <li>Форма одинакова для всех лиц (I played, she went).</li>
            <li>
              <strong>Произношение:</strong> played [pleɪd], went [wɛnt].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Учёба:</strong> I studied English yesterday.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Еда:</strong> I ate pizza yesterday.
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> They visited a park.
            </p>
          </div>
          <div className="border-l-4 border-amber-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> They met friends.
            </p>
          </div>
        </div>
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
              <div className="text-red-600">❌ Wrong: I goed to school.</div>
              <div className="text-green-600">✅ Right: I went to school.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Утвердительные предложения"
        instruction="Заполните пропуски правильной формой Past Simple."
        items={affirmativeExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я играл»/«я ходил» меняется по родам, английский
            played/went — нет.
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
      right: "play football yesterday. (не играл)",
      answers: ["didn't", "didnt", "did not"],
      explanation: "Ответ: didn't — I didn't play football.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. I",
      right: "go to school yesterday. (не ходил)",
      answers: ["didn't", "didnt", "did not"],
      explanation: "Ответ: didn't — I didn't go to school.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. She",
      right: "watch TV. (не смотрела)",
      answers: ["didn't", "didnt", "did not"],
      explanation: "Ответ: didn't — She didn't watch TV.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Схема отрицательных предложений">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>
            Подлежащее + didn't + начальная форма глагола + дополнение
          </strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I didn't play football yesterday.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я не играл в футбол вчера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + didn't + play (начальная форма) +
              football + yesterday.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I didn't go to school yesterday.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я не ходил в школу вчера.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + didn't + go (начальная форма) +
              to school + yesterday.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She didn't watch TV.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она не смотрела телевизор.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + didn't + watch (начальная
              форма) + TV.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She didn't see a film.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она не видела фильм.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + didn't + see (начальная форма)
              + a film.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Didn't</strong> для всех лиц и глаголов.
            </li>
            <li>
              После didn't — <strong>начальная форма</strong> (play, go, не
              played, went).
            </li>
            <li>
              <strong>Произношение:</strong> Didn't [ˈdɪdnt].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Учёба:</strong> I didn't study English.
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Еда:</strong> I didn't eat pizza.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I didn't played.</div>
              <div className="text-green-600">✅ Right: I didn't play.</div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I didn't went.</div>
              <div className="text-green-600">✅ Right: I didn't go.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Отрицательные предложения"
        instruction="Заполните пропуски с didn't."
        items={negativeExercise}
      />

      <UiSection title="Визуал: Таблица">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="mb-2">
            <strong>Didn't play:</strong> I didn't play football.
          </div>
          <div>
            <strong>Didn't go:</strong> I didn't go to school.
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные добавляют -ed или неправильную форму после didn't (I
            didn't played, I didn't went).
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
      right: "you play football yesterday? (играл ты)",
      answers: ["Did", "did"],
      explanation: "Ответ: Did — Did you play football?",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2.",
      right: "you go to school yesterday? (ходил ты)",
      answers: ["Did", "did"],
      explanation: "Ответ: Did — Did you go to school?",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3.",
      right: "she watch TV? (смотрела она)",
      answers: ["Did", "did"],
      explanation: "Ответ: Did — Did she watch TV?",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Схема вопросительных предложений">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>
            Did + подлежащее + начальная форма глагола + дополнение?
          </strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Did you play football yesterday?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Ты играл в футбол вчера?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Тип:</strong> Правильный глагол (play).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Did you go to school yesterday?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Ты ходил в школу вчера?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Тип:</strong> Неправильный глагол (go).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Did she watch TV?</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она смотрела телевизор?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Тип:</strong> Правильный глагол (watch).
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Did she see a film?</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она видела фильм?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Тип:</strong> Неправильный глагол (see).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Did</strong> для всех лиц и глаголов.
            </li>
            <li>
              После did — <strong>начальная форма</strong> (play, go).
            </li>
            <li>
              <strong>Короткие ответы:</strong> Yes, I did. / No, I didn't.
            </li>
            <li>
              <strong>Произношение:</strong> Did [dɪd].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Учёба:</strong> Did you study English?
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Еда:</strong> Did you eat pizza?
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: Did you played?</div>
              <div className="text-green-600">✅ Right: Did you play?</div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: Did you went?</div>
              <div className="text-green-600">✅ Right: Did you go?</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вопросы"
        instruction="Заполните пропуски с Did."
        items={questionExercise}
      />

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 text-center">
            Вопросительный знак с <strong>Did you play?</strong>,{" "}
            <strong>Did you go?</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «Ты играл?» гибкий, английский Did you play? — строгий
            порядок.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Правила формирования Past Simple ===== */
function Step6() {
  return (
    <>
      <UiSection title="Правильные глаголы (Regular Verbs)">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Обычные:</strong> play → played
            </li>
            <li>
              <strong>На -e:</strong> только -d (like → liked)
            </li>
            <li>
              <strong>Короткая гласная + согласная:</strong> удваиваем (stop →
              stopped)
            </li>
            <li>
              <strong>На -y после согласной:</strong> y → i (study → studied)
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Произношение -ed">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>[d]:</strong> played [pleɪd]
            </li>
            <li>
              <strong>[t]:</strong> worked [wɜːrkt]
            </li>
            <li>
              <strong>[ɪd]:</strong> visited [ˈvɪzɪtɪd]
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Неправильные глаголы (Irregular Verbs)">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="mb-3">Заучивать формы:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>go → went</li>
            <li>see → saw</li>
            <li>buy → bought</li>
            <li>eat → ate</li>
            <li>drink → drank</li>
            <li>come → came</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">I played football.</p>
            <p className="text-sm text-gray-600">Правильный глагол.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">I went to school.</p>
            <p className="text-sm text-gray-600">Неправильный глагол.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I studyed.</div>
              <div className="text-green-600">✅ Right: studied.</div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I goed.</div>
              <div className="text-green-600">✅ Right: went.</div>
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
                  Past Simple
                </th>
                <th className="border border-gray-300 p-2 text-left">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">play</td>
                <td className="border border-gray-300 p-2">played</td>
                <td className="border border-gray-300 p-2">
                  I played football.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">go</td>
                <td className="border border-gray-300 p-2">went</td>
                <td className="border border-gray-300 p-2">
                  I went to school.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные ошибаются с -ed (studyed вместо studied) или формами
            (I goed).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Сравнение с Was/Were ===== */
function Step7() {
  return (
    <>
      <UiSection title="Was/Were vs Regular/Irregular Verbs">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Was/Were:</p>
            <p className="text-sm">
              Для состояний и местоположения (I was at school).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Regular/Irregular Verbs:</p>
            <p className="text-sm">
              Для действий (I played football, I went to school).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры для сравнения">
        <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
          <div>
            <p className="font-semibold mb-1">Was/Were:</p>
            <p className="text-sm text-indigo-600">
              I was at school yesterday.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Regular:</p>
            <p className="text-sm text-green-600">
              I played football yesterday.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Irregular:</p>
            <p className="text-sm text-blue-600">I went to school yesterday.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Was/Were:</strong> Без did (I wasn't, Was I?).
            </li>
            <li>
              <strong>Regular/Irregular:</strong> С did (Did you play?, Did you
              go?).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I was play.</div>
              <div className="text-green-600">✅ Right: I played.</div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I was go.</div>
              <div className="text-green-600">✅ Right: I went.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица сравнения">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Тип</th>
                <th className="border border-gray-300 p-2 text-left">Пример</th>
                <th className="border border-gray-300 p-2 text-left">Когда?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Was/Were</td>
                <td className="border border-gray-300 p-2">I was at school.</td>
                <td className="border border-gray-300 p-2">Состояние</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Regular</td>
                <td className="border border-gray-300 p-2">
                  I played football.
                </td>
                <td className="border border-gray-300 p-2">Действие (-ed)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Irregular</td>
                <td className="border border-gray-300 p-2">
                  I went to school.
                </td>
                <td className="border border-gray-300 p-2">Действие (форма)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Отличия от русского ===== */
function Step8() {
  return (
    <>
      <UiSection title="Отличия от русского языка">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              Русский «я играл»/«я ходил» меняется по родам, английский
              played/went — универсален.
            </li>
            <li>
              Русский может опускать «вчера», английский требует (I watched TV
              yesterday).
            </li>
            <li>Отрицания: русский «не играл», английский didn't play.</li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <div className="text-red-600">❌ I play yesterday.</div>
              <div className="text-green-600">✅ I played yesterday.</div>
            </li>
            <li>
              <div className="text-red-600">❌ I goed to school.</div>
              <div className="text-green-600">✅ I went to school.</div>
            </li>
            <li>
              <div className="text-red-600">❌ I didn't played.</div>
              <div className="text-green-600">✅ I didn't play.</div>
            </li>
            <li>
              <div className="text-red-600">❌ I didn't went.</div>
              <div className="text-green-600">✅ I didn't go.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица ошибок">
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
                <td className="border border-gray-300 p-2">Я играл</td>
                <td className="border border-gray-300 p-2 text-red-600">
                  ❌ I play yesterday
                </td>
                <td className="border border-gray-300 p-2 text-green-600">
                  ✅ I played yesterday
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Я ходил</td>
                <td className="border border-gray-300 p-2 text-red-600">
                  ❌ I goed
                </td>
                <td className="border border-gray-300 p-2 text-green-600">
                  ✅ I went
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнения ===== */
function Step9() {
  const exercise1: FillItem[] = [
    {
      left: "1. I ______ football yesterday. (play)",
      right: "",
      answers: ["played"],
      explanation: "Ответ: played — Правильный глагол play + -ed.",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. I ______ to school yesterday. (go)",
      right: "",
      answers: ["went"],
      explanation: "Ответ: went — Неправильный глагол go → went.",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. ______ she (watch) TV?",
      right: "",
      answers: ["Did watch", "Did she watch"],
      explanation: "Ответ: Did watch — Did + начальная форма.",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I played football. →",
      right: "",
      answers: ["I didn't play football", "I didn't play football."],
      explanation: "Ответ: I didn't play football.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. I went to school. →",
      right: "",
      answers: ["I didn't go to school", "I didn't go to school."],
      explanation: "Ответ: I didn't go to school.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. I played football. →",
      right: "",
      answers: ["Did I play football", "Did I play football?"],
      explanation: "Ответ: Did I play football?",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. I went to school. →",
      right: "",
      answers: ["Did I go to school", "Did I go to school?"],
      explanation: "Ответ: Did I go to school?",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. Я смотрел телевизор вчера. →",
      right: "",
      answers: ["I watched TV yesterday", "I watched TV yesterday."],
      explanation: "Ответ: I watched TV yesterday.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Я видел друга вчера. →",
      right: "",
      answers: ["I saw a friend yesterday", "I saw a friend yesterday."],
      explanation: "Ответ: I saw a friend yesterday.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
  ];

  const exercise5: FillItem[] = [
    {
      left: "1. ❌ I play football yesterday. →",
      right: "",
      answers: ["I played football yesterday", "I played football yesterday."],
      explanation: "Исправление: I played football yesterday.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ I didn't went to school. →",
      right: "",
      answers: ["I didn't go to school", "I didn't go to school."],
      explanation:
        "Исправление: I didn't go to school. — После didn't начальная форма.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по Past Simple">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Заполните пропуски"
        instruction="Используйте правильную форму Past Simple."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Сделайте отрицания"
        instruction="Переделайте предложения в отрицательные."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Задайте вопросы"
        instruction="Переделайте предложения в вопросительные."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Переведите"
        instruction="Переведите с русского на английский."
        items={exercise4}
      />

      <CheckableExercise
        title="📝 Упражнение 5: Исправьте ошибки"
        instruction="Найдите ошибки в предложениях и напишите правильный вариант целиком."
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
      left: "1. I played football last weekend.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I played football with my friends.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. I watched TV last weekend.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — I didn't watch TV.",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. I went to the park.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I went to the park.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. My sister bought a book.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — She didn't buy a book.",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. My friends came to my house.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — Yes, they did.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Last Weekend">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            Last weekend was fun. I played football with my friends and went to
            the park. I didn't watch TV or see a film. My sister studied English
            and ate pizza. She didn't visit the park or buy a book. Did I talk
            to my mother? Yes, I did. Did my friends come to my house? Yes, they
            did.
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
              Прошлые выходные были весёлыми. Я играл в футбол с друзьями и
              ходил в парк. Я не смотрел телевизор и не видел фильм. Моя сестра
              учила английский и ела пиццу. Она не посещала парк и не купила
              книгу. Разговаривал ли я с мамой? Да. Приходили ли друзья ко мне?
              Да.
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
            Подчеркните глаголы в Past Simple (played, went, didn't watch) в
            тексте для поиска ответов. Обратите внимание на детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="📚 Домашнее задание">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>Выучите 20 слов (страница 2).</li>
            <li>Повторяйте вслух (played [pleɪd], went [wɛnt]).</li>
            <li>Карточки: начальная форма + Past Simple + перевод.</li>
            <li>
              Составьте 10 предложений:
              <ul className="ml-5 mt-1 list-disc">
                <li>
                  4 утвердительных: I played football. / I went to school.
                </li>
                <li>
                  3 отрицательных: I didn't watch TV. / I didn't see a film.
                </li>
                <li>3 вопроса: Did you study? / Did you go?</li>
              </ul>
            </li>
            <li>
              Диалог (5-6 реплик, 5 глаголов):
              <div className="bg-white rounded p-3 mt-2 text-sm">
                <p>A: Did you play football yesterday?</p>
                <p>B: Yes, I played football.</p>
              </div>
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Past Simple с правильными и неправильными
          глаголами"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Использовать правильные глаголы с -ed</li>
          <li>Использовать неправильные глаголы (went, saw, bought)</li>
          <li>Строить утверждения, отрицания (didn't) и вопросы (Did)</li>
          <li>Отличать правильные глаголы от неправильных</li>
          <li>Избегать типичных ошибок русскоязычных</li>
        </ul>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Описывайте, что вы делали вчера, используя Past Simple</li>
            <li>Помните: yesterday, last week, ago — маркеры прошлого</li>
            <li>После didn't/Did всегда начальная форма глагола</li>
            <li>Учите неправильные глаголы: go-went, see-saw, buy-bought</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




