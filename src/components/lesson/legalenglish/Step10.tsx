"use client";

import CheckableExercise, { type FillItem } from "@/components/lesson/CheckableExercise";

export default function Step10() {
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
