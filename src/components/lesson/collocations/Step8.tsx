import CheckableExercise, { type FillItem } from "@/components/lesson/CheckableExercise";

export default function Step8() {
  const items: FillItem[] = [
    { left: "We need to", right: "extensive research before making decisions.", options: ["conduct", "do", "make"] },
    { left: "Based on the evidence, we can", right: "that the hypothesis is correct.", options: ["draw a conclusion", "make a conclusion", "take a conclusion"] },
    { left: "After long negotiations, the parties finally", right: ".", options: ["reached a consensus", "made a consensus", "got a consensus"] },
    { left: "The researchers spent months", right: "from various sources.", options: ["gathering data", "taking data", "making data"] },
    { left: "Scientists", right: "to explain the observed phenomenon.", options: ["formulated a hypothesis", "made a hypothesis", "created a hypothesis"] },
    { left: "The study involved", right: "research across multiple countries.", options: ["extensive", "big", "large"] },
    { left: "The", right: "findings indicate a need for further investigation.", options: ["preliminary", "first", "starting"] },
    { left: "Climate change has a", right: "impact on global ecosystems.", options: ["significant", "big", "important"] },
    { left: "The lawyer presented a", right: "argument in court.", options: ["valid", "correct", "right"] },
    { left: "The theory is supported by", right: "evidence.", options: ["empirical", "real", "practical"] },
    { left: "The researchers used a", right: "methodology.", options: ["rigorous", "strict", "hard"] },
    { left: "The evidence", right: "that the theory is correct.", options: ["suggests", "says", "tells"] },
    { left: "The data clearly", right: "a positive correlation.", options: ["shows", "displays", "presents"] },
    { left: "The findings", right: "a need for policy change.", options: ["indicate", "show", "point"] },
    { left: "The results", right: "the effectiveness of the treatment.", options: ["demonstrate", "show", "prove"] },
    { left: "The findings were", right: "significant (p < 0.01).", options: ["highly", "very", "extremely"] },
    { left: "This theory is", right: "accepted in the scientific community.", options: ["widely", "broadly", "generally"] },
    { left: "These two variables are", right: "related.", options: ["closely", "tightly", "strongly"] },
    { left: "The outcome is", right: "dependent on external factors.", options: ["largely", "mostly", "mainly"] },
    { left: "Environmental issues are becoming", right: "important.", options: ["increasingly", "more and more", "progressively"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎯</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Финальный тест</h2>
        <p className="text-xl text-gray-600">Проверочные задания по всем коллокациям</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border-2 border-indigo-200 p-8">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 border-2 border-indigo-300 mb-6">
          <p className="text-center text-gray-700 font-semibold">
            <span className="text-indigo-700 text-xl">📝</span> Проверьте свои знания всех типов коллокаций: Verb+Noun, Adjective+Noun, Noun+Verb, Adverb+Adjective
          </p>
        </div>

        <CheckableExercise items={items} />
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🏆</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Отличная работа!</h3>
            <p className="text-gray-700 text-lg">
              Вы освоили основные академические коллокации. Продолжайте практиковать их в своих научных текстах 
              и академическом письме. Помните: правильные коллокации делают вашу речь естественной и профессиональной!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}