"use client";

import { useState } from "react";

export default function Step1() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Что такое Political English?",
      icon: "🏛️",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-red-700">Political English</strong> — это специализированный английский язык,
            используемый в политической сфере, государственном управлении и международных отношениях.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              Он включает терминологию для описания политических процессов, выборов,
              законодательства, дипломатии и международных организаций.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-red-100 to-rose-100 p-4 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 mb-2">📺 Где используется</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Новости и СМИ</li>
                <li>• Политические дебаты</li>
                <li>• Дипломатические переговоры</li>
                <li>• Международные конференции</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">🎯 Кому нужен</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Журналистам и политологам</li>
                <li>• Дипломатам и госслужащим</li>
                <li>• Переводчикам</li>
                <li>• Всем, кто следит за мировой политикой</li>
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
            <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🗳️</span>
                <div>
                  <h4 className="font-bold text-red-800 text-lg mb-2">Core Political Terms</h4>
                  <p className="text-gray-700">
                    Базовые термины: sovereignty, referendum, democracy, republic, constitution
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🏛️</span>
                <div>
                  <h4 className="font-bold text-blue-800 text-lg mb-2">Government Structure</h4>
                  <p className="text-gray-700">
                    Структура власти: parliament, legislature, coalition, cabinet, senate
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🗳️</span>
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-2">Electoral Terms</h4>
                  <p className="text-gray-700">
                    Выборы: constituency, ballot, polling, electorate, suffrage
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚖️</span>
                <div>
                  <h4 className="font-bold text-purple-800 text-lg mb-2">Legislative Process</h4>
                  <p className="text-gray-700">
                    Законодательство: filibuster, amendment, veto, ratification, bill
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Зачем учить Political English?",
      icon: "🚀",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">📰</span>
              </div>
              <h4 className="font-bold text-red-800 text-center mb-2">Понимание новостей</h4>
              <p className="text-gray-700 text-sm text-center">
                Читайте и понимайте англоязычные СМИ: BBC, CNN, The Guardian,
                The New York Times без словаря
              </p>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">🌍</span>
              </div>
              <h4 className="font-bold text-blue-800 text-center mb-2">Международная карьера</h4>
              <p className="text-gray-700 text-sm text-center">
                Работа в международных организациях: ООН, ЕС, НАТО,
                дипломатических миссиях
              </p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">🎓</span>
              </div>
              <h4 className="font-bold text-green-800 text-center mb-2">Академическая сфера</h4>
              <p className="text-gray-700 text-sm text-center">
                Изучение политологии, международных отношений
                и публичной политики на английском языке
              </p>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">💬</span>
              </div>
              <h4 className="font-bold text-purple-800 text-center mb-2">Дискуссии и дебаты</h4>
              <p className="text-gray-700 text-sm text-center">
                Участие в международных дискуссиях
                и выражение своей политической позиции
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-xl p-4 mt-6">
            <p className="text-center text-gray-800 font-semibold">
              🏛️ <strong>Факт:</strong> Английский — официальный язык ООН, НАТО, ЕС и большинства международных организаций
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-red-50 to-rose-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏛️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Political Vocabulary</h2>
        <p className="text-xl text-gray-600">Введение в политический английский</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-red-200 overflow-hidden">
        <div className="flex border-b-2 border-red-200">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`flex-1 p-4 font-semibold transition-all ${
                activeSection === index
                  ? "bg-gradient-to-r from-red-500 to-rose-500 text-white"
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

      <div className="bg-gradient-to-r from-red-100 to-rose-100 rounded-2xl p-6 border-2 border-red-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="font-bold text-xl text-red-800 mb-2">Структура курса</h3>
            <p className="text-gray-700 text-lg">
              В этом курсе вы изучите ключевую политическую лексику: от базовых понятий
              (sovereignty, referendum) до специфических терминов законодательного процесса
              (filibuster, veto). Каждая тема содержит подробные объяснения, примеры из реальных
              новостей и практические упражнения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
