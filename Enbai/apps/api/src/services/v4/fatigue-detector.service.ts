/**
 * V4 Fatigue/Cognitive Load Detection Service
 *
 * Monitors session metrics to detect cognitive overload.
 * Provides recommendations to TutorLoop for adapting session.
 */

import {
  type FatigueSignal,
  type FatigueLevel,
  type FatigueFactor,
  type FatigueFactorType,
  type FatigueRecommendation,
  type FatigueAction,
  type FatigueTutorOverrides,
  type SessionMetrics,
  type ErrorWindow,
  type FatigueConfig,
  type FatigueReading,
  DEFAULT_FATIGUE_CONFIG,
} from '@enbai/types';

/**
 * Detect fatigue from session metrics
 */
export function detectFatigue(
  metrics: SessionMetrics,
  config: FatigueConfig = DEFAULT_FATIGUE_CONFIG
): FatigueSignal {
  const factors = detectFactors(metrics, config);

  // Calculate overall fatigue score
  const fatigueScore = calculateFatigueScore(factors, config);
  const fatigueLevel = scoreToLevel(fatigueScore);

  // Determine trend from error windows
  const trend = determineTrend(metrics);

  // Get recommendation
  const recommendation = getRecommendation(fatigueLevel, factors, metrics, config);

  // Calculate confidence based on data quality
  const confidence = calculateConfidence(metrics, factors);

  return {
    fatigueLevel,
    confidence,
    factors,
    trend,
    recommendation,
  };
}

/**
 * Detect individual fatigue factors
 */
function detectFactors(
  metrics: SessionMetrics,
  config: FatigueConfig
): FatigueFactor[] {
  const factors: FatigueFactor[] = [];

  // 1. Error rate increase
  if (metrics.errorsByTimeWindow.length >= 2) {
    const firstHalf = metrics.errorsByTimeWindow.slice(0, Math.floor(metrics.errorsByTimeWindow.length / 2));
    const secondHalf = metrics.errorsByTimeWindow.slice(Math.floor(metrics.errorsByTimeWindow.length / 2));

    const firstErrorRate = calculateErrorRate(firstHalf);
    const secondErrorRate = calculateErrorRate(secondHalf);
    const increase = secondErrorRate - firstErrorRate;

    if (increase > config.errorIncreaseThreshold) {
      factors.push({
        type: 'error_rate_increase',
        weight: Math.min(1, increase / 0.3),
        value: increase,
        threshold: config.errorIncreaseThreshold,
        description: `Error rate increased by ${Math.round(increase * 100)}%`,
      });
    }
  }

  // 2. Consecutive failures
  if (metrics.consecutiveErrors >= config.consecutiveErrorThreshold) {
    factors.push({
      type: 'consecutive_failures',
      weight: Math.min(1, metrics.consecutiveErrors / 5),
      value: metrics.consecutiveErrors,
      threshold: config.consecutiveErrorThreshold,
      description: `${metrics.consecutiveErrors} consecutive errors`,
    });
  }

  // 3. Time on task
  const sessionMinutes = metrics.totalActiveMinutes;
  if (sessionMinutes >= config.recommendBreakAfterMinutes) {
    const overtime = sessionMinutes - config.recommendBreakAfterMinutes;
    const maxOvertime = config.maxSessionMinutes - config.recommendBreakAfterMinutes;
    factors.push({
      type: 'time_on_task',
      weight: Math.min(1, overtime / maxOvertime),
      value: sessionMinutes,
      threshold: config.recommendBreakAfterMinutes,
      description: `${Math.round(sessionMinutes)} minutes without break`,
    });
  }

  // 4. Response length decrease
  if (metrics.responseRengthTrend < -config.responseLengthDropThreshold) {
    factors.push({
      type: 'response_length_decrease',
      weight: Math.min(1, Math.abs(metrics.responseRengthTrend) / 0.5),
      value: metrics.responseRengthTrend,
      threshold: -config.responseLengthDropThreshold,
      description: `Response length dropped by ${Math.round(Math.abs(metrics.responseRengthTrend) * 100)}%`,
    });
  }

  // 5. Hint usage increase
  if (metrics.tasksAttempted > 3) {
    const hintRate = metrics.hintsUsed / metrics.tasksAttempted;
    if (hintRate >= config.hintUsageThreshold) {
      factors.push({
        type: 'hint_usage_increase',
        weight: Math.min(1, hintRate / 0.7),
        value: hintRate,
        threshold: config.hintUsageThreshold,
        description: `Using hints on ${Math.round(hintRate * 100)}% of tasks`,
      });
    }
  }

  // 6. Retry rate increase
  if (metrics.tasksAttempted > 3) {
    const retryRate = metrics.retriesUsed / metrics.tasksAttempted;
    if (retryRate >= config.retryRateThreshold) {
      factors.push({
        type: 'retry_rate_increase',
        weight: Math.min(1, retryRate / 0.6),
        value: retryRate,
        threshold: config.retryRateThreshold,
        description: `Retrying ${Math.round(retryRate * 100)}% of tasks`,
      });
    }
  }

  // 7. Skip rate increase
  if (metrics.tasksAttempted > 5) {
    const skipRate = metrics.tasksSkipped / metrics.tasksAttempted;
    if (skipRate >= config.skipRateThreshold) {
      factors.push({
        type: 'skip_rate_increase',
        weight: Math.min(1, skipRate / 0.4),
        value: skipRate,
        threshold: config.skipRateThreshold,
        description: `Skipping ${Math.round(skipRate * 100)}% of tasks`,
      });
    }
  }

  // 8. Task completion slowdown
  if (metrics.timePerTaskTrend > config.taskSlowdownThreshold) {
    factors.push({
      type: 'task_completion_slowdown',
      weight: Math.min(1, (metrics.timePerTaskTrend - 1) / 1),
      value: metrics.timePerTaskTrend,
      threshold: config.taskSlowdownThreshold,
      description: `Tasks taking ${Math.round((metrics.timePerTaskTrend - 1) * 100)}% longer`,
    });
  }

  // 9. CHECK failures
  if (metrics.consecutiveCheckFailures >= config.maxConsecutiveCheckFailures) {
    factors.push({
      type: 'consecutive_failures',
      weight: Math.min(1, metrics.consecutiveCheckFailures / 3),
      value: metrics.consecutiveCheckFailures,
      threshold: config.maxConsecutiveCheckFailures,
      description: `${metrics.consecutiveCheckFailures} consecutive CHECK failures`,
    });
  }

  // 10. Low engagement (combined signal)
  const overallErrorRate = metrics.tasksAttempted > 0
    ? metrics.totalErrors / metrics.tasksAttempted
    : 0;

  if (overallErrorRate >= config.errorRateThreshold) {
    factors.push({
      type: 'engagement_drop',
      weight: Math.min(1, overallErrorRate / 0.6),
      value: overallErrorRate,
      threshold: config.errorRateThreshold,
      description: `Overall error rate at ${Math.round(overallErrorRate * 100)}%`,
    });
  }

  return factors;
}

