export default function Step2() {
  const vocabulary = [
    {
      term: "sovereignty",
      pronunciation: "/ˈsɒvrənti/",
      translation: "суверенитет",
      definition: "Верховная власть государства над своей территорией и независимость от внешнего вмешательства.",
      examples: [
        "National sovereignty is a fundamental principle of international law.",
        "The country defended its sovereignty against foreign interference.",
        "Brexit was largely about reclaiming British sovereignty from the EU.",
      ],
      relatedTerms: ["independence", "autonomy", "self-determination"],
    },
    {
      term: "referendum",
      pronunciation: "/ˌrefəˈrendəm/",
      translation: "референдум",
      definition: "Прямое голосование всех избирателей по важному политическому вопросу или законопроекту.",
      examples: [
        "The 2016 Brexit referendum resulted in a vote to leave the EU.",
        "Scotland held a referendum on independence in 2014.",
        "The government called a referendum on constitutional reform.",
      ],
      relatedTerms: ["plebiscite", "ballot", "popular vote"],
    },
    {
      term: "democracy",
      pronunciation: "/dɪˈmɒkrəsi/",
      translation: "демократия",
      definition: "Система правления, при которой власть принадлежит народу, осуществляемая напрямую или через избранных представителей.",
      examples: [
        "Democracy requires free and fair elections.",
        "The country transitioned from dictatorship to democracy in the 1990s.",
        "Direct democracy allows citizens to vote on policies themselves.",
      ],
      relatedTerms: ["democratic", "democratize", "representative democracy"],
    },
    {
      term: "republic",
      pronunciation: "/rɪˈpʌblɪk/",
      translation: "республика",
      definition: "Форма правления, при которой глава государства избирается, а не наследует власть.",
      examples: [
        "France became a republic after the Revolution.",
        "The United States is a federal republic.",
        "Many monarchies have transitioned into republics over the centuries.",
      ],
      relatedTerms: ["republican", "constitutional republic", "federal republic"],
    },
    {
      term: "constitution",
      pronunciation: "/ˌkɒnstɪˈtjuːʃn/",
      translation: "конституция",
      definition: "Основной закон государства, определяющий структуру власти, права граждан и принципы управления.",
      examples: [
        "The US Constitution was ratified in 1788.",
        "Constitutional amendments require a supermajority vote.",
        "The constitution guarantees freedom of speech.",
      ],
      relatedTerms: ["constitutional", "unconstitutional", "charter"],
    },
    {
      term: "ideology",
      pronunciation: "/ˌaɪdiˈɒlədʒi/",
      translation: "идеология",
      definition: "Система политических идей и убеждений, определяющая взгляды на общество и государство.",
      examples: [
        "Political ideologies range from liberalism to conservatism.",
        "The party's ideology emphasizes individual freedom.",
        "Ideological differences often lead to political conflict.",
      ],
      relatedTerms: ["ideological", "ideologue", "doctrine"],
    },
    {
      term: "regime",
      pronunciation: "/reɪˈʒiːm/",
      translation: "режим, правительство",
      definition: "Система правления или управления государством; часто используется для обозначения авторитарных правительств.",
      examples: [
        "The authoritarian regime suppressed political opposition.",
        "Regime change was the stated goal of the intervention.",
        "The new regime introduced sweeping economic reforms.",
      ],
      relatedTerms: ["government", "administration", "ruling party"],
    },
    {
      term: "autocracy",
      pronunciation: "/ɔːˈtɒkrəsi/",
      translation: "автократия",
      definition: "Система правления, при которой вся власть сосредоточена в руках одного человека.",
      examples: [
        "The country has shifted towards autocracy in recent years.",
        "Autocracies often restrict press freedom and civil liberties.",
        "The autocratic ruler governed without legislative oversight.",
      ],
      relatedTerms: ["autocrat", "autocratic", "dictatorship", "tyranny"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🗳️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Core Political Terms</h2>
        <p className="text-xl text-gray-600">Базовые политические понятия</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-red-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
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
                    className="bg-rose-100 border border-rose-300 text-rose-700 px-3 py-1 rounded-full text-sm font-semibold"
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
              <strong className="text-amber-700">Democracy</strong> — способ принятия решений (через голосование народа).
              <br />
              <strong className="text-amber-700">Republic</strong> — форма государства (без монарха, с выборным главой).
              <br />
              <span className="text-sm text-gray-600 italic">США — демократическая республика. Великобритания — демократическая монархия.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
