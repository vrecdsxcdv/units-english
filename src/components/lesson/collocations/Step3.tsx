import CheckableExercise, { type FillItem } from "@/components/lesson/CheckableExercise";

export default function Step3() {
  const items: FillItem[] = [
    { left: "We need to", right: "extensive research before making any decisions.", options: ["conduct", "do", "make"] },
    { left: "Based on the evidence, we can", right: "that the hypothesis is correct.", options: ["draw a conclusion", "make a conclusion", "take a conclusion"] },
    { left: "After long negotiations, the parties finally", right: ".", options: ["reached a consensus", "made a consensus", "did a consensus"] },
    { left: "The researchers spent months", right: "from various sources.", options: ["gathering data", "taking data", "making data"] },
    { left: "Scientists", right: "to explain the observed phenomenon.", options: ["formulated a hypothesis", "made a hypothesis", "created a hypothesis"] },
    { left: "It is important to", right: "thorough research on this topic.", options: ["conduct", "do", "perform"] },
    { left: "We cannot", right: "until all the data has been analyzed.", options: ["draw conclusions", "make conclusions", "do conclusions"] },
    { left: "The team was unable to", right: "on the best approach.", options: ["reach a consensus", "achieve a consensus", "make a consensus"] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Практика: Research Collocations</h2>
        <p className="text-xl text-gray-600">Выберите правильную коллокацию</p>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-green-200 p-8">
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4 border-2 border-green-300 mb-6">
          <p className="text-center text-gray-700 font-semibold">
            <span className="text-green-700 text-xl">💡</span> Помните: conduct research, draw a conclusion, reach a consensus, gather data, formulate a hypothesis
          </p>
        </div>
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}
