"use client";

import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function VerbsOfPerception({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

function Step1() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="text-8xl mb-6 animate-pulse">👁️👂🤚</div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Verbs of Perception + Object + -ing/Infinitive
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See, watch, hear, feel, notice + somebody + doing/do — какая разница?
        </p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-900">🎯 The Big Picture</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-200">
            <h4 className="font-bold text-lg mb-3 text-blue-800">Verbs of Perception (восприятие)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">👁️ SEE</span> — видеть</p>
                <p className="text-gray-700"><span className="font-semibold">👀 WATCH</span> — наблюдать</p>
                <p className="text-gray-700"><span className="font-semibold">👂 HEAR</span> — слышать</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">🎵 LISTEN TO</span> — слушать</p>
                <p className="text-gray-700"><span className="font-semibold">🤚 FEEL</span> — чувствовать</p>
                <p className="text-gray-700"><span className="font-semibold">👃 NOTICE</span> — замечать</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-200">
            <h4 className="font-bold text-lg mb-4 text-purple-800">Two Patterns — Two Meanings</h4>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-bold text-green-700 mb-2">Pattern 1: see/watch/hear + OBJECT + BARE INFINITIVE (do)</p>
                <p className="text-gray-700 mb-3">= Полное действие от начала до конца (complete action)</p>
                <div className="bg-green-50 p-4 rounded-lg space-y-2">
                  <p className="text-gray-800">I <span className="font-bold">saw him cross</span> the street.</p>
                  <p className="text-sm text-gray-600 italic">Я видел, как он перешёл улицу (всё действие целиком)</p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-bold text-orange-700 mb-2">Pattern 2: see/watch/hear + OBJECT + -ING (doing)</p>
                <p className="text-gray-700 mb-3">= Процесс в момент наблюдения (action in progress)</p>
                <div className="bg-orange-50 p-4 rounded-lg space-y-2">
                  <p className="text-gray-800">I <span className="font-bold">saw him crossing</span> the street.</p>
                  <p className="text-sm text-gray-600 italic">Я видел, как он переходил улицу (в процессе)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl border border-pink-300">
            <h4 className="font-bold text-lg mb-3 text-pink-900">⚡ Quick Formula</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">BARE INFINITIVE (do)</p>
                <p className="text-sm text-gray-700">✅ Complete action</p>
                <p className="text-sm text-gray-700">✅ From start to finish</p>
                <p className="text-sm text-gray-700">✅ Whole event</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">-ING FORM (doing)</p>
                <p className="text-sm text-gray-700">✅ Action in progress</p>
                <p className="text-sm text-gray-700">✅ Partial view</p>
                <p className="text-sm text-gray-700">✅ Ongoing moment</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl border-2 border-blue-300">
            <h4 className="font-bold text-lg mb-3 text-blue-900">🎬 Movie Analogy</h4>
            <div className="space-y-3">
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="font-bold text-green-700">I saw him LEAVE the room. (bare inf)</p>
                <p className="text-sm text-gray-600">= Посмотрел весь эпизод: он встал, подошёл к двери, открыл, вышел 🎬</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="font-bold text-orange-700">I saw him LEAVING the room. (-ing)</p>
                <p className="text-sm text-gray-600">= Застал момент: он сейчас выходит из комнаты 📸</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-3 text-yellow-900">💡 Why This Matters</h3>
        <p className="text-gray-700 leading-relaxed">
          Носители языка различают эти формы, чтобы передать <span className="font-bold">завершённость</span> vs <span className="font-bold">процесс</span>.
          Это не просто грамматика — это способ точно описать, что именно вы наблюдали!
        </p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">👁️</div>
        <h2 className="text-3xl font-bold mb-2 text-blue-600">SEE & WATCH</h2>
        <p className="text-lg text-gray-600">Зрительное восприятие</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">Pattern 1: SEE/WATCH + OBJECT + DO (bare infinitive)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-lg font-bold text-green-900 mb-4">= Видел полное действие (complete action)</p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">I saw her <span className="text-green-700">enter</span> the building.</p>
                <p className="text-sm text-gray-600 italic">Я видел, как она вошла в здание (всё действие от начала до конца)</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">Did you watch them <span className="text-green-700">perform</span> the whole song?</p>
                <p className="text-sm text-gray-600 italic">Ты смотрел, как они исполнили всю песню? (от начала до конца)</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">I saw the sun <span className="text-green-700">rise</span> this morning.</p>
                <p className="text-sm text-gray-600 italic">Я видел, как взошло солнце сегодня утром (весь процесс)</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">We watched the plane <span className="text-green-700">take off</span>.</p>
                <p className="text-sm text-gray-600 italic">Мы смотрели, как самолёт взлетел (целиком)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 border-2 border-orange-200">
        <h3 className="text-2xl font-bold mb-6 text-orange-800">Pattern 2: SEE/WATCH + OBJECT + DOING (-ing)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-orange-300">
            <p className="text-lg font-bold text-orange-900 mb-4">= Видел процесс в действии (action in progress)</p>

            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800 mb-1">I saw her <span className="text-orange-700">entering</span> the building.</p>
                <p className="text-sm text-gray-600 italic">Я видел, как она входила в здание (в процессе входа)</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800 mb-1">I watched them <span className="text-orange-700">performing</span> when I arrived.</p>
                <p className="text-sm text-gray-600 italic">Я наблюдал, как они выступали, когда я пришёл (часть выступления)</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800 mb-1">I saw the sun <span className="text-orange-700">rising</span> behind the mountains.</p>
                <p className="text-sm text-gray-600 italic">Я видел, как солнце восходило за горами (момент восхода)</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800 mb-1">We watched the plane <span className="text-orange-700">taking off</span>.</p>
                <p className="text-sm text-gray-600 italic">Мы смотрели, как самолёт взлетал (процесс взлёта)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
        <h3 className="font-bold text-lg mb-4 text-purple-900">🎯 Compare Side-by-Side</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-300">
            <p className="font-bold text-green-700 mb-2">I saw him STEAL the wallet.</p>
            <p className="text-sm text-gray-600">Я видел весь процесс кражи — как он взял кошелёк и спрятал его. Теперь я свидетель преступления! 🚨</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-300">
            <p className="font-bold text-orange-700 mb-2">I saw him STEALING the wallet.</p>
            <p className="text-sm text-gray-600">Я застал его в момент кражи — он тянул руку к кошельку. Не видел весь процесс. 📸</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
        <h3 className="font-bold text-lg mb-3 text-blue-900">📌 Key Insight</h3>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-bold">BARE INFINITIVE</span> = я был свидетелем от A до Z<br />
          <span className="font-bold">-ING FORM</span> = я поймал момент действия
        </p>
      </div>
    </div>
  );
}

