"use client";

export default function Step2() {
  const vocabulary = [
    {
      term: "contract",
      pronunciation: "/ˈkɒntrækt/",
      translation: "договор, контракт",
      definition: "Юридически обязывающее соглашение между двумя или более сторонами.",
      examples: [
        "The parties signed the employment contract yesterday.",
        "A valid contract requires offer, acceptance, and consideration.",
        "The contract will be terminated if either party breaches its terms.",
      ],
      relatedTerms: ["agreement", "covenant", "deed"],
    },
    {
      term: "breach of contract",
      pronunciation: "/briːtʃ əv ˈkɒntrækt/",
      translation: "нарушение договора",
      definition: "Невыполнение или несоблюдение условий договора одной из сторон.",
      examples: [
        "The company sued for breach of contract after the supplier failed to deliver.",
        "Material breach of contract allows the innocent party to terminate the agreement.",
        "Failure to pay on time constitutes a breach of contract.",
      ],
      relatedTerms: ["violation", "default", "non-performance"],
    },
    {
      term: "liable",
      pronunciation: "/ˈlaɪəbl/",
      translation: "ответственный, обязанный",
      definition: "Юридически ответственный за что-либо; обязанный по закону.",
      examples: [
        "The company is liable for damages caused by defective products.",
        "Both parties are jointly and severally liable for the debt.",
        "The contractor was held liable for the construction delays.",
      ],
      relatedTerms: ["responsible", "accountable", "obligated"],
    },
    {
      term: "terms and conditions",
      pronunciation: "/tɜːmz ənd kənˈdɪʃnz/",
      translation: "условия и положения",
      definition: "Конкретные правила и требования, регулирующие договор или соглашение.",
      examples: [
        "Please read the terms and conditions before signing.",
        "The terms and conditions are set forth in Appendix A.",
        "Both parties agreed to the amended terms and conditions.",
      ],
      relatedTerms: ["provisions", "clauses", "stipulations"],
    },
    {
      term: "warranty",
      pronunciation: "/ˈwɒrənti/",
      translation: "гарантия, поручительство",
      definition: "Обещание или гарантия качества товара или услуги; юридическое обязательство.",
      examples: [
        "The product comes with a two-year warranty.",
        "The seller provided express warranties regarding the property condition.",
        "Breach of warranty may give rise to a claim for damages.",
      ],
      relatedTerms: ["guarantee", "assurance", "undertaking"],
    },
    {
      term: "indemnity",
      pronunciation: "/ɪnˈdemnəti/",
      translation: "возмещение убытков, компенсация",
      definition: "Обязательство компенсировать ущерб или убытки; защита от финансовых потерь.",
      examples: [
        "The indemnity clause protects the company from third-party claims.",
        "The contractor agreed to indemnify the owner against all losses.",
        "Professional indemnity insurance is essential for lawyers.",
      ],
      relatedTerms: ["compensation", "reimbursement", "restitution"],
    },
    {
      term: "force majeure",
      pronunciation: "/ˌfɔːs mæˈʒɜː(r)/",
      translation: "форс-мажор, непредвиденные обстоятельства",
      definition: "Непредвиденное обстоятельство (стихийное бедствие, война), освобождающее от выполнения договора.",
      examples: [
        "The force majeure clause covers events beyond the parties' control.",
        "The pandemic was considered a force majeure event.",
        "Force majeure does not excuse performance in all circumstances.",
      ],
      relatedTerms: ["act of God", "vis major", "unforeseen circumstances"],
    },
    {
      term: "consideration",
      pronunciation: "/kənˌsɪdəˈreɪʃn/",
      translation: "встречное удовлетворение, возмещение",
      definition: "Нечто ценное, передаваемое между сторонами договора; необходимый элемент контракта.",
      examples: [
        "Valid consideration is required for a binding contract.",
        "The consideration for the sale was $500,000.",
        "Past consideration is generally not sufficient to support a contract.",
      ],
      relatedTerms: ["quid pro quo", "exchange", "value"],
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📜</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Contract Law</h2>
        <p className="text-xl text-gray-600">Договорное право</p>
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
              <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white px-4 py-2 rounded-full font-semibold text-sm">
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
                  <div key={i} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-gray-800">
                      <span className="text-blue-600 font-semibold mr-2">{i + 1}.</span>
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
            <h3 className="font-bold text-xl text-amber-800 mb-2">Элементы действительного договора</h3>
            <p className="text-gray-700 text-lg">
              Для действительности договора необходимы:<br/>
              1. <strong className="text-amber-700">Offer</strong> (оферта) — предложение<br/>
              2. <strong className="text-amber-700">Acceptance</strong> (акцепт) — принятие<br/>
              3. <strong className="text-amber-700">Consideration</strong> (встречное удовлетворение) — возмещение<br/>
              4. <strong className="text-amber-700">Intention to create legal relations</strong> — намерение создать правовые отношения<br/>
              5. <strong className="text-amber-700">Capacity</strong> — дееспособность сторон
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
