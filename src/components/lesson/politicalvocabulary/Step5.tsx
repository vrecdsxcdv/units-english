export default function Step5() {
  const vocabulary = [
    {
      term: "incumbent",
      pronunciation: "/ɪnˈkʌmbənt/",
      translation: "действующий (о должностном лице)",
      definition: "Лицо, занимающее должность в настоящий момент; особенно — политик, баллотирующийся на переизбрание.",
      examples: [
        "The incumbent president is seeking re-election.",
        "Incumbents have an advantage in name recognition.",
        "The incumbent lost to a political newcomer.",
      ],
      relatedTerms: ["incumbent advantage", "office holder", "sitting"],
    },
    {
      term: "opposition",
      pronunciation: "/ˌɒpəˈzɪʃn/",
      translation: "оппозиция",
      definition: "Политическая партия или группа, противостоящая правящей партии в законодательном органе.",
      examples: [
        "The opposition party criticized the government's budget.",
        "Leader of the Opposition questioned the Prime Minister.",
        "The bill faces strong opposition in the Senate.",
      ],
      relatedTerms: ["opposition party", "shadow cabinet", "minority party"],
    },
    {
      term: "bipartisan",
      pronunciation: "/ˌbaɪˈpɑːtɪzn/",
      translation: "двухпартийный",
      definition: "Включающий или поддерживаемый двумя (обычно основными) политическими партиями.",
      examples: [
        "The infrastructure bill received bipartisan support.",
        "Bipartisan cooperation is rare in today's polarized politics.",
        "The committee reached a bipartisan agreement on the issue.",
      ],
      relatedTerms: ["cross-party", "nonpartisan", "multiparty"],
    },
    {
      term: "partisan",
      pronunciation: "/ˈpɑːtɪzn/",
      translation: "партийный, пристрастный",
      definition: "Сильно приверженный одной политической партии; предвзятый в пользу одной стороны.",
      examples: [
        "The vote fell along partisan lines.",
        "Partisan gridlock has paralyzed Congress.",
        "The media was accused of partisan bias.",
      ],
      relatedTerms: ["partisanship", "party loyalty", "political affiliation"],
    },
    {
      term: "candidate",
      pronunciation: "/ˈkændɪdət/",
      translation: "кандидат",
      definition: "Лицо, баллотирующееся на выборную должность или претендующее на позицию.",
      examples: [
        "Several candidates have declared their intention to run.",
        "The presidential candidate outlined her policy platform.",
        "Candidates must file paperwork by the deadline.",
      ],
      relatedTerms: ["candidacy", "nominee", "contender"],
    },
    {
      term: "frontrunner",
      pronunciation: "/ˈfrʌntˌrʌnə(r)/",
      translation: "фаворит (в предвыборной гонке)",
      definition: "Кандидат, лидирующий в предвыборной гонке по опросам или прогнозам.",
      examples: [
        "The frontrunner has a 10-point lead in the polls.",
        "Being the frontrunner brings increased media scrutiny.",
        "The debate could change who the frontrunner is.",
      ],
      relatedTerms: ["leading candidate", "favorite", "poll leader"],
    },
    {
      term: "caucus",
      pronunciation: "/ˈkɔːkəs/",
      translation: "кокус, партийное собрание",
      definition: "Собрание членов партии для выбора кандидатов или определения политики; также — группа законодателей.",
      examples: [
        "The Iowa caucuses are the first in the presidential race.",
        "The congressional caucus met to discuss strategy.",
        "She joined the progressive caucus in the House.",
      ],
      relatedTerms: ["primary", "convention", "party meeting"],
    },
    {
      term: "grassroots",
      pronunciation: "/ˌɡrɑːsˈruːts/",
      translation: "низовой, народный",
      definition: "Исходящий от обычных людей, а не от политического руководства; массовое движение снизу.",
      examples: [
        "The campaign relied on grassroots organizing.",
        "Grassroots movements can influence national policy.",
        "She built her support through grassroots fundraising.",
      ],
      relatedTerms: ["bottom-up", "community-based", "popular movement"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">👥</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Political Roles & Positions</h2>
        <p className="text-xl text-gray-600">Политические роли и позиции</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-purple-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-4">
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
                    className="bg-violet-100 border border-violet-300 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold"
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Bipartisan vs Partisan</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Bipartisan</strong> — обе партии работают вместе (положительная коннотация).
              <br />
              <strong className="text-amber-700">Partisan</strong> — действия в интересах только одной партии (часто негативная коннотация).
              <br />
              <span className="text-sm text-gray-600 italic">&quot;The bill passed with bipartisan support&quot; = успех. &quot;Partisan gridlock&quot; = проблема.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
