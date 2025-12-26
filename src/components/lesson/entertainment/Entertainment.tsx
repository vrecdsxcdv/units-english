"use client";
import React from "react";
import { Section } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Entertainment({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ===== ШАГ 1: Введение + Фильмы и ТВ ===== */
function Step1() {
  return (
    <>
      <Section title="🎬 Entertainment & Leisure — Развлечения">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-lg p-8 border-2 border-purple-400">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">🎭🎬🎵</div>
            <h2 className="text-4xl font-bold text-purple-900 mb-3">
              Welcome to the World of Entertainment!
            </h2>
            <p className="text-xl text-purple-700">
              Погрузитесь в мир кино, музыки, театра и современных развлечений
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              🎯 Что вы освоите в этой теме
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border-l-4 border-red-400">
                <p className="font-bold text-red-900 mb-2">🎬 Кино и сериалы</p>
                <p className="text-zinc-700">Жанры, термины киноиндустрии, обсуждение фильмов</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-400">
                <p className="font-bold text-blue-900 mb-2">🎵 Музыка и концерты</p>
                <p className="text-zinc-700">Музыкальные жанры, live performances, фестивали</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                <p className="font-bold text-green-900 mb-2">🎮 Gaming</p>
                <p className="text-zinc-700">Видеоигры, киберспорт, streaming</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-4 border-l-4 border-purple-400">
                <p className="font-bold text-purple-900 mb-2">🎭 Театр и культура</p>
                <p className="text-zinc-700">Театральные постановки, музеи, выставки</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-5 border-2 border-amber-400">
            <p className="text-center text-lg font-semibold text-amber-900">
              💡 Более <span className="text-2xl text-orange-600">120 слов и выражений</span> для свободного общения о развлечениях!
            </p>
          </div>
        </div>
      </Section>

      <Section title="🎬 Movies & TV Shows — Кино и сериалы">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border-2 border-red-300">
            <h3 className="text-2xl font-bold text-red-900 mb-4">Film Genres — Жанры фильмов</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { en: "action movie", ru: "боевик", icon: "💥" },
                { en: "thriller", ru: "триллер", icon: "🔪" },
                { en: "horror film", ru: "фильм ужасов", icon: "👻" },
                { en: "rom-com (romantic comedy)", ru: "романтическая комедия", icon: "❤️😂" },
                { en: "drama", ru: "драма", icon: "🎭" },
                { en: "sci-fi (science fiction)", ru: "научная фантастика", icon: "🚀" },
                { en: "documentary", ru: "документальный фильм", icon: "📹" },
                { en: "animated film", ru: "мультфильм", icon: "🎨" },
                { en: "biopic", ru: "биографический фильм", icon: "📖" },
                { en: "fantasy", ru: "фэнтези", icon: "🧙" },
                { en: "mystery", ru: "детектив", icon: "🔍" },
                { en: "superhero movie", ru: "фильм о супергероях", icon: "🦸" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 border-l-4 border-red-400">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="font-bold text-red-900 text-sm">{item.en}</p>
                  </div>
                  <p className="text-xs text-zinc-600 ml-8">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-indigo-300">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Movie Vocabulary — Словарь кино</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { term: "plot", def: "сюжет" },
                { term: "storyline", def: "сюжетная линия" },
                { term: "cast", def: "актёрский состав" },
                { term: "director", def: "режиссёр" },
                { term: "screenplay", def: "сценарий" },
                { term: "special effects", def: "спецэффекты" },
                { term: "soundtrack", def: "саундтрек" },
                { term: "subtitles", def: "субтитры" },
                { term: "dubbed version", def: "дублированная версия" },
                { term: "box office", def: "кассовые сборы" },
                { term: "blockbuster", def: "блокбастер, хит" },
                { term: "premiere", def: "премьера" },
                { term: "trailer", def: "трейлер" },
                { term: "sequel", def: "продолжение" },
                { term: "prequel", def: "приквел" },
                { term: "spin-off", def: "спин-офф" },
                { term: "cliffhanger", def: "напряжённая концовка" },
                { term: "plot twist", def: "неожиданный поворот" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded p-3">
                  <p className="font-semibold text-indigo-900 text-sm">{item.term}</p>
                  <p className="text-xs text-zinc-600">{item.def}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
            <h4 className="text-xl font-bold text-purple-900 mb-4">💬 Useful Phrases about Movies</h4>
            <div className="space-y-3">
              {[
                { en: "This movie is a must-see!", ru: "Этот фильм обязателен к просмотру!" },
                { en: "The plot twist blew my mind!", ru: "Поворот сюжета взорвал мне мозг!" },
                { en: "It's a box office hit.", ru: "Это кассовый хит." },
                { en: "The film got rave reviews.", ru: "Фильм получил восторженные отзывы." },
                { en: "I was on the edge of my seat!", ru: "Я сидел как на иголках!" },
                { en: "It's a tear-jerker.", ru: "Это слезовыжималка." },
              ].map((phrase, idx) => (
                <div key={idx} className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-400">
                  <p className="font-semibold text-purple-900">{phrase.en}</p>
                  <p className="text-sm text-zinc-600">{phrase.ru}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ===== ШАГ 2: Музыка и концерты ===== */
function Step2() {
  return (
    <>
      <Section title="🎵 Music & Concerts — Музыка и концерты">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-6 border-2 border-purple-300">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Music Genres — Музыкальные жанры</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { genre: "pop music", ru: "поп-музыка", icon: "🎤" },
                { genre: "rock", ru: "рок", icon: "🎸" },
                { genre: "hip-hop / rap", ru: "хип-хоп / рэп", icon: "🎧" },
                { genre: "EDM (electronic dance music)", ru: "электронная танцевальная", icon: "🎹" },
                { genre: "jazz", ru: "джаз", icon: "🎷" },
                { genre: "classical music", ru: "классическая музыка", icon: "🎻" },
                { genre: "blues", ru: "блюз", icon: "🎺" },
                { genre: "country music", ru: "кантри", icon: "🤠" },
                { genre: "reggae", ru: "регги", icon: "🏝️" },
                { genre: "indie", ru: "инди", icon: "🎨" },
                { genre: "heavy metal", ru: "хэви-метал", icon: "🤘" },
                { genre: "R&B", ru: "ритм-энд-блюз", icon: "💿" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 border-l-4 border-purple-400">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{item.icon}</span>
                    <p className="font-bold text-purple-900 text-sm">{item.genre}</p>
                  </div>
                  <p className="text-xs text-zinc-600 ml-7">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border-2 border-pink-300">
            <h3 className="text-2xl font-bold text-pink-900 mb-4">Concerts & Live Music — Концерты</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { term: "live performance", def: "живое выступление" },
                { term: "concert hall", def: "концертный зал" },
                { term: "music festival", def: "музыкальный фестиваль" },
                { term: "arena / stadium", def: "арена / стадион" },
                { term: "gig", def: "концерт (неформ.)" },
                { term: "opening act", def: "разогревающая группа" },
                { term: "headliner", def: "главный исполнитель" },
                { term: "setlist", def: "список песен" },
                { term: "encore", def: "бис, выход на бис" },
                { term: "sold-out show", def: "аншлаг" },
                { term: "backstage", def: "за кулисами" },
                { term: "mosh pit", def: "толпа перед сценой" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded p-3">
                  <p className="font-semibold text-pink-900 text-sm">{item.term}</p>
                  <p className="text-xs text-zinc-600">{item.def}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300">
            <h4 className="text-xl font-bold text-blue-900 mb-4">🎸 Полезные выражения о музыке</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  phrase: "This song is stuck in my head",
                  ru: "Эта песня застряла у меня в голове",
                  example: "That Taylor Swift song is stuck in my head!",
                },
                {
                  phrase: "I'm really into [genre]",
                  ru: "Я очень увлекаюсь [жанр]",
                  example: "I'm really into indie rock these days.",
                },
                {
                  phrase: "The crowd went wild",
                  ru: "Толпа взорвалась от восторга",
                  example: "When the band played their hit, the crowd went wild!",
                },
                {
                  phrase: "It has a catchy tune",
                  ru: "У неё запоминающаяся мелодия",
                  example: "I don't know the lyrics, but it has a catchy tune.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="font-bold text-blue-900 mb-1">{item.phrase}</p>
                  <p className="text-sm text-zinc-600 mb-2">{item.ru}</p>
                  <div className="bg-blue-50 rounded p-2">
                    <p className="text-xs italic">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="✏️ Practice: Music Vocabulary">
        <CheckableExercise
          title="Заполните пропуски"
          instruction="Вставьте подходящие слова о музыке"
          items={[
            {
              left: "The concert was amazing! When they played their biggest hit, the",
              answers: ["crowd"],
              right: "went wild!",
              explanation: "'crowd' (толпа) — аудитория на концерте",
            },
            {
              left: "I can't stop humming that song – it's really",
              answers: ["catchy"],
              right: ".",
              explanation: "'catchy' — запоминающийся (о мелодии)",
            },
            {
              left: "The tickets sold out in minutes! It's a completely",
              answers: ["sold-out"],
              right: "show.",
              explanation: "'sold-out show' — концерт с аншлагом",
            },
            {
              left: "After the concert finished, the band came back for an",
              answers: ["encore"],
              right: ".",
              explanation: "'encore' — бис, дополнительное выступление",
            },
            {
              left: "I'm really",
              answers: ["into"],
              right: "electronic music these days.",
              explanation: "'be into something' — увлекаться чем-то",
            },
          ]}
        />
      </Section>
    </>
  );
}

/* ===== ШАГ 3: Видеоигры и gaming ===== */
function Step3() {
  return (
    <>
      <Section title="🎮 Video Games & Gaming — Видеоигры">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Game Genres — Типы игр</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { type: "RPG (role-playing game)", ru: "ролевая игра", icon: "⚔️" },
                { type: "FPS (first-person shooter)", ru: "шутер от 1-го лица", icon: "🔫" },
                { type: "MOBA", ru: "многопользовательская арена", icon: "🗡️" },
                { type: "battle royale", ru: "королевская битва", icon: "👑" },
                { type: "strategy game", ru: "стратегия", icon: "♟️" },
                { type: "puzzle game", ru: "головоломка", icon: "🧩" },
                { type: "simulation game", ru: "симулятор", icon: "🚗" },
                { type: "platformer", ru: "платформер", icon: "🏃" },
                { type: "fighting game", ru: "файтинг", icon: "🥊" },
                { type: "racing game", ru: "гонки", icon: "🏁" },
                { type: "survival horror", ru: "хоррор на выживание", icon: "🧟" },
                { type: "sandbox game", ru: "песочница", icon: "🏗️" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 border-l-4 border-green-400">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{item.icon}</span>
                    <p className="font-bold text-green-900 text-xs">{item.type}</p>
                  </div>
                  <p className="text-xs text-zinc-600 ml-7">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border-2 border-cyan-300">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">Gaming Terminology</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { term: "gameplay", def: "игровой процесс" },
                { term: "graphics", def: "графика" },
                { term: "frame rate (FPS)", def: "частота кадров" },
                { term: "quest / mission", def: "квест / миссия" },
                { term: "level / stage", def: "уровень" },
                { term: "boss fight", def: "битва с боссом" },
                { term: "power-up", def: "усиление" },
                { term: "achievement", def: "достижение" },
                { term: "leaderboard", def: "таблица лидеров" },
                { term: "multiplayer", def: "мультиплеер" },
                { term: "co-op", def: "кооперативный режим" },
                { term: "streaming", def: "стриминг" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded p-3">
                  <p className="font-semibold text-cyan-900 text-sm">{item.term}</p>
                  <p className="text-xs text-zinc-600">{item.def}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-300">
            <h4 className="text-xl font-bold text-orange-900 mb-4">🎯 Gaming Phrases</h4>
            <div className="space-y-3">
              {[
                {
                  phrase: "I'm addicted to this game!",
                  ru: "Я подсел на эту игру!",
                  example: "I've been playing Elden Ring for 100 hours – I'm addicted!",
                },
                {
                  phrase: "The graphics are mind-blowing",
                  ru: "Графика потрясающая",
                  example: "Have you seen the new Uncharted? The graphics are mind-blowing!",
                },
                {
                  phrase: "I rage-quit",
                  ru: "Я вышел в ярости",
                  example: "That level was so hard I rage-quit after the 50th attempt.",
                },
                {
                  phrase: "It has great replay value",
                  ru: "В неё приятно переигрывать",
                  example: "The story changes, so it has great replay value.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                  <p className="font-bold text-orange-900 mb-1">{item.phrase}</p>
                  <p className="text-sm text-zinc-600 mb-2">{item.ru}</p>
                  <div className="bg-orange-50 rounded p-2">
                    <p className="text-xs italic">{item.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ===== ШАГ 4: Phrasal Verbs для развлечений ===== */
function Step4() {
  const items: FillItem[] = [
    {
      left: "The new season",
      answers: ["comes out", "is coming out"],
      right: "on Friday. I can't wait!",
      explanation: "'come out' — выходить (о фильме, сериале, игре)",
    },
    {
      left: "I",
      answers: ["binge-watched"],
      right: "all 10 episodes last night!",
      explanation: "'binge-watch' — смотреть запоем много серий подряд",
    },
    {
      left: "I'm really",
      answers: ["looking forward to"],
      right: "the music festival this summer.",
      explanation: "'look forward to' — с нетерпением ждать",
    },
    {
      left: "You should",
      answers: ["check out"],
      right: "that new series on HBO!",
      explanation: "'check out' — посмотреть, изучить что-то",
    },
    {
      left: "I need to",
      answers: ["catch up on"],
      right: "Game of Thrones – I'm three seasons behind!",
      explanation: "'catch up on' — наверстать то, что пропустил",
    },
  ];

  return (
    <>
      <Section title="🔄 Phrasal Verbs: Entertainment">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-6 border-2 border-indigo-400">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            Фразовые глаголы для описания досуга
          </h3>

          <div className="space-y-4">
            {[
              {
                verb: "binge-watch",
                meaning: "смотреть сериал запоем (много серий подряд)",
                example: "I binge-watched Stranger Things in one weekend!",
                color: "red",
              },
              {
                verb: "tune in",
                meaning: "включить, настроиться на (ТВ/радио)",
                example: "Tune in to the live concert tonight at 8 PM.",
                color: "blue",
              },
              {
                verb: "come out",
                meaning: "выйти (о фильме, игре, альбоме)",
                example: "The new Marvel movie is coming out next month.",
                color: "green",
              },
              {
                verb: "sign up for",
                meaning: "зарегистрироваться",
                example: "I signed up for Netflix to watch that documentary.",
                color: "purple",
              },
              {
                verb: "look forward to",
                meaning: "с нетерпением ждать",
                example: "I'm looking forward to the concert this weekend!",
                color: "pink",
              },
              {
                verb: "check out",
                meaning: "посмотреть, изучить",
                example: "Check out this new band – they're amazing!",
                color: "cyan",
              },
              {
                verb: "catch up on",
                meaning: "наверстать, посмотреть пропущенное",
                example: "I need to catch up on the last three episodes.",
                color: "orange",
              },
              {
                verb: "zone out",
                meaning: "отключиться, расслабиться перед экраном",
                example: "I just want to zone out in front of the TV.",
                color: "teal",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-l-4 border-indigo-400"
              >
                <h4 className="text-xl font-bold text-indigo-900 mb-2">
                  {item.verb}
                </h4>
                <p className="text-sm text-zinc-700 mb-3">
                  <strong>Значение:</strong> {item.meaning}
                </p>
                <div className="bg-indigo-50 rounded p-3">
                  <p className="text-sm italic">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="✏️ Practice: Phrasal Verbs">
        <CheckableExercise
          title="Вставьте правильный phrasal verb"
          instruction="Используйте фразовые глаголы из списка выше"
          items={items}
        />
      </Section>
    </>
  );
}

/* ===== ШАГ 5: Collocations и идиомы ===== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "We",
      answers: ["had a good time", "had a great time"],
      right: "at the theater last night!",
      explanation: "'have a good/great time' — хорошо провести время",
    },
    {
      left: "The movie was a huge",
      answers: ["box office hit"],
      right: "and made over $1 billion.",
      explanation: "'box office hit' — кассовый хит",
    },
    {
      left: "Classical music isn't really",
      answers: ["my cup of tea"],
      right: "– I prefer rock.",
      explanation: "'not my cup of tea' — не моё, не нравится",
    },
    {
      left: "The thriller was so suspenseful! I was",
      answers: ["on the edge of my seat"],
      right: "the whole time.",
      explanation: "'on the edge of your seat' — в напряжении",
    },
    {
      left: "Her performance",
      answers: ["brought the house down"],
      right: "– everyone gave a standing ovation!",
      explanation: "'bring the house down' — вызвать бурные аплодисменты",
    },
  ];

  return (
    <>
      <Section title="💎 Collocations & Idioms — Устойчивые выражения">
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6 mb-6 border-2 border-violet-400">
          <h3 className="text-2xl font-bold text-violet-900 mb-4">
            Collocations о развлечениях
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                collocation: "have a good time",
                ru: "хорошо провести время",
                example: "We had a good time at the concert last night.",
              },
              {
                collocation: "box office hit",
                ru: "кассовый хит",
                example: "Avatar 2 was a massive box office hit worldwide.",
              },
              {
                collocation: "critical acclaim",
                ru: "признание критиков",
                example: "The film received critical acclaim at Cannes.",
              },
              {
                collocation: "edge-of-your-seat",
                ru: "захватывающий",
                example: "It's an edge-of-your-seat thriller!",
              },
              {
                collocation: "tear-jerker",
                ru: "слезовыжималка",
                example: "That movie is a real tear-jerker – bring tissues!",
              },
              {
                collocation: "guilty pleasure",
                ru: "постыдное удовольствие",
                example: "Reality TV shows are my guilty pleasure.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-violet-500">
                <p className="font-bold text-violet-900 mb-1">{item.collocation}</p>
                <p className="text-sm text-zinc-600 mb-2">{item.ru}</p>
                <div className="bg-violet-50 rounded p-2">
                  <p className="text-xs italic">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-6 border-2 border-rose-300">
          <h3 className="text-2xl font-bold text-rose-900 mb-4">Idioms о развлечениях</h3>
          <div className="space-y-4">
            {[
              {
                idiom: "It's not my cup of tea",
                meaning: "Это не моё (не нравится)",
                example: "Horror movies aren't my cup of tea – I prefer comedies.",
              },
              {
                idiom: "On the edge of your seat",
                meaning: "В напряжении",
                example: "The game was so intense, we were on the edge of our seats!",
              },
              {
                idiom: "Bring the house down",
                meaning: "Вызвать бурные аплодисменты",
                example: "Her performance brought the house down!",
              },
              {
                idiom: "Blast from the past",
                meaning: "Привет из прошлого",
                example: "Listening to 90s music is a blast from the past!",
              },
              {
                idiom: "The show must go on",
                meaning: "Шоу должно продолжаться",
                example: "Even though the lead was sick, the show must go on!",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-rose-500">
                <h4 className="text-lg font-bold text-rose-900 mb-2">
                  "{item.idiom}"
                </h4>
                <p className="text-sm text-zinc-700 mb-2">
                  <strong>Значение:</strong> {item.meaning}
                </p>
                <div className="bg-rose-50 rounded p-3">
                  <p className="text-sm italic">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="✏️ Practice: Collocations & Idioms">
        <CheckableExercise
          title="Выберите правильное выражение"
          instruction="Вставьте подходящий collocation или идиому"
          items={items}
        />
      </Section>
    </>
  );
}

/* ===== ШАГ 6: Чтение и comprehension ===== */
function Step6() {
  const comprehensionItems: FillItem[] = [
    {
      left: "Streaming platforms have changed how we watch TV.",
      answers: ["true", "True"],
      right: "",
      explanation: "В тексте говорится, что стриминг революционизировал просмотр.",
    },
    {
      left: "CDs are still the most popular way to listen to music.",
      answers: ["false", "False"],
      right: "",
      explanation: "Текст говорит, что CD заменены стриминговыми сервисами.",
    },
    {
      left: "The gaming industry is now a multi-billion-dollar business.",
      answers: ["true", "True"],
      right: "",
      explanation: "Текст прямо указывает на многомиллиардную индустрию.",
    },
    {
      left: "Virtual reality will create more immersive entertainment.",
      answers: ["true", "True"],
      right: "",
      explanation: "В конце текста упоминается VR для более погружающего опыта.",
    },
  ];

  return (
    <>
      <Section title="📖 Reading: The Evolution of Entertainment">
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg p-8 border-2 border-blue-400 mb-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            The Changing Face of Entertainment in the Digital Age
          </h2>

          <div className="space-y-6 text-zinc-800 leading-relaxed">
            <p className="text-lg">
              The way we consume entertainment has undergone a <strong>dramatic transformation</strong> over
              the past two decades. Gone are the days when families would gather around a single television
              set to watch programmes at scheduled times. Today's entertainment landscape is characterised by
              <strong> on-demand content</strong>, personalised recommendations, and an overwhelming abundance of choices.
            </p>

            <p className="text-lg">
              <strong>Streaming platforms</strong> like Netflix, Disney+, and Amazon Prime have revolutionised
              how we watch films and TV series. The phenomenon of <strong>binge-watching</strong> – consuming
              multiple episodes in one sitting – has become the norm. This shift has influenced how content
              is created, with many shows designed for marathon viewing sessions, often ending episodes on
              <strong> cliffhangers</strong> to keep viewers hooked.
            </p>

            <p className="text-lg">
              Music consumption has similarly evolved. Physical formats like CDs have been replaced by streaming
              services such as Spotify and Apple Music, which offer millions of songs at our fingertips. Meanwhile,
              <strong> live music festivals</strong> have grown into massive cultural events, with some attracting
              hundreds of thousands of attendees and becoming <strong>sold-out shows</strong> months in advance.
            </p>

            <p className="text-lg">
              The <strong>gaming industry</strong> has experienced the most dramatic growth. What was once a niche
              hobby has blossomed into a multi-billion-dollar industry. Modern video games boast
              <strong> mind-blowing graphics</strong>, complex narratives, and immersive gameplay. The rise of
              <strong> esports</strong> – competitive gaming watched by millions online – has created a new form
              of spectator entertainment, with professional players becoming celebrities.
            </p>

            <p className="text-lg">
              Social media has transformed entertainment by turning ordinary people into content creators. Platforms
              like YouTube, TikTok, and Twitch allow users to broadcast their own shows to global audiences. Many
              <strong> streamers</strong> have built massive followings and turned their channels into full-time careers.
            </p>

            <p className="text-lg">
              Looking ahead, emerging technologies like <strong>virtual reality (VR)</strong> and
              <strong> augmented reality (AR)</strong> promise to create even more immersive entertainment experiences.
              Imagine attending a concert from your living room while feeling as if you're in the front row. As technology
              continues to evolve, entertainment will keep adapting to our changing desires.
            </p>

            <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 mt-8">
              <h4 className="text-xl font-bold text-indigo-900 mb-4">📝 Key vocabulary:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div><strong>undergo</strong> — претерпевать</div>
                <div><strong>on-demand</strong> — по запросу</div>
                <div><strong>abundance</strong> — изобилие</div>
                <div><strong>revolutionise</strong> — революционизировать</div>
                <div><strong>immersive</strong> — погружающий</div>
                <div><strong>emerging</strong> — появляющийся</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="✏️ Comprehension Questions">
        <CheckableExercise
          title="True or False"
          instruction="Определите, правда это или ложь на основе текста"
          items={comprehensionItems}
        />

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
          <h4 className="text-xl font-bold text-amber-900 mb-4">
            💬 Discussion Questions
          </h4>
          <div className="space-y-3">
            {[
              "What is your favourite form of entertainment and why?",
              "Do you prefer watching films at the cinema or streaming at home?",
              "Have you ever binge-watched a TV series? Which one?",
              "What kind of music do you listen to?",
              "Do you play video games? What's your favourite genre?",
              "Have you been to any concerts or festivals?",
              "How much time do you spend on entertainment each day?",
              "What do you think entertainment will look like in 20 years?",
            ].map((question, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
                <p className="text-zinc-800 font-medium">{idx + 1}. {question}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

/* ===== ШАГ 7: Итоговая практика и резюме ===== */
function Step7() {
  const finalItems: FillItem[] = [
    {
      left: "I love sci-fi movies, but horror films aren't really",
      answers: ["my cup of tea"],
      right: ".",
      explanation: "'not my cup of tea' — не моё",
    },
    {
      left: "The new Marvel movie",
      answers: ["comes out", "is coming out"],
      right: "next Friday. I bought tickets!",
      explanation: "'come out' — выходить (о фильме)",
    },
    {
      left: "Last weekend I",
      answers: ["binge-watched"],
      right: "the entire first season of Wednesday.",
      explanation: "'binge-watch' — смотреть запоем",
    },
    {
      left: "The concert was amazing! The band played an",
      answers: ["encore"],
      right: "after the show.",
      explanation: "'encore' — бис",
    },
    {
      left: "I'm really",
      answers: ["into"],
      right: "strategy games these days.",
      explanation: "'be into' — увлекаться",
    },
    {
      left: "The movie received",
      answers: ["critical acclaim"],
      right: "and won several awards.",
      explanation: "'critical acclaim' — признание критиков",
    },
    {
      left: "That thriller had an incredible",
      answers: ["plot twist"],
      right: "at the end!",
      explanation: "'plot twist' — неожиданный поворот",
    },
    {
      left: "The",
      answers: ["graphics"],
      right: "in this game are mind-blowing!",
      explanation: "'graphics' — графика",
    },
    {
      left: "I need to",
      answers: ["catch up on"],
      right: "Breaking Bad – everyone says it's brilliant!",
      explanation: "'catch up on' — наверстать",
    },
    {
      left: "I'm",
      answers: ["looking forward to"],
      right: "the music festival this summer!",
      explanation: "'look forward to' — ждать с нетерпением",
    },
  ];

  return (
    <>
      <Section title="🎯 Final Practice">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6 border-2 border-purple-400">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            Итоговое упражнение
          </h3>
          <p className="text-zinc-700 mb-4">
            Проверьте, насколько хорошо вы освоили словарь о развлечениях!
          </p>
        </div>

        <CheckableExercise
          title="Complete the sentences"
          instruction="Заполните пропуски подходящими словами"
          items={finalItems}
        />
      </Section>

      <Section title="🎓 Summary — Что вы освоили">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-8 border-2 border-blue-400">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Поздравляем! Вы завершили тему Entertainment! 🎉
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-red-900 mb-4">🎬 Фильмы и ТВ</h4>
                <ul className="text-sm space-y-2 text-zinc-700">
                  <li>✅ 12 жанров фильмов</li>
                  <li>✅ 18 терминов о кино</li>
                  <li>✅ Streaming vocabulary</li>
                  <li>✅ Описание сюжета</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-purple-900 mb-4">🎵 Музыка</h4>
                <ul className="text-sm space-y-2 text-zinc-700">
                  <li>✅ 12 музыкальных жанров</li>
                  <li>✅ 12 терминов о концертах</li>
                  <li>✅ Полезные выражения</li>
                  <li>✅ Live performances</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-green-900 mb-4">🎮 Gaming</h4>
                <ul className="text-sm space-y-2 text-zinc-700">
                  <li>✅ 12 типов игр</li>
                  <li>✅ Gaming терминология</li>
                  <li>✅ Киберспорт словарь</li>
                  <li>✅ Gaming phrases</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-orange-900 mb-4">🔄 Phrasal Verbs</h4>
                <ul className="text-sm space-y-2 text-zinc-700">
                  <li>✅ binge-watch, tune in</li>
                  <li>✅ come out, check out</li>
                  <li>✅ catch up on</li>
                  <li>✅ look forward to</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-violet-900 mb-4">💎 Collocations</h4>
                <ul className="text-sm space-y-2 text-zinc-700">
                  <li>✅ have a good time</li>
                  <li>✅ box office hit</li>
                  <li>✅ critical acclaim</li>
                  <li>✅ edge-of-your-seat</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-bold text-pink-900 mb-4">🎭 Идиомы</h4>
                <ul className="text-sm space-y-2 text-zinc-700">
                  <li>✅ not my cup of tea</li>
                  <li>✅ bring the house down</li>
                  <li>✅ the show must go on</li>
                  <li>✅ blast from the past</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400">
            <h4 className="text-xl font-bold text-green-900 mb-4 text-center">
              📚 Total vocabulary: 120+ words and expressions!
            </h4>
            <p className="text-center text-zinc-700">
              Теперь вы можете свободно обсуждать любые темы о развлечениях —
              от Netflix сериалов до видеоигр и концертов!
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-6 border-2 border-amber-400">
            <h4 className="text-xl font-bold text-amber-900 mb-4 text-center">
              💡 Как практиковать дальше
            </h4>
            <div className="space-y-3 text-sm text-zinc-700">
              <p>🎯 <strong>Speaking:</strong> Опишите свой любимый фильм или сериал</p>
              <p>🎯 <strong>Writing:</strong> Напишите рецензию на фильм или игру</p>
              <p>🎯 <strong>Listening:</strong> Смотрите фильмы на английском с субтитрами</p>
              <p>🎯 <strong>Reading:</strong> Читайте обзоры фильмов и игр</p>
              <p>🎯 <strong>Real-life:</strong> Обсуждайте развлечения с друзьями на английском</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-8 text-center border-2 border-indigo-400">
            <div className="text-6xl mb-4">🎊</div>
            <p className="text-2xl font-bold text-indigo-900 mb-2">
              Excellent work!
            </p>
            <p className="text-lg text-indigo-700">
              You've completed the Entertainment topic and gained valuable vocabulary
              for discussing movies, music, gaming, and leisure activities!
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

