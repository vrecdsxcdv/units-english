"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function AdvancedGerundsInfinitives({ step }: Props) {
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

function Step1() {
  return (
    <>
      <UiSection title="🔄 Advanced: Gerund vs Infinitive — Смена значения">
        <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-10 mb-8 border-4 border-purple-300 shadow-xl">
          <div className="text-8xl mb-6 text-center animate-pulse">🎭</div>
          <h2 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Same Verb, Different Meaning
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 text-center font-semibold">
            Один глагол + две формы = два разных значения! 🤯
          </p>
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 border-2 border-purple-300 mb-6">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Некоторые глаголы <strong className="text-purple-700">полностью меняют значение</strong> в зависимости от того,
              используешь ты герундий (-ing) или инфинитив (to + V1).
            </p>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-5 border-2 border-pink-300">
              <p className="text-xl font-bold text-gray-900 mb-2">
                I regret telling him. ≠ I regret to tell you.
              </p>
              <p className="text-base text-gray-700 mb-3">
                🇷🇺 Сожалею, что сказал ≠ С сожалением сообщаю
              </p>
              <p className="text-sm text-purple-700 font-semibold">
                Одно слово regret, но совершенно разный смысл!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-300">
              <div className="text-4xl mb-2">📝</div>
              <p className="font-bold text-green-800 mb-2">Gerund (-ing)</p>
              <p className="text-sm text-gray-700">Часто о прошлом / законченном действии</p>
              <p className="text-xs text-gray-600 mt-1">I remember doing it</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border-2 border-blue-300">
              <div className="text-4xl mb-2">⏭️</div>
              <p className="font-bold text-blue-800 mb-2">Infinitive (to + V1)</p>
              <p className="text-sm text-gray-700">Часто о будущем / цели</p>
              <p className="text-xs text-gray-600 mt-1">I remember to do it</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-8 mb-6 border-4 border-yellow-300">
          <div className="text-6xl mb-4 text-center">🔑</div>
          <h3 className="text-2xl font-black text-center mb-4 text-orange-700">
            Топ-7 глаголов, которые меняют значение
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 border-2 border-purple-300">
              <p className="font-bold text-purple-800">1. REGRET — сожалеть</p>
              <p className="text-sm text-gray-700">-ing = сожаление о прошлом | to = формальное сообщение</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-blue-300">
              <p className="font-bold text-blue-800">2. REMEMBER — помнить</p>
              <p className="text-sm text-gray-700">-ing = помнить прошлое | to = не забыть сделать</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-green-300">
              <p className="font-bold text-green-800">3. FORGET — забыть</p>
              <p className="text-sm text-gray-700">-ing = забыть прошлое | to = забыть сделать</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-pink-300">
              <p className="font-bold text-pink-800">4. STOP — остановиться</p>
              <p className="text-sm text-gray-700">-ing = прекратить действие | to = остановиться, чтобы...</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-orange-300">
              <p className="font-bold text-orange-800">5. TRY — пытаться</p>
              <p className="text-sm text-gray-700">-ing = попробовать как эксперимент | to = пытаться достичь</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-indigo-300">
              <p className="font-bold text-indigo-800">6. GO ON — продолжить</p>
              <p className="text-sm text-gray-700">-ing = продолжить то же | to = перейти к следующему</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-rose-300">
              <p className="font-bold text-rose-800">7. MEAN — означать</p>
              <p className="text-sm text-gray-700">-ing = влечь за собой | to = намереваться</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-300">
          <div className="text-5xl mb-3">💡</div>
          <p className="text-lg font-bold text-indigo-800 mb-3">Общее правило (не всегда!):</p>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-sm text-gray-700 mb-1">
                <strong className="text-green-700">Gerund (-ing)</strong> — обычно о прошлом, законченном, реальном
              </p>
              <p className="text-xs text-gray-600 italic">I remember meeting him. (это случилось в прошлом)</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-sm text-gray-700 mb-1">
                <strong className="text-blue-700">Infinitive (to + V1)</strong> — о будущем, цели, намерении
              </p>
              <p className="text-xs text-gray-600 italic">I remember to meet him. (я не забуду встретиться в будущем)</p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step2() {
  return (
    <>
      <UiSection title="1️⃣ REGRET — Сожаление vs Формальное сообщение">
        <div className="bg-gradient-to-r from-red-100 via-pink-100 to-purple-100 rounded-2xl p-8 mb-8 border-4 border-red-400">
          <div className="text-7xl mb-4 text-center">😔</div>
          <h2 className="text-2xl font-black text-center mb-6 text-red-800">
            REGRET: Два совершенно разных значения
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-4 border-pink-300">
            <div className="text-5xl mb-3">😢</div>
            <h3 className="text-xl font-bold text-pink-800 mb-4">REGRET + -ING — Сожаление о прошлом</h3>

            <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-pink-300 mb-4">
              <p className="font-bold text-pink-700 mb-2">Формула:</p>
              <p className="font-mono text-lg text-gray-800 mb-3">
                regret + <strong className="text-pink-700">V-ing</strong>
              </p>
              <p className="text-gray-700">
                Сожалеешь о чём-то, что <strong>УЖЕ сделал</strong> в прошлом.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I regret telling him my secret.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Сожалею, что рассказал ему мой секрет.
                </p>
                <div className="bg-pink-50 rounded-lg p-3 mt-3 border border-pink-200">
                  <p className="text-xs text-gray-600">
                    💭 Я уже рассказал (прошлое), теперь сожалею об этом
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  She regrets dropping out of university.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Она сожалеет, что бросила университет.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Do you regret not buying Bitcoin in 2010?
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Ты сожалеешь, что не купил Bitcoin в 2010?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-3">📢</div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">REGRET + TO + V1 — Формальное сообщение</h3>

            <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-blue-300 mb-4">
              <p className="font-bold text-blue-700 mb-2">Формула:</p>
              <p className="font-mono text-lg text-gray-800 mb-3">
                regret + <strong className="text-blue-700">to + V1</strong>
              </p>
              <p className="text-gray-700">
                Формальное выражение: &quot;С сожалением сообщаю/информирую&quot;
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I regret to inform you that your application was rejected.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 С сожалением сообщаю вам, что ваша заявка отклонена.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mt-3 border border-blue-200">
                  <p className="text-xs text-gray-600">
                    💭 Формальная фраза в письмах/официальных сообщениях
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  We regret to tell you that the event has been cancelled.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 С сожалением сообщаем вам, что мероприятие отменено.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I regret to say that I cannot help you.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 С сожалением должен сказать, что не могу вам помочь.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-yellow-300">
          <div className="text-5xl mb-3 text-center">⚡</div>
          <h3 className="text-xl font-black text-center text-orange-800 mb-4">
            REGRET: Quick Comparison
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-pink-300">
              <p className="font-bold text-pink-700 mb-3">REGRET + -ING</p>
              <p className="text-sm text-gray-700 mb-2">
                = Сожалею о том, что сделал
              </p>
              <div className="bg-pink-50 rounded p-3 text-sm">
                I <strong>regret buying</strong> this car.<br />
                <span className="text-xs text-gray-600">(купил, теперь сожалею)</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-blue-300">
              <p className="font-bold text-blue-700 mb-3">REGRET + TO + V1</p>
              <p className="text-sm text-gray-700 mb-2">
                = С сожалением сообщаю
              </p>
              <div className="bg-blue-50 rounded p-3 text-sm">
                I <strong>regret to inform</strong> you...<br />
                <span className="text-xs text-gray-600">(формальное)</span>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step3() {
  return (
    <>
      <UiSection title="2️⃣ REMEMBER & FORGET — Прошлое vs Будущее">
        <div className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 rounded-2xl p-8 mb-8 border-4 border-purple-400">
          <div className="text-7xl mb-4 text-center">🧠</div>
          <h2 className="text-2xl font-black text-center mb-6 text-purple-800">
            REMEMBER & FORGET: Память о прошлом или обязанность?
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-4 border-green-300">
            <div className="text-5xl mb-3">📼</div>
            <h3 className="text-xl font-bold text-green-800 mb-4">REMEMBER/FORGET + -ING — Память о прошлом</h3>

            <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-green-300 mb-4">
              <p className="font-bold text-green-700 mb-2">Формула:</p>
              <p className="font-mono text-lg text-gray-800 mb-3">
                remember/forget + <strong className="text-green-700">V-ing</strong>
              </p>
              <p className="text-gray-700">
                Помнишь или забыл то, что <strong>УЖЕ произошло</strong> в прошлом.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I remember meeting her at the party.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Я помню, как встретил её на вечеринке.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mt-3 border border-green-200">
                  <p className="text-xs text-gray-600">
                    💭 Это уже случилось в прошлом — у меня есть воспоминание
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I will never forget seeing the Eiffel Tower for the first time.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Я никогда не забуду, как впервые увидел Эйфелеву башню.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Do you remember visiting this museum?
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Ты помнишь, как мы посещали этот музей?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-3">⏰</div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">REMEMBER/FORGET + TO + V1 — Обязанность/Задача</h3>

            <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-blue-300 mb-4">
              <p className="font-bold text-blue-700 mb-2">Формула:</p>
              <p className="font-mono text-lg text-gray-800 mb-3">
                remember/forget + <strong className="text-blue-700">to + V1</strong>
              </p>
              <p className="text-gray-700">
                Помнишь или забыл <strong>СДЕЛАТЬ</strong> что-то (обязанность, задача).
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Remember to lock the door when you leave.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Не забудь закрыть дверь, когда будешь уходить.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mt-3 border border-blue-200">
                  <p className="text-xs text-gray-600">
                    💭 Это ещё не сделано — напоминание о будущем действии
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I forgot to call my mom yesterday.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Я забыл позвонить маме вчера.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mt-3 border border-blue-200">
                  <p className="text-xs text-gray-600">
                    💭 Я должен был позвонить, но забыл это сделать
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Did you remember to buy milk?
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Ты не забыл купить молоко?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-yellow-300">
          <div className="text-5xl mb-3 text-center">⚡</div>
          <h3 className="text-xl font-black text-center text-orange-800 mb-4">
            REMEMBER/FORGET: Quick Comparison
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-green-300">
              <p className="font-bold text-green-700 mb-3">+ -ING (Прошлое)</p>
              <p className="text-sm text-gray-700 mb-3">
                = Память о прошлом событии
              </p>
              <div className="bg-green-50 rounded p-3 text-sm mb-3">
                I <strong>remember meeting</strong> him.<br />
                <span className="text-xs text-gray-600">(я помню это событие)</span>
              </div>
              <div className="bg-green-50 rounded p-3 text-sm">
                I <strong>forget locking</strong> the door.<br />
                <span className="text-xs text-gray-600">(забыл, закрывал ли)</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-blue-300">
              <p className="font-bold text-blue-700 mb-3">+ TO + V1 (Обязанность)</p>
              <p className="text-sm text-gray-700 mb-3">
                = Помнить/забыть сделать
              </p>
              <div className="bg-blue-50 rounded p-3 text-sm mb-3">
                I <strong>remember to meet</strong> him.<br />
                <span className="text-xs text-gray-600">(не забуду встретиться)</span>
              </div>
              <div className="bg-blue-50 rounded p-3 text-sm">
                I <strong>forgot to lock</strong> the door.<br />
                <span className="text-xs text-gray-600">(забыл закрыть)</span>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step4() {
  const items: FillItem[] = [
    {
      left: "I regret",
      answers: ["quitting", "leaving"],
      right: "(quit) my job. It was actually great.",
    },
    {
      left: "We regret",
      answers: ["to inform"],
      right: "(inform) you that the flight is delayed.",
    },
    {
      left: "I remember",
      answers: ["visiting"],
      right: "(visit) Paris when I was a child.",
    },
    {
      left: "Remember",
      answers: ["to bring"],
      right: "(bring) your passport tomorrow!",
    },
    {
      left: "I will never forget",
      answers: ["meeting"],
      right: "(meet) you for the first time.",
    },
    {
      left: "I forgot",
      answers: ["to send"],
      right: "(send) the email. I'll do it now.",
    },
    {
      left: "She regrets",
      answers: ["not studying", "not having studied"],
      right: "(not study) harder at school.",
    },
    {
      left: "Did you remember",
      answers: ["to lock"],
      right: "(lock) the car?",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: Regret, Remember, Forget">
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-2xl p-8 mb-6 border-4 border-purple-300">
          <div className="text-6xl mb-4 text-center">🎯</div>
          <h3 className="text-2xl font-black text-center text-purple-800 mb-3">
            Practice Time!
          </h3>
          <p className="text-center text-gray-700 font-semibold">
            Выбери правильную форму: -ing или to + V1
          </p>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй герундий (-ing) или инфинитив (to + V1)"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step5() {
  return (
    <>
      <UiSection title="3️⃣ STOP — Прекратить vs Остановиться для">
        <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-2xl p-8 mb-8 border-4 border-red-400">
          <div className="text-7xl mb-4 text-center">🛑</div>
          <h2 className="text-2xl font-black text-center mb-6 text-red-800">
            STOP: Прекратить действие или остановиться для цели?
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border-4 border-red-300">
            <div className="text-5xl mb-3">❌</div>
            <h3 className="text-xl font-bold text-red-800 mb-4">STOP + -ING — Прекратить действие</h3>

            <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-red-300 mb-4">
              <p className="font-bold text-red-700 mb-2">Формула:</p>
              <p className="font-mono text-lg text-gray-800 mb-3">
                stop + <strong className="text-red-700">V-ing</strong>
              </p>
              <p className="text-gray-700">
                <strong>Прекратить</strong> делать что-то (больше не делаешь это действие).
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-red-200 hover:border-red-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I stopped smoking last year.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Я бросил курить в прошлом году.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mt-3 border border-red-200">
                  <p className="text-xs text-gray-600">
                    💭 Раньше курил, теперь не курю — прекратил это действие
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-red-200 hover:border-red-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Stop talking! I'm trying to concentrate.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Перестань разговаривать! Я пытаюсь сконцентрироваться.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-red-200 hover:border-red-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  It stopped raining, so we went outside.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Дождь прекратился, и мы вышли на улицу.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-3">⏸️</div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">STOP + TO + V1 — Остановиться, чтобы...</h3>

            <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-blue-300 mb-4">
              <p className="font-bold text-blue-700 mb-2">Формула:</p>
              <p className="font-mono text-lg text-gray-800 mb-3">
                stop + <strong className="text-blue-700">to + V1</strong>
              </p>
              <p className="text-gray-700">
                <strong>Остановиться</strong> (прервать одно действие), <strong>чтобы</strong> сделать другое.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I stopped to buy coffee on my way to work.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Я остановился, чтобы купить кофе по дороге на работу.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mt-3 border border-blue-200">
                  <p className="text-xs text-gray-600">
                    💭 Я шёл на работу → остановился → купил кофе → продолжил идти
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  He stopped to help the old lady cross the road.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Он остановился, чтобы помочь пожилой женщине перейти дорогу.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  We stopped to take a photo of the beautiful view.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Мы остановились, чтобы сфотографировать красивый вид.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-yellow-300">
          <div className="text-5xl mb-3 text-center">⚡</div>
          <h3 className="text-xl font-black text-center text-orange-800 mb-4">
            STOP: Quick Comparison
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-red-300">
              <p className="font-bold text-red-700 mb-3">STOP + -ING</p>
              <p className="text-sm text-gray-700 mb-2">
                = Прекратить делать
              </p>
              <div className="bg-red-50 rounded p-3 text-sm">
                I <strong>stopped smoking</strong>.<br />
                <span className="text-xs text-gray-600">(бросил курить полностью)</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-blue-300">
              <p className="font-bold text-blue-700 mb-3">STOP + TO + V1</p>
              <p className="text-sm text-gray-700 mb-2">
                = Остановиться, чтобы...
              </p>
              <div className="bg-blue-50 rounded p-3 text-sm">
                I <strong>stopped to smoke</strong>.<br />
                <span className="text-xs text-gray-600">(остановился покурить)</span>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step6() {
  return (
    <>
      <UiSection title="4️⃣ TRY — Эксперимент vs Попытка достичь">
        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 rounded-2xl p-8 mb-8 border-4 border-purple-400">
          <div className="text-7xl mb-4 text-center">🧪</div>
          <h2 className="text-2xl font-black text-center mb-6 text-purple-800">
            TRY: Попробовать как эксперимент или пытаться достичь?
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-4 border-orange-300">
            <div className="text-5xl mb-3">🔬</div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">TRY + -ING — Попробовать как эксперимент</h3>

            <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-orange-300 mb-4">
              <p className="font-bold text-orange-700 mb-2">Формула:</p>
              <p className="font-mono text-lg text-gray-800 mb-3">
                try + <strong className="text-orange-700">V-ing</strong>
              </p>
              <p className="text-gray-700">
                <strong>Попробовать</strong> что-то как эксперимент/метод (посмотреть, сработает ли).
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Try restarting your computer. It might help.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Попробуй перезагрузить компьютер. Это может помочь.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mt-3 border border-orange-200">
                  <p className="text-xs text-gray-600">
                    💭 Эксперимент/метод решения проблемы
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If you can&apos;t sleep, try drinking warm milk.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если не можешь уснуть, попробуй выпить тёплое молоко.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Have you tried turning it off and on again?
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Ты пробовал выключить и включить снова?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">TRY + TO + V1 — Пытаться достичь цели</h3>

            <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-blue-300 mb-4">
              <p className="font-bold text-blue-700 mb-2">Формула:</p>
              <p className="font-mono text-lg text-gray-800 mb-3">
                try + <strong className="text-blue-700">to + V1</strong>
              </p>
              <p className="text-gray-700">
                <strong>Пытаться</strong> достичь цели (прилагать усилия, стараться).
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I tried to open the door, but it was locked.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Я пытался открыть дверь, но она была заперта.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mt-3 border border-blue-200">
                  <p className="text-xs text-gray-600">
                    💭 Старался достичь цели (открыть дверь), но не получилось
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  She tried to pass the exam, but failed.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Она пыталась сдать экзамен, но провалилась.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I'm trying to learn Spanish.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Я пытаюсь выучить испанский.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-yellow-300">
          <div className="text-5xl mb-3 text-center">⚡</div>
          <h3 className="text-xl font-black text-center text-orange-800 mb-4">
            TRY: Quick Comparison
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-orange-300">
              <p className="font-bold text-orange-700 mb-3">TRY + -ING</p>
              <p className="text-sm text-gray-700 mb-2">
                = Попробовать как метод
              </p>
              <div className="bg-orange-50 rounded p-3 text-sm">
                <strong>Try calling</strong> him again.<br />
                <span className="text-xs text-gray-600">(попробуй этот метод)</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-blue-300">
              <p className="font-bold text-blue-700 mb-3">TRY + TO + V1</p>
              <p className="text-sm text-gray-700 mb-2">
                = Пытаться достичь
              </p>
              <div className="bg-blue-50 rounded p-3 text-sm">
                I <strong>tried to call</strong> him.<br />
                <span className="text-xs text-gray-600">(старался, но не смог)</span>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "I stopped",
      answers: ["eating"],
      right: "(eat) junk food. I'm on a diet now.",
    },
    {
      left: "We stopped",
      answers: ["to get"],
      right: "(get) some petrol on the way.",
    },
    {
      left: "Try",
      answers: ["using"],
      right: "(use) a different browser. It might work better.",
    },
    {
      left: "I tried",
      answers: ["to fix"],
      right: "(fix) my laptop, but I couldn't.",
    },
    {
      left: "Stop",
      answers: ["making"],
      right: "(make) so much noise!",
    },
    {
      left: "She stopped",
      answers: ["to talk"],
      right: "(talk) to her friend in the street.",
    },
    {
      left: "If you have a headache, try",
      answers: ["taking"],
      right: "(take) an aspirin.",
    },
    {
      left: "He is trying",
      answers: ["to learn"],
      right: "(learn) to play the guitar.",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: Stop & Try">
        <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-2xl p-8 mb-6 border-4 border-red-300">
          <div className="text-6xl mb-4 text-center">🎯</div>
          <h3 className="text-2xl font-black text-center text-red-800 mb-3">
            Stop & Try Practice!
          </h3>
          <p className="text-center text-gray-700 font-semibold">
            Выбери правильную форму: -ing или to + V1
          </p>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй герундий (-ing) или инфинитив (to + V1)"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step8() {
  return (
    <>
      <UiSection title="5️⃣ GO ON & MEAN — Продолжение и Намерение">
        <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-2xl p-8 mb-8 border-4 border-green-400">
          <div className="text-7xl mb-4 text-center">➡️</div>
          <h2 className="text-2xl font-black text-center mb-6 text-green-800">
            GO ON & MEAN: Ещё два важных глагола
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-4 border-green-300">
            <div className="text-5xl mb-3">🔁</div>
            <h3 className="text-xl font-bold text-green-800 mb-4">GO ON — Продолжить то же vs Перейти к новому</h3>

            <div className="space-y-4 mb-6">
              <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-green-300">
                <p className="font-bold text-green-700 mb-2">GO ON + -ING:</p>
                <p className="text-gray-700 mb-2">
                  Продолжить <strong>ТО ЖЕ САМОЕ</strong> действие (не останавливаться).
                </p>
                <div className="bg-green-50 rounded p-3 mt-2">
                  <p className="text-sm font-semibold text-gray-900">
                    He went on talking for hours.
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    🇷🇺 Он продолжал говорить часами (одно и то же — говорил и говорил).
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-blue-300">
                <p className="font-bold text-blue-700 mb-2">GO ON + TO + V1:</p>
                <p className="text-gray-700 mb-2">
                  Закончить одно и <strong>ПЕРЕЙТИ К СЛЕДУЮЩЕМУ</strong> действию.
                </p>
                <div className="bg-blue-50 rounded p-3 mt-2">
                  <p className="text-sm font-semibold text-gray-900">
                    He finished school and went on to study at university.
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    🇷🇺 Он закончил школу и затем поступил в университет (перешёл к новому этапу).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border-2 border-green-200">
              <p className="font-bold text-green-700 mb-3">Ещё примеры:</p>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded">
                  <p className="text-sm font-semibold">She went on talking even after I asked her to stop.</p>
                  <p className="text-xs text-gray-600">🇷🇺 Она продолжала говорить, даже после того как я попросил её остановиться.</p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <p className="text-sm font-semibold">After graduating, he went on to become a famous doctor.</p>
                  <p className="text-xs text-gray-600">🇷🇺 После окончания он стал известным врачом.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-4 border-purple-300">
            <div className="text-5xl mb-3">💡</div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">MEAN — Влечь за собой vs Намереваться</h3>

            <div className="space-y-4 mb-6">
              <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-purple-300">
                <p className="font-bold text-purple-700 mb-2">MEAN + -ING:</p>
                <p className="text-gray-700 mb-2">
                  <strong>Означать</strong>, влечь за собой (результат/последствие).
                </p>
                <div className="bg-purple-50 rounded p-3 mt-2">
                  <p className="text-sm font-semibold text-gray-900">
                    Getting this job will mean moving to another city.
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    🇷🇺 Получить эту работу будет означать переезд в другой город.
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur rounded-xl p-5 border-2 border-pink-300">
                <p className="font-bold text-pink-700 mb-2">MEAN + TO + V1:</p>
                <p className="text-gray-700 mb-2">
                  <strong>Намереваться</strong>, собираться что-то сделать.
                </p>
                <div className="bg-pink-50 rounded p-3 mt-2">
                  <p className="text-sm font-semibold text-gray-900">
                    I didn&apos;t mean to hurt your feelings.
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    🇷🇺 Я не хотел обидеть тебя (не собирался/не намеревался).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border-2 border-purple-200">
              <p className="font-bold text-purple-700 mb-3">Ещё примеры:</p>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded">
                  <p className="text-sm font-semibold">Accepting this offer means working weekends.</p>
                  <p className="text-xs text-gray-600">🇷🇺 Принятие этого предложения означает работу по выходным.</p>
                </div>
                <div className="p-3 bg-pink-50 rounded">
                  <p className="text-sm font-semibold">I meant to call you yesterday, but I forgot.</p>
                  <p className="text-xs text-gray-600">🇷🇺 Я собирался позвонить тебе вчера, но забыл.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-yellow-300">
          <div className="text-5xl mb-3 text-center">📋</div>
          <h3 className="text-xl font-black text-center text-orange-800 mb-4">
            GO ON & MEAN: Summary
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-green-300">
              <p className="font-bold text-green-700 mb-3">GO ON</p>
              <p className="text-xs text-gray-700 mb-2">+ -ING = продолжить то же</p>
              <p className="text-xs text-gray-700">+ TO V1 = перейти к новому</p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-purple-300">
              <p className="font-bold text-purple-700 mb-3">MEAN</p>
              <p className="text-xs text-gray-700 mb-2">+ -ING = означать/влечь</p>
              <p className="text-xs text-gray-700">+ TO V1 = намереваться</p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "I regret",
      answers: ["telling"],
      right: "(tell) her the truth. She got upset.",
    },
    {
      left: "We regret",
      answers: ["to announce"],
      right: "(announce) that the event is cancelled.",
    },
    {
      left: "Do you remember",
      answers: ["locking"],
      right: "(lock) the door? I can't remember if I did.",
    },
    {
      left: "Remember",
      answers: ["to call"],
      right: "(call) me when you arrive!",
    },
    {
      left: "He stopped",
      answers: ["playing"],
      right: "(play) video games and started studying.",
    },
    {
      left: "I stopped",
      answers: ["to buy"],
      right: "(buy) some snacks at the store.",
    },
    {
      left: "Try",
      answers: ["refreshing"],
      right: "(refresh) the page if it doesn't load.",
    },
    {
      left: "She tried",
      answers: ["to explain"],
      right: "(explain) the situation, but no one listened.",
    },
    {
      left: "After dinner, we went on",
      answers: ["to watch"],
      right: "(watch) a movie.",
    },
    {
      left: "He went on",
      answers: ["complaining"],
      right: "(complain) for another hour.",
    },
    {
      left: "Getting a dog means",
      answers: ["taking"],
      right: "(take) it for walks every day.",
    },
    {
      left: "I didn't mean",
      answers: ["to offend"],
      right: "(offend) you. I'm sorry.",
    },
  ];

  return (
    <>
      <UiSection title="🔥 Advanced Practice: Все глаголы">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-10 mb-8 border-4 border-purple-300 shadow-xl">
          <div className="text-8xl mb-6 text-center">🚀</div>
          <h2 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Ultimate Challenge!
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed text-center font-semibold mb-6">
            Все 7 глаголов вместе — покажи свой уровень! 💪
          </p>
        </div>

        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй герундий (-ing) или инфинитив (to + V1)"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step10() {
  const items: FillItem[] = [
    {
      left: "I'll never forget",
      answers: ["meeting"],
      right: "(meet) my wife for the first time.",
    },
    {
      left: "Don't forget",
      answers: ["to send"],
      right: "(send) the report by Friday!",
    },
    {
      left: "I tried",
      answers: ["to open"],
      right: "(open) the window, but it was stuck.",
    },
    {
      left: "If you can't sleep, try",
      answers: ["reading"],
      right: "(read) a book.",
    },
    {
      left: "Stop",
      answers: ["interrupting"],
      right: "(interrupt) me when I'm speaking!",
    },
    {
      left: "Let's stop",
      answers: ["to rest"],
      right: "(rest) for a few minutes.",
    },
    {
      left: "After school, she went on",
      answers: ["to become"],
      right: "(become) a successful lawyer.",
    },
    {
      left: "Buying a house means",
      answers: ["paying"],
      right: "(pay) a lot of money upfront.",
    },
    {
      left: "I meant",
      answers: ["to email"],
      right: "(email) you, but I got busy.",
    },
    {
      left: "She regrets",
      answers: ["not traveling", "not having traveled"],
      right: "(not travel) more when she was young.",
    },
  ];

  return (
    <>
      <UiSection title="🏆 Final Test + Cheat Sheet">
        <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-10 mb-8 border-4 border-purple-400 shadow-xl">
          <div className="text-8xl mb-6 text-center">👑</div>
          <h2 className="text-4xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Gerund vs Infinitive Master!
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed text-center font-semibold">
            Финальный тест на все глаголы 🎯
          </p>
        </div>

        <CheckableExercise
          title="Финальный тест"
          instruction="Используй герундий (-ing) или инфинитив (to + V1)"
          items={items}
        />

        <div className="mt-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 border-4 border-indigo-400 shadow-xl">
          <div className="text-7xl mb-6 text-center">📖</div>
          <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ultimate Gerund vs Infinitive Cheat Sheet
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-4 border-red-300">
              <h3 className="text-xl font-black text-red-700 mb-4">1. REGRET</h3>
              <div className="space-y-3">
                <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-200">
                  <p className="font-bold text-sm mb-1">+ -ING</p>
                  <p className="text-xs text-gray-700 mb-2">Сожаление о прошлом</p>
                  <p className="text-sm">I regret <strong>telling</strong> him</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <p className="font-bold text-sm mb-1">+ TO + V1</p>
                  <p className="text-xs text-gray-700 mb-2">Формальное сообщение</p>
                  <p className="text-sm">I regret <strong>to inform</strong> you</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-4 border-green-300">
              <h3 className="text-xl font-black text-green-700 mb-4">2. REMEMBER</h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="font-bold text-sm mb-1">+ -ING</p>
                  <p className="text-xs text-gray-700 mb-2">Память о прошлом</p>
                  <p className="text-sm">I remember <strong>meeting</strong> her</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg border-2 border-cyan-200">
                  <p className="font-bold text-sm mb-1">+ TO + V1</p>
                  <p className="text-xs text-gray-700 mb-2">Не забыть сделать</p>
                  <p className="text-sm">Remember <strong>to lock</strong> the door</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-4 border-blue-300">
              <h3 className="text-xl font-black text-blue-700 mb-4">3. FORGET</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <p className="font-bold text-sm mb-1">+ -ING</p>
                  <p className="text-xs text-gray-700 mb-2">Забыть прошлое</p>
                  <p className="text-sm">I&apos;ll never forget <strong>seeing</strong> it</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border-2 border-indigo-200">
                  <p className="font-bold text-sm mb-1">+ TO + V1</p>
                  <p className="text-xs text-gray-700 mb-2">Забыть сделать</p>
                  <p className="text-sm">I forgot <strong>to call</strong> her</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-4 border-orange-300">
              <h3 className="text-xl font-black text-orange-700 mb-4">4. STOP</h3>
              <div className="space-y-3">
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                  <p className="font-bold text-sm mb-1">+ -ING</p>
                  <p className="text-xs text-gray-700 mb-2">Прекратить действие</p>
                  <p className="text-sm">Stop <strong>talking</strong>!</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <p className="font-bold text-sm mb-1">+ TO + V1</p>
                  <p className="text-xs text-gray-700 mb-2">Остановиться, чтобы...</p>
                  <p className="text-sm">I stopped <strong>to rest</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-4 border-purple-300">
              <h3 className="text-xl font-black text-purple-700 mb-4">5. TRY</h3>
              <div className="space-y-3">
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                  <p className="font-bold text-sm mb-1">+ -ING</p>
                  <p className="text-xs text-gray-700 mb-2">Попробовать (эксперимент)</p>
                  <p className="text-sm">Try <strong>restarting</strong> it</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <p className="font-bold text-sm mb-1">+ TO + V1</p>
                  <p className="text-xs text-gray-700 mb-2">Пытаться достичь</p>
                  <p className="text-sm">I tried <strong>to open</strong> it</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-4 border-green-300">
              <h3 className="text-xl font-black text-green-700 mb-4">6. GO ON</h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <p className="font-bold text-sm mb-1">+ -ING</p>
                  <p className="text-xs text-gray-700 mb-2">Продолжить то же</p>
                  <p className="text-sm">He went on <strong>talking</strong></p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <p className="font-bold text-sm mb-1">+ TO + V1</p>
                  <p className="text-xs text-gray-700 mb-2">Перейти к новому</p>
                  <p className="text-sm">She went on <strong>to become</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-4 border-pink-300">
              <h3 className="text-xl font-black text-pink-700 mb-4">7. MEAN</h3>
              <div className="space-y-3">
                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <p className="font-bold text-sm mb-1">+ -ING</p>
                  <p className="text-xs text-gray-700 mb-2">Означать/влечь</p>
                  <p className="text-sm">It means <strong>working</strong> hard</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-200">
                  <p className="font-bold text-sm mb-1">+ TO + V1</p>
                  <p className="text-xs text-gray-700 mb-2">Намереваться</p>
                  <p className="text-sm">I didn&apos;t mean <strong>to hurt</strong> you</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-yellow-300">
            <div className="text-5xl mb-3 text-center">💡</div>
            <h3 className="text-2xl font-black text-center text-orange-800 mb-4">
              General Pattern (не всегда!)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border-2 border-green-300">
                <p className="font-bold text-green-700 mb-2">GERUND (-ING)</p>
                <p className="text-sm text-gray-700">
                  ✓ О прошлом/законченном<br />
                  ✓ О реальном опыте<br />
                  ✓ Результат/последствие
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border-2 border-blue-300">
                <p className="font-bold text-blue-700 mb-2">INFINITIVE (TO + V1)</p>
                <p className="text-sm text-gray-700">
                  ✓ О будущем/цели<br />
                  ✓ О намерении<br />
                  ✓ Попытка достичь
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border-4 border-pink-300">
            <div className="text-4xl mb-3 text-center">💪</div>
            <h3 className="text-xl font-black text-center text-pink-800 mb-4">
              Congratulations! 🎉
            </h3>
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              Ты прошёл все 10 страниц Advanced Gerunds & Infinitives! Теперь ты знаешь все тонкости
              глаголов, которые меняют значение. Keep practicing! 🚀
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
