/**
 * Human Layer Tests
 */

import { describe, it, expect } from 'vitest';
import {
  HumanLayer,
  getPresencePhrase,
  reframeIELTSGoal,
  normalizeError,
  getFatigueResponse,
} from '../human-layer';

describe('Human Layer', () => {
  describe('buildPrompt', () => {
    it('should build prompt with all sections', () => {
      const prompt = HumanLayer.buildPrompt({
        cefrLevel: 'B1',
        learningGoal: 'IELTS 7.0',
        weakestSkills: ['grammar', 'vocabulary'],
        dailyTimeMinutes: 30,
      });

      expect(prompt).toContain('HUMAN LAYER');
      expect(prompt).toContain('РЕЖИМ ПРИСУТСТВИЯ');
      expect(prompt).toContain('ПУТЬ, А НЕ ПРОГРАММА');
      expect(prompt).toContain('СЕГОДНЯШНИЙ ФОКУС');
      expect(prompt).toContain('grammar');
    });

    it('should include IELTS reframing for IELTS goals', () => {
      const prompt = HumanLayer.buildPrompt({
        cefrLevel: 'A2',
        learningGoal: 'Подготовка к IELTS',
        weakestSkills: ['grammar'],
        dailyTimeMinutes: 20,
      });

      expect(prompt).toContain('ПЕРЕОСМЫСЛЕНИЕ ЦЕЛИ');
      expect(prompt).toContain('IELTS');
      expect(prompt).toContain('база');
    });

    it('should not include IELTS section if no IELTS goal', () => {
      const prompt = HumanLayer.buildPrompt({
        cefrLevel: 'B2',
        learningGoal: 'Общее улучшение',
        weakestSkills: ['vocabulary'],
        dailyTimeMinutes: 15,
      });

      expect(prompt).not.toContain('ПЕРЕОСМЫСЛЕНИЕ ЦЕЛИ');
    });

    it('should include fatigue section when fatigued', () => {
      const prompt = HumanLayer.buildPrompt({
        cefrLevel: 'B1',
        weakestSkills: ['grammar'],
        dailyTimeMinutes: 30,
        isFatigued: true,
        consecutiveErrors: 3,
      });

      expect(prompt).toContain('УСТАЛОСТЬ ЗАМЕЧЕНА');
      expect(prompt).toContain('3 ошибок подряд');
    });

    it('should not include fatigue section when not fatigued', () => {
      const prompt = HumanLayer.buildPrompt({
        cefrLevel: 'B1',
        weakestSkills: ['grammar'],
        dailyTimeMinutes: 30,
        isFatigued: false,
        consecutiveErrors: 0,
      });

      expect(prompt).not.toContain('УСТАЛОСТЬ ЗАМЕЧЕНА');
    });
  });

  describe('getPresencePhrase', () => {
    it('should return first session phrase', () => {
      const phrase = getPresencePhrase({ isFirstSession: true });

      expect(phrase).toContain('спокойно');
      expect(phrase).toContain('познакомимся');
    });

    it('should return error recovery phrase', () => {
      const phrase = getPresencePhrase({ previousSessionHadErrors: true });

      expect(phrase).toContain('сложно');
      expect(phrase).toContain('по-другому');
    });

    it('should mention streak for 3+ days', () => {
      const phrase = getPresencePhrase({ streak: 5 });

      expect(phrase).toContain('5');
      expect(phrase).toContain('дней');
    });

    it('should return random phrase for normal session', () => {
      const phrase = getPresencePhrase({});

      expect(phrase.length).toBeGreaterThan(10);
    });
  });

  describe('reframeIELTSGoal', () => {
    it('should emphasize fundamentals for low levels', () => {
      const message = reframeIELTSGoal('A1');

      expect(message).toContain('фундамент');
      expect(message).toContain('позже');
    });

    it('should focus on real skills for high target band', () => {
      const message = reframeIELTSGoal('C1', 7.5);

      expect(message).toContain('реальное владение');
      expect(message).toContain('думать на английском');
    });

    it('should provide general reframe for mid levels', () => {
      const message = reframeIELTSGoal('B2');

      expect(message).toContain('уверенно');
      expect(message).toContain('подтвердить');
    });
  });

  describe('normalizeError', () => {
    it('should explain article errors', () => {
      const explanation = normalizeError('articles', 'B1');

      expect(explanation).toContain('артикли');
      expect(explanation).toContain('русском');
    });

    it('should explain tense errors', () => {
      const explanation = normalizeError('tenses', 'A2');

      expect(explanation).toContain('времён');
      expect(explanation).toContain('новой системе');
    });

    it('should return default for unknown error types', () => {
      const explanation = normalizeError('unknown_type', 'B1');

      expect(explanation).toContain('типичная ошибка');
    });
  });

  describe('getFatigueResponse', () => {
    it('should suggest slowing down for mild fatigue', () => {
      const response = getFatigueResponse('mild');

      expect(response).toContain('попроще');
    });

    it('should suggest consolidation for moderate fatigue', () => {
      const response = getFatigueResponse('moderate');

      expect(response).toContain('закрепим');
    });

    it('should suggest stopping for critical fatigue', () => {
      const response = getFatigueResponse('critical');

      expect(response).toContain('Стоп');
      expect(response).toContain('хватит');
    });
  });
});
