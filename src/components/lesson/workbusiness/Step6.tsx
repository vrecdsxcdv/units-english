"use client";

import { useState } from "react";

export default function Step6() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const idioms = [
    {
      idiom: "cash cow",
      translation: "дойная корова",
      meaning: "Продукт или бизнес, который стабильно приносит большую прибыль без больших инвестиций.",
      example: "The iPhone is Apple's cash cow, generating billions in revenue annually.",
      category: "success",
      icon: "🐄",
      origin: "От реального значения коровы, которая регулярно даёт молоко без особых усилий.",
    },
    {
      idiom: "break even",
      translation: "выйти в ноль, достичь безубыточности",
      meaning: "Достичь точки, когда доходы равны расходам (нет прибыли, но и нет убытков).",
      example: "We expect to break even in the second quarter.",
      category: "finance",
      icon: "⚖️",
      usage: "Также используется как break-even point (точка безубыточности).",
    },
    {
      idiom: "red tape",
      translation: "бюрократия, волокита",
      meaning: "Излишние бюрократические процедуры и правила, которые замедляют работу.",
      example: "We can't launch the product yet due to regulatory red tape.",
      category: "challenges",
      icon: "📎",
      origin: "От красной ленты, которой раньше перевязывали официальные документы.",
    },
    {
      idiom: "bottom line",
      translation: "итоговый результат, чистая прибыль",
      meaning: "Конечный финансовый результат; самое важное в ситуации.",
      example: "The bottom line is that we need to increase sales by 20%.",
      category: "finance",
      icon: "💰",
      usage: "Буквально означает последнюю строку в финансовом отчёте (net profit).",
    },
    {
      idiom: "ballpark figure",
      translation: "приблизительная цифра",
      meaning: "Примерная оценка или приблизительное число.",
      example: "Can you give me a ballpark figure for the project cost?",
      category: "estimates",
      icon: "🎯",
      origin: "От бейсбольного стадиона (ballpark) — примерная область.",
    },
    {
      idiom: "golden handshake",
      translation: "выходное пособие",
      meaning: "Большая денежная компенсация при увольнении (обычно топ-менеджеру).",
      example: "The CEO received a golden handshake of $5 million when he retired.",
      category: "compensation",
      icon: "🤝",
      related: "golden parachute (компенсация при поглощении компании)",
    },
    {
      idiom: "in the red",
      translation: "в убытке, с долгами",
      meaning: "Терять деньги, иметь отрицательный баланс.",
      example: "The company has been in the red for three consecutive quarters.",
      category: "challenges",
      icon: "📉",
      opposite: "in the black (в прибыли)",
    },
    {
      idiom: "in the black",
      translation: "в прибыли",
      meaning: "Иметь положительный финансовый баланс, быть прибыльным.",
      example: "After years of losses, we're finally in the black.",
      category: "success",
      icon: "📈",
      origin: "От практики использования чёрных чернил для прибыли и красных для убытков.",
    },
    {
      idiom: "cut corners",
      translation: "срезать углы, экономить на качестве",
      meaning: "Делать что-то быстрее или дешевле, жертвуя качеством.",
      example: "We can't afford to cut corners on safety regulations.",
      category: "challenges",
      icon: "✂️",
      usage: "Обычно имеет негативный оттенок.",
    },
    {
      idiom: "get the ball rolling",
      translation: "начать дело, запустить процесс",
      meaning: "Начать проект или инициативу.",
      example: "Let's get the ball rolling on the new marketing campaign.",
      category: "action",
      icon: "⚽",
      related: "keep the ball rolling (продолжать движение)",
    },
    {
      idiom: "think outside the box",
      translation: "мыслить нестандартно",
      meaning: "Использовать креативный и инновационный подход к решению проблем.",
      example: "We need to think outside the box to beat our competitors.",
      category: "innovation",
      icon: "💡",
      usage: "Очень популярное выражение в корпоративной культуре.",
    },
    {
      idiom: "low-hanging fruit",
      translation: "легкодоступные возможности",
      meaning: "Простые задачи или возможности, которые легко реализовать.",
      example: "Let's focus on the low-hanging fruit first to show quick wins.",
      category: "strategy",
      icon: "🍎",
      usage: "Метафора фруктов, которые легко сорвать с нижних веток.",
    },
    {
      idiom: "on the same page",
      translation: "быть на одной волне, иметь общее понимание",
      meaning: "Иметь одинаковое понимание ситуации или согласие по вопросу.",
      example: "Let's have a meeting to make sure everyone is on the same page.",
      category: "communication",
      icon: "📄",
      usage: "Очень частое выражение на встречах.",
    },
    {
      idiom: "win-win situation",
      translation: "взаимовыгодная ситуация",
      meaning: "Ситуация, в которой выигрывают все стороны.",
      example: "The partnership is a win-win situation for both companies.",
      category: "success",
      icon: "🏆",
      opposite: "lose-lose situation",
    },
    {
      idiom: "raise the bar",
      translation: "поднять планку",
      meaning: "Установить более высокие стандарты качества или производительности.",
      example: "Our competitors raised the bar with their new product launch.",
      category: "standards",
      icon: "📊",
      related: "set the bar (установить стандарт)",
    },
  ];

  const categories = [
    { id: "all", label: "Все", icon: "💼" },
    { id: "success", label: "Успех", icon: "🏆" },
    { id: "finance", label: "Финансы", icon: "💰" },
    { id: "challenges", label: "Проблемы", icon: "⚠️" },
    { id: "action", label: "Действия", icon: "⚡" },
    { id: "innovation", label: "Инновации", icon: "💡" },
    { id: "communication", label: "Коммуникация", icon: "💬" },
  ];

  const filteredIdioms = selectedCategory === "all"
    ? idioms
    : idioms.filter(i => i.category === selectedCategory);

  return (
    <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">💸</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Business & Financial Idioms</h2>
        <p className="text-xl text-gray-600">Идиомы делового и финансового английского</p>
      </div>

      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-300 shadow-lg mb-8">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="font-bold text-xl text-indigo-800 mb-2">Что такое идиомы?</h3>
            <p className="text-gray-700">
              <strong>Идиомы</strong> — это устойчивые выражения, значение которых нельзя понять из значения отдельных слов.
              В деловом английском идиомы используются для более живого и естественного общения.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-6">
        <h3 className="font-bold text-xl text-purple-700 mb-4 flex items-center gap-2">
          <span>🗂️</span> Фильтр по категориям
        </h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="text-sm text-gray-600 bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
          Показано идиом: <strong className="text-purple-700">{filteredIdioms.length}</strong> из {idioms.length}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredIdioms.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6 hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-5xl">{item.icon}</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-700 mb-1">{item.idiom}</h3>
                <p className="text-sm text-gray-600 italic">{item.translation}</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-4">
              <h4 className="font-semibold text-purple-800 mb-2">Значение:</h4>
              <p className="text-gray-700">{item.meaning}</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                <span>📝</span> Пример:
              </h4>
              <p className="text-gray-800 italic">"{item.example}"</p>
            </div>

            {item.origin && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                <h4 className="font-semibold text-blue-800 text-sm mb-1">🔍 Происхождение:</h4>
                <p className="text-gray-700 text-sm">{item.origin}</p>
              </div>
            )}

            {item.usage && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-3">
                <h4 className="font-semibold text-amber-800 text-sm mb-1">💡 Использование:</h4>
                <p className="text-gray-700 text-sm">{item.usage}</p>
              </div>
            )}

            {item.related && (
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 mb-3">
                <h4 className="font-semibold text-indigo-800 text-sm mb-1">🔗 Связанные:</h4>
                <p className="text-gray-700 text-sm">{item.related}</p>
              </div>
            )}

            {item.opposite && (
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                <h4 className="font-semibold text-rose-800 text-sm mb-1">↔️ Противоположность:</h4>
                <p className="text-gray-700 text-sm">{item.opposite}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Как запоминать идиомы?</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Визуализируйте:</strong> Представьте буквальное значение (cash cow — корова с деньгами)</li>
              <li>• <strong>Используйте контекст:</strong> Запоминайте идиому вместе с примером использования</li>
              <li>• <strong>Практикуйте:</strong> Старайтесь использовать новые идиомы в разговорах и письмах</li>
              <li>• <strong>Группируйте:</strong> Учите идиомы по темам (финансы, успех, проблемы)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
