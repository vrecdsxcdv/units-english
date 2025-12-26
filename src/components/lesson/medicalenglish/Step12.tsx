"use client";

import { useState } from "react";

export default function Step12() {
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      title: "Case 1: Acute Myocardial Infarction",
      icon: "❤️",
      category: "Cardiology",
      presentation: {
        chiefComplaint: "Severe chest pain radiating to left arm",
        history: "65-year-old male, smoker, family history of heart disease",
        symptoms: [
          "Crushing chest pain for 2 hours",
          "Shortness of breath",
          "Nausea and sweating",
          "Pain radiating to left arm and jaw",
        ],
        vitalSigns: {
          BP: "160/95 mmHg",
          HR: "110 bpm",
          RR: "22 breaths/min",
          Temp: "37.1°C",
        },
      },
      diagnosis: "Acute Myocardial Infarction (Heart Attack)",
      treatment: [
        "Immediate aspirin administration",
        "Oxygen therapy",
        "Morphine for pain relief",
        "Emergency cardiac catheterization",
        "Angioplasty with stent placement",
      ],
      prognosis: "Good with immediate intervention. Patient requires lifelong medication and lifestyle changes.",
      vocabulary: [
        "myocardial infarction — инфаркт миокарда",
        "radiating pain — иррадиирующая боль",
        "cardiac catheterization — катетеризация сердца",
        "angioplasty — ангиопластика",
        "stent — стент",
      ],
    },
    {
      title: "Case 2: Type 2 Diabetes Mellitus",
      icon: "🩸",
      category: "Endocrinology",
      presentation: {
        chiefComplaint: "Increased thirst and frequent urination",
        history: "52-year-old female, obese (BMI 34), sedentary lifestyle",
        symptoms: [
          "Polyuria (excessive urination)",
          "Polydipsia (excessive thirst)",
          "Unexplained weight loss",
          "Fatigue and blurred vision",
        ],
        vitalSigns: {
          BP: "145/90 mmHg",
          HR: "78 bpm",
          "Blood glucose": "280 mg/dL (fasting)",
          "HbA1c": "9.2%",
        },
      },
      diagnosis: "Type 2 Diabetes Mellitus",
      treatment: [
        "Metformin 500mg BID",
        "Dietary modifications (low carb, high fiber)",
        "Regular exercise program",
        "Blood glucose monitoring",
        "Referral to nutritionist and diabetes educator",
      ],
      prognosis: "Manageable with medication, diet, and lifestyle changes. Regular monitoring required to prevent complications.",
      vocabulary: [
        "polyuria — полиурия (частое мочеиспускание)",
        "polydipsia — полидипсия (чрезмерная жажда)",
        "HbA1c — гликированный гемоглобин",
        "metformin — метформин",
        "blood glucose monitoring — контроль уровня глюкозы",
      ],
    },
    {
      title: "Case 3: Community-Acquired Pneumonia",
      icon: "🫁",
      category: "Pulmonology",
      presentation: {
        chiefComplaint: "Productive cough with fever",
        history: "38-year-old male, previously healthy, recent upper respiratory infection",
        symptoms: [
          "High fever (39.5°C) for 3 days",
          "Productive cough with yellow-green sputum",
          "Chest pain on deep breathing",
          "Shortness of breath",
        ],
        vitalSigns: {
          BP: "125/80 mmHg",
          HR: "95 bpm",
          RR: "24 breaths/min",
          Temp: "39.5°C",
          "O2 saturation": "92% on room air",
        },
      },
      diagnosis: "Community-Acquired Pneumonia (right lower lobe)",
      treatment: [
        "Chest X-ray confirmed consolidation",
        "Broad-spectrum antibiotics (Amoxicillin-clavulanate)",
        "Antipyretics for fever",
        "Increased fluid intake",
        "Rest and follow-up in 48 hours",
      ],
      prognosis: "Excellent with appropriate antibiotic therapy. Expected recovery in 7-10 days.",
      vocabulary: [
        "productive cough — продуктивный кашель (с мокротой)",
        "sputum — мокрота",
        "consolidation — уплотнение (на рентгене)",
        "antipyretics — жаропонижающие",
        "broad-spectrum antibiotics — антибиотики широкого спектра",
      ],
    },
    {
      title: "Case 4: Acute Appendicitis",
      icon: "🏥",
      category: "Surgery",
      presentation: {
        chiefComplaint: "Severe abdominal pain",
        history: "22-year-old female, no significant medical history",
        symptoms: [
          "Pain started around umbilicus, migrated to right lower quadrant",
          "Nausea and vomiting",
          "Loss of appetite",
          "Low-grade fever",
          "Rebound tenderness on examination",
        ],
        vitalSigns: {
          BP: "118/75 mmHg",
          HR: "88 bpm",
          RR: "18 breaths/min",
          Temp: "38.2°C",
          "WBC count": "15,000/μL (elevated)",
        },
      },
      diagnosis: "Acute Appendicitis",
      treatment: [
        "NPO (nothing by mouth)",
        "IV fluids and antibiotics",
        "Emergency appendectomy (laparoscopic)",
        "Post-operative pain management",
        "Discharge after 24-48 hours",
      ],
      prognosis: "Excellent with surgical intervention. Full recovery expected in 2-3 weeks.",
      vocabulary: [
        "appendicitis — аппендицит",
        "rebound tenderness — симптом Щёткина-Блюмберга",
        "appendectomy — аппендэктомия",
        "laparoscopic — лапароскопический",
        "NPO — ничего через рот",
      ],
    },
    {
      title: "Case 5: Stroke (CVA)",
      icon: "🧠",
      category: "Neurology",
      presentation: {
        chiefComplaint: "Sudden weakness on right side and slurred speech",
        history: "70-year-old male, hypertension, atrial fibrillation, not on anticoagulants",
        symptoms: [
          "Right-sided hemiparesis (weakness)",
          "Facial drooping on right side",
          "Slurred speech (dysarthria)",
          "Confusion",
          "Symptoms started 90 minutes ago",
        ],
        vitalSigns: {
          BP: "180/100 mmHg",
          HR: "irregular, 95 bpm",
          RR: "16 breaths/min",
          "Blood glucose": "110 mg/dL",
        },
      },
      diagnosis: "Ischemic Stroke (Left Middle Cerebral Artery)",
      treatment: [
        "Immediate CT scan (ruled out hemorrhage)",
        "IV thrombolysis (tPA) within therapeutic window",
        "Admission to stroke unit",
        "Antiplatelet therapy",
        "Physical and speech therapy rehabilitation",
      ],
      prognosis: "Moderate. Early intervention improves outcomes. Requires extensive rehabilitation and secondary prevention.",
      vocabulary: [
        "stroke / CVA — инсульт",
        "hemiparesis — гемипарез (слабость половины тела)",
        "dysarthria — дизартрия (нарушение речи)",
        "thrombolysis — тромболизис",
        "tPA — тканевой активатор плазминогена",
      ],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📋</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Medical Case Studies</h2>
        <p className="text-xl text-gray-600">Разбор реальных медицинских случаев</p>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg mb-8">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎓</span>
          <div>
            <h3 className="font-bold text-xl text-purple-800 mb-2">Зачем изучать кейсы?</h3>
            <p className="text-gray-700">
              Медицинские кейсы помогают применить теоретические знания на практике,
              развивают клиническое мышление и учат правильно использовать медицинскую
              терминологию в контексте реальных ситуаций.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6 mb-8">
        <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">Select a Case</h3>
        <div className="grid md:grid-cols-3 gap-3">
          {cases.map((caseItem, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`p-4 rounded-xl font-semibold transition-all border-2 ${
                selectedCase === index
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-600 shadow-lg"
                  : "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
              }`}
            >
              <div className="text-3xl mb-2">{caseItem.icon}</div>
              <div className="text-xs mb-1 opacity-80">{caseItem.category}</div>
              <div className="text-sm">{caseItem.title}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-purple-200 p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-black text-purple-800">{cases[selectedCase].title}</h3>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              {cases[selectedCase].category}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Presentation */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <h4 className="font-bold text-xl text-blue-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">📝</span> Patient Presentation
            </h4>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-blue-700 mb-1">Chief Complaint:</p>
                <p className="text-gray-800">{cases[selectedCase].presentation.chiefComplaint}</p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 mb-1">History:</p>
                <p className="text-gray-800">{cases[selectedCase].presentation.history}</p>
              </div>

              <div>
                <p className="font-semibold text-blue-700 mb-2">Symptoms:</p>
                <ul className="space-y-1">
                  {cases[selectedCase].presentation.symptoms.map((symptom, index) => (
                    <li key={index} className="text-gray-800 flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-blue-700 mb-2">Vital Signs:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.entries(cases[selectedCase].presentation.vitalSigns).map(([key, value]) => (
                    <div key={key} className="bg-white rounded-lg p-3 border border-blue-200">
                      <p className="text-xs text-blue-600 font-semibold">{key}</p>
                      <p className="text-sm text-gray-800 font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <h4 className="font-bold text-xl text-purple-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">🩺</span> Diagnosis
            </h4>
            <p className="text-gray-800 text-lg font-semibold">{cases[selectedCase].diagnosis}</p>
          </div>

          {/* Treatment */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <h4 className="font-bold text-xl text-green-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">💊</span> Treatment Plan
            </h4>
            <ul className="space-y-2">
              {cases[selectedCase].treatment.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-800">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prognosis */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-200">
            <h4 className="font-bold text-xl text-amber-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">📊</span> Prognosis
            </h4>
            <p className="text-gray-800">{cases[selectedCase].prognosis}</p>
          </div>

          {/* Vocabulary */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
            <h4 className="font-bold text-xl text-indigo-800 mb-3 flex items-center gap-2">
              <span className="text-2xl">📚</span> Key Vocabulary
            </h4>
            <div className="space-y-2">
              {cases[selectedCase].vocabulary.map((term, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border border-indigo-200">
                  <p className="text-gray-800 text-sm">{term}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 border-2 border-rose-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="font-bold text-xl text-rose-800 mb-2">Практические навыки</h3>
            <p className="text-gray-700 mb-3">
              Изучение медицинских кейсов развивает следующие навыки:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border border-rose-200">
                <p className="font-semibold text-rose-700 mb-1">✓ Клиническое мышление</p>
                <p className="text-sm text-gray-600">Анализ симптомов и постановка диагноза</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-rose-200">
                <p className="font-semibold text-rose-700 mb-1">✓ Медицинская терминология</p>
                <p className="text-sm text-gray-600">Использование терминов в контексте</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-rose-200">
                <p className="font-semibold text-rose-700 mb-1">✓ План лечения</p>
                <p className="text-sm text-gray-600">Разработка стратегии терапии</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-rose-200">
                <p className="font-semibold text-rose-700 mb-1">✓ Прогнозирование</p>
                <p className="text-sm text-gray-600">Оценка исходов заболевания</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🏆</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Поздравляем с завершением курса!</h3>
            <p className="text-gray-700 text-lg mb-4">
              Вы успешно завершили курс Medical English! Теперь вы владеете:
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="font-semibold text-green-700">🩺 Медицинской терминологией</p>
                <p className="text-sm text-gray-600">Diagnosis, prognosis, chronic, acute, palliative</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="font-semibold text-green-700">💊 Знанием о лечении</p>
                <p className="text-sm text-gray-600">Medications, procedures, treatments</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="font-semibold text-green-700">🫀 Анатомией и системами</p>
                <p className="text-sm text-gray-600">Body systems, organs, medical professionals</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="font-semibold text-green-700">💬 Навыками коммуникации</p>
                <p className="text-sm text-gray-600">Patient communication, case analysis</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">📌 Рекомендации для дальнейшего развития:</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Читайте медицинские журналы на английском (The Lancet, NEJM, BMJ)</li>
                <li>• Смотрите медицинские лекции и документальные фильмы</li>
                <li>• Практикуйте общение с коллегами и пациентами на английском</li>
                <li>• Изучайте реальные case studies и клинические исследования</li>
                <li>• Участвуйте в международных медицинских конференциях</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
