export default function Step2() {
  const vocabulary = [
    {
      term: "spin",
      pronunciation: "/spɪn/",
      translation: "интерпретация, подача",
      definition: "Представление информации в выгодном свете; манипулирование восприятием новостей для достижения желаемого эффекта.",
      examples: [
        "The government's spin on the economy was more optimistic than the data suggested.",
        "Critics accused the company of putting a positive spin on the scandal.",
        "Spin doctors work to control the media narrative.",
      ],
      relatedTerms: ["spin doctor", "PR", "media management", "narrative"],
    },
    {
      term: "scoop",
      pronunciation: "/skuːp/",
      translation: "эксклюзив, сенсация",
      definition: "Эксклюзивная новость, опубликованная раньше конкурентов; журналистская удача.",
      examples: [
        "The journalist got a major scoop about the CEO's resignation.",
        "Breaking this scoop could win her a journalism award.",
        "The rival newspaper scooped us on the story.",
      ],
      relatedTerms: ["exclusive", "breaking news", "beat"],
    },
    {
      term: "op-ed",
      pronunciation: "/ˌɒpˈed/",
      translation: "авторская колонка",
      definition: "Статья, выражающая мнение автора (не редакции), публикуемая напротив редакционной страницы (opposite editorial).",
      examples: [
        "She wrote an op-ed criticizing the new policy.",
        "The professor's op-ed in The Times sparked national debate.",
        "Op-eds allow diverse voices to be heard in major publications.",
      ],
      relatedTerms: ["opinion piece", "column", "commentary"],
    },
    {
      term: "editorial",
      pronunciation: "/ˌedɪˈtɔːriəl/",
      translation: "редакционная статья",
      definition: "Статья, выражающая официальную позицию редакции издания по актуальному вопросу.",
      examples: [
        "The newspaper's editorial endorsed the Democratic candidate.",
        "The editorial board met to discuss their position on climate change.",
        "Today's editorial calls for stricter gun control laws.",
      ],
      relatedTerms: ["editorial board", "leader (UK)", "opinion"],
    },
    {
      term: "soundbite",
      pronunciation: "/ˈsaʊndbaɪt/",
      translation: "звуковая цитата",
      definition: "Короткий, запоминающийся фрагмент речи, извлечённый из интервью или выступления для использования в новостях.",
      examples: [
        "Politicians often speak in soundbites to get media coverage.",
        "The debate produced several memorable soundbites.",
        "His soundbite about taxes went viral on social media.",
      ],
      relatedTerms: ["quote", "clip", "excerpt"],
    },
    {
      term: "headline",
      pronunciation: "/ˈhedlaɪn/",
      translation: "заголовок",
      definition: "Название статьи или новости, обычно напечатанное крупным шрифтом для привлечения внимания.",
      examples: [
        "The scandal dominated the headlines for weeks.",
        "She made headlines when she announced her resignation.",
        "Clickbait headlines can be misleading.",
      ],
      relatedTerms: ["title", "header", "front-page news"],
    },
    {
      term: "byline",
      pronunciation: "/ˈbaɪlaɪn/",
      translation: "подпись автора",
      definition: "Строка в начале статьи, указывающая имя автора.",
      examples: [
        "Her byline appeared in major newspapers across the country.",
        "The article had no byline, suggesting it was written by staff.",
        "Getting your first byline in a national paper is a milestone.",
      ],
      relatedTerms: ["credit", "attribution", "author line"],
    },
    {
      term: "lead / lede",
      pronunciation: "/liːd/",
      translation: "лид, вводный абзац",
      definition: "Первый абзац статьи, содержащий самую важную информацию (кто, что, где, когда, почему).",
      examples: [
        "A strong lead hooks the reader immediately.",
        "The lead paragraph should answer the five W's.",
        "Don't bury the lead — put the most important news first.",
      ],
      relatedTerms: ["opening", "intro", "hook"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📝</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Core Media Terms</h2>
        <p className="text-xl text-gray-600">Базовые термины медиа и журналистики</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-4">
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Editorial vs Op-ed</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Editorial</strong> — официальная позиция редакции (без подписи автора).
              <br />
              <strong className="text-amber-700">Op-ed</strong> — мнение приглашённого автора (с подписью).
              <br />
              <span className="text-sm text-gray-600 italic">Op-ed = &quot;opposite the editorial page&quot; — страница напротив редакционной.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
