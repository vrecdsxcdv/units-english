"use client";

import { useState } from "react";
import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

// Liquid Glass Card Component
function GlassCard({ children, gradient }: { children: React.ReactNode; gradient: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl p-8 ${gradient} backdrop-blur-xl border border-white/20 shadow-2xl`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Emotion Bubble Component
function EmotionBubble({
  emoji,
  word,
  translation,
  color
}: {
  emoji: string;
  word: string;
  translation: string;
  color: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 transform ${
        isHovered ? 'scale-110 z-20' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative overflow-hidden rounded-2xl p-6 ${color} backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 text-center">
          <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
            {emoji}
          </div>
          <div className="text-xl font-bold text-white mb-1 drop-shadow-lg">
            {word}
          </div>
          <div className={`text-sm text-white/90 transition-all duration-300 ${
            isHovered ? 'opacity-100 max-h-20' : 'opacity-70 max-h-0'
          }`}>
            {translation}
          </div>
        </div>

        {/* Animated gradient orb */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
      </div>
    </div>
  );
}

// Floating particles background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

function Step1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 relative overflow-hidden">
      <FloatingParticles />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        {/* Hero Section */}
        <GlassCard gradient="bg-gradient-to-br from-purple-500/30 to-pink-500/30">
          <div className="text-center">
            <div className="text-8xl mb-6">😊😢😱😍</div>
            <h1 className="text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Emotions & Reactions
            </h1>
            <p className="text-2xl text-white/90 mb-6">
              Выражайте свои чувства на английском как носитель языка
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-lg rounded-full px-8 py-3 border border-white/30">
              <p className="text-white font-semibold">
                💎 100+ эмоциональных слов и выражений
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Positive Emotions */}
        <GlassCard gradient="bg-gradient-to-br from-green-500/20 to-emerald-500/20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
            ✨ Положительные эмоции
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EmotionBubble
              emoji="🎉"
              word="thrilled"
              translation="в восторге"
              color="bg-gradient-to-br from-yellow-400/40 to-orange-400/40"
            />
            <EmotionBubble
              emoji="😌"
              word="relieved"
              translation="облегчённый"
              color="bg-gradient-to-br from-green-400/40 to-teal-400/40"
            />
            <EmotionBubble
              emoji="🤗"
              word="grateful"
              translation="благодарный"
              color="bg-gradient-to-br from-pink-400/40 to-rose-400/40"
            />
            <EmotionBubble
              emoji="😊"
              word="content"
              translation="довольный"
              color="bg-gradient-to-br from-blue-400/40 to-cyan-400/40"
            />
            <EmotionBubble
              emoji="🥰"
              word="delighted"
              translation="восхищённый"
              color="bg-gradient-to-br from-purple-400/40 to-pink-400/40"
            />
            <EmotionBubble
              emoji="🌟"
              word="inspired"
              translation="вдохновлённый"
              color="bg-gradient-to-br from-amber-400/40 to-yellow-400/40"
            />
          </div>
        </GlassCard>

        {/* Negative Emotions */}
        <GlassCard gradient="bg-gradient-to-br from-red-500/20 to-orange-500/20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
            ⚡ Отрицательные эмоции
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EmotionBubble
              emoji="💔"
              word="devastated"
              translation="опустошённый"
              color="bg-gradient-to-br from-gray-600/40 to-slate-600/40"
            />
            <EmotionBubble
              emoji="😤"
              word="frustrated"
              translation="разочарованный"
              color="bg-gradient-to-br from-red-500/40 to-orange-500/40"
            />
            <EmotionBubble
              emoji="😰"
              word="anxious"
              translation="встревоженный"
              color="bg-gradient-to-br from-indigo-500/40 to-purple-500/40"
            />
            <EmotionBubble
              emoji="😔"
              word="disappointed"
              translation="разочарованный"
              color="bg-gradient-to-br from-blue-600/40 to-slate-600/40"
            />
            <EmotionBubble
              emoji="😡"
              word="furious"
              translation="в ярости"
              color="bg-gradient-to-br from-red-600/40 to-rose-600/40"
            />
            <EmotionBubble
              emoji="😱"
              word="terrified"
              translation="в ужасе"
              color="bg-gradient-to-br from-purple-600/40 to-indigo-600/40"
            />
          </div>
        </GlassCard>

        {/* Intensity Scale */}
        <GlassCard gradient="bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            📊 Шкала интенсивности эмоций
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-1/4 text-white font-bold">Happy →</div>
              <div className="flex-1 flex gap-2">
                {['pleased', 'happy', 'delighted', 'thrilled', 'ecstatic'].map((word, i) => (
                  <div
                    key={word}
                    className="flex-1 bg-gradient-to-r from-green-400/30 to-yellow-400/30 backdrop-blur-lg rounded-lg p-3 border border-white/20 text-white text-center text-sm font-semibold"
                    style={{ opacity: 0.5 + (i * 0.1) }}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1/4 text-white font-bold">Sad →</div>
              <div className="flex-1 flex gap-2">
                {['unhappy', 'sad', 'miserable', 'heartbroken', 'devastated'].map((word, i) => (
                  <div
                    key={word}
                    className="flex-1 bg-gradient-to-r from-blue-600/30 to-gray-600/30 backdrop-blur-lg rounded-lg p-3 border border-white/20 text-white text-center text-sm font-semibold"
                    style={{ opacity: 0.5 + (i * 0.1) }}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1/4 text-white font-bold">Angry →</div>
              <div className="flex-1 flex gap-2">
                {['annoyed', 'angry', 'furious', 'enraged', 'livid'].map((word, i) => (
                  <div
                    key={word}
                    className="flex-1 bg-gradient-to-r from-orange-400/30 to-red-600/30 backdrop-blur-lg rounded-lg p-3 border border-white/20 text-white text-center text-sm font-semibold"
                    style={{ opacity: 0.5 + (i * 0.1) }}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 relative overflow-hidden">
      <FloatingParticles />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <GlassCard gradient="bg-gradient-to-br from-cyan-500/30 to-blue-500/30">
          <h1 className="text-5xl font-black text-white mb-6 text-center drop-shadow-2xl">
            💬 Expressing Emotions
          </h1>
          <p className="text-xl text-white/90 text-center">
            Как естественно выражать эмоции на английском
          </p>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Happiness expressions */}
          <GlassCard gradient="bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">😊</div>
              <h3 className="text-3xl font-bold text-white">Happiness</h3>
            </div>

            <div className="space-y-4">
              {[
                { phrase: "I'm over the moon!", translation: "Я на седьмом небе!" },
                { phrase: "I'm thrilled to bits!", translation: "Я безумно рад!" },
                { phrase: "I couldn't be happier!", translation: "Я не мог бы быть счастливее!" },
                { phrase: "I'm on cloud nine!", translation: "Я на облаке номер девять!" },
                { phrase: "This made my day!", translation: "Это сделало мой день!" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <p className="text-white font-bold text-lg mb-1">{item.phrase}</p>
                  <p className="text-white/80 text-sm">{item.translation}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Sadness expressions */}
          <GlassCard gradient="bg-gradient-to-br from-blue-600/20 to-indigo-600/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">😢</div>
              <h3 className="text-3xl font-bold text-white">Sadness</h3>
            </div>

            <div className="space-y-4">
              {[
                { phrase: "I'm feeling down", translation: "Мне грустно" },
                { phrase: "I'm heartbroken", translation: "У меня разбито сердце" },
                { phrase: "I'm devastated", translation: "Я опустошён" },
                { phrase: "It breaks my heart", translation: "Это разбивает моё сердце" },
                { phrase: "I'm in low spirits", translation: "У меня плохое настроение" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <p className="text-white font-bold text-lg mb-1">{item.phrase}</p>
                  <p className="text-white/80 text-sm">{item.translation}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Anger expressions */}
          <GlassCard gradient="bg-gradient-to-br from-red-500/20 to-rose-500/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">😡</div>
              <h3 className="text-3xl font-bold text-white">Anger</h3>
            </div>

            <div className="space-y-4">
              {[
                { phrase: "I'm fuming!", translation: "Я в ярости!" },
                { phrase: "I'm really frustrated", translation: "Я очень расстроен" },
                { phrase: "It drives me crazy!", translation: "Это сводит меня с ума!" },
                { phrase: "I've had enough!", translation: "С меня хватит!" },
                { phrase: "I'm at my wit's end", translation: "Я в отчаянии" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <p className="text-white font-bold text-lg mb-1">{item.phrase}</p>
                  <p className="text-white/80 text-sm">{item.translation}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Fear expressions */}
          <GlassCard gradient="bg-gradient-to-br from-purple-600/20 to-violet-600/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-3">😱</div>
              <h3 className="text-3xl font-bold text-white">Fear</h3>
            </div>

            <div className="space-y-4">
              {[
                { phrase: "I'm scared stiff", translation: "Я напуган до смерти" },
                { phrase: "I'm terrified", translation: "Я в ужасе" },
                { phrase: "It gives me the creeps", translation: "От этого мурашки по коже" },
                { phrase: "I'm shaking like a leaf", translation: "Я дрожу как лист" },
                { phrase: "My heart is pounding", translation: "Моё сердце бешено бьётся" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <p className="text-white font-bold text-lg mb-1">{item.phrase}</p>
                  <p className="text-white/80 text-sm">{item.translation}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 p-8 relative overflow-hidden">
      <FloatingParticles />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <GlassCard gradient="bg-gradient-to-br from-pink-500/30 to-rose-500/30">
          <h1 className="text-5xl font-black text-white mb-6 text-center drop-shadow-2xl">
            🎭 Реакции и отклики
          </h1>
        </GlassCard>

        {/* Surprise */}
        <GlassCard gradient="bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-7xl">😮</div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Surprise</h2>
              <p className="text-white/80 text-lg">Выражение удивления</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { en: "I'm shocked!", ru: "Я в шоке!" },
              { en: "I can't believe it!", ru: "Не могу поверить!" },
              { en: "That's amazing!", ru: "Это потрясающе!" },
              { en: "You're kidding!", ru: "Ты шутишь!" },
              { en: "No way!", ru: "Не может быть!" },
              { en: "Are you serious?", ru: "Ты серьёзно?" },
              { en: "What a surprise!", ru: "Какой сюрприз!" },
              { en: "I'm blown away!", ru: "Я потрясён!" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-white font-bold mb-1">{item.en}</p>
                <p className="text-white/70 text-sm">{item.ru}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Relief */}
        <GlassCard gradient="bg-gradient-to-br from-green-500/20 to-teal-500/20">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-7xl">😌</div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Relief</h2>
              <p className="text-white/80 text-lg">Выражение облегчения</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { en: "What a relief!", ru: "Какое облегчение!" },
              { en: "Thank goodness!", ru: "Слава богу!" },
              { en: "I'm so relieved!", ru: "Я так облегчён!" },
              { en: "That's a weight off my mind", ru: "Камень с души упал" },
              { en: "Phew! That was close!", ru: "Фух! Это было близко!" },
              { en: "I can breathe again", ru: "Я снова могу дышать" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-white font-bold mb-1">{item.en}</p>
                <p className="text-white/70 text-sm">{item.ru}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Disappointment */}
        <GlassCard gradient="bg-gradient-to-br from-slate-600/20 to-gray-600/20">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-7xl">😞</div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Disappointment</h2>
              <p className="text-white/80 text-lg">Выражение разочарования</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { en: "I'm so disappointed", ru: "Я так разочарован" },
              { en: "What a letdown!", ru: "Какое разочарование!" },
              { en: "That's a shame", ru: "Какая жалость" },
              { en: "I expected better", ru: "Я ожидал большего" },
              { en: "I'm gutted", ru: "Я убит горем" },
              { en: "This is frustrating", ru: "Это раздражает" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-white font-bold mb-1">{item.en}</p>
                <p className="text-white/70 text-sm">{item.ru}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function Step4() {
  const items: FillItem[] = [
    {
      left: "When I heard I got the job, I was absolutely",
      answers: ["thrilled", "delighted", "ecstatic"],
      right: "!",
      explanation: "Используем сильные положительные эмоции для радостных новостей",
    },
    {
      left: "After the exam was over, I felt so",
      answers: ["relieved"],
      right: ".",
      explanation: "'relieved' — облегчённый, когда стресс прошёл",
    },
    {
      left: "I was",
      answers: ["devastated", "heartbroken"],
      right: "when my dog died.",
      explanation: "Сильные негативные эмоции для трагических событий",
    },
    {
      left: "I'm getting really",
      answers: ["frustrated"],
      right: "with this computer - it keeps crashing!",
      explanation: "'frustrated' — разочарованный, когда что-то не работает",
    },
    {
      left: "She was",
      answers: ["shocked", "stunned"],
      right: "by the unexpected news.",
      explanation: "Выражение сильного удивления",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8 relative overflow-hidden">
      <FloatingParticles />

      <div className="max-w-5xl mx-auto relative z-10 space-y-8">
        <GlassCard gradient="bg-gradient-to-br from-indigo-500/30 to-purple-500/30">
          <h1 className="text-5xl font-black text-white mb-6 text-center drop-shadow-2xl">
            ✏️ Практика
          </h1>
          <p className="text-xl text-white/90 text-center">
            Проверьте, как хорошо вы усвоили эмоциональную лексику!
          </p>
        </GlassCard>

        <GlassCard gradient="bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
          <CheckableExercise
            title="Заполните пропуски подходящими эмоциями"
            instruction="Используйте слова: thrilled, relieved, devastated, frustrated, shocked"
            items={items}
          />
        </GlassCard>

        {/* Quick tips */}
        <GlassCard gradient="bg-gradient-to-br from-purple-500/20 to-pink-500/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            💡 Полезные советы
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-xl font-bold text-white mb-2">Читайте диалоги</h4>
              <p className="text-white/80">
                Обращайте внимание, как персонажи выражают эмоции в фильмах и книгах
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🎭</div>
              <h4 className="text-xl font-bold text-white mb-2">Практикуйте интонацию</h4>
              <p className="text-white/80">
                Эмоции передаются не только словами, но и тоном голоса
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">✍️</div>
              <h4 className="text-xl font-bold text-white mb-2">Ведите дневник</h4>
              <p className="text-white/80">
                Описывайте свои эмоции на английском каждый день
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🗣️</div>
              <h4 className="text-xl font-bold text-white mb-2">Говорите вслух</h4>
              <p className="text-white/80">
                Произносите фразы с правильной эмоциональной окраской
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

function Step5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 p-8 relative overflow-hidden">
      <FloatingParticles />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <GlassCard gradient="bg-gradient-to-br from-fuchsia-500/30 to-pink-500/30">
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-5xl font-black text-white mb-4 drop-shadow-2xl">
              Поздравляем!
            </h1>
            <p className="text-2xl text-white/90">
              Вы освоили эмоциональный английский!
            </p>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard gradient="bg-gradient-to-br from-green-500/20 to-emerald-500/20">
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-3">Что вы изучили</h3>
              <ul className="text-white/90 space-y-2 text-left">
                <li>• 50+ эмоциональных слов</li>
                <li>• 40+ выражений и фраз</li>
                <li>• Шкалы интенсивности</li>
                <li>• Естественные реакции</li>
                <li>• Идиомы об эмоциях</li>
              </ul>
            </div>
          </GlassCard>

          <GlassCard gradient="bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3">Ключевые слова</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['thrilled', 'devastated', 'relieved', 'frustrated', 'ecstatic', 'anxious'].map((word) => (
                  <span
                    key={word}
                    className="bg-white/20 backdrop-blur-lg px-3 py-1 rounded-full text-white text-sm border border-white/30"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard gradient="bg-gradient-to-br from-purple-500/20 to-violet-500/20">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3">Что дальше?</h3>
              <p className="text-white/90 text-left">
                Продолжайте практиковаться! Описывайте свои эмоции на английском каждый день,
                смотрите фильмы и обращайте внимание на эмоциональную речь персонажей.
              </p>
            </div>
          </GlassCard>
        </div>

        <GlassCard gradient="bg-gradient-to-br from-amber-500/20 to-orange-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              🌟 Вы великолепны!
            </h3>
            <p className="text-xl text-white/90 mb-4">
              Теперь вы можете выражать свои эмоции на английском естественно и уверенно!
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-lg rounded-full px-8 py-4 border border-white/30">
              <p className="text-2xl font-bold text-white">
                Keep up the amazing work! 💪
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export default function Emotions({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}
