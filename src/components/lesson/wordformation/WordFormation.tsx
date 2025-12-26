"use client";

import { useState } from "react";
import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

// Компонент визуализации суффикса
function SuffixCard({
  suffix,
  meaning,
  partOfSpeech,
  examples,
  color = "indigo",
}: {
  suffix: string;
  meaning: string;
  partOfSpeech: string;
  examples: { base: string; result: string; translation: string }[];
  color?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const colorClasses: Record<string, { bg: string; border: string; accent: string; badge: string }> = {
    indigo: { bg: "bg-indigo-50", border: "border-indigo-300", accent: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-300", accent: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
    amber: { bg: "bg-amber-50", border: "border-amber-300", accent: "text-amber-600", badge: "bg-amber-100 text-amber-700" },
    rose: { bg: "bg-rose-50", border: "border-rose-300", accent: "text-rose-600", badge: "bg-rose-100 text-rose-700" },
    sky: { bg: "bg-sky-50", border: "border-sky-300", accent: "text-sky-600", badge: "bg-sky-100 text-sky-700" },
    violet: { bg: "bg-violet-50", border: "border-violet-300", accent: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
    orange: { bg: "bg-orange-50", border: "border-orange-300", accent: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`${colors.bg} rounded-2xl p-5 border-2 ${colors.border} cursor-pointer transition-all duration-300 hover:shadow-lg ${
        expanded ? "shadow-md" : ""
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className={`text-4xl font-black ${colors.accent}`}>-{suffix}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
            {partOfSpeech}
          </span>
        </div>
        <span className="text-slate-400 text-sm">{expanded ? "▲" : "▼"}</span>
      </div>

      {/* Meaning */}
      <p className="text-slate-700 mb-3">{meaning}</p>

      {/* Examples */}
      <div className={`space-y-2 transition-all duration-300 ${expanded ? "max-h-96 opacity-100" : "max-h-24 overflow-hidden"}`}>
        {examples.map((ex, i) => (
          <div key={i} className="bg-white rounded-lg p-3 flex items-center gap-2">
            <span className="text-slate-600">{ex.base}</span>
            <span className="text-slate-400">→</span>
            <span className={`font-bold ${colors.accent}`}>{ex.result}</span>
            <span className="text-slate-400 text-sm ml-auto">({ex.translation})</span>
          </div>
        ))}
      </div>

      {!expanded && examples.length > 2 && (
        <p className="text-xs text-slate-400 mt-2 text-center">+ ещё {examples.length - 2} примеров</p>
      )}
    </div>
  );
}

// Трансформация слова
function WordTransform({
  base,
  suffix,
  result,
}: {
  base: string;
  suffix: string;
  result: string;
}) {
  return (
    <div className="flex items-center justify-center gap-2 text-lg">
      <span className="bg-slate-100 px-3 py-2 rounded-lg font-mono">{base}</span>
      <span className="text-slate-400">+</span>
      <span className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg font-mono font-bold">-{suffix}</span>
      <span className="text-slate-400">=</span>
      <span className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg font-mono font-bold">{result}</span>
    </div>
  );
}

function Step1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Hero */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-indigo-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-8xl">🔧</div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 mb-2">Word Formation</h1>
              <p className="text-xl text-slate-600 mb-4">Создавайте новые слова с помощью суффиксов!</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  6 суффиксов
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  100+ слов
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  Практика
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What is word formation */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">🧩 Что такое словообразование?</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Суффиксы — это части слова, которые добавляются в конец и <strong>меняют часть речи</strong> или значение.
            Зная суффиксы, вы можете понять незнакомые слова и создавать новые!
          </p>

          <WordTransform base="inform" suffix="ation" result="information" />

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <p className="font-bold text-indigo-800 mb-1">Глагол → Существительное</p>
              <p className="text-slate-700">inform → inform<strong>ation</strong></p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
              <p className="font-bold text-emerald-800 mb-1">Прилагательное → Существительное</p>
              <p className="text-slate-700">happy → happi<strong>ness</strong></p>
            </div>
          </div>
        </div>

        {/* Suffix types overview */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">📚 Какие суффиксы мы изучим</h3>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 text-center">
              <p className="text-2xl font-bold text-indigo-600 mb-1">-tion / -sion</p>
              <p className="text-sm text-slate-600">Существительные (действие/процесс)</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200 text-center">
              <p className="text-2xl font-bold text-emerald-600 mb-1">-ment</p>
              <p className="text-sm text-slate-600">Существительные (результат)</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 text-center">
              <p className="text-2xl font-bold text-amber-600 mb-1">-ity / -ty</p>
              <p className="text-sm text-slate-600">Существительные (качество)</p>
            </div>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200 text-center">
              <p className="text-2xl font-bold text-rose-600 mb-1">-ness</p>
              <p className="text-sm text-slate-600">Существительные (состояние)</p>
            </div>
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200 text-center">
              <p className="text-2xl font-bold text-sky-600 mb-1">-ful</p>
              <p className="text-sm text-slate-600">Прилагательные (с чем-то)</p>
            </div>
            <div className="bg-violet-50 rounded-lg p-4 border border-violet-200 text-center">
              <p className="text-2xl font-bold text-violet-600 mb-1">-less</p>
              <p className="text-sm text-slate-600">Прилагательные (без чего-то)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">-TION / -SION</h1>
          <p className="text-slate-600">Глагол → Существительное (действие, процесс, результат)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <SuffixCard
            suffix="tion"
            meaning="Образует существительные от глаголов, обозначает действие или его результат"
            partOfSpeech="noun"
            color="indigo"
            examples={[
              { base: "inform", result: "information", translation: "информация" },
              { base: "educate", result: "education", translation: "образование" },
              { base: "communicate", result: "communication", translation: "общение" },
              { base: "create", result: "creation", translation: "создание" },
              { base: "celebrate", result: "celebration", translation: "празднование" },
              { base: "operate", result: "operation", translation: "операция" },
            ]}
          />

          <SuffixCard
            suffix="sion"
            meaning="Вариант -tion после -d, -de, -se, -t"
            partOfSpeech="noun"
            color="sky"
            examples={[
              { base: "decide", result: "decision", translation: "решение" },
              { base: "discuss", result: "discussion", translation: "обсуждение" },
              { base: "express", result: "expression", translation: "выражение" },
              { base: "confuse", result: "confusion", translation: "путаница" },
              { base: "permit", result: "permission", translation: "разрешение" },
              { base: "admit", result: "admission", translation: "допуск" },
            ]}
          />
        </div>

        {/* Pattern recognition */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">🔍 Как выбрать -tion или -sion?</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-lg p-4">
              <p className="font-bold text-indigo-700 mb-2">-TION используется после:</p>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• -ate → celebr<strong>ate</strong> → celebra<strong>tion</strong></li>
                <li>• -ify → class<strong>ify</strong> → classifica<strong>tion</strong></li>
                <li>• -uce → prod<strong>uce</strong> → produc<strong>tion</strong></li>
              </ul>
            </div>
            <div className="bg-sky-50 rounded-lg p-4">
              <p className="font-bold text-sky-700 mb-2">-SION используется после:</p>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• -de → deci<strong>de</strong> → deci<strong>sion</strong></li>
                <li>• -ss → discu<strong>ss</strong> → discu<strong>ssion</strong></li>
                <li>• -mit → per<strong>mit</strong> → permi<strong>ssion</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="flex items-start gap-2 text-amber-800">
            <span className="text-xl">💡</span>
            <span>
              <strong>Совет:</strong> Слова с -tion произносятся как /ʃən/, а с -sion как /ʒən/ или /ʃən/.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">-MENT</h1>
          <p className="text-slate-600">Глагол → Существительное (результат действия)</p>
        </div>

        <SuffixCard
          suffix="ment"
          meaning="Образует существительные от глаголов, обозначает результат или процесс"
          partOfSpeech="noun"
          color="emerald"
          examples={[
            { base: "develop", result: "development", translation: "развитие" },
            { base: "achieve", result: "achievement", translation: "достижение" },
            { base: "agree", result: "agreement", translation: "соглашение" },
            { base: "manage", result: "management", translation: "управление" },
            { base: "improve", result: "improvement", translation: "улучшение" },
            { base: "employ", result: "employment", translation: "занятость" },
            { base: "entertain", result: "entertainment", translation: "развлечение" },
            { base: "announce", result: "announcement", translation: "объявление" },
            { base: "replace", result: "replacement", translation: "замена" },
            { base: "require", result: "requirement", translation: "требование" },
          ]}
        />

        {/* More examples in grid */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">📝 Больше примеров с -ment</h3>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { base: "treat", result: "treatment", tr: "лечение" },
              { base: "invest", result: "investment", tr: "инвестиция" },
              { base: "assess", result: "assessment", tr: "оценка" },
              { base: "assign", result: "assignment", tr: "задание" },
              { base: "encourage", result: "encouragement", tr: "поощрение" },
              { base: "enjoy", result: "enjoyment", tr: "наслаждение" },
              { base: "govern", result: "government", tr: "правительство" },
              { base: "establish", result: "establishment", tr: "учреждение" },
              { base: "state", result: "statement", tr: "заявление" },
            ].map((item) => (
              <div key={item.result} className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-slate-600">{item.base}</span>
                  <span className="text-slate-400">→</span>
                  <span className="font-bold text-emerald-700">{item.result}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{item.tr}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-100 rounded-xl p-5 border border-emerald-300">
          <h4 className="font-bold text-emerald-800 mb-2">⚡ -MENT vs -TION</h4>
          <p className="text-slate-700 text-sm">
            Оба суффикса создают существительные, но <strong>-ment</strong> чаще обозначает результат,
            а <strong>-tion</strong> — процесс или действие. Иногда есть оба варианта с разными значениями!
          </p>
          <div className="mt-2 text-sm">
            <span className="bg-white px-2 py-1 rounded">develop<strong>ment</strong> (результат)</span>
            <span className="mx-2 text-slate-400">vs</span>
            <span className="bg-white px-2 py-1 rounded">develop<strong>ation</strong> (не существует!)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">-ITY / -TY и -NESS</h1>
          <p className="text-slate-600">Прилагательное → Существительное (качество, состояние)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <SuffixCard
            suffix="ity"
            meaning="Образует существительные от прилагательных на -able, -ible, -al, -ive"
            partOfSpeech="noun"
            color="amber"
            examples={[
              { base: "possible", result: "possibility", translation: "возможность" },
              { base: "responsible", result: "responsibility", translation: "ответственность" },
              { base: "creative", result: "creativity", translation: "креативность" },
              { base: "personal", result: "personality", translation: "личность" },
              { base: "electric", result: "electricity", translation: "электричество" },
              { base: "popular", result: "popularity", translation: "популярность" },
            ]}
          />

          <SuffixCard
            suffix="ness"
            meaning="Универсальный суффикс для образования существительных от прилагательных"
            partOfSpeech="noun"
            color="rose"
            examples={[
              { base: "happy", result: "happiness", translation: "счастье" },
              { base: "sad", result: "sadness", translation: "грусть" },
              { base: "dark", result: "darkness", translation: "темнота" },
              { base: "kind", result: "kindness", translation: "доброта" },
              { base: "weak", result: "weakness", translation: "слабость" },
              { base: "aware", result: "awareness", translation: "осведомлённость" },
            ]}
          />
        </div>

        {/* Comparison */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">🔄 Когда -ITY, а когда -NESS?</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="font-bold text-amber-700 mb-2">-ITY используется с:</p>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• -able/-ible: avail<strong>able</strong> → availabil<strong>ity</strong></li>
                <li>• -ive: act<strong>ive</strong> → activ<strong>ity</strong></li>
                <li>• -al: nation<strong>al</strong> → national<strong>ity</strong></li>
                <li>• -ous: curi<strong>ous</strong> → curios<strong>ity</strong></li>
              </ul>
            </div>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <p className="font-bold text-rose-700 mb-2">-NESS используется с:</p>
              <ul className="text-slate-700 text-sm space-y-1">
                <li>• Простыми прилагательными: <strong>kind</strong> → kind<strong>ness</strong></li>
                <li>• -ful: care<strong>ful</strong> → careful<strong>ness</strong></li>
                <li>• -less: care<strong>less</strong> → careless<strong>ness</strong></li>
                <li>• -y: happ<strong>y</strong> → happi<strong>ness</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
          <p className="flex items-start gap-2 text-orange-800">
            <span className="text-xl">⚠️</span>
            <span>
              <strong>Внимание:</strong> При добавлении -ness к словам на -y, буква y меняется на i:
              happy → happi<strong>ness</strong>, lonely → loneli<strong>ness</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Step5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-violet-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">-FUL и -LESS</h1>
          <p className="text-slate-600">Существительное → Прилагательное (с чем-то / без чего-то)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <SuffixCard
            suffix="ful"
            meaning="«Полный чего-то», «с чем-то» — образует прилагательные с положительным оттенком"
            partOfSpeech="adjective"
            color="sky"
            examples={[
              { base: "care", result: "careful", translation: "осторожный" },
              { base: "help", result: "helpful", translation: "полезный" },
              { base: "beauty", result: "beautiful", translation: "красивый" },
              { base: "success", result: "successful", translation: "успешный" },
              { base: "power", result: "powerful", translation: "мощный" },
              { base: "peace", result: "peaceful", translation: "мирный" },
              { base: "thank", result: "thankful", translation: "благодарный" },
              { base: "wonder", result: "wonderful", translation: "замечательный" },
            ]}
          />

          <SuffixCard
            suffix="less"
            meaning="«Без чего-то», «лишённый» — образует прилагательные с негативным оттенком"
            partOfSpeech="adjective"
            color="violet"
            examples={[
              { base: "care", result: "careless", translation: "небрежный" },
              { base: "help", result: "helpless", translation: "беспомощный" },
              { base: "hope", result: "hopeless", translation: "безнадёжный" },
              { base: "home", result: "homeless", translation: "бездомный" },
              { base: "use", result: "useless", translation: "бесполезный" },
              { base: "end", result: "endless", translation: "бесконечный" },
              { base: "fear", result: "fearless", translation: "бесстрашный" },
              { base: "worth", result: "worthless", translation: "никчёмный" },
            ]}
          />
        </div>

        {/* Opposites */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">⚔️ Антонимы: -FUL vs -LESS</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { base: "care", ful: "careful", less: "careless" },
              { base: "help", ful: "helpful", less: "helpless" },
              { base: "hope", ful: "hopeful", less: "hopeless" },
              { base: "use", ful: "useful", less: "useless" },
              { base: "harm", ful: "harmful", less: "harmless" },
              { base: "pain", ful: "painful", less: "painless" },
            ].map((pair) => (
              <div key={pair.base} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <p className="text-center text-slate-500 text-xs mb-2">{pair.base}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-sm font-medium">
                    {pair.ful}
                  </span>
                  <span className="text-slate-400">↔</span>
                  <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded text-sm font-medium">
                    {pair.less}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-sky-50 rounded-xl p-4 border border-sky-200">
          <p className="flex items-start gap-2 text-sky-800">
            <span className="text-xl">💡</span>
            <span>
              <strong>Интересно:</strong> Не все слова имеют обе формы! Например, есть <strong>beautiful</strong>,
              но нет *beautiless. Есть <strong>endless</strong>, но нет *endful.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Step6() {
  const items: FillItem[] = [
    {
      left: "The",
      answers: ["information"],
      right: "you provided was very helpful. (inform)",
      explanation: "inform + -ation = information (существительное)",
    },
    {
      left: "She made a difficult",
      answers: ["decision"],
      right: "about her career. (decide)",
      explanation: "decide + -sion = decision",
    },
    {
      left: "This is a great",
      answers: ["achievement"],
      right: "for our team. (achieve)",
      explanation: "achieve + -ment = achievement",
    },
    {
      left: "There is a",
      answers: ["possibility"],
      right: "of rain tomorrow. (possible)",
      explanation: "possible + -ity = possibility",
    },
    {
      left: "Her",
      answers: ["kindness"],
      right: "touched everyone. (kind)",
      explanation: "kind + -ness = kindness",
    },
    {
      left: "Be",
      answers: ["careful"],
      right: "when crossing the street! (care)",
      explanation: "care + -ful = careful",
    },
    {
      left: "This exercise is",
      answers: ["useless"],
      right: "— it doesn't help at all. (use)",
      explanation: "use + -less = useless",
    },
    {
      left: "The movie was",
      answers: ["wonderful", "beautiful"],
      right: "! I loved it. (wonder/beauty)",
      explanation: "wonder + -ful = wonderful / beauty + -ful = beautiful",
    },
    {
      left: "Economic",
      answers: ["development"],
      right: "is important for the country. (develop)",
      explanation: "develop + -ment = development",
    },
    {
      left: "I felt great",
      answers: ["happiness"],
      right: "when I heard the news. (happy)",
      explanation: "happy → happi + -ness = happiness (y меняется на i)",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">✏️ Практика</h1>
          <p className="text-slate-600">Образуйте слова с помощью суффиксов</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <CheckableExercise
            title="Образуйте существительные или прилагательные"
            instruction="Используйте суффиксы -tion/-sion, -ment, -ity, -ness, -ful, -less. Базовое слово дано в скобках."
            items={items}
          />
        </div>

        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
          <p className="flex items-start gap-2 text-purple-800">
            <span className="text-xl">💡</span>
            <span>
              <strong>Подсказка:</strong> Обратите внимание на часть речи нужного слова по контексту!
              Существительное стоит после артикля (a, the) или перед глаголом.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Step7() {
  const suffixGroups = [
    {
      title: "Существительные (от глаголов)",
      suffixes: [
        { suffix: "-tion/-sion", example: "information, decision" },
        { suffix: "-ment", example: "development, achievement" },
      ],
    },
    {
      title: "Существительные (от прилагательных)",
      suffixes: [
        { suffix: "-ity", example: "possibility, creativity" },
        { suffix: "-ness", example: "happiness, kindness" },
      ],
    },
    {
      title: "Прилагательные (от существительных)",
      suffixes: [
        { suffix: "-ful", example: "careful, helpful, beautiful" },
        { suffix: "-less", example: "careless, hopeless, endless" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Congratulations */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center">
          <div className="text-7xl mb-4">🎓</div>
          <h1 className="text-3xl font-bold mb-2">Отлично!</h1>
          <p className="text-xl opacity-90">
            Теперь вы можете создавать новые слова как профи!
          </p>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span>📋</span> Шпаргалка по суффиксам
          </h2>

          <div className="space-y-6">
            {suffixGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold text-slate-700 mb-2">{group.title}</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {group.suffixes.map((s) => (
                    <div
                      key={s.suffix}
                      className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3"
                    >
                      <span className="font-bold text-indigo-700">{s.suffix}</span>
                      <span className="text-slate-500 text-sm">{s.example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick reference table */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">🔄 Быстрая трансформация</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-3 py-2 text-left">Глагол</th>
                  <th className="px-3 py-2 text-left">Сущ. (-tion/-ment)</th>
                  <th className="px-3 py-2 text-left">Прил.</th>
                  <th className="px-3 py-2 text-left">Сущ. (-ness/-ity)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-3 py-2">create</td>
                  <td className="px-3 py-2 text-indigo-600">creation</td>
                  <td className="px-3 py-2 text-emerald-600">creative</td>
                  <td className="px-3 py-2 text-amber-600">creativity</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">inform</td>
                  <td className="px-3 py-2 text-indigo-600">information</td>
                  <td className="px-3 py-2 text-emerald-600">informative</td>
                  <td className="px-3 py-2 text-slate-400">—</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">develop</td>
                  <td className="px-3 py-2 text-indigo-600">development</td>
                  <td className="px-3 py-2 text-slate-400">—</td>
                  <td className="px-3 py-2 text-slate-400">—</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2 text-slate-400">—</td>
                  <td className="px-3 py-2 text-emerald-600">happy</td>
                  <td className="px-3 py-2 text-amber-600">happiness</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <div className="text-4xl mb-3">📖</div>
            <h4 className="font-bold text-slate-800 mb-2">Читайте</h4>
            <p className="text-sm text-slate-600">
              Замечайте суффиксы в текстах — это поможет понимать новые слова
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <div className="text-4xl mb-3">📝</div>
            <h4 className="font-bold text-slate-800 mb-2">Записывайте</h4>
            <p className="text-sm text-slate-600">
              Группируйте слова по суффиксам в своём словаре
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-bold text-slate-800 mb-2">Практикуйтесь</h4>
            <p className="text-sm text-slate-600">
              Пробуйте образовывать слова от новых корней
            </p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 text-white text-center">
          <p className="text-lg font-semibold">
            Word formation = Word power! 💪
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WordFormation({ step }: Props) {
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
