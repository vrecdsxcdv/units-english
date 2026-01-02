"use client";

import { useState } from "react";

export default function Step1() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Что такое Legal English?",
      icon: "⚖️",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-slate-700">Legal English</strong> — это специализированный английский язык,
            используемый в юридической сфере, включая суды, контракты и правовые документы.
          </p>
          <div className="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              Он включает специфическую терминологию для описания законов, судебных процессов,
              контрактов, правонарушений и юридических процедур.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-slate-100 to-gray-100 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">⚖️ Где используется</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Суды и судебные процессы</li>
                <li>• Контракты и соглашения</li>
                <li>• Юридические консультации</li>
                <li>• Законодательные документы</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">🎯 Кому нужен</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Юристам и адвокатам</li>
                <li>• Судьям и прокурорам</li>
                <li>• Корпоративным специалистам</li>
                <li>• Всем, кто работает с правом</li>
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
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📜</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">Contract Law</h4>
                  <p className="text-gray-700">
                    Договорное право: breach of contract, liable, terms and conditions, warranty, indemnity
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚖️</span>
                <div>
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Court Proceedings</h4>
                  <p className="text-gray-700">
                    Судебные процессы: litigation, precedent, verdict, testimony, plaintiff, defendant
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚨</span>
                <div>
                  <h4 className="font-bold text-red-800 text-lg mb-2">Criminal Law</h4>
                  <p className="text-gray-700">
                    Уголовное право: prosecution, conviction, acquittal, felony, misdemeanor, sentence
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🏛️</span>
                <div>
                  <h4 className="font-bold text-purple-800 text-lg mb-2">Legal Documents</h4>
                  <p className="text-gray-700">
                    Юридические документы: affidavit, deposition, subpoena, motion, brief, settlement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Зачем учить Legal English?",
      icon: "🚀",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">📈</span>
              </div>
              <h4 className="font-bold text-slate-800 text-center mb-2">Карьерный рост</h4>
              <p className="text-gray-700 text-sm text-center">
                Знание юридической терминологии открывает двери к работе
                в международных юридических фирмах и корпорациях
              </p>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">🌍</span>
              </div>
              <h4 className="font-bold text-blue-800 text-center mb-2">Международное право</h4>
              <p className="text-gray-700 text-sm text-center">
                Возможность работать с международными контрактами
                и участвовать в трансграничных сделках
              </p>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">💡</span>
              </div>
              <h4 className="font-bold text-purple-800 text-center mb-2">Профессионализм</h4>
              <p className="text-gray-700 text-sm text-center">
                Точное использование юридических терминов обеспечивает
                правовую определённость и защиту интересов
              </p>
            </div>
            <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">📜</span>
              </div>
              <h4 className="font-bold text-red-800 text-center mb-2">Понимание документов</h4>
              <p className="text-gray-700 text-sm text-center">
                Умение читать и понимать контракты, судебные решения
                и законодательные акты
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-xl p-4 mt-6">
            <p className="text-center text-gray-800 font-semibold">
              ⚖️ <strong>Факт:</strong> 90% международных контрактов составляются на английском языке
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">⚖️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Legal English</h2>
        <p className="text-xl text-gray-600">Введение в юридический английский</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 overflow-hidden">
        <div className="flex border-b-2 border-slate-200">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`flex-1 p-4 font-semibold transition-all ${
                activeSection === index
                  ? "bg-gradient-to-r from-slate-600 to-gray-700 text-white"
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

      <div className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl p-6 border-2 border-slate-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="font-bold text-xl text-slate-800 mb-2">Структура курса</h3>
            <p className="text-gray-700 text-lg">
              В этом курсе вы изучите ключевую юридическую лексику, договорное право,
              судебные процессы, уголовное право и юридические документы. Каждая тема содержит
              подробные объяснения, примеры и практические упражнения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
