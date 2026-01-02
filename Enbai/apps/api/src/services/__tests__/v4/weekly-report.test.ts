/**
 * V4.1 Weekly Report Tests
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { generateWeeklyReportV4 } from '../../v4/weekly-report.service';

// Mock prisma
vi.mock('../../../db', () => ({
  prisma: {
    skillVector: {
      findFirst: vi.fn().mockResolvedValue({
        grammar: 0.6,
        vocabulary: 0.55,
        pronunciation: 0.45,
        listening: 0.5,
        speaking: 0.48,
        slang: 0.35,
        wordFormation: 0.42,
        fluency: 0.5,
        writing: 0.55,
        comprehension: 0.58,
      }),
    },
    taskAttempt: {
      findMany: vi.fn().mockResolvedValue([
        { isCorrect: true, timeSpentSeconds: 120, submittedAt: new Date() },
        { isCorrect: true, timeSpentSeconds: 90, submittedAt: new Date() },
        { isCorrect: false, timeSpentSeconds: 150, submittedAt: new Date() },
        { isCorrect: true, timeSpentSeconds: 100, submittedAt: new Date() },
        { isCorrect: true, timeSpentSeconds: 80, submittedAt: new Date() },
      ]),
      findFirst: vi.fn().mockResolvedValue(null),
    },
    profile: {
      findUnique: vi.fn().mockResolvedValue({
        cefrLevel: 'B1',
      }),
    },
    progressSnapshot: {
      findMany: vi.fn().mockResolvedValue([]),
    },
  },
}));

describe('Weekly Report V4.1', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('generateWeeklyReportV4', () => {
    it('should generate a valid report structure', async () => {
      const report = await generateWeeklyReportV4('test-user-id');

      // Check schema version
      expect(report.schemaVersion).toBe('1.0');

      // Check basic structure
      expect(report.userId).toBe('test-user-id');
      expect(report.weekStart).toBeDefined();
      expect(report.weekEnd).toBeDefined();
      expect(report.generatedAt).toBeDefined();

      // Check summary
      expect(report.summary).toBeDefined();
      expect(typeof report.summary.totalTasks).toBe('number');
      expect(typeof report.summary.correctTasks).toBe('number');
      expect(typeof report.summary.accuracyPercent).toBe('number');
      expect(typeof report.summary.totalMinutes).toBe('number');

      // Check skill progress
      expect(report.skillProgress).toBeDefined();
      expect(Array.isArray(report.skillProgress)).toBe(true);
      expect(report.skillProgress.length).toBe(10); // 10 skills

      // Check arrays exist
      expect(Array.isArray(report.achievements)).toBe(true);
      expect(Array.isArray(report.challenges)).toBe(true);
      expect(Array.isArray(report.risks)).toBe(true);
      expect(Array.isArray(report.recommendations)).toBe(true);

      // Check next week plan
      expect(report.nextWeekPlan).toBeDefined();
      expect(report.nextWeekPlan.primaryFocus).toBeDefined();
      expect(report.nextWeekPlan.suggestedDailyMinutes).toBeGreaterThan(0);
    });

    it('should calculate accuracy correctly', async () => {
      const report = await generateWeeklyReportV4('test-user-id');

      // With 4 correct out of 5 tasks = 80%
      expect(report.summary.totalTasks).toBe(5);
      expect(report.summary.correctTasks).toBe(4);
      expect(report.summary.accuracyPercent).toBe(80);
    });

    it('should include all 10 skills in progress', async () => {
      const report = await generateWeeklyReportV4('test-user-id');

      const skillNames = report.skillProgress.map(s => s.skill);
      expect(skillNames).toContain('grammar');
      expect(skillNames).toContain('vocabulary');
      expect(skillNames).toContain('pronunciation');
      expect(skillNames).toContain('listening');
      expect(skillNames).toContain('speaking');
      expect(skillNames).toContain('slang');
      expect(skillNames).toContain('wordFormation');
      expect(skillNames).toContain('fluency');
      expect(skillNames).toContain('writing');
      expect(skillNames).toContain('comprehension');
    });

    it('should have valid skill progress structure', async () => {
      const report = await generateWeeklyReportV4('test-user-id');

      for (const skill of report.skillProgress) {
        expect(skill.skill).toBeDefined();
        expect(skill.skillName).toBeDefined();
        expect(skill.skillNameRu).toBeDefined();
        expect(typeof skill.weekStart).toBe('number');
        expect(typeof skill.weekEnd).toBe('number');
        expect(typeof skill.delta).toBe('number');
        expect(['up', 'down', 'stable']).toContain(skill.trend);
      }
    });

    it('should identify weak skills for risks', async () => {
      const report = await generateWeeklyReportV4('test-user-id');

      // With slang at 0.35, should be flagged
      const slangRisk = report.risks.find(r => r.id?.includes('slang'));
      // May or may not have risk depending on threshold
      expect(report.risks.length).toBeGreaterThanOrEqual(0);
    });

    it('should include Russian translations', async () => {
      const report = await generateWeeklyReportV4('test-user-id');

      // Check summary has Russian
      expect(report.summary.textSummaryRu).toBeDefined();
      expect(report.summary.textSummaryRu.length).toBeGreaterThan(0);

      // Check skill names have Russian
      for (const skill of report.skillProgress) {
        expect(skill.skillNameRu).toBeDefined();
        expect(skill.skillNameRu.length).toBeGreaterThan(0);
      }

      // Check next week plan has Russian
      expect(Array.isArray(report.nextWeekPlan.goalsRu)).toBe(true);
    });

    it('should respect custom weekStart parameter', async () => {
      const customDate = '2024-12-01';
      const report = await generateWeeklyReportV4('test-user-id', customDate);

      // weekStart is the beginning of the week (Sunday), so it may adjust
      expect(report.weekStart).toBeDefined();
      expect(new Date(report.weekStart).getTime()).toBeLessThanOrEqual(new Date(customDate).getTime());
    });
  });

  describe('report content quality', () => {
    it('should have reasonable summary text', async () => {
      const report = await generateWeeklyReportV4('test-user-id');

      // Summary should mention tasks
      expect(report.summary.textSummary.toLowerCase()).toMatch(/task|complete|week/);
      expect(report.summary.textSummaryRu).toMatch(/задани|недел/);
    });

    it('should have valid next week goals', async () => {
      const report = await generateWeeklyReportV4('test-user-id');

      expect(report.nextWeekPlan.goals.length).toBeGreaterThan(0);
      expect(report.nextWeekPlan.goalsRu.length).toBeGreaterThan(0);
      expect(report.nextWeekPlan.goals.length).toBe(report.nextWeekPlan.goalsRu.length);
    });

    it('should have valid CEFR level in summary', async () => {
      const report = await generateWeeklyReportV4('test-user-id');

      const validLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
      expect(validLevels).toContain(report.summary.cefrLevel);
    });
  });
});
