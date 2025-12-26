"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ZeroConditional({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    default:
      return <Step1 />;
  }
}

/* ===== СТРАНИЦА 1: Введение и формула ===== */
function Step1() {
  return (
    <>
      <UiSection title="Zero Conditional: Нулевой тип условных предложений">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-lg font-semibold text-zinc-900 mb-4">
            Что такое Zero Conditional?
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Zero Conditional (нулевой тип условных предложений) используется для
            описания <strong>общих истин</strong>,{" "}
            <strong>научных фактов</strong>, <strong>привычек</strong> и
            ситуаций, которые <strong>всегда правдивы</strong>.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Это не предположения о будущем, а утверждения о том, что происходит
            ВСЕГДА, когда выполняется определённое условие.
          </p>
        </div>
      </UiSection>

      <UiSection title="Формула Zero Conditional">
        <div className="border border-blue-200 rounded-lg p-6 mb-6">
          <div className="bg-blue-50 rounded-lg p-6 mb-4">
            <p className="text-center text-2xl font-mono font-bold text-blue-900 mb-3">
              IF + Present Simple, Present Simple
            </p>
            <p className="text-center text-sm text-zinc-600">
              Если что-то происходит → что-то ВСЕГДА происходит
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-3">Структура:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-700 mb-2">
                    Условие (IF-clause):
                  </p>
                  <p className="font-mono text-sm bg-zinc-50 rounded p-2">
                    IF + подлежащее + V1 (Present Simple)
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">
                    If you heat water...
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-700 mb-2">
                    Результат (Main clause):
                  </p>
                  <p className="font-mono text-sm bg-zinc-50 rounded p-2">
                    подлежащее + V1 (Present Simple)
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">
                    ...it boils.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-100 rounded-lg p-5">
              <h4 className="font-bold text-zinc-900 mb-3">
                ⚠️ Важная особенность:
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                В Zero Conditional IF можно заменить на <strong>WHEN</strong>,
                потому что мы говорим о фактах, которые происходят всегда.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong>If</strong> you heat water, it boils.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (всегда происходит)
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm">
                    <strong>When</strong> you heat water, it boils.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (то же самое значение)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры Zero Conditional">
        <div className="space-y-4">
          <div className="border border-green-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🔬</span>
              </div>
              <h4 className="font-bold text-green-900">Научные факты</h4>
            </div>
            <div className="space-y-2">
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  If you heat ice, it melts.
                </p>
                <p className="text-xs text-zinc-600">
                  Если нагреть лёд, он тает (всегда).
                </p>
              </div>
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  Water boils if you heat it to 100 degrees Celsius.
                </p>
                <p className="text-xs text-zinc-600">
                  Вода кипит, если нагреть её до 100 градусов (научный факт).
                </p>
              </div>
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  If plants don&apos;t get water, they die.
                </p>
                <p className="text-xs text-zinc-600">
                  Если растения не получают воду, они умирают.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-purple-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🌍</span>
              </div>
              <h4 className="font-bold text-purple-900">Общие истины</h4>
            </div>
            <div className="space-y-2">
              <div className="bg-purple-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  If you don&apos;t eat, you get hungry.
                </p>
                <p className="text-xs text-zinc-600">
                  Если не ешь, становишься голодным (общая истина).
                </p>
              </div>
              <div className="bg-purple-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  People get tired if they don&apos;t sleep.
                </p>
                <p className="text-xs text-zinc-600">
                  Люди устают, если не спят.
                </p>
              </div>
              <div className="bg-purple-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  If the sun sets, it gets dark.
                </p>
                <p className="text-xs text-zinc-600">
                  Если солнце садится, темнеет.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-orange-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🔁</span>
              </div>
              <h4 className="font-bold text-orange-900">
                Привычки и повторяющиеся действия
              </h4>
            </div>
            <div className="space-y-2">
              <div className="bg-orange-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  If I wake up late, I miss the bus.
                </p>
                <p className="text-xs text-zinc-600">
                  Если я просыпаюсь поздно, я опаздываю на автобус (это всегда
                  так).
                </p>
              </div>
              <div className="bg-orange-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  When she finishes work, she goes to the gym.
                </p>
                <p className="text-xs text-zinc-600">
                  Когда она заканчивает работу, она идёт в спортзал (привычка).
                </p>
              </div>
              <div className="bg-orange-50 rounded p-3">
                <p className="text-sm font-semibold mb-1">
                  If it rains, we stay at home.
                </p>
                <p className="text-xs text-zinc-600">
                  Если идёт дождь, мы остаёмся дома (наша обычная реакция).
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Порядок частей предложения">
        <div className="bg-zinc-100 rounded-lg p-6">
          <p className="text-sm text-zinc-700 mb-4">
            Части предложения можно менять местами. Правило с запятой:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">
                IF в начале → запятая
              </p>
              <p className="text-sm mb-2">
                <strong>If you press the button,</strong> the light turns on.
              </p>
              <p className="text-xs text-zinc-600">
                Запятая после условия
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-green-900 mb-2">
                IF в середине → без запятой
              </p>
              <p className="text-sm mb-2">
                The light turns on <strong>if you press the button</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Запятая НЕ нужна
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Запомните:</span>
        </h4>
        <ul className="space-y-2 text-sm text-zinc-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>
              Zero Conditional = <strong>Present Simple + Present Simple</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>
              Используется для <strong>фактов и привычек</strong>, которые
              всегда правдивы
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>
              IF можно заменить на <strong>WHEN</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>
              Это <strong>НЕ</strong> о будущем, а о том, что происходит всегда
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Когда использовать и отличия ===== */
function Step2() {
  return (
    <>
      <UiSection title="Когда использовать Zero Conditional">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Zero Conditional используется в конкретных ситуациях. Давайте
            разберём каждую подробно.
          </p>
        </div>
      </UiSection>

      <div className="space-y-5">
        <div className="border border-zinc-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-blue-700">
              1
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-zinc-900 mb-3">
                Научные факты и законы природы
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Используем, когда говорим о том, что можно проверить и что
                всегда правда.
              </p>
              <div className="space-y-2">
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-sm">
                    If you mix blue and yellow, you get green.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Смешиваешь синий и жёлтый → получается зелёный (физика).
                  </p>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-sm">
                    If the temperature drops below zero, water freezes.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Температура ниже нуля → вода замерзает (всегда).
                  </p>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-sm">
                    Metal expands when you heat it.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Металл расширяется при нагревании (закон физики).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-zinc-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-green-700">
              2
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-zinc-900 mb-3">
                Общеизвестные истины
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                То, что все знают и что является правдой для большинства людей.
              </p>
              <div className="space-y-2">
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm">
                    If you exercise regularly, you feel healthier.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Занимаешься спортом регулярно → чувствуешь себя здоровее.
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm">
                    People feel happy when they spend time with friends.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Люди счастливы, когда проводят время с друзьями.
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm">
                    If you don&apos;t practice, you don&apos;t improve.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Не тренируешься → не улучшаешься (общая истина).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-zinc-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-purple-700">
              3
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-zinc-900 mb-3">
                Привычки и регулярные действия
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Что вы делаете всегда в определённой ситуации.
              </p>
              <div className="space-y-2">
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-sm">
                    If I have free time, I read a book.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Есть свободное время → читаю книгу (моя привычка).
                  </p>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-sm">
                    When he gets home, he always takes a shower.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Приходит домой → всегда принимает душ (его рутина).
                  </p>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-sm">
                    If she is nervous, she bites her nails.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Нервничает → грызёт ногти (её привычка).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-zinc-200 rounded-lg p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center flex-shrink-0 font-bold text-orange-700">
              4
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-zinc-900 mb-3">
                Инструкции и правила
              </h4>
              <p className="text-sm text-zinc-700 mb-3">
                Описание того, как что-то работает или что нужно делать.
              </p>
              <div className="space-y-2">
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm">
                    If you press this button, the machine starts.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Нажимаешь кнопку → машина запускается (инструкция).
                  </p>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm">
                    When the light is red, you stop.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Красный свет → останавливаешься (правило).
                  </p>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-sm">
                    If you want to save a file, you click &quot;Save&quot;.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Хочешь сохранить файл → нажимаешь &quot;Save&quot;
                    (инструкция).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UiSection title="Zero Conditional vs First Conditional">
        <div className="bg-gradient-to-br from-zinc-50 to-amber-50 rounded-lg p-6 border-2 border-amber-200">
          <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            <span>Важное различие!</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3">Zero Conditional</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-600 mb-1">
                    Формула:
                  </p>
                  <p className="font-mono text-sm text-blue-700">
                    IF + Present Simple, Present Simple
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-600 mb-1">
                    Значение:
                  </p>
                  <p className="text-sm">Всегда правда / Факты / Привычки</p>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    If you heat ice, it melts.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (это ВСЕГДА происходит — научный факт)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-green-200">
              <h4 className="font-bold text-green-900 mb-3">
                First Conditional
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-600 mb-1">
                    Формула:
                  </p>
                  <p className="font-mono text-sm text-green-700">
                    IF + Present Simple, WILL + V1
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-600 mb-1">
                    Значение:
                  </p>
                  <p className="text-sm">
                    Возможно в будущем / Предсказания
                  </p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm font-semibold mb-1">
                    If it rains tomorrow, I will stay home.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (это МОЖЕТ произойти в будущем — предположение)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-3">
              Сравните эти примеры:
            </h4>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  <strong className="text-blue-700">Zero:</strong> If it rains,
                  the streets get wet.
                </p>
                <p className="text-xs text-zinc-600">
                  (всегда так — общая истина)
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm mb-1">
                  <strong className="text-green-700">First:</strong> If it rains
                  tomorrow, I will take an umbrella.
                </p>
                <p className="text-xs text-zinc-600">
                  (возможно завтра — будущее)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-zinc-100 rounded-lg p-6">
        <h4 className="font-bold text-zinc-900 mb-4">
          Как выбрать правильный тип?
        </h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
              ?
            </div>
            <div>
              <p className="font-semibold mb-1">
                Это всегда правда? Это факт или привычка?
              </p>
              <p className="text-zinc-600">
                → <strong className="text-blue-700">Zero Conditional</strong>{" "}
                (Present Simple + Present Simple)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
              ?
            </div>
            <div>
              <p className="font-semibold mb-1">
                Это о будущем? Это возможно, но не точно?
              </p>
              <p className="text-zinc-600">
                → <strong className="text-green-700">First Conditional</strong>{" "}
                (Present Simple + WILL)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: Упражнения ===== */
function Step3() {
  const exercise1: FillItem[] = [
    {
      left: "1. If you",
      right: "water to 100°C, it",
      right2: ". (heat, boil)",
      answers: ["heat", "boils"],
      explanation: "Научный факт → Present Simple в обеих частях",
    },
    {
      left: "2. Plants",
      right: "if they",
      right2: "enough sunlight. (die, not get)",
      answers: ["die", "don't get", "do not get"],
      explanation: "Общая истина → Present Simple",
    },
    {
      left: "3. When I",
      right: "tired, I",
      right2: "to bed early. (feel, go)",
      answers: ["feel", "go"],
      explanation: "Привычка → Present Simple",
    },
    {
      left: "4. If you",
      right: "the button, the door",
      right2: ". (press, open)",
      answers: ["press", "opens"],
      explanation: "Инструкция → Present Simple",
    },
    {
      left: "5. Ice",
      right: "when the temperature",
      right2: "above zero. (melt, rise)",
      answers: ["melts", "rises"],
      explanation: "Научный факт → Present Simple",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "6. If she",
      right: "coffee at night, she",
      right2: "sleep. (drink, not can)",
      answers: ["drinks", "can't", "cannot", "can not"],
      explanation: "Её привычная реакция → Present Simple",
    },
    {
      left: "7. When you",
      right: "salt in water, it",
      right2: ". (put, dissolve)",
      answers: ["put", "dissolves"],
      explanation: "Научный факт → Present Simple",
    },
    {
      left: "8. If I",
      right: "breakfast, I",
      right2: "hungry by lunch. (not eat, get)",
      answers: ["don't eat", "do not eat", "get"],
      explanation: "Общая истина → Present Simple",
    },
    {
      left: "9. The alarm",
      right: "if someone",
      right2: "the door. (ring, open)",
      answers: ["rings", "opens"],
      explanation: "Как работает система → Present Simple",
    },
    {
      left: "10. When he",
      right: "stressed, he",
      right2: "a walk. (be, take)",
      answers: ["is", "takes"],
      explanation: "Его привычка → Present Simple",
    },
  ];

  return (
    <>
      <UiSection title="Практика: Zero Conditional">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-zinc-700 leading-relaxed">
            Выполните упражнения, чтобы закрепить использование Zero
            Conditional. Помните: оба глагола в <strong>Present Simple</strong>!
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Основы"
        instruction="Поставьте глаголы в правильную форму (Present Simple)."
        items={exercise1}
      />

      <CheckableExercise
        title="Упражнение 2: Продвинутый уровень"
        instruction="Продолжаем практиковаться. Вставьте глаголы в Present Simple."
        items={exercise2}
      />

      <UiSection title="Выберите правильный тип условного предложения">
        <div className="bg-zinc-100 rounded-lg p-6">
          <p className="text-sm text-zinc-700 mb-4">
            Определите, какой тип условного предложения использовать в каждой
            ситуации:
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">
                1. If you _____ (study) hard, you _____ (pass) the exam.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                (говорим о возможности в будущем)
              </p>
              <p className="text-sm text-green-700">
                ✓ If you <strong>study</strong> hard, you{" "}
                <strong>will pass</strong> the exam.
              </p>
              <p className="text-xs text-zinc-600">
                → First Conditional (будущее)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">
                2. If you _____ (study) regularly, you _____ (remember) more.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                (говорим об общей истине)
              </p>
              <p className="text-sm text-blue-700">
                ✓ If you <strong>study</strong> regularly, you{" "}
                <strong>remember</strong> more.
              </p>
              <p className="text-xs text-zinc-600">
                → Zero Conditional (всегда так)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">
                3. If it _____ (rain) tomorrow, we _____ (cancel) the picnic.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                (говорим о будущем)
              </p>
              <p className="text-sm text-green-700">
                ✓ If it <strong>rains</strong> tomorrow, we{" "}
                <strong>will cancel</strong> the picnic.
              </p>
              <p className="text-xs text-zinc-600">
                → First Conditional (будущее)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">
                4. If you _____ (mix) red and white, you _____ (get) pink.
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                (говорим о научном факте)
              </p>
              <p className="text-sm text-blue-700">
                ✓ If you <strong>mix</strong> red and white, you{" "}
                <strong>get</strong> pink.
              </p>
              <p className="text-xs text-zinc-600">
                → Zero Conditional (всегда так)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">
                5. If she _____ (call) me, I _____ (answer).
              </p>
              <p className="text-xs text-zinc-600 mb-2">
                (говорим о будущей возможности)
              </p>
              <p className="text-sm text-green-700">
                ✓ If she <strong>calls</strong> me, I{" "}
                <strong>will answer</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                → First Conditional (будущее)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-bold text-amber-900 mb-3">💡 Совет:</h4>
        <ul className="space-y-2 text-sm text-zinc-700">
          <li>
            • Если говорите о факте, который <strong>всегда правда</strong> →
            Zero Conditional
          </li>
          <li>
            • Если говорите о <strong>будущей возможности</strong> → First
            Conditional
          </li>
          <li>
            • В Zero Conditional оба глагола в <strong>Present Simple</strong>
          </li>
          <li>
            • IF можно заменить на WHEN в Zero Conditional
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Итоговый тест ===== */
function Step4() {
  const finalTest: FillItem[] = [
    {
      left: "1. If you",
      right: "metal, it",
      right2: ". (heat, expand)",
      answers: ["heat", "expands"],
      explanation: "Научный факт → Zero Conditional",
    },
    {
      left: "2. If it",
      right: "tomorrow, I",
      right2: "my umbrella. (rain, take)",
      answers: ["rains", "will take", "'ll take"],
      explanation: "Будущее → First Conditional",
    },
    {
      left: "3. When the sun",
      right: ", it",
      right2: "warm. (shine, get)",
      answers: ["shines", "gets"],
      explanation: "Общая истина → Zero Conditional",
    },
    {
      left: "4. If she",
      right: "hard, she",
      right2: "her goals. (work, achieve)",
      answers: ["works", "will achieve", "'ll achieve"],
      explanation: "Будущая возможность → First Conditional",
    },
    {
      left: "5. If you",
      right: "water, you",
      right2: "thirsty. (not drink, get)",
      answers: ["don't drink", "do not drink", "get"],
      explanation: "Общая истина → Zero Conditional",
    },
    {
      left: "6. Plants",
      right: "well if they",
      right2: "good soil. (grow, have)",
      answers: ["grow", "have"],
      explanation: "Общая истина → Zero Conditional",
    },
    {
      left: "7. If I",
      right: "time tomorrow, I",
      right2: "you. (have, call)",
      answers: ["have", "will call", "'ll call"],
      explanation: "Будущая возможность → First Conditional",
    },
    {
      left: "8. When you",
      right: "this switch, the fan",
      right2: ". (turn, start)",
      answers: ["turn", "starts"],
      explanation: "Инструкция → Zero Conditional",
    },
    {
      left: "9. If it",
      right: "cold, people",
      right2: "warm clothes. (be, wear)",
      answers: ["is", "wear"],
      explanation: "Общая истина → Zero Conditional",
    },
    {
      left: "10. If you",
      right: "me, I",
      right2: "happy. (help, be)",
      answers: ["help", "will be", "'ll be"],
      explanation: "Будущая ситуация → First Conditional",
    },
  ];

  return (
    <>
      <UiSection title="Итоговый тест: Zero Conditional">
        <div className="bg-gradient-to-br from-blue-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">
                Проверьте свои знания!
              </h3>
              <p className="text-zinc-700 leading-relaxed">
                Завершите тест, чтобы убедиться, что вы понимаете разницу между
                Zero Conditional и First Conditional.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Финальный тест"
        instruction="Вставьте глаголы в правильной форме. Определите, какой тип условного предложения нужен."
        items={finalTest}
      />

      <UiSection title="Итоговая таблица: Zero Conditional">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100 to-zinc-100">
                <th className="border border-zinc-300 p-3 text-left font-bold">
                  Аспект
                </th>
                <th className="border border-zinc-300 p-3 text-left font-bold">
                  Zero Conditional
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Формула
                </td>
                <td className="border border-zinc-300 p-3">
                  <span className="font-mono text-blue-700">
                    IF + Present Simple, Present Simple
                  </span>
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Когда использовать
                </td>
                <td className="border border-zinc-300 p-3">
                  • Научные факты и законы природы
                  <br />
                  • Общеизвестные истины
                  <br />
                  • Привычки и регулярные действия
                  <br />• Инструкции и правила
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Ключевая идея
                </td>
                <td className="border border-zinc-300 p-3">
                  То, что <strong>всегда правда</strong> / происходит всегда
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  IF = WHEN?
                </td>
                <td className="border border-zinc-300 p-3">
                  ✓ Да, можно заменить IF на WHEN
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Примеры
                </td>
                <td className="border border-zinc-300 p-3">
                  If you heat water, it boils.
                  <br />
                  <span className="text-xs text-zinc-600">
                    (научный факт)
                  </span>
                  <br />
                  <br />
                  If I&apos;m tired, I go to bed.
                  <br />
                  <span className="text-xs text-zinc-600">(привычка)</span>
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold">
                  Отличие от First Conditional
                </td>
                <td className="border border-zinc-300 p-3">
                  Zero = <strong>всегда так</strong> (факт)
                  <br />
                  First = <strong>возможно в будущем</strong> (WILL)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <div className="mt-6 space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Ключевые выводы:</span>
          </h4>
          <ul className="space-y-2 text-sm text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Zero Conditional описывает то, что{" "}
                <strong>всегда правда</strong> — факты, общие истины, привычки.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Формула: <strong>IF + Present Simple, Present Simple</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                IF можно заменить на <strong>WHEN</strong>, потому что
                результат всегда одинаковый.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Это <strong>НЕ</strong> о будущем — это о том, что происходит
                <strong> всегда</strong>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Отличие от First Conditional: Zero = факт (всегда так), First =
                возможность (может быть).
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Отличная работа!</span>
          </h4>
          <p className="text-sm text-zinc-700">
            Теперь вы знаете, как использовать Zero Conditional для описания
            фактов, общих истин и привычек. Продолжайте практиковаться, обращая
            внимание на то, говорите ли вы о чём-то, что всегда правда (Zero
            Conditional), или о будущей возможности (First Conditional)!
          </p>
        </div>
      </div>
    </>
  );
}


