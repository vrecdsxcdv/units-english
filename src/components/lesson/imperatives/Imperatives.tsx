"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Imperatives({ step }: Props) {
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
      <UiSection title="Что такое повелительное наклонение?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Повелительное наклонение (Imperatives)</strong> — это форма
          глагола в английском языке, которая используется для дачи команд,
          просьб, инструкций, советов или запретов. Это самый простой способ
          сказать кому-то, что делать или чего не делать.
        </p>
      </UiSection>

      <UiSection title="Зачем нужно повелительное наклонение?">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Команды:</p>
            <p className="text-sm">Sit down! (Сядь!)</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Просьбы:</p>
            <p className="text-sm">
              Please, help me. (Пожалуйста, помоги мне.)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Инструкции:</p>
            <p className="text-sm">Open the book. (Открой книгу.)</p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Советы:</p>
            <p className="text-sm">Drink water. (Пей воду.)</p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Запреты:</p>
            <p className="text-sm">Don't run! (Не беги!)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Без подлежащего:</strong> В английском подлежащее (you)
              опускается. You sit down! → Sit down!
            </li>
            <li>
              <strong>Глагол в начальной форме:</strong> Без -s, -ed, -ing. Work
              → Work!
            </li>
            <li>
              <strong>Интонация:</strong> Команды произносятся с повышенной
              интонацией в конце.
            </li>
            <li>
              <strong>Произношение:</strong> Please [pliːz] (плиз), Don't
              [doʊnt] (доунт).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="border-l-4 border-indigo-400 pl-4 py-2">
          <p className="font-semibold mb-2">Русский: Ты открой дверь!</p>
          <p className="font-semibold text-indigo-600 mb-2">
            English: Open the door!
          </p>
          <p className="text-sm text-gray-700">
            Подлежащее you исчезает, глагол open в начальной форме.
          </p>
        </div>
      </UiSection>

      <UiSection title="📸 Визуал для запоминания команд">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto bg-orange-200 rounded-full flex items-center justify-center text-4xl mb-3">
                👨‍🏫
              </div>
              <p className="text-sm text-zinc-600 mb-3">Учитель даёт команду</p>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <p className="text-xl font-bold text-orange-900">Open</p>
                  <span className="text-2xl">→</span>
                  <p className="text-4xl">📖</p>
                </div>
                <p className="text-sm text-zinc-600 text-center">Open your books!</p>
                <p className="text-xs text-zinc-500 text-center mt-1">Откройте ваши книги!</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200">
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🧑‍🎓
              </div>
              <p className="text-sm text-zinc-600 mb-3">Вежливая просьба</p>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <p className="text-base text-green-700">Please,</p>
                  <p className="text-xl font-bold text-green-900">sit down</p>
                  <p className="text-4xl">💺</p>
                </div>
                <p className="text-sm text-zinc-600 text-center">Please, sit down!</p>
                <p className="text-xs text-zinc-500 text-center mt-1">Пожалуйста, присядьте!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
          <p className="text-center font-semibold text-indigo-900">
            💡 Императив = Глагол в начале + нет подлежащего | Добавьте <span className="text-green-600">Please</span> для вежливости
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> В русском команды часто с
              подлежащим (Ты сядь!) или с частицей -и (Сиди!). В английском
              никогда не ставится подлежащее.
            </li>
            <li>
              <strong>Вежливость:</strong> Английские команды звучат
              прямолинейно. Для вежливости добавляют Please (Please, sit down!).
              В русском вежливость через интонацию или «пожалуйста».
            </li>
            <li>
              <strong>Запреты:</strong> Русский «Не бегай!» = английский Don't
              run! (с do not).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Imperatives = команды без подлежащего +
            глагол в начальной форме.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Положительные команды ===== */
