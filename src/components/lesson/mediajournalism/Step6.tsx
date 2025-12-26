export default function Step6() {
  const vocabulary = [
    {
      term: "off the record",
      pronunciation: "/ɒf ðə ˈrekɔːd/",
      translation: "не для печати",
      definition: "Информация, предоставленная журналисту с условием, что она не будет опубликована или приписана источнику.",
      examples: [
        "The official spoke off the record about the negotiations.",
        "Off the record, he admitted the project was failing.",
        "Journalists must honor off-the-record agreements.",
      ],
      relatedTerms: ["on background", "not for attribution", "confidential"],
    },
    {
      term: "leak",
      pronunciation: "/liːk/",
      translation: "утечка информации",
      definition: "Неавторизованное раскрытие конфиденциальной информации СМИ.",
      examples: [
        "The leak revealed classified government documents.",
        "Someone leaked the report to the press.",
        "The administration is investigating the source of the leak.",
      ],
      relatedTerms: ["disclosure", "whistleblower", "insider information"],
    },
    {
      term: "anonymous source",
      pronunciation: "/əˈnɒnɪməs sɔːs/",
      translation: "анонимный источник",
      definition: "Источник информации, чья личность защищена журналистом и не раскрывается в публикации.",
      examples: [
        "According to an anonymous source, the CEO will resign.",
        "Journalists sometimes go to jail to protect anonymous sources.",
        "The story was based on multiple anonymous sources.",
      ],
      relatedTerms: ["confidential source", "unnamed source", "deep throat"],
    },
    {
      term: "bias",
      pronunciation: "/ˈbaɪəs/",
      translation: "предвзятость",
      definition: "Одностороннее или несправедливое представление информации в пользу определённой точки зрения.",
      examples: [
        "Critics accused the network of political bias.",
        "Confirmation bias affects how we consume news.",
        "Good journalism strives to minimize bias.",
      ],
      relatedTerms: ["slant", "partiality", "prejudice"],
    },
    {
      term: "objectivity",
      pronunciation: "/ˌɒbdʒekˈtɪvəti/",
      translation: "объективность",
      definition: "Принцип журналистики, требующий беспристрастного и сбалансированного освещения событий.",
      examples: [
        "Objectivity is a core value of professional journalism.",
        "Some argue that true objectivity is impossible.",
        "The reporter maintained objectivity despite personal views.",
      ],
      relatedTerms: ["impartiality", "neutrality", "fairness"],
    },
    {
      term: "fact-checking",
      pronunciation: "/fækt ˈtʃekɪŋ/",
      translation: "проверка фактов",
      definition: "Процесс проверки достоверности информации перед публикацией или после неё.",
      examples: [
        "Fact-checking organizations debunked the claim.",
        "The article went through rigorous fact-checking.",
        "Social media platforms now include fact-checking labels.",
      ],
      relatedTerms: ["verification", "vetting", "truth-checking"],
    },
    {
      term: "retraction",
      pronunciation: "/rɪˈtrækʃn/",
      translation: "опровержение",
      definition: "Официальное признание и исправление ошибки в ранее опубликованном материале.",
      examples: [
        "The newspaper issued a retraction after errors were discovered.",
        "Retractions damage a publication's credibility.",
        "The story required a full retraction and apology.",
      ],
      relatedTerms: ["correction", "withdrawal", "apology"],
    },
    {
      term: "libel",
      pronunciation: "/ˈlaɪbl/",
      translation: "клевета (в печати)",
      definition: "Публикация ложных сведений, наносящих ущерб репутации человека; основание для судебного иска.",
      examples: [
        "The celebrity sued the magazine for libel.",
        "Libel laws vary significantly between countries.",
        "Proving libel requires showing the statement was false and harmful.",
      ],
      relatedTerms: ["defamation", "slander (spoken)", "character assassination"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🔍</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Sources & Ethics</h2>
        <p className="text-xl text-gray-600">Источники и этика журналистики</p>
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

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Уровни конфиденциальности</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">On the record</strong> — можно цитировать с указанием имени.
              <br />
              <strong className="text-amber-700">On background</strong> — можно использовать, но без имени (&quot;источник в правительстве&quot;).
              <br />
              <strong className="text-amber-700">Off the record</strong> — только для понимания контекста, нельзя публиковать.
              <br />
              <strong className="text-amber-700">Deep background</strong> — информация без указания на существование источника.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
