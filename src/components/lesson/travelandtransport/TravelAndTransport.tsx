"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function TravelAndTransport({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Travel and Transport: Bus, Train, Holiday">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">✈️</div>
            <div>
              <p className="text-lg font-bold text-indigo-900 mb-3">
                Путешествия и транспорт
              </p>
              <p className="text-zinc-800 leading-relaxed">
                В этой теме мы изучим, как говорить о путешествиях, видах
                транспорта и отпуске на английском языке.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Why Do We Travel? — Зачем мы путешествуем?
          </h4>
          <div className="space-y-3">
            {[
              "To see new places — увидеть новые места",
              "To meet new people — познакомиться с новыми людьми",
              "To learn about different cultures — узнать о разных культурах",
              "To relax and have a rest — расслабиться и отдохнуть",
              "To try new food — попробовать новую еду",
              "To have an adventure — испытать приключение",
              "To take photos and make memories — сделать фотографии и создать воспоминания",
              "To improve language skills — улучшить языковые навыки",
              "To escape from routine — убежать от рутины",
              "To spend time with family/friends — провести время с семьей/друзьями",
            ].map((reason, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            🌍 Types of Travel — Виды путешествий
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { type: "holiday / vacation", translation: "отпуск, каникулы" },
              { type: "business trip", translation: "командировка" },
              { type: "weekend getaway", translation: "поездка на выходные" },
              { type: "road trip", translation: "путешествие на машине" },
              { type: "backpacking", translation: "путешествие с рюкзаком" },
              { type: "cruise", translation: "круиз" },
              { type: "city break", translation: "короткая городская поездка" },
              {
                type: "adventure travel",
                translation: "приключенческий туризм",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-3">
                <p className="font-bold text-sky-900">{item.type}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Виды транспорта ===== */
function Step2() {
  return (
    <>
      <UiSection title="Types of Transport — Виды транспорта">
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-sky-300">
          <p className="text-sky-900 leading-relaxed font-semibold">
            Изучите все основные виды транспорта и как о них говорить.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Public Transport — Общественный транспорт
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "bus",
                transcr: "/bʌs/",
                translation: "автобус",
                example: "take a bus, catch a bus",
              },
              {
                word: "coach",
                transcr: "/kəʊtʃ/",
                translation: "междугородний автобус",
                example: "travel by coach",
              },
              {
                word: "train",
                transcr: "/treɪn/",
                translation: "поезд",
                example: "catch a train, miss a train",
              },
              {
                word: "underground / subway / metro",
                transcr: "/ˈʌndəɡraʊnd/",
                translation: "метро",
                example: "take the underground",
              },
              {
                word: "tram",
                transcr: "/træm/",
                translation: "трамвай",
                example: "ride a tram",
              },
              {
                word: "taxi / cab",
                transcr: "/ˈtæksi/",
                translation: "такси",
                example: "call a taxi, hail a cab",
              },
              {
                word: "ferry",
                transcr: "/ˈferi/",
                translation: "паром",
                example: "take a ferry",
              },
              {
                word: "trolleybus",
                transcr: "/ˈtrɒlibʌs/",
                translation: "троллейбус",
                example: "go by trolleybus",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
              >
                <p className="font-bold text-green-900 text-lg">{item.word}</p>
                <p className="text-xs text-green-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800 mb-1">{item.translation}</p>
                <p className="text-xs text-blue-700 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Private & Long-Distance Transport
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "car",
                transcr: "/kɑː/",
                translation: "машина",
                example: "drive a car, go by car",
              },
              {
                word: "plane / aircraft",
                transcr: "/pleɪn/",
                translation: "самолёт",
                example: "take a plane, fly by plane",
              },
              {
                word: "ship",
                transcr: "/ʃɪp/",
                translation: "корабль",
                example: "travel by ship",
              },
              {
                word: "boat",
                transcr: "/bəʊt/",
                translation: "лодка",
                example: "go by boat",
              },
              {
                word: "bicycle / bike",
                transcr: "/ˈbaɪsɪkl/",
                translation: "велосипед",
                example: "ride a bike, cycle",
              },
              {
                word: "motorcycle / motorbike",
                transcr: "/ˈməʊtəsaɪkl/",
                translation: "мотоцикл",
                example: "ride a motorcycle",
              },
              {
                word: "scooter",
                transcr: "/ˈskuːtə/",
                translation: "скутер, самокат",
                example: "ride a scooter",
              },
              {
                word: "helicopter",
                transcr: "/ˈhelɪkɒptə/",
                translation: "вертолёт",
                example: "fly by helicopter",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400"
              >
                <p className="font-bold text-blue-900 text-lg">{item.word}</p>
                <p className="text-xs text-blue-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800 mb-1">{item.translation}</p>
                <p className="text-xs text-green-700 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            📌 Prepositions with Transport
          </h4>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-indigo-900 mb-2">
                BY + transport (как общий способ передвижения)
              </p>
              <p className="text-sm text-green-700">
                I go to work <strong>by</strong> bus. / I travelled{" "}
                <strong>by</strong> train. / We flew <strong>by</strong> plane.
              </p>
            </div>
            <div>
              <p className="font-bold text-indigo-900 mb-2">
                ON + конкретный вид транспорта (на борту)
              </p>
              <p className="text-sm text-green-700">
                I'm <strong>on</strong> the bus now. / She's <strong>on</strong>{" "}
                the train. / They met <strong>on</strong> the plane.
              </p>
            </div>
            <div>
              <p className="font-bold text-indigo-900 mb-2">
                IN + car, taxi (внутри)
              </p>
              <p className="text-sm text-green-700">
                I'm <strong>in</strong> the car. / We sat <strong>in</strong>{" "}
                the taxi.
              </p>
            </div>
            <div>
              <p className="font-bold text-indigo-900 mb-2">
                ON FOOT = пешком (без by!)
              </p>
              <p className="text-sm text-green-700">
                I go to school <strong>on foot</strong>. (НЕ by foot!)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Продолжение следует... */

/* ===== СТРАНИЦА 3: Путешествия и отпуск ===== */
function Step3() {
  return (
    <>
      <UiSection title="Holidays and Vacations — Отпуск и каникулы">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Vocabulary for talking about holidays and vacations.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Holiday Destinations — Места для отдыха
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { word: "beach", transcr: "/biːtʃ/", translation: "пляж" },
              {
                word: "seaside",
                transcr: "/ˈsiːsaɪd/",
                translation: "побережье",
              },
              {
                word: "mountains",
                transcr: "/ˈmaʊntɪnz/",
                translation: "горы",
              },
              {
                word: "countryside",
                transcr: "/ˈkʌntrisaɪd/",
                translation: "сельская местность",
              },
              { word: "city", transcr: "/ˈsɪti/", translation: "город" },
              { word: "resort", transcr: "/rɪˈzɔːt/", translation: "курорт" },
              { word: "island", transcr: "/ˈaɪlənd/", translation: "остров" },
              { word: "lake", transcr: "/leɪk/", translation: "озеро" },
              { word: "forest", transcr: "/ˈfɒrɪst/", translation: "лес" },
              {
                word: "national park",
                transcr: "/ˈnæʃnəl pɑːk/",
                translation: "национальный парк",
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

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Accommodation — Жильё
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "hotel",
                transcr: "/həʊˈtel/",
                translation: "отель",
                example: "stay at a hotel",
              },
              {
                word: "hostel",
                transcr: "/ˈhɒstl/",
                translation: "хостел",
                example: "book a hostel",
              },
              {
                word: "guesthouse",
                transcr: "/ˈɡesthaʊs/",
                translation: "гостевой дом",
                example: "stay in a guesthouse",
              },
              {
                word: "apartment",
                transcr: "/əˈpɑːtmənt/",
                translation: "квартира",
                example: "rent an apartment",
              },
              {
                word: "villa",
                transcr: "/ˈvɪlə/",
                translation: "вилла",
                example: "stay in a villa",
              },
              {
                word: "cottage",
                transcr: "/ˈkɒtɪdʒ/",
                translation: "коттедж",
                example: "rent a cottage",
              },
              {
                word: "campsite",
                transcr: "/ˈkæmpsaɪt/",
                translation: "кемпинг",
                example: "stay at a campsite",
              },
              {
                word: "B&B (bed and breakfast)",
                transcr: "—",
                translation: "постель и завтрак",
                example: "book a B&B",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
              >
                <p className="font-bold text-green-900 text-lg">{item.word}</p>
                <p className="text-xs text-green-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800 mb-1">{item.translation}</p>
                <p className="text-xs text-blue-700 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Holiday Activities — Занятия на отдыхе
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "sunbathe — загорать",
              "swim in the sea — плавать в море",
              "go sightseeing — осматривать достопримечательности",
              "visit museums — посещать музеи",
              "take photos — делать фотографии",
              "try local food — пробовать местную еду",
              "go hiking — ходить в пешие походы",
              "go skiing — кататься на лыжах",
              "go surfing — заниматься сёрфингом",
              "go camping — ходить в кемпинг",
              "relax by the pool — отдыхать у бассейна",
              "explore the city — исследовать город",
              "buy souvenirs — покупать сувениры",
              "make new friends — заводить новых друзей",
            ].map((activity, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-zinc-900">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Полезные фразы ===== */
function Step4() {
  return (
    <>
      <UiSection title="Useful Travel Phrases — Полезные фразы">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Фразы, которые помогут вам в путешествии.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Planning a Trip — Планирование поездки
          </h4>
          <div className="space-y-3">
            {[
              "I'm planning to go to... — Я планирую поехать в...",
              "I'm going to visit... — Я собираюсь посетить...",
              "We're travelling to... next month — Мы едем в... в следующем месяце",
              "I'd like to go somewhere warm — Я хотел бы поехать куда-нибудь в тепло",
              "How long are you going for? — На сколько вы едете?",
              "I'm going for a week / two weeks — Я еду на неделю / две недели",
              "When are you leaving? — Когда вы уезжаете?",
              "We're leaving on Monday — Мы уезжаем в понедельник",
              "How are you getting there? — Как вы туда доберётесь?",
              "We're flying / driving / taking the train — Мы полетим / поедем на машине / на поезде",
              "Where are you staying? — Где вы остановитесь?",
              "We're staying at a hotel — Мы остановимся в отеле",
            ].map((phrase, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{phrase}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            During the Trip — Во время поездки
          </h4>
          <div className="space-y-3">
            {[
              "I'm having a great time — Я отлично провожу время",
              "We're really enjoying our holiday — Нам очень нравится наш отдых",
              "The weather is wonderful / terrible — Погода замечательная / ужасная",
              "The hotel is comfortable — Отель комфортный",
              "The food is delicious — Еда вкусная",
              "We visited many interesting places — Мы посетили много интересных мест",
              "I took a lot of photos — Я сделал много фотографий",
              "We went sightseeing yesterday — Вчера мы осматривали достопримечательности",
              "The beach is beautiful — Пляж красивый",
              "I tried local cuisine — Я попробовал местную кухню",
            ].map((phrase, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{phrase}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
          <h4 className="text-2xl font-bold text-purple-900 mb-4">
            After the Trip — После поездки
          </h4>
          <div className="space-y-3">
            {[
              "I had a wonderful time — Я замечательно провёл время",
              "The trip was amazing / fantastic — Поездка была потрясающей / фантастической",
              "I really enjoyed my holiday — Мне очень понравился мой отдых",
              "I want to go back there again — Я хочу вернуться туда снова",
              "It was the best holiday ever — Это был лучший отдых в моей жизни",
              "I'd recommend this place to everyone — Я бы порекомендовал это место всем",
              "I brought back some souvenirs — Я привёз сувениры",
              "I met a lot of interesting people — Я встретил много интересных людей",
              "Unfortunately, the weather wasn't great — К сожалению, погода была не очень",
              "I'm already planning my next trip — Я уже планирую свою следующую поездку",
            ].map((phrase, idx) => (
              <div key={idx} className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{phrase}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: В аэропорту и на вокзале ===== */
function Step5() {
  return (
    <>
      <UiSection title="At the Airport and Train Station">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Vocabulary for airports and train stations.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            At the Airport — В аэропорту
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { word: "check-in desk", translation: "стойка регистрации" },
              { word: "boarding pass", translation: "посадочный талон" },
              { word: "passport control", translation: "паспортный контроль" },
              { word: "security check", translation: "проверка безопасности" },
              { word: "departure lounge", translation: "зал ожидания" },
              { word: "gate", translation: "выход на посадку" },
              { word: "baggage claim", translation: "выдача багажа" },
              { word: "customs", translation: "таможня" },
              { word: "arrival hall", translation: "зал прилёта" },
              { word: "flight", translation: "рейс" },
              { word: "runway", translation: "взлётная полоса" },
              { word: "terminal", translation: "терминал" },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="font-bold text-indigo-900">{item.word}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            At the Train Station — На вокзале
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { word: "platform", translation: "платформа, перрон" },
              { word: "ticket office", translation: "касса" },
              { word: "waiting room", translation: "зал ожидания" },
              { word: "timetable / schedule", translation: "расписание" },
              { word: "single ticket", translation: "билет в одну сторону" },
              { word: "return ticket", translation: "билет туда-обратно" },
              { word: "seat reservation", translation: "бронирование места" },
              { word: "carriage / car", translation: "вагон" },
              {
                word: "first class / second class",
                translation: "первый / второй класс",
              },
              { word: "departure", translation: "отправление" },
              { word: "arrival", translation: "прибытие" },
              { word: "delay", translation: "задержка" },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <p className="font-bold text-green-900">{item.word}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            💡 Полезные фразы на вокзале и в аэропорту
          </h4>
          <div className="space-y-2 text-sm">
            <p className="text-zinc-800">
              <strong>Where's the check-in desk?</strong> — Где стойка
              регистрации?
            </p>
            <p className="text-zinc-800">
              <strong>What time does the train leave?</strong> — Во сколько
              отправляется поезд?
            </p>
            <p className="text-zinc-800">
              <strong>Which platform?</strong> — Какая платформа?
            </p>
            <p className="text-zinc-800">
              <strong>Is this seat taken?</strong> — Это место занято?
            </p>
            <p className="text-zinc-800">
              <strong>How much is a ticket to...?</strong> — Сколько стоит билет
              до...?
            </p>
            <p className="text-zinc-800">
              <strong>The flight is delayed</strong> — Рейс задерживается
            </p>
            <p className="text-zinc-800">
              <strong>Final call for flight...</strong> — Последняя посадка на
              рейс...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Упражнения ===== */
function Step6() {
  const exercise1: FillItem[] = [
    {
      left: "1. I usually travel",
      right: "train. (на)",
      answers: ["by"],
      explanation: "by train = на поезде (общий способ)",
    },
    {
      left: "2. We're staying",
      right: "a hotel near the beach. (в)",
      answers: ["at"],
      explanation: "stay at a hotel = остановиться в отеле",
    },
    {
      left: "3. I'm going to",
      right: "my holiday in Spain. (проводить)",
      answers: ["spend"],
      explanation: "spend a holiday = проводить отпуск",
    },
    {
      left: "4. Don't forget to",
      right: "your ticket! (купить)",
      answers: ["buy"],
      explanation: "buy a ticket = купить билет",
    },
    {
      left: "5. The train",
      right: "at 3 o'clock. (отправляется)",
      answers: ["leaves", "departs"],
      explanation: "leave / depart = отправляться",
    },
    {
      left: "6. We went",
      right: "yesterday. (осматривать достопримечательности)",
      answers: ["sightseeing"],
      explanation: "go sightseeing = осматривать достопримечательности",
    },
    {
      left: "7. I'd like to",
      right: "a single ticket to London. (забронировать)",
      answers: ["book", "buy"],
      explanation: "book/buy a ticket = забронировать/купить билет",
    },
    {
      left: "8. Which",
      right: "does the train leave from? (платформа)",
      answers: ["platform"],
      explanation: "platform = платформа, перрон",
    },
  ];

  return (
    <>
      <UiSection title="Упражнения">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Практикуйте лексику по теме путешествий и транспорта.
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
          Диалог: Buying a Train Ticket
        </h4>
        <div className="space-y-3 text-sm">
          <div className="bg-green-50 rounded p-4">
            <p className="font-bold text-green-900 mb-1">Customer:</p>
            <p className="text-zinc-800">
              Hello. I'd like to buy a ticket to London, please.
            </p>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <p className="font-bold text-blue-900 mb-1">Ticket Officer:</p>
            <p className="text-zinc-800">Single or return?</p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="font-bold text-green-900 mb-1">Customer:</p>
            <p className="text-zinc-800">
              Return, please. When does the next train leave?
            </p>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <p className="font-bold text-blue-900 mb-1">Ticket Officer:</p>
            <p className="text-zinc-800">
              At 2:30 from platform 5. That's £45, please.
            </p>
          </div>
          <div className="bg-green-50 rounded p-4">
            <p className="font-bold text-green-900 mb-1">Customer:</p>
            <p className="text-zinc-800">Here you are. Thank you!</p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Текст для чтения ===== */
function Step7() {
  return (
    <>
      <UiSection title="Reading: My Summer Holiday">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed">
            Прочитайте текст о летнем отпуске. На следующей странице будут
            задания.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          My Summer Holiday in Italy
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            Last summer, my family and I went on a wonderful holiday to Italy.
            We had been planning this trip for months, and finally, in July, we
            were on our way. We travelled by plane from London to Rome, and the
            flight took about two and a half hours. I was very excited because
            it was my first time visiting Italy.
          </p>

          <div className="bg-sky-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-sky-900 mb-3">
              Arriving in Rome
            </h4>
            <p className="mb-3">
              When we arrived at the airport in Rome, the weather was hot and
              sunny. We took a taxi from the airport to our hotel in the city
              centre. The journey took about 40 minutes because there was a lot
              of traffic. Our hotel was beautiful and very comfortable. It was
              located near the Colosseum, which meant we could easily walk to
              many famous sights.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-green-900 mb-3">
              Exploring the City
            </h4>
            <p className="mb-3">
              We spent the first three days sightseeing in Rome. We visited the
              Colosseum, the Roman Forum, and the Vatican City. The architecture
              was absolutely stunning! I took hundreds of photos. We also tried
              lots of delicious Italian food. My favourite was the pizza – it
              was much better than any pizza I'd ever had in England. We also
              had gelato (Italian ice cream) every day because it was so hot.
            </p>
            <p>
              One of the best parts of our time in Rome was simply walking
              around the narrow streets and discovering small cafés and shops.
              The atmosphere was amazing, with street musicians playing music
              and people sitting outside restaurants enjoying their meals.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-indigo-900 mb-3">
              By Train to Florence
            </h4>
            <p className="mb-3">
              After three days in Rome, we took a train to Florence. The train
              journey was very comfortable and took about an hour and a half.
              From the train window, we could see beautiful Italian countryside
              with olive trees and vineyards. Florence was smaller than Rome but
              equally beautiful. We stayed in a lovely guesthouse near the
              river.
            </p>
            <p>
              In Florence, we visited many art galleries and museums. My mum is
              really interested in art, so she was very happy. We saw famous
              paintings and sculptures by Italian artists. We also went shopping
              and bought some souvenirs to take home.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-purple-900 mb-3">
              The Coast
            </h4>
            <p className="mb-3">
              For the last part of our holiday, we rented a car and drove to the
              coast. We stayed in a small village by the sea for four days. It
              was the perfect place to relax after all the sightseeing. We spent
              our days swimming in the sea, sunbathing on the beach, and eating
              fresh seafood at local restaurants. The water was crystal clear
              and wonderfully warm.
            </p>
            <p>
              On our last evening, we watched the sunset from a restaurant on a
              cliff overlooking the sea. It was one of the most beautiful things
              I've ever seen. I felt sad that our holiday was coming to an end.
            </p>
          </div>

          <p className="mt-6">
            The trip home was long and tiring. We had to drive back to Rome,
            return the rental car, and then catch our flight home. When we
            finally arrived back in London, it was raining – a typical English
            summer! But I didn't mind because I had so many wonderful memories
            of our Italian adventure. I'm already looking forward to our next
            holiday abroad.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-lg p-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Словарь к тексту
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ["sightseeing", "/ˈsaɪtˌsiːɪŋ/", "осмотр достопримечательностей"],
            ["stunning", "/ˈstʌnɪŋ/", "потрясающий"],
            ["gelato", "/dʒəˈlɑːtəʊ/", "джелато (итальянское мороженое)"],
            ["atmosphere", "/ˈætməsfɪə/", "атмосфера"],
            ["vineyard", "/ˈvɪnjəd/", "виноградник"],
            ["souvenir", "/ˌsuːvəˈnɪə/", "сувенир"],
            ["rent", "/rent/", "арендовать"],
            ["crystal clear", "—", "кристально чистый"],
            ["cliff", "/klɪf/", "утёс, скала"],
            ["adventure", "/ədˈventʃə/", "приключение"],
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

/* ===== СТРАНИЦА 8: Вопросы по тексту ===== */
function Step8() {
  const questions: FillItem[] = [
    {
      left: "1. How long did the flight from London to Rome take?",
      right: "",
      answers: [
        "about two and a half hours",
        "2.5 hours",
        "two and a half hours",
      ],
      explanation: "В тексте: 'the flight took about two and a half hours'.",
    },
    {
      left: "2. How did the family get from the airport to the hotel?",
      right: "",
      answers: ["by taxi", "they took a taxi", "taxi"],
      explanation: "В тексте: 'We took a taxi from the airport to our hotel'.",
    },
    {
      left: "3. What was the author's favourite Italian food?",
      right: "",
      answers: ["pizza"],
      explanation: "В тексте: 'My favourite was the pizza'.",
    },
    {
      left: "4. How did they travel from Rome to Florence?",
      right: "",
      answers: ["by train", "they took a train", "train"],
      explanation: "В тексте: 'we took a train to Florence'.",
    },
    {
      left: "5. How long did the train journey take?",
      right: "",
      answers: ["about an hour and a half", "1.5 hours", "an hour and a half"],
      explanation:
        "В тексте: 'The train journey was very comfortable and took about an hour and a half'.",
    },
    {
      left: "6. How did they get to the coast?",
      right: "",
      answers: ["by car", "they rented a car", "they drove", "car"],
      explanation: "В тексте: 'we rented a car and drove to the coast'.",
    },
    {
      left: "7. How many days did they spend by the sea?",
      right: "",
      answers: ["four days", "4 days", "four"],
      explanation:
        "В тексте: 'We stayed in a small village by the sea for four days'.",
    },
    {
      left: "8. What was the weather like when they arrived back in London?",
      right: "",
      answers: ["it was raining", "raining", "rainy"],
      explanation:
        "В тексте: 'When we finally arrived back in London, it was raining'.",
    },
  ];

  return (
    <>
      <UiSection title="Reading Comprehension">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📝</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Ответьте на вопросы по тексту
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Прочитайте вопросы и дайте краткие ответы на основе текста.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Answer the Questions"
        instruction="Ответьте на вопросы кратко."
        items={questions}
      />
    </>
  );
}

/* ===== СТРАНИЦА 9: Монолог (как задание 3 ОГЭ) ===== */
function Step9() {
  return (
    <>
      <UiSection title="Speaking Task: Talk About Travel">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎤</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Подготовьте монолог
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Вы должны рассказать о путешествиях и транспорте. Ответьте на
                вопросы ниже и подготовьте связный рассказ.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Task: Tell about your travel preferences
          </h4>
          <p className="text-zinc-800 mb-4">
            Вам нужно рассказать о путешествиях. У вас есть 1.5 минуты на
            подготовку и не более 2 минут на ответ (10-12 предложений).
          </p>
          <div className="bg-green-50 rounded-lg p-5">
            <h5 className="text-lg font-bold text-green-900 mb-3">
              You need to speak about:
            </h5>
            <ul className="space-y-3 text-sm text-zinc-800">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <strong>whether you like travelling and why / why not</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <strong>what means of transport you prefer and why</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <strong>where you usually spend your holidays</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <strong>what your last trip was like</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <strong>what your dream holiday would be like</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-xl font-bold text-blue-900 mb-4">
            Структура ответа
          </h4>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h5 className="font-bold text-blue-900 mb-2">
                1. Introduction (1-2 sentences)
              </h5>
              <p className="text-sm text-zinc-800 mb-2">
                Начните с общего введения в тему.
              </p>
              <p className="text-sm text-green-700 italic">
                "I'd like to tell you about travelling. Travelling is one of my
                favourite activities / I don't travel very often, but..."
              </p>
            </div>

            <div className="bg-sky-50 rounded-lg p-4">
              <h5 className="font-bold text-sky-900 mb-2">
                2. Answer each question (2 sentences per point)
              </h5>
              <p className="text-sm text-zinc-800 mb-2">
                Ответьте на каждый пункт, развивая мысль.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sky-900 mb-1">
                    Like travelling?
                  </p>
                  <p className="text-green-700 italic">
                    "I really enjoy travelling because it allows me to see new
                    places and meet new people. It helps me to learn about
                    different cultures and traditions."
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sky-900 mb-1">
                    Preferred transport?
                  </p>
                  <p className="text-green-700 italic">
                    "I prefer travelling by train because it's comfortable and
                    you can enjoy the scenery. However, for long distances, I
                    usually fly because it's much faster."
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sky-900 mb-1">
                    Where spend holidays?
                  </p>
                  <p className="text-green-700 italic">
                    "I usually spend my summer holidays at the seaside with my
                    family. We like to relax on the beach and swim in the sea."
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sky-900 mb-1">Last trip?</p>
                  <p className="text-green-700 italic">
                    "My last trip was to Moscow last summer. We visited many
                    museums and went sightseeing every day."
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-sky-900 mb-1">
                    Dream holiday?
                  </p>
                  <p className="text-green-700 italic">
                    "My dream holiday would be a trip to Japan. I'd like to
                    visit Tokyo and Kyoto to see traditional temples and
                    experience Japanese culture."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h5 className="font-bold text-purple-900 mb-2">
                3. Conclusion (1 sentence)
              </h5>
              <p className="text-sm text-zinc-800 mb-2">
                Завершите рассказ общим выводом.
              </p>
              <p className="text-sm text-green-700 italic">
                "That's all I wanted to say about travelling. / To sum up,
                travelling is a great way to broaden your horizons."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            💡 Полезные советы
          </h4>
          <ul className="space-y-2 text-sm text-zinc-800">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>
                Используйте разные времена (Present Simple, Past Simple, would
                для будущего)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>
                Добавляйте linking words: firstly, secondly, however, also,
                moreover
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Говорите уверенно, не торопитесь</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Старайтесь говорить 10-12 предложений (не меньше!)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Не забудьте вступление и заключение</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговые упражнения ===== */
function Step10() {
  const exercise: FillItem[] = [
    {
      left: "1. I go to work",
      right: "bus every day. (на)",
      answers: ["by"],
      explanation: "by bus = на автобусе",
    },
    {
      left: "2. We're flying",
      right: "Spain next month. (в)",
      answers: ["to"],
      explanation: "fly to = лететь в",
    },
    {
      left: "3. I'd like to",
      right: "a ticket to London. (купить)",
      answers: ["buy", "book"],
      explanation: "buy/book a ticket = купить/забронировать билет",
    },
    {
      left: "4. The train",
      right: "from platform 3. (отправляется)",
      answers: ["leaves", "departs"],
      explanation: "leave/depart = отправляться",
    },
    {
      left: "5. We stayed",
      right: "a hotel near the beach. (в)",
      answers: ["at", "in"],
      explanation: "stay at/in a hotel = остановиться в отеле",
    },
    {
      left: "6. I really",
      right: "my holiday in Italy. (понравилось)",
      answers: ["enjoyed"],
      explanation: "enjoy = наслаждаться, нравиться",
    },
    {
      left: "7. We went",
      right: "and visited many museums. (осмотр достопримечательностей)",
      answers: ["sightseeing"],
      explanation: "go sightseeing = осматривать достопримечательности",
    },
    {
      left: "8. Don't forget your",
      right: "pass! (посадочный)",
      answers: ["boarding"],
      explanation: "boarding pass = посадочный талон",
    },
    {
      left: "9. The flight was",
      right: "for two hours. (задержан)",
      answers: ["delayed"],
      explanation: "delayed = задержан",
    },
    {
      left: "10. I want to",
      right: "back there again. (вернуться)",
      answers: ["go"],
      explanation: "go back = вернуться",
    },
  ];

  return (
    <>
      <UiSection title="Итоговые упражнения">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Проверьте, как вы усвоили материал по теме "Travel and Transport".
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
                  Public Transport
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  bus, train, underground, tram, taxi, ferry
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Private Transport
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  car, plane, bike, motorcycle, boat
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Accommodation
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  hotel, hostel, apartment, villa, campsite
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Holiday Activities
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  sunbathe, go sightseeing, visit museums, try local food
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  At the Airport
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  check-in, boarding pass, security, gate, baggage claim
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
                <strong>16+ видов транспорта</strong> — от автобуса до вертолёта
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Предлоги с транспортом</strong> — by, on, in + правила
                использования
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Места для отдыха и жильё</strong> — beach, mountains,
                hotel, hostel
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Полезные фразы</strong> для планирования поездок и во
                время путешествий
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Vocabulary для аэропорта и вокзала</strong> — check-in,
                platform, ticket
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Монолог о путешествиях</strong> — структура и полезные
                фразы
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
            Вы успешно освоили лексику по теме "Travel and Transport"! Теперь вы
            можете рассказать о своих путешествиях, обсудить различные виды
            транспорта и подготовить связный монолог на тему путешествий.
            Продолжайте практиковаться!
          </p>
        </div>
      </div>
    </>
  );
}
