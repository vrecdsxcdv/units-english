export default function Step9() {
  const phraseCategories = [
    {
      category: "Выборы и голосование",
      icon: "🗳️",
      color: "red",
      phrases: [
        {
          phrase: "to run for office",
          translation: "баллотироваться на должность",
          context: "She decided to run for office after years of activism.",
        },
        {
          phrase: "to cast a vote",
          translation: "проголосовать",
          context: "Citizens cast their votes at local polling stations.",
        },
        {
          phrase: "to win by a landslide",
          translation: "победить с большим отрывом",
          context: "The president won by a landslide, securing 70% of votes.",
        },
        {
          phrase: "to concede defeat",
          translation: "признать поражение",
          context: "The candidate conceded defeat after the results were announced.",
        },
        {
          phrase: "to swing the vote",
          translation: "повлиять на результат голосования",
          context: "The debate may have swung the vote in her favor.",
        },
      ],
    },
    {
      category: "Законодательный процесс",
      icon: "⚖️",
      color: "blue",
      phrases: [
        {
          phrase: "to pass a bill",
          translation: "принять законопроект",
          context: "Congress passed the bill with bipartisan support.",
        },
        {
          phrase: "to block legislation",
          translation: "заблокировать законопроект",
          context: "The opposition threatened to block legislation on immigration.",
        },
        {
          phrase: "to override a veto",
          translation: "преодолеть вето",
          context: "The Senate voted to override the president's veto.",
        },
        {
          phrase: "to table a motion",
          translation: "отложить рассмотрение / внести предложение",
          context: "UK: The MP tabled a motion on climate change. US: They tabled the motion indefinitely.",
        },
        {
          phrase: "to reach a compromise",
          translation: "достичь компромисса",
          context: "After weeks of negotiations, both sides reached a compromise.",
        },
      ],
    },
    {
      category: "Политические позиции",
      icon: "📊",
      color: "green",
      phrases: [
        {
          phrase: "to take a stance on",
          translation: "занять позицию по",
          context: "The senator took a strong stance on healthcare reform.",
        },
        {
          phrase: "to shift position",
          translation: "изменить позицию",
          context: "The party has shifted its position on trade policy.",
        },
        {
          phrase: "to toe the party line",
          translation: "следовать линии партии",
          context: "He always toes the party line on controversial issues.",
        },
        {
          phrase: "to cross the aisle",
          translation: "сотрудничать с оппозицией",
          context: "Several Republicans crossed the aisle to support the bill.",
        },
        {
          phrase: "to be politically aligned with",
          translation: "разделять политические взгляды с",
          context: "The organization is politically aligned with progressive causes.",
        },
      ],
    },
    {
      category: "Международные отношения",
      icon: "🌍",
      color: "purple",
      phrases: [
        {
          phrase: "to impose sanctions",
          translation: "ввести санкции",
          context: "The UN decided to impose sanctions on the regime.",
        },
        {
          phrase: "to broker a deal",
          translation: "выступить посредником в сделке",
          context: "The US brokered a deal between the warring parties.",
        },
        {
          phrase: "to sever diplomatic ties",
          translation: "разорвать дипломатические отношения",
          context: "The countries severed diplomatic ties after the incident.",
        },
        {
          phrase: "to call for negotiations",
          translation: "призвать к переговорам",
          context: "World leaders called for immediate negotiations.",
        },
        {
          phrase: "to exert pressure on",
          translation: "оказывать давление на",
          context: "Western nations are exerting pressure on the government.",
        },
      ],
    },
    {
      category: "Политические кризисы",
      icon: "⚡",
      color: "orange",
      phrases: [
        {
          phrase: "to call for resignation",
          translation: "потребовать отставки",
          context: "Protesters called for the minister's resignation.",
        },
        {
          phrase: "to face impeachment",
          translation: "столкнуться с импичментом",
          context: "The president may face impeachment proceedings.",
        },
        {
          phrase: "to declare a state of emergency",
          translation: "объявить чрезвычайное положение",
          context: "The government declared a state of emergency.",
        },
        {
          phrase: "to stage a coup",
          translation: "совершить государственный переворот",
          context: "The military staged a coup against the elected government.",
        },
        {
          phrase: "to restore order",
          translation: "восстановить порядок",
          context: "The authorities promised to restore order after the riots.",
        },
      ],
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; light: string }> = {
    red: { bg: "bg-red-500", border: "border-red-200", text: "text-red-700", light: "bg-red-50" },
    blue: { bg: "bg-blue-500", border: "border-blue-200", text: "text-blue-700", light: "bg-blue-50" },
    green: { bg: "bg-green-500", border: "border-green-200", text: "text-green-700", light: "bg-green-50" },
    purple: { bg: "bg-purple-500", border: "border-purple-200", text: "text-purple-700", light: "bg-purple-50" },
    orange: { bg: "bg-orange-500", border: "border-orange-200", text: "text-orange-700", light: "bg-orange-50" },
  };

  return (
    <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">💬</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Political Phrases & Collocations</h2>
        <p className="text-xl text-gray-600">Политические фразы и устойчивые выражения</p>
      </div>

      <div className="space-y-8">
        {phraseCategories.map((category, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg border-2 ${colorClasses[category.color].border} p-6`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <h3 className={`text-2xl font-bold ${colorClasses[category.color].text}`}>
                {category.category}
              </h3>
            </div>

            <div className="space-y-4">
              {category.phrases.map((item, i) => (
                <div
                  key={i}
                  className={`${colorClasses[category.color].light} rounded-xl p-4 border ${colorClasses[category.color].border}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <p className={`font-bold text-lg ${colorClasses[category.color].text}`}>
                      {item.phrase}
                    </p>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 whitespace-nowrap">
                      {item.translation}
                    </span>
                  </div>
                  <p className="text-gray-600 italic text-sm">
                    &quot;{item.context}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">UK vs US: Table a Motion</h3>
            <p className="text-gray-700 text-lg">
              <strong className="text-amber-700">British English:</strong> to table = внести на рассмотрение (начать обсуждение)
              <br />
              <strong className="text-amber-700">American English:</strong> to table = отложить (снять с обсуждения)
              <br />
              <span className="text-sm text-gray-600 italic">Будьте внимательны — в разных странах эта фраза имеет противоположные значения!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
