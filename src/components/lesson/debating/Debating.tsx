"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function Debating({ step }: Props) {
  // STEP 1: Введение
  if (step === 1) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <span className="text-4xl">⚖️</span>
            </div>
            <h1 className="text-4xl font-semibold mb-3 text-zinc-800">Debating & Argumentation</h1>
            <p className="text-lg text-zinc-500">Искусство убеждения и аргументации</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Что такое дебаты?</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Дебаты — это формальная дискуссия, где участники представляют и защищают
              противоположные точки зрения. Это ключевой навык для академической,
              профессиональной и повседневной коммуникации на английском языке.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/50 backdrop-blur-xl border border-white/15 p-5">
                <h3 className="font-medium text-zinc-700 mb-2">Зачем учиться дебатам?</h3>
                <ul className="text-zinc-600 text-sm space-y-1">
                  <li>• Развитие критического мышления</li>
                  <li>• Умение структурировать мысли</li>
                  <li>• Навыки публичных выступлений</li>
                  <li>• Способность убеждать</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/50 backdrop-blur-xl border border-white/15 p-5">
                <h3 className="font-medium text-zinc-700 mb-2">Ключевые элементы</h3>
                <ul className="text-zinc-600 text-sm space-y-1">
                  <li>• <strong>Claim</strong> — тезис, утверждение</li>
                  <li>• <strong>Evidence</strong> — доказательства</li>
                  <li>• <strong>Reasoning</strong> — логика</li>
                  <li>• <strong>Rebuttal</strong> — контраргумент</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-semibold text-zinc-800 mb-4">Базовая лексика</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { en: "argument", ru: "аргумент, довод" },
                { en: "to debate", ru: "дискутировать" },
                { en: "counterargument", ru: "контраргумент" },
                { en: "to persuade", ru: "убеждать" },
                { en: "evidence", ru: "доказательство" },
                { en: "to refute", ru: "опровергать" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-white/10">
                  <span className="font-medium text-zinc-800">{item.en}</span>
                  <span className="text-zinc-400">—</span>
                  <span className="text-zinc-600">{item.ru}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 2: Структура аргумента
  if (step === 2) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Argument Structure</h1>
            <p className="text-zinc-500">Структура аргумента: Claim → Evidence → Impact</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <p className="text-zinc-600 mb-6">
              Каждый сильный аргумент строится по модели <strong>C-E-I</strong>:
              сначала утверждение, затем доказательство, и наконец — значимость.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Claim (Утверждение)",
                  desc: "Ваш основной тезис — что вы хотите доказать",
                  example: "Remote work increases productivity.",
                  exampleRu: "Удалённая работа повышает продуктивность."
                },
                {
                  title: "Evidence (Доказательство)",
                  desc: "Факты, статистика, примеры, подтверждающие тезис",
                  example: "A Stanford study found that remote workers were 13% more productive.",
                  exampleRu: "Исследование Стэнфорда показало, что удалённые работники на 13% продуктивнее."
                },
                {
                  title: "Impact (Значимость)",
                  desc: "Почему это важно? Какие последствия?",
                  example: "This means companies can achieve better results while reducing costs.",
                  exampleRu: "Это значит, что компании могут достигать лучших результатов при меньших затратах."
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/50 border border-white/15 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm">{i + 1}</div>
                    <h3 className="font-semibold text-zinc-800">{item.title}</h3>
                  </div>
                  <p className="text-zinc-500 text-sm mb-3">{item.desc}</p>
                  <div className="bg-white/60 rounded-xl p-4 border border-white/10">
                    <p className="text-zinc-800 italic mb-1">"{item.example}"</p>
                    <p className="text-zinc-500 text-sm">{item.exampleRu}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 3: Связующие слова
  if (step === 3) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Linking Words</h1>
            <p className="text-zinc-500">Связующие слова и выражения</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "Добавление аргументов",
                words: [
                  { en: "Furthermore", ru: "Более того" },
                  { en: "Moreover", ru: "Кроме того" },
                  { en: "In addition", ru: "В дополнение" },
                  { en: "What is more", ru: "Что ещё важнее" },
                ]
              },
              {
                category: "Противопоставление",
                words: [
                  { en: "However", ru: "Однако" },
                  { en: "Nevertheless", ru: "Тем не менее" },
                  { en: "On the other hand", ru: "С другой стороны" },
                  { en: "Conversely", ru: "Наоборот" },
                ]
              },
              {
                category: "Причина и следствие",
                words: [
                  { en: "Therefore", ru: "Поэтому" },
                  { en: "Consequently", ru: "Следовательно" },
                  { en: "As a result", ru: "В результате" },
                  { en: "Thus", ru: "Таким образом" },
                ]
              },
              {
                category: "Заключение",
                words: [
                  { en: "In conclusion", ru: "В заключение" },
                  { en: "To sum up", ru: "Подводя итог" },
                  { en: "All in all", ru: "В целом" },
                  { en: "Ultimately", ru: "В конечном счёте" },
                ]
              },
            ].map((group, i) => (
              <div key={i} className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                <h3 className="font-semibold text-zinc-800 mb-4">{group.category}</h3>
                <div className="space-y-2">
                  {group.words.map((word, j) => (
                    <div key={j} className="flex justify-between items-center p-3 rounded-xl bg-white/50 border border-white/10">
                      <span className="font-medium text-zinc-800">{word.en}</span>
                      <span className="text-zinc-500 text-sm">{word.ru}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // STEP 4: Согласие и несогласие
  if (step === 4) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Agreeing & Disagreeing</h1>
            <p className="text-zinc-500">Как выражать согласие и несогласие</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✓</span>
                <h3 className="font-semibold text-zinc-800">Согласие (Agreeing)</h3>
              </div>
              <div className="space-y-3">
                {[
                  { en: "I completely agree with...", ru: "Я полностью согласен с..." },
                  { en: "That's a valid point.", ru: "Это обоснованная точка зрения." },
                  { en: "I see what you mean.", ru: "Я понимаю, что вы имеете в виду." },
                  { en: "You've raised an important issue.", ru: "Вы подняли важный вопрос." },
                  { en: "I couldn't agree more.", ru: "Полностью с вами согласен." },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-green-50 border border-green-100">
                    <p className="text-zinc-800 font-medium text-sm">{item.en}</p>
                    <p className="text-zinc-500 text-xs mt-1">{item.ru}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✗</span>
                <h3 className="font-semibold text-zinc-800">Несогласие (Disagreeing)</h3>
              </div>
              <div className="space-y-3">
                {[
                  { en: "I see your point, but...", ru: "Я понимаю вашу позицию, но..." },
                  { en: "I'm not entirely convinced that...", ru: "Я не совсем уверен, что..." },
                  { en: "With all due respect...", ru: "При всём уважении..." },
                  { en: "I'd have to disagree because...", ru: "Вынужден не согласиться, потому что..." },
                  { en: "That may be true, however...", ru: "Возможно это так, однако..." },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-red-50 border border-red-100">
                    <p className="text-zinc-800 font-medium text-sm">{item.en}</p>
                    <p className="text-zinc-500 text-xs mt-1">{item.ru}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 5: Представление доказательств
  if (step === 5) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Presenting Evidence</h1>
            <p className="text-zinc-500">Как представлять доказательства</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <p className="text-zinc-600 mb-6">
              Сильный аргумент всегда подкреплён доказательствами. Используйте эти фразы для их введения:
            </p>
            <div className="space-y-4">
              {[
                { phrase: "According to recent studies...", ru: "Согласно недавним исследованиям...", example: "According to recent studies, 70% of employees prefer hybrid work." },
                { phrase: "Research has shown that...", ru: "Исследования показали, что...", example: "Research has shown that regular breaks improve concentration." },
                { phrase: "Statistics indicate that...", ru: "Статистика указывает на то, что...", example: "Statistics indicate that renewable energy costs have dropped by 80%." },
                { phrase: "There is compelling evidence that...", ru: "Есть убедительные доказательства того, что...", example: "There is compelling evidence that early education improves outcomes." },
                { phrase: "Experts in the field suggest...", ru: "Эксперты в данной области полагают...", example: "Experts in the field suggest a gradual transition approach." },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/50 border border-white/15 p-5">
                  <p className="font-semibold text-zinc-800 mb-1">{item.phrase}</p>
                  <p className="text-zinc-500 text-sm mb-3">{item.ru}</p>
                  <div className="bg-indigo-50 rounded-xl p-3 border border-indigo-100">
                    <p className="text-zinc-700 text-sm italic">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 6: Контраргументы
  if (step === 6) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Countering Arguments</h1>
            <p className="text-zinc-500">Как отвечать на аргументы оппонента</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <p className="text-zinc-600 mb-6">
              Эффективное опровержение: сначала признайте точку зрения оппонента, затем представьте свой контраргумент.
            </p>
            <div className="space-y-4">
              {[
                { phrase: "While it's true that..., we must consider...", ru: "Хотя верно, что..., мы должны учитывать...", example: "While it's true that costs are high initially, we must consider long-term savings." },
                { phrase: "That may be the case, but...", ru: "Возможно это так, но...", example: "That may be the case, but the benefits far outweigh the risks." },
                { phrase: "I understand the concern, however...", ru: "Я понимаю эти опасения, однако...", example: "I understand the concern, however the data tells a different story." },
                { phrase: "This argument overlooks the fact that...", ru: "Этот аргумент упускает тот факт, что...", example: "This argument overlooks the fact that technology has evolved significantly." },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/50 border border-white/15 p-5">
                  <p className="font-semibold text-zinc-800 mb-1">{item.phrase}</p>
                  <p className="text-zinc-500 text-sm mb-3">{item.ru}</p>
                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                    <p className="text-zinc-700 text-sm italic">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 7: Hedging Language
  if (step === 7) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Hedging Language</h1>
            <p className="text-zinc-500">Язык смягчения и осторожности</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <p className="text-zinc-600 mb-6">
              Hedging позволяет выражать мнение менее категорично. Это признак академической зрелости.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { en: "It could be argued that...", ru: "Можно утверждать, что..." },
                { en: "It seems likely that...", ru: "Представляется вероятным, что..." },
                { en: "This suggests that...", ru: "Это указывает на то, что..." },
                { en: "There is a tendency to...", ru: "Существует тенденция к..." },
                { en: "To some extent...", ru: "В некоторой степени..." },
                { en: "It might be worth considering...", ru: "Возможно, стоит рассмотреть..." },
                { en: "One possible explanation is...", ru: "Одно из возможных объяснений..." },
                { en: "Evidence appears to suggest...", ru: "Данные, по-видимому, указывают..." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/50 border border-white/10">
                  <p className="font-medium text-zinc-800 text-sm">{item.en}</p>
                  <p className="text-zinc-500 text-xs mt-1">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="font-semibold text-zinc-800 mb-3">Сравните:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                <p className="text-xs text-red-600 mb-1">Слишком категорично ✗</p>
                <p className="text-zinc-700 text-sm">This proves that the theory is correct.</p>
                <p className="text-zinc-500 text-xs mt-1">Это доказывает, что теория верна.</p>
              </div>
              <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                <p className="text-xs text-green-600 mb-1">С hedging ✓</p>
                <p className="text-zinc-700 text-sm">This evidence suggests that the theory may be valid.</p>
                <p className="text-zinc-500 text-xs mt-1">Эти данные указывают, что теория может быть верна.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 8: Форматы дебатов
  if (step === 8) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Debate Formats</h1>
            <p className="text-zinc-500">Популярные форматы дебатов</p>
          </div>

          <div className="space-y-4">
            {[
              { name: "Oxford-Style Debate", nameRu: "Оксфордский формат", desc: "Формальный формат с голосованием аудитории до и после дебатов.", structure: "Opening → Rebuttals → Q&A → Closing" },
              { name: "Parliamentary Debate", nameRu: "Парламентские дебаты", desc: "Основан на британской парламентской традиции. Две команды: Government и Opposition.", structure: "Prime Minister → Opposition → Members → Summaries" },
              { name: "Lincoln-Douglas Debate", nameRu: "Дебаты Линкольна-Дугласа", desc: "Один на один. Фокус на ценностях и философских вопросах.", structure: "Affirmative → Cross-exam → Negative → Rebuttals" },
              { name: "Policy Debate", nameRu: "Политические дебаты", desc: "Обсуждение конкретной политики. Требует глубокого исследования.", structure: "Constructives → Cross-exams → Rebuttals" },
            ].map((format, i) => (
              <div key={i} className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">{i + 1}</div>
                  <div>
                    <h3 className="font-semibold text-zinc-800">{format.name}</h3>
                    <p className="text-zinc-500 text-sm">{format.nameRu}</p>
                  </div>
                </div>
                <p className="text-zinc-600 text-sm mb-3">{format.desc}</p>
                <div className="bg-white/50 rounded-xl p-3 border border-white/10">
                  <p className="text-xs text-zinc-500 mb-1">Структура:</p>
                  <p className="text-zinc-700 text-sm font-mono">{format.structure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // STEP 9: Убедительные фразы
  if (step === 9) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Persuasive Phrases</h1>
            <p className="text-zinc-500">Фразы для убеждения</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="space-y-3">
              {[
                { en: "It stands to reason that...", ru: "Логично предположить, что..." },
                { en: "The evidence speaks for itself.", ru: "Факты говорят сами за себя." },
                { en: "It would be naive to ignore...", ru: "Было бы наивно игнорировать..." },
                { en: "One cannot deny that...", ru: "Нельзя отрицать, что..." },
                { en: "The facts clearly demonstrate...", ru: "Факты ясно показывают..." },
                { en: "This brings us to the crucial point...", ru: "Это приводит нас к ключевому моменту..." },
                { en: "Let me illustrate this with an example.", ru: "Позвольте проиллюстрировать примером." },
                { en: "The bottom line is...", ru: "Суть в том, что..." },
                { en: "It is worth noting that...", ru: "Стоит отметить, что..." },
                { en: "The implications of this are significant.", ru: "Последствия этого значительны." },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/50 border border-white/10 hover:bg-white/70 transition-all">
                  <span className="font-medium text-zinc-800">{item.en}</span>
                  <span className="text-zinc-500 text-sm">{item.ru}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 10: Тест
  if (step === 10) {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
      { q: "Какая структура аргумента считается классической?", options: ["A-B-C", "C-E-I", "P-E-E", "I-D-E"], correct: "C-E-I" },
      { q: "Какое слово лучше всего подходит для контраргумента?", options: ["Furthermore", "However", "Therefore", "Finally"], correct: "However" },
      { q: "Что такое 'hedging' в дебатах?", options: ["Агрессивная атака", "Смягчение высказываний", "Громкий голос", "Игнорирование вопросов"], correct: "Смягчение высказываний" },
      { q: "Какая фраза выражает вежливое несогласие?", options: ["You're wrong!", "I see your point, but...", "That's ridiculous!", "No way!"], correct: "I see your point, but..." },
    ];

    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Quiz</h1>
            <p className="text-zinc-500">Проверьте свои знания</p>
          </div>

          <div className="space-y-6">
            {questions.map((q, i) => (
              <div key={i} className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                <p className="font-semibold text-zinc-800 mb-4">{i + 1}. {q.q}</p>
                <div className="space-y-2">
                  {q.options.map((opt, j) => {
                    const isSelected = answers[i] === opt;
                    const isCorrect = opt === q.correct;
                    let bg = "bg-white/50";
                    if (showResults) {
                      if (isCorrect) bg = "bg-green-100 border-green-200";
                      else if (isSelected && !isCorrect) bg = "bg-red-100 border-red-200";
                    }
                    return (
                      <button
                        key={j}
                        onClick={() => !showResults && setAnswers({ ...answers, [i]: opt })}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${bg} ${isSelected ? "ring-2 ring-indigo-400" : "border-white/10"}`}
                      >
                        <span className="text-zinc-700">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {!showResults && (
            <button onClick={() => setShowResults(true)} className="w-full py-4 rounded-2xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all shadow-lg">
              Проверить ответы
            </button>
          )}

          {showResults && (
            <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <p className="text-2xl font-semibold text-zinc-800 mb-2">
                Результат: {questions.filter((q, i) => answers[i] === q.correct).length} / {questions.length}
              </p>
              <p className="text-zinc-500">
                {questions.filter((q, i) => answers[i] === q.correct).length === questions.length
                  ? "Отлично! Вы освоили материал!"
                  : "Повторите материал и попробуйте снова!"}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