function Step3() {
  const items: FillItem[] = [
    {
      left: "I saw her",
      answers: ["dance", "dancing"],
      right: "(dance) at the party last night. She was amazing!",
    },
    {
      left: "We watched the kids",
      answers: ["play", "playing"],
      right: "(play) football for two hours yesterday.",
    },
    {
      left: "Did you see him",
      answers: ["leave", "leaving"],
      right: "(leave) the office? He took all his stuff with him.",
    },
    {
      left: "I saw them",
      answers: ["kiss", "kissing"],
      right: "(kiss) in the park. It was so romantic!",
    },
    {
      left: "We watched the fireworks",
      answers: ["explode", "exploding"],
      right: "(explode) in the sky. The whole show was incredible.",
    },
    {
      left: "I saw her",
      answers: ["crying"],
      right: "(cry) when I walked past her room. I only caught a glimpse.",
    },
    {
      left: "Did you watch him",
      answers: ["make"],
      right: "(make) the entire cake from scratch? I saw the whole process.",
    },
    {
      left: "I saw the car",
      answers: ["crashing"],
      right: "(crash) into the tree. I only saw the moment of impact.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Practice: SEE & WATCH</h2>
        <p className="text-lg text-gray-600">Choose bare infinitive or -ing form</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="text-gray-700"><span className="font-bold">Hint:</span> Если видел <span className="underline">всё действие целиком</span> → bare infinitive (do)</p>
          <p className="text-gray-700">Если видел <span className="underline">момент/процесс</span> → -ing (doing)</p>
        </div>

        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">👂🎵</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">HEAR & LISTEN TO</h2>
        <p className="text-lg text-gray-600">Слуховое восприятие</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 p-8 border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-6 text-green-800">Pattern 1: HEAR/LISTEN TO + OBJECT + DO (bare infinitive)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-green-300">
            <p className="text-lg font-bold text-green-900 mb-4">= Слышал полное действие (complete sound/action)</p>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">I heard her <span className="text-green-700">play</span> the entire sonata.</p>
                <p className="text-sm text-gray-600 italic">Я слышал, как она сыграла всю сонату целиком</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">Did you hear him <span className="text-green-700">say</span> "I quit"?</p>
                <p className="text-sm text-gray-600 italic">Ты слышал, как он сказал "Я увольняюсь"? (целую фразу)</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">I listened to them <span className="text-green-700">discuss</span> the whole plan.</p>
                <p className="text-sm text-gray-600 italic">Я слушал, как они обсудили весь план (от начала до конца)</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold text-gray-800 mb-1">We heard the door <span className="text-green-700">slam</span> shut.</p>
                <p className="text-sm text-gray-600 italic">Мы услышали, как дверь захлопнулась (полный звук)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 p-8 border-2 border-orange-200">
        <h3 className="text-2xl font-bold mb-6 text-orange-800">Pattern 2: HEAR/LISTEN TO + OBJECT + DOING (-ing)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-orange-300">
            <p className="text-lg font-bold text-orange-900 mb-4">= Слышал процесс (sound in progress)</p>

            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800 mb-1">I heard her <span className="text-orange-700">playing</span> the piano upstairs.</p>
                <p className="text-sm text-gray-600 italic">Я слышал, как она играла на пианино наверху (часть музыки)</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800 mb-1">I heard him <span className="text-orange-700">saying</span> something about money.</p>
                <p className="text-sm text-gray-600 italic">Я услышал, как он что-то говорил про деньги (обрывки разговора)</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800 mb-1">I listened to them <span className="text-orange-700">arguing</span> for a while.</p>
                <p className="text-sm text-gray-600 italic">Я слушал, как они спорили какое-то время (процесс спора)</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800 mb-1">I heard someone <span className="text-orange-700">knocking</span> at the door.</p>
                <p className="text-sm text-gray-600 italic">Я услышал, как кто-то стучал в дверь (процесс стука)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
        <h3 className="font-bold text-lg mb-4 text-purple-900">🎯 Real-Life Examples</h3>

        <div className="space-y-4">
          <div className="bg-white/60 p-4 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-green-700 mb-1">I heard my phone RING three times.</p>
            <p className="text-sm text-gray-600">Я слышал, как мой телефон прозвонил три раза (все три звонка)</p>
          </div>

          <div className="bg-white/60 p-4 rounded-lg border-l-4 border-orange-500">
            <p className="font-bold text-orange-700 mb-1">I heard my phone RINGING in my bag.</p>
            <p className="text-sm text-gray-600">Я услышал, как мой телефон звонил в сумке (звук звонка в процессе)</p>
          </div>

          <div className="bg-white/60 p-4 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-green-700 mb-1">I heard her SCREAM when she saw the spider.</p>
            <p className="text-sm text-gray-600">Я услышал, как она вскрикнула, увидев паука (один крик целиком)</p>
          </div>

          <div className="bg-white/60 p-4 rounded-lg border-l-4 border-orange-500">
            <p className="font-bold text-orange-700 mb-1">I heard her SCREAMING for help.</p>
            <p className="text-sm text-gray-600">Я услышал, как она кричала о помощи (продолжительные крики)</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
        <h3 className="font-bold text-lg mb-3 text-blue-900">💡 Pro Tip</h3>
        <p className="text-gray-700 leading-relaxed">
          С <span className="font-bold">HEAR</span> оба варианта часто взаимозаменяемы, но тонкая разница есть:
          <br />• <span className="font-bold">BARE INF</span> = акцент на факте звука
          <br />• <span className="font-bold">-ING</span> = акцент на длительности/процессе
        </p>
      </div>
    </div>
  );
}

function Step5() {
  const items: FillItem[] = [
    {
      left: "I heard someone",
      answers: ["shout", "shouting"],
      right: "(shout) 'Fire!' and everyone ran out.",
    },
    {
      left: "Did you hear her",
      answers: ["sing", "singing"],
      right: "(sing) the national anthem? She has an amazing voice!",
    },
    {
      left: "I heard them",
      answers: ["arguing"],
      right: "(argue) upstairs all night. I couldn't sleep.",
    },
    {
      left: "We listened to him",
      answers: ["explain"],
      right: "(explain) the entire theory from start to finish.",
    },
    {
      left: "I heard the glass",
      answers: ["break"],
      right: "(break) when it hit the floor. It shattered completely.",
    },
    {
      left: "I heard music",
      answers: ["playing"],
      right: "(play) from the apartment next door.",
    },
    {
      left: "Did you hear me",
      answers: ["call"],
      right: "(call) your name three times?",
    },
    {
      left: "I heard the baby",
      answers: ["crying"],
      right: "(cry) when I walked past the nursery.",
    },
    {
      left: "We heard the alarm",
      answers: ["go"],
      right: "(go) off at 6 AM sharp.",
    },
    {
      left: "I listened to them",
      answers: ["talking"],
      right: "(talk) about their plans for about 20 minutes.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎧</div>
        <h2 className="text-3xl font-bold mb-2 text-purple-600">Practice: HEAR & LISTEN TO</h2>
        <p className="text-lg text-gray-600">Complete vs Process</p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="text-gray-700"><span className="font-bold">Remember:</span></p>
          <p className="text-gray-700">• Полный звук/действие → bare infinitive</p>
          <p className="text-gray-700">• Процесс/длительность → -ing</p>
        </div>

        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step6() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🤚👃</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">FEEL, NOTICE, SMELL</h2>
        <p className="text-lg text-gray-600">Другие глаголы восприятия</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-8 border-2 border-pink-200">
        <h3 className="text-2xl font-bold mb-6 text-pink-800">🤚 FEEL (чувствовать)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-pink-300">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-green-700 text-lg">FEEL + OBJECT + DO</h4>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-gray-800 mb-1">I felt the ground <span className="text-green-700">shake</span>.</p>
                  <p className="text-sm text-gray-600 italic">Я почувствовал, как земля тряхнула (один толчок)</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-gray-800 mb-1">I felt something <span className="text-green-700">touch</span> my shoulder.</p>
                  <p className="text-sm text-gray-600 italic">Я почувствовал, как что-то коснулось моего плеча</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-gray-800 mb-1">She felt the car <span className="text-green-700">stop</span>.</p>
                  <p className="text-sm text-gray-600 italic">Она почувствовала, как машина остановилась</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-orange-700 text-lg">FEEL + OBJECT + DOING</h4>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-gray-800 mb-1">I felt the ground <span className="text-orange-700">shaking</span>.</p>
                  <p className="text-sm text-gray-600 italic">Я чувствовал, как земля трясётся (длительная тряска)</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-gray-800 mb-1">I felt someone <span className="text-orange-700">watching</span> me.</p>
                  <p className="text-sm text-gray-600 italic">Я чувствовал, как кто-то наблюдает за мной</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-gray-800 mb-1">She felt her heart <span className="text-orange-700">beating</span> fast.</p>
                  <p className="text-sm text-gray-600 italic">Она чувствовала, как её сердце бьётся быстро</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">👃 NOTICE (замечать)</h3>

        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-blue-300">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-green-700 text-lg">NOTICE + OBJECT + DO</h4>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-gray-800 mb-1">Did you notice him <span className="text-green-700">leave</span> the room?</p>
                  <p className="text-sm text-gray-600 italic">Ты заметил, как он вышел из комнаты? (весь процесс)</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-gray-800 mb-1">I noticed her <span className="text-green-700">smile</span> when I said that.</p>
                  <p className="text-sm text-gray-600 italic">Я заметил, как она улыбнулась, когда я это сказал</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-orange-700 text-lg">NOTICE + OBJECT + DOING</h4>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-gray-800 mb-1">Did you notice him <span className="text-orange-700">leaving</span> the room?</p>
                  <p className="text-sm text-gray-600 italic">Ты заметил, как он выходил из комнаты? (момент выхода)</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-semibold text-gray-800 mb-1">I noticed her <span className="text-orange-700">looking</span> at her phone.</p>
                  <p className="text-sm text-gray-600 italic">Я заметил, что она смотрит в телефон</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-6 text-purple-800">👃 SMELL (чувствовать запах)</h3>

        <div className="space-y-4">
          <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-purple-300">
            <p className="text-gray-700 mb-4">
              <span className="font-bold">SMELL</span> обычно используется с <span className="font-bold text-orange-700">-ING</span>, так как запах — это процесс:
            </p>

            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800">I smell something <span className="text-orange-700">burning</span>.</p>
                <p className="text-sm text-gray-600 italic">Я чувствую запах чего-то горящего</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-gray-800">Can you smell the cookies <span className="text-orange-700">baking</span>?</p>
                <p className="text-sm text-gray-600 italic">Чувствуешь запах печенья, которое печётся?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-yellow-300">
        <h3 className="font-bold text-lg mb-3 text-yellow-900">💡 Summary</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/60 p-4 rounded-lg">
            <p className="font-bold text-pink-700 mb-2">FEEL</p>
            <p className="text-sm text-gray-600">Оба варианта часто используются</p>
          </div>
          <div className="bg-white/60 p-4 rounded-lg">
            <p className="font-bold text-blue-700 mb-2">NOTICE</p>
            <p className="text-sm text-gray-600">Оба варианта часто используются</p>
          </div>
          <div className="bg-white/60 p-4 rounded-lg">
            <p className="font-bold text-purple-700 mb-2">SMELL</p>
            <p className="text-sm text-gray-600">Обычно только -ING</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "I felt the building",
      answers: ["shake"],
      right: "(shake) during the earthquake. It was terrifying!",
    },
    {
      left: "Did you notice her",
      answers: ["crying", "cry"],
      right: "(cry) during the movie?",
    },
    {
      left: "I can smell something",
      answers: ["burning"],
      right: "(burn) in the kitchen!",
    },
    {
      left: "I felt someone",
      answers: ["following"],
      right: "(follow) me all the way home.",
    },
    {
      left: "Did you notice him",
      answers: ["take"],
      right: "(take) the keys from the table?",
    },
    {
      left: "I felt my phone",
      answers: ["vibrate", "vibrating"],
      right: "(vibrate) in my pocket.",
    },
    {
      left: "I noticed her",
      answers: ["staring"],
      right: "(stare) at me for a long time.",
    },
    {
      left: "Can you smell the flowers",
      answers: ["blooming"],
      right: "(bloom) outside?",
    },
    {
      left: "I felt the bus",
      answers: ["stop"],
      right: "(stop) suddenly.",
    },
    {
      left: "I noticed the light",
      answers: ["go"],
      right: "(go) off when I closed the door.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎯</div>
        <h2 className="text-3xl font-bold mb-2 text-pink-600">Practice: FEEL, NOTICE, SMELL</h2>
        <p className="text-lg text-gray-600">Mixed exercise</p>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-2 border-pink-200">
        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step8() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎬</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">All Verbs Together</h2>
        <p className="text-lg text-gray-600">Complete comparison chart</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 border-2 border-indigo-300">
        <h3 className="text-2xl font-bold mb-6 text-indigo-900">📊 Master Comparison Table</h3>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-green-300">
            <h4 className="font-bold text-xl mb-4 text-green-800">👁️ VISUAL: SEE & WATCH</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">SEE/WATCH + DO</p>
                <p className="text-sm text-gray-700">I saw her <span className="font-bold">cross</span> the street.</p>
                <p className="text-xs text-gray-600 italic">(всё действие)</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">SEE/WATCH + DOING</p>
                <p className="text-sm text-gray-700">I saw her <span className="font-bold">crossing</span> the street.</p>
                <p className="text-xs text-gray-600 italic">(процесс)</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-purple-300">
            <h4 className="font-bold text-xl mb-4 text-purple-800">👂 AUDITORY: HEAR & LISTEN TO</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">HEAR/LISTEN TO + DO</p>
                <p className="text-sm text-gray-700">I heard the bell <span className="font-bold">ring</span>.</p>
                <p className="text-xs text-gray-600 italic">(полный звук)</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">HEAR/LISTEN TO + DOING</p>
                <p className="text-sm text-gray-700">I heard the bell <span className="font-bold">ringing</span>.</p>
                <p className="text-xs text-gray-600 italic">(процесс звука)</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-pink-300">
            <h4 className="font-bold text-xl mb-4 text-pink-800">🤚 TACTILE: FEEL</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">FEEL + DO</p>
                <p className="text-sm text-gray-700">I felt the ground <span className="font-bold">shake</span>.</p>
                <p className="text-xs text-gray-600 italic">(один толчок)</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">FEEL + DOING</p>
                <p className="text-sm text-gray-700">I felt the ground <span className="font-bold">shaking</span>.</p>
                <p className="text-xs text-gray-600 italic">(длительная тряска)</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-blue-300">
            <h4 className="font-bold text-xl mb-4 text-blue-800">👃 OLFACTORY: NOTICE</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">NOTICE + DO</p>
                <p className="text-sm text-gray-700">I noticed her <span className="font-bold">smile</span>.</p>
                <p className="text-xs text-gray-600 italic">(действие целиком)</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">NOTICE + DOING</p>
                <p className="text-sm text-gray-700">I noticed her <span className="font-bold">smiling</span>.</p>
                <p className="text-xs text-gray-600 italic">(процесс улыбки)</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-amber-300">
            <h4 className="font-bold text-xl mb-4 text-amber-800">👃 SPECIAL: SMELL</h4>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-bold text-orange-700 mb-2">SMELL + DOING (преимущественно)</p>
              <p className="text-sm text-gray-700">I smell something <span className="font-bold">burning</span>.</p>
              <p className="text-xs text-gray-600 italic">(запах — это всегда процесс)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-300">
        <h3 className="font-bold text-lg mb-4 text-green-900">🎯 Universal Rule</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-green-700 text-lg mb-2">BARE INFINITIVE (do)</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Complete action</li>
              <li>✅ Witnessed from start to finish</li>
              <li>✅ Whole event</li>
              <li>✅ Single occurrence</li>
            </ul>
          </div>
          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-orange-500">
            <p className="font-bold text-orange-700 text-lg mb-2">-ING FORM (doing)</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Action in progress</li>
              <li>✅ Caught a moment</li>
              <li>✅ Partial view</li>
              <li>✅ Ongoing/repeated</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "I saw the thief",
      answers: ["steal"],
      right: "(steal) the bag and run away. I saw the entire crime!",
    },
    {
      left: "Did you hear someone",
      answers: ["call"],
      right: "(call) your name? I heard it clearly.",
    },
    {
      left: "I watched the kids",
      answers: ["playing"],
      right: "(play) in the park when I walked by.",
    },
    {
      left: "I felt my hands",
      answers: ["trembling"],
      right: "(tremble) with nervousness before the exam.",
    },
    {
      left: "I noticed him",
      answers: ["slip"],
      right: "(slip) and fall on the ice.",
    },
    {
      left: "Can you smell the coffee",
      answers: ["brewing"],
      right: "(brew) in the kitchen?",
    },
    {
      left: "I heard the audience",
      answers: ["clap"],
      right: "(clap) after the performance ended.",
    },
    {
      left: "I saw her",
      answers: ["dancing"],
      right: "(dance) when I entered the club.",
    },
    {
      left: "We watched the sunset",
      answers: ["disappear"],
      right: "(disappear) behind the mountains.",
    },
    {
      left: "I felt someone",
      answers: ["tap"],
      right: "(tap) me on the shoulder once.",
    },
    {
      left: "Did you notice the lights",
      answers: ["flickering"],
      right: "(flicker) during the storm?",
    },
    {
      left: "I heard the door",
      answers: ["creak"],
      right: "(creak) when it opened.",
    },
    {
      left: "I saw them",
      answers: ["arguing"],
      right: "(argue) in the hallway for about 10 minutes.",
    },
    {
      left: "I felt the train",
      answers: ["move"],
      right: "(move) slowly out of the station.",
    },
    {
      left: "We watched the plane",
      answers: ["flying"],
      right: "(fly) overhead.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">💪</div>
        <h2 className="text-3xl font-bold mb-2 text-indigo-600">Ultimate Challenge</h2>
        <p className="text-lg text-gray-600">All verbs of perception mixed</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-xl border-2 border-indigo-200">
        <div className="bg-white/70 backdrop-blur p-4 rounded-lg mb-6">
          <p className="font-bold text-gray-800 mb-2">Final Boss Level 🎮</p>
          <p className="text-gray-700">Think carefully about each context:</p>
          <p className="text-gray-700">• Did you witness the <span className="underline">complete action</span>? → bare infinitive</p>
          <p className="text-gray-700">• Did you catch a <span className="underline">moment/process</span>? → -ing</p>
        </div>

        <CheckableExercise items={items} />
      </div>
    </div>
  );
}

function Step10() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Verbs of Perception — Ultimate Cheat Sheet
        </h2>
        <p className="text-lg text-gray-600">Your complete reference guide</p>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 border-2 border-orange-300">
        <h3 className="text-2xl font-bold mb-6 text-orange-900">📚 Complete Pattern List</h3>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-green-400">
            <h4 className="font-bold text-xl mb-4 text-green-800">Pattern 1: VERB + OBJECT + BARE INFINITIVE (do)</h4>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">Meaning: Complete action witnessed from start to finish</p>
                <div className="space-y-2">
                  <p className="text-gray-700">• I <span className="font-bold">saw</span> him <span className="text-green-700">cross</span> the street.</p>
                  <p className="text-gray-700">• I <span className="font-bold">watched</span> her <span className="text-green-700">paint</span> the entire picture.</p>
                  <p className="text-gray-700">• I <span className="font-bold">heard</span> the door <span className="text-green-700">slam</span> shut.</p>
                  <p className="text-gray-700">• I <span className="font-bold">felt</span> the building <span className="text-green-700">shake</span>.</p>
                  <p className="text-gray-700">• I <span className="font-bold">noticed</span> her <span className="text-green-700">smile</span>.</p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600">
                <p className="font-bold text-green-800">Use when:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>You saw the whole action from beginning to end</li>
                  <li>The action is quick/instantaneous</li>
                  <li>You want to emphasize completion</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-orange-400">
            <h4 className="font-bold text-xl mb-4 text-orange-800">Pattern 2: VERB + OBJECT + -ING (doing)</h4>

            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-bold text-orange-700 mb-2">Meaning: Action in progress / partial view</p>
                <div className="space-y-2">
                  <p className="text-gray-700">• I <span className="font-bold">saw</span> him <span className="text-orange-700">crossing</span> the street.</p>
                  <p className="text-gray-700">• I <span className="font-bold">watched</span> her <span className="text-orange-700">painting</span> when I arrived.</p>
                  <p className="text-gray-700">• I <span className="font-bold">heard</span> someone <span className="text-orange-700">knocking</span> at the door.</p>
                  <p className="text-gray-700">• I <span className="font-bold">felt</span> my heart <span className="text-orange-700">beating</span> fast.</p>
                  <p className="text-gray-700">• I <span className="font-bold">noticed</span> her <span className="text-orange-700">looking</span> at me.</p>
                </div>
              </div>

              <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-600">
                <p className="font-bold text-orange-800">Use when:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>You caught a moment/part of the action</li>
                  <li>The action was ongoing/continuous</li>
                  <li>You want to emphasize duration/process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-300">
        <h3 className="text-2xl font-bold mb-6 text-purple-900">🎯 Verb-by-Verb Breakdown</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/70 p-4 rounded-lg border border-blue-300">
            <p className="font-bold text-blue-700 mb-2">👁️ SEE (видеть)</p>
            <p className="text-sm text-gray-700">Both forms common</p>
            <p className="text-xs text-gray-600 italic">Unintentional visual perception</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border border-blue-300">
            <p className="font-bold text-blue-700 mb-2">👀 WATCH (смотреть)</p>
            <p className="text-sm text-gray-700">Both forms common</p>
            <p className="text-xs text-gray-600 italic">Intentional observation</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border border-purple-300">
            <p className="font-bold text-purple-700 mb-2">👂 HEAR (слышать)</p>
            <p className="text-sm text-gray-700">Both forms common</p>
            <p className="text-xs text-gray-600 italic">Unintentional auditory perception</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border border-purple-300">
            <p className="font-bold text-purple-700 mb-2">🎵 LISTEN TO (слушать)</p>
            <p className="text-sm text-gray-700">Both forms common</p>
            <p className="text-xs text-gray-600 italic">Intentional auditory attention</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border border-pink-300">
            <p className="font-bold text-pink-700 mb-2">🤚 FEEL (чувствовать)</p>
            <p className="text-sm text-gray-700">Both forms common</p>
            <p className="text-xs text-gray-600 italic">Tactile/physical sensation</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border border-pink-300">
            <p className="font-bold text-pink-700 mb-2">👃 NOTICE (замечать)</p>
            <p className="text-sm text-gray-700">Both forms common</p>
            <p className="text-xs text-gray-600 italic">Become aware of something</p>
          </div>

          <div className="bg-white/70 p-4 rounded-lg border border-amber-300 col-span-2">
            <p className="font-bold text-amber-700 mb-2">👃 SMELL (чувствовать запах)</p>
            <p className="text-sm text-gray-700">Mainly -ING form</p>
            <p className="text-xs text-gray-600 italic">Smell is inherently a process, so -ING is natural</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 p-8 border-2 border-red-300">
        <h3 className="text-2xl font-bold mb-6 text-red-900">❌ Common Mistakes</h3>

        <div className="space-y-4">
          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ I saw him TO leave the room.</p>
            <p className="font-bold text-green-700 mb-2">✅ I saw him leave the room.</p>
            <p className="text-sm text-gray-600">Never use "to" infinitive with perception verbs!</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ I heard her to sing yesterday.</p>
            <p className="font-bold text-green-700 mb-2">✅ I heard her sing yesterday.</p>
            <p className="text-sm text-gray-600">Use bare infinitive (without "to")</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 mb-2">❌ I smelled something to burn.</p>
            <p className="font-bold text-green-700 mb-2">✅ I smelled something burning.</p>
            <p className="text-sm text-gray-600">SMELL almost always uses -ING</p>
          </div>

          <div className="bg-white/70 p-5 rounded-lg border-l-4 border-orange-500">
            <p className="font-bold text-orange-700 mb-2">⚠️ Context matters!</p>
            <p className="text-sm text-gray-700 mb-1">I saw him <span className="font-bold text-green-700">leave</span>. (He left, I saw the whole thing)</p>
            <p className="text-sm text-gray-700">I saw him <span className="font-bold text-orange-700">leaving</span>. (He was in the process of leaving)</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 p-8 rounded-xl border-2 border-green-400">
        <h3 className="text-2xl font-bold mb-6 text-green-900">🎓 Quick Decision Tree</h3>

        <div className="space-y-4">
          <div className="bg-white/70 p-5 rounded-lg">
            <p className="font-bold text-lg text-gray-800 mb-3">Ask yourself:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">1️⃣</span>
                <div>
                  <p className="font-bold text-green-700">Did I see/hear the COMPLETE action?</p>
                  <p className="text-sm text-gray-600">→ Use BARE INFINITIVE (do)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">2️⃣</span>
                <div>
                  <p className="font-bold text-orange-700">Did I catch a MOMENT/PROCESS?</p>
                  <p className="text-sm text-gray-600">→ Use -ING FORM (doing)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">3️⃣</span>
                <div>
                  <p className="font-bold text-purple-700">Is it SMELL?</p>
                  <p className="text-sm text-gray-600">→ Almost always -ING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
        <h3 className="font-bold text-xl mb-4 text-yellow-900">🏆 You've Mastered Verbs of Perception!</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Теперь вы понимаете разницу между <span className="font-bold">bare infinitive</span> и <span className="font-bold">-ing form</span> после глаголов восприятия.
          Эта тонкость помогает точно описать, что именно вы видели, слышали или чувствовали!
        </p>
        <div className="bg-white/60 p-4 rounded-lg">
          <p className="font-bold text-orange-700 mb-2">Remember the golden rule:</p>
          <p className="text-gray-700">Complete action = BARE INF | Process/moment = -ING</p>
        </div>
      </div>
    </div>
  );
}
