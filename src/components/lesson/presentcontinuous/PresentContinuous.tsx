"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentContinuous({ step }: Props) {
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
      <UiSection title="Что такое Present Continuous?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Continuous — это время, которое описывает действия,
          происходящие <strong>прямо сейчас</strong> или в момент речи. Оно
          строится по формуле: <strong>am/is/are + глагол + -ing</strong>.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              I am reading a book. (Я читаю книгу сейчас.)
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              She is running. (Она бежит.)
            </p>
          </div>
          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              They are talking now. (Они разговаривают сейчас.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает описывать, что происходит в данный момент: I am eating now.
            (Я ем сейчас.)
          </li>
          <li>Учит задавать вопросы: Are you reading? (Ты читаешь?)</li>
          <li>
            Формирует базу для разговоров о текущих действиях (дома, в школе, с
            друзьями).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Am:</strong> Для I.
            </li>
            <li>
              <strong>Is:</strong> Для he, she, it.
            </li>
            <li>
              <strong>Are:</strong> Для you, we, they.
            </li>
            <li>
              <strong>Глагол + -ing:</strong> read → reading, run → running.
            </li>
            <li>
              <strong>Произношение:</strong> Am [æm] (эм), Is [ɪz] (из), Are
              [ɑːr] (ар), reading [ˈriːdɪŋ].
            </li>
            <li>
              <strong>Интонация:</strong> Утверждения — ровная, вопросы (Are
              you…?) — восходящая (↑).
            </li>
            <li>
              <strong>Временные слова:</strong> now, at the moment, today
              указывают на «сейчас».
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Я читаю книгу.</p>
            <p className="text-indigo-600 font-semibold">
              English: I am reading a book now.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Они играют.</p>
            <p className="text-green-600 font-semibold">
              English: They are playing now.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📸 Визуализация действий">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center text-4xl mb-3">
                📖
              </div>
              <p className="text-sm text-zinc-600 mb-2">Действие прямо сейчас</p>
              <p className="text-xl font-bold text-blue-900">
                I <span className="text-blue-600">am reading</span>
              </p>
              <p className="text-sm text-zinc-600 mt-2 italic">Я читаю (прямо сейчас)</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🏃‍♀️
              </div>
              <p className="text-sm text-zinc-600 mb-2">Действие происходит</p>
              <p className="text-xl font-bold text-green-900">
                She <span className="text-green-600">is running</span>
              </p>
              <p className="text-sm text-zinc-600 mt-2 italic">Она бежит (в данный момент)</p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-purple-50 rounded-lg p-4 border border-purple-200">
          <p className="text-center font-semibold text-purple-900">
            💡 Ключевая идея: Present Continuous = <span className="text-purple-600">действие СЕЙЧАС</span>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> В русском «я читаю» может
              означать и привычку (I read), и действие сейчас (I am reading).
              Английский строго разделяет времена.
            </li>
            <li>
              <strong>Глагол обязателен:</strong> Русский иногда опускает глагол
              (Читаю сейчас), английский требует am/is/are (I am reading now).
            </li>
            <li>
              <strong>-ing форма:</strong> В русском нет аналога -ing, это нужно
              запомнить как маркер «сейчас».
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Present Continuous = действие прямо сейчас.
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
          Для Present Continuous важно выучить глаголы действия и слова времени,
          связанные с «сейчас». Вот список из{" "}
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
            <h4 className="font-semibold mb-2">Слова времени:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Now</strong> [naʊ] — Сейчас
              </p>
              <p>
                <strong>At the moment</strong> [æt ðə ˈmoʊmənt] — В данный
                момент
              </p>
              <p>
                <strong>Today</strong> [təˈdeɪ] — Сегодня
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Предметы:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Book</strong> [bʊk] — Книга
              </p>
              <p>
                <strong>Phone</strong> [foʊn] — Телефон
              </p>
              <p>
                <strong>TV</strong> [ˌtiː ˈviː] — Телевизор
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Вспомогательные глаголы:</h4>
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
                <strong>What</strong> [wɒt] — Что
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">I am reading a book now.</p>
            <p className="text-sm text-gray-600">Я читаю книгу сейчас.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">She is watching TV.</p>
            <p className="text-sm text-gray-600">Она смотрит телевизор.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">What are you doing?</p>
            <p className="text-sm text-gray-600">Что ты делаешь?</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Повторяйте слова с аудио (am [æm], reading [ˈriːdɪŋ]).</li>
            <li>Составляйте предложения: I am eating now.</li>
            <li>Используйте карточки: слово + перевод.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто забывают -ing (I am read вместо I am reading)
            или now (I am reading вместо I am reading now).
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
      right: "reading a book. (читаю)",
      answers: ["am"],
      explanation: "Ответ: am — Для I используем am.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "running. (бежит)",
      answers: ["is"],
      explanation: "Ответ: is — Для she используем is.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They are",
      right: "football. (играют)",
      answers: ["playing"],
      explanation: "Ответ: playing — Глагол play + ing.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как строить утверждения?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема:{" "}
          <strong>
            Подлежащее + am/is/are + глагол + -ing + (временное слово)
          </strong>
          .
        </p>
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
              <strong>Почему так:</strong> I + am + reading + a book + now.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She is running in the park.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она бежит в парке.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + is + running + in the park.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              They are playing football.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они играют в футбол.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> They + are + playing + football.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Am:</strong> Для I.
            </li>
            <li>
              <strong>Is:</strong> Для he, she, it.
            </li>
            <li>
              <strong>Are:</strong> Для you, we, they.
            </li>
            <li>
              <strong>-ing форма:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Обычные глаголы: read → reading, play → playing.</li>
                <li>Глаголы на -e: write → writing (убираем e).</li>
                <li>
                  Глаголы на согласный после короткой гласной: run → running
                  (удваиваем согласную).
                </li>
              </ul>
            </li>
            <li>
              <strong>Временные слова:</strong> now, at the moment, today в
              конце предложения.
            </li>
            <li>
              <strong>Произношение:</strong> Am [æm], is [ɪz], are [ɑːr]; -ing
              [ɪŋ].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Кухня:</strong> I am eating breakfast now. (Я ем завтрак
              сейчас.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> He is watching TV. (Он смотрит телевизор.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Разговор:</strong> We are talking at the moment. (Мы
              разговариваем сейчас.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте am/is/are:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I is reading.</div>
                <div className="text-green-600">✅ Right: I am reading.</div>
              </div>
            </li>
            <li>
              НЕ забывайте -ing:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I am read.</div>
                <div className="text-green-600">✅ Right: I am reading.</div>
              </div>
            </li>
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I am knowing.</div>
                <div className="text-green-600">✅ Right: I know.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Создайте утверждения"
        instruction="Заполните пропуски для создания утвердительных предложений."
        items={affirmativeExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я читаю» не различает действие «сейчас» и привычку,
            английский требует I am reading now для «сейчас».
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Утверждения = Подлежащее + am/is/are +
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
      left: "1. I'm",
      right: "reading a book. (не читаю)",
      answers: ["not"],
      explanation: "Ответ: not — I'm not reading.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "running. (не бежит)",
      answers: ["isn't", "isnt", "is not"],
      explanation: "Ответ: isn't — She isn't running.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "playing football. (не играют)",
      answers: ["aren't", "arent", "are not"],
      explanation: "Ответ: aren't — They aren't playing.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как строить отрицания?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Подлежащее + am/is/are + not + глагол + -ing</strong>.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Сокращения: I'm not, he/she/it isn't, you/we/they aren't.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I'm not reading a book now.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я не читаю книгу сейчас.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + am not + reading + a book + now.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She isn't running.</p>
            <p className="text-sm text-gray-600 mb-2">Перевод: Она не бежит.</p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + is not + running.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              They aren't playing football.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они не играют в футбол.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> They + aren't + playing + football.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>I'm not:</strong> Для I.
            </li>
            <li>
              <strong>Isn't:</strong> Для he, she, it.
            </li>
            <li>
              <strong>Aren't:</strong> Для you, we, they.
            </li>
            <li>
              <strong>Произношение:</strong> I'm not [aɪm nɒt], isn't [ˈɪznt],
              aren't [ɑːrnt].
            </li>
            <li>
              <strong>-ing форма:</strong> Те же правила (read → reading, run →
              running).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Кухня:</strong> I'm not eating now. (Я не ем сейчас.)
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> He isn't watching TV. (Он не смотрит
              телевизор.)
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Разговор:</strong> We aren't talking at the moment. (Мы не
              разговариваем сейчас.)
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
                <div className="text-red-600">❌ Wrong: I isn't reading.</div>
                <div className="text-green-600">✅ Right: I'm not reading.</div>
              </div>
            </li>
            <li>
              НЕ используйте don't:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I don't reading.</div>
                <div className="text-green-600">✅ Right: I'm not reading.</div>
              </div>
            </li>
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I'm not liking.</div>
                <div className="text-green-600">✅ Right: I don't like.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Создайте отрицания"
        instruction="Заполните пропуски для создания отрицательных предложений."
        items={negativeExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «я не читаю» не различает времена, английский требует I'm
            not reading для действия «сейчас».
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Отрицания = Подлежащее + am/is/are + not +
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
      right: "I reading a book? (я читаю?)",
      answers: ["Am", "am"],
      explanation: "Ответ: Am — Для I используем Am.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2.",
      right: "she running? (она бежит?)",
      answers: ["Is", "is"],
      explanation: "Ответ: Is — Для she используем Is.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3.",
      right: "they playing football? (они играют?)",
      answers: ["Are", "are"],
      explanation: "Ответ: Are — Для they используем Are.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как задавать вопросы?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Am/Is/Are + подлежащее + глагол + -ing?</strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Am I reading a book?</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я читаю книгу?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Am + I + reading + a book.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Is she running?</p>
            <p className="text-sm text-gray-600 mb-2">Перевод: Она бежит?</p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Is + she + running.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Are they playing football?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они играют в футбол?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Are + they + playing + football.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Am:</strong> Для I.
            </li>
            <li>
              <strong>Is:</strong> Для he, she, it.
            </li>
            <li>
              <strong>Are:</strong> Для you, we, they.
            </li>
            <li>
              <strong>Короткие ответы:</strong> Yes, I am. / No, I'm not.; Yes,
              she is. / No, she isn't.
            </li>
            <li>
              <strong>Произношение:</strong> Вопросы с восходящей интонацией
              (↑): Are you…? [ɑːr ju].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Кухня:</strong> Are you eating now? (Ты ешь сейчас?)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> Is he watching TV? (Он смотрит телевизор?)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Разговор:</strong> What are you doing? (Что ты делаешь?)
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
                <div className="text-red-600">❌ Wrong: Is I reading?</div>
                <div className="text-green-600">✅ Right: Am I reading?</div>
              </div>
            </li>
            <li>
              НЕ используйте do:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Do you reading?</div>
                <div className="text-green-600">✅ Right: Are you reading?</div>
              </div>
            </li>
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Are you knowing?</div>
                <div className="text-green-600">✅ Right: Do you know?</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Создайте вопросы"
        instruction="Заполните пропуски для создания вопросов."
        items={questionExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «Ты читаешь?» не различает времена, английский Are you
            reading? — строго для «сейчас».
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Вопросы = Am/Is/Are + подлежащее + глагол +
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
      <UiSection title="Как добавлять -ing к глаголам?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Present Continuous требует, чтобы к глаголу добавлялась концовка -ing.
        </p>
      </UiSection>

      <UiSection title="Правила и примеры">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              1. Обычные глаголы: Добавляем -ing
            </p>
            <div className="text-sm space-y-1">
              <p>• read → reading (читать → читая)</p>
              <p>• play → playing (играть → играя)</p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              2. Глаголы на -e: Убираем e, добавляем -ing
            </p>
            <div className="text-sm space-y-1">
              <p>• write → writing (писать → пишу)</p>
              <p>• take → taking (брать → беру)</p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              3. Глаголы на согласный после короткой гласной: Удваиваем
              согласную, добавляем -ing
            </p>
            <div className="text-sm space-y-1">
              <p>• run → running (бежать → бегу)</p>
              <p>• sit → sitting (сидеть → сижу)</p>
            </div>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">
              4. Исключения: Глаголы на -y не меняются
            </p>
            <div className="text-sm space-y-1">
              <p>• study → studying (учиться → учась)</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры в предложениях">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>I am reading a book. (читаю)</p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>She is writing a letter. (пишет)</p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>He is running now. (бежит)</p>
          </div>
          <div className="border-l-4 border-amber-400 pl-3 py-1">
            <p>They are studying at the moment. (учатся)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>-ing всегда [ɪŋ] (инг).</li>
            <li>
              Ударение остаётся на корне: REAding [ˈriːdɪŋ], RUNning [ˈrʌnɪŋ].
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
                <div className="text-red-600">❌ Wrong: I am read.</div>
                <div className="text-green-600">✅ Right: I am reading.</div>
              </div>
            </li>
            <li>
              НЕ удваивайте согласную без причины:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: read → readding.</div>
                <div className="text-green-600">✅ Right: reading.</div>
              </div>
            </li>
            <li>
              НЕ для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I am liking.</div>
                <div className="text-green-600">✅ Right: I like.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто ошибаются с -ing (writeing вместо writing), так
            как в русском нет подобной формы.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> -ing добавляется по строгим правилам (read
            → reading, run → running).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Сравнение с Present Simple ===== */
function Step7() {
  return (
    <>
      <UiSection title="Сравнение с Present Simple">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm">Для привычек и фактов (I read books).</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Continuous:</p>
            <p className="text-sm">
              Для действий сейчас (I am reading a book now).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры для сравнения">
        <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
          <div>
            <p className="font-semibold mb-1">Пример 1:</p>
            <p className="text-sm text-indigo-600">
              Present Simple: I eat breakfast every day. (Я ем завтрак каждый
              день.)
            </p>
            <p className="text-sm text-green-600">
              Present Continuous: I am eating breakfast now. (Я ем завтрак
              сейчас.)
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Пример 2:</p>
            <p className="text-sm text-indigo-600">
              Present Simple: She plays football. (Она играет в футбол.)
            </p>
            <p className="text-sm text-green-600">
              Present Continuous: She is playing football now. (Она играет в
              футбол сейчас.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Present Simple:</strong> Использует do/does для
              вопросов/отрицаний (Do you read?).
            </li>
            <li>
              <strong>Present Continuous:</strong> Использует am/is/are (Are you
              reading?).
            </li>
            <li>
              <strong>Временные слова:</strong> Now, at the moment — для
              Continuous; every day, always — для Simple.
            </li>
            <li>
              <strong>Статичные глаголы:</strong> Like, know, want не
              используются в Continuous (I like, не I am liking).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Отличия от русского языка (все мелочи)">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Разделение времён:</strong> Русский «я читаю» может быть и
              привычкой, и действием сейчас; английский разделяет (I read vs. I
              am reading).
            </li>
            <li>
              <strong>-ing форма:</strong> В русском нет эквивалента -ing, это
              сложно для запоминания.
            </li>
            <li>
              <strong>Обязательные слова:</strong> Английский часто требует now
              (I am reading now), русский может опускать (Читаю).
            </li>
            <li>
              <strong>Произношение:</strong> Русскоязычные путают am [æm] и is
              [ɪz], делая их похожими.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Путаница am/is/are:
              <div className="ml-4">
                <div className="text-red-600">❌ I is reading.</div>
                <div className="text-green-600">✅ I am reading.</div>
              </div>
            </li>
            <li>
              Пропуск -ing:
              <div className="ml-4">
                <div className="text-red-600">❌ I am read.</div>
                <div className="text-green-600">✅ I am reading.</div>
              </div>
            </li>
            <li>
              Использование для стативных глаголов:
              <div className="ml-4">
                <div className="text-red-600">❌ I am knowing.</div>
                <div className="text-green-600">✅ I know.</div>
              </div>
            </li>
          </ul>
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
              Прочитайте каждое слово вслух 3 раза (am [æm], reading [ˈriːdɪŋ]).
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
              Составьте <strong>10 предложений</strong> с Present Continuous:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>4 утвердительных: I am reading a book now.</li>
              <li>3 отрицательных: I'm not eating now.</li>
              <li>3 вопроса: Are you running?</li>
            </ul>
            <p className="text-sm mt-2 italic">
              Пример: She is watching TV at the moment.
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
              <p>A: What are you doing now?</p>
              <p>B: I am reading a book.</p>
              <p>A: Are you watching TV?</p>
              <p>B: No, I'm not watching TV.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Практикуйте в реальных ситуациях (опишите, что вы делаете сейчас).
            </li>
            <li>Проверяйте произношение (am [æm], reading [ˈriːdɪŋ]).</li>
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
      right: "reading a book now.",
      answers: ["am"],
      explanation: "Ответ: am — Для I.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. She",
      right: "running in the park.",
      answers: ["is"],
      explanation: "Ответ: is — Для she.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3.",
      right: "you playing football?",
      answers: ["Are", "are"],
      explanation: "Ответ: Are — Вопрос для you.",
      ariaLabel: "Вопрос 3",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I am reading a book. →",
      right: "",
      answers: ["I'm not reading a book", "I'm not reading a book."],
      explanation: "Ответ: I'm not reading a book.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. They are playing football. →",
      right: "",
      answers: [
        "They aren't playing football",
        "They aren't playing football.",
      ],
      explanation: "Ответ: They aren't playing football.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Я ем сейчас. →",
      right: "",
      answers: ["I am eating now", "I am eating now."],
      explanation: "Ответ: I am eating now.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Они не играют в футбол. →",
      right: "",
      answers: [
        "They aren't playing football",
        "They aren't playing football.",
      ],
      explanation: "Ответ: They aren't playing football.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Ты смотришь телевизор? →",
      right: "",
      answers: ["Are you watching TV", "Are you watching TV?"],
      explanation: "Ответ: Are you watching TV?",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. ❌ I is reading a book. →",
      right: "",
      answers: ["I am reading a book", "I am reading a book."],
      explanation: "Исправление: I am reading a book. — Для I используется am.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ She am running now. →",
      right: "",
      answers: ["She is running now", "She is running now."],
      explanation:
        "Исправление: She is running now. — Для she используется is.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ They are play football. →",
      right: "",
      answers: ["They are playing football", "They are playing football."],
      explanation:
        "Исправление: They are playing football. — Глагол должен быть с -ing.",
      ariaLabel: "Исправьте 3",
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
        instruction="Вставьте am, is или are в зависимости от подлежащего (I → am, She → is, you → are)."
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
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и True/False ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const trueFalseItems: FillItem[] = [
    {
      left: "1. I am eating breakfast now.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — I am eating breakfast.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. I am watching TV.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — I'm not watching TV.",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. My friends are playing in the park.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — My friends are playing in the park.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. My friends are reading books.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — They aren't reading books.",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. My sister is running.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — No, she isn't. She is writing a letter.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Day Now">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            I am sitting in the kitchen now. I am eating breakfast. I'm not
            watching TV. My friends are playing in the park. They aren't reading
            books. Is my sister running? No, she isn't. She is writing a letter.
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
              Я сижу на кухне сейчас. Я ем завтрак. Я не смотрю телевизор. Мои
              друзья играют в парке. Они не читают книги. Моя сестра бежит? Нет,
              она не бежит. Она пишет письмо.
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
          Вы завершили весь курс "Present Continuous"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Описывать действия, происходящие прямо сейчас</li>
          <li>Использовать правильные формы am/is/are + глагол + -ing</li>
          <li>Строить утверждения, отрицания и вопросы</li>
          <li>Правильно добавлять -ing к глаголам</li>
          <li>Отличать Present Continuous от Present Simple</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Am/Is/Are:</strong> Am для I, is для he/she/it, are для
              you/we/they
            </li>
            <li>
              <strong>-ing форма:</strong> read → reading, run → running
            </li>
            <li>
              <strong>Отрицания:</strong> I'm not reading, she isn't running
            </li>
            <li>
              <strong>Вопросы:</strong> Am I reading?, Are you running?
            </li>
            <li>
              <strong>Отличия от русского:</strong> Английский разделяет
              действие «сейчас» (I am reading) и привычку (I read)
            </li>
            <li>
              <strong>Произношение:</strong> Am [æm], Is [ɪz], Are [ɑːr], -ing
              [ɪŋ]
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Описывайте, что вы делаете сейчас, используя Present Continuous
            </li>
            <li>Не забывайте -ing: I am reading, not I am read!</li>
            <li>Помните: now, at the moment — маркеры Present Continuous</li>
            <li>Практикуйте произношение am/is/are</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




