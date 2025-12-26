"use client";

import { useState } from "react";
import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

export default function PhrasalVerbs({ step }: Props) {
  // All hooks at the top
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [matchingGame, setMatchingGame] = useState<{selected: number[]; matched: number[]}>({
    selected: [],
    matched: []
  });

  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction with Visual Examples
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">🧩</span>
            <div>
              <h2 className="text-3xl font-bold">Phrasal Verbs</h2>
              <p className="text-purple-100 text-lg">20 самых частых на B1–B2</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mt-4">
            <p className="text-white/90 leading-relaxed">
              Фразовые глаголы — это комбинация глагола + частица, которая создаёт совершенно новое значение. Они делают вашу речь живой и естественной!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">🎯 Что такое фразовый глагол?</h3>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 mb-6">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-white rounded-lg px-6 py-4 shadow-sm border-2 border-indigo-300">
                <p className="text-sm text-slate-600 mb-1">Глагол</p>
                <p className="text-2xl font-bold text-indigo-600">turn</p>
                <p className="text-sm text-slate-500 mt-1">поворачивать</p>
              </div>

              <span className="text-3xl text-slate-400 font-bold">+</span>

              <div className="bg-white rounded-lg px-6 py-4 shadow-sm border-2 border-purple-300">
                <p className="text-sm text-slate-600 mb-1">Частица</p>
                <p className="text-2xl font-bold text-purple-600">down</p>
                <p className="text-sm text-slate-500 mt-1">вниз</p>
              </div>

              <span className="text-3xl text-slate-400 font-bold">=</span>

              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg px-6 py-4 shadow-md text-white">
                <p className="text-sm opacity-90 mb-1">Новое значение!</p>
                <p className="text-2xl font-bold">turn down</p>
                <p className="text-sm opacity-90 mt-1">отклонить ❌</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <p className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                <span>✅</span> Пример
              </p>
              <p className="text-slate-700 mb-2">
                <strong className="text-green-700">She turned down the job offer.</strong>
              </p>
              <p className="text-sm text-slate-600">Она отклонила предложение о работе.</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <span>💡</span> Почему важно?
              </p>
              <p className="text-slate-700 text-sm">
                Носители используют phrasal verbs постоянно! Без них ваш английский звучит слишком формально и неестественно.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
          <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">📚</span>
            План изучения
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-3">
              <span className="bg-amber-200 text-amber-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              <span className="text-slate-700">20 глаголов с примерами</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-amber-200 text-amber-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              <span className="text-slate-700">Интерактивные карточки</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-amber-200 text-amber-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              <span className="text-slate-700">Игра на запоминание</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-amber-200 text-amber-900 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
              <span className="text-slate-700">Практические упражнения</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Interactive Cards Part 1 (Verbs 1-5)
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const verbs = [
      {
        verb: "turn down",
        meaning: "отклонить, отказать",
        example: "She turned down the job offer.",
        translation: "Она отклонила предложение о работе.",
        emoji: "🚫",
        color: "from-red-400 to-rose-500"
      },
      {
        verb: "run out of",
        meaning: "закончиться (о чём-то)",
        example: "We ran out of milk this morning.",
        translation: "У нас закончилось молоко этим утром.",
        emoji: "📦",
        color: "from-orange-400 to-amber-500"
      },
      {
        verb: "look forward to",
        meaning: "ждать с нетерпением",
        example: "I look forward to seeing you!",
        translation: "Жду встречи с тобой с нетерпением!",
        emoji: "🎉",
        color: "from-yellow-400 to-orange-500"
      },
      {
        verb: "give up",
        meaning: "сдаться, бросить",
        example: "Never give up on your dreams.",
        translation: "Никогда не сдавайся в своих мечтах.",
        emoji: "🏳️",
        color: "from-blue-400 to-indigo-500"
      },
      {
        verb: "put off",
        meaning: "откладывать",
        example: "Stop putting off your homework!",
        translation: "Перестань откладывать домашнюю работу!",
        emoji: "⏰",
        color: "from-purple-400 to-pink-500"
      },
    ];

    const toggleFlip = (index: number) => {
      if (flippedCards.includes(index)) {
        setFlippedCards(flippedCards.filter(i => i !== index));
      } else {
        setFlippedCards([...flippedCards, index]);
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-800">📚 Глаголы 1-5</h2>
            <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
              Прогресс: 5/20
            </div>
          </div>
          <p className="text-slate-600">Кликните на карточку, чтобы увидеть пример использования</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {verbs.map((item, idx) => (
            <div
              key={idx}
              className="relative h-48 cursor-pointer perspective-1000"
              onClick={() => toggleFlip(idx)}
            >
              <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flippedCards.includes(idx) ? 'rotate-y-180' : ''}`}>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden">
                  <div className={`h-full bg-gradient-to-br ${item.color} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between`}>
                    <div>
                      <div className="text-4xl mb-3">{item.emoji}</div>
                      <h3 className="text-2xl font-bold mb-2">{item.verb}</h3>
                      <p className="text-white/90 text-lg">{item.meaning}</p>
                    </div>
                    <p className="text-sm text-white/70">👆 Кликни для примера</p>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200">
                    <div className="text-2xl mb-3">{item.emoji}</div>
                    <p className="font-semibold text-slate-800 mb-3">{item.example}</p>
                    <p className="text-sm text-slate-600 mb-4 italic">{item.translation}</p>
                    <p className="text-xs text-slate-500">👆 Кликни чтобы вернуться</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
          <p className="flex items-start gap-3 text-slate-700">
            <span className="text-2xl">💡</span>
            <span>
              <strong className="text-indigo-900">Совет:</strong> Произнесите каждый пример вслух 3 раза. Это поможет запомнить произношение и интонацию!
            </span>
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Interactive Cards Part 2 (Verbs 6-10)
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const verbs = [
      {
        verb: "come across",
        meaning: "наткнуться, случайно найти",
        example: "I came across an old photo yesterday.",
        translation: "Вчера я наткнулся на старую фотографию.",
        emoji: "🔍",
        color: "from-emerald-400 to-teal-500"
      },
      {
        verb: "carry on",
        meaning: "продолжать",
        example: "Carry on with your work!",
        translation: "Продолжайте свою работу!",
        emoji: "▶️",
        color: "from-cyan-400 to-blue-500"
      },
      {
        verb: "set up",
        meaning: "создать, организовать",
        example: "They set up a new company.",
        translation: "Они создали новую компанию.",
        emoji: "🏢",
        color: "from-sky-400 to-indigo-500"
      },
      {
        verb: "find out",
        meaning: "узнать, выяснить",
        example: "I need to find out the truth.",
        translation: "Мне нужно узнать правду.",
        emoji: "🕵️",
        color: "from-violet-400 to-purple-500"
      },
      {
        verb: "bring up",
        meaning: "воспитать / поднять тему",
        example: "She was brought up in London.",
        translation: "Она выросла в Лондоне.",
        emoji: "👶",
        color: "from-fuchsia-400 to-pink-500"
      },
    ];

    const toggleFlip = (index: number) => {
      if (flippedCards.includes(index)) {
        setFlippedCards(flippedCards.filter(i => i !== index));
      } else {
        setFlippedCards([...flippedCards, index]);
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-800">📚 Глаголы 6-10</h2>
            <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              Прогресс: 10/20
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {verbs.map((item, idx) => (
            <div
              key={idx}
              className="relative h-48 cursor-pointer"
              onClick={() => toggleFlip(idx)}
            >
              <div className={`relative w-full h-full transition-all duration-500 ${flippedCards.includes(idx) ? '' : ''}`}>
                {!flippedCards.includes(idx) ? (
                  <div className={`h-full bg-gradient-to-br ${item.color} text-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex flex-col justify-between`}>
                    <div>
                      <div className="text-4xl mb-3">{item.emoji}</div>
                      <h3 className="text-2xl font-bold mb-2">{item.verb}</h3>
                      <p className="text-white/90 text-lg">{item.meaning}</p>
                    </div>
                    <p className="text-sm text-white/70">👆 Кликни для примера</p>
                  </div>
                ) : (
                  <div className="h-full bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:shadow-xl transition-shadow">
                    <div className="text-2xl mb-3">{item.emoji}</div>
                    <p className="font-semibold text-slate-800 mb-3">{item.example}</p>
                    <p className="text-sm text-slate-600 mb-4 italic">{item.translation}</p>
                    <p className="text-xs text-slate-500">👆 Кликни чтобы вернуться</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-bold text-amber-900 mb-2">Обратите внимание: bring up</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-semibold text-indigo-700 mb-1">1️⃣ Воспитать</p>
                  <p className="text-sm text-slate-600">She was brought up by her grandparents.</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="font-semibold text-purple-700 mb-1">2️⃣ Поднять тему</p>
                  <p className="text-sm text-slate-600">He brought up the issue at the meeting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Interactive Cards Part 3 (Verbs 11-15)
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const verbs = [
      {
        verb: "take off",
        meaning: "взлететь / снять",
        examples: [
          { text: "The plane took off on time.", translation: "Самолёт взлетел вовремя.", type: "✈️ Взлететь" },
          { text: "Take off your shoes.", translation: "Сними обувь.", type: "👟 Снять" }
        ],
        emoji: "✈️",
        color: "from-rose-400 to-pink-500"
      },
      {
        verb: "break down",
        meaning: "сломаться / расплакаться",
        examples: [
          { text: "My car broke down.", translation: "Моя машина сломалась.", type: "🚗 Сломаться" },
          { text: "She broke down in tears.", translation: "Она расплакалась.", type: "😢 Расплакаться" }
        ],
        emoji: "⚠️",
        color: "from-red-400 to-orange-500"
      },
      {
        verb: "get along",
        meaning: "ладить с кем-то",
        examples: [
          { text: "Do you get along with your boss?", translation: "Ты ладишь со своим боссом?", type: "👥 Ладить" }
        ],
        emoji: "🤝",
        color: "from-green-400 to-emerald-500"
      },
      {
        verb: "make up",
        meaning: "помириться / выдумать",
        examples: [
          { text: "They made up after the fight.", translation: "Они помирились после ссоры.", type: "💑 Помириться" },
          { text: "She made up an excuse.", translation: "Она выдумала оправдание.", type: "💭 Выдумать" }
        ],
        emoji: "💕",
        color: "from-pink-400 to-rose-500"
      },
      {
        verb: "pick up",
        meaning: "подобрать / выучить",
        examples: [
          { text: "Pick up that box.", translation: "Подними эту коробку.", type: "📦 Подобрать" },
          { text: "I picked up Spanish quickly.", translation: "Я быстро выучил испанский.", type: "📚 Выучить" }
        ],
        emoji: "👆",
        color: "from-blue-400 to-cyan-500"
      },
    ];

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-800">🔄 Глаголы с несколькими значениями (11-15)</h2>
            <div className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
              Прогресс: 15/20
            </div>
          </div>
          <p className="text-slate-600">Один глагол может иметь совершенно разные значения!</p>
        </div>

        <div className="space-y-4">
          {verbs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className={`w-full p-5 text-left hover:bg-slate-50 transition-colors flex items-center justify-between ${expandedIndex === idx ? 'bg-slate-50' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-3xl bg-gradient-to-br ${item.color} w-14 h-14 rounded-xl flex items-center justify-center`}>
                    <span>{item.emoji}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{item.verb}</h3>
                    <p className="text-slate-600">{item.meaning}</p>
                  </div>
                </div>
                <span className="text-2xl text-slate-400">{expandedIndex === idx ? "−" : "+"}</span>
              </button>

              {expandedIndex === idx && (
                <div className="p-5 pt-0 space-y-3">
                  {item.examples.map((ex, exIdx) => (
                    <div key={exIdx} className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200">
                      <p className="text-sm font-semibold text-indigo-700 mb-2">{ex.type}</p>
                      <p className="font-medium text-slate-800 mb-1">{ex.text}</p>
                      <p className="text-sm text-slate-600 italic">{ex.translation}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
          <p className="flex items-start gap-3 text-slate-700">
            <span className="text-2xl">🎯</span>
            <span>
              <strong className="text-indigo-900">Важно:</strong> Контекст решает всё! Одно и то же слово может значить совершенно разное в зависимости от ситуации.
            </span>
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Interactive Cards Part 4 (Verbs 16-20)
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const verbs = [
      {
        verb: "work out",
        meaning: "тренироваться / решить",
        example: "I work out three times a week.",
        translation: "Я тренируюсь три раза в неделю.",
        emoji: "💪",
        color: "from-orange-400 to-red-500"
      },
      {
        verb: "figure out",
        meaning: "понять, разобраться",
        example: "I finally figured out how this works.",
        translation: "Я наконец понял, как это работает.",
        emoji: "🤔",
        color: "from-yellow-400 to-amber-500"
      },
      {
        verb: "turn out",
        meaning: "оказаться",
        example: "It turned out to be a great idea!",
        translation: "Это оказалось отличной идеей!",
        emoji: "🎊",
        color: "from-lime-400 to-green-500"
      },
      {
        verb: "end up",
        meaning: "в итоге оказаться",
        example: "We ended up staying until midnight.",
        translation: "В итоге мы остались до полуночи.",
        emoji: "🌙",
        color: "from-teal-400 to-cyan-500"
      },
      {
        verb: "show up",
        meaning: "появиться, прийти",
        example: "He showed up late to the party.",
        translation: "Он пришёл на вечеринку с опозданием.",
        emoji: "👋",
        color: "from-indigo-400 to-purple-500"
      },
    ];

    const toggleFlip = (index: number) => {
      if (flippedCards.includes(index)) {
        setFlippedCards(flippedCards.filter(i => i !== index));
      } else {
        setFlippedCards([...flippedCards, index]);
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">🎉 Последние 5 глаголов!</h2>
              <p className="text-green-100">Вы почти освоили все 20 фразовых глаголов</p>
            </div>
            <div className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-bold">
              20/20 ✓
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {verbs.map((item, idx) => (
            <div
              key={idx}
              className="relative h-48 cursor-pointer group"
              onClick={() => toggleFlip(idx)}
            >
              <div className={`relative w-full h-full transition-all duration-500`}>
                {!flippedCards.includes(idx) ? (
                  <div className={`h-full bg-gradient-to-br ${item.color} text-white rounded-xl p-6 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all flex flex-col justify-between`}>
                    <div>
                      <div className="text-4xl mb-3">{item.emoji}</div>
                      <h3 className="text-2xl font-bold mb-2">{item.verb}</h3>
                      <p className="text-white/90 text-lg">{item.meaning}</p>
                    </div>
                    <p className="text-sm text-white/70">👆 Кликни для примера</p>
                  </div>
                ) : (
                  <div className="h-full bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 group-hover:shadow-2xl transition-shadow">
                    <div className="text-2xl mb-3">{item.emoji}</div>
                    <p className="font-semibold text-slate-800 mb-3">{item.example}</p>
                    <p className="text-sm text-slate-600 mb-4 italic">{item.translation}</p>
                    <p className="text-xs text-slate-500">👆 Кликни чтобы вернуться</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-6">
          <div className="flex items-center gap-4">
            <span className="text-5xl">🏆</span>
            <div>
              <h3 className="text-xl font-bold mb-1">Поздравляем!</h3>
              <p className="text-purple-100">Вы познакомились со всеми 20 фразовыми глаголами. Теперь давайте разберём важные правила!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Separable vs Inseparable (Interactive)
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const categories = {
      separable: {
        title: "Separable (Разделяемые)",
        color: "green",
        description: "Объект можно ставить между глаголом и частицей",
        examples: [
          { correct: "Turn down the offer", incorrect: "", note: "✓" },
          { correct: "Turn the offer down", incorrect: "", note: "✓" },
          { correct: "Turn it down", incorrect: "Turn down it", note: "✓ Местоимение — только между!" },
        ],
        verbs: [
          "turn down", "give up", "put off", "set up", "find out",
          "bring up", "take off", "make up", "pick up", "work out", "figure out"
        ]
      },
      inseparable: {
        title: "Inseparable (Неразделяемые)",
        color: "red",
        description: "Объект всегда идёт после всей конструкции",
        examples: [
          { correct: "Look forward to the party", incorrect: "", note: "✓" },
          { correct: "Look forward to it", incorrect: "", note: "✓" },
          { correct: "", incorrect: "Look the party forward to", note: "✗ Нельзя разделять!" },
        ],
        verbs: [
          "run out of", "look forward to", "come across", "carry on",
          "get along (with)", "turn out", "end up", "show up", "break down"
        ]
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">🔀 Separable vs Inseparable</h2>
          <p className="text-slate-600">Очень важное правило для правильного использования phrasal verbs!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Separable */}
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">SEPARABLE</span>
              <span className="text-2xl">✂️</span>
            </div>
            <h3 className="font-bold text-green-900 mb-2">{categories.separable.title}</h3>
            <p className="text-slate-700 text-sm mb-4">{categories.separable.description}</p>

            <div className="space-y-2 mb-4">
              {categories.separable.examples.map((ex, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3">
                  {ex.correct && <p className="text-green-700 font-medium text-sm">✓ {ex.correct}</p>}
                  {ex.incorrect && <p className="text-red-600 font-medium text-sm">✗ {ex.incorrect}</p>}
                  {ex.note && <p className="text-xs text-slate-600 mt-1">{ex.note}</p>}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-600 mb-2">Примеры глаголов:</p>
              <div className="flex flex-wrap gap-2">
                {categories.separable.verbs.slice(0, 6).map((verb, idx) => (
                  <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    {verb}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Inseparable */}
          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">INSEPARABLE</span>
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="font-bold text-red-900 mb-2">{categories.inseparable.title}</h3>
            <p className="text-slate-700 text-sm mb-4">{categories.inseparable.description}</p>

            <div className="space-y-2 mb-4">
              {categories.inseparable.examples.map((ex, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3">
                  {ex.correct && <p className="text-green-700 font-medium text-sm">✓ {ex.correct}</p>}
                  {ex.incorrect && <p className="text-red-600 font-medium text-sm">✗ {ex.incorrect}</p>}
                  {ex.note && <p className="text-xs text-slate-600 mt-1">{ex.note}</p>}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-xs font-semibold text-slate-600 mb-2">Примеры глаголов:</p>
              <div className="flex flex-wrap gap-2">
                {categories.inseparable.verbs.slice(0, 6).map((verb, idx) => (
                  <span key={idx} className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                    {verb}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
          <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            Золотое правило для местоимений
          </h3>
          <p className="text-slate-700 mb-4">
            Если объект — местоимение (it, them, him, her), то в SEPARABLE глаголах оно <strong>всегда</strong> ставится между глаголом и частицей:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-4 border-2 border-green-300">
              <p className="font-bold text-green-700 mb-2">✓ Правильно</p>
              <p className="text-sm text-slate-700">Turn <strong>it</strong> down</p>
              <p className="text-sm text-slate-700">Pick <strong>them</strong> up</p>
              <p className="text-sm text-slate-700">Give <strong>it</strong> up</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <p className="font-bold text-red-700 mb-2">✗ Неправильно</p>
              <p className="text-sm text-slate-700">Turn down <strong>it</strong></p>
              <p className="text-sm text-slate-700">Pick up <strong>them</strong></p>
              <p className="text-sm text-slate-700">Give up <strong>it</strong></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Matching Game
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const pairs = [
      { id: 0, verb: "turn down", meaning: "отклонить" },
      { id: 1, verb: "run out of", meaning: "закончиться" },
      { id: 2, verb: "look forward to", meaning: "ждать с нетерпением" },
      { id: 3, verb: "give up", meaning: "сдаться" },
      { id: 4, verb: "come across", meaning: "наткнуться" },
      { id: 5, verb: "figure out", meaning: "понять" },
    ];

    const handleClick = (id: number) => {
      const newSelected = [...matchingGame.selected];
      if (newSelected.includes(id)) {
        newSelected.splice(newSelected.indexOf(id), 1);
      } else {
        newSelected.push(id);
      }

      if (newSelected.length === 2) {
        // Check if it's a match (same id)
        if (newSelected[0] === newSelected[1]) {
          setMatchingGame({
            selected: [],
            matched: [...matchingGame.matched, newSelected[0]]
          });
        } else {
          setTimeout(() => {
            setMatchingGame({ ...matchingGame, selected: [] });
          }, 1000);
        }
      } else {
        setMatchingGame({ ...matchingGame, selected: newSelected });
      }
    };

    const allMatched = matchingGame.matched.length === pairs.length;

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">🎮 Игра: Найди пару!</h2>
          <p className="text-purple-100">Соедините фразовый глагол с его значением</p>
        </div>

        {!allMatched ? (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Verbs Column */}
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-700 mb-3">Фразовые глаголы:</h3>
              {pairs.map((pair) => (
                <button
                  key={`verb-${pair.id}`}
                  onClick={() => handleClick(pair.id)}
                  disabled={matchingGame.matched.includes(pair.id)}
                  className={`w-full p-4 rounded-lg font-semibold text-left transition-all ${
                    matchingGame.matched.includes(pair.id)
                      ? 'bg-green-100 text-green-700 border-2 border-green-300'
                      : matchingGame.selected.includes(pair.id)
                      ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-400 scale-105'
                      : 'bg-white border-2 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  {matchingGame.matched.includes(pair.id) ? '✓ ' : ''}{pair.verb}
                </button>
              ))}
            </div>

            {/* Meanings Column */}
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-700 mb-3">Значения:</h3>
              {[...pairs].sort(() => Math.random() - 0.5).map((pair) => (
                <button
                  key={`meaning-${pair.id}`}
                  onClick={() => handleClick(pair.id)}
                  disabled={matchingGame.matched.includes(pair.id)}
                  className={`w-full p-4 rounded-lg font-semibold text-left transition-all ${
                    matchingGame.matched.includes(pair.id)
                      ? 'bg-green-100 text-green-700 border-2 border-green-300'
                      : matchingGame.selected.includes(pair.id)
                      ? 'bg-pink-100 text-pink-700 border-2 border-pink-400 scale-105'
                      : 'bg-white border-2 border-slate-200 hover:border-pink-300 hover:bg-pink-50'
                  }`}
                >
                  {matchingGame.matched.includes(pair.id) ? '✓ ' : ''}{pair.meaning}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold mb-2">Отлично!</h3>
            <p className="text-xl text-green-100">Вы нашли все пары!</p>
            <button
              onClick={() => setMatchingGame({ selected: [], matched: [] })}
              className="mt-4 bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Играть снова
            </button>
          </div>
        )}
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Exercise 1 - Fill in the blanks
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const items: FillItem[] = [
      {
        left: "She",
        right: "the job offer because the salary was too low.",
        answers: ["turned down"],
      },
      {
        left: "We",
        right: "coffee, so I need to buy more.",
        answers: ["ran out of"],
      },
      {
        left: "I really",
        right: "seeing you next week!",
        answers: ["look forward to"],
      },
      {
        left: "He",
        right: "smoking last year.",
        answers: ["gave up"],
      },
      {
        left: "I",
        right: "an interesting article yesterday.",
        answers: ["came across"],
      },
      {
        left: "They",
        right: "a new company last month.",
        answers: ["set up"],
      },
      {
        left: "I need to",
        right: "the truth about what happened.",
        answers: ["find out"],
      },
      {
        left: "The plane",
        right: "on time this morning.",
        answers: ["took off"],
      },
      {
        left: "I finally",
        right: "how to solve the problem.",
        answers: ["figured out", "worked out"],
      },
      {
        left: "He",
        right: "late to every meeting.",
        answers: ["shows up"],
      },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">✏️ Упражнение: Заполните пропуски</h2>
          <p className="text-slate-600">Вставьте правильный фразовый глагол</p>
        </div>

        <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
          <p className="text-sm text-indigo-900 font-semibold mb-2">💡 Подсказка: Используйте эти глаголы</p>
          <div className="flex flex-wrap gap-2">
            {['turn down', 'run out of', 'look forward to', 'give up', 'come across', 'set up', 'find out', 'take off', 'figure out', 'show up'].map((verb, idx) => (
              <span key={idx} className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                {verb}
              </span>
            ))}
          </div>
        </div>

        <CheckableExercise
          title="Phrasal Verbs Practice"
          items={items}
        />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: Exercise 2 - Context sentences
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const items: FillItem[] = [
      {
        left: "My car",
        right: "on the highway, so I had to call a mechanic.",
        answers: ["broke down"],
      },
      {
        left: "Do you",
        right: "with your new roommate?",
        answers: ["get along"],
      },
      {
        left: "They",
        right: "after a long argument.",
        answers: ["made up"],
      },
      {
        left: "I",
        right: "some French while traveling in Paris.",
        answers: ["picked up"],
      },
      {
        left: "She",
        right: "three times a week at the gym.",
        answers: ["works out"],
      },
      {
        left: "It",
        right: "that he was lying all along.",
        answers: ["turned out"],
      },
      {
        left: "We",
        right: "staying at a different hotel.",
        answers: ["ended up"],
      },
      {
        left: "The meeting was",
        right: "until next Monday.",
        answers: ["put off"],
      },
      {
        left: "Please",
        right: "with your work while I'm gone.",
        answers: ["carry on"],
      },
      {
        left: "She was",
        right: "by her grandparents in the countryside.",
        answers: ["brought up"],
      },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">✏️ Упражнение 2: Контекст</h2>
          <p className="text-slate-600">Заполните пропуски, обращая внимание на контекст</p>
        </div>

        <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
          <p className="text-sm text-purple-900 font-semibold mb-2">💡 Подсказка: Используйте эти глаголы</p>
          <div className="flex flex-wrap gap-2">
            {['break down', 'get along', 'make up', 'pick up', 'work out', 'turn out', 'end up', 'put off', 'carry on', 'bring up'].map((verb, idx) => (
              <span key={idx} className="bg-white text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                {verb}
              </span>
            ))}
          </div>
        </div>

        <CheckableExercise
          title="Phrasal Verbs in Context"
          items={items}
        />

        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <p className="flex items-start gap-2 text-amber-900">
            <span className="text-xl">⚠️</span>
            <span className="text-sm">
              <strong>Важно:</strong> Обращайте внимание на форму глагола! Иногда нужно изменить время (broke down, worked out, etc.)
            </span>
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10: Summary & Cheat Sheet
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    const allVerbs = [
      { verb: "turn down", meaning: "отклонить", type: "sep" },
      { verb: "run out of", meaning: "закончиться", type: "insep" },
      { verb: "look forward to", meaning: "ждать с нетерпением", type: "insep" },
      { verb: "give up", meaning: "сдаться", type: "sep" },
      { verb: "put off", meaning: "откладывать", type: "sep" },
      { verb: "come across", meaning: "наткнуться", type: "insep" },
      { verb: "carry on", meaning: "продолжать", type: "insep" },
      { verb: "set up", meaning: "создать", type: "sep" },
      { verb: "find out", meaning: "узнать", type: "sep" },
      { verb: "bring up", meaning: "воспитать / поднять тему", type: "sep" },
      { verb: "take off", meaning: "взлететь / снять", type: "sep" },
      { verb: "break down", meaning: "сломаться", type: "insep" },
      { verb: "get along", meaning: "ладить", type: "insep" },
      { verb: "make up", meaning: "помириться / выдумать", type: "sep" },
      { verb: "pick up", meaning: "подобрать / выучить", type: "sep" },
      { verb: "work out", meaning: "тренироваться / решить", type: "sep" },
      { verb: "figure out", meaning: "понять", type: "sep" },
      { verb: "turn out", meaning: "оказаться", type: "insep" },
      { verb: "end up", meaning: "в итоге оказаться", type: "insep" },
      { verb: "show up", meaning: "появиться", type: "insep" },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-2">Поздравляем!</h2>
          <p className="text-xl text-green-100">Вы освоили 20 самых частых фразовых глаголов B1-B2!</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>📋</span> Полная шпаргалка
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {allVerbs.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-4 rounded-lg border-l-4 ${
                  item.type === 'sep'
                    ? 'bg-green-50 border-green-400'
                    : 'bg-red-50 border-red-400'
                }`}
              >
                <div>
                  <p className="font-bold text-slate-800">{item.verb}</p>
                  <p className="text-sm text-slate-600">{item.meaning}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  item.type === 'sep'
                    ? 'bg-green-200 text-green-800'
                    : 'bg-red-200 text-red-800'
                }`}>
                  {item.type === 'sep' ? 'SEP' : 'INSEP'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200 text-center">
            <div className="text-4xl mb-3">📖</div>
            <h4 className="font-bold text-indigo-900 mb-2">Читайте</h4>
            <p className="text-sm text-slate-600">
              Ищите phrasal verbs в книгах и статьях
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200 text-center">
            <div className="text-4xl mb-3">🗣️</div>
            <h4 className="font-bold text-purple-900 mb-2">Говорите</h4>
            <p className="text-sm text-slate-600">
              Используйте в разговоре как можно чаще
            </p>
          </div>
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200 text-center">
            <div className="text-4xl mb-3">✍️</div>
            <h4 className="font-bold text-pink-900 mb-2">Пишите</h4>
            <p className="text-sm text-slate-600">
              Составляйте свои примеры предложений
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl p-6 text-center">
          <p className="text-lg font-semibold mb-2">Keep up the great work! 💪</p>
          <p className="text-slate-300 text-sm">
            Теперь ваш английский звучит намного естественнее!
          </p>
        </div>
      </div>
    );
  }

  return null;
}
