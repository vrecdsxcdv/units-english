"use client";

import { useState } from "react";
import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

// Speech Bubble Component
function SpeechBubble({
  text,
  speaker,
  type,
  translation,
}: {
  text: string;
  speaker: string;
  type: "opinion" | "agree" | "disagree" | "partial";
  translation: string;
}) {
  const [showTranslation, setShowTranslation] = useState(false);

  const colors = {
    opinion: "from-blue-50 to-indigo-50 border-blue-200",
    agree: "from-green-50 to-emerald-50 border-green-200",
    disagree: "from-red-50 to-rose-50 border-red-200",
    partial: "from-amber-50 to-yellow-50 border-amber-200",
  };

  const icons = {
    opinion: "💭",
    agree: "✅",
    disagree: "❌",
    partial: "🤔",
  };

  return (
    <div
      className={`relative bg-gradient-to-br ${colors[type]} border-2 rounded-2xl p-4 cursor-pointer transition-all hover:shadow-md`}
      onClick={() => setShowTranslation(!showTranslation)}
    >
      <div className="absolute -top-3 -left-2 text-2xl">{icons[type]}</div>
      <div className="text-xs text-slate-500 mb-1 ml-6">{speaker}</div>
      <p className="text-slate-800 font-medium">{text}</p>
      {showTranslation && (
        <p className="text-sm text-slate-500 mt-2 pt-2 border-t border-slate-200">
          {translation}
        </p>
      )}
    </div>
  );
}

// Phrase Card with strength meter
function PhraseCard({
  phrase,
  meaning,
  strength,
  example,
  category,
}: {
  phrase: string;
  meaning: string;
  strength: 1 | 2 | 3 | 4 | 5;
  example: string;
  category: "formal" | "neutral" | "informal";
}) {
  const [expanded, setExpanded] = useState(false);

  const categoryColors = {
    formal: "bg-purple-100 text-purple-700",
    neutral: "bg-slate-100 text-slate-700",
    informal: "bg-orange-100 text-orange-700",
  };

  const categoryLabels = {
    formal: "Formal",
    neutral: "Neutral",
    informal: "Informal",
  };

  return (
    <div
      className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-slate-800">{phrase}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[category]}`}>
          {categoryLabels[category]}
        </span>
      </div>

      <div className="flex items-center gap-1 mb-2">
        <span className="text-xs text-slate-500 mr-2">Сила:</span>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-4 h-2 rounded-full ${
              i <= strength ? "bg-indigo-500" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-slate-600">{meaning}</p>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-slate-100">
          <p className="text-sm text-slate-500 italic">&quot;{example}&quot;</p>
        </div>
      )}
    </div>
  );
}