/**
 * Calculate error rate from windows
 */
function calculateErrorRate(windows: ErrorWindow[]): number {
  const totalErrors = windows.reduce((sum, w) => sum + w.errorCount, 0);
  const totalTasks = windows.reduce((sum, w) => sum + w.taskCount, 0);
  return totalTasks > 0 ? totalErrors / totalTasks : 0;
}

/**
 * Calculate overall fatigue score (0-100)
 */
function calculateFatigueScore(
  factors: FatigueFactor[],
  config: FatigueConfig
): number {
  if (factors.length === 0) return 0;

  let weightedSum = 0;
  let totalWeight = 0;

  for (const factor of factors) {
    const configWeight = config.factorWeights[factor.type] || 0.1;
    weightedSum += factor.weight * configWeight;
    totalWeight += configWeight;
  }

  // Normalize to 0-100
  const baseScore = totalWeight > 0 ? (weightedSum / totalWeight) * 100 : 0;

  // Boost if multiple factors present
  const factorBonus = Math.min(20, factors.length * 5);

  return Math.min(100, baseScore + factorBonus);
}

/**
 * Convert score to fatigue level
 */
function scoreToLevel(score: number): FatigueLevel {
  if (score < 20) return 'none';
  if (score < 40) return 'low';
  if (score < 60) return 'moderate';
  if (score < 80) return 'high';
  return 'critical';
}

/**
 * Determine if fatigue is increasing/decreasing
 */
function determineTrend(metrics: SessionMetrics): 'increasing' | 'stable' | 'decreasing' {
  if (metrics.errorsByTimeWindow.length < 3) return 'stable';

  const windows = metrics.errorsByTimeWindow;
  const recentWindows = windows.slice(-3);

  const rates = recentWindows.map(w =>
    w.taskCount > 0 ? w.errorCount / w.taskCount : 0
  );

  const trend = rates[2] - rates[0];

  if (trend > 0.1) return 'increasing';
  if (trend < -0.1) return 'decreasing';
  return 'stable';
}

/**
 * Get recommendation based on fatigue level
 */
