export default function Step7() {
  const vocabulary = [
    {
      term: "clickbait",
      pronunciation: "/ˈklɪkbeɪt/",
      translation: "кликбейт",
      definition: "Сенсационные заголовки, созданные для привлечения кликов, часто не соответствующие содержанию статьи.",
      examples: [
        "The headline was pure clickbait — the article had no real news.",
        "Social media is flooded with clickbait articles.",
        "\"You won't believe what happened next!\" is classic clickbait.",
      ],
      relatedTerms: ["sensationalism", "link bait", "engagement bait"],
    },
    {
      term: "viral",
      pronunciation: "/ˈvaɪrəl/",
      translation: "вирусный",
      definition: "Контент, быстро распространяющийся в интернете через репосты и шеринг.",
      examples: [
        "The video went viral overnight, reaching millions.",
        "Viral content can make or break a brand.",
        "Her tweet about the incident went viral.",
      ],
      relatedTerms: ["go viral", "viral video", "shareable content"],
    },
    {
      term: "trending",
      pronunciation: "/ˈtrendɪŋ/",
      translation: "в тренде",
      definition: "Тема или хэштег, популярные в данный момент в социальных сетях.",
      examples: [
        "The hashtag was trending worldwide on Twitter.",
        "Check what's trending to stay updated.",
        "The story quickly became a trending topic.",
      ],
      relatedTerms: ["trending topic", "hashtag", "viral"],
    },
    {
      term: "fake news",
      pronunciation: "/feɪk njuːz/",
      translation: "фейковые новости",
      definition: "Ложная или вводящая в заблуждение информация, представленная как новости.",
      examples: [
        "Fake news spreads faster than factual reporting online.",
        "Social media companies struggle to combat fake news.",
        "He dismissed the criticism as fake news.",
      ],
      relatedTerms: ["misinformation", "disinformation", "hoax"],
    },
    {
      term: "paywall",
      pronunciation: "/ˈpeɪwɔːl/",
      translation: "платный доступ",
      definition: "Система, ограничивающая доступ к контенту без оплаты подписки.",
      examples: [
        "The article is behind a paywall.",
        "Many newspapers have introduced paywalls.",
        "Soft paywalls allow limited free articles per month.",
      ],
      relatedTerms: ["subscription", "premium content", "metered access"],
    },
    {
      term: "algorithm",
      pronunciation: "/ˈælɡərɪðəm/",
      translation: "алгоритм",
      definition: "Компьютерная программа, определяющая, какой контент показывается пользователям в соцсетях и поиске.",
      examples: [
        "The algorithm determines what appears in your news feed.",
        "News organizations optimize content for social media algorithms.",
        "Algorithm changes can dramatically affect traffic.",
      ],
      relatedTerms: ["feed algorithm", "recommendation system", "filter bubble"],
    },
    {
      term: "engagement",
      pronunciation: "/ɪnˈɡeɪdʒmənt/",
      translation: "вовлечённость",
      definition: "Взаимодействие аудитории с контентом (лайки, комментарии, шеры, клики).",
      examples: [
        "The post had high engagement despite low reach.",
        "Engagement metrics determine content visibility.",
        "Controversial headlines often drive more engagement.",
      ],
      relatedTerms: ["likes", "shares", "comments", "interactions"],
    },
    {
      term: "influencer",
      pronunciation: "/ˈɪnfluənsə(r)/",
      translation: "инфлюенсер",
      definition: "Человек с большой аудиторией в соцсетях, способный влиять на мнения и поведение подписчиков.",
      examples: [
        "The brand partnered with influencers for the campaign.",
        "Social media influencers have become a new type of media.",
        "Influencer marketing has exploded in recent years.",
      ],
      relatedTerms: ["content creator", "blogger", "opinion leader"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📱</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Digital Media</h2>
        <p className="text-xl text-gray-600">Цифровые медиа и онлайн-журналистика</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-violet-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-violet-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-violet-50 border-l-4 border-violet-500 p-4 rounded-r-lg mb-4">
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Fake News vs Misinformation vs Disinformation</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Misinformation</strong> — ложная информация, распространяемая без злого умысла.
              <br />
              <strong className="text-amber-700">Disinformation</strong> — намеренно ложная информация для введения в заблуждение.
              <br />
              <strong className="text-amber-700">Fake news</strong> — общий термин для обоих (часто используется политически).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
