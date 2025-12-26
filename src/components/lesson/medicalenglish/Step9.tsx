"use client";

import { useState } from "react";

export default function Step9() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const abbreviations = [
    {
      abbr: "BP",
      full: "Blood Pressure",
      translation: "артериальное давление",
      category: "vitals",
      example: "Patient's BP is 120/80 mmHg.",
    },
    {
      abbr: "HR",
      full: "Heart Rate",
      translation: "частота сердечных сокращений",
      category: "vitals",
      example: "HR: 72 bpm (beats per minute).",
    },
    {
      abbr: "RR",
      full: "Respiratory Rate",
      translation: "частота дыхания",
      category: "vitals",
      example: "RR: 16 breaths per minute.",
    },
    {
      abbr: "Temp",
      full: "Temperature",
      translation: "температура тела",
      category: "vitals",
      example: "Temp: 37.2°C (normal).",
    },
    {
      abbr: "CBC",
      full: "Complete Blood Count",
      translation: "общий анализ крови",
      category: "tests",
      example: "CBC showed elevated white blood cell count.",
    },
    {
      abbr: "CT",
      full: "Computed Tomography",
      translation: "компьютерная томография",
      category: "tests",
      example: "CT scan revealed no abnormalities.",
    },
    {
      abbr: "MRI",
      full: "Magnetic Resonance Imaging",
      translation: "магнитно-резонансная томография",
      category: "tests",
      example: "MRI showed herniated disc.",
    },
    {
      abbr: "ECG/EKG",
      full: "Electrocardiogram",
      translation: "электрокардиограмма",
      category: "tests",
      example: "ECG indicated irregular heart rhythm.",
    },
    {
      abbr: "IV",
      full: "Intravenous",
      translation: "внутривенный",
      category: "treatment",
      example: "Administer medication via IV drip.",
    },
    {
      abbr: "IM",
      full: "Intramuscular",
      translation: "внутримышечный",
      category: "treatment",
      example: "Give IM injection in the deltoid muscle.",
    },
    {
      abbr: "PO",
      full: "Per Os (by mouth)",
      translation: "перорально, через рот",
      category: "treatment",
      example: "Take medication PO twice daily.",
    },
    {
      abbr: "PRN",
      full: "Pro Re Nata (as needed)",
      translation: "по мере необходимости",
      category: "treatment",
      example: "Pain medication PRN for severe pain.",
    },
    {
      abbr: "NPO",
      full: "Nil Per Os (nothing by mouth)",
      translation: "ничего через рот",
      category: "treatment",
      example: "Patient NPO before surgery.",
    },
    {
      abbr: "Dx",
      full: "Diagnosis",
      translation: "диагноз",
      category: "medical",
      example: "Dx: Type 2 Diabetes Mellitus.",
    },
    {
      abbr: "Rx",
      full: "Prescription/Treatment",
      translation: "рецепт/лечение",
      category: "medical",
      example: "Rx: Metformin 500mg BID.",
    },
    {
      abbr: "Sx",
      full: "Symptoms",
      translation: "симптомы",
      category: "medical",
      example: "Sx: Fever, cough, fatigue.",
    },
    {
      abbr: "Hx",
      full: "History",
      translation: "анамнез",
      category: "medical",
      example: "Patient Hx includes hypertension.",
    },
    {
      abbr: "BID",
      full: "Bis In Die (twice a day)",
      translation: "два раза в день",
      category: "dosage",
      example: "Take medication BID with meals.",
    },
    {
      abbr: "TID",
      full: "Ter In Die (three times a day)",
      translation: "три раза в день",
      category: "dosage",
      example: "Antibiotic TID for 7 days.",
    },
    {
      abbr: "QID",
      full: "Quater In Die (four times a day)",
      translation: "четыре раза в день",
      category: "dosage",
      example: "Eye drops QID until infection clears.",
    },
    {
      abbr: "QD",
      full: "Quaque Die (once a day)",
      translation: "один раз в день",
      category: "dosage",
      example: "Vitamin D supplement QD.",
    },
    {
      abbr: "HS",
      full: "Hora Somni (at bedtime)",
      translation: "перед сном",
      category: "dosage",
      example: "Take sleeping pill HS.",
    },
  ];

  const categories = [
    { id: "all", name: "All", emoji: "📋" },
    { id: "vitals", name: "Vital Signs", emoji: "❤️" },
    { id: "tests", name: "Tests", emoji: "🔬" },
    { id: "treatment", name: "Treatment", emoji: "💊" },
    { id: "medical", name: "Medical Terms", emoji: "🩺" },
    { id: "dosage", name: "Dosage", emoji: "⏰" },
  ];

  const filteredAbbreviations =
    selectedCategory === "all"
      ? abbreviations
      : abbreviations.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📝</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Medical Abbreviations</h2>
        <p className="text-xl text-gray-600">Медицинские сокращения</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 mb-8">
        <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">Filter by Category</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-slate-600 to-gray-700 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filteredAbbreviations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border-2 border-slate-200 p-5 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white px-4 py-2 rounded-lg">
                <h3 className="text-xl font-black">{item.abbr}</h3>
              </div>
              <div className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-semibold uppercase">
                {item.category}
              </div>
            </div>

            <p className="text-gray-800 font-bold mb-1">{item.full}</p>
            <p className="text-slate-600 text-sm mb-3">{item.translation}</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-gray-700 text-sm italic">{item.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">⚠️</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Важно!</h3>
            <p className="text-gray-700">
              Многие медицинские сокращения происходят из латыни:<br/>
              <strong>BID</strong> = <em>Bis In Die</em> (дважды в день)<br/>
              <strong>PO</strong> = <em>Per Os</em> (через рот)<br/>
              <strong>PRN</strong> = <em>Pro Re Nata</em> (по мере необходимости)<br/>
              <strong>NPO</strong> = <em>Nil Per Os</em> (ничего через рот)<br/>
              Понимание этих аббревиатур критично для чтения медицинской документации!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
