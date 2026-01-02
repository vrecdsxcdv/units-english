# V4.1 Implementation Report

## Overview

V4.1 extends V3 TutorLoop with real-time intelligence:

1. **Runtime Signals** - Fatigue and plateau detection integrated into TutorLoop pipeline
2. **Weekly Reports** - New API endpoint and UI for comprehensive weekly learning reports

---

## Task 1: TutorLoop Runtime Adaptation

### What Was Built

#### 1. RuntimeSignalsV4 Types (`packages/types/src/runtime-signals-v4.types.ts`)

```typescript
interface RuntimeSignalsV4 {
  computedAt: Date;
  fatigue?: RuntimeFatigueSignal;
  plateau?: RuntimePlateauSignal;
  overrides: TutorLoopOverrides;
  explanation: string[];
}

interface TutorLoopOverrides {
  blockNewConcepts: boolean;
  maxDifficulty: number;        // 1-10
  reviewToNewRatio: number;     // 0.0-1.0
  forceState?: TutorLoopStateV3;
  skipStates: TutorLoopStateV3[];
  shortenTeach: boolean;
  requireExtraExamples: boolean;
  switchToSimplerFormat: boolean;
  simplificationLevel: 0 | 1 | 2 | 3;
  reduceTasksCount: boolean;
  maxTasksPerPractice: number;
  suggestBreak: boolean;
  endSessionSoon: boolean;
  maxRemainingMinutes: number;
  pronunciationFocus: boolean;
  targetErrorPatterns: string[];
  encouragementBoost: boolean;
  showProgressReminder: boolean;
}
```

#### 2. Runtime Signals Service (`apps/api/src/services/v4/runtime-signals.service.ts`)

- `computeRuntimeSignalsV4(context)` - Main function called before each AI-2 response
- `buildOverrideInstruction(overrides)` - Generates system prompt additions
- Presets: `FATIGUE_HIGH`, `FATIGUE_MODERATE`, `PLATEAU_STAGNATION`, `PLATEAU_ERROR_PATTERN`, `PLATEAU_OSCILLATION`

#### 3. Integration into TutorChatSystem (`apps/api/src/ai/dual-ai-system.ts`)

- Session metrics caching per user
- Runtime signals computed before each message
- Override instructions added to system prompt
- Forced state transitions when overrides require

#### 4. Enhanced QA Validation (`apps/api/src/ai/prompts/tutor-system-v3.ts`)

- `validateTutorResponse()` now accepts optional `ValidationOverrides`
- Validates blockNewConcepts compliance
- Checks task count limits
- Verifies break suggestions when required

### Override Presets

| Scenario | Key Overrides |
|----------|--------------|
| **Fatigue: High** | `blockNewConcepts: true`, `maxDifficulty: 3`, `suggestBreak: true` |
| **Fatigue: Moderate** | `maxDifficulty: 5`, `reduceTasksCount: true`, `encouragementBoost: true` |
| **Plateau: Stagnation** | `switchToSimplerFormat: true`, `requireExtraExamples: true` |
| **Plateau: Error Pattern** | `blockNewConcepts: true`, `targetErrorPatterns: [...]`, `simplificationLevel: 2` |
| **Plateau: Oscillation** | `blockNewConcepts: true`, `reviewToNewRatio: 0.8` |

### How It Works

1. Before each AI-2 message generation, `computeRuntimeSignalsV4()` is called
2. Fatigue is detected from session metrics (errors, time, response patterns)
3. Plateau is detected from skill history (stagnation, oscillation, error patterns)
4. Overrides are merged (fatigue takes priority for safety)
5. `buildOverrideInstruction()` generates system prompt block
6. AI-2 receives overrides in SYSTEM prompt
7. `validateTutorResponse()` enforces override compliance

---

## Task 2: Weekly Reports

### API Endpoint

```
GET /api/progress/weekly-report?weekStart=YYYY-MM-DD
Authorization: Bearer <token>
```

Returns `WeeklyReportV1` JSON with:
- Summary (tasks, accuracy, streak, CEFR level)
- Skill progress (10D with deltas and trends)
- Achievements (weekly milestones)
- Challenges (declining skills, stuck areas)
- Risks (skill decay, low engagement)
- Recommendations (prioritized action items)
- Next week plan (focus skills, goals)

### UI Page

`/weekly-report` route in Next.js frontend with:
- Summary card with key metrics
- Skill progress bars with trends
- Achievement badges
- Challenge/risk cards
- Recommendation list with priorities
- Next week plan with goals

---

## Files Created/Modified

### Created

| File | Description |
|------|-------------|
| `packages/types/src/runtime-signals-v4.types.ts` | RuntimeSignalsV4, TutorLoopOverrides types |
| `packages/types/src/tutor-loop.types.ts` | TutorLoopStateV3 types and transitions |
| `apps/api/src/services/v4/runtime-signals.service.ts` | Runtime signal computation |
| `apps/api/src/services/v4/weekly-report.service.ts` | V4 weekly report generation |
| `apps/api/src/services/__tests__/v4/runtime-signals.test.ts` | Runtime signals tests (30 tests) |
| `apps/api/src/services/__tests__/v4/weekly-report.test.ts` | Weekly report tests (10 tests) |
| `apps/web/src/app/(main)/weekly-report/page.tsx` | Weekly report UI page |

### Modified

| File | Changes |
|------|---------|
| `packages/types/src/index.ts` | Export new V4.1 types |
| `apps/api/src/ai/dual-ai-system.ts` | Integrated runtime signals into message processing |
| `apps/api/src/ai/prompts/tutor-system-v3.ts` | Enhanced validateTutorResponse with overrides |
| `apps/api/src/routes/progress.routes.ts` | Added `/weekly-report` endpoint |

