"use client";

import { useState } from "react";

export default function Step6() {
  const [showContrasts, setShowContrasts] = useState(false);

  const examples = [
    {
      author: "Neil Armstrong",
      quote: "That's one small step for man, one giant leap for mankind.",
      contrast: {
        A: "small step",
        B: "giant leap",
      },
      explanation: "Контраст масштаба: маленький шаг vs. огромный прыжок",
    },
    {
      author: "Alexander Pope",
      quote: "To err is human; to forgive, divine.",
      contrast: {
        A: "human (ошибаться)",
        B: "divine (прощать)",
      },
      explanation: "Контраст между человеческим и божественным",
    },
    {
      author: "William Shakespeare",
      quote: "Not that I loved Caesar less, but that I loved Rome more.",
      contrast: {
        A: "loved Caesar less",
        B: "loved Rome more",
      },
      explanation: "Сравнение двух видов любви через противопоставление",
    },
    {
      author: "Charles Dickens",
      quote: "It was the best of times, it was the worst of times.",
      contrast: {
        A: "best of times",
        B: "worst of times",
      },
      explanation: "Абсолютный контраст между лучшим и худшим",
    },
  ];

  const commonContrasts = [
    { pair: "love ↔ hate", usage: "I love the design but hate the implementation." },
    { pair: "light ↔ dark", usage: "In the light of day, dark secrets emerge." },
    { pair: "life ↔ death", usage: "In life, we prepare for death." },
    { pair: "rich ↔ poor", usage: "The rich get richer, the poor get poorer." },
    { pair: "young ↔ old", usage: "The young rebel; the old reminisce." },
    { pair: "war ↔ peace", usage: "In war, we dream of peace; in peace, we forget war." },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">⚖️</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Antithesis
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Противопоставление контрастных идей
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8">
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border-2 border-blue-300 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-3">Что такое Antithesis?</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <span className="font-bold text-blue-700">Antithesis</span> (антитеза) — риторический приём,
            при котором противоположные идеи располагаются рядом в параллельных грамматических структурах
            для создания контраста.
          </p>
          <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
            <p className="text-center text-xl font-mono mb-2">
              <span className="bg-blue-100 px-3 py-1 rounded font-bold text-blue-700">IDEA A</span>
              <span className="mx-4 text-gray-400">vs</span>
              <span className="bg-cyan-100 px-3 py-1 rounded font-bold text-cyan-700">IDEA B</span>
            </p>
            <p className="text-center text-gray-600 text-sm mt-3">
              Противоположные идеи в параллельной структуре
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-blue-800 mb-5">Знаменитые примеры:</h3>

        <div className="space-y-6">
          {examples.map((ex, i) => (
            <div key={i} className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl">📜</span>
                <div className="flex-1">
                  <p className="font-bold text-lg text-green-800 mb-2">{ex.author}</p>
                  <p className="text-gray-800 text-xl italic mb-4 leading-relaxed">{ex.quote}</p>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex items-center justify-center gap-4 mb-3">
                      <span className="bg-blue-100 px-3 py-2 rounded font-mono text-blue-700 text-sm">
                        {ex.contrast.A}
                      </span>
                      <span className="text-2xl">⚡</span>
                      <span className="bg-cyan-100 px-3 py-2 rounded font-mono text-cyan-700 text-sm">
                        {ex.contrast.B}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 text-center">
                      <span className="font-bold">Эффект:</span> {ex.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowContrasts(!showContrasts)}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg"
          >
            {showContrasts ? "Скрыть ▲" : "Популярные контрасты ▼"}
          </button>
        </div>

        {showContrasts && (
          <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <h4 className="font-bold text-xl text-purple-800 mb-4 text-center">
              Часто используемые контрастные пары:
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {commonContrasts.map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="font-bold text-purple-700 mb-2 text-center">{item.pair}</p>
                  <p className="text-gray-700 text-sm italic text-center">{item.usage}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Когда использовать Antithesis?</h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>✓ Для усиления аргументации через контраст</li>
              <li>✓ Для создания драматического эффекта</li>
              <li>✓ Для выделения ключевых различий</li>
              <li>✓ Для запоминающихся заключений в эссе</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
