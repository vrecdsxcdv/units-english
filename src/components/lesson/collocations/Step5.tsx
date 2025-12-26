import CheckableExercise, { type FillItem } from '@/components/lesson/CheckableExercise';

export default function Step5() {
  const items: FillItem[] = [
    { left: 'The study involved', right: 'research across multiple countries.', options: ['extensive', 'big', 'large'] },
    { left: 'The', right: 'findings indicate a need for further investigation.', options: ['preliminary', 'first', 'starting'] },
    { left: 'Climate change has a', right: 'impact on global ecosystems.', options: ['significant', 'big', 'important'] },
    { left: 'The lawyer presented a', right: 'argument in court.', options: ['valid', 'correct', 'right'] },
    { left: 'The theory is supported by', right: 'evidence.', options: ['empirical', 'real', 'practical'] },
    { left: 'The researchers used a', right: 'methodology.', options: ['rigorous', 'strict', 'hard'] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎯</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Практика: Adjective + Noun</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-cyan-200 p-8">
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}