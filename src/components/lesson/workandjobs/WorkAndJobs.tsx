"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function WorkAndJobs({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение + Professions ===== */
function Step1() {
  return (
    <>
      <UiSection title="Work and Jobs: Office, Teacher, Student, Science">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💼</div>
            <div>
              <p className="text-lg font-bold text-indigo-900 mb-3">
                Работа и профессии
              </p>
              <p className="text-zinc-800 leading-relaxed">
                В этой теме мы изучим vocabulary о работе, образовании и
                профессиях.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Common Professions — Распространённые профессии
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { job: "teacher", transcr: "/ˈtiːtʃə/", translation: "учитель" },
              {
                job: "student",
                transcr: "/ˈstjuːdnt/",
                translation: "студент",
              },
              { job: "doctor", transcr: "/ˈdɒktə/", translation: "доктор" },
              { job: "nurse", transcr: "/nɜːs/", translation: "медсестра" },
              {
                job: "engineer",
                transcr: "/ˌendʒɪˈnɪə/",
                translation: "инженер",
              },
              {
                job: "scientist",
                transcr: "/ˈsaɪəntɪst/",
                translation: "учёный",
              },
              {
                job: "programmer",
                transcr: "/ˈprəʊɡræmə/",
                translation: "программист",
              },
              { job: "lawyer", transcr: "/ˈlɔːjə/", translation: "юрист" },
              {
                job: "manager",
                transcr: "/ˈmænɪdʒə/",
                translation: "менеджер",
              },
              {
                job: "accountant",
                transcr: "/əˈkaʊntənt/",
                translation: "бухгалтер",
              },
              {
                job: "journalist",
                transcr: "/ˈdʒɜːnəlɪst/",
                translation: "журналист",
              },
              { job: "artist", transcr: "/ˈɑːtɪst/", translation: "художник" },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="font-bold text-indigo-900 text-lg">{item.job}</p>
                <p className="text-xs text-indigo-600 mb-1">{item.transcr}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Office Jobs — Офисные профессии
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              "office worker — офисный работник",
              "secretary — секретарь",
              "receptionist — администратор",
              "IT specialist — IT-специалист",
              "HR manager — HR-менеджер",
              "sales manager — менеджер по продажам",
              "marketing manager — маркетолог",
              "financial analyst — финансовый аналитик",
              "project manager — проект-менеджер",
            ].map((job, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-zinc-900">{job}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* Продолжение... */

/* ===== СТРАНИЦА 2: Education System ===== */
function Step2() {
  return (
    <>
      <UiSection title="Education System — Система образования">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Vocabulary об образовании и школе.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Education Vocabulary — Лексика об образовании
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                term: "compulsory education",
                translation: "обязательное образование",
              },
              { term: "secondary school", translation: "средняя школа" },
              { term: "higher education", translation: "высшее образование" },
              { term: "public school", translation: "государственная школа" },
              { term: "private school", translation: "частная школа" },
              { term: "school curriculum", translation: "школьная программа" },
              {
                term: "extracurricular activities",
                translation: "внеклассные занятия",
              },
              {
                term: "academic performance",
                translation: "академическая успеваемость",
              },
              {
                term: "classroom environment",
                translation: "обстановка в классе",
              },
              { term: "school attendance", translation: "посещаемость школы" },
              { term: "school subjects", translation: "школьные предметы" },
              { term: "report card", translation: "табель успеваемости" },
              { term: "school uniform", translation: "школьная форма" },
              {
                term: "grade point average (GPA)",
                translation: "средний балл успеваемости",
              },
              { term: "drop out of school", translation: "бросить школу" },
              { term: "school principal", translation: "директор школы" },
              { term: "school year", translation: "учебный год" },
              { term: "term paper", translation: "курсовая работа" },
              { term: "peer pressure", translation: "давление сверстников" },
              { term: "class representative", translation: "староста класса" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400"
              >
                <p className="font-bold text-blue-900">{item.term}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: School Life Phrases ===== */
function Step3() {
  return (
    <>
      <UiSection title="Common Phrases About School Life">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Фразы о школьной жизни.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Common School Phrases — Распространённые школьные фразы
          </h4>
          <div className="space-y-3">
            {[
              "Go to school — Ходить в школу",
              "Attend classes — Посещать занятия",
              "Get good grades — Получать хорошие оценки",
              "Do homework — Делать домашнее задание",
              "Hand in assignments — Сдавать задания",
              "Pass an exam — Сдать экзамен",
              "Fail a test — Провалить тест",
              "Take notes — Делать заметки",
              "Skip class — Пропустить урок",
              "Raise your hand — Поднять руку",
              "Participate in class — Участвовать в занятии",
              "Give a presentation — Делать презентацию",
              "Prepare for an exam — Готовиться к экзамену",
              "Write an essay — Написать эссе",
              "Get a scholarship — Получить стипендию",
              "Ask for help — Просить помощи",
              "Join a club — Присоединиться к кружку",
              "Do a science project — Сделать научный проект",
              "Take a field trip — Поехать на экскурсию",
              "Get a detention — Получить наказание (оставление после уроков)",
            ].map((phrase, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{phrase}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Phrasal Verbs — School & Education ===== */
function Step4() {
  return (
    <>
      <UiSection title="Phrasal Verbs — School & Education">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Фразовые глаголы для школы и образования.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Phrasal Verbs — Фразовые глаголы
          </h4>
          <div className="space-y-4">
            {[
              {
                verb: "Catch up on",
                meaning: "наверстать (упущенный материал)",
                example: "I need to catch up on my homework.",
              },
              {
                verb: "Drop out",
                meaning: "бросить (учёбу)",
                example: "He dropped out of university.",
              },
              {
                verb: "Hand in",
                meaning: "сдать (задание)",
                example: "Please hand in your essays by Friday.",
              },
              {
                verb: "Keep up with",
                meaning: "успевать (с учебной программой)",
                example: "It's hard to keep up with all the work.",
              },
              {
                verb: "Pick up",
                meaning: "подхватить, научиться (новым навыкам)",
                example: "She picked up Spanish very quickly.",
              },
              {
                verb: "Put off",
                meaning: "откладывать (на потом)",
                example: "Don't put off your homework until the last minute.",
              },
              {
                verb: "Look up to",
                meaning: "равняться на кого-то",
                example: "I really look up to my teacher.",
              },
              {
                verb: "Go over",
                meaning: "просмотреть, повторить (материал)",
                example: "Let's go over the lesson again.",
              },
              {
                verb: "Sign up for",
                meaning: "записаться на (курс, занятие)",
                example: "I signed up for a music class.",
              },
              {
                verb: "Fall behind",
                meaning: "отставать (по учёбе)",
                example: "I fell behind in maths.",
              },
              {
                verb: "Look forward to",
                meaning: "ждать с нетерпением",
                example: "I'm looking forward to the holidays.",
              },
              {
                verb: "Read up on",
                meaning: "читать о чем-то, изучать тему",
                example: "I need to read up on history.",
              },
              {
                verb: "Figure out",
                meaning: "разобраться с чем-то",
                example: "I can't figure out this math problem.",
              },
              {
                verb: "Drop by",
                meaning: "заглянуть (к учителю, в класс)",
                example: "Drop by my office if you need help.",
              },
              {
                verb: "Get into",
                meaning: "поступить (в школу, университет)",
                example: "She got into Oxford University.",
              },
              {
                verb: "Doze off",
                meaning: "задремать на уроке",
                example: "He dozed off during the lecture.",
              },
              {
                verb: "Bring up",
                meaning: "поднять вопрос, тему на уроке",
                example: "The student brought up an interesting question.",
              },
              {
                verb: "Cut out",
                meaning: "вырезать (изучаемый материал)",
                example: "Cut out the unnecessary information.",
              },
              {
                verb: "Break down",
                meaning: "разобрать на части (например, задачу)",
                example: "Let's break down this problem step by step.",
              },
              {
                verb: "Catch on",
                meaning: "понять, уловить (идею)",
                example: "He finally caught on to the concept.",
              },
              {
                verb: "Go through",
                meaning: "пройти через (тему, материал)",
                example: "We went through all the chapters.",
              },
              {
                verb: "Stay up",
                meaning: "не ложиться спать (ради учёбы)",
                example: "I stayed up all night studying.",
              },
              {
                verb: "Brush up on",
                meaning: "освежить в памяти",
                example: "I need to brush up on my English.",
              },
              {
                verb: "Get through",
                meaning: "справиться с (экзаменом)",
                example: "I hope I can get through the exam.",
              },
              {
                verb: "Take up",
                meaning: "начать заниматься (новым предметом)",
                example: "I took up French this year.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-5">
                <h5 className="text-lg font-bold text-indigo-900 mb-2">
                  {item.verb}
                </h5>
                <p className="text-sm text-zinc-800 mb-2">{item.meaning}</p>
                <p className="text-xs text-green-700 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: School Holidays ===== */
function Step5() {
  return (
    <>
      <UiSection title="School Holidays — Школьные каникулы">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Vocabulary о каникулах и отдыхе.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            School Holidays Vocabulary
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { term: "school break", translation: "школьные каникулы" },
              { term: "summer holidays", translation: "летние каникулы" },
              { term: "winter break", translation: "зимние каникулы" },
              { term: "spring break", translation: "весенние каникулы" },
              {
                term: "public holiday",
                translation: "государственный праздник",
              },
              { term: "go on vacation", translation: "отправиться в отпуск" },
              {
                term: "holiday homework",
                translation: "домашнее задание на каникулы",
              },
              {
                term: "extended break",
                translation: "продолжительный перерыв",
              },
              {
                term: "holiday activities",
                translation: "праздничные мероприятия",
              },
              { term: "family vacation", translation: "семейный отпуск" },
              { term: "holiday trip", translation: "путешествие на каникулы" },
              {
                term: "travel abroad",
                translation: "путешествовать за границу",
              },
              { term: "take a holiday", translation: "взять отпуск/каникулы" },
              { term: "go camping", translation: "поехать в поход" },
              {
                term: "visit relatives",
                translation: "навестить родственников",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-4">
                <p className="font-bold text-blue-900">{item.term}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Phrasal Verbs — School Holidays
          </h4>
          <div className="space-y-3">
            {[
              "Take off — взять выходной",
              "Get away — уехать (на каникулы)",
              "Wind down — расслабиться после напряжённого периода",
              "Look forward to (holidays) — с нетерпением ждать (каникул)",
              "Take a break — сделать перерыв",
              "Catch up on rest — наверстать отдых",
              "Go on a trip — отправиться в путешествие",
              "Meet up with friends — встретиться с друзьями",
              "Hang out — проводить время с друзьями",
              "Set off — отправиться в путь",
              "Pack up — собраться в поездку",
              "Come back from holiday — вернуться с каникул",
              "Get together — собраться с семьёй",
              "Chill out — расслабиться",
              "Stay in — оставаться дома",
              "Take up (a hobby) — заняться новым хобби на каникулах",
            ].map((phrase, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-zinc-900">{phrase}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Упражнения 1 ===== */
function Step6() {
  const exercise1: FillItem[] = [
    {
      left: "1. I need to",
      right: "in my essay tomorrow. (сдать)",
      answers: ["hand in"],
      explanation: "hand in = сдать (задание)",
    },
    {
      left: "2. She",
      right: "of university last year. (бросила)",
      answers: ["dropped out"],
      explanation: "drop out = бросить учёбу",
    },
    {
      left: "3. I must",
      right: "on my homework. (наверстать)",
      answers: ["catch up"],
      explanation: "catch up on = наверстать",
    },
    {
      left: "4. It's hard to",
      right: "with all the lessons. (успевать)",
      answers: ["keep up"],
      explanation: "keep up with = успевать",
    },
    {
      left: "5. Don't",
      right: "your homework until the last minute. (откладывай)",
      answers: ["put off"],
      explanation: "put off = откладывать",
    },
    {
      left: "6. I'm",
      right: "to the summer holidays. (жду с нетерпением)",
      answers: ["looking forward"],
      explanation: "look forward to = ждать с нетерпением",
    },
    {
      left: "7. She",
      right: "a music class. (записалась)",
      answers: ["signed up for"],
      explanation: "sign up for = записаться на",
    },
    {
      left: "8. He",
      right: "Oxford University. (поступил)",
      answers: ["got into"],
      explanation: "get into = поступить",
    },
    {
      left: "9. Let's",
      right: "the lesson again. (повторим)",
      answers: ["go over"],
      explanation: "go over = просмотреть, повторить",
    },
    {
      left: "10. I need to",
      right: "on my French. (освежить в памяти)",
      answers: ["brush up"],
      explanation: "brush up on = освежить в памяти",
    },
  ];

  return (
    <>
      <UiSection title="Упражнение 1: Phrasal Verbs">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Практикуйте фразовые глаголы.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Заполните пропуски"
        instruction="Впишите правильный phrasal verb."
        items={exercise1}
      />
    </>
  );
}

/* ===== СТРАНИЦА 7: Упражнения 2 ===== */
function Step7() {
  const exercise2: FillItem[] = [
    {
      left: "1. Students must",
      right: "classes regularly. (посещать)",
      answers: ["attend"],
      explanation: "attend classes = посещать занятия",
    },
    {
      left: "2. I need to",
      right: "for my exam. (подготовиться)",
      answers: ["prepare"],
      explanation: "prepare for an exam = готовиться к экзамену",
    },
    {
      left: "3. She always",
      right: "good grades. (получает)",
      answers: ["gets"],
      explanation: "get good grades = получать хорошие оценки",
    },
    {
      left: "4. Don't forget to",
      right: "your homework. (делать)",
      answers: ["do"],
      explanation: "do homework = делать домашнее задание",
    },
    {
      left: "5. I hope I will",
      right: "the exam. (сдам)",
      answers: ["pass"],
      explanation: "pass an exam = сдать экзамен",
    },
    {
      left: "6. You should",
      right: "notes during the lecture. (делать)",
      answers: ["take"],
      explanation: "take notes = делать заметки",
    },
    {
      left: "7. She wants to",
      right: "a scholarship. (получить)",
      answers: ["get"],
      explanation: "get a scholarship = получить стипендию",
    },
    {
      left: "8. Students should",
      right: "in class discussions. (участвовать)",
      answers: ["participate"],
      explanation: "participate in class = участвовать в занятии",
    },
    {
      left: "9. We need to",
      right: "an essay for homework. (написать)",
      answers: ["write"],
      explanation: "write an essay = написать эссе",
    },
    {
      left: "10. Don't",
      right: "class without a good reason. (пропускай)",
      answers: ["skip"],
      explanation: "skip class = пропустить урок",
    },
  ];

  return (
    <>
      <UiSection title="Упражнение 2: School Phrases">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Практикуйте школьные фразы.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Заполните пропуски"
        instruction="Впишите правильное слово."
        items={exercise2}
      />
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнения 3 — Перевод ===== */
function Step8() {
  const exercise3: FillItem[] = [
    {
      left: "1. Обязательное образование — compulsory",
      right: "",
      answers: ["education"],
      explanation: "compulsory education = обязательное образование",
    },
    {
      left: "2. Средняя школа — secondary",
      right: "",
      answers: ["school"],
      explanation: "secondary school = средняя школа",
    },
    {
      left: "3. Высшее образование — higher",
      right: "",
      answers: ["education"],
      explanation: "higher education = высшее образование",
    },
    {
      left: "4. Школьная программа — school",
      right: "",
      answers: ["curriculum"],
      explanation: "school curriculum = школьная программа",
    },
    {
      left: "5. Табель успеваемости — report",
      right: "",
      answers: ["card"],
      explanation: "report card = табель успеваемости",
    },
    {
      left: "6. Директор школы — school",
      right: "",
      answers: ["principal"],
      explanation: "school principal = директор школы",
    },
    {
      left: "7. Внеклассные занятия — extracurricular",
      right: "",
      answers: ["activities"],
      explanation: "extracurricular activities = внеклассные занятия",
    },
    {
      left: "8. Курсовая работа — term",
      right: "",
      answers: ["paper"],
      explanation: "term paper = курсовая работа",
    },
    {
      left: "9. Летние каникулы — summer",
      right: "",
      answers: ["holidays"],
      explanation: "summer holidays = летние каникулы",
    },
    {
      left: "10. Государственный праздник — public",
      right: "",
      answers: ["holiday"],
      explanation: "public holiday = государственный праздник",
    },
  ];

  return (
    <>
      <UiSection title="Упражнение 3: Перевод">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold">
            Переведите термины на английский.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Переведите"
        instruction="Впишите второе слово словосочетания."
        items={exercise3}
      />
    </>
  );
}

/* ===== СТРАНИЦА 9: Science & Research ===== */
function Step9() {
  return (
    <>
      <UiSection title="Science & Research — Наука и исследования">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Vocabulary о науке и научных исследованиях.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Science Vocabulary — Научная лексика
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { term: "scientist", translation: "учёный" },
              { term: "researcher", translation: "исследователь" },
              { term: "laboratory / lab", translation: "лаборатория" },
              { term: "experiment", translation: "эксперимент" },
              { term: "research", translation: "исследование" },
              { term: "discovery", translation: "открытие" },
              { term: "invention", translation: "изобретение" },
              { term: "theory", translation: "теория" },
              { term: "hypothesis", translation: "гипотеза" },
              { term: "evidence", translation: "доказательство" },
              { term: "data", translation: "данные" },
              { term: "analysis", translation: "анализ" },
              { term: "conclusion", translation: "заключение" },
              { term: "methodology", translation: "методология" },
              { term: "observation", translation: "наблюдение" },
              { term: "measurement", translation: "измерение" },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="font-bold text-indigo-900">{item.term}</p>
                <p className="text-sm text-zinc-800">{item.translation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Science Branches — Отрасли науки
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              "physics — физика",
              "chemistry — химия",
              "biology — биология",
              "mathematics — математика",
              "astronomy — астрономия",
              "geology — геология",
              "psychology — психология",
              "sociology — социология",
              "economics — экономика",
              "computer science — информатика",
              "engineering — инженерное дело",
              "medicine — медицина",
            ].map((subject, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-zinc-900">{subject}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Science Actions — Научные действия
          </h4>
          <div className="space-y-2">
            {[
              "conduct an experiment — проводить эксперимент",
              "do research — проводить исследование",
              "collect data — собирать данные",
              "analyze results — анализировать результаты",
              "test a hypothesis — проверять гипотезу",
              "prove a theory — доказывать теорию",
              "make a discovery — делать открытие",
              "publish findings — публиковать результаты",
              "peer review — рецензирование коллегами",
              "replicate results — воспроизводить результаты",
            ].map((action, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-zinc-900">{action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговые упражнения ===== */
function Step10() {
  const finalExercise: FillItem[] = [
    {
      left: "1. My father works as an",
      right: "in a tech company. (инженер)",
      answers: ["engineer"],
      explanation: "engineer = инженер",
    },
    {
      left: "2. She is a",
      right: "who studies biology. (учёный)",
      answers: ["scientist"],
      explanation: "scientist = учёный",
    },
    {
      left: "3. Students must",
      right: "their assignments on time. (сдавать)",
      answers: ["hand in"],
      explanation: "hand in = сдавать",
    },
    {
      left: "4. I need to",
      right: "on the material for the test. (наверстать)",
      answers: ["catch up"],
      explanation: "catch up on = наверстать",
    },
    {
      left: "5.",
      right: "education is free in our country. (Обязательное)",
      answers: ["Compulsory"],
      explanation: "Compulsory education = обязательное образование",
    },
    {
      left: "6. She got a",
      right: "to study at university. (стипендию)",
      answers: ["scholarship"],
      explanation: "scholarship = стипендия",
    },
    {
      left: "7. We're going on",
      right: "next week. (каникулы)",
      answers: ["holiday", "vacation"],
      explanation: "go on holiday/vacation = ехать на каникулы",
    },
    {
      left: "8. The",
      right: "conducted an important experiment. (исследователь)",
      answers: ["researcher"],
      explanation: "researcher = исследователь",
    },
    {
      left: "9. Don't",
      right: "your homework! (откладывай)",
      answers: ["put off"],
      explanation: "put off = откладывать",
    },
    {
      left: "10. I'm",
      right: "to the summer holidays. (жду с нетерпением)",
      answers: ["looking forward"],
      explanation: "look forward to = ждать с нетерпением",
    },
  ];

  return (
    <>
      <UiSection title="Итоговые упражнения">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold">
            Проверьте, как вы усвоили материал по теме "Work and Jobs".
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Финальный тест"
        instruction="Заполните пропуски."
        items={finalExercise}
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
                  Professions
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  teacher, student, doctor, scientist, engineer
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Education Terms
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  compulsory education, secondary school, higher education
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  School Phrases
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  attend classes, do homework, pass an exam
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Phrasal Verbs
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  catch up on, drop out, hand in, keep up with
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold">
                  Science
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  scientist, researcher, laboratory, experiment
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
                <strong>50+ профессий и jobs</strong> — от учителя до учёного
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>20+ терминов об образовании</strong> — school
                curriculum, GPA, report card
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>40+ школьных фраз</strong> — attend classes, do
                homework, pass exam
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>25+ phrasal verbs</strong> — catch up on, drop out, hand
                in, keep up with
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Научная лексика</strong> — scientist, researcher,
                laboratory, experiment
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Vocabulary о каникулах</strong> — school break, summer
                holidays, travel abroad
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
            Вы успешно освоили огромный объём лексики по теме "Work and Jobs"!
            Теперь вы можете говорить о профессиях, образовании, школьной жизни
            и науке. Продолжайте практиковаться!
          </p>
        </div>
      </div>
    </>
  );
}
