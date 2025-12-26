"use client";

import { useState } from "react";

export default function Step8() {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = [
    {
      text: "She broke his car and his heart.",
      explanation: "Глагол 'broke' управляет двумя объектами: материальным (car) и абстрактным (heart)",
      breakdown: {
        verb: "broke",
        objects: ["his car (физический объект)", "his heart (эмоциональное состояние)"],
      },
      effect: "Создаёт неожиданную связь между разными уровнями значения",
    },
    {
      text: "He lost his coat and his temper.",
      explanation: "Глагол 'lost' связывает конкретный предмет (coat) и абстрактное понятие (temper)",
      breakdown: {
        verb: "lost",
        objects: ["his coat (вещь)", "his temper (самообладание)"],
      },
      effect: "Юмористический эффект через неожиданное сравнение",
    },
    {
      text: "You are free to execute your laws, and your citizens, as you see fit.",
      explanation: "'Execute' имеет два значения: исполнять (законы) и казнить (граждан)",
      breakdown: {
        verb: "execute",
        objects: ["your laws (исполнять)", "your citizens (казнить)"],
      },
      effect: "Игра слов создаёт тревожный, сатирический эффект",
    },
    {
      text: "She arrived in a taxi and a bad mood.",
      explanation: "Глагол 'arrived' описывает и способ прибытия, и эмоциональное состояние",
      breakdown: {
        verb: "arrived in",
        objects: ["a taxi (транспорт)", "a bad mood (настроение)"],
      },
      effect: "Неожиданное сочетание создаёт лёгкий юмор",
    },
  ];

  const current = examples[selectedExample];

  return (
    <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎪</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Zeugma
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Одно слово управляет разными понятиями
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-200 p-8">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 border-2 border-amber-300 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-3">Что такое Zeugma?</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <span className="font-bold text-amber-700">Zeugma</span> (зевгма) — риторический приём,
            при котором одно слово (обычно глагол) управляет несколькими объектами,
            часто в разных значениях или на разных уровнях (буквальном и метафорическом).
          </p>
          <div className="bg-white rounded-lg p-6 border-2 border-amber-200">
            <p className="text-center text-xl font-mono mb-3">
              <span className="font-black text-amber-600">VERB</span>
              <span className="mx-2">+</span>
              <span className="text-orange-600">object₁</span>
              <span className="mx-2">+</span>
              <span className="text-red-600">object₂</span>
            </p>
            <p className="text-center text-gray-600 text-sm">
              Одно слово связывает разные типы объектов
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">
            Примеры для анализа:
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => setSelectedExample(i)}
                className={`p-4 rounded-lg font-semibold text-sm transition-all ${
                  selectedExample === i
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Пример {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
          <div className="mb-5">
            <p className="text-2xl text-gray-800 font-semibold text-center mb-4 italic leading-relaxed">
              {current.text}
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-blue-200 mb-4">
            <h4 className="font-bold text-blue-800 mb-3 text-center">Структура зевгмы:</h4>
            <div className="space-y-3">
              <p className="text-center">
                <span className="bg-amber-100 px-4 py-2 rounded font-mono text-amber-800 text-lg font-bold">
                  {current.breakdown.verb}
                </span>
              </p>
              <div className="flex justify-center gap-4">
                {current.breakdown.objects.map((obj, i) => (
                  <div key={i} className="bg-orange-50 px-3 py-2 rounded border border-orange-200 text-center">
                    <p className="text-sm text-gray-700">{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200 mb-4">
            <p className="text-gray-700">
              <span className="font-bold text-green-700">Объяснение:</span> {current.explanation}
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-gray-700">
              <span className="font-bold text-purple-700">Эффект:</span> {current.effect}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-indigo-800 mb-2">Когда использовать Zeugma?</h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>✓ Для создания юмористического эффекта</li>
              <li>✓ Для неожиданных сравнений</li>
              <li>✓ Для экономии слов с максимальным эффектом</li>
              <li>✓ В креативном письме и поэзии</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
