export default function Step3() {
  const vocabulary = [
    {
      term: "parliament",
      pronunciation: "/ˈpɑːləmənt/",
      translation: "парламент",
      definition: "Высший законодательный орган власти в государстве, состоящий из избранных представителей народа.",
      examples: [
        "The British Parliament consists of the House of Commons and the House of Lords.",
        "Parliament passed the new healthcare bill yesterday.",
        "Members of Parliament (MPs) represent their constituencies.",
      ],
      relatedTerms: ["parliamentary", "parliamentarian", "Congress"],
    },
    {
      term: "legislature",
      pronunciation: "/ˈledʒɪsleɪtʃə(r)/",
      translation: "законодательный орган",
      definition: "Орган власти, ответственный за принятие законов; может быть однопалатным или двухпалатным.",
      examples: [
        "The state legislature voted to increase the minimum wage.",
        "A bicameral legislature has two chambers.",
        "The legislature has the power to override a presidential veto.",
      ],
      relatedTerms: ["legislative", "legislator", "legislation"],
    },
    {
      term: "coalition",
      pronunciation: "/ˌkəʊəˈlɪʃn/",
      translation: "коалиция",
      definition: "Временный союз политических партий или групп для достижения общей цели, часто для формирования правительства.",
      examples: [
        "The coalition government was formed by three different parties.",
        "Building a coalition requires compromise from all parties involved.",
        "The ruling coalition collapsed after disagreements over tax policy.",
      ],
      relatedTerms: ["alliance", "bloc", "partnership"],
    },
    {
      term: "cabinet",
      pronunciation: "/ˈkæbɪnət/",
      translation: "кабинет министров",
      definition: "Группа высших министров, возглавляющих правительственные департаменты и консультирующих главу государства.",
      examples: [
        "The Prime Minister appointed a new cabinet after the election.",
        "The cabinet meets weekly to discuss policy matters.",
        "Several cabinet members resigned over the scandal.",
      ],
      relatedTerms: ["minister", "secretary", "portfolio"],
    },
    {
      term: "senate",
      pronunciation: "/ˈsenət/",
      translation: "сенат",
      definition: "Верхняя палата законодательного органа в двухпалатной системе.",
      examples: [
        "The US Senate has 100 members, two from each state.",
        "The bill must pass both the Senate and the House of Representatives.",
        "Senators serve six-year terms in the United States.",
      ],
      relatedTerms: ["senator", "senatorial", "upper house"],
    },
    {
      term: "congress",
      pronunciation: "/ˈkɒŋɡres/",
      translation: "конгресс",
      definition: "Национальный законодательный орган, особенно в США; также — съезд или собрание представителей.",
      examples: [
        "The US Congress consists of the Senate and the House of Representatives.",
        "Congress passed landmark civil rights legislation.",
        "The party will hold its annual congress next month.",
      ],
      relatedTerms: ["congressional", "congressman", "congresswoman"],
    },
    {
      term: "executive branch",
      pronunciation: "/ɪɡˈzekjətɪv brɑːntʃ/",
      translation: "исполнительная власть",
      definition: "Ветвь власти, ответственная за исполнение и применение законов; возглавляется президентом или премьер-министром.",
      examples: [
        "The executive branch enforces laws passed by Congress.",
        "Executive power is vested in the President.",
        "The executive branch includes various federal agencies.",
      ],
      relatedTerms: ["executive order", "administration", "bureaucracy"],
    },
    {
      term: "judiciary",
      pronunciation: "/dʒuːˈdɪʃəri/",
      translation: "судебная власть",
      definition: "Система судов, ответственная за толкование законов и отправление правосудия.",
      examples: [
        "The judiciary is independent from the executive branch.",
        "The Supreme Court heads the federal judiciary.",
        "An independent judiciary is essential for democracy.",
      ],
      relatedTerms: ["judicial", "judge", "court system"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏛️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Government Structure</h2>
        <p className="text-xl text-gray-600">Структура государственной власти</p>
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Три ветви власти</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Legislative</strong> — принимает законы (Parliament, Congress).
              <br />
              <strong className="text-amber-700">Executive</strong> — исполняет законы (President, Prime Minister).
              <br />
              <strong className="text-amber-700">Judicial</strong> — толкует законы (Supreme Court, judges).
              <br />
              <span className="text-sm text-gray-600 italic">Разделение властей (separation of powers) — основа демократии.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
