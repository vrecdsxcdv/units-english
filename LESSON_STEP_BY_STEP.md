# 📝 Пошаговая инструкция создания урока

> Следуйте этой инструкции шаг за шагом для создания идеального урока

---

## 🎬 ПОДГОТОВКА (30 минут)

### ✅ Шаг 0.1: Определите тему урока

- [ ] Выберите грамматическую тему
- [ ] Определите уровень сложности (A1/A2/B1/B2/C1/C2)
- [ ] Найдите аналогичное время/структуру в русском языке
- [ ] Определите, с какими темами она сравнивается

**Пример:**

```
Тема: Present Perfect
Уровень: A2-B1
Русский аналог: нет прямого аналога, но близко к прошедшему времени с акцентом на результат
Сравнение с: Past Simple, Present Perfect Continuous
```

---

### ✅ Шаг 0.2: Соберите материалы

- [ ] Формула времени/структуры
- [ ] 30-40 нерегулярных глаголов (если применимо)
- [ ] 5-7 маркеров времени
- [ ] 10-15 типичных ошибок
- [ ] 5-8 идиом с этим временем
- [ ] 80-120 слов для словаря

**Шаблон сбора:**

```markdown
## Формула

[Формула]

## Нерегулярные глаголы

1. be - was/were - been
2. ...

## Маркеры

- just
- already
- yet
- ...

## Типичные ошибки

1. ❌ I have seen him yesterday
   ✅ I saw him yesterday
   ...

## Идиомы

- to have a blast
  ...

## Словарь (по темам)

### Работа

- colleague /ˈkɒliːɡ/ - коллега
  ...

### Дом

- furniture /ˈfɜːnɪtʃə/ - мебель
  ...
```

---

### ✅ Шаг 0.3: Создайте файл урока

- [ ] Создайте папку `src/components/lesson/[название]`
- [ ] Создайте файл `[Название].tsx`
- [ ] Скопируйте базовую структуру

**Команда:**

```bash
mkdir src/components/lesson/presentperfect
touch src/components/lesson/presentperfect/PresentPerfect.tsx
```

**Базовая структура:**

```typescript
"use client";
import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PresentPerfect({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

// ===== ШАГ 1: ВВЕДЕНИЕ =====
function Step1() {
  return <UiSection title="...">{/* Контент */}</UiSection>;
}

// ... остальные шаги
```

---

## 🚀 СОЗДАНИЕ УРОКОВ (150 минут)

---

## ⭐ ШАГ 1: ВВЕДЕНИЕ (15 минут)

### Цель

Вызвать интерес, дать общее понимание темы, показать главную идею

### Чек-лист

