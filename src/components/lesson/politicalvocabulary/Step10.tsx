"use client";

import { useState } from "react";

export default function Step10() {
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (id: string) => {
    setShowAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const exercises = [
    {
      id: "fill1",
      type: "Fill in the blanks",
      instruction: "Заполните пропуски подходящими словами:",
      questions: [
        {
          q: "The country defended its _____ against foreign interference.",
          a: "sovereignty",
          hint: "верховная власть государства",
        },
        {
          q: "The 2016 Brexit _____ resulted in a vote to leave the EU.",
          a: "referendum",
          hint: "прямое голосование граждан",
        },
        {
          q: "The _____ government was formed by three different parties.",
          a: "coalition",
          hint: "союз партий",
        },
        {
          q: "The senator launched a _____ that lasted 13 hours to block the vote.",
          a: "filibuster",
          hint: "тактика затягивания дебатов",
        },
        {
          q: "The president threatened to _____ the spending bill.",
          a: "veto",
          hint: "отклонить законопроект",
        },
      ],
    },
    {
      id: "match1",
      type: "Match the terms",
      instruction: "Сопоставьте термины с их определениями:",
      pairs: [
        { term: "constituency", definition: "избирательный округ" },
        { term: "incumbent", definition: "действующее должностное лицо" },
        { term: "bipartisan", definition: "поддерживаемый двумя партиями" },
        { term: "manifesto", definition: "программа партии" },
        { term: "sanctions", definition: "экономические ограничения" },
      ],
    },
    {
      id: "translate1",
      type: "Translate to English",
      instruction: "Переведите на английский:",
      items: [
        {
          ru: "Парламент принял новый законопроект.",
          en: "Parliament passed the new bill.",
        },
        {
          ru: "Кандидат признал поражение после подсчёта голосов.",
          en: "The candidate conceded defeat after the votes were counted.",
        },
        {
          ru: "ООН ввела санкции против режима.",
          en: "The UN imposed sanctions on the regime.",
        },
        {
          ru: "Президент подписал указ об иммиграции.",
          en: "The president signed an executive order on immigration.",
        },
        {
          ru: "Явка избирателей была самой высокой за десятилетия.",
          en: "Voter turnout was the highest in decades.",
        },
      ],
    },
  ];

  const newsHeadlines = [
    {
      headline: "Coalition Government Faces Crisis as Junior Partner Threatens to Walk Out",
      translation: "Коалиционное правительство столкнулось с кризисом: младший партнёр угрожает выйти из союза",
      terms: ["coalition", "government", "crisis"],
    },
    {
      headline: "Senate Filibuster Blocks Voting Rights Amendment",
      translation: "Обструкция в Сенате заблокировала поправку об избирательных правах",
      terms: ["filibuster", "amendment", "voting rights"],
    },
    {
      headline: "Referendum Results: 52% Vote for Independence",
      translation: "Результаты референдума: 52% проголосовали за независимость",
      terms: ["referendum", "independence", "vote"],
    },
    {
      headline: "President Vetoes Bipartisan Infrastructure Bill",
      translation: "Президент наложил вето на двухпартийный законопроект об инфраструктуре",
      terms: ["veto", "bipartisan", "bill"],
    },
    {
      headline: "Opposition Leader Calls for Prime Minister's Resignation Amid Scandal",
      translation: "Лидер оппозиции призвал премьер-министра уйти в отставку на фоне скандала",
      terms: ["opposition", "resignation", "scandal"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📝</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Practice & Exercises</h2>
        <p className="text-xl text-gray-600">Практика и упражнения</p>
      </div>

      {/* Exercise 1: Fill in the blanks */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-6">
        <h3 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
          <span>✏️</span> {exercises[0].type}
        </h3>
        <p className="text-gray-600 mb-6">{exercises[0].instruction}</p>

        <div className="space-y-4">
          {exercises[0].questions.map((item, i) => (
            <div key={i} className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <p className="text-gray-800 mb-2">
                <span className="font-bold text-emerald-600 mr-2">{i + 1}.</span>
                {item.q}
              </p>
              <p className="text-sm text-gray-500 italic mb-2">Подсказка: {item.hint}</p>
              <button
                onClick={() => toggleAnswer(`fill-${i}`)}
                className="text-sm bg-emerald-500 text-white px-3 py-1 rounded-lg hover:bg-emerald-600 transition"
              >
                {showAnswers[`fill-${i}`] ? "Скрыть ответ" : "Показать ответ"}
              </button>
              {showAnswers[`fill-${i}`] && (
                <p className="mt-2 text-emerald-700 font-bold">→ {item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Exercise 2: Match the terms */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <span>🔗</span> {exercises[1].type}
        </h3>
        <p className="text-gray-600 mb-6">{exercises[1].instruction}</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-bold text-gray-700 mb-2">Термины:</h4>
            {exercises[1].pairs.map((pair, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <span className="font-semibold text-blue-700">{i + 1}. {pair.term}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-gray-700 mb-2">Определения:</h4>
            {exercises[1].pairs.map((pair, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-gray-700">{String.fromCharCode(65 + i)}. {pair.definition}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => toggleAnswer("match")}
          className="mt-4 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {showAnswers["match"] ? "Скрыть ответы" : "Показать ответы"}
        </button>
        {showAnswers["match"] && (
          <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="font-semibold text-blue-800">Ответы: 1-A, 2-B, 3-C, 4-D, 5-E</p>
          </div>
        )}
      </div>

      {/* Exercise 3: Translate */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6">
        <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
          <span>🌐</span> {exercises[2].type}
        </h3>
        <p className="text-gray-600 mb-6">{exercises[2].instruction}</p>

        <div className="space-y-4">
          {exercises[2].items.map((item, i) => (
            <div key={i} className="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <p className="text-gray-800 mb-2">
                <span className="font-bold text-purple-600 mr-2">{i + 1}.</span>
                {item.ru}
              </p>
              <button
                onClick={() => toggleAnswer(`trans-${i}`)}
                className="text-sm bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600 transition"
              >
                {showAnswers[`trans-${i}`] ? "Скрыть перевод" : "Показать перевод"}
              </button>
              {showAnswers[`trans-${i}`] && (
                <p className="mt-2 text-purple-700 font-medium italic">→ {item.en}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* News Headlines Practice */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-6">
        <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
          <span>📰</span> Reading Practice: News Headlines
        </h3>
        <p className="text-gray-600 mb-6">Прочитайте заголовки и определите ключевые термины:</p>

        <div className="space-y-4">
          {newsHeadlines.map((item, i) => (
            <div key={i} className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <p className="text-gray-800 font-semibold text-lg mb-2">
                &quot;{item.headline}&quot;
              </p>
              <button
                onClick={() => toggleAnswer(`news-${i}`)}
                className="text-sm bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition"
              >
                {showAnswers[`news-${i}`] ? "Скрыть" : "Показать перевод и термины"}
              </button>
              {showAnswers[`news-${i}`] && (
                <div className="mt-3 space-y-2">
                  <p className="text-gray-600 italic">{item.translation}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.terms.map((term, j) => (
                      <span
                        key={j}
                        className="bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎓</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Поздравляем с завершением курса!</h3>
            <p className="text-gray-700 text-lg">
              Вы изучили более <strong>60 политических терминов</strong> и множество устойчивых выражений.
              Теперь вы можете:
            </p>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>✅ Понимать политические новости на английском языке</li>
              <li>✅ Обсуждать выборы, законодательство и международные отношения</li>
              <li>✅ Различать термины разных политических систем (UK vs US)</li>
              <li>✅ Использовать профессиональную политическую лексику</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
