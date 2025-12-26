"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function SportsAndMusic({ step }: Props) {
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

/* ===== Компонент для Matching вопросов (как задание 12 ОГЭ) ===== */
function MatchingQuestion({
  question,
  options,
  correctAnswer,
  explanation,
}: {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="bg-zinc-50 rounded-lg p-4 mb-4">
      <p className="text-sm font-semibold mb-3 text-zinc-900">{question}</p>
      <div className="grid grid-cols-1 gap-2 mb-3">
        {options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrectOption = option === correctAnswer;

          return (
            <button
              key={option}
              onClick={() => !showResult && handleAnswer(option)}
              disabled={showResult}
              className={`text-left rounded p-3 transition-colors ${
                showResult
                  ? isCorrectOption
                    ? "bg-green-100 border-2 border-green-500 text-green-800 font-semibold"
                    : isSelected
                    ? "bg-red-100 border-2 border-red-500 text-red-800"
                    : "bg-white text-zinc-600 border border-zinc-200"
                  : isSelected
                  ? "bg-indigo-100 border-2 border-indigo-400 text-indigo-800"
                  : "bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-300"
              } ${!showResult ? "cursor-pointer" : "cursor-default"}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div
          className={`rounded-lg p-4 ${
            isCorrect
              ? "bg-green-50 border border-green-300"
              : "bg-red-50 border border-red-300"
          }`}
        >
          <p
            className={`text-sm font-semibold mb-2 ${
              isCorrect ? "text-green-800" : "text-red-800"
            }`}
          >
            {isCorrect ? "✓ Правильно!" : "✗ Неправильно"}
          </p>
          <p className="text-sm text-zinc-700 mb-1">
            <strong>Правильный ответ:</strong> {correctAnswer}
          </p>
          <p className="text-xs text-zinc-600">{explanation}</p>
        </div>
      )}
    </div>
  );
}

/* ===== СТРАНИЦА 1: Введение в хобби ===== */
function Step1() {
  return (
    <>
      <UiSection title="Hobbies and Free Time: Sports, Music, Reading">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎯</div>
            <div>
              <p className="text-lg font-bold text-indigo-900 mb-3">
                Хобби и свободное время
              </p>
              <p className="text-zinc-800 leading-relaxed">
                В этой теме мы изучим, как рассказать о своих увлечениях,
                спорте, музыке и чтении на английском языке.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            What is a Hobby? — Что такое хобби?
          </h4>
          <p className="text-zinc-800 mb-4 leading-relaxed">
            <strong>A hobby</strong> — это занятие, которым мы занимаемся в
            свободное время для удовольствия. Хобби помогает нам расслабиться,
            развиваться и получать радость от жизни.
          </p>
          <div className="bg-indigo-50 rounded-lg p-5">
            <h5 className="text-lg font-bold text-indigo-900 mb-3">
              Основные выражения:
            </h5>
            <div className="space-y-2 text-sm">
              <p className="text-zinc-800">
                <strong>My hobby is...</strong> — Моё хобби — это...
              </p>
              <p className="text-green-700 ml-4">
                My hobby is reading. — Моё хобби — чтение.
              </p>
              <p className="text-zinc-800 mt-3">
                <strong>I like / love / enjoy + -ing</strong> — Мне
                нравится/люблю
              </p>
              <p className="text-green-700 ml-4">
                I love playing football. — Я люблю играть в футбол.
              </p>
              <p className="text-zinc-800 mt-3">
                <strong>In my free time, I...</strong> — В свободное время я...
              </p>
              <p className="text-green-700 ml-4">
                In my free time, I listen to music. — В свободное время я слушаю
                музыку.
              </p>
              <p className="text-zinc-800 mt-3">
                <strong>I'm interested in...</strong> — Я интересуюсь...
              </p>
              <p className="text-green-700 ml-4">
                I'm interested in photography. — Я интересуюсь фотографией.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Types of Hobbies — Виды хобби
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { category: "Sports", example: "football, swimming, running" },
              { category: "Music", example: "playing guitar, singing" },
              { category: "Reading", example: "books, magazines, comics" },
              { category: "Arts & Crafts", example: "drawing, painting" },
              { category: "Technology", example: "gaming, programming" },
              { category: "Outdoor", example: "hiking, camping, fishing" },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <p className="font-bold text-green-900 mb-1">{item.category}</p>
                <p className="text-xs text-zinc-700">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Спорт - Часть 1 ===== */
function Step2() {
  return (
    <>
      <UiSection title="Sports — Спорт">
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-sky-300">
          <p className="text-sky-900 leading-relaxed font-semibold">
            Изучите виды спорта и как о них говорить.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Popular Sports — Популярные виды спорта
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "football (soccer)",
                transcr: "/ˈfʊtbɔːl/",
                translation: "футбол",
              },
              {
                word: "basketball",
                transcr: "/ˈbɑːskɪtbɔːl/",
                translation: "баскетбол",
              },
              {
                word: "volleyball",
                transcr: "/ˈvɒlibɔːl/",
                translation: "волейбол",
              },
              { word: "tennis", transcr: "/ˈtenɪs/", translation: "теннис" },
              {
                word: "table tennis",
                transcr: "/ˈteɪbl ˌtenɪs/",
                translation: "настольный теннис",
              },
              { word: "hockey", transcr: "/ˈhɒki/", translation: "хоккей" },
              {
                word: "swimming",
                transcr: "/ˈswɪmɪŋ/",
                translation: "плавание",
              },
              { word: "running", transcr: "/ˈrʌnɪŋ/", translation: "бег" },
              {
                word: "cycling",
                transcr: "/ˈsaɪklɪŋ/",
                translation: "велоспорт",
              },
              {
                word: "skiing",
                transcr: "/ˈskiːɪŋ/",
                translation: "лыжный спорт",
              },
              {
                word: "skating",
                transcr: "/ˈskeɪtɪŋ/",
                translation: "катание на коньках",
              },
              { word: "boxing", transcr: "/ˈbɒksɪŋ/", translation: "бокс" },
              {
                word: "wrestling",
                transcr: "/ˈreslɪŋ/",
                translation: "борьба",
              },
              {
                word: "gymnastics",
                transcr: "/dʒɪmˈnæstɪks/",
                translation: "гимнастика",
              },
              {
                word: "athletics",
                transcr: "/æθˈletɪks/",
                translation: "легкая атлетика",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
              >
                <p className="font-bold text-green-900 text-lg">{item.word}</p>
                <p className="text-xs text-green-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            📌 PLAY / DO / GO для спорта
          </h4>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-indigo-900 mb-2">
                PLAY + ball/team sports (игры с мячом, командные виды спорта)
              </p>
              <p className="text-sm text-green-700">
                play football, play basketball, play tennis, play hockey
              </p>
            </div>
            <div>
              <p className="font-bold text-indigo-900 mb-2">
                DO + martial arts, individual sports (единоборства,
                индивидуальные виды)
              </p>
              <p className="text-sm text-green-700">
                do judo, do karate, do gymnastics, do athletics
              </p>
            </div>
            <div>
              <p className="font-bold text-indigo-900 mb-2">
                GO + -ing sports (виды спорта с окончанием -ing)
              </p>
              <p className="text-sm text-green-700">
                go swimming, go running, go cycling, go skiing, go skating
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Продолжение следует... */

/* ===== СТРАНИЦА 3: Музыка ===== */
function Step3() {
  return (
    <>
      <UiSection title="Music — Музыка">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Музыкальные инструменты, жанры и полезная лексика.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Musical Instruments — Музыкальные инструменты
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { word: "guitar", transcr: "/ɡɪˈtɑː/", translation: "гитара" },
              {
                word: "piano",
                transcr: "/piˈænəʊ/",
                translation: "фортепиано",
              },
              {
                word: "violin",
                transcr: "/ˌvaɪəˈlɪn/",
                translation: "скрипка",
              },
              { word: "drums", transcr: "/drʌmz/", translation: "барабаны" },
              { word: "flute", transcr: "/fluːt/", translation: "флейта" },
              {
                word: "saxophone",
                transcr: "/ˈsæksəfəʊn/",
                translation: "саксофон",
              },
              { word: "trumpet", transcr: "/ˈtrʌmpɪt/", translation: "труба" },
              {
                word: "cello",
                transcr: "/ˈtʃeləʊ/",
                translation: "виолончель",
              },
              {
                word: "clarinet",
                transcr: "/ˌklærɪˈnet/",
                translation: "кларнет",
              },
              { word: "harp", transcr: "/hɑːp/", translation: "арфа" },
              {
                word: "accordion",
                transcr: "/əˈkɔːdiən/",
                translation: "аккордеон",
              },
              {
                word: "harmonica",
                transcr: "/hɑːˈmɒnɪkə/",
                translation: "губная гармошка",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400"
              >
                <p className="font-bold text-indigo-900 text-lg">{item.word}</p>
                <p className="text-xs text-indigo-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Music Genres — Музыкальные жанры
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { word: "rock", translation: "рок" },
              { word: "pop", translation: "поп-музыка" },
              { word: "jazz", translation: "джаз" },
              { word: "classical", translation: "классическая музыка" },
              { word: "hip-hop / rap", translation: "хип-хоп / рэп" },
              { word: "electronic", translation: "электронная музыка" },
              { word: "country", translation: "кантри" },
              { word: "blues", translation: "блюз" },
              { word: "folk", translation: "фолк" },
              { word: "heavy metal", translation: "хэви-метал" },
              { word: "reggae", translation: "регги" },
              { word: "soul", translation: "соул" },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-3">
                <p className="font-bold text-blue-900">{item.word}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            🎵 Полезные выражения о музыке
          </h4>
          <div className="space-y-2 text-sm">
            <p className="text-zinc-800">
              <strong>play the guitar</strong> — играть на гитаре (с the!)
            </p>
            <p className="text-zinc-800">
              <strong>listen to music</strong> — слушать музыку
            </p>
            <p className="text-zinc-800">
              <strong>sing a song</strong> — петь песню
            </p>
            <p className="text-zinc-800">
              <strong>write songs</strong> — писать песни
            </p>
            <p className="text-zinc-800">
              <strong>go to a concert</strong> — ходить на концерт
            </p>
            <p className="text-zinc-800">
              <strong>be in a band</strong> — быть в группе
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Чтение ===== */
function Step4() {
  return (
    <>
      <UiSection title="Reading — Чтение">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📚</div>
            <div>
              <p className="text-lg font-bold text-indigo-900 mb-2">
                Чтение — любимое хобби миллионов
              </p>
              <p className="text-zinc-800 leading-relaxed">
                Виды литературы, где читать и как говорить о книгах.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Types of Books — Виды книг
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { word: "novel", transcr: "/ˈnɒvl/", translation: "роман" },
              {
                word: "short story",
                transcr: "/ʃɔːt ˈstɔːri/",
                translation: "рассказ",
              },
              {
                word: "poem / poetry",
                transcr: "/ˈpəʊɪm/",
                translation: "стихотворение / поэзия",
              },
              {
                word: "fairy tale",
                transcr: "/ˈfeəri teɪl/",
                translation: "сказка",
              },
              {
                word: "fantasy",
                transcr: "/ˈfæntəsi/",
                translation: "фэнтези",
              },
              {
                word: "science fiction (sci-fi)",
                transcr: "/ˈsaɪəns ˌfɪkʃn/",
                translation: "научная фантастика",
              },
              {
                word: "detective story",
                transcr: "/dɪˈtektɪv ˌstɔːri/",
                translation: "детектив",
              },
              { word: "thriller", transcr: "/ˈθrɪlə/", translation: "триллер" },
              {
                word: "romance",
                transcr: "/rəʊˈmæns/",
                translation: "любовный роман",
              },
              { word: "horror", transcr: "/ˈhɒrə/", translation: "ужасы" },
              {
                word: "adventure",
                transcr: "/ədˈventʃə/",
                translation: "приключения",
              },
              {
                word: "biography",
                transcr: "/baɪˈɒɡrəfi/",
                translation: "биография",
              },
              {
                word: "autobiography",
                transcr: "/ˌɔːtəbaɪˈɒɡrəfi/",
                translation: "автобиография",
              },
              {
                word: "non-fiction",
                transcr: "/nɒn ˈfɪkʃn/",
                translation: "научно-популярная литература",
              },
              {
                word: "textbook",
                transcr: "/ˈtekstbʊk/",
                translation: "учебник",
              },
              {
                word: "encyclopedia",
                transcr: "/ɪnˌsaɪkləˈpiːdiə/",
                translation: "энциклопедия",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
              >
                <p className="font-bold text-green-900 text-lg">{item.word}</p>
                <p className="text-xs text-green-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Reading Materials — Материалы для чтения
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { word: "book", translation: "книга" },
              { word: "magazine", translation: "журнал" },
              { word: "newspaper", translation: "газета" },
              { word: "comic book", translation: "комикс" },
              { word: "e-book", translation: "электронная книга" },
              { word: "article", translation: "статья" },
              { word: "blog", translation: "блог" },
              { word: "website", translation: "веб-сайт" },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-3">
                <p className="font-bold text-blue-900">{item.word}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            📖 Полезные выражения о чтении
          </h4>
          <div className="space-y-2 text-sm">
            <p className="text-zinc-800">
              <strong>read a book</strong> — читать книгу
            </p>
            <p className="text-zinc-800">
              <strong>borrow a book (from a library)</strong> — взять книгу (в
              библиотеке)
            </p>
            <p className="text-zinc-800">
              <strong>buy a book</strong> — купить книгу
            </p>
            <p className="text-zinc-800">
              <strong>My favourite author is...</strong> — Мой любимый автор...
            </p>
            <p className="text-zinc-800">
              <strong>The book is about...</strong> — Книга о...
            </p>
            <p className="text-zinc-800">
              <strong>I enjoy reading...</strong> — Мне нравится читать...
            </p>
            <p className="text-zinc-800">
              <strong>I can't put it down!</strong> — Не могу оторваться!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Упражнения ===== */
function Step5() {
  const exercise1: FillItem[] = [
    {
      left: "1. I",
      right: "football every Saturday. (играть)",
      answers: ["play"],
      explanation:
        "play football = играть в футбол (PLAY для командных видов спорта)",
    },
    {
      left: "2. She can",
      right: "the piano very well. (играть)",
      answers: ["play"],
      explanation: "play the piano = играть на фортепиано (с артиклем the)",
    },
    {
      left: "3. My brother does",
      right: "every morning. (дзюдо)",
      answers: ["judo"],
      explanation: "do judo = заниматься дзюдо (DO для единоборств)",
    },
    {
      left: "4. We go",
      right: "in the lake every summer. (плавание)",
      answers: ["swimming"],
      explanation: "go swimming = ходить плавать (GO + -ing)",
    },
    {
      left: "5. I love listening to",
      right: "music. (классическая)",
      answers: ["classical"],
      explanation: "classical music = классическая музыка",
    },
    {
      left: "6. She enjoys reading",
      right: "stories. (детектив)",
      answers: ["detective"],
      explanation: "detective stories = детективные истории",
    },
    {
      left: "7. My favourite",
      right: "is Stephen King. (автор)",
      answers: ["author"],
      explanation: "author = автор",
    },
    {
      left: "8. He is in a rock",
      right: ". (группа)",
      answers: ["band"],
      explanation: "be in a band = быть в группе",
    },
  ];

  return (
    <>
      <UiSection title="Упражнения">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Практикуйте лексику по спорту, музыке и чтению.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Заполните пропуски"
        instruction="Впишите подходящие слова."
        items={exercise1}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-green-300 mt-6">
        <h4 className="text-xl font-bold text-green-900 mb-4">
          Диалог: Talking About Hobbies
        </h4>
        <div className="space-y-3 text-sm">
          <div className="bg-green-50 rounded p-4">
            <p className="font-bold text-green-900 mb-1">Alex:</p>
            <p className="text-zinc-800">
              Hi! What do you like doing in your free time?
            </p>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <p className="font-bold text-blue-900 mb-1">Maria:</p>
            <p className="text-zinc-800">
              I love playing the guitar and listening to music. I'm really into
              rock and pop. What about you?
            </p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="font-bold text-green-900 mb-1">Alex:</p>
            <p className="text-zinc-800">
              That's cool! I'm more into sports. I play football twice a week
              and go swimming every Sunday.
            </p>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <p className="font-bold text-blue-900 mb-1">Maria:</p>
            <p className="text-zinc-800">Sounds active! Do you read at all?</p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="font-bold text-green-900 mb-1">Alex:</p>
            <p className="text-zinc-800">
              Yes, I enjoy reading detective stories before bed. My favourite
              author is Agatha Christie.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Рассказать о своем хобби ===== */
function Step6() {
  return (
    <>
      <UiSection title="How to Talk About Your Hobbies">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Как подробно рассказать о своих увлечениях.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Structure Your Answer — Структура ответа
          </h4>
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-5">
              <h5 className="text-lg font-bold text-indigo-900 mb-3">
                1. Назовите хобби
              </h5>
              <p className="text-sm text-zinc-800 mb-2">
                <strong>My hobby is...</strong> / <strong>I enjoy...</strong> /{" "}
                <strong>I'm interested in...</strong>
              </p>
              <p className="text-sm text-green-700">
                My hobby is playing basketball. / I enjoy reading fantasy books.
              </p>
            </div>

            <div className="bg-sky-50 rounded-lg p-5">
              <h5 className="text-lg font-bold text-sky-900 mb-3">
                2. Когда вы этим занимаетесь
              </h5>
              <p className="text-sm text-zinc-800 mb-2">
                <strong>
                  I... every day / twice a week / at weekends / in my free time
                </strong>
              </p>
              <p className="text-sm text-green-700">
                I play basketball twice a week after school.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <h5 className="text-lg font-bold text-green-900 mb-3">
                3. Почему вам это нравится
              </h5>
              <p className="text-sm text-zinc-800 mb-2">
                <strong>I like it because...</strong> /{" "}
                <strong>It helps me to...</strong> /{" "}
                <strong>It makes me...</strong>
              </p>
              <p className="text-sm text-green-700">
                I like it because it helps me to stay healthy and makes me feel
                energetic.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-5">
              <h5 className="text-lg font-bold text-purple-900 mb-3">
                4. Дополнительная информация
              </h5>
              <p className="text-sm text-zinc-800 mb-2">
                Где, с кем, как давно, планы на будущее
              </p>
              <p className="text-sm text-green-700">
                I've been playing for three years. I usually play with my
                friends at the local sports centre.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            💡 Пример полного ответа
          </h4>
          <div className="bg-white rounded-lg p-5 text-sm text-zinc-800 leading-relaxed">
            <p className="mb-3">
              <strong className="text-indigo-900">My hobby is reading.</strong>{" "}
              I read almost every day, usually before bed. I'm particularly
              interested in fantasy and science fiction novels. My favourite
              author is J.R.R. Tolkien.
            </p>
            <p className="mb-3">
              <strong className="text-sky-900">I love reading</strong> because
              it allows me to escape into different worlds and forget about
              everyday problems. It also helps me to improve my vocabulary and
              imagination.
            </p>
            <p>
              <strong className="text-green-900">I've been reading</strong>{" "}
              fantasy books for about five years now. I usually borrow books
              from the library or buy them online. In the future, I'd like to
              join a book club to discuss books with other people who share my
              interest.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Текст для чтения (часть 1) ===== */
function Step7() {
  return (
    <>
      <UiSection title="Reading: Three People, Three Hobbies">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed">
            Прочитайте тексты о трёх людях и их увлечениях. На следующих
            страницах будут задания.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          Three People, Three Hobbies
        </h3>

        <div className="space-y-6 text-zinc-800 leading-relaxed">
          <div className="bg-green-50 rounded-lg p-5">
            <h4 className="text-xl font-bold text-green-900 mb-3">
              A. Tom — The Football Fanatic
            </h4>
            <p className="mb-3">
              Tom is 16 years old and lives in Manchester. His greatest passion
              is football. He has been playing football since he was seven years
              old and now plays for his school team as a striker. Tom trains
              four times a week and has matches every Saturday.
            </p>
            <p className="mb-3">
              "I love everything about football," says Tom. "The teamwork, the
              competition, and the feeling when you score a goal – it's amazing!
              Football has taught me discipline and helped me make many friends.
              My dream is to become a professional footballer one day."
            </p>
            <p>
              Besides playing, Tom also enjoys watching football matches on TV.
              His favourite team is Manchester United, and he goes to watch
              their home games whenever he can. He also collects football cards
              and has hundreds of them in his collection. Tom believes that
              football is not just a sport but a way of life.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-5">
            <h4 className="text-xl font-bold text-blue-900 mb-3">
              B. Emma — The Music Lover
            </h4>
            <p className="mb-3">
              Emma is 15 and has been passionate about music for as long as she
              can remember. She started learning to play the piano when she was
              six and added the guitar to her skills three years ago. Now she
              can play both instruments quite well and even writes her own
              songs.
            </p>
            <p className="mb-3">
              "Music is my way of expressing myself," Emma explains. "When I'm
              sad or stressed, I sit down at the piano and play. It always makes
              me feel better. I love all kinds of music, but my favourite genres
              are pop and classical."
            </p>
            <p>
              Emma practices the piano for an hour every day and plays the
              guitar in her school band. The band performs at school events and
              local music festivals. She also enjoys going to concerts and music
              festivals with her friends. Emma's biggest dream is to study music
              at university and maybe become a music teacher or a professional
              musician in the future.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-5">
            <h4 className="text-xl font-bold text-purple-900 mb-3">
              C. David — The Bookworm
            </h4>
            <p className="mb-3">
              David is 17 and absolutely loves reading. While other teenagers
              spend hours on social media or playing video games, David prefers
              to curl up with a good book. He reads at least one book a week and
              has a personal library of over 300 books at home.
            </p>
            <p className="mb-3">
              "Reading opens up whole new worlds for me," says David. "I can
              travel to different countries, meet interesting characters, and
              learn about things I never knew existed. My favourite genres are
              science fiction and detective stories. I especially love books by
              Isaac Asimov and Arthur Conan Doyle."
            </p>
            <p className="mb-3">
              David is a member of his school's book club, where students meet
              once a month to discuss books they've read. He also writes book
              reviews for the school website. During the summer holidays, David
              likes to visit different libraries and bookshops in his city. He
              keeps a reading diary where he writes down his thoughts about
              every book he reads.
            </p>
            <p>
              David's parents are very supportive of his hobby. They give him
              books as presents and take him to book fairs. David hopes to study
              literature at university and dreams of becoming a writer himself
              one day.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-lg p-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Словарь к тексту
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ["fanatic", "/fəˈnætɪk/", "фанат"],
            ["passion", "/ˈpæʃn/", "страсть"],
            ["striker", "/ˈstraɪkə/", "нападающий (в футболе)"],
            ["discipline", "/ˈdɪsəplɪn/", "дисциплина"],
            ["express", "/ɪkˈspres/", "выражать"],
            ["perform", "/pəˈfɔːm/", "выступать"],
            ["bookworm", "/ˈbʊkwɜːm/", "книжный червь"],
            ["curl up", "—", "свернуться калачиком"],
            ["review", "/rɪˈvjuː/", "рецензия, отзыв"],
            ["supportive", "/səˈpɔːtɪv/", "поддерживающий"],
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
    </>
  );
}

/* ===== СТРАНИЦА 8: Задание на соответствие (как задание 12 ОГЭ) ===== */
function Step8() {
  return (
    <>
      <UiSection title="Reading Comprehension: Matching">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📝</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Задание на соответствие
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Прочитайте утверждения и определите, кому из трёх людей (A —
                Tom, B — Emma, C — David) они соответствуют.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-4">
        <MatchingQuestion
          question="1. This person practices their hobby for an hour every day."
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="B — Emma (Music)"
          explanation="В тексте про Emma сказано: 'Emma practices the piano for an hour every day'."
        />

        <MatchingQuestion
          question="2. This person collects something related to their hobby."
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="A — Tom (Football)"
          explanation="Tom collects football cards: 'He also collects football cards and has hundreds of them in his collection.'"
        />

        <MatchingQuestion
          question="3. This person started their hobby at the age of six."
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="B — Emma (Music)"
          explanation="Emma started learning piano at six: 'She started learning to play the piano when she was six'."
        />

        <MatchingQuestion
          question="4. This person has over 300 items in their collection."
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="C — David (Reading)"
          explanation="David has a personal library: 'has a personal library of over 300 books at home'."
        />

        <MatchingQuestion
          question="5. This person performs at school events."
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="B — Emma (Music)"
          explanation="Emma plays in the school band: 'The band performs at school events and local music festivals.'"
        />

        <MatchingQuestion
          question="6. This person trains four times a week."
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="A — Tom (Football)"
          explanation="Tom trains regularly: 'Tom trains four times a week'."
        />

        <MatchingQuestion
          question="7. This person wants to become a teacher in the future."
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="B — Emma (Music)"
          explanation="Emma's dream: 'maybe become a music teacher or a professional musician in the future'."
        />

        <MatchingQuestion
          question="8. This person is a member of a club that meets once a month."
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="C — David (Reading)"
          explanation="David is in a book club: 'students meet once a month to discuss books they've read'."
        />
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 9: Дополнительные вопросы по тексту ===== */
function Step9() {
  return (
    <>
      <UiSection title="More Questions About the Text">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed">
            Ответьте на дополнительные вопросы о тексте.
          </p>
        </div>
      </UiSection>

      <div className="space-y-4">
        <MatchingQuestion
          question="9. Who has been doing their hobby since they were seven years old?"
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="A — Tom (Football)"
          explanation="Tom: 'He has been playing football since he was seven years old'."
        />

        <MatchingQuestion
          question="10. Who can play two different instruments?"
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="B — Emma (Music)"
          explanation="Emma: 'Now she can play both instruments' (piano and guitar)."
        />

        <MatchingQuestion
          question="11. Who reads at least one book per week?"
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="C — David (Reading)"
          explanation="David: 'He reads at least one book a week'."
        />

        <MatchingQuestion
          question="12. Who wants to become a professional in their hobby?"
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="A — Tom (Football)"
          explanation="Tom's dream: 'My dream is to become a professional footballer one day'."
        />

        <MatchingQuestion
          question="13. Who writes their own creative works?"
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="B — Emma (Music)"
          explanation="Emma: 'even writes her own songs'."
        />

        <MatchingQuestion
          question="14. Who keeps a diary related to their hobby?"
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="C — David (Reading)"
          explanation="David: 'He keeps a reading diary where he writes down his thoughts about every book he reads'."
        />

        <MatchingQuestion
          question="15. Whose parents give them presents related to their hobby?"
          options={[
            "A — Tom (Football)",
            "B — Emma (Music)",
            "C — David (Reading)",
          ]}
          correctAnswer="C — David (Reading)"
          explanation="David: 'They give him books as presents'."
        />
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговые упражнения ===== */
function Step10() {
  const exercise: FillItem[] = [
    {
      left: "1. I",
      right: "tennis every weekend. (играть)",
      answers: ["play"],
      explanation: "play tennis = играть в теннис",
    },
    {
      left: "2. She loves",
      right: "to classical music. (слушать)",
      answers: ["listening"],
      explanation: "love + -ing: listening to music = слушать музыку",
    },
    {
      left: "3. My brother does",
      right: "three times a week. (карате)",
      answers: ["karate"],
      explanation: "do karate = заниматься карате",
    },
    {
      left: "4. I enjoy",
      right: "detective stories. (читать)",
      answers: ["reading"],
      explanation: "enjoy + -ing: reading = чтение",
    },
    {
      left: "5. He can play the",
      right: "very well. (скрипка)",
      answers: ["violin"],
      explanation: "play the violin = играть на скрипке (с артиклем the)",
    },
    {
      left: "6. We go",
      right: "in the mountains every winter. (катание на лыжах)",
      answers: ["skiing"],
      explanation: "go skiing = ходить кататься на лыжах",
    },
    {
      left: "7. My favourite",
      right: "is rock music. (жанр)",
      answers: ["genre"],
      explanation: "genre = жанр",
    },
    {
      left: "8. She borrowed a book from the",
      right: ". (библиотека)",
      answers: ["library"],
      explanation: "library = библиотека",
    },
    {
      left: "9. I'm interested",
      right: "photography. (в)",
      answers: ["in"],
      explanation: "interested in = интересоваться чем-либо",
    },
    {
      left: "10. He is in a",
      right: "and they perform at concerts. (группа)",
      answers: ["band"],
      explanation: "be in a band = быть в группе",
    },
  ];

  return (
    <>
      <UiSection title="Итоговые упражнения">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Проверьте, как вы усвоили материал по теме "Hobbies and Free Time".
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение: Вставьте пропущенные слова"
        instruction="Заполните пропуски подходящими словами."
        items={exercise}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-300 mt-6 mb-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Сводная таблица: Основные категории
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 via-sky-100 to-blue-100">
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Категория
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Примеры
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Sports (PLAY)
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  football, basketball, tennis, volleyball
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Sports (DO)
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  judo, karate, gymnastics, athletics
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Sports (GO)
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  swimming, running, cycling, skiing
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Music Instruments
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  guitar, piano, violin, drums, flute
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Music Genres
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  rock, pop, jazz, classical, hip-hop
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Types of Books
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  novel, detective, fantasy, sci-fi, biography
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border-2 border-indigo-300 rounded-lg p-6">
          <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Что вы изучили:</span>
          </h4>
          <ul className="space-y-2 text-sm text-zinc-800">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>15+ видов спорта</strong> и правила использования PLAY /
                DO / GO
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>12+ музыкальных инструментов</strong> и 12 музыкальных
                жанров
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>16+ видов книг</strong> и литературных жанров
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Как рассказать о своих хобби</strong> — структура ответа
                и полезные фразы
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Чтение с заданием на соответствие</strong> — практика
                понимания текста
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-sky-300">
          <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Отличная работа!</span>
          </h4>
          <p className="text-sm text-zinc-800">
            Вы успешно освоили лексику по теме "Hobbies and Free Time"! Теперь
            вы можете рассказать о своих увлечениях, спорте, музыке и чтении на
            английском языке. Продолжайте практиковаться, описывая свои хобби и
            задавая вопросы другим!
          </p>
        </div>
      </div>
    </>
  );
}
