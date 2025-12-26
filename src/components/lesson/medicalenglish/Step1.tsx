"use client";

import { useState } from "react";

export default function Step1() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Что такое Medical English?",
      icon: "🩺",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-teal-700">Medical English</strong> — это специализированный английский язык,
            используемый в медицинской среде, включая больницы, клиники и медицинские исследования.
          </p>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              Он включает специфическую терминологию для описания диагнозов, лечения,
              анатомии, медицинских процедур и общения с пациентами.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-4 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">🏥 Где используется</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Больницы и клиники</li>
                <li>• Медицинские конференции</li>
                <li>• Научные публикации</li>
                <li>• Общение с пациентами</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-xl border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">🎯 Кому нужен</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Врачам и медсёстрам</li>
                <li>• Медицинским исследователям</li>
                <li>• Фармацевтам</li>
                <li>• Всем, кто работает в медицине</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Ключевые области",
      icon: "🎯",
      content: (
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🩺</span>
                <div>
                  <h4 className="font-bold text-teal-800 text-lg mb-2">Diagnosis & Prognosis</h4>
                  <p className="text-gray-700">
                    Диагностика и прогнозирование: diagnosis, prognosis, symptom, chronic, acute, palliative, terminal
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💉</span>
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-2">Treatments & Medications</h4>
                  <p className="text-gray-700">
                    Лечение и лекарства: surgery, chemotherapy, transplant, prescription, dosage, antibiotic, vaccine
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🫀</span>
                <div>
                  <h4 className="font-bold text-purple-800 text-lg mb-2">Body Systems & Anatomy</h4>
                  <p className="text-gray-700">
                    Системы организма: cardiovascular, respiratory, digestive, nervous, musculoskeletal system
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">👨‍⚕️</span>
                <div>
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Medical Professionals & Care</h4>
                  <p className="text-gray-700">
                    Специалисты и уход: cardiologist, surgeon, oncologist, admission, discharge, ICU, vital signs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Зачем учить Medical English?",
      icon: "🚀",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-teal-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">📈</span>
              </div>
              <h4 className="font-bold text-teal-800 text-center mb-2">Карьерный рост</h4>
              <p className="text-gray-700 text-sm text-center">
                Знание медицинской терминологии открывает двери к работе
                в международных клиниках и исследовательских центрах
              </p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">🌍</span>
              </div>
              <h4 className="font-bold text-green-800 text-center mb-2">Международное сотрудничество</h4>
              <p className="text-gray-700 text-sm text-center">
                Возможность участвовать в международных конференциях
                и совместных исследованиях
              </p>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">💡</span>
              </div>
              <h4 className="font-bold text-purple-800 text-center mb-2">Профессионализм</h4>
              <p className="text-gray-700 text-sm text-center">
                Точное использование медицинских терминов обеспечивает
                чёткую коммуникацию и безопасность пациентов
              </p>
            </div>
            <div className="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">📚</span>
              </div>
              <h4 className="font-bold text-orange-800 text-center mb-2">Научные публикации</h4>
              <p className="text-gray-700 text-sm text-center">
                Умение читать медицинские журналы и публиковать
                исследования на английском языке
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-xl p-4 mt-6">
            <p className="text-center text-gray-800 font-semibold">
              🩺 <strong>Факт:</strong> 75% медицинских публикаций и исследований ведутся на английском языке
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🩺</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Medical English</h2>
        <p className="text-xl text-gray-600">Введение в медицинский английский</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-teal-200 overflow-hidden">
        <div className="flex border-b-2 border-teal-200">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`flex-1 p-4 font-semibold transition-all ${
                activeSection === index
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="text-2xl mb-1">{section.icon}</div>
              <div className="text-sm">{section.title}</div>
            </button>
          ))}
        </div>

        <div className="p-8">
          {sections[activeSection].content}
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-2xl p-6 border-2 border-teal-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="font-bold text-xl text-teal-800 mb-2">Структура курса</h3>
            <p className="text-gray-700 text-lg">
              В этом курсе вы изучите ключевую медицинскую терминологию, диагнозы и лечение,
              анатомию человека, медицинские процедуры и общение с пациентами. Каждая тема содержит
              подробные объяснения, примеры и практические упражнения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
