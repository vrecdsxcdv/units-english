export default function Step2() {
  const vocabulary = [
    {
      term: "stakeholder",
      pronunciation: "/ˈsteɪkˌhəʊldə(r)/",
      translation: "заинтересованная сторона",
      definition: "Человек или организация, имеющие интерес в успехе бизнеса (сотрудники, акционеры, клиенты, поставщики).",
      examples: [
        "We need to consider all stakeholders when making this decision.",
        "The company organized a meeting with key stakeholders.",
        "Stakeholder engagement is crucial for project success.",
      ],
      relatedTerms: ["shareholder", "investor", "partner"],
    },
    {
      term: "shareholder",
      pronunciation: "/ˈʃeəˌhəʊldə(r)/",
      translation: "акционер",
      definition: "Лицо, владеющее акциями компании и имеющее долю в её собственности.",
      examples: [
        "Shareholders will vote on the merger at the annual meeting.",
        "The company's primary goal is to maximize shareholder value.",
        "Major shareholders own more than 50% of the company.",
      ],
      relatedTerms: ["stockholder", "investor", "equity holder"],
    },
    {
      term: "board of directors",
      pronunciation: "/bɔːd əv dɪˈrektəz/",
      translation: "совет директоров",
      definition: "Группа людей, избранных для представления интересов акционеров и управления стратегией компании.",
      examples: [
        "The board of directors approved the new strategic plan.",
        "She was appointed to the board of directors last year.",
        "Board members meet quarterly to review performance.",
      ],
      relatedTerms: ["executive board", "advisory board", "management team"],
    },
    {
      term: "subsidiary",
      pronunciation: "/səbˈsɪdiəri/",
      translation: "дочерняя компания",
      definition: "Компания, контролируемая другой компанией (материнской), которая владеет более 50% её акций.",
      examples: [
        "Google is a subsidiary of Alphabet Inc.",
        "The corporation has subsidiaries in 15 countries.",
        "Our London subsidiary handles all European operations.",
      ],
      relatedTerms: ["affiliate", "branch", "division"],
    },
    {
      term: "headquarters (HQ)",
      pronunciation: "/ˌhedˈkwɔːtəz/",
      translation: "штаб-квартира, главный офис",
      definition: "Главный офис компании, где располагается основное руководство и принимаются стратегические решения.",
      examples: [
        "The company's headquarters are located in New York.",
        "We need approval from headquarters before proceeding.",
        "All major decisions are made at our global headquarters.",
      ],
      relatedTerms: ["head office", "main office", "corporate office"],
    },
    {
      term: "CEO (Chief Executive Officer)",
      pronunciation: "/ˌsiː iː ˈəʊ/",
      translation: "генеральный директор",
      definition: "Высшее должностное лицо компании, отвечающее за все операции и стратегические решения.",
      examples: [
        "The CEO announced a new direction for the company.",
        "She became CEO after 20 years with the firm.",
        "Our CEO will address shareholders at the annual meeting.",
      ],
      relatedTerms: ["managing director", "president", "executive director"],
    },
    {
      term: "CFO (Chief Financial Officer)",
      pronunciation: "/ˌsiː ef ˈəʊ/",
      translation: "финансовый директор",
      definition: "Руководитель, отвечающий за управление финансами компании, включая планирование и отчётность.",
      examples: [
        "The CFO presented the quarterly financial results.",
        "Our CFO is responsible for all financial planning.",
        "The new CFO has extensive experience in corporate finance.",
      ],
      relatedTerms: ["finance director", "treasurer", "controller"],
    },
    {
      term: "COO (Chief Operating Officer)",
      pronunciation: "/ˌsiː əʊ ˈəʊ/",
      translation: "операционный директор",
      definition: "Руководитель, отвечающий за ежедневные операции и реализацию бизнес-стратегии компании.",
      examples: [
        "The COO oversees all day-to-day operations.",
        "Our COO is implementing new efficiency measures.",
        "She was promoted from VP to COO last month.",
      ],
      relatedTerms: ["operations director", "VP of operations", "general manager"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">👥</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Stakeholders & Organizations</h2>
        <p className="text-xl text-gray-600">Участники бизнеса и структура компаний</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">📝</span> Примеры использования:
              </h4>
              <div className="space-y-2">
                {item.examples.map((example, i) => (
                  <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-gray-800">
                      <span className="text-green-600 font-semibold mr-2">{i + 1}.</span>
                      {example}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <span className="text-xl">🔗</span> Связанные термины:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.relatedTerms.map((term, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 border border-purple-300 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {term}
                  </span>
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Важное различие</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Stakeholder</strong> — это любая заинтересованная сторона (сотрудники, клиенты, поставщики).
              <br />
              <strong className="text-amber-700">Shareholder</strong> — это только владелец акций компании.
              <br />
              <span className="text-sm text-gray-600 italic">Все shareholders являются stakeholders, но не все stakeholders — shareholders.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