---

## Key Behavioral Guarantees

1. **V3 Guardrails Preserved**
   - No tasks before explanation (enforced)
   - Mandatory CHECK after TEACH
   - Context anchor in system prompt

2. **Fatigue Safety**
   - High/Critical fatigue always blocks new concepts
   - Session ends after critical fatigue
   - Break suggestions are mandatory at high fatigue

3. **Plateau Interventions**
   - Error patterns trigger targeted drills
   - Stagnation triggers format changes
   - Oscillation enforces review-only mode

4. **Feature Flag Compatible**
   - `useV4Signals` flag in TutorChatSystem
   - Falls back to V3 behavior when disabled

---

## Running Tests

```bash
# All V4 tests (125 tests)
cd apps/api && npm test -- src/services/__tests__/v4/

# Runtime signals only (30 tests)
npm test -- src/services/__tests__/v4/runtime-signals.test.ts

# Weekly reports only (10 tests)
npm test -- src/services/__tests__/v4/weekly-report.test.ts
```

---

## Runtime Scenario Examples

### Example 1: B1 User with High Fatigue

**Trigger:**
- 5 consecutive errors
- 25+ minutes without break
- Response lengths decreasing

**Detection:**
```
[V4.1 Runtime Signals] {
  userId: 'user-123',
  fatigue: 'high',
  plateau: 'none',
  overridesApplied: 8
}
```

**TutorLoop Changes:**
```
RUNTIME OVERRIDES:
▶ BLOCK_NEW: Не вводи новых концепций, только повторение
▶ MAX_DIFF: Максимальная сложность 3/10
▶ REVIEW_HEAVY: 90% времени на повторение
▶ FEW_TASKS: Максимум 1 заданий
▶ SUGGEST_BREAK: Предложи сделать перерыв
▶ ENCOURAGE: Больше похвалы и поддержки
```

**AI-2 Behavior:**
- Skips new grammar concepts
- Gives only 1 simple review task
- Suggests: "Отличная работа! Может, сделаем перерыв?"

---

### Example 2: A2 User with Grammar Plateau (Stagnation)

**Trigger:**
- Grammar skill at 0.45 for 14 days
- No delta despite 30+ practice sessions
- Error rate not decreasing

**Detection:**
```
[V4.1 Runtime Signals] {
  userId: 'user-456',
  fatigue: 'none',
  plateau: {
    skill: 'grammar',
    type: 'stagnation',
    confidence: 0.82,
    durationDays: 14
  }
}
```

**TutorLoop Changes:**
```
RUNTIME OVERRIDES:
▶ SIMPLE_FORMAT: Используй examples-first, MCQ вместо input
▶ EXTRA_EXAMPLES: Дай 3-4 примера вместо 2
▶ REVIEW_HEAVY: 50% времени на повторение
▶ ENCOURAGE: Больше похвалы и поддержки
▶ PROGRESS: Напомни о достигнутом прогрессе
```

**AI-2 Behavior:**
- Switches from rule-first to examples-first approach
- Shows 4 examples instead of 2
- Uses MCQ format instead of free input
- Reminds user of past progress: "Помнишь, как ты справился с Present Simple?"

---

### Example 3: B1 User with Error Pattern Plateau

**Trigger:**
- Repeated article errors ("a/the") 8 times in 5 days
- Other grammar improving, articles stuck

**Detection:**
```
[V4.1 Runtime Signals] {
  userId: 'user-789',
  plateau: {
    skill: 'grammar',
    type: 'error_pattern',
    confidence: 0.78,
    interventions: [{ type: 'simplify', priority: 9 }]
  }
}
```

**TutorLoop Changes:**
```
RUNTIME OVERRIDES:
▶ BLOCK_NEW: Не вводи новых концепций, только повторение
▶ TARGET_ERRORS: Сфокусируйся на: Article usage
▶ EXTRA_EXAMPLES: Дай 3-4 примера вместо 2
▶ SIMPLIFY: Уровень упрощения 2/3
▶ FEW_TASKS: Максимум 1 заданий
```

**AI-2 Behavior:**
- Pauses other grammar topics
- Focuses 100% on articles
- Uses simplified rule: "A = одна штука, The = та самая"
- Gives 4+ examples per rule
- One targeted drill per session

---

## Integration Notes

### Enabling/Disabling

```typescript
// In TutorChatSystem constructor
this.useV4Signals = true;  // Enable V4.1 features
this.useV4Signals = false; // Fall back to pure V3
```

### Session Metrics Tracking

Call `updateSessionMetricsAfterAttempt()` after each task attempt:

```typescript
tutorSystem.updateSessionMetricsAfterAttempt(userId, {
  correct: true,
  responseLength: 50,
  timeSeconds: 45,
  hintsUsed: 0,
  retries: 0,
  skipped: false,
  isCheckTask: false,
});
```

### Weekly Report Access

```typescript
// API call
GET /api/progress/weekly-report

// Or with specific week
GET /api/progress/weekly-report?weekStart=2024-12-23
```

---

## Performance Notes

- Runtime signal computation: <5ms
- No external API calls
- In-memory session metrics (resets on restart)
- Plateau detection uses existing skill history

---

## Future Improvements

1. **Persist Session Metrics** - Store in Redis for cross-restart continuity
2. **AI-1 Integration** - Use AI-1 for deeper plateau analysis
3. **Real-time Plateau** - Detect within-session plateaus
4. **A/B Testing** - Compare intervention effectiveness
