"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PastVsPast({ step }: Props) {
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
      <UiSection title="Что такое Past Continuous и Past Simple?">
        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Past Simple:</p>
            <p className="text-sm text-zinc-700 mb-2">
              Описывает завершённые действия в прошлом.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                Правильные глаголы: play → played (I played football yesterday.
                — Я играл в футбол вчера.)
              </li>
              <li>
                Неправильные глаголы: go → went (I went to school. — Я ходил в
                школу.)
              </li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Past Continuous:</p>
            <p className="text-sm text-zinc-700 mb-2">
              Описывает действия, которые длились в определённый момент в
              прошлом.
            </p>
            <p className="text-sm">
              Формула: was/were + глагол + -ing (I was reading a book. — Я читал
              книгу.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает различать завершённые действия (I played football) и
            продолжительные (I was playing football).
          </li>
          <li>Учит правильно выбирать время для описания событий.</li>
          <li>Формирует базу для сложных предложений с when/while.</li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Past Simple:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                Завершённые действия: I watched TV yesterday. (Я смотрел
                телевизор вчера.)
              </li>
              <li>
                Окончания: -ed для правильных (played), уникальные формы для
                неправильных (went).
              </li>
              <li>Отрицания: didn't + начальная форма (I didn't play).</li>
              <li>
                Вопросы: Did + подлежащее + начальная форма (Did you play?).
              </li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Past Continuous:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>
                Продолжительные действия: I was watching TV at 5 p.m. (Я смотрел
                телевизор в 5 вечера.)
              </li>
              <li>Формула: was/were + глагол + -ing.</li>
              <li>Отрицания: wasn't/weren't + -ing (I wasn't watching).</li>
              <li>
                Вопросы: Was/Were + подлежащее + -ing (Were you watching?).
              </li>
            </ul>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Произношение:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Past Simple: played [pleɪd], went [wɛnt].</li>
              <li>Past Continuous: was [wɒz], were [wɜːr], -ing [ɪŋ].</li>
            </ul>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Временные слова:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Past Simple: yesterday, last week, ago.</li>
              <li>Past Continuous: at 5 p.m., when, while.</li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Я читал книгу вчера.</p>
            <p className="text-indigo-600 font-semibold">
              Past Simple: I read a book yesterday. (Завершённое действие.)
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">
              Русский: Я читал книгу в 5 вечера.
            </p>
            <p className="text-green-600 font-semibold">
              Past Continuous: I was reading a book at 5 p.m. (Длилось.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 mb-2">
            Человек закончил читать книгу: <strong>I read a book</strong>
          </p>
          <p className="text-sm text-zinc-700">
            Человек читает: <strong>I was reading</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              В русском нет разделения на завершённые и продолжительные действия
              (я читал подходит для обоих случаев).
            </li>
            <li>
              Английский требует выбора: read (Past Simple) или was reading
              (Past Continuous).
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
            <h4 className="font-semibold mb-2">Глаголы (обе формы):</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Play</strong> [pleɪ] → <strong>Played</strong> [pleɪd] —
                Играть → Играл
              </p>
              <p>
                <strong>Go</strong> [ɡoʊ] → <strong>Went</strong> [wɛnt] — Идти
                → Шёл
              </p>
              <p>
                <strong>Watch</strong> [wɒtʃ] → <strong>Watched</strong> [wɒtʃt]
                — Смотреть → Смотрел
              </p>
              <p>
                <strong>See</strong> [siː] → <strong>Saw</strong> [sɔː] — Видеть
                → Видел
              </p>
              <p>
                <strong>Read</strong> [riːd] → <strong>Read</strong> [rɛd] /{" "}
                <strong>Reading</strong> [ˈriːdɪŋ] — Читать → Читал / Читая
              </p>
              <p>
                <strong>Run</strong> [rʌn] → <strong>Ran</strong> [ræn] /{" "}
                <strong>Running</strong> [ˈrʌnɪŋ] — Бежать → Бежал / Бегущий
              </p>
              <p>
                <strong>Eat</strong> [iːt] → <strong>Ate</strong> [eɪt] /{" "}
                <strong>Eating</strong> [ˈiːtɪŋ] — Есть → Ел / Едящий
              </p>
              <p>
                <strong>Talk</strong> [tɔːk] → <strong>Talked</strong> [tɔːkt] /{" "}
                <strong>Talking</strong> [ˈtɔːkɪŋ] — Разговаривать →
                Разговаривал / Разговаривая
              </p>
              <p>
                <strong>Study</strong> [ˈstʌdi] → <strong>Studied</strong>{" "}
                [ˈstʌdid] / <strong>Studying</strong> [ˈstʌdiɪŋ] — Учиться →
                Учился / Учась
              </p>
              <p>
                <strong>Write</strong> [raɪt] → <strong>Wrote</strong> [roʊt] /{" "}
                <strong>Writing</strong> [ˈraɪtɪŋ] — Писать → Писал / Пишущий
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
                <strong>Last</strong> [læst] — Прошлый
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
                <strong>Book</strong> [bʊk] — Книга
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
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">
              Past Simple: I played football yesterday.
            </p>
            <p className="text-sm text-gray-600">Я играл в футбол вчера.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">
              Past Continuous: I was playing football at 5 p.m.
            </p>
            <p className="text-sm text-gray-600">
              Я играл в футбол в 5 вечера.
            </p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">Past Simple: I went to school.</p>
            <p className="text-sm text-gray-600">Я ходил в школу.</p>
          </div>

          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <p className="font-semibold">
              Past Continuous: I was going to school when it rained.
            </p>
            <p className="text-sm text-gray-600">
              Я шёл в школу, когда пошёл дождь.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Повторяйте формы с аудио (played [pleɪd], was playing [wɒz
              ˈpleɪɪŋ]).
            </li>
            <li>
              Составляйте предложения: I read a book. / I was reading a book.
            </li>
            <li>
              Карточки: начальная форма + Past Simple/Past Continuous + перевод.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="mb-2">
            <strong>Play → Played / Was playing:</strong> I played football. / I
            was playing football.
          </div>
          <div>
            <strong>Go → Went / Was going:</strong> I went to school. / I was
            going to school.
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные путают времена (I read yesterday вместо I was reading
            at 5 p.m.), так как в русском нет аналога Past Continuous.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Когда использовать Past Simple? ===== */
function Step3() {
  const pastSimpleExercise: FillItem[] = [
    {
      left: "1. I",
      right: "TV yesterday. (смотрел - watch)",
      answers: ["watched"],
      explanation: "Ответ: watched — Завершённое действие в прошлом.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "to school. (ходила - go)",
      answers: ["went"],
      explanation: "Ответ: went — Завершённое действие, неправильный глагол.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. We",
      right: "a car last month. (купили - buy)",
      answers: ["bought"],
      explanation: "Ответ: bought — Факт в прошлом.",
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
              I watched TV yesterday. (Я смотрел телевизор вчера.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Последовательные события:</p>
            <p className="text-sm">
              I went to school, ate lunch, and played football. (Я пошёл в
              школу, поел и играл в футбол.)
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
              <strong>Утверждения:</strong> Подлежащее + глагол (Past Simple) (I
              played).
            </li>
            <li>
              <strong>Отрицания:</strong> Подлежащее + didn't + начальная форма
              (I didn't play).
            </li>
            <li>
              <strong>Вопросы:</strong> Did + подлежащее + начальная форма (Did
              you play?).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Завершённое действие:</strong> I read a book yesterday.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Событие:</strong> She saw a film last night.
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Факт:</strong> We bought a car last month.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <p className="text-sm text-zinc-700">
          Played [pleɪd], went [wɛnt], saw [sɔː].
        </p>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для продолжающихся действий:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I read a book at 5 p.m.
                </div>
                <div className="text-green-600">
                  ✅ Right: I was reading a book at 5 p.m.
                </div>
              </div>
            </li>
            <li>
              НЕ забывайте формы:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I goed.</div>
                <div className="text-green-600">✅ Right: I went.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Past Simple"
        instruction="Заполните пропуски правильной формой Past Simple."
        items={pastSimpleExercise}
      />

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 mb-2">
            Человек закончил читать: <strong>I read a book</strong>
          </p>
          <p className="text-sm text-zinc-700">
            Другой завершил прогулку: <strong>I went to school</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я читал» может означать завершённое действие, английский
            read — только завершённое, для длительного — was reading.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Когда использовать Past Continuous? ===== */
function Step4() {
  const pastContinuousExercise: FillItem[] = [
    {
      left: "1. I",
      right: "reading a book at 5 p.m. (читал)",
      answers: ["was"],
      explanation: "Ответ: was — Действие длилось в определённый момент.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "watching TV when I came. (смотрела)",
      answers: ["was"],
      explanation: "Ответ: was — Фон для другого действия.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. We",
      right: "talking in the park. (разговаривали)",
      answers: ["were"],
      explanation: "Ответ: were — Описание атмосферы.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать Past Continuous?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              1. Действия, длившиеся в определённый момент:
            </p>
            <p className="text-sm">
              I was reading a book at 5 p.m. (Я читал книгу в 5 вечера.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Фон для другого действия:</p>
            <p className="text-sm">
              I was reading when you called. (Я читал, когда ты позвонил.)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Описание атмосферы:</p>
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
              -ing (I was reading).
            </li>
            <li>
              <strong>Отрицания:</strong> Подлежащее + wasn't/weren't + глагол +
              -ing (I wasn't reading).
            </li>
            <li>
              <strong>Вопросы:</strong> Was/Were + подлежащее + глагол + -ing
              (Were you reading?).
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
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Атмосфера:</strong> We were talking in the park.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <p className="text-sm text-zinc-700">
          Was [wɒz], were [wɜːr], -ing [ɪŋ].
        </p>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для завершённых действий:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I was reading a book yesterday.
                </div>
                <div className="text-green-600">
                  ✅ Right: I read a book yesterday.
                </div>
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
        title="📝 Упражнение: Past Continuous"
        instruction="Заполните пропуски с was или were."
        items={pastContinuousExercise}
      />

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 mb-2">
            Человек читает: <strong>I was reading</strong>
          </p>
          <p className="text-sm text-zinc-700">
            Другой говорит: <strong>They were talking</strong>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто используют Past Simple вместо Past Continuous (I
            read at 5 p.m. вместо I was reading at 5 p.m.).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Основные различия ===== */
function Step5() {
  return (
    <>
      <UiSection title="Различия">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Завершённость:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Past Simple: Завершённое действие (I played football).</li>
              <li>
                Past Continuous: Длительное действие (I was playing football).
              </li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Временные слова:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Past Simple: yesterday, last week, ago.</li>
              <li>Past Continuous: at 5 p.m., when, while.</li>
            </ul>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Контекст:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Past Simple: Факты, события (I went to school).</li>
              <li>Past Continuous: Фон, процесс (I was going to school).</li>
            </ul>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">4. Структура:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Past Simple: played, went, didn't play, Did you play?</li>
              <li>
                Past Continuous: was playing, wasn't playing, Was you playing?
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">
              Past Simple: I read a book yesterday.
            </p>
            <p className="text-sm text-gray-600">
              Я прочитал книгу вчера. — Завершено.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">
              Past Continuous: I was reading a book at 5 p.m.
            </p>
            <p className="text-sm text-gray-600">
              Я читал книгу в 5 вечера. — Длилось.
            </p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">Past Simple: She saw a film.</p>
            <p className="text-sm text-gray-600">
              Она посмотрела фильм. — Факт.
            </p>
          </div>

          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <p className="font-semibold">
              Past Continuous: She was watching TV when I came.
            </p>
            <p className="text-sm text-gray-600">
              Она смотрела телевизор, когда я пришёл. — Фон.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I read at 5 p.m.</div>
              <div className="text-green-600">
                ✅ Right: I was reading at 5 p.m.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ Wrong: I was playing football yesterday.
              </div>
              <div className="text-green-600">
                ✅ Right: I played football yesterday.
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
                <th className="border border-gray-300 p-2 text-left">Время</th>
                <th className="border border-gray-300 p-2 text-left">Пример</th>
                <th className="border border-gray-300 p-2 text-left">Когда?</th>
              </tr>
            </thead>
            <tbody>
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
                  Продолжительное действие
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные путают времена, так как в русском «я читал» подходит
            для обоих случаев.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Правила формирования ===== */
function Step6() {
  return (
    <>
      <UiSection title="Past Simple">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Правильные глаголы:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>play → played.</li>
            <li>На -e: like → liked.</li>
            <li>Короткая гласная + согласная: stop → stopped.</li>
            <li>На -y после согласной: study → studied.</li>
          </ul>
        </div>

        <div className="bg-green-50/50 rounded-lg p-4 mt-3">
          <h4 className="font-semibold mb-2">Неправильные глаголы:</h4>
          <p className="text-sm mb-2">go → went, see → saw (заучивать).</p>
        </div>

        <div className="bg-blue-50/50 rounded-lg p-4 mt-3">
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Отрицания: didn't + начальная форма (didn't play).</li>
            <li>
              Вопросы: Did + подлежащее + начальная форма (Did you play?).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Past Continuous">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Was/Were:</h4>
          <p className="text-sm mb-2">
            Was для I, he, she, it, were для you, we, they.
          </p>
        </div>

        <div className="bg-purple-50/50 rounded-lg p-4 mt-3">
          <h4 className="font-semibold mb-2">-ing форма:</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Обычные: read → reading.</li>
            <li>На -e: write → writing.</li>
            <li>Короткая гласная + согласная: run → running.</li>
          </ul>
        </div>

        <div className="bg-pink-50/50 rounded-lg p-4 mt-3">
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Отрицания: wasn't/weren't + -ing (wasn't reading).</li>
            <li>Вопросы: Was/Were + подлежащее + -ing (Were you reading?).</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <ul className="list-disc pl-5">
          <li>Past Simple: played [pleɪd], went [wɛnt].</li>
          <li>Past Continuous: was [wɒz], reading [ˈriːdɪŋ].</li>
        </ul>
      </UiSection>

      <UiSection title="Ошибки">
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
            <li>
              <div className="text-red-600">❌ Wrong: I was read.</div>
              <div className="text-green-600">✅ Right: I was reading.</div>
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
                <th className="border border-gray-300 p-2 text-left">Глагол</th>
                <th className="border border-gray-300 p-2 text-left">Форма</th>
                <th className="border border-gray-300 p-2 text-left">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Past Simple</td>
                <td className="border border-gray-300 p-2">play</td>
                <td className="border border-gray-300 p-2">played</td>
                <td className="border border-gray-300 p-2">
                  I played football.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Past Simple</td>
                <td className="border border-gray-300 p-2">go</td>
                <td className="border border-gray-300 p-2">went</td>
                <td className="border border-gray-300 p-2">
                  I went to school.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Past Continuous</td>
                <td className="border border-gray-300 p-2">play</td>
                <td className="border border-gray-300 p-2">was playing</td>
                <td className="border border-gray-300 p-2">
                  I was playing football.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Сравнение с Was/Were ===== */
function Step7() {
  return (
    <>
      <UiSection title="Was/Were (Past Simple to be)">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Для состояний:</p>
            <p className="text-sm">I was tired. (Я был уставшим.)</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Местоположение:</p>
            <p className="text-sm">She was at school. (Она была в школе.)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Past Simple (глаголы)">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="font-semibold mb-2">Завершённые действия:</p>
          <p className="text-sm">I played football. (Я играл в футбол.)</p>
        </div>
      </UiSection>

      <UiSection title="Past Continuous">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="font-semibold mb-2">Продолжительные действия:</p>
          <p className="text-sm">
            I was playing football. (Я играл в футбол в тот момент.)
          </p>
        </div>
      </UiSection>

      <UiSection title="Примеры">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">Was/Were: I was at school.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">Past Simple: I went to school.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">
              Past Continuous: I was going to school when it rained.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <div className="text-red-600">❌ Wrong: I was play.</div>
              <div className="text-green-600">✅ Right: I was playing.</div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I was go.</div>
              <div className="text-green-600">✅ Right: I went.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Визуал: Таблица">
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
                <td className="border border-gray-300 p-2">Past Simple</td>
                <td className="border border-gray-300 p-2">
                  I went to school.
                </td>
                <td className="border border-gray-300 p-2">
                  Завершённое действие
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Past Continuous</td>
                <td className="border border-gray-300 p-2">
                  I was going to school.
                </td>
                <td className="border border-gray-300 p-2">
                  Продолжительное действие
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
      <UiSection title="Домашнее задание">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Задание:</strong> Выучите 20 слов (страница 2).
        </p>
      </UiSection>

      <UiSection title="Как выполнять">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Повторение:</p>
            <p className="text-sm">
              Повторяйте вслух (played [pleɪd], was playing [wɒz ˈpleɪɪŋ]).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Карточки:</p>
            <p className="text-sm">
              Карточки: начальная форма + Past Simple/Past Continuous + перевод.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Предложения:</p>
            <p className="text-sm mb-2">Составьте 10 предложений:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>3 Past Simple: I played football.</li>
              <li>3 Past Continuous: I was playing football.</li>
              <li>2 отрицательных: I didn't play. / I wasn't playing.</li>
              <li>2 вопроса: Did you play? / Were you playing?</li>
            </ul>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">4. Диалог:</p>
            <p className="text-sm mb-2">Диалог (5-6 реплик, 5 глаголов):</p>
            <div className="bg-white rounded p-3 text-sm">
              <p>A: Did you play football yesterday?</p>
              <p>B: Yes, I was playing football at 5 p.m.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Карточки с play → played / was playing.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнения ===== */
function Step9() {
  const exercise1: FillItem[] = [
    {
      left: "1. I ______ football yesterday.",
      right: "",
      answers: ["played"],
      explanation: "Ответ: played — Завершённое действие.",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. I ______ a book at 5 p.m.",
      right: "",
      answers: ["was reading"],
      explanation: "Ответ: was reading — Действие в определённый момент.",
      ariaLabel: "Вопрос 2",
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
      left: "2. I was reading a book. →",
      right: "",
      answers: ["I wasn't reading a book", "I wasn't reading a book."],
      explanation: "Ответ: I wasn't reading a book.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Я читал книгу вчера. →",
      right: "",
      answers: ["I read a book yesterday", "I read a book yesterday."],
      explanation: "Ответ: I read a book yesterday.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Я читал книгу в 5 вечера. →",
      right: "",
      answers: [
        "I was reading a book at 5 p.m",
        "I was reading a book at 5 p.m.",
      ],
      explanation: "Ответ: I was reading a book at 5 p.m.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. ❌ I read a book at 5 p.m. →",
      right: "",
      answers: [
        "I was reading a book at 5 p.m",
        "I was reading a book at 5 p.m.",
      ],
      explanation: "Исправление: I was reading a book at 5 p.m.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ I was play football. →",
      right: "",
      answers: ["I was playing football", "I was playing football."],
      explanation: "Исправление: I was playing football.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите форму"
        instruction="Вставьте глагол в правильном времени: Past Simple (played) или Past Continuous (was reading)."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Отрицания"
        instruction="Переделайте предложения в отрицательные."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Перевод"
        instruction="Переведите с русского на английский."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Исправьте ошибки"
        instruction="Найдите ошибки в предложениях и напишите правильный вариант целиком."
        items={exercise4}
      />

      <UiSection title="Визуал">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            I played football, I was reading a book.
          </p>
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
      left: "1. I played football yesterday.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I played football with my friends.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. I was watching TV at 5 p.m.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — I wasn't watching TV at 5 p.m.",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. My sister went to the park.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — My sister went to the park.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. My sister was running when I saw her.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — She was running when I saw her.",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. I was reading at 6 p.m.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — No, I wasn't.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Day Yesterday">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            Yesterday was fun. I played football with my friends. I wasn't
            watching TV at 5 p.m. My sister went to the park. She was running
            when I saw her. Did I read a book? Yes, I did. Was I reading at 6
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
              Вчера было весело. Я играл в футбол с друзьями. Я не смотрел
              телевизор в 5 вечера. Моя сестра пошла в парк. Она бежала, когда я
              её увидел. Читал ли я книгу? Да, читал. Читал ли я в 6 вечера?
              Нет, не читал.
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
            Подчеркните played, was running в тексте. Обратите внимание на
            детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Past Continuous vs Past Simple"! Теперь вы
          можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            Различать завершённые действия (Past Simple) и продолжительные (Past
            Continuous)
          </li>
          <li>Правильно выбирать время для описания событий в прошлом</li>
          <li>Использовать временные маркеры (yesterday, at 5 p.m., while)</li>
          <li>Строить предложения с обоими временами</li>
          <li>Избегать типичных ошибок русскоязычных</li>
        </ul>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Описывайте события вчерашнего дня, чередуя Past Simple и Past
              Continuous
            </li>
            <li>
              Past Simple для завершённых действий: I played, I went, I saw
            </li>
            <li>
              Past Continuous для процессов: I was reading at 5 p.m., She was
              running when...
            </li>
            <li>
              Используйте when/while для комбинирования времён: I was reading
              when you called
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




