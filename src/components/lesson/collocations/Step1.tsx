"use client";

import { useState } from "react";

export default function Step1() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Что такое коллокации?",
      icon: "🤔",
      content: {
        definition: "Коллокации — это устойчивые сочетания слов, которые носители языка используют естественно и часто вместе.",
        examples: [
          { wrong: "do research ❌", right: "conduct research ✅" },
          { wrong: "say a speech ❌", right: "give a speech ✅" },
          { wrong: "do a conclusion ❌", right: "draw a conclusion ✅" },
        ],
      },
    },
    {
      title: "Зачем их учить?",
      icon: "🎯",
      content: {
        definition: "Коллокации делают вашу речь более естественной и академичной. Носители языка не скажут 'do research' — только 'conduct research'.",
        examples: [
          { point: "Звучите как носитель языка", emoji: "🗣️" },
          { point: "Избегаете ошибок в академическом письме", emoji: "✍️" },
          { point: "Набираете больше баллов на экзаменах", emoji: "📝" },
        ],
      },
    },
    {
      title: "Типы коллокаций",
      icon: "📚",
      content: {
        definition: "В академическом английском есть несколько типов устойчивых сочетаний.",
        examples: [
          { type: "Verb + Noun", example: "conduct research, draw conclusions" },
          { type: "Adjective + Noun", example: "extensive research, preliminary findings" },
          { type: "Noun + Verb", example: "evidence suggests, data shows" },
          { type: "Adverb + Adjective", example: "highly significant, widely accepted" },
        ],
      },
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-8 rounded-3xl">
      <div className="text-center mb-12">
        <div className="text-8xl mb-6">🎓</div>
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
          Academic Collocations
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Устойчивые сочетания слов в академическом английском
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-200 overflow-hidden">
        <div className="flex border-b-2 border-orange-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-4 px-6 font-bold text-lg transition-all ${
                activeTab === index
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              {tab.title}
            </button>
          ))}
        </div>

        <div className="p-8">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200 mb-6">
            <p className="text-lg text-gray-800 leading-relaxed">{tabs[activeTab].content.definition}</p>
          </div>

          {activeTab === 0 && (
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-orange-700 mb-4">Примеры ошибок:</h3>
              {tabs[activeTab].content.examples.map((ex: any, i: number) => (
                <div key={i} className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                    <p className="text-lg font-semibold text-red-700">{ex.wrong}</p>
                  </div>
                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                    <p className="text-lg font-semibold text-green-700">{ex.right}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-orange-700 mb-4">Преимущества:</h3>
              {tabs[activeTab].content.examples.map((ex: any, i: number) => (
                <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-5 flex items-center gap-4">
                  <span className="text-4xl">{ex.emoji}</span>
                  <p className="text-lg font-semibold text-gray-800">{ex.point}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-orange-700 mb-4">Основные типы:</h3>
              {tabs[activeTab].content.examples.map((ex: any, i: number) => (
                <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-5">
                  <p className="font-bold text-lg text-purple-700 mb-2">{ex.type}</p>
                  <p className="text-gray-700 italic">{ex.example}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-yellow-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-orange-800 mb-2">Совет профессионала</h3>
            <p className="text-gray-700 text-lg">
              Не пытайтесь переводить коллокации дословно с русского! В английском языке свои устойчивые сочетания.
              Например: "проводить исследование" = <span className="font-bold text-orange-700">conduct research</span>,
              а не "do research" или "make research".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
