"use client";

export default function Step5() {
  const documentTerms = [
    {
      term: "affidavit",
      translation: "письменное показание под присягой",
      definition: "Письменное заявление, сделанное под присягой перед нотариусом или уполномоченным лицом.",
      example: "The witness filed an affidavit stating what she saw on the night of the incident.",
    },
    {
      term: "subpoena",
      translation: "судебная повестка",
      definition: "Официальный приказ суда явиться для дачи показаний или предоставления документов.",
      example: "The company received a subpoena to produce all financial records.",
    },
    {
      term: "motion",
      translation: "ходатайство, заявление",
      definition: "Официальный письменный запрос в суд о принятии определённого решения.",
      example: "The defense filed a motion to dismiss the charges.",
    },
    {
      term: "deposition",
      translation: "показания, данные вне суда",
      definition: "Устные показания свидетеля под присягой, данные вне судебного заседания.",
      example: "The attorney conducted a deposition of the key witness.",
    },
    {
      term: "brief",
      translation: "юридический меморандум",
      definition: "Письменный документ, представляющий правовые аргументы и анализ дела.",
      example: "The lawyer submitted a 50-page brief to the appeals court.",
    },
    {
      term: "injunction",
      translation: "судебный запрет, предписание",
      definition: "Судебное постановление, требующее совершения или прекращения определённых действий.",
      example: "The court issued an injunction preventing the company from selling the product.",
    },
    {
      term: "power of attorney",
      translation: "доверенность",
      definition: "Документ, уполномочивающий лицо действовать от имени другого лица.",
      example: "She granted her son power of attorney to manage her financial affairs.",
    },
    {
      term: "notarize",
      translation: "нотариально заверить",
      definition: "Официально удостоверить подлинность подписи или документа нотариусом.",
      example: "You must notarize the contract before submitting it to the court.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏛️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Legal Documents</h2>
        <p className="text-xl text-gray-600">Юридические документы</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {documentTerms.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-purple-200 p-5 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-2">{item.term}</h3>
            <p className="text-sm text-purple-600 font-semibold mb-3">{item.translation}</p>
            <p className="text-gray-700 mb-3 text-sm">{item.definition}</p>
            <div className="bg-violet-50 border border-violet-200 rounded p-3">
              <p className="text-gray-800 text-sm italic">{item.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Важные документы</h3>
            <p className="text-gray-700">
              <strong>Affidavit</strong> — письменные показания под присягой<br/>
              <strong>Deposition</strong> — устные показания вне суда<br/>
              <strong>Subpoena</strong> — повестка в суд (обязательно явиться!)<br/>
              <strong>Motion</strong> — официальный запрос в суд<br/>
              <strong>Brief</strong> — юридический меморандум с аргументами
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6">
        <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">📋 Типы юридических документов</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
            <h4 className="font-bold text-purple-800 mb-3">🏢 Корпоративные</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Articles of Incorporation (Устав)</li>
              <li>• Bylaws (Внутренние правила)</li>
              <li>• Shareholder Agreement (Соглашение акционеров)</li>
              <li>• Non-Disclosure Agreement (NDA)</li>
            </ul>
          </div>
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4">
            <h4 className="font-bold text-indigo-800 mb-3">⚖️ Судебные</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Complaint (Исковое заявление)</li>
              <li>• Answer (Отзыв на иск)</li>
              <li>• Summons (Судебная повестка)</li>
              <li>• Judgment (Судебное решение)</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-800 mb-3">🏠 Имущественные</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Deed (Правоустанавливающий документ)</li>
              <li>• Lease Agreement (Договор аренды)</li>
              <li>• Mortgage (Ипотека)</li>
              <li>• Title (Свидетельство о праве собственности)</li>
            </ul>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
            <h4 className="font-bold text-green-800 mb-3">👤 Личные</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Will (Завещание)</li>
              <li>• Power of Attorney (Доверенность)</li>
              <li>• Trust (Траст)</li>
              <li>• Divorce Decree (Решение о разводе)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
