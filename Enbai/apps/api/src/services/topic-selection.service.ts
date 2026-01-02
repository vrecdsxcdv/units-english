/**
 * Topic Selection Service
 *
 * Algorithm for selecting optimal topics 1-2 times per day.
 * Uses weighted priority formula based on user context.
 */

import type { SkillType, CEFRLevel } from '@enbai/types';

// Local interfaces until types package exports are updated
interface TopicSelectionInput {
  skillVector: Record<SkillType, number>;
  recentErrors: string[];
  streak: number;
  dailyTimeMinutes: number;
  tasksCompletedToday: number;
  interests: string[];
  cefrLevel: CEFRLevel;
  targetIELTSBand?: number;
  recentTopicIds: string[];
}

interface TopicSelectionResult {
  templateId: string;
  topicName: string;
  priority: number;
  reason: string;
  teaser: string;
  estimatedMinutes: number;
  targetSkills: SkillType[];
}

interface TopicTemplateV2 {
  id: string;
  name: string;
  nameRu: string;
  primarySkill: SkillType;
  secondarySkills: SkillType[];
  applicableLevels: CEFRLevel[];
  ieltsComponents?: string[];
  estimatedMinutes: number;
  placeholders: {
    hook_fact?: string;
    hook_situation?: string;
    hook_challenge?: string;
  };
  selectionCriteria: {
    weaknessThreshold?: number;
    errorTopics?: string[];
    interestBoost?: string[];
    cooldownDays?: number;
  };
}

// ============================================
// PRIORITY FORMULA WEIGHTS
// ============================================

/**
 * Priority formula:
 * priority = weaknessWeight + examRelevance + recencyPenalty + noveltyBonus + interestMatch
 *
 * Default coefficients (tunable):
 */
export const PRIORITY_WEIGHTS = {
  // How much to prioritize weak skills (0-1 skill value inverted)
  WEAKNESS_MULTIPLIER: 30,

  // Bonus for IELTS-relevant topics if user has IELTS goal
  IELTS_RELEVANCE_BONUS: 15,

  // Penalty for recently practiced topics
  RECENCY_PENALTY_PER_DAY: -5,
  RECENCY_MAX_DAYS: 7,

  // Bonus for topics that haven't been seen
  NOVELTY_BONUS: 10,

  // Bonus for matching user interests
  INTEREST_MATCH_BONUS: 12,

  // Penalty for topics above user's current level
  LEVEL_MISMATCH_PENALTY: -20,

  // Bonus for addressing recent errors
  ERROR_RELEVANCE_BONUS: 25,

  // Streak bonuses (reward consistent users with harder content)
  STREAK_DIFFICULTY_BONUS: 0.5,  // Per streak day

  // Time-based adjustments
  SHORT_SESSION_PENALTY: -10,  // If dailyTimeMinutes < 10
};

// ============================================
// TOPIC SELECTION ALGORITHM
// ============================================

export class TopicSelectionService {
  /**
   * Select optimal topics for user
   * Returns 2-4 ranked suggestions
   */
  selectTopics(
    input: TopicSelectionInput,
    availableTemplates: TopicTemplateV2[]
  ): TopicSelectionResult[] {
    const scoredTopics = availableTemplates
      .map(template => this.scoreTemplate(template, input))
      .filter(result => result.priority > 0)  // Filter out unsuitable
      .sort((a, b) => b.priority - a.priority)  // Highest first
      .slice(0, 4);  // Top 4

    return scoredTopics;
  }

