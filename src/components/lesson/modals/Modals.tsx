"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Modals({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение в модальные глаголы ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое модальные глаголы?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Модальные глаголы — это специальные помощники, которые показывают{" "}
          <strong>обязанность, необходимость, совет или возможность</strong>.
          Они <strong>не меняются</strong> по лицам и всегда идут с{" "}
          <strong>основным глаголом в начальной форме</strong> (без <em>to</em>
          ).
        </p>

        <div className="bg-blue-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Вы уже знаете:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Can / Can't</strong> — возможность / невозможность (
              <em>I can swim.</em>)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Сегодня изучаем">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              1. Must / Mustn't
            </h4>
            <p className="text-sm text-zinc-700">Обязанность / запрет</p>
            <p className="text-sm text-indigo-700 mt-2 italic">
              Пример: You must wear a helmet. (Ты обязан надеть шлем.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">2. Have to</h4>
            <p className="text-sm text-zinc-700">Необходимость (внешняя)</p>
            <p className="text-sm text-green-700 mt-2 italic">
              Пример: I have to go to school. (Мне нужно в школу.)
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">3. Should</h4>
            <p className="text-sm text-zinc-700">Совет</p>
            <p className="text-sm text-amber-700 mt-2 italic">
              Пример: You should drink water. (Тебе следует пить воду.)
            </p>
          </div>

          <div className="bg-purple-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">4. Could</h4>
            <p className="text-sm text-zinc-700">
              Мягкая возможность / вежливая просьба
            </p>
            <p className="text-sm text-purple-700 mt-2 italic">
              Пример: Could you help me? (Не могли бы вы помочь?)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем это нужно?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Говорить: <em>You must wear a helmet.</em> (Ты обязан надеть шлем.)
          </li>
          <li>
            Давать советы: <em>You should drink water.</em> (Тебе следует пить
            воду.)
          </li>
          <li>
            Просить вежливо: <em>Could you help me?</em> (Не могли бы вы
            помочь?)
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Форма:</strong> Подлежащее + модальный глагол + глагол
              (без to)
            </li>
            <li>
              <strong>Отрицания:</strong> don't have to, mustn't, shouldn't
            </li>
            <li>
              <strong>Вопросы:</strong> Do you have to…? / Must I…? / Should
              we…? / Could you…?
            </li>
            <li>
              <strong>Произношение:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Must [mʌst] → Mustn't [ˈmʌsnt]</li>
                <li>Have to [hæf tu] → Has to [hæz tu]</li>
                <li>Should [ʃʊd] → Shouldn't [ˈʃʊdnt]</li>
                <li>Could [kʊd]</li>
              </ul>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">I must go.</p>
            <p className="text-sm text-gray-600">Я обязан идти.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">I don't have to go.</p>
            <p className="text-sm text-gray-600">Мне не нужно идти.</p>
          </div>

          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <p className="font-semibold mb-1">You should go.</p>
            <p className="text-sm text-gray-600">Тебе следует пойти.</p>
          </div>

          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold mb-1">Could you go?</p>
            <p className="text-sm text-gray-600">Не могли бы вы пойти?</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700 mb-3">
            Русский «надо» может быть и <em>must</em>, и <em>have to</em>, и{" "}
            <em>should</em>. Английский различает:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Must</strong> — внутренняя обязанность (я сам решил)
            </li>
            <li>
              <strong>Have to</strong> — внешняя необходимость (правила, закон)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="📸 Визуализация модальных глаголов">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-red-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🪖
              </div>
              <p className="text-2xl font-bold text-red-900 mb-2">MUST</p>
              <p className="text-sm text-zinc-600 mb-3">Обязанность / Правило</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">You <span className="text-red-600">must</span> wear a helmet</p>
                <p className="text-xs text-zinc-600 mt-1">Ты обязан надеть шлем</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center text-4xl mb-3">
                ⏰
              </div>
              <p className="text-2xl font-bold text-blue-900 mb-2">HAVE TO</p>
              <p className="text-sm text-zinc-600 mb-3">Необходимость</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">I <span className="text-blue-600">have to</span> go to school</p>
                <p className="text-xs text-zinc-600 mt-1">Мне нужно в школу</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-200 rounded-full flex items-center justify-center text-4xl mb-3">
                👨‍⚕️
              </div>
              <p className="text-2xl font-bold text-amber-900 mb-2">SHOULD</p>
              <p className="text-sm text-zinc-600 mb-3">Совет / Рекомендация</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">You <span className="text-amber-600">should</span> see a doctor</p>
                <p className="text-xs text-zinc-600 mt-1">Тебе следует к врачу</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-purple-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🚪
              </div>
              <p className="text-2xl font-bold text-purple-900 mb-2">COULD</p>
              <p className="text-sm text-zinc-600 mb-3">Вежливая просьба</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold"><span className="text-purple-600">Could</span> you open the window?</p>
                <p className="text-xs text-zinc-600 mt-1">Не могли бы вы открыть окно?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
          <p className="text-center font-semibold text-indigo-900">
            💡 Каждый модальный глагол имеет свою силу: от строгой обязанности (must) до мягкого совета (should)
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Лексика для модальных глаголов ===== */
function Step2() {
  return (
    <>
      <UiSection title="Какие слова нужно знать?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для работы с модальными глаголами важно выучить{" "}
          <strong>20 ключевых слов/фраз</strong> с переводом и произношением.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Глаголы действия:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Wear</strong> [weər] — Носить
              </p>
              <p>
                <strong>Study</strong> [ˈstʌdi] — Учиться
              </p>
              <p>
                <strong>Clean</strong> [kliːn] — Убирать
              </p>
              <p>
                <strong>Drink</strong> [drɪŋk] — Пить
              </p>
              <p>
                <strong>Help</strong> [hɛlp] — Помогать
              </p>
              <p>
                <strong>Open</strong> [ˈoʊpən] — Открывать
              </p>
              <p>
                <strong>Go</strong> [ɡoʊ] — Идти
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Существительные:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Helmet</strong> [ˈhelmɪt] — Шлем
              </p>
              <p>
                <strong>Water</strong> [ˈwɔːtər] — Вода
              </p>
              <p>
                <strong>Window</strong> [ˈwɪndoʊ] — Окно
              </p>
              <p>
                <strong>School</strong> [skuːl] — Школа
              </p>
              <p>
                <strong>Doctor</strong> [ˈdɑːktər] — Врач
              </p>
              <p>
                <strong>Rules</strong> [ruːlz] — Правила
              </p>
              <p>
                <strong>Law</strong> [lɔː] — Закон
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Наречия времени:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Now</strong> [naʊ] — Сейчас
              </p>
              <p>
                <strong>Today</strong> [təˈdeɪ] — Сегодня
              </p>
              <p>
                <strong>Tomorrow</strong> [təˈmɒroʊ] — Завтра
              </p>
            </div>
          </div>

          <div className="bg-purple-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Вежливые слова:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Please</strong> [pliːz] — Пожалуйста
              </p>
              <p>
                <strong>Thank you</strong> [θæŋk juː] — Спасибо
              </p>
              <p>
                <strong>Sorry</strong> [ˈsɑːri] — Извините
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">You must wear a helmet.</p>
            <p className="text-sm text-gray-600">
              Ты обязан надеть шлем. — Обязанность.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">I have to go to school.</p>
            <p className="text-sm text-gray-600">
              Мне нужно в школу. — Необходимость.
            </p>
          </div>

          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <p className="font-semibold">You should see a doctor.</p>
            <p className="text-sm text-gray-600">
              Тебе следует обратиться к врачу. — Совет.
            </p>
          </div>

          <div className="border-l-4 border-purple-400 pl-4 py-2">
            <p className="font-semibold">Could you open the window, please?</p>
            <p className="text-sm text-gray-600">
              Не могли бы вы открыть окно? — Вежливая просьба.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Повторяйте с аудио (<em>must</em> [mʌst], <em>should</em> [ʃʊd]).
            </li>
            <li>Карточки: модальный глагол + пример + перевод.</li>
            <li>Составляйте предложения: You must study. / I have to clean.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Таблица модальных глаголов">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Modal
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Must</td>
                <td className="border border-gray-200 px-4 py-2">
                  You must study.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Have to</td>
                <td className="border border-gray-200 px-4 py-2">
                  I have to clean.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Should</td>
                <td className="border border-gray-200 px-4 py-2">
                  You should rest.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Could</td>
                <td className="border border-gray-200 px-4 py-2">
                  Could you help?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Must / Mustn't ===== */
function Step3() {
  const mustExercise: FillItem[] = [
    {
      left: "1. You",
      right: "wear a helmet. (обязанность)",
      answers: ["must"],
      explanation: "Ответ: must — Обязанность, сильное требование.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. You",
      right: "run here. (запрет)",
      answers: ["mustn't", "must not"],
      explanation: "Ответ: mustn't — Запрет (нельзя).",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. I",
      right: "study tonight. (обязанность)",
      answers: ["must"],
      explanation: "Ответ: must — Внутренняя обязанность.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Must / Mustn't — Обязанность и запрет">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Must</strong> — обязанность (я сам решил или очень важно)
          <br />
          <strong>Mustn't</strong> — запрет (нельзя!)
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              You must wear a helmet.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Ты обязан надеть шлем.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> You + must + wear + a helmet.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">You mustn't run here.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Здесь нельзя бегать.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> You + mustn't + run + here.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">I must study tonight.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я должен учиться сегодня.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + must + study + tonight.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Схема">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Утверждение:</strong> must + глагол
            </li>
            <li>
              <strong>Отрицание:</strong> mustn't + глагол
            </li>
            <li>
              <strong>Вопрос:</strong> Must I…? (редко, формально)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Must</strong> [mʌst] — коротко, сильно
            </li>
            <li>
              <strong>Mustn't</strong> [ˈmʌsnt] — ударение на <em>must</em>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ говорите:
              <div className="ml-4">
                <div className="text-red-600">❌ You don't must go.</div>
                <div className="text-green-600">✅ You mustn't go.</div>
              </div>
            </li>
            <li>
              НЕ добавляйте to:
              <div className="ml-4">
                <div className="text-red-600">❌ I must to go.</div>
                <div className="text-green-600">✅ I must go.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте must или mustn't"
        instruction="Заполните пропуски правильной формой."
        items={mustExercise}
      />

      <UiSection title="📸 Визуализация Must vs Mustn't">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-red-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🛑
              </div>
              <p className="text-2xl font-bold text-red-900 mb-2">MUSTN&apos;T</p>
              <p className="text-sm text-zinc-600 mb-3">Запрещено!</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">You <span className="text-red-600">mustn&apos;t</span> run here</p>
                <p className="text-xs text-zinc-600 mt-1">Тебе нельзя бежать здесь</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🪖
              </div>
              <p className="text-2xl font-bold text-amber-900 mb-2">MUST</p>
              <p className="text-sm text-zinc-600 mb-3">Обязательно!</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">You <span className="text-amber-600">must</span> wear a helmet</p>
                <p className="text-xs text-zinc-600 mt-1">Ты обязан носить шлем</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Have to / Don't have to ===== */
function Step4() {
  const haveToExercise: FillItem[] = [
    {
      left: "1. I",
      right: "go to school. (нужно)",
      answers: ["have to"],
      explanation: "Ответ: have to — Внешняя необходимость.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. She",
      right: "clean the room. (придётся)",
      answers: ["has to"],
      explanation: "Ответ: has to — Для he/she/it используем has to.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. You",
      right: "wear a tie. (не нужно)",
      answers: ["don't have to", "do not have to"],
      explanation: "Ответ: don't have to — Нет обязанности.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Have to / Don't have to — Необходимость">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Have to</strong> — внешняя необходимость (правила, закон,
          родители)
          <br />
          <strong>Don't have to</strong> — не нужно (нет обязанности)
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I have to go to school.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Мне нужно в школу (по правилам).
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + have to + go + to school.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              She has to clean the room.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Ей придётся убрать.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> She + has to + clean + the room.
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              You don't have to wear a tie.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Тебе не нужно надевать галстук.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> You + don't have to + wear + a tie.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Схема">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>I/You/We/They</strong> + have to + глагол
            </li>
            <li>
              <strong>He/She/It</strong> + has to + глагол
            </li>
            <li>
              <strong>Отрицание:</strong> don't/doesn't have to
            </li>
            <li>
              <strong>Вопрос:</strong> Do you have to…?
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Have to</strong> [hæf tu] → сокращается до [ˈhæftə]
            </li>
            <li>
              <strong>Has to</strong> [hæz tu]
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте must и have to:
              <div className="ml-4">
                <div className="text-red-600">❌ I must to go to school.</div>
                <div className="text-green-600">✅ I have to go to school.</div>
              </div>
            </li>
            <li>
              Важно: don't have to ≠ mustn't
              <div className="ml-4 text-sm">
                <p>
                  <em>I don't have to go.</em> = не нужно (нет обязанности)
                </p>
                <p>
                  <em>I mustn't go.</em> = нельзя (запрет)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте have to / has to / don't have to"
        instruction="Заполните пропуски правильной формой."
        items={haveToExercise}
      />

      <UiSection title="📸 Визуализация Have to vs Don't have to">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🔔
              </div>
              <p className="text-2xl font-bold text-blue-900 mb-2">HAVE TO</p>
              <p className="text-sm text-zinc-600 mb-3">Необходимо</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">I <span className="text-blue-600">have to</span> go to school</p>
                <p className="text-xs text-zinc-600 mt-1">Мне нужно идти в школу</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🏖️
              </div>
              <p className="text-2xl font-bold text-green-900 mb-2">DON&apos;T HAVE TO</p>
              <p className="text-sm text-zinc-600 mb-3">Не обязательно</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">You <span className="text-green-600">don&apos;t have to</span> work</p>
                <p className="text-xs text-zinc-600 mt-1">Тебе не нужно работать</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Should / Shouldn't ===== */
function Step5() {
  const shouldExercise: FillItem[] = [
    {
      left: "1. You",
      right: "drink water. (совет)",
      answers: ["should"],
      explanation: "Ответ: should — Совет, что лучше сделать.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. You",
      right: "eat sweets. (не следует)",
      answers: ["shouldn't", "should not"],
      explanation: "Ответ: shouldn't — Совет не делать что-то.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. We",
      right: "help him. (стоит)",
      answers: ["should"],
      explanation: "Ответ: should — Совет для группы.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Should / Shouldn't — Совет">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Should</strong> — совет, что лучше сделать
          <br />
          <strong>Shouldn't</strong> — не следует делать
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              You should drink water.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Тебе следует пить воду.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> You + should + drink + water.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              You shouldn't eat sweets.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Тебе не стоит есть сладкое.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> You + shouldn't + eat + sweets.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">We should help him.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Нам стоит помочь.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> We + should + help + him.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Схема">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>should</strong> + глагол (для всех лиц)
            </li>
            <li>
              <strong>shouldn't</strong> + глагол
            </li>
            <li>
              <strong>Вопрос:</strong> Should I…?
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Should</strong> [ʃʊd] — мягко
            </li>
            <li>
              <strong>Shouldn't</strong> [ˈʃʊdnt]
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте с must:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ You must drink water. (приказ)
                </div>
                <div className="text-green-600">
                  ✅ You should drink water. (совет)
                </div>
              </div>
            </li>
            <li>
              НЕ добавляйте to:
              <div className="ml-4">
                <div className="text-red-600">❌ You should to go.</div>
                <div className="text-green-600">✅ You should go.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте should или shouldn't"
        instruction="Заполните пропуски правильной формой."
        items={shouldExercise}
      />

      <UiSection title="📸 Визуализация Should vs Shouldn't">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center text-4xl mb-3">
                👨‍⚕️
              </div>
              <p className="text-2xl font-bold text-green-900 mb-2">SHOULD</p>
              <p className="text-sm text-zinc-600 mb-3">Стоит / Совет</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">You <span className="text-green-600">should</span> see a doctor</p>
                <p className="text-xs text-zinc-600 mt-1">Тебе следует к врачу</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border-2 border-red-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-red-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🍬❌
              </div>
              <p className="text-2xl font-bold text-red-900 mb-2">SHOULDN&apos;T</p>
              <p className="text-sm text-zinc-600 mb-3">Не стоит / Не следует</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">You <span className="text-red-600">shouldn&apos;t</span> eat sweets</p>
                <p className="text-xs text-zinc-600 mt-1">Тебе не стоит есть сладкое</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Could ===== */
function Step6() {
  const couldExercise: FillItem[] = [
    {
      left: "1. I",
      right: "swim when I was 5. (умел)",
      answers: ["could"],
      explanation: "Ответ: could — Способность в прошлом.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2.",
      right: "you help me, please? (просьба)",
      answers: ["Could", "could"],
      explanation: "Ответ: Could — Вежливая просьба.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. It",
      right: "rain. (может)",
      answers: ["could"],
      explanation: "Ответ: could — Мягкая возможность.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Could — Возможность и вежливая просьба">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Could</strong> = мягкая возможность (в прошлом can)
          <br />
          <strong>Вежливая просьба:</strong> Could you…?
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-purple-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              I could swim when I was 5.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я умел плавать в 5 лет.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> I + could + swim + when I was 5.
            </p>
          </div>

          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Could you help me, please?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Не могли бы вы помочь?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Could + you + help + me + please.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">It could rain.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Может пойти дождь.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> It + could + rain.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Схема">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>could</strong> + глагол
            </li>
            <li>
              <strong>Вопрос:</strong> Could you…? (вежливо)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Произношение">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            <strong>Could</strong> [kʊd] — мягко, с подъёмом в просьбе
          </p>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте can и could:
              <div className="ml-4">
                <div className="text-amber-600">
                  ⚠️ Can you help me? (обычно)
                </div>
                <div className="text-green-600">
                  ✅ Could you help me? (вежливо)
                </div>
              </div>
            </li>
            <li>
              НЕ добавляйте to:
              <div className="ml-4">
                <div className="text-red-600">❌ I could to go.</div>
                <div className="text-green-600">✅ I could go.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте could"
        instruction="Заполните пропуски, используя could."
        items={couldExercise}
      />

      <UiSection title="📸 Визуализация Could">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-cyan-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🏊
              </div>
              <p className="text-2xl font-bold text-cyan-900 mb-2">COULD (прошлое)</p>
              <p className="text-sm text-zinc-600 mb-3">Умел раньше</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">I <span className="text-cyan-600">could</span> swim when I was 5</p>
                <p className="text-xs text-zinc-600 mt-1">Я умел плавать в 5 лет</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-purple-200 rounded-full flex items-center justify-center text-4xl mb-3">
                🙏
              </div>
              <p className="text-2xl font-bold text-purple-900 mb-2">COULD YOU?</p>
              <p className="text-sm text-zinc-600 mb-3">Вежливая просьба</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold"><span className="text-purple-600">Could you</span> help me?</p>
                <p className="text-xs text-zinc-600 mt-1">Не могли бы вы помочь?</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Сравнение модальных глаголов ===== */
function Step7() {
  return (
    <>
      <UiSection title="Сравнение модальных глаголов">
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Modal
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Meaning
                </th>
                <th className="border border-gray-200 px-4 py-2 text-left">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">
                  <strong>Must</strong>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  Обязанность (внутренняя)
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <em>I must study.</em>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">
                  <strong>Mustn't</strong>
                </td>
                <td className="border border-gray-200 px-4 py-2">Запрет</td>
                <td className="border border-gray-200 px-4 py-2">
                  <em>You mustn't smoke.</em>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">
                  <strong>Have to</strong>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  Необходимость (внешняя)
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <em>I have to wear uniform.</em>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">
                  <strong>Don't have to</strong>
                </td>
                <td className="border border-gray-200 px-4 py-2">Не нужно</td>
                <td className="border border-gray-200 px-4 py-2">
                  <em>You don't have to come.</em>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">
                  <strong>Should</strong>
                </td>
                <td className="border border-gray-200 px-4 py-2">Совет</td>
                <td className="border border-gray-200 px-4 py-2">
                  <em>You should rest.</em>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">
                  <strong>Could</strong>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  Возможность / просьба
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <em>Could you call me?</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Важные различия">
        <div className="space-y-3">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Mustn't ≠ Don't have to</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <em>Mustn't</em> = нельзя (запрет)
              </li>
              <li>
                <em>Don't have to</em> = не нужно (нет обязанности)
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Should ≠ Must</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <em>Should</em> = совет (мягко)
              </li>
              <li>
                <em>Must</em> = приказ (строго)
              </li>
            </ul>
          </div>

          <div className="bg-purple-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Must ≠ Have to</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <em>Must</em> = внутренняя обязанность (я сам решил)
              </li>
              <li>
                <em>Have to</em> = внешняя необходимость (правила)
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📸 Визуальная шпаргалка модальных глаголов">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200 flex items-center gap-3">
            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              🛑
            </div>
            <div>
              <p className="font-bold text-red-900">MUSTN&apos;T</p>
              <p className="text-xs text-zinc-600">Запрет</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200 flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              ⏰
            </div>
            <div>
              <p className="font-bold text-blue-900">HAVE TO</p>
              <p className="text-xs text-zinc-600">Необходимость</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200 flex items-center gap-3">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              👨‍⚕️
            </div>
            <div>
              <p className="font-bold text-green-900">SHOULD</p>
              <p className="text-xs text-zinc-600">Совет</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200 flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              🙏
            </div>
            <div>
              <p className="font-bold text-purple-900">COULD</p>
              <p className="text-xs text-zinc-600">Вежливая просьба</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто используют «надо» для всех ситуаций. В
            английском важно различать: <em>must</em> (я решил),
            <em>have to</em> (правила требуют), <em>should</em> (мой совет).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнения — Часть 1 ===== */
function Step8() {
  const exercise1: FillItem[] = [
    {
      left: "1. You",
      right: "wear a helmet. (обязанность)",
      answers: ["must"],
      explanation: "Ответ: must — Обязанность.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. You",
      right: "wear a tie. (не нужно)",
      answers: ["don't have to", "do not have to"],
      explanation: "Ответ: don't have to — Нет необходимости.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. You",
      right: "see a doctor. (совет)",
      answers: ["should"],
      explanation: "Ответ: should — Совет.",
      ariaLabel: "Вопрос 3",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I",
      right: "tonight. (внутренняя обязанность: study)",
      answers: ["must study"],
      explanation: "Ответ: must study",
      ariaLabel: "Заполните 1",
      wide: true,
    },
    {
      left: "2. She",
      right: "the room. (родители сказали: clean)",
      answers: ["has to clean"],
      explanation: "Ответ: has to clean",
      ariaLabel: "Заполните 2",
      wide: true,
    },
    {
      left: "3. You",
      right: "sweets. (совет: eat)",
      answers: ["shouldn't eat", "should not eat"],
      explanation: "Ответ: shouldn't eat",
      ariaLabel: "Заполните 3",
      wide: true,
    },
    {
      left: "4.",
      right: "you open the window? (просьба)",
      answers: ["Could", "could"],
      explanation: "Ответ: Could",
      ariaLabel: "Заполните 4",
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. I must go. →",
      right: "",
      answers: [
        "I mustn't go",
        "I mustn't go.",
        "I must not go",
        "I must not go.",
      ],
      explanation: "Ответ: I mustn't go.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. I have to go. →",
      right: "",
      answers: [
        "I don't have to go",
        "I don't have to go.",
        "I do not have to go",
        "I do not have to go.",
      ],
      explanation: "Ответ: I don't have to go.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
    {
      left: "3. You should go. →",
      right: "",
      answers: [
        "You shouldn't go",
        "You shouldn't go.",
        "You should not go",
        "You should not go.",
      ],
      explanation: "Ответ: You shouldn't go.",
      ariaLabel: "Отрицание 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения — Часть 1">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильный модальный глагол"
        instruction="Вставьте подходящий модальный глагол (must, should, don't have to) согласно подсказке в скобках."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски"
        instruction="Вставьте модальный глагол + глагол из скобок (например: must study или has to clean)."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Отрицания"
        instruction="Переделайте утвердительные предложения в отрицательные (например: must → mustn't)."
        items={exercise3}
      />
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнения — Часть 2 ===== */
function Step9() {
  const exercise4: FillItem[] = [
    {
      left: "1. I must wear a helmet. →",
      right: "",
      answers: ["Must I wear a helmet", "Must I wear a helmet?"],
      explanation: "Ответ: Must I wear a helmet?",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. I have to study. →",
      right: "",
      answers: ["Do I have to study", "Do I have to study?"],
      explanation: "Ответ: Do I have to study?",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. You should help. →",
      right: "",
      answers: [
        "Should you help",
        "Should you help?",
        "Should I help",
        "Should I help?",
      ],
      explanation: "Ответ: Should you help? (или Should I help?)",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
  ];

  const exercise5: FillItem[] = [
    {
      left: "1. Ты должен надеть шлем. →",
      right: "",
      answers: ["You must wear a helmet", "You must wear a helmet."],
      explanation: "Ответ: You must wear a helmet.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Тебе не нужно приходить. →",
      right: "",
      answers: [
        "You don't have to come",
        "You don't have to come.",
        "You do not have to come",
        "You do not have to come.",
      ],
      explanation: "Ответ: You don't have to come.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Тебе следует отдохнуть. →",
      right: "",
      answers: ["You should rest", "You should rest."],
      explanation: "Ответ: You should rest.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise6: FillItem[] = [
    {
      left: "1. ❌ You don't must smoke. →",
      right: "",
      answers: [
        "You mustn't smoke",
        "You mustn't smoke.",
        "You must not smoke",
        "You must not smoke.",
      ],
      explanation: "Исправление: You mustn't smoke.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ I have to to go. →",
      right: "",
      answers: ["I have to go", "I have to go."],
      explanation: "Исправление: I have to go.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Could you to help? →",
      right: "",
      answers: ["Could you help", "Could you help?"],
      explanation: "Исправление: Could you help?",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения — Часть 2">
        <p className="text-zinc-700 leading-relaxed">
          Продолжаем! Выполните оставшиеся упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 4: Вопросы"
        instruction="Переделайте предложения в вопросы."
        items={exercise4}
      />

      <CheckableExercise
        title="📝 Упражнение 5: Перевод"
        instruction="Переведите с русского на английский."
        items={exercise5}
      />

      <CheckableExercise
        title="📝 Упражнение 6: Исправьте ошибки"
        instruction="Исправьте ошибки в предложениях и напишите правильный вариант (проверьте использование 'to' и порядок слов)."
        items={exercise6}
      />
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и сопоставление ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const matchingExercise: FillItem[] = [
    {
      left: "1. Обязанность носить форму →",
      right: "",
      answers: ["B", "b", "Students must wear uniforms every day"],
      explanation: "Ответ: B — Students must wear uniforms every day.",
      ariaLabel: "Сопоставление 1",
      wide: true,
    },
    {
      left: "2. Запрет бегать →",
      right: "",
      answers: ["C", "c", "They mustn't run in the corridors"],
      explanation: "Ответ: C — They mustn't run in the corridors.",
      ariaLabel: "Сопоставление 2",
      wide: true,
    },
    {
      left: "3. Необходимость учить математику →",
      right: "",
      answers: ["E", "e", "Anna has to study math"],
      explanation: "Ответ: E — Anna has to study math.",
      ariaLabel: "Сопоставление 3",
      wide: true,
    },
    {
      left: "4. Нет необходимости убирать →",
      right: "",
      answers: ["D", "d", "She doesn't have to clean the classroom today"],
      explanation: "Ответ: D — She doesn't have to clean the classroom today.",
      ariaLabel: "Сопоставление 4",
      wide: true,
    },
    {
      left: "5. Совет пить воду →",
      right: "",
      answers: ["A", "a", "You should drink water during the break"],
      explanation: "Ответ: A — You should drink water during the break.",
      ariaLabel: "Сопоставление 5",
      wide: true,
    },
    {
      left: "6. Вежливая просьба →",
      right: "",
      answers: ["F", "f", "Could you help me with my bag"],
      explanation: "Ответ: F — Could you help me with my bag, please?",
      ariaLabel: "Сопоставление 6",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: School Rules and Advice">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            Students must wear uniforms every day. They mustn't run in the
            corridors. Anna has to study math because she has a test tomorrow.
            She doesn't have to clean the classroom today. The teacher says:
            "You should drink water during the break." Tom could swim very well
            last year. Could you help me with my bag, please?
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
              Ученики должны носить форму каждый день. Им нельзя бегать в
              коридорах. Анна должна учить математику, потому что у неё завтра
              тест. Ей не нужно убирать класс сегодня. Учитель говорит: «Вам
              следует пить воду на перемене». Том умел хорошо плавать в прошлом
              году. Не могли бы вы помочь мне с сумкой?
            </p>
          </div>
        )}
      </UiSection>

      <UiSection title="Задание: Сопоставьте">
        <div className="bg-blue-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-3">Варианты ответов:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>A.</strong> You should drink water during the break.
            </li>
            <li>
              <strong>B.</strong> Students must wear uniforms every day.
            </li>
            <li>
              <strong>C.</strong> They mustn't run in the corridors.
            </li>
            <li>
              <strong>D.</strong> She doesn't have to clean the classroom today.
            </li>
            <li>
              <strong>E.</strong> Anna has to study math.
            </li>
            <li>
              <strong>F.</strong> Could you help me with my bag, please?
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Задание: Сопоставьте (1-6) с (A-F)"
        instruction="Введите букву правильного ответа."
        items={matchingExercise}
      />

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Модальные глаголы: Must / Have to / Should /
          Could"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Выражать обязанность (must) и запрет (mustn't)</li>
          <li>
            Говорить о необходимости (have to) и её отсутствии (don't have to)
          </li>
          <li>Давать советы (should / shouldn't)</li>
          <li>Вежливо просить (could)</li>
          <li>Различать внутреннюю и внешнюю обязанность</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Must:</strong> обязанность (внутренняя)
            </li>
            <li>
              <strong>Mustn't:</strong> запрет (нельзя!)
            </li>
            <li>
              <strong>Have to:</strong> необходимость (внешняя)
            </li>
            <li>
              <strong>Don't have to:</strong> не нужно (нет обязанности)
            </li>
            <li>
              <strong>Should:</strong> совет (следует)
            </li>
            <li>
              <strong>Could:</strong> возможность / вежливая просьба
            </li>
            <li>
              <strong>Важно:</strong> mustn't ≠ don't have to!
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Практикуйте произношение модальных глаголов</li>
            <li>Помните: модальные глаголы всегда без to!</li>
            <li>Различайте must (я решил) и have to (правила)</li>
            <li>Используйте could для вежливых просьб</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

