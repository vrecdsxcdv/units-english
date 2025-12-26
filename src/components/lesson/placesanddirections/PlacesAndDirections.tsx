"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PlacesAndDirections({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Места в городе (часть 1) ===== */
function Step1() {
  return (
    <>
      <UiSection title="Places and Directions: Места и направления">
        <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Ориентируемся в городе!
          </p>
          <p className="text-zinc-800 leading-relaxed mb-4">
            В этой теме мы изучим названия мест в городе, научимся спрашивать и
            объяснять, как куда-либо пройти, а также освоим важную грамматику
            предлогов места и направления.
          </p>
          <p className="text-zinc-800 leading-relaxed">
            Это одна из самых полезных тем для путешествий и повседневной жизни!
          </p>
        </div>
      </UiSection>

      <UiSection title="Основные места в городе (Places in the city)">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🏛️</span>
              <span>Общественные места:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["bank", "/bæŋk/", "банк"],
                ["post office", "/ˈpəʊst ˈɒfɪs/", "почта"],
                ["hospital", "/ˈhɒspɪtl/", "больница"],
                ["police station", "/pəˈliːs ˈsteɪʃn/", "полицейский участок"],
                ["library", "/ˈlaɪbrəri/", "библиотека"],
                ["school", "/skuːl/", "школа"],
                ["university", "/ˌjuːnɪˈvɜːsəti/", "университет"],
                ["museum", "/mjuˈziːəm/", "музей"],
                ["theatre", "/ˈθɪətə/", "театр"],
                ["cinema", "/ˈsɪnəmə/", "кинотеатр"],
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
              <span className="text-2xl">🏪</span>
              <span>Магазины (Shops):</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["shop/store", "/ʃɒp/ /stɔː/", "магазин"],
                ["supermarket", "/ˈsuːpəmɑːkɪt/", "супермаркет"],
                ["bakery", "/ˈbeɪkəri/", "булочная"],
                ["bookshop", "/ˈbʊkʃɒp/", "книжный магазин"],
                ["pharmacy", "/ˈfɑːməsi/", "аптека"],
                ["shopping mall", "/ˈʃɒpɪŋ mɔːl/", "торговый центр"],
                ["market", "/ˈmɑːkɪt/", "рынок"],
                ["butcher's", "/ˈbʊtʃəz/", "мясная лавка"],
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
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Полезно знать:</span>
        </h4>
        <p className="text-sm text-zinc-800">
          В британском английском используют <strong>shop</strong>, в
          американском — <strong>store</strong>. Оба варианта правильные!
        </p>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Места в городе (часть 2) ===== */
function Step2() {
  return (
    <>
      <UiSection title="Больше мест в городе">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🍽️</span>
              <span>Места для еды и отдыха:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["restaurant", "/ˈrestrɒnt/", "ресторан"],
                ["café/coffee shop", "/ˈkæfeɪ/", "кафе"],
                ["bar", "/bɑː/", "бар"],
                ["pub", "/pʌb/", "паб"],
                ["hotel", "/həʊˈtel/", "отель"],
                ["park", "/pɑːk/", "парк"],
                ["playground", "/ˈpleɪɡraʊnd/", "детская площадка"],
                ["gym", "/dʒɪm/", "спортзал"],
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
              <span className="text-2xl">🚌</span>
              <span>Транспорт и улицы:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["street", "/striːt/", "улица"],
                ["road", "/rəʊd/", "дорога"],
                ["avenue", "/ˈævənjuː/", "проспект"],
                ["square", "/skweə/", "площадь"],
                ["bridge", "/brɪdʒ/", "мост"],
                ["bus stop", "/ˈbʌs stɒp/", "автобусная остановка"],
                ["train station", "/treɪn ˈsteɪʃn/", "вокзал"],
                ["subway/metro", "/ˈsʌbweɪ/", "метро"],
                ["airport", "/ˈeəpɔːt/", "аэропорт"],
                ["taxi rank", "/ˈtæksi ræŋk/", "стоянка такси"],
                ["car park", "/kɑː pɑːk/", "парковка"],
                ["petrol station", "/ˈpetrəl ˈsteɪʃn/", "заправка"],
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
              <span className="text-2xl">🏢</span>
              <span>Другие важные места:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["church", "/tʃɜːtʃ/", "церковь"],
                ["mosque", "/mɒsk/", "мечеть"],
                ["temple", "/ˈtempl/", "храм"],
                ["office", "/ˈɒfɪs/", "офис"],
                ["factory", "/ˈfæktəri/", "фабрика"],
                ["building", "/ˈbɪldɪŋ/", "здание"],
                ["stadium", "/ˈsteɪdiəm/", "стадион"],
                ["zoo", "/zuː/", "зоопарк"],
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
        <h4 className="font-bold text-indigo-900 mb-3">📊 Слов изучено: 48</h4>
        <p className="text-sm text-zinc-800">
          Отличный прогресс! Теперь вы знаете названия основных мест в городе.
        </p>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: Грамматика - Предлоги места ===== */
function Step3() {
  return (
    <>
      <UiSection title="Грамматика: Prepositions of Place (Предлоги места)">
        <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Предлоги места показывают, <strong>где</strong> находится объект.
            Это ключевая грамматика для описания местоположения!
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Основные предлоги места:
          </h4>
          <div className="space-y-4">
            {[
              {
                prep: "in",
                meaning: "в, внутри",
                example: "The bank is in the city centre.",
                translation: "Банк находится в центре города.",
                usage: "Используется для замкнутых пространств, городов, стран",
              },
              {
                prep: "on",
                meaning: "на (поверхности)",
                example: "The shop is on Main Street.",
                translation: "Магазин находится на Главной улице.",
                usage: "Для улиц, этажей, поверхностей",
              },
              {
                prep: "at",
                meaning: "у, около, в (точка)",
                example: "Meet me at the bus stop.",
                translation: "Встретимся у автобусной остановки.",
                usage: "Для конкретных мест/точек, адресов",
              },
              {
                prep: "next to / beside",
                meaning: "рядом с, возле",
                example: "The café is next to the bookshop.",
                translation: "Кафе рядом с книжным магазином.",
                usage: "Непосредственная близость",
              },
              {
                prep: "opposite",
                meaning: "напротив",
                example: "The bank is opposite the post office.",
                translation: "Банк напротив почты.",
                usage: "На противоположной стороне",
              },
              {
                prep: "between",
                meaning: "между (двумя)",
                example: "The hotel is between the bank and the cinema.",
                translation: "Отель между банком и кинотеатром.",
                usage: "Между двумя объектами",
              },
              {
                prep: "behind",
                meaning: "позади, за",
                example: "The car park is behind the supermarket.",
                translation: "Парковка за супермаркетом.",
                usage: "Сзади чего-либо",
              },
              {
                prep: "in front of",
                meaning: "перед",
                example: "There's a fountain in front of the museum.",
                translation: "Перед музеем есть фонтан.",
                usage: "Впереди чего-либо",
              },
              {
                prep: "near",
                meaning: "рядом, недалеко",
                example: "Is there a pharmacy near here?",
                translation: "Есть ли аптека поблизости?",
                usage: "В пределах небольшого расстояния",
              },
              {
                prep: "far from",
                meaning: "далеко от",
                example: "The airport is far from the city centre.",
                translation: "Аэропорт далеко от центра города.",
                usage: "На большом расстоянии",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border-l-4 border-indigo-400"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-lg font-bold text-indigo-700">
                    {item.prep}
                  </span>
                  <span className="text-sm text-zinc-600">
                    — {item.meaning}
                  </span>
                </div>
                <p className="text-sm text-zinc-700 mb-2 italic">
                  <strong>Пример:</strong> {item.example}
                </p>
                <p className="text-xs text-zinc-600 mb-2">{item.translation}</p>
                <p className="text-xs text-indigo-600">
                  <strong>Когда:</strong> {item.usage}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            ⚠️ Важное различие: IN / ON / AT
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-indigo-700 mb-2">IN:</p>
              <ul className="text-sm text-zinc-700 space-y-1 ml-4">
                <li>• in London (в городе)</li>
                <li>• in the building (внутри здания)</li>
                <li>• in the park (в парке)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-sky-700 mb-2">ON:</p>
              <ul className="text-sm text-zinc-700 space-y-1 ml-4">
                <li>• on Baker Street (на улице)</li>
                <li>• on the left/right (слева/справа)</li>
                <li>• on the second floor (на втором этаже)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-slate-700 mb-2">AT:</p>
              <ul className="text-sm text-zinc-700 space-y-1 ml-4">
                <li>• at the bus stop (у остановки)</li>
                <li>• at 25 Oxford Road (по адресу)</li>
                <li>• at the corner (на углу)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Грамматика - Направления ===== */
function Step4() {
  return (
    <>
      <UiSection title="Грамматика: Directions (Направления)">
        <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Научимся объяснять, <strong>как куда-то пройти</strong>, используя
            глаголы движения и слова направления.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Основные направления:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["left", "/left/", "левый, налево"],
              ["right", "/raɪt/", "правый, направо"],
              ["straight", "/streɪt/", "прямо"],
              ["ahead", "/əˈhed/", "вперёд"],
              ["back", "/bæk/", "назад"],
              ["north", "/nɔːθ/", "север"],
              ["south", "/saʊθ/", "юг"],
              ["east", "/iːst/", "восток"],
              ["west", "/west/", "запад"],
              ["up", "/ʌp/", "вверх"],
              ["down", "/daʊn/", "вниз"],
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

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            Глаголы движения и фразы:
          </h4>
          <div className="space-y-3">
            {[
              {
                phrase: "Go straight ahead",
                translation: "Идите прямо",
                example: "Go straight ahead for 200 metres.",
              },
              {
                phrase: "Turn left/right",
                translation: "Поверните налево/направо",
                example: "Turn left at the traffic lights.",
              },
              {
                phrase: "Take the first/second turning",
                translation: "Возьмите первый/второй поворот",
                example: "Take the second turning on the right.",
              },
              {
                phrase: "Cross the street/road",
                translation: "Перейдите улицу/дорогу",
                example: "Cross the street at the zebra crossing.",
              },
              {
                phrase: "Go past",
                translation: "Пройдите мимо",
                example: "Go past the post office.",
              },
              {
                phrase: "Go along",
                translation: "Идите вдоль",
                example: "Go along this street.",
              },
              {
                phrase: "Go through",
                translation: "Пройдите через",
                example: "Go through the park.",
              },
              {
                phrase: "Go over the bridge",
                translation: "Перейдите через мост",
                example: "Go over the bridge and turn right.",
              },
              {
                phrase: "Go under the bridge",
                translation: "Пройдите под мостом",
                example: "Go under the railway bridge.",
              },
              {
                phrase: "Walk for ... minutes",
                translation: "Идите ... минут",
                example: "Walk for five minutes.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <p className="font-semibold text-sky-700 mb-1">{item.phrase}</p>
                <p className="text-sm text-zinc-600 mb-2">{item.translation}</p>
                <p className="text-xs text-zinc-500 italic">
                  <strong>Пример:</strong> {item.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-zinc-900 mb-4">
            Полезные ориентиры (Landmarks):
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["traffic lights", "светофор"],
              ["crossroads", "перекрёсток"],
              ["corner", "угол"],
              ["roundabout", "круговое движение"],
              ["zebra crossing", "пешеходный переход"],
              ["junction", "развилка"],
            ].map(([word, translation]) => (
              <div key={word} className="bg-white rounded p-3">
                <p className="text-sm font-semibold text-slate-700">{word}</p>
                <p className="text-xs text-zinc-600">{translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Как спросить дорогу ===== */
function Step5() {
  return (
    <>
      <UiSection title="Как спросить и объяснить дорогу">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Научимся вежливо спрашивать дорогу и давать понятные объяснения.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Вопросы о местоположении:
          </h4>
          <div className="space-y-3">
            {[
              "Excuse me, where is the bank?",
              "Excuse me, how can I get to the station?",
              "Could you tell me the way to the museum?",
              "Is there a pharmacy near here?",
              "How far is it to the city centre?",
              "Am I going the right way for the park?",
              "Can you show me on the map?",
            ].map((question, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
              >
                <p className="text-sm font-semibold text-indigo-700 mb-2">
                  {question}
                </p>
                <p className="text-xs text-zinc-600">
                  {idx === 0 && "Извините, где находится банк?"}
                  {idx === 1 && "Извините, как мне добраться до станции?"}
                  {idx === 2 && "Не могли бы вы подсказать дорогу к музею?"}
                  {idx === 3 && "Есть ли аптека поблизости?"}
                  {idx === 4 && "Как далеко до центра города?"}
                  {idx === 5 && "Я правильно иду в парк?"}
                  {idx === 6 && "Можете показать на карте?"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            Как объяснить дорогу:
          </h4>
          <div className="bg-white rounded-lg p-5">
            <p className="text-sm font-semibold text-sky-900 mb-3">
              Типичный диалог:
            </p>
            <div className="space-y-3">
              <div className="bg-sky-50 rounded p-3">
                <p className="text-sm font-semibold text-sky-700 mb-1">
                  Person A:
                </p>
                <p className="text-sm text-zinc-800">
                  Excuse me, how do I get to the library?
                </p>
                <p className="text-xs text-zinc-600">
                  Извините, как мне пройти к библиотеке?
                </p>
              </div>

              <div className="bg-indigo-50 rounded p-3">
                <p className="text-sm font-semibold text-indigo-700 mb-1">
                  Person B:
                </p>
                <p className="text-sm text-zinc-800 mb-2">
                  Sure! Go straight ahead along this street. Turn right at the
                  traffic lights. The library is on your left, next to the post
                  office. You can&apos;t miss it!
                </p>
                <p className="text-xs text-zinc-600">
                  Конечно! Идите прямо по этой улице. Поверните направо у
                  светофора. Библиотека будет слева от вас, рядом с почтой. Вы
                  её не пропустите!
                </p>
              </div>

              <div className="bg-sky-50 rounded p-3">
                <p className="text-sm font-semibold text-sky-700 mb-1">
                  Person A:
                </p>
                <p className="text-sm text-zinc-800">How long does it take?</p>
                <p className="text-xs text-zinc-600">
                  Сколько это займёт времени?
                </p>
              </div>

              <div className="bg-indigo-50 rounded p-3">
                <p className="text-sm font-semibold text-indigo-700 mb-1">
                  Person B:
                </p>
                <p className="text-sm text-zinc-800">
                  About five minutes on foot.
                </p>
                <p className="text-xs text-zinc-600">
                  Около пяти минут пешком.
                </p>
              </div>

              <div className="bg-sky-50 rounded p-3">
                <p className="text-sm font-semibold text-sky-700 mb-1">
                  Person A:
                </p>
                <p className="text-sm text-zinc-800">Thank you very much!</p>
                <p className="text-xs text-zinc-600">Большое спасибо!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-zinc-900 mb-4">
            Полезные фразы в ответе:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["It's not far.", "Это недалеко."],
              ["It's quite far.", "Это довольно далеко."],
              ["It's very close.", "Это очень близко."],
              ["You can't miss it.", "Вы не пропустите."],
              ["It's a 5-minute walk.", "5 минут пешком."],
              ["Keep going.", "Продолжайте идти."],
              ["You'll see it on your right/left.", "Увидите справа/слева."],
              ["I'm sorry, I don't know.", "Извините, я не знаю."],
            ].map(([phrase, translation]) => (
              <div key={phrase} className="bg-white rounded p-3">
                <p className="text-sm font-semibold text-zinc-700">{phrase}</p>
                <p className="text-xs text-zinc-600">{translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Упражнения на предлоги ===== */
function Step6() {
  const exercise1: FillItem[] = [
    {
      left: "1. The bank is",
      right: "the city centre.",
      answers: ["in"],
      explanation: "in - для городов и замкнутых пространств",
    },
    {
      left: "2. The café is",
      right: "Main Street.",
      answers: ["on"],
      explanation: "on - для улиц",
    },
    {
      left: "3. Meet me",
      right: "the bus stop.",
      answers: ["at"],
      explanation: "at - для конкретных мест/точек",
    },
    {
      left: "4. The library is",
      right: "to the post office.",
      answers: ["next"],
      explanation: "next to - рядом с",
    },
    {
      left: "5. The hotel is",
      right: "the bank and the cinema.",
      answers: ["between"],
      explanation: "between - между двумя объектами",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "6. Turn",
      right: "at the traffic lights.",
      answers: ["left", "right"],
      explanation: "turn left/right - поверните налево/направо",
    },
    {
      left: "7. Go",
      right: "ahead for 100 metres.",
      answers: ["straight"],
      explanation: "straight ahead - прямо вперёд",
    },
    {
      left: "8.",
      right: "the street at the zebra crossing.",
      answers: ["Cross"],
      explanation: "Cross - перейти улицу",
    },
    {
      left: "9. The park is",
      right: "the museum.",
      answers: ["opposite"],
      explanation: "opposite - напротив",
    },
    {
      left: "10. Walk",
      right: "five minutes.",
      answers: ["for"],
      explanation: "for - указание продолжительности",
    },
  ];

  return (
    <>
      <UiSection title="Практика: Предлоги и направления">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Проверьте, как хорошо вы усвоили предлоги места и направления!
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Предлоги места"
        instruction="Заполните пропуски подходящими предлогами."
        items={exercise1}
      />

      <CheckableExercise
        title="Упражнение 2: Направления"
        instruction="Заполните пропуски, используя слова направления."
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
                ru: "1. Извините, где находится ближайшая аптека?",
                en: "Excuse me, where is the nearest pharmacy?",
              },
              {
                ru: "2. Идите прямо и поверните налево у банка.",
                en: "Go straight ahead and turn left at the bank.",
              },
              {
                ru: "3. Супермаркет между почтой и кафе.",
                en: "The supermarket is between the post office and the café.",
              },
              {
                ru: "4. Сколько времени займёт дойти до музея?",
                en: "How long does it take to get to the museum?",
              },
              {
                ru: "5. Больница напротив парка.",
                en: "The hospital is opposite the park.",
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
      <UiSection title="Чтение: My Hometown">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-indigo-700 leading-relaxed">
            Прочитайте текст о родном городе и обратите внимание на
            использование предлогов места и направлений.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border border-indigo-200">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          My Hometown: A Tour of Riverside
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            I live in a beautiful town called Riverside. It&apos;s not a big
            city, but it has everything you need for comfortable life. Let me
            tell you about my favourite places and how to find them.
          </p>

          <p>
            The <strong>town centre</strong> is the heart of Riverside. In the
            middle of the square, there&apos;s a lovely fountain where people
            often meet their friends. On the north side of the square,
            you&apos;ll find the <strong>town hall</strong> — a beautiful old
            building with a clock tower. The town hall is next to the{" "}
            <strong>library</strong>, which is open every day except Sunday.
          </p>

          <p>
            If you&apos;re standing at the fountain and looking north, you can
            see Main Street going straight ahead. This is our main shopping
            street. On the left side, there&apos;s a large{" "}
            <strong>supermarket</strong> and several small shops. My favourite{" "}
            <strong>bookshop</strong> is between the café and the flower shop.
            On the right side of Main Street, you&apos;ll find the{" "}
            <strong>post office</strong> and a <strong>pharmacy</strong>.
          </p>

          <p>
            Behind the town hall, there&apos;s a beautiful <strong>park</strong>{" "}
            with tall trees and green lawns. People go there to relax, have
            picnics, or play with their children. The park has a small lake
            where you can feed the ducks. There&apos;s also a{" "}
            <strong>playground</strong> in the north-east corner of the park.
          </p>

          <p>
            If you need to catch a bus, the main <strong>bus station</strong> is
            opposite the post office. From there, buses go to all parts of the
            town and to neighbouring villages. The{" "}
            <strong>train station</strong> is about a ten-minute walk from the
            centre. To get there, go along Main Street, turn right at the
            traffic lights, and walk straight for about five minutes. You
            can&apos;t miss it!
          </p>
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
          My Hometown: A Tour of Riverside (continued)
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            For food and entertainment, Riverside has plenty of options. My
            favourite <strong>restaurant</strong> is called &quot;The River
            View.&quot; It&apos;s on Bridge Street, right next to the old stone
            bridge that crosses the river. From the restaurant windows, you have
            a wonderful view of the water and the hills beyond.
          </p>

          <p>
            If you prefer something quicker, there&apos;s a nice{" "}
            <strong>café</strong> near the library where they make excellent
            coffee and sandwiches. It&apos;s called &quot;The Book Nook&quot;
            because it&apos;s inside the bookshop! You can browse books while
            enjoying your coffee.
          </p>

          <p>
            We also have a small <strong>cinema</strong> on Queen Street. It
            only has two screens, but they show the latest films. The cinema is
            opposite the <strong>gym</strong>, so you can watch a movie after
            your workout! Right next to the gym, there&apos;s a{" "}
            <strong>swimming pool</strong> that&apos;s very popular in summer.
          </p>

          <p>
            For shopping, besides the supermarket on Main Street, we have a{" "}
            <strong>shopping mall</strong> on the outskirts of town. To get
            there, you need to take bus number 7 from the bus station. The
            journey takes about fifteen minutes. The mall has many different
            shops, a food court, and even a small <strong>ice rink</strong>.
          </p>

          <p>
            Important facilities are easy to find too. The{" "}
            <strong>hospital</strong> is in the western part of town, near the
            park. The <strong>police station</strong> is on Station Road,
            between the train station and the car park. If you need a{" "}
            <strong>bank</strong>, there are three in the town centre: one next
            to the town hall, one opposite the supermarket, and one near the bus
            station.
          </p>

          <p>
            I really love living in Riverside. It&apos;s big enough to have
            everything I need, but small enough that I know my way around and
            often meet people I know in the street. If you ever visit our town,
            I&apos;d be happy to show you around!
          </p>
        </div>
      </div>

      <UiSection title="Словарь к тексту">
        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["heart", "/hɑːt/", "сердце"],
              ["fountain", "/ˈfaʊntɪn/", "фонтан"],
              ["clock tower", "/klɒk ˈtaʊə/", "часовая башня"],
              ["lawn", "/lɔːn/", "газон"],
              ["neighbouring", "/ˈneɪbərɪŋ/", "соседний"],
              ["view", "/vjuː/", "вид"],
              ["browse", "/braʊz/", "просматривать, листать"],
              ["outskirts", "/ˈaʊtskɜːts/", "окраина"],
              ["facilities", "/fəˈsɪlətiz/", "учреждения, объекты"],
              ["know one's way around", "—", "хорошо ориентироваться"],
              ["show around", "—", "показать (город и т.д.)"],
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
      left: "1. The fountain is in the",
      right: "of the square.",
      answers: ["middle", "centre", "center"],
      explanation: "из текста: 'In the middle of the square'",
    },
    {
      left: "2. The library is",
      right: "to the town hall.",
      answers: ["next"],
      explanation: "из текста: 'next to the library'",
    },
    {
      left: "3. The bus station is",
      right: "the post office.",
      answers: ["opposite"],
      explanation: "из текста: 'opposite the post office'",
    },
    {
      left: "4. The restaurant is",
      right: "Bridge Street.",
      answers: ["on"],
      explanation: "из текста: 'on Bridge Street'",
    },
    {
      left: "5. The gym is",
      right: "the cinema.",
      answers: ["opposite"],
      explanation: "из текста: 'opposite the gym'",
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
          Задание 1: True, False or Not Mentioned?
        </h4>
        <div className="space-y-4">
          {[
            {
              statement: "Riverside is a very big city.",
              answer: "False",
              explanation: "В тексте сказано: 'It's not a big city'.",
            },
            {
              statement: "The library is open every day.",
              answer: "False",
              explanation: "Библиотека открыта каждый день, кроме воскресенья.",
            },
            {
              statement: "There are three banks in the town centre.",
              answer: "True",
              explanation: "В тексте упоминаются три банка в центре.",
            },
            {
              statement: "The shopping mall is in the town centre.",
              answer: "False",
              explanation:
                "Торговый центр на окраине города ('on the outskirts').",
            },
            {
              statement: "The hospital is in the western part of town.",
              answer: "True",
              explanation: "Прямо указано в тексте.",
            },
            {
              statement: "The author doesn't like living in Riverside.",
              answer: "False",
              explanation:
                "Автор говорит: 'I really love living in Riverside'.",
            },
            {
              statement: "The cinema has four screens.",
              answer: "False",
              explanation:
                "Кинотеатр имеет только 2 экрана: 'It only has two screens'.",
            },
            {
              statement: "You can buy books at 'The Book Nook' café.",
              answer: "True",
              explanation:
                "Кафе находится внутри книжного магазина: 'inside the bookshop'.",
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
          Задание 2: Сопоставьте места и их расположение
        </h4>
        <p className="text-sm text-zinc-700 mb-4">
          Соедините места с правильным описанием их местоположения:
        </p>
        <div className="space-y-3">
          <div className="bg-sky-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-sky-900 mb-3">Места:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "A. Town Hall",
                "B. The River View Restaurant",
                "C. Shopping Mall",
                "D. Hospital",
                "E. Police Station",
                "F. Swimming Pool",
              ].map((place) => (
                <div key={place} className="bg-white rounded p-2">
                  <p className="text-sm text-zinc-800">{place}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-indigo-900 mb-3">
              Расположение:
            </p>
            <div className="space-y-2">
              {[
                {
                  num: "1.",
                  desc: "In the heart of the town, next to the library",
                  answer: "A",
                },
                {
                  num: "2.",
                  desc: "On Bridge Street, next to the old stone bridge",
                  answer: "B",
                },
                {
                  num: "3.",
                  desc: "On the outskirts of town",
                  answer: "C",
                },
                {
                  num: "4.",
                  desc: "In the western part of town, near the park",
                  answer: "D",
                },
                {
                  num: "5.",
                  desc: "On Station Road, between the train station and the car park",
                  answer: "E",
                },
                {
                  num: "6.",
                  desc: "Next to the gym",
                  answer: "F",
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
              q: "1. What is in the middle of the town square?",
              options: ["A. A statue", "B. A fountain", "C. A clock tower"],
              answer: "B",
              explanation:
                "В тексте: 'In the middle of the square, there's a beautiful fountain'.",
            },
            {
              q: "2. How many supermarkets are on Main Street?",
              options: ["A. One", "B. Two", "C. Three"],
              answer: "A",
              explanation:
                "Упоминается только один супермаркет на Main Street.",
            },
            {
              q: "3. What bus number goes to the shopping mall?",
              options: [
                "A. Bus number 5",
                "B. Bus number 7",
                "C. Bus number 9",
              ],
              answer: "B",
              explanation:
                "В тексте: 'take bus number 7 from the bus station'.",
            },
            {
              q: "4. How long does it take to get to the shopping mall by bus?",
              options: [
                "A. About five minutes",
                "B. About ten minutes",
                "C. About fifteen minutes",
              ],
              answer: "C",
              explanation:
                "В тексте: 'The journey takes about fifteen minutes'.",
            },
            {
              q: "5. Where is the library?",
              options: [
                "A. Next to the town hall",
                "B. Opposite the post office",
                "C. Near the shopping mall",
              ],
              answer: "A",
              explanation:
                "В тексте: 'There's a library next to the town hall'.",
            },
            {
              q: "6. The café called 'The Book Nook' is...",
              options: [
                "A. next to the library",
                "B. inside the bookshop",
                "C. opposite the gym",
              ],
              answer: "B",
              explanation:
                "В тексте: 'It's called The Book Nook because it's inside the bookshop'.",
            },
            {
              q: "7. To get to the train station from the centre, you should...",
              options: [
                "A. turn left at the traffic lights",
                "B. go straight and turn left",
                "C. turn right at the traffic lights",
              ],
              answer: "C",
              explanation:
                "В тексте: 'go along Main Street, turn right at the traffic lights'.",
            },
            {
              q: "8. The park has...",
              options: [
                "A. a small lake and a playground",
                "B. only a playground",
                "C. a swimming pool",
              ],
              answer: "A",
              explanation:
                "В тексте упоминаются и озеро ('a small lake'), и площадка ('playground').",
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
        title="Задание 4: Заполните пропуски предлогами"
        instruction="Используйте предлоги из текста."
        items={comprehensionExercise}
      />

      <UiSection title="Задание 5: Ответьте на вопросы">
        <div className="bg-white rounded-lg p-6 border border-indigo-200">
          <div className="space-y-4">
            {[
              {
                q: "Where is the bookshop located?",
                a: "The bookshop is between the café and the flower shop, on the left side of Main Street.",
              },
              {
                q: "How can you get to the train station from the town centre?",
                a: "Go along Main Street, turn right at the traffic lights, and walk straight for about five minutes.",
              },
              {
                q: "What can you do in the park?",
                a: "You can relax, have picnics, play with children, feed the ducks, or use the playground.",
              },
              {
                q: "How do you get to the shopping mall?",
                a: "Take bus number 7 from the bus station. The journey takes about fifteen minutes.",
              },
              {
                q: "Where is 'The Book Nook' café and why is it called that?",
                a: "It's inside the bookshop, near the library. It's called 'The Book Nook' because it's inside the bookshop.",
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
      <UiSection title="Итоговое задание: Опишите свой район">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🗺️</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Творческое задание!
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Напишите небольшой текст о вашем районе или городе, используя
                изученную лексику и предлоги места.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border border-indigo-200 mb-6">
        <h4 className="text-lg font-bold text-indigo-900 mb-4">План текста:</h4>
        <div className="space-y-3">
          {[
            "1. Название вашего города/района",
            "2. Что находится в центре?",
            "3. Какие магазины есть поблизости?",
            "4. Где расположены важные места? (банк, почта, больница)",
            "5. Есть ли парк или место для отдыха?",
            "6. Ваше любимое место и как туда добраться",
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
                  Категория
                </th>
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Примеры
                </th>
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Перевод
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-indigo-200 p-3 font-semibold text-indigo-700">
                  Предлоги места
                </td>
                <td className="border border-indigo-200 p-3">
                  in, on, at, next to, opposite, between
                </td>
                <td className="border border-indigo-200 p-3 text-zinc-600">
                  в, на, у, рядом, напротив, между
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border border-indigo-200 p-3 font-semibold text-sky-700">
                  Направления
                </td>
                <td className="border border-indigo-200 p-3">
                  left, right, straight ahead, back
                </td>
                <td className="border border-indigo-200 p-3 text-zinc-600">
                  налево, направо, прямо, назад
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-indigo-200 p-3 font-semibold text-indigo-700">
                  Глаголы движения
                </td>
                <td className="border border-indigo-200 p-3">
                  go, turn, cross, walk, take
                </td>
                <td className="border border-indigo-200 p-3 text-zinc-600">
                  идти, повернуть, перейти, идти, взять
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border border-indigo-200 p-3 font-semibold text-slate-700">
                  Вопросы
                </td>
                <td className="border border-indigo-200 p-3">
                  Where is...? How can I get to...?
                </td>
                <td className="border border-indigo-200 p-3 text-zinc-600">
                  Где...? Как добраться до...?
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
                <strong>60+ слов</strong> для описания мест в городе
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Предлоги места</strong> (in, on, at, next to, opposite,
                between, etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Слова направления</strong> (left, right, straight,
                ahead)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Глаголы движения</strong> (go, turn, cross, walk)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Как <strong>спросить и объяснить дорогу</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Прочитали <strong>большой текст</strong> о городе
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
            Теперь вы можете уверенно ориентироваться в городе и помогать другим
            найти дорогу! Эти знания особенно полезны для путешествий и жизни в
            англоязычных странах. Продолжайте практиковаться!
          </p>
        </div>
      </div>
    </>
  );
}
