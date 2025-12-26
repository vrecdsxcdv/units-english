export default function Step8() {
  const vocabulary = [
    {
      term: "diplomacy",
      pronunciation: "/dɪˈpləʊməsi/",
      translation: "дипломатия",
      definition: "Искусство ведения международных отношений и переговоров между государствами.",
      examples: [
        "Diplomacy is preferred over military action.",
        "The crisis was resolved through careful diplomacy.",
        "Quiet diplomacy often achieves more than public statements.",
      ],
      relatedTerms: ["diplomat", "diplomatic", "embassy"],
    },
    {
      term: "treaty",
      pronunciation: "/ˈtriːti/",
      translation: "договор, соглашение",
      definition: "Официальное соглашение между государствами, регулируемое международным правом.",
      examples: [
        "The peace treaty ended decades of conflict.",
        "The countries signed a trade treaty.",
        "The treaty was ratified by all member states.",
      ],
      relatedTerms: ["accord", "pact", "agreement"],
    },
    {
      term: "sanctions",
      pronunciation: "/ˈsæŋkʃnz/",
      translation: "санкции",
      definition: "Экономические или политические меры, применяемые против государства для принуждения к изменению поведения.",
      examples: [
        "The UN imposed sanctions on the country.",
        "Economic sanctions have crippled the economy.",
        "The government is calling for sanctions to be lifted.",
      ],
      relatedTerms: ["embargo", "trade restrictions", "punitive measures"],
    },
    {
      term: "summit",
      pronunciation: "/ˈsʌmɪt/",
      translation: "саммит",
      definition: "Встреча на высшем уровне между главами государств или правительств.",
      examples: [
        "The G7 summit will be held in Japan.",
        "The leaders met for a historic summit.",
        "Climate change was the main topic at the summit.",
      ],
      relatedTerms: ["conference", "meeting", "talks"],
    },
    {
      term: "alliance",
      pronunciation: "/əˈlaɪəns/",
      translation: "альянс, союз",
      definition: "Формальное соглашение между странами о взаимной поддержке, особенно военной.",
      examples: [
        "NATO is a military alliance of Western nations.",
        "The countries formed an alliance against the common threat.",
        "The alliance has expanded to include new members.",
      ],
      relatedTerms: ["bloc", "coalition", "partnership"],
    },
    {
      term: "multilateral",
      pronunciation: "/ˌmʌltiˈlætərəl/",
      translation: "многосторонний",
      definition: "Вовлекающий три или более стороны, особенно государства.",
      examples: [
        "Multilateral negotiations are more complex but more inclusive.",
        "The country prefers multilateral over bilateral agreements.",
        "The UN is the main forum for multilateral diplomacy.",
      ],
      relatedTerms: ["bilateral", "unilateral", "international"],
    },
    {
      term: "intervention",
      pronunciation: "/ˌɪntəˈvenʃn/",
      translation: "вмешательство, интервенция",
      definition: "Действия одного государства по вмешательству во внутренние дела другого, включая военное.",
      examples: [
        "Military intervention was controversial but deemed necessary.",
        "The UN authorized humanitarian intervention.",
        "Critics argue against foreign intervention in domestic affairs.",
      ],
      relatedTerms: ["interference", "involvement", "military action"],
    },
    {
      term: "asylum",
      pronunciation: "/əˈsaɪləm/",
      translation: "политическое убежище",
      definition: "Защита, предоставляемая государством лицам, бежавшим из своей страны по политическим причинам.",
      examples: [
        "He sought asylum in the embassy.",
        "The country granted asylum to the dissident.",
        "Asylum seekers must prove they face persecution.",
      ],
      relatedTerms: ["refugee", "political asylum", "sanctuary"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🌍</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">International Politics & Diplomacy</h2>
        <p className="text-xl text-gray-600">Международная политика и дипломатия</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-lg mb-4">
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
                    className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-blue-800 mb-2">Международные организации</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-blue-700">UN (United Nations)</strong> — Организация Объединённых Наций
              <br />
              <strong className="text-blue-700">NATO (North Atlantic Treaty Organization)</strong> — НАТО
              <br />
              <strong className="text-blue-700">EU (European Union)</strong> — Европейский Союз
              <br />
              <strong className="text-blue-700">WTO (World Trade Organization)</strong> — ВТО
              <br />
              <strong className="text-blue-700">IMF (International Monetary Fund)</strong> — МВФ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
