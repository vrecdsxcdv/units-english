export default function Step6() {
  const vocabulary = [
    {
      term: "filibuster",
      pronunciation: "/ˈfɪlɪbʌstə(r)/",
      translation: "обструкция, филибастер",
      definition: "Тактика затягивания дебатов в законодательном органе с целью помешать голосованию по законопроекту.",
      examples: [
        "The senator launched a filibuster that lasted 13 hours.",
        "The bill was blocked by a Republican filibuster.",
        "Reforming the filibuster rules is a controversial topic.",
      ],
      relatedTerms: ["cloture", "obstruction", "talking filibuster"],
    },
    {
      term: "amendment",
      pronunciation: "/əˈmendmənt/",
      translation: "поправка",
      definition: "Официальное изменение или дополнение к закону, конституции или другому документу.",
      examples: [
        "The First Amendment protects freedom of speech.",
        "The committee proposed several amendments to the bill.",
        "Constitutional amendments require a two-thirds majority.",
      ],
      relatedTerms: ["amend", "revision", "modification"],
    },
    {
      term: "veto",
      pronunciation: "/ˈviːtəʊ/",
      translation: "вето",
      definition: "Право главы государства отклонить законопроект, принятый законодательным органом.",
      examples: [
        "The president threatened to veto the spending bill.",
        "Congress can override a presidential veto with a two-thirds vote.",
        "The UN Security Council members have veto power.",
      ],
      relatedTerms: ["veto power", "pocket veto", "override"],
    },
    {
      term: "ratification",
      pronunciation: "/ˌrætɪfɪˈkeɪʃn/",
      translation: "ратификация",
      definition: "Официальное утверждение договора, конституции или поправки соответствующим органом власти.",
      examples: [
        "The treaty awaits ratification by the Senate.",
        "Ratification of the constitution required approval from nine states.",
        "The Paris Agreement received widespread ratification.",
      ],
      relatedTerms: ["ratify", "approval", "endorsement"],
    },
    {
      term: "bill",
      pronunciation: "/bɪl/",
      translation: "законопроект",
      definition: "Проект закона, представленный на рассмотрение законодательного органа до его принятия.",
      examples: [
        "The healthcare bill passed in the House but stalled in the Senate.",
        "MPs debated the controversial immigration bill.",
        "A bill becomes law once signed by the president.",
      ],
      relatedTerms: ["legislation", "act", "statute"],
    },
    {
      term: "executive order",
      pronunciation: "/ɪɡˈzekjətɪv ˈɔːdə(r)/",
      translation: "указ президента",
      definition: "Официальная директива президента, имеющая силу закона без одобрения конгресса.",
      examples: [
        "The president signed an executive order on immigration.",
        "Executive orders can be reversed by subsequent presidents.",
        "The scope of executive orders is limited by the Constitution.",
      ],
      relatedTerms: ["presidential decree", "directive", "proclamation"],
    },
    {
      term: "legislation",
      pronunciation: "/ˌledʒɪsˈleɪʃn/",
      translation: "законодательство, законы",
      definition: "Законы, принятые законодательным органом; также сам процесс принятия законов.",
      examples: [
        "New legislation requires companies to reduce emissions.",
        "The government introduced landmark civil rights legislation.",
        "Drafting legislation is a complex process.",
      ],
      relatedTerms: ["law", "statute", "act of parliament"],
    },
    {
      term: "quorum",
      pronunciation: "/ˈkwɔːrəm/",
      translation: "кворум",
      definition: "Минимальное число членов, необходимое для проведения законного заседания и голосования.",
      examples: [
        "The meeting was postponed due to lack of quorum.",
        "A quorum of 218 members is required in the House.",
        "Without a quorum, no official business can be conducted.",
      ],
      relatedTerms: ["majority", "minimum attendance", "voting threshold"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">⚖️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Legislative Process</h2>
        <p className="text-xl text-gray-600">Законодательный процесс</p>
      </div>

      <div className="space-y-6">
        {vocabulary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-orange-700">{item.term}</h3>
                <p className="text-gray-500 italic text-sm mt-1">{item.pronunciation}</p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                {item.translation}
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
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
                    className="bg-amber-100 border border-amber-300 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold"
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
            <h3 className="font-bold text-xl text-red-800 mb-2">Путь законопроекта (How a Bill Becomes Law)</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-red-700">1. Bill introduced</strong> → в Палату представителей или Сенат
              <br />
              <strong className="text-red-700">2. Committee review</strong> → изучение и поправки
              <br />
              <strong className="text-red-700">3. Floor debate</strong> → обсуждение (возможен filibuster)
              <br />
              <strong className="text-red-700">4. Vote</strong> → голосование в обеих палатах
              <br />
              <strong className="text-red-700">5. President signs or vetoes</strong> → подписание или вето
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
