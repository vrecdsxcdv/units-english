"use client";

import { useState } from "react";

export default function Step4() {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = [
    {
      author: "John F. Kennedy",
      quote: "Ask not what your country can do for you — ask what you can do for your country.",
      structure: {
        A: "what your country can do for you",
        B: "what you can do for your country",
      },
      explanation: "Инверсия субъекта и объекта создаёт зеркальный эффект",
    },
    {
      author: "Abraham Lincoln",
      quote: "You can fool all the people some of the time, and some of the people all the time...",
      structure: {
        A: "all the people / some of the time",
        B: "some of the people / all the time",
      },
      explanation: "Перестановка элементов создаёт контраст и глубину мысли",
    },
    {
      author: "Mae West",
      quote: "It's not the men in my life; it's the life in my men.",
      structure: {
        A: "men in my life",
        B: "life in my men",
      },
      explanation: "Игра слов через перестановку создаёт юмористический эффект",
    },
    {
      author: "Benjamin Franklin",
      quote: "By failing to prepare, you are preparing to fail.",
      structure: {
        A: "failing to prepare",
        B: "preparing to fail",
      },
      explanation: "Зеркальная структура подчёркивает иронию ситуации",
    },
  ];

  const current = examples[selectedExample];

  return (
    <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔄</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Chiasmus
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Перекрёстная структура: AB → BA
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-indigo-200 p-8">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6 border-2 border-indigo-300 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-3">Что такое Chiasmus?</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <span className="font-bold text-indigo-700">Chiasmus</span> (хиазм) — риторический приём,
            при котором элементы двух параллельных фраз меняются местами в обратном порядке (AB → BA),
            создавая зеркальный эффект.
          </p>
          <div className="bg-white rounded-lg p-6 border-2 border-indigo-200">
            <p className="text-center text-2xl font-mono mb-4">
              <span className="font-black text-indigo-600">A</span>{" "}
              <span className="font-black text-purple-600">B</span>
              <span className="mx-4 text-gray-400">→</span>
              <span className="font-black text-purple-600">B</span>{" "}
              <span className="font-black text-indigo-600">A</span>
            </p>
            <p className="text-center text-gray-600 text-sm">
              Элементы переставляются в обратном порядке
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-indigo-800 mb-4 text-center">
            Выберите пример для анализа:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => setSelectedExample(i)}
                className={`px-5 py-3 rounded-lg font-semibold text-sm transition-all ${
                  selectedExample === i
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {ex.author}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">📜</span>
            <div className="flex-1">
              <p className="font-bold text-xl text-blue-800 mb-3">{current.author}</p>
              <p className="text-gray-800 text-xl italic mb-4 leading-relaxed">{current.quote}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-blue-200 mb-4">
            <h4 className="font-bold text-blue-800 mb-3 text-center">Структура хиазма:</h4>
            <div className="space-y-3">
              <p className="text-center">
                <span className="bg-indigo-100 px-3 py-2 rounded font-mono text-indigo-800">
                  A: {current.structure.A}
                </span>
              </p>
              <p className="text-center text-2xl text-gray-400">↓↑</p>
              <p className="text-center">
                <span className="bg-purple-100 px-3 py-2 rounded font-mono text-purple-800">
                  B: {current.structure.B}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <p className="text-gray-700">
              <span className="font-bold text-amber-700">Эффект:</span> {current.explanation}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Когда использовать Chiasmus?</h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>✓ Для создания запоминающихся фраз</li>
              <li>✓ Для подчёркивания контраста или иронии</li>
              <li>✓ Для добавления ритма и элегантности речи</li>
              <li>✓ В заключительных предложениях эссе</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
