# Tutor System V3 - Implementation Report

## 1. Changed Files

| File | Changes |
|------|---------|
| `apps/api/src/ai/prompts/tutor-system-v3.ts` | NEW: Complete V3 tutor system with TutorLoop, Context Anchor, guardrails, QA validation |
| `packages/types/src/lesson-modal-v3.ts` | NEW: LessonModalV3 types, 7 page types, interaction types, A1 example lesson |
| `apps/api/src/ai/dual-ai-system.ts` | UPDATED: V3 prompt integration, enforced transitions, userProfile passing, QA validation |
| `apps/api/src/services/chat.service.ts` | UPDATED: Now passes full userProfile (interests, learningGoal, dailyTimeMinutes) |
| `packages/types/src/index.ts` | UPDATED: Exports for LessonModalV3 types |
| `apps/api/src/services/lesson-generator.service.ts` | NEW: Template-to-lesson generator with topic selection algorithm |
| `apps/api/src/services/__tests__/tutor-v3.test.ts` | NEW: 45 unit tests for V3 functionality |
| `apps/api/vitest.config.ts` | NEW: Vitest configuration |
| `apps/api/package.json` | UPDATED: Added test scripts and vitest dependency |

---

## 2. Why It Will Work Now

### Root Causes Fixed

| Problem | Previous State | V3 Fix |
|---------|---------------|--------|
| Context ignored | Context anchor in USER message, easily skipped | Context anchor now in SYSTEM prompt with visual framing (`╔═══`) |
| userProfile empty | `interests: []`, `learningGoal: undefined` hardcoded | `getUserProfile()` fetches from DB, passed through entire chain |
| State not applied | `updateState()` ignored `nextState` from AI response | `updateStateV3()` validates and applies `nextState` with enforced transitions |
| QA skipping | `quickCheck()` passed all responses >100 chars | `validateTutorResponse()` runs full checks regardless of length |
| Tasks before explanation | No enforcement | Validation rejects tasks in WARMUP/GOAL_ALIGN states with `mustRegenerate: true` |
| No CHECK after TEACH | Optional | `TUTOR_LOOP_V3_TRANSITIONS` enforces TEACH → SELF_CHECK → CHECK |

### Key Improvements

1. **Mandatory Context Anchor in SYSTEM Prompt**
   - Visual box with `╔════╗` framing that's impossible to miss
   - Contains: LEVEL, GOAL, WEAK SKILLS, ERRORS, INTERESTS, IELTS strategy
   - AI cannot claim it "didn't see" the context

2. **Enforced TutorLoop State Machine**
   ```
   WARMUP → GOAL_ALIGN → TEACH → SELF_CHECK → CHECK → (ADAPT | PRACTICE) → REVIEW → NEXT_STEP
   ```
   - Invalid transitions blocked at code level
   - Auto-fallback to valid next state if AI suggests invalid transition

3. **QA Validation with Regeneration**
   - Validates: examples present, question in CHECK, no tasks before explanation
   - `mustRegenerate: true` triggers retry with stricter prompt
   - Sentence count limits by CEFR level (A1: 5, B2: 10, C2: 15)

4. **CEFR-Aware IELTS Strategy**
   - A1-A2 + IELTS goal: "IELTS = дальняя цель. Сейчас: ТОЛЬКО база"
   - B1+: Gradual IELTS format introduction
   - `ieltsFormatAllowed()` guardrail prevents IELTS tasks for beginners

5. **Language Policy**
   - Explanations: Russian only
   - Examples: English + translation
   - Practice: English (with RU hints for A1-A2)

---

## 3. Example Tutor Responses

### A1 Level - Articles (First Interaction)

**Context:**
- CEFR Level: A1
- Weak Skills: grammar, vocabulary, speaking
- Interests: movies, music
- Learning Goal: "Improve everyday English"
- Recent Errors: article usage

**Expected Response:**

```
Привет! Готов узнать кое-что полезное про английский?

Сегодня разберём артикли — это твоя слабая сторона. Без них даже простые фразы звучат странно!

Знаешь, что 90% учеников путают "a" и "an"? Секрет простой:

"a" — перед согласным звуком: a book, a movie
"an" — перед гласным звуком: an apple, an actor

Вот два примера из фильмов:
• "I watched a movie" — Я посмотрел фильм
• "She is an actress" — Она актриса

Понятно?
```

```json
{
  "currentState": "WARMUP",
  "nextState": "GOAL_ALIGN",
  "microTopic": "articles_a_an",
  "targetSkill": "grammar",
  "selfCheckPassed": true,
  "memoryRecap": {
    "taughtConcepts": ["a/an rule based on sound"],
    "studentUnderstood": true,
    "errorsNoted": [],
    "nextFocus": "practice with real examples",
    "engagementTechniques": ["movie examples", "statistics hook"]
  },
  "task": null
}
```

---

### B1 Level - Present Perfect (After Understanding Confirmed)

**Context:**
- CEFR Level: B1
- Weak Skills: speaking, fluency, word_formation
- Interests: technology, gaming
- Learning Goal: "IELTS preparation"
- Current State: PRACTICE
- Student just answered CHECK question correctly

