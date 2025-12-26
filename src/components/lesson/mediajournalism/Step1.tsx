"use client";

import { useState } from "react";

export default function Step1() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Что такое Media English?",
      icon: "📰",
      content: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-indigo-700">Media & Journalism English</strong> — это специализированный английский язык,
            используемый в сфере СМИ, журналистики и массовых коммуникаций.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
            <p className="text-gray-700">
              Он включает терминологию для описания новостей, публикаций, телевидения,
              радио, цифровых медиа и профессиональной журналистики.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">📺 Где используется</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Газеты и журналы</li>
                <li>• Телевидение и радио</li>
                <li>• Онлайн-издания и блоги</li>
                <li>• Социальные сети</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-4 rounded-xl border border-pink-200">
              <h4 className="font-bold text-pink-800 mb-2">🎯 Кому нужен</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Журналистам и редакторам</li>
                <li>• PR-специалистам</li>
                <li>• Медиа-аналитикам</li>
                <li>• Всем, кто читает англоязычные СМИ</li>
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
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📝</span>
                <div>
                  <h4 className="font-bold text-indigo-800 text-lg mb-2">Core Media Terms</h4>
                  <p className="text-gray-700">
                    Базовые термины: spin, scoop, op-ed, editorial, soundbite, headline
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📺</span>
                <div>
                  <h4 className="font-bold text-pink-800 text-lg mb-2">Broadcasting</h4>
                  <p className="text-gray-700">
                    Телерадиовещание: anchor, correspondent, live coverage, primetime, ratings
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📱</span>
                <div>
                  <h4 className="font-bold text-amber-800 text-lg mb-2">Digital Media</h4>
                  <p className="text-gray-700">
                    Цифровые медиа: clickbait, viral, trending, fake news, fact-checking
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔍</span>
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-2">Ethics & Sources</h4>
                  <p className="text-gray-700">
                    Этика и источники: off the record, leak, bias, objectivity, anonymous source
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Зачем учить Media English?",
      icon: "🚀",
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">📰</span>
              </div>
              <h4 className="font-bold text-indigo-800 text-center mb-2">Чтение новостей</h4>
              <p className="text-gray-700 text-sm text-center">
                Понимание статей BBC, CNN, The Guardian, The New York Times
                и других мировых изданий
              </p>
            </div>
            <div className="bg-white border-2 border-pink-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">💼</span>
              </div>
              <h4 className="font-bold text-pink-800 text-center mb-2">Карьера в медиа</h4>
              <p className="text-gray-700 text-sm text-center">
                Работа в международных СМИ, PR-агентствах
                и коммуникационных компаниях
              </p>
            </div>
            <div className="bg-white border-2 border-amber-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">🎓</span>
              </div>
              <h4 className="font-bold text-amber-800 text-center mb-2">Медиаграмотность</h4>
              <p className="text-gray-700 text-sm text-center">
                Критический анализ информации, распознавание
                манипуляций и fake news
              </p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-md">
              <div className="text-center mb-3">
                <span className="text-4xl">✍️</span>
              </div>
              <h4 className="font-bold text-green-800 text-center mb-2">Написание текстов</h4>
              <p className="text-gray-700 text-sm text-center">
                Создание пресс-релизов, статей и контента
                для англоязычной аудитории
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-xl p-4 mt-6">
            <p className="text-center text-gray-800 font-semibold">
              📺 <strong>Факт:</strong> BBC World Service вещает на 42 языках и охватывает 426 млн человек еженедельно
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📰</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Media & Journalism</h2>
        <p className="text-xl text-gray-600">Введение в медиа-английский</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-indigo-200 overflow-hidden">
        <div className="flex border-b-2 border-indigo-200">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`flex-1 p-4 font-semibold transition-all ${
                activeSection === index
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
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

      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="font-bold text-xl text-indigo-800 mb-2">Структура курса</h3>
            <p className="text-gray-700 text-lg">
              В этом курсе вы изучите ключевую медиа-лексику: от базовых понятий
              (headline, editorial) до специфических терминов цифровой эпохи
              (clickbait, viral). Каждая тема содержит примеры из реальных
              публикаций и практические упражнения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
