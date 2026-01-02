# Tutor Mode V2 — Полная переработка системы обучения

## Обзор изменений

Tutor Mode V2 решает ключевые проблемы предыдущей версии:
1. **Контекст не терялся** — Context Anchors в каждом сообщении
2. **Модель ОБУЧАЕТ, а не тестирует** — TutorLoop: Explain → Check → Practice
3. **SkillVector используется** — Decision Policy на основе слабых навыков
4. **Интересные ответы** — Micro-hooks, примеры из интересов
5. **Модалки 1-2 раза в день** — Topic Selection Algorithm

---

## 1. TutorLoop State Machine

### Состояния

```
WARMUP → GOAL_ALIGN → TEACH → CHECK → PRACTICE → REVIEW → NEXT_STEP
                         ↓
                       ADAPT (если не понял)
```

| Состояние | Действие | Переходы |
|-----------|----------|----------|
| WARMUP | Короткий чек-ин ("Как настроение?") | → GOAL_ALIGN, TEACH |
| GOAL_ALIGN | "Сегодня поработаем над X потому что..." | → TEACH |
| TEACH | Micro-hook + объяснение + 2-3 примера | → CHECK |
| CHECK | 1-2 вопроса на понимание | → PRACTICE, ADAPT |
| ADAPT | Если не понял: проще + другой пример | → CHECK |
| PRACTICE | Одно упражнение | → REVIEW |
| REVIEW | "Отлично! Ты разобрался с..." | → NEXT_STEP |
| NEXT_STEP | "Готов к следующей теме?" | → TEACH |

### Файл: `apps/api/src/ai/prompts/tutor-system-v2.ts`

---

## 2. Context Anchors

В КАЖДОМ сообщении модель получает:

```
╔═══════════════════════════════════════════════════════════════╗
║                    CONTEXT ANCHORS (ОБЯЗАТЕЛЬНО)              ║
╠═══════════════════════════════════════════════════════════════╣
║ LEVEL: A1   │ GOAL: IELTS 6.5           │ TIME: 15min  ║
║ WEAK: grammar, vocabulary, speaking                        ║
║ SKILLS: gram:35|voca:42|pron:50|list:48|spea:40    ║
║ TODAY: 2 tasks │ STREAK: 5 days                         ║
║ ERRORS: I is happy, she am                              ║
║ INTERESTS: музыка, путешествия                          ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 3. Pre-Response Checklist

Модель обязана проверить перед каждым ответом:

```
╔═══════════════════════════════════════════════════════════════╗
║              PRE-RESPONSE CHECKLIST (ПЕРЕД ОТВЕТОМ)           ║
╠═══════════════════════════════════════════════════════════════╣
║ □ Посмотрел на LEVEL и адаптировал сложность?                 ║
║ □ Использовал WEAK skills для выбора темы?                    ║
║ □ Добавил примеры из INTERESTS?                               ║
║ □ Учёл ERRORS при объяснении?                                 ║
║ □ Не превысил TIME лимит?                                     ║
║ □ Добавил micro-hook в начале?                                ║
║ □ Ответ короткий (≤8 предложений)?                            ║
║ □ Есть вопрос на проверку понимания?                          ║
║ □ JSON блок в конце с nextState и memoryRecap?                ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 4. Memory Recap (персистентная память)

В каждом ответе модель возвращает JSON с memoryRecap:

```json
{
  "state": "TEACH",
  "nextState": "CHECK",
  "microTopic": "articles_a_an",
  "targetSkill": "grammar",
  "memoryRecap": {
    "taughtConcepts": ["a vs an", "vowel sounds"],
    "studentUnderstood": true,
    "errorsNoted": [],
    "nextFocus": "practice with articles"
  },
  "task": null
}
```

Этот memoryRecap передаётся в следующее сообщение как контекст.

---

## 5. Topic Selection Algorithm

### Формула приоритета

```
priority = weaknessWeight + examRelevance + recencyPenalty + noveltyBonus + interestMatch
```

### Веса (по умолчанию)

