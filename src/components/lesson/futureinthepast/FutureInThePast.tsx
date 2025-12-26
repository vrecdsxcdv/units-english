"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function FutureInThePast({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ========== ШАГ 1: Введение в Future in the Past ========== */
function Step1() {
  return (
    <>
      <UiSection title="⏰ Future in the Past — Будущее в прошлом">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 mb-6 border-2 border-cyan-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">🔮</div>
            <h2 className="text-3xl font-bold text-cyan-900 mb-3">
              Future in the Past
            </h2>
            <p className="text-xl text-cyan-700">
              Выражение будущего с точки зрения прошлого
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-cyan-900 mb-3">
              🎯 Главная идея:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed">
              Future in the Past — это способ{" "}
              <strong>
                описать будущие события с позиции прошлого
              </strong>
              . Мы рассказываем о том, что кто-то планировал, собирался, ожидал или
              что должно было случиться.
            </p>
          </div>

          <div className="bg-cyan-100 rounded-lg p-5 border-2 border-cyan-400">
            <p className="font-bold text-cyan-900 mb-2 text-lg">
              ⏳ Временная линия:
            </p>
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex-1 text-center">
                  <div className="text-4xl mb-2">⬅️</div>
                  <p className="font-bold text-gray-800">PAST</p>
                  <p className="text-sm text-gray-600">Момент в прошлом</p>
                  <p className="text-xs text-cyan-700 mt-2 font-semibold">
                    "В 2020 году..."
                  </p>
                </div>
                <div className="text-3xl text-cyan-600">→</div>
                <div className="flex-1 text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <p className="font-bold text-cyan-800">FUTURE in the PAST</p>
                  <p className="text-sm text-gray-600">Будущее того момента</p>
                  <p className="text-xs text-cyan-700 mt-2 font-semibold">
                    "...я думал, что поеду"
                  </p>
                </div>
                <div className="text-3xl text-gray-400">→</div>
                <div className="flex-1 text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="font-bold text-gray-500">NOW</p>
                  <p className="text-sm text-gray-400">Сейчас</p>
                </div>
              </div>
              <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                <p className="text-sm text-center font-semibold text-cyan-900">
                  In 2020, I <span className="text-cyan-600">thought</span> I{" "}
                  <span className="text-cyan-700 font-bold">would travel</span> to Japan in 2021.
                </p>
                <p className="text-xs text-center text-gray-600 mt-2">
                  В 2020 году я думал, что поеду в Японию в 2021-м.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Основные формы Future in the Past">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "📅",
              form: "was/were going to",
              meaning: "Планы и намерения",
              desc: "Что планировали, но часто не сделали",
              example: "I was going to call you.",
              ru: "Я собирался позвонить тебе."
            },
            {
              icon: "📋",
              form: "was/were to",
              meaning: "Официальные планы",
              desc: "Договоренности, судьба",
              example: "The meeting was to start at 5.",
              ru: "Встреча должна была начаться в 5."
            },
            {
              icon: "🔮",
              form: "would",
              meaning: "Предсказания в прошлом",
              desc: "Что думали/ожидали",
              example: "I thought it would rain.",
              ru: "Я думал, что пойдет дождь."
            },
            {
              icon: "⏰",
              form: "was/were about to",
              meaning: "Вот-вот должно было",
              desc: "Действие было очень близко",
              example: "I was about to leave.",
              ru: "Я как раз собирался уходить."
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-cyan-200 hover:border-cyan-400 transition"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-cyan-900 text-lg">{item.form}</p>
                  <p className="text-sm text-cyan-700">{item.meaning}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <div className="bg-cyan-50 rounded p-3 border-l-4 border-cyan-400">
                <p className="font-semibold text-gray-800 text-sm">{item.example}</p>
                <p className="text-xs text-gray-600 mt-1">{item.ru}</p>
              </div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: was/were going to — Формула и использование ========== */
function Step2() {
  return (
    <>
      <UiSection title="📅 was/were going to — Планы и намерения">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-6 border-2 border-green-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">📝</div>
            <h2 className="text-2xl font-bold text-green-900">
              was/were going to + инфинитив
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-green-900 text-lg mb-3">
              📖 Формула:
            </h3>
            <div className="bg-green-100 rounded-lg p-4 border-2 border-green-400 text-center">
              <p className="text-xl font-mono font-bold text-green-900">
                was/were + going to + V₁
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400 mb-4">
            <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              <span>Важная особенность</span>
            </h3>
            <p className="text-gray-800">
              <strong>was/were going to</strong> часто подразумевает, что действие{" "}
              <span className="text-red-600 font-bold">НЕ произошло</span>.
              Это отличает его от Past Simple.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔍 Когда использовать was/were going to">
        <div className="space-y-4">
          {[
            {
              icon: "💭",
              title: "Планы, которые не осуществились",
              example: "I was going to study, but I was too tired.",
              ru: "Я собирался учиться, но был слишком уставшим.",
              note: "План был, но не выполнен"
            },
            {
              icon: "🎯",
              title: "Намерения в прошлом",
              example: "They were going to buy a car, but it was too expensive.",
              ru: "Они собирались купить машину, но она была слишком дорогой.",
              note: "Намерение изменилось"
            },
            {
              icon: "📌",
              title: "Что должно было случиться",
              example: "She was going to call me, but she forgot.",
              ru: "Она собиралась мне позвонить, но забыла.",
              note: "Ожидаемое действие не произошло"
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-green-500">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-green-900 mb-2">{item.title}</h4>
                  <div className="bg-green-50 rounded p-3 mb-2">
                    <p className="font-semibold text-gray-800">{item.example}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.ru}</p>
                  </div>
                  <p className="text-xs text-green-700 italic">💡 {item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Полезные выражения">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "be going to",
              transcr: "/biː ˈɡəʊɪŋ tuː/",
              translation: "собираться (что-то сделать)",
            },
            {
              word: "plan to do",
              transcr: "/plæn tuː duː/",
              translation: "планировать сделать",
            },
            {
              word: "intend to",
              transcr: "/ɪnˈtend tuː/",
              translation: "намереваться",
            },
            {
              word: "change one's mind",
              transcr: "/tʃeɪndʒ wʌnz maɪnd/",
              translation: "передумать",
            },
            {
              word: "but then",
              transcr: "/bʌt ðen/",
              translation: "но потом",
            },
            {
              word: "however",
              transcr: "/haʊˈevə(r)/",
              translation: "однако",
            },
            {
              word: "unfortunately",
              transcr: "/ʌnˈfɔːtʃənətli/",
              translation: "к сожалению",
            },
            {
              word: "in the end",
              transcr: "/ɪn ði end/",
              translation: "в конце концов",
            },
            {
              word: "it didn't work out",
              transcr: "/ɪt ˈdɪdnt wɜːk aʊt/",
              translation: "не получилось",
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

/* ========== ШАГ 3: was/were going to — Практика ========== */
function Step3() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "visit my grandmother yesterday, but she wasn't home. (going)",
      answers: ["was going to", "was going to visit"],
      explanation: "was going to — план, который не осуществился",
      wide: true,
    },
    {
      left: "2. They",
      right: "move to London, but decided to stay. (going)",
      answers: ["were going to", "were going to move"],
      explanation: "were going to — намерение, которое изменилось",
      wide: true,
    },
    {
      left: "3. She",
      right: "tell him the truth, but lost her courage. (going)",
      answers: ["was going to", "was going to tell"],
      explanation: "was going to — план не выполнен",
      wide: true,
    },
    {
      left: "4. We",
      right: "book the tickets online, but the website was down. (going)",
      answers: ["were going to", "were going to book"],
      explanation: "were going to — намерение не реализовалось",
      wide: true,
    },
    {
      left: "5. He",
      right: "ask her out, but she left early. (going)",
      answers: ["was going to", "was going to ask"],
      explanation: "was going to — план не осуществился",
      wide: true,
    },
    {
      left: "6. I",
      right: "buy a new phone, but I couldn't afford it. (going)",
      answers: ["was going to", "was going to buy"],
      explanation: "was going to — намерение изменилось из-за обстоятельств",
      wide: true,
    },
    {
      left: "7. They",
      right: "start the project last week, but there were delays. (going)",
      answers: ["were going to", "were going to start"],
      explanation: "were going to — план отложен",
      wide: true,
    },
    {
      left: "8. She",
      right: "apply for the job, but changed her mind. (going)",
      answers: ["was going to", "was going to apply"],
      explanation: "was going to — намерение не реализовано",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: Заполните пропуски (was/were going to)"
        items={items}
      />

      <UiSection title="🔄 Сравнение: was going to VS Past Simple">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">❌</span>
              <h3 className="font-bold text-red-900 text-lg">was going to</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Действие <strong>НЕ произошло</strong>
            </p>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 mb-1">
                I was going to call you.
              </p>
              <p className="text-sm text-gray-600">
                Я собирался позвонить (но не позвонил)
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">✅</span>
              <h3 className="font-bold text-green-900 text-lg">Past Simple</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Действие <strong>завершено</strong>
            </p>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 mb-1">I called you.</p>
              <p className="text-sm text-gray-600">Я позвонил тебе (и позвонил)</p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 4: was/were to — Официальные планы ========== */
function Step4() {
  return (
    <>
      <UiSection title="📋 was/were to — Официальные планы и судьба">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-6 border-2 border-purple-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">📜</div>
            <h2 className="text-2xl font-bold text-purple-900">
              was/were to + инфинитив
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-purple-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-purple-100 rounded-lg p-4 border-2 border-purple-400 text-center">
              <p className="text-xl font-mono font-bold text-purple-900">
                was/were + to + V₁
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-400">
            <h3 className="font-bold text-indigo-900 mb-3">🎯 Использование:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">1.</span>
                <span className="text-gray-800">
                  <strong>Официальные планы</strong> и договоренности (формально)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">2.</span>
                <span className="text-gray-800">
                  <strong>Судьба, предопределенность</strong> — "суждено было"
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">3.</span>
                <span className="text-gray-800">
                  Используется в <strong>новостях, официальных текстах, истории</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры использования was/were to">
        <div className="space-y-4">
          {[
            {
              icon: "📋",
              category: "Официальный план",
              example: "The president was to visit France, but the trip was cancelled.",
              ru: "Президент должен был посетить Францию, но поездка была отменена.",
            },
            {
              icon: "📅",
              category: "Договоренность",
              example: "They were to meet at 5 PM, but he arrived late.",
              ru: "Они должны были встретиться в 5 вечера, но он опоздал.",
            },
            {
              icon: "🔮",
              category: "Судьба",
              example: "Little did he know that he was to become a famous writer.",
              ru: "Он и не подозревал, что ему суждено стать известным писателем.",
            },
            {
              icon: "📰",
              category: "Новости",
              example: "The conference was to take place in Berlin.",
              ru: "Конференция должна была состояться в Берлине.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-purple-700 mb-2">
                    {item.category}
                  </p>
                  <div className="bg-purple-50 rounded p-3">
                    <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                    <p className="text-sm text-gray-600">{item.ru}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Официальные выражения">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "be supposed to",
              transcr: "/biː səˈpəʊzd tuː/",
              translation: "должен был (по плану)",
            },
            {
              word: "be scheduled to",
              transcr: "/biː ˈʃedjuːld tuː/",
              translation: "быть запланированным",
            },
            {
              word: "official plan",
              transcr: "/əˈfɪʃl plæn/",
              translation: "официальный план",
            },
            {
              word: "arrangement",
              transcr: "/əˈreɪndʒmənt/",
              translation: "договоренность",
            },
            {
              word: "be destined to",
              transcr: "/biː ˈdestɪnd tuː/",
              translation: "быть предназначенным",
            },
            {
              word: "fate",
              transcr: "/feɪt/",
              translation: "судьба",
            },
            {
              word: "cancel",
              transcr: "/ˈkænsl/",
              translation: "отменить",
            },
            {
              word: "postpone",
              transcr: "/pəʊstˈpəʊn/",
              translation: "отложить",
            },
            {
              word: "it was meant to be",
              transcr: "/ɪt wəz ment tuː biː/",
              translation: "так должно было быть",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-purple-400"
            >
              <p className="font-bold text-purple-900 text-lg">{item.word}</p>
              <p className="text-xs text-purple-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: was/were to — Практика ========== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "1. The meeting",
      right: "start at 3 PM, but it was delayed. (to)",
      answers: ["was to", "was to start"],
      explanation: "was to — официальный план",
      wide: true,
    },
    {
      left: "2. They",
      right: "sign the contract yesterday. (to)",
      answers: ["were to", "were to sign"],
      explanation: "were to — запланированное действие",
      wide: true,
    },
    {
      left: "3. The Prime Minister",
      right: "announce the decision today. (to)",
      answers: ["was to", "was to announce"],
      explanation: "was to — официальное объявление",
      wide: true,
    },
    {
      left: "4. Little did she know that she",
      right: "meet her future husband that day. (to)",
      answers: ["was to", "was to meet"],
      explanation: "was to — судьба, предопределенность",
      wide: true,
    },
    {
      left: "5. The concert",
      right: "begin at 8 PM. (to)",
      answers: ["was to", "was to begin"],
      explanation: "was to — запланированное событие",
      wide: true,
    },
    {
      left: "6. We",
      right: "leave the next morning. (to)",
      answers: ["were to", "were to leave"],
      explanation: "were to — договоренность",
      wide: true,
    },
    {
      left: "7. The event",
      right: "take place in London, but it was moved to Paris. (to)",
      answers: ["was to", "was to take place"],
      explanation: "was to — официальный план, который изменился",
      wide: true,
    },
    {
      left: "8. Nobody knew that this",
      right: "be their last meeting. (to)",
      answers: ["was to", "was to be"],
      explanation: "was to — предопределенность, судьба",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: Заполните пропуски (was/were to)"
        items={items}
      />

      <UiSection title="🔄 Разница: was going to VS was to">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
            <h3 className="font-bold text-green-900 text-lg mb-3">
              was going to
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Личные планы</strong>, неформально
            </p>
            <div className="bg-white rounded p-4 space-y-2">
              <p className="font-semibold text-gray-800 text-sm">
                I was going to call you.
              </p>
              <p className="text-xs text-gray-600">
                Я собирался позвонить тебе.
              </p>
              <p className="text-xs text-green-700 italic">
                💭 Неформальное намерение
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
            <h3 className="font-bold text-purple-900 text-lg mb-3">was to</h3>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Официальные планы</strong>, формально
            </p>
            <div className="bg-white rounded p-4 space-y-2">
              <p className="font-semibold text-gray-800 text-sm">
                The president was to visit France.
              </p>
              <p className="text-xs text-gray-600">
                Президент должен был посетить Францию.
              </p>
              <p className="text-xs text-purple-700 italic">
                📋 Официальное событие
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 6: would — Предсказания в прошлом ========== */
function Step6() {
  return (
    <>
      <UiSection title="🔮 would — Предсказания и ожидания в прошлом">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-6 border-2 border-blue-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">💫</div>
            <h2 className="text-2xl font-bold text-blue-900">would + инфинитив</h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-blue-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-400 text-center">
              <p className="text-xl font-mono font-bold text-blue-900">would + V₁</p>
            </div>
          </div>

          <div className="bg-cyan-50 rounded-lg p-5 border-2 border-cyan-400">
            <h3 className="font-bold text-cyan-900 mb-3">🎯 Использование:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                <span className="text-gray-800">
                  <strong>Предсказания</strong> в прошлом (аналог will для будущего)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                <span className="text-gray-800">
                  <strong>Ожидания</strong> — что, как вы думали, произойдет
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                <span className="text-gray-800">
                  Часто с глаголами: <strong>thought, knew, expected, believed, hoped</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры использования would">
        <div className="space-y-4">
          {[
            {
              icon: "💭",
              verb: "thought",
              example: "I thought it would rain, so I took an umbrella.",
              ru: "Я думал, что пойдет дождь, поэтому взял зонт.",
            },
            {
              icon: "✅",
              verb: "knew",
              example: "She knew he would be angry.",
              ru: "Она знала, что он разозлится.",
            },
            {
              icon: "🤔",
              verb: "expected",
              example: "We expected that the project would take longer.",
              ru: "Мы ожидали, что проект займет больше времени.",
            },
            {
              icon: "🙏",
              verb: "hoped",
              example: "They hoped the weather would improve.",
              ru: "Они надеялись, что погода улучшится.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-700 mb-2">
                    {item.verb}
                  </p>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                    <p className="text-sm text-gray-600">{item.ru}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="🔄 Сравнение: will → would">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">⏰</span>
              <h3 className="font-bold text-green-900 text-lg">
                PRESENT → FUTURE
              </h3>
            </div>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 mb-1">
                I think it <span className="text-green-700 font-bold">will</span>{" "}
                rain tomorrow.
              </p>
              <p className="text-sm text-gray-600">
                Думаю, завтра пойдет дождь.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🔮</span>
              <h3 className="font-bold text-blue-900 text-lg">
                PAST → FUTURE IN THE PAST
              </h3>
            </div>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 mb-1">
                I thought it <span className="text-blue-700 font-bold">would</span>{" "}
                rain.
              </p>
              <p className="text-sm text-gray-600">Я думал, что пойдет дождь.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Глаголы ожидания">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "think (thought)",
              transcr: "/θɪŋk (θɔːt)/",
              translation: "думать (думал)",
            },
            {
              word: "know (knew)",
              transcr: "/nəʊ (njuː)/",
              translation: "знать (знал)",
            },
            {
              word: "expect",
              transcr: "/ɪkˈspekt/",
              translation: "ожидать",
            },
            {
              word: "believe",
              transcr: "/bɪˈliːv/",
              translation: "верить, полагать",
            },
            {
              word: "hope",
              transcr: "/həʊp/",
              translation: "надеяться",
            },
            {
              word: "predict",
              transcr: "/prɪˈdɪkt/",
              translation: "предсказывать",
            },
            {
              word: "assume",
              transcr: "/əˈsjuːm/",
              translation: "предполагать",
            },
            {
              word: "suppose",
              transcr: "/səˈpəʊz/",
              translation: "полагать",
            },
            {
              word: "be certain",
              transcr: "/biː ˈsɜːtn/",
              translation: "быть уверенным",
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

/* ========== ШАГ 7: would — Практика ========== */
function Step7() {
  const items: FillItem[] = [
    {
      left: "1. He said he",
      right: "call me later. (would)",
      answers: ["would", "would call", "'d call"],
      explanation: "would — обещание/предсказание после 'said'",
      wide: true,
    },
    {
      left: "2. We hoped the weather",
      right: "be nice. (would)",
      answers: ["would", "would be", "'d be"],
      explanation: "would — надежда на будущее после 'hoped'",
      wide: true,
    },
    {
      left: "3. She believed everything",
      right: "work out fine. (would)",
      answers: ["would", "would work", "'d work"],
      explanation: "would — вера в будущий результат после 'believed'",
      wide: true,
    },
    {
      left: "4. They didn't know it",
      right: "be so difficult. (would)",
      answers: ["would", "would be", "'d be"],
      explanation: "would — неожиданное развитие после 'didn't know'",
      wide: true,
    },
    {
      left: "5. I thought you",
      right: "like the gift. (would)",
      answers: ["would", "would like", "'d like"],
      explanation: "would — ожидание после 'thought'",
      wide: true,
    },
    {
      left: "6. He knew they",
      right: "arrive late. (would)",
      answers: ["would", "would arrive", "'d arrive"],
      explanation: "would — предсказание после 'knew'",
      wide: true,
    },
    {
      left: "7. We expected that the meeting",
      right: "last longer. (would)",
      answers: ["would", "would last", "'d last"],
      explanation: "would — ожидание после 'expected'",
      wide: true,
    },
    {
      left: "8. She was certain he",
      right: "forget about it. (would)",
      answers: ["would", "would forget", "'d forget"],
      explanation: "would — уверенность в будущем после 'was certain'",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: Заполните пропуски (would)"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 8: was/were about to ========== */
function Step8() {
  return (
    <>
      <UiSection title="⏰ was/were about to — Вот-вот должно было">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-8 mb-6 border-2 border-orange-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">⚡</div>
            <h2 className="text-2xl font-bold text-orange-900">
              was/were about to + инфинитив
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-orange-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-orange-100 rounded-lg p-4 border-2 border-orange-400 text-center">
              <p className="text-xl font-mono font-bold text-orange-900">
                was/were + about to + V₁
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
            <h3 className="font-bold text-amber-900 mb-3">🎯 Использование:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">1.</span>
                <span className="text-gray-800">
                  Что-то <strong>вот-вот должно было произойти</strong> в момент прошлого
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">2.</span>
                <span className="text-gray-800">
                  Подчеркивает <strong>непосредственную близость</strong> действия
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">3.</span>
                <span className="text-gray-800">
                  Часто с <strong>when</strong> — "Я как раз собирался..., когда..."
                </span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры was/were about to">
        <div className="space-y-4">
          {[
            {
              example: "I was about to leave when the phone rang.",
              ru: "Я как раз собирался уходить, когда зазвонил телефон.",
              note: "⏰ Действие было очень близко",
            },
            {
              example: "They were about to start the meeting when the boss arrived.",
              ru: "Они как раз собирались начать встречу, когда пришел босс.",
              note: "🎯 Момент прямо перед действием",
            },
            {
              example: "She was about to say something, but changed her mind.",
              ru: "Она уже собиралась что-то сказать, но передумала.",
              note: "💭 Очень близко к действию",
            },
            {
              example: "The train was about to depart when we arrived.",
              ru: "Поезд уже собирался отправляться, когда мы приехали.",
              note: "🚂 Буквально через секунды",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-l-4 border-orange-500"
            >
              <div className="bg-orange-50 rounded p-4 mb-2">
                <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                <p className="text-sm text-gray-600">{item.ru}</p>
              </div>
              <p className="text-xs text-orange-700 italic">{item.note}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="🔄 Разница: was about to VS was going to">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300">
            <h3 className="font-bold text-orange-900 text-lg mb-3">
              was about to
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Действие <strong>вот-вот</strong> (секунды/минуты)
            </p>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 text-sm mb-1">
                I was about to leave.
              </p>
              <p className="text-xs text-gray-600">
                Я как раз собирался уходить (прямо сейчас)
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
            <h3 className="font-bold text-green-900 text-lg mb-3">
              was going to
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Общий план (не обязательно сейчас)
            </p>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-gray-800 text-sm mb-1">
                I was going to leave.
              </p>
              <p className="text-xs text-gray-600">
                Я собирался уходить (в ближайшее время)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Выражения близости">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "be about to",
              transcr: "/biː əˈbaʊt tuː/",
              translation: "быть на грани (сделать)",
            },
            {
              word: "just about to",
              transcr: "/dʒʌst əˈbaʊt tuː/",
              translation: "как раз собираться",
            },
            {
              word: "on the verge of",
              transcr: "/ɒn ðə vɜːdʒ əv/",
              translation: "на грани",
            },
            {
              word: "at that moment",
              transcr: "/æt ðæt ˈməʊmənt/",
              translation: "в тот момент",
            },
            {
              word: "right then",
              transcr: "/raɪt ðen/",
              translation: "прямо тогда",
            },
            {
              word: "suddenly",
              transcr: "/ˈsʌdnli/",
              translation: "внезапно",
            },
            {
              word: "just then",
              transcr: "/dʒʌst ðen/",
              translation: "как раз тогда",
            },
            {
              word: "at the last minute",
              transcr: "/æt ðə lɑːst ˈmɪnɪt/",
              translation: "в последнюю минуту",
            },
            {
              word: "in the nick of time",
              transcr: "/ɪn ðə nɪk əv taɪm/",
              translation: "в самый последний момент",
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

/* ========== ШАГ 9: was/were about to — Практика ========== */
function Step9() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "go to bed when someone knocked on the door. (about)",
      answers: ["was about to", "was about to go"],
      explanation: "was about to — действие вот-вот должно было произойти",
      wide: true,
    },
    {
      left: "2. The train",
      right: "depart when we arrived at the station. (about)",
      answers: ["was about to", "was about to depart"],
      explanation: "was about to — поезд был на грани отправления",
      wide: true,
    },
    {
      left: "3. They",
      right: "sign the contract when the lawyer called. (about)",
      answers: ["were about to", "were about to sign"],
      explanation: "were about to — прямо перед подписанием",
      wide: true,
    },
    {
      left: "4. She",
      right: "tell him the truth when he interrupted her. (about)",
      answers: ["was about to", "was about to tell"],
      explanation: "was about to — вот-вот собиралась сказать",
      wide: true,
    },
    {
      left: "5. We",
      right: "leave when it started raining. (about)",
      answers: ["were about to", "were about to leave"],
      explanation: "were about to — как раз собирались уходить",
      wide: true,
    },
    {
      left: "6. He",
      right: "give up when he finally found the solution. (about)",
      answers: ["was about to", "was about to give up"],
      explanation: "was about to — был на грани того, чтобы сдаться",
      wide: true,
    },
    {
      left: "7. The movie",
      right: "start when we found our seats. (about)",
      answers: ["was about to", "was about to start"],
      explanation: "was about to — фильм был на грани начала",
      wide: true,
    },
    {
      left: "8. I",
      right: "send the email when my computer crashed. (about)",
      answers: ["was about to", "was about to send"],
      explanation: "was about to — как раз собирался отправить",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: Заполните пропуски (was/were about to)"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 10: Сравнительная таблица всех форм ========== */
function Step10() {
  return (
    <>
      <UiSection title="📊 Сравнение всех форм Future in the Past">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-indigo-400">
                  <th className="text-left p-4 font-bold text-indigo-900">Форма</th>
                  <th className="text-left p-4 font-bold text-indigo-900">Значение</th>
                  <th className="text-left p-4 font-bold text-indigo-900">Формальность</th>
                  <th className="text-left p-4 font-bold text-indigo-900">Пример</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-green-50">
                  <td className="p-4 font-mono text-green-700 font-bold">
                    was going to
                  </td>
                  <td className="p-4 text-gray-800">Планы, намерения</td>
                  <td className="p-4 text-gray-600">Неформально</td>
                  <td className="p-4 text-gray-700 text-xs">
                    I was going to call you.
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-purple-50">
                  <td className="p-4 font-mono text-purple-700 font-bold">was to</td>
                  <td className="p-4 text-gray-800">Официальные планы, судьба</td>
                  <td className="p-4 text-gray-600">Формально</td>
                  <td className="p-4 text-gray-700 text-xs">
                    The meeting was to start at 5.
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-blue-50">
                  <td className="p-4 font-mono text-blue-700 font-bold">would</td>
                  <td className="p-4 text-gray-800">Предсказания, ожидания</td>
                  <td className="p-4 text-gray-600">Нейтрально</td>
                  <td className="p-4 text-gray-700 text-xs">
                    I thought it would rain.
                  </td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="p-4 font-mono text-orange-700 font-bold">
                    was about to
                  </td>
                  <td className="p-4 text-gray-800">Вот-вот случится</td>
                  <td className="p-4 text-gray-600">Нейтрально</td>
                  <td className="p-4 text-gray-700 text-xs">
                    I was about to leave when...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔍 Детальное сравнение с примерами">
        <div className="space-y-4">
          {[
            {
              form: "was going to",
              color: "green",
              examples: [
                {
                  en: "I was going to study, but I was too tired.",
                  ru: "Я собирался учиться, но был слишком уставшим.",
                },
                {
                  en: "They were going to move to Paris.",
                  ru: "Они собирались переехать в Париж.",
                },
              ],
            },
            {
              form: "was to",
              color: "purple",
              examples: [
                {
                  en: "The president was to visit France.",
                  ru: "Президент должен был посетить Францию.",
                },
                {
                  en: "He was to become a great scientist.",
                  ru: "Ему суждено было стать великим ученым.",
                },
              ],
            },
            {
              form: "would",
              color: "blue",
              examples: [
                {
                  en: "I thought it would be easy.",
                  ru: "Я думал, это будет легко.",
                },
                {
                  en: "She knew he would come.",
                  ru: "Она знала, что он придет.",
                },
              ],
            },
            {
              form: "was about to",
              color: "orange",
              examples: [
                {
                  en: "I was about to leave when he called.",
                  ru: "Я как раз собирался уходить, когда он позвонил.",
                },
                {
                  en: "The show was about to begin.",
                  ru: "Шоу вот-вот должно было начаться.",
                },
              ],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg p-5 border-l-4 border-${item.color}-500`}
            >
              <h4 className={`font-bold text-${item.color}-900 text-lg mb-3`}>
                {item.form}
              </h4>
              <div className="space-y-2">
                {item.examples.map((ex, i) => (
                  <div key={i} className={`bg-${item.color}-50 rounded p-3`}>
                    <p className="font-semibold text-gray-800 text-sm">{ex.en}</p>
                    <p className="text-xs text-gray-600 mt-1">{ex.ru}</p>
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

/* ========== ШАГ 11: Смешанная практика ========== */
function Step11() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "to the gym yesterday, but I felt too tired. (going)",
      answers: ["was going to go", "was going to"],
      explanation: "was going to — личный план, который не осуществился",
      wide: true,
    },
    {
      left: "2. She knew her parents",
      right: "be disappointed. (would)",
      answers: ["would", "would be", "'d be"],
      explanation: "would — предсказание после 'knew'",
      wide: true,
    },
    {
      left: "3. The conference",
      right: "take place in Berlin, but it was postponed. (to)",
      answers: ["was to", "was to take place"],
      explanation: "was to — официальное мероприятие",
      wide: true,
    },
    {
      left: "4. I",
      right: "send the email when my computer crashed. (about)",
      answers: ["was about to", "was about to send"],
      explanation: "was about to — действие вот-вот должно было произойти",
      wide: true,
    },
    {
      left: "5. They thought the exam",
      right: "be easy, but it wasn't. (would)",
      answers: ["would", "would be", "'d be"],
      explanation: "would — ожидание после 'thought'",
      wide: true,
    },
    {
      left: "6. We",
      right: "buy a new car, but we couldn't afford it. (going)",
      answers: ["were going to", "were going to buy"],
      explanation: "were going to — намерение, которое не реализовалось",
      wide: true,
    },
    {
      left: "7. The movie",
      right: "start when we found our seats. (about)",
      answers: ["was about to", "was about to start"],
      explanation: "was about to — фильм был на грани начала",
      wide: true,
    },
    {
      left: "8. He said he",
      right: "help me with the project. (would)",
      answers: ["would", "would help", "'d help"],
      explanation: "would — обещание после 'said'",
      wide: true,
    },
    {
      left: "9. The Prime Minister",
      right: "announce the decision today. (to)",
      answers: ["was to", "was to announce"],
      explanation: "was to — официальное объявление",
      wide: true,
    },
    {
      left: "10. I",
      right: "tell you the secret, but then I decided not to. (going)",
      answers: ["was going to", "was going to tell"],
      explanation: "was going to — намерение, от которого отказались",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Смешанная практика: Все формы Future in the Past"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 12: Real Life — Реальные ситуации ========== */
function Step12() {
  return (
    <>
      <UiSection title="🌍 Real Life: Future in the Past в жизни">
        <div className="space-y-4">
          {[
            {
              icon: "💼",
              category: "На работе",
              situation: "Обсуждение изменившихся планов",
              example:
                "We were going to launch the product in June, but we decided to wait until September.",
              ru: "Мы собирались запустить продукт в июне, но решили подождать до сентября.",
            },
            {
              icon: "🏠",
              category: "Дома",
              situation: "Объяснение планов семье",
              example:
                "I was about to call you when you walked in!",
              ru: "Я как раз собирался позвонить тебе, когда ты вошел!",
            },
            {
              icon: "📰",
              category: "В новостях",
              situation: "Сообщение об официальных событиях",
              example:
                "The president was to address the nation yesterday evening.",
              ru: "Президент должен был обратиться к нации вчера вечером.",
            },
            {
              icon: "🎓",
              category: "В учёбе",
              situation: "Рассказ о своих планах",
              example:
                "I thought the exam would be much harder.",
              ru: "Я думал, экзамен будет намного сложнее.",
            },
            {
              icon: "✈️",
              category: "Путешествия",
              situation: "Объяснение изменений в планах",
              example:
                "We were going to visit Japan, but then the pandemic started.",
              ru: "Мы собирались посетить Японию, но потом началась пандемия.",
            },
            {
              icon: "🎬",
              category: "В фильмах",
              situation: "Драматический момент",
              example:
                "Little did he know that he was to meet the love of his life that day.",
              ru: "Он и не подозревал, что ему суждено встретить любовь всей жизни в тот день.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 border-2 border-cyan-200 hover:border-cyan-400 transition"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="text-4xl">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-cyan-900 text-lg">{item.category}</h4>
                  <p className="text-sm text-cyan-700 mb-2">{item.situation}</p>
                </div>
              </div>
              <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-400">
                <p className="font-semibold text-gray-800 mb-2">{item.example}</p>
                <p className="text-sm text-gray-600">{item.ru}</p>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Рассказы и воспоминания">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "looking back",
              transcr: "/ˈlʊkɪŋ bæk/",
              translation: "оглядываясь назад",
            },
            {
              word: "at that time",
              transcr: "/æt ðæt taɪm/",
              translation: "в то время",
            },
            {
              word: "back then",
              transcr: "/bæk ðen/",
              translation: "тогда, в те времена",
            },
            {
              word: "little did I know",
              transcr: "/ˈlɪtl dɪd aɪ nəʊ/",
              translation: "я и не подозревал",
            },
            {
              word: "as it turned out",
              transcr: "/æz ɪt tɜːnd aʊt/",
              translation: "как оказалось",
            },
            {
              word: "in hindsight",
              transcr: "/ɪn ˈhaɪndsaɪt/",
              translation: "в ретроспективе",
            },
            {
              word: "destiny",
              transcr: "/ˈdestəni/",
              translation: "судьба, предназначение",
            },
            {
              word: "it was meant to be",
              transcr: "/ɪt wəz ment tuː biː/",
              translation: "так было суждено",
            },
            {
              word: "life had other plans",
              transcr: "/laɪf hæd ˈʌðə plænz/",
              translation: "у жизни были другие планы",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-cyan-400"
            >
              <p className="font-bold text-cyan-900 text-lg">{item.word}</p>
              <p className="text-xs text-cyan-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 13: Идиомы и устойчивые выражения ========== */
function Step13() {
  return (
    <>
      <UiSection title="💬 Идиомы и устойчивые выражения">
        <div className="space-y-4">
          {[
            {
              idiom: "It was meant to be",
              meaning: "Так было суждено",
              example:
                "We were to meet that day. I guess it was meant to be.",
              ru: "Нам было суждено встретиться в тот день. Думаю, так и должно было быть.",
            },
            {
              idiom: "Little did I know",
              meaning: "Я и не подозревал",
              example:
                "I was going to quit my job. Little did I know that I would get promoted the next week.",
              ru: "Я собирался уволиться. Я и не подозревал, что на следующей неделе меня повысят.",
            },
            {
              idiom: "It wasn't meant to be",
              meaning: "Не судьба / Не суждено",
              example:
                "We were going to get married, but it wasn't meant to be.",
              ru: "Мы собирались пожениться, но не судьба.",
            },
            {
              idiom: "As fate would have it",
              meaning: "Как распорядилась судьба",
              example:
                "I was to meet her years later. As fate would have it, we became best friends.",
              ru: "Мне суждено было встретить её годы спустя. Как распорядилась судьба, мы стали лучшими друзьями.",
            },
            {
              idiom: "I was just about to...",
              meaning: "Я как раз собирался...",
              example:
                "I was just about to text you! What a coincidence.",
              ru: "Я как раз собирался написать тебе! Какое совпадение.",
            },
            {
              idiom: "Life had other plans",
              meaning: "У жизни были другие планы",
              example:
                "I was going to be a doctor, but life had other plans.",
              ru: "Я собирался стать врачом, но у жизни были другие планы.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 border-2 border-indigo-200"
            >
              <div className="mb-4">
                <h4 className="text-xl font-bold text-indigo-900 mb-1">
                  {item.idiom}
                </h4>
                <p className="text-sm text-indigo-600">{item.meaning}</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                <p className="font-semibold text-gray-800 mb-2">{item.example}</p>
                <p className="text-sm text-gray-600">{item.ru}</p>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Судьба и предназначение">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "fate",
              transcr: "/feɪt/",
              translation: "судьба",
            },
            {
              word: "destiny",
              transcr: "/ˈdestəni/",
              translation: "предназначение",
            },
            {
              word: "coincidence",
              transcr: "/kəʊˈɪnsɪdəns/",
              translation: "совпадение",
            },
            {
              word: "fortune",
              transcr: "/ˈfɔːtʃuːn/",
              translation: "удача, судьба",
            },
            {
              word: "twist of fate",
              transcr: "/twɪst əv feɪt/",
              translation: "поворот судьбы",
            },
            {
              word: "serendipity",
              transcr: "/ˌserənˈdɪpəti/",
              translation: "счастливая случайность",
            },
            {
              word: "predestined",
              transcr: "/priːˈdestɪnd/",
              translation: "предопределённый",
            },
            {
              word: "inevitable",
              transcr: "/ɪnˈevɪtəbl/",
              translation: "неизбежный",
            },
            {
              word: "providence",
              transcr: "/ˈprɒvɪdəns/",
              translation: "провидение",
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

/* ========== ШАГ 14: Финальный тест ========== */
function Step14() {
  const items: FillItem[] = [
    {
      left: "1. The train",
      right: "depart in five minutes when we arrived. (about)",
      answers: ["was about to", "was about to depart"],
      explanation: "was about to — поезд был на грани отправления",
      wide: true,
    },
    {
      left: "2. I",
      right: "visit Paris last summer, but I didn't have enough money. (going)",
      answers: ["was going to", "was going to visit"],
      explanation: "was going to — личный план, который не осуществился",
      wide: true,
    },
    {
      left: "3. The company announced that it",
      right: "launch a new product. (would)",
      answers: ["would", "would launch", "'d launch"],
      explanation: "would — объявление о будущем действии",
      wide: true,
    },
    {
      left: "4. The concert",
      right: "begin at 8 PM, but the singer arrived late. (to)",
      answers: ["was to", "was to begin"],
      explanation: "was to — запланированное официальное событие",
      wide: true,
    },
    {
      left: "5. She",
      right: "tell him the truth when he walked away. (about)",
      answers: ["was about to", "was about to tell"],
      explanation: "was about to — действие было очень близко",
      wide: true,
    },
    {
      left: "6. We hoped the weather",
      right: "improve by the weekend. (would)",
      answers: ["would", "would improve", "'d improve"],
      explanation: "would — надежда на будущее после 'hoped'",
      wide: true,
    },
    {
      left: "7. They",
      right: "move to Canada, but found jobs here. (going)",
      answers: ["were going to", "were going to move"],
      explanation: "were going to — намерение, которое изменилось",
      wide: true,
    },
    {
      left: "8. The president",
      right: "address the nation that evening. (to)",
      answers: ["was to", "was to address"],
      explanation: "was to — официальное запланированное выступление",
      wide: true,
    },
    {
      left: "9. I didn't know it",
      right: "be such a big problem. (would)",
      answers: ["would", "would be", "'d be"],
      explanation: "would — неожиданное развитие после 'didn't know'",
      wide: true,
    },
    {
      left: "10. He",
      right: "ask her to marry him when she said goodbye. (about)",
      answers: ["was about to", "was about to ask"],
      explanation: "was about to — действие было на грани реализации",
      wide: true,
    },
    {
      left: "11. I",
      right: "study medicine, but chose engineering instead. (going)",
      answers: ["was going to", "was going to study"],
      explanation: "was going to — первоначальное намерение изменилось",
      wide: true,
    },
    {
      left: "12. Little did she know that she",
      right: "meet her future husband that day. (to)",
      answers: ["was to", "was to meet"],
      explanation: "was to — судьба, предопределенность",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="🎯 Финальный тест: Future in the Past"
        items={items}
      />

      <UiSection title="🎉 Поздравляем с завершением урока!">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300 text-center">
          <div className="text-7xl mb-4">🏆</div>
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Отличная работа!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Вы завершили тему <strong>"Future in the Past"</strong> и теперь знаете,
            как правильно выражать будущее с точки зрения прошлого!
          </p>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-bold text-green-900 mb-4 text-xl">
              ✅ Что вы изучили:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {[
                "was/were going to — планы и намерения",
                "was/were to — официальные планы и судьба",
                "would — предсказания в прошлом",
                "was/were about to — вот-вот должно было",
                "Различия между всеми формами",
                "Реальные жизненные ситуации",
                "Идиомы и устойчивые выражения",
                "60+ новых слов и фраз",
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

          <div className="bg-cyan-50 rounded-lg p-5 border-2 border-cyan-300">
            <p className="text-sm text-gray-700">
              💡 <strong>Совет:</strong> Практикуйтесь использовать эти конструкции,
              когда рассказываете истории из прошлого или объясняете, как изменились
              ваши планы!
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