function getRecommendation(
  level: FatigueLevel,
  factors: FatigueFactor[],
  metrics: SessionMetrics,
  config: FatigueConfig
): FatigueRecommendation {
  const dominantFactor = factors.sort((a, b) => b.weight - a.weight)[0];

  switch (level) {
    case 'none':
      return {
        action: 'continue',
        priority: 'low',
        message: 'User is engaged and performing well',
        messageRu: 'Пользователь вовлечён и работает хорошо',
        tutorLoopOverrides: getDefaultOverrides(),
      };

    case 'low':
      return {
        action: 'encourage',
        priority: 'low',
        message: 'Slight fatigue detected, adding encouragement',
        messageRu: 'Небольшая усталость, добавляем поддержку',
        tutorLoopOverrides: {
          ...getDefaultOverrides(),
          encouragementBoost: true,
          showProgressReminder: true,
        },
      };

    case 'moderate':
      return {
        action: 'simplify',
        priority: 'medium',
        message: 'Moderate fatigue - simplifying tasks',
        messageRu: 'Умеренная усталость — упрощаем задания',
        tutorLoopOverrides: {
          blockNewConcepts: false,
          maxDifficulty: 5,
          simplificationLevel: 1,
          maxRemainingTasks: 5,
          maxRemainingMinutes: 15,
          encouragementBoost: true,
          showProgressReminder: true,
          suggestBreakAfterTask: false,
          endSessionAfterTask: false,
        },
      };

    case 'high':
      return {
        action: 'suggest_break',
        priority: 'high',
        message: 'High fatigue - suggesting break',
        messageRu: 'Высокая усталость — рекомендуем перерыв',
        tutorLoopOverrides: {
          blockNewConcepts: true,
          maxDifficulty: 3,
          simplificationLevel: 2,
          maxRemainingTasks: 2,
          maxRemainingMinutes: 5,
          encouragementBoost: true,
          showProgressReminder: true,
          suggestBreakAfterTask: true,
          endSessionAfterTask: false,
        },
      };

    case 'critical':
      return {
        action: 'force_break',
        priority: 'urgent',
        message: 'Critical fatigue - session should end',
        messageRu: 'Критическая усталость — сессия должна завершиться',
        tutorLoopOverrides: {
          blockNewConcepts: true,
          maxDifficulty: 2,
          simplificationLevel: 3,
          maxRemainingTasks: 0,
          maxRemainingMinutes: 0,
          encouragementBoost: true,
          showProgressReminder: true,
          suggestBreakAfterTask: true,
          endSessionAfterTask: true,
        },
      };
  }
}

/**
 * Get default (no fatigue) overrides
 */
function getDefaultOverrides(): FatigueTutorOverrides {
  return {
    blockNewConcepts: false,
    maxDifficulty: 10,
    simplificationLevel: 0,
    maxRemainingTasks: 99,
    maxRemainingMinutes: 99,
    encouragementBoost: false,
    showProgressReminder: false,
    suggestBreakAfterTask: false,
    endSessionAfterTask: false,
  };
}

/**
 * Calculate confidence in fatigue detection
 */
function calculateConfidence(
  metrics: SessionMetrics,
  factors: FatigueFactor[]
): number {
  let confidence = 0.5; // Base confidence

  // More tasks = more data = higher confidence
  if (metrics.tasksAttempted >= 10) confidence += 0.2;
  else if (metrics.tasksAttempted >= 5) confidence += 0.1;

  // More factors detected = higher confidence
  if (factors.length >= 3) confidence += 0.2;
  else if (factors.length >= 2) confidence += 0.1;

  // Longer session = more reliable data
  if (metrics.totalActiveMinutes >= 20) confidence += 0.1;

  return Math.min(0.95, confidence);
}

/**
 * Create initial session metrics
 */
export function createSessionMetrics(): SessionMetrics {
  const now = new Date();
  return {
    sessionStartTime: now,
    currentTime: now,
    lastBreakTime: undefined,
    totalActiveMinutes: 0,
    tasksAttempted: 0,
    tasksCorrect: 0,
    tasksSkipped: 0,
    totalErrors: 0,
    consecutiveErrors: 0,
    errorsByTimeWindow: [],
    averageResponseLength: 0,
    responseRengthTrend: 0,
    hintsUsed: 0,
    retriesUsed: 0,
    avgTimePerTask: 0,
    timePerTaskTrend: 0,
    checkAttempts: 0,
    checkPasses: 0,
    consecutiveCheckFailures: 0,
  };
}

/**
 * Update session metrics after a task
 */