| Фактор | Вес | Описание |
|--------|-----|----------|
| WEAKNESS_MULTIPLIER | 30 | (1 - skillValue) * 30 |
| IELTS_RELEVANCE_BONUS | 15 | Если есть цель IELTS |
| RECENCY_PENALTY_PER_DAY | -5 | За каждый день с момента изучения |
| NOVELTY_BONUS | 10 | Если тема новая |
| INTEREST_MATCH_BONUS | 12 | Если совпадает с интересами |
| ERROR_RELEVANCE_BONUS | 25 | Если связано с недавними ошибками |

### Файл: `apps/api/src/services/topic-selection.service.ts`

---

## 6. Topic Modal Schema

### JSON структура (3-7 страниц)

```json
{
  "type": "topic_modal",
  "topicId": "grammar_a1_to_be_v1_1704067200000",
  "templateId": "grammar_a1_to_be_v1",
  "cefrLevel": "A1",
  "targetSkills": ["grammar", "vocabulary"],
  "estimatedMinutes": 10,
  "pages": [
    {
      "type": "hook",
      "title": "Did you know?",
      "contentBlocks": [...]
    },
    {
      "type": "explain",
      "title": "The Rule",
      "contentBlocks": [...]
    },
    {
      "type": "check",
      "interactions": [...]
    },
    {
      "type": "practice",
      "interactions": [...]
    },
    {
      "type": "summary",
      "contentBlocks": [...]
    }
  ]
}
```

### Файл: `packages/types/src/topic-modal.ts`

---

## 7. Topic Template System

### Шаблон темы (TopicTemplateV2)

```typescript
interface TopicTemplateV2 {
  id: string;
  name: string;
  nameRu: string;
  category: string;
  tags: string[];

  primarySkill: SkillType;
  secondarySkills: SkillType[];

  applicableLevels: CEFRLevel[];
  difficultyRange: [number, number];

  placeholders: {
    example_1: string;
    hook_fact: string;
    common_errors: string[];
  };

  defaultPages: ModalPageTemplate[];

  selectionCriteria: {
    weaknessThreshold: number;
    errorTopics: string[];
    interestBoost: string[];
    cooldownDays: number;
  };
}
```

### Пример: `apps/api/src/data/topic-templates/grammar/a1-to-be.template.ts`

---

## 8. Dual-Model Routing

| Модель | Температура | Когда использовать |
|--------|-------------|-------------------|
| DeepSeek-chat | 0.7 | Обучение, объяснения, практика |
| DeepSeek-R1 | 0.2 | Оценка ответов, skill delta |

---

## 9. Пример диалога (A1 + IELTS)

### Сообщение 1: User
```
hi
```

### Ответ 1: AI (WARMUP → GOAL_ALIGN → TEACH)
```
Привет! Как настроение? Готов учиться?

Я заметил, что артикли (a/the) — твоя слабая сторона.
Давай разберём! Это реально важно для IELTS.

А ты знал, что 90% учеников путают a и an?
Секрет простой: смотри на ЗВУК, а не на букву!

Правило:
- "a" → перед согласными звуками (a book, a cat)
- "an" → перед гласными ЗВУКАМИ (an apple, an hour — h немая!)

Примеры:
- I am a music lover. (music начинается с [m])
- It's an honor. (honor начинается с [o], h немая)

Понятно? Давай проверим!

```json
{
  "state": "TEACH",
  "nextState": "CHECK",
  "microTopic": "articles_a_an",
  "targetSkill": "grammar",
  "memoryRecap": {
    "taughtConcepts": ["a vs an rule", "sound not letter"],
    "studentUnderstood": null,
    "errorsNoted": [],
    "nextFocus": "check understanding"
  }
}
```
```

### Сообщение 2: User
```
да понятно
```

### Ответ 2: AI (CHECK)
```
Отлично! Давай проверим.

Какой артикль нужен: ___ university?

a) a
b) an

Подумай о звуке, с которого начинается "university"...

```json
{
  "state": "CHECK",
  "nextState": "PRACTICE",
  "checkQuestion": "a or an before university",
  "memoryRecap": {
    "studentUnderstood": true
  }
}
```
```

