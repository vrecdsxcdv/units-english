"use client";

export default function Step4() {
  const criminalTerms = [
    {
      term: "prosecution",
      translation: "обвинение, уголовное преследование",
      definition: "Сторона обвинения в уголовном процессе; действия по привлечению к уголовной ответственности.",
      example: "The prosecution presented compelling evidence of the defendant's guilt.",
    },
    {
      term: "conviction",
      translation: "осуждение, обвинительный приговор",
      definition: "Официальное признание виновным в совершении преступления.",
      example: "The conviction was based on DNA evidence and witness testimony.",
    },
    {
      term: "acquittal",
      translation: "оправдательный приговор",
      definition: "Судебное решение о невиновности обвиняемого.",
      example: "The jury delivered an acquittal due to insufficient evidence.",
    },
    {
      term: "felony",
      translation: "тяжкое преступление",
      definition: "Серьёзное преступление, наказуемое лишением свободы более года.",
      example: "Armed robbery is classified as a felony in most jurisdictions.",
    },
    {
      term: "misdemeanor",
      translation: "мисдиминор, проступок",
      definition: "Менее серьёзное преступление, наказуемое штрафом или краткосрочным заключением.",
      example: "Petty theft is typically charged as a misdemeanor.",
    },
    {
      term: "sentence",
      translation: "приговор, наказание",
      definition: "Наказание, назначенное судом после признания виновным.",
      example: "The judge imposed a sentence of five years imprisonment.",
    },
    {
      term: "bail",
      translation: "залог, поручительство",
      definition: "Денежная сумма, обеспечивающая явку обвиняемого в суд.",
      example: "The defendant was released on bail pending trial.",
    },
    {
      term: "probation",
      translation: "испытательный срок, условное осуждение",
      definition: "Альтернатива тюремному заключению с обязательством соблюдать определённые условия.",
      example: "She was sentenced to three years' probation instead of prison time.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🚨</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Criminal Law</h2>
        <p className="text-xl text-gray-600">Уголовное право</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {criminalTerms.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-red-200 p-5 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-red-700 mb-2">{item.term}</h3>
            <p className="text-sm text-red-600 font-semibold mb-3">{item.translation}</p>
            <p className="text-gray-700 mb-3 text-sm">{item.definition}</p>
            <div className="bg-rose-50 border border-rose-200 rounded p-3">
              <p className="text-gray-800 text-sm italic">{item.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Различия терминов</h3>
            <p className="text-gray-700">
              <strong>Felony vs Misdemeanor:</strong><br/>
              <strong className="text-red-700">Felony</strong> — тяжкое преступление (murder, robbery, rape)<br/>
              <strong className="text-orange-700">Misdemeanor</strong> — проступок (petty theft, vandalism)<br/>
              <br/>
              <strong>Conviction vs Acquittal:</strong><br/>
              <strong className="text-red-700">Conviction</strong> — признание виновным<br/>
              <strong className="text-green-700">Acquittal</strong> — признание невиновным
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-6">
          <h3 className="text-xl font-bold text-red-700 mb-4 text-center">⚖️ Уголовный процесс</h3>
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-semibold text-red-800 mb-1">1. Arrest (Арест)</p>
              <p className="text-xs text-gray-600">Police take suspect into custody</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-semibold text-red-800 mb-1">2. Arraignment (Предъявление обвинения)</p>
              <p className="text-xs text-gray-600">Defendant hears charges and enters plea</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-semibold text-red-800 mb-1">3. Trial (Суд)</p>
              <p className="text-xs text-gray-600">Evidence presented before judge/jury</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="font-semibold text-red-800 mb-1">4. Sentencing (Вынесение приговора)</p>
              <p className="text-xs text-gray-600">Judge determines punishment if guilty</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6">
          <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">🔒 Виды наказаний</h3>
          <div className="space-y-3">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-semibold text-purple-800">Imprisonment (Лишение свободы)</p>
              <p className="text-xs text-gray-600">Jail or prison sentence</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-semibold text-purple-800">Fine (Штраф)</p>
              <p className="text-xs text-gray-600">Monetary penalty</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-semibold text-purple-800">Probation (Условное осуждение)</p>
              <p className="text-xs text-gray-600">Supervised release with conditions</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-semibold text-purple-800">Community Service (Общественные работы)</p>
              <p className="text-xs text-gray-600">Unpaid work for community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
