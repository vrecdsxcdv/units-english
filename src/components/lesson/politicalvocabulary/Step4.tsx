export default function Step4() {
  const vocabulary = [
    {
      term: "constituency",
      pronunciation: "/kənˈstɪtjuənsi/",
      translation: "избирательный округ",
      definition: "Географическая область, избиратели которой выбирают одного представителя в законодательный орган.",
      examples: [
        "Each MP represents a constituency in the House of Commons.",
        "The candidate campaigned heavily in marginal constituencies.",
        "She won her constituency by a narrow margin.",
      ],
      relatedTerms: ["constituent", "district", "riding (Canada)"],
    },
    {
      term: "electorate",
      pronunciation: "/ɪˈlektərət/",
      translation: "электорат, избиратели",
      definition: "Все граждане, имеющие право голоса на выборах в определённой стране или округе.",
      examples: [
        "The electorate is increasingly concerned about climate change.",
        "Only 60% of the electorate turned out to vote.",
        "Politicians must appeal to a diverse electorate.",
      ],
      relatedTerms: ["voter", "electoral", "voting public"],
    },
    {
      term: "ballot",
      pronunciation: "/ˈbælət/",
      translation: "бюллетень, голосование",
      definition: "Бумажный или электронный документ для голосования; также сам процесс тайного голосования.",
      examples: [
        "Voters cast their ballots at local polling stations.",
        "The issue will be decided by secret ballot.",
        "Absentee ballots allow people to vote by mail.",
      ],
      relatedTerms: ["ballot box", "ballot paper", "postal ballot"],
    },
    {
      term: "polling",
      pronunciation: "/ˈpəʊlɪŋ/",
      translation: "голосование, опросы",
      definition: "Процесс голосования на выборах; также — проведение социологических опросов общественного мнения.",
      examples: [
        "Polling stations open at 7 AM on election day.",
        "Recent polling shows the opposition party in the lead.",
        "Exit polling predicted a close race.",
      ],
      relatedTerms: ["poll", "pollster", "opinion poll"],
    },
    {
      term: "suffrage",
      pronunciation: "/ˈsʌfrɪdʒ/",
      translation: "избирательное право",
      definition: "Право голоса на политических выборах; исторически — борьба за это право.",
      examples: [
        "Universal suffrage means all adults have the right to vote.",
        "The suffragette movement fought for women's suffrage.",
        "Suffrage was extended to all citizens over 18.",
      ],
      relatedTerms: ["suffragette", "franchise", "voting rights"],
    },
    {
      term: "turnout",
      pronunciation: "/ˈtɜːnaʊt/",
      translation: "явка избирателей",
      definition: "Процент или количество избирателей, пришедших на выборы.",
      examples: [
        "Voter turnout was the highest in decades.",
        "Low turnout often favors incumbent candidates.",
        "The campaign focused on increasing turnout among young voters.",
      ],
      relatedTerms: ["participation", "attendance", "voter engagement"],
    },
    {
      term: "mandate",
      pronunciation: "/ˈmændeɪt/",
      translation: "мандат, полномочия",
      definition: "Полномочия, данные правительству избирателями; официальное разрешение на определённые действия.",
      examples: [
        "The landslide victory gave the president a strong mandate for reform.",
        "The government claims a mandate to implement its policies.",
        "Without a clear mandate, the proposal faces opposition.",
      ],
      relatedTerms: ["authorization", "authority", "electoral mandate"],
    },
    {
      term: "swing state / swing voter",
      pronunciation: "/swɪŋ steɪt/",
      translation: "колеблющийся штат / избиратель",
      definition: "Штат или избиратель, который может проголосовать за любую из основных партий и определяет исход выборов.",
      examples: [
        "Candidates spend most of their time in swing states.",
        "Swing voters often decide close elections.",
        "Florida is historically a crucial swing state.",
      ],
      relatedTerms: ["battleground state", "undecided voter", "marginal seat"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🗳️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Electoral Terms</h2>
        <p className="text-xl text-gray-600">Терминология выборов и голосования</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-green-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">📝</span> Примеры использования:
              </h4>
              <div className="space-y-2">
                {item.examples.map((example, i) => (
                  <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <p className="text-gray-800">
                      <span className="text-emerald-600 font-semibold mr-2">{i + 1}.</span>
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
                    className="bg-teal-100 border border-teal-300 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold"
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Избирательные системы</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">First-past-the-post (FPTP)</strong> — побеждает кандидат с наибольшим числом голосов (UK, USA).
              <br />
              <strong className="text-amber-700">Proportional representation</strong> — места распределяются пропорционально голосам (Germany, Israel).
              <br />
              <strong className="text-amber-700">Ranked-choice voting</strong> — избиратели ранжируют кандидатов по предпочтению (Australia).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
