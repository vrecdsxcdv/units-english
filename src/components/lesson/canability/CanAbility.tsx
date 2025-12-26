"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function CanAbility({ step }: Props) {
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
      <UiSection title="Что такое Can и Can't?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Can</strong> — модальный глагол, который используется для
          выражения:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              1. Способностей (ability):
            </h4>
            <p className="text-sm text-zinc-700">Что человек умеет делать.</p>
            <p className="text-sm text-indigo-700 mt-2 italic">
              Пример: I can swim. (Я умею плавать.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              2. Разрешений (permission):
            </h4>
            <p className="text-sm text-zinc-700">
              Что разрешено или запрещено.
            </p>
            <p className="text-sm text-green-700 mt-2 italic">
              Пример: Can I go? (Можно пойти?) / You can't smoke here. (Здесь
              нельзя курить.)
            </p>
          </div>
        </div>

        <div className="bg-red-50/50 rounded-lg p-4 mb-4">
          <p className="text-sm text-zinc-700">
            <strong>Can't</strong> — сокращение от <strong>cannot</strong>,
            отрицательная форма, означает отсутствие способности или запрет.
          </p>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает говорить о своих умениях: I can speak English. (Я умею
            говорить по-английски.)
          </li>
          <li>
            Позволяет запрашивать разрешение: Can I sit here? (Можно сесть?)
          </li>
          <li>
            Учит запрещать: You can't park here. (Здесь нельзя парковаться.)
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Can</strong> одинаково для всех подлежащих (I, you,
              he/she/it, we, they).
            </li>
            <li>
              <strong>Глагол после can/can't:</strong> всегда в начальной форме
              (can swim, can't go).
            </li>
            <li>
              <strong>Произношение:</strong> Can [kæn] (кэн), Can't [kænt]
              (кэнт). В can't ударение сильнее, гласный длиннее.
            </li>
            <li>
              <strong>Интонация:</strong> Вопросы (Can you help?) с восходящей
              интонацией (↑), утверждения (I can) — ровная.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Я умею плавать</p>
            <p className="text-indigo-600 font-semibold">
              English: I can swim.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Можно войти?</p>
            <p className="text-green-600 font-semibold">
              English: Can I come in?
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📸 Визуализация Can / Can't">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🏊
              </div>
              <p className="text-2xl font-bold text-blue-900 mb-2">CAN</p>
              <p className="text-sm text-zinc-600 mb-3">Способность / Умение</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">I <span className="text-blue-600">can</span> swim</p>
                <p className="text-xs text-zinc-600 mt-1">Я умею плавать</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🙋
              </div>
              <p className="text-2xl font-bold text-green-900 mb-2">CAN I?</p>
              <p className="text-sm text-zinc-600 mb-3">Разрешение</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold"><span className="text-green-600">Can I</span> go?</p>
                <p className="text-xs text-zinc-600 mt-1">Можно мне выйти?</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border-2 border-red-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-red-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🚭
              </div>
              <p className="text-2xl font-bold text-red-900 mb-2">CAN&apos;T</p>
              <p className="text-sm text-zinc-600 mb-3">Запрет / Неумение</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">You <span className="text-red-600">can&apos;t</span> smoke</p>
                <p className="text-xs text-zinc-600 mt-1">Тебе нельзя курить</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-purple-50 rounded-lg p-4 border border-purple-200">
          <p className="text-center font-semibold text-purple-900">
            💡 Can = способность (умею) + разрешение (можно) | Can&apos;t = неумение + запрет (нельзя)
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> В русском «могу» меняется по
              лицам (могу, можешь, может), в английском can неизменно.
            </li>
            <li>
              <strong>Разрешения:</strong> Русский «Можно?» звучит неформально,
              в английском Can I? — стандарт для всех ситуаций.
            </li>
            <li>
              <strong>Запреты:</strong> Русский «Нельзя курить» → Английский You
              can't smoke (обязательно you).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Can = умение или разрешение, can't =
            неумение или запрет.
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
          Для выражения способностей и разрешений важно выучить глаголы действия
          и фразы. Вот список из <strong>20 ключевых слов/фраз</strong> с
          переводом и произношением для A1-A2.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Глаголы действия:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Swim</strong> [swɪm] — Плавать
              </p>
              <p>
                <strong>Run</strong> [rʌn] — Бегать
              </p>
              <p>
                <strong>Sing</strong> [sɪŋ] — Петь
              </p>
              <p>
                <strong>Dance</strong> [dæns] — Танцевать
              </p>
              <p>
                <strong>Speak</strong> [spiːk] — Говорить
              </p>
              <p>
                <strong>Write</strong> [raɪt] — Писать
              </p>
              <p>
                <strong>Read</strong> [riːd] — Читать
              </p>
              <p>
                <strong>Cook</strong> [kʊk] — Готовить
              </p>
              <p>
                <strong>Drive</strong> [draɪv] — Водить (машину)
              </p>
              <p>
                <strong>Play</strong> [pleɪ] — Играть
              </p>
              <p>
                <strong>Help</strong> [help] — Помогать
              </p>
              <p>
                <strong>Come</strong> [kʌm] — Приходить
              </p>
              <p>
                <strong>Go</strong> [ɡoʊ] — Идти/ехать
              </p>
              <p>
                <strong>Sit</strong> [sɪt] — Сидеть
              </p>
              <p>
                <strong>Open</strong> [ˈoʊpən] — Открывать
              </p>
              <p>
                <strong>Close</strong> [kloʊz] — Закрывать
              </p>
              <p>
                <strong>Smoke</strong> [smoʊk] — Курить
              </p>
              <p>
                <strong>Park</strong> [pɑːrk] — Парковаться
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Модальные глаголы:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Can</strong> [kæn] — Мочь, уметь, можно
              </p>
              <p>
                <strong>Can't</strong> [kænt] — Не мочь, нельзя
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">I can swim.</p>
            <p className="text-sm text-gray-600">
              Я умею плавать. — Способность.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">Can I sit here?</p>
            <p className="text-sm text-gray-600">Можно сесть? — Разрешение.</p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 py-2">
            <p className="font-semibold">You can't smoke here.</p>
            <p className="text-sm text-gray-600">
              Здесь нельзя курить. — Запрет.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Повторяйте слова с аудио на сайте (can [кэн], can't [кэнт]).
            </li>
            <li>
              Составляйте предложения: I can sing. / Can I open the window?
            </li>
            <li>Используйте карточки: слово на английском + перевод.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто путают can (умение/разрешение) с to be able to
            (более формально). Для A1-A2 достаточно can.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Can для способностей ===== */
function Step3() {
  const abilityExercise: FillItem[] = [
    {
      left: "1. I",
      right: "swim. (умею)",
      answers: ["can"],
      explanation: "Ответ: can — Для способностей используем can + глагол.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "sing. (умеет)",
      answers: ["can"],
      explanation: "Ответ: can — Can не изменяется для she.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "drive a car. (умеют)",
      answers: ["can"],
      explanation: "Ответ: can — Can одинаково для всех подлежащих.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как говорить о способностях?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Подлежащее + can + глагол (начальная форма)</strong>.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">I can swim.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я умею плавать.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + can + swim (без -s).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">She can sing.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Она умеет петь.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + can + sing.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">They can drive a car.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они умеют водить машину.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> They + can + drive + a car.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Can неизменяемый:</strong> Для всех подлежащих (I, you,
              he/she/it, we, they).
            </li>
            <li>
              <strong>Глагол без изменений:</strong> Без -s, -ed, -ing (can
              speak, не can speaks).
            </li>
            <li>
              <strong>Произношение:</strong> В утверждениях can часто
              редуцируется [kən] (кн), но в can't — полный [kænt].
            </li>
            <li>
              <strong>Артикли:</strong> I can play football. (без a), но I can
              drive a car. (с a).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Кулинария:</strong> I can cook dinner. (Я умею готовить
              ужин.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Языки:</strong> He can speak English. (Он умеет говорить
              по-английски.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Спорт:</strong> We can run fast. (Мы умеем быстро бегать.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ добавляйте -s:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: She cans sing.</div>
                <div className="text-green-600">✅ Right: She can sing.</div>
              </div>
            </li>
            <li>
              НЕ путайте с Present Simple:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I swim good.</div>
                <div className="text-green-600">✅ Right: I can swim.</div>
              </div>
            </li>
            <li>
              НЕ используйте to:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I can to swim.</div>
                <div className="text-green-600">✅ Right: I can swim.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте can"
        instruction="Создайте предложения о способностях, используя can."
        items={abilityExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский: «Я умею петь» = могу + глагол. Английский: I can sing (без
            to). Русскоязычные часто добавляют to по аналогии с русским «могу».
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Способности = Подлежащее + can + глагол.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Can't для отсутствия способностей ===== */
function Step4() {
  const cantExercise: FillItem[] = [
    {
      left: "1. I",
      right: "swim. (не умею)",
      answers: ["can't", "cannot"],
      explanation: "Ответ: can't — Для неумения используем can't + глагол.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. He",
      right: "cook. (не умеет)",
      answers: ["can't", "cannot"],
      explanation: "Ответ: can't — Can't не изменяется для he.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. They",
      right: "dance. (не умеют)",
      answers: ["can't", "cannot"],
      explanation: "Ответ: can't — Can't одинаково для всех подлежащих.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как говорить о неумении?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Подлежащее + can't + глагол (начальная форма)</strong>.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">I can't swim.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я не умею плавать.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + can't + swim.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">He can't cook.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Он не умеет готовить.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> He + can't + cook.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">They can't dance.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Они не умеют танцевать.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> They + can't + dance.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Can't = cannot:</strong> Сокращение используется чаще
              (cannot редко, формально).
            </li>
            <li>
              <strong>Глагол без изменений:</strong> can't run, can't write (без
              -s).
            </li>
            <li>
              <strong>Произношение:</strong> Can't [kænt] — ударение на гласный,
              длиннее, чем в can [kən].
            </li>
            <li>
              <strong>Интонация:</strong> Уверенная, с акцентом на can't.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Навыки:</strong> I can't drive a car. (Я не умею водить
              машину.)
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Талант:</strong> She can't sing well. (Она не умеет хорошо
              петь.)
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Языки:</strong> We can't speak French. (Мы не умеем
              говорить по-французски.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ используйте don't:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I don't can swim.</div>
                <div className="text-green-600">✅ Right: I can't swim.</div>
              </div>
            </li>
            <li>
              НЕ добавляйте -s:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: He can't cooks.</div>
                <div className="text-green-600">✅ Right: He can't cook.</div>
              </div>
            </li>
            <li>
              НЕ путайте с запретами:
              <div className="ml-4">
                <div className="text-sm">
                  I can't swim (не умею) ≠ You can't swim here (нельзя).
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте can't"
        instruction="Создайте предложения о неумении, используя can't."
        items={cantExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто путают can't (неумение) с запретами (You can't
            smoke). В русском «не могу» может быть и неумением, и запретом, в
            английском важно контекст.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Неумение = Подлежащее + can't + глагол.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Can для разрешений ===== */
function Step5() {
  const permissionExercise: FillItem[] = [
    {
      left: "1.",
      right: "I sit here? (можно)",
      answers: ["Can", "can"],
      explanation: "Ответ: Can — Для разрешения Can ставится в начале вопроса.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2.",
      right: "you help me? (можешь)",
      answers: ["Can", "can"],
      explanation: "Ответ: Can — Can в начале для просьбы.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3.",
      right: "we go now? (можно)",
      answers: ["Can", "can"],
      explanation: "Ответ: Can — Can для запроса разрешения.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как запрашивать разрешение?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Can + подлежащее + глагол?</strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Can I sit here?</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Можно сесть здесь?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Can + I + sit + here.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Can you help me?</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Можешь помочь?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Can + you + help + me.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Can we go now?</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Можно пойти сейчас?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Can + we + go + now.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Can в начале:</strong> Для вопросов (Can I…?, Can you…?).
            </li>
            <li>
              <strong>Короткие ответы:</strong> Yes, you can. / No, you can't.
            </li>
            <li>
              <strong>Вежливость:</strong> Добавляйте please: Can I sit here,
              please?
            </li>
            <li>
              <strong>Произношение:</strong> Вопросы с can [kæn] — восходящая
              интонация (↑).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Просьба:</strong> Can I use your phone? (Можно взять твой
              телефон?)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Просьба о помощи:</strong> Can you open the window?
              (Можешь открыть окно?)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Разрешение:</strong> Can we start? (Можно начать?)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте с умением:
              <div className="ml-4">
                <div className="text-sm">
                  Can you swim? (Умеешь плавать?) ≠ Can you help? (Поможешь?)
                </div>
              </div>
            </li>
            <li>
              НЕ используйте do:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Do you can help?</div>
                <div className="text-green-600">✅ Right: Can you help?</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Создайте вопросы"
        instruction="Начните вопрос с Can для запроса разрешения."
        items={permissionExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            В русском «Можно?» — универсально, в английском Can I? звучит
            нейтрально, но с please вежливее. Русскоязычные могут забывать
            please.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Can't для запретов ===== */
function Step6() {
  const prohibitionExercise: FillItem[] = [
    {
      left: "1. You",
      right: "smoke here. (нельзя)",
      answers: ["can't", "cannot"],
      explanation: "Ответ: can't — Для запретов используем You can't + глагол.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. You",
      right: "park there. (нельзя)",
      answers: ["can't", "cannot"],
      explanation: "Ответ: can't — You обязательно в запретах.",
      ariaLabel: "Упражнение 2",
    },
  ];

  return (
    <>
      <UiSection title="Как выражать запреты?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>You + can't + глагол + дополнение</strong>.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">You can't smoke here.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Здесь нельзя курить.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> You + can't + smoke + here.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">You can't park there.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Там нельзя парковаться.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> You + can't + park + there.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              You can't eat in class.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: В классе нельзя есть.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> You + can't + eat + in class.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>You обязательно:</strong> Запреты всегда с you (в отличие
              от imperatives).
            </li>
            <li>
              <strong>Глагол без изменений:</strong> can't smoke, can't park.
            </li>
            <li>
              <strong>Произношение:</strong> Can't [kænt] — сильное ударение,
              уверенная интонация.
            </li>
            <li>
              <strong>Контекст:</strong> Запреты в общественных местах (can't
              smoke), правилах (can't eat).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              You can't use phones in class. (В классе нельзя использовать
              телефоны.)
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>You can't run here. (Здесь нельзя бегать.)</p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>You can't touch the exhibit. (Нельзя трогать экспонат.)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте с don't (imperatives):
              <div className="ml-4 text-sm">
                Don't smoke here! (команда) ≠ You can't smoke here! (правило)
              </div>
            </li>
            <li>
              НЕ без you:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Can't smoke!</div>
                <div className="text-green-600">✅ Right: You can't smoke.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Создайте запреты"
        instruction="Используйте You can't для выражения запретов."
        items={prohibitionExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            В русском «Нельзя курить» звучит нейтрально, в английском You can't
            smoke — строгое правило. Для вежливости добавляют please: Please,
            you can't smoke here.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Запреты = You + can't + глагол.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Сравнение с другими темами ===== */
function Step7() {
  return (
    <>
      <UiSection title="Сравнение с другими темами">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm">
              I swim every day. (привычка) ≠ I can swim. (умение).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Imperatives:</p>
            <p className="text-sm">
              Swim! (команда) ≠ Can you swim? (вопрос об умении).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">To be:</p>
            <p className="text-sm">
              I am a student. (роль) ≠ I can study. (умение).
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Have got:</p>
            <p className="text-sm">
              I have got a car. (владение) ≠ I can drive a car. (умение).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Отличия от русского языка (все мелочи)">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Неизменяемость can:</strong> Русский «могу» меняется
              (могу, можешь, может), английский can — нет (I can, he can).
            </li>
            <li>
              <strong>Вопросы:</strong> Русский «Ты умеешь плавать?» →
              Английский Can you swim? (can в начале, без do).
            </li>
            <li>
              <strong>Отрицания:</strong> Русский «Я не умею петь» → I can't
              sing (не I don't sing).
            </li>
            <li>
              <strong>Разрешения:</strong> Русский «Можно войти?» → Can I come
              in? (строгий порядок).
            </li>
            <li>
              <strong>Запреты:</strong> Русский «Нельзя курить» → You can't
              smoke (обязательно you).
            </li>
            <li>
              <strong>Произношение:</strong> Русскоязычные путают can [kən] и
              can't [kænt], делая слабое can't.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Добавляют to:
              <div className="ml-4">
                <div className="text-red-600">❌ I can to swim.</div>
                <div className="text-green-600">✅ I can swim.</div>
              </div>
            </li>
            <li>
              Путают с don't:
              <div className="ml-4">
                <div className="text-red-600">❌ I don't can cook.</div>
                <div className="text-green-600">✅ I can't cook.</div>
              </div>
            </li>
            <li>
              Забывают you в запретах:
              <div className="ml-4">
                <div className="text-red-600">❌ Can't park.</div>
                <div className="text-green-600">✅ You can't park.</div>
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
              Прочитайте каждое слово вслух 3 раза (can [kæn], swim [swɪm]).
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
              Составьте <strong>10 предложений</strong> с разными словами:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>5 о способностях: I can swim. / I can't cook.</li>
              <li>3 о разрешениях: Can I sit here?</li>
              <li>2 о запретах: You can't smoke here.</li>
            </ul>
            <p className="text-sm mt-2 italic">
              Например: I can read books. / Can you help me?
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
              <p>A: Can you swim?</p>
              <p>B: Yes, I can swim. Can you dance?</p>
              <p>A: No, I can't dance. Can I sit here?</p>
              <p>B: Yes, you can.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Практикуйте произношение can [kən] (слабое в утверждениях) и can't
              [kænt] (сильное).
            </li>
            <li>
              Представляйте ситуации: школа (Can I write?), дом (I can cook).
            </li>
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
      left: "1.",
      right: "you swim?",
      answers: ["Can", "can"],
      explanation: "Ответ: Can — Вопросы с can.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. I",
      right: "cook well.",
      answers: ["can't", "cannot"],
      explanation: "Ответ: can't — Отрицание способности.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. You",
      right: "park here.",
      answers: ["can't", "cannot"],
      explanation: "Ответ: can't — Запрет.",
      ariaLabel: "Вопрос 3",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I",
      right: "sing. (умею петь)",
      answers: ["can"],
      explanation: "Ответ: can",
      ariaLabel: "Заполните 1",
    },
    {
      left: "2.",
      right: "you help me? (можешь помочь)",
      answers: ["Can", "can"],
      explanation: "Ответ: Can",
      ariaLabel: "Заполните 2",
    },
    {
      left: "3. You",
      right: "smoke here. (нельзя курить)",
      answers: ["can't", "cannot"],
      explanation: "Ответ: can't",
      ariaLabel: "Заполните 3",
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. I can swim. →",
      right: "",
      answers: [
        "I can't swim",
        "I can't swim.",
        "I cannot swim",
        "I cannot swim.",
      ],
      explanation: "Ответ: I can't swim.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. You can park here. →",
      right: "",
      answers: [
        "You can't park here",
        "You can't park here.",
        "You cannot park here",
        "You cannot park here.",
      ],
      explanation: "Ответ: You can't park here.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. Я не умею готовить. →",
      right: "",
      answers: [
        "I can't cook",
        "I can't cook.",
        "I cannot cook",
        "I cannot cook.",
      ],
      explanation: "Ответ: I can't cook.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Можно сесть здесь? →",
      right: "",
      answers: ["Can I sit here", "Can I sit here?"],
      explanation: "Ответ: Can I sit here?",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Здесь нельзя парковаться. →",
      right: "",
      answers: [
        "You can't park here",
        "You can't park here.",
        "You cannot park here",
        "You cannot park here.",
      ],
      explanation: "Ответ: You can't park here.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise5: FillItem[] = [
    {
      left: "1. ❌ I can to swim. →",
      right: "",
      answers: ["I can swim", "I can swim."],
      explanation: "Исправление: I can swim. — Без to.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ Do you can help? →",
      right: "",
      answers: ["Can you help", "Can you help?"],
      explanation: "Исправление: Can you help? — Без do.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Can't smoke here. →",
      right: "",
      answers: [
        "You can't smoke here",
        "You can't smoke here.",
        "You cannot smoke here",
        "You cannot smoke here.",
      ],
      explanation: "Исправление: You can't smoke here. — С you.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по Can/Can't">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильную форму"
        instruction="Вставьте can или can't в зависимости от значения (способность/возможность или запрет/неспособность)."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски"
        instruction="Вставьте can (могу/можешь) или can't (не могу/нельзя) согласно подсказке в скобках."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Сделайте отрицания"
        instruction="Переделайте утвердительные предложения в отрицательные, используя can't или cannot."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Переведите"
        instruction="Переведите предложения с русского на английский, используя can/can't."
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
      left: "1. Max can swim.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation:
        "Ответ: True — В тексте: He can swim very well. (Он умеет плавать.)",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. Max can dance.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation:
        "Ответ: False — В тексте: He can't dance. (Он не умеет танцевать.)",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. Max can speak French.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation:
        "Ответ: False — Max can speak English and Russian. (Не сказано про французский.)",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. Students can use phones in class.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation:
        "Ответ: False — We can't use phones. (Нельзя использовать телефоны.)",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. Anna says Max can sit with her.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: 'Ответ: True — I say, "Yes, you can." (Анна разрешает.)',
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Friend Max">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            My name is Anna. I have a friend, Max. He can swim very well. He
            can't dance, but he can sing. Max can speak English and Russian. He
            can't drive a car. At school, we can use books, but we can't use
            phones. Max says, "Can I sit with you?" I say, "Yes, you can."
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
              Меня зовут Анна. У меня есть друг, Макс. Он очень хорошо умеет
              плавать. Он не умеет танцевать, но умеет петь. Макс говорит
              по-английски и по-русски. Он не умеет водить машину. В школе можно
              использовать книги, но нельзя использовать телефоны. Макс говорит:
              "Можно сесть с тобой?" Я говорю: "Да, можно."
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
            Подчеркните can/can't в тексте, чтобы найти ответы. Обратите
            внимание на детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Can/Can't: Способности и разрешения"! Теперь
          вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Говорить о своих способностях (I can swim)</li>
          <li>Выражать неумение (I can't cook)</li>
          <li>Запрашивать разрешение (Can I go?)</li>
          <li>Выражать запреты (You can't smoke)</li>
          <li>Понимать различия между can для умений и разрешений</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Способности:</strong> Can + глагол (I can swim)
            </li>
            <li>
              <strong>Неумение:</strong> Can't + глагол (I can't cook)
            </li>
            <li>
              <strong>Разрешения/просьбы:</strong> Can + подлежащее + глагол?
              (Can I go?)
            </li>
            <li>
              <strong>Запреты:</strong> You + can't + глагол (You can't smoke)
            </li>
            <li>
              <strong>Отличия от русского:</strong> Can неизменяемый, без to,
              you в запретах
            </li>
            <li>
              <strong>Произношение:</strong> Can [kən] (слабое), Can't [kænt]
              (сильное)
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Практикуйте произношение can и can't — это очень важно!</li>
            <li>Составьте список того, что вы умеете и не умеете делать</li>
            <li>Тренируйте просьбы с please для вежливости</li>
            <li>Помните: can всегда без to!</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}
