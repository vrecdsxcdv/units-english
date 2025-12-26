"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PerfectModals({ step }: Props) {
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
    case 11:
      return <Step11 />;
    case 12:
      return <Step12 />;
    case 13:
      return <Step13 />;
    case 14:
      return <Step14 />;
    case 15:
      return <Step15 />;
    default:
      return <Step1 />;
  }
}

/* ========== ШАГ 1: Введение в Perfect Modals ========== */
function Step1() {
  return (
    <>
      <UiSection title="🎯 Perfect Modals — Модальные глаголы в прошлом">
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-8 mb-6 border-2 border-violet-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">🔍</div>
            <h2 className="text-3xl font-bold text-violet-900 mb-3">
              Perfect Modals
            </h2>
            <p className="text-xl text-violet-700">
              Modal + have + Past Participle
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-violet-900 mb-3">
              🎯 Главная идея:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed">
              Perfect Modals используются для{" "}
              <strong>
                рассуждений, сожалений, критики и предположений о прошлом
              </strong>
              . Мы говорим о том, что могло, должно было или могло бы произойти.
            </p>
          </div>

          <div className="bg-violet-100 rounded-lg p-5 border-2 border-violet-400">
            <p className="font-bold text-violet-900 mb-2 text-lg">
              📐 Базовая формула:
            </p>
            <div className="bg-white rounded-lg p-4">
              <div className="text-center mb-3">
                <p className="text-2xl font-mono font-bold text-violet-900">
                  Modal + have + V₃ (Past Participle)
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-3 mt-4">
                <div className="bg-violet-50 rounded p-3 text-center">
                  <p className="text-sm font-semibold text-violet-900">Modal</p>
                  <p className="text-xs text-gray-600">should, could, might, must...</p>
                </div>
                <div className="bg-violet-50 rounded p-3 text-center">
                  <p className="text-sm font-semibold text-violet-900">have</p>
                  <p className="text-xs text-gray-600">всегда "have"</p>
                </div>
                <div className="bg-violet-50 rounded p-3 text-center">
                  <p className="text-sm font-semibold text-violet-900">V₃</p>
                  <p className="text-xs text-gray-600">done, been, seen...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Основные Perfect Modals">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "😔",
              modal: "should have done",
              meaning: "Сожаление о прошлом",
              desc: "Должен был сделать, но не сделал",
              example: "I should have studied harder.",
              ru: "Мне следовало учиться усерднее.",
              color: "red"
            },
            {
              icon: "💪",
              modal: "could have done",
              meaning: "Упущенная возможность",
              desc: "Мог бы сделать, но не сделал",
              example: "You could have called me.",
              ru: "Ты мог бы позвонить мне.",
              color: "orange"
            },
            {
              icon: "🤔",
              modal: "might have done",
              meaning: "Предположение о прошлом",
              desc: "Возможно, сделал (небольшая вероятность)",
              example: "She might have forgotten.",
              ru: "Она, возможно, забыла.",
              color: "yellow"
            },
            {
              icon: "🎯",
              modal: "must have done",
              meaning: "Уверенное предположение",
              desc: "Должно быть, сделал (высокая вероятность)",
              example: "He must have left already.",
              ru: "Он, должно быть, уже ушел.",
              color: "green"
            },
            {
              icon: "❌",
              modal: "can't have done",
              meaning: "Невозможность",
              desc: "Не может быть, чтобы сделал",
              example: "She can't have said that!",
              ru: "Не может быть, чтобы она это сказала!",
              color: "blue"
            },
            {
              icon: "📋",
              modal: "would have done",
              meaning: "Условное прошлое",
              desc: "Сделал бы (если бы...)",
              example: "I would have helped you.",
              ru: "Я бы помог тебе.",
              color: "indigo"
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg p-5 border-2 border-${item.color}-200 hover:border-${item.color}-400 transition`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{item.modal}</p>
                  <p className="text-sm text-gray-600">{item.meaning}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3 italic">{item.desc}</p>
              <div className={`bg-${item.color}-50 rounded p-3 border-l-4 border-${item.color}-400`}>
                <p className="font-semibold text-gray-800 text-sm">{item.example}</p>
                <p className="text-xs text-gray-600 mt-1">{item.ru}</p>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="⚡ Почему Perfect Modals важны?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
            <div className="text-4xl mb-3">💭</div>
            <h4 className="font-bold text-gray-900 mb-2">Рассуждения</h4>
            <p className="text-sm text-gray-700">
              Делать логические выводы о прошлом на основе имеющейся информации
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
            <div className="text-4xl mb-3">😢</div>
            <h4 className="font-bold text-gray-900 mb-2">Сожаления</h4>
            <p className="text-sm text-gray-700">
              Выражать сожаление о том, что не сделали или сделали неправильно
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
            <div className="text-4xl mb-3">👎</div>
            <h4 className="font-bold text-gray-900 mb-2">Критика</h4>
            <p className="text-sm text-gray-700">
              Критиковать действия других людей в прошлом (вежливо или прямо)
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: should have done — Теория ========== */
function Step2() {
  return (
    <>
      <UiSection title="😔 should have done — Сожаление и критика">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8 mb-6 border-2 border-red-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">💔</div>
            <h2 className="text-2xl font-bold text-red-900">
              should have + Past Participle
            </h2>
            <p className="text-red-700 mt-2">Должен был, но не сделал</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-red-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-red-100 rounded-lg p-4 border-2 border-red-400 text-center">
              <p className="text-xl font-mono font-bold text-red-900">
                should have + V₃
              </p>
              <p className="text-sm text-gray-600 mt-2">
                shouldn't have + V₃ (не следовало делать)
              </p>
            </div>
          </div>

          <div className="bg-rose-50 rounded-lg p-5 border-2 border-rose-400">
            <h3 className="font-bold text-rose-900 mb-3">🎯 Использование:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">1.</span>
                <span className="text-gray-800">
                  <strong>Сожаление</strong> — о том, что не сделали
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">2.</span>
                <span className="text-gray-800">
                  <strong>Критика</strong> — чужих действий в прошлом
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">3.</span>
                <span className="text-gray-800">
                  <strong>Совет задним числом</strong> — что нужно было сделать
                </span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры should have done">
        <div className="space-y-4">
          {[
            {
              category: "😢 Личное сожаление",
              positive: "I should have studied harder for the exam.",
              posRu: "Мне следовало усерднее готовиться к экзамену.",
              negative: "I shouldn't have eaten so much.",
              negRu: "Мне не следовало есть так много.",
            },
            {
              category: "👎 Критика других",
              positive: "You should have called me yesterday.",
              posRu: "Тебе следовало позвонить мне вчера.",
              negative: "He shouldn't have said that to her.",
              negRu: "Ему не следовало говорить ей это.",
            },
            {
              category: "💡 Совет о прошлом",
              positive: "They should have left earlier.",
              posRu: "Им следовало уйти раньше.",
              negative: "We shouldn't have trusted him.",
              negRu: "Нам не следовало доверять ему.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border-2 border-red-200">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">{item.category.split(" ")[0]}</span>
                <span>{item.category.split(" ").slice(1).join(" ")}</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-xs font-semibold text-green-700 mb-1">✓ Positive</p>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{item.positive}</p>
                  <p className="text-xs text-gray-600">{item.posRu}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-xs font-semibold text-red-700 mb-1">✗ Negative</p>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{item.negative}</p>
                  <p className="text-xs text-gray-600">{item.negRu}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Сожаления и критика">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "regret",
              transcr: "/rɪˈɡret/",
              translation: "сожалеть",
            },
            {
              word: "mistake",
              transcr: "/mɪˈsteɪk/",
              translation: "ошибка",
            },
            {
              word: "bad decision",
              transcr: "/bæd dɪˈsɪʒn/",
              translation: "плохое решение",
            },
            {
              word: "hindsight",
              transcr: "/ˈhaɪndsaɪt/",
              translation: "ретроспектива",
            },
            {
              word: "if only",
              transcr: "/ɪf ˈəʊnli/",
              translation: "если бы только",
            },
            {
              word: "I wish",
              transcr: "/aɪ wɪʃ/",
              translation: "жаль, что...",
            },
            {
              word: "blame",
              transcr: "/bleɪm/",
              translation: "винить",
            },
            {
              word: "criticize",
              transcr: "/ˈkrɪtɪsaɪz/",
              translation: "критиковать",
            },
            {
              word: "learn from mistakes",
              transcr: "/lɜːn frəm mɪˈsteɪks/",
              translation: "учиться на ошибках",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-red-400"
            >
              <p className="font-bold text-red-900 text-lg">{item.word}</p>
              <p className="text-xs text-red-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 3: should have done — Практика ========== */
function Step3() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "earlier to avoid traffic. (should / leave)",
      answers: ["should have left"],
      explanation: "should have left — сожаление о том, что не ушел раньше",
      wide: true,
    },
    {
      left: "2. You",
      right: "so fast! Now look what happened. (shouldn't / drive)",
      answers: ["shouldn't have driven", "should not have driven"],
      explanation: "shouldn't have driven — критика за быструю езду",
      wide: true,
    },
    {
      left: "3. They",
      right: "the instructions more carefully. (should / read)",
      answers: ["should have read"],
      explanation: "should have read — совет о том, что нужно было сделать",
      wide: true,
    },
    {
      left: "4. She",
      right: "him the truth from the beginning. (should / tell)",
      answers: ["should have told"],
      explanation: "should have told — сожаление о том, что не сказала правду",
      wide: true,
    },
    {
      left: "5. We",
      right: "so much money on that car. (shouldn't / spend)",
      answers: ["shouldn't have spent", "should not have spent"],
      explanation: "shouldn't have spent — сожаление о трате денег",
      wide: true,
    },
    {
      left: "6. He",
      right: "for the meeting. It was important. (should / prepare)",
      answers: ["should have prepared"],
      explanation: "should have prepared — критика за отсутствие подготовки",
      wide: true,
    },
    {
      left: "7. I",
      right: "my keys at home. Now I'm locked out. (shouldn't / leave)",
      answers: ["shouldn't have left", "should not have left"],
      explanation: "shouldn't have left — сожаление о забытых ключах",
      wide: true,
    },
    {
      left: "8. You",
      right: "me about this problem sooner. (should / tell)",
      answers: ["should have told"],
      explanation: "should have told — критика за то, что не сказал раньше",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: should have / shouldn't have"
        items={items}
      />

      <UiSection title="💡 Разница: should have VS had to">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
            <h3 className="font-bold text-red-900 text-lg mb-3">should have done</h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Следовало</strong> сделать (но не сделал) — сожаление
            </p>
            <div className="bg-white rounded p-4 space-y-2">
              <p className="font-semibold text-gray-800 text-sm">
                I should have called you.
              </p>
              <p className="text-xs text-gray-600">
                Мне следовало позвонить тебе (но я не позвонил, сожалею об этом)
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="font-bold text-blue-900 text-lg mb-3">had to do</h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Пришлось</strong> сделать (и сделал) — обязанность
            </p>
            <div className="bg-white rounded p-4 space-y-2">
              <p className="font-semibold text-gray-800 text-sm">
                I had to call my boss.
              </p>
              <p className="text-xs text-gray-600">
                Мне пришлось позвонить боссу (и я позвонил, это была необходимость)
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 4: could have done — Теория ========== */
function Step4() {
  return (
    <>
      <UiSection title="💪 could have done — Упущенная возможность">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-8 mb-6 border-2 border-orange-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🚪</div>
            <h2 className="text-2xl font-bold text-orange-900">
              could have + Past Participle
            </h2>
            <p className="text-orange-700 mt-2">Мог бы, но не сделал</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-orange-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-orange-100 rounded-lg p-4 border-2 border-orange-400 text-center">
              <p className="text-xl font-mono font-bold text-orange-900">
                could have + V₃
              </p>
              <p className="text-sm text-gray-600 mt-2">
                couldn't have + V₃ (не мог бы сделать)
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
            <h3 className="font-bold text-amber-900 mb-3">🎯 Использование:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">1.</span>
                <span className="text-gray-800">
                  <strong>Упущенная возможность</strong> — была возможность, но не использовал
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">2.</span>
                <span className="text-gray-800">
                  <strong>Альтернатива в прошлом</strong> — мог поступить иначе
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">3.</span>
                <span className="text-gray-800">
                  <strong>Способность в прошлом</strong> — имел возможность сделать
                </span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры could have done">
        <div className="space-y-4">
          {[
            {
              icon: "🚪",
              category: "Упущенная возможность",
              example: "You could have won the game, but you gave up too early.",
              ru: "Ты мог бы выиграть игру, но сдался слишком рано.",
              note: "Была возможность выиграть, но не воспользовался"
            },
            {
              icon: "🔄",
              category: "Альтернативное действие",
              example: "We could have taken the train instead of driving.",
              ru: "Мы могли бы поехать на поезде вместо того, чтобы ехать на машине.",
              note: "Был альтернативный вариант"
            },
            {
              icon: "⚡",
              category: "Способность",
              example: "She could have finished earlier if she had tried harder.",
              ru: "Она могла бы закончить раньше, если бы постаралась больше.",
              note: "Имела способность, но не использовала"
            },
            {
              icon: "❗",
              category: "Критика (мягкая)",
              example: "You could have at least called me!",
              ru: "Ты мог бы хотя бы позвонить мне!",
              note: "Упрек за то, что не сделал минимум"
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-orange-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-orange-900 mb-2">{item.category}</h4>
                  <div className="bg-orange-50 rounded p-3 mb-2">
                    <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                    <p className="text-sm text-gray-600">{item.ru}</p>
                  </div>
                  <p className="text-xs text-orange-700 italic">💡 {item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Возможности и выбор">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "opportunity",
              transcr: "/ˌɒpəˈtjuːnəti/",
              translation: "возможность",
            },
            {
              word: "option",
              transcr: "/ˈɒpʃn/",
              translation: "вариант, опция",
            },
            {
              word: "alternative",
              transcr: "/ɔːlˈtɜːnətɪv/",
              translation: "альтернатива",
            },
            {
              word: "miss a chance",
              transcr: "/mɪs ə tʃɑːns/",
              translation: "упустить шанс",
            },
            {
              word: "waste",
              transcr: "/weɪst/",
              translation: "тратить впустую",
            },
            {
              word: "ability",
              transcr: "/əˈbɪləti/",
              translation: "способность",
            },
            {
              word: "capable",
              transcr: "/ˈkeɪpəbl/",
              translation: "способный",
            },
            {
              word: "potential",
              transcr: "/pəˈtenʃl/",
              translation: "потенциал",
            },
            {
              word: "instead of",
              transcr: "/ɪnˈsted əv/",
              translation: "вместо",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-orange-400"
            >
              <p className="font-bold text-orange-900 text-lg">{item.word}</p>
              <p className="text-xs text-orange-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: could have done — Практика ========== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "1. We",
      right: "to the beach, but the weather was bad. (could / go)",
      answers: ["could have gone"],
      explanation: "could have gone — была возможность поехать, но не поехали",
      wide: true,
    },
    {
      left: "2. He",
      right: "me with the project if I had asked. (could / help)",
      answers: ["could have helped"],
      explanation: "could have helped — мог бы помочь, если бы я попросил",
      wide: true,
    },
    {
      left: "3. You",
      right: "at least texted me! (could / text)",
      answers: ["could have texted"],
      explanation: "could have texted — мог бы хотя бы написать (упрек)",
      wide: true,
    },
    {
      left: "4. They",
      right: "a bigger apartment, but they chose this one. (could / rent)",
      answers: ["could have rented"],
      explanation: "could have rented — была возможность снять, но выбрали другой",
      wide: true,
    },
    {
      left: "5. She",
      right: "the exam if she had studied more. (could / pass)",
      answers: ["could have passed"],
      explanation: "could have passed — могла бы сдать при большей подготовке",
      wide: true,
    },
    {
      left: "6. I",
      right: "without your help. Thank you! (couldn't / do)",
      answers: ["couldn't have done", "could not have done"],
      explanation: "couldn't have done — не мог бы сделать без помощи",
      wide: true,
    },
    {
      left: "7. We",
      right: "to the concert, but the tickets were sold out. (could / go)",
      answers: ["could have gone"],
      explanation: "could have gone — возможность была, но билетов не было",
      wide: true,
    },
    {
      left: "8. You",
      right: "it better than this! (could / do)",
      answers: ["could have done"],
      explanation: "could have done — мог бы сделать лучше (критика)",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: could have / couldn't have"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 6: might/may have done — Теория ========== */
function Step6() {
  return (
    <>
      <UiSection title="🤔 might/may have done — Предположение">
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-8 mb-6 border-2 border-yellow-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🎲</div>
            <h2 className="text-2xl font-bold text-yellow-900">
              might/may have + Past Participle
            </h2>
            <p className="text-yellow-700 mt-2">Возможно, сделал (небольшая уверенность)</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-yellow-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-yellow-100 rounded-lg p-4 border-2 border-yellow-400">
              <div className="text-center mb-2">
                <p className="text-xl font-mono font-bold text-yellow-900">
                  might have + V₃
                </p>
                <p className="text-lg font-mono text-yellow-800 mt-1">
                  may have + V₃
                </p>
              </div>
              <p className="text-sm text-gray-600 text-center mt-3">
                might = may (одинаковое значение)
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
            <h3 className="font-bold text-amber-900 mb-3">🎯 Использование:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">1.</span>
                <span className="text-gray-800">
                  <strong>Слабое предположение</strong> — возможно, произошло (30-50% уверенности)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">2.</span>
                <span className="text-gray-800">
                  <strong>Неуверенность</strong> — не знаем точно, что случилось
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">3.</span>
                <span className="text-gray-800">
                  <strong>Один из вариантов</strong> — это одна из возможных причин
                </span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры might/may have done">
        <div className="space-y-4">
          {[
            {
              example: "She might have forgotten about the meeting.",
              ru: "Она, возможно, забыла о встрече.",
              certainty: "30-50%",
              note: "Не уверены, но это возможно"
            },
            {
              example: "He may have left already.",
              ru: "Он, возможно, уже ушел.",
              certainty: "30-50%",
              note: "Одна из возможных ситуаций"
            },
            {
              example: "They might have taken a different route.",
              ru: "Они, возможно, поехали другой дорогой.",
              certainty: "30-50%",
              note: "Объяснение, почему их нет"
            },
            {
              example: "I may have seen her at the party.",
              ru: "Я, возможно, видел её на вечеринке.",
              certainty: "30-50%",
              note: "Не помню точно"
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-yellow-500">
              <div className="bg-yellow-50 rounded p-4 mb-3">
                <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                <p className="text-sm text-gray-600">{item.ru}</p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-yellow-700 italic">💡 {item.note}</span>
                <span className="bg-yellow-100 px-2 py-1 rounded font-semibold text-yellow-800">
                  Уверенность: {item.certainty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Предположения">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "possibly",
              transcr: "/ˈpɒsəbli/",
              translation: "возможно",
            },
            {
              word: "perhaps",
              transcr: "/pəˈhæps/",
              translation: "возможно, может быть",
            },
            {
              word: "maybe",
              transcr: "/ˈmeɪbi/",
              translation: "может быть",
            },
            {
              word: "uncertain",
              transcr: "/ʌnˈsɜːtn/",
              translation: "неуверенный",
            },
            {
              word: "not sure",
              transcr: "/nɒt ʃɔː(r)/",
              translation: "не уверен",
            },
            {
              word: "speculation",
              transcr: "/ˌspekjuˈleɪʃn/",
              translation: "предположение",
            },
            {
              word: "guess",
              transcr: "/ɡes/",
              translation: "догадка",
            },
            {
              word: "assume",
              transcr: "/əˈsjuːm/",
              translation: "предполагать",
            },
            {
              word: "theory",
              transcr: "/ˈθɪəri/",
              translation: "теория",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-yellow-400"
            >
              <p className="font-bold text-yellow-900 text-lg">{item.word}</p>
              <p className="text-xs text-yellow-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 7: might/may have done — Практика ========== */
function Step7() {
  const items: FillItem[] = [
    {
      left: "1. She's not here. She",
      right: "home already. (might / go)",
      answers: ["might have gone", "may have gone"],
      explanation: "might/may have gone — возможно, ушла домой",
      wide: true,
    },
    {
      left: "2. He",
      right: "the email, but I'm not sure. (may / receive)",
      answers: ["may have received", "might have received"],
      explanation: "may/might have received — возможно, получил письмо",
      wide: true,
    },
    {
      left: "3. They",
      right: "the wrong turn. That's why they're late. (might / take)",
      answers: ["might have taken", "may have taken"],
      explanation: "might/may have taken — возможно, свернули не туда",
      wide: true,
    },
    {
      left: "4. I",
      right: "my keys in the car. (may / leave)",
      answers: ["may have left", "might have left"],
      explanation: "may/might have left — возможно, оставил ключи",
      wide: true,
    },
    {
      left: "5. She",
      right: "sick. She didn't come to work today. (might / be)",
      answers: ["might have been", "may have been"],
      explanation: "might/may have been — возможно, была больна",
      wide: true,
    },
    {
      left: "6. He",
      right: "the message. Check if he replied. (may / see)",
      answers: ["may have seen", "might have seen"],
      explanation: "may/might have seen — возможно, видел сообщение",
      wide: true,
    },
    {
      left: "7. We",
      right: "at the restaurant yesterday. It was crowded. (might / meet)",
      answers: ["might have met", "may have met"],
      explanation: "might/may have met — возможно, встретились",
      wide: true,
    },
    {
      left: "8. They",
      right: "the flight. It departed early. (may / miss)",
      answers: ["may have missed", "might have missed"],
      explanation: "may/might have missed — возможно, опоздали на рейс",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: might have / may have"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 8: must have done — Теория ========== */
function Step8() {
  return (
    <>
      <UiSection title="🎯 must have done — Уверенное предположение">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-6 border-2 border-green-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">✅</div>
            <h2 className="text-2xl font-bold text-green-900">
              must have + Past Participle
            </h2>
            <p className="text-green-700 mt-2">Должно быть, сделал (90%+ уверенности)</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-green-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-green-100 rounded-lg p-4 border-2 border-green-400 text-center">
              <p className="text-xl font-mono font-bold text-green-900">
                must have + V₃
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-5 border-2 border-emerald-400">
            <h3 className="font-bold text-emerald-900 mb-3">🎯 Использование:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">1.</span>
                <span className="text-gray-800">
                  <strong>Логическое заключение</strong> — уверены на основе фактов (90%+)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">2.</span>
                <span className="text-gray-800">
                  <strong>Очевидность</strong> — иначе быть не может
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">3.</span>
                <span className="text-gray-800">
                  <strong>Дедукция</strong> — вывод из имеющейся информации
                </span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры must have done">
        <div className="space-y-4">
          {[
            {
              example: "He must have left already. His car is gone.",
              ru: "Он, должно быть, уже ушел. Его машины нет.",
              evidence: "🚗 Машины нет",
              certainty: "95%"
            },
            {
              example: "She must have studied hard. She got an A+!",
              ru: "Она, должно быть, усердно училась. Она получила A+!",
              evidence: "📚 Получила A+",
              certainty: "90%"
            },
            {
              example: "They must have known each other before.",
              ru: "Они, должно быть, знали друг друга раньше.",
              evidence: "👥 Ведут себя как старые друзья",
              certainty: "90%"
            },
            {
              example: "It must have rained last night. The ground is wet.",
              ru: "Должно быть, ночью шел дождь. Земля мокрая.",
              evidence: "💧 Земля мокрая",
              certainty: "95%"
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-green-500">
              <div className="bg-green-50 rounded p-4 mb-3">
                <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                <p className="text-sm text-gray-600">{item.ru}</p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-green-700 italic">{item.evidence}</span>
                <span className="bg-green-100 px-2 py-1 rounded font-semibold text-green-800">
                  Уверенность: {item.certainty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Уверенность и логика">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "certainly",
              transcr: "/ˈsɜːtnli/",
              translation: "конечно, безусловно",
            },
            {
              word: "obviously",
              transcr: "/ˈɒbviəsli/",
              translation: "очевидно",
            },
            {
              word: "clearly",
              transcr: "/ˈklɪəli/",
              translation: "ясно, четко",
            },
            {
              word: "evidence",
              transcr: "/ˈevɪdəns/",
              translation: "доказательство",
            },
            {
              word: "proof",
              transcr: "/pruːf/",
              translation: "доказательство",
            },
            {
              word: "conclude",
              transcr: "/kənˈkluːd/",
              translation: "заключать, делать вывод",
            },
            {
              word: "deduce",
              transcr: "/dɪˈdjuːs/",
              translation: "делать вывод",
            },
            {
              word: "logic",
              transcr: "/ˈlɒdʒɪk/",
              translation: "логика",
            },
            {
              word: "no doubt",
              transcr: "/nəʊ daʊt/",
              translation: "без сомнения",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-green-400"
            >
              <p className="font-bold text-green-900 text-lg">{item.word}</p>
              <p className="text-xs text-green-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 9: must have done — Практика ========== */
function Step9() {
  const items: FillItem[] = [
    {
      left: "1. She's not answering. She",
      right: "asleep already. (must / fall)",
      answers: ["must have fallen"],
      explanation: "must have fallen — уверенное предположение на основе фактов",
      wide: true,
    },
    {
      left: "2. They",
      right: "the news. Everyone is talking about it. (must / hear)",
      answers: ["must have heard"],
      explanation: "must have heard — логический вывод",
      wide: true,
    },
    {
      left: "3. He",
      right: "a lot of money on that car! (must / spend)",
      answers: ["must have spent"],
      explanation: "must have spent — очевидное заключение",
      wide: true,
    },
    {
      left: "4. You",
      right: "exhausted after such a long trip. (must / be)",
      answers: ["must have been"],
      explanation: "must have been — логичное предположение",
      wide: true,
    },
    {
      left: "5. She",
      right: "very hard to achieve this success. (must / work)",
      answers: ["must have worked"],
      explanation: "must have worked — вывод на основе результата",
      wide: true,
    },
    {
      left: "6. They",
      right: "the train. They're here on time. (must / catch)",
      answers: ["must have caught"],
      explanation: "must have caught — уверенность на основе факта",
      wide: true,
    },
    {
      left: "7. He",
      right: "the answer. He looks so confident. (must / know)",
      answers: ["must have known"],
      explanation: "must have known — логический вывод по поведению",
      wide: true,
    },
    {
      left: "8. It",
      right: "difficult to make that decision. (must / be)",
      answers: ["must have been"],
      explanation: "must have been — сочувственное предположение",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: must have"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 10: can't/couldn't have done — Теория ========== */
function Step10() {
  return (
    <>
      <UiSection title="❌ can't/couldn't have done — Невозможность">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-6 border-2 border-blue-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🚫</div>
            <h2 className="text-2xl font-bold text-blue-900">
              can't/couldn't have + Past Participle
            </h2>
            <p className="text-blue-700 mt-2">Не может быть, чтобы сделал</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-blue-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-400">
              <div className="text-center">
                <p className="text-xl font-mono font-bold text-blue-900">
                  can't have + V₃
                </p>
                <p className="text-lg font-mono text-blue-800 mt-1">
                  couldn't have + V₃
                </p>
              </div>
              <p className="text-sm text-gray-600 text-center mt-3">
                can't = couldn't (одинаковое значение)
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-400">
            <h3 className="font-bold text-indigo-900 mb-3">🎯 Использование:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                <span className="text-gray-800">
                  <strong>Уверенное отрицание</strong> — это точно не так (95%+ уверенности)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                <span className="text-gray-800">
                  <strong>Невозможность</strong> — логически это не могло произойти
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                <span className="text-gray-800">
                  <strong>Удивление/шок</strong> — не могу поверить, что это случилось
                </span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры can't/couldn't have done">
        <div className="space-y-4">
          {[
            {
              example: "She can't have said that! She's too polite.",
              ru: "Не может быть, чтобы она это сказала! Она слишком вежливая.",
              reason: "Противоречит характеру"
            },
            {
              example: "He couldn't have finished already. It's too soon!",
              ru: "Он не мог закончить так быстро. Слишком рано!",
              reason: "Логически невозможно"
            },
            {
              example: "They can't have forgotten. I reminded them yesterday.",
              ru: "Они не могли забыть. Я напоминал им вчера.",
              reason: "Есть доказательства обратного"
            },
            {
              example: "You couldn't have seen John. He's in Spain!",
              ru: "Ты не мог видеть Джона. Он в Испании!",
              reason: "Физически невозможно"
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <div className="bg-blue-50 rounded p-4 mb-3">
                <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                <p className="text-sm text-gray-600">{item.ru}</p>
              </div>
              <p className="text-xs text-blue-700 italic">🔍 Причина: {item.reason}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="🔄 Сравнение: must have VS can't have">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
            <h3 className="font-bold text-green-900 text-lg mb-3 flex items-center gap-2">
              <span>✅</span>
              <span>must have</span>
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Уверенность</strong> (95%+) — точно так
            </p>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 text-sm mb-1">
                He must have passed the exam.
              </p>
              <p className="text-xs text-gray-600">
                Он, должно быть, сдал экзамен. (я уверен)
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
              <span>❌</span>
              <span>can't have</span>
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Уверенность в отрицании</strong> (95%+) — точно не так
            </p>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 text-sm mb-1">
                He can't have passed the exam.
              </p>
              <p className="text-xs text-gray-600">
                Он не мог сдать экзамен. (я уверен, что не сдал)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Отрицание и невозможность">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "impossible",
              transcr: "/ɪmˈpɒsəbl/",
              translation: "невозможно",
            },
            {
              word: "unbelievable",
              transcr: "/ˌʌnbɪˈliːvəbl/",
              translation: "невероятно",
            },
            {
              word: "no way",
              transcr: "/nəʊ weɪ/",
              translation: "ни в коем случае",
            },
            {
              word: "deny",
              transcr: "/dɪˈnaɪ/",
              translation: "отрицать",
            },
            {
              word: "contradict",
              transcr: "/ˌkɒntrəˈdɪkt/",
              translation: "противоречить",
            },
            {
              word: "doubt",
              transcr: "/daʊt/",
              translation: "сомневаться",
            },
            {
              word: "reject",
              transcr: "/rɪˈdʒekt/",
              translation: "отвергать",
            },
            {
              word: "disbelief",
              transcr: "/ˌdɪsbɪˈliːf/",
              translation: "недоверие",
            },
            {
              word: "skeptical",
              transcr: "/ˈskeptɪkl/",
              translation: "скептический",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-blue-400"
            >
              <p className="font-bold text-blue-900 text-lg">{item.word}</p>
              <p className="text-xs text-blue-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 11: can't have done — Практика ========== */
function Step11() {
  const items: FillItem[] = [
    {
      left: "1. She",
      right: "the meeting. She's still here! (can't / forget)",
      answers: ["can't have forgotten", "couldn't have forgotten"],
      explanation: "can't have forgotten — уверенность, что не забыла",
      wide: true,
    },
    {
      left: "2. He",
      right: "all of this himself. He had help. (couldn't / do)",
      answers: ["couldn't have done", "can't have done"],
      explanation: "couldn't have done — логически невозможно один",
      wide: true,
    },
    {
      left: "3. They",
      right: "already. The store just opened! (can't / arrive)",
      answers: ["can't have arrived", "couldn't have arrived"],
      explanation: "can't have arrived — слишком рано",
      wide: true,
    },
    {
      left: "4. You",
      right: "that! You were with me all day. (couldn't / see)",
      answers: ["couldn't have seen", "can't have seen"],
      explanation: "couldn't have seen — у вас был алиби",
      wide: true,
    },
    {
      left: "5. She",
      right: "such a thing. I don't believe it! (can't / say)",
      answers: ["can't have said", "couldn't have said"],
      explanation: "can't have said — не верю, что сказала",
      wide: true,
    },
    {
      left: "6. He",
      right: "the exam. He didn't study at all! (couldn't / pass)",
      answers: ["couldn't have passed", "can't have passed"],
      explanation: "couldn't have passed — не готовился",
      wide: true,
    },
    {
      left: "7. They",
      right: "there yet. It's too far. (can't / get)",
      answers: ["can't have got", "can't have gotten", "couldn't have got", "couldn't have gotten"],
      explanation: "can't have got/gotten — слишком далеко",
      wide: true,
    },
    {
      left: "8. It",
      right: "much. The bill is so small. (couldn't / cost)",
      answers: ["couldn't have cost", "can't have cost"],
      explanation: "couldn't have cost — счет маленький",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: can't have / couldn't have"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 12: would have done — Условное прошлое ========== */
function Step12() {
  return (
    <>
      <UiSection title="📋 would have done — Условное прошлое">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6 border-2 border-indigo-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🔀</div>
            <h2 className="text-2xl font-bold text-indigo-900">
              would have + Past Participle
            </h2>
            <p className="text-indigo-700 mt-2">Сделал бы (если бы...)</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-indigo-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-indigo-100 rounded-lg p-4 border-2 border-indigo-400 text-center">
              <p className="text-xl font-mono font-bold text-indigo-900">
                would have + V₃
              </p>
              <p className="text-sm text-gray-600 mt-2">
                wouldn't have + V₃ (не сделал бы)
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-400">
            <h3 className="font-bold text-purple-900 mb-3">🎯 Использование:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">1.</span>
                <span className="text-gray-800">
                  <strong>Third Conditional</strong> — If + Past Perfect, would have + V₃
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">2.</span>
                <span className="text-gray-800">
                  <strong>Нереализованное желание</strong> — хотел бы сделать, но не случилось
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">3.</span>
                <span className="text-gray-800">
                  <strong>Вежливое предположение</strong> — я бы сделал на твоем месте
                </span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры would have done">
        <div className="space-y-4">
          {[
            {
              category: "🔀 Third Conditional",
              example: "If I had known, I would have called you.",
              ru: "Если бы я знал, я бы позвонил тебе.",
              structure: "If + Past Perfect → would have + V₃"
            },
            {
              category: "💭 Нереализованное желание",
              example: "I would have loved to go, but I was too busy.",
              ru: "Я бы с удовольствием пошел, но был слишком занят.",
              structure: "Хотел, но обстоятельства не позволили"
            },
            {
              category: "💡 Совет (вежливо)",
              example: "I would have done it differently.",
              ru: "Я бы сделал это по-другому.",
              structure: "Вежливая критика / совет"
            },
            {
              category: "🤝 Предложение помощи",
              example: "I would have helped you if you had asked.",
              ru: "Я бы помог тебе, если бы ты попросил.",
              structure: "Готовность помочь в прошлом"
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-indigo-500">
              <h4 className="font-bold text-indigo-800 mb-3">{item.category}</h4>
              <div className="bg-indigo-50 rounded p-4 mb-2">
                <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                <p className="text-sm text-gray-600">{item.ru}</p>
              </div>
              <p className="text-xs text-indigo-700 italic">📐 {item.structure}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Условия и гипотезы">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "if only",
              transcr: "/ɪf ˈəʊnli/",
              translation: "если бы только",
            },
            {
              word: "hypothetical",
              transcr: "/ˌhaɪpəˈθetɪkl/",
              translation: "гипотетический",
            },
            {
              word: "conditional",
              transcr: "/kənˈdɪʃənl/",
              translation: "условный",
            },
            {
              word: "otherwise",
              transcr: "/ˈʌðəwaɪz/",
              translation: "иначе, в противном случае",
            },
            {
              word: "circumstances",
              transcr: "/ˈsɜːkəmstənsɪz/",
              translation: "обстоятельства",
            },
            {
              word: "opportunity",
              transcr: "/ˌɒpəˈtjuːnəti/",
              translation: "возможность",
            },
            {
              word: "alternative",
              transcr: "/ɔːlˈtɜːnətɪv/",
              translation: "альтернатива",
            },
            {
              word: "scenario",
              transcr: "/səˈnɑːriəʊ/",
              translation: "сценарий",
            },
            {
              word: "had I known",
              transcr: "/hæd aɪ nəʊn/",
              translation: "если бы я знал",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
            >
              <p className="font-bold text-indigo-900 text-lg">{item.word}</p>
              <p className="text-xs text-indigo-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 13: Сравнительная таблица + смешанная практика ========== */
function Step13() {
  const items: FillItem[] = [
    {
      left: "1. I'm sorry. I",
      right: "earlier. (should / leave)",
      answers: ["should have left"],
      explanation: "should have left — сожаление",
      wide: true,
    },
    {
      left: "2. He",
      right: "the exam. He studied so hard! (must / pass)",
      answers: ["must have passed"],
      explanation: "must have passed — уверенное предположение",
      wide: true,
    },
    {
      left: "3. She",
      right: "that. It's not like her. (can't / say)",
      answers: ["can't have said", "couldn't have said"],
      explanation: "can't have said — уверенность в отрицании",
      wide: true,
    },
    {
      left: "4. They",
      right: "the message. Check if they replied. (might / receive)",
      answers: ["might have received", "may have received"],
      explanation: "might have received — слабое предположение",
      wide: true,
    },
    {
      left: "5. If I had known, I",
      right: "you. (would / help)",
      answers: ["would have helped"],
      explanation: "would have helped — Third Conditional",
      wide: true,
    },
    {
      left: "6. You",
      right: "a taxi. It was faster. (could / take)",
      answers: ["could have taken"],
      explanation: "could have taken — упущенная возможность",
      wide: true,
    },
    {
      left: "7. He",
      right: "so much money. He's very careful. (can't / spend)",
      answers: ["can't have spent", "couldn't have spent"],
      explanation: "can't have spent — невозможность",
      wide: true,
    },
    {
      left: "8. We",
      right: "the turn. That's why we're lost. (might / miss)",
      answers: ["might have missed", "may have missed"],
      explanation: "might have missed — возможное объяснение",
      wide: true,
    },
    {
      left: "9. You",
      right: "me! I was worried. (should / call)",
      answers: ["should have called"],
      explanation: "should have called — критика",
      wide: true,
    },
    {
      left: "10. She",
      right: "very hard for this. (must / work)",
      answers: ["must have worked"],
      explanation: "must have worked — логический вывод",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📊 Сравнительная таблица всех Perfect Modals">
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-6 mb-6 border-2 border-violet-300">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-violet-400">
                  <th className="text-left p-4 font-bold text-violet-900">Modal</th>
                  <th className="text-left p-4 font-bold text-violet-900">Значение</th>
                  <th className="text-left p-4 font-bold text-violet-900">Уверенность</th>
                  <th className="text-left p-4 font-bold text-violet-900">Пример</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-red-50">
                  <td className="p-4 font-mono text-red-700 font-bold">should have</td>
                  <td className="p-4 text-gray-800">Сожаление, критика</td>
                  <td className="p-4 text-gray-600">—</td>
                  <td className="p-4 text-gray-700 text-xs">I should have called.</td>
                </tr>
                <tr className="border-b border-gray-200 bg-orange-50">
                  <td className="p-4 font-mono text-orange-700 font-bold">could have</td>
                  <td className="p-4 text-gray-800">Упущенная возможность</td>
                  <td className="p-4 text-gray-600">—</td>
                  <td className="p-4 text-gray-700 text-xs">You could have won.</td>
                </tr>
                <tr className="border-b border-gray-200 bg-yellow-50">
                  <td className="p-4 font-mono text-yellow-700 font-bold">might/may have</td>
                  <td className="p-4 text-gray-800">Слабое предположение</td>
                  <td className="p-4 text-gray-600">30-50%</td>
                  <td className="p-4 text-gray-700 text-xs">She might have left.</td>
                </tr>
                <tr className="border-b border-gray-200 bg-green-50">
                  <td className="p-4 font-mono text-green-700 font-bold">must have</td>
                  <td className="p-4 text-gray-800">Уверенное предположение</td>
                  <td className="p-4 text-gray-600">90%+</td>
                  <td className="p-4 text-gray-700 text-xs">He must have known.</td>
                </tr>
                <tr className="border-b border-gray-200 bg-blue-50">
                  <td className="p-4 font-mono text-blue-700 font-bold">can't have</td>
                  <td className="p-4 text-gray-800">Невозможность</td>
                  <td className="p-4 text-gray-600">95%+ (отриц.)</td>
                  <td className="p-4 text-gray-700 text-xs">She can't have said that.</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="p-4 font-mono text-indigo-700 font-bold">would have</td>
                  <td className="p-4 text-gray-800">Условное прошлое</td>
                  <td className="p-4 text-gray-600">—</td>
                  <td className="p-4 text-gray-700 text-xs">I would have helped.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="✏️ Смешанная практика: Все Perfect Modals"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 14: Real Life ситуации ========== */
function Step14() {
  return (
    <>
      <UiSection title="🌍 Real Life: Perfect Modals в жизни">
        <div className="space-y-4">
          {[
            {
              icon: "💼",
              category: "На работе",
              situation: "Обсуждение провала проекта",
              examples: [
                {
                  modal: "should have",
                  text: "We should have tested it more thoroughly.",
                  ru: "Нам следовало протестировать это тщательнее."
                },
                {
                  modal: "could have",
                  text: "We could have avoided this mistake.",
                  ru: "Мы могли бы избежать этой ошибки."
                }
              ]
            },
            {
              icon: "🏠",
              category: "Дома",
              situation: "Разговор о пропавших ключах",
              examples: [
                {
                  modal: "might have",
                  text: "I might have left them in the car.",
                  ru: "Возможно, я оставил их в машине."
                },
                {
                  modal: "must have",
                  text: "You must have dropped them somewhere.",
                  ru: "Ты, должно быть, где-то их уронил."
                }
              ]
            },
            {
              icon: "🎓",
              category: "В учёбе",
              situation: "После экзамена",
              examples: [
                {
                  modal: "should have",
                  text: "I should have studied harder for this exam.",
                  ru: "Мне следовало усерднее готовиться к этому экзамену."
                },
                {
                  modal: "must have",
                  text: "The exam must have been very difficult.",
                  ru: "Экзамен, должно быть, был очень сложным."
                }
              ]
            },
            {
              icon: "👥",
              category: "С друзьями",
              situation: "Опоздание на встречу",
              examples: [
                {
                  modal: "could have",
                  text: "You could have at least texted me!",
                  ru: "Ты мог бы хотя бы написать мне!"
                },
                {
                  modal: "might have",
                  text: "I might have got the time wrong.",
                  ru: "Возможно, я перепутал время."
                }
              ]
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 border-2 border-violet-200 hover:border-violet-400 transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-violet-900 text-lg">{item.category}</h4>
                  <p className="text-sm text-violet-700">{item.situation}</p>
                </div>
              </div>
              <div className="space-y-3">
                {item.examples.map((ex, i) => (
                  <div key={i} className="bg-violet-50 rounded-lg p-4 border-l-4 border-violet-400">
                    <p className="text-xs font-semibold text-violet-600 mb-1">
                      {ex.modal}
                    </p>
                    <p className="font-semibold text-gray-800 text-sm mb-1">{ex.text}</p>
                    <p className="text-xs text-gray-600">{ex.ru}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 15: Финальный тест ========== */
function Step15() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "you earlier. I apologize. (should / call)",
      answers: ["should have called"],
      explanation: "should have called — извинение за то, что не позвонил",
      wide: true,
    },
    {
      left: "2. She",
      right: "very tired after the long flight. (must / be)",
      answers: ["must have been"],
      explanation: "must have been — уверенное предположение",
      wide: true,
    },
    {
      left: "3. He",
      right: "that. He's too nice! (can't / do)",
      answers: ["can't have done", "couldn't have done"],
      explanation: "can't have done — невозможность",
      wide: true,
    },
    {
      left: "4. They",
      right: "a different route. They're late. (might / take)",
      answers: ["might have taken", "may have taken"],
      explanation: "might have taken — возможное объяснение",
      wide: true,
    },
    {
      left: "5. If I had more time, I",
      right: "it better. (would / do)",
      answers: ["would have done"],
      explanation: "would have done — Third Conditional",
      wide: true,
    },
    {
      left: "6. You",
      right: "the opportunity when you had the chance. (could / take)",
      answers: ["could have taken"],
      explanation: "could have taken — упущенная возможность",
      wide: true,
    },
    {
      left: "7. She",
      right: "for the party. Her car is still here. (can't / leave)",
      answers: ["can't have left", "couldn't have left"],
      explanation: "can't have left — доказательство, что не ушла",
      wide: true,
    },
    {
      left: "8. I",
      right: "her at the concert, but I'm not sure. (may / see)",
      answers: ["may have seen", "might have seen"],
      explanation: "may have seen — неуверенное воспоминание",
      wide: true,
    },
    {
      left: "9. We",
      right: "the instructions more carefully. (should / read)",
      answers: ["should have read"],
      explanation: "should have read — сожаление/критика",
      wide: true,
    },
    {
      left: "10. He",
      right: "a lot of money on that car. It looks expensive! (must / spend)",
      answers: ["must have spent"],
      explanation: "must have spent — логический вывод",
      wide: true,
    },
    {
      left: "11. They",
      right: "already. It's only been 10 minutes! (couldn't / finish)",
      answers: ["couldn't have finished", "can't have finished"],
      explanation: "couldn't have finished — слишком быстро",
      wide: true,
    },
    {
      left: "12. I",
      right: "if you had asked me nicely. (would / help)",
      answers: ["would have helped"],
      explanation: "would have helped — готовность помочь при условии",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="🎯 Финальный тест: Perfect Modals"
        items={items}
      />

      <UiSection title="🎉 Поздравляем с завершением урока!">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300 text-center">
          <div className="text-7xl mb-4">🏆</div>
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Превосходная работа!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Вы завершили тему <strong>"Perfect Modals"</strong> и теперь можете
            делать точные предположения и выражать сожаления о прошлом!
          </p>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-bold text-green-900 mb-4 text-xl">
              ✅ Что вы изучили:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {[
                "should have — сожаления и критика",
                "could have — упущенные возможности",
                "might/may have — слабые предположения (30-50%)",
                "must have — уверенные предположения (90%+)",
                "can't have — уверенное отрицание (95%+)",
                "would have — условное прошлое (Third Conditional)",
                "Различия между всеми модальными конструкциями",
                "70+ новых слов и выражений",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-green-50 rounded p-3"
                >
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-sm text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-violet-50 rounded-lg p-5 border-2 border-violet-300">
            <p className="text-sm text-gray-700">
              💡 <strong>Совет:</strong> Используйте Perfect Modals, чтобы звучать
              естественно при обсуждении прошлого, делать предположения и
              выражать сожаления!
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
