"use client";

export default function Step9() {
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
