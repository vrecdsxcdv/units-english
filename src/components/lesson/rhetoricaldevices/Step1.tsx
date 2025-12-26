"use client";

import { useState } from "react";

export default function Step1() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Что такое риторические приёмы?",
      icon: "🎭",
      content: {
        definition: "Риторические приёмы (rhetorical devices) — это языковые техники, используемые для усиления выразительности речи, убеждения аудитории и создания эмоционального воздействия.",
        examples: [
          { point: "Усиливают аргументацию", emoji: "💪" },
          { point: "Делают речь запоминающейся", emoji: "🧠" },
          { point: "Создают эмоциональный эффект", emoji: "❤️" },
        ],
      },
    },
    {
      title: "Где применяются?",
      icon: "🎯",
      content: {
        definition: "Риторические приёмы широко используются в публичных выступлениях, литературе, журналистике, рекламе и академическом письме.",
        examples: [
          { context: "Политические речи", example: "Martin Luther King, Winston Churchill" },
          { context: "Литература", example: "Shakespeare, Dickens, Austen" },
          { context: "Реклама", example: "Слоганы брендов, маркетинг" },
          { context: "Академические эссе", example: "Аргументация, убеждение" },
        ],
      },
    },
    {
      title: "Что изучим?",
      icon: "📚",
      content: {
        definition: "В этом уроке мы рассмотрим 4 ключевых риторических приёма продвинутого уровня.",
        examples: [
          { device: "Anaphora", description: "Повторение слов в начале предложений" },
          { device: "Chiasmus", description: "Перекрёстная структура (AB → BA)" },
          { device: "Antithesis", description: "Противопоставление идей" },
          { device: "Zeugma", description: "Одно слово связывает разные понятия" },
        ],
      },
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-8 rounded-3xl">
      <div className="text-center mb-12">
        <div className="text-8xl mb-6">🎭</div>
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Rhetorical Devices
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Риторические приёмы: Anaphora, Chiasmus, Antithesis, Zeugma
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 overflow-hidden">
        <div className="flex border-b-2 border-purple-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-4 px-6 font-bold text-lg transition-all ${
                activeTab === index
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        <div className="p-8">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200 mb-6">
            <p className="text-lg text-gray-800 leading-relaxed">{tabs[activeTab].content.definition}</p>
          </div>

          {activeTab === 0 && (
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-purple-700 mb-4">Почему важно знать:</h3>
              {tabs[activeTab].content.examples.map((ex, i: number) => (
                <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-5 flex items-center gap-4">
                  <span className="text-4xl">{"emoji" in ex ? ex.emoji : ""}</span>
                  <p className="text-lg font-semibold text-gray-800">{"point" in ex ? ex.point : ""}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-purple-700 mb-4">Контексты использования:</h3>
              {tabs[activeTab].content.examples.map((ex, i: number) => (
                <div key={i} className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-5">
                  <p className="font-bold text-lg text-green-700 mb-2">{"context" in ex ? ex.context : ""}</p>
                  <p className="text-gray-700 italic">{"example" in ex ? ex.example : ""}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-purple-700 mb-4">4 приёма этого урока:</h3>
              {tabs[activeTab].content.examples.map((ex, i: number) => (
                <div key={i} className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg p-5">
                  <p className="font-bold text-lg text-amber-700 mb-2">{"device" in ex ? ex.device : ""}</p>
                  <p className="text-gray-700">{"description" in ex ? ex.description : ""}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-indigo-800 mb-2">Совет профессионала</h3>
            <p className="text-gray-700 text-lg">
              Риторические приёмы — признак высокого уровня владения языком. Их использование показывает,
              что вы не просто знаете английский, а <span className="font-bold text-indigo-700">владеете им мастерски</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
