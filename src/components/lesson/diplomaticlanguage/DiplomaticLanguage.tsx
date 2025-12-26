"use client";

import { useState } from "react";

interface Props {
  step: number;
}

export default function DiplomaticLanguage({ step }: Props) {
  // STEP 1: Введение
  if (step === 1) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <span className="text-4xl">🤝</span>
            </div>
            <h1 className="text-4xl font-semibold mb-3 text-zinc-800">Diplomatic Language</h1>
            <p className="text-lg text-zinc-500">Искусство тактичной коммуникации</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl font-semibold text-zinc-800 mb-4">Что такое дипломатичный язык?</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Дипломатичный язык — это способ общения, который позволяет передавать сложные сообщения,
              сохраняя вежливость и уважение. Он смягчает прямолинейность, не теряя ясности.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-red-50 border border-red-100 p-5">
                <h3 className="font-medium text-zinc-700 mb-2">Прямо (Blunt)</h3>
                <p className="text-zinc-600 text-sm italic">"You're wrong."</p>
                <p className="text-zinc-600 text-sm italic">"No."</p>
                <p className="text-zinc-600 text-sm italic">"That's a bad idea."</p>
              </div>
              <div className="rounded-2xl bg-green-50 border border-green-100 p-5">
                <h3 className="font-medium text-zinc-700 mb-2">Дипломатично (Tactful)</h3>
                <p className="text-zinc-600 text-sm italic">"I see it differently."</p>
                <p className="text-zinc-600 text-sm italic">"I'm afraid that won't be possible."</p>
                <p className="text-zinc-600 text-sm italic">"Perhaps we could explore other options."</p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-semibold text-zinc-800 mb-4">Зачем использовать?</h2>
            <div className="space-y-3">
              {[
                { title: "Сохранение отношений", desc: "Поддерживайте связи даже при несогласии" },
                { title: "Снижение конфликтов", desc: "Смягчайте потенциально острые моменты" },
                { title: "Профессионализм", desc: "Демонстрируйте эмоциональный интеллект" },
                { title: "Достижение целей", desc: "Люди более восприимчивы к дипломатичным просьбам" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm">{i + 1}</div>
                  <div>
                    <h3 className="font-medium text-zinc-800">{item.title}</h3>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 2: Смягчение плохих новостей
  if (step === 2) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Softening Bad News</h1>
            <p className="text-zinc-500">Как смягчать плохие новости</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="space-y-4">
              {[
                {
                  phrase: "I'm afraid...",
                  ru: "Боюсь, что... / К сожалению...",
                  examples: ["I'm afraid we won't be able to meet the deadline.", "I'm afraid the position has been filled."],
                  note: "Самый распространённый смягчитель в британском английском"
                },
                {
                  phrase: "Unfortunately...",
                  ru: "К сожалению...",
                  examples: ["Unfortunately, we cannot offer a refund.", "Unfortunately, your application was not successful."],
                  note: "Нейтральный, широко используется в формальных контекстах"
                },
                {
                  phrase: "I regret to inform you...",
                  ru: "С сожалением сообщаю...",
                  examples: ["I regret to inform you that your contract will not be renewed.", "We regret to inform you that the event has been postponed."],
                  note: "Очень формальный, для официальных сообщений"
                },
                {
                  phrase: "I'm sorry to say...",
                  ru: "Мне жаль сообщать...",
                  examples: ["I'm sorry to say that we've had to make some budget cuts.", "I'm sorry to say, but the project has been put on hold."],
                  note: "Личный и эмпатичный, хорош для личного общения"
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/50 border border-white/15 p-6">
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">{item.phrase}</h3>
                  <p className="text-zinc-500 text-sm mb-3">{item.ru}</p>
                  <div className="space-y-2 mb-3">
                    {item.examples.map((ex, j) => (
                      <p key={j} className="text-zinc-600 pl-4 border-l-2 border-indigo-200 text-sm">{ex}</p>
                    ))}
                  </div>
                  <p className="text-zinc-400 text-xs italic">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 3: Вежливое несогласие
  if (step === 3) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Polite Disagreement</h1>
            <p className="text-zinc-500">Как вежливо выражать несогласие</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="space-y-3">
              {[
                { en: "With all due respect...", ru: "При всём уважении...", example: "With all due respect, I believe we should consider other options." },
                { en: "I see your point, however...", ru: "Я понимаю вашу точку зрения, однако...", example: "I see your point, however, the data suggests otherwise." },
                { en: "I'm not entirely sure I agree...", ru: "Не уверен, что я полностью согласен...", example: "I'm not entirely sure I agree with that assessment." },
                { en: "I take a slightly different view...", ru: "У меня немного другая точка зрения...", example: "I take a slightly different view on this matter." },
                { en: "That's one way of looking at it...", ru: "Это один из взглядов на вопрос...", example: "That's one way of looking at it, but we might also consider..." },
                { en: "I can see where you're coming from, but...", ru: "Я понимаю, откуда вы исходите, но...", example: "I can see where you're coming from, but I have some concerns." },
                { en: "I appreciate your perspective, however...", ru: "Я ценю вашу точку зрения, однако...", example: "I appreciate your perspective, however, I'd like to suggest an alternative." },
                { en: "I'm afraid I see it differently...", ru: "Боюсь, я вижу это иначе...", example: "I'm afraid I see it differently in this particular case." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-white/50 border border-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-semibold text-xs shrink-0">{i + 1}</div>
                    <div>
                      <p className="font-semibold text-zinc-800">{item.en}</p>
                      <p className="text-zinc-500 text-sm mb-2">{item.ru}</p>
                      <p className="text-zinc-600 text-sm italic bg-amber-50 rounded-lg p-2 border border-amber-100">"{item.example}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-amber-50 border border-amber-100 p-6">
            <h3 className="font-semibold text-zinc-800 mb-2">⚠️ Осторожно: "With all due respect"</h3>
            <p className="text-zinc-600 text-sm">
              Эта фраза часто воспринимается как сигнал, что следующее высказывание будет критичным.
              Используйте осторожно или выбирайте более мягкие альтернативы.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // STEP 4: Вежливые просьбы
  if (step === 4) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Making Polite Requests</h1>
            <p className="text-zinc-500">Как вежливо просить</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="font-semibold text-zinc-800 mb-4">Шкала вежливости</h3>
            <div className="space-y-3">
              {[
                { level: "Прямо", phrase: "Give me the report.", formality: 1 },
                { level: "Вежливо", phrase: "Can you give me the report?", formality: 2 },
                { level: "Более вежливо", phrase: "Could you give me the report?", formality: 3 },
                { level: "Дипломатично", phrase: "Would you mind giving me the report?", formality: 4 },
                { level: "Очень дипломатично", phrase: "I was wondering if you could possibly give me the report?", formality: 5 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-white/10">
                  <div className="w-28 text-zinc-500 text-sm">{item.level}</div>
                  <div className="flex-1 text-zinc-700">{item.phrase}</div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div key={j} className={`w-2 h-5 rounded-full ${j < item.formality ? "bg-indigo-400" : "bg-zinc-200"}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="font-semibold text-zinc-800 mb-4">Ключевые конструкции</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { structure: "I was wondering if...", ru: "Мне интересно, не могли бы вы...", examples: ["I was wondering if you could help me.", "I was wondering if it would be possible to reschedule."] },
                { structure: "Would it be possible to...?", ru: "Было бы возможно...?", examples: ["Would it be possible to extend the deadline?", "Would it be possible to arrange a meeting?"] },
                { structure: "I'd be grateful if...", ru: "Я был бы благодарен, если бы...", examples: ["I'd be grateful if you could review this.", "I'd be grateful if you could let me know."] },
                { structure: "Would you mind...?", ru: "Вы не возражаете...?", examples: ["Would you mind sending me the details?", "Would you mind if I left early today?"] },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/50 border border-white/15 p-5">
                  <h4 className="font-semibold text-zinc-800 mb-1">{item.structure}</h4>
                  <p className="text-zinc-500 text-sm mb-3">{item.ru}</p>
                  {item.examples.map((ex, j) => (
                    <p key={j} className="text-zinc-600 text-sm italic">"{ex}"</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 5: Дипломатичная критика
  if (step === 5) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Giving Diplomatic Criticism</h1>
            <p className="text-zinc-500">Как давать дипломатичную критику</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="space-y-4">
              {[
                { direct: "This is wrong.", diplomatic: "There might be room for adjustment here.", technique: "Замена негатива на возможность" },
                { direct: "You made a mistake.", diplomatic: "Perhaps we could review this section.", technique: "Использование 'we' для разделения ответственности" },
                { direct: "This doesn't work.", diplomatic: "It might be worth reconsidering this approach.", technique: "Смягчение с помощью 'might'" },
                { direct: "You need to improve.", diplomatic: "There's an opportunity to develop further.", technique: "Формулировка как возможность" },
                { direct: "The report is poorly written.", diplomatic: "The report could benefit from some refinement.", technique: "Фокус на потенциале улучшения" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/50 border border-white/15 p-5">
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="p-3 rounded-lg bg-red-50 border border-red-100">
                      <span className="text-red-600 text-xs uppercase">Прямо</span>
                      <p className="text-zinc-700 mt-1">{item.direct}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50 border border-green-100">
                      <span className="text-green-600 text-xs uppercase">Дипломатично</span>
                      <p className="text-zinc-700 mt-1">{item.diplomatic}</p>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-sm"><span className="font-medium">Техника:</span> {item.technique}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 6: Вежливый отказ
  if (step === 6) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Declining Gracefully</h1>
            <p className="text-zinc-500">Как вежливо отказывать</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="space-y-3">
              {[
                { phrase: "I appreciate the offer, but...", ru: "Я ценю предложение, но...", example: "I appreciate the offer, but I'm afraid I'm already committed that day." },
                { phrase: "That's very kind of you, however...", ru: "Это очень любезно с вашей стороны, однако...", example: "That's very kind of you, however I must respectfully decline." },
                { phrase: "I'm afraid that won't be possible...", ru: "Боюсь, это не получится...", example: "I'm afraid that won't be possible given our current constraints." },
                { phrase: "I wish I could, but...", ru: "Хотел бы, но...", example: "I wish I could help, but my schedule is completely full." },
                { phrase: "Unfortunately, I'm not in a position to...", ru: "К сожалению, я не в состоянии...", example: "Unfortunately, I'm not in a position to take on additional work right now." },
                { phrase: "As much as I'd like to...", ru: "Как бы мне ни хотелось...", example: "As much as I'd like to attend, I have a prior engagement." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-white/50 border border-white/10 p-4">
                  <p className="font-semibold text-zinc-800">{item.phrase}</p>
                  <p className="text-zinc-500 text-sm mb-2">{item.ru}</p>
                  <p className="text-zinc-600 text-sm italic bg-indigo-50 rounded-lg p-2 border border-indigo-100">"{item.example}"</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="font-semibold text-zinc-800 mb-3">Формула мягкого отказа</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/50 border border-white/10 text-center">
                <div className="text-indigo-500 text-sm mb-2">1. Признание</div>
                <p className="text-zinc-700 text-sm">"Thank you for thinking of me..."</p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 border border-white/10 text-center">
                <div className="text-indigo-500 text-sm mb-2">2. Отказ</div>
                <p className="text-zinc-700 text-sm">"Unfortunately, I'm unable to..."</p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 border border-white/10 text-center">
                <div className="text-indigo-500 text-sm mb-2">3. Альтернатива</div>
                <p className="text-zinc-700 text-sm">"Perhaps [name] could help..."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 7: Формальные извинения
  if (step === 7) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Formal Apologies</h1>
            <p className="text-zinc-500">Профессиональные способы выразить сожаление</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="font-semibold text-zinc-800 mb-4">Уровни извинений</h3>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/50 border border-white/15 p-5">
                <h4 className="text-zinc-700 mb-3 font-medium">Лёгкие (мелкие проблемы)</h4>
                <div className="space-y-2">
                  {["Sorry about that.", "My apologies.", "Apologies for any inconvenience."].map((p, i) => (
                    <p key={i} className="text-zinc-600 pl-4 border-l-2 border-zinc-200">{p}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/50 border border-white/15 p-5">
                <h4 className="text-zinc-700 mb-3 font-medium">Средние (профессиональный контекст)</h4>
                <div className="space-y-2">
                  {["I do apologize for any inconvenience caused.", "Please accept my apologies for the delay.", "I'm terribly sorry for the misunderstanding."].map((p, i) => (
                    <p key={i} className="text-zinc-600 pl-4 border-l-2 border-amber-200">{p}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/50 border border-white/15 p-5">
                <h4 className="text-zinc-700 mb-3 font-medium">Формальные (серьёзные ситуации)</h4>
                <div className="space-y-2">
                  {["Please accept our sincere apologies for this oversight.", "We deeply regret any inconvenience this may have caused.", "I take full responsibility and offer my sincere apologies."].map((p, i) => (
                    <p key={i} className="text-zinc-600 pl-4 border-l-2 border-red-200">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 8: Выражение неуверенности
  if (step === 8) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Expressing Uncertainty</h1>
            <p className="text-zinc-500">Дипломатичное выражение неуверенности</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { category: "Личная неуверенность", phrases: [
                  { en: "I'm not entirely certain, but...", ru: "Я не совсем уверен, но..." },
                  { en: "If I'm not mistaken...", ru: "Если я не ошибаюсь..." },
                  { en: "I could be wrong, but...", ru: "Возможно, я ошибаюсь, но..." },
                ]},
                { category: "Смягчение фактов", phrases: [
                  { en: "It would appear that...", ru: "По всей видимости..." },
                  { en: "Evidence suggests that...", ru: "Данные указывают на то, что..." },
                  { en: "It seems likely that...", ru: "Кажется вероятным, что..." },
                ]},
                { category: "Осторожные предположения", phrases: [
                  { en: "It could be argued that...", ru: "Можно утверждать, что..." },
                  { en: "One might say that...", ru: "Можно сказать, что..." },
                  { en: "It's possible that...", ru: "Возможно, что..." },
                ]},
                { category: "Ограничение утверждений", phrases: [
                  { en: "To some extent...", ru: "В некоторой степени..." },
                  { en: "In certain circumstances...", ru: "В определённых обстоятельствах..." },
                  { en: "Generally speaking...", ru: "В целом..." },
                ]},
              ].map((group, i) => (
                <div key={i} className="rounded-2xl bg-white/50 border border-white/15 p-5">
                  <h4 className="font-medium text-zinc-800 mb-3">{group.category}</h4>
                  <div className="space-y-2">
                    {group.phrases.map((p, j) => (
                      <div key={j} className="text-sm">
                        <p className="text-zinc-700">{p.en}</p>
                        <p className="text-zinc-500 text-xs">{p.ru}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 9: Бизнес-контексты
  if (step === 9) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-semibold text-zinc-800 mb-2">Business Contexts</h1>
            <p className="text-zinc-500">Практические примеры для бизнеса</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="font-semibold text-zinc-800 mb-4">Просьба о продлении дедлайна</h3>
            <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-100 font-mono text-sm">
              <p className="text-zinc-600">Dear Mr. Johnson,</p>
              <br />
              <p className="text-zinc-700">I hope this email finds you well. <span className="bg-yellow-100 px-1">I was wondering if it might be possible</span> to discuss the timeline for the Henderson project.</p>
              <br />
              <p className="text-zinc-700"><span className="bg-yellow-100 px-1">Due to some unforeseen circumstances</span>, we've encountered a few challenges that <span className="bg-yellow-100 px-1">may require</span> a brief extension.</p>
              <br />
              <p className="text-zinc-700"><span className="bg-yellow-100 px-1">I'd be grateful if</span> we could schedule a brief call to explore options.</p>
              <br />
              <p className="text-zinc-600">Best regards</p>
            </div>
            <p className="text-zinc-500 text-sm mt-3">Выделены дипломатичные конструкции</p>
          </div>

          <div className="rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/20 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <h3 className="font-semibold text-zinc-800 mb-4">Фразы для совещаний</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { situation: "Вежливое прерывание", phrase: "Sorry to interject, but..." },
                { situation: "Перенаправление", phrase: "Perhaps we could come back to..." },
                { situation: "Уточнение", phrase: "Would you mind elaborating on...?" },
                { situation: "Сомнение", phrase: "I'm not entirely convinced that..." },
                { situation: "Компромисс", phrase: "What if we were to consider...?" },
                { situation: "Закрытие темы", phrase: "Perhaps we should table this for now..." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/50 border border-white/10">
                  <p className="text-zinc-500 text-xs mb-1">{item.situation}</p>
                  <p className="text-zinc-700 font-medium">"{item.phrase}"</p>
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
      { q: "Какая фраза используется для смягчения плохих новостей?", options: ["Listen!", "I'm afraid...", "You must...", "Obviously..."], correct: "I'm afraid..." },
      { q: "Как вежливо выразить несогласие?", options: ["You're wrong!", "I see your point, but...", "No way!", "That's stupid!"], correct: "I see your point, but..." },
      { q: "Какая структура для вежливой просьбы?", options: ["Give me that!", "I was wondering if...", "You should...", "I demand..."], correct: "I was wondering if..." },
      { q: "Как начать формальное извинение?", options: ["Whatever!", "Please accept my apologies...", "It's not my fault!", "Who cares?"], correct: "Please accept my apologies..." },
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
                  ? "Отлично! Вы освоили дипломатичный язык!"
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
