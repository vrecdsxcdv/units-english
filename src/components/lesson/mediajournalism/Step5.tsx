export default function Step5() {
  const vocabulary = [
    {
      term: "tabloid",
      pronunciation: "/ˈtæblɔɪd/",
      translation: "таблоид, бульварная газета",
      definition: "Газета меньшего формата, обычно с сенсационными новостями о знаменитостях и скандалах.",
      examples: [
        "The tabloids published photos of the celebrity's private life.",
        "Tabloid journalism focuses on scandal and entertainment.",
        "She sued the tabloid for defamation.",
      ],
      relatedTerms: ["yellow press", "red top (UK)", "gossip paper"],
    },
    {
      term: "broadsheet",
      pronunciation: "/ˈbrɔːdʃiːt/",
      translation: "качественная газета",
      definition: "Газета большого формата с серьёзными новостями; обычно ассоциируется с качественной журналистикой.",
      examples: [
        "The Times and The Guardian are examples of broadsheets.",
        "Broadsheets typically focus on politics and business.",
        "Many broadsheets have reduced their physical size.",
      ],
      relatedTerms: ["quality paper", "newspaper of record", "serious press"],
    },
    {
      term: "circulation",
      pronunciation: "/ˌsɜːkjuˈleɪʃn/",
      translation: "тираж",
      definition: "Количество копий газеты или журнала, распространяемых за определённый период.",
      examples: [
        "The newspaper's circulation has declined in recent years.",
        "Digital subscriptions now exceed print circulation.",
        "The magazine boasts a circulation of over one million.",
      ],
      relatedTerms: ["readership", "distribution", "subscriber base"],
    },
    {
      term: "masthead",
      pronunciation: "/ˈmɑːsthed/",
      translation: "шапка газеты, название издания",
      definition: "Название газеты на первой полосе; также список редакторов и владельцев издания.",
      examples: [
        "The masthead of The New York Times is instantly recognizable.",
        "Her name appeared on the masthead as senior editor.",
        "The new owner changed the magazine's masthead.",
      ],
      relatedTerms: ["nameplate", "banner", "flag"],
    },
    {
      term: "front page",
      pronunciation: "/frʌnt peɪdʒ/",
      translation: "первая полоса",
      definition: "Главная страница газеты с самыми важными новостями дня.",
      examples: [
        "The scandal made the front page of every newspaper.",
        "Front-page news shapes public opinion.",
        "Getting a story on the front page is a journalist's goal.",
      ],
      relatedTerms: ["cover story", "splash", "lead story"],
    },
    {
      term: "classified ads",
      pronunciation: "/ˈklæsɪfaɪd ædz/",
      translation: "объявления, классифайд",
      definition: "Раздел газеты с короткими платными объявлениями (работа, недвижимость, продажи).",
      examples: [
        "He found his job through the classified ads.",
        "Classified ads were a major source of newspaper revenue.",
        "Online platforms have largely replaced print classifieds.",
      ],
      relatedTerms: ["small ads", "want ads", "listings"],
    },
    {
      term: "supplement",
      pronunciation: "/ˈsʌplɪmənt/",
      translation: "приложение",
      definition: "Дополнительная секция газеты, обычно выходящая по выходным (о культуре, путешествиях и т.д.).",
      examples: [
        "The Sunday supplement features travel articles.",
        "The newspaper includes a weekly magazine supplement.",
        "Fashion supplements attract advertising revenue.",
      ],
      relatedTerms: ["insert", "section", "magazine"],
    },
    {
      term: "obituary",
      pronunciation: "/əˈbɪtʃuəri/",
      translation: "некролог",
      definition: "Статья о недавно умершем человеке с описанием его жизни и достижений.",
      examples: [
        "The obituary section remembers notable people who passed away.",
        "Major newspapers have obituary writers on staff.",
        "His obituary appeared in The Washington Post.",
      ],
      relatedTerms: ["death notice", "obit", "tribute"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📰</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Print Media</h2>
        <p className="text-xl text-gray-600">Печатные СМИ и их терминология</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-amber-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-amber-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
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
                    className="bg-orange-100 border border-orange-300 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-red-100 to-rose-100 rounded-2xl p-6 border-2 border-red-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-red-800 mb-2">Tabloid vs Broadsheet</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-red-700">Tabloid</strong> — сенсации, знаменитости, простой язык (The Sun, Daily Mail).
              <br />
              <strong className="text-red-700">Broadsheet</strong> — серьёзные новости, аналитика, качественная журналистика (The Times, The Guardian).
              <br />
              <span className="text-sm text-gray-600 italic">В UK &quot;red tops&quot; = таблоиды с красными заголовками (The Sun, Daily Mirror).</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