- [ ] Hero-блок с большой эмоджи (text-7xl)
- [ ] Название на английском и русском
- [ ] Главная идея (2-3 предложения)
- [ ] Когда используется (3-4 пункта с эмоджи)
- [ ] Сравнение с русским языком
- [ ] 5-7 примеров в контексте
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step1() {
  return (
    <UiSection title="⏰ Present Perfect — Настоящее совершённое">
      {/* Hero-блок */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-8 mb-6 border-2 border-purple-300">
        <div className="text-center mb-6">
          <div className="text-7xl mb-4">⏰</div>
          <h2 className="text-3xl font-bold text-purple-900 mb-3">
            Present Perfect
          </h2>
          <p className="text-xl text-purple-700">Настоящее совершённое время</p>
        </div>

        {/* Главная идея */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            🎯 Главная идея:
          </h3>
          <p className="text-lg text-zinc-800">
            [ГЛАВНАЯ ИДЕЯ В ОДНОМ ПРЕДЛОЖЕНИИ]
          </p>
        </div>

        {/* Когда используется */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            📌 Когда используется:
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <p className="font-bold text-purple-900">[Случай 1]</p>
                <p className="text-sm text-zinc-600">[Объяснение]</p>
                <p className="text-sm italic text-purple-700 mt-1">[Пример]</p>
              </div>
            </div>
            {/* ... еще 2-3 случая */}
          </div>
        </div>

        {/* Сравнение с русским */}
        <div className="bg-purple-100 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-3">
            🇷🇺 Сравнение с русским языком:
          </h3>
          <p className="text-zinc-800">[Сравнение с русским]</p>
        </div>
      </div>

      {/* Примеры в контексте */}
      <div className="bg-white rounded-lg p-6 mb-6 border-2 border-purple-200">
        <h3 className="text-xl font-bold text-purple-900 mb-4">
          📝 Примеры в контексте:
        </h3>
        <div className="space-y-3">
          {[
            { en: "[Пример 1]", ru: "[Перевод 1]" },
            // ... 5-7 примеров
          ].map((ex, i) => (
            <div key={i} className="bg-purple-50 rounded p-4">
              <p className="font-semibold text-purple-900">{ex.en}</p>
              <p className="text-sm text-zinc-600 mt-1">{ex.ru}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Словарь */}
      <UiSection title="📝 Словарь: [Тема]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "example", transcr: "/ɪɡˈzɑːmpl/", translation: "пример" },
            // ... 9-12 слов
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-purple-400"
            >
              <p className="font-bold text-purple-900 text-lg">{item.word}</p>
              <p className="text-xs text-purple-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </UiSection>
  );
}
```

### Время: 15 минут ⏱️

---

## 📐 ШАГ 2: ФОРМУЛА (15 минут)

### Цель

Научить базовой структуре, показать образование утвердительной формы

### Чек-лист

- [ ] Формула большими буквами (text-3xl)
- [ ] Расшифровка каждой части формулы
- [ ] Таблица с местоимениями
- [ ] 10-12 примеров по категориям (регулярные/нерегулярные)
- [ ] Список нерегулярных глаголов (20-30 шт)
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step2() {
  return (
    <UiSection title="📐 Как образуется Present Perfect">
      {/* Формула */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mb-6 border-2 border-indigo-400">
        <h3 className="text-2xl font-bold text-indigo-900 text-center mb-6">
          Формула Present Perfect
        </h3>
        <div className="bg-white rounded-xl p-6 mb-6 border-2 border-indigo-300">
          <div className="text-center">
            <p className="text-3xl font-mono font-bold text-indigo-900 mb-4">
              have/has + V3
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded p-3">
                <p className="font-bold">have/has</p>
                <p className="text-xs">вспомогательный глагол</p>
              </div>
              <div className="bg-purple-50 rounded p-3">
                <p className="font-bold">V3</p>
                <p className="text-xs">Past Participle (3-я форма)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Таблица образования */}
      <div className="bg-white rounded-lg p-6 mb-6 border-2 border-indigo-200">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">
          📊 Таблица образования:
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-indigo-100">
                <th className="p-3">Местоимение</th>
                <th className="p-3">have/has</th>
                <th className="p-3">V3</th>
                <th className="p-3">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">I, You, We, They</td>
                <td className="p-3 font-bold text-indigo-900">have</td>
                <td className="p-3">worked</td>
                <td className="p-3 italic">I have worked</td>
              </tr>
              <tr>
                <td className="p-3">He, She, It</td>
                <td className="p-3 font-bold text-indigo-900">has</td>
                <td className="p-3">worked</td>
                <td className="p-3 italic">She has worked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Нерегулярные глаголы */}
      <div className="bg-purple-50 rounded-lg p-6 mb-6 border-2 border-purple-200">
        <h3 className="text-xl font-bold text-purple-900 mb-4">
          📚 Важные нерегулярные глаголы:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { v1: "be", v2: "was/were", v3: "been", ru: "быть" },
            // ... 20-30 глаголов
          ].map((verb, idx) => (
            <div
              key={idx}
              className="bg-white rounded p-3 border-l-4 border-purple-400"
            >
              <p className="font-mono text-purple-900">
                <span className="font-bold">{verb.v1}</span> - {verb.v2} -{" "}
                <span className="font-bold">{verb.v3}</span>
              </p>
              <p className="text-xs text-zinc-600">{verb.ru}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 15 минут ⏱️

---

## ✏️ ШАГ 3: БАЗОВАЯ ПРАКТИКА (15 минут)

### Цель

Закрепить базовую формулу через упражнения

### Чек-лист

- [ ] Подсказки перед упражнениями (3-4 пункта)
- [ ] CheckableExercise с 8-10 заданиями
- [ ] Прогрессивная сложность
- [ ] Explanation для каждого ответа
- [ ] Учёт вариантов (полная форма + сокращение)
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step3() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "(finish) my homework.",
      answers: ["have finished", "'ve finished"],
      explanation:
        "Present Perfect: have + V3. Можно использовать сокращение 've.",
      wide: true,
    },
    // ... 8-10 заданий с прогрессивной сложностью
  ];

  return (
    <UiSection title="✏️ Базовая практика">
      {/* Подсказки */}
      <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-300">
        <p className="font-bold text-blue-900 mb-2">💡 Подсказки:</p>
        <ul className="text-sm text-zinc-700 space-y-1">
          <li>• Используйте have для I/you/we/they</li>
          <li>• Используйте has для he/she/it</li>
          <li>• Не забудьте про 3-ю форму глагола (V3)</li>
          <li>• Проверьте нерегулярные глаголы из предыдущего шага</li>
        </ul>
      </div>

      {/* Упражнение */}
      <CheckableExercise
        title="Заполните пропуски"
        instruction="Поставьте глагол в Present Perfect."
        items={items}
        wideInputs
      />

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 15 минут ⏱️

---

## ❌ ШАГ 4: ОТРИЦАНИЯ (10 минут)

### Цель

Научить образовывать отрицательные предложения

### Чек-лист

- [ ] Структура отрицания (формула)
- [ ] Таблица сокращений
- [ ] 6-8 примеров
- [ ] CheckableExercise с 6-8 заданиями
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step4() {
  const items: FillItem[] = [
    {
      left: "1. She",
      right: "(not/see) that movie.",
      answers: ["has not seen", "hasn't seen"],
      explanation: "Отрицание: has + not + V3. Можно сократить до hasn't.",
    },
    // ... 6-8 заданий
  ];

  return (
    <UiSection title="❌ Отрицательные предложения">
      {/* Формула отрицания */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8 mb-6 border-2 border-red-300">
        <h3 className="text-2xl font-bold text-red-900 text-center mb-4">
          Формула отрицания
        </h3>
        <div className="bg-white rounded-xl p-6 border-2 border-red-300">
          <p className="text-2xl font-mono font-bold text-red-900 text-center">
            have/has + not + V3
          </p>
        </div>
      </div>

      {/* Таблица сокращений */}
      <div className="bg-white rounded-lg p-6 mb-6 border-2 border-red-200">
        <h3 className="text-xl font-bold text-red-900 mb-4">✂️ Сокращения:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded p-4">
            <p className="font-bold text-red-900">have not → haven't</p>
            <p className="text-sm italic mt-1">I haven't finished</p>
          </div>
          <div className="bg-red-50 rounded p-4">
            <p className="font-bold text-red-900">has not → hasn't</p>
            <p className="text-sm italic mt-1">She hasn't finished</p>
          </div>
        </div>
      </div>

      {/* Примеры */}
      <div className="bg-red-50 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-red-900 mb-4">📝 Примеры:</h3>
        <div className="space-y-2">
          {[
            {
              en: "I haven't seen John today.",
              ru: "Я не видел Джона сегодня.",
            },
            // ... 6-8 примеров
          ].map((ex, i) => (
            <div key={i} className="bg-white rounded p-3">
              <p className="font-semibold">{ex.en}</p>
              <p className="text-sm text-zinc-600">{ex.ru}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Упражнение */}
      <CheckableExercise
        title="Сделайте предложения отрицательными"
        instruction="Используйте haven't или hasn't."
        items={items}
      />

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 10 минут ⏱️

---

## ❓ ШАГ 5: ВОПРОСЫ (10 минут)

### Цель

Научить задавать вопросы

### Чек-лист

- [ ] Структура Yes/No questions
- [ ] Структура Wh- questions
- [ ] Таблица вопросительных слов
- [ ] 6-8 примеров
- [ ] CheckableExercise с 6-8 заданиями
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step5() {
  const items: FillItem[] = [
    {
      left: "1.",
      right: "you ever (be) to Paris?",
      answers: ["Have", "have"],
      explanation: "В вопросах have/has выходит на первое место.",
    },
    // ... 6-8 заданий
  ];

  return (
    <UiSection title="❓ Вопросительные предложения">
      {/* Yes/No Questions */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-6 border-2 border-green-300">
        <h3 className="text-2xl font-bold text-green-900 mb-4">
          ✅ Yes/No Questions
        </h3>
        <div className="bg-white rounded-xl p-6 border-2 border-green-300 mb-4">
          <p className="text-2xl font-mono font-bold text-green-900 text-center">
            Have/Has + подлежащее + V3?
          </p>
        </div>
        <div className="space-y-2">
          {[
            {
              en: "Have you finished your homework?",
              ru: "Ты закончил домашнюю работу?",
            },
            // ... 3-4 примера
          ].map((ex, i) => (
            <div key={i} className="bg-white rounded p-3">
              <p className="font-semibold text-green-900">{ex.en}</p>
              <p className="text-sm text-zinc-600">{ex.ru}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wh- Questions */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 mb-6 border-2 border-blue-300">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          🔍 Wh- Questions
        </h3>
        <div className="bg-white rounded-xl p-6 border-2 border-blue-300 mb-4">
          <p className="text-2xl font-mono font-bold text-blue-900 text-center">
            Wh-word + have/has + подлежащее + V3?
          </p>
        </div>

        {/* Таблица вопросительных слов */}
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-blue-900 mb-2">
            Вопросительные слова:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {[
              { word: "What", ru: "что" },
              { word: "Where", ru: "где" },
              { word: "When", ru: "когда" },
              { word: "Why", ru: "почему" },
              { word: "How", ru: "как" },
              { word: "Who", ru: "кто" },
            ].map((wh, i) => (
              <div key={i} className="bg-white rounded p-2">
                <span className="font-bold text-blue-900">{wh.word}</span> —{" "}
                {wh.ru}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {[
            { en: "Where have you been?", ru: "Где ты был?" },
            // ... 3-4 примера
          ].map((ex, i) => (
            <div key={i} className="bg-white rounded p-3">
              <p className="font-semibold text-blue-900">{ex.en}</p>
              <p className="text-sm text-zinc-600">{ex.ru}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Упражнение */}
      <CheckableExercise
        title="Составьте вопросы"
        instruction="Используйте have или has."
        items={items}
      />

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 10 минут ⏱️

---

## 🔑 ШАГ 6: МАРКЕРЫ ВРЕМЕНИ (15 минут)

### Цель

Научить распознавать контекст через маркеры

### Чек-лист

- [ ] 4-5 маркеров
- [ ] Для каждого маркера:
  - [ ] Название + перевод
  - [ ] Когда используется
  - [ ] 3-4 примера
  - [ ] Mini CheckableExercise (3-5 заданий)
- [ ] Общая практика CheckableExercise (8-10 заданий)
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step6() {
  // Упражнения для каждого маркера
  const justItems: FillItem[] = [
    {
      left: "1. I have",
      right: "finished my coffee.",
      answers: ["just"],
      explanation: "'Just' указывает на только что завершённое действие.",
    },
    // ... 3-5 заданий
  ];

  // Общая практика
  const allMarkersItems: FillItem[] = [
    {
      left: "1. I have",
      right: "done my homework. (только что)",
      answers: ["just"],
      explanation: "Just = только что",
    },
    // ... 8-10 заданий
  ];

  return (
    <UiSection title="🔑 Маркеры времени Present Perfect">
      {/* Введение */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-6 border-2 border-amber-300">
        <p className="text-lg text-zinc-800">
          Маркеры времени помогают определить, какое время использовать. С
          Present Perfect часто используются определённые слова-маркеры.
        </p>
      </div>

      {/* Маркер 1: JUST */}
      <div className="bg-white rounded-lg p-6 mb-6 border-2 border-amber-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">1️⃣</span>
          <div>
            <h3 className="text-2xl font-bold text-amber-900">JUST</h3>
            <p className="text-zinc-600">только что</p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-4 mb-4">
          <p className="font-bold text-amber-900 mb-2">
            📌 Когда используется:
          </p>
          <p className="text-zinc-700">
            Когда действие завершилось совсем недавно (несколько секунд/минут
            назад).
          </p>
        </div>

        <div className="space-y-2 mb-4">
          <p className="font-bold text-amber-900">📝 Примеры:</p>
          {[
            {
              en: "I have just finished my work.",
              ru: "Я только что закончил работу.",
            },
            // ... 3-4 примера
          ].map((ex, i) => (
            <div key={i} className="bg-amber-50 rounded p-3">
              <p className="font-semibold">{ex.en}</p>
              <p className="text-sm text-zinc-600">{ex.ru}</p>
            </div>
          ))}
        </div>

        <CheckableExercise
          title="Практика: JUST"
          instruction="Вставьте 'just' в правильное место."
          items={justItems}
        />
      </div>

      {/* Маркер 2-5: (аналогично) */}
      {/* ALREADY, YET, EVER, FOR/SINCE */}

      {/* Общая практика */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-6 border-2 border-amber-400">
        <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
          🎯 Общая практика: все маркеры
        </h3>
        <CheckableExercise
          title="Вставьте правильный маркер"
          instruction="Используйте: just, already, yet, ever, for, since."
          items={allMarkersItems}
          wideInputs
        />
      </div>

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 15 минут ⏱️

---

## ⚖️ ШАГ 7: СРАВНЕНИЕ (15 минут)

### Цель

Показать отличия от похожих времён

### Чек-лист

- [ ] Таблица сравнения (2-3 колонки)
- [ ] Side-by-side примеры
- [ ] Когда использовать каждое время
- [ ] CheckableExercise с выбором времени (10 заданий)
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step7() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "(see) him yesterday.",
      answers: ["saw"],
      explanation: "Past Simple, потому что есть конкретное время 'yesterday'.",
    },
    {
      left: "2. I",
      right: "(see) him recently.",
      answers: ["have seen", "'ve seen"],
      explanation:
        "Present Perfect, потому что 'recently' = недавно (неопределённое время).",
    },
    // ... 10 заданий
  ];

  return (
    <UiSection title="⚖️ Present Perfect vs Past Simple">
      {/* Таблица сравнения */}
      <div className="bg-white rounded-lg p-6 mb-6 border-2 border-indigo-200">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
          Сравнение времён
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="p-3 bg-purple-100">Критерий</th>
                <th className="p-3 bg-purple-100">Present Perfect</th>
                <th className="p-3 bg-blue-100">Past Simple</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-bold">Формула</td>
                <td className="p-3">have/has + V3</td>
                <td className="p-3">V2</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-bold">Когда</td>
                <td className="p-3">Результат важен сейчас</td>
                <td className="p-3">Конкретное время в прошлом</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-bold">Маркеры</td>
                <td className="p-3">just, already, yet, ever, never</td>
                <td className="p-3">yesterday, ago, last week</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">Пример</td>
                <td className="p-3 italic">I have finished</td>
                <td className="p-3 italic">I finished yesterday</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Side-by-side примеры */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Present Perfect */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-2 border-purple-300">
          <h4 className="text-xl font-bold text-purple-900 mb-3">
            ✨ Present Perfect
          </h4>
          <div className="space-y-2">
            {[
              {
                en: "I have seen this movie.",
                ru: "Я видел этот фильм. (в какой-то момент, не важно когда)",
              },
              // ... 4-5 примеров
            ].map((ex, i) => (
              <div key={i} className="bg-white rounded p-3">
                <p className="font-semibold text-purple-900">{ex.en}</p>
                <p className="text-xs text-zinc-600">{ex.ru}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Simple */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-xl font-bold text-blue-900 mb-3">
            🕐 Past Simple
          </h4>
          <div className="space-y-2">
            {[
              {
                en: "I saw this movie yesterday.",
                ru: "Я видел этот фильм вчера. (конкретное время)",
              },
              // ... 4-5 примеров
            ].map((ex, i) => (
              <div key={i} className="bg-white rounded p-3">
                <p className="font-semibold text-blue-900">{ex.en}</p>
                <p className="text-xs text-zinc-600">{ex.ru}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Когда использовать */}
      <div className="bg-amber-50 rounded-lg p-6 mb-6 border-2 border-amber-300">
        <h4 className="text-xl font-bold text-amber-900 mb-3">
          🎯 Когда использовать:
        </h4>
        <div className="space-y-3">
          <div>
            <p className="font-bold text-purple-900">✅ Present Perfect:</p>
            <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
              <li>Время не указано или не важно</li>
              <li>Результат важен сейчас</li>
              <li>Опыт в жизни</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-blue-900">✅ Past Simple:</p>
            <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
              <li>Конкретное время в прошлом</li>
              <li>Завершённое действие</li>
              <li>Последовательность событий</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Упражнение */}
      <CheckableExercise
        title="Выберите правильное время"
        instruction="Поставьте глагол в Present Perfect или Past Simple."
        items={items}
        wideInputs
      />

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 15 минут ⏱️

---

## ⚠️ ШАГ 8: ТИПИЧНЫЕ ОШИБКИ (20 минут)

### Цель

Предупредить об ошибках, показать правильные варианты

### Чек-лист

- [ ] 7-10 типичных ошибок
- [ ] Для каждой ошибки:
  - [ ] Название ошибки
  - [ ] ❌ Неправильный пример
  - [ ] ✅ Правильный пример
  - [ ] Объяснение
- [ ] Советы как избежать ошибок
- [ ] CheckableExercise с исправлением ошибок (8-10 заданий)
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step8() {
  const items: FillItem[] = [
    {
      left: "1. I have",
      right: "him yesterday. (see)",
      answers: ["saw"],
      explanation:
        "С 'yesterday' нельзя использовать Present Perfect. Правильно: Past Simple.",
    },
    // ... 8-10 заданий
  ];

  return (
    <UiSection title="⚠️ Типичные ошибки">
      {/* Введение */}
      <div className="bg-red-50 rounded-lg p-6 mb-6 border-2 border-red-300">
        <p className="text-lg text-zinc-800">
          Даже носители языка иногда ошибаются! Давайте разберём самые частые
          ошибки, чтобы вы их избегали.
        </p>
      </div>

      {/* Ошибка 1 */}
      <div className="bg-white rounded-lg border-2 border-red-200 p-5 mb-4">
        <div className="flex items-start gap-4">
          <div className="text-4xl">❌</div>
          <div className="flex-1">
            <p className="font-bold text-red-900 text-lg mb-3">
              Ошибка 1: Использование с конкретным временем
            </p>
            <div className="bg-red-50 rounded p-4 mb-3">
              <p className="text-red-700 mb-2 font-semibold">
                ❌ I have seen him yesterday.
              </p>
              <p className="text-green-700 font-semibold">
                ✅ I saw him yesterday.
              </p>
            </div>
            <p className="text-sm text-zinc-600">
              <strong>Почему?</strong> Present Perfect НЕ используется с
              конкретным временем (yesterday, last week, in 2020, ago). В таких
              случаях используйте Past Simple.
            </p>
          </div>
        </div>
      </div>

      {/* Ошибка 2-10: (аналогично) */}

      {/* Советы */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6 border-2 border-green-300">
        <h3 className="text-xl font-bold text-green-900 mb-4">
          💡 Как избежать ошибок:
        </h3>
        <div className="space-y-2">
          {[
            "Всегда проверяйте, есть ли конкретное время (ago, yesterday, last...)",
            "Запомните маркеры Present Perfect: just, already, yet, ever, never",
            "Не забывайте про have/has перед глаголом",
            "Проверяйте 3-ю форму нерегулярных глаголов",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-green-600 font-bold">{i + 1}.</span>
              <p className="text-zinc-800">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Упражнение */}
      <CheckableExercise
        title="Исправьте ошибки"
        instruction="Поставьте глагол в правильную форму."
        items={items}
        wideInputs
      />

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 20 минут ⏱️

---

## 🌍 ШАГ 9: РЕАЛЬНЫЕ СИТУАЦИИ (15 минут)

### Цель

Показать применение в живой речи

### Чек-лист

- [ ] 3-4 диалога (6-8 реплик каждый)
- [ ] Для каждого диалога:
  - [ ] Контекст (где происходит)
  - [ ] Диалог с выделением изучаемых форм
  - [ ] Анализ использования
- [ ] CheckableExercise на основе диалогов (6-8 заданий)
- [ ] Словарь (9-12 слов из диалогов)

### Шаблон кода

```tsx
function Step9() {
  const items: FillItem[] = [
    {
      left: "1. A: Have you",
      right: "(see) the new movie?",
      answers: ["seen"],
      explanation: "Present Perfect для опыта: 'ты видел?' (когда-либо)",
    },
    // ... 6-8 заданий
  ];

  return (
    <UiSection title="🌍 Реальные ситуации">
      {/* Диалог 1 */}
      <div className="bg-white rounded-lg p-6 mb-6 border-2 border-teal-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">💼</span>
          <div>
            <h3 className="text-2xl font-bold text-teal-900">
              Диалог 1: На работе
            </h3>
            <p className="text-sm text-zinc-600">Коллеги обсуждают проект</p>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-5 mb-4">
          <div className="space-y-3">
            <div>
              <p className="font-bold text-teal-900">John:</p>
              <p className="text-zinc-800">
                Have you{" "}
                <span className="bg-yellow-200 px-1 rounded">finished</span> the
                report?
              </p>
              <p className="text-xs text-zinc-600 mt-1">Ты закончил отчёт?</p>
            </div>
            <div>
              <p className="font-bold text-teal-900">Mary:</p>
              <p className="text-zinc-800">
                Yes, I{" "}
                <span className="bg-yellow-200 px-1 rounded">
                  have just sent
                </span>{" "}
                it to the manager.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Да, я только что отправила его менеджеру.
              </p>
            </div>
            {/* ... ещё 4-6 реплик */}
          </div>
        </div>

        <div className="bg-teal-100 rounded-lg p-4">
          <p className="font-bold text-teal-900 mb-2">📊 Анализ:</p>
          <ul className="text-sm text-zinc-700 space-y-1">
            <li>
              • <strong>Have you finished</strong> — вопрос о результате (важно
              сейчас)
            </li>
            <li>
              • <strong>have just sent</strong> — действие только что завершено
            </li>
            {/* ... анализ остальных форм */}
          </ul>
        </div>
      </div>

      {/* Диалог 2-4: (аналогично) */}

      {/* Упражнение */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border-2 border-teal-300">
        <CheckableExercise
          title="Заполните пропуски из диалогов"
          instruction="Используйте Present Perfect."
          items={items}
          wideInputs
        />
      </div>

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 15 минут ⏱️

---

## 🎭 ШАГ 10: ИДИОМЫ (10 минут)

### Цель

Расширить словарный запас устойчивыми выражениями

### Чек-лист

- [ ] 3-5 идиом
- [ ] Для каждой идиомы:
  - [ ] Выражение + перевод
  - [ ] Объяснение значения
  - [ ] 2-3 примера использования
- [ ] CheckableExercise с идиомами (5-6 заданий)
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step10() {
  const items: FillItem[] = [
    {
      left: "1. I",
      right: "a great time at the party!",
      answers: ["have had", "'ve had"],
      explanation: "Идиома 'have a great time' = отлично провести время",
    },
    // ... 5-6 заданий
  ];

  return (
    <UiSection title="🎭 Идиомы и устойчивые выражения">
      {/* Введение */}
      <div className="bg-purple-50 rounded-lg p-6 mb-6 border-2 border-purple-300">
        <p className="text-lg text-zinc-800">
          С Present Perfect часто используются устойчивые выражения и идиомы.
          Знание их поможет звучать естественнее!
        </p>
      </div>

      {/* Идиома 1 */}
      <div className="bg-white rounded-lg p-6 mb-4 border-l-4 border-purple-400">
        <div className="flex items-start gap-4">
          <span className="text-4xl">1️⃣</span>
          <div className="flex-1">
            <p className="text-2xl font-bold text-purple-900 mb-2">
              have a blast
            </p>
            <p className="text-lg text-zinc-600 mb-3">отлично провести время</p>

            <div className="bg-purple-50 rounded-lg p-4 mb-3">
              <p className="font-bold text-purple-900 mb-2">💡 Значение:</p>
              <p className="text-zinc-700">
                Выражение означает, что вы прекрасно провели время, получили
                огромное удовольствие.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-purple-900">📝 Примеры:</p>
              {[
                {
                  en: "We have had a blast at the concert!",
                  ru: "Мы отлично повеселились на концерте!",
                },
                // ... 2-3 примера
              ].map((ex, i) => (
                <div key={i} className="bg-purple-50 rounded p-3">
                  <p className="font-semibold">{ex.en}</p>
                  <p className="text-sm text-zinc-600">{ex.ru}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Идиома 2-5: (аналогично) */}

      {/* Упражнение */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-300">
        <CheckableExercise
          title="Вставьте правильную идиому"
          instruction="Используйте идиомы из списка выше."
          items={items}
          wideInputs
        />
      </div>

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 10 минут ⏱️

---

## 🚀 ШАГ 11: ПРОДВИНУТАЯ ПРАКТИКА (20 минут)

### Цель

Комплексная практика всех аспектов

### Чек-лист

- [ ] CheckableExercise #1: Перевод РУ→EN (8-10 заданий)
- [ ] CheckableExercise #2: Текст с пропусками (8-10 заданий)
- [ ] CheckableExercise #3: Исправь ошибки (6-8 заданий)
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step11() {
  // Упражнение 1: Перевод
  const translationItems: FillItem[] = [
    {
      left: "1. Я только что закончил работу.",
      right: "",
      answers: ["I have just finished work", "I've just finished work"],
      explanation: "Present Perfect + just для недавнего действия",
      wide: true,
    },
    // ... 8-10 заданий
  ];

  // Упражнение 2: Текст
  const textItems: FillItem[] = [
    {
      left: "Sarah",
      right: "(live) in London for five years.",
      answers: ["has lived", "'s lived"],
      explanation: "Present Perfect с 'for' показывает длительность",
    },
    // ... 8-10 заданий
  ];

  // Упражнение 3: Ошибки
  const errorItems: FillItem[] = [
    {
      left: "1. I have saw this movie.",
      right: "",
      answers: ["I have seen this movie", "I've seen this movie"],
      explanation: "После 'have' нужна 3-я форма: see → seen",
      wide: true,
    },
    // ... 6-8 заданий
  ];

  return (
    <UiSection title="🚀 Продвинутая практика">
      {/* Упражнение 1: Перевод */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 border-2 border-blue-300">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          📝 Упражнение 1: Перевод
        </h3>
        <div className="bg-blue-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-900">
            <strong>💡 Подсказка:</strong> Обращайте внимание на маркеры времени
            и контекст!
          </p>
        </div>
        <CheckableExercise
          title="Переведите предложения на английский"
          instruction="Используйте Present Perfect."
          items={translationItems}
          wideInputs
        />
      </div>

      {/* Упражнение 2: Текст */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 mb-6 border-2 border-green-300">
        <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">
          📖 Упражнение 2: Текст с пропусками
        </h3>
        <div className="bg-green-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-green-900">
            <strong>💡 Подсказка:</strong> Читайте весь текст целиком для
            понимания контекста.
          </p>
        </div>
        <CheckableExercise
          title="Заполните пропуски в тексте"
          instruction="Поставьте глаголы в правильную форму Present Perfect."
          items={textItems}
        />
      </div>

      {/* Упражнение 3: Ошибки */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-6 border-2 border-red-300">
        <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">
          🔍 Упражнение 3: Исправьте ошибки
        </h3>
        <div className="bg-red-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-red-900">
            <strong>💡 Подсказка:</strong> Проверяйте have/has, 3-ю форму
            глагола и маркеры времени.
          </p>
        </div>
        <CheckableExercise
          title="Исправьте ошибки в предложениях"
          instruction="Напишите правильный вариант."
          items={errorItems}
          wideInputs
        />
      </div>

      {/* Словарь */}
      {/* ... */}
    </UiSection>
  );
}
```

### Время: 20 минут ⏱️

---

## 🏆 ШАГ 12: ФИНАЛЬНЫЙ ТЕСТ (30 минут)

### Цель

Проверить все знания, подвести итоги, поздравить

### Чек-лист

- [ ] CheckableExercise с финальным тестом (10-15 заданий)
- [ ] Сводная таблица всей темы
- [ ] Поздравление с большой эмоджи (text-7xl)
- [ ] Список достижений (6-8 пунктов)
- [ ] Рекомендации для дальнейшего изучения
- [ ] Ссылки на связанные темы
- [ ] Словарь (9-12 слов)

### Шаблон кода

```tsx
function Step12() {
  const testItems: FillItem[] = [
    {
      left: "1. I",
      right: "(be) to Paris three times.",
      answers: ["have been", "'ve been"],
      explanation: "Present Perfect для опыта в жизни",
    },
    // ... 10-15 заданий высокой сложности
  ];

  return (
    <UiSection title="🏆 Финальный тест и подведение итогов">
      {/* Финальный тест */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-6 border-2 border-indigo-400">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">
          📝 Финальный тест
        </h3>
        <div className="bg-indigo-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-indigo-900">
            <strong>🎯 Цель:</strong> Проверьте все свои знания Present Perfect!
            Если вы ответите правильно на 80%+ вопросов, вы отлично усвоили
            тему.
          </p>
        </div>
        <CheckableExercise
          title="Итоговый тест: Present Perfect"
          instruction="Заполните пропуски, используя все знания из урока."
          items={testItems}
          wideInputs
        />
      </div>

      {/* Сводная таблица */}
      <div className="bg-white rounded-lg p-6 mb-6 border-2 border-purple-200">
        <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
          📊 Сводная таблица: Present Perfect
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-bold bg-purple-50">Формула</td>
                <td className="p-3">have/has + V3</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-bold bg-purple-50">Отрицание</td>
                <td className="p-3">have/has + not + V3</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-bold bg-purple-50">Вопрос</td>
                <td className="p-3">Have/Has + subject + V3?</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-bold bg-purple-50">
                  Когда используется
                </td>
                <td className="p-3">
                  • Опыт в жизни
                  <br />
                  • Результат в настоящем
                  <br />
                  • Недавнее действие
                  <br />• Период до настоящего
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-bold bg-purple-50">Маркеры</td>
                <td className="p-3">
                  just, already, yet, ever, never, for, since, recently
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold bg-purple-50">
                  Отличие от Past Simple
                </td>
                <td className="p-3">
                  НЕ используется с конкретным временем (yesterday, ago,
                  last...)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Поздравление */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 text-center border-2 border-green-200 mb-6">
        <p className="text-7xl mb-4">🎉</p>
        <p className="text-3xl font-bold text-green-900 mb-3">Поздравляем!</p>
        <p className="text-lg text-zinc-700 mb-4">
          Вы завершили изучение <strong>Present Perfect</strong>!
        </p>

        {/* Достижения */}
        <div className="bg-white rounded-lg p-6 inline-block text-left max-w-2xl">
          <p className="text-sm text-zinc-600 mb-3">Теперь вы знаете:</p>
          <ul className="space-y-2 text-sm">
            {[
              "Как образуется Present Perfect (have/has + V3)",
              "Когда использовать Present Perfect",
              "30+ нерегулярных глаголов в 3-й форме",
              "Маркеры времени (just, already, yet, ever, never, for, since)",
              "Отличие Present Perfect от Past Simple",
              "Как избежать типичных ошибок",
              "5+ идиом с Present Perfect",
              "Как применять Present Perfect в реальных ситуациях",
            ].map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Рекомендации */}
      <div className="bg-blue-50 rounded-lg p-6 mb-6 border-2 border-blue-300">
        <h3 className="text-xl font-bold text-blue-900 mb-4">
          💡 Рекомендации для закрепления:
        </h3>
        <div className="space-y-3 text-sm text-zinc-800">
          <div className="flex items-start gap-2">
            <span className="text-xl">📚</span>
            <div>
              <p className="font-bold">Читайте англоязычные тексты</p>
              <p className="text-xs text-zinc-600">
                Обращайте внимание на использование Present Perfect в статьях,
                книгах, блогах.
              </p>
            </div>
          </div>
          {/* ... ещё 3-4 рекомендации */}
        </div>
      </div>

      {/* Следующие темы */}
      <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300">
        <h3 className="text-xl font-bold text-purple-900 mb-4">
          🚀 Что изучать дальше:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              topic: "Present Perfect Continuous",
              reason: "Для длительных действий",
            },
            { topic: "Past Perfect", reason: "Для предпрошедшего времени" },
            {
              topic: "Future Perfect",
              reason: "Для будущих завершённых действий",
            },
          ].map((next, i) => (
            <div
              key={i}
              className="bg-white rounded p-4 border-l-4 border-purple-400"
            >
              <p className="font-bold text-purple-900">{next.topic}</p>
              <p className="text-xs text-zinc-600">{next.reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Словарь */}
      {/* ... */}

      {/* Финальное сообщение */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-6 text-center border-2 border-amber-300">
        <p className="text-2xl mb-2">💪</p>
        <p className="font-bold text-amber-900">
          Продолжайте практиковаться и совершенствуйте свой английский!
        </p>
      </div>
    </UiSection>
  );
}
```

### Время: 30 минут ⏱️

---

## 🎯 ИТОГОВАЯ ПРОВЕРКА

### Перед публикацией урока:

#### Структура

- [ ] 10-12 шагов реализовано
- [ ] Каждый шаг имеет `<UiSection title="...">`
- [ ] Switch statement работает корректно
- [ ] Экспорт компонента правильный

#### Контент

- [ ] 60+ CheckableExercise заданий
- [ ] 100-150 примеров предложений
- [ ] 80-120 слов в словарях (12 словарей × 9-12 слов)
- [ ] 3-4 диалога
- [ ] 3-5 идиом
- [ ] 7-10 типичных ошибок
- [ ] Сравнение с русским языком
- [ ] Сравнение с другими временами

#### Упражнения

- [ ] Все `answers` массивы заполнены
- [ ] Учтены варианты (полная форма + сокращения)
- [ ] `explanation` для каждого задания
- [ ] `wide` prop где нужно
- [ ] Прогрессивная сложность

#### Визуал

- [ ] 50+ эмоджи
- [ ] 7+ разных градиентов
- [ ] 15+ градиентных блоков
- [ ] Hero с text-7xl эмоджи
- [ ] Все карточки rounded-lg
- [ ] Все границы border-2
- [ ] md: классы для адаптивности

#### Финал

- [ ] Финальный тест (10-15 заданий)
- [ ] Сводная таблица
- [ ] Поздравление text-7xl
- [ ] 6-8 достижений
- [ ] Рекомендации
- [ ] Ссылки на следующие темы

---

## 🚀 ПУБЛИКАЦИЯ

### После завершения урока:

1. **Добавьте в topics.ts:**

```typescript
{
  id: "presentperfect",
  title: "Present Perfect",
  description: "Настоящее совершённое время",
  steps: 12,
},
```

2. **Добавьте в `[track]/page.tsx`:**

```typescript
import PresentPerfect from "@/components/lesson/presentperfect/PresentPerfect";

// В функции getTopicById:
case "presentperfect":
  return PresentPerfect;
```

3. **Протестируйте:**

- [ ] Все шаги переключаются
- [ ] Все упражнения работают
- [ ] Кнопки "Проверить"/"Сбросить" функционируют
- [ ] Enter навигация работает
- [ ] Мобильная версия корректна
- [ ] Нет ошибок в консоли

4. **Коммит:**

```bash
git add .
git commit -m "feat: add Present Perfect lesson (12 steps, 60+ exercises)"
git push
```

---

## 📊 СТАТИСТИКА ТИПИЧНОГО УРОКА

```
Время создания: 11 часов
Строк кода: ~1800-2000
Упражнений: 60-80
Примеров: 100-150
Слов в словаре: 80-120
Эмоджи: 50-70
Градиентных блоков: 15-20
Таблиц: 5-8
Диалогов: 3-4
Идиом: 3-5
Ошибок: 7-10
```

---

**Следуйте этой инструкции шаг за шагом, и вы создадите идеальный урок!** 🎓







