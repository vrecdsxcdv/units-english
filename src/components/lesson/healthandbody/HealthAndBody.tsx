"use client";

import { Section } from "@/components/ui/Section";
import { useState } from "react";

type Props = { step: number };

export default function HealthAndBody({ step }: Props) {
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

// Step 1: Health Basics
function Step1() {
  const basicWords = [
    { en: "health", tr: "[helθ]", ru: "здоровье", emoji: "💪" },
    { en: "doctor", tr: "[ˈdɒktə]", ru: "врач", emoji: "👨‍⚕️" },
    { en: "hospital", tr: "[ˈhɒspɪtl]", ru: "больница", emoji: "🏥" },
    { en: "medicine", tr: "[ˈmedsɪn]", ru: "лекарство", emoji: "💊" },
    { en: "pain", tr: "[peɪn]", ru: "боль", emoji: "😣" },
    { en: "sick", tr: "[sɪk]", ru: "больной", emoji: "🤒" },
    { en: "ill", tr: "[ɪl]", ru: "больной", emoji: "🤧" },
    { en: "healthy", tr: "[ˈhelθi]", ru: "здоровый", emoji: "😊" },
  ];

  return (
    <div className="space-y-8">
      <Section title="Health and Body — Здоровье и тело">
        <p className="text-gray-700 leading-relaxed mb-4">
          <b>Health</b> (здоровье) — одна из самых важных тем в жизни. В этом
          уроке вы узнаете, как говорить о здоровье, болезнях, врачах и здоровом
          образе жизни на английском языке.
        </p>

        <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg mb-4">
          <p className="text-sm font-semibold text-red-900 mb-2">
            🏥 Основные понятия:
          </p>
          <ul className="text-gray-800 space-y-1">
            <li>
              <b>Be sick / Be ill</b> — болеть
            </li>
            <li>
              <b>Feel well</b> — чувствовать себя хорошо
            </li>
            <li>
              <b>Go to the doctor</b> — идти к врачу
            </li>
            <li>
              <b>Take medicine</b> — принимать лекарство
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Basic Health Vocabulary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {basicWords.map((word, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{word.emoji}</span>
                <div className="text-xl font-bold text-red-600">{word.en}</div>
              </div>
              <div className="text-sm text-gray-500 mb-1">{word.tr}</div>
              <div className="text-gray-800 font-semibold">{word.ru}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Medical Professionals — Медицинские специалисты">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">
              👨‍⚕️ Doctor / Physician
            </h4>
            <p className="text-sm text-gray-700">Врач общей практики</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">🦷 Dentist</h4>
            <p className="text-sm text-gray-700">Стоматолог (зубной врач)</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">👓 Optometrist</h4>
            <p className="text-sm text-gray-700">Окулист (врач по глазам)</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">💉 Nurse</h4>
            <p className="text-sm text-gray-700">Медсестра / медбрат</p>
          </div>
        </div>
      </Section>

      <Section title="Examples — Примеры">
        <div className="space-y-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              I feel sick. I need to see a doctor.
            </p>
            <p className="text-sm text-gray-600">
              Я чувствую себя плохо. Мне нужно к врачу.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              Take this medicine three times a day.
            </p>
            <p className="text-sm text-gray-600">
              Принимай это лекарство три раза в день.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              She is healthy and exercises regularly.
            </p>
            <p className="text-sm text-gray-600">
              Она здорова и регулярно занимается спортом.
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900">
              The hospital is on Main Street.
            </p>
            <p className="text-sm text-gray-600">
              Больница находится на Главной улице.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 2: Common Illnesses and Symptoms
function Step2() {
  const illnesses = [
    { name: "Headache", ru: "Головная боль", emoji: "🤕" },
    { name: "Sore throat", ru: "Больное горло", emoji: "😷" },
    { name: "Runny nose", ru: "Насморк", emoji: "🤧" },
    { name: "High fever", ru: "Высокая температура", emoji: "🌡️" },
    { name: "Back pain", ru: "Боль в спине", emoji: "🚶" },
    { name: "Upset stomach", ru: "Расстройство желудка", emoji: "🤢" },
    { name: "Muscle tension", ru: "Напряжение мышц", emoji: "💪" },
    { name: "Joint pain", ru: "Боль в суставах", emoji: "🦴" },
  ];

  return (
    <div className="space-y-8">
      <Section title="Common Illnesses — Распространенные болезни">
        <p className="text-gray-700 leading-relaxed mb-4">
          Важно уметь описывать симптомы и говорить о том, что вас беспокоит,
          когда вы идёте к врачу.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg">
          <p className="text-sm font-semibold text-orange-900 mb-2">
            🤒 Как говорить о симптомах:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <b>I have a headache.</b> — У меня болит голова.
            </li>
            <li>
              <b>My throat hurts.</b> — У меня болит горло.
            </li>
            <li>
              <b>I feel dizzy.</b> — У меня кружится голова.
            </li>
            <li>
              <b>I am not feeling well.</b> — Я плохо себя чувствую.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Symptoms and Conditions — Симптомы и состояния">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {illnesses.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border-l-4 border-red-500 rounded-lg hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-600">{item.ru}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Serious Conditions — Серьёзные состояния">
        <div className="space-y-3">
          <div className="p-4 bg-red-50 rounded-lg border border-red-300">
            <p className="font-semibold text-gray-900 mb-1">
              High blood pressure
            </p>
            <p className="text-sm text-gray-700">Высокое кровяное давление</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-300">
            <p className="font-semibold text-gray-900 mb-1">Chronic illness</p>
            <p className="text-sm text-gray-700">Хроническая болезнь</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-300">
            <p className="font-semibold text-gray-900 mb-1">Chronic fatigue</p>
            <p className="text-sm text-gray-700">Хроническая усталость</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-300">
            <p className="font-semibold text-gray-900 mb-1">
              Breathing difficulties
            </p>
            <p className="text-sm text-gray-700">Затруднённое дыхание</p>
          </div>
        </div>
      </Section>

      <Section title="Phrasal Verbs about Illness">
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-300">
            <p className="font-semibold text-purple-900 mb-2">
              Come down with (an illness)
            </p>
            <p className="text-sm text-gray-700 mb-2">Заболеть (чем-либо)</p>
            <p className="text-sm text-gray-600 italic">
              I think I am coming down with a cold.
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-300">
            <p className="font-semibold text-purple-900 mb-2">
              Get over (an illness)
            </p>
            <p className="text-sm text-gray-700 mb-2">Выздороветь</p>
            <p className="text-sm text-gray-600 italic">
              It took me two weeks to get over the flu.
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-300">
            <p className="font-semibold text-purple-900 mb-2">
              Fight off (a virus)
            </p>
            <p className="text-sm text-gray-700 mb-2">Побороть (вирус)</p>
            <p className="text-sm text-gray-600 italic">
              Drink water to help fight off the virus.
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-300">
            <p className="font-semibold text-purple-900 mb-2">Pass out</p>
            <p className="text-sm text-gray-700 mb-2">Потерять сознание</p>
            <p className="text-sm text-gray-600 italic">
              He passed out from the heat.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 3: Medicines and Treatment
function Step3() {
  const medicines = [
    {
      name: "Painkiller",
      ru: "Обезболивающее",
      use: "For headache, back pain",
    },
    { name: "Antibiotic", ru: "Антибиотик", use: "For bacterial infections" },
    { name: "Cough syrup", ru: "Сироп от кашля", use: "For cough" },
    { name: "Eye drops", ru: "Глазные капли", use: "For dry eyes" },
    { name: "Nasal spray", ru: "Назальный спрей", use: "For runny nose" },
    { name: "Vitamins", ru: "Витамины", use: "For immune system" },
  ];

  return (
    <div className="space-y-8">
      <Section title="Medicines and Treatment — Лекарства и лечение">
        <p className="text-gray-700 leading-relaxed mb-4">
          Когда вы болеете, врач может назначить вам лекарства. Важно знать их
          названия и как их принимать.
        </p>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <p className="text-sm font-semibold text-green-900 mb-2">
            💊 Как принимать лекарства:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <b>Take medicine</b> — принимать лекарство
            </li>
            <li>
              <b>Take vitamins</b> — принимать витамины
            </li>
            <li>
              <b>Apply cream</b> — нанести крем
            </li>
            <li>
              <b>Use drops</b> — использовать капли
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Common Medicines — Распространённые лекарства">
        <div className="space-y-4">
          {medicines.map((med, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border-2 border-blue-300 rounded-lg hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-900 mb-1">
                    {med.name}
                  </h4>
                  <p className="text-gray-700 font-semibold mb-2">{med.ru}</p>
                  <p className="text-sm text-gray-600">
                    <b>Использование:</b> {med.use}
                  </p>
                </div>
                <div className="text-3xl">💊</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Medical Instructions — Медицинские инструкции">
        <div className="space-y-3">
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <p className="font-semibold text-gray-900">
              Take one pill twice a day.
            </p>
            <p className="text-sm text-gray-600">
              Принимайте одну таблетку два раза в день.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <p className="font-semibold text-gray-900">
              Take medicine after meals.
            </p>
            <p className="text-sm text-gray-600">
              Принимайте лекарство после еды.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <p className="font-semibold text-gray-900">
              Apply the cream to the affected area.
            </p>
            <p className="text-sm text-gray-600">
              Нанесите крем на пораженный участок.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <p className="font-semibold text-gray-900">Get plenty of rest.</p>
            <p className="text-sm text-gray-600">Больше отдыхайте.</p>
          </div>
        </div>
      </Section>

      <Section title="Pain Relief — Облегчение боли">
        <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
          <h4 className="font-bold text-red-900 mb-3">
            Способы облегчить боль:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-gray-800">Take a painkiller</p>
              <p className="text-sm text-gray-600">Принять обезболивающее</p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-gray-800">Use ice pack</p>
              <p className="text-sm text-gray-600">
                Использовать холодный компресс
              </p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-gray-800">Rest and relax</p>
              <p className="text-sm text-gray-600">Отдохнуть и расслабиться</p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-gray-800">See a doctor</p>
              <p className="text-sm text-gray-600">Обратиться к врачу</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 4: Healthy Lifestyle
function Step4() {
  return (
    <div className="space-y-8">
      <Section title="Healthy Lifestyle — Здоровый образ жизни">
        <p className="text-gray-700 leading-relaxed mb-4">
          Лучший способ оставаться здоровым — это вести здоровый образ жизни:
          заниматься спортом, правильно питаться и заботиться о себе.
        </p>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <p className="text-sm font-semibold text-green-900 mb-2">
            💚 Ключевые компоненты здорового образа жизни:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <b>Physical activity</b> — физическая активность
            </li>
            <li>
              <b>Healthy diet</b> — здоровое питание
            </li>
            <li>
              <b>Mental health</b> — психическое здоровье
            </li>
            <li>
              <b>Good hygiene</b> — хорошая гигиена
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Exercise and Fitness — Упражнения и фитнес">
        <div className="space-y-4">
          <div className="p-5 bg-blue-50 rounded-lg border border-blue-300">
            <h4 className="font-bold text-blue-900 mb-2 text-lg">
              🏃 Work out — заниматься спортом
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Регулярные физические упражнения укрепляют тело и иммунитет.
            </p>
            <p className="text-sm text-gray-600 italic">
              I work out at the gym three times a week.
            </p>
          </div>
          <div className="p-5 bg-blue-50 rounded-lg border border-blue-300">
            <h4 className="font-bold text-blue-900 mb-2 text-lg">
              🏋️ Exercise routine — режим тренировок
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Установите режим и следуйте ему.
            </p>
            <p className="text-sm text-gray-600 italic">
              My exercise routine includes running and yoga.
            </p>
          </div>
          <div className="p-5 bg-blue-50 rounded-lg border border-blue-300">
            <h4 className="font-bold text-blue-900 mb-2 text-lg">
              ⚡ Energy boost — прилив энергии
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Спорт даёт энергию на весь день.
            </p>
            <p className="text-sm text-gray-600 italic">
              Exercise gives me an energy boost in the morning.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Healthy Eating — Здоровое питание">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
            <h4 className="font-semibold text-green-900 mb-2">
              🥗 Balanced diet
            </h4>
            <p className="text-sm text-gray-700">
              Сбалансированное питание с овощами, фруктами и белком
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
            <h4 className="font-semibold text-green-900 mb-2">
              🍎 Nutrient-rich food
            </h4>
            <p className="text-sm text-gray-700">
              Пища, богатая питательными веществами
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
            <h4 className="font-semibold text-green-900 mb-2">
              ⚖️ Healthy weight
            </h4>
            <p className="text-sm text-gray-700">Поддержание здорового веса</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
            <h4 className="font-semibold text-green-900 mb-2">
              🛡️ Boost immunity
            </h4>
            <p className="text-sm text-gray-700">Укреплять иммунитет</p>
          </div>
        </div>
      </Section>

      <Section title="Healthy Habits — Полезные привычки">
        <div className="space-y-3">
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900 mb-1">
              Cut down on sugar
            </p>
            <p className="text-sm text-gray-700">
              Сократить потребление сахара
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900 mb-1">
              Cut out unhealthy food
            </p>
            <p className="text-sm text-gray-700">Исключить нездоровую еду</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900 mb-1">Reduce stress</p>
            <p className="text-sm text-gray-700">Снижать уровень стресса</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-900 mb-1">
              Get regular check-ups
            </p>
            <p className="text-sm text-gray-700">
              Регулярно проходить медосмотры
            </p>
          </div>
        </div>
      </Section>

      <Section title="Mental Health — Психическое здоровье">
        <div className="bg-indigo-50 border-2 border-indigo-400 p-5 rounded-lg">
          <h4 className="font-bold text-indigo-900 mb-3">
            Важность психического здоровья:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <b>Mental clarity</b> — ясность ума
            </li>
            <li>
              <b>Stress management</b> — управление стрессом
            </li>
            <li>
              <b>Healthy mindset</b> — здоровый настрой
            </li>
            <li>
              <b>Slow down</b> — сбавить темп (не торопиться)
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

// Step 5: Homework - Vocabulary List
function Step5() {
  const vocabulary = [
    { en: "immune system", tr: "[ɪˈmjuːn ˈsɪstəm]", ru: "иммунная система" },
    { en: "preventive care", tr: "[prɪˈventɪv keə]", ru: "профилактика" },
    {
      en: "early diagnosis",
      tr: "[ˈɜːli ˌdaɪəɡˈnəʊsɪs]",
      ru: "ранняя диагностика",
    },
    {
      en: "medical condition",
      tr: "[ˈmedɪkl kənˈdɪʃn]",
      ru: "медицинское состояние",
    },
    {
      en: "wellness routine",
      tr: "[ˈwelnəs ruːˈtiːn]",
      ru: "режим ухода за здоровьем",
    },
    {
      en: "sedentary lifestyle",
      tr: "[ˈsedntri ˈlaɪfstaɪl]",
      ru: "сидячий образ жизни",
    },
    {
      en: "holistic approach",
      tr: "[həʊˈlɪstɪk əˈprəʊtʃ]",
      ru: "целостный подход",
    },
    {
      en: "exercise regularly",
      tr: "[ˈeksəsaɪz ˈreɡjələli]",
      ru: "регулярно заниматься",
    },
    {
      en: "well-balanced",
      tr: "[wel ˈbælənst]",
      ru: "хорошо сбалансированный",
    },
    { en: "prescription", tr: "[prɪˈskrɪpʃn]", ru: "рецепт (на лекарство)" },
    { en: "symptoms", tr: "[ˈsɪmptəmz]", ru: "симптомы" },
    { en: "diagnosis", tr: "[ˌdaɪəɡˈnəʊsɪs]", ru: "диагноз" },
    { en: "treatment", tr: "[ˈtriːtmənt]", ru: "лечение" },
    { en: "recovery", tr: "[rɪˈkʌvəri]", ru: "выздоровление" },
    { en: "check-up", tr: "[ˈtʃek ʌp]", ru: "медосмотр" },
    { en: "emergency", tr: "[ɪˈmɜːdʒənsi]", ru: "экстренный случай" },
    { en: "ambulance", tr: "[ˈæmbjələns]", ru: "скорая помощь" },
    { en: "surgery", tr: "[ˈsɜːdʒəri]", ru: "операция" },
    { en: "bandage", tr: "[ˈbændɪdʒ]", ru: "бинт, повязка" },
    { en: "injection", tr: "[ɪnˈdʒekʃn]", ru: "укол, инъекция" },
  ];

  return (
    <div className="space-y-8">
      <Section title="📚 Homework — Vocabulary List">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-red-900 mb-3">
            Домашнее задание: Медицинский словарь
          </h3>
          <p className="text-gray-700 mb-3">
            Выучите эти слова, связанные со здоровьем и медициной. Они помогут
            вам общаться с врачами и говорить о здоровье.
          </p>
          <div className="bg-white/70 p-4 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">💡 Рекомендации:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Учите слова в контексте предложений</li>
              <li>✓ Повторяйте произношение вслух</li>
              <li>✓ Составьте свои примеры с каждым словом</li>
              <li>✓ Практикуйте диалоги у врача</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Medical Vocabulary — Медицинский словарь">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vocabulary.map((word, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border-l-4 border-red-500 shadow-sm rounded-lg hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {word.en}
                  </div>
                  <div className="text-sm text-red-600 mb-2">{word.tr}</div>
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

      <Section title="Practice Task — Практическое задание">
        <div className="bg-yellow-50 border-2 border-yellow-400 p-5 rounded-lg">
          <h4 className="font-bold text-yellow-900 mb-3">
            Задание: Составьте диалог
          </h4>
          <p className="text-gray-700 mb-4">
            Представьте, что вы пришли к врачу с головной болью. Составьте
            короткий диалог (5-6 реплик), используя слова из этого урока.
          </p>
          <div className="p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-700 mb-2">
              <b>Пример начала:</b>
            </p>
            <p className="text-sm text-gray-600 italic">
              Doctor: Good morning! What brings you here today?
            </p>
            <p className="text-sm text-gray-600 italic">
              Patient: I have a terrible headache...
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 6: Logic Task (БЕЗ ОТВЕТОВ!)
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
            Логические задачи о здоровье
          </h3>
          <p className="text-gray-700">
            Решите задачи и ответьте на вопросы. Ответы напишите сами!
          </p>
        </div>
      </Section>

      <Section title="Task 1: Match Symptoms and Solutions">
        <p className="text-gray-700 mb-4 font-semibold">
          Сопоставьте симптомы и лечение:
        </p>
        <div className="space-y-4">
          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-gray-900 mb-3">Симптомы:</p>
            <div className="space-y-2 ml-4">
              <p className="text-gray-700">A. Headache (головная боль)</p>
              <p className="text-gray-700">B. Sore throat (больное горло)</p>
              <p className="text-gray-700">C. Back pain (боль в спине)</p>
              <p className="text-gray-700">D. Runny nose (насморк)</p>
            </div>

            <p className="font-bold text-gray-900 mb-3 mt-5">Лечение:</p>
            <div className="space-y-2 ml-4">
              <p className="text-gray-700">1. Use nasal spray</p>
              <p className="text-gray-700">2. Take a painkiller</p>
              <p className="text-gray-700">3. Drink warm tea with honey</p>
              <p className="text-gray-700">4. Rest and use a heating pad</p>
            </div>

            <div className="mt-5 p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-700 mb-3">
                <b>Ваши ответы:</b> (например: A-2, B-3)
              </p>
              <input
                type="text"
                value={answers.match || ""}
                onChange={(e) => handleChange("match", e.target.value)}
                placeholder="Введите ваши ответы..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Task 2: Healthy or Unhealthy?">
        <p className="text-gray-700 mb-4 font-semibold">
          Определите, какие привычки здоровые, а какие — нет:
        </p>
        <div className="space-y-3">
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              1. Exercise regularly (регулярно заниматься спортом)
            </p>
            <input
              type="text"
              value={answers.q1 || ""}
              onChange={(e) => handleChange("q1", e.target.value)}
              placeholder="Healthy or Unhealthy?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              2. Eat fast food every day (есть фастфуд каждый день)
            </p>
            <input
              type="text"
              value={answers.q2 || ""}
              onChange={(e) => handleChange("q2", e.target.value)}
              placeholder="Healthy or Unhealthy?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              3. Get 8 hours of sleep (спать 8 часов)
            </p>
            <input
              type="text"
              value={answers.q3 || ""}
              onChange={(e) => handleChange("q3", e.target.value)}
              placeholder="Healthy or Unhealthy?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              4. Smoke cigarettes (курить сигареты)
            </p>
            <input
              type="text"
              value={answers.q4 || ""}
              onChange={(e) => handleChange("q4", e.target.value)}
              placeholder="Healthy or Unhealthy?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              5. Drink plenty of water (пить много воды)
            </p>
            <input
              type="text"
              value={answers.q5 || ""}
              onChange={(e) => handleChange("q5", e.target.value)}
              placeholder="Healthy or Unhealthy?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              6. Sit all day without moving (сидеть весь день без движения)
            </p>
            <input
              type="text"
              value={answers.q6 || ""}
              onChange={(e) => handleChange("q6", e.target.value)}
              placeholder="Healthy or Unhealthy?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Task 3: What Should You Do?">
        <p className="text-gray-700 mb-4 font-semibold">
          Прочитайте ситуации и решите, что нужно делать:
        </p>
        <div className="space-y-4">
          <div className="p-5 bg-orange-50 border-2 border-orange-300 rounded-lg">
            <p className="font-bold text-gray-900 mb-2">
              Situation 1: You have a high fever (39°C) and feel very weak.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              У вас высокая температура (39°C) и вы чувствуете слабость.
            </p>
            <p className="text-sm text-gray-600">
              <b>Что вы должны сделать?</b> (напишите 2-3 действия)
            </p>
            <div className="mt-3 p-3 bg-white rounded">
              <p className="text-sm text-gray-700 mb-2">Ваш ответ:</p>
              <textarea
                value={answers.sit1 || ""}
                onChange={(e) => handleChange("sit1", e.target.value)}
                placeholder="Напишите 2-3 действия..."
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <div className="p-5 bg-orange-50 border-2 border-orange-300 rounded-lg">
            <p className="font-bold text-gray-900 mb-2">
              Situation 2: You want to lose weight and be healthier.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Вы хотите похудеть и быть здоровее.
            </p>
            <p className="text-sm text-gray-600">
              <b>Что вы должны делать?</b> (напишите 3-4 действия)
            </p>
            <div className="mt-3 p-3 bg-white rounded">
              <p className="text-sm text-gray-700 mb-2">Ваш ответ:</p>
              <textarea
                value={answers.sit2 || ""}
                onChange={(e) => handleChange("sit2", e.target.value)}
                placeholder="Напишите 3-4 действия..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <div className="p-5 bg-orange-50 border-2 border-orange-300 rounded-lg">
            <p className="font-bold text-gray-900 mb-2">
              Situation 3: Your friend has chronic back pain.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              У вашего друга хроническая боль в спине.
            </p>
            <p className="text-sm text-gray-600">
              <b>Какой совет вы дадите?</b> (напишите 2-3 совета)
            </p>
            <div className="mt-3 p-3 bg-white rounded">
              <p className="text-sm text-gray-700 mb-2">Ваш ответ:</p>
              <textarea
                value={answers.sit3 || ""}
                onChange={(e) => handleChange("sit3", e.target.value)}
                placeholder="Напишите 2-3 совета..."
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
          <p className="font-semibold text-blue-900 mb-2">
            💡 Совет для выполнения:
          </p>
          <p className="text-sm text-gray-700">
            Используйте слова и выражения из предыдущих шагов урока. Пишите
            полные предложения на английском языке!
          </p>
        </div>
      </Section>
    </div>
  );
}

// Step 7: Final Reading + Exercises (БЕЗ ОТВЕТОВ!)
function Step7() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="📖 Reading: Sarah's Healthy Lifestyle">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <p className="text-gray-800 leading-relaxed mb-4">
            <b>My name is Sarah and I am 28 years old.</b> Five years ago, I was
            not healthy. I had a <b>sedentary lifestyle</b> — I worked in an
            office all day and never exercised. I ate fast food every day and
            felt tired all the time. I often had <b>headaches</b> and{" "}
            <b>back pain</b>. My doctor said I needed to change my lifestyle.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            So I decided to <b>work out</b> regularly. I started going to the
            gym three times a week. At first, it was difficult, but after a few
            weeks, I felt an <b>energy boost</b>! I also changed my diet. I{" "}
            <b>cut out</b> fast food and started eating a <b>balanced diet</b>{" "}
            with lots of vegetables and fruits. I also <b>cut down on</b> sugar
            and started drinking more water.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Now I feel much better! I have a <b>healthy weight</b> and I rarely
            get sick. I <b>take vitamins</b> every day to{" "}
            <b>boost my immunity</b>. I also try to <b>reduce stress</b> by
            doing yoga and meditation. My doctor says I am in great health!
          </p>
          <p className="text-gray-800 leading-relaxed">
            I also <b>get regular check-ups</b> to make sure everything is okay.{" "}
            <b>Preventive care</b> is very important. I believe in a{" "}
            <b>holistic approach</b> to health — taking care of both body and
            mind. My advice to everyone: start small, but start today. Your
            health is your wealth!
          </p>
        </div>
      </Section>

      <Section title="Exercise 1: Comprehension Questions">
        <p className="text-gray-700 mb-4 font-semibold">
          Ответьте на вопросы о тексте:
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-3">
              1. What was Sarah's lifestyle five years ago?
            </p>
            <input
              type="text"
              value={answers.comp1 || ""}
              onChange={(e) => handleChange("comp1", e.target.value)}
              placeholder="Your answer..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-3">
              2. What health problems did Sarah have?
            </p>
            <input
              type="text"
              value={answers.comp2 || ""}
              onChange={(e) => handleChange("comp2", e.target.value)}
              placeholder="Your answer..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-3">
              3. How often does Sarah go to the gym now?
            </p>
            <input
              type="text"
              value={answers.comp3 || ""}
              onChange={(e) => handleChange("comp3", e.target.value)}
              placeholder="Your answer..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-3">
              4. What does Sarah do to boost her immunity?
            </p>
            <input
              type="text"
              value={answers.comp4 || ""}
              onChange={(e) => handleChange("comp4", e.target.value)}
              placeholder="Your answer..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="p-4 bg-purple-50 border border-purple-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-3">
              5. What is Sarah's advice?
            </p>
            <input
              type="text"
              value={answers.comp5 || ""}
              onChange={(e) => handleChange("comp5", e.target.value)}
              placeholder="Your answer..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Exercise 2: True or False?">
        <p className="text-gray-700 mb-4">Правда или ложь?</p>
        <div className="space-y-3">
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              1. Sarah was healthy five years ago.
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
              2. Sarah works out three times a week.
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
              3. Sarah still eats fast food every day.
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
            <p className="text-gray-900 mb-2">4. Sarah takes vitamins.</p>
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
              5. Sarah believes only in physical health.
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

      <Section title="Exercise 3: Fill in the Blanks">
        <p className="text-gray-700 mb-4">Заполните пропуски:</p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              1. Five years ago, Sarah had a _______ lifestyle.
            </p>
            <input
              type="text"
              value={answers.fill1 || ""}
              onChange={(e) => handleChange("fill1", e.target.value)}
              placeholder="Your answer..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              2. Sarah _______ fast food from her diet.
            </p>
            <input
              type="text"
              value={answers.fill2 || ""}
              onChange={(e) => handleChange("fill2", e.target.value)}
              placeholder="Your answer..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              3. She takes vitamins to _______ her immunity.
            </p>
            <input
              type="text"
              value={answers.fill3 || ""}
              onChange={(e) => handleChange("fill3", e.target.value)}
              placeholder="Your answer..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              4. Sarah believes in a _______ approach to health.
            </p>
            <input
              type="text"
              value={answers.fill4 || ""}
              onChange={(e) => handleChange("fill4", e.target.value)}
              placeholder="Your answer..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
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
            Вы завершили тему <b>Health and Body</b>! Теперь вы можете говорить
            о здоровье, болезнях, лекарствах и здоровом образе жизни на
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