  /**
   * Calculate priority score for a template
   */
  private scoreTemplate(
    template: TopicTemplateV2,
    input: TopicSelectionInput
  ): TopicSelectionResult {
    let priority = 0;
    const reasons: string[] = [];

    // 1. Weakness weight
    const primarySkillValue = input.skillVector[template.primarySkill] ?? 0.5;
    const weaknessScore = (1 - primarySkillValue) * PRIORITY_WEIGHTS.WEAKNESS_MULTIPLIER;
    priority += weaknessScore;
    if (primarySkillValue < 0.4) {
      reasons.push(`Слабый навык: ${template.primarySkill}`);
    }

    // 2. Error relevance
    const hasMatchingErrors = template.selectionCriteria.errorTopics?.some(
      errorTopic => input.recentErrors.some(
        error => error.toLowerCase().includes(errorTopic.toLowerCase())
      )
    );
    if (hasMatchingErrors) {
      priority += PRIORITY_WEIGHTS.ERROR_RELEVANCE_BONUS;
      reasons.push('Связано с недавними ошибками');
    }

    // 3. Level matching
    if (!template.applicableLevels.includes(input.cefrLevel)) {
      priority += PRIORITY_WEIGHTS.LEVEL_MISMATCH_PENALTY;
    }

    // 4. IELTS relevance
    if (input.targetIELTSBand && template.ieltsComponents?.length) {
      priority += PRIORITY_WEIGHTS.IELTS_RELEVANCE_BONUS;
      reasons.push('Релевантно для IELTS');
    }

    // 5. Recency penalty
    const recentlyDone = input.recentTopicIds.includes(template.id);
    if (recentlyDone) {
      priority += PRIORITY_WEIGHTS.RECENCY_PENALTY_PER_DAY * 3;  // Assume 3 days ago average
    }

    // 6. Novelty bonus
    if (!input.recentTopicIds.includes(template.id)) {
      priority += PRIORITY_WEIGHTS.NOVELTY_BONUS;
    }

    // 7. Interest matching
    const interestMatch = template.selectionCriteria.interestBoost?.some(
      interest => input.interests.some(
        userInterest => userInterest.toLowerCase().includes(interest.toLowerCase())
      )
    );
    if (interestMatch) {
      priority += PRIORITY_WEIGHTS.INTEREST_MATCH_BONUS;
      reasons.push('Соответствует интересам');
    }

    // 8. Streak bonus (harder content for consistent users)
    if (input.streak > 3) {
      const difficultyBoost = Math.min(input.streak, 14) * PRIORITY_WEIGHTS.STREAK_DIFFICULTY_BONUS;
      priority += difficultyBoost;
    }

    // 9. Time-based adjustments
    if (input.dailyTimeMinutes < 10 && template.estimatedMinutes > 15) {
      priority += PRIORITY_WEIGHTS.SHORT_SESSION_PENALTY;
    }

    // Build teaser
    const teaser = this.buildTeaser(template, reasons, input);

    return {
      templateId: template.id,
      topicName: template.nameRu || template.name,
      priority: Math.max(0, priority),  // No negative priorities
      reason: reasons.slice(0, 2).join('. ') || 'Рекомендовано для вашего уровня',
      teaser,
      estimatedMinutes: template.estimatedMinutes,
      targetSkills: [template.primarySkill, ...template.secondarySkills],
    };
  }

  /**
   * Build engaging teaser for topic selection UI
   */
  private buildTeaser(
    template: TopicTemplateV2,
    reasons: string[],
    input: TopicSelectionInput
  ): string {
    // Use template's hook placeholders for teaser
    const hooks = [
      template.placeholders.hook_fact,
      template.placeholders.hook_situation,
      template.placeholders.hook_challenge,
    ].filter(Boolean);

    if (hooks.length > 0) {
      return hooks[Math.floor(Math.random() * hooks.length)] as string;
    }

    // Fallback teasers
    const fallbacks = [
      `90% учеников путают ${template.name} — давай разберёмся!`,
      `${template.estimatedMinutes} минут — и ты разберёшься с ${template.nameRu}`,
      `Полезно для ${input.targetIELTSBand ? 'IELTS' : 'разговорного английского'}`,
    ];

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  /**
   * Get daily topic recommendations
   * Called 1-2 times per day based on user's schedule
   */
  getDailyRecommendations(
    input: TopicSelectionInput,
    availableTemplates: TopicTemplateV2[]
  ): {
    primary: TopicSelectionResult;
    alternatives: TopicSelectionResult[];
    homework?: TopicSelectionResult;
  } {
    const selected = this.selectTopics(input, availableTemplates);

    if (selected.length === 0) {
      throw new Error('No suitable topics found for user');
    }

    const primary = selected[0];
    const alternatives = selected.slice(1, 3);

    // Suggest homework if time permits
    let homework: TopicSelectionResult | undefined;
    if (input.dailyTimeMinutes >= 30 && selected.length > 3) {
      homework = selected[3];
    }

    return {
      primary,
      alternatives,
      homework,
    };
  }

  /**
   * Calculate which skills need most attention
   * Used for focusing daily recommendations
   */
  getSkillPriorities(input: TopicSelectionInput): Array<{
    skill: SkillType;
    priority: number;
    reason: string;
  }> {
    const skillPriorities = Object.entries(input.skillVector)
      .map(([skill, val]) => {
        const value = val as number;
        let priority = (1 - value) * 100;  // Lower skill = higher priority
        let reason = `Уровень: ${Math.round(value * 100)}%`;

        // Boost for recent errors
        const hasErrors = input.recentErrors.some(
          (error: string) => error.toLowerCase().includes(skill.toLowerCase())
        );
        if (hasErrors) {
          priority += 30;
          reason += ' + недавние ошибки';
        }

        // Boost for IELTS relevance
        const ieltsSkills = ['listening', 'speaking', 'writing', 'comprehension'];
        if (input.targetIELTSBand && ieltsSkills.includes(skill)) {
          priority += 20;
          reason += ' + важно для IELTS';
        }

        return {
          skill: skill as SkillType,
          priority,
          reason,
        };
      })
      .sort((a, b) => b.priority - a.priority);

    return skillPriorities;
  }
}

export const topicSelectionService = new TopicSelectionService();
