/**
 * V4 Plateau Detection Service
 *
 * Analyzes learning data to detect when user is stuck.
 * Provides intervention strategies to break plateaus.
 */

import type { SkillType, SKILL_TYPES } from '@enbai/types';
import {
  type PlateauSignal,
  type PlateauType,
  type PlateauEvidence,
  type PlateauAnalysis,
  type PlateauDetectionConfig,
  type InterventionStrategy,
  type InterventionType,
  type TutorLoopModification,
  type PracticeSession,
  type ErrorPattern,
  DEFAULT_PLATEAU_CONFIG,
} from '@enbai/types';
import type { SkillSnapshotV4, SkillStateV4 } from '@enbai/types';

/**
 * Main plateau detection function
 */
export function detectPlateaus(
  userId: string,
  skillStates: Record<SkillType, SkillStateV4>,
  recentSessions: PracticeSession[],
  config: PlateauDetectionConfig = DEFAULT_PLATEAU_CONFIG
): PlateauAnalysis {
  const now = new Date();
  const windowStart = new Date(now.getTime() - config.windowDays * 24 * 60 * 60 * 1000);

  const detectedPlateaus: PlateauSignal[] = [];

  // Analyze each skill
  for (const [skillType, skillState] of Object.entries(skillStates) as [SkillType, SkillStateV4][]) {
    // Filter sessions for this skill within window
    const skillSessions = recentSessions.filter(
      s => s.skillType === skillType &&
           new Date(s.date) >= windowStart
    );

    // Get history snapshots within window
    const snapshots = skillState.historySnapshots.filter(
      s => new Date(s.date) >= windowStart
    );

    // Skip if not enough data
    if (snapshots.length < config.minDataPoints) {
      continue;
    }

    // Detect plateau
    const plateau = detectSkillPlateau(
      skillType,
      snapshots,
      skillSessions,
      config
    );

    if (plateau && plateau.confidence >= config.minConfidence) {
      detectedPlateaus.push(plateau);
    }
  }

  // Calculate overall health
  const healthResult = calculateLearningHealth(detectedPlateaus, skillStates);

  // Get urgent interventions
  const urgentInterventions = detectedPlateaus
    .filter(p => p.confidence >= 0.7)
    .flatMap(p => p.recommendedInterventions)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 3);

  // Suggest focus skills (plateauing skills first, then weakest)
  const suggestedFocus = getSuggestedFocus(detectedPlateaus, skillStates);

  return {
    userId,
    analyzedAt: now.toISOString(),
    windowStart: windowStart.toISOString().split('T')[0],
    windowEnd: now.toISOString().split('T')[0],
    detectedPlateaus,
    overallLearningHealth: healthResult.health,
    healthScore: healthResult.score,
    urgentInterventions,
    suggestedFocus,
  };
}

/**
 * Detect plateau for a single skill
 */
function detectSkillPlateau(
  skillType: SkillType,
  snapshots: SkillSnapshotV4[],
  sessions: PracticeSession[],
  config: PlateauDetectionConfig
): PlateauSignal | null {
  // Sort snapshots by date
  const sorted = [...snapshots].sort((a, b) => a.date.localeCompare(b.date));

  if (sorted.length < 2) return null;

  // Calculate skill deltas
  const deltas: number[] = [];
  for (let i = 1; i < sorted.length; i++) {
    deltas.push(sorted[i].effectiveSkill - sorted[i - 1].effectiveSkill);
  }

  // Calculate metrics
  const avgDelta = deltas.reduce((a, b) => a + b, 0) / deltas.length;
  const variance = deltas.reduce((sum, d) => sum + Math.pow(d - avgDelta, 2), 0) / deltas.length;

  // Calculate effort metrics
  const totalPractice = sorted.reduce((sum, s) => sum + s.practiceCount, 0);
  const totalErrors = sorted.reduce((sum, s) => sum + s.errorCount, 0);
  const effortScore = Math.min(1, totalPractice / (config.windowDays * 3)); // Expected 3 practices/day
  const resultScore = (sorted[sorted.length - 1].effectiveSkill - sorted[0].effectiveSkill + 0.5) / 1;
  const effortResultRatio = effortScore / Math.max(0.1, resultScore);

  // Detect error patterns
  const errorPatterns = detectErrorPatterns(sessions, config);

  // Determine plateau type and confidence
  const { plateauType, confidence } = classifyPlateau(
    avgDelta,
    variance,
    effortResultRatio,
    errorPatterns,
    config
  );

  if (confidence < config.minConfidence) return null;

  // Calculate duration
  const firstDate = new Date(sorted[0].date);
  const lastDate = new Date(sorted[sorted.length - 1].date);
  const durationDays = Math.round((lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24));

  // Build evidence
  const evidence: PlateauEvidence = {
    skillDeltaAvg: avgDelta,
    skillDeltaVariance: variance,
    practiceSessionCount: sessions.length,
    avgSessionDuration: sessions.length > 0
      ? sessions.reduce((sum, s) => sum + s.durationMinutes, 0) / sessions.length
      : 0,
    repeatingErrors: errorPatterns,
    errorRateChange: calculateErrorRateChange(sorted),
    effortScore,
    resultScore,
    effortResultRatio,
  };

  // Get recommended interventions
  const recommendedInterventions = getInterventions(plateauType, evidence, skillType);

  return {
    skill: skillType,
    durationDays,
    confidence,
    plateauType,
    evidence,
    recommendedInterventions,
  };
}

/**
 * Classify the type of plateau
 */
function classifyPlateau(
  avgDelta: number,
  variance: number,
  effortResultRatio: number,
  errorPatterns: ErrorPattern[],
  config: PlateauDetectionConfig
): { plateauType: PlateauType; confidence: number } {
  let plateauType: PlateauType = 'stagnation';
  let confidence = 0;

  // Check for stagnation (low movement)
  if (Math.abs(avgDelta) < config.stagnationThreshold) {
    if (variance < config.oscillationThreshold) {
      plateauType = 'stagnation';
      confidence = Math.min(0.9, 0.5 + (config.stagnationThreshold - Math.abs(avgDelta)) * 10);
    } else {
      // High variance with low net progress = oscillation
      plateauType = 'oscillation';
      confidence = Math.min(0.85, 0.4 + variance * 5);
    }
  }

  // Check for error pattern
  if (errorPatterns.length > 0) {
    const maxRepetitions = Math.max(...errorPatterns.map(p => p.occurrences));
    if (maxRepetitions >= config.minErrorRepetitions * 2) {
      plateauType = 'error_pattern';
      confidence = Math.max(confidence, Math.min(0.9, 0.5 + maxRepetitions * 0.1));
    }
  }

  // Check for effort mismatch
  if (effortResultRatio >= config.effortMismatchRatio) {
    plateauType = 'effort_mismatch';
    confidence = Math.max(confidence, Math.min(0.85, 0.4 + effortResultRatio * 0.15));
  }

  return { plateauType, confidence };
}

/**
 * Detect repeating error patterns
 */
function detectErrorPatterns(
  sessions: PracticeSession[],
  config: PlateauDetectionConfig
): ErrorPattern[] {
  const errorCounts: Record<string, { count: number; lastDate: string; topics: Set<string> }> = {};

  for (const session of sessions) {
    for (const error of session.errorsDetailed) {
      const key = error.errorType;
      if (!errorCounts[key]) {
        errorCounts[key] = { count: 0, lastDate: session.date, topics: new Set() };
      }
      errorCounts[key].count++;
      errorCounts[key].lastDate = session.date;
      errorCounts[key].topics.add(error.taskId.split('_')[0]); // Extract topic from taskId
    }
  }

  return Object.entries(errorCounts)
    .filter(([_, data]) => data.count >= config.minErrorRepetitions)
    .map(([errorType, data]) => ({
      patternId: `err_${errorType}`,
      description: errorType.replace(/_/g, ' '),
      occurrences: data.count,
      lastOccurrence: data.lastDate,
      affectedTopics: Array.from(data.topics),
    }))
    .sort((a, b) => b.occurrences - a.occurrences);
}

/**
 * Calculate how error rate is changing
 */
function calculateErrorRateChange(snapshots: SkillSnapshotV4[]): number {
  if (snapshots.length < 4) return 0;

  const mid = Math.floor(snapshots.length / 2);
  const firstHalf = snapshots.slice(0, mid);
  const secondHalf = snapshots.slice(mid);

  const firstRate = firstHalf.reduce((sum, s) => sum + s.errorCount, 0) /
                   Math.max(1, firstHalf.reduce((sum, s) => sum + s.practiceCount, 0));
  const secondRate = secondHalf.reduce((sum, s) => sum + s.errorCount, 0) /
                    Math.max(1, secondHalf.reduce((sum, s) => sum + s.practiceCount, 0));

  return secondRate - firstRate; // Positive = getting worse
}

/**
 * Get intervention strategies for plateau type
 */
function getInterventions(
  plateauType: PlateauType,
  evidence: PlateauEvidence,
  skillType: SkillType
): InterventionStrategy[] {
  const interventions: InterventionStrategy[] = [];

  switch (plateauType) {
    case 'stagnation':
      interventions.push(
        createIntervention('change_format', 8, 'Try examples-first approach', {
          preferExamplesFirst: true,
          preferPracticeFirst: false,
          maxNewConcepts: 1,
          skipWarmup: false,
          simplificationLevel: 0,
          reviewWeight: 0.3,
          practiceWeight: 0.6,
          sessionLengthModifier: 1,
          breakFrequency: 'normal',
          encouragementLevel: 'high',
          showProgressIndicators: true,
        }),
        createIntervention('gamify', 6, 'Add game elements for motivation', {
          preferExamplesFirst: false,
          preferPracticeFirst: true,
          maxNewConcepts: 1,
          skipWarmup: true,
          simplificationLevel: 0,
          reviewWeight: 0.2,
          practiceWeight: 0.7,
          sessionLengthModifier: 0.8,
          breakFrequency: 'none',
          encouragementLevel: 'high',
          showProgressIndicators: true,
        })
      );
      break;

    case 'oscillation':
      interventions.push(
        createIntervention('review_only', 9, 'Focus on consolidating existing knowledge', {
          preferExamplesFirst: true,
          preferPracticeFirst: false,
          maxNewConcepts: 0,
          skipWarmup: false,
          simplificationLevel: 1,
          reviewWeight: 0.8,
          practiceWeight: 0.4,
          sessionLengthModifier: 0.7,
          breakFrequency: 'normal',
          encouragementLevel: 'normal',
          showProgressIndicators: false,
        }),
        createIntervention('decrease_difficulty', 7, 'Easier tasks to build confidence', {
          preferExamplesFirst: true,
          preferPracticeFirst: false,
          maxNewConcepts: 0,
          skipWarmup: true,
          simplificationLevel: 2,
          reviewWeight: 0.5,
          practiceWeight: 0.5,
          sessionLengthModifier: 0.8,
          breakFrequency: 'normal',
          encouragementLevel: 'high',
          showProgressIndicators: true,
        })
      );
      break;

    case 'error_pattern':
      interventions.push(
        createIntervention('simplify', 9, 'Break down to fundamentals', {
          preferExamplesFirst: true,
          preferPracticeFirst: false,
          maxNewConcepts: 0,
          skipWarmup: false,
          simplificationLevel: 3,
          reviewWeight: 0.7,
          practiceWeight: 0.3,
          sessionLengthModifier: 0.6,
          breakFrequency: 'frequent',
          encouragementLevel: 'high',
          showProgressIndicators: false,
        }),
        createIntervention('micro_goals', 7, 'Set small achievable targets', {
          preferExamplesFirst: false,
          preferPracticeFirst: true,
          maxNewConcepts: 0,
          skipWarmup: true,
          simplificationLevel: 2,
          reviewWeight: 0.4,
          practiceWeight: 0.6,
          sessionLengthModifier: 0.5,
          breakFrequency: 'normal',
          encouragementLevel: 'high',
          showProgressIndicators: true,
        })
      );
      break;

    case 'effort_mismatch':
      interventions.push(
        createIntervention('switch_skill', 8, 'Temporarily focus on different skill', {
          preferExamplesFirst: false,
          preferPracticeFirst: true,
          maxNewConcepts: 1,
          skipWarmup: true,
          simplificationLevel: 0,
          reviewWeight: 0.3,
          practiceWeight: 0.5,
          sessionLengthModifier: 1,
          breakFrequency: 'normal',
          encouragementLevel: 'normal',
          showProgressIndicators: true,
        }),
        createIntervention('real_world', 6, 'More practical, real-world examples', {
          preferExamplesFirst: true,
          preferPracticeFirst: false,
          maxNewConcepts: 1,
          skipWarmup: false,
          simplificationLevel: 0,
          reviewWeight: 0.2,
          practiceWeight: 0.6,
          sessionLengthModifier: 1.2,
          breakFrequency: 'normal',
          encouragementLevel: 'high',
          showProgressIndicators: true,
        })
      );
      break;

    case 'ceiling_effect':
      interventions.push(
        createIntervention('increase_practice', 8, 'Intensive practice to break through', {
          preferExamplesFirst: false,
          preferPracticeFirst: true,
          maxNewConcepts: 0,
          skipWarmup: true,
          simplificationLevel: 0,
          reviewWeight: 0.2,
          practiceWeight: 0.8,
          sessionLengthModifier: 1.3,
          breakFrequency: 'normal',
          encouragementLevel: 'high',
          showProgressIndicators: true,
        })
      );
      break;
  }

  return interventions;
}

/**
 * Create intervention strategy
 */
function createIntervention(
  type: InterventionType,
  priority: number,
  description: string,
  modifications: TutorLoopModification
): InterventionStrategy {
  const impactMap: Record<InterventionType, 'low' | 'medium' | 'high'> = {
    change_format: 'medium',
    simplify: 'high',
    review_only: 'medium',
    switch_skill: 'medium',
    increase_practice: 'high',
    decrease_difficulty: 'medium',
    gamify: 'low',
    real_world: 'medium',
    peer_compare: 'low',
    micro_goals: 'medium',
  };

  return {
    type,
    priority,
    description,
    expectedImpact: impactMap[type],
    tutorLoopModifications: modifications,
  };
}

/**
 * Calculate overall learning health
 */
function calculateLearningHealth(
  plateaus: PlateauSignal[],
  skillStates: Record<SkillType, SkillStateV4>
): { health: 'healthy' | 'slowing' | 'plateau' | 'declining'; score: number } {
  // Count high-confidence plateaus
  const seriousPlateaus = plateaus.filter(p => p.confidence >= 0.7);
  const moderatePlateaus = plateaus.filter(p => p.confidence >= 0.5 && p.confidence < 0.7);

  // Calculate base score
  let score = 100;

  // Deduct for plateaus
  score -= seriousPlateaus.length * 20;
  score -= moderatePlateaus.length * 10;

  // Deduct for long plateaus
  for (const plateau of plateaus) {
    if (plateau.durationDays > 14) {
      score -= 10;
    } else if (plateau.durationDays > 7) {
      score -= 5;
    }
  }

  // Ensure bounds
  score = Math.max(0, Math.min(100, score));

  // Determine health status
  let health: 'healthy' | 'slowing' | 'plateau' | 'declining';
  if (score >= 80) {
    health = 'healthy';
  } else if (score >= 60) {
    health = 'slowing';
  } else if (score >= 40) {
    health = 'plateau';
  } else {
    health = 'declining';
  }

  return { health, score };
}

/**
 * Get suggested skills to focus on
 */
function getSuggestedFocus(
  plateaus: PlateauSignal[],
  skillStates: Record<SkillType, SkillStateV4>
): SkillType[] {
  const plateauSkills = new Set(plateaus.map(p => p.skill));

  // Sort skills by priority
  const sorted = (Object.entries(skillStates) as [SkillType, SkillStateV4][])
    .sort((a, b) => {
      // Plateauing skills first
      const aPlateauing = plateauSkills.has(a[0]) ? 1 : 0;
      const bPlateauing = plateauSkills.has(b[0]) ? 1 : 0;
      if (aPlateauing !== bPlateauing) return bPlateauing - aPlateauing;

      // Then by effective skill (weakest first)
      return a[1].effectiveSkill - b[1].effectiveSkill;
    })
    .map(([skill]) => skill);

  return sorted.slice(0, 3);
}

/**
 * Check if TutorLoop should apply intervention
 */
export function shouldApplyIntervention(
  analysis: PlateauAnalysis,
  currentSkill: SkillType
): InterventionStrategy | null {
  // Find plateau for current skill
  const plateau = analysis.detectedPlateaus.find(p => p.skill === currentSkill);

  if (!plateau || plateau.confidence < 0.6) {
    return null;
  }

  // Return highest priority intervention
  return plateau.recommendedInterventions[0] || null;
}

/**
 * Export for testing
 */
export const _testExports = {
  detectSkillPlateau,
  classifyPlateau,
  detectErrorPatterns,
  calculateErrorRateChange,
  getInterventions,
};