### Сообщение 3: User
```
an
```

### Ответ 3: AI (ADAPT → re-explain)
```
Почти! Но тут хитрость.

University начинается с буквы U, но ЗВУК [ju:] — это согласный!
Слышишь? "Юниверсити" — как "й" в начале.

Поэтому: a university, a uniform, a European country.
Но: an umbrella (звук [ʌ] — гласный).

Попробуй ещё раз: ___ hour?

```json
{
  "state": "ADAPT",
  "nextState": "CHECK",
  "memoryRecap": {
    "taughtConcepts": ["university exception", "sound [ju:]"],
    "studentUnderstood": false,
    "errorsNoted": ["an university"]
  }
}
```
```

### Сообщение 4: User
```
an hour
```

### Ответ 4: AI (CHECK → PRACTICE)
```
Точно! H в "hour" немая, слышится [aʊə] — гласный звук.

Ты понял главное: слушай ЗВУК, а не смотри на букву!

Теперь практика. Заполни пропуски:

1. I have ___ idea.
2. She is ___ honest person.
3. It's ___ European city.

Не бойся ошибаться — это часть обучения!

```json
{
  "state": "PRACTICE",
  "nextState": "REVIEW",
  "task": {
    "type": "fill_blank",
    "content": {
      "sentence": "1. I have ___ idea. 2. She is ___ honest person. 3. It's ___ European city.",
      "blanks": [
        {"index": 0, "answer": "an"},
        {"index": 1, "answer": "an"},
        {"index": 2, "answer": "a"}
      ]
    },
    "targetSkills": ["grammar"],
    "difficulty": 4
  }
}
```
```

---

## 10. План миграции шаблонов (steps → templates)

### Шаг 1: Анализ существующих steps
```sql
SELECT DISTINCT type, category FROM old_steps;
```

### Шаг 2: Создание маппинга
```typescript
const MIGRATION_MAP = {
  'grammar_articles': 'grammar_a1_articles_v1',
  'vocab_travel': 'vocabulary_a2_travel_v1',
  // ...
};
```

### Шаг 3: Миграция полей

| Старое поле | Новое поле |
|-------------|-----------|
| content | placeholders.example_1 |
| description | description + descriptionRu |
| level | applicableLevels |
| skills | primarySkill + secondarySkills |

### Шаг 4: Добавление метаданных
```typescript
{
  schemaVersion: '2.0',
  tags: ['grammar', 'articles', 'a-an-the'],
  selectionCriteria: { ... },
  version: '1.0.0'
}
```

---

## 11. Dual-AI Architecture

### Концепция

Система использует две отдельные AI модели для разных задач:

```
User Message → AI-2 (Tutor Chat) → Response to User
                     ↓
             AI-1 (Analytics) → DB Update → SkillVector Delta
                     ↓
            Context for next message
```

### AI-1: Skill Analytics Engine

**Роль:** Работа с базой данных, анализ прогресса, расчёт skill deltas

**Температура:** 0.2 (низкая для консистентных расчётов)

**Задачи:**
- Анализ ответов пользователя
- Расчёт изменений 10-мерного skill vector
- Определение паттернов ошибок
- Рекомендация следующих тем
- Обновление DB

```typescript
interface SkillDelta {
  skill: SkillType;
  delta: number;          // -0.05 to +0.05
  reason: string;
  confidence: number;     // 0-1
}

// Правила расчёта delta:
// - Правильный ответ быстро: +0.03 to +0.05
// - Правильный ответ медленно: +0.01 to +0.02
// - Частично правильно: -0.01 to +0.01
// - Неправильно (minor error): -0.01 to -0.02
// - Неправильно (major error): -0.03 to -0.05
// - Повторная ошибка того же типа: удвоить negative delta
```

### AI-2: Tutor Chat System

**Роль:** Взаимодействие с пользователем, обучение

