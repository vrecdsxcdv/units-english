import CheckableExercise, { type FillItem } from "@/components/lesson/CheckableExercise";

export default function Step10() {
  const items: FillItem[] = [
    // Stakeholders & Organizations
    { left: "A person or organization with an interest in a business is called a", right: ".", options: ["stakeholder", "shareholder", "partner"] },
    { left: "The company's", right: "are located in London.", options: ["headquarters", "head office", "main office"] },
    { left: "Google is a", right: "of Alphabet Inc.", options: ["subsidiary", "branch", "division"] },

    // Financial Terms
    { left: "The", right: "(ROI) shows how profitable an investment is.", options: ["return on investment", "rate of investment", "revenue of investment"] },
    { left: "The company's total", right: "increased by 25% this quarter.", options: ["revenue", "income", "profit"] },
    { left: "Our", right: "improved from 15% to 20%.", options: ["profit margin", "profit rate", "margin profit"] },
    { left: "The business has strong positive", right: ".", options: ["cash flow", "money flow", "capital flow"] },

    // Corporate Actions
    { left: "The two companies announced a", right: "to create a stronger market position.", options: ["merger", "merge", "merging"] },
    { left: "Facebook's", right: "of Instagram cost $1 billion.", options: ["acquisition", "purchase", "buying"] },
    { left: "The company had to", right: "its workforce by 20%.", options: ["downsize", "reduce", "decrease"] },

    // Business Operations
    { left: "We can", right: "our existing technology to reduce costs.", options: ["leverage", "use", "apply"] },
    { left: "The team is working to", right: "the production process.", options: ["optimize", "improve", "enhance"] },
    { left: "We need to", right: "our approval process to make it faster.", options: ["streamline", "simplify", "improve"] },
    { left: "Many companies", right: "their IT support to reduce costs.", options: ["outsource", "external", "contract"] },

    // Idioms
    { left: "The iPhone is Apple's", right: ", generating billions annually.", options: ["cash cow", "money maker", "profit source"] },
    { left: "We expect to", right: "in the second quarter.", options: ["break even", "reach zero", "make balance"] },
    { left: "The project is delayed due to regulatory", right: ".", options: ["red tape", "bureaucracy", "procedures"] },
    { left: "The company has been", right: "for three quarters.", options: ["in the red", "losing money", "unprofitable"] },

    // Meetings & Presentations
    { left: "Let's", right: "and summarize our decisions.", options: ["wrap up", "finish up", "end up"] },
    { left: "I'd like to", right: "that we increase the budget.", options: ["suggest", "propose", "recommend"] },

    // Email
    { left: "I'm writing to", right: "about your new product.", options: ["inquire", "ask", "question"] },
    { left: "Please", right: "the quarterly report.", options: ["find attached", "see attached", "check attached"] },

    // Negotiations
    { left: "We're looking to reach a mutually", right: "agreement.", options: ["beneficial", "good", "positive"] },
    { left: "If you can increase the volume, we can be", right: "on price.", options: ["flexible", "adaptable", "changeable"] },
    { left: "I'm afraid I have to", right: "with that proposal.", options: ["disagree", "not agree", "reject"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎯</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Final Review</h2>
        <p className="text-xl text-gray-600">Итоговая проверка знаний</p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📚</span>
          <div>
            <h3 className="font-bold text-xl text-blue-800 mb-2">Что мы изучили</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">👥 Stakeholders & Organizations</p>
                <p className="text-sm text-gray-600">Участники бизнеса и структура компаний</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">💰 Financial Terms</p>
                <p className="text-sm text-gray-600">ROI, revenue, profit margin, cash flow</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">🏢 Corporate Actions</p>
                <p className="text-sm text-gray-600">Merger, acquisition, downsize, IPO</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">⚙️ Business Operations</p>
                <p className="text-sm text-gray-600">Leverage, optimize, streamline, scale</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">💸 Financial Idioms</p>
                <p className="text-sm text-gray-600">Cash cow, break even, red tape, bottom line</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">🎤 Meetings & Presentations</p>
                <p className="text-sm text-gray-600">Фразы для встреч и презентаций</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">✉️ Email Writing</p>
                <p className="text-sm text-gray-600">Структура деловых писем</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-semibold text-blue-700 mb-1">🤝 Negotiations</p>
                <p className="text-sm text-gray-600">Язык переговоров и стратегии</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-indigo-200 p-8">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 border-2 border-indigo-300 mb-6">
          <p className="text-center text-gray-700 font-semibold">
            <span className="text-indigo-700 text-xl">📝</span> Комплексный тест на все темы Business English
          </p>
        </div>

        <CheckableExercise items={items} />
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🏆</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Поздравляем!</h3>
            <p className="text-gray-700 text-lg">
              Вы завершили курс Business English! Теперь вы знаете ключевую деловую лексику,
              финансовые термины, идиомы и можете эффективно общаться в бизнес-среде.
            </p>
            <div className="mt-4 bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">📌 Следующие шаги:</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Практикуйте новую лексику в реальных бизнес-ситуациях</li>
                <li>• Читайте деловые статьи на английском (Financial Times, Bloomberg, Harvard Business Review)</li>
                <li>• Слушайте бизнес-подкасты и смотрите TED Talks о бизнесе</li>
                <li>• Пишите деловые письма, используя изученные фразы и структуры</li>
                <li>• Практикуйте презентации и участие во встречах на английском</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Ключевые навыки Business English</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Письменная коммуникация:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>✓ Деловые письма (emails)</li>
                  <li>✓ Отчёты и презентации</li>
                  <li>✓ Контракты и соглашения</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Устная коммуникация:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>✓ Встречи и переговоры</li>
                  <li>✓ Презентации</li>
                  <li>✓ Networking и small talk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
