export default function Step3() {
  const financialTerms = [
    {
      term: "ROI (Return on Investment)",
      pronunciation: "/ˌɑːr əʊ ˈaɪ/",
      translation: "рентабельность инвестиций, окупаемость",
      definition: "Показатель эффективности инвестиций, выраженный в процентах. Рассчитывается как (прибыль − затраты) / затраты × 100%.",
      examples: [
        "The marketing campaign delivered an ROI of 150%.",
        "We expect a positive ROI within the first year.",
        "Calculate the ROI before approving any major investment.",
      ],
      formula: "ROI = (Gain from Investment − Cost of Investment) / Cost of Investment × 100%",
    },
    {
      term: "revenue",
      pronunciation: "/ˈrevənjuː/",
      translation: "выручка, доход",
      definition: "Общая сумма денег, полученная компанией от продажи товаров или услуг до вычета расходов.",
      examples: [
        "The company reported revenue of $10 million this quarter.",
        "Our revenue increased by 25% year-over-year.",
        "Revenue growth is a key metric for investors.",
      ],
      note: "Revenue ≠ profit. Revenue — это весь доход, profit — прибыль после вычета расходов.",
    },
    {
      term: "profit margin",
      pronunciation: "/ˈprɒfɪt ˈmɑːdʒɪn/",
      translation: "норма прибыли, маржа",
      definition: "Процент прибыли от выручки. Показывает, сколько компания зарабатывает с каждого рубля/доллара продаж.",
      examples: [
        "Our profit margin improved from 15% to 20%.",
        "High-end products typically have better profit margins.",
        "The company maintains a healthy profit margin of 18%.",
      ],
      formula: "Profit Margin = (Net Profit / Revenue) × 100%",
    },
    {
      term: "cash flow",
      pronunciation: "/kæʃ fləʊ/",
      translation: "денежный поток",
      definition: "Движение денежных средств в компанию и из неё. Положительный cash flow означает, что денег поступает больше, чем уходит.",
      examples: [
        "The business has strong positive cash flow.",
        "We need to improve our cash flow management.",
        "Cash flow problems can lead to bankruptcy even if the company is profitable.",
      ],
      types: ["Operating cash flow", "Investing cash flow", "Financing cash flow"],
    },
    {
      term: "assets",
      pronunciation: "/ˈæsets/",
      translation: "активы",
      definition: "Всё, что имеет ценность и принадлежит компании: недвижимость, оборудование, денежные средства, патенты.",
      examples: [
        "The company's total assets are valued at $50 million.",
        "We acquired new assets including office buildings and equipment.",
        "Intangible assets like brand reputation are also valuable.",
      ],
      types: ["Current assets (текущие)", "Fixed assets (основные)", "Intangible assets (нематериальные)"],
    },
    {
      term: "liabilities",
      pronunciation: "/ˌlaɪəˈbɪlətiz/",
      translation: "обязательства, долги",
      definition: "Финансовые обязательства компании: кредиты, займы, задолженности перед поставщиками.",
      examples: [
        "The company reduced its liabilities by 30% this year.",
        "Total liabilities must be listed on the balance sheet.",
        "Managing liabilities effectively is crucial for financial health.",
      ],
      types: ["Current liabilities (краткосрочные)", "Long-term liabilities (долгосрочные)"],
    },
    {
      term: "equity",
      pronunciation: "/ˈekwəti/",
      translation: "собственный капитал",
      definition: "Разница между активами и обязательствами компании. Показывает реальную стоимость компании для владельцев.",
      examples: [
        "Shareholder equity increased by $2 million.",
        "The company has strong equity and low debt.",
        "We're looking to raise equity through new investors.",
      ],
      formula: "Equity = Assets − Liabilities",
    },
    {
      term: "break-even point",
      pronunciation: "/breɪk ˈiːvən pɔɪnt/",
      translation: "точка безубыточности",
      definition: "Уровень продаж, при котором доходы равны расходам (нет ни прибыли, ни убытка).",
      examples: [
        "We expect to reach the break-even point in 18 months.",
        "The break-even analysis shows we need to sell 5,000 units.",
        "After reaching break-even, every sale contributes to profit.",
      ],
      note: "Критический показатель для стартапов и новых проектов.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">💰</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Financial Terms</h2>
        <p className="text-xl text-gray-600">Ключевые финансовые термины</p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
        <div className="flex items-start gap-4">
          <span className="text-4xl">📊</span>
          <div>
            <h3 className="font-bold text-xl text-blue-800 mb-2">Основная формула бизнеса</h3>
            <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
              <p className="text-gray-800 font-mono text-lg text-center">
                <strong className="text-green-600">Revenue</strong> − <strong className="text-red-600">Expenses</strong> = <strong className="text-blue-600">Profit</strong>
              </p>
              <p className="text-center text-gray-600 text-sm mt-2">Выручка − Расходы = Прибыль</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {financialTerms.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-green-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold text-sm text-center max-w-xs">
                {item.translation}
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </div>

            {item.formula && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                  <span className="text-xl">🧮</span> Формула расчёта:
                </h4>
                <p className="font-mono text-blue-900 bg-white p-3 rounded border border-blue-300">
                  {item.formula}
                </p>
              </div>
            )}

            {item.types && (
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                  <span className="text-xl">📋</span> Типы:
                </h4>
                <ul className="space-y-1">
                  {item.types.map((type, i) => (
                    <li key={i} className="text-gray-700">
                      <span className="text-purple-600 mr-2">•</span>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.note && (
              <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <span className="text-xl">💡</span> Важно:
                </h4>
                <p className="text-gray-700">{item.note}</p>
              </div>
            )}

            <div>
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">📝</span> Примеры использования:
              </h4>
              <div className="space-y-2">
                {item.examples.map((example, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <p className="text-gray-800">
                      <span className="text-green-600 font-semibold mr-2">{i + 1}.</span>
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
          <span className="text-4xl">⚖️</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Assets vs Liabilities</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-green-700">Assets (активы)</strong> — это то, что приносит деньги в компанию.
              <br />
              <strong className="text-red-700">Liabilities (обязательства)</strong> — это то, что забирает деньги из компании.
              <br />
              <strong className="text-blue-700">Equity (капитал)</strong> = Assets − Liabilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