**Температура:** 0.7 (выше для естественности)

**Задачи:**
- Получение контекста от AI-1
- Генерация обучающих ответов
- Следование TutorLoop
- Создание заданий
- Возврат memoryRecap

### AI Bridge

Координатор между AI-1 и AI-2:

```typescript
class AIBridge {
  async processInteraction(params: {
    userId: string;
    message: string;
    conversationState: ConversationState;
    history: Array<{ role: 'user' | 'assistant'; content: string }>;
    taskSubmission?: {
      taskId: string;
      answer: string;
      timeSpent: number;
    };
  }): Promise<{
    response: string;
    newState: ConversationState;
    task?: any;
    skillUpdates?: SkillDelta[];
    memoryRecap: MemoryRecap;
  }>
}
```

### 10-Dimensional Skill Vector

```typescript
const SKILL_DIMENSIONS: SkillType[] = [
  'grammar',        // Грамматика
  'vocabulary',     // Словарный запас
  'pronunciation',  // Произношение
  'listening',      // Понимание на слух
  'speaking',       // Разговорная речь
  'slang',          // Сленг и идиомы
  'word_formation', // Словообразование
  'fluency',        // Беглость речи
  'writing',        // Письменная речь
  'comprehension',  // Общее понимание
];
```

### Файл: `apps/api/src/ai/dual-ai-system.ts`

---

## 12. Интеграция с chat.service.ts

Используй `aiBridge` для взаимодействия с dual-AI системой:

```typescript
import { aiBridge, type SkillDelta } from '../ai/dual-ai-system';

// В методе sendMessage:
const aiResponse = await aiBridge.processInteraction({
  userId,
  message: content,
  conversationState,
  history: history.map(m => ({
    role: m.role as 'user' | 'assistant',
    content: m.content,
  })),
  taskSubmission, // optional: если пользователь отправил ответ на задание
});

// aiResponse содержит:
// - response: string (текст ответа для пользователя)
// - newState: ConversationState
// - task?: TaskPayload (если создано задание)
// - skillUpdates?: SkillDelta[] (если были изменения навыков)
// - memoryRecap: MemoryRecap (для персистентной памяти)
```

### Обработка ответа на задание

```typescript
// Пользователь отправляет ответ на задание:
const result = await chatService.sendMessage({
  userId,
  content: "an hour",
  conversationId,
  taskSubmission: {
    taskId: "task-123",
    answer: "an hour",
    timeSpent: 15, // секунд
  },
});

// result.skillUpdates содержит изменения навыков от AI-1
```

---

## Итог

Tutor Mode V2 обеспечивает:
- ✅ Контекст всегда используется (Context Anchors)
- ✅ Обучение до практики (TutorLoop)
- ✅ Интересные ответы (Micro-hooks)
- ✅ Память между сообщениями (memoryRecap)
- ✅ Умный выбор тем (Topic Selection)
- ✅ Модалки для глубокого изучения (TopicModal)
- ✅ Dual-AI архитектура (AI-1 Analytics + AI-2 Tutor)
- ✅ 10-мерный Skill Vector с автоматическим обновлением

---

## Файлы системы

### Новые файлы

| Файл | Описание |
|------|----------|
| `apps/api/src/ai/prompts/tutor-system-v2.ts` | System prompt с TutorLoop |
| `apps/api/src/ai/orchestrator-v2.ts` | Orchestrator V2 |
| `apps/api/src/ai/dual-ai-system.ts` | Dual-AI архитектура |
| `apps/api/src/services/topic-selection.service.ts` | Алгоритм выбора тем |
| `packages/types/src/topic-modal.ts` | JSON схемы для модалок |
| `apps/api/src/data/topic-templates/grammar/a1-to-be.template.ts` | Пример шаблона |

### Обновлённые файлы

| Файл | Изменения |
|------|-----------|
| `apps/api/src/services/chat.service.ts` | Интеграция с dual-AI |
| `packages/types/src/index.ts` | Экспорт новых типов |
