# 📝 Как добавить темы в B1 и B2

## 🎯 Быстрая инструкция

### 1️⃣ Добавить тему в конфигурацию

**Файл:** `src/lib/topics.ts`

```typescript
export const B1_TOPICS: Topic[] = [
  { id: "past-perfect", title: "Past Perfect" }, // ← Новая тема
  { id: "reported-speech", title: "Reported Speech" },
  // ... остальные темы
];
```

### 2️⃣ Обновить список в page.tsx

**Файл:** `src/app/blocks/b1/page.tsx`

```typescript
// В начале функции Page
const topics = [
  "past-perfect", // ← Добавить ID
  "reported-speech",
  // ... остальные
];

const topicTitles: Record<string, string> = {
  "past-perfect": "Past Perfect", // ← Добавить название
  "reported-speech": "Reported Speech",
};
```

### 3️⃣ Создать компонент

**Файл:** `src/components/lesson/pastperfect/PastPerfect.tsx`

```typescript
"use client";

type Props = { step: number };

export default function PastPerfect({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    default:
      return <Step1 />;
  }
}

function Step1() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Past Perfect: Введение
      </h2>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <p className="text-gray-700">
          Past Perfect используется для описания действия, которое произошло до
          другого действия в прошлом.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Формула</h3>
        <div className="bg-white border rounded-lg p-4">
          <code className="text-indigo-600">
            Subject + had + Past Participle (V3)
          </code>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Примеры</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-emerald-600">✓</span>
            <span>
              I <b>had finished</b> my homework before dinner.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-600">✓</span>
            <span>
              She <b>had left</b> when I arrived.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Past Perfect: Практика
      </h2>
      {/* Упражнения */}
    </div>
  );
}

function Step3() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Past Perfect: Закрепление
      </h2>
      {/* Финальные упражнения */}
    </div>
  );
}
```

### 4️⃣ Импортировать в page.tsx

**Файл:** `src/app/blocks/b1/page.tsx`

```typescript
// В начале файла
import PastPerfect from "@/components/lesson/pastperfect/PastPerfect";

// В функции Page, внутри switch
let Content: React.JSX.Element;
switch (t) {
  case "past-perfect":
    Content = <PastPerfect step={step} key={`past-perfect-${step}`} />;
    break;
  // ... другие темы
}

// Добавить количество шагов
const stepCounts: Record<string, number> = {
  "past-perfect": 3, // ← Количество шагов
  // ... другие темы
};
```

### 5️⃣ Готово! 🎉

Теперь тема доступна по адресу:

```
http://localhost:3001/blocks/b1?t=past-perfect&s=1
```

---

## 🎨 Структура шагов (рекомендация)

### Стандартная структура урока (7-10 шагов):

1. **Introduction** — Введение в тему
2. **Theory** — Теория и правила
3. **Formation** — Формирование конструкций
4. **Examples** — Примеры с переводом
5. **Practice 1** — Простые упражнения
6. **Practice 2** — Средние упражнения
7. **Practice 3** — Сложные упражнения
8. **Common Mistakes** — Частые ошибки
9. **Real Life Usage** — Применение в жизни
10. **Final Test** — Итоговый тест

---

## 📦 Готовый шаблон

Скопируйте и измените:

```typescript
"use client";

type Props = { step: number };

export default function YourTopic({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

function Step1() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Название шага</h2>
      <p className="text-gray-700">Контент...</p>
    </div>
  );
}

// ... остальные шаги
```

---

## 🎯 Полезные компоненты

### Section с заголовком

```typescript
import Section from "@/components/ui/Section";

<Section title="Правила образования">
  <p>Контент секции...</p>
</Section>;
```

### Карточка с примером

```typescript
<div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
  <p>
    <b>Example:</b> I had finished my work.
  </p>
  <p className="text-sm text-gray-600">Я закончил свою работу.</p>
</div>
```

### Список с чекбоксами

```typescript
<ul className="space-y-2">
  {["Rule 1", "Rule 2", "Rule 3"].map((rule, idx) => (
    <li key={idx} className="flex items-start gap-2">
      <span className="text-emerald-600">✓</span>
      <span>{rule}</span>
    </li>
  ))}
</ul>
```

### Таблица

```typescript
<div className="overflow-x-auto">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2">Subject</th>
        <th className="border px-4 py-2">Verb</th>
        <th className="border px-4 py-2">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">I</td>
        <td className="border px-4 py-2">had finished</td>
        <td className="border px-4 py-2">I had finished</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 🚀 Быстрый старт для B1

### Создать 5 первых тем за раз:

```bash
# 1. Past Perfect
mkdir -p src/components/lesson/pastperfect
touch src/components/lesson/pastperfect/PastPerfect.tsx

# 2. Reported Speech
mkdir -p src/components/lesson/reportedspeech
touch src/components/lesson/reportedspeech/ReportedSpeech.tsx

# 3. Second Conditional
mkdir -p src/components/lesson/secondconditional
touch src/components/lesson/secondconditional/SecondConditional.tsx

# 4. Third Conditional
mkdir -p src/components/lesson/thirdconditional
touch src/components/lesson/thirdconditional/ThirdConditional.tsx

# 5. Phrasal Verbs
mkdir -p src/components/lesson/phrasalverbs
touch src/components/lesson/phrasalverbs/PhrasalVerbs.tsx
```

Затем заполните каждый файл шаблоном выше.

---

## ✅ Чек-лист для каждой темы

- [ ] ID темы в `topics.ts`
- [ ] Название темы в `topics.ts`
- [ ] ID в массиве `topics` в page.tsx
- [ ] Название в `topicTitles` в page.tsx
- [ ] Создан компонент в `/components/lesson/{topic}/`
- [ ] Импортирован компонент в page.tsx
- [ ] Добавлен case в switch
- [ ] Указано количество шагов в `stepCounts`
- [ ] Проверено в браузере
- [ ] Нет linter ошибок

---

**Удачи с заполнением контента! 🎓**
