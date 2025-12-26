import CheckableExercise, { type FillItem } from '@/components/lesson/CheckableExercise';

export default function Step7() {
  const items: FillItem[] = [
    { left: 'The evidence', right: 'that the theory is correct.', options: ['suggests', 'says', 'tells'] },
    { left: 'The data clearly', right: 'a positive correlation.', options: ['shows', 'displays', 'presents'] },
    { left: 'The findings', right: 'a need for policy change.', options: ['indicate', 'show', 'point'] },
    { left: 'The results', right: 'the effectiveness of the treatment.', options: ['demonstrate', 'show', 'prove'] },
    { left: 'The research', right: 'significant differences.', options: ['reveals', 'shows', 'uncovers'] },
    { left: 'The study', right: 'our initial hypothesis.', options: ['confirms', 'proves', 'verifies'] },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📊</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Практика: Noun + Verb</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-200 p-8">
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}