"use client";

export default function Step7() {
  const legalPhrases = [
    {
      phrase: "Pursuant to Section 5 of the agreement...",
      translation: "В соответствии с Разделом 5 соглашения...",
      usage: "Formal reference to contract clauses",
    },
    {
      phrase: "Herein",
      translation: "в этом документе",
      usage: "Refers to this document",
    },
    {
      phrase: "Hereinafter referred to as...",
      translation: "в дальнейшем именуемый как...",
      usage: "Defining parties in contracts",
    },
    {
      phrase: "Whereas...",
      translation: "Принимая во внимание, что...",
      usage: "Used in preambles to state background facts",
    },
    {
      phrase: "Notwithstanding the foregoing...",
      translation: "Несмотря на вышеизложенное...",
      usage: "Introducing an exception to previous statements",
    },
    {
      phrase: "Without prejudice to...",
      translation: "Без ущерба для...",
      usage: "Protecting certain rights while making statements",
    },
    {
      phrase: "Subject to...",
      translation: "При условии...",
      usage: "Indicating conditions that apply",
    },
    {
      phrase: "In the event that...",
      translation: "В случае, если...",
      usage: "Formal way to say 'if'",
    },
    {
      phrase: "Null and void",
      translation: "недействительный",
      usage: "Describing invalid legal documents",
    },
    {
      phrase: "Due diligence",
      translation: "должная осмотрительность",
      usage: "Investigation before entering agreement",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📖</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Legal Phrases & Expressions</h2>
        <p className="text-xl text-gray-600">Юридические фразы и выражения</p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
        <h3 className="font-bold text-xl text-blue-800 mb-4">📚 Формальный юридический язык</h3>
        <p className="text-gray-700 mb-4">
          Юридический английский использует формальный, традиционный язык с устойчивыми выражениями.
          Эти фразы обеспечивают точность и юридическую определённость.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {legalPhrases.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-cyan-200 p-5"
          >
            <h3 className="text-lg font-bold text-cyan-700 mb-2">{item.phrase}</h3>
            <p className="text-sm text-cyan-600 italic mb-3">→ {item.translation}</p>
            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <p className="text-gray-700 text-xs">
                <strong>Usage:</strong> {item.usage}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Латинские фразы в юриспруденции</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Pro bono</strong> — бесплатная юридическая помощь</p>
              <p><strong>Prima facie</strong> — на первый взгляд</p>
              <p><strong>Habeas corpus</strong> — право на защиту от незаконного заключения</p>
              <p><strong>Res judicata</strong> — дело решено (нельзя пересматривать)</p>
              <p><strong>Amicus curiae</strong> — друг суда (незаинтересованное лицо, дающее совет суду)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
