export default function Step8() {
  const vocabulary = [
    {
      term: "live coverage",
      pronunciation: "/laɪv ˈkʌvərɪdʒ/",
      translation: "прямая трансляция",
      definition: "Вещание событий в режиме реального времени по телевидению или в интернете.",
      examples: [
        "The network provided live coverage of the election results.",
        "Live coverage from the scene showed the extent of the damage.",
        "24-hour live coverage of breaking news has become standard.",
      ],
      relatedTerms: ["live broadcast", "real-time reporting", "on-air"],
    },
    {
      term: "primetime",
      pronunciation: "/ˈpraɪmtaɪm/",
      translation: "прайм-тайм",
      definition: "Время максимальной телеаудитории, обычно вечерние часы (20:00-23:00).",
      examples: [
        "The interview aired during primetime.",
        "Primetime advertising slots are the most expensive.",
        "The new show debuted in a primetime slot.",
      ],
      relatedTerms: ["peak viewing", "evening slot", "prime hours"],
    },
    {
      term: "ratings",
      pronunciation: "/ˈreɪtɪŋz/",
      translation: "рейтинги",
      definition: "Статистика, показывающая количество зрителей телепрограммы или слушателей радио.",
      examples: [
        "The show's ratings dropped after the host left.",
        "Networks compete fiercely for ratings.",
        "High ratings attract more advertising revenue.",
      ],
      relatedTerms: ["viewership", "audience share", "Nielsen ratings"],
    },
    {
      term: "broadcast",
      pronunciation: "/ˈbrɔːdkɑːst/",
      translation: "вещание, трансляция",
      definition: "Передача аудио или видео сигнала широкой аудитории по радио, ТВ или интернету.",
      examples: [
        "The speech was broadcast live across the nation.",
        "Broadcast journalism differs from print journalism.",
        "The game will be broadcast on ESPN.",
      ],
      relatedTerms: ["transmission", "air", "telecast"],
    },
    {
      term: "segment",
      pronunciation: "/ˈseɡmənt/",
      translation: "сегмент, рубрика",
      definition: "Отдельная часть новостной программы, посвящённая определённой теме.",
      examples: [
        "The weather segment comes after the main news.",
        "She hosts the health segment on the morning show.",
        "The interview was broken into three segments.",
      ],
      relatedTerms: ["section", "feature", "block"],
    },
    {
      term: "sound bite",
      pronunciation: "/saʊnd baɪt/",
      translation: "звуковая цитата",
      definition: "Короткий, запоминающийся фрагмент интервью или речи, используемый в новостях.",
      examples: [
        "Politicians craft their speeches for good sound bites.",
        "The debate produced several memorable sound bites.",
        "Sound bites are often taken out of context.",
      ],
      relatedTerms: ["quote", "clip", "excerpt"],
    },
    {
      term: "teleprompter",
      pronunciation: "/ˈtelɪprɒmptə(r)/",
      translation: "телесуфлёр",
      definition: "Устройство, отображающее текст для чтения ведущим перед камерой.",
      examples: [
        "The anchor reads from a teleprompter.",
        "The speech went smoothly thanks to the teleprompter.",
        "Some politicians are criticized for relying on teleprompters.",
      ],
      relatedTerms: ["autocue", "prompter", "cue cards"],
    },
    {
      term: "breaking into programming",
      pronunciation: "/ˈbreɪkɪŋ ˈɪntə ˈprəʊɡræmɪŋ/",
      translation: "экстренное включение",
      definition: "Прерывание обычного вещания для сообщения срочных новостей.",
      examples: [
        "We're breaking into programming with this urgent news.",
        "The network broke into programming to cover the developing story.",
        "Breaking into programming signals major news events.",
      ],
      relatedTerms: ["news bulletin", "special report", "news flash"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📺</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Broadcasting</h2>
        <p className="text-xl text-gray-600">Телерадиовещание и эфирная терминология</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
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
                    className="bg-indigo-100 border border-indigo-300 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold"
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Британские vs Американские термины</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">UK: presenter</strong> = <strong className="text-amber-700">US: anchor</strong>
              <br />
              <strong className="text-amber-700">UK: programme</strong> = <strong className="text-amber-700">US: program</strong>
              <br />
              <strong className="text-amber-700">UK: autocue</strong> = <strong className="text-amber-700">US: teleprompter</strong>
              <br />
              <strong className="text-amber-700">UK: advert</strong> = <strong className="text-amber-700">US: commercial</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
