"use client";

import { useState } from "react";

export default function Step2() {
  const [showMore, setShowMore] = useState(false);

  const mainExamples = [
    {
      author: "Martin Luther King Jr.",
      quote: "I have a dream... I have a dream... I have a dream...",
      repeated: "I have a dream",
      explanation: "Повторение фразы создаёт ритм и усиливает эмоциональное воздействие",
    },
    {
      author: "Winston Churchill",
      quote: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields...",
      repeated: "We shall fight",
      explanation: "Повторение подчёркивает решимость и единство",
    },
    {
      author: "Charles Dickens",
      quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...",
      repeated: "It was",
      explanation: "Создаёт ритм и контраст между противоположными идеями",
    },
  ];

  const additionalExamples = [
    {
      author: "Abraham Lincoln",
      quote: "...government of the people, by the people, for the people...",
      repeated: "the people",
    },
    {
      author: "Barack Obama",
      quote: "Yes we can. Yes we can. Yes we can.",
      repeated: "Yes we can",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔁</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Anaphora
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Повторение слов или фраз в начале предложений
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-300 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-3">Что такое Anaphora?</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <span className="font-bold text-purple-700">Anaphora</span> (анафора) — риторический приём,
            при котором одно и то же слово или фраза повторяются в начале последовательных предложений
            или фраз для усиления эмоционального эффекта.
          </p>
          <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
            <p className="text-center text-xl font-mono text-purple-700">
              <span className="font-black text-pink-600">WORD/PHRASE</span> + sentence 1
            </p>
            <p className="text-center text-xl font-mono text-purple-700">
              <span className="font-black text-pink-600">WORD/PHRASE</span> + sentence 2
            </p>
            <p className="text-center text-xl font-mono text-purple-700">
              <span className="font-black text-pink-600">WORD/PHRASE</span> + sentence 3
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-purple-800 mb-5">Знаменитые примеры:</h3>

        <div className="space-y-6">
          {mainExamples.map((ex, i) => (
            <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl">📜</span>
                <div className="flex-1">
                  <p className="font-bold text-lg text-blue-800 mb-2">{ex.author}</p>
                  <p className="text-gray-800 text-lg italic mb-3">{ex.quote}</p>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <p className="text-sm text-gray-600">
                      <span className="font-bold text-pink-600">Повторяется:</span>{" "}
                      <span className="font-mono bg-pink-100 px-2 py-1 rounded">{ex.repeated}</span>
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      <span className="font-bold">Эффект:</span> {ex.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showMore && (
          <div className="space-y-6 mt-6">
            {additionalExamples.map((ex, i) => (
              <div key={i} className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✨</span>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-green-800 mb-2">{ex.author}</p>
                    <p className="text-gray-800 text-lg italic mb-3">{ex.quote}</p>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-bold text-green-600">Повторяется:</span>{" "}
                        <span className="font-mono bg-green-100 px-2 py-1 rounded">{ex.repeated}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
          >
            {showMore ? "Скрыть примеры ▲" : "Больше примеров ▼"}
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Когда использовать Anaphora?</h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>✓ В публичных выступлениях для усиления убеждения</li>
              <li>✓ В эссе для создания ритма и акцента</li>
              <li>✓ В поэзии и литературе для эмоционального эффекта</li>
              <li>✓ В рекламе для запоминаемости слогана</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
