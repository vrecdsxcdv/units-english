"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function BinomialsTrinomials({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState<
      "intro" | "why" | "topics"
    >("intro");

    return (
      <div className="space-y-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎯</div>
          <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Binomials & Trinomials
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Устойчивые парные и тройные выражения
          </p>
        </div>

        {/* Navigation tabs */}
        <div className="flex justify-center gap-2 flex-wrap">
          {[
            { id: "intro", label: "Введение", icon: "🚀" },
            { id: "why", label: "Зачем изучать", icon: "💡" },
            { id: "topics", label: "Темы урока", icon: "📋" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveSection(tab.id as "intro" | "why" | "topics")
              }
              className={`px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 ${
                activeSection === tab.id
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl scale-105"
                  : "bg-white text-gray-700 hover:bg-orange-50 border-2 border-orange-200 shadow-lg"
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content sections */}
        {activeSection === "intro" && (
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-orange-200 p-8">
            <h3 className="text-3xl font-black text-orange-700 mb-6 flex items-center gap-3">
              <span className="text-4xl">✨</span>
              Парные и тройные выражения: магия английского языка
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong className="text-orange-600">Binomials</strong> и{" "}
              <strong className="text-red-600">Trinomials</strong> — это
              устойчивые выражения из двух или трёх слов, соединённых союзами
              (чаще всего "and"). Эти выражения придают речи естественность,
              выразительность и ритмичность!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 border-4 border-yellow-300 transform hover:scale-105 transition-all">
                <div className="text-5xl mb-3">🔗</div>
                <h4 className="font-black text-2xl text-orange-800 mb-3">
                  Binomials
                </h4>
                <p className="text-gray-700 mb-3">
                  Пары слов: safe and sound, black and white, give and take
                </p>
                <div className="bg-white/50 rounded-xl p-3 text-sm">
                  <strong>Особенность:</strong> Порядок слов фиксирован!
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 border-4 border-orange-300 transform hover:scale-105 transition-all">
                <div className="text-5xl mb-3">🎪</div>
                <h4 className="font-black text-2xl text-red-800 mb-3">
                  Trinomials
                </h4>
                <p className="text-gray-700 mb-3">
                  Тройки слов: cool, calm and collected; blood, sweat and tears
                </p>
                <div className="bg-white/50 rounded-xl p-3 text-sm">
                  <strong>Особенность:</strong> Создают сильный ритм!
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-6 border-4 border-red-300 transform hover:scale-105 transition-all">
                <div className="text-5xl mb-3">🎵</div>
                <h4 className="font-black text-2xl text-red-800 mb-3">
                  Ритмические паттерны
                </h4>
                <p className="text-gray-700">
                  Многие биномы следуют звуковым паттернам: рифма, аллитерация,
                  короткие-длинные слоги
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 border-4 border-pink-300 transform hover:scale-105 transition-all">
                <div className="text-5xl mb-3">⚡</div>
                <h4 className="font-black text-2xl text-rose-800 mb-3">
                  Фиксированный порядок
                </h4>
                <p className="text-gray-700">
                  "Black and white" ✅ <br />
                  "White and black" ❌
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === "why" && (
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-red-200 p-8">
            <h3 className="text-3xl font-black text-red-700 mb-6 flex items-center gap-3">
              <span className="text-4xl">🎯</span>
              Зачем изучать биномы и триномы?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-l-8 border-orange-500 transform hover:translate-x-2 transition-all">
                <span className="text-6xl">🗣️</span>
                <div>
                  <h4 className="font-black text-2xl text-gray-800 mb-2">
                    Естественная речь
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Носители языка постоянно используют эти выражения. Знание
                    биномов и триномов делает вашу речь более естественной и
                    беглой!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-l-8 border-red-500 transform hover:translate-x-2 transition-all">
                <span className="text-6xl">🎨</span>
                <div>
                  <h4 className="font-black text-2xl text-gray-800 mb-2">
                    Выразительность
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Эти выражения добавляют ритм, эмоциональность и силу вашим
                    словам. Сравните: "I arrived safely" vs "I arrived safe and
                    sound"!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border-l-8 border-pink-500 transform hover:translate-x-2 transition-all">
                <span className="text-6xl">📚</span>
                <div>
                  <h4 className="font-black text-2xl text-gray-800 mb-2">
                    Литература и СМИ
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Биномы и триномы часто встречаются в книгах, газетах,
                    фильмах и песнях. Это часть культурного кода английского
                    языка!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border-l-8 border-rose-500 transform hover:translate-x-2 transition-all">
                <span className="text-6xl">💼</span>
                <div>
                  <h4 className="font-black text-2xl text-gray-800 mb-2">
                    Профессиональный стиль
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Многие биномы используются в деловой и юридической речи:
                    "terms and conditions", "null and void", "ways and means"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "topics" && (
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-yellow-200 p-8">
            <h3 className="text-3xl font-black text-yellow-700 mb-6 flex items-center gap-3">
              <span className="text-4xl">🎪</span>
              Структура курса:
            </h3>
            <div className="grid gap-4">
              {[
                {
                  step: 2,
                  title: "Classic Binomials",
                  desc: "safe and sound, black and white, give and take",
                  color: "from-yellow-400 to-orange-400",
                  icon: "⭐",
                },
                {
                  step: 3,
                  title: "Alliterative Binomials",
                  desc: "peace and quiet, hustle and bustle, doom and gloom",
                  color: "from-orange-400 to-red-400",
                  icon: "🎵",
                },
                {
                  step: 4,
                  title: "Rhyming Binomials",
                  desc: "handy dandy, wear and tear, fair and square",
                  color: "from-red-400 to-pink-400",
                  icon: "🎶",
                },
                {
                  step: 5,
                  title: "Trinomials: Power of Three",
                  desc: "cool, calm and collected; blood, sweat and tears",
                  color: "from-pink-400 to-rose-400",
                  icon: "🔥",
                },
                {
                  step: 6,
                  title: "Legal & Business Binomials",
                  desc: "terms and conditions, null and void, ways and means",
                  color: "from-rose-400 to-purple-400",
                  icon: "⚖️",
                },
                {
                  step: 7,
                  title: "Emotional & Descriptive",
                  desc: "sick and tired, bright and early, loud and clear",
                  color: "from-purple-400 to-indigo-400",
                  icon: "💫",
                },
                {
                  step: 8,
                  title: "Practice & Exercises",
                  desc: "упражнения с проверкой ответов",
                  color: "from-indigo-400 to-blue-400",
                  icon: "📝",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-white to-gray-50 rounded-2xl border-4 border-orange-200 hover:border-orange-400 transform hover:scale-105 transition-all shadow-lg hover:shadow-2xl"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg`}
                  >
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{item.icon}</span>
                      <h4 className="font-black text-xl text-gray-800">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fun fact */}
        <div className="bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 rounded-3xl p-8 border-4 border-orange-300 shadow-2xl">
          <div className="flex items-start gap-6">
            <span className="text-7xl">🎯</span>
            <div>
              <h3 className="font-black text-3xl text-orange-800 mb-4">
                Интересный факт!
              </h3>
              <p className="text-gray-800 text-xl leading-relaxed">
                Порядок слов в биномах часто определяется фонетическими
                правилами: короткий гласный перед длинным ("tip-top"), звонкий
                согласный после глухого ("safe and sound"), или просто
                алфавитным порядком ("bread and butter"). Нельзя сказать "sound
                and safe" — это звучит неестественно для носителей!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Classic Binomials
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    const binomials = [
      {
        expression: "safe and sound",
        translation: "целый и невредимый",
        meaning: "Без травм или повреждений после опасной ситуации",
        examples: [
          "The children arrived home safe and sound after the storm.",
          "We're just glad everyone is safe and sound.",
          "The rescue team brought them back safe and sound.",
        ],
        note: "Одна из самых популярных биномов, используется очень часто",
      },
      {
        expression: "black and white",
        translation: "чёрно-белый, однозначный",
        meaning:
          "Очень ясный и определённый, без неясностей или оттенков серого",
        examples: [
          "The issue isn't black and white — there are many nuances.",
          "I need a black and white answer: yes or no?",
          "Life is not black and white; there are shades of gray.",
        ],
        note: "Может означать как буквально ч/б, так и 'однозначный'",
      },
      {
        expression: "give and take",
        translation: "взаимные уступки, компромисс",
        meaning: "Процесс взаимных уступок и компромиссов",
        examples: [
          "Any good relationship requires give and take.",
          "There has to be some give and take in negotiations.",
          "Marriage is all about give and take.",
        ],
        note: "Важен порядок: 'give' всегда первым",
      },
      {
        expression: "here and there",
        translation: "кое-где, местами",
        meaning: "В различных местах, не везде",
        examples: [
          "There were a few mistakes here and there.",
          "I've been traveling here and there.",
          "You can find good restaurants here and there in the city.",
        ],
        note: "Используется для обозначения разрозненных мест",
      },
      {
        expression: "now and then / now and again",
        translation: "время от времени",
        meaning: "Иногда, не регулярно",
        examples: [
          "I see her now and then at the café.",
          "Now and again, I think about moving abroad.",
          "We meet up now and then for coffee.",
        ],
        note: "Синонимы: occasionally, from time to time",
      },
      {
        expression: "sooner or later",
        translation: "рано или поздно",
        meaning: "В какой-то момент в будущем, неизбежно",
        examples: [
          "Sooner or later, you'll have to face the truth.",
          "He'll find out sooner or later.",
          "The problem will resolve itself sooner or later.",
        ],
        note: "Подразумевает неизбежность события",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⭐</div>
          <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Classic Binomials
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Классические биномы
          </p>
        </div>

        <div className="space-y-6">
          {binomials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl border-4 border-orange-200 overflow-hidden transform hover:scale-105 transition-all"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-4xl font-black">{item.expression}</h3>
                  <span className="text-6xl">🔗</span>
                </div>
                <p className="text-yellow-100 mt-3 text-2xl font-bold">
                  {item.translation}
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-8 border-orange-400 p-6 rounded-r-2xl">
                  <h4 className="font-black text-xl text-orange-800 mb-3 flex items-center gap-2">
                    <span className="text-3xl">💡</span>
                    Значение:
                  </h4>
                  <p className="text-gray-800 text-lg font-medium">
                    {item.meaning}
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-xl text-orange-700 mb-4 flex items-center gap-2">
                    <span className="text-3xl">💬</span>
                    Примеры:
                  </h4>
                  <ul className="space-y-3">
                    {item.examples.map((example, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border-2 border-orange-200"
                      >
                        <span className="text-orange-500 text-2xl font-black mt-1">
                          {i + 1}
                        </span>
                        <span className="text-gray-800 text-lg italic">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-300 p-6 rounded-2xl">
                  <h4 className="font-black text-lg text-yellow-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📌</span>
                    Важно знать:
                  </h4>
                  <p className="text-gray-800 font-medium">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Alliterative Binomials
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const binomials = [
      {
        expression: "peace and quiet",
        translation: "тишина и покой",
        meaning: "Спокойная обстановка без шума и беспокойства",
        examples: [
          "I just want some peace and quiet after work.",
          "They moved to the countryside for peace and quiet.",
          "Let me have a bit of peace and quiet!",
        ],
        note: "Оба слова начинаются на 'p' и 'q' — аллитерация",
      },
      {
        expression: "hustle and bustle",
        translation: "суета и шум",
        meaning: "Активность и шум городской жизни",
        examples: [
          "I love the hustle and bustle of the city.",
          "Away from the hustle and bustle of daily life.",
          "The hustle and bustle of the market was overwhelming.",
        ],
        note: "Оба слова начинаются на 'b' — классическая аллитерация",
      },
      {
        expression: "doom and gloom",
        translation: "мрак и уныние",
        meaning: "Пессимистичные или негативные ожидания",
        examples: [
          "Stop all this doom and gloom — things will get better!",
          "The news is full of doom and gloom these days.",
          "It's not all doom and gloom; there's hope.",
        ],
        note: "Аллитерация 'd' и 'g', плюс рифма",
      },
      {
        expression: "tried and tested / tried and true",
        translation: "проверенный временем",
        meaning: "Надёжный, проверенный на практике",
        examples: [
          "It's a tried and tested method.",
          "We use tried and true techniques.",
          "This is a tried and tested recipe.",
        ],
        note: "Аллитерация 't', очень распространённое выражение",
      },
      {
        expression: "bits and pieces / bits and bobs",
        translation: "разные мелочи",
        meaning: "Разные небольшие предметы или части",
        examples: [
          "I need to pick up a few bits and pieces from the shop.",
          "Just some bits and bobs for the project.",
          "There are bits and pieces all over the floor.",
        ],
        note: "Британский английский, аллитерация 'b'",
      },
      {
        expression: "pots and pans",
        translation: "кухонная утварь",
        meaning: "Кухонная посуда для готовки",
        examples: [
          "She was washing the pots and pans.",
          "We need new pots and pans for the kitchen.",
          "The sound of pots and pans clanging.",
        ],
        note: "Аллитерация 'p', используется буквально",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎵</div>
          <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Alliterative Binomials
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Биномы с аллитерацией
          </p>
        </div>

        <div className="space-y-6">
          {binomials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl border-4 border-red-200 overflow-hidden transform hover:scale-105 transition-all"
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-4xl font-black">{item.expression}</h3>
                  <span className="text-6xl">🔥</span>
                </div>
                <p className="text-orange-100 mt-3 text-2xl font-bold">
                  {item.translation}
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-8 border-red-400 p-6 rounded-r-2xl">
                  <h4 className="font-black text-xl text-red-800 mb-3 flex items-center gap-2">
                    <span className="text-3xl">💡</span>
                    Значение:
                  </h4>
                  <p className="text-gray-800 text-lg font-medium">
                    {item.meaning}
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-xl text-red-700 mb-4 flex items-center gap-2">
                    <span className="text-3xl">💬</span>
                    Примеры:
                  </h4>
                  <ul className="space-y-3">
                    {item.examples.map((example, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border-2 border-red-200"
                      >
                        <span className="text-red-500 text-2xl font-black mt-1">
                          {i + 1}
                        </span>
                        <span className="text-gray-800 text-lg italic">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 border-4 border-orange-300 p-6 rounded-2xl">
                  <h4 className="font-black text-lg text-orange-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📌</span>
                    Важно знать:
                  </h4>
                  <p className="text-gray-800 font-medium">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Rhyming Binomials
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const binomials = [
      {
        expression: "wear and tear",
        translation: "износ",
        meaning: "Повреждение от обычного использования",
        examples: [
          "The car shows signs of wear and tear.",
          "Normal wear and tear is expected.",
          "After years of wear and tear, it needs replacing.",
        ],
        note: "Рифма 'wear' [weə] и 'tear' [teə] — идеальная рифма",
      },
      {
        expression: "fair and square",
        translation: "честно и справедливо",
        meaning: "Абсолютно честно, без обмана",
        examples: [
          "He won fair and square.",
          "We need to settle this fair and square.",
          "The game was played fair and square.",
        ],
        note: "Рифма и аллитерация 'f' и 's'",
      },
      {
        expression: "wine and dine",
        translation: "угощать, развлекать",
        meaning: "Развлекать кого-то едой и напитками",
        examples: [
          "They wined and dined us at the restaurant.",
          "The company wines and dines potential clients.",
          "We were wined and dined all weekend.",
        ],
        note: "Рифма 'wine' и 'dine', часто используется как глагол",
      },
      {
        expression: "high and dry",
        translation: "в беде, брошенный",
        meaning: "Оставленный в трудной ситуации без помощи",
        examples: [
          "They left me high and dry without a ride home.",
          "The company collapsed, leaving employees high and dry.",
          "Don't leave me high and dry!",
        ],
        note: "Рифма 'high' и 'dry'",
      },
      {
        expression: "forgive and forget",
        translation: "простить и забыть",
        meaning: "Полностью простить прошлые обиды",
        examples: [
          "Let's just forgive and forget.",
          "It's hard to forgive and forget such betrayal.",
          "Time to forgive and forget and move on.",
        ],
        note: "Аллитерация 'f' и частичная рифма",
      },
      {
        expression: "name and shame",
        translation: "публично обвинить",
        meaning: "Публично назвать и опозорить виновных",
        examples: [
          "The newspaper decided to name and shame tax evaders.",
          "They have a policy to name and shame offenders.",
          "The campaign aims to name and shame polluters.",
        ],
        note: "Рифма 'name' и 'shame', современное выражение",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎶</div>
          <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Rhyming Binomials
          </h2>
          <p className="text-xl text-gray-700 font-semibold">Биномы с рифмой</p>
        </div>

        <div className="space-y-6">
          {binomials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden transform hover:scale-105 transition-all"
            >
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-4xl font-black">{item.expression}</h3>
                  <span className="text-6xl">💎</span>
                </div>
                <p className="text-pink-100 mt-3 text-2xl font-bold">
                  {item.translation}
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-red-50 border-l-8 border-pink-400 p-6 rounded-r-2xl">
                  <h4 className="font-black text-xl text-pink-800 mb-3 flex items-center gap-2">
                    <span className="text-3xl">💡</span>
                    Значение:
                  </h4>
                  <p className="text-gray-800 text-lg font-medium">
                    {item.meaning}
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-xl text-pink-700 mb-4 flex items-center gap-2">
                    <span className="text-3xl">💬</span>
                    Примеры:
                  </h4>
                  <ul className="space-y-3">
                    {item.examples.map((example, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl border-2 border-pink-200"
                      >
                        <span className="text-pink-500 text-2xl font-black mt-1">
                          {i + 1}
                        </span>
                        <span className="text-gray-800 text-lg italic">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-pink-100 border-4 border-red-300 p-6 rounded-2xl">
                  <h4 className="font-black text-lg text-red-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📌</span>
                    Важно знать:
                  </h4>
                  <p className="text-gray-800 font-medium">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Trinomials - Power of Three
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    const trinomials = [
      {
        expression: "cool, calm and collected",
        translation: "спокойный и собранный",
        meaning: "Абсолютно спокойный и контролирующий ситуацию",
        examples: [
          "She remained cool, calm and collected during the crisis.",
          "Stay cool, calm and collected — don't panic!",
          "He's always cool, calm and collected under pressure.",
        ],
        note: "Аллитерация 'c' создаёт мощный ритмический эффект",
      },
      {
        expression: "blood, sweat and tears",
        translation: "кровь, пот и слёзы",
        meaning: "Огромные усилия и тяжёлая работа",
        examples: [
          "We put blood, sweat and tears into this project.",
          "It took blood, sweat and tears to build this company.",
          "Success requires blood, sweat and tears.",
        ],
        note: "Знаменитая фраза Черчилля, очень эмоциональная",
      },
      {
        expression: "lock, stock and barrel",
        translation: "целиком и полностью",
        meaning: "Всё без исключения, полностью",
        examples: [
          "They bought the business lock, stock and barrel.",
          "He moved lock, stock and barrel to Australia.",
          "The company was sold lock, stock and barrel.",
        ],
        note: "Из оружейного дела (замок, ствол и приклад)",
      },
      {
        expression: "ready, willing and able",
        translation: "готов и способен",
        meaning: "Полностью готов что-то сделать",
        examples: [
          "I'm ready, willing and able to help.",
          "We have staff ready, willing and able to assist.",
          "Are you ready, willing and able to take on the challenge?",
        ],
        note: "Формальное выражение, часто в юридических контекстах",
      },
      {
        expression: "signed, sealed and delivered",
        translation: "подписано, скреплено и доставлено",
        meaning: "Окончательно завершено и готово",
        examples: [
          "The contract is signed, sealed and delivered.",
          "The deal is signed, sealed and delivered.",
          "It's all signed, sealed and delivered now.",
        ],
        note: "Из деловой практики, также название песни",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🔥</div>
          <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Trinomials: Power of Three
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Триномы — сила тройки
          </p>
        </div>

        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-3xl p-8 border-4 border-rose-300 mb-8">
          <h3 className="font-black text-2xl text-rose-800 mb-4 flex items-center gap-3">
            <span className="text-4xl">⚡</span>
            Почему три слова?
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            В риторике "правило трёх" считается самым мощным. Три элемента
            создают ритм, легко запоминаются и звучат убедительно. Это
            используется в речах, рекламе и литературе!
          </p>
        </div>

        <div className="space-y-6">
          {trinomials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl border-4 border-rose-200 overflow-hidden transform hover:scale-105 transition-all"
            >
              <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-4xl font-black">{item.expression}</h3>
                  <span className="text-6xl">✨</span>
                </div>
                <p className="text-rose-100 mt-3 text-2xl font-bold">
                  {item.translation}
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-8 border-rose-400 p-6 rounded-r-2xl">
                  <h4 className="font-black text-xl text-rose-800 mb-3 flex items-center gap-2">
                    <span className="text-3xl">💡</span>
                    Значение:
                  </h4>
                  <p className="text-gray-800 text-lg font-medium">
                    {item.meaning}
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-xl text-rose-700 mb-4 flex items-center gap-2">
                    <span className="text-3xl">💬</span>
                    Примеры:
                  </h4>
                  <ul className="space-y-3">
                    {item.examples.map((example, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-4 bg-rose-50 rounded-xl border-2 border-rose-200"
                      >
                        <span className="text-rose-500 text-2xl font-black mt-1">
                          {i + 1}
                        </span>
                        <span className="text-gray-800 text-lg italic">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-rose-100 border-4 border-pink-300 p-6 rounded-2xl">
                  <h4 className="font-black text-lg text-pink-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📌</span>
                    Важно знать:
                  </h4>
                  <p className="text-gray-800 font-medium">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Legal & Business Binomials
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    const binomials = [
      {
        expression: "terms and conditions",
        translation: "условия и положения",
        meaning: "Юридические правила и требования",
        examples: [
          "Please read the terms and conditions before signing.",
          "By clicking 'I agree', you accept our terms and conditions.",
          "The terms and conditions are available on our website.",
        ],
        note: "Обязательная фраза в контрактах и соглашениях",
      },
      {
        expression: "null and void",
        translation: "недействительный",
        meaning: "Юридически не имеющий силы",
        examples: [
          "The contract is null and void.",
          "This clause is null and void.",
          "The agreement was declared null and void.",
        ],
        note: "Юридический термин, оба слова означают 'недействительный'",
      },
      {
        expression: "ways and means",
        translation: "пути и средства",
        meaning: "Методы достижения чего-либо, особенно финансовые",
        examples: [
          "We'll find ways and means to solve this.",
          "The Ways and Means Committee deals with taxation.",
          "There are always ways and means.",
        ],
        note: "Используется в политике и бизнесе",
      },
      {
        expression: "aid and abet",
        translation: "содействовать и подстрекать",
        meaning: "Помогать кому-то совершить преступление",
        examples: [
          "He was charged with aiding and abetting a criminal.",
          "Don't aid and abet illegal activities.",
          "Aiding and abetting is also a crime.",
        ],
        note: "Юридический термин, аллитерация 'a'",
      },
      {
        expression: "goods and services",
        translation: "товары и услуги",
        meaning: "Продукты и сервисы, предоставляемые бизнесом",
        examples: [
          "We provide quality goods and services.",
          "VAT is charged on goods and services.",
          "The economy depends on goods and services.",
        ],
        note: "Стандартная деловая терминология",
      },
      {
        expression: "supply and demand",
        translation: "спрос и предложение",
        meaning: "Основной экономический принцип",
        examples: [
          "Prices are determined by supply and demand.",
          "The law of supply and demand is fundamental.",
          "Supply and demand dictate the market.",
        ],
        note: "Ключевая экономическая концепция",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⚖️</div>
          <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Legal & Business Binomials
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Юридические и деловые биномы
          </p>
        </div>

        <div className="space-y-6">
          {binomials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl border-4 border-indigo-200 overflow-hidden transform hover:scale-105 transition-all"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-4xl font-black">{item.expression}</h3>
                  <span className="text-6xl">📋</span>
                </div>
                <p className="text-indigo-100 mt-3 text-2xl font-bold">
                  {item.translation}
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-8 border-indigo-400 p-6 rounded-r-2xl">
                  <h4 className="font-black text-xl text-indigo-800 mb-3 flex items-center gap-2">
                    <span className="text-3xl">💡</span>
                    Значение:
                  </h4>
                  <p className="text-gray-800 text-lg font-medium">
                    {item.meaning}
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-xl text-indigo-700 mb-4 flex items-center gap-2">
                    <span className="text-3xl">💬</span>
                    Примеры:
                  </h4>
                  <ul className="space-y-3">
                    {item.examples.map((example, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl border-2 border-indigo-200"
                      >
                        <span className="text-indigo-500 text-2xl font-black mt-1">
                          {i + 1}
                        </span>
                        <span className="text-gray-800 text-lg italic">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-4 border-blue-300 p-6 rounded-2xl">
                  <h4 className="font-black text-lg text-blue-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📌</span>
                    Важно знать:
                  </h4>
                  <p className="text-gray-800 font-medium">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Emotional & Descriptive
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    const binomials = [
      {
        expression: "sick and tired",
        translation: "надоело, сыт по горло",
        meaning: "Очень раздражён или устал от чего-то",
        examples: [
          "I'm sick and tired of your excuses!",
          "She's sick and tired of waiting.",
          "We're sick and tired of this situation.",
        ],
        note: "Эмоционально сильное выражение раздражения",
      },
      {
        expression: "loud and clear",
        translation: "громко и ясно",
        meaning: "Очень понятно, без неясностей",
        examples: [
          "I read you loud and clear.",
          "The message came through loud and clear.",
          "He made his intentions loud and clear.",
        ],
        note: "Из радиосвязи, означает хорошую слышимость",
      },
      {
        expression: "bright and early",
        translation: "рано утром",
        meaning: "Очень рано, обычно утром",
        examples: [
          "Let's meet bright and early tomorrow.",
          "She wakes up bright and early every day.",
          "Be here bright and early at 6 AM.",
        ],
        note: "Подчёркивает ранний час с позитивным оттенком",
      },
      {
        expression: "sweet and sour",
        translation: "кисло-сладкий",
        meaning: "Комбинация сладкого и кислого вкуса",
        examples: [
          "I love sweet and sour chicken.",
          "The sauce is sweet and sour.",
          "Life is sweet and sour.",
        ],
        note: "Буквально о еде, метафорически о жизни",
      },
      {
        expression: "rough and ready",
        translation: "грубоватый но готовый",
        meaning: "Не изящный, но функциональный",
        examples: [
          "It's a rough and ready solution.",
          "The accommodation is rough and ready but adequate.",
          "We have a rough and ready plan.",
        ],
        note: "Подчёркивает практичность над стилем",
      },
      {
        expression: "alive and kicking / alive and well",
        translation: "жив и здоров",
        meaning: "В хорошем состоянии, активный",
        examples: [
          "Don't worry, he's alive and kicking!",
          "The tradition is alive and well.",
          "She's alive and kicking at 90 years old.",
        ],
        note: "Подчёркивает энергичность и жизненность",
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">💫</div>
          <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Emotional & Descriptive
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Эмоциональные и описательные биномы
          </p>
        </div>

        <div className="space-y-6">
          {binomials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl border-4 border-purple-200 overflow-hidden transform hover:scale-105 transition-all"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-4xl font-black">{item.expression}</h3>
                  <span className="text-6xl">🌟</span>
                </div>
                <p className="text-purple-100 mt-3 text-2xl font-bold">
                  {item.translation}
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-8 border-purple-400 p-6 rounded-r-2xl">
                  <h4 className="font-black text-xl text-purple-800 mb-3 flex items-center gap-2">
                    <span className="text-3xl">💡</span>
                    Значение:
                  </h4>
                  <p className="text-gray-800 text-lg font-medium">
                    {item.meaning}
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-xl text-purple-700 mb-4 flex items-center gap-2">
                    <span className="text-3xl">💬</span>
                    Примеры:
                  </h4>
                  <ul className="space-y-3">
                    {item.examples.map((example, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border-2 border-purple-200"
                      >
                        <span className="text-purple-500 text-2xl font-black mt-1">
                          {i + 1}
                        </span>
                        <span className="text-gray-800 text-lg italic">
                          {example}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-purple-100 border-4 border-pink-300 p-6 rounded-2xl">
                  <h4 className="font-black text-lg text-pink-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">📌</span>
                    Важно знать:
                  </h4>
                  <p className="text-gray-800 font-medium">{item.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Practice & Exercises
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [results, setResults] = useState<Record<string, boolean | null>>({});
    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (id: string, value: string) => {
      setAnswers((prev) => ({ ...prev, [id]: value }));
      setResults((prev) => ({ ...prev, [id]: null }));
    };

    const checkAnswer = (id: string, correctAnswers: string[]) => {
      const userAnswer = (answers[id] || "").toLowerCase().trim();
      const isCorrect = correctAnswers.some(
        (correct) => correct.toLowerCase() === userAnswer
      );
      setResults((prev) => ({ ...prev, [id]: isCorrect }));
    };

    const checkAllAnswers = () => {
      fillInTheBlank.forEach((item) => {
        const userAnswer = (answers[item.id] || "").toLowerCase().trim();
        const isCorrect = item.answers.some(
          (correct) => correct.toLowerCase() === userAnswer
        );
        setResults((prev) => ({ ...prev, [item.id]: isCorrect }));
      });
      matchExercises.forEach((item) => {
        const userAnswer = (answers[item.id] || "").toLowerCase().trim();
        const isCorrect = item.answers.some(
          (correct) => correct.toLowerCase() === userAnswer
        );
        setResults((prev) => ({ ...prev, [item.id]: isCorrect }));
      });
      setShowResults(true);
    };

    const fillInTheBlank = [
      {
        id: "q1",
        question: "The children arrived home _____ and sound.",
        answers: ["safe"],
        hint: "целый и невредимый",
      },
      {
        id: "q2",
        question: "I'm _____ and tired of your excuses!",
        answers: ["sick"],
        hint: "надоело",
      },
      {
        id: "q3",
        question: "She remained cool, _____ and collected.",
        answers: ["calm"],
        hint: "спокойный",
      },
      {
        id: "q4",
        question: "It's all _____ and white — very clear.",
        answers: ["black"],
        hint: "чёрно-белый",
      },
      {
        id: "q5",
        question: "The contract is null and _____.",
        answers: ["void"],
        hint: "недействительный",
      },
      {
        id: "q6",
        question: "I just want some peace and _____.",
        answers: ["quiet"],
        hint: "тишина и покой",
      },
      {
        id: "q7",
        question: "We put blood, sweat and _____ into this.",
        answers: ["tears"],
        hint: "кровь, пот и слёзы",
      },
      {
        id: "q8",
        question: "The message came through loud and _____.",
        answers: ["clear"],
        hint: "громко и ясно",
      },
    ];

    const matchExercises = [
      {
        id: "m1",
        russian: "целый и невредимый",
        answers: ["safe and sound"],
      },
      {
        id: "m2",
        russian: "взаимные уступки",
        answers: ["give and take"],
      },
      {
        id: "m3",
        russian: "суета и шум",
        answers: ["hustle and bustle"],
      },
      {
        id: "m4",
        russian: "износ",
        answers: ["wear and tear"],
      },
      {
        id: "m5",
        russian: "спрос и предложение",
        answers: ["supply and demand"],
      },
    ];

    const getResultColor = (id: string) => {
      if (results[id] === null) return "border-gray-300";
      return results[id]
        ? "border-green-500 bg-green-50"
        : "border-red-500 bg-red-50";
    };

    const getResultIcon = (id: string) => {
      if (results[id] === null) return null;
      return results[id] ? "✅" : "❌";
    };

    const correctCount = Object.values(results).filter(
      (r) => r === true
    ).length;
    const totalQuestions = fillInTheBlank.length + matchExercises.length;

    return (
      <div className="space-y-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">📝</div>
          <h2 className="text-5xl font-black mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Practice & Exercises
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Практика с проверкой ответов
          </p>
        </div>

        {/* Fill in the blanks */}
        <div className="bg-white rounded-3xl shadow-2xl border-4 border-orange-200 p-8">
          <h3 className="text-3xl font-black text-orange-700 mb-6 flex items-center gap-3">
            <span className="text-5xl">✏️</span> Fill in the Blanks
          </h3>
          <p className="text-gray-700 mb-8 text-lg">
            Заполните пропуски подходящими словами и нажмите
            &quot;Проверить&quot;:
          </p>

          <div className="space-y-4">
            {fillInTheBlank.map((item, i) => (
              <div
                key={item.id}
                className={`rounded-2xl p-6 border-4 ${getResultColor(
                  item.id
                )} transition-all`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="font-black text-orange-600 text-2xl">
                    {i + 1}.
                  </span>
                  <p className="text-gray-800 text-xl flex-1 font-medium">
                    {item.question}
                  </p>
                  {getResultIcon(item.id) && (
                    <span className="text-3xl">{getResultIcon(item.id)}</span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={answers[item.id] || ""}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    placeholder="Введите слово..."
                    className={`flex-1 px-6 py-3 text-lg border-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition font-black text-lg shadow-lg"
                  >
                    Проверить
                  </button>
                </div>
                <p className="text-sm text-gray-600 italic mt-3 font-medium">
                  Подсказка: {item.hint}
                </p>
                {results[item.id] === false && (
                  <p className="text-sm text-red-700 mt-3 font-bold bg-red-100 p-3 rounded-lg">
                    Правильный ответ: <strong>{item.answers[0]}</strong>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Translation exercise */}
        <div className="bg-white rounded-3xl shadow-2xl border-4 border-red-200 p-8">
          <h3 className="text-3xl font-black text-red-700 mb-6 flex items-center gap-3">
            <span className="text-5xl">🌐</span> Translate to English
          </h3>
          <p className="text-gray-700 mb-8 text-lg">
            Переведите на английский:
          </p>

          <div className="space-y-4">
            {matchExercises.map((item, i) => (
              <div
                key={item.id}
                className={`rounded-2xl p-6 border-4 ${getResultColor(
                  item.id
                )} transition-all`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="font-black text-red-600 text-2xl">
                    {i + 1}.
                  </span>
                  <p className="text-gray-800 font-bold text-xl flex-1">
                    {item.russian}
                  </p>
                  {getResultIcon(item.id) && (
                    <span className="text-3xl">{getResultIcon(item.id)}</span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={answers[item.id] || ""}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    placeholder="Enter binomial..."
                    className={`flex-1 px-6 py-3 text-lg border-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500 ${
                      results[item.id] === false
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.answers)}
                    className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition font-black text-lg shadow-lg"
                  >
                    Проверить
                  </button>
                </div>
                {results[item.id] === false && (
                  <p className="text-sm text-red-700 mt-3 font-bold bg-red-100 p-3 rounded-lg">
                    Правильный ответ: <strong>{item.answers[0]}</strong>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Check all button */}
        <div className="flex justify-center">
          <button
            onClick={checkAllAnswers}
            className="px-12 py-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-3xl hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition font-black text-2xl shadow-2xl transform hover:scale-110"
          >
            🎯 Проверить все ответы
          </button>
        </div>

        {/* Results summary */}
        {showResults && (
          <div
            className={`rounded-3xl p-8 border-4 shadow-2xl ${
              correctCount === totalQuestions
                ? "bg-gradient-to-r from-green-100 to-emerald-100 border-green-400"
                : correctCount >= totalQuestions * 0.7
                ? "bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-400"
                : "bg-gradient-to-r from-red-100 to-rose-100 border-red-400"
            }`}
          >
            <div className="flex items-center gap-6">
              <span className="text-7xl">
                {correctCount === totalQuestions
                  ? "🎉"
                  : correctCount >= totalQuestions * 0.7
                  ? "👍"
                  : "📚"}
              </span>
              <div>
                <h3 className="font-black text-3xl text-gray-800 mb-2">
                  Результат: {correctCount} из {totalQuestions}
                </h3>
                <p className="text-gray-700 text-xl">
                  {correctCount === totalQuestions
                    ? "Отлично! Вы справились со всеми заданиями!"
                    : correctCount >= totalQuestions * 0.7
                    ? "Хороший результат! Повторите ошибки и попробуйте снова."
                    : "Стоит повторить материал и попробовать ещё раз."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 rounded-3xl p-8 border-4 border-orange-400 shadow-2xl">
          <div className="flex items-start gap-6">
            <span className="text-7xl">🎓</span>
            <div>
              <h3 className="font-black text-3xl text-orange-800 mb-4">
                Поздравляем с завершением курса!
              </h3>
              <p className="text-gray-800 text-xl leading-relaxed mb-4">
                Вы изучили{" "}
                <strong className="text-orange-600">
                  более 40 биномов и триномов
                </strong>{" "}
                — устойчивых выражений, которые делают вашу речь естественной и
                выразительной!
              </p>
              <ul className="mt-4 space-y-2 text-gray-800 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  Использовать классические биномы в повседневной речи
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  Понимать юридические и деловые термины
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  Применять триномы для эмоциональности и убедительности
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  Говорить как носители языка с естественным ритмом!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null; // Fallback if step is out of range
}