export function updateSessionMetrics(
  metrics: SessionMetrics,
  taskResult: {
    correct: boolean;
    responseLength: number;
    timeSeconds: number;
    hintsUsed: number;
    retries: number;
    skipped: boolean;
    isCheckTask: boolean;
  }
): SessionMetrics {
  const now = new Date();
  const newMetrics = { ...metrics };

  newMetrics.currentTime = now;
  newMetrics.totalActiveMinutes =
    (now.getTime() - metrics.sessionStartTime.getTime()) / 1000 / 60;

  // Task counts
  newMetrics.tasksAttempted++;
  if (taskResult.correct) {
    newMetrics.tasksCorrect++;
    newMetrics.consecutiveErrors = 0;
  } else if (!taskResult.skipped) {
    newMetrics.totalErrors++;
    newMetrics.consecutiveErrors++;
  }

  if (taskResult.skipped) {
    newMetrics.tasksSkipped++;
  }

  // Response length trend
  const prevAvgLength = metrics.averageResponseLength;
  newMetrics.averageResponseLength =
    (prevAvgLength * (metrics.tasksAttempted - 1) + taskResult.responseLength) /
    metrics.tasksAttempted;

  if (prevAvgLength > 0) {
    const lengthChange = (newMetrics.averageResponseLength - prevAvgLength) / prevAvgLength;
    newMetrics.responseRengthTrend = lengthChange;
  }

  // Hints and retries
  newMetrics.hintsUsed += taskResult.hintsUsed;
  newMetrics.retriesUsed += taskResult.retries;

  // Time per task trend
  const prevAvgTime = metrics.avgTimePerTask;
  newMetrics.avgTimePerTask =
    (prevAvgTime * (metrics.tasksAttempted - 1) + taskResult.timeSeconds) /
    metrics.tasksAttempted;

  if (prevAvgTime > 0) {
    newMetrics.timePerTaskTrend = newMetrics.avgTimePerTask / prevAvgTime;
  }

  // CHECK tracking
  if (taskResult.isCheckTask) {
    newMetrics.checkAttempts++;
    if (taskResult.correct) {
      newMetrics.checkPasses++;
      newMetrics.consecutiveCheckFailures = 0;
    } else {
      newMetrics.consecutiveCheckFailures++;
    }
  }

  // Update error windows (5-minute windows)
  const windowDuration = 5 * 60 * 1000; // 5 minutes
  const windowStart = new Date(now.getTime() - windowDuration);

  // Find or create current window
  let currentWindow = newMetrics.errorsByTimeWindow.find(w =>
    new Date(w.windowEnd).getTime() > windowStart.getTime()
  );

  if (!currentWindow) {
    currentWindow = {
      windowStart,
      windowEnd: now,
      errorCount: 0,
      taskCount: 0,
    };
    newMetrics.errorsByTimeWindow.push(currentWindow);
  }

  currentWindow.windowEnd = now;
  currentWindow.taskCount++;
  if (!taskResult.correct && !taskResult.skipped) {
    currentWindow.errorCount++;
  }

  // Keep only last 6 windows (30 minutes)
  if (newMetrics.errorsByTimeWindow.length > 6) {
    newMetrics.errorsByTimeWindow = newMetrics.errorsByTimeWindow.slice(-6);
  }

  return newMetrics;
}

/**
 * Record a break taken
 */
export function recordBreak(metrics: SessionMetrics): SessionMetrics {
  return {
    ...metrics,
    lastBreakTime: new Date(),
    consecutiveErrors: 0,
    consecutiveCheckFailures: 0,
  };
}

/**
 * Convert fatigue signal to reading for history
 */
export function signalToReading(signal: FatigueSignal): FatigueReading {
  const dominantFactor = signal.factors.sort((a, b) => b.weight - a.weight)[0];

  return {
    timestamp: new Date(),
    level: signal.fatigueLevel,
    score: calculateFatigueScore(signal.factors, DEFAULT_FATIGUE_CONFIG),
    dominantFactor: dominantFactor?.type,
  };
}

/**
 * Check if should intervene based on fatigue
 */
export function shouldIntervene(signal: FatigueSignal): boolean {
  return signal.fatigueLevel === 'high' || signal.fatigueLevel === 'critical';
}

/**
 * Get simplified message for user based on fatigue
 */
export function getUserMessage(signal: FatigueSignal): string | null {
  switch (signal.fatigueLevel) {
    case 'none':
    case 'low':
      return null;

    case 'moderate':
      return 'Ты уже хорошо поработал! Давай сделаем ещё пару заданий и отдохнём.';

    case 'high':
      return 'Отличная работа! Может, сделаем небольшой перерыв? Мозгу нужен отдых для закрепления.';

    case 'critical':
      return 'Ты сегодня здорово потрудился! Давай продолжим завтра — так материал лучше запомнится.';
  }
}

/**
 * Export for testing
 */
export const _testExports = {
  detectFactors,
  calculateFatigueScore,
  scoreToLevel,
  determineTrend,
  getRecommendation,
  calculateConfidence,
};
