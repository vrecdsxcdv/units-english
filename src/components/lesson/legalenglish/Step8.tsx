"use client";

export default function Step8() {
  const contractStructure = [
    {
      section: "Title",
      description: "Название документа (e.g., 'Sales Agreement', 'Employment Contract')",
      example: "CONFIDENTIALITY AGREEMENT",
    },
    {
      section: "Preamble/Recitals",
      description: "Вступительная часть с 'WHEREAS' clauses, объясняющая контекст",
      example: "WHEREAS, the Parties wish to explore a business relationship...",
    },
    {
      section: "Definitions",
      description: "Определения ключевых терминов, используемых в договоре",
      example: "'Confidential Information' means any data disclosed by either party...",
    },
    {
      section: "Operative Provisions",
      description: "Основные обязательства сторон, права и условия",
      example: "The Seller agrees to transfer ownership of the Property...",
    },
    {
      section: "Representations and Warranties",
      description: "Заверения и гарантии сторон",
      example: "The Seller represents that it has full legal ownership...",
    },
    {
      section: "Termination Clause",
      description: "Условия расторжения договора",
      example: "Either party may terminate upon 30 days written notice...",
    },
    {
      section: "Governing Law",
      description: "Применимое право и юрисдикция",
      example: "This Agreement shall be governed by the laws of England and Wales.",
    },
    {
      section: "Signatures",
      description: "Подписи уполномоченных представителей",
      example: "Signed by the authorized representatives of the Parties.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📄</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Legal Writing & Contracts</h2>
        <p className="text-xl text-gray-600">Юридическое письмо и договоры</p>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg mb-8">
        <h3 className="font-bold text-xl text-purple-800 mb-4">📋 Структура договора</h3>
        <div className="space-y-4">
          {contractStructure.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-purple-200 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-purple-600">{index + 1}.</span>
                <div className="flex-1">
                  <h4 className="font-bold text-purple-700 mb-1">{item.section}</h4>
                  <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                  <div className="bg-purple-50 border border-purple-200 rounded p-2">
                    <p className="text-xs text-gray-600 italic">{item.example}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border-2 border-violet-200 p-6">
        <h3 className="text-xl font-bold text-violet-700 mb-4">✍️ Принципы юридического письма</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
            <h4 className="font-semibold text-violet-800 mb-2">✓ DO:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Be precise and unambiguous</li>
              <li>• Use consistent terminology</li>
              <li>• Define all technical terms</li>
              <li>• Use active voice when possible</li>
              <li>• Number and organize clauses clearly</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">✗ DON'T:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Use ambiguous pronouns</li>
              <li>• Mix tenses unnecessarily</li>
              <li>• Include contradictory clauses</li>
              <li>• Use colloquial language</li>
              <li>• Leave terms undefined</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Ключевые принципы</h3>
            <p className="text-gray-700">
              <strong>Precision</strong> — точность превыше всего<br/>
              <strong>Clarity</strong> — избегайте двусмысленности<br/>
              <strong>Consistency</strong> — используйте одни и те же термины для одних и тех же понятий<br/>
              <strong>Completeness</strong> — предусмотрите все возможные сценарии
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
