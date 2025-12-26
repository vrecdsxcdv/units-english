"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function HobbiesAndFreeTime({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Спорт и физическая активность ===== */
function Step1() {
  return (
    <>
      <UiSection title="Hobbies and Free Time: Хобби и свободное время">
        <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Как вы проводите свободное время?
          </p>
          <p className="text-zinc-800 leading-relaxed mb-4">
            В этой теме мы изучим лексику для описания хобби и досуга, научимся
            правильно использовать герундий и инфинитив с глаголами
            предпочтения, а также прочитаем интересные тексты о разных
            увлечениях.
          </p>
          <p className="text-zinc-800 leading-relaxed">
            Умение говорить о своих интересах — важная часть общения на
            английском!
          </p>
        </div>
      </UiSection>

      <UiSection title="Спорт и физическая активность (Sports)">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">⚽</span>
              <span>Командные виды спорта:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["football/soccer", "/ˈfʊtbɔːl/", "футбол"],
                ["basketball", "/ˈbɑːskɪtbɔːl/", "баскетбол"],
                ["volleyball", "/ˈvɒlibɔːl/", "волейбол"],
                ["hockey", "/ˈhɒki/", "хоккей"],
                ["rugby", "/ˈrʌɡbi/", "регби"],
                ["baseball", "/ˈbeɪsbɔːl/", "бейсбол"],
                ["handball", "/ˈhændbɔːl/", "гандбол"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
                >
                  <p className="font-bold text-indigo-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎾</span>
              <span>Индивидуальные виды спорта:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["tennis", "/ˈtenɪs/", "теннис"],
                ["swimming", "/ˈswɪmɪŋ/", "плавание"],
                ["running", "/ˈrʌnɪŋ/", "бег"],
                ["cycling", "/ˈsaɪklɪŋ/", "велоспорт"],
                ["skiing", "/ˈskiːɪŋ/", "лыжный спорт"],
                ["skating", "/ˈskeɪtɪŋ/", "катание на коньках"],
                ["boxing", "/ˈbɒksɪŋ/", "бокс"],
                ["gymnastics", "/dʒɪmˈnæstɪks/", "гимнастика"],
                ["athletics", "/æθˈletɪks/", "лёгкая атлетика"],
                ["martial arts", "/ˈmɑːʃl ɑːts/", "боевые искусства"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-sky-400"
                >
                  <p className="font-bold text-sky-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🏋️</span>
              <span>Другие виды активности:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["yoga", "/ˈjəʊɡə/", "йога"],
                ["pilates", "/pɪˈlɑːtiːz/", "пилатес"],
                ["dancing", "/ˈdɑːnsɪŋ/", "танцы"],
                ["hiking", "/ˈhaɪkɪŋ/", "пешие походы"],
                ["climbing", "/ˈklaɪmɪŋ/", "скалолазание"],
                ["fishing", "/ˈfɪʃɪŋ/", "рыбалка"],
                ["horse riding", "/hɔːs ˈraɪdɪŋ/", "верховая езда"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-slate-400"
                >
                  <p className="font-bold text-slate-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Полезные глаголы:</span>
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["play", "играть (в игры)"],
            ["go", "ходить, заниматься"],
            ["do", "делать, заниматься"],
            ["practise", "практиковать"],
          ].map(([verb, meaning]) => (
            <div key={verb} className="bg-white rounded p-3">
              <p className="font-semibold text-indigo-700 text-sm">{verb}</p>
              <p className="text-xs text-zinc-600">{meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Музыка и творчество ===== */
function Step2() {
  return (
    <>
      <UiSection title="Музыка и творческие хобби">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎵</span>
              <span>Музыка (Music):</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                [
                  "playing the piano",
                  "/ˈpleɪɪŋ ðə piˈænəʊ/",
                  "играть на пианино",
                ],
                ["playing the guitar", "/ɡɪˈtɑː/", "играть на гитаре"],
                ["playing the violin", "/ˌvaɪəˈlɪn/", "играть на скрипке"],
                ["playing the drums", "/drʌmz/", "играть на барабанах"],
                ["singing", "/ˈsɪŋɪŋ/", "пение"],
                ["listening to music", "—", "слушать музыку"],
                ["going to concerts", "/ˈkɒnsəts/", "ходить на концерты"],
                ["composing music", "/kəmˈpəʊzɪŋ/", "сочинять музыку"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
                >
                  <p className="font-bold text-indigo-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span>Искусство и творчество:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["painting", "/ˈpeɪntɪŋ/", "рисование красками"],
                ["drawing", "/ˈdrɔːɪŋ/", "рисование"],
                ["photography", "/fəˈtɒɡrəfi/", "фотография"],
                ["sculpting", "/ˈskʌlptɪŋ/", "лепка, скульптура"],
                ["knitting", "/ˈnɪtɪŋ/", "вязание"],
                ["sewing", "/ˈsəʊɪŋ/", "шитьё"],
                ["pottery", "/ˈpɒtəri/", "гончарное дело"],
                ["origami", "/ˌɒrɪˈɡɑːmi/", "оригами"],
                ["calligraphy", "/kəˈlɪɡrəfi/", "каллиграфия"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-sky-400"
                >
                  <p className="font-bold text-sky-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              <span>Чтение и интеллектуальные хобби:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["reading", "/ˈriːdɪŋ/", "чтение"],
                ["writing", "/ˈraɪtɪŋ/", "письмо, писательство"],
                ["blogging", "/ˈblɒɡɪŋ/", "ведение блога"],
                ["learning languages", "—", "изучение языков"],
                ["solving puzzles", "/ˈpʌzlz/", "решение головоломок"],
                ["playing chess", "/tʃes/", "игра в шахматы"],
                ["collecting stamps", "/stæmps/", "коллекционирование марок"],
                ["collecting coins", "/kɔɪnz/", "коллекционирование монет"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-slate-400"
                >
                  <p className="font-bold text-slate-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
        <h4 className="font-bold text-indigo-900 mb-3">📊 Слов изучено: 50+</h4>
        <p className="text-sm text-zinc-800">
          Отличная работа! Теперь вы можете говорить о множестве разных хобби.
        </p>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: Другие хобби и развлечения ===== */
function Step3() {
  return (
    <>
      <UiSection title="Развлечения и досуг">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎮</span>
              <span>Современные развлечения:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                [
                  "playing video games",
                  "/ˈvɪdiəʊ ɡeɪmz/",
                  "играть в видеоигры",
                ],
                ["watching movies/TV", "—", "смотреть фильмы/ТВ"],
                ["browsing the internet", "—", "сёрфить в интернете"],
                ["social media", "/ˈsəʊʃl ˈmiːdiə/", "соцсети"],
                ["making videos", "—", "снимать видео"],
                ["streaming", "/ˈstriːmɪŋ/", "стриминг"],
                ["podcasting", "/ˈpɒdkɑːstɪŋ/", "создание подкастов"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
                >
                  <p className="font-bold text-indigo-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌳</span>
              <span>Активный отдых на природе:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["camping", "/ˈkæmpɪŋ/", "кемпинг"],
                ["gardening", "/ˈɡɑːdnɪŋ/", "садоводство"],
                ["birdwatching", "/ˈbɜːdwɒtʃɪŋ/", "наблюдение за птицами"],
                ["walking", "/ˈwɔːkɪŋ/", "прогулки"],
                ["jogging", "/ˈdʒɒɡɪŋ/", "бег трусцой"],
                ["picnicking", "/ˈpɪknɪkɪŋ/", "пикники"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-sky-400"
                >
                  <p className="font-bold text-sky-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>Социальные хобби:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["meeting friends", "—", "встречаться с друзьями"],
                ["going to parties", "—", "ходить на вечеринки"],
                ["travelling", "/ˈtrævəlɪŋ/", "путешествия"],
                ["volunteering", "/ˌvɒlənˈtɪərɪŋ/", "волонтёрство"],
                ["cooking", "/ˈkʊkɪŋ/", "готовка"],
                ["baking", "/ˈbeɪkɪŋ/", "выпечка"],
                ["board games", "/bɔːd ɡeɪmz/", "настольные игры"],
                ["card games", "/kɑːd ɡeɪmz/", "карточные игры"],
              ].map(([word, transcr, translation]) => (
                <div
                  key={word}
                  className="bg-white rounded-lg p-4 border-l-4 border-slate-400"
                >
                  <p className="font-bold text-slate-700">{word}</p>
                  <p className="text-sm text-zinc-600">{transcr}</p>
                  <p className="text-sm text-zinc-800">{translation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
        <h4 className="font-bold text-indigo-900 mb-3">📊 Всего слов: 70+</h4>
        <p className="text-sm text-zinc-800">
          Превосходно! Теперь у вас огромный словарный запас для описания любых
          хобби и увлечений!
        </p>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: ГРАММАТИКА - Play/Go/Do ===== */
function Step4() {
  return (
    <>
      <UiSection title="Грамматика: Play / Go / Do с видами спорта">
        <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            В английском языке с разными видами спорта используются разные
            глаголы: <strong>play</strong>, <strong>go</strong> или{" "}
            <strong>do</strong>. Это очень важное правило!
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            1. PLAY + ball/team sports
          </h4>
          <p className="text-sm text-indigo-700 mb-4">
            Используем <strong>PLAY</strong> с играми и командными видами спорта
            (обычно с мячом или шайбой).
          </p>
          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="text-sm font-semibold mb-3 text-indigo-900">
              Примеры:
            </p>
            <div className="space-y-2">
              {[
                "I play football every weekend.",
                "She plays tennis twice a week.",
                "They play basketball at school.",
                "Do you play chess?",
                "He doesn't play hockey.",
              ].map((example, idx) => (
                <div key={idx} className="bg-indigo-50 rounded p-3">
                  <p className="text-sm text-zinc-800">{example}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-sky-50 rounded-lg p-4">
            <p className="text-sm font-semibold mb-2 text-sky-900">
              Список видов спорта с PLAY:
            </p>
            <p className="text-sm text-zinc-700">
              football, basketball, volleyball, tennis, hockey, rugby, baseball,
              badminton, table tennis, golf, cricket, chess
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            2. GO + verb-ing
          </h4>
          <p className="text-sm text-sky-700 mb-4">
            Используем <strong>GO</strong> с видами спорта, которые
            заканчиваются на <strong>-ing</strong> (обычно индивидуальные виды
            спорта и активности).
          </p>
          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="text-sm font-semibold mb-3 text-sky-900">Примеры:</p>
            <div className="space-y-2">
              {[
                "I go swimming every morning.",
                "She goes running in the park.",
                "They go skiing in winter.",
                "Do you go cycling?",
                "We go fishing on Sundays.",
              ].map((example, idx) => (
                <div key={idx} className="bg-sky-50 rounded p-3">
                  <p className="text-sm text-zinc-800">{example}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm font-semibold mb-2 text-blue-900">
              Список активностей с GO:
            </p>
            <p className="text-sm text-zinc-700">
              swimming, running, cycling, skiing, skating, fishing, hiking,
              climbing, dancing, shopping, jogging, camping
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-zinc-900 mb-4">
            3. DO + sports/activities
          </h4>
          <p className="text-sm text-zinc-700 mb-4">
            Используем <strong>DO</strong> с индивидуальными видами спорта,
            боевыми искусствами и некомандными активностями.
          </p>
          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="text-sm font-semibold mb-3 text-zinc-900">Примеры:</p>
            <div className="space-y-2">
              {[
                "I do yoga every day.",
                "She does karate.",
                "They do gymnastics.",
                "Do you do any sports?",
                "He doesn't do much exercise.",
              ].map((example, idx) => (
                <div key={idx} className="bg-zinc-50 rounded p-3">
                  <p className="text-sm text-zinc-800">{example}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-sm font-semibold mb-2 text-slate-900">
              Список видов спорта с DO:
            </p>
            <p className="text-sm text-zinc-700">
              yoga, pilates, gymnastics, karate, judo, taekwondo, boxing,
              athletics, aerobics, martial arts
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            ⚠️ Важные исключения и примечания:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                • С музыкальными инструментами:
              </p>
              <p className="text-sm text-zinc-700">
                <strong>play THE</strong> piano/guitar/violin (с артиклем!)
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="text-sm font-semibold mb-2 text-sky-700">
                • Общий вопрос о спорте:
              </p>
              <p className="text-sm text-zinc-700">
                <strong>Do you do</strong> any sports? (НЕ play или go!)
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="text-sm font-semibold mb-2 text-slate-700">
                • С хобби и упражнениями:
              </p>
              <p className="text-sm text-zinc-700">
                <strong>do</strong> exercise, <strong>do</strong> homework,{" "}
                <strong>do</strong> puzzles
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: ГРАММАТИКА - Герундий и инфинитив ===== */
function Step5() {
  return (
    <>
      <UiSection title="Грамматика: Verb + -ing или to + infinitive">
        <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            После глаголов, выражающих предпочтения и эмоции, используется либо{" "}
            <strong>герундий (-ing)</strong>, либо{" "}
            <strong>инфинитив (to + verb)</strong>. Это важнейшая грамматика для
            разговора о хобби!
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            1. Глаголы + ГЕРУНДИЙ (-ing)
          </h4>
          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="text-sm font-semibold mb-3 text-indigo-900">
              Эти глаголы требуют герундия:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {[
                ["enjoy", "наслаждаться"],
                ["like", "нравиться"],
                ["love", "любить"],
                ["hate", "ненавидеть"],
                ["don't mind", "не против"],
                ["finish", "заканчивать"],
                ["keep", "продолжать"],
                ["stop", "прекращать"],
                ["avoid", "избегать"],
              ].map(([verb, translation]) => (
                <div key={verb} className="bg-indigo-50 rounded p-2">
                  <p className="text-sm font-semibold text-indigo-700">
                    {verb}
                  </p>
                  <p className="text-xs text-zinc-600">{translation}</p>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold mb-2 text-indigo-900">
              Примеры:
            </p>
            <div className="space-y-2">
              {[
                {
                  en: "I enjoy playing tennis.",
                  ru: "Мне нравится играть в теннис.",
                },
                {
                  en: "She loves reading books.",
                  ru: "Она любит читать книги.",
                },
                {
                  en: "They hate doing homework.",
                  ru: "Они ненавидят делать домашку.",
                },
                {
                  en: "I don't mind helping you.",
                  ru: "Я не против помочь тебе.",
                },
                {
                  en: "He finished playing the guitar.",
                  ru: "Он закончил играть на гитаре.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-50 rounded p-3">
                  <p className="text-sm text-zinc-800 mb-1">{item.en}</p>
                  <p className="text-xs text-zinc-600">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            2. Глаголы + ИНФИНИТИВ (to + verb)
          </h4>
          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="text-sm font-semibold mb-3 text-sky-900">
              Эти глаголы требуют инфинитива:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {[
                ["want", "хотеть"],
                ["would like", "хотел бы"],
                ["need", "нуждаться"],
                ["plan", "планировать"],
                ["hope", "надеяться"],
                ["decide", "решать"],
                ["promise", "обещать"],
                ["learn", "учиться"],
                ["try", "пытаться"],
              ].map(([verb, translation]) => (
                <div key={verb} className="bg-sky-50 rounded p-2">
                  <p className="text-sm font-semibold text-sky-700">{verb}</p>
                  <p className="text-xs text-zinc-600">{translation}</p>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold mb-2 text-sky-900">Примеры:</p>
            <div className="space-y-2">
              {[
                {
                  en: "I want to learn Spanish.",
                  ru: "Я хочу выучить испанский.",
                },
                {
                  en: "She would like to play the piano.",
                  ru: "Она хотела бы играть на пианино.",
                },
                {
                  en: "They plan to go hiking.",
                  ru: "Они планируют пойти в поход.",
                },
                {
                  en: "He hopes to win the game.",
                  ru: "Он надеется выиграть игру.",
                },
                {
                  en: "We decided to start jogging.",
                  ru: "Мы решили начать бегать.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-50 rounded p-3">
                  <p className="text-sm text-zinc-800 mb-1">{item.en}</p>
                  <p className="text-xs text-zinc-600">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-zinc-900 mb-4">
            3. Глаголы с ОБЕИМИ формами
          </h4>
          <p className="text-sm text-zinc-700 mb-4">
            Некоторые глаголы могут использоваться с обеими формами БЕЗ
            изменения значения:
          </p>
          <div className="space-y-3">
            {[
              {
                verb: "like / love / hate / prefer",
                ex1: "I like swimming. = I like to swim.",
                ex2: "She loves dancing. = She loves to dance.",
              },
              {
                verb: "start / begin / continue",
                ex1: "It started raining. = It started to rain.",
                ex2: "He began playing. = He began to play.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded p-4">
                <p className="font-semibold text-slate-700 mb-2">{item.verb}</p>
                <p className="text-sm text-zinc-700 mb-1">✓ {item.ex1}</p>
                <p className="text-sm text-zinc-700">✓ {item.ex2}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            📝 Правило для запоминания:
          </h4>
          <div className="space-y-2">
            <div className="bg-white rounded p-4">
              <p className="text-sm text-zinc-800">
                <strong className="text-indigo-700">
                  Enjoy, finish, keep, stop
                </strong>{" "}
                → всегда <strong>-ING</strong>
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="text-sm text-zinc-800">
                <strong className="text-sky-700">Want, need, plan, hope</strong>{" "}
                → всегда <strong>TO + verb</strong>
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="text-sm text-zinc-800">
                <strong className="text-slate-700">
                  Like, love, hate, prefer
                </strong>{" "}
                → можно <strong>оба варианта</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Упражнения на грамматику ===== */
function Step6() {
  const exercise1: FillItem[] = [
    {
      left: "1. I",
      right: "football every weekend. (play/go/do)",
      answers: ["play"],
      explanation: "play + team sports",
    },
    {
      left: "2. She",
      right: "swimming twice a week. (play/go/do)",
      answers: ["goes"],
      explanation: "go + -ing activities",
    },
    {
      left: "3. They",
      right: "yoga in the morning. (play/go/do)",
      answers: ["do"],
      explanation: "do + individual sports/martial arts",
    },
    {
      left: "4. Do you",
      right: "the piano?",
      answers: ["play"],
      explanation: "play the + musical instrument",
    },
    {
      left: "5. We",
      right: "skiing in winter. (play/go/do)",
      answers: ["go"],
      explanation: "go + skiing",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "6. I enjoy",
      right: "books. (read/to read)",
      answers: ["reading"],
      explanation: "enjoy + -ing",
    },
    {
      left: "7. She wants",
      right: "Spanish. (learn/to learn)",
      answers: ["to learn"],
      explanation: "want + to + verb",
    },
    {
      left: "8. They love",
      right: "video games. (play/to play)",
      answers: ["playing", "to play"],
      explanation: "love + -ing или to + verb (оба варианта)",
    },
    {
      left: "9. He finished",
      right: "his homework. (do/to do)",
      answers: ["doing"],
      explanation: "finish + -ing",
    },
    {
      left: "10. We plan",
      right: "a new hobby. (start/to start)",
      answers: ["to start"],
      explanation: "plan + to + verb",
    },
  ];

  return (
    <>
      <UiSection title="Практика: Play/Go/Do">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Проверьте, как хорошо вы усвоили грамматические правила!
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Play / Go / Do"
        instruction="Выберите правильный глагол."
        items={exercise1}
      />

      <CheckableExercise
        title="Упражнение 2: Герундий или инфинитив"
        instruction="Заполните пропуски правильной формой глагола."
        items={exercise2}
      />

      <UiSection title="Дополнительное задание">
        <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-lg p-6">
          <h4 className="text-lg font-bold text-sky-900 mb-4">
            Переведите на английский:
          </h4>
          <div className="space-y-4">
            {[
              {
                ru: "1. Мне нравится играть в баскетбол.",
                en: "I enjoy playing basketball. / I like to play basketball.",
              },
              {
                ru: "2. Она хочет научиться играть на гитаре.",
                en: "She wants to learn to play the guitar.",
              },
              {
                ru: "3. Они ходят плавать каждое утро.",
                en: "They go swimming every morning.",
              },
              {
                ru: "4. Он не любит заниматься йогой.",
                en: "He doesn't like doing yoga. / He doesn't like to do yoga.",
              },
              {
                ru: "5. Мы закончили смотреть фильм.",
                en: "We finished watching the movie.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <p className="text-sm text-zinc-800 mb-2">{item.ru}</p>
                <p className="text-sm text-indigo-700 italic">
                  <strong>Ответ:</strong> {item.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Текст для чтения (часть 1) ===== */
function Step7() {
  return (
    <>
      <UiSection title="Чтение: My Hobbies and Interests">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Прочитайте текст о разных людях и их хобби.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border border-indigo-200">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          Different People, Different Hobbies
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            Everyone needs hobbies and free-time activities. They help us relax,
            stay healthy, and develop new skills. Let me introduce you to three
            people and their interesting hobbies.
          </p>

          <div className="bg-indigo-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-indigo-900 mb-3">
              Sarah, 28 — Music Lover
            </h4>
            <p className="mb-3">
              Sarah has been passionate about music since she was a child. She
              started <strong>playing the piano</strong> when she was seven
              years old, and now she&apos;s quite good at it. Every evening
              after work, she enjoys <strong>practising</strong> for at least an
              hour.
            </p>
            <p className="mb-3">
              Besides playing the piano, Sarah loves{" "}
              <strong>listening to different types of music</strong>. Her
              favourite genres are classical and jazz. She often goes to
              concerts on weekends. &quot;Music is my way of expressing
              emotions,&quot; she says. &quot;When I play the piano, I forget
              about all my problems.&quot;
            </p>
            <p>
              Sarah also wants to learn to play the guitar. She hopes to start
              taking lessons next month. Her dream is to form a small band with
              her friends and perform at local cafés.
            </p>
          </div>

          <div className="bg-sky-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-sky-900 mb-3">
              Mike, 35 — Sports Enthusiast
            </h4>
            <p className="mb-3">
              Mike is a very active person who can&apos;t imagine his life
              without sports. Every morning, he <strong>goes running</strong> in
              the park near his house. He usually runs for about 40 minutes,
              covering around 5 kilometres.
            </p>
            <p className="mb-3">
              On weekdays, Mike <strong>plays football</strong> with his
              colleagues after work. They have a small team and play friendly
              matches twice a week. &quot;Football is not just a game for
              me,&quot; Mike explains. &quot;It&apos;s a great way to spend time
              with friends and stay fit.&quot;
            </p>
            <p className="mb-3">
              On weekends, Mike enjoys trying different activities. In summer,
              he goes <strong>cycling</strong> or <strong>swimming</strong> at
              the local pool. In winter, he goes <strong>skiing</strong> in the
              mountains. He also does <strong>yoga</strong> twice a week to
              improve his flexibility.
            </p>
            <p>
              Mike believes that regular physical activity is essential for both
              physical and mental health. He always says: &quot;If you want to
              feel good, you need to move!&quot;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 8: Текст для чтения (часть 2) + словарь ===== */
function Step8() {
  return (
    <>
      <div className="bg-white rounded-lg p-6 border border-indigo-200 mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          Different People, Different Hobbies (continued)
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <div className="bg-zinc-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-zinc-900 mb-3">
              Emma, 42 — Creative Soul
            </h4>
            <p className="mb-3">
              Emma has always been interested in art and creative activities.
              Her main hobby is <strong>painting</strong>. She loves{" "}
              <strong>creating</strong> beautiful landscapes and portraits. Emma
              has a small studio at home where she spends hours working on her
              paintings.
            </p>
            <p className="mb-3">
              &quot;When I paint, time flies,&quot; Emma says. &quot;I can start
              in the morning and suddenly realise it&apos;s evening
              already!&quot; She particularly enjoys painting nature scenes —
              trees, flowers, rivers, and mountains. Some of her works are
              exhibited in local galleries.
            </p>
            <p className="mb-3">
              Apart from painting, Emma also enjoys <strong>reading</strong>.
              She loves historical novels and biographies. Every month, she
              finishes reading at least three books. She&apos;s a member of a
              book club where people meet to discuss their favourite books.
            </p>
            <p className="mb-3">
              Recently, Emma started a new hobby — <strong>photography</strong>.
              She bought a professional camera and is learning to take beautiful
              photos. She plans to combine her love for painting and photography
              by creating a blog about art.
            </p>
            <p>
              Emma believes that creative hobbies make life more interesting and
              meaningful. &quot;Art helps me see beauty in everyday
              things,&quot; she explains. &quot;It&apos;s not just about
              creating something — it&apos;s about expressing yourself.&quot;
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-green-900 mb-3">
              Conclusion
            </h4>
            <p className="mb-3">
              As we can see, people have very different hobbies. Some prefer
              active sports, others enjoy music, and some love creative
              activities. The important thing is to find something you truly
              enjoy doing in your free time.
            </p>
            <p>
              Hobbies help us develop new skills, meet interesting people, and
              improve our quality of life. They give us something to look
              forward to after work or study. So if you don&apos;t have a hobby
              yet, it&apos;s never too late to start!
            </p>
          </div>
        </div>
      </div>

      <UiSection title="Словарь к тексту">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["passionate", "/ˈpæʃənət/", "страстный, увлечённый"],
              ["express", "/ɪkˈspres/", "выражать"],
              ["perform", "/pəˈfɔːm/", "выступать"],
              ["enthusiast", "/ɪnˈθjuːziæst/", "энтузиаст"],
              ["cover", "/ˈkʌvə/", "покрывать (расстояние)"],
              ["essential", "/ɪˈsenʃl/", "необходимый"],
              ["flexibility", "/ˌfleksəˈbɪləti/", "гибкость"],
              ["creative soul", "—", "творческая натура"],
              ["landscape", "/ˈlændskeɪp/", "пейзаж"],
              ["portrait", "/ˈpɔːtrət/", "портрет"],
              ["exhibit", "/ɪɡˈzɪbɪt/", "выставлять"],
              ["meaningful", "/ˈmiːnɪŋfl/", "значимый"],
              ["quality of life", "—", "качество жизни"],
              ["look forward to", "—", "с нетерпением ждать"],
            ].map(([word, transcr, translation]) => (
              <div
                key={word}
                className="bg-white rounded-lg p-3 border-l-4 border-indigo-400"
              >
                <p className="font-bold text-indigo-700">{word}</p>
                <p className="text-xs text-zinc-600">{transcr}</p>
                <p className="text-sm text-zinc-800">{translation}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Задания на текст ===== */
function Step9() {
  const comprehensionExercise: FillItem[] = [
    {
      left: "1. Sarah started playing the piano when she was",
      right: "years old.",
      answers: ["seven", "7"],
      explanation: "из текста: 'when she was seven years old'",
    },
    {
      left: "2. Mike usually runs for about",
      right: "minutes every morning.",
      answers: ["forty", "40"],
      explanation: "из текста: 'for about 40 minutes'",
    },
    {
      left: "3. Mike plays",
      right: "twice a week with his colleagues.",
      answers: ["football"],
      explanation: "из текста: 'plays football with his colleagues'",
    },
    {
      left: "4. Emma's main hobby is",
      right: "",
      answers: ["painting"],
      explanation: "из текста: 'Her main hobby is painting'",
    },
    {
      left: "5. Emma finishes reading at least",
      right: "books every month.",
      answers: ["three", "3"],
      explanation: "из текста: 'at least three books'",
    },
  ];

  return (
    <>
      <UiSection title="Задания на понимание текста">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Проверьте, насколько внимательно вы прочитали текст!
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border border-indigo-200 mb-6">
        <h4 className="text-lg font-bold text-indigo-900 mb-4">
          Задание 1: True or False?
        </h4>
        <div className="space-y-4">
          {[
            {
              statement: "Sarah wants to learn to play the guitar.",
              answer: "True",
              explanation:
                "В тексте сказано: 'wants to learn to play the guitar'.",
            },
            {
              statement: "Mike goes running in the evening.",
              answer: "False",
              explanation:
                "Майк бегает утром: 'Every morning, he goes running'.",
            },
            {
              statement: "Mike plays football three times a week.",
              answer: "False",
              explanation:
                "Дважды в неделю: 'play friendly matches twice a week'.",
            },
            {
              statement: "Emma has a small studio at home.",
              answer: "True",
              explanation: "Прямо указано в тексте.",
            },
            {
              statement: "Emma recently started photography.",
              answer: "True",
              explanation:
                "Сказано: 'Recently, Emma started a new hobby — photography'.",
            },
            {
              statement: "All three people prefer sports.",
              answer: "False",
              explanation: "У Сары хобби — музыка, у Эммы — творчество.",
            },
            {
              statement: "Mike runs about 5 kilometres every morning.",
              answer: "True",
              explanation: "В тексте: 'covering around 5 kilometres'.",
            },
            {
              statement: "Emma reads at least five books every month.",
              answer: "False",
              explanation:
                "Эмма читает минимум 3 книги: 'at least three books'.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-50 rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">
                {idx + 1}. {item.statement}
              </p>
              <p className="text-sm text-indigo-700 mb-1">
                <strong>Ответ:</strong> {item.answer}
              </p>
              <p className="text-xs text-zinc-600">{item.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-sky-200 mb-6">
        <h4 className="text-lg font-bold text-sky-900 mb-4">
          Задание 2: Сопоставьте людей и их хобби
        </h4>
        <p className="text-sm text-zinc-700 mb-4">
          Соедините каждого человека с правильным описанием его хобби:
        </p>
        <div className="space-y-3">
          <div className="bg-sky-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-sky-900 mb-3">Люди:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {["A. Sarah", "B. Mike", "C. Emma"].map((person) => (
                <div key={person} className="bg-white rounded p-2">
                  <p className="text-sm text-zinc-800">{person}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-indigo-900 mb-3">
              Описания:
            </p>
            <div className="space-y-2">
              {[
                {
                  num: "1.",
                  desc: "Plays the piano and wants to start a band",
                  answer: "A (Sarah)",
                },
                {
                  num: "2.",
                  desc: "Goes running every morning and plays football twice a week",
                  answer: "B (Mike)",
                },
                {
                  num: "3.",
                  desc: "Paints landscapes and portraits, recently started photography",
                  answer: "C (Emma)",
                },
                {
                  num: "4.",
                  desc: "Favourite music genres are classical and jazz",
                  answer: "A (Sarah)",
                },
                {
                  num: "5.",
                  desc: "Does yoga twice a week to improve flexibility",
                  answer: "B (Mike)",
                },
                {
                  num: "6.",
                  desc: "Member of a book club, reads at least three books per month",
                  answer: "C (Emma)",
                },
              ].map((item) => (
                <div key={item.num} className="bg-white rounded p-3">
                  <p className="text-sm text-zinc-800 mb-1">
                    {item.num} {item.desc}
                  </p>
                  <p className="text-sm text-indigo-700">
                    <strong>Ответ:</strong> {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-indigo-200 mb-6">
        <h4 className="text-lg font-bold text-indigo-900 mb-4">
          Задание 3: Выберите правильный вариант (A, B или C)
        </h4>
        <div className="space-y-4">
          {[
            {
              q: "1. When did Sarah start playing the piano?",
              options: [
                "A. When she was five years old",
                "B. When she was seven years old",
                "C. When she was ten years old",
              ],
              answer: "B",
              explanation: "В тексте: 'when she was seven years old'.",
            },
            {
              q: "2. How long does Mike usually run every morning?",
              options: [
                "A. About 30 minutes",
                "B. About 40 minutes",
                "C. About 50 minutes",
              ],
              answer: "B",
              explanation: "В тексте: 'He usually runs for about 40 minutes'.",
            },
            {
              q: "3. How often does Mike play football?",
              options: [
                "A. Once a week",
                "B. Twice a week",
                "C. Three times a week",
              ],
              answer: "B",
              explanation: "В тексте: 'play friendly matches twice a week'.",
            },
            {
              q: "4. What type of books does Emma love?",
              options: [
                "A. Detective novels and thrillers",
                "B. Science fiction and fantasy",
                "C. Historical novels and biographies",
              ],
              answer: "C",
              explanation:
                "В тексте: 'She loves historical novels and biographies'.",
            },
            {
              q: "5. What does Mike do in winter?",
              options: [
                "A. He goes swimming",
                "B. He goes skiing",
                "C. He goes cycling",
              ],
              answer: "B",
              explanation:
                "В тексте: 'In winter, he goes skiing in the mountains'.",
            },
            {
              q: "6. What is Sarah's dream?",
              options: [
                "A. To become a professional pianist",
                "B. To teach music at school",
                "C. To form a band and perform at cafés",
              ],
              answer: "C",
              explanation:
                "В тексте: 'Her dream is to form a small band with her friends and perform at local cafés'.",
            },
            {
              q: "7. What does Emma particularly enjoy painting?",
              options: [
                "A. Portraits of famous people",
                "B. Nature scenes like trees and flowers",
                "C. Modern abstract art",
              ],
              answer: "B",
              explanation:
                "В тексте: 'She particularly enjoys painting nature scenes — trees, flowers, rivers, and mountains'.",
            },
            {
              q: "8. What is Emma planning to create?",
              options: [
                "A. An art gallery",
                "B. A blog about art",
                "C. A photography studio",
              ],
              answer: "B",
              explanation:
                "В тексте: 'She plans to combine her love for painting and photography by creating a blog about art'.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-zinc-50 rounded-lg p-4">
              <p className="text-sm font-semibold mb-3 text-zinc-900">
                {item.q}
              </p>
              <div className="space-y-1 mb-3">
                {item.options.map((opt) => (
                  <div key={opt} className="bg-white rounded p-2">
                    <p className="text-sm text-zinc-700">{opt}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-indigo-700 mb-1">
                <strong>Правильный ответ:</strong> {item.answer}
              </p>
              <p className="text-xs text-zinc-600">{item.explanation}</p>
            </div>
          ))}
        </div>
      </div>

      <CheckableExercise
        title="Задание 4: Заполните пропуски"
        instruction="Используйте информацию из текста."
        items={comprehensionExercise}
      />

      <UiSection title="Задание 5: Ответьте на вопросы">
        <div className="bg-white rounded-lg p-6 border border-indigo-200">
          <div className="space-y-4">
            {[
              {
                q: "What are Sarah's favourite music genres?",
                a: "Her favourite genres are classical and jazz.",
              },
              {
                q: "How does Mike spend his weekends?",
                a: "In summer he goes cycling or swimming, in winter he goes skiing. He also does yoga twice a week.",
              },
              {
                q: "What does Emma particularly enjoy painting?",
                a: "She particularly enjoys painting nature scenes — trees, flowers, rivers, and mountains.",
              },
              {
                q: "Why does Mike think football is important?",
                a: "It's a great way to spend time with friends and stay fit.",
              },
              {
                q: "What is Emma planning to do with photography and painting?",
                a: "She plans to combine them by creating a blog about art.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2 text-indigo-900">
                  {idx + 1}. {item.q}
                </p>
                <p className="text-sm text-zinc-700">
                  <strong className="text-indigo-700">Ответ:</strong> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговое задание ===== */
function Step10() {
  return (
    <>
      <UiSection title="Итоговое задание: Расскажите о своих хобби">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Творческое задание!
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Напишите рассказ о своих хобби, используя изученную лексику и
                грамматические конструкции.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border border-indigo-200 mb-6">
        <h4 className="text-lg font-bold text-indigo-900 mb-4">
          План рассказа:
        </h4>
        <div className="space-y-3">
          {[
            "1. Какое у вас главное хобби? (My main hobby is...)",
            "2. Как часто вы этим занимаетесь? (I do/play/go... every day/twice a week)",
            "3. Почему вам это нравится? (I enjoy... because...)",
            "4. Какие ещё хобби у вас есть? (I also like...)",
            "5. Что вы хотите попробовать в будущем? (I want to learn/try...)",
            "6. Как хобби влияют на вашу жизнь? (My hobbies help me...)",
          ].map((point, idx) => (
            <div key={idx} className="bg-zinc-50 rounded p-3">
              <p className="text-sm text-zinc-800">{point}</p>
            </div>
          ))}
        </div>
      </div>

      <UiSection title="Итоговая грамматическая таблица">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 via-sky-100 to-blue-100">
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Правило
                </th>
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Примеры
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-indigo-200 p-3 font-semibold text-indigo-700">
                  PLAY + team sports
                </td>
                <td className="border border-indigo-200 p-3">
                  play football, basketball, tennis, chess
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border border-indigo-200 p-3 font-semibold text-sky-700">
                  GO + -ing
                </td>
                <td className="border border-indigo-200 p-3">
                  go swimming, running, cycling, skiing
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-indigo-200 p-3 font-semibold text-slate-700">
                  DO + sports/activities
                </td>
                <td className="border border-indigo-200 p-3">
                  do yoga, karate, gymnastics, exercise
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border border-indigo-200 p-3 font-semibold text-indigo-700">
                  Verb + -ing
                </td>
                <td className="border border-indigo-200 p-3">
                  enjoy, love, hate, finish, keep, stop + -ing
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-indigo-200 p-3 font-semibold text-sky-700">
                  Verb + to + infinitive
                </td>
                <td className="border border-indigo-200 p-3">
                  want, need, plan, hope, decide + to + verb
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <div className="mt-6 space-y-4">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Что вы изучили:</span>
          </h4>
          <ul className="space-y-2 text-sm text-zinc-800">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>70+ слов</strong> для описания хобби и досуга
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>PLAY / GO / DO</strong> — правила использования с видами
                спорта
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Герундий и инфинитив</strong> после глаголов
                предпочтения
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Прочитали <strong>большой текст</strong> о разных хобби
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Научились <strong>говорить о своих интересах</strong>
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 border border-sky-200">
          <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Отличная работа!</span>
          </h4>
          <p className="text-sm text-zinc-800">
            Теперь вы можете уверенно говорить о любых хобби и увлечениях! Эта
            тема поможет вам заводить новые знакомства и поддерживать интересные
            разговоры на английском языке. Продолжайте практиковаться!
          </p>
        </div>
      </div>
    </>
  );
}
