"use client";

import { useState } from "react";

export default function Step1() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Что такое Business English?",
      icon: "💼",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-blue-700">Business English</strong> — это специализированный английский язык,
            используемый в деловой среде, корпоративных коммуникациях и профессиональном общении.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              Он включает специфическую лексику для описания бизнес-процессов, финансов,
              управления, переговоров и корпоративной культуры.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">📊 Где используется</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Деловые встречи и презентации</li>
                <li>• Email-переписка</li>
                <li>• Финансовые отчёты</li>
                <li>• Переговоры и контракты</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-xl border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">🎯 Кому нужен</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Менеджерам и руководителям</li>
                <li>• Финансовым специалистам</li>
                <li>• Маркетологам и продавцам</li>
                <li>• Всем, кто работает в бизнесе</li>
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
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">👥</span>
                <div>
                  <h4 className="font-bold text-purple-800 text-lg mb-2">Stakeholders & Organizations</h4>
                  <p className="text-gray-700">
                    Термины для описания участников бизнеса: stakeholder, shareholder, board of directors, subsidiary, headquarters
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💰</span>
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-2">Financial Terms</h4>
                  <p className="text-gray-700">
                    Финансовая лексика: ROI (Return on Investment), revenue, profit margin, cash flow, assets, liabilities
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🏢</span>
                <div>
                  <h4 className="font-bold text-orange-800 text-lg mb-2">Corporate Actions</h4>
                  <p className="text-gray-700">
                    Корпоративные действия: merger, acquisition, downsize, restructure, IPO (Initial Public Offering)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Business Operations</h4>
                  <p className="text-gray-700">
                    Операционная лексика: leverage, optimize, streamline, scale, outsource, benchmark
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Зачем учить Business English?",
      icon: "🚀",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">📈</span>
              </div>
              <h4 className="font-bold text-indigo-800 text-center mb-2">Карьерный рост</h4>
              <p className="text-gray-700 text-sm text-center">
                Знание деловой лексики открывает двери к международным проектам,
                повышению и работе в глобальных компаниях
              </p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">🌍</span>
              </div>
              <h4 className="font-bold text-green-800 text-center mb-2">Международное общение</h4>
              <p className="text-gray-700 text-sm text-center">
                Возможность эффективно общаться с коллегами, партнёрами
                и клиентами по всему миру
              </p>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">💡</span>
              </div>
              <h4 className="font-bold text-purple-800 text-center mb-2">Профессионализм</h4>
              <p className="text-gray-700 text-sm text-center">
                Правильное использование бизнес-терминов демонстрирует
                вашу компетентность и профессионализм
              </p>
            </div>
            <div className="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">📊</span>
              </div>
              <h4 className="font-bold text-orange-800 text-center mb-2">Понимание документов</h4>
              <p className="text-gray-700 text-sm text-center">
                Умение читать и понимать финансовые отчёты, контракты
                и деловую документацию
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-xl p-4 mt-6">
            <p className="text-center text-gray-800 font-semibold">
              💼 <strong>Факт:</strong> 85% международных деловых коммуникаций ведутся на английском языке
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">💼</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Business English</h2>
        <p className="text-xl text-gray-600">Введение в деловой английский</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-200 overflow-hidden">
        <div className="flex border-b-2 border-blue-200">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`flex-1 p-4 font-semibold transition-all ${
                activeSection === index
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
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

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="font-bold text-xl text-blue-800 mb-2">Структура курса</h3>
            <p className="text-gray-700 text-lg">
              В этом курсе вы изучите ключевую бизнес-лексику, финансовые термины,
              корпоративные действия, деловую переписку и идиомы. Каждая тема содержит
              подробные объяснения, примеры и практические упражнения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
