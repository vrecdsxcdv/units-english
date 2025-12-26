"use client";

import { Section } from "@/components/ui/Section";
import { useState } from "react";

type Props = { step: number };

export default function WeatherAndSeasons({ step }: Props) {
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

// Step 1: Weather Basics - Основная погода
function Step1() {
  const weatherWords = [
    { en: "sunny", tr: "[ˈsʌni]", ru: "солнечно" },
    { en: "rainy", tr: "[ˈreɪni]", ru: "дождливо" },
    { en: "cloudy", tr: "[ˈklaʊdi]", ru: "облачно" },
    { en: "windy", tr: "[ˈwɪndi]", ru: "ветрено" },
    { en: "snowy", tr: "[ˈsnəʊi]", ru: "снежно" },
    { en: "foggy", tr: "[ˈfɒɡi]", ru: "туманно" },
  ];

  return (
    <div className="space-y-8">
      <Section title="Weather — Погода">
        <p className="text-gray-700 leading-relaxed mb-4">
          <b>Weather</b> (погода) — одна из самых важных тем для повседневного
          общения. В английском языке используются специальные прилагательные
          для описания погоды.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-lg mb-4">
          <p className="text-sm font-semibold text-indigo-900 mb-2">
            📌 Структура предложения:
          </p>
          <p className="text-gray-800">
            <b>It is + прилагательное</b>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            It is sunny today. — Сегодня солнечно.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">
            Основные типы погоды:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">☀️</span>
              <div>
                <b>Sunny</b> — солнечно (светит солнце, ясное небо)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">🌧️</span>
              <div>
                <b>Rainy</b> — дождливо (идёт дождь)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">☁️</span>
              <div>
                <b>Cloudy</b> — облачно (небо покрыто облаками)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">💨</span>
              <div>
                <b>Windy</b> — ветрено (дует сильный ветер)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-300 mr-2">❄️</span>
              <div>
                <b>Snowy</b> — снежно (идёт снег)
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2">🌫️</span>
              <div>
                <b>Foggy</b> — туманно (видимость плохая из-за тумана)
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Vocabulary — Словарь">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weatherWords.map((word, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <div className="text-lg font-bold text-indigo-600">{word.en}</div>
              <div className="text-sm text-gray-500 mb-1">{word.tr}</div>
              <div className="text-gray-800">{word.ru}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Examples — Примеры">
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">It is sunny today.</p>
            <p className="text-sm text-gray-600">Сегодня солнечно.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              It is rainy in London.
            </p>
            <p className="text-sm text-gray-600">В Лондоне дождливо.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              It is very windy outside.
            </p>
            <p className="text-sm text-gray-600">На улице очень ветрено.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              It is snowy in winter.
            </p>
            <p className="text-sm text-gray-600">Зимой снежно.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 2: Seasons - Времена года
function Step2() {
  const seasons = [
    {
      name: "Spring",
      tr: "[sprɪŋ]",
      ru: "Весна",
      months: "March, April, May",
      emoji: "🌸",
      description: "Природа просыпается, становится тепло, цветут цветы",
    },
    {
      name: "Summer",
      tr: "[ˈsʌmə]",
      ru: "Лето",
      months: "June, July, August",
      emoji: "☀️",
      description: "Самое жаркое время года, каникулы, отпуска",
    },
    {
      name: "Autumn / Fall",
      tr: "[ˈɔːtəm] / [fɔːl]",
      ru: "Осень",
      months: "September, October, November",
      emoji: "🍂",
      description: "Листья опадают, становится прохладнее, дожди",
    },
    {
      name: "Winter",
      tr: "[ˈwɪntə]",
      ru: "Зима",
      months: "December, January, February",
      emoji: "❄️",
      description: "Холодно, снег, короткие дни",
    },
  ];

  return (
    <div className="space-y-8">
      <Section title="Seasons — Времена года">
        <p className="text-gray-700 leading-relaxed mb-4">
          В году есть четыре времени года: <b>spring</b> (весна), <b>summer</b>{" "}
          (лето), <b>autumn/fall</b> (осень) и <b>winter</b> (зима).
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            💡 Полезно знать:
          </p>
          <p className="text-sm text-gray-700">
            <b>Autumn</b> используется в британском английском, <b>Fall</b> — в
            американском английском. Оба варианта правильные!
          </p>
        </div>
      </Section>

      <Section title="Четыре времени года">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seasons.map((season, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{season.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {season.name}
                  </h3>
                  <p className="text-sm text-gray-500">{season.tr}</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-indigo-600 mb-2">
                {season.ru}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <b>Месяцы:</b> {season.months}
              </p>
              <p className="text-sm text-gray-700">{season.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Предлоги с временами года">
        <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
          <p className="font-semibold text-gray-900 mb-2">
            С временами года используется предлог <b>in</b>:
          </p>
          <ul className="space-y-1 text-gray-700">
            <li>✓ in spring — весной</li>
            <li>✓ in summer — летом</li>
            <li>✓ in autumn / in fall — осенью</li>
            <li>✓ in winter — зимой</li>
          </ul>
        </div>
      </Section>

      <Section title="Examples — Примеры">
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              I love summer because it is warm and sunny.
            </p>
            <p className="text-sm text-gray-600">
              Я люблю лето, потому что тепло и солнечно.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              In winter, it is cold and snowy.
            </p>
            <p className="text-sm text-gray-600">Зимой холодно и снежно.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              Spring is my favourite season.
            </p>
            <p className="text-sm text-gray-600">
              Весна — моё любимое время года.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 3: Temperature - Температура
function Step3() {
  const tempWords = [
    { en: "hot", tr: "[hɒt]", ru: "жарко", temp: "30°C+" },
    { en: "warm", tr: "[wɔːm]", ru: "тепло", temp: "15-25°C" },
    { en: "cool", tr: "[kuːl]", ru: "прохладно", temp: "10-15°C" },
    { en: "cold", tr: "[kəʊld]", ru: "холодно", temp: "0-10°C" },
    { en: "freezing", tr: "[ˈfriːzɪŋ]", ru: "морозно", temp: "ниже 0°C" },
  ];

  return (
    <div className="space-y-8">
      <Section title="Temperature — Температура">
        <p className="text-gray-700 leading-relaxed mb-4">
          Для описания температуры в английском используются специальные
          прилагательные. Важно понимать разницу между ними.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
          <p className="text-sm font-semibold text-red-900 mb-2">
            🌡️ Структура:
          </p>
          <p className="text-gray-800">
            <b>It is + температурное прилагательное</b>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            It is hot today. — Сегодня жарко.
          </p>
        </div>
      </Section>

      <Section title="Температурная шкала">
        <div className="space-y-4">
          {tempWords.map((word, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg"
            >
              <div className="flex-shrink-0 w-24 text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {word.temp}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-gray-900">{word.en}</div>
                <div className="text-sm text-gray-500">{word.tr}</div>
              </div>
              <div className="text-right">
                <div className="text-gray-800 font-semibold">{word.ru}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Дополнительные фразы">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-900">
              What's the temperature?
            </p>
            <p className="text-sm text-gray-600">Какая температура?</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-900">It's 20 degrees.</p>
            <p className="text-sm text-gray-600">20 градусов.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-900">It's below zero.</p>
            <p className="text-sm text-gray-600">Ниже нуля.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-900">It's minus 5 degrees.</p>
            <p className="text-sm text-gray-600">Минус 5 градусов.</p>
          </div>
        </div>
      </Section>

      <Section title="Examples — Примеры">
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              It is very hot in summer. It's 35 degrees!
            </p>
            <p className="text-sm text-gray-600">
              Летом очень жарко. 35 градусов!
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              In spring, it is warm and pleasant.
            </p>
            <p className="text-sm text-gray-600">Весной тепло и приятно.</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              It's freezing outside! It's minus 15!
            </p>
            <p className="text-sm text-gray-600">На улице морозно! Минус 15!</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              It's a bit cool today. Take a jacket.
            </p>
            <p className="text-sm text-gray-600">
              Сегодня прохладно. Возьми куртку.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 4: Advanced Weather Vocabulary - Расширенный словарь
function Step4() {
  const advancedWeather = [
    { en: "storm", tr: "[stɔːm]", ru: "гроза, шторм", emoji: "⛈️" },
    { en: "thunder", tr: "[ˈθʌndə]", ru: "гром", emoji: "⚡" },
    { en: "lightning", tr: "[ˈlaɪtnɪŋ]", ru: "молния", emoji: "🌩️" },
    { en: "rainbow", tr: "[ˈreɪnbəʊ]", ru: "радуга", emoji: "🌈" },
    { en: "drizzle", tr: "[ˈdrɪzl]", ru: "морось, мелкий дождь", emoji: "🌦️" },
    { en: "hail", tr: "[heɪl]", ru: "град", emoji: "🧊" },
    { en: "frost", tr: "[frɒst]", ru: "мороз, иней", emoji: "🥶" },
    { en: "breeze", tr: "[briːz]", ru: "лёгкий ветерок", emoji: "🍃" },
    { en: "hurricane", tr: "[ˈhʌrɪkən]", ru: "ураган", emoji: "🌀" },
    { en: "flood", tr: "[flʌd]", ru: "наводнение", emoji: "🌊" },
  ];

  return (
    <div className="space-y-8">
      <Section title="Advanced Weather Vocabulary">
        <p className="text-gray-700 leading-relaxed mb-4">
          Помимо базовых слов о погоде, есть много специальных терминов для
          описания различных погодных явлений. Эти слова помогут вам более точно
          и красочно описывать погоду.
        </p>
      </Section>

      <Section title="Погодные явления">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advancedWeather.map((word, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{word.emoji}</span>
                <div className="text-xl font-bold text-indigo-600">
                  {word.en}
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-1">{word.tr}</div>
              <div className="text-gray-800 font-semibold">{word.ru}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Полезные фразы">
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="font-semibold text-gray-900 mb-2">
              There is a storm coming.
            </p>
            <p className="text-sm text-gray-600">Приближается гроза.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="font-semibold text-gray-900 mb-2">
              I can hear thunder.
            </p>
            <p className="text-sm text-gray-600">Я слышу гром.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="font-semibold text-gray-900 mb-2">
              Look at the beautiful rainbow!
            </p>
            <p className="text-sm text-gray-600">
              Посмотри на красивую радугу!
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="font-semibold text-gray-900 mb-2">
              It's just a light drizzle.
            </p>
            <p className="text-sm text-gray-600">
              Это всего лишь мелкий дождик.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Weather Warnings — Предупреждения о погоде">
        <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
          <p className="text-sm font-semibold text-red-900 mb-3">
            ⚠️ Опасные погодные явления:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <b>Hurricane warning</b> — предупреждение об урагане
            </li>
            <li>
              <b>Flood alert</b> — предупреждение о наводнении
            </li>
            <li>
              <b>Storm watch</b> — наблюдение за грозой
            </li>
            <li>
              <b>Extreme weather</b> — экстремальная погода
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

// Step 5: Homework - Vocabulary List
function Step5() {
  const homeworkWords = [
    { en: "weather", tr: "[ˈweðə]", ru: "погода" },
    { en: "forecast", tr: "[ˈfɔːkɑːst]", ru: "прогноз" },
    { en: "temperature", tr: "[ˈtemprətʃə]", ru: "температура" },
    { en: "degree", tr: "[dɪˈɡriː]", ru: "градус" },
    { en: "climate", tr: "[ˈklaɪmət]", ru: "климат" },
    { en: "humidity", tr: "[hjuːˈmɪdəti]", ru: "влажность" },
    { en: "precipitation", tr: "[prɪˌsɪpɪˈteɪʃn]", ru: "осадки" },
    { en: "wind", tr: "[wɪnd]", ru: "ветер" },
    { en: "cloud", tr: "[klaʊd]", ru: "облако" },
    { en: "sky", tr: "[skaɪ]", ru: "небо" },
    { en: "sun", tr: "[sʌn]", ru: "солнце" },
    { en: "rain", tr: "[reɪn]", ru: "дождь" },
    { en: "snow", tr: "[snəʊ]", ru: "снег" },
    { en: "ice", tr: "[aɪs]", ru: "лёд" },
    { en: "umbrella", tr: "[ʌmˈbrelə]", ru: "зонт" },
    { en: "coat", tr: "[kəʊt]", ru: "пальто" },
    { en: "boots", tr: "[buːts]", ru: "ботинки" },
    { en: "scarf", tr: "[skɑːf]", ru: "шарф" },
    { en: "gloves", tr: "[ɡlʌvz]", ru: "перчатки" },
    { en: "hat", tr: "[hæt]", ru: "шапка" },
    { en: "sunglasses", tr: "[ˈsʌnɡlɑːsɪz]", ru: "солнечные очки" },
    { en: "sunscreen", tr: "[ˈsʌnskriːn]", ru: "солнцезащитный крем" },
    { en: "season", tr: "[ˈsiːzn]", ru: "время года, сезон" },
    { en: "month", tr: "[mʌnθ]", ru: "месяц" },
    { en: "weather report", tr: "[ˈweðə rɪˈpɔːt]", ru: "прогноз погоды" },
  ];

  return (
    <div className="space-y-8">
      <Section title="📚 Homework — Домашнее задание">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-indigo-900 mb-3">
            Задание для самостоятельного изучения
          </h3>
          <p className="text-gray-700 mb-3">
            Выучите следующие слова наизусть. Это поможет вам свободно говорить
            о погоде и временах года на английском языке.
          </p>
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">💡 Рекомендации:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Произносите слова вслух по несколько раз</li>
              <li>✓ Составьте с каждым словом минимум одно предложение</li>
              <li>✓ Повторяйте слова каждый день в течение недели</li>
              <li>✓ Используйте карточки для запоминания</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Vocabulary List — Список слов для изучения">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {homeworkWords.map((word, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border-l-4 border-indigo-500 shadow-sm rounded-lg hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {word.en}
                  </div>
                  <div className="text-sm text-indigo-600 mb-2">{word.tr}</div>
                  <div className="text-gray-700">{word.ru}</div>
                </div>
                <div className="text-2xl font-bold text-gray-300">
                  {idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Practice Sentences — Примеры предложений">
        <p className="text-gray-700 mb-4">
          Используйте эти примеры для практики:
        </p>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              I always check the weather forecast before going out.
            </p>
            <p className="text-sm text-gray-600">
              Я всегда проверяю прогноз погоды перед выходом из дома.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              Don't forget your umbrella, it's raining!
            </p>
            <p className="text-sm text-gray-600">Не забудь зонт, идёт дождь!</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              I need sunglasses because it's very sunny.
            </p>
            <p className="text-sm text-gray-600">
              Мне нужны солнечные очки, потому что очень солнечно.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              The temperature is 25 degrees today.
            </p>
            <p className="text-sm text-gray-600">
              Сегодня температура 25 градусов.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 6: Logic Task - Задание на логику
function Step6() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="🧠 Logic Task — Задание на логику">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Сопоставьте погоду, одежду и активности
          </h3>
          <p className="text-gray-700">
            Определите, какая одежда и активности подходят для каждого типа
            погоды. Подумайте логически!
          </p>
        </div>
      </Section>

      <Section title="Task 1: Weather and Clothes">
        <p className="text-gray-700 mb-4 font-semibold">
          Какую одежду вы наденете в такую погоду?
        </p>
        <div className="space-y-4">
          <div className="p-5 bg-white border-2 border-gray-300 rounded-lg">
            <p className="font-bold text-lg text-gray-900 mb-3">
              1. It's hot and sunny (30°C) ☀️
            </p>
            <div className="ml-4 space-y-2 text-gray-700">
              <p className="text-sm text-gray-600 italic">Подумайте:</p>
              <p className="text-sm">
                ⚪ Coat, scarf, gloves, boots (Пальто, шарф, перчатки, ботинки)
              </p>
              <p className="text-sm">
                ⚪ T-shirt, shorts, sunglasses, sunscreen (Футболка, шорты,
                очки, крем)
              </p>
              <p className="text-sm">
                ⚪ Raincoat, umbrella, boots (Плащ, зонт, ботинки)
              </p>
              <div className="mt-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ваш ответ:
                </label>
                <input
                  type="text"
                  value={answers.q1 || ""}
                  onChange={(e) => handleChange("q1", e.target.value)}
                  placeholder="Введите ваш ответ..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="p-5 bg-white border-2 border-gray-300 rounded-lg">
            <p className="font-bold text-lg text-gray-900 mb-3">
              2. It's freezing and snowy (-10°C) ❄️
            </p>
            <div className="ml-4 space-y-2 text-gray-700">
              <p className="text-sm text-gray-600 italic">Подумайте:</p>
              <p className="text-sm">
                ⚪ Warm coat, hat, scarf, gloves (Тёплое пальто, шапка, шарф,
                перчатки)
              </p>
              <p className="text-sm">
                ⚪ Light jacket, jeans (Лёгкая куртка, джинсы)
              </p>
              <p className="text-sm">⚪ Swimsuit (Купальник)</p>
              <div className="mt-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ваш ответ:
                </label>
                <input
                  type="text"
                  value={answers.q2 || ""}
                  onChange={(e) => handleChange("q2", e.target.value)}
                  placeholder="Введите ваш ответ..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="p-5 bg-white border-2 border-gray-300 rounded-lg">
            <p className="font-bold text-lg text-gray-900 mb-3">
              3. It's rainy and cool (12°C) 🌧️
            </p>
            <div className="ml-4 space-y-2 text-gray-700">
              <p className="text-sm text-gray-600 italic">Подумайте:</p>
              <p className="text-sm">
                ⚪ T-shirt and flip-flops (Футболка и шлёпанцы)
              </p>
              <p className="text-sm">
                ⚪ Raincoat, umbrella, boots (Плащ, зонт, ботинки)
              </p>
              <p className="text-sm">
                ⚪ Winter jacket and snow boots (Зимняя куртка и снегоходы)
              </p>
              <div className="mt-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ваш ответ:
                </label>
                <input
                  type="text"
                  value={answers.q3 || ""}
                  onChange={(e) => handleChange("q3", e.target.value)}
                  placeholder="Введите ваш ответ..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Task 2: Weather and Activities">
        <p className="text-gray-700 mb-4 font-semibold">
          Какие активности лучше всего подходят для этой погоды?
        </p>
        <div className="space-y-4">
          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-lg text-gray-900 mb-3">
              1. Sunny and hot summer day ☀️
            </p>
            <div className="ml-4 space-y-2">
              <p className="text-sm">⚪ Go skiing (Кататься на лыжах)</p>
              <p className="text-sm">
                ⚪ Go to the beach, swim (Пойти на пляж, плавать)
              </p>
              <p className="text-sm">
                ⚪ Stay at home and read (Остаться дома и читать)
              </p>
              <div className="mt-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ваш ответ:
                </label>
                <input
                  type="text"
                  value={answers.a1 || ""}
                  onChange={(e) => handleChange("a1", e.target.value)}
                  placeholder="Введите ваш ответ..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-lg text-gray-900 mb-3">
              2. Snowy winter day ❄️
            </p>
            <div className="ml-4 space-y-2">
              <p className="text-sm">
                ⚪ Build a snowman, ski (Слепить снеговика, кататься на лыжах)
              </p>
              <p className="text-sm">
                ⚪ Have a picnic in the park (Устроить пикник в парке)
              </p>
              <p className="text-sm">
                ⚪ Go swimming in the sea (Плавать в море)
              </p>
              <div className="mt-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ваш ответ:
                </label>
                <input
                  type="text"
                  value={answers.a2 || ""}
                  onChange={(e) => handleChange("a2", e.target.value)}
                  placeholder="Введите ваш ответ..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-lg text-gray-900 mb-3">
              3. Rainy and windy day 🌧️💨
            </p>
            <div className="ml-4 space-y-2">
              <p className="text-sm">
                ⚪ Fly a kite (Запускать воздушного змея — опасно!)
              </p>
              <p className="text-sm">
                ⚪ Stay indoors, watch a movie (Остаться дома, посмотреть фильм)
              </p>
              <p className="text-sm">
                ⚪ Go hiking in the mountains (Идти в поход в горы)
              </p>
              <div className="mt-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ваш ответ:
                </label>
                <input
                  type="text"
                  value={answers.a3 || ""}
                  onChange={(e) => handleChange("a3", e.target.value)}
                  placeholder="Введите ваш ответ..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Task 3: Seasons and Months">
        <p className="text-gray-700 mb-4 font-semibold">
          Определите, к какому времени года относятся эти месяцы:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              December, January, February
            </p>
            <p className="text-sm text-green-700">→ Winter ❄️</p>
          </div>
          <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              March, April, May
            </p>
            <p className="text-sm text-green-700">→ Spring 🌸</p>
          </div>
          <div className="p-4 bg-orange-50 border border-orange-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              June, July, August
            </p>
            <p className="text-sm text-green-700">→ Summer ☀️</p>
          </div>
          <div className="p-4 bg-red-50 border border-red-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              September, October, November
            </p>
            <p className="text-sm text-green-700">→ Autumn/Fall 🍂</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 rounded-r-lg">
          <p className="font-semibold text-indigo-900 mb-2">
            🎯 Отлично! Вы завершили задание на логику!
          </p>
          <p className="text-sm text-gray-700">
            Теперь вы понимаете, как погода влияет на выбор одежды и
            активностей. Это важно для реальной жизни!
          </p>
        </div>
      </Section>
    </div>
  );
}

// Step 7: Final Text + Exercises
function Step7() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="📖 Reading: A Year of Seasons">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <p className="text-gray-800 leading-relaxed mb-4">
            <b>My name is Anna and I live in England.</b> The weather here
            changes a lot during the year. Let me tell you about the seasons.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            <b>In spring</b> (March, April, May), the weather is cool and often
            rainy. The temperature is about 10-15 degrees. Trees and flowers
            start to grow. Sometimes there is a beautiful rainbow after the
            rain. I usually wear a light jacket and take an umbrella with me.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            <b>In summer</b> (June, July, August), it is warm and sunny. The
            temperature can be 20-25 degrees or even hotter! It's my favourite
            season. I love to go to the beach, wear sunglasses and put on
            sunscreen. Summer is the best time for holidays!
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            <b>In autumn</b> (September, October, November), it gets cooler
            again. It's often cloudy and windy. The leaves turn red, yellow and
            brown. Sometimes there is fog in the morning. I need a warm coat and
            a scarf. The temperature is about 10-15 degrees.
          </p>
          <p className="text-gray-800 leading-relaxed">
            <b>In winter</b> (December, January, February), it is cold and
            sometimes snowy. The temperature can be 0-5 degrees or even below
            zero! When it's freezing, I wear a warm hat, gloves and boots. I
            love winter because of Christmas and New Year celebrations!
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            <b>Перевод:</b> Меня зовут Анна, и я живу в Англии. Погода здесь
            сильно меняется в течение года. Расскажу вам о временах года. Весной
            прохладно и часто дождливо (10-15°C). Летом тепло и солнечно
            (20-25°C) — моё любимое время! Осенью снова прохладнее, облачно и
            ветрено. Зимой холодно (0-5°C) или даже морозно, но я люблю зиму
            из-за праздников!
          </p>
        </div>
      </Section>

      <Section title="Exercise 1: True or False?">
        <p className="text-gray-700 mb-4">
          Прочитайте текст ещё раз и ответьте: правда или ложь?
        </p>
        <div className="space-y-3">
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              1. Anna lives in England. (Анна живёт в Англии)
            </p>
            <input
              type="text"
              value={answers.tf1 || ""}
              onChange={(e) => handleChange("tf1", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              2. Summer is Anna's favourite season. (Лето — любимое время года
              Анны)
            </p>
            <input
              type="text"
              value={answers.tf2 || ""}
              onChange={(e) => handleChange("tf2", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              3. In spring, it is always hot and sunny. (Весной всегда жарко и
              солнечно)
            </p>
            <input
              type="text"
              value={answers.tf3 || ""}
              onChange={(e) => handleChange("tf3", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              4. In autumn, the leaves turn red, yellow and brown. (Осенью
              листья становятся красными, жёлтыми и коричневыми)
            </p>
            <input
              type="text"
              value={answers.tf4 || ""}
              onChange={(e) => handleChange("tf4", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              5. Anna doesn't like winter. (Анна не любит зиму)
            </p>
            <input
              type="text"
              value={answers.tf5 || ""}
              onChange={(e) => handleChange("tf5", e.target.value)}
              placeholder="True or False?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Exercise 2: Fill in the blanks">
        <p className="text-gray-700 mb-4">
          Вставьте подходящие слова из текста:
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              1. In summer, the weather is warm and _______.
            </p>
            <input
              type="text"
              value={answers.fill1 || ""}
              onChange={(e) => handleChange("fill1", e.target.value)}
              placeholder="Ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              2. In spring, Anna wears a light _______ and takes an _______.
            </p>
            <input
              type="text"
              value={answers.fill2 || ""}
              onChange={(e) => handleChange("fill2", e.target.value)}
              placeholder="Ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              3. In winter, when it's _______, Anna wears a hat and gloves.
            </p>
            <input
              type="text"
              value={answers.fill3 || ""}
              onChange={(e) => handleChange("fill3", e.target.value)}
              placeholder="Ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              4. In autumn, it is often _______ and _______.
            </p>
            <input
              type="text"
              value={answers.fill4 || ""}
              onChange={(e) => handleChange("fill4", e.target.value)}
              placeholder="Ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Exercise 3: Answer the questions">
        <p className="text-gray-700 mb-4">Ответьте на вопросы о тексте:</p>
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              1. What is Anna's favourite season?
            </p>
            <textarea
              value={answers.quest1 || ""}
              onChange={(e) => handleChange("quest1", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={2}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              2. What is the temperature in spring?
            </p>
            <textarea
              value={answers.quest2 || ""}
              onChange={(e) => handleChange("quest2", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={2}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              3. What does Anna wear in winter?
            </p>
            <textarea
              value={answers.quest3 || ""}
              onChange={(e) => handleChange("quest3", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={2}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              4. Why does Anna love winter?
            </p>
            <textarea
              value={answers.quest4 || ""}
              onChange={(e) => handleChange("quest4", e.target.value)}
              placeholder="Напишите ваш ответ..."
              rows={2}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 p-6 rounded-xl text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-2xl font-bold text-green-900 mb-2">
            Congratulations!
          </h3>
          <p className="text-gray-700 mb-4">
            Вы завершили тему <b>"Weather and Seasons"</b>! Теперь вы можете
            уверенно говорить о погоде, временах года, температуре и сезонах на
            английском языке.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold">
            <span>✓</span>
            <span>Тема завершена</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
