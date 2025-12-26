"use client";

import { Section } from "@/components/ui/Section";
import { useState } from "react";

type Props = { step: number };

export default function Review1({ step }: Props) {
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

// Step 1: Review Introduction
function Step1() {
  return (
    <div className="space-y-8">
      <Section title="🔄 Review 1 — Повторение 1">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-400 p-8 rounded-xl mb-6">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            Let's Review Everything!
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            В этом разделе мы повторим все основные темы A1 уровня. Это ваш шанс
            закрепить знания и подготовиться к финальному тесту!
          </p>
        </div>
      </Section>

      <Section title="What We'll Review — Что мы повторим">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-xl text-blue-900 mb-3">📝 Grammar</p>
            <ul className="space-y-2 text-gray-800">
              <li>• Nouns (singular/plural)</li>
              <li>• Articles (a/an/the)</li>
              <li>• Pronouns (I, you, he, she)</li>
              <li>• To be (am/is/are)</li>
              <li>• Present Simple</li>
              <li>• Present Continuous</li>
              <li>• Past Simple</li>
              <li>• Future (will/going to)</li>
            </ul>
          </div>

          <div className="p-5 bg-green-50 border-2 border-green-300 rounded-lg">
            <p className="font-bold text-xl text-green-900 mb-3">
              💬 Vocabulary
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• Family & Relationships</li>
              <li>• Weather & Seasons</li>
              <li>• Shopping & Money</li>
              <li>• Health & Body</li>
              <li>• Technology & Gadgets</li>
              <li>• Work & Jobs</li>
              <li>• Travel & Transport</li>
              <li>• Food & Drinks</li>
            </ul>
          </div>

          <div className="p-5 bg-orange-50 border-2 border-orange-300 rounded-lg">
            <p className="font-bold text-xl text-orange-900 mb-3">
              🔗 Conjunctions
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• AND (соединение)</li>
              <li>• BUT (контраст)</li>
              <li>• OR (выбор)</li>
              <li>• SO (результат)</li>
              <li>• BECAUSE (причина)</li>
            </ul>
          </div>

          <div className="p-5 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-xl text-purple-900 mb-3">📖 Skills</p>
            <ul className="space-y-2 text-gray-800">
              <li>• Reading comprehension</li>
              <li>• Writing short texts</li>
              <li>• Telling stories</li>
              <li>• Describing experiences</li>
              <li>• Making plans</li>
              <li>• Asking questions</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 p-6 rounded-xl">
          <p className="font-bold text-xl text-yellow-900 mb-3">
            📌 How This Review Works
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>✓ Each page focuses on a specific topic</li>
            <li>✓ Practice exercises to test your knowledge</li>
            <li>✓ Interactive activities</li>
            <li>✓ Step by step preparation for the final test</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

// Step 2: Nouns & Articles Review
function Step2() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Nouns & Articles — Существительные и артикли">
        <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Quick Recap</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-white rounded">
              <p className="font-bold text-blue-900 mb-2">Nouns:</p>
              <p>Singular: cat, dog, book</p>
              <p>Plural: cats, dogs, books</p>
              <p>Irregular: child → children</p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-bold text-blue-900 mb-2">Articles:</p>
              <p>A/AN: first mention, singular</p>
              <p>THE: specific, mentioned before</p>
              <p>No article: plural/uncountable general</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Exercise 1: Singular → Plural">
        <div className="space-y-3">
          {["child", "woman", "tooth", "person", "foot", "mouse"].map(
            (word, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-gray-300 rounded-lg"
              >
                <p className="text-gray-900 mb-2">
                  {idx + 1}. {word} →
                </p>
                <input
                  type="text"
                  value={answers[`plural${idx}`] || ""}
                  onChange={(e) => handleChange(`plural${idx}`, e.target.value)}
                  placeholder="Введите форму множественного числа..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )
          )}
        </div>
      </Section>

      <Section title="Exercise 2: Choose A, AN, or THE">
        <div className="space-y-3">
          {[
            "I saw ___ elephant at the zoo.",
            "___ sun is shining today.",
            "She has ___ dog and ___ cat.",
            "Can you close ___ window?",
            "He is ___ engineer.",
            "I need ___ umbrella.",
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
                value={answers[`article${idx}`] || ""}
                onChange={(e) => handleChange(`article${idx}`, e.target.value)}
                placeholder="Введите a, an, the или - (no article)..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 3: Pronouns & To Be Review
function Step3() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Pronouns & To Be — Местоимения и глагол TO BE">
        <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">Quick Recap</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">Subject Pronouns:</p>
              <p>I, you, he, she, it, we, they</p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">To Be:</p>
              <p>I am, you are, he/she/it is</p>
              <p>we are, you are, they are</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Exercise 1: Complete with AM, IS, or ARE">
        <div className="space-y-3">
          {[
            "I ___ a student.",
            "She ___ my sister.",
            "They ___ from Spain.",
            "We ___ happy.",
            "He ___ a doctor.",
            "You ___ very kind.",
            "It ___ a beautiful day.",
            "The books ___ on the table.",
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
                value={answers[`tobe${idx}`] || ""}
                onChange={(e) => handleChange(`tobe${idx}`, e.target.value)}
                placeholder="Введите am, is или are..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Replace with Pronouns">
        <div className="space-y-3">
          {[
            { text: "Maria is a teacher.", hint: "She" },
            { text: "Tom and I are friends.", hint: "We" },
            { text: "The cat is sleeping.", hint: "It" },
            { text: "My parents are doctors.", hint: "They" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {item.text}
              </p>
              <input
                type="text"
                value={answers[`pronoun${idx}`] || ""}
                onChange={(e) => handleChange(`pronoun${idx}`, e.target.value)}
                placeholder="Перепишите предложение с местоимением..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 4: Present Simple Review
function Step4() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Present Simple — Настоящее простое время">
        <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Quick Recap</h3>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">Positive:</p>
              <p>I/you/we/they work</p>
              <p>
                He/she/it work<b>s</b>
              </p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">Negative:</p>
              <p>
                I/you/we/they <b>don't</b> work
              </p>
              <p>
                He/she/it <b>doesn't</b> work
              </p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">Questions:</p>
              <p>
                <b>Do</b> I/you/we/they work?
              </p>
              <p>
                <b>Does</b> he/she/it work?
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Exercise 1: Complete the Sentences">
        <div className="space-y-3">
          {[
            { verb: "work", subject: "She", type: "+" },
            { verb: "like", subject: "They", type: "-" },
            { verb: "play", subject: "He", type: "+" },
            { verb: "study", subject: "We", type: "-" },
            { verb: "watch", subject: "I", type: "+" },
            { verb: "go", subject: "She", type: "-" },
            { verb: "live", subject: "You", type: "?" },
            { verb: "speak", subject: "He", type: "?" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {item.subject} _____ ({item.verb}) [
                {item.type === "+"
                  ? "positive"
                  : item.type === "-"
                  ? "negative"
                  : "question"}
                ]
              </p>
              <input
                type="text"
                value={answers[`ps${idx}`] || ""}
                onChange={(e) => handleChange(`ps${idx}`, e.target.value)}
                placeholder="Введите форму глагола..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 5: Present Continuous Review
function Step5() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Present Continuous — Настоящее длительное">
        <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Quick Recap
          </h3>
          <div className="p-4 bg-white rounded">
            <p className="font-bold mb-2">Formula:</p>
            <p className="text-lg">
              Subject + <b>am/is/are</b> + verb<b>-ing</b>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              I am working, She is studying, They are playing
            </p>
          </div>
        </div>
      </Section>

      <Section title="Exercise 1: Write the -ING form">
        <div className="space-y-3">
          {[
            "play",
            "study",
            "run",
            "sit",
            "swim",
            "write",
            "sleep",
            "make",
          ].map((verb, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {verb} →
              </p>
              <input
                type="text"
                value={answers[`ing${idx}`] || ""}
                onChange={(e) => handleChange(`ing${idx}`, e.target.value)}
                placeholder="Введите форму с -ing..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Complete the Sentences">
        <div className="space-y-3">
          {[
            "I _____ (read) a book now.",
            "She _____ (not/watch) TV.",
            "They _____ (play) football.",
            "_____ you _____ (study)?",
            "He _____ (sleep) at the moment.",
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
                value={answers[`pc${idx}`] || ""}
                onChange={(e) => handleChange(`pc${idx}`, e.target.value)}
                placeholder="Введите форму Present Continuous..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 6: Past Simple Review
function Step6() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Past Simple — Простое прошедшее">
        <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-orange-900 mb-3">
            Quick Recap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">Regular verbs:</p>
              <p>
                work → work<b>ed</b>
              </p>
              <p>
                play → play<b>ed</b>
              </p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">Irregular verbs:</p>
              <p>go → went</p>
              <p>see → saw</p>
              <p>have → had</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Exercise 1: Write the Past Form">
        <div className="space-y-3">
          {[
            { verb: "go", hint: "irregular" },
            { verb: "watch", hint: "regular" },
            { verb: "make", hint: "irregular" },
            { verb: "study", hint: "regular" },
            { verb: "buy", hint: "irregular" },
            { verb: "visit", hint: "regular" },
            { verb: "eat", hint: "irregular" },
            { verb: "work", hint: "regular" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {item.verb} → ({item.hint})
              </p>
              <input
                type="text"
                value={answers[`past${idx}`] || ""}
                onChange={(e) => handleChange(`past${idx}`, e.target.value)}
                placeholder="Введите форму прошедшего времени..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Complete the Sentences">
        <div className="space-y-3">
          {[
            "I _____ (visit) Paris last year.",
            "She _____ (not/go) to school yesterday.",
            "They _____ (buy) a new car.",
            "_____ you _____ (see) that movie?",
            "We _____ (have) dinner at 7 PM.",
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
                value={answers[`pastsen${idx}`] || ""}
                onChange={(e) => handleChange(`pastsen${idx}`, e.target.value)}
                placeholder="Введите форму Past Simple..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 7: Future Forms Review
function Step7() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Future: Will & Going To">
        <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">Quick Recap</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">WILL:</p>
              <p>Predictions, promises, spontaneous decisions</p>
              <p className="text-xs text-gray-600 mt-1">I will help you.</p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-bold mb-2">GOING TO:</p>
              <p>Plans, intentions, predictions with evidence</p>
              <p className="text-xs text-gray-600 mt-1">I'm going to study.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Exercise 1: Choose WILL or GOING TO">
        <div className="space-y-3">
          {[
            "I _____ visit my grandmother tomorrow. (plan)",
            "It's cold. I _____ close the window. (spontaneous)",
            "They _____ get married next year. (plan)",
            "I think it _____ rain. (prediction)",
            "She _____ study medicine. (intention)",
            "Wait! I _____ help you. (spontaneous)",
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
                value={answers[`future${idx}`] || ""}
                onChange={(e) => handleChange(`future${idx}`, e.target.value)}
                placeholder="Введите will или going to..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 8: Conjunctions Review
function Step8() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Conjunctions — Союзы">
        <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Quick Recap
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div className="p-3 bg-white rounded text-center">
              <p className="font-bold">AND</p>
              <p className="text-xs text-gray-600">добавление</p>
            </div>
            <div className="p-3 bg-white rounded text-center">
              <p className="font-bold">BUT</p>
              <p className="text-xs text-gray-600">контраст</p>
            </div>
            <div className="p-3 bg-white rounded text-center">
              <p className="font-bold">OR</p>
              <p className="text-xs text-gray-600">выбор</p>
            </div>
            <div className="p-3 bg-white rounded text-center">
              <p className="font-bold">SO</p>
              <p className="text-xs text-gray-600">результат</p>
            </div>
            <div className="p-3 bg-white rounded text-center">
              <p className="font-bold">BECAUSE</p>
              <p className="text-xs text-gray-600">причина</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Exercise: Complete with the Right Conjunction">
        <div className="space-y-3">
          {[
            "I like coffee _____ tea.",
            "She's tired _____ she worked all night.",
            "He's smart, _____ he's lazy.",
            "Do you want pizza _____ pasta?",
            "I was hungry, _____ I made a sandwich.",
            "We can't go out _____ it's raining.",
            "I have a cat _____ a dog.",
            "It's expensive, _____ I'll buy it.",
            "She studied hard, _____ she passed the exam.",
            "Tea _____ coffee?",
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
                value={answers[`conj${idx}`] || ""}
                onChange={(e) => handleChange(`conj${idx}`, e.target.value)}
                placeholder="Введите союз..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 9: Vocabulary Review - Family & Daily Life
function Step9() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Vocabulary: Family & Daily Life">
        <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Let's Review Key Words
          </h3>
        </div>
      </Section>

      <Section title="Exercise 1: Translate to English">
        <div className="space-y-3">
          {[
            "Брат",
            "Сестра",
            "Родители",
            "Бабушка",
            "Дедушка",
            "Дядя",
            "Тётя",
            "Двоюродный брат/сестра",
          ].map((word, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {word} =
              </p>
              <input
                type="text"
                value={answers[`family${idx}`] || ""}
                onChange={(e) => handleChange(`family${idx}`, e.target.value)}
                placeholder="Введите перевод на английский..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Daily Routines">
        <div className="space-y-3">
          {[
            "wake up",
            "get dressed",
            "have breakfast",
            "go to work",
            "come back home",
            "go to bed",
          ].map((phrase, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. Translate "{phrase}" to Russian:
              </p>
              <input
                type="text"
                value={answers[`daily${idx}`] || ""}
                onChange={(e) => handleChange(`daily${idx}`, e.target.value)}
                placeholder="Введите перевод на русский..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 10: Vocabulary Review - Weather & Seasons
function Step10() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Vocabulary: Weather & Seasons">
        <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">
            Weather & Seasons Words
          </h3>
        </div>
      </Section>

      <Section title="Exercise 1: Match the Weather">
        <div className="space-y-3">
          {[
            "Солнечно",
            "Дождливо",
            "Холодно",
            "Жарко",
            "Ветрено",
            "Снежно",
            "Облачно",
            "Туманно",
          ].map((word, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {word} =
              </p>
              <input
                type="text"
                value={answers[`weather${idx}`] || ""}
                onChange={(e) => handleChange(`weather${idx}`, e.target.value)}
                placeholder="Введите перевод на английский..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Seasons">
        <div className="space-y-3">
          {["Весна", "Лето", "Осень", "Зима"].map((season, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {season} =
              </p>
              <input
                type="text"
                value={answers[`season${idx}`] || ""}
                onChange={(e) => handleChange(`season${idx}`, e.target.value)}
                placeholder="Введите перевод на английский..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 11: Vocabulary Review - Shopping & Health
function Step11() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Vocabulary: Shopping & Health">
        <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-orange-900 mb-3">
            Shopping & Health Vocabulary
          </h3>
        </div>
      </Section>

      <Section title="Exercise 1: Shopping Vocabulary">
        <div className="space-y-3">
          {["Цена", "Покупать", "Продавать", "Скидка", "Дорого", "Дёшево"].map(
            (word, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-gray-300 rounded-lg"
              >
                <p className="text-gray-900 mb-2">
                  {idx + 1}. {word} =
                </p>
                <input
                  type="text"
                  value={answers[`shop${idx}`] || ""}
                  onChange={(e) => handleChange(`shop${idx}`, e.target.value)}
                  placeholder="Введите перевод на английский..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                />
              </div>
            )
          )}
        </div>
      </Section>

      <Section title="Exercise 2: Health Vocabulary">
        <div className="space-y-3">
          {[
            "Врач",
            "Болезнь",
            "Лекарство",
            "Головная боль",
            "Температура",
            "Здоровый",
          ].map((word, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {word} =
              </p>
              <input
                type="text"
                value={answers[`health${idx}`] || ""}
                onChange={(e) => handleChange(`health${idx}`, e.target.value)}
                placeholder="Введите перевод на английский..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 12: Reading Comprehension Practice
function Step12() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Reading Comprehension — Понимание прочитанного">
        <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Read and Answer
          </h3>
        </div>
      </Section>

      <Section title="Text: My Daily Routine">
        <div className="p-6 bg-white border-2 border-blue-300 rounded-lg mb-6">
          <p className="text-gray-800 leading-relaxed">
            My name is Alex. I'm a student. Every day, I wake up at 7 AM. I have
            breakfast with my family. We usually eat toast and drink coffee.
            Then I go to university by bus. My classes start at 9 AM and finish
            at 3 PM. After classes, I go to the gym because I like to stay
            healthy. I usually exercise for one hour. Then I go back home and do
            my homework. In the evening, I watch TV or read books. I go to bed
            at 11 PM.
          </p>
        </div>
      </Section>

      <Section title="Questions:">
        <div className="space-y-4">
          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              1. What time does Alex wake up?
            </p>
            <input
              type="text"
              value={answers.q1 || ""}
              onChange={(e) => handleChange("q1", e.target.value)}
              placeholder="Введите ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              2. How does he go to university?
            </p>
            <input
              type="text"
              value={answers.q2 || ""}
              onChange={(e) => handleChange("q2", e.target.value)}
              placeholder="Введите ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">3. Why does he go to the gym?</p>
            <input
              type="text"
              value={answers.q3 || ""}
              onChange={(e) => handleChange("q3", e.target.value)}
              placeholder="Введите ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              4. What time does he go to bed?
            </p>
            <input
              type="text"
              value={answers.q4 || ""}
              onChange={(e) => handleChange("q4", e.target.value)}
              placeholder="Введите ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <p className="text-gray-900 mb-2">
              5. What does he do in the evening?
            </p>
            <input
              type="text"
              value={answers.q5 || ""}
              onChange={(e) => handleChange("q5", e.target.value)}
              placeholder="Введите ваш ответ..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 13: Writing Practice
function Step13() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Writing Practice — Практика письма">
        <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Write Your Own Texts
          </h3>
        </div>
      </Section>

      <Section title="Task 1: Describe Your Daily Routine">
        <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
          <p className="text-gray-700 mb-4">
            Write about your typical day. Include:
          </p>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• What time you wake up</li>
            <li>• What you do in the morning</li>
            <li>• Your work/study routine</li>
            <li>• Your evening activities</li>
            <li>• What time you go to bed</li>
          </ul>
          <textarea
            value={answers.routine || ""}
            onChange={(e) => handleChange("routine", e.target.value)}
            placeholder="Write your daily routine..."
            rows={10}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </Section>

      <Section title="Task 2: Tell a Story">
        <div className="p-5 bg-white border-2 border-purple-300 rounded-lg">
          <p className="text-gray-700 mb-4">
            Write about an interesting experience from your past:
          </p>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• When and where did it happen?</li>
            <li>• What happened?</li>
            <li>• How did you feel?</li>
            <li>• What did you learn?</li>
          </ul>
          <textarea
            value={answers.story || ""}
            onChange={(e) => handleChange("story", e.target.value)}
            placeholder="Write your story..."
            rows={10}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </Section>
    </div>
  );
}

// Step 14: Mixed Practice
function Step14() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Mixed Practice — Смешанная практика">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">
            Test All Your Knowledge!
          </h3>
        </div>
      </Section>

      <Section title="Complete the Text">
        <div className="p-5 bg-white border-2 border-blue-300 rounded-lg mb-6">
          <p className="text-gray-800 leading-relaxed mb-4">
            Yesterday, I _____ (go) to the cinema with my friend. We _____
            (watch) a comedy. It _____ (be) very funny! After the movie, we
            _____ (have) dinner at a restaurant. The food _____ (be) delicious.
            I _____ (enjoy) the evening very much.
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Fill in the blanks with the correct verb forms:
          </p>
          <div className="space-y-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i}>
                <label className="text-sm font-semibold text-gray-700">
                  Blank {i + 1}:
                </label>
                <input
                  type="text"
                  value={answers[`blank${i + 1}`] || ""}
                  onChange={(e) =>
                    handleChange(`blank${i + 1}`, e.target.value)
                  }
                  placeholder={`Enter verb form...`}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mt-1"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Correct the Mistakes">
        <div className="space-y-3">
          {[
            "She don't like coffee.",
            "I am going to cinema yesterday.",
            "He work in a hospital.",
            "They is my friends.",
            "I have visited Paris last year.",
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
                value={answers[`correct${idx}`] || ""}
                onChange={(e) => handleChange(`correct${idx}`, e.target.value)}
                placeholder="Исправьте предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 15: Review Complete
function Step15() {
  return (
    <div className="space-y-8">
      <Section>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 p-8 rounded-xl text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold text-green-900 mb-4">
            Review 1 Complete!
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Отличная работа! Вы повторили все основные темы A1 уровня. Теперь
            переходите к следующему блоку повторения!
          </p>
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-lg">
            <span>✓</span>
            <span>Review 1 завершено</span>
          </div>
        </div>
      </Section>

      <Section title="What You Reviewed:">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-blue-50 rounded-lg">
            <p className="font-bold text-blue-900 mb-3">✓ Grammar:</p>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• Nouns & Articles</li>
              <li>• Pronouns & To Be</li>
              <li>• Present Simple</li>
              <li>• Present Continuous</li>
              <li>• Past Simple</li>
              <li>• Future (will/going to)</li>
              <li>• Conjunctions</li>
            </ul>
          </div>

          <div className="p-5 bg-green-50 rounded-lg">
            <p className="font-bold text-green-900 mb-3">✓ Skills:</p>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• Vocabulary practice</li>
              <li>• Reading comprehension</li>
              <li>• Writing practice</li>
              <li>• Error correction</li>
              <li>• Mixed exercises</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl text-center">
          <p className="font-bold text-xl text-purple-900 mb-2">Next Step:</p>
          <p className="text-gray-700 text-lg">
            Переходите к <b>Review 2</b> для дополнительной практики!
          </p>
        </div>
      </Section>
    </div>
  );
}
