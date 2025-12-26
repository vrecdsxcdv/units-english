export default function Step4() {
  const vocabulary = [
    {
      term: "anchor",
      pronunciation: "/ˈæŋkə(r)/",
      translation: "ведущий новостей",
      definition: "Главный ведущий новостной программы, координирующий выпуск из студии.",
      examples: [
        "The evening news anchor has been with the network for 20 years.",
        "She anchored the coverage of the presidential election.",
        "The anchor introduced the live report from the correspondent.",
      ],
      relatedTerms: ["anchorman", "anchorwoman", "news presenter", "host"],
    },
    {
      term: "correspondent",
      pronunciation: "/ˌkɒrəˈspɒndənt/",
      translation: "корреспондент",
      definition: "Журналист, отправляющий репортажи из определённого места или специализирующийся на теме.",
      examples: [
        "Our foreign correspondent reports from the Middle East.",
        "The White House correspondent asked about the new policy.",
        "War correspondents risk their lives for stories.",
      ],
      relatedTerms: ["reporter", "envoy", "bureau chief"],
    },
    {
      term: "columnist",
      pronunciation: "/ˈkɒləmnɪst/",
      translation: "колумнист",
      definition: "Автор регулярной колонки в газете или журнале, выражающий личное мнение.",
      examples: [
        "The political columnist criticized the administration.",
        "She's a well-known columnist for The Washington Post.",
        "Columnists have more freedom to express opinions than reporters.",
      ],
      relatedTerms: ["opinion writer", "commentator", "contributor"],
    },
    {
      term: "editor",
      pronunciation: "/ˈedɪtə(r)/",
      translation: "редактор",
      definition: "Человек, отвечающий за содержание и качество публикаций; руководитель редакции.",
      examples: [
        "The editor-in-chief approved the front-page story.",
        "Copy editors check articles for errors before publication.",
        "The managing editor oversees daily operations.",
      ],
      relatedTerms: ["editor-in-chief", "copy editor", "managing editor"],
    },
    {
      term: "reporter",
      pronunciation: "/rɪˈpɔːtə(r)/",
      translation: "репортёр",
      definition: "Журналист, собирающий информацию и пишущий новостные материалы.",
      examples: [
        "The reporter interviewed witnesses at the scene.",
        "Investigative reporters uncovered the corruption scandal.",
        "Beat reporters cover specific topics like crime or politics.",
      ],
      relatedTerms: ["journalist", "newsman", "newswoman"],
    },
    {
      term: "pundit",
      pronunciation: "/ˈpʌndɪt/",
      translation: "эксперт, комментатор",
      definition: "Человек, часто выступающий в СМИ как эксперт и комментирующий события.",
      examples: [
        "Political pundits debated the election results on TV.",
        "The pundit predicted a market crash.",
        "Talk shows often feature pundits with opposing views.",
      ],
      relatedTerms: ["expert", "analyst", "talking head"],
    },
    {
      term: "paparazzi",
      pronunciation: "/ˌpæpəˈrætsi/",
      translation: "папарацци",
      definition: "Фотографы, преследующие знаменитостей для получения сенсационных снимков.",
      examples: [
        "The actress was surrounded by paparazzi outside the restaurant.",
        "Paparazzi photos can sell for thousands of dollars.",
        "Laws have been passed to protect celebrities from aggressive paparazzi.",
      ],
      relatedTerms: ["tabloid photographer", "celebrity photographer"],
    },
    {
      term: "stringer",
      pronunciation: "/ˈstrɪŋə(r)/",
      translation: "внештатный корреспондент",
      definition: "Внештатный журналист, работающий на издание по отдельным заданиям или из удалённых мест.",
      examples: [
        "The network relies on stringers in remote areas.",
        "Many war zone reports come from local stringers.",
        "She started as a stringer before getting a full-time job.",
      ],
      relatedTerms: ["freelancer", "contributor", "part-time correspondent"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">👥</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Media Professionals</h2>
        <p className="text-xl text-gray-600">Профессии в медиа-индустрии</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-cyan-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-cyan-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg mb-4">
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
                    className="bg-sky-100 border border-sky-300 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold"
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Reporter vs Correspondent</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Reporter</strong> — общий термин для журналиста, собирающего новости.
              <br />
              <strong className="text-amber-700">Correspondent</strong> — специализированный репортёр (по теме или региону).
              <br />
              <span className="text-sm text-gray-600 italic">Foreign correspondent = корреспондент за рубежом, White House correspondent = корреспондент при Белом доме.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
