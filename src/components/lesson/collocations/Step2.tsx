"use client";

import { useState } from "react";

export default function Step2() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const collocations = [
    {
      collocation: "conduct research",
      translation: "проводить исследование",
      explanation: "Самая распространённая коллокация для научной работы. Используется в формальном академическом контексте.",
      examples: [
        "We need to conduct extensive research before publishing.",
        "The team conducted research over a five-year period.",
        "She is conducting research into climate change.",
      ],
      wrongVersions: ["do research ❌", "make research ❌", "perform research ❌"],
      relatedCollocations: ["conduct a study", "conduct an experiment", "conduct an investigation"],
    },
    {
      collocation: "draw a conclusion",
      translation: "сделать вывод",
      explanation: "Используется для формулирования выводов на основе данных или аргументов.",
      examples: [
        "Based on the evidence, we can draw the conclusion that...",
        "It's too early to draw any conclusions.",
        "The researchers drew several important conclusions.",
      ],
      wrongVersions: ["make a conclusion ❌", "do a conclusion ❌", "take a conclusion ❌"],
      relatedCollocations: ["reach a conclusion", "arrive at a conclusion", "jump to conclusions"],
    },
    {
      collocation: "reach a consensus",
      translation: "достичь консенсуса",
      explanation: "Когда группа людей приходит к общему мнению или соглашению.",
      examples: [
        "The committee reached a consensus on the new policy.",
        "It was difficult to reach consensus among all members.",
        "After hours of debate, we finally reached a consensus.",
      ],
      wrongVersions: ["make a consensus ❌", "do a consensus ❌", "achieve a consensus ⚠️ (возможно, но реже)"],
      relatedCollocations: ["reach an agreement", "reach a decision", "reach a compromise"],
    },
    {
      collocation: "gather data",
      translation: "собирать данные",
      explanation: "Процесс сбора информации для исследования или анализа.",
      examples: [
        "We gathered data from multiple sources.",
        "The survey was used to gather data on consumer preferences.",
        "Researchers spent months gathering data.",
      ],
      wrongVersions: ["take data ❌", "make data ❌"],
      relatedCollocations: ["collect data", "obtain data", "gather information", "gather evidence"],
    },
    {
      collocation: "formulate a hypothesis",
      translation: "сформулировать гипотезу",
      explanation: "Создание предположения, которое можно проверить экспериментально.",
      examples: [
        "Scientists formulated a hypothesis about the phenomenon.",
        "We need to formulate a clear hypothesis before beginning.",
        "The team formulated several competing hypotheses.",
      ],
      wrongVersions: ["make a hypothesis ❌", "create a hypothesis ⚠️ (возможно, но менее формально)"],
      relatedCollocations: ["test a hypothesis", "prove a hypothesis", "support a hypothesis"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
          VERB + NOUN COLLOCATIONS
        </div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">
          Исследования и выводы
        </h2>
        <p className="text-xl text-gray-600">Research & Conclusions</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
          <div className="grid grid-cols-4 gap-4 text-white font-bold text-center">
            <div>Коллокация</div>
            <div>Перевод</div>
            <div>Частота</div>
            <div>Детали</div>
          </div>
        </div>

        {collocations.map((item, index) => (
          <div key={index} className="border-b-2 border-gray-100 last:border-b-0">
            <div className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-blue-50 transition-colors">
              <div className="font-bold text-lg text-blue-700">{item.collocation}</div>
              <div className="text-gray-700">{item.translation}</div>
              <div className="text-center">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-green-700">95%</span>
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  {expandedRow === index ? "Скрыть ▲" : "Показать ▼"}
                </button>
              </div>
            </div>

            {expandedRow === index && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-t-2 border-blue-200 animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg text-blue-800 mb-3 flex items-center gap-2">
                      <span className="text-2xl">💡</span> Объяснение
                    </h4>
                    <p className="text-gray-700 bg-white p-4 rounded-lg border border-blue-200">
                      {item.explanation}
                    </p>

                    <h4 className="font-bold text-lg text-red-700 mb-3 mt-6 flex items-center gap-2">
                      <span className="text-2xl">❌</span> Неправильные варианты
                    </h4>
                    <div className="space-y-2">
                      {item.wrongVersions.map((wrong, i) => (
                        <div key={i} className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
                          <p className="text-red-700 font-semibold">{wrong}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-green-700 mb-3 flex items-center gap-2">
                      <span className="text-2xl">📝</span> Примеры использования
                    </h4>
                    <div className="space-y-3">
                      {item.examples.map((ex, i) => (
                        <div key={i} className="bg-white border-2 border-green-200 rounded-lg p-4">
                          <p className="text-gray-800 italic">"{ex}"</p>
                        </div>
                      ))}
                    </div>

                    <h4 className="font-bold text-lg text-purple-700 mb-3 mt-6 flex items-center gap-2">
                      <span className="text-2xl">🔗</span> Похожие коллокации
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.relatedCollocations.map((related, i) => (
                        <span key={i} className="bg-purple-100 border border-purple-300 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {related}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <p className="text-center text-gray-700 text-lg">
          <span className="text-amber-700 font-bold text-xl">💡 Подсказка:</span> Нажмите "Показать", чтобы увидеть примеры, объяснения и ошибки
        </p>
      </div>
    </div>
  );
}
