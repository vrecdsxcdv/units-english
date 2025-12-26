'use client';
import { useState } from 'react';

export default function Step6() {
  const [sliderValue, setSliderValue] = useState(50);
  const collocations = [
    { collocation: 'evidence suggests', strength: 90, translation: 'данные свидетельствуют' },
    { collocation: 'data shows', strength: 85, translation: 'данные показывают' },
    { collocation: 'findings indicate', strength: 80, translation: 'результаты указывают' },
    { collocation: 'results demonstrate', strength: 85, translation: 'результаты демонстрируют' },
    { collocation: 'research reveals', strength: 75, translation: 'исследование выявляет' },
    { collocation: 'study confirms', strength: 90, translation: 'исследование подтверждает' },
    { collocation: 'analysis supports', strength: 80, translation: 'анализ поддерживает' },
    { collocation: 'investigation highlights', strength: 70, translation: 'исследование подчёркивает' },
  ];
  const filteredCollocations = collocations.filter(c => c.strength >= sliderValue);

  return (
    <div className="space-y-8 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black mb-2 text-gray-800">Данные и результаты</h2>
        <p className="text-xl text-gray-600">Data & Results</p>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-violet-200 p-8">
        <h3 className="font-bold text-2xl text-violet-700 mb-6">🎚️ Интерактивный фильтр</h3>
        <div className="bg-violet-50 rounded-xl p-6 border-2 border-violet-200 mb-8">
          <div className="flex items-center justify-between mb-4">
            <label className="font-bold text-lg">Минимальная сила:</label>
            <span className="text-3xl font-black text-violet-600">{sliderValue}%</span>
          </div>
          <input type="range" min="0" max="100" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} className="w-full h-3 bg-gray-200 rounded-lg cursor-pointer accent-violet-600" />
        </div>
        <p className="text-center mb-4">Найдено: <span className="text-violet-600 text-2xl">{filteredCollocations.length}</span> из {collocations.length}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {filteredCollocations.map((item, i) => (
            <div key={i} className="rounded-xl p-5 border-2 border-violet-200 bg-white">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-violet-700">{item.collocation}</h4>
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-500 text-white">{item.strength}%</span>
              </div>
              <p className="text-gray-600">{item.translation}</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-3 rounded-full" style={{width: item.strength + '%'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}