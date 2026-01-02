# Enbai V4 Architecture

## Overview

V4 adds **intelligence and resilience** to the learning system. While V3 established the core teaching loop and skill tracking, V4 makes the system adaptive and proactive.

```
┌─────────────────────────────────────────────────────────────────┐
│                        V4 INTELLIGENCE LAYER                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Skill Decay  │  │   Plateau    │  │   Fatigue    │          │
│  │    Model     │  │  Detector    │  │  Detector    │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                  │                  │                  │
│         └────────┬─────────┴─────────┬───────┘                  │
│                  │                   │                           │
│                  ▼                   ▼                           │
│         ┌───────────────────────────────────┐                   │
│         │        Analytics Hub (AI-1)        │                   │
│         └───────────────┬───────────────────┘                   │
│                         │                                        │
│                         ▼                                        │
│         ┌───────────────────────────────────┐                   │
│         │    TutorLoop V3 (AI-2)            │◄─── Signals       │
│         │    + Intervention Strategies       │                   │
│         └───────────────────────────────────┘                   │
│                         │                                        │
│                         ▼                                        │
│         ┌───────────────────────────────────┐                   │
│         │    QA Outcome Validator (AI-3)     │                   │
│         └───────────────────────────────────┘                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## New Components

### 1. Skill Decay Model

**Files:**
- `packages/types/src/skill-decay.types.ts`
- `apps/api/src/services/v4/skill-decay.model.ts`

**Purpose:** Models forgetting over time with skill-specific decay rates.

**Key Concepts:**

```typescript
// Raw vs Effective skill separation
interface SkillStateV4 {
  rawSkill: number;           // Accumulated (never decreases on correct)
  effectiveSkill: number;     // With decay (what user can demonstrate)
  confirmedMastery: number;   // Floor (never drop below this)
}
```

**Decay Rates by Skill:**
| Skill | Daily Decay | Rationale |
|-------|-------------|-----------|
| vocabulary | 1.2% | Words forgotten quickly |
| slang | 1.5% | Colloquialisms fade fast |
| pronunciation | 1.0% | Articulation degrades |
| speaking | 0.8% | Fluency needs practice |
| grammar | 0.4% | Rules stick better |
| comprehension | 0.3% | Understanding is durable |

**Mastery Floor:**
- Users never drop below their last confirmed mastery level
- Mastery is confirmed after 3+ consecutive correct answers at 80%+ accuracy
- Prevents frustrating regression

### 2. Plateau Detection

**Files:**
- `packages/types/src/plateau-detection.types.ts`
- `apps/api/src/services/v4/plateau-detector.service.ts`

**Purpose:** Detects when users are stuck and provides intervention strategies.

**Plateau Types:**
| Type | Detection | Intervention |
|------|-----------|--------------|
| stagnation | skillDelta < 0.02 for N days | Change format |
| oscillation | High variance, no net progress | Review only |
| error_pattern | Same mistake 3+ times | Simplify + micro-goals |
| effort_mismatch | High effort, low results | Switch skill temporarily |
| ceiling_effect | Near max, can't break through | Intensive practice |

**Intervention Strategies:**
```typescript
interface InterventionStrategy {
  type: 'change_format' | 'simplify' | 'review_only' | 'switch_skill' | ...;
  tutorLoopModifications: {
    preferExamplesFirst: boolean;
    maxNewConcepts: number;
    simplificationLevel: 0 | 1 | 2 | 3;
    reviewWeight: number;
    // ...
  };
}
```

### 3. Learning Outcomes

**Files:**
- `packages/types/src/learning-outcomes.types.ts`
- `apps/api/src/services/v4/qa-outcome-validator.ts`

**Purpose:** Every lesson must have measurable outcomes. QA validates practice actually tests outcomes.

**Outcome Structure:**
```typescript
interface LearningOutcome {
  userCan: UserCanStatement[];      // Observable behaviors
  successCriteria: SuccessCriterion[]; // Measurable thresholds
  cefrDescriptors: string[];        // CEFR alignment
  masteryRequirements: MasteryRequirement;
}
```

**Bloom's Taxonomy Integration:**
- remember → MCQ, recall
- understand → explain, compare
- apply → fill_blank, practice
- analyze → reorder, select_error
- evaluate → justify, choose best
- create → speaking, writing

**QA Validation:**
- Coverage check: Are all outcomes tested?
- Skill alignment: Do interactions match outcome skills?
- Bloom alignment: Does interaction type match outcome level?
- Production check: Are production outcomes tested with production tasks?

### 4. Fatigue Detection

**Files:**
- `packages/types/src/fatigue-detection.types.ts`
- `apps/api/src/services/v4/fatigue-detector.service.ts`

**Purpose:** Detects cognitive overload and adjusts session accordingly.

**Fatigue Signals:**
| Signal | Weight | Threshold |
|--------|--------|-----------|
| Error rate increase | 0.20 | +15% vs session start |
| Consecutive failures | 0.25 | 3+ in a row |
| Time on task | 0.15 | 25+ minutes |
| Response length drop | 0.10 | -30% vs start |
| Hint usage increase | 0.05 | 50%+ of tasks |
| Task slowdown | 0.10 | 50% slower |

**Fatigue Levels:**
| Level | Score | Action |
|-------|-------|--------|
| none | 0-20 | Continue |
| low | 20-40 | Add encouragement |
| moderate | 40-60 | Simplify tasks |
| high | 60-80 | Suggest break |
| critical | 80-100 | End session |

**TutorLoop Integration:**
```typescript
interface FatigueTutorOverrides {
  blockNewConcepts: boolean;
  maxDifficulty: number;
  simplificationLevel: number;
  suggestBreakAfterTask: boolean;
  endSessionAfterTask: boolean;
}
```

### 5. Weekly Learning Report

**Files:**
- `packages/types/src/weekly-report.types.ts`
- `apps/api/src/services/v4/weekly-report.generator.ts`

**Purpose:** Generate actionable weekly learning insights.

**Report Sections:**
1. **Summary** - Activity stats, accuracy, CEFR progress
2. **Skill Progress** - Per-skill analysis with trends
3. **Achievements** - Gamification rewards
4. **Challenges** - Error patterns identified
5. **Risks** - Plateaus, burnout, decay warnings
6. **Recommendations** - Prioritized action items
7. **Next Week Plan** - Focus areas and goals
8. **Motivation** - Personalized encouragement

## Data Flow

```
User Session
     │
     ▼
┌─────────────────────────────────────────────┐
│  Session Metrics Collection                  │
│  - Task results                              │
│  - Response times                            │
│  - Hint/retry usage                          │
└─────────────────┬───────────────────────────┘
                  │
     ┌────────────┼────────────┐
     ▼            ▼            ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Fatigue │ │ Plateau │ │  Skill  │
│Detector │ │Detector │ │ Decay   │
└────┬────┘ └────┬────┘ └────┬────┘
     │           │           │
     └─────┬─────┴─────┬─────┘
           │           │
           ▼           ▼
    ┌────────────┐ ┌────────────┐
    │  Signals   │ │  Updated   │
    │  to Tutor  │ │  Skills    │
    └─────┬──────┘ └─────┬──────┘
          │              │
          ▼              ▼
    ┌─────────────────────────┐
    │      TutorLoop V3       │
    │   + Intervention Mode   │
    └─────────────────────────┘
          │
          ▼
    ┌─────────────────────────┐
    │  Adapted Lesson Content │
    │  - Simpler tasks        │
    │  - More review          │
    │  - Different format     │
    └─────────────────────────┘
```

## AI Role Separation

| Role | Responsibility | Examples |
|------|----------------|----------|
| **AI-1 (Analytics)** | Data analysis, pattern detection | Decay calculation, plateau detection, fatigue monitoring, report generation |
| **AI-2 (Teaching)** | Content delivery, adaptation | TutorLoop states, lesson generation, response to signals |
| **AI-3 (QA/Meta)** | Quality assurance, validation | Outcome validation, self-check, guardrails enforcement |

## Backward Compatibility

V4 is **additive only** - no breaking changes to V3:

1. **SkillVector** → Extended with `SkillStateV4` wrapper
2. **LessonModalV3** → Optional `outcome` field added
3. **TutorLoop** → Accepts optional intervention signals
4. **All V3 tests** → Continue to pass unchanged

## Why V4 is Smarter

### Before V4 (V3):
- Skills tracked linearly (just up/down)
- No forgetting model
- No plateau detection
- No fatigue awareness
- Lessons had no outcome validation

### After V4:
- Skills have memory (raw vs effective)
- Forgetting is realistic and skill-specific
- Plateaus detected with intervention strategies
- Fatigue triggers adaptive session changes
- Every lesson has measurable outcomes

## Expected Improvements

| Metric | Expected Change | Mechanism |
|--------|-----------------|-----------|
| **Retention** | +15-25% | Spaced repetition with decay model |
| **Velocity** | +10-15% | Plateau intervention, no stuck users |
| **Engagement** | +20-30% | Fatigue detection prevents burnout |
| **Completion** | +10-20% | Outcome-driven lessons, clear progress |
| **Churn** | -15-25% | Weekly reports, personalized recommendations |

## Testing Strategy

Each component has isolated unit tests:

- `skill-decay.model.test.ts` - Decay calculations, mastery floors
- `plateau-detector.test.ts` - Pattern detection, interventions
- `qa-outcome-validator.test.ts` - Coverage validation
- `fatigue-detector.test.ts` - Signal detection, recommendations
- `weekly-report.generator.test.ts` - Report generation

## File Summary

### New Type Definitions (packages/types/src/)
| File | Lines | Purpose |
|------|-------|---------|
| `skill-decay.types.ts` | ~120 | Decay model types |
| `plateau-detection.types.ts` | ~180 | Plateau types and interventions |
| `learning-outcomes.types.ts` | ~180 | Outcome and validation types |
| `fatigue-detection.types.ts` | ~200 | Fatigue monitoring types |
| `weekly-report.types.ts` | ~350 | Report schema + examples |

### New Services (apps/api/src/services/v4/)
| File | Lines | Purpose |
|------|-------|---------|
| `skill-decay.model.ts` | ~280 | Decay implementation |
| `plateau-detector.service.ts` | ~420 | Plateau detection |
| `qa-outcome-validator.ts` | ~350 | QA validation |
| `fatigue-detector.service.ts` | ~380 | Fatigue detection |
| `weekly-report.generator.ts` | ~480 | Report generation |

### Documentation
| File | Purpose |
|------|---------|
| `V4_ARCHITECTURE.md` | This document |

## Conclusion

V4 transforms Enbai from a **reactive** teaching system into a **proactive** learning partner that:

1. **Remembers** skill decay patterns
2. **Detects** when users are stuck
3. **Adapts** to cognitive load
4. **Validates** learning outcomes
5. **Reports** actionable insights

The system now anticipates user needs rather than just responding to them.
