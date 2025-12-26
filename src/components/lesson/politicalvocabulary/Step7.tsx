export default function Step7() {
  const vocabulary = [
    {
      term: "lobbying",
      pronunciation: "/ˈlɒbiɪŋ/",
      translation: "лоббирование",
      definition: "Деятельность по оказанию влияния на законодателей и чиновников для продвижения определённых интересов.",
      examples: [
        "The pharmaceutical industry spends millions on lobbying.",
        "Lobbying Congress is a lucrative profession in Washington.",
        "Environmental groups are lobbying for stricter regulations.",
      ],
      relatedTerms: ["lobbyist", "lobby", "advocacy"],
    },
    {
      term: "campaign",
      pronunciation: "/kæmˈpeɪn/",
      translation: "избирательная кампания",
      definition: "Организованные действия по продвижению кандидата или политической идеи, особенно перед выборами.",
      examples: [
        "The presidential campaign is entering its final weeks.",
        "Her campaign raised over $50 million in donations.",
        "The campaign focused on healthcare reform.",
      ],
      relatedTerms: ["campaign trail", "campaign finance", "electioneering"],
    },
    {
      term: "manifesto",
      pronunciation: "/ˌmænɪˈfestəʊ/",
      translation: "манифест, программа партии",
      definition: "Публичное заявление партии или кандидата о политических целях и планируемых действиях.",
      examples: [
        "The party released its election manifesto yesterday.",
        "The manifesto promises tax cuts and increased spending.",
        "Voters should read each party's manifesto carefully.",
      ],
      relatedTerms: ["platform", "policy agenda", "program"],
    },
    {
      term: "rally",
      pronunciation: "/ˈræli/",
      translation: "митинг, предвыборный сбор",
      definition: "Массовое собрание сторонников для демонстрации поддержки кандидату или политическому движению.",
      examples: [
        "Thousands attended the campaign rally in the stadium.",
        "The candidate held rallies in swing states.",
        "The rally was disrupted by protesters.",
      ],
      relatedTerms: ["political gathering", "demonstration", "mass meeting"],
    },
    {
      term: "endorsement",
      pronunciation: "/ɪnˈdɔːsmənt/",
      translation: "поддержка, одобрение",
      definition: "Публичное заявление о поддержке кандидата или политической позиции влиятельным лицом или организацией.",
      examples: [
        "The newspaper's endorsement boosted the candidate's profile.",
        "She received endorsements from several labor unions.",
        "Celebrity endorsements can sway undecided voters.",
      ],
      relatedTerms: ["backing", "support", "approval"],
    },
    {
      term: "propaganda",
      pronunciation: "/ˌprɒpəˈɡændə/",
      translation: "пропаганда",
      definition: "Предвзятая или вводящая в заблуждение информация, распространяемая для продвижения политической идеи.",
      examples: [
        "The regime used propaganda to maintain control.",
        "Social media has become a tool for spreading propaganda.",
        "Distinguishing news from propaganda is increasingly difficult.",
      ],
      relatedTerms: ["disinformation", "misinformation", "spin"],
    },
    {
      term: "spin",
      pronunciation: "/spɪn/",
      translation: "интерпретация, подача информации",
      definition: "Представление информации в выгодном свете; манипулирование общественным восприятием.",
      examples: [
        "The press secretary put a positive spin on the poll numbers.",
        "Both parties are trying to spin the debate results.",
        "Spin doctors work to manage the candidate's image.",
      ],
      relatedTerms: ["spin doctor", "PR", "media management"],
    },
    {
      term: "smear campaign",
      pronunciation: "/smɪə(r) kæmˈpeɪn/",
      translation: "клеветническая кампания",
      definition: "Организованная попытка повредить репутации политического оппонента ложными обвинениями.",
      examples: [
        "The candidate accused his opponent of running a smear campaign.",
        "Negative ads are often part of smear campaigns.",
        "Smear campaigns can backfire on those who launch them.",
      ],
      relatedTerms: ["mudslinging", "character assassination", "negative campaigning"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📢</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Political Activities</h2>
        <p className="text-xl text-gray-600">Политическая деятельность и агитация</p>
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Campaign vs Lobbying</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Campaign</strong> — направлена на избирателей для победы на выборах.
              <br />
              <strong className="text-amber-700">Lobbying</strong> — направлена на законодателей для влияния на законы.
              <br />
              <span className="text-sm text-gray-600 italic">Обе деятельности регулируются законами о финансировании и прозрачности.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
