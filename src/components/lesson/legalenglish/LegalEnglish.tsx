"use client";

import { useState } from "react";
import CheckableExercise, { type FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

export default function LegalEnglish({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction to Legal English
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
      {
        title: "Что такое Legal English?",
        icon: "⚖️",
        content: (
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-slate-700">Legal English</strong> — это специализированный английский язык,
              используемый в юридической сфере, включая суды, контракты и правовые документы.
            </p>
            <div className="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-lg">
              <p className="text-gray-700">
                Он включает специфическую терминологию для описания законов, судебных процессов,
                контрактов, правонарушений и юридических процедур.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gradient-to-br from-slate-100 to-gray-100 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">⚖️ Где используется</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Суды и судебные процессы</li>
                  <li>• Контракты и соглашения</li>
                  <li>• Юридические консультации</li>
                  <li>• Законодательные документы</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">🎯 Кому нужен</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Юристам и адвокатам</li>
                  <li>• Судьям и прокурорам</li>
                  <li>• Корпоративным специалистам</li>
                  <li>• Всем, кто работает с правом</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Ключевые области",
        icon: "🎯",
        content: (
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">📜</span>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">Contract Law</h4>
                    <p className="text-gray-700">
                      Договорное право: breach of contract, liable, terms and conditions, warranty, indemnity
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">⚖️</span>
                  <div>
                    <h4 className="font-bold text-blue-800 text-lg mb-2">Court Proceedings</h4>
                    <p className="text-gray-700">
                      Судебные процессы: litigation, precedent, verdict, testimony, plaintiff, defendant
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🚨</span>
                  <div>
                    <h4 className="font-bold text-red-800 text-lg mb-2">Criminal Law</h4>
                    <p className="text-gray-700">
                      Уголовное право: prosecution, conviction, acquittal, felony, misdemeanor, sentence
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🏛️</span>
                  <div>
                    <h4 className="font-bold text-purple-800 text-lg mb-2">Legal Documents</h4>
                    <p className="text-gray-700">
                      Юридические документы: affidavit, deposition, subpoena, motion, brief, settlement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Зачем учить Legal English?",
        icon: "🚀",
        content: (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-md">
                <div className="text-center mb-3">
                  <span className="text-4xl">📈</span>
                </div>
                <h4 className="font-bold text-slate-800 text-center mb-2">Карьерный рост</h4>
                <p className="text-gray-700 text-sm text-center">
                  Знание юридической терминологии открывает двери к работе
                  в международных юридических фирмах и корпорациях
                </p>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-md">
                <div className="text-center mb-3">
                  <span className="text-4xl">🌍</span>
                </div>
                <h4 className="font-bold text-blue-800 text-center mb-2">Международное право</h4>
                <p className="text-gray-700 text-sm text-center">
                  Возможность работать с международными контрактами
                  и участвовать в трансграничных сделках
                </p>
              </div>
              <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-md">
                <div className="text-center mb-3">
                  <span className="text-4xl">💡</span>
                </div>
                <h4 className="font-bold text-purple-800 text-center mb-2">Профессионализм</h4>
                <p className="text-gray-700 text-sm text-center">
                  Точное использование юридических терминов обеспечивает
                  правовую определённость и защиту интересов
                </p>
              </div>
              <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-md">
                <div className="text-center mb-3">
                  <span className="text-4xl">📜</span>
                </div>
                <h4 className="font-bold text-red-800 text-center mb-2">Понимание документов</h4>
                <p className="text-gray-700 text-sm text-center">
                  Умение читать и понимать контракты, судебные решения
                  и законодательные акты
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-xl p-4 mt-6">
              <p className="text-center text-gray-800 font-semibold">
                ⚖️ <strong>Факт:</strong> 90% международных контрактов составляются на английском языке
              </p>
            </div>
          </div>
        ),
      },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⚖️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">Legal English</h2>
          <p className="text-xl text-gray-600">Введение в юридический английский</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 overflow-hidden">
          <div className="flex border-b-2 border-slate-200">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`flex-1 p-4 font-semibold transition-all ${
                  activeSection === index
                    ? "bg-gradient-to-r from-slate-600 to-gray-700 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="text-2xl mb-1">{section.icon}</div>
                <div className="text-sm">{section.title}</div>
              </button>
            ))}
          </div>

          <div className="p-8">
            {sections[activeSection].content}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl p-6 border-2 border-slate-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📚</span>
            <div>
              <h3 className="font-bold text-xl text-slate-800 mb-2">Структура курса</h3>
              <p className="text-gray-700 text-lg">
                В этом курсе вы изучите ключевую юридическую лексику, договорное право,
                судебные процессы, уголовное право и юридические документы. Каждая тема содержит
                подробные объяснения, примеры и практические упражнения.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Contract Law
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
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

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Court Proceedings
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
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

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Criminal Law
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
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

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Legal Documents
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
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

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Legal Professionals
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
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

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Legal Phrases & Expressions
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
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

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Legal Writing & Contracts
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
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

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: Dispute Resolution & Legal Negotiations
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    const disputeResolutionMethods = [
      {
        method: "Litigation",
        translation: "Судебное разбирательство",
        icon: "⚖️",
        color: "blue",
        description: "Разрешение спора через судебную систему",
        pros: ["Юридически обязательное решение", "Установленная процедура", "Право на апелляцию"],
        cons: ["Дорого и долго", "Публичный процесс", "Непредсказуемый результат"],
        example: "The company decided to pursue litigation after settlement negotiations failed.",
      },
      {
        method: "Mediation",
        translation: "Медиация",
        icon: "🤝",
        color: "green",
        description: "Нейтральная третья сторона помогает сторонам достичь добровольного соглашения",
        pros: ["Конфиденциально", "Экономично", "Сохраняет отношения"],
        cons: ["Не обязательное решение", "Требует согласия обеих сторон", "Может не привести к результату"],
        example: "The parties agreed to mediation to resolve their contract dispute amicably.",
      },
      {
        method: "Arbitration",
        translation: "Арбитраж",
        icon: "👨‍⚖️",
        color: "purple",
        description: "Частное разбирательство, где арбитр выносит обязательное решение",
        pros: ["Быстрее суда", "Конфиденциально", "Выбор арбитра-эксперта"],
        cons: ["Ограниченное право апелляции", "Может быть дорого", "Менее формальные процедуры"],
        example: "The contract included an arbitration clause requiring disputes to be resolved through binding arbitration.",
      },
      {
        method: "Negotiation",
        translation: "Переговоры",
        icon: "💬",
        color: "orange",
        description: "Прямое обсуждение между сторонами без третьей стороны",
        pros: ["Полный контроль сторон", "Самый дешёвый метод", "Гибкость"],
        cons: ["Может зайти в тупик", "Дисбаланс сил", "Нет гарантии результата"],
        example: "The lawyers engaged in settlement negotiations to avoid costly litigation.",
      },
    ];

    const legalNegotiationPhrases = [
      {
        category: "Предложение урегулирования",
        phrases: [
          {
            phrase: "We propose to settle this matter without prejudice",
            translation: "Мы предлагаем урегулировать этот вопрос без ущерба для прав",
            context: "Защита позиции при переговорах",
          },
          {
            phrase: "Our client is willing to compromise on...",
            translation: "Наш клиент готов пойти на компромисс в...",
            context: "Демонстрация гибкости",
          },
          {
            phrase: "In the interest of avoiding protracted litigation...",
            translation: "В интересах избежания затяжного судебного процесса...",
            context: "Обоснование предложения",
          },
        ],
      },
      {
        category: "Отклонение предложений",
        phrases: [
          {
            phrase: "We cannot accept those terms as proposed",
            translation: "Мы не можем принять предложенные условия",
            context: "Вежливое отклонение",
          },
          {
            phrase: "Our position remains unchanged",
            translation: "Наша позиция остаётся неизменной",
            context: "Твёрдая позиция",
          },
          {
            phrase: "We reserve the right to pursue all legal remedies",
            translation: "Мы оставляем за собой право использовать все правовые средства защиты",
            context: "Предупреждение о возможных действиях",
          },
        ],
      },
      {
        category: "Условия соглашения",
        phrases: [
          {
            phrase: "Subject to the following conditions...",
            translation: "При соблюдении следующих условий...",
            context: "Установка условий",
          },
          {
            phrase: "This settlement is contingent upon...",
            translation: "Это урегулирование зависит от...",
            context: "Указание зависимости",
          },
          {
            phrase: "The parties agree to mutual releases",
            translation: "Стороны соглашаются на взаимное освобождение от претензий",
            context: "Завершение спора",
          },
        ],
      },
    ];

    const settlementComponents = [
      {
        component: "Release of Claims",
        translation: "Освобождение от претензий",
        description: "Стороны соглашаются не предъявлять дальнейшие иски друг к другу",
        example: "The plaintiff agrees to release all claims against the defendant arising from this matter.",
      },
      {
        component: "Confidentiality Clause",
        translation: "Оговорка о конфиденциальности",
        description: "Условия урегулирования остаются конфиденциальными",
        example: "The parties agree not to disclose the terms of this settlement to any third parties.",
      },
      {
        component: "Payment Terms",
        translation: "Условия оплаты",
        description: "График и способ выплаты компенсации",
        example: "The defendant shall pay $50,000 in three equal installments over six months.",
      },
      {
        component: "Non-Admission Clause",
        translation: "Оговорка о непризнании вины",
        description: "Урегулирование не является признанием ответственности",
        example: "This settlement is not an admission of liability or wrongdoing by either party.",
      },
      {
        component: "Dismissal with Prejudice",
        translation: "Прекращение дела с запретом повторного иска",
        description: "Дело закрывается окончательно",
        example: "Upon payment, the case shall be dismissed with prejudice.",
      },
    ];

    const adrTerminology = [
      {
        term: "Alternative Dispute Resolution (ADR)",
        translation: "Альтернативное разрешение споров",
        definition: "Методы разрешения споров вне судебной системы",
      },
      {
        term: "Settlement Agreement",
        translation: "Соглашение об урегулировании",
        definition: "Договор, завершающий спор между сторонами",
      },
      {
        term: "Binding vs. Non-Binding",
        translation: "Обязывающее vs. Необязывающее",
        definition: "Является ли решение юридически обязательным для исполнения",
      },
      {
        term: "Good Faith Negotiation",
        translation: "Добросовестные переговоры",
        definition: "Честное и серьёзное намерение достичь соглашения",
      },
      {
        term: "Impasse",
        translation: "Тупик в переговорах",
        definition: "Ситуация, когда стороны не могут достичь соглашения",
      },
      {
        term: "Caucus",
        translation: "Отдельная встреча",
        definition: "Частная встреча медиатора с одной из сторон",
      },
    ];

    const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
      blue: { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-700" },
      green: { border: "border-green-200", bg: "bg-green-50", text: "text-green-700" },
      orange: { border: "border-orange-200", bg: "bg-orange-50", text: "text-orange-700" },
      purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700" },
    };

    return (
      <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">⚖️</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">Dispute Resolution & Legal Negotiations</h2>
          <p className="text-xl text-gray-600">Разрешение споров и юридические переговоры</p>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
          <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">🔄</span> Методы разрешения споров (ADR)
          </h3>
          <p className="text-gray-700 mb-6">
            Alternative Dispute Resolution предлагает способы разрешения конфликтов без судебного разбирательства.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {disputeResolutionMethods.map((item, index) => {
              const colors = colorClasses[item.color];
              return (
                <div key={index} className={`bg-white rounded-xl border-2 ${colors.border} p-5`}>
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h4 className={`font-bold text-lg ${colors.text}`}>{item.method}</h4>
                      <p className="text-sm text-gray-600 italic">({item.translation})</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{item.description}</p>

                  <div className="space-y-3">
                    <div className={`${colors.bg} border ${colors.border} rounded-lg p-3`}>
                      <p className="font-semibold text-green-700 text-sm mb-2">✓ Преимущества:</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        {item.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="font-semibold text-red-700 text-sm mb-2">✗ Недостатки:</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        {item.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 bg-gray-50 border border-gray-200 rounded p-2">
                    <p className="text-xs text-gray-600 italic">{item.example}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
          <h3 className="font-bold text-xl text-purple-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">💬</span> Фразы для юридических переговоров
          </h3>

          <div className="space-y-4">
            {legalNegotiationPhrases.map((section, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-purple-200 p-5">
                <h4 className="font-bold text-lg text-purple-700 mb-4">{section.category}</h4>
                <div className="space-y-3">
                  {section.phrases.map((item, i) => (
                    <div key={i} className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <p className="font-semibold text-gray-800 mb-1">{item.phrase}</p>
                      <p className="text-sm text-gray-600 italic mb-2">→ {item.translation}</p>
                      <p className="text-xs text-purple-600 bg-white rounded px-2 py-1 inline-block">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border-2 border-indigo-200 p-6">
          <h3 className="font-bold text-xl text-indigo-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">📄</span> Компоненты мирового соглашения
          </h3>
          <p className="text-gray-700 mb-6">
            Типичные элементы, включаемые в соглашения об урегулировании споров:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {settlementComponents.map((item, index) => (
              <div key={index} className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-4">
                <h4 className="font-bold text-indigo-700 mb-2">{item.component}</h4>
                <p className="text-sm text-gray-600 italic mb-2">({item.translation})</p>
                <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                <div className="bg-white border border-indigo-200 rounded p-2">
                  <p className="text-xs text-gray-600 italic">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
          <h3 className="font-bold text-xl text-green-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span> Терминология ADR
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {adrTerminology.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-green-200 p-4">
                <h4 className="font-bold text-green-700 mb-1">{item.term}</h4>
                <p className="text-sm text-gray-600 italic mb-2">({item.translation})</p>
                <p className="text-gray-700 text-sm">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
            <div className="text-center mb-4">
              <span className="text-5xl">✅</span>
            </div>
            <h3 className="font-bold text-xl text-blue-800 mb-3 text-center">Best Practices</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Prepare thoroughly before negotiations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Understand your client's priorities and BATNA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Maintain professional courtesy at all times</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Get all agreements in writing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Consider long-term relationships and reputation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
            <div className="text-center mb-4">
              <span className="text-5xl">⚠️</span>
            </div>
            <h3 className="font-bold text-xl text-amber-800 mb-3 text-center">Common Pitfalls</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Making unauthorized concessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Failing to preserve privileged communications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Accepting vague or ambiguous settlement terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Not considering tax implications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">!</span>
                <span>Overlooking enforcement mechanisms</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 border-2 border-rose-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="font-bold text-xl text-rose-800 mb-2">Ключевой принцип</h3>
              <p className="text-gray-700 text-lg">
                <strong className="text-rose-700">Settlement is often preferable to litigation</strong> —
                большинство юридических споров разрешается до суда, потому что стороны могут контролировать
                результат, экономить время и деньги, и сохранять конфиденциальность.
                <br />
                <span className="text-sm text-gray-600 italic mt-2 block">
                  "A bad settlement is almost always better than a good trial." — Legal maxim
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10: Final Review
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    const items: FillItem[] = [
      // Contract Law
      { left: "A", right: "is a legally binding agreement between two or more parties.", answers: ["contract", "agreement", "covenant"] },
      { left: "If one party fails to fulfill their obligations, they are in", right: "of contract.", answers: ["breach", "violation", "default"] },
      { left: "The seller made a", right: "that the product would last for five years.", answers: ["warranty", "guarantee", "assurance"] },
      { left: "Payment is the", right: "given in exchange for the promise in a contract.", answers: ["consideration", "exchange", "value"] },
      { left: "The", right: "clause excuses performance in case of natural disasters.", answers: ["force majeure", "act of God", "impossibility"] },

      // Court Proceedings
      { left: "The", right: "is the person who brings a lawsuit against another party.", answers: ["plaintiff", "claimant", "complainant"] },
      { left: "The jury reached a", right: "of guilty after three hours of deliberation.", answers: ["verdict", "decision", "judgment"] },
      { left: "The witness gave", right: "under oath in the courtroom.", answers: ["testimony", "evidence", "statement"] },
      { left: "The parties reached a", right: "before the case went to trial.", answers: ["settlement", "agreement", "compromise"] },
      { left: "The judge's decision established a legal", right: "for future cases.", answers: ["precedent", "standard", "principle"] },

      // Criminal Law
      { left: "The", right: "represents the government in criminal cases.", answers: ["prosecution", "prosecutor", "state"] },
      { left: "The defendant was found guilty and received a", right: "after the trial.", answers: ["conviction", "guilty verdict", "judgment"] },
      { left: "A", right: "is a serious crime punishable by more than one year in prison.", answers: ["felony", "serious crime", "major offense"] },
      { left: "The judge released the defendant on", right: "pending trial.", answers: ["bail", "bond", "release"] },
      { left: "Instead of prison, the offender was sentenced to", right: ".", answers: ["probation", "supervised release", "conditional discharge"] },

      // Legal Documents
      { left: "An", right: "is a written sworn statement of fact.", answers: ["affidavit", "sworn statement", "declaration"] },
      { left: "The court issued a", right: "requiring the witness to appear in court.", answers: ["subpoena", "summons", "court order"] },
      { left: "The lawyer filed a", right: "to dismiss the case.", answers: ["motion", "application", "petition"] },
      { left: "The attorney took the witness's", right: "before trial.", answers: ["deposition", "testimony", "statement"] },
      { left: "A", right: "is a court order requiring someone to do or stop doing something.", answers: ["injunction", "restraining order", "court order"] },

      // Legal Professionals
      { left: "The", right: "presides over court proceedings and makes rulings on the law.", answers: ["judge", "justice", "magistrate"] },
      { left: "An", right: "is a legal professional who represents clients in legal matters.", answers: ["attorney", "lawyer", "counsel"] },
      { left: "A", right: "assists lawyers with research and administrative tasks.", answers: ["paralegal", "legal assistant", "law clerk"] },
      { left: "A", right: "is an official authorized to witness signatures on documents.", answers: ["notary public", "notary", "commissioner"] },
      { left: "A neutral", right: "helps parties resolve disputes without going to court.", answers: ["mediator", "arbitrator", "facilitator"] },

      // Legal Phrases
      { left: "The contract states that,", right: "Section 5, all payments must be made monthly.", answers: ["pursuant to", "according to", "under"] },
      { left: "The company", right: "referred to as 'the Seller' in this agreement.", answers: ["hereinafter", "hereafter", "subsequently"] },
      { left: "The document is null and", right: ".", answers: ["void", "invalid", "unenforceable"] },
      { left: "", right: "the foregoing, the defendant retains certain rights.", answers: ["Notwithstanding", "Despite", "Regardless of"] },

      // Legal Writing & Contracts
      { left: "The", right: "section of a contract defines key terms used throughout.", answers: ["definitions", "interpretation", "terms"] },
      { left: "The contract's", right: "clause specifies how and when the agreement can be ended.", answers: ["termination", "cancellation", "expiration"] },
      { left: "The", right: "law clause determines which jurisdiction's laws apply.", answers: ["governing", "applicable", "choice of"] },
      { left: "Legal writing should be precise and", right: "to avoid misinterpretation.", answers: ["unambiguous", "clear", "explicit"] },

      // Dispute Resolution
      { left: "The parties agreed to resolve their dispute through", right: ", a form of ADR.", answers: ["mediation", "arbitration", "negotiation"] },
      { left: "Alternative Dispute Resolution (ADR) provides methods to resolve conflicts without", right: ".", answers: ["litigation", "going to court", "trial"] },
      { left: "Binding", right: "results in a decision that is legally enforceable.", answers: ["arbitration", "mediation", "adjudication"] },
      { left: "The", right: "agreement released both parties from further claims.", answers: ["settlement", "compromise", "release"] },
      { left: "The negotiations reached an", right: "when neither party would compromise further.", answers: ["impasse", "deadlock", "stalemate"] },
      { left: "All settlement discussions were conducted in good", right: ".", answers: ["faith", "trust", "conscience"] },

      // Mixed Legal Terminology
      { left: "The attorney conducted due", right: "before the merger.", answers: ["diligence", "care", "investigation"] },
      { left: "The defendant was found not guilty and received an", right: ".", answers: ["acquittal", "exoneration", "discharge"] },
      { left: "The lawyer submitted a legal", right: "to the court outlining their arguments.", answers: ["brief", "memorandum", "submission"] },
      { left: "A", right: "of attorney gives someone authority to act on another's behalf.", answers: ["power", "letter", "authorization"] },
      { left: "The parties signed a", right: "agreement to protect confidential information.", answers: ["confidentiality", "non-disclosure", "secrecy"] },
      { left: "The court may impose a", right: "clause requiring payment if obligations aren't met.", answers: ["penalty", "liquidated damages", "fine"] },
    ];

    return (
      <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">🎯</div>
          <h2 className="text-4xl font-black mb-2 text-gray-800">Final Review</h2>
          <p className="text-xl text-gray-600">Итоговая проверка знаний Legal English</p>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📚</span>
            <div>
              <h3 className="font-bold text-xl text-blue-800 mb-2">Что мы изучили</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-1">⚖️ Contract Law</p>
                  <p className="text-sm text-gray-600">Договорное право и ключевые термины</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-1">🏛️ Court Proceedings</p>
                  <p className="text-sm text-gray-600">Судебные процессы и процедуры</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-1">👮 Criminal Law</p>
                  <p className="text-sm text-gray-600">Уголовное право и процесс</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-1">📄 Legal Documents</p>
                  <p className="text-sm text-gray-600">Юридические документы и их виды</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-1">👨‍⚖️ Legal Professionals</p>
                  <p className="text-sm text-gray-600">Профессии в юриспруденции</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-1">📖 Legal Phrases</p>
                  <p className="text-sm text-gray-600">Формальные юридические фразы</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-1">✍️ Legal Writing</p>
                  <p className="text-sm text-gray-600">Юридическое письмо и договоры</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="font-semibold text-blue-700 mb-1">🤝 Dispute Resolution</p>
                  <p className="text-sm text-gray-600">Разрешение споров и ADR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border-2 border-indigo-200 p-8">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 border-2 border-indigo-300 mb-6">
            <p className="text-center text-gray-700 font-semibold">
              <span className="text-indigo-700 text-xl">📝</span> Комплексный тест на все темы Legal English
            </p>
          </div>

          <CheckableExercise items={items} />
        </div>

        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🏆</span>
            <div>
              <h3 className="font-bold text-xl text-green-800 mb-2">Поздравляем!</h3>
              <p className="text-gray-700 text-lg">
                Вы завершили курс Legal English! Теперь вы знаете основную юридическую лексику,
                термины договорного и уголовного права, судебные процедуры и методы разрешения споров.
              </p>
              <div className="mt-4 bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-700 mb-2">📌 Следующие шаги:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Читайте юридические тексты и договоры на английском языке</li>
                  <li>• Изучайте прецедентное право (case law) англоязычных юрисдикций</li>
                  <li>• Практикуйте составление юридических документов</li>
                  <li>• Смотрите судебные заседания и юридические дебаты на английском</li>
                  <li>• Следите за юридическими новостями на профессиональных ресурсах</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h3 className="font-bold text-xl text-amber-800 mb-2">Ключевые компетенции Legal English</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Чтение и анализ:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>✓ Контракты и соглашения</li>
                    <li>✓ Судебные решения (case law)</li>
                    <li>✓ Законодательные акты</li>
                    <li>✓ Юридические меморандумы</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-2">Составление документов:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>✓ Договоры и контракты</li>
                    <li>✓ Юридические письма</li>
                    <li>✓ Процессуальные документы</li>
                    <li>✓ Соглашения об урегулировании</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-2xl p-6 border-2 border-violet-300 shadow-lg">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📚</span>
            <div>
              <h3 className="font-bold text-xl text-violet-800 mb-2">Рекомендуемые ресурсы</h3>
              <div className="grid md:grid-cols-2 gap-3 mt-4">
                <div className="bg-white rounded-lg p-3 border border-violet-200">
                  <h4 className="font-semibold text-violet-700 text-sm mb-1">🌐 Онлайн-ресурсы:</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Justia — бесплатная база судебных решений</li>
                    <li>• Cornell Law School — Legal Information Institute</li>
                    <li>• FindLaw — юридические статьи и ресурсы</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3 border border-violet-200">
                  <h4 className="font-semibold text-violet-700 text-sm mb-1">📖 Литература:</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Black's Law Dictionary</li>
                    <li>• Introduction to Legal English</li>
                    <li>• Legal Writing in Plain English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
