"use client";

export default function Step6() {
  const professionals = [
    {
      role: "judge",
      translation: "судья",
      definition: "Должностное лицо, руководящее судебным разбирательством и выносящее решения.",
      responsibilities: ["Presiding over court proceedings", "Ruling on legal motions", "Sentencing convicted defendants"],
      example: "The judge ruled that the evidence was inadmissible.",
    },
    {
      role: "attorney / lawyer",
      translation: "адвокат, юрист",
      definition: "Профессионал, предоставляющий правовые консультации и представляющий клиентов в суде.",
      responsibilities: ["Providing legal advice", "Representing clients in court", "Drafting legal documents"],
      example: "The defense attorney cross-examined the prosecution's witness.",
    },
    {
      role: "prosecutor",
      translation: "прокурор",
      definition: "Юрист, представляющий государство в уголовных делах против обвиняемых.",
      responsibilities: ["Presenting criminal cases", "Examining witnesses", "Proving defendant's guilt beyond reasonable doubt"],
      example: "The prosecutor presented overwhelming evidence of the defendant's guilt.",
    },
    {
      role: "paralegal",
      translation: "помощник юриста",
      definition: "Специалист, помогающий адвокатам в подготовке дел, но не имеющий лицензии на юридическую практику.",
      responsibilities: ["Legal research", "Drafting documents", "Case file management"],
      example: "The paralegal prepared the discovery documents for the attorney.",
    },
    {
      role: "notary public",
      translation: "нотариус",
      definition: "Уполномоченное лицо, заверяющее подписи и документы.",
      responsibilities: ["Witnessing signatures", "Administering oaths", "Certifying document authenticity"],
      example: "Please have the contract signed in front of a notary public.",
    },
    {
      role: "mediator",
      translation: "посредник, медиатор",
      definition: "Нейтральная сторона, помогающая разрешить спор без судебного разбирательства.",
      responsibilities: ["Facilitating negotiations", "Finding common ground", "Helping parties reach settlement"],
      example: "The mediator helped both parties reach a mutually acceptable agreement.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">👨‍⚖️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Legal Professionals</h2>
        <p className="text-xl text-gray-600">Юридические профессии</p>
      </div>

      <div className="space-y-6">
        {professionals.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-emerald-700 capitalize">{item.role}</h3>
                <p className="text-emerald-600 font-semibold mt-1">{item.translation}</p>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg mb-4">
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-teal-800 mb-2">📋 Responsibilities:</h4>
              <ul className="space-y-1">
                {item.responsibilities.map((resp, i) => (
                  <li key={i} className="text-gray-700 text-sm">
                    <span className="text-teal-600 mr-2">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3">
              <p className="text-gray-800 italic">
                <span className="text-cyan-600 font-semibold mr-2">Example:</span>
                {item.example}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Важные различия</h3>
            <p className="text-gray-700">
              <strong>Attorney vs Lawyer:</strong> В США оба термина взаимозаменяемы<br/>
              <strong>Prosecutor:</strong> представляет государство в уголовных делах<br/>
              <strong>Defense Attorney:</strong> защищает обвиняемого<br/>
              <strong>Paralegal:</strong> помогает адвокатам, но не может представлять клиентов в суде
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
