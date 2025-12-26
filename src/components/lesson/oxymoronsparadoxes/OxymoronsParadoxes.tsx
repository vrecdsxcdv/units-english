"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function OxymoronsParadoxes({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState<
      "intro" | "why" | "topics"
    >("intro");

    return (
      <div className="space-y-6 bg-gradient-to-br from-stone-100 to-slate-100 p-6 rounded-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">🌓</div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">
            Oxymorons & Paradoxes
          </h2>
          <p className="text-lg text-slate-600">
            Оксюмороны и парадоксы в английском языке
          </p>
        </div>

        {/* Navigation tabs */}
        <div className="flex justify-center gap-2 flex-wrap">
          {[
            { id: "intro", label: "Введение", icon: "📖" },
            { id: "why", label: "Зачем изучать", icon: "💭" },
            { id: "topics", label: "Темы урока", icon: "📑" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveSection(tab.id as "intro" | "why" | "topics")
              }
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                activeSection === tab.id
                  ? "bg-slate-700 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content sections */}
        {activeSection === "intro" && (
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-700 mb-3">
              Противоречия, которые создают смысл
            </h3>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              <strong className="text-slate-800">Оксюморон</strong> — это
              сочетание противоположных по значению слов, которое создаёт новый
              смысл.
              <strong className="text-slate-800 ml-1">Парадокс</strong> —
              утверждение, кажущееся противоречивым, но содержащее истину.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="text-2xl mb-2">🔇</div>
                <h4 className="font-semibold text-slate-800 mb-1">
                  Оксюмороны
                </h4>
                <p className="text-sm text-slate-600">
                  deafening silence, bittersweet, living dead
                </p>
              </div>
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="text-2xl mb-2">🌀</div>
                <h4 className="font-semibold text-slate-800 mb-1">Парадоксы</h4>
                <p className="text-sm text-slate-600">
                  less is more, cruel to be kind, the beginning of the end
                </p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <div className="text-2xl mb-2">📚</div>
                <h4 className="font-semibold text-emerald-800 mb-1">
                  В литературе
                </h4>
                <p className="text-sm text-slate-600">
                  Оксюмороны часто используются для создания образов
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <div className="text-2xl mb-2">💬</div>
                <h4 className="font-semibold text-amber-800 mb-1">
                  В повседневной речи
                </h4>
                <p className="text-sm text-slate-600">
                  Многие оксюмороны стали обычными выражениями
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "why" && (
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-700 mb-3">
              Зачем изучать оксюмороны?
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-2xl">📖</span>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-1">
                    Понимание литературы
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Оксюмороны широко используются в литературе для создания
                    выразительных образов
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-semibold text-emerald-800 text-sm mb-1">
                    Выразительность речи
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Использование оксюморонов делает речь более образной и
                    запоминающейся
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-amber-800 text-sm mb-1">
                    Тонкость выражения
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Оксюмороны позволяют выразить сложные эмоции и ситуации
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg border border-stone-100">
                <span className="text-2xl">🌍</span>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-1">
                    Культурная грамотность
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Многие оксюмороны — часть культурного кода англоязычного
                    мира
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "topics" && (
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-700 mb-3">
              Структура курса:
            </h3>
            <div className="grid gap-2">
              {[
                {
                  step: 2,
                  title: "Classic Oxymorons",
                  desc: "deafening silence, bittersweet, living dead",
                },
                {
                  step: 3,
                  title: "Descriptive Oxymorons",
                  desc: "painfully beautiful, organized chaos, alone together",
                },
                {
                  step: 4,
                  title: "Emotional Oxymorons",
                  desc: "cruel kindness, sweet sorrow, happy tears",
                },
                {
                  step: 5,
                  title: "Paradoxical Expressions",
                  desc: "less is more, cruel to be kind, the beginning of the end",
                },
                {
                  step: 6,
                  title: "Literary Paradoxes",
                  desc: "I must be cruel only to be kind (Hamlet)",
                },
                {
                  step: 7,
                  title: "Modern Oxymorons",
                  desc: "virtual reality, constant change, same difference",
                },
                {
                  step: 8,
                  title: "Practice & Exercises",
                  desc: "упражнения с проверкой ответов",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
                >
                  <span className="w-8 h-8 bg-slate-700 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fact box */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
          <div className="flex items-start gap-3">
            <span className="text-3xl">💡</span>
            <div>
              <h3 className="font-semibold text-emerald-800 mb-2">
                Интересный факт
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Термин "оксюморон" сам по себе является оксюмороном! Он
                происходит от греческих слов "oxys" (острый, умный) и "moros"
                (глупый, тупой). Таким образом, "оксюморон" буквально означает
                "остро-глупый".
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Classic Oxymorons
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const oxymorons = [
      {
        expression: "deafening silence",
        translation: "оглушительная тишина",
        meaning: "Полная тишина, которая кажется громкой или напряжённой",
        examples: [
          "After his announcement, there was a deafening silence.",
          "The deafening silence in the room was unbearable.",
          "She was met with deafening silence.",
        ],
        explanation:
          "Тишина не может быть 'оглушительной', но это выражение передаёт интенсивность и напряжённость молчания",
      },
      {
        expression: "bittersweet",
        translation: "горько-сладкий",
        meaning: "Одновременно приятное и грустное",
        examples: [
          "Graduation is a bittersweet moment.",
          "The bittersweet memory of our last meeting.",
          "It was a bittersweet victory.",
        ],
        explanation:
          "Описывает эмоции, которые содержат и радость, и грусть одновременно",
      },
      {
        expression: "living dead",
        translation: "живые мертвецы",
        meaning: "Существа, которые мертвы, но движутся (зомби)",
        examples: [
          "The movie features the living dead.",
          "He felt like one of the living dead after the night shift.",
          "The living dead walked the streets in the horror film.",
        ],
        explanation: "Популяризовано фильмами ужасов, буквальное противоречие",
      },
      {
        expression: "open secret",
        translation: "открытый секрет",
        meaning: "Что-то, что якобы секрет, но всем известно",
        examples: [
          "Their relationship is an open secret.",
          "It's an open secret that he's leaving the company.",
          "The open secret was finally confirmed.",
        ],
        explanation:
          "Секрет не может быть 'открытым', но это описывает общеизвестную информацию",
      },
      {
        expression: "pretty ugly",
        translation: "довольно уродливый",
        meaning: "Очень уродливый (усиление)",
        examples: [
          "That's a pretty ugly situation.",
          "Things got pretty ugly at the meeting.",
          "The weather turned pretty ugly.",
        ],
        explanation:
          "Здесь 'pretty' означает 'довольно', но создаётся противоречие",
      },
      {
        expression: "clearly confused",
        translation: "явно запутанный",
        meaning: "Очевидно находящийся в замешательстве",
        examples: [
          "He was clearly confused by the instructions.",
          "She's clearly confused about what to do.",
          "The speaker was clearly confused.",
        ],
        explanation: "Ясность и замешательство противоречат друг другу",
      },
    ];

    return (
      <div className="space-y-6 bg-gradient-to-br from-stone-100 to-slate-100 p-6 rounded-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">🔇</div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">
            Classic Oxymorons
          </h2>
          <p className="text-lg text-slate-600">Классические оксюмороны</p>
        </div>

        <div className="space-y-4">
          {oxymorons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-slate-700 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.expression}</h3>
                  <span className="text-3xl">🌓</span>
                </div>
                <p className="text-slate-300 mt-1 text-base">
                  {item.translation}
                </p>
              </div>

              <div className="p-5 space-y-4">
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2 text-sm">
                    💡 Значение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.meaning}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm">
                    Примеры:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1 text-sm">▸</span>
                        <span className="text-slate-700 italic text-sm">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-amber-800 mb-2 text-sm">
                    ℹ️ Объяснение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Descriptive Oxymorons
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const oxymorons = [
      {
        expression: "painfully beautiful",
        translation: "болезненно красивый",
        meaning: "Настолько красивый, что вызывает почти физическую боль",
        examples: [
          "The sunset was painfully beautiful.",
          "Her voice was painfully beautiful.",
          "The scene was painfully beautiful in its sadness.",
        ],
        explanation:
          "Красота и боль противоречат друг другу, но выражение передаёт интенсивность переживания",
      },
      {
        expression: "organized chaos",
        translation: "организованный хаос",
        meaning:
          "Ситуация, которая выглядит хаотичной, но имеет скрытую структуру",
        examples: [
          "His desk is organized chaos — he knows where everything is.",
          "The kitchen is organized chaos during dinner service.",
          "It's organized chaos, but it works.",
        ],
        explanation:
          "Хаос по определению не может быть организованным, но это описывает кажущийся беспорядок с системой",
      },
      {
        expression: "alone together",
        translation: "одиноки вместе",
        meaning: "Находиться с кем-то, но чувствовать себя одиноким",
        examples: [
          "They were alone together in the crowded room.",
          "We sat alone together, not speaking.",
          "The couple seemed alone together.",
        ],
        explanation:
          "Описывает эмоциональную дистанцию при физической близости",
      },
      {
        expression: "awfully good",
        translation: "ужасно хороший",
        meaning: "Очень хороший (усиление)",
        examples: [
          "That's an awfully good idea!",
          "She's awfully good at piano.",
          "This is awfully good coffee.",
        ],
        explanation:
          "Здесь 'awfully' используется как усилитель, создавая противоречие",
      },
      {
        expression: "seriously funny",
        translation: "серьёзно смешной",
        meaning: "Очень смешной, несмотря на серьёзность",
        examples: [
          "His stand-up routine is seriously funny.",
          "That's a seriously funny joke.",
          "The situation was seriously funny in hindsight.",
        ],
        explanation:
          "Серьёзность и юмор противоречат, но выражение усиливает смешное",
      },
      {
        expression: "controlled chaos",
        translation: "контролируемый хаос",
        meaning: "Ситуация, которая кажется хаотичной, но контролируется",
        examples: [
          "The restaurant kitchen is controlled chaos.",
          "It's controlled chaos, but everything gets done.",
          "Traffic is controlled chaos during rush hour.",
        ],
        explanation:
          "Похоже на 'organized chaos', подчёркивает контроль в беспорядке",
      },
    ];

    return (
      <div className="space-y-6 bg-gradient-to-br from-stone-100 to-slate-100 p-6 rounded-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">🎨</div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">
            Descriptive Oxymorons
          </h2>
          <p className="text-lg text-slate-600">Описательные оксюмороны</p>
        </div>

        <div className="space-y-4">
          {oxymorons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-slate-600 to-stone-600 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.expression}</h3>
                  <span className="text-3xl">✨</span>
                </div>
                <p className="text-slate-300 mt-1 text-base">
                  {item.translation}
                </p>
              </div>

              <div className="p-5 space-y-4">
                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-teal-800 mb-2 text-sm">
                    💡 Значение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.meaning}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm">
                    Примеры:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1 text-sm">▸</span>
                        <span className="text-slate-700 italic text-sm">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-amber-800 mb-2 text-sm">
                    ℹ️ Объяснение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Emotional Oxymorons
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const oxymorons = [
      {
        expression: "cruel kindness",
        translation: "жестокая доброта",
        meaning: "Доброта, которая причиняет боль",
        examples: [
          "Telling the harsh truth is sometimes a cruel kindness.",
          "His cruel kindness saved her from a worse fate.",
          "It was a cruel kindness to let him know.",
        ],
        explanation:
          "Описывает ситуации, когда добрые намерения причиняют боль",
      },
      {
        expression: "sweet sorrow",
        translation: "сладкая печаль",
        meaning: "Печаль, в которой есть приятные воспоминания",
        examples: [
          "Parting is such sweet sorrow (Shakespeare).",
          "She felt the sweet sorrow of nostalgia.",
          "There's a sweet sorrow in remembering.",
        ],
        explanation:
          "Знаменитая фраза из 'Ромео и Джульетты', описывает приятную грусть",
      },
      {
        expression: "happy tears",
        translation: "счастливые слёзы",
        meaning: "Слёзы от счастья",
        examples: [
          "She cried happy tears at the wedding.",
          "They were happy tears, not sad ones.",
          "Happy tears streamed down her face.",
        ],
        explanation:
          "Слёзы обычно ассоциируются с грустью, но могут быть от счастья",
      },
      {
        expression: "sweet pain",
        translation: "сладкая боль",
        meaning: "Боль, в которой есть удовольствие",
        examples: [
          "The sweet pain of exercise.",
          "There's a sweet pain in missing someone you love.",
          "The sweet pain of nostalgia.",
        ],
        explanation: "Описывает боль, которая имеет приятный аспект",
      },
      {
        expression: "loving hate",
        translation: "любящая ненависть",
        meaning: "Сложные чувства, содержащие и любовь, и ненависть",
        examples: [
          "Theirs was a relationship of loving hate.",
          "The loving hate between rivals.",
          "A loving hate for his hometown.",
        ],
        explanation: "Описывает амбивалентные эмоции",
      },
      {
        expression: "comfortable misery",
        translation: "комфортная нищета",
        meaning: "Привычное, но неприятное состояние",
        examples: [
          "He lived in comfortable misery.",
          "They were stuck in comfortable misery.",
          "Sometimes we prefer comfortable misery to change.",
        ],
        explanation: "Описывает ситуацию, когда люди привыкают к плохому",
      },
    ];

    return (
      <div className="space-y-6 bg-gradient-to-br from-stone-100 to-slate-100 p-6 rounded-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">💔</div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">
            Emotional Oxymorons
          </h2>
          <p className="text-lg text-slate-600">Эмоциональные оксюмороны</p>
        </div>

        <div className="space-y-4">
          {oxymorons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-rose-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.expression}</h3>
                  <span className="text-3xl">💫</span>
                </div>
                <p className="text-rose-200 mt-1 text-base">
                  {item.translation}
                </p>
              </div>

              <div className="p-5 space-y-4">
                <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-pink-800 mb-2 text-sm">
                    💡 Значение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.meaning}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm">
                    Примеры:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1 text-sm">▸</span>
                        <span className="text-slate-700 italic text-sm">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-amber-800 mb-2 text-sm">
                    ℹ️ Объяснение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Paradoxical Expressions
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const paradoxes = [
      {
        expression: "less is more",
        translation: "меньше значит больше",
        meaning: "Простота и минимализм часто эффективнее сложности",
        examples: [
          "In design, less is more.",
          "When it comes to ingredients, less is more.",
          "Remember: less is more in presentations.",
        ],
        explanation:
          "Парадокс Людвига Миса ван дер Роэ, архитектурный принцип минимализма",
      },
      {
        expression: "cruel to be kind",
        translation: "жестокость из добрых побуждений",
        meaning: "Быть строгим или жёстким ради чьего-то блага",
        examples: [
          "Sometimes you have to be cruel to be kind.",
          "I was cruel to be kind when I told him the truth.",
          "It's cruel to be kind, but necessary.",
        ],
        explanation:
          "Из Гамлета, описывает ситуации, когда жёсткость необходима",
      },
      {
        expression: "the beginning of the end",
        translation: "начало конца",
        meaning: "Момент, когда что-то начинает разрушаться",
        examples: [
          "That mistake was the beginning of the end.",
          "The scandal marked the beginning of the end for his career.",
          "It was the beginning of the end for their relationship.",
        ],
        explanation:
          "Парадокс: как что-то может быть и началом, и концом одновременно",
      },
      {
        expression: "the same difference",
        translation: "та же разница",
        meaning: "Нет существенной разницы, всё равно",
        examples: [
          "Six of one, half a dozen of the other — same difference.",
          "Call it what you want, it's the same difference.",
          "Same difference to me.",
        ],
        explanation: "Логический парадокс: 'разница' не может быть 'такой же'",
      },
      {
        expression: "clearly misunderstood",
        translation: "явно неправильно понят",
        meaning: "Очевидно, что произошло недопонимание",
        examples: [
          "My intentions were clearly misunderstood.",
          "The message was clearly misunderstood.",
          "He clearly misunderstood the situation.",
        ],
        explanation: "Ясность и непонимание противоречат друг другу",
      },
      {
        expression: "growing smaller",
        translation: "расти, становясь меньше",
        meaning: "Постепенно уменьшаться",
        examples: [
          "The population is growing smaller each year.",
          "His influence is growing smaller.",
          "The gap is growing smaller.",
        ],
        explanation: "Рост и уменьшение — противоположные процессы",
      },
    ];

    return (
      <div className="space-y-6 bg-gradient-to-br from-stone-100 to-slate-100 p-6 rounded-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">🌀</div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">
            Paradoxical Expressions
          </h2>
          <p className="text-lg text-slate-600">Парадоксальные выражения</p>
        </div>

        <div className="space-y-4">
          {paradoxes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-slate-300 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-slate-700 to-gray-700 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.expression}</h3>
                  <span className="text-3xl">🔄</span>
                </div>
                <p className="text-slate-300 mt-1 text-base">
                  {item.translation}
                </p>
              </div>

              <div className="p-5 space-y-4">
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2 text-sm">
                    💡 Значение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.meaning}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm">
                    Примеры:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1 text-sm">▸</span>
                        <span className="text-slate-700 italic text-sm">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-amber-800 mb-2 text-sm">
                    ℹ️ Объяснение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Literary Paradoxes
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const literaryParadoxes = [
      {
        quote: "I must be cruel only to be kind",
        source: "Shakespeare, Hamlet",
        meaning: "Иногда необходимо быть жёстким ради добра",
        context: "Гамлет объясняет, почему он должен быть суровым с матерью",
      },
      {
        quote: "Fair is foul, and foul is fair",
        source: "Shakespeare, Macbeth",
        meaning: "Хорошее кажется плохим, плохое кажется хорошим",
        context: "Ведьмы описывают мир, где всё перевёрнуто",
      },
      {
        quote: "War is peace. Freedom is slavery. Ignorance is strength.",
        source: "George Orwell, 1984",
        meaning: "Тоталитарные слоганы, перевёртыши правды",
        context: "Партийные лозунги в антиутопии Оруэлла",
      },
      {
        quote: "It was the best of times, it was the worst of times",
        source: "Charles Dickens, A Tale of Two Cities",
        meaning: "Время противоречий и контрастов",
        context: "Знаменитое открытие романа о Французской революции",
      },
      {
        quote: "The silence was deafening",
        source: "Common literary device",
        meaning: "Тишина была настолько полной, что казалась громкой",
        context: "Часто используется для создания напряжения",
      },
      {
        quote: "Darkness visible",
        source: "John Milton, Paradise Lost",
        meaning: "Видимая тьма — парадокс ада",
        context: "Описание ада Милтоном",
      },
    ];

    return (
      <div className="space-y-6 bg-gradient-to-br from-stone-100 to-slate-100 p-6 rounded-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">📖</div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">
            Literary Paradoxes
          </h2>
          <p className="text-lg text-slate-600">Парадоксы в литературе</p>
        </div>

        <div className="space-y-4">
          {literaryParadoxes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-stone-300 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-stone-700 to-slate-700 text-white p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">✍️</span>
                  <h3 className="text-xl font-bold italic">
                    &ldquo;{item.quote}&rdquo;
                  </h3>
                </div>
                <p className="text-slate-300 text-sm pl-11">— {item.source}</p>
              </div>

              <div className="p-5 space-y-4">
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2 text-sm">
                    💡 Значение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.meaning}</p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-amber-800 mb-2 text-sm">
                    📚 Контекст:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200 mt-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl">💡</span>
            <div>
              <h3 className="font-semibold text-teal-800 mb-2">
                Зачем писатели используют парадоксы?
              </h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">▸</span>
                  <span>Привлечь внимание и заставить читателя задуматься</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">▸</span>
                  <span>Показать сложность и противоречивость жизни</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">▸</span>
                  <span>Создать запоминающиеся образы и цитаты</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">▸</span>
                  <span>Выразить глубокие философские идеи</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Modern Oxymorons
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const modernOxymorons = [
      {
        expression: "virtual reality",
        translation: "виртуальная реальность",
        meaning: "Компьютерная симуляция, которая кажется реальной",
        examples: [
          "Virtual reality gaming is becoming popular.",
          "They used virtual reality for training.",
          "Virtual reality headsets are getting cheaper.",
        ],
        explanation:
          "Реальность не может быть 'виртуальной', но термин прижился",
      },
      {
        expression: "constant change",
        translation: "постоянные изменения",
        meaning: "Непрерывные перемены",
        examples: [
          "The only constant is constant change.",
          "We live in an era of constant change.",
          "Technology brings constant change.",
        ],
        explanation: "Если что-то постоянно, оно не должно меняться — парадокс",
      },
      {
        expression: "same difference",
        translation: "та же разница",
        meaning: "По сути одно и то же, без разницы",
        examples: [
          "Same difference — it doesn't matter.",
          "Six or half a dozen? Same difference.",
          "Same difference to me.",
        ],
        explanation: "Логический парадокс современной разговорной речи",
      },
      {
        expression: "act naturally",
        translation: "вести себя естественно",
        meaning: "Быть собой, не притворяться",
        examples: [
          "Just act naturally in front of the camera.",
          "Act naturally and you'll be fine.",
          "Try to act naturally.",
        ],
        explanation: "Если вы 'действуете', это не может быть естественным",
      },
      {
        expression: "random order",
        translation: "случайный порядок",
        meaning: "Беспорядочная последовательность",
        examples: [
          "The songs play in random order.",
          "Shuffle creates a random order.",
          "Items appear in random order.",
        ],
        explanation:
          "'Порядок' предполагает систему, 'случайность' — её отсутствие",
      },
      {
        expression: "actively listening",
        translation: "активно слушать",
        meaning: "Внимательно слушать с полной концентрацией",
        examples: [
          "Practice actively listening in conversations.",
          "She was actively listening to his concerns.",
          "Actively listening improves communication.",
        ],
        explanation:
          "Слушание обычно пассивный процесс, но можно делать его активным",
      },
      {
        expression: "clearly confused",
        translation: "явно запутанный",
        meaning: "Очевидно в замешательстве",
        examples: [
          "He was clearly confused by the instructions.",
          "She looked clearly confused.",
          "The audience was clearly confused.",
        ],
        explanation: "Ясность и замешательство противоречат друг другу",
      },
    ];

    return (
      <div className="space-y-6 bg-gradient-to-br from-stone-100 to-slate-100 p-6 rounded-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">💻</div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">
            Modern Oxymorons
          </h2>
          <p className="text-lg text-slate-600">Современные оксюмороны</p>
        </div>

        <div className="space-y-4">
          {modernOxymorons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-slate-700 to-zinc-700 text-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">{item.expression}</h3>
                  <span className="text-3xl">🔮</span>
                </div>
                <p className="text-slate-300 mt-1 text-base">
                  {item.translation}
                </p>
              </div>

              <div className="p-5 space-y-4">
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2 text-sm">
                    💡 Значение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.meaning}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm">
                    Примеры:
                  </h4>
                  <ul className="space-y-2">
                    {item.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1 text-sm">▸</span>
                        <span className="text-slate-700 italic text-sm">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-amber-800 mb-2 text-sm">
                    ℹ️ Объяснение:
                  </h4>
                  <p className="text-slate-700 text-sm">{item.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-stone-50 to-slate-50 rounded-xl p-5 border border-stone-300 mt-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📱</span>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Оксюмороны в современном мире
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Многие современные технологии и явления породили новые
                оксюмороны. Например, "wireless cable" (беспроводной кабель),
                "fast food" (быстрая еда часто не настоящая "food"), "artificial
                intelligence" (искусственный интеллект). Эти термины отражают
                парадоксы нашего времени.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Practice & Review
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [checked, setChecked] = useState(false);

    const exercises = [
      {
        id: "ex1",
        question: "Закончите оксюморон: deafening ___",
        answer: "silence",
        hint: "тишина",
      },
      {
        id: "ex2",
        question: "Закончите выражение: less is ___",
        answer: "more",
        hint: "больше",
      },
      {
        id: "ex3",
        question: "Закончите оксюморон: ___ reality",
        answer: "virtual",
        hint: "виртуальная",
      },
      {
        id: "ex4",
        question: "Закончите выражение: sweet ___",
        answer: "sorrow",
        hint: "печаль",
      },
      {
        id: "ex5",
        question: "Закончите оксюморон: organized ___",
        answer: "chaos",
        hint: "хаос",
      },
      {
        id: "ex6",
        question: "Закончите выражение: cruel to be ___",
        answer: "kind",
        hint: "добрый",
      },
    ];

    const handleCheck = () => {
      setChecked(true);
    };

    const handleReset = () => {
      setAnswers({});
      setChecked(false);
    };

    const isCorrect = (id: string, correctAnswer: string) => {
      return answers[id]?.toLowerCase().trim() === correctAnswer.toLowerCase();
    };

    return (
      <div className="space-y-6 bg-gradient-to-br from-stone-100 to-slate-100 p-6 rounded-2xl">
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">✏️</div>
          <h2 className="text-3xl font-bold mb-2 text-slate-800">
            Practice & Review
          </h2>
          <p className="text-lg text-slate-600">Практика и повторение</p>
        </div>

        {/* Exercise Section */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span className="text-2xl">📝</span> Заполните пропуски
          </h3>
          <p className="text-slate-600 mb-6 text-sm">
            Закончите оксюмороны и парадоксальные выражения:
          </p>

          <div className="space-y-4">
            {exercises.map((ex) => (
              <div key={ex.id} className="flex items-center gap-3 flex-wrap">
                <label className="text-slate-700 font-medium min-w-[250px] text-sm">
                  {ex.question}
                </label>
                <input
                  type="text"
                  value={answers[ex.id] || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, [ex.id]: e.target.value })
                  }
                  disabled={checked}
                  className={`px-4 py-2 border-2 rounded-lg flex-1 min-w-[150px] transition-colors text-sm ${
                    !checked
                      ? "border-slate-300 focus:border-slate-500 focus:outline-none"
                      : isCorrect(ex.id, ex.answer)
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-rose-500 bg-rose-50"
                  }`}
                  placeholder={checked ? ex.hint : "Ваш ответ"}
                />
                {checked && (
                  <span className="text-xl">
                    {isCorrect(ex.id, ex.answer) ? "✅" : "❌"}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            {!checked ? (
              <button
                onClick={handleCheck}
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 font-medium transition-colors text-sm"
              >
                Проверить
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium transition-colors text-sm"
              >
                Попробовать снова
              </button>
            )}
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span className="text-2xl">🎓</span> Что вы изучили
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-2 text-sm">
                Classic Oxymorons
              </h4>
              <p className="text-slate-600 text-xs">
                deafening silence, bittersweet, living dead, open secret
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h4 className="font-semibold text-slate-800 mb-2 text-sm">
                Descriptive Oxymorons
              </h4>
              <p className="text-slate-600 text-xs">
                painfully beautiful, organized chaos, alone together
              </p>
            </div>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <h4 className="font-semibold text-rose-800 mb-2 text-sm">
                Emotional Oxymorons
              </h4>
              <p className="text-slate-600 text-xs">
                cruel kindness, sweet sorrow, happy tears
              </p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-2 text-sm">
                Paradoxes
              </h4>
              <p className="text-slate-600 text-xs">
                less is more, cruel to be kind, the beginning of the end
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2 text-sm">
                Literary Paradoxes
              </h4>
              <p className="text-slate-600 text-xs">
                Shakespeare, Orwell, Dickens, Milton
              </p>
            </div>
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <h4 className="font-semibold text-cyan-800 mb-2 text-sm">
                Modern Oxymorons
              </h4>
              <p className="text-slate-600 text-xs">
                virtual reality, constant change, act naturally
              </p>
            </div>
          </div>
        </div>

        {/* Congratulations */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
          <div className="text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h3 className="text-2xl font-bold text-emerald-800 mb-2">
              Поздравляем!
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              Вы изучили{" "}
              <strong className="text-emerald-700">
                более 40 оксюморонов и парадоксальных выражений
              </strong>
              . Эти фигуры речи помогут вам лучше понимать английскую литературу
              и делать вашу речь более выразительной!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null; // Fallback if step is out of range
}