**Expected Response:**

```
Точно! Отлично понял разницу!

Теперь практика. Попробуй:

Заполни пропуск правильной формой глагола:

"I _____ (play) this game for three years."

+1 к grammar за правильный ответ!
```

```json
{
  "currentState": "CHECK",
  "nextState": "PRACTICE",
  "microTopic": "present_perfect_duration",
  "targetSkill": "grammar",
  "selfCheckPassed": true,
  "memoryRecap": {
    "taughtConcepts": ["present perfect with 'for'"],
    "studentUnderstood": true,
    "errorsNoted": [],
    "nextFocus": "reinforce with practice",
    "engagementTechniques": ["gaming context", "gamification"]
  },
  "task": {
    "templateId": "fill_blank_v1",
    "type": "grammar",
    "difficulty": 5,
    "content": {
      "sentence": "I _____ (play) this game for three years.",
      "blank": "_____",
      "correctAnswer": "have played",
      "hint": "Используй Present Perfect для действия, которое началось в прошлом и продолжается"
    },
    "targetSkills": ["grammar"],
    "objectives": ["Apply present perfect with duration"],
    "expectedTimeSeconds": 30
  }
}
```

---

### B2 Level - IELTS Writing Task 2 (IELTS goal, ready for format)

**Context:**
- CEFR Level: B2
- Weak Skills: writing, fluency
- Interests: environment, technology
- Learning Goal: "IELTS band 7"
- Current State: TEACH

**Expected Response:**

```
А ты знал, что structure — это 25% оценки IELTS essay?

Сегодня разберём базовую структуру эссе. Это твоя слабая сторона, и без неё не видать Band 7!

Классический формат:

1. Introduction: Перефразируй вопрос + thesis
2. Body 1: Первый аргумент + пример
3. Body 2: Второй аргумент + пример
4. Conclusion: Резюме без новых идей

Пример темы про технологии:
"Some people think that technology has made our lives too complex."

• "Technology has transformed daily life" — перефразировка
• "This essay will argue that..." — thesis

Понятно? Или разобрать подробнее?
```

```json
{
  "currentState": "TEACH",
  "nextState": "SELF_CHECK",
  "microTopic": "ielts_essay_structure",
  "targetSkill": "writing",
  "selfCheckPassed": true,
  "memoryRecap": {
    "taughtConcepts": ["4-paragraph essay structure", "paraphrasing"],
    "studentUnderstood": true,
    "errorsNoted": [],
    "nextFocus": "practice with real topic",
    "engagementTechniques": ["statistics hook", "tech interest"]
  },
  "task": null
}
```

---

## 4. Test Coverage

**45 tests in `tutor-v3.test.ts`:**

1. **Context Anchor (8 tests)**
   - Anchor in system prompt
   - Contains level, goal, weak skills, interests, errors
   - IELTS strategy by level

2. **No Tasks Before Explanation (4 tests)**
   - Rejects tasks in WARMUP
   - Rejects tasks in GOAL_ALIGN
   - Allows tasks in PRACTICE
   - `mustRegenerate: true` on violation

3. **CHECK After TEACH (5 tests)**
   - Question required in CHECK state
   - TEACH → SELF_CHECK only
   - SELF_CHECK → CHECK only
   - Cannot skip CHECK

4. **State Transitions (9 tests)**
   - All states have defined transitions
   - Valid transitions only
   - Complete cycle possible
   - Invalid transitions blocked

5. **QA Validation (8 tests)**
   - Validates long responses
   - Detects missing examples
   - Detects missing JSON
   - Sentence limits by CEFR
   - Markdown detection

6. **Guardrails (5 tests)**
   - TutorLoop enforced
   - Max tasks before explanation
   - Max concepts per session
   - IELTS format by level

7. **System Prompt (6 tests)**
   - TutorLoop instructions
   - Language policy
   - Rules/prohibitions
   - JSON format
   - Self-check

---

## 5. How to Verify

```bash
# Run tests
cd apps/api
npm test

# Watch mode
npm run test:watch

# Start API and test manually
npm run dev
```

Manual verification checklist:
1. Send first message after onboarding → Should see roadmap
2. Ask about grammar → Should explain BEFORE any task
3. Check state in response JSON → Should follow TutorLoop
4. Verify context anchor in server logs → Should contain full profile

---

## 6. Known Limitations

1. **Example detection includes JSON quotes** - The `validateTutorResponse` function checks for `"` anywhere in response, including JSON block. This means a response with JSON but no examples in text will pass. Could be improved by extracting text before JSON block.

2. **CEFR estimation** - Currently estimated from skill vector average. Could be improved with more sophisticated calculation.

3. **Streak calculation** - Hardcoded to 0, needs proper DB calculation.

4. **Time remaining** - Simple calculation, could consider actual session time.

---

## 7. Next Steps

1. **Add integration tests** - Test full flow with mock AI responses
2. **Add monitoring** - Track QA rejection rate, state distribution
3. **Refine example detection** - Check only text before JSON block
4. **Add lesson caching** - Cache generated lessons for reuse
5. **A/B test** - Compare V2 vs V3 tutor effectiveness
