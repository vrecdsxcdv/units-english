"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function HouseAndHome({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Комнаты в доме ===== */
function Step1() {
  return (
    <>
      <UiSection title="House and Home: Rooms, Furniture">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🏠</div>
            <div>
              <p className="text-lg font-bold text-indigo-900 mb-3">
                Дом и домашний уют
              </p>
              <p className="text-zinc-800 leading-relaxed">
                В этой теме мы изучим все слова, связанные с домом: комнаты,
                мебель, бытовую технику и полезные фразы для описания жилища.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Rooms in the House — Комнаты в доме
          </h4>
          <p className="text-zinc-700 mb-4">
            Изучите названия основных комнат и помещений в доме:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "living room",
                transcr: "/ˈlɪvɪŋ ruːm/",
                translation: "гостиная",
                note: "the main room",
              },
              {
                word: "bedroom",
                transcr: "/ˈbedruːm/",
                translation: "спальня",
                note: "room for sleeping",
              },
              {
                word: "kitchen",
                transcr: "/ˈkɪtʃɪn/",
                translation: "кухня",
                note: "room for cooking",
              },
              {
                word: "bathroom",
                transcr: "/ˈbɑːθruːm/",
                translation: "ванная комната",
                note: "room with bath/shower",
              },
              {
                word: "dining room",
                transcr: "/ˈdaɪnɪŋ ruːm/",
                translation: "столовая",
                note: "room for eating",
              },
              {
                word: "hall / hallway",
                transcr: "/hɔːl/ /ˈhɔːlweɪ/",
                translation: "прихожая, коридор",
                note: "entrance area",
              },
              {
                word: "study",
                transcr: "/ˈstʌdi/",
                translation: "кабинет",
                note: "room for working",
              },
              {
                word: "guest room",
                transcr: "/ɡest ruːm/",
                translation: "гостевая комната",
                note: "room for guests",
              },
              {
                word: "attic",
                transcr: "/ˈætɪk/",
                translation: "чердак",
                note: "room under the roof",
              },
              {
                word: "basement / cellar",
                transcr: "/ˈbeɪsmənt/ /ˈselə/",
                translation: "подвал",
                note: "room below ground",
              },
              {
                word: "garage",
                transcr: "/ˈɡærɑːʒ/",
                translation: "гараж",
                note: "room for car",
              },
              {
                word: "balcony",
                transcr: "/ˈbælkəni/",
                translation: "балкон",
                note: "outdoor platform",
              },
              {
                word: "terrace",
                transcr: "/ˈterəs/",
                translation: "терраса",
                note: "outdoor patio",
              },
              {
                word: "garden",
                transcr: "/ˈɡɑːdn/",
                translation: "сад",
                note: "area with plants",
              },
              {
                word: "yard",
                transcr: "/jɑːd/",
                translation: "двор",
                note: "outdoor area",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400"
              >
                <p className="font-bold text-indigo-900 text-lg">{item.word}</p>
                <p className="text-xs text-indigo-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800 mb-1">{item.translation}</p>
                <p className="text-xs text-zinc-600 italic">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            Types of Houses — Типы домов
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "house",
                transcr: "/haʊs/",
                translation: "дом (отдельно стоящий)",
              },
              {
                word: "flat / apartment",
                transcr: "/flæt/ /əˈpɑːtmənt/",
                translation: "квартира",
              },
              {
                word: "cottage",
                transcr: "/ˈkɒtɪdʒ/",
                translation: "коттедж, загородный дом",
              },
              {
                word: "bungalow",
                transcr: "/ˈbʌŋɡələʊ/",
                translation: "одноэтажный дом",
              },
              {
                word: "villa",
                transcr: "/ˈvɪlə/",
                translation: "вилла",
              },
              {
                word: "mansion",
                transcr: "/ˈmænʃn/",
                translation: "особняк",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-4">
                <p className="font-bold text-sky-900">{item.word}</p>
                <p className="text-xs text-sky-600">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            💡 Совет по запоминанию
          </h4>
          <p className="text-zinc-800 mb-3">
            Чтобы лучше запомнить названия комнат, попробуйте:
          </p>
          <ul className="space-y-2 text-sm text-zinc-800">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">1.</span>
              <span>
                Мысленно "пройтись" по своему дому и назвать каждую комнату
                по-английски
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">2.</span>
              <span>
                Наклеить стикеры с английскими названиями на двери комнат
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">3.</span>
              <span>Нарисовать план дома и подписать все комнаты</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Мебель в гостиной ===== */
function Step2() {
  return (
    <>
      <UiSection title="Living Room Furniture — Мебель в гостиной">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Изучите предметы мебели и декора, которые обычно находятся в
            гостиной.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Main Furniture — Основная мебель
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "sofa / couch",
                transcr: "/ˈsəʊfə/ /kaʊtʃ/",
                translation: "диван",
                example: "sit on the sofa",
              },
              {
                word: "armchair",
                transcr: "/ˈɑːmtʃeə/",
                translation: "кресло",
                example: "relax in an armchair",
              },
              {
                word: "coffee table",
                transcr: "/ˈkɒfi ˌteɪbl/",
                translation: "журнальный столик",
                example: "put the cups on the coffee table",
              },
              {
                word: "bookcase / bookshelf",
                transcr: "/ˈbʊkkeɪs/ /ˈbʊkʃelf/",
                translation: "книжный шкаф / полка",
                example: "store books on the bookshelf",
              },
              {
                word: "TV stand",
                transcr: "/ˌtiː ˈviː stænd/",
                translation: "тумба под телевизор",
                example: "TV on the stand",
              },
              {
                word: "cabinet",
                transcr: "/ˈkæbɪnət/",
                translation: "шкаф, тумба",
                example: "keep things in the cabinet",
              },
              {
                word: "rug / carpet",
                transcr: "/rʌɡ/ /ˈkɑːpɪt/",
                translation: "ковёр",
                example: "rug on the floor",
              },
              {
                word: "cushion",
                transcr: "/ˈkʊʃn/",
                translation: "подушка (декоративная)",
                example: "cushions on the sofa",
              },
              {
                word: "lamp",
                transcr: "/læmp/",
                translation: "лампа, торшер",
                example: "turn on the lamp",
              },
              {
                word: "curtains",
                transcr: "/ˈkɜːtnz/",
                translation: "шторы",
                example: "open the curtains",
              },
              {
                word: "blinds",
                transcr: "/blaɪndz/",
                translation: "жалюзи",
                example: "close the blinds",
              },
              {
                word: "picture / painting",
                transcr: "/ˈpɪktʃə/ /ˈpeɪntɪŋ/",
                translation: "картина",
                example: "hang a picture on the wall",
              },
              {
                word: "mirror",
                transcr: "/ˈmɪrə/",
                translation: "зеркало",
                example: "look in the mirror",
              },
              {
                word: "fireplace",
                transcr: "/ˈfaɪəpleɪs/",
                translation: "камин",
                example: "sit by the fireplace",
              },
              {
                word: "clock",
                transcr: "/klɒk/",
                translation: "часы (настенные)",
                example: "check the clock",
              },
              {
                word: "vase",
                transcr: "/vɑːz/",
                translation: "ваза",
                example: "put flowers in a vase",
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

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            Electronics — Электроника
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "TV / television",
                transcr: "/ˌteləˈvɪʒn/",
                translation: "телевизор",
              },
              {
                word: "remote control",
                transcr: "/rɪˈməʊt kənˈtrəʊl/",
                translation: "пульт",
              },
              {
                word: "speaker",
                transcr: "/ˈspiːkə/",
                translation: "колонка, динамик",
              },
              {
                word: "air conditioner",
                transcr: "/eə kənˈdɪʃənə/",
                translation: "кондиционер",
              },
              {
                word: "heater",
                transcr: "/ˈhiːtə/",
                translation: "обогреватель",
              },
              { word: "fan", transcr: "/fæn/", translation: "вентилятор" },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-4">
                <p className="font-bold text-sky-900">{item.word}</p>
                <p className="text-xs text-sky-600">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: Спальня и ванная ===== */
function Step3() {
  return (
    <>
      <UiSection title="Bedroom & Bathroom — Спальня и ванная">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Слова, связанные со спальней и ванной комнатой.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Bedroom — Спальня
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "bed",
                transcr: "/bed/",
                translation: "кровать",
                example: "sleep in bed",
              },
              {
                word: "mattress",
                transcr: "/ˈmætrəs/",
                translation: "матрас",
                example: "comfortable mattress",
              },
              {
                word: "pillow",
                transcr: "/ˈpɪləʊ/",
                translation: "подушка",
                example: "soft pillow",
              },
              {
                word: "blanket",
                transcr: "/ˈblæŋkɪt/",
                translation: "одеяло",
                example: "warm blanket",
              },
              {
                word: "duvet / quilt",
                transcr: "/ˈduːveɪ/ /kwɪlt/",
                translation: "пуховое одеяло",
                example: "thick duvet",
              },
              {
                word: "bedsheet",
                transcr: "/ˈbedʃiːt/",
                translation: "простыня",
                example: "clean sheets",
              },
              {
                word: "pillowcase",
                transcr: "/ˈpɪləʊkeɪs/",
                translation: "наволочка",
                example: "change the pillowcase",
              },
              {
                word: "wardrobe / closet",
                transcr: "/ˈwɔːdrəʊb/ /ˈklɒzɪt/",
                translation: "шкаф для одежды",
                example: "hang clothes in the wardrobe",
              },
              {
                word: "dresser",
                transcr: "/ˈdresə/",
                translation: "комод",
                example: "put clothes in the dresser",
              },
              {
                word: "nightstand / bedside table",
                transcr: "/ˈnaɪtstænd/",
                translation: "прикроватная тумбочка",
                example: "lamp on the nightstand",
              },
              {
                word: "alarm clock",
                transcr: "/əˈlɑːm klɒk/",
                translation: "будильник",
                example: "set the alarm",
              },
              {
                word: "hanger",
                transcr: "/ˈhæŋə/",
                translation: "вешалка",
                example: "hang on a hanger",
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

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            Bathroom — Ванная комната
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "bath / bathtub",
                transcr: "/bɑːθ/ /ˈbɑːθtʌb/",
                translation: "ванна",
              },
              { word: "shower", transcr: "/ˈʃaʊə/", translation: "душ" },
              {
                word: "sink / washbasin",
                transcr: "/sɪŋk/ /ˈwɒʃbeɪsn/",
                translation: "раковина",
              },
              { word: "toilet", transcr: "/ˈtɔɪlət/", translation: "унитаз" },
              { word: "mirror", transcr: "/ˈmɪrə/", translation: "зеркало" },
              {
                word: "tap / faucet",
                transcr: "/tæp/ /ˈfɔːsɪt/",
                translation: "кран",
              },
              { word: "towel", transcr: "/ˈtaʊəl/", translation: "полотенце" },
              {
                word: "bath mat",
                transcr: "/bɑːθ mæt/",
                translation: "коврик для ванной",
              },
              { word: "soap", transcr: "/səʊp/", translation: "мыло" },
              { word: "shampoo", transcr: "/ʃæmˈpuː/", translation: "шампунь" },
              {
                word: "toothbrush",
                transcr: "/ˈtuːθbrʌʃ/",
                translation: "зубная щётка",
              },
              {
                word: "toothpaste",
                transcr: "/ˈtuːθpeɪst/",
                translation: "зубная паста",
              },
              {
                word: "toilet paper",
                transcr: "/ˈtɔɪlət ˌpeɪpə/",
                translation: "туалетная бумага",
              },
              {
                word: "cabinet",
                transcr: "/ˈkæbɪnət/",
                translation: "шкафчик",
              },
              {
                word: "shower curtain",
                transcr: "/ˈʃaʊə ˌkɜːtn/",
                translation: "шторка для душа",
              },
              {
                word: "hairdryer",
                transcr: "/ˈheəˌdraɪə/",
                translation: "фен",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-4">
                <p className="font-bold text-sky-900">{item.word}</p>
                <p className="text-xs text-sky-600">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* Продолжение в следующем файле... */

/* ===== СТРАНИЦА 4: Кухня ===== */
function Step4() {
  return (
    <>
      <UiSection title="Kitchen — Кухня">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Мебель, техника и посуда на кухне.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Kitchen Furniture & Appliances — Мебель и техника
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "table",
                transcr: "/ˈteɪbl/",
                translation: "стол",
                example: "eat at the table",
              },
              {
                word: "chair",
                transcr: "/tʃeə/",
                translation: "стул",
                example: "sit on a chair",
              },
              {
                word: "cupboard",
                transcr: "/ˈkʌbəd/",
                translation: "шкаф для посуды",
                example: "store dishes",
              },
              {
                word: "counter / worktop",
                transcr: "/ˈkaʊntə/",
                translation: "столешница",
                example: "chop on the counter",
              },
              {
                word: "drawer",
                transcr: "/drɔː/",
                translation: "ящик",
                example: "open the drawer",
              },
              {
                word: "sink",
                transcr: "/sɪŋk/",
                translation: "мойка",
                example: "wash dishes in the sink",
              },
              {
                word: "fridge / refrigerator",
                transcr: "/frɪdʒ/",
                translation: "холодильник",
                example: "keep food in the fridge",
              },
              {
                word: "freezer",
                transcr: "/ˈfriːzə/",
                translation: "морозильник",
                example: "freeze food",
              },
              {
                word: "oven",
                transcr: "/ˈʌvn/",
                translation: "духовка",
                example: "bake in the oven",
              },
              {
                word: "stove / cooker",
                transcr: "/stəʊv/ /ˈkʊkə/",
                translation: "плита",
                example: "cook on the stove",
              },
              {
                word: "microwave",
                transcr: "/ˈmaɪkrəweɪv/",
                translation: "микроволновка",
                example: "heat in the microwave",
              },
              {
                word: "dishwasher",
                transcr: "/ˈdɪʃˌwɒʃə/",
                translation: "посудомоечная машина",
                example: "load the dishwasher",
              },
              {
                word: "kettle",
                transcr: "/ˈketl/",
                translation: "чайник",
                example: "boil water in the kettle",
              },
              {
                word: "toaster",
                transcr: "/ˈtəʊstə/",
                translation: "тостер",
                example: "make toast",
              },
              {
                word: "blender",
                transcr: "/ˈblendə/",
                translation: "блендер",
                example: "blend ingredients",
              },
              {
                word: "coffee maker",
                transcr: "/ˈkɒfi ˌmeɪkə/",
                translation: "кофеварка",
                example: "brew coffee",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
              >
                <p className="font-bold text-green-900 text-lg">{item.word}</p>
                <p className="text-xs text-green-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800 mb-1">{item.translation}</p>
                <p className="text-xs text-green-700 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Kitchenware — Посуда и кухонная утварь
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { word: "plate", transcr: "/pleɪt/", translation: "тарелка" },
              { word: "bowl", transcr: "/bəʊl/", translation: "миска" },
              { word: "cup", transcr: "/kʌp/", translation: "чашка" },
              { word: "mug", transcr: "/mʌɡ/", translation: "кружка" },
              { word: "glass", transcr: "/ɡlɑːs/", translation: "стакан" },
              { word: "fork", transcr: "/fɔːk/", translation: "вилка" },
              { word: "knife", transcr: "/naɪf/", translation: "нож" },
              { word: "spoon", transcr: "/spuːn/", translation: "ложка" },
              { word: "pot", transcr: "/pɒt/", translation: "кастрюля" },
              {
                word: "pan / frying pan",
                transcr: "/pæn/",
                translation: "сковорода",
              },
              {
                word: "cutting board",
                transcr: "/ˈkʌtɪŋ bɔːd/",
                translation: "разделочная доска",
              },
              {
                word: "bin / trash can",
                transcr: "/bɪn/",
                translation: "мусорное ведро",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-3">
                <p className="font-bold text-blue-900">{item.word}</p>
                <p className="text-xs text-blue-600">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Бытовая техника и предметы ===== */
function Step5() {
  return (
    <>
      <UiSection title="Household Items & Appliances">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Бытовая техника и предметы домашнего обихода.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Household Appliances — Бытовая техника
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                word: "washing machine",
                transcr: "/ˈwɒʃɪŋ məˌʃiːn/",
                translation: "стиральная машина",
              },
              {
                word: "dryer",
                transcr: "/ˈdraɪə/",
                translation: "сушильная машина",
              },
              { word: "iron", transcr: "/ˈaɪən/", translation: "утюг" },
              {
                word: "ironing board",
                transcr: "/ˈaɪənɪŋ bɔːd/",
                translation: "гладильная доска",
              },
              {
                word: "vacuum cleaner",
                transcr: "/ˈvækjuːm ˌkliːnə/",
                translation: "пылесос",
              },
              {
                word: "broom",
                transcr: "/bruːm/",
                translation: "метла, веник",
              },
              { word: "mop", transcr: "/mɒp/", translation: "швабра" },
              { word: "bucket", transcr: "/ˈbʌkɪt/", translation: "ведро" },
              {
                word: "duster",
                transcr: "/ˈdʌstə/",
                translation: "тряпка для пыли",
              },
              {
                word: "doorbell",
                transcr: "/ˈdɔːbel/",
                translation: "дверной звонок",
              },
              { word: "key", transcr: "/kiː/", translation: "ключ" },
              { word: "lock", transcr: "/lɒk/", translation: "замок" },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="font-bold text-indigo-900">{item.word}</p>
                <p className="text-xs text-indigo-600">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            Other Household Items — Другие предметы
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { word: "door", transcr: "/dɔː/", translation: "дверь" },
              { word: "window", transcr: "/ˈwɪndəʊ/", translation: "окно" },
              { word: "wall", transcr: "/wɔːl/", translation: "стена" },
              { word: "ceiling", transcr: "/ˈsiːlɪŋ/", translation: "потолок" },
              { word: "floor", transcr: "/flɔː/", translation: "пол" },
              { word: "stairs", transcr: "/steəz/", translation: "лестница" },
              { word: "roof", transcr: "/ruːf/", translation: "крыша" },
              {
                word: "chimney",
                transcr: "/ˈtʃɪmni/",
                translation: "дымоход, труба",
              },
              { word: "fence", transcr: "/fens/", translation: "забор" },
              {
                word: "gate",
                transcr: "/ɡeɪt/",
                translation: "ворота, калитка",
              },
              {
                word: "switch",
                transcr: "/swɪtʃ/",
                translation: "выключатель",
              },
              {
                word: "socket / outlet",
                transcr: "/ˈsɒkɪt/",
                translation: "розетка",
              },
              {
                word: "radiator",
                transcr: "/ˈreɪdieɪtə/",
                translation: "радиатор, батарея",
              },
              { word: "shelf", transcr: "/ʃelf/", translation: "полка" },
              { word: "basket", transcr: "/ˈbɑːskɪt/", translation: "корзина" },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-3">
                <p className="font-bold text-sky-900">{item.word}</p>
                <p className="text-xs text-sky-600">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Предлоги места ===== */
function Step6() {
  return (
    <>
      <UiSection title="Prepositions of Place in the House">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Предлоги для описания расположения предметов в доме.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Prepositions — Предлоги места
          </h4>
          <div className="space-y-4">
            {[
              {
                prep: "in",
                meaning: "в, внутри",
                examples: [
                  "The cat is in the house. (Кот в доме.)",
                  "The books are in the cupboard. (Книги в шкафу.)",
                ],
              },
              {
                prep: "on",
                meaning: "на (на поверхности)",
                examples: [
                  "The vase is on the table. (Ваза на столе.)",
                  "The pictures are on the wall. (Картины на стене.)",
                ],
              },
              {
                prep: "under",
                meaning: "под",
                examples: [
                  "The cat is under the bed. (Кот под кроватью.)",
                  "The rug is under the table. (Ковёр под столом.)",
                ],
              },
              {
                prep: "above / over",
                meaning: "над",
                examples: [
                  "The lamp is above the table. (Лампа над столом.)",
                  "There's a shelf over the sofa. (Над диваном полка.)",
                ],
              },
              {
                prep: "next to / beside",
                meaning: "рядом с, около",
                examples: [
                  "The armchair is next to the sofa. (Кресло рядом с диваном.)",
                  "The nightstand is beside the bed. (Тумбочка около кровати.)",
                ],
              },
              {
                prep: "between",
                meaning: "между",
                examples: [
                  "The table is between two chairs. (Стол между двух стульев.)",
                  "The house is between the park and the shop. (Дом между парком и магазином.)",
                ],
              },
              {
                prep: "behind",
                meaning: "за, позади",
                examples: [
                  "The garden is behind the house. (Сад за домом.)",
                  "The bin is behind the door. (Мусорка за дверью.)",
                ],
              },
              {
                prep: "in front of",
                meaning: "перед",
                examples: [
                  "The car is in front of the house. (Машина перед домом.)",
                  "There's a tree in front of the window. (Перед окном дерево.)",
                ],
              },
              {
                prep: "opposite",
                meaning: "напротив",
                examples: [
                  "The sofa is opposite the TV. (Диван напротив телевизора.)",
                  "My house is opposite the park. (Мой дом напротив парка.)",
                ],
              },
              {
                prep: "at",
                meaning: "у, около (точка)",
                examples: [
                  "She's at home. (Она дома.)",
                  "Meet me at the door. (Встретимся у двери.)",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-5">
                <h5 className="text-xl font-bold text-green-900 mb-2">
                  {item.prep} — {item.meaning}
                </h5>
                <div className="space-y-1">
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
            💡 Как описать расположение комнат
          </h4>
          <div className="space-y-2">
            <p className="text-sm text-zinc-800">
              <strong>Upstairs</strong> /ˌʌpˈsteəz/ — наверху, на верхнем этаже
            </p>
            <p className="text-sm text-green-700">
              The bedrooms are upstairs. (Спальни наверху.)
            </p>
            <p className="text-sm text-zinc-800 mt-3">
              <strong>Downstairs</strong> /ˌdaʊnˈsteəz/ — внизу, на нижнем этаже
            </p>
            <p className="text-sm text-green-700">
              The kitchen is downstairs. (Кухня внизу.)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Полезные фразы ===== */
function Step7() {
  return (
    <>
      <UiSection title="Useful Phrases About Home">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Полезные фразы для описания дома и выполнения домашних дел.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Describing Your Home — Описание дома
          </h4>
          <div className="space-y-3">
            {[
              "I live in a flat / an apartment. — Я живу в квартире.",
              "I live in a house. — Я живу в доме.",
              "My flat is on the third floor. — Моя квартира на третьем этаже.",
              "I have a two-bedroom flat. — У меня двухкомнатная квартира.",
              "My house has three bedrooms. — В моём доме три спальни.",
              "There is a large living room. — Есть большая гостиная.",
              "The kitchen is quite spacious. — Кухня довольно просторная.",
              "I have a small balcony. — У меня маленький балкон.",
              "My bedroom faces the park. — Моя спальня выходит на парк.",
              "The bathroom is modern. — Ванная комната современная.",
            ].map((phrase, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{phrase}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            Household Chores — Домашние дела
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { phrase: "do the cleaning", translation: "убираться" },
              {
                phrase: "tidy up",
                translation: "прибираться, наводить порядок",
              },
              { phrase: "vacuum the floor", translation: "пылесосить пол" },
              { phrase: "sweep the floor", translation: "подметать пол" },
              { phrase: "mop the floor", translation: "мыть пол (шваброй)" },
              { phrase: "dust the furniture", translation: "вытирать пыль" },
              { phrase: "wash the dishes", translation: "мыть посуду" },
              { phrase: "do the laundry", translation: "стирать" },
              { phrase: "iron clothes", translation: "гладить одежду" },
              { phrase: "make the bed", translation: "заправлять кровать" },
              { phrase: "take out the rubbish", translation: "выносить мусор" },
              { phrase: "water the plants", translation: "поливать растения" },
              { phrase: "clean the windows", translation: "мыть окна" },
              {
                phrase: "change the sheets",
                translation: "менять постельное бельё",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-3">
                <p className="font-semibold text-sky-900">{item.phrase}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Common Expressions — Общие выражения
          </h4>
          <div className="space-y-3">
            {[
              "Make yourself at home. — Чувствуйте себя как дома.",
              "Welcome home! — Добро пожаловать домой!",
              "I'm home! — Я дома!",
              "Home sweet home. — Дом, милый дом.",
              "There's no place like home. — Нет места лучше дома.",
              "Let me show you around. — Позвольте показать вам всё.",
              "This is the living room. — Это гостиная.",
              "Feel free to use... — Не стесняйтесь использовать...",
            ].map((expr, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{expr}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 8: Текст для чтения (часть 1) ===== */
function Step8() {
  return (
    <>
      <UiSection title="Reading: My Dream Home">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed">
            Прочитайте текст о доме мечты. На следующей странице будут задания
            True/False.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          My Dream Home
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            Everyone has an idea of their perfect home. Some people dream of
            living in a modern apartment in the city centre, while others prefer
            a quiet cottage in the countryside. For me, my dream home would be a
            comfortable house in a peaceful neighbourhood, not too far from the
            city but surrounded by nature.
          </p>

          <div className="bg-indigo-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-indigo-900 mb-3">
              The Outside
            </h4>
            <p className="mb-3">
              My ideal house would be a two-storey building with a beautiful
              garden. The front of the house would have large windows that let
              in plenty of natural light. There would be a garage for two cars
              on the left side of the house. In front of the house, I would have
              a small lawn with some colourful flowers and a path leading to the
              front door.
            </p>
            <p>
              Behind the house, there would be a spacious garden with fruit
              trees and a vegetable patch where I could grow my own food. I'd
              also like to have a wooden terrace with comfortable outdoor
              furniture where I could relax and have barbecues with family and
              friends during warm summer evenings.
            </p>
          </div>

          <div className="bg-sky-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-sky-900 mb-3">
              The Ground Floor
            </h4>
            <p className="mb-3">
              When you enter through the front door, you would find yourself in
              a bright hallway with wooden floors. On the right, there would be
              a large living room with comfortable sofas, an armchair, and a
              modern fireplace. The living room would have big windows facing
              the garden, and there would be a bookcase full of books along one
              wall.
            </p>
            <p className="mb-3">
              Opposite the living room, on the left side of the hallway, there
              would be a spacious kitchen connected to a dining room. The
              kitchen would have modern appliances including a large fridge, an
              oven, a dishwasher, and a microwave. In the centre, there would be
              an island with bar stools where you could have breakfast or a
              quick snack. The dining room would have a big wooden table with
              eight chairs, perfect for family dinners.
            </p>
            <p>
              At the back of the house, there would be a small study with a desk
              and comfortable chair where I could work from home or read in
              peace. Next to the study, there would be a guest bathroom.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-green-900 mb-3">
              The First Floor
            </h4>
            <p className="mb-3">
              Upstairs, there would be three bedrooms and two bathrooms. The
              master bedroom would be the largest room with its own en-suite
              bathroom. It would have a comfortable king-size bed, a large
              wardrobe, and a dressing table with a mirror. The windows would
              face the garden, giving a beautiful view of the trees.
            </p>
            <p className="mb-3">
              The other two bedrooms would be slightly smaller but still cosy.
              One could be a guest room, and the other could be used as a
              children's room or a home office. Each bedroom would have built-in
              wardrobes and enough space for a bed and a desk.
            </p>
            <p>
              The family bathroom upstairs would have both a bath and a separate
              shower, perfect for busy mornings. All the bathrooms in the house
              would be modern with white tiles and good lighting.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-purple-900 mb-3">
              Special Features
            </h4>
            <p className="mb-3">
              What makes a house truly special are the small details. I would
              want my dream home to be eco-friendly, with solar panels on the
              roof to generate electricity. The house would have good insulation
              to keep it warm in winter and cool in summer, reducing energy
              costs.
            </p>
            <p className="mb-3">
              In the basement, there would be a laundry room with a washing
              machine and dryer, as well as storage space for seasonal items and
              sports equipment. I'd also like to have underfloor heating
              throughout the house, making cold winter mornings much more
              comfortable.
            </p>
            <p>
              Finally, I would decorate the house in neutral colours like beige,
              grey, and white, with wooden furniture and natural materials. I
              believe these colours create a calm and peaceful atmosphere,
              making the house a true home where you can relax and feel
              comfortable after a long day.
            </p>
          </div>

          <p className="mt-6">
            Of course, a dream home is about more than just rooms and furniture.
            It's about creating a warm and welcoming space where you feel safe
            and happy, a place where you can make wonderful memories with the
            people you love. While my dream home might remain just a dream for
            now, thinking about it reminds me of what's truly important in life:
            comfort, family, and peace.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-lg p-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Словарь к тексту
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ["neighbourhood", "/ˈneɪbəhʊd/", "район, окрестность"],
            ["storey", "/ˈstɔːri/", "этаж"],
            ["lawn", "/lɔːn/", "газон"],
            ["path", "/pɑːθ/", "дорожка, тропинка"],
            ["vegetable patch", "—", "грядка, огород"],
            ["terrace", "/ˈterəs/", "терраса"],
            ["barbecue", "/ˈbɑːbɪkjuː/", "барбекю, шашлык"],
            ["fireplace", "/ˈfaɪəpleɪs/", "камин"],
            ["island", "/ˈaɪlənd/", "островок (на кухне)"],
            ["bar stool", "/bɑː stuːl/", "барный стул"],
            ["en-suite", "/ˌɒn ˈswiːt/", "смежный (ванная в спальне)"],
            ["dressing table", "—", "туалетный столик"],
            ["cosy", "/ˈkəʊzi/", "уютный"],
            ["built-in", "/ˈbɪlt ɪn/", "встроенный"],
            ["solar panel", "—", "солнечная панель"],
            ["insulation", "/ˌɪnsjuˈleɪʃn/", "изоляция, утепление"],
            ["underfloor heating", "—", "тёплый пол"],
            ["neutral", "/ˈnjuːtrəl/", "нейтральный"],
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
      <UiSection title="Reading Comprehension: True or False">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📝</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Reading Comprehension
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
          question="1. The author wants to live in a modern apartment in the city centre."
          correctAnswer="False"
          explanation="В тексте: 'my dream home would be a comfortable house in a peaceful neighbourhood' — дом, а не квартира в центре."
        />

        <TrueFalseQuestion
          question="2. The dream house would be a two-storey building."
          correctAnswer="True"
          explanation="В тексте чётко сказано: 'My ideal house would be a two-storey building'."
        />

        <TrueFalseQuestion
          question="3. There would be a garage for one car."
          correctAnswer="False"
          explanation="В тексте: 'There would be a garage for two cars' — для двух машин, а не для одной."
        />

        <TrueFalseQuestion
          question="4. The author wants to have a vegetable patch in the garden."
          correctAnswer="True"
          explanation="В тексте: 'a spacious garden with fruit trees and a vegetable patch where I could grow my own food'."
        />

        <TrueFalseQuestion
          question="5. The living room would be on the left side of the hallway."
          correctAnswer="False"
          explanation="В тексте: 'On the right, there would be a large living room' — справа, а не слева."
        />

        <TrueFalseQuestion
          question="6. The kitchen would be connected to a dining room."
          correctAnswer="True"
          explanation="В тексте: 'a spacious kitchen connected to a dining room'."
        />

        <TrueFalseQuestion
          question="7. There would be four bedrooms upstairs."
          correctAnswer="False"
          explanation="В тексте: 'Upstairs, there would be three bedrooms' — три спальни, а не четыре."
        />

        <TrueFalseQuestion
          question="8. The master bedroom would have its own bathroom."
          correctAnswer="True"
          explanation="В тексте: 'The master bedroom would be the largest room with its own en-suite bathroom'."
        />

        <TrueFalseQuestion
          question="9. The author wants solar panels on the roof."
          correctAnswer="True"
          explanation="В тексте: 'I would want my dream home to be eco-friendly, with solar panels on the roof'."
        />

        <TrueFalseQuestion
          question="10. The house would be decorated in bright colours."
          correctAnswer="False"
          explanation="В тексте: 'I would decorate the house in neutral colours like beige, grey, and white' — нейтральные, а не яркие цвета."
        />

        <TrueFalseQuestion
          question="11. There would be a laundry room in the basement."
          correctAnswer="True"
          explanation="В тексте: 'In the basement, there would be a laundry room with a washing machine and dryer'."
        />

        <TrueFalseQuestion
          question="12. The dining room table would have six chairs."
          correctAnswer="False"
          explanation="В тексте: 'a big wooden table with eight chairs' — восемь стульев, а не шесть."
        />
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговые упражнения ===== */
function Step10() {
  const exercise: FillItem[] = [
    {
      left: "1. I need to",
      right: "the bed every morning. (заправлять)",
      answers: ["make"],
      explanation: "make the bed = заправлять кровать",
    },
    {
      left: "2. The books are",
      right: "the shelf. (на)",
      answers: ["on"],
      explanation: "on the shelf = на полке",
    },
    {
      left: "3. Please",
      right: "out the rubbish. (выносить)",
      answers: ["take"],
      explanation: "take out the rubbish = выносить мусор",
    },
    {
      left: "4. The bathroom is",
      right: ". (наверху)",
      answers: ["upstairs"],
      explanation: "upstairs = наверху, на верхнем этаже",
    },
    {
      left: "5. I keep my clothes in the",
      right: ". (шкаф)",
      answers: ["wardrobe", "closet"],
      explanation: "wardrobe/closet = шкаф для одежды",
    },
    {
      left: "6. The cat is hiding",
      right: "the sofa. (под)",
      answers: ["under"],
      explanation: "under = под",
    },
    {
      left: "7. We eat dinner in the",
      right: "room. (столовая)",
      answers: ["dining"],
      explanation: "dining room = столовая",
    },
    {
      left: "8. I need to",
      right: "the floor with a vacuum cleaner. (пылесосить)",
      answers: ["vacuum"],
      explanation: "vacuum the floor = пылесосить пол",
    },
    {
      left: "9. The kitchen has modern",
      right: ". (бытовая техника)",
      answers: ["appliances"],
      explanation: "appliances = бытовая техника",
    },
    {
      left: "10. My bedroom",
      right: "the garden. (выходит на)",
      answers: ["faces"],
      explanation: "faces = выходит на, смотрит на",
    },
  ];

  return (
    <>
      <UiSection title="Итоговые упражнения">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Проверьте, как вы запомнили слова и фразы по теме "House and Home".
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
          Сводная таблица: Основные категории слов
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
                  Rooms
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  living room, bedroom, kitchen, bathroom, dining room
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Furniture
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  sofa, armchair, bed, wardrobe, table, chair
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Appliances
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  fridge, oven, washing machine, microwave, dishwasher
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Prepositions
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  in, on, under, next to, between, behind, in front of
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Household Chores
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  tidy up, vacuum, sweep, mop, do the laundry, make the bed
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
                <strong>15+ комнат</strong> и помещений в доме
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>60+ предметов мебели</strong> и бытовой техники
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Предлоги места</strong> для описания расположения
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Фразы</strong> для описания дома и домашних дел
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Чтение</strong> с заданиями True/False как на ОГЭ
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
            Вы успешно изучили большой объём лексики по теме "House and Home"!
            Теперь вы можете описать любую комнату, мебель и домашние дела на
            английском языке. Продолжайте практиковаться, описывая свой дом и
            используя новые слова в речи!
          </p>
        </div>
      </div>
    </>
  );
}
