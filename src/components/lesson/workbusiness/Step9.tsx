export default function Step9() {
  const negotiationPhrases = [
    {
      category: "Начало переговоров",
      icon: "🤝",
      color: "blue",
      phrases: [
        {
          phrase: "Thank you for taking the time to meet with us",
          translation: "Спасибо, что нашли время встретиться с нами",
          context: "Вежливое начало",
        },
        {
          phrase: "Let's discuss the terms and conditions",
          translation: "Давайте обсудим условия",
          context: "Переход к делу",
        },
        {
          phrase: "We're looking to reach a mutually beneficial agreement",
          translation: "Мы стремимся достичь взаимовыгодного соглашения",
          context: "Заявление о намерениях",
        },
      ],
    },
    {
      category: "Внесение предложений",
      icon: "💡",
      color: "green",
      phrases: [
        {
          phrase: "We propose / suggest that...",
          translation: "Мы предлагаем, чтобы...",
          context: "Формальное предложение",
        },
        {
          phrase: "What if we...?",
          translation: "Что, если мы...?",
          context: "Мягкое предложение альтернативы",
        },
        {
          phrase: "We're prepared to offer...",
          translation: "Мы готовы предложить...",
          context: "Конкретное предложение",
        },
        {
          phrase: "How about we split the difference?",
          translation: "Как насчет того, чтобы разделить разницу?",
          context: "Компромисс",
        },
      ],
    },
    {
      category: "Выражение сомнений",
      icon: "🤔",
      color: "orange",
      phrases: [
        {
          phrase: "I'm not sure that will work for us",
          translation: "Не уверен, что это подойдёт нам",
          context: "Мягкое отклонение",
        },
        {
          phrase: "We have some concerns about...",
          translation: "У нас есть некоторые опасения по поводу...",
          context: "Выражение беспокойства",
        },
        {
          phrase: "That's not quite what we had in mind",
          translation: "Это не совсем то, что мы имели в виду",
          context: "Деликатное несогласие",
        },
        {
          phrase: "We'd need to see more flexibility on...",
          translation: "Нам нужно больше гибкости в...",
          context: "Запрос на уступки",
        },
      ],
    },
    {
      category: "Торг и уступки",
      icon: "⚖️",
      color: "purple",
      phrases: [
        {
          phrase: "If you can agree to X, we'll agree to Y",
          translation: "Если вы согласитесь на X, мы согласимся на Y",
          context: "Условное предложение",
        },
        {
          phrase: "We can be flexible on price if you increase the volume",
          translation: "Мы можем быть гибкими в цене, если вы увеличите объём",
          context: "Взаимная уступка",
        },
        {
          phrase: "That's our final offer",
          translation: "Это наше окончательное предложение",
          context: "Установление границ",
        },
        {
          phrase: "We might be able to meet you halfway",
          translation: "Возможно, мы сможем пойти вам навстречу",
          context: "Готовность к компромиссу",
        },
      ],
    },
    {
      category: "Завершение переговоров",
      icon: "✅",
      color: "green",
      phrases: [
        {
          phrase: "I think we've reached an agreement",
          translation: "Думаю, мы достигли соглашения",
          context: "Подтверждение договорённости",
        },
        {
          phrase: "Let's put this in writing",
          translation: "Давайте зафиксируем это письменно",
          context: "Переход к документации",
        },
        {
          phrase: "We'll have our legal team draw up the contract",
          translation: "Наша юридическая команда составит договор",
          context: "Следующие шаги",
        },
        {
          phrase: "Looking forward to a successful partnership",
          translation: "С нетерпением ждём успешного партнёрства",
          context: "Позитивное завершение",
        },
      ],
    },
  ];

  const contractTerms = [
    {
      term: "terms and conditions",
      translation: "условия и положения",
      explanation: "Правила и требования, которым должны следовать обе стороны.",
    },
    {
      term: "liability",
      translation: "ответственность",
      explanation: "Юридическая или финансовая ответственность за действия или ущерб.",
    },
    {
      term: "breach of contract",
      translation: "нарушение контракта",
      explanation: "Несоблюдение условий договора одной из сторон.",
    },
    {
      term: "termination clause",
      translation: "условие расторжения",
      explanation: "Раздел контракта, описывающий, как и когда договор может быть расторгнут.",
    },
    {
      term: "confidentiality agreement / NDA",
      translation: "соглашение о конфиденциальности",
      explanation: "Договор, запрещающий раскрытие конфиденциальной информации.",
    },
    {
      term: "penalty clause",
      translation: "штрафная санкция",
      explanation: "Условие, предусматривающее штраф за невыполнение обязательств.",
    },
    {
      term: "force majeure",
      translation: "форс-мажор",
      explanation: "Непредвиденные обстоятельства (стихийные бедствия, войны), освобождающие от обязательств.",
    },
    {
      term: "warranties and representations",
      translation: "гарантии и заверения",
      explanation: "Официальные заявления о фактах, которые одна сторона гарантирует другой.",
    },
  ];

  const negotiationStrategies = [
    {
      strategy: "BATNA (Best Alternative To a Negotiated Agreement)",
      translation: "Лучшая альтернатива соглашению",
      icon: "🎯",
      description: "Знайте свою лучшую альтернативу, если переговоры провалятся. Это даёт вам силу.",
      example: "Перед переговорами о зарплате, имейте другое предложение о работе как BATNA.",
    },
    {
      strategy: "Win-Win Approach",
      translation: "Взаимовыгодный подход",
      icon: "🤝",
      description: "Ищите решения, которые выгодны обеим сторонам, а не только вам.",
      example: "Вместо 'либо/либо' ищите варианты, где обе стороны получают что-то ценное.",
    },
    {
      strategy: "Anchoring",
      translation: "Якорение",
      icon: "⚓",
      description: "Первое предложение устанавливает 'якорь' для всех последующих переговоров.",
      example: "Если вы продавец, начните с более высокой цены; если покупатель — с более низкой.",
    },
    {
      strategy: "Silence as a Tool",
      translation: "Молчание как инструмент",
      icon: "🤫",
      description: "После предложения молчите. Дайте другой стороне время обдумать и ответить.",
      example: "Назовите цену и ждите. Не заполняйте паузу дополнительными уступками.",
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
        <div className="text-7xl mb-4">🤝</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Negotiations & Agreements</h2>
        <p className="text-xl text-gray-600">Переговоры и соглашения</p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg mb-8">
        <h3 className="font-bold text-xl text-blue-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">💬</span> Язык переговоров
        </h3>

        <div className="space-y-6">
          {negotiationPhrases.map((section, index) => {
            const colors = colorClasses[section.color];
            return (
              <div key={index} className={`bg-white rounded-xl border-2 ${colors.border} p-5`}>
                <h4 className={`font-bold text-lg ${colors.text} mb-4 flex items-center gap-2`}>
                  <span className="text-2xl">{section.icon}</span>
                  {section.category}
                </h4>
                <div className="space-y-3">
                  {section.phrases.map((item, i) => (
                    <div key={i} className={`${colors.bg} border ${colors.border} rounded-lg p-4`}>
                      <p className="font-semibold text-gray-800 mb-1">{item.phrase}</p>
                      <p className="text-sm text-gray-600 italic mb-2">→ {item.translation}</p>
                      <p className="text-xs text-gray-500 bg-white rounded px-2 py-1 inline-block">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 shadow-lg">
        <h3 className="font-bold text-xl text-purple-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">📄</span> Контрактная терминология
        </h3>
        <p className="text-gray-700 mb-6">
          Ключевые термины, которые встречаются в деловых договорах и соглашениях.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {contractTerms.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-purple-200 p-4">
              <h4 className="font-bold text-purple-700 mb-2">{item.term}</h4>
              <p className="text-sm text-gray-600 italic mb-2">({item.translation})</p>
              <p className="text-gray-700 text-sm">{item.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <h3 className="font-bold text-xl text-green-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">🎯</span> Стратегии переговоров
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {negotiationStrategies.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-green-200 p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-green-700 text-lg">{item.strategy}</h4>
                  <p className="text-sm text-gray-600 italic">({item.translation})</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-900">
                  <strong>Пример:</strong> {item.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-300 shadow-lg">
          <div className="text-center mb-4">
            <span className="text-5xl">✅</span>
          </div>
          <h3 className="font-bold text-xl text-indigo-800 mb-3 text-center">Effective Negotiator</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">✓</span>
              <span>Listen actively to understand the other side's needs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">✓</span>
              <span>Prepare thoroughly before negotiations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">✓</span>
              <span>Stay calm and professional under pressure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">✓</span>
              <span>Be willing to walk away if terms aren't favorable</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">✓</span>
              <span>Focus on interests, not positions</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-6 border-2 border-red-300 shadow-lg">
          <div className="text-center mb-4">
            <span className="text-5xl">❌</span>
          </div>
          <h3 className="font-bold text-xl text-red-800 mb-3 text-center">Common Mistakes</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Making the first major concession</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Showing desperation or urgency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Accepting the first offer without negotiating</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Letting emotions drive decisions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <span>Failing to get agreements in writing</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Золотое правило переговоров</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">Preparation is key</strong> — 80% успеха переговоров зависит от подготовки.
              <br />
              Знайте свои цели, свою BATNA, и понимайте интересы другой стороны.
              <br />
              <span className="text-sm text-gray-600 italic mt-2 block">
                "In business, you don't get what you deserve, you get what you negotiate." — Chester L. Karrass
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