// Dialogue Exchange Component
function DialogueExchange({
  exchanges,
}: {
  exchanges: Array<{
    speaker: string;
    text: string;
    type: "opinion" | "agree" | "disagree" | "partial";
  }>;
}) {
  return (
    <div className="space-y-3">
      {exchanges.map((ex, idx) => (
        <div
          key={idx}
          className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div
            className={`max-w-[80%] rounded-2xl p-3 ${
              ex.type === "agree"
                ? "bg-green-50 border border-green-200"
                : ex.type === "disagree"
                ? "bg-red-50 border border-red-200"
                : ex.type === "partial"
                ? "bg-amber-50 border border-amber-200"
                : "bg-blue-50 border border-blue-200"
            }`}
          >
            <div className="text-xs text-slate-500 mb-1">{ex.speaker}</div>
            <p className="text-slate-800">{ex.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Strength Scale Component
function StrengthScale({
  phrases,
  label,
  color,
}: {
  phrases: Array<{ phrase: string; translation: string }>;
  label: string;
  color: "green" | "red" | "blue";
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const colors = {
    green: { bg: "bg-green-500", light: "bg-green-100", text: "text-green-700" },
    red: { bg: "bg-red-500", light: "bg-red-100", text: "text-red-700" },
    blue: { bg: "bg-blue-500", light: "bg-blue-100", text: "text-blue-700" },
  };

  return (
    <div className={`${colors[color].light} rounded-xl p-4`}>
      <h4 className={`font-bold ${colors[color].text} mb-3`}>{label}</h4>
      <div className="flex items-center justify-between gap-1 mb-2">
        <span className="text-xs text-slate-500">Слабее</span>
        <span className="text-xs text-slate-500">Сильнее</span>
      </div>
      <div className="flex gap-2">
        {phrases.map((p, idx) => (
          <div
            key={idx}
            className="flex-1 text-center cursor-pointer"
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={`h-2 rounded-full mb-2 transition-all ${
                activeIndex !== null && idx <= activeIndex
                  ? colors[color].bg
                  : "bg-white/50"
              }`}
            />
            <span
              className={`text-xs ${
                activeIndex === idx ? colors[color].text + " font-bold" : "text-slate-600"
              }`}
            >
              {p.phrase}
            </span>
            {activeIndex === idx && (
              <div className="text-xs text-slate-500 mt-1">{p.translation}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ STEP COMPONENTS ============

function Step1() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Giving Opinions & Agreeing/Disagreeing</h2>
        <p className="text-indigo-100">
          Мнения, согласие и несогласие — 100+ выражений для дискуссий
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Зачем это нужно?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🗣️</div>
            <h4 className="font-bold text-blue-800">Дискуссии</h4>
            <p className="text-sm text-blue-600">Обсуждение тем на работе и в жизни</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🤝</div>
            <h4 className="font-bold text-green-800">Переговоры</h4>
            <p className="text-sm text-green-600">Умение дипломатично возражать</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📝</div>
            <h4 className="font-bold text-purple-800">Экзамены</h4>
            <p className="text-sm text-purple-600">IELTS, FCE, CAE Speaking</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Что мы изучим:</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Выражение мнения (нейтральное, сильное, осторожное)",
            "Полное согласие (от мягкого до абсолютного)",
            "Частичное согласие (да, но...)",
            "Вежливое несогласие",
            "Сильное несогласие",
            "Запрос мнения других",
            "Уточнение позиции",
            "Смягчение высказываний",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-slate-500 text-sm">
        Нажимайте на карточки для дополнительной информации →
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">💭 Выражение мнения — Neutral</h2>
        <p className="text-blue-100">Нейтральные фразы для начала высказывания</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="I think that..."
          meaning="Я думаю, что..."
          strength={2}
          example="I think that working from home is more productive."
          category="neutral"
        />
        <PhraseCard
          phrase="In my opinion..."
          meaning="По моему мнению..."
          strength={3}
          example="In my opinion, we should focus on quality."
          category="neutral"
        />
        <PhraseCard
          phrase="I believe that..."
          meaning="Я считаю, что..."
          strength={3}
          example="I believe that education is the key to success."
          category="neutral"
        />
        <PhraseCard
          phrase="It seems to me that..."
          meaning="Мне кажется, что..."
          strength={2}
          example="It seems to me that prices are too high."
          category="neutral"
        />
        <PhraseCard
          phrase="From my point of view..."
          meaning="С моей точки зрения..."
          strength={3}
          example="From my point of view, this is the best option."
          category="formal"
        />
        <PhraseCard
          phrase="As far as I'm concerned..."
          meaning="Что касается меня..."
          strength={3}
          example="As far as I'm concerned, the matter is closed."
          category="formal"
        />
      </div>

      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
        <h4 className="font-bold text-amber-800 mb-2">💡 Подсказка</h4>
        <p className="text-amber-700 text-sm">
          Эти фразы можно использовать в любой ситуации — на работе, в учёбе, в разговоре с друзьями.
          Они не звучат ни слишком формально, ни слишком небрежно.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-slate-800">Примеры в контексте:</h3>
        <SpeechBubble
          text="I think that online meetings save a lot of time."
          speaker="Manager"
          type="opinion"
          translation="Я думаю, что онлайн-встречи экономят много времени."
        />
        <SpeechBubble
          text="In my opinion, we need to hire more developers."
          speaker="Team Lead"
          type="opinion"
          translation="По моему мнению, нам нужно нанять больше разработчиков."
        />
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">💪 Выражение мнения — Strong</h2>
        <p className="text-indigo-100">Сильные фразы для убедительных высказываний</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="I'm convinced that..."
          meaning="Я убеждён, что..."
          strength={5}
          example="I'm convinced that this strategy will work."
          category="formal"
        />
        <PhraseCard
          phrase="I'm absolutely certain that..."
          meaning="Я абсолютно уверен, что..."
          strength={5}
          example="I'm absolutely certain that he's telling the truth."
          category="formal"
        />
        <PhraseCard
          phrase="I strongly believe that..."
          meaning="Я твёрдо верю, что..."
          strength={5}
          example="I strongly believe that climate change is real."
          category="formal"
        />
        <PhraseCard
          phrase="There's no doubt in my mind that..."
          meaning="У меня нет сомнений, что..."
          strength={5}
          example="There's no doubt in my mind that she's the best candidate."
          category="formal"
        />
        <PhraseCard
          phrase="I'm positive that..."
          meaning="Я уверен, что..."
          strength={4}
          example="I'm positive that we can finish on time."
          category="neutral"
        />
        <PhraseCard
          phrase="I firmly believe that..."
          meaning="Я твёрдо убеждён, что..."
          strength={5}
          example="I firmly believe that honesty is the best policy."
          category="formal"
        />
      </div>

      <StrengthScale
        label="Шкала убеждённости"
        color="blue"
        phrases={[
          { phrase: "I think", translation: "думаю" },
          { phrase: "I believe", translation: "считаю" },
          { phrase: "I'm sure", translation: "уверен" },
          { phrase: "I'm convinced", translation: "убеждён" },
          { phrase: "I'm certain", translation: "абсолютно уверен" },
        ]}
      />

      <div className="bg-red-50 rounded-xl p-4 border border-red-200">
        <h4 className="font-bold text-red-800 mb-2">⚠️ Осторожно!</h4>
        <p className="text-red-700 text-sm">
          Сильные фразы следует использовать обдуманно. Если вы слишком часто говорите
          &quot;I&apos;m absolutely certain&quot;, это может звучать агрессивно или высокомерно.
        </p>
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">🤔 Выражение мнения — Tentative</h2>
        <p className="text-slate-200">Осторожные, неуверенные высказывания</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="I tend to think that..."
          meaning="Я склонен думать, что..."
          strength={2}
          example="I tend to think that the plan needs more work."
          category="formal"
        />
        <PhraseCard
          phrase="I'm inclined to believe that..."
          meaning="Я склоняюсь к тому, что..."
          strength={2}
          example="I'm inclined to believe that he's right."
          category="formal"
        />
        <PhraseCard
          phrase="I suppose that..."
          meaning="Полагаю, что..."
          strength={1}
          example="I suppose that we could try a different approach."
          category="neutral"
        />
        <PhraseCard
          phrase="I guess..."
          meaning="Наверное... / Думаю..."
          strength={1}
          example="I guess it's worth considering."
          category="informal"
        />
        <PhraseCard
          phrase="It could be argued that..."
          meaning="Можно утверждать, что..."
          strength={2}
          example="It could be argued that technology has both pros and cons."
          category="formal"
        />
        <PhraseCard
          phrase="Perhaps..."
          meaning="Возможно..."
          strength={1}
          example="Perhaps we should reconsider our decision."
          category="neutral"
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
        <h4 className="font-bold text-blue-800 mb-2">🎯 Когда использовать?</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Когда вы не уверены на 100%</li>
          <li>• Когда тема деликатная</li>
          <li>• Когда хотите оставить место для дискуссии</li>
          <li>• В академическом письме (эссе, научные работы)</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-slate-800">Сравните:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-lg p-3 border border-red-200">
            <span className="text-red-600 font-bold">Too strong:</span>
            <p className="text-slate-700">&quot;This is definitely wrong.&quot;</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <span className="text-green-600 font-bold">Better:</span>
            <p className="text-slate-700">&quot;I tend to think this might not be the best approach.&quot;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">✅ Полное согласие — Strong Agreement</h2>
        <p className="text-green-100">Когда вы полностью согласны с собеседником</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="I completely agree."
          meaning="Я полностью согласен."
          strength={5}
          example="I completely agree. We need to act now."
          category="neutral"
        />
        <PhraseCard
          phrase="I couldn't agree more."
          meaning="Абсолютно согласен. (букв. не мог бы согласиться больше)"
          strength={5}
          example="I couldn't agree more with your assessment."
          category="formal"
        />
        <PhraseCard
          phrase="Absolutely!"
          meaning="Абсолютно! / Точно!"
          strength={5}
          example="Absolutely! That's exactly what I was thinking."
          category="informal"
        />
        <PhraseCard
          phrase="Exactly!"
          meaning="Именно! / Точно!"
          strength={5}
          example="Exactly! You've hit the nail on the head."
          category="informal"
        />
        <PhraseCard
          phrase="That's precisely what I think."
          meaning="Это именно то, что я думаю."
          strength={5}
          example="That's precisely what I think about the situation."
          category="formal"
        />
        <PhraseCard
          phrase="You're absolutely right."
          meaning="Вы абсолютно правы."
          strength={5}
          example="You're absolutely right. We should have done this earlier."
          category="neutral"
        />
      </div>

      <StrengthScale
        label="Шкала согласия"
        color="green"
        phrases={[
          { phrase: "I agree", translation: "согласен" },
          { phrase: "That's right", translation: "верно" },
          { phrase: "Exactly", translation: "именно" },
          { phrase: "Absolutely", translation: "абсолютно" },
          { phrase: "I couldn't agree more", translation: "полностью согласен" },
        ]}
      />

      <div className="space-y-3">
        <h3 className="font-bold text-slate-800">Диалог:</h3>
        <DialogueExchange
          exchanges={[
            { speaker: "A", text: "I think we should postpone the launch until next month.", type: "opinion" },
            { speaker: "B", text: "I couldn't agree more. We're not ready yet.", type: "agree" },
            { speaker: "A", text: "And we need more time for testing.", type: "opinion" },
            { speaker: "B", text: "Exactly! Quality should come first.", type: "agree" },
          ]}
        />
      </div>
    </div>
  );
}

function Step6() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">👍 Согласие — Mild Agreement</h2>
        <p className="text-teal-100">Мягкое, спокойное согласие</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="I agree."
          meaning="Я согласен."
          strength={3}
          example="I agree. It's a reasonable suggestion."
          category="neutral"
        />
        <PhraseCard
          phrase="That's true."
          meaning="Это правда."
          strength={3}
          example="That's true. I hadn't thought of it that way."
          category="neutral"
        />
        <PhraseCard
          phrase="You have a point."
          meaning="В этом есть смысл."
          strength={3}
          example="You have a point. Let me think about it."
          category="neutral"
        />
        <PhraseCard
          phrase="That makes sense."
          meaning="Это имеет смысл."
          strength={3}
          example="That makes sense. I see what you mean."
          category="neutral"
        />
        <PhraseCard
          phrase="I think so too."
          meaning="Я тоже так думаю."
          strength={3}
          example="I think so too. Great minds think alike!"
          category="informal"
        />
        <PhraseCard
          phrase="Fair enough."
          meaning="Справедливо. / Ладно."
          strength={2}
          example="Fair enough. I can accept that."
          category="informal"
        />
      </div>

      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
        <h4 className="font-bold text-green-800 mb-2">🎯 Когда использовать мягкое согласие?</h4>
        <ul className="text-green-700 text-sm space-y-1">
          <li>• Когда согласны, но не полностью восторженно</li>
          <li>• Для спокойного подтверждения в разговоре</li>
          <li>• Когда хотите показать, что слушаете собеседника</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-50 rounded-xl p-4">
          <h4 className="font-bold text-slate-800 mb-2">В формальной обстановке:</h4>
          <p className="text-slate-600 italic">&quot;I agree with your analysis. The data supports your conclusion.&quot;</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <h4 className="font-bold text-slate-800 mb-2">В неформальной обстановке:</h4>
          <p className="text-slate-600 italic">&quot;Yeah, that makes sense. Let&apos;s do it your way.&quot;</p>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">🤔 Частичное согласие</h2>
        <p className="text-amber-100">Да, но... / С одной стороны... с другой стороны...</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="I agree to some extent, but..."
          meaning="Я согласен в какой-то степени, но..."
          strength={2}
          example="I agree to some extent, but we need to consider the risks."
          category="formal"
        />
        <PhraseCard
          phrase="I see your point, but..."
          meaning="Я понимаю вашу точку зрения, но..."
          strength={2}
          example="I see your point, but I think there's another way."
          category="neutral"
        />
        <PhraseCard
          phrase="That's true, but..."
          meaning="Это правда, но..."
          strength={2}
          example="That's true, but it's not the whole picture."
          category="neutral"
        />
        <PhraseCard
          phrase="You may be right, but..."
          meaning="Возможно, вы правы, но..."
          strength={2}
          example="You may be right, but I still have concerns."
          category="formal"
        />
        <PhraseCard
          phrase="I agree up to a point, however..."
          meaning="Я согласен до определённой степени, однако..."
          strength={2}
          example="I agree up to a point, however the budget is limited."
          category="formal"
        />
        <PhraseCard
          phrase="Yes, but on the other hand..."
          meaning="Да, но с другой стороны..."
          strength={2}
          example="Yes, but on the other hand, we can't ignore the competition."
          category="neutral"
        />
      </div>

      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
        <h4 className="font-bold text-amber-800 mb-2">⚡ Структура частичного согласия:</h4>
        <div className="space-y-2 text-amber-700">
          <p><strong>1.</strong> Сначала признайте точку зрения собеседника</p>
          <p><strong>2.</strong> Добавьте &quot;but&quot;, &quot;however&quot;, &quot;although&quot;</p>
          <p><strong>3.</strong> Выскажите свою оговорку или альтернативу</p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-slate-800">Диалог:</h3>
        <DialogueExchange
          exchanges={[
            { speaker: "A", text: "I think we should invest all our budget in marketing.", type: "opinion" },
            { speaker: "B", text: "I see your point, but we also need to improve our product.", type: "partial" },
            { speaker: "A", text: "You're right that product matters.", type: "agree" },
            { speaker: "B", text: "Maybe we could split the budget 50/50?", type: "opinion" },
          ]}
        />
      </div>
    </div>
  );
}

function Step8() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">🙂 Вежливое несогласие</h2>
        <p className="text-rose-100">Дипломатичные способы не согласиться</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="I'm not sure I agree with that."
          meaning="Не уверен, что согласен с этим."
          strength={2}
          example="I'm not sure I agree with that analysis."
          category="neutral"
        />
        <PhraseCard
          phrase="I see it differently."
          meaning="Я вижу это иначе."
          strength={2}
          example="I see it differently. Let me explain."
          category="neutral"
        />
        <PhraseCard
          phrase="I'm afraid I have to disagree."
          meaning="Боюсь, я должен не согласиться."
          strength={3}
          example="I'm afraid I have to disagree with your conclusion."
          category="formal"
        />
        <PhraseCard
          phrase="I respect your opinion, but..."
          meaning="Я уважаю ваше мнение, но..."
          strength={2}
          example="I respect your opinion, but I think we need more evidence."
          category="formal"
        />
        <PhraseCard
          phrase="I'm not entirely convinced that..."
          meaning="Я не совсем убеждён, что..."
          strength={2}
          example="I'm not entirely convinced that this will work."
          category="formal"
        />
        <PhraseCard
          phrase="I beg to differ."
          meaning="Позвольте не согласиться."
          strength={3}
          example="I beg to differ. The data tells a different story."
          category="formal"
        />
      </div>

      <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
        <h4 className="font-bold text-pink-800 mb-2">🎩 Техники вежливого несогласия:</h4>
        <ul className="text-pink-700 text-sm space-y-2">
          <li><strong>&quot;I&apos;m not sure...&quot;</strong> — смягчает категоричность</li>
          <li><strong>&quot;I&apos;m afraid...&quot;</strong> — показывает сожаление</li>
          <li><strong>&quot;With respect...&quot;</strong> — подчёркивает уважение к собеседнику</li>
          <li><strong>&quot;I see your point, but...&quot;</strong> — сначала признание, потом возражение</li>
        </ul>
      </div>

      <StrengthScale
        label="Шкала вежливости несогласия"
        color="red"
        phrases={[
          { phrase: "I'm not sure", translation: "не уверен" },
          { phrase: "I see it differently", translation: "вижу иначе" },
          { phrase: "I have to disagree", translation: "должен не согласиться" },
          { phrase: "I beg to differ", translation: "позвольте не согласиться" },
          { phrase: "I disagree", translation: "не согласен" },
        ]}
      />
    </div>
  );
}

function Step9() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">❌ Сильное несогласие</h2>
        <p className="text-red-100">Когда нужно решительно возразить</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="I totally disagree."
          meaning="Я полностью не согласен."
          strength={5}
          example="I totally disagree with that statement."
          category="neutral"
        />
        <PhraseCard
          phrase="I strongly disagree."
          meaning="Я категорически не согласен."
          strength={5}
          example="I strongly disagree with the proposed changes."
          category="formal"
        />
        <PhraseCard
          phrase="That's not how I see it at all."
          meaning="Я вижу это совершенно иначе."
          strength={4}
          example="That's not how I see it at all. The evidence suggests otherwise."
          category="neutral"
        />
        <PhraseCard
          phrase="I'm sorry, but that's not true."
          meaning="Простите, но это неправда."
          strength={4}
          example="I'm sorry, but that's not true. Let me show you the facts."
          category="neutral"
        />
        <PhraseCard
          phrase="I'm completely opposed to that idea."
          meaning="Я полностью против этой идеи."
          strength={5}
          example="I'm completely opposed to that idea. It's too risky."
          category="formal"
        />
        <PhraseCard
          phrase="That's out of the question."
          meaning="Это исключено. / Об этом не может быть и речи."
          strength={5}
          example="That's out of the question. We can't afford it."
          category="neutral"
        />
      </div>

      <div className="bg-red-50 rounded-xl p-4 border border-red-200">
        <h4 className="font-bold text-red-800 mb-2">⚠️ Когда использовать сильное несогласие?</h4>
        <ul className="text-red-700 text-sm space-y-1">
          <li>• Когда вопрос принципиальный</li>
          <li>• Когда есть факты, опровергающие утверждение</li>
          <li>• В дебатах или споре (не в дружеской беседе!)</li>
          <li>• Когда мягкое несогласие не было услышано</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
          <span className="text-green-600 font-bold">✅ Приемлемо в деловой среде:</span>
          <p className="text-slate-700">&quot;I strongly disagree. The data doesn&apos;t support this.&quot;</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3 border border-red-200">
          <span className="text-red-600 font-bold">❌ Избегайте:</span>
          <p className="text-slate-700">&quot;That&apos;s ridiculous!&quot; / &quot;You&apos;re wrong!&quot;</p>
        </div>
      </div>
    </div>
  );
}

function Step10() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">❓ Запрос мнения других</h2>
        <p className="text-violet-100">Как вежливо спросить мнение собеседника</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="What do you think?"
          meaning="Что вы думаете?"
          strength={3}
          example="We could try option B. What do you think?"
          category="neutral"
        />
        <PhraseCard
          phrase="What's your opinion on this?"
          meaning="Каково ваше мнение по этому поводу?"
          strength={3}
          example="What's your opinion on this proposal?"
          category="formal"
        />
        <PhraseCard
          phrase="How do you feel about...?"
          meaning="Как вы относитесь к...?"
          strength={2}
          example="How do you feel about working overtime?"
          category="neutral"
        />
        <PhraseCard
          phrase="What's your take on this?"
          meaning="Что вы думаете об этом? (разг.)"
          strength={2}
          example="What's your take on the new policy?"
          category="informal"
        />
        <PhraseCard
          phrase="Would you agree that...?"
          meaning="Согласились бы вы, что...?"
          strength={3}
          example="Would you agree that we need to change our approach?"
          category="formal"
        />
        <PhraseCard
          phrase="Do you see it the same way?"
          meaning="Вы видите это так же?"
          strength={2}
          example="I think it's a good opportunity. Do you see it the same way?"
          category="neutral"
        />
      </div>

      <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
        <h4 className="font-bold text-violet-800 mb-2">🎯 Зачем спрашивать мнение других?</h4>
        <ul className="text-violet-700 text-sm space-y-1">
          <li>• Показывает уважение к собеседнику</li>
          <li>• Делает разговор двусторонним</li>
          <li>• Помогает получить новые идеи</li>
          <li>• Создаёт атмосферу сотрудничества</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-slate-800">В деловом разговоре:</h3>
        <DialogueExchange
          exchanges={[
            { speaker: "Manager", text: "I've outlined two options. What's your take on this?", type: "opinion" },
            { speaker: "Employee", text: "I think option A is more realistic.", type: "opinion" },
            { speaker: "Manager", text: "Interesting. What makes you say that?", type: "opinion" },
            { speaker: "Employee", text: "It fits better with our current resources.", type: "opinion" },
          ]}
        />
      </div>
    </div>
  );
}

function Step11() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">🔄 Уточнение и переформулирование</h2>
        <p className="text-cyan-100">Как прояснить свою позицию или понять собеседника</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <PhraseCard
          phrase="What I mean is..."
          meaning="Я имею в виду..."
          strength={3}
          example="What I mean is we should prioritize quality over speed."
          category="neutral"
        />
        <PhraseCard
          phrase="Let me clarify..."
          meaning="Позвольте уточнить..."
          strength={3}
          example="Let me clarify. I'm not against the idea itself."
          category="formal"
        />
        <PhraseCard
          phrase="In other words..."
          meaning="Другими словами..."
          strength={3}
          example="In other words, we need to start from scratch."
          category="neutral"
        />
        <PhraseCard
          phrase="What I'm trying to say is..."
          meaning="Что я пытаюсь сказать..."
          strength={2}
          example="What I'm trying to say is that we have options."
          category="neutral"
        />
        <PhraseCard
          phrase="To put it another way..."
          meaning="Если выразить это иначе..."
          strength={3}
          example="To put it another way, the risk is too high."
          category="formal"
        />
        <PhraseCard
          phrase="So, if I understand correctly..."
          meaning="Итак, если я правильно понял..."
          strength={3}
          example="So, if I understand correctly, you want to delay the launch?"
          category="formal"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
          <h4 className="font-bold text-cyan-800 mb-2">Для уточнения своей мысли:</h4>
          <ul className="text-cyan-700 text-sm space-y-1">
            <li>• &quot;What I mean is...&quot;</li>
            <li>• &quot;Let me rephrase...&quot;</li>
            <li>• &quot;In other words...&quot;</li>
            <li>• &quot;To be more specific...&quot;</li>
          </ul>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">Для понимания собеседника:</h4>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• &quot;So, if I understand correctly...&quot;</li>
            <li>• &quot;Are you saying that...?&quot;</li>
            <li>• &quot;Do you mean...?&quot;</li>
            <li>• &quot;Could you clarify...?&quot;</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-slate-800">Пример диалога с уточнениями:</h3>
        <DialogueExchange
          exchanges={[
            { speaker: "A", text: "I think we should change our strategy completely.", type: "opinion" },
            { speaker: "B", text: "Do you mean we should abandon the current project?", type: "opinion" },
            { speaker: "A", text: "Not exactly. What I mean is we need a new approach.", type: "opinion" },
            { speaker: "B", text: "Ah, so if I understand correctly, you want to modify, not replace?", type: "opinion" },
          ]}
        />
      </div>
    </div>
  );
}

function Step12() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">🛡️ Смягчение высказываний — Hedging</h2>
        <p className="text-emerald-100">Как сделать речь менее категоричной</p>
      </div>

      <div className="bg-white rounded-xl p-5 border border-slate-200">
        <h3 className="font-bold text-slate-800 mb-3">Что такое hedging?</h3>
        <p className="text-slate-600 mb-4">
          Hedging — это лингвистические приёмы для смягчения категоричности высказываний.
          Помогает звучать более вежливо и оставлять место для дискуссии.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-slate-50 rounded-xl p-4">
          <h4 className="font-bold text-slate-800 mb-2">Модальные глаголы:</h4>
          <ul className="text-slate-600 text-sm space-y-1">
            <li>• might / may</li>
            <li>• could</li>
            <li>• would</li>
            <li>• should</li>
          </ul>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <h4 className="font-bold text-slate-800 mb-2">Наречия:</h4>
          <ul className="text-slate-600 text-sm space-y-1">
            <li>• perhaps</li>
            <li>• probably</li>
            <li>• possibly</li>
            <li>• generally</li>
          </ul>
        </div>
        <div className="bg-slate-50 rounded-xl p-4">
          <h4 className="font-bold text-slate-800 mb-2">Фразы:</h4>
          <ul className="text-slate-600 text-sm space-y-1">
            <li>• It seems that...</li>
            <li>• It appears that...</li>
            <li>• tend to...</li>
            <li>• to some extent...</li>
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-slate-800">Сравните:</h3>
        {[
          { strong: "This is wrong.", soft: "This might not be entirely accurate." },
          { strong: "You're making a mistake.", soft: "I think there could be some issues with this approach." },
          { strong: "The plan will fail.", soft: "The plan might face some challenges." },
        ].map((pair, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <span className="text-red-600 font-bold text-sm">Too direct:</span>
              <p className="text-slate-700">&quot;{pair.strong}&quot;</p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <span className="text-green-600 font-bold text-sm">Softened:</span>
              <p className="text-slate-700">&quot;{pair.soft}&quot;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step13() {
  const items: FillItem[] = [
    {
      left: "I",
      answers: ["think", "believe", "feel"],
      right: "that we should reconsider the budget.",
      explanation: "Стандартные нейтральные фразы для выражения мнения",
    },
    {
      left: "I couldn't",
      answers: ["agree"],
      right: "more. That's exactly what I was thinking.",
      explanation: "'I couldn't agree more' = полностью согласен",
    },
    {
      left: "I see your",
      answers: ["point"],
      right: ", but I think there's another perspective.",
      explanation: "'I see your point, but...' = частичное согласие",
    },
    {
      left: "I'm",
      answers: ["afraid", "sorry"],
      right: "I have to disagree with that conclusion.",
      explanation: "'I'm afraid/sorry' смягчает несогласие",
    },
    {
      left: "What's your",
      answers: ["opinion", "take", "view"],
      right: "on this proposal?",
      explanation: "Фразы для запроса мнения собеседника",
    },
    {
      left: "I",
      answers: ["strongly", "totally", "completely"],
      right: "disagree with that statement.",
      explanation: "Наречия для усиления несогласия",
    },
    {
      left: "You",
      answers: ["may", "might", "could"],
      right: "be right, but I still have concerns.",
      explanation: "Модальные глаголы для частичного согласия",
    },
    {
      left: "To put it",
      answers: ["another"],
      right: "way, the project is over budget.",
      explanation: "'To put it another way' = перефразирование",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">📝 Практика: Заполни пропуски</h2>
        <p className="text-indigo-100">Проверь своё понимание фраз</p>
      </div>

      <CheckableExercise items={items} />

      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
        <h4 className="font-bold text-indigo-800 mb-2">💡 Подсказка</h4>
        <p className="text-indigo-700 text-sm">
          Помните о контексте: сила выражения должна соответствовать ситуации.
          В деловой переписке лучше использовать более мягкие формы.
        </p>
      </div>
    </div>
  );
}

function Step14() {
  const items: FillItem[] = [
    {
      left: "As",
      answers: ["far"],
      right: "as I'm concerned, the matter is settled.",
      explanation: "'As far as I'm concerned' = что касается меня",
    },
    {
      left: "From my point of",
      answers: ["view"],
      right: ", this is the best option available.",
      explanation: "'From my point of view' = с моей точки зрения",
    },
    {
      left: "That's",
      answers: ["precisely", "exactly"],
      right: "what I think. We're on the same page.",
      explanation: "'precisely/exactly' = именно, точно (сильное согласие)",
    },
    {
      left: "I",
      answers: ["beg"],
      right: "to differ. The evidence suggests otherwise.",
      explanation: "'I beg to differ' = позвольте не согласиться (формально)",
    },
    {
      left: "I'm not",
      answers: ["entirely", "completely"],
      right: "convinced that this approach will work.",
      explanation: "Вежливое несогласие через 'not entirely convinced'",
    },
    {
      left: "It",
      answers: ["seems", "appears"],
      right: "to me that we need more data.",
      explanation: "'It seems/appears' = кажется (смягчение)",
    },
    {
      left: "Would you",
      answers: ["agree"],
      right: "that we should postpone the meeting?",
      explanation: "'Would you agree that...?' = запрос мнения",
    },
    {
      left: "Let me",
      answers: ["clarify"],
      right: ". I'm not saying we should give up.",
      explanation: "'Let me clarify' = позвольте уточнить",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">📝 Практика: Продвинутые фразы</h2>
        <p className="text-purple-100">Более сложные выражения для дискуссий</p>
      </div>

      <CheckableExercise items={items} />

      <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
        <h4 className="font-bold text-purple-800 mb-2">🎯 Помните</h4>
        <p className="text-purple-700 text-sm">
          Эти фразы особенно полезны для экзаменов IELTS, FCE, CAE в Speaking части,
          а также для деловых переговоров и презентаций.
        </p>
      </div>
    </div>
  );
}

function Step15() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">🎓 Итоги: Giving Opinions & Agreeing/Disagreeing</h2>
        <p className="text-emerald-100">Краткое повторение всех ключевых фраз</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-3">💭 Выражение мнения</h4>
          <ul className="text-blue-700 text-sm space-y-1">
            <li><strong>Neutral:</strong> I think, In my opinion, I believe</li>
            <li><strong>Strong:</strong> I&apos;m convinced, I firmly believe</li>
            <li><strong>Tentative:</strong> I tend to think, I suppose</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
          <h4 className="font-bold text-green-800 mb-3">✅ Согласие</h4>
          <ul className="text-green-700 text-sm space-y-1">
            <li><strong>Strong:</strong> I couldn&apos;t agree more, Absolutely!</li>
            <li><strong>Mild:</strong> I agree, That makes sense</li>
            <li><strong>Partial:</strong> I see your point, but...</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-xl p-4 border border-red-200">
          <h4 className="font-bold text-red-800 mb-3">❌ Несогласие</h4>
          <ul className="text-red-700 text-sm space-y-1">
            <li><strong>Polite:</strong> I&apos;m not sure I agree, I see it differently</li>
            <li><strong>Strong:</strong> I strongly disagree, That&apos;s out of the question</li>
          </ul>
        </div>

        <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
          <h4 className="font-bold text-violet-800 mb-3">❓ Запрос мнения</h4>
          <ul className="text-violet-700 text-sm space-y-1">
            <li>What do you think?</li>
            <li>What&apos;s your opinion on this?</li>
            <li>How do you feel about...?</li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
        <h4 className="font-bold text-amber-800 mb-3">🛡️ Hedging (смягчение)</h4>
        <div className="grid md:grid-cols-3 gap-2 text-amber-700 text-sm">
          <div><strong>Модальные:</strong> might, may, could</div>
          <div><strong>Наречия:</strong> perhaps, probably</div>
          <div><strong>Фразы:</strong> It seems that...</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 border-2 border-indigo-200">
        <h3 className="font-bold text-slate-800 mb-4 text-center">🏆 Теперь вы умеете:</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Выражать мнение с разной степенью уверенности",
            "Соглашаться полностью и частично",
            "Вежливо и решительно возражать",
            "Спрашивать мнение других",
            "Уточнять и переформулировать мысли",
            "Смягчать категоричные высказывания",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-indigo-50 rounded-lg p-2">
              <span className="text-green-500">✓</span>
              <span className="text-slate-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-slate-500">
          Практикуйте эти фразы в реальных разговорах и на экзаменах! 🚀
        </p>
      </div>
    </div>
  );
}

export default function GivingOpinions({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;
    case 9:
      return <Step9 />;
    case 10:
      return <Step10 />;
    case 11:
      return <Step11 />;
    case 12:
      return <Step12 />;
    case 13:
      return <Step13 />;
    case 14:
      return <Step14 />;
    case 15:
      return <Step15 />;
    default:
      return <Step1 />;
  }
}
