export default function Step4() {
  const corporateActions = [
    {
      term: "merger",
      pronunciation: "/ˈmɜːdʒə(r)/",
      translation: "слияние",
      definition: "Объединение двух или более компаний в одну новую организацию с целью увеличения рыночной доли и эффективности.",
      examples: [
        "The merger between the two tech giants created a $200 billion company.",
        "Both companies approved the merger at their shareholder meetings.",
        "The merger is expected to complete by the end of the year.",
      ],
      icon: "🤝",
      type: "Growth Strategy",
    },
    {
      term: "acquisition",
      pronunciation: "/ˌækwɪˈzɪʃn/",
      translation: "поглощение, приобретение",
      definition: "Покупка одной компанией другой компании. Приобретённая компания обычно перестаёт существовать как отдельная единица.",
      examples: [
        "Facebook's acquisition of Instagram cost $1 billion.",
        "The acquisition will expand our presence in Asian markets.",
        "We're considering the acquisition of a smaller competitor.",
      ],
      icon: "🎯",
      type: "Growth Strategy",
    },
    {
      term: "downsize",
      pronunciation: "/ˈdaʊnsaɪz/",
      translation: "сокращать штат, уменьшать",
      definition: "Сокращение размера компании, обычно через увольнение сотрудников, для снижения затрат.",
      examples: [
        "The company was forced to downsize due to declining revenues.",
        "We're downsizing our European operations by 20%.",
        "Downsizing is never an easy decision for management.",
      ],
      icon: "📉",
      type: "Cost Reduction",
    },
    {
      term: "restructure",
      pronunciation: "/ˌriːˈstrʌktʃə(r)/",
      translation: "реструктурировать",
      definition: "Изменение организационной структуры компании для повышения эффективности или адаптации к новым условиям.",
      examples: [
        "The company is restructuring to focus on digital products.",
        "We need to restructure our debt to avoid bankruptcy.",
        "The restructuring plan includes closing 50 retail stores.",
      ],
      icon: "🔄",
      type: "Organizational Change",
    },
    {
      term: "IPO (Initial Public Offering)",
      pronunciation: "/ˌaɪ piː ˈəʊ/",
      translation: "первичное публичное размещение акций",
      definition: "Первая продажа акций частной компании на публичной бирже, позволяющая компании привлечь капитал от инвесторов.",
      examples: [
        "The company raised $5 billion through its IPO.",
        "We're planning an IPO within the next 18 months.",
        "The IPO was oversubscribed, showing strong investor interest.",
      ],
      icon: "📈",
      type: "Capital Raising",
    },
    {
      term: "spin-off",
      pronunciation: "/ˈspɪn ɒf/",
      translation: "выделение (в отдельную компанию)",
      definition: "Создание новой независимой компании путём отделения части существующей компании.",
      examples: [
        "PayPal was a spin-off from eBay in 2015.",
        "The company announced a spin-off of its healthcare division.",
        "Spin-offs can unlock shareholder value.",
      ],
      icon: "🌱",
      type: "Organizational Change",
    },
    {
      term: "joint venture",
      pronunciation: "/dʒɔɪnt ˈventʃə(r)/",
      translation: "совместное предприятие",
      definition: "Партнёрство, при котором две или более компаний объединяют ресурсы для реализации конкретного проекта.",
      examples: [
        "Sony and Ericsson formed a joint venture to develop mobile phones.",
        "The joint venture will focus on renewable energy projects.",
        "Both companies will own 50% of the joint venture.",
      ],
      icon: "🤝",
      type: "Partnership",
    },
    {
      term: "bankruptcy",
      pronunciation: "/ˈbæŋkrʌptsi/",
      translation: "банкротство",
      definition: "Юридическое признание компании неспособной выплатить свои долги.",
      examples: [
        "The company filed for bankruptcy protection.",
        "Bankruptcy was the only option left after restructuring failed.",
        "Shareholders lost everything when the company declared bankruptcy.",
      ],
      icon: "💔",
      type: "Financial Crisis",
    },
    {
      term: "divestiture / divestment",
      pronunciation: "/daɪˈvestɪtʃə(r)/",
      translation: "продажа активов, дивестиция",
      definition: "Продажа части бизнеса, активов или дочерних компаний.",
      examples: [
        "The divestiture of non-core assets will improve profitability.",
        "We're planning a divestment of our retail division.",
        "The company announced the divestiture of 20 underperforming stores.",
      ],
      icon: "🏷️",
      type: "Asset Management",
    },
  ];

  const typeColors: Record<string, string> = {
    "Growth Strategy": "bg-green-100 text-green-700 border-green-300",
    "Cost Reduction": "bg-red-100 text-red-700 border-red-300",
    "Organizational Change": "bg-blue-100 text-blue-700 border-blue-300",
    "Capital Raising": "bg-purple-100 text-purple-700 border-purple-300",
    "Partnership": "bg-yellow-100 text-yellow-700 border-yellow-300",
    "Financial Crisis": "bg-orange-100 text-orange-700 border-orange-300",
    "Asset Management": "bg-indigo-100 text-indigo-700 border-indigo-300",
  };

  return (
    <div className="space-y-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏢</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Corporate Actions</h2>
        <p className="text-xl text-gray-600">Корпоративные действия и стратегические решения</p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📊</span>
          <div>
            <h3 className="font-bold text-xl text-blue-800 mb-2">Типы корпоративных действий</h3>
            <div className="grid md:grid-cols-2 gap-2 mt-3">
              <div className="bg-green-50 border border-green-200 rounded p-2 text-sm">
                <strong className="text-green-700">Growth:</strong> Merger, Acquisition, IPO
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-2 text-sm">
                <strong className="text-red-700">Reduction:</strong> Downsize, Divestiture
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded p-2 text-sm">
                <strong className="text-blue-700">Change:</strong> Restructure, Spin-off
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-2 text-sm">
                <strong className="text-yellow-700">Partnership:</strong> Joint Venture
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {corporateActions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-orange-700">{item.term}</h3>
                  <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  {item.translation}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${typeColors[item.type]}`}>
                  {item.type}
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">📝</span> Примеры использования:
              </h4>
              <div className="space-y-2">
                {item.examples.map((example, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <p className="text-gray-800">
                      <span className="text-orange-600 font-semibold mr-2">{i + 1}.</span>
                      {example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Merger vs Acquisition</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Merger (слияние)</strong> — компании объединяются как равные партнёры и создают новую компанию.
              <br />
              <strong className="text-amber-700">Acquisition (поглощение)</strong> — одна компания покупает другую, приобретённая компания перестаёт существовать.
              <br />
              <span className="text-sm text-gray-600 italic mt-2 block">
                Пример: Disney + Pixar = Acquisition (Disney купила Pixar). Daimler + Chrysler = Merger (создали DaimlerChrysler).
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
