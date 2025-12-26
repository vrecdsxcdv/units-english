export default function Step3() {
  const vocabulary = [
    {
      term: "breaking news",
      pronunciation: "/ˈbreɪkɪŋ njuːz/",
      translation: "срочные новости",
      definition: "Только что произошедшие события, требующие немедленного освещения; прерывание обычного вещания.",
      examples: [
        "We interrupt this program for breaking news.",
        "Breaking news: the Prime Minister has resigned.",
        "The network was first to report the breaking news.",
      ],
      relatedTerms: ["flash", "news alert", "developing story"],
    },
    {
      term: "exclusive",
      pronunciation: "/ɪkˈskluːsɪv/",
      translation: "эксклюзив",
      definition: "Материал, опубликованный только одним изданием; информация, полученная от единственного источника.",
      examples: [
        "CNN has an exclusive interview with the president.",
        "The magazine published exclusive photos of the wedding.",
        "This exclusive report reveals new evidence.",
      ],
      relatedTerms: ["scoop", "special report", "one-on-one"],
    },
    {
      term: "feature",
      pronunciation: "/ˈfiːtʃə(r)/",
      translation: "очерк, репортаж",
      definition: "Объёмная статья или материал, более глубоко исследующий тему, чем обычная новость.",
      examples: [
        "The Sunday edition includes a feature on climate change.",
        "She wrote a feature story about homeless veterans.",
        "Feature articles allow for more in-depth reporting.",
      ],
      relatedTerms: ["feature story", "long-form", "in-depth piece"],
    },
    {
      term: "hard news",
      pronunciation: "/hɑːd njuːz/",
      translation: "жёсткие новости",
      definition: "Серьёзные новости о важных событиях (политика, экономика, происшествия) в отличие от развлекательных.",
      examples: [
        "Hard news coverage dominates the front page.",
        "The channel shifted from hard news to entertainment.",
        "Hard news requires immediate, factual reporting.",
      ],
      relatedTerms: ["straight news", "spot news", "current events"],
    },
    {
      term: "soft news",
      pronunciation: "/sɒft njuːz/",
      translation: "мягкие новости",
      definition: "Развлекательные, человеческие истории; новости о знаменитостях, образе жизни, культуре.",
      examples: [
        "Soft news stories often focus on celebrities and lifestyle.",
        "The evening news balance hard and soft news.",
        "Soft news tends to get more engagement on social media.",
      ],
      relatedTerms: ["human interest", "lifestyle news", "entertainment news"],
    },
    {
      term: "dateline",
      pronunciation: "/ˈdeɪtlaɪn/",
      translation: "место и дата репортажа",
      definition: "Строка в начале статьи, указывающая место написания материала и иногда дату.",
      examples: [
        "MOSCOW — The Kremlin announced new sanctions today.",
        "The dateline showed the reporter was in the war zone.",
        "Articles with foreign datelines carry more weight.",
      ],
      relatedTerms: ["location tag", "place line", "dispatch"],
    },
    {
      term: "wire service",
      pronunciation: "/waɪə(r) ˈsɜːvɪs/",
      translation: "информационное агентство",
      definition: "Организация, собирающая и распространяющая новости подписчикам (газетам, телеканалам).",
      examples: [
        "Reuters and AP are major wire services.",
        "Most newspapers rely on wire services for international news.",
        "The story came through on the wire service.",
      ],
      relatedTerms: ["news agency", "press agency", "syndicate"],
    },
    {
      term: "press release",
      pronunciation: "/pres rɪˈliːs/",
      translation: "пресс-релиз",
      definition: "Официальное заявление организации, распространяемое среди СМИ для публикации.",
      examples: [
        "The company issued a press release announcing the merger.",
        "Journalists often rewrite press releases into news stories.",
        "The press release contained quotes from the CEO.",
      ],
      relatedTerms: ["news release", "media statement", "announcement"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📢</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">News Types & Formats</h2>
        <p className="text-xl text-gray-600">Типы новостей и форматы материалов</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-rose-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-rose-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg mb-4">
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
                    className="bg-pink-100 border border-pink-300 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold"
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Hard News vs Soft News</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Hard news</strong> — срочные, важные события (политика, экономика, катастрофы).
              <br />
              <strong className="text-amber-700">Soft news</strong> — человеческие истории, культура, знаменитости.
              <br />
              <span className="text-sm text-gray-600 italic">Большинство изданий сочетают оба типа для баланса аудитории.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