function Step2() {
  const positiveExercise: FillItem[] = [
    {
      left: "1.",
      right: "down! (сядь)",
      answers: ["Sit", "sit"],
      explanation: "Ответ: Sit — Глагол в начальной форме без you.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2.",
      right: "the door! (открой)",
      answers: ["Open", "open"],
      explanation: "Ответ: Open — Глагол open в начальной форме.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3.",
      right: "the book! (читай)",
      answers: ["Read", "read"],
      explanation: "Ответ: Read — Глагол read без изменений.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как строить положительные команды?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Глагол (в начальной форме) + дополнение.</strong>{" "}
          Подлежащее you всегда опускается.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Sit down.</p>
            <p className="text-sm text-gray-600 mb-2">Перевод: Сядь.</p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Sit (глагол) + down (дополнение). Без
              you.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Open the door.</p>
            <p className="text-sm text-gray-600 mb-2">Перевод: Открой дверь.</p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Open + the door.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Read the book.</p>
            <p className="text-sm text-gray-600 mb-2">Перевод: Читай книгу.</p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Read + the book.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Глагол всегда в начальной форме:</strong> Work → Work!, Go
              → Go!, Play → Play!
            </li>
            <li>
              <strong>Без изменений для множественного числа:</strong> Sit!,
              Sit! (одному или группе).
            </li>
            <li>
              <strong>Артикли обязательны:</strong> Open the door! (не Open
              door!).
            </li>
            <li>
              <strong>Предлоги сохраняются:</strong> Go to school!, Sit on the
              chair!.
            </li>
            <li>
              <strong>Наречия:</strong> Speak slowly!, Run quickly!.
            </li>
            <li>
              <strong>Произношение:</strong> Sit [sɪt] (сит), Open [ˈoʊpən]
              (оупэн), Read [riːd] (рид).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Школа:</strong> Open your books! (Откройте книги!)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> Close the window! (Закрой окно!)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Дорога:</strong> Stop the car! (Останови машину!)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ ставьте подлежащее:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: You sit down!</div>
                <div className="text-green-600">✅ Right: Sit down!</div>
              </div>
            </li>
            <li>
              НЕ добавляйте -s:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: He opens the door!</div>
                <div className="text-green-600">✅ Right: Open the door!</div>
              </div>
            </li>
            <li>
              НЕ используйте в вопросах:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Sit you down?</div>
                <div className="text-green-600">✅ Right: Do you sit down?</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Создайте команды"
        instruction="Напишите команду, используя глагол в начальной форме."
        items={positiveExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто ошибочно добавляют you (You open!), так как в
            русском «ты» подразумевается. В английском это звучит грубо.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Положительные команды = Глагол + дополнение
            (без you).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Отрицательные команды ===== */
function Step3() {
  const negativeExercise: FillItem[] = [
    {
      left: "1.",
      right: "run! (не бегай)",
      answers: ["Don't", "don't", "Don't run", "don't run"],
      explanation: "Ответ: Don't — Отрицательная команда начинается с Don't.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2.",
      right: "touch it! (не трогай это)",
      answers: ["Don't", "don't", "Don't touch", "don't touch"],
      explanation: "Ответ: Don't — Don't + глагол touch.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3.",
      right: "talk! (не разговаривай)",
      answers: ["Don't", "don't", "Don't talk", "don't talk"],
      explanation: "Ответ: Don't — Don't + глагол talk.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как строить отрицательные команды?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема:{" "}
          <strong>Don't + глагол (в начальной форме) + дополнение.</strong>
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Don't run!</p>
            <p className="text-sm text-gray-600 mb-2">Перевод: Не бегай!</p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Don't + run (глагол).
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Don't open the door!</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Не открывай дверь!
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Don't + open + the door.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Don't touch it!</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Не трогай это!
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Don't + touch + it.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все детали)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Don't = Do not:</strong> Сокращение обязательно в
              командах. Полная форма Do not run! редко используется.
            </li>
            <li>
              <strong>Глагол всегда в начальной форме:</strong> Don't work,
              Don't go, Don't play.
            </li>
            <li>
              <strong>Произношение Don't [doʊnt] (доунт):</strong> Ударение на
              первый слог.
            </li>
            <li>
              <strong>Интонация:</strong> Сильнее, чем в положительных командах.
            </li>
            <li>
              <strong>С наречиями:</strong> Don't speak loudly! (Не говори
              громко!)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Безопасность:</strong> Don't touch the fire! (Не трогай
              огонь!)
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Школа:</strong> Don't talk! (Не разговаривай!)
            </p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>
              <strong>Здоровье:</strong> Don't eat junk food! (Не ешь фастфуд!)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ используйте doesn't:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Doesn't run!</div>
                <div className="text-green-600">✅ Right: Don't run!</div>
              </div>
            </li>
            <li>
              НЕ добавляйте -s:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Don't runs!</div>
                <div className="text-green-600">✅ Right: Don't run!</div>
              </div>
            </li>
            <li>
              НЕ ставьте подлежащее:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: You don't run!</div>
                <div className="text-green-600">✅ Right: Don't run!</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Создайте отрицательные команды"
        instruction="Напишите отрицательную команду, используя Don't."
        items={negativeExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Русский:</strong> Не бегай! (частица «не» + глагол).
            </li>
            <li>
              <strong>Английский:</strong> Don't run! (do not + глагол).
              Русскоязычные часто забывают don't и говорят Not run!
              (неправильно).
            </li>
            <li>
              <strong>Вежливость:</strong> Please, don't smoke! (Пожалуйста, не
              кури!)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Отрицательные команды = Don't + глагол.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Вежливые команды ===== */
function Step4() {
  const politeExercise: FillItem[] = [
    {
      left: "1. Sit! → Вежливо:",
      right: "",
      answers: ["Please, sit", "Please, sit!", "Please sit", "Please sit!"],
      explanation: "Ответ: Please, sit! — Добавляем Please для вежливости.",
      ariaLabel: "Упражнение 1",
      wide: true,
    },
    {
      left: "2. Don't run! → Вежливо:",
      right: "",
      answers: [
        "Please, don't run",
        "Please, don't run!",
        "Please don't run",
        "Please don't run!",
      ],
      explanation: "Ответ: Please, don't run! — Please делает запрет вежливым.",
      ariaLabel: "Упражнение 2",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Как делать команды вежливыми?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Добавьте <strong>Please</strong> в начало или конец:
        </p>

        <div className="space-y-3">
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">В начале:</p>
            <p className="text-sm">Please, sit down.</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">В конце:</p>
            <p className="text-sm">Sit down, please.</p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">С отрицанием:</p>
            <p className="text-sm">Please, don't run. / Don't run, please.</p>
          </div>
        </div>

        <div className="bg-amber-50/50 rounded-lg p-4 mt-4">
          <p className="text-sm">
            <strong>Произношение:</strong> Please [pliːz] (плиз) — Мягкая,
            вежливая интонация.
          </p>
        </div>
      </UiSection>

      <UiSection title="Примеры вежливых команд">
        <div className="space-y-2">
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>Please, open the window. (Пожалуйста, открой окно.)</p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>Don't touch it, please. (Не трогай это, пожалуйста.)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Вопросительные команды (Requests)">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема: <strong>Will/Would/Can + подлежащее + глагол?</strong>{" "}
          (вежливые просьбы)
        </p>

        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Will you open the door?</p>
            <p className="text-sm text-gray-600">
              Перевод: Откроешь дверь? (нейтрально)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Can you help me?</p>
            <p className="text-sm text-gray-600">
              Перевод: Можешь помочь? (неформально)
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Would you sit down?</p>
            <p className="text-sm text-gray-600">
              Перевод: Не могли бы вы сесть? (очень вежливо)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила вежливости">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Will</strong> — нейтрально.
            </li>
            <li>
              <strong>Can</strong> — неформально.
            </li>
            <li>
              <strong>Would</strong> — очень вежливо.
            </li>
            <li>
              <strong>Короткие ответы:</strong> Yes, I will. / Sure! / Of
              course!
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Ресторан:</strong> Can you bring the menu, please?
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Школа:</strong> Will you help me, please?
            </p>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Сделайте команды вежливыми"
        instruction="Преобразуйте команды в вежливые, добавив Please."
        items={politeExercise}
      />

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <p className="text-sm mb-2">
            <strong>НЕ путайте:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Can you swim? (Умеешь плавать?) ≠ Can you help? (Поможешь?)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто слишком прямолинейны (Дай книгу!). В английском
            всегда добавляют please для вежливости, особенно с незнакомцами.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Использование в ситуациях ===== */
function Step5() {
  return (
    <>
      <UiSection title="Где используются команды?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Повелительное наклонение используется в разных жизненных ситуациях:
        </p>
      </UiSection>

      <UiSection title="1. Школа/Учеба">
        <div className="bg-indigo-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Open your books! (Откройте книги!)</li>
            <li>Don't talk! (Не разговаривайте!)</li>
            <li>Please, read page 10. (Пожалуйста, прочитайте страницу 10.)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="2. Дом/Семья">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Wash your hands! (Вымой руки!)</li>
            <li>Don't play with fire! (Не играй с огнём!)</li>
            <li>Please, help me cook. (Помоги мне готовить.)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="3. Работа/Офис">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Turn on the computer! (Включи компьютер!)</li>
            <li>Don't be late! (Не опаздывай!)</li>
            <li>Please, send the email. (Отправь email.)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="4. Дорога/Транспорт">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Stop the car! (Останови машину!)</li>
            <li>Don't cross here! (Не переходи здесь!)</li>
            <li>Please, wait for the green light. (Подожди зелёный.)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="5. Здоровье/Безопасность">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Drink water! (Пей воду!)</li>
            <li>Don't smoke! (Не кури!)</li>
            <li>Wash your hands! (Вымой руки!)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="6. Ресторан/Магазин">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Please, give me the menu. (Дайте меню.)</li>
            <li>Don't touch the products! (Не трогай товары!)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Правила контекста">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Короткие команды для срочности:</strong> Stop!
            </li>
            <li>
              <strong>Длинные с please для вежливости:</strong> Please, give me
              the bill.
            </li>
            <li>
              <strong>Интонация:</strong> ↑ для команд, → для просьб.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            В английском строгие правила безопасности (Don't run near the
            pool!), в русском больше доверия (Беги, только осторожно!).
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
      <UiSection title="Сравнение с Present Simple">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm">
              I open the door every day. (Я открываю дверь каждый день —
              привычка.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Imperative:</p>
            <p className="text-sm">
              Open the door! (Открой дверь! — команда сейчас.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Сравнение с to be">
        <div className="space-y-3">
          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">To be:</p>
            <p className="text-sm">You are late. (Ты опоздал.)</p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Imperative:</p>
            <p className="text-sm">Don't be late! (Не опаздывай!)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Сравнение с have got">
        <div className="space-y-3">
          <div className="bg-purple-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Have got:</p>
            <p className="text-sm">I have got a pen. (У меня ручка.)</p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Imperative:</p>
            <p className="text-sm">Give me a pen! (Дай ручку!)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Отличия от русского языка (все мелочи)">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Подлежащее:</strong> Русский «Ты сядь!» → Английский Sit!
              (без «ты»).
            </li>
            <li>
              <strong>Окончания:</strong> Русский «Читай!», «Читает!» →
              Английский Read! (всегда одна форма).
            </li>
            <li>
              <strong>Отрицание:</strong> Русский «Не читай!» → Английский Don't
              read! (do not).
            </li>
            <li>
              <strong>Вежливость:</strong> Русский интонацией → Английский
              please.
            </li>
            <li>
              <strong>Множественное:</strong> Русский «Сидите!» → Английский
              Sit! (одна форма).
            </li>
            <li>
              <strong>Вопросы:</strong> Русский «Почитаешь?» → Английский Will
              you read?
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Добавляют you:
              <div className="ml-4">
                <div className="text-red-600">❌ You sit!</div>
                <div className="text-green-600">✅ Sit!</div>
              </div>
            </li>
            <li>
              Забывают don't:
              <div className="ml-4">
                <div className="text-red-600">❌ Not run!</div>
                <div className="text-green-600">✅ Don't run!</div>
              </div>
            </li>
            <li>
              Добавляют -s:
              <div className="ml-4">
                <div className="text-red-600">❌ Opens the door!</div>
                <div className="text-green-600">✅ Open the door!</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Упражнения ===== */
function Step7() {
  const exercise1: FillItem[] = [
    {
      left: "1.",
      right: "the book!",
      answers: ["Open", "open"],
      explanation: "Ответ: Open — Положительная команда.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2.",
      right: "touch the fire!",
      answers: ["Don't", "don't"],
      explanation: "Ответ: Don't — Отрицательная команда.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3.",
      right: ", help me.",
      answers: ["Please", "please"],
      explanation: "Ответ: Please — Вежливость.",
      ariaLabel: "Вопрос 3",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1.",
      right: "down! (Сядь!)",
      answers: ["Sit", "sit"],
      explanation: "Ответ: Sit",
      ariaLabel: "Заполните 1",
    },
    {
      left: "2.",
      right: "the window! (Не открывай окно!)",
      answers: ["Don't open", "don't open"],
      explanation: "Ответ: Don't open",
      ariaLabel: "Заполните 2",
      wide: true,
    },
    {
      left: "3.",
      right: ", give me the pen. (Пожалуйста, дай ручку.)",
      answers: ["Please", "please"],
      explanation: "Ответ: Please",
      ariaLabel: "Заполните 3",
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Не говори! →",
      right: "",
      answers: ["Don't talk", "Don't talk!", "don't talk", "don't talk!"],
      explanation: "Ответ: Don't talk!",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Открой дверь, пожалуйста. →",
      right: "",
      answers: [
        "Please, open the door",
        "Please, open the door!",
        "Open the door, please",
        "Open the door, please!",
      ],
      explanation: "Ответ: Please, open the door!",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Слушай учителя! →",
      right: "",
      answers: [
        "Listen to the teacher",
        "Listen to the teacher!",
        "listen to the teacher",
        "listen to the teacher!",
      ],
      explanation: "Ответ: Listen to the teacher!",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. ❌ You open the door! →",
      right: "",
      answers: [
        "Open the door",
        "Open the door!",
        "open the door",
        "open the door!",
      ],
      explanation: "Исправление: Open the door!",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ Doesn't touch it! →",
      right: "",
      answers: [
        "Don't touch it",
        "Don't touch it!",
        "don't touch it",
        "don't touch it!",
      ],
      explanation: "Исправление: Don't touch it!",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Please you help me! →",
      right: "",
      answers: [
        "Please, help me",
        "Please, help me!",
        "Please help me",
        "Please help me!",
      ],
      explanation: "Исправление: Please, help me!",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Финальные упражнения">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания по теме "Повелительное наклонение: Команды"!
          Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильную форму"
        instruction="Вставьте команду: глагол (Open), Don't или Please в зависимости от типа команды."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски"
        instruction="Вставьте команду согласно переводу в скобках (например: Sit, Don't open, Please)."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Переведите"
        instruction="Переведите команды с русского на английский (используйте глагол или Don't + глагол)."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Исправьте ошибки"
        instruction="Найдите ошибки в командах и напишите правильный вариант целиком."
        items={exercise4}
      />

      <UiSection title="🎊 Поздравляем!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили тему "Повелительное наклонение: Команды"! Теперь вы
          знаете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Как давать положительные команды (Sit down!)</li>
          <li>Как давать отрицательные команды (Don't run!)</li>
          <li>Как делать команды вежливыми (Please, help me!)</li>
          <li>Как использовать команды в разных ситуациях</li>
          <li>Отличия от русского языка</li>
          <li>Типичные ошибки русскоязычных</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Положительные:</strong> Глагол + дополнение (Sit down!)
            </li>
            <li>
              <strong>Отрицательные:</strong> Don't + глагол (Don't run!)
            </li>
            <li>
              <strong>Вежливые:</strong> Please + команда (Please, sit!)
            </li>
            <li>
              <strong>Без подлежащего:</strong> Никогда you!
            </li>
            <li>
              <strong>Отличия от русского:</strong> Без «ты», don't вместо «не»,
              please для вежливости
            </li>
            <li>
              <strong>Произношение:</strong> Don't [doʊnt], Please [pliːz]
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Практикуйте интонацию: ↑ для команд, мягко для просьб</li>
            <li>Всегда используйте please с незнакомцами</li>
            <li>
              Помните: команды без подлежащего — это главная особенность
              английского
            </li>
            <li>
              Составьте список команд для повседневной жизни (дом, школа,
              работа)
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




