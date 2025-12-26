"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function CityAndShops({ step }: Props) {
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

/* ===== Компонент для True/False вопросов ===== */
function TrueFalseQuestion({
  question,
  correctAnswer,
  explanation,
}: {
  question: string;
  correctAnswer: "True" | "False";
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
      <div className="flex gap-3 mb-3">
        {["True", "False"].map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrectOption = option === correctAnswer;

          return (
            <button
              key={option}
              onClick={() => !showResult && handleAnswer(option)}
              disabled={showResult}
              className={`flex-1 rounded p-3 transition-colors font-semibold ${
                showResult
                  ? isCorrectOption
                    ? "bg-green-100 border-2 border-green-500 text-green-800"
                    : isSelected
                    ? "bg-red-100 border-2 border-red-500 text-red-800"
                    : "bg-white text-zinc-600"
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

/* ===== СТРАНИЦА 1: Места в городе ===== */
function Step1() {
  return (
    <>
      <UiSection title="City and Shops: Places, Directions">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🏙️</div>
            <div>
              <p className="text-lg font-bold text-indigo-900 mb-3">
                Город, магазины и направления
              </p>
              <p className="text-zinc-800 leading-relaxed">
                В этой теме мы изучим названия мест в городе, типы магазинов и
                как объяснить, как куда-то пройти.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Places in the City — Места в городе
          </h4>
          <p className="text-zinc-700 mb-4">
            Изучите названия основных мест и зданий в городе:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "street",
                transcr: "/striːt/",
                translation: "улица",
                example: "live on Main Street",
              },
              {
                word: "road",
                transcr: "/rəʊd/",
                translation: "дорога",
                example: "walk along the road",
              },
              {
                word: "square",
                transcr: "/skweə/",
                translation: "площадь",
                example: "meet at the square",
              },
              {
                word: "park",
                transcr: "/pɑːk/",
                translation: "парк",
                example: "go to the park",
              },
              {
                word: "bridge",
                transcr: "/brɪdʒ/",
                translation: "мост",
                example: "cross the bridge",
              },
              {
                word: "corner",
                transcr: "/ˈkɔːnə/",
                translation: "угол",
                example: "turn at the corner",
              },
              {
                word: "crossroads / intersection",
                transcr: "/ˈkrɒsrəʊdz/",
                translation: "перекрёсток",
                example: "wait at the crossroads",
              },
              {
                word: "traffic lights",
                transcr: "/ˈtræfɪk laɪts/",
                translation: "светофор",
                example: "stop at the traffic lights",
              },
              {
                word: "pavement / sidewalk",
                transcr: "/ˈpeɪvmənt/",
                translation: "тротуар",
                example: "walk on the pavement",
              },
              {
                word: "zebra crossing",
                transcr: "/ˌzebrə ˈkrɒsɪŋ/",
                translation: "пешеходный переход",
                example: "use the zebra crossing",
              },
              {
                word: "roundabout",
                transcr: "/ˈraʊndəbaʊt/",
                translation: "круговая развязка",
                example: "go around the roundabout",
              },
              {
                word: "bus stop",
                transcr: "/bʌs stɒp/",
                translation: "автобусная остановка",
                example: "wait at the bus stop",
              },
              {
                word: "underground / subway",
                transcr: "/ˈʌndəɡraʊnd/",
                translation: "метро",
                example: "take the underground",
              },
              {
                word: "station",
                transcr: "/ˈsteɪʃn/",
                translation: "вокзал, станция",
                example: "go to the station",
              },
              {
                word: "airport",
                transcr: "/ˈeəpɔːt/",
                translation: "аэропорт",
                example: "fly from the airport",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400"
              >
                <p className="font-bold text-indigo-900 text-lg">{item.word}</p>
                <p className="text-xs text-indigo-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800 mb-1">{item.translation}</p>
                <p className="text-xs text-green-700 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            💡 Полезно знать
          </h4>
          <div className="space-y-2 text-sm text-zinc-800">
            <p>
              <strong>Street</strong> — улица с домами и магазинами
            </p>
            <p>
              <strong>Road</strong> — любая дорога, часто за городом
            </p>
            <p>
              <strong>Avenue</strong> /ˈævənjuː/ — широкая улица с деревьями
            </p>
            <p>
              <strong>Lane</strong> /leɪn/ — узкая улица или переулок
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* Продолжение в следующем сообщении из-за длины... */

/* ===== СТРАНИЦА 2: Магазины и учреждения (часть 1) ===== */
function Step2() {
  return (
    <>
      <UiSection title="Shops and Buildings — Магазины и здания">
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-sky-300">
          <p className="text-sky-900 leading-relaxed font-semibold">
            Типы магазинов и общественных зданий в городе.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Shops — Магазины
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "shop / store",
                transcr: "/ʃɒp/ /stɔː/",
                translation: "магазин",
              },
              {
                word: "supermarket",
                transcr: "/ˈsuːpəˌmɑːkɪt/",
                translation: "супермаркет",
              },
              {
                word: "shopping centre / mall",
                transcr: "/ˈʃɒpɪŋ ˌsentə/",
                translation: "торговый центр",
              },
              { word: "bakery", transcr: "/ˈbeɪkəri/", translation: "пекарня" },
              {
                word: "butcher's",
                transcr: "/ˈbʊtʃəz/",
                translation: "мясной магазин",
              },
              {
                word: "greengrocer's",
                transcr: "/ˈɡriːnˌɡrəʊsəz/",
                translation: "овощной магазин",
              },
              {
                word: "fishmonger's",
                transcr: "/ˈfɪʃˌmʌŋɡəz/",
                translation: "рыбный магазин",
              },
              {
                word: "chemist's / pharmacy",
                transcr: "/ˈkemɪsts/",
                translation: "аптека",
              },
              {
                word: "bookshop / bookstore",
                transcr: "/ˈbʊkʃɒp/",
                translation: "книжный магазин",
              },
              {
                word: "clothes shop",
                transcr: "—",
                translation: "магазин одежды",
              },
              {
                word: "shoe shop",
                transcr: "—",
                translation: "обувной магазин",
              },
              {
                word: "toy shop",
                transcr: "—",
                translation: "магазин игрушек",
              },
              {
                word: "newsagent's",
                transcr: "/ˈnjuːzˌeɪdʒənts/",
                translation: "газетный киоск",
              },
              {
                word: "florist's",
                transcr: "/ˈflɒrɪsts/",
                translation: "цветочный магазин",
              },
              {
                word: "jeweller's",
                transcr: "/ˈdʒuːələz/",
                translation: "ювелирный магазин",
              },
              { word: "market", transcr: "/ˈmɑːkɪt/", translation: "рынок" },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <p className="font-bold text-green-900">{item.word}</p>
                <p className="text-xs text-green-600">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            📌 Окончание 's
          </h4>
          <p className="text-sm text-zinc-800 mb-3">
            Многие названия магазинов имеют окончание <strong>'s</strong>,
            потому что раньше они назывались по имени владельца:
          </p>
          <div className="space-y-2">
            <p className="text-sm text-green-700">
              <strong>the butcher's</strong> = the butcher's shop (магазин
              мясника)
            </p>
            <p className="text-sm text-green-700">
              <strong>the chemist's</strong> = the chemist's shop (магазин
              аптекаря)
            </p>
            <p className="text-sm text-green-700">
              <strong>the greengrocer's</strong> = the greengrocer's shop
              (магазин зеленщика)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: Общественные здания ===== */
function Step3() {
  return (
    <>
      <UiSection title="Public Buildings — Общественные здания">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Важные здания и учреждения в городе.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Buildings & Places — Здания и места
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "bank",
                transcr: "/bæŋk/",
                translation: "банк",
                example: "get money from the bank",
              },
              {
                word: "post office",
                transcr: "/pəʊst ˌɒfɪs/",
                translation: "почта",
                example: "send a letter",
              },
              {
                word: "library",
                transcr: "/ˈlaɪbrəri/",
                translation: "библиотека",
                example: "borrow books",
              },
              {
                word: "hospital",
                transcr: "/ˈhɒspɪtl/",
                translation: "больница",
                example: "see a doctor",
              },
              {
                word: "clinic",
                transcr: "/ˈklɪnɪk/",
                translation: "поликлиника",
                example: "have an appointment",
              },
              {
                word: "school",
                transcr: "/skuːl/",
                translation: "школа",
                example: "go to school",
              },
              {
                word: "university",
                transcr: "/ˌjuːnɪˈvɜːsəti/",
                translation: "университет",
                example: "study at university",
              },
              {
                word: "museum",
                transcr: "/mjuˈziːəm/",
                translation: "музей",
                example: "visit the museum",
              },
              {
                word: "gallery",
                transcr: "/ˈɡæləri/",
                translation: "галерея",
                example: "see paintings",
              },
              {
                word: "theatre / theater",
                transcr: "/ˈθɪətə/",
                translation: "театр",
                example: "watch a play",
              },
              {
                word: "cinema",
                transcr: "/ˈsɪnəmə/",
                translation: "кинотеатр",
                example: "watch a film",
              },
              {
                word: "restaurant",
                transcr: "/ˈrestrɒnt/",
                translation: "ресторан",
                example: "have dinner",
              },
              {
                word: "café / coffee shop",
                transcr: "/ˈkæfeɪ/",
                translation: "кафе",
                example: "drink coffee",
              },
              {
                word: "hotel",
                transcr: "/həʊˈtel/",
                translation: "отель",
                example: "stay at a hotel",
              },
              {
                word: "church",
                transcr: "/tʃɜːtʃ/",
                translation: "церковь",
                example: "go to church",
              },
              {
                word: "police station",
                transcr: "/pəˈliːs ˌsteɪʃn/",
                translation: "полицейский участок",
                example: "report a crime",
              },
              {
                word: "fire station",
                transcr: "/ˈfaɪə ˌsteɪʃn/",
                translation: "пожарная станция",
                example: "call firefighters",
              },
              {
                word: "town hall",
                transcr: "/taʊn hɔːl/",
                translation: "ратуша",
                example: "city government",
              },
              {
                word: "gym / fitness centre",
                transcr: "/dʒɪm/",
                translation: "спортзал",
                example: "work out",
              },
              {
                word: "swimming pool",
                transcr: "/ˈswɪmɪŋ puːl/",
                translation: "бассейн",
                example: "go swimming",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400"
              >
                <p className="font-bold text-indigo-900 text-lg">{item.word}</p>
                <p className="text-xs text-indigo-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800 mb-1">{item.translation}</p>
                <p className="text-xs text-green-700 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Направления - Left/Right ===== */
function Step4() {
  return (
    <>
      <UiSection title="Directions: Left and Right">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🧭</div>
            <div>
              <p className="text-lg font-bold text-indigo-900 mb-2">
                Как объяснить направление
              </p>
              <p className="text-zinc-800 leading-relaxed">
                Учимся говорить "направо", "налево" и другие направления.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Basic Directions — Основные направления
          </h4>
          <div className="space-y-4">
            {[
              {
                dir: "left",
                transcr: "/left/",
                translation: "налево, слева",
                examples: [
                  "Turn left at the traffic lights. — Поверните налево у светофора.",
                  "The bank is on the left. — Банк слева.",
                  "Go left. — Идите налево.",
                ],
              },
              {
                dir: "right",
                transcr: "/raɪt/",
                translation: "направо, справа",
                examples: [
                  "Turn right at the corner. — Поверните направо на углу.",
                  "The shop is on the right. — Магазин справа.",
                  "Go right. — Идите направо.",
                ],
              },
              {
                dir: "straight on / straight ahead",
                transcr: "/streɪt ɒn/",
                translation: "прямо",
                examples: [
                  "Go straight on. — Идите прямо.",
                  "Continue straight ahead. — Продолжайте идти прямо.",
                  "It's straight ahead of you. — Это прямо перед вами.",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-5">
                <h5 className="text-xl font-bold text-green-900 mb-2">
                  {item.dir} — {item.translation}
                </h5>
                <p className="text-xs text-green-600 mb-3">{item.transcr}</p>
                <div className="space-y-2">
                  {item.examples.map((ex, i) => (
                    <p
                      key={i}
                      className="text-sm text-zinc-800 bg-white rounded p-2"
                    >
                      {ex}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            More Directions — Другие направления
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { word: "north", transcr: "/nɔːθ/", translation: "север" },
              { word: "south", transcr: "/saʊθ/", translation: "юг" },
              { word: "east", transcr: "/iːst/", translation: "восток" },
              { word: "west", transcr: "/west/", translation: "запад" },
              { word: "up", transcr: "/ʌp/", translation: "вверх, наверх" },
              { word: "down", transcr: "/daʊn/", translation: "вниз, внизу" },
              { word: "back", transcr: "/bæk/", translation: "назад" },
              { word: "forward", transcr: "/ˈfɔːwəd/", translation: "вперёд" },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-3">
                <p className="font-bold text-blue-900">{item.word}</p>
                <p className="text-xs text-blue-600">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            💡 On the left / On the right
          </h4>
          <div className="space-y-3 text-sm text-zinc-800">
            <p>
              <strong>On the left</strong> = слева, с левой стороны
            </p>
            <p className="text-green-700">
              The post office is on the left. — Почта слева.
            </p>
            <p className="mt-3">
              <strong>On the right</strong> = справа, с правой стороны
            </p>
            <p className="text-green-700">
              You'll see the bank on the right. — Вы увидите банк справа.
            </p>
            <p className="mt-3">
              <strong>On your left / On your right</strong> = по вашу
              левую/правую руку
            </p>
            <p className="text-green-700">
              The museum will be on your right. — Музей будет справа от вас.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Фразы для указания пути ===== */
function Step5() {
  return (
    <>
      <UiSection title="Giving Directions — Объяснить, как пройти">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Полезные фразы, чтобы объяснить дорогу или спросить направление.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Asking for Directions — Спросить дорогу
          </h4>
          <div className="space-y-3">
            {[
              "Excuse me, where is the bank? — Извините, где банк?",
              "How do I get to the station? — Как мне добраться до вокзала?",
              "Could you tell me the way to the museum? — Не подскажете дорогу к музею?",
              "Is there a post office near here? — Здесь есть почта поблизости?",
              "Which way is the shopping centre? — В какой стороне торговый центр?",
              "Am I going the right way? — Я иду правильно?",
              "How far is it? — Как далеко это?",
              "Is it far from here? — Это далеко отсюда?",
            ].map((phrase, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{phrase}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Giving Directions — Объяснить дорогу
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {[
              "Go straight on. — Идите прямо.",
              "Turn left / right. — Поверните налево / направо.",
              "Take the first / second turning on the left. — Поверните на первом/втором повороте налево.",
              "Go past the bank. — Пройдите мимо банка.",
              "Cross the street / road. — Перейдите улицу / дорогу.",
              "Walk along this street. — Идите по этой улице.",
              "Go down this road. — Спускайтесь по этой дороге.",
              "Go up the hill. — Поднимитесь на холм.",
              "It's on the corner. — Это на углу.",
              "It's next to the supermarket. — Это рядом с супермаркетом.",
              "It's opposite the bank. — Это напротив банка.",
              "It's between the shop and the café. — Это между магазином и кафе.",
              "You can't miss it. — Вы не пропустите это.",
              "It's about 5 minutes' walk. — Это примерно 5 минут пешком.",
            ].map((phrase, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-zinc-900">{phrase}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            📍 Важные глаголы движения
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { verb: "go", translation: "идти, ехать" },
              { verb: "walk", translation: "идти пешком" },
              { verb: "turn", translation: "повернуть" },
              { verb: "cross", translation: "пересечь, перейти" },
              { verb: "pass", translation: "пройти мимо" },
              { verb: "take", translation: "взять (дорогу, поворот)" },
              { verb: "continue", translation: "продолжать" },
              { verb: "follow", translation: "следовать" },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-3">
                <p className="font-bold text-sky-900">{item.verb}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Упражнение 1 ===== */
function Step6() {
  const exercise1: FillItem[] = [
    {
      left: "1. Turn",
      right: "at the traffic lights. (налево)",
      answers: ["left"],
      explanation: "turn left = повернуть налево",
    },
    {
      left: "2. Go",
      right: "on for 5 minutes. (прямо)",
      answers: ["straight"],
      explanation: "go straight on = идти прямо",
    },
    {
      left: "3. The bank is on the",
      right: ". (справа)",
      answers: ["right"],
      explanation: "on the right = справа",
    },
    {
      left: "4. Cross the",
      right: "at the zebra crossing. (улицу)",
      answers: ["street", "road"],
      explanation: "cross the street/road = перейти улицу",
    },
    {
      left: "5. Turn right at the",
      right: ". (угол)",
      answers: ["corner"],
      explanation: "at the corner = на углу",
    },
    {
      left: "6. The shop is",
      right: "the bank. (напротив)",
      answers: ["opposite"],
      explanation: "opposite = напротив",
    },
    {
      left: "7. Go",
      right: "the post office. (мимо)",
      answers: ["past"],
      explanation: "go past = пройти мимо",
    },
    {
      left: "8. Take the first turning on the",
      right: ". (налево)",
      answers: ["left"],
      explanation: "on the left = налево",
    },
  ];

  return (
    <>
      <UiSection title="Упражнение: Направления">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Вставьте пропущенные слова, связанные с направлениями и местами в
            городе.
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
          Диалог: Asking for Directions
        </h4>
        <div className="space-y-3 text-sm">
          <div className="bg-green-50 rounded p-4">
            <p className="font-bold text-green-900 mb-1">Tourist:</p>
            <p className="text-zinc-800">
              Excuse me, how do I get to the train station?
            </p>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <p className="font-bold text-blue-900 mb-1">Local person:</p>
            <p className="text-zinc-800">
              Go straight on down this street. Turn left at the traffic lights.
              Then go past the supermarket. The station is on your right, next
              to the post office.
            </p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="font-bold text-green-900 mb-1">Tourist:</p>
            <p className="text-zinc-800">Is it far from here?</p>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <p className="font-bold text-blue-900 mb-1">Local person:</p>
            <p className="text-zinc-800">
              No, it's about 10 minutes' walk. You can't miss it!
            </p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="font-bold text-green-900 mb-1">Tourist:</p>
            <p className="text-zinc-800">Thank you very much!</p>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <p className="font-bold text-blue-900 mb-1">Local person:</p>
            <p className="text-zinc-800">You're welcome. Have a nice day!</p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Предлоги места в городе ===== */
function Step7() {
  return (
    <>
      <UiSection title="Prepositions for Locations — Предлоги места">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Предлоги для описания расположения зданий и мест в городе.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Prepositions — Предлоги
          </h4>
          <div className="space-y-4">
            {[
              {
                prep: "in",
                meaning: "в (внутри города, района)",
                examples: [
                  "I live in London. — Я живу в Лондоне.",
                  "There are many shops in the city centre. — В центре города много магазинов.",
                ],
              },
              {
                prep: "on",
                meaning: "на (на улице)",
                examples: [
                  "The bank is on Main Street. — Банк на Главной улице.",
                  "I live on Park Road. — Я живу на Парк Роуд.",
                ],
              },
              {
                prep: "at",
                meaning: "у, около (конкретная точка)",
                examples: [
                  "Meet me at the station. — Встретимся у вокзала.",
                  "Turn left at the traffic lights. — Поверните налево у светофора.",
                ],
              },
              {
                prep: "next to / beside",
                meaning: "рядом с",
                examples: [
                  "The café is next to the library. — Кафе рядом с библиотекой.",
                  "Sit beside me. — Сядь рядом со мной.",
                ],
              },
              {
                prep: "opposite",
                meaning: "напротив",
                examples: [
                  "The bank is opposite the park. — Банк напротив парка.",
                  "My house is opposite the school. — Мой дом напротив школы.",
                ],
              },
              {
                prep: "between",
                meaning: "между",
                examples: [
                  "The shop is between the bank and the café. — Магазин между банком и кафе.",
                  "I sit between John and Mary. — Я сижу между Джоном и Мэри.",
                ],
              },
              {
                prep: "near / close to",
                meaning: "близко к, рядом с",
                examples: [
                  "Is there a bank near here? — Здесь есть банк поблизости?",
                  "I live close to the station. — Я живу близко к вокзалу.",
                ],
              },
              {
                prep: "far from",
                meaning: "далеко от",
                examples: [
                  "The airport is far from the city. — Аэропорт далеко от города.",
                  "Is it far from here? — Это далеко отсюда?",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-5">
                <h5 className="text-xl font-bold text-indigo-900 mb-2">
                  {item.prep} — {item.meaning}
                </h5>
                <div className="space-y-2">
                  {item.examples.map((ex, i) => (
                    <p
                      key={i}
                      className="text-sm text-zinc-800 bg-white rounded p-2"
                    >
                      {ex}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            💡 IN / ON / AT для мест
          </h4>
          <div className="space-y-3 text-sm text-zinc-800">
            <p>
              <strong>IN</strong> — для города, страны, района (большая
              территория)
            </p>
            <p className="text-green-700 ml-4">
              I live <strong>in</strong> Moscow / <strong>in</strong> Russia /{" "}
              <strong>in</strong> the centre.
            </p>
            <p className="mt-3">
              <strong>ON</strong> — для улицы, дороги (линия)
            </p>
            <p className="text-green-700 ml-4">
              The shop is <strong>on</strong> Baker Street / <strong>on</strong>{" "}
              the main road.
            </p>
            <p className="mt-3">
              <strong>AT</strong> — для конкретного адреса, точки (место)
            </p>
            <p className="text-green-700 ml-4">
              Meet me <strong>at</strong> the corner / <strong>at</strong> 25
              Park Road.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 8: Текст для чтения ===== */
function Step8() {
  return (
    <>
      <UiSection title="Reading: A Day in the City">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed">
            Прочитайте текст о прогулке по городу. На следующей странице будут
            задания.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          A Day in the City
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            Last Saturday, I decided to explore the city centre. I started my
            day at the main square, which is located right in the heart of the
            city. The square was very busy with lots of people walking around,
            sitting on benches, and enjoying the sunny weather.
          </p>

          <div className="bg-sky-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-sky-900 mb-3">
              Morning Shopping
            </h4>
            <p className="mb-3">
              First, I needed to buy some bread, so I went to the bakery on King
              Street. The bakery is next to the post office and opposite a small
              park. The smell of fresh bread was wonderful! After that, I walked
              along the street and went past several shops. I stopped at the
              bookshop to look at some new books. The bookshop is between the
              café and the toy shop.
            </p>
            <p>
              Then I went to the supermarket to buy some groceries. To get
              there, I had to cross the street at the zebra crossing and turn
              right at the traffic lights. The supermarket is quite large and
              has everything you need. It took me about 30 minutes to do my
              shopping.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-green-900 mb-3">
              Lunch Break
            </h4>
            <p className="mb-3">
              By noon, I was hungry, so I decided to have lunch. I walked back
              towards the square and found a nice café on the corner of Park
              Road and High Street. The café had outdoor seating, which was
              perfect for the warm day. I ordered a sandwich and a coffee and
              sat there for about an hour, watching people go by.
            </p>
            <p>
              While I was sitting there, I saw many tourists asking for
              directions. One tourist asked me how to get to the museum. I told
              him: "Go straight on down this street. Take the second turning on
              the left. The museum will be on your right, next to the library.
              You can't miss it!"
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-indigo-900 mb-3">
              Afternoon Activities
            </h4>
            <p className="mb-3">
              After lunch, I visited the museum myself. It's a beautiful old
              building with interesting exhibitions about the city's history.
              The museum is near the library and the town hall. I spent about
              two hours there looking at old photographs and learning about how
              the city has changed over the years.
            </p>
            <p className="mb-3">
              When I left the museum, I walked to the park to relax for a while.
              The park is opposite the shopping centre and has a lovely lake
              with ducks and swans. Many families were there with their
              children. Some people were jogging, others were having picnics,
              and some were just sitting on the grass enjoying the sunshine.
            </p>
            <p>
              On my way home, I stopped at the chemist's to buy some medicine
              for my headache. The chemist's is far from the park, so I had to
              walk for about 15 minutes. It's located on Market Street, between
              the flower shop and the shoe shop.
            </p>
          </div>

          <p className="mt-6">
            By the time I got home, it was early evening, and I was quite tired
            but happy. It was a lovely day exploring the city, and I discovered
            some interesting places I had never been to before. I think I'll do
            it again next weekend!
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-lg p-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Словарь к тексту
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ["explore", "/ɪkˈsplɔː/", "исследовать"],
            ["heart", "/hɑːt/", "сердце, центр"],
            ["bench", "/bentʃ/", "скамейка"],
            ["groceries", "/ˈɡrəʊsəriz/", "продукты"],
            ["outdoor seating", "—", "места на улице"],
            ["go by", "—", "проходить мимо"],
            ["exhibition", "/ˌeksɪˈbɪʃn/", "выставка"],
            ["swan", "/swɒn/", "лебедь"],
            ["jog", "/dʒɒɡ/", "бегать трусцой"],
            ["picnic", "/ˈpɪknɪk/", "пикник"],
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

/* ===== СТРАНИЦА 9: True/False задания ===== */
function Step9() {
  return (
    <>
      <UiSection title="Reading Comprehension">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📝</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                True or False?
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Прочитайте утверждения и определите, соответствуют ли они
                содержанию текста (True) или нет (False).
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-4">
        <TrueFalseQuestion
          question="1. The author started the day at the main square in the city centre."
          correctAnswer="True"
          explanation="В тексте: 'I started my day at the main square, which is located right in the heart of the city.'"
        />

        <TrueFalseQuestion
          question="2. The bakery is opposite the post office."
          correctAnswer="False"
          explanation="В тексте: 'The bakery is next to the post office' — рядом, а не напротив."
        />

        <TrueFalseQuestion
          question="3. The bookshop is between the café and the toy shop."
          correctAnswer="True"
          explanation="В тексте чётко сказано: 'The bookshop is between the café and the toy shop.'"
        />

        <TrueFalseQuestion
          question="4. It took the author 30 minutes to shop at the supermarket."
          correctAnswer="True"
          explanation="В тексте: 'It took me about 30 minutes to do my shopping.'"
        />

        <TrueFalseQuestion
          question="5. The author had lunch at a restaurant."
          correctAnswer="False"
          explanation="В тексте: 'I found a nice café' — кафе, а не ресторан."
        />

        <TrueFalseQuestion
          question="6. A tourist asked the author for directions to the museum."
          correctAnswer="True"
          explanation="В тексте: 'One tourist asked me how to get to the museum.'"
        />

        <TrueFalseQuestion
          question="7. The museum is far from the library."
          correctAnswer="False"
          explanation="В тексте: 'The museum is near the library' — рядом, а не далеко."
        />

        <TrueFalseQuestion
          question="8. The author spent two hours at the museum."
          correctAnswer="True"
          explanation="В тексте: 'I spent about two hours there looking at old photographs.'"
        />

        <TrueFalseQuestion
          question="9. The park is next to the shopping centre."
          correctAnswer="False"
          explanation="В тексте: 'The park is opposite the shopping centre' — напротив, а не рядом."
        />

        <TrueFalseQuestion
          question="10. The chemist's is close to the park."
          correctAnswer="False"
          explanation="В тексте: 'The chemist's is far from the park' — далеко от парка."
        />
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговые упражнения ===== */
function Step10() {
  const exercise: FillItem[] = [
    {
      left: "1. I need to buy bread at the",
      right: ". (пекарня)",
      answers: ["bakery"],
      explanation: "bakery = пекарня",
    },
    {
      left: "2. Excuse me, how do I",
      right: "to the station? (добраться)",
      answers: ["get"],
      explanation: "How do I get to... = Как мне добраться до...",
    },
    {
      left: "3. Turn",
      right: "at the corner. (направо)",
      answers: ["right"],
      explanation: "turn right = повернуть направо",
    },
    {
      left: "4. The bank is",
      right: "the supermarket. (напротив)",
      answers: ["opposite"],
      explanation: "opposite = напротив",
    },
    {
      left: "5. Go",
      right: "the post office. (мимо)",
      answers: ["past"],
      explanation: "go past = пройти мимо",
    },
    {
      left: "6. The library is",
      right: "King Street. (на улице)",
      answers: ["on"],
      explanation: "on [street name] = на [название улицы]",
    },
    {
      left: "7. Take the first",
      right: "on the left. (поворот)",
      answers: ["turning", "turn"],
      explanation: "turning = поворот",
    },
    {
      left: "8. Cross the street at the",
      right: "crossing. (зебра)",
      answers: ["zebra"],
      explanation: "zebra crossing = пешеходный переход 'зебра'",
    },
    {
      left: "9. I live",
      right: "to the school. (близко)",
      answers: ["close", "near"],
      explanation: "close to / near = близко к",
    },
    {
      left: "10. The shop is",
      right: "the bank and the café. (между)",
      answers: ["between"],
      explanation: "between = между",
    },
  ];

  return (
    <>
      <UiSection title="Итоговые упражнения">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Проверьте, как вы запомнили слова по теме "City and Shops".
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
                  Примеры слов
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Places in City
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  street, square, park, bridge, corner, crossroads
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Shops
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  supermarket, bakery, butcher's, chemist's, bookshop
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Buildings
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  bank, post office, library, hospital, museum, theatre
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Directions
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  left, right, straight on, turn, go past, cross
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Prepositions
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  on, at, next to, opposite, between, near, far from
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
                <strong>15+ мест в городе</strong> — улицы, площади, парки
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>16+ видов магазинов</strong> — от пекарни до ювелирного
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>20+ общественных зданий</strong> — банк, почта, музей,
                библиотека
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Направления</strong> — left, right, straight on, past,
                opposite
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Как спросить и объяснить дорогу</strong> — полезные
                фразы и диалоги
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Предлоги места</strong> — in, on, at, next to, opposite,
                between
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
            Вы успешно изучили всю необходимую лексику для ориентирования в
            городе! Теперь вы сможете спросить дорогу, объяснить, как куда-то
            пройти, и рассказать о местах в городе. Практикуйтесь, описывая свой
            город и используя новые слова!
          </p>
        </div>
      </div>
    </>
  );
}
