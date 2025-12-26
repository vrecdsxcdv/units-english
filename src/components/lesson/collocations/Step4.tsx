"use client";
import { useState } from "react";

export default function Step4() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const collocations = [
    { collocation: "extensive research", category: "research", translation: "обширное исследование", example: "The project required extensive research.", alternatives: ["comprehensive research", "thorough research"] },
    { collocation: "preliminary findings", category: "findings", translation: "предварительные результаты", example: "The preliminary findings suggest a correlation.", alternatives: ["initial findings", "early findings"] },
    { collocation: "significant impact", category: "impact", translation: "значительное влияние", example: "The policy had a significant impact.", alternatives: ["major impact", "substantial impact"] },
  ];

  const categories = [
    { id: "all", label: "Все", count: 3 },
    { id: "research", label: "Research", count: 1 },
    { id: "findings", label: "Findings", count: 1 },
    { id: "impact", label: "Impact", count: 1 },
  ];

  const filteredCollocations = selectedCategory === "all" ? collocations : collocations.filter(c => c.category === selectedCategory);

  return (
    <div className="space-y-8 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black mb-2 text-gray-800">Описание исследований</h2>
        <p className="text-xl text-gray-600">Adjective + Noun</p>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-rose-200 p-6">
        <h3 className="font-bold text-xl text-rose-700 mb-4">🗂️ Фильтр по категориям</h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`px-4 py-2 rounded-lg font-semibold transition-all ${selectedCategory === cat.id ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {filteredCollocations.map((item, index) => (
            <div key={index} className="border-2 border-rose-200 rounded-xl overflow-hidden">
              <button onClick={() => setOpenAccordion(openAccordion === index ? null : index)} className="w-full p-5 bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`text-2xl transition-transform ${openAccordion === index ? "rotate-90" : ""}`}>▶️</span>
                  <div className="text-left">
                    <p className="font-bold text-xl text-rose-700">{item.collocation}</p>
                    <p className="text-gray-600 text-sm">{item.translation}</p>
                  </div>
                </div>
              </button>
              {openAccordion === index && (
                <div className="p-6 bg-white border-t-2 border-rose-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg text-purple-700 mb-3">📝 Пример</h4>
                      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                        <p className="text-gray-800 italic">"{item.example}"</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-700 mb-3">🔄 Альтернативы</h4>
                      <div className="space-y-2">
                        {item.alternatives.map((alt, i) => (
                          <div key={i} className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3">
                            <p className="text-blue-700 font-semibold">{alt}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}