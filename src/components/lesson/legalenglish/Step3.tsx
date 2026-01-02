"use client";

export default function Step3() {
  const courtTerms = [
    {
      term: "litigation",
      translation: "судебное разбирательство, тяжба",
      definition: "Процесс рассмотрения спора в суде; судебное разбирательство.",
      example: "The company is involved in complex litigation over patent infringement.",
    },
    {
      term: "plaintiff",
      translation: "истец",
      definition: "Лицо, которое подаёт иск в суд; сторона, инициирующая судебное разбирательство.",
      example: "The plaintiff filed a lawsuit seeking damages for personal injury.",
    },
    {
      term: "defendant",
      translation: "ответчик, подсудимый",
      definition: "Лицо, против которого подан иск или выдвинуто обвинение.",
      example: "The defendant denied all allegations in the complaint.",
    },
    {
      term: "verdict",
      translation: "вердикт, решение присяжных",
      definition: "Решение присяжных или судьи по делу; окончательное заключение.",
      example: "The jury returned a guilty verdict after three hours of deliberation.",
    },
    {
      term: "testimony",
      translation: "показания, свидетельские показания",
      definition: "Устные или письменные показания свидетеля под присягой в суде.",
      example: "The witness provided crucial testimony that changed the case outcome.",
    },
    {
      term: "precedent",
      translation: "прецедент",
      definition: "Ранее принятое судебное решение, служащее образцом для аналогичных дел.",
      example: "The court relied on precedent from a 1995 Supreme Court case.",
    },
    {
      term: "appeal",
      translation: "апелляция, обжалование",
      definition: "Обращение в вышестоящий суд с целью пересмотра решения нижестоящего суда.",
      example: "The defendant filed an appeal challenging the conviction.",
    },
    {
      term: "settlement",
      translation: "мировое соглашение, урегулирование",
      definition: "Соглашение между сторонами о разрешении спора без судебного разбирательства.",
      example: "The parties reached a settlement before the trial began.",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">⚖️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Court Proceedings</h2>
        <p className="text-xl text-gray-600">Судебные процессы</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {courtTerms.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-indigo-200 p-5 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-indigo-700 mb-2">{item.term}</h3>
            <p className="text-sm text-indigo-600 font-semibold mb-3">{item.translation}</p>
            <p className="text-gray-700 mb-3 text-sm">{item.definition}</p>
            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <p className="text-gray-800 text-sm italic">{item.example}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Стороны судебного процесса</h3>
            <p className="text-gray-700">
              <strong>Plaintiff</strong> (истец) — сторона, подающая иск<br/>
              <strong>Defendant</strong> (ответчик) — сторона, против которой подан иск<br/>
              <strong>Judge</strong> (судья) — должностное лицо, руководящее процессом<br/>
              <strong>Jury</strong> (присяжные) — группа граждан, выносящая вердикт<br/>
              <strong>Witness</strong> (свидетель) — лицо, дающее показания
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-6">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-center">⚖️ Этапы судебного процесса</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <span className="text-2xl font-bold text-indigo-600">1.</span>
            <div>
              <p className="font-semibold text-indigo-800">Filing (Подача иска)</p>
              <p className="text-sm text-gray-600">Plaintiff files a complaint with the court</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <span className="text-2xl font-bold text-indigo-600">2.</span>
            <div>
              <p className="font-semibold text-indigo-800">Discovery (Раскрытие доказательств)</p>
              <p className="text-sm text-gray-600">Both parties exchange evidence and information</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <span className="text-2xl font-bold text-indigo-600">3.</span>
            <div>
              <p className="font-semibold text-indigo-800">Trial (Судебное разбирательство)</p>
              <p className="text-sm text-gray-600">Presentation of evidence and arguments in court</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <span className="text-2xl font-bold text-indigo-600">4.</span>
            <div>
              <p className="font-semibold text-indigo-800">Verdict / Judgment (Вердикт / Решение)</p>
              <p className="text-sm text-gray-600">Court or jury renders decision</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <span className="text-2xl font-bold text-indigo-600">5.</span>
            <div>
              <p className="font-semibold text-indigo-800">Appeal (Апелляция)</p>
              <p className="text-sm text-gray-600">Optional review by higher court</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
