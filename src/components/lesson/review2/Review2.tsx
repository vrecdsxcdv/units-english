"use client";

import { Section } from "@/components/ui/Section";
import { useState } from "react";

type Props = { step: number };

export default function Review2({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

// Step 1: Review 2 Introduction
function Step1() {
  return (
    <div className="space-y-8">
      <Section title="🔄 Review 2 — Повторение 2">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-400 p-8 rounded-xl mb-6">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            Advanced Practice & Consolidation
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Во втором блоке повторения мы углубим знания и потренируемся с более
            сложными упражнениями. Это финальная подготовка перед итоговым
            тестом!
          </p>
        </div>
      </Section>

      <Section title="What's Different in Review 2?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-xl text-blue-900 mb-3">
              🎯 More Complex Tasks
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• Longer texts</li>
              <li>• Combine multiple grammar rules</li>
              <li>• Real-life situations</li>
              <li>• Creative writing</li>
            </ul>
          </div>

          <div className="p-5 bg-green-50 border-2 border-green-300 rounded-lg">
            <p className="font-bold text-xl text-green-900 mb-3">
              💪 Skills Focus
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• Advanced vocabulary</li>
              <li>• Phrasal verbs</li>
              <li>• Idioms and expressions</li>
              <li>• Natural conversation</li>
            </ul>
          </div>

          <div className="p-5 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-xl text-purple-900 mb-3">
              📚 Topic Integration
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• Mix all vocabulary topics</li>
              <li>• Connect grammar and vocabulary</li>
              <li>• Contextual learning</li>
              <li>• Practical application</li>
            </ul>
          </div>

          <div className="p-5 bg-orange-50 border-2 border-orange-300 rounded-lg">
            <p className="font-bold text-xl text-orange-900 mb-3">
              🎓 Test Preparation
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• Test-like questions</li>
              <li>• Time management</li>
              <li>• Common mistakes</li>
              <li>• Success strategies</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 p-6 rounded-xl">
          <p className="font-bold text-xl text-yellow-900 mb-3">
            🚀 Let's Get Started!
          </p>
          <p className="text-gray-700">
            Этот обзор поможет вам уверенно подойти к финальному тесту. Удачи!
          </p>
        </div>
      </Section>
    </div>
  );
}

// Step 2: Technology & Gadgets Review
function Step2() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Technology Vocabulary — Технологическая лексика">
        <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Modern Technology
          </h3>
        </div>
      </Section>

      <Section title="Exercise 1: Technology Verbs">
        <div className="space-y-3">
          {[
            "download",
            "upload",
            "charge",
            "connect",
            "install",
            "update",
            "browse",
            "search",
          ].map((verb, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. Translate "{verb}" to Russian:
              </p>
              <input
                type="text"
                value={answers[`tech${idx}`] || ""}
                onChange={(e) => handleChange(`tech${idx}`, e.target.value)}
                placeholder="Введите перевод..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Complete the Sentences">
        <div className="space-y-3">
          {[
            "I need to _____ my phone. The battery is low.",
            "Can you _____ this app on my computer?",
            "Let me _____ this photo to social media.",
            "I _____ the internet every day.",
            "Don't forget to _____ your software.",
          ].map((sentence, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {sentence}
              </p>
              <input
                type="text"
                value={answers[`techsen${idx}`] || ""}
                onChange={(e) => handleChange(`techsen${idx}`, e.target.value)}
                placeholder="Введите глагол..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 3: Work & Jobs in Context
function Step3() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Work & Jobs — Работа и профессии">
        <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">
            Professional Life
          </h3>
        </div>
      </Section>

      <Section title="Exercise: Job Descriptions">
        <div className="space-y-4">
          {[
            {
              job: "Doctor",
              desc: "A person who _____ sick people.",
            },
            {
              job: "Teacher",
              desc: "A person who _____ students.",
            },
            {
              job: "Chef",
              desc: "A person who _____ food in a restaurant.",
            },
            {
              job: "Engineer",
              desc: "A person who _____ and builds things.",
            },
            {
              job: "Journalist",
              desc: "A person who _____ news articles.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="font-bold text-gray-900 mb-2">{item.job}:</p>
              <p className="text-gray-700 mb-2">{item.desc}</p>
              <input
                type="text"
                value={answers[`job${idx}`] || ""}
                onChange={(e) => handleChange(`job${idx}`, e.target.value)}
                placeholder="Введите глагол..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Write About Your Dream Job">
        <div className="p-5 bg-white border-2 border-green-300 rounded-lg">
          <p className="text-gray-700 mb-4">
            Describe your dream job. Include:
          </p>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• What is the job?</li>
            <li>• What would you do?</li>
            <li>• Why do you want this job?</li>
            <li>• What skills do you need?</li>
          </ul>
          <textarea
            value={answers.dreamjob || ""}
            onChange={(e) => handleChange("dreamjob", e.target.value)}
            placeholder="Write about your dream job..."
            rows={8}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
      </Section>
    </div>
  );
}

// Step 4: Time Expressions & Tenses
function Step4() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Time Expressions — Временные выражения">
        <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Matching Time with Tense
          </h3>
        </div>
      </Section>

      <Section title="Exercise: Choose the Correct Tense">
        <div className="space-y-3">
          {[
            "I _____ (visit) London last year.",
            "She _____ (study) English every day.",
            "They _____ (watch) TV right now.",
            "We _____ (go) to Paris next month.",
            "He _____ (work) here since 2020.",
            "I _____ (never/be) to Japan.",
            "_____ you _____ (see) that movie yesterday?",
            "She _____ (cook) dinner at the moment.",
          ].map((sentence, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {sentence}
              </p>
              <input
                type="text"
                value={answers[`tense${idx}`] || ""}
                onChange={(e) => handleChange(`tense${idx}`, e.target.value)}
                placeholder="Введите правильную форму глагола..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 5: Phrasal Verbs Review
function Step5() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Phrasal Verbs — Фразовые глаголы">
        <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-orange-900 mb-3">
            Common Phrasal Verbs
          </h3>
        </div>
      </Section>

      <Section title="Exercise 1: Match the Meanings">
        <div className="space-y-3">
          {[
            { phrasal: "wake up", meaning: "проснуться" },
            { phrasal: "give up", meaning: "сдаться" },
            { phrasal: "look for", meaning: "искать" },
            { phrasal: "turn on", meaning: "включить" },
            { phrasal: "turn off", meaning: "выключить" },
            { phrasal: "take off", meaning: "снять (одежду)" },
            { phrasal: "put on", meaning: "надеть" },
            { phrasal: "look after", meaning: "заботиться о" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {item.phrasal} =
              </p>
              <input
                type="text"
                value={answers[`phrasal${idx}`] || ""}
                onChange={(e) => handleChange(`phrasal${idx}`, e.target.value)}
                placeholder="Введите перевод..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Complete the Sentences">
        <div className="space-y-3">
          {[
            "I _____ at 7 AM every day. (wake up)",
            "Can you _____ the lights? It's dark. (turn on)",
            "She's _____ her keys. (look for)",
            "Don't _____! You can do it! (give up)",
            "I need to _____ my jacket. It's cold. (put on)",
          ].map((sentence, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {sentence}
              </p>
              <input
                type="text"
                value={answers[`phrasalsen${idx}`] || ""}
                onChange={(e) =>
                  handleChange(`phrasalsen${idx}`, e.target.value)
                }
                placeholder="Введите фразовый глагол..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 6: Questions & Answers
function Step6() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Questions — Вопросы">
        <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Asking Questions Correctly
          </h3>
        </div>
      </Section>

      <Section title="Exercise 1: Make Questions">
        <div className="space-y-3">
          {[
            { statement: "She lives in London.", wh: "Where" },
            { statement: "They work at a hospital.", wh: "Where" },
            { statement: "He studies English.", wh: "What" },
            { statement: "I go to bed at 11 PM.", wh: "What time" },
            { statement: "She is a teacher.", wh: "What" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {item.statement}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Make a question with: {item.wh}
              </p>
              <input
                type="text"
                value={answers[`question${idx}`] || ""}
                onChange={(e) => handleChange(`question${idx}`, e.target.value)}
                placeholder="Напишите вопрос..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Answer the Questions">
        <div className="space-y-3">
          {[
            "What's your name?",
            "Where do you live?",
            "What do you do?",
            "Do you speak English?",
            "What are your hobbies?",
          ].map((question, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {question}
              </p>
              <input
                type="text"
                value={answers[`answer${idx}`] || ""}
                onChange={(e) => handleChange(`answer${idx}`, e.target.value)}
                placeholder="Напишите ваш ответ..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 7: Adjectives & Comparisons
function Step7() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Adjectives & Comparisons — Прилагательные и сравнения">
        <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">
            Describing and Comparing
          </h3>
        </div>
      </Section>

      <Section title="Exercise 1: Comparative Form">
        <div className="space-y-3">
          {[
            "big",
            "small",
            "expensive",
            "good",
            "bad",
            "hot",
            "beautiful",
            "interesting",
          ].map((adj, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {adj} →
              </p>
              <input
                type="text"
                value={answers[`comp${idx}`] || ""}
                onChange={(e) => handleChange(`comp${idx}`, e.target.value)}
                placeholder="Введите сравнительную форму..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Complete the Sentences">
        <div className="space-y-3">
          {[
            "My house is _____ (big) than yours.",
            "This book is _____ (interesting) than that one.",
            "She is the _____ (good) student in class.",
            "Today is _____ (hot) than yesterday.",
            "This is the _____ (expensive) car in the shop.",
          ].map((sentence, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {sentence}
              </p>
              <input
                type="text"
                value={answers[`compsen${idx}`] || ""}
                onChange={(e) => handleChange(`compsen${idx}`, e.target.value)}
                placeholder="Введите форму прилагательного..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 8: Prepositions of Time & Place
function Step8() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Prepositions — Предлоги">
        <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Time & Place Prepositions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">Time:</p>
              <p>IN: months, years, seasons</p>
              <p>ON: days, dates</p>
              <p>AT: specific times</p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">Place:</p>
              <p>IN: countries, cities, rooms</p>
              <p>ON: surfaces</p>
              <p>AT: specific places</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Exercise: Choose the Correct Preposition">
        <div className="space-y-3">
          {[
            "I was born _____ 1995.",
            "The meeting is _____ Monday.",
            "She lives _____ London.",
            "The book is _____ the table.",
            "We'll meet _____ 3 PM.",
            "He's _____ home now.",
            "I go to the gym _____ the morning.",
            "The picture is _____ the wall.",
            "My birthday is _____ July 15th.",
            "I'll see you _____ the weekend.",
          ].map((sentence, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {sentence}
              </p>
              <input
                type="text"
                value={answers[`prep${idx}`] || ""}
                onChange={(e) => handleChange(`prep${idx}`, e.target.value)}
                placeholder="Введите предлог (in, on, at)..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 9: Reading Comprehension 2
function Step9() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Reading Comprehension — Понимание прочитанного">
        <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Read Carefully and Answer
          </h3>
        </div>
      </Section>

      <Section title="Text: A Trip to Italy">
        <div className="p-6 bg-white border-2 border-blue-300 rounded-lg mb-6">
          <p className="text-gray-800 leading-relaxed">
            Last summer, my family and I went on a trip to Italy. We visited
            three beautiful cities: Rome, Florence, and Venice. In Rome, we saw
            the Colosseum and the Vatican. The architecture was amazing! We also
            tried authentic Italian pizza and pasta. They were delicious!
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            After Rome, we traveled to Florence. This city is famous for its art
            and museums. We visited the Uffizi Gallery and saw many Renaissance
            paintings. My favorite was the Birth of Venus by Botticelli.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            Finally, we went to Venice. This city is built on water! We took a
            gondola ride through the canals. It was romantic and peaceful. We
            also visited St. Mark's Square and fed the pigeons.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            This trip was unforgettable. I learned a lot about Italian culture
            and history. I hope to return to Italy one day!
          </p>
        </div>
      </Section>

      <Section title="Questions:">
        <div className="space-y-4">
          {[
            "Which three cities did they visit?",
            "What did they see in Rome?",
            "What is Florence famous for?",
            "What painting did the writer like most?",
            "How did they travel through Venice?",
            "Did the writer enjoy the trip? How do you know?",
          ].map((question, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {question}
              </p>
              <textarea
                value={answers[`read${idx}`] || ""}
                onChange={(e) => handleChange(`read${idx}`, e.target.value)}
                placeholder="Напишите ваш ответ..."
                rows={2}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 10: Dialogue Practice
function Step10() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Dialogue Practice — Практика диалогов">
        <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">
            Complete the Conversations
          </h3>
        </div>
      </Section>

      <Section title="Dialogue 1: At a Restaurant">
        <div className="p-5 bg-white border-2 border-green-300 rounded-lg">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-900">
                Waiter: Good evening! Are you ready to order?
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">You:</p>
              <textarea
                value={answers.dial1_1 || ""}
                onChange={(e) => handleChange("dial1_1", e.target.value)}
                placeholder="Напишите ваш ответ..."
                rows={2}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <p className="font-bold text-gray-900">
                Waiter: What would you like to drink?
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">You:</p>
              <textarea
                value={answers.dial1_2 || ""}
                onChange={(e) => handleChange("dial1_2", e.target.value)}
                placeholder="Напишите ваш ответ..."
                rows={2}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <p className="font-bold text-gray-900">
                Waiter: Would you like dessert?
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">You:</p>
              <textarea
                value={answers.dial1_3 || ""}
                onChange={(e) => handleChange("dial1_3", e.target.value)}
                placeholder="Напишите ваш ответ..."
                rows={2}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Dialogue 2: Shopping">
        <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-gray-900">
                Shop Assistant: Can I help you?
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">You:</p>
              <textarea
                value={answers.dial2_1 || ""}
                onChange={(e) => handleChange("dial2_1", e.target.value)}
                placeholder="Напишите ваш ответ..."
                rows={2}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <p className="font-bold text-gray-900">
                Shop Assistant: What size do you need?
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">You:</p>
              <textarea
                value={answers.dial2_2 || ""}
                onChange={(e) => handleChange("dial2_2", e.target.value)}
                placeholder="Напишите ваш ответ..."
                rows={2}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 11: Sentence Transformation
function Step11() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Sentence Transformation — Трансформация предложений">
        <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Change the Sentences
          </h3>
        </div>
      </Section>

      <Section title="Exercise 1: Positive → Negative">
        <div className="space-y-3">
          {[
            "I like coffee.",
            "She works here.",
            "They are students.",
            "He can swim.",
            "We went to the party.",
          ].map((sentence, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {sentence}
              </p>
              <input
                type="text"
                value={answers[`neg${idx}`] || ""}
                onChange={(e) => handleChange(`neg${idx}`, e.target.value)}
                placeholder="Напишите отрицательное предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Statement → Question">
        <div className="space-y-3">
          {[
            "She lives in Paris.",
            "They like pizza.",
            "He is a doctor.",
            "You can speak English.",
            "She went to school yesterday.",
          ].map((sentence, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {sentence}
              </p>
              <input
                type="text"
                value={answers[`quest${idx}`] || ""}
                onChange={(e) => handleChange(`quest${idx}`, e.target.value)}
                placeholder="Напишите вопрос..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 12: Creative Writing
function Step12() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Creative Writing — Творческое письмо">
        <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-orange-900 mb-3">
            Express Yourself!
          </h3>
        </div>
      </Section>

      <Section title="Task 1: Write a Letter to a Friend">
        <div className="p-5 bg-white border-2 border-orange-300 rounded-lg">
          <p className="text-gray-700 mb-4">
            Write a letter to your friend about:
          </p>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• What you've been doing recently</li>
            <li>• Your plans for the future</li>
            <li>• Ask them some questions</li>
            <li>• Invite them to do something together</li>
          </ul>
          <textarea
            value={answers.letter || ""}
            onChange={(e) => handleChange("letter", e.target.value)}
            placeholder="Dear [Friend's name], ..."
            rows={12}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </Section>

      <Section title="Task 2: Describe Your Ideal Day">
        <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
          <p className="text-gray-700 mb-4">
            Describe your perfect day from morning to evening:
          </p>
          <textarea
            value={answers.idealday || ""}
            onChange={(e) => handleChange("idealday", e.target.value)}
            placeholder="My ideal day would start with..."
            rows={10}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </Section>
    </div>
  );
}

// Step 13: Common Mistakes
function Step13() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Common Mistakes — Распространённые ошибки">
        <div className="bg-red-50 border-2 border-red-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-red-900 mb-3">
            Learn from These Mistakes!
          </h3>
        </div>
      </Section>

      <Section title="Find and Correct the Mistakes">
        <div className="space-y-3">
          {[
            "I am agree with you.",
            "She don't like coffee.",
            "He go to school every day.",
            "I have 25 years old.",
            "She is more tall than me.",
            "I am living in Moscow since 2020.",
            "He can to swim.",
            "I will to help you.",
            "She very beautiful.",
            "I am boring. (you mean 'bored')",
          ].map((sentence, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-red-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. ❌ {sentence}
              </p>
              <input
                type="text"
                value={answers[`mistake${idx}`] || ""}
                onChange={(e) => handleChange(`mistake${idx}`, e.target.value)}
                placeholder="Напишите правильный вариант..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 14: Test Strategies
function Step14() {
  return (
    <div className="space-y-8">
      <Section title="Test Strategies — Стратегии для теста">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            How to Succeed in Your Test
          </h3>
        </div>
      </Section>

      <Section title="Before the Test">
        <div className="p-5 bg-green-50 border-2 border-green-300 rounded-lg">
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <div>
                <p className="font-bold">Review all topics</p>
                <p className="text-sm text-gray-600">
                  Go through grammar rules, vocabulary, and key expressions
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <div>
                <p className="font-bold">Get enough sleep</p>
                <p className="text-sm text-gray-600">
                  Rest well the night before the test
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <div>
                <p className="font-bold">Prepare materials</p>
                <p className="text-sm text-gray-600">
                  Have everything you need ready
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <Section title="During the Test">
        <div className="p-5 bg-blue-50 border-2 border-blue-300 rounded-lg">
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">✓</span>
              <div>
                <p className="font-bold">Read instructions carefully</p>
                <p className="text-sm text-gray-600">
                  Make sure you understand what to do
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">✓</span>
              <div>
                <p className="font-bold">Manage your time</p>
                <p className="text-sm text-gray-600">
                  Don't spend too long on one question
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">✓</span>
              <div>
                <p className="font-bold">Answer easy questions first</p>
                <p className="text-sm text-gray-600">
                  Build confidence and save time
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">✓</span>
              <div>
                <p className="font-bold">Check your answers</p>
                <p className="text-sm text-gray-600">
                  Review before submitting
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Common Test Question Types">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 mb-2">Multiple Choice</p>
            <p className="text-sm text-gray-700">
              Eliminate wrong answers first, then choose the best option
            </p>
          </div>
          <div className="p-4 bg-white border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 mb-2">Fill in the Blanks</p>
            <p className="text-sm text-gray-700">
              Read the whole sentence first, check grammar rules
            </p>
          </div>
          <div className="p-4 bg-white border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 mb-2">
              Reading Comprehension
            </p>
            <p className="text-sm text-gray-700">
              Read questions first, then scan the text for answers
            </p>
          </div>
          <div className="p-4 bg-white border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 mb-2">Writing</p>
            <p className="text-sm text-gray-700">
              Plan first, check spelling and grammar after writing
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 15: Review 2 Complete
function Step15() {
  return (
    <div className="space-y-8">
      <Section>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 p-8 rounded-xl text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold text-purple-900 mb-4">
            Review 2 Complete!
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Поздравляем! Вы завершили все повторения и готовы к финальному
            тесту. Вы проделали огромную работу!
          </p>
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white rounded-full font-semibold text-lg">
            <span>✓</span>
            <span>Review 2 завершено</span>
          </div>
        </div>
      </Section>

      <Section title="What You've Accomplished:">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-blue-50 rounded-lg">
            <p className="font-bold text-blue-900 mb-3">✓ Advanced Skills:</p>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• Phrasal verbs</li>
              <li>• Complex sentences</li>
              <li>• Comparisons</li>
              <li>• Prepositions</li>
              <li>• Question formation</li>
            </ul>
          </div>

          <div className="p-5 bg-green-50 rounded-lg">
            <p className="font-bold text-green-900 mb-3">✓ Practical Skills:</p>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• Reading comprehension</li>
              <li>• Dialogue writing</li>
              <li>• Creative writing</li>
              <li>• Error correction</li>
              <li>• Test strategies</li>
            </ul>
          </div>

          <div className="p-5 bg-purple-50 rounded-lg">
            <p className="font-bold text-purple-900 mb-3">✓ Vocabulary:</p>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• Technology</li>
              <li>• Work & Jobs</li>
              <li>• All topic areas</li>
            </ul>
          </div>

          <div className="p-5 bg-orange-50 rounded-lg">
            <p className="font-bold text-orange-900 mb-3">✓ Test Ready:</p>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• Test strategies</li>
              <li>• Common mistakes</li>
              <li>• Time management</li>
              <li>• Confidence building</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 p-6 rounded-xl text-center">
          <p className="font-bold text-2xl text-green-900 mb-3">
            🎯 Ready for the Final Test!
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Переходите к финальному тесту, чтобы проверить свои знания!
          </p>
          <p className="text-sm text-gray-600">Вы готовы! Удачи! 🍀</p>
        </div>
      </Section>
    </div>
  );
}
