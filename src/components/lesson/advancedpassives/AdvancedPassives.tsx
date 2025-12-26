"use client";

import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, {
  type FillItem,
} from "@/components/lesson/CheckableExercise";
import { useState } from "react";

type Props = { step: number };

export default function AdvancedPassives({ step }: Props) {
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
    case 16:
      return <Step16 />;
    default:
      return <Step1 />;
  }
}

/* ========== ШАГ 1: Введение в Advanced Passives ========== */
function Step1() {
  const [activeConstruction, setActiveConstruction] = useState<string>("have");

  const constructions = {
    have: {
      title: "have something done",
      color: "emerald",
      meaning: "Сделать что-то (кто-то другой делает для вас)",
      example: "I had my car repaired.",
      ru: "Я отремонтировал машину (кто-то отремонтировал для меня).",
    },
    get: {
      title: "get something done",
      color: "blue",
      meaning: "Сделать что-то (более разговорный вариант)",
      example: "I got my hair cut.",
      ru: "Я подстригся (кто-то подстриг меня).",
    },
    rumoured: {
      title: "be rumoured to",
      color: "purple",
      meaning: "По слухам, говорят что...",
      example: "He is rumoured to be very rich.",
      ru: "По слухам, он очень богат.",
    },
    said: {
      title: "be said to",
      color: "orange",
      meaning: "Говорят, что...",
      example: "She is said to speak five languages.",
      ru: "Говорят, что она говорит на пяти языках.",
    },
  };

  return (
    <>
      <UiSection title="🎯 Advanced Passives — Продвинутые пассивные конструкции">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6 border-2 border-indigo-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🔄</div>
            <h2 className="text-2xl font-bold text-indigo-900">
              Advanced Passive Constructions
            </h2>
            <p className="text-indigo-700 mt-2">
              Продвинутые пассивные структуры английского языка
            </p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="font-bold text-indigo-900 text-lg mb-4">
              🌟 Интерактивное меню конструкций:
            </h3>

            {/* Кнопки выбора конструкции */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {Object.entries(constructions).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveConstruction(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    activeConstruction === key
                      ? `border-${data.color}-500 bg-${data.color}-50 shadow-lg scale-105`
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <p className={`font-bold text-sm ${
                    activeConstruction === key ? `text-${data.color}-900` : "text-gray-700"
                  }`}>
                    {data.title}
                  </p>
                </button>
              ))}
            </div>

            {/* Отображение выбранной конструкции */}
            <div className={`bg-${constructions[activeConstruction as keyof typeof constructions].color}-50 rounded-lg p-6 border-2 border-${constructions[activeConstruction as keyof typeof constructions].color}-300`}>
              <h4 className={`text-xl font-bold text-${constructions[activeConstruction as keyof typeof constructions].color}-900 mb-3`}>
                {constructions[activeConstruction as keyof typeof constructions].title}
              </h4>
              <p className={`text-${constructions[activeConstruction as keyof typeof constructions].color}-800 mb-4`}>
                <strong>Значение:</strong> {constructions[activeConstruction as keyof typeof constructions].meaning}
              </p>
              <div className="bg-white rounded p-4 border-l-4 border-emerald-500">
                <p className="font-semibold text-gray-800 mb-1">
                  {constructions[activeConstruction as keyof typeof constructions].example}
                </p>
                <p className="text-sm text-gray-600">
                  {constructions[activeConstruction as keyof typeof constructions].ru}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📊 4 основные конструкции">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "🔧",
              title: "Causative: have/get done",
              desc: "Кто-то делает что-то для вас",
              examples: ["I had my car fixed", "She got her nails done"],
              color: "emerald"
            },
            {
              icon: "💬",
              title: "Reporting: be said/believed",
              desc: "Сообщение информации",
              examples: ["He is said to be rich", "She is believed to know"],
              color: "blue"
            },
            {
              icon: "🗣️",
              title: "Rumours: be rumoured/thought",
              desc: "Слухи и мнения",
              examples: ["They are rumoured to date", "It's thought to be true"],
              color: "purple"
            },
            {
              icon: "📰",
              title: "Reports: be reported/known",
              desc: "Официальные сообщения",
              examples: ["He is known to be honest", "It's reported to work"],
              color: "orange"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg p-6 border-2 border-${item.color}-200 hover:border-${item.color}-400 transition-all hover:shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{item.icon}</span>
                <h3 className={`font-bold text-${item.color}-900 text-lg`}>{item.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{item.desc}</p>
              <div className="space-y-2">
                {item.examples.map((ex, i) => (
                  <div key={i} className={`bg-${item.color}-50 rounded p-3 border-l-4 border-${item.color}-400`}>
                    <p className="text-sm font-medium text-gray-800">{ex}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: have something done — Теория ========== */
function Step2() {
  const [selectedService, setSelectedService] = useState<string>("haircut");

  const services = {
    haircut: {
      service: "Hair salon",
      action: "have your hair cut",
      result: "New hairstyle ✂️",
      price: "$50"
    },
    car: {
      service: "Car repair",
      action: "have your car repaired",
      result: "Fixed car 🚗",
      price: "$300"
    },
    house: {
      service: "House cleaning",
      action: "have your house cleaned",
      result: "Clean house 🏠",
      price: "$100"
    },
    teeth: {
      service: "Dentist",
      action: "have your teeth checked",
      result: "Healthy teeth 🦷",
      price: "$150"
    }
  };

  return (
    <>
      <UiSection title="🔧 have something done — Causative Construction">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-8 mb-6 border-2 border-emerald-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🛠️</div>
            <h2 className="text-2xl font-bold text-emerald-900">
              have + object + past participle
            </h2>
            <p className="text-emerald-700 mt-2">
              Сделать что-то (нанять кого-то для выполнения действия)
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-emerald-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-emerald-100 rounded-lg p-4 border-2 border-emerald-400 text-center">
              <p className="text-xl font-mono font-bold text-emerald-900">
                have + объект + V₃
              </p>
              <p className="text-sm text-gray-600 mt-2">
                I had my car <span className="text-emerald-700 font-bold">repaired</span>.
              </p>
            </div>
          </div>

          {/* Интерактивный симулятор услуг */}
          <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-300">
            <h3 className="font-bold text-emerald-900 mb-4">🎮 Интерактивный симулятор:</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {Object.entries(services).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setSelectedService(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedService === key
                      ? "border-emerald-500 bg-emerald-100 shadow-lg"
                      : "border-gray-300 bg-white hover:bg-gray-50"
                  }`}
                >
                  <p className="font-semibold text-sm text-gray-800">{data.service}</p>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-emerald-400">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Услуга</p>
                  <p className="font-bold text-emerald-900">{services[selectedService as keyof typeof services].service}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Конструкция</p>
                  <p className="font-bold text-emerald-900 font-mono text-sm">
                    {services[selectedService as keyof typeof services].action}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Результат</p>
                  <p className="font-bold text-emerald-900">{services[selectedService as keyof typeof services].result}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-200">
                <p className="text-center text-gray-700">
                  💰 Стоимость: <span className="font-bold text-emerald-700">{services[selectedService as keyof typeof services].price}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры have something done">
        <div className="space-y-4">
          {[
            {
              example: "I had my car repaired last week.",
              ru: "Я отремонтировал машину на прошлой неделе.",
              who: "👨‍🔧 Механик сделал это",
              when: "Past Simple"
            },
            {
              example: "She's having her house painted now.",
              ru: "Ей сейчас красят дом.",
              who: "👷 Рабочие делают это",
              when: "Present Continuous"
            },
            {
              example: "We need to have the computer fixed.",
              ru: "Нам нужно отремонтировать компьютер.",
              who: "💻 Специалист сделает это",
              when: "Infinitive"
            },
            {
              example: "He's going to have his teeth checked.",
              ru: "Он собирается проверить зубы.",
              who: "🦷 Дантист сделает это",
              when: "Future"
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-emerald-500">
              <div className="bg-emerald-50 rounded p-4 mb-3">
                <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                <p className="text-sm text-gray-600">{item.ru}</p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-700 italic">{item.who}</span>
                <span className="bg-emerald-100 px-2 py-1 rounded font-semibold text-emerald-800">
                  {item.when}
                </span>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Услуги и ремонт">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "repair", transcr: "/rɪˈpeə(r)/", translation: "ремонтировать" },
            { word: "fix", transcr: "/fɪks/", translation: "чинить" },
            { word: "clean", transcr: "/kliːn/", translation: "чистить" },
            { word: "paint", transcr: "/peɪnt/", translation: "красить" },
            { word: "service", transcr: "/ˈsɜːvɪs/", translation: "обслуживать" },
            { word: "check", transcr: "/tʃek/", translation: "проверять" },
            { word: "install", transcr: "/ɪnˈstɔːl/", translation: "устанавливать" },
            { word: "replace", transcr: "/rɪˈpleɪs/", translation: "заменять" },
            { word: "deliver", transcr: "/dɪˈlɪvə(r)/", translation: "доставлять" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-emerald-400">
              <p className="font-bold text-emerald-900 text-lg">{item.word}</p>
              <p className="text-xs text-emerald-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 3: have something done — Практика ========== */
function Step3() {
  const items: FillItem[] = [
    {
      left: "1. I need to",
      right: "my car repaired. It's broken. (have)",
      answers: ["have"],
      explanation: "have my car repaired — нанять кого-то для ремонта",
      wide: true,
    },
    {
      left: "2. She",
      right: "her hair cut last week. (had)",
      answers: ["had"],
      explanation: "had her hair cut — кто-то подстриг её",
      wide: true,
    },
    {
      left: "3. We're going to",
      right: "the house painted next month. (have)",
      answers: ["have"],
      explanation: "have the house painted — нанять маляров",
      wide: true,
    },
    {
      left: "4. He",
      right: "his teeth checked every six months. (has)",
      answers: ["has"],
      explanation: "has his teeth checked — регулярные визиты к дантисту",
      wide: true,
    },
    {
      left: "5. They",
      right: "their windows cleaned yesterday. (had)",
      answers: ["had"],
      explanation: "had their windows cleaned — наняли уборщика",
      wide: true,
    },
    {
      left: "6. I'm",
      right: "my computer fixed right now. (having)",
      answers: ["having"],
      explanation: "having my computer fixed — сейчас в процессе ремонта",
      wide: true,
    },
    {
      left: "7. She wants to",
      right: "her dress altered. (have)",
      answers: ["have"],
      explanation: "have her dress altered — нанять портного",
      wide: true,
    },
    {
      left: "8. We",
      right: "our garden landscaped last year. (had)",
      answers: ["had"],
      explanation: "had our garden landscaped — наняли ландшафтного дизайнера",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: have something done"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 4: get something done — Теория ========== */
function Step4() {
  const [urgencyLevel, setUrgencyLevel] = useState(50);

  const getUrgencyText = () => {
    if (urgencyLevel < 30) return { text: "Спокойно 😊", color: "green", construction: "have" };
    if (urgencyLevel < 70) return { text: "Обычно 🙂", color: "blue", construction: "have/get" };
    return { text: "Срочно! 😰", color: "red", construction: "get" };
  };

  return (
    <>
      <UiSection title="⚡ get something done — Более разговорный вариант">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 mb-6 border-2 border-blue-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">💨</div>
            <h2 className="text-2xl font-bold text-blue-900">
              get + object + past participle
            </h2>
            <p className="text-blue-700 mt-2">
              Более разговорная версия have something done
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-blue-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-400">
              <p className="text-xl font-mono font-bold text-blue-900 text-center mb-3">
                get + объект + V₃
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-emerald-50 p-3 rounded">
                  <p className="text-sm font-semibold text-emerald-900 mb-1">Formal (have):</p>
                  <p className="text-xs text-gray-700">I had my car repaired.</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm font-semibold text-blue-900 mb-1">Informal (get):</p>
                  <p className="text-xs text-gray-700">I got my car repaired.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ползунок срочности */}
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="font-bold text-blue-900 mb-4">🎚️ Интерактивный ползунок срочности:</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Уровень срочности: {urgencyLevel}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={urgencyLevel}
                onChange={(e) => setUrgencyLevel(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${
                    urgencyLevel < 30 ? '#10b981' : urgencyLevel < 70 ? '#3b82f6' : '#ef4444'
                  } 0%, ${
                    urgencyLevel < 30 ? '#10b981' : urgencyLevel < 70 ? '#3b82f6' : '#ef4444'
                  } ${urgencyLevel}%, #e5e7eb ${urgencyLevel}%, #e5e7eb 100%)`
                }}
              />
            </div>

            <div className={`bg-${getUrgencyText().color}-100 rounded-lg p-6 border-2 border-${getUrgencyText().color}-300`}>
              <div className="text-center mb-4">
                <p className={`text-2xl font-bold text-${getUrgencyText().color}-900`}>
                  {getUrgencyText().text}
                </p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="text-sm text-gray-700 mb-2">Рекомендуемая конструкция:</p>
                <p className={`text-lg font-bold text-${getUrgencyText().color}-800 font-mono`}>
                  {getUrgencyText().construction}
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  {urgencyLevel < 30 && "Используйте 'have' для формального стиля"}
                  {urgencyLevel >= 30 && urgencyLevel < 70 && "Оба варианта подходят"}
                  {urgencyLevel >= 70 && "Используйте 'get' для выражения срочности"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔄 Сравнение: have VS get">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 rounded-lg p-6 border-2 border-emerald-300">
            <h3 className="font-bold text-emerald-900 text-lg mb-3">
              ✨ have something done
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span className="text-sm text-gray-700">Более формально</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span className="text-sm text-gray-700">Нейтральный тон</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span className="text-sm text-gray-700">Письменный язык</span>
              </li>
            </ul>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-800">I had my car serviced.</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="font-bold text-blue-900 text-lg mb-3">
              💨 get something done
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-sm text-gray-700">Более разговорно</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-sm text-gray-700">Срочность, действие</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-sm text-gray-700">Устная речь</span>
              </li>
            </ul>
            <div className="bg-white rounded p-3">
              <p className="text-sm font-semibold text-gray-800">I got my car serviced.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Действия и результаты">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "urgent", transcr: "/ˈɜːdʒənt/", translation: "срочный" },
            { word: "immediately", transcr: "/ɪˈmiːdiətli/", translation: "немедленно" },
            { word: "ASAP", transcr: "/ˌeɪ es eɪ ˈpiː/", translation: "как можно скорее" },
            { word: "rush", transcr: "/rʌʃ/", translation: "спешить" },
            { word: "priority", transcr: "/praɪˈɒrəti/", translation: "приоритет" },
            { word: "quickly", transcr: "/ˈkwɪkli/", translation: "быстро" },
            { word: "hurry", transcr: "/ˈhʌri/", translation: "торопиться" },
            { word: "prompt", transcr: "/prɒmpt/", translation: "быстрый, оперативный" },
            { word: "emergency", transcr: "/ɪˈmɜːdʒənsi/", translation: "экстренный случай" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
              <p className="font-bold text-blue-900 text-lg">{item.word}</p>
              <p className="text-xs text-blue-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: get something done — Практика ========== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "1. I need to",
      right: "my phone fixed urgently! (get)",
      answers: ["get"],
      explanation: "get my phone fixed — срочный ремонт (разговорный стиль)",
      wide: true,
    },
    {
      left: "2. She finally",
      right: "her hair dyed yesterday. (got)",
      answers: ["got"],
      explanation: "got her hair dyed — покрасила волосы (разговорно)",
      wide: true,
    },
    {
      left: "3. We should",
      right: "this work done today. (get)",
      answers: ["get"],
      explanation: "get this work done — закончить работу (акцент на действии)",
      wide: true,
    },
    {
      left: "4. He",
      right: "his car washed every week. (gets)",
      answers: ["gets"],
      explanation: "gets his car washed — регулярно моет машину",
      wide: true,
    },
    {
      left: "5. I'm trying to",
      right: "everything done before Friday. (get)",
      answers: ["get"],
      explanation: "get everything done — завершить всё (разговорно)",
      wide: true,
    },
    {
      left: "6. They",
      right: "their kitchen renovated last month. (got)",
      answers: ["got"],
      explanation: "got their kitchen renovated — отремонтировали кухню",
      wide: true,
    },
    {
      left: "7. You need to",
      right: "your eyes tested. (get)",
      answers: ["get"],
      explanation: "get your eyes tested — проверить зрение",
      wide: true,
    },
    {
      left: "8. She's",
      right: "her nails done right now. (getting)",
      answers: ["getting"],
      explanation: "getting her nails done — делает маникюр сейчас",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: get something done"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 6: Смешанная практика have/get ========== */
function Step6() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "my car repaired last week. It cost $500. (had)",
      answers: ["had"],
      explanation: "had my car repaired — формальный контекст",
      wide: true,
    },
    {
      left: "2. Quick! We need to",
      right: "this done now! (get)",
      answers: ["get"],
      explanation: "get this done — срочность (разговорный стиль)",
      wide: true,
    },
    {
      left: "3. She usually",
      right: "her nails done at the salon. (has/gets)",
      answers: ["has", "gets"],
      explanation: "has/gets her nails done — оба варианта возможны",
      wide: true,
    },
    {
      left: "4. We",
      right: "the house cleaned before the party. (got/had)",
      answers: ["got", "had"],
      explanation: "got/had the house cleaned — оба варианта подходят",
      wide: true,
    },
    {
      left: "5. He's",
      right: "his bike fixed at the moment. (having/getting)",
      answers: ["having", "getting"],
      explanation: "having/getting his bike fixed — оба варианта подходят",
      wide: true,
    },
    {
      left: "6. I need to",
      right: "my passport renewed. (have/get)",
      answers: ["have", "get"],
      explanation: "have/get my passport renewed — оба варианта работают",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Смешанная практика: have/get something done"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 7: be rumoured to — Теория ========== */
function Step7() {
  const [confidence, setConfidence] = useState(30);

  const getConfidenceLevel = () => {
    if (confidence < 30) return { text: "Слухи 👂", color: "purple", construction: "be rumoured to" };
    if (confidence < 70) return { text: "Сообщения 📰", color: "blue", construction: "be said to / be reported to" };
    return { text: "Факты ✅", color: "green", construction: "be known to / be proven to" };
  };

  return (
    <>
      <UiSection title="👂 be rumoured to — По слухам">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-6 border-2 border-purple-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🗣️</div>
            <h2 className="text-2xl font-bold text-purple-900">
              be rumoured to + infinitive
            </h2>
            <p className="text-purple-700 mt-2">
              Говорят/По слухам (неподтвержденная информация)
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-purple-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-purple-100 rounded-lg p-4 border-2 border-purple-400 text-center">
              <p className="text-xl font-mono font-bold text-purple-900">
                be rumoured to + infinitive
              </p>
              <p className="text-sm text-gray-600 mt-2">
                He <span className="text-purple-700 font-bold">is rumoured to be</span> very rich.
              </p>
            </div>
          </div>

          {/* Ползунок уверенности */}
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
            <h3 className="font-bold text-purple-900 mb-4">📊 Шкала уверенности в информации:</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Уровень уверенности: {confidence}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={confidence}
                onChange={(e) => setConfidence(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${
                    confidence < 30 ? '#a855f7' : confidence < 70 ? '#3b82f6' : '#10b981'
                  } 0%, ${
                    confidence < 30 ? '#a855f7' : confidence < 70 ? '#3b82f6' : '#10b981'
                  } ${confidence}%, #e5e7eb ${confidence}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>Слухи</span>
                <span>Сообщения</span>
                <span>Факты</span>
              </div>
            </div>

            <div className={`bg-${getConfidenceLevel().color}-100 rounded-lg p-6 border-2 border-${getConfidenceLevel().color}-300`}>
              <div className="text-center mb-4">
                <p className={`text-2xl font-bold text-${getConfidenceLevel().color}-900`}>
                  {getConfidenceLevel().text}
                </p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="text-sm text-gray-700 mb-2">Рекомендуемая конструкция:</p>
                <p className={`text-lg font-bold text-${getConfidenceLevel().color}-800 font-mono text-center`}>
                  {getConfidenceLevel().construction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📚 Примеры be rumoured to">
        <div className="space-y-4">
          {[
            {
              example: "He is rumoured to be dating a celebrity.",
              ru: "По слухам, он встречается со знаменитостью.",
              certainty: "30%",
              source: "👥 Слухи"
            },
            {
              example: "The company is rumoured to be planning layoffs.",
              ru: "По слухам, компания планирует сокращения.",
              certainty: "40%",
              source: "💼 Офисные сплетни"
            },
            {
              example: "She is rumoured to have won the lottery.",
              ru: "По слухам, она выиграла в лотерею.",
              certainty: "25%",
              source: "🎰 Неподтвержденные слухи"
            },
            {
              example: "They are rumoured to be getting married.",
              ru: "По слухам, они собираются пожениться.",
              certainty: "50%",
              source: "💑 Слухи от друзей"
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
              <div className="bg-purple-50 rounded p-4 mb-3">
                <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
                <p className="text-sm text-gray-600">{item.ru}</p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-purple-700 italic">{item.source}</span>
                <span className="bg-purple-100 px-2 py-1 rounded font-semibold text-purple-800">
                  Уверенность: {item.certainty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📘 Словарь: Слухи и сплетни">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "rumour", transcr: "/ˈruːmə(r)/", translation: "слух" },
            { word: "gossip", transcr: "/ˈɡɒsɪp/", translation: "сплетня" },
            { word: "allegedly", transcr: "/əˈledʒɪdli/", translation: "предположительно" },
            { word: "supposedly", transcr: "/səˈpəʊzɪdli/", translation: "якобы" },
            { word: "apparently", transcr: "/əˈpærəntli/", translation: "по-видимому" },
            { word: "speculation", transcr: "/ˌspekjuˈleɪʃn/", translation: "предположение" },
            { word: "hearsay", transcr: "/ˈhɪəseɪ/", translation: "слухи, молва" },
            { word: "whisper", transcr: "/ˈwɪspə(r)/", translation: "шёпот, слух" },
            { word: "unconfirmed", transcr: "/ˌʌnkənˈfɜːmd/", translation: "неподтвержденный" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
              <p className="font-bold text-purple-900 text-lg">{item.word}</p>
              <p className="text-xs text-purple-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 8: be rumoured to — Практика ========== */
function Step8() {
  const items: FillItem[] = [
    {
      left: "1. He",
      right: "rumoured to be the richest man in the city. (is)",
      answers: ["is"],
      explanation: "is rumoured to be — по слухам, является",
      wide: true,
    },
    {
      left: "2. The company",
      right: "rumoured to be moving to a new office. (is)",
      answers: ["is"],
      explanation: "is rumoured to be moving — по слухам, переезжает",
      wide: true,
    },
    {
      left: "3. They",
      right: "rumoured to have broken up. (are)",
      answers: ["are"],
      explanation: "are rumoured to have broken up — по слухам, расстались",
      wide: true,
    },
    {
      left: "4. She",
      right: "rumoured to be dating a famous actor. (is)",
      answers: ["is"],
      explanation: "is rumoured to be dating — по слухам, встречается",
      wide: true,
    },
    {
      left: "5. The restaurant",
      right: "rumoured to be closing down. (is)",
      answers: ["is"],
      explanation: "is rumoured to be closing — по слухам, закрывается",
      wide: true,
    },
    {
      left: "6. He",
      right: "rumoured to have left the country. (is)",
      answers: ["is"],
      explanation: "is rumoured to have left — по слухам, уехал",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="✏️ Упражнение: be rumoured to"
        items={items}
      />
    </>
  );
}

/* ========== ШАГ 9: be said to — Теория ========== */
function Step9() {
  const [selectedVerb, setSelectedVerb] = useState("said");

  const reportingVerbs = {
    said: {
      verb: "be said to",
      meaning: "Говорят, что...",
      certainty: "50-70%",
      example: "He is said to be very intelligent.",
      ru: "Говорят, что он очень умный.",
      color: "orange"
    },
    believed: {
      verb: "be believed to",
      meaning: "Полагают, что...",
      certainty: "60-80%",
      example: "She is believed to be in Paris.",
      ru: "Полагают, что она в Париже.",
      color: "blue"
    },
    thought: {
      verb: "be thought to",
      meaning: "Считают, что...",
      certainty: "50-70%",
      example: "They are thought to be planning a trip.",
      ru: "Считают, что они планируют поездку.",
      color: "green"
    },
    expected: {
      verb: "be expected to",
      meaning: "Ожидается, что...",
      certainty: "70-90%",
      example: "It is expected to rain tomorrow.",
      ru: "Ожидается, что завтра будет дождь.",
      color: "indigo"
    }
  };

  return (
    <>
      <UiSection title="📰 be said to — Сообщается/Говорят">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-8 mb-6 border-2 border-orange-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">📢</div>
            <h2 className="text-2xl font-bold text-orange-900">
              Reporting Verbs в пассиве
            </h2>
            <p className="text-orange-700 mt-2">
              Сообщение информации (более надежно, чем слухи)
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="font-bold text-orange-900 text-lg mb-3">📖 Формула:</h3>
            <div className="bg-orange-100 rounded-lg p-4 border-2 border-orange-400 text-center">
              <p className="text-xl font-mono font-bold text-orange-900">
                be + reporting verb + to + infinitive
              </p>
            </div>
          </div>

          {/* Выпадающее меню глаголов */}
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300">
            <h3 className="font-bold text-orange-900 mb-4">📝 Выберите reporting verb:</h3>

            <select
              value={selectedVerb}
              onChange={(e) => setSelectedVerb(e.target.value)}
              className="w-full p-3 rounded-lg border-2 border-orange-300 bg-white text-gray-800 font-medium mb-6"
            >
              {Object.entries(reportingVerbs).map(([key, data]) => (
                <option key={key} value={key}>
                  {data.verb} — {data.meaning}
                </option>
              ))}
            </select>

            <div className={`bg-${reportingVerbs[selectedVerb as keyof typeof reportingVerbs].color}-100 rounded-lg p-6 border-2 border-${reportingVerbs[selectedVerb as keyof typeof reportingVerbs].color}-300`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded p-4">
                  <p className="text-xs text-gray-600 mb-1">Конструкция</p>
                  <p className={`font-bold text-${reportingVerbs[selectedVerb as keyof typeof reportingVerbs].color}-900 font-mono`}>
                    {reportingVerbs[selectedVerb as keyof typeof reportingVerbs].verb}
                  </p>
                </div>
                <div className="bg-white rounded p-4">
                  <p className="text-xs text-gray-600 mb-1">Уверенность</p>
                  <p className={`font-bold text-${reportingVerbs[selectedVerb as keyof typeof reportingVerbs].color}-900`}>
                    {reportingVerbs[selectedVerb as keyof typeof reportingVerbs].certainty}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-semibold text-gray-800 mb-1">
                  {reportingVerbs[selectedVerb as keyof typeof reportingVerbs].example}
                </p>
                <p className="text-sm text-gray-600">
                  {reportingVerbs[selectedVerb as keyof typeof reportingVerbs].ru}
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔄 Трансформация: Active → Passive">
        <div className="space-y-4">
          {[
            {
              active: "People say (that) he is very rich.",
              passive: "He is said to be very rich.",
              ru: "Говорят, что он очень богат.",
            },
            {
              active: "People believe (that) she speaks 5 languages.",
              passive: "She is believed to speak 5 languages.",
              ru: "Полагают, что она говорит на 5 языках.",
            },
            {
              active: "People think (that) they are dating.",
              passive: "They are thought to be dating.",
              ru: "Считают, что они встречаются.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border-2 border-orange-200">
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-600 mb-2">Active Voice:</p>
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-sm text-gray-800">{item.active}</p>
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl text-orange-500">↓</span>
              </div>
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-600 mb-2">Passive Voice:</p>
                <div className="bg-orange-50 rounded p-3 border-2 border-orange-300">
                  <p className="text-sm font-semibold text-gray-800">{item.passive}</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 text-center">{item.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 10-16: Компактные шаги ========== */
function Step10() {
  const items: FillItem[] = [
    { left: "1. She", right: "said to be a brilliant scientist. (is)", answers: ["is"], explanation: "is said to be — говорят, является", wide: true },
    { left: "2. He", right: "believed to know the answer. (is)", answers: ["is"], explanation: "is believed to know — полагают, знает", wide: true },
    { left: "3. They", right: "thought to be planning a surprise. (are)", answers: ["are"], explanation: "are thought to be planning — считают, планируют", wide: true },
    { left: "4. It", right: "expected to arrive soon. (is)", answers: ["is"], explanation: "is expected to arrive — ожидается прибытие", wide: true },
    { left: "5. She", right: "said to have left the company. (is)", answers: ["is"], explanation: "is said to have left — говорят, ушла", wide: true },
    { left: "6. He", right: "believed to be living abroad. (is)", answers: ["is"], explanation: "is believed to be living — полагают, живёт", wide: true },
  ];
  return <CheckableExercise title="✏️ Упражнение: be said to / be believed to" items={items} />;
}

function Step11() {
  return (
    <UiSection title="📊 Сравнительная таблица всех конструкций">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-indigo-400">
              <th className="text-left p-3 font-bold text-indigo-900">Конструкция</th>
              <th className="text-left p-3 font-bold text-indigo-900">Значение</th>
              <th className="text-left p-3 font-bold text-indigo-900">Пример</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-emerald-50">
              <td className="p-3 font-mono text-emerald-700">have sth done</td>
              <td className="p-3">Кто-то делает для вас</td>
              <td className="p-3 text-xs">I had my car repaired.</td>
            </tr>
            <tr className="border-b bg-blue-50">
              <td className="p-3 font-mono text-blue-700">get sth done</td>
              <td className="p-3">Более разговорный</td>
              <td className="p-3 text-xs">I got my hair cut.</td>
            </tr>
            <tr className="border-b bg-purple-50">
              <td className="p-3 font-mono text-purple-700">be rumoured to</td>
              <td className="p-3">По слухам (30-50%)</td>
              <td className="p-3 text-xs">He's rumoured to be rich.</td>
            </tr>
            <tr className="bg-orange-50">
              <td className="p-3 font-mono text-orange-700">be said to</td>
              <td className="p-3">Говорят (50-70%)</td>
              <td className="p-3 text-xs">She's said to speak 5 languages.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </UiSection>
  );
}

function Step12() {
  const items: FillItem[] = [
    { left: "1. I", right: "my laptop repaired yesterday. (had/got)", answers: ["had", "got"], explanation: "had/got my laptop repaired", wide: true },
    { left: "2. She", right: "rumoured to be dating him. (is)", answers: ["is"], explanation: "is rumoured to be dating", wide: true },
    { left: "3. We need to", right: "this work done today. (have/get)", answers: ["have", "get"], explanation: "have/get this work done", wide: true },
    { left: "4. He", right: "said to be the best in the field. (is)", answers: ["is"], explanation: "is said to be", wide: true },
    { left: "5. They", right: "their house painted last month. (had/got)", answers: ["had", "got"], explanation: "had/got their house painted", wide: true },
    { left: "6. It", right: "believed to be true. (is)", answers: ["is"], explanation: "is believed to be true", wide: true },
    { left: "7. She's", right: "her nails done right now. (having/getting)", answers: ["having", "getting"], explanation: "having/getting her nails done", wide: true },
    { left: "8. The CEO", right: "rumoured to be resigning. (is)", answers: ["is"], explanation: "is rumoured to be resigning", wide: true },
  ];
  return <CheckableExercise title="✏️ Смешанная практика: Все конструкции" items={items} />;
}

function Step13() {
  return (
    <UiSection title="🌍 Real Life: Advanced Passives в жизни">
      <div className="space-y-4">
        {[
          { icon: "💼", category: "На работе", example: "We had the office renovated. It looks great now!", ru: "Мы отремонтировали офис. Теперь он выглядит отлично!" },
          { icon: "🏠", category: "Дома", example: "I need to get my washing machine fixed urgently!", ru: "Мне срочно нужно починить стиральную машину!" },
          { icon: "📱", category: "Социальные сети", example: "The celebrity is rumoured to be getting married!", ru: "По слухам, знаменитость выходит замуж!" },
          { icon: "📰", category: "В новостях", example: "The president is said to be visiting next week.", ru: "Говорят, президент приедет на следующей неделе." },
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6 border-2 border-indigo-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{item.icon}</span>
              <h4 className="font-bold text-indigo-900">{item.category}</h4>
            </div>
            <div className="bg-indigo-50 rounded p-4 border-l-4 border-indigo-400">
              <p className="font-semibold text-gray-800 mb-1">{item.example}</p>
              <p className="text-sm text-gray-600">{item.ru}</p>
            </div>
          </div>
        ))}
      </div>
    </UiSection>
  );
}

function Step14() {
  return (
    <UiSection title="💬 Полезные выражения">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { phrase: "have something done", usage: "Услуги", example: "have your hair cut, have your car serviced" },
          { phrase: "get something done", usage: "Срочность", example: "get it done ASAP, get the job done" },
          { phrase: "be rumoured to", usage: "Слухи", example: "be rumoured to be dating, be rumoured to quit" },
          { phrase: "be said to", usage: "Сообщения", example: "be said to be talented, be said to know" },
          { phrase: "be believed to", usage: "Мнения", example: "be believed to be innocent, be believed to work" },
          { phrase: "be expected to", usage: "Ожидания", example: "be expected to arrive, be expected to win" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg p-5 border-2 border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-2">{item.phrase}</h4>
            <p className="text-xs text-indigo-600 mb-2">Использование: {item.usage}</p>
            <div className="bg-indigo-50 rounded p-3">
              <p className="text-sm text-gray-700">{item.example}</p>
            </div>
          </div>
        ))}
      </div>
    </UiSection>
  );
}

function Step15() {
  const items: FillItem[] = [
    { left: "1. I", right: "my phone repaired last week. (had)", answers: ["had"], explanation: "had my phone repaired", wide: true },
    { left: "2. She needs to", right: "her visa renewed. (get/have)", answers: ["get", "have"], explanation: "get/have her visa renewed", wide: true },
    { left: "3. He", right: "rumoured to be leaving the company. (is)", answers: ["is"], explanation: "is rumoured to be leaving", wide: true },
    { left: "4. The actor", right: "said to be very talented. (is)", answers: ["is"], explanation: "is said to be very talented", wide: true },
    { left: "5. We're", right: "our kitchen renovated next month. (having/getting)", answers: ["having", "getting"], explanation: "having/getting our kitchen renovated", wide: true },
    { left: "6. It", right: "believed to be the best solution. (is)", answers: ["is"], explanation: "is believed to be the best solution", wide: true },
    { left: "7. They", right: "their car serviced regularly. (have/get)", answers: ["have", "get"], explanation: "have/get their car serviced", wide: true },
    { left: "8. She", right: "thought to have left the country. (is)", answers: ["is"], explanation: "is thought to have left", wide: true },
    { left: "9. I must", right: "this work done by Friday. (get/have)", answers: ["get", "have"], explanation: "get/have this work done", wide: true },
    { left: "10. The CEO", right: "expected to announce the decision soon. (is)", answers: ["is"], explanation: "is expected to announce", wide: true },
  ];
  return <CheckableExercise title="🎯 Финальный тест: Advanced Passives" items={items} />;
}

function Step16() {
  return (
    <>
      <UiSection title="🎉 Поздравляем с завершением урока!">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-300 text-center">
          <div className="text-7xl mb-4">🏆</div>
          <h2 className="text-3xl font-bold text-green-900 mb-4">Отличная работа!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Вы завершили тему <strong>"Advanced Passives"</strong> и теперь владеете продвинутыми пассивными конструкциями!
          </p>
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-bold text-green-900 mb-4 text-xl">✅ Что вы изучили:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {[
                "have something done — Causative (формально)",
                "get something done — Causative (разговорно)",
                "be rumoured to — По слухам",
                "be said to / be believed to — Сообщения",
                "Интерактивные элементы",
                "80+ новых слов и выражений",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-green-50 rounded p-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-sm text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-300">
            <p className="text-sm text-gray-700">
              💡 <strong>Совет:</strong> Практикуйте эти конструкции в разговоре и письме для более естественного звучания!
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
