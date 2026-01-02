// Context Anchor Builder for VocabOS Tutor
// Builds personalized context that gets injected into SYSTEM prompt

export type SessionPhase = 'ONBOARDING' | 'TEACHING';

export type UserIntent =
  | 'grammar_practice'
  | 'vocab_study'
  | 'exercises'
  | 'speaking'
  | 'general';

export interface SkillVector {
  grammar: number;
  vocabulary: number;
  pronunciation: number;
  listening: number;
  speaking: number;
  slang: number;
  wordFormation: number;
  fluency: number;
  writing: number;
  comprehension: number;
}

export interface UserContext {
  // Core profile
  userLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  skillVector: SkillVector;
  learningGoal: 'IELTS' | 'work' | 'travel' | 'life' | 'hobby' | 'immigration';

  // Personalization
  interests: string[];
  dailyTimeMinutes: number;

  // Session state
  sessionPhase: SessionPhase;
  messagesInSession: number;
  fatigue: 'low' | 'medium' | 'high';

  // Learning context
  recentErrors?: string[];
  topicsExplainedThisSession?: string[];

  // Optional
  userName?: string;
  intent?: UserIntent;
}

// Get the 2-3 weakest skills from vector
function getWeakestSkills(skillVector: SkillVector): string[] {
  const skills = Object.entries(skillVector)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => a.value - b.value)
    .slice(0, 3)
    .map(s => s.name);

  return skills;
}

// Get skill level description
function getSkillDescription(value: number): string {
  if (value < 0.3) return 'нужна работа';
  if (value < 0.5) return 'базовый';
  if (value < 0.7) return 'средний';
  if (value < 0.85) return 'хороший';
  return 'сильный';
}

// Format skill name for display
function formatSkillName(name: string): string {
  const nameMap: Record<string, string> = {
    grammar: 'грамматика',
    vocabulary: 'словарный запас',
    pronunciation: 'произношение',
    listening: 'аудирование',
    speaking: 'разговорный',
    slang: 'сленг/идиомы',
    wordFormation: 'словообразование',
    fluency: 'беглость',
    writing: 'письмо',
    comprehension: 'понимание'
  };
  return nameMap[name] || name;
}

// Build condensed skills summary
function buildSkillsSummary(skillVector: SkillVector): string {
  const entries = Object.entries(skillVector);
  const weak = entries.filter(([_, v]) => v < 0.4).map(([n]) => formatSkillName(n));
  const strong = entries.filter(([_, v]) => v >= 0.7).map(([n]) => formatSkillName(n));

  let summary = '';
  if (weak.length > 0) {
    summary += `Слабые: ${weak.join(', ')}. `;
  }
  if (strong.length > 0) {
    summary += `Сильные: ${strong.join(', ')}.`;
  }

  return summary || 'Навыки на среднем уровне.';
}

// Format learning goal
function formatGoal(goal: string): string {
  const goalMap: Record<string, string> = {
    IELTS: 'подготовка к IELTS',
    work: 'английский для работы',
    travel: 'английский для путешествий',
    life: 'английский для жизни',
    hobby: 'хобби/саморазвитие',
    immigration: 'переезд/иммиграция'
  };
  return goalMap[goal] || goal;
}

// Format fatigue level
function formatFatigue(fatigue: string): string {
  const fatigueMap: Record<string, string> = {
    low: 'бодрый, готов учиться',
    medium: 'нормально',
    high: 'устал, нужен облегчённый режим'
  };
  return fatigueMap[fatigue] || fatigue;
}

// Build the context anchor for SYSTEM prompt
export function buildContextAnchor(context: UserContext): string {
  const weakestSkills = getWeakestSkills(context.skillVector);
  const skillsSummary = buildSkillsSummary(context.skillVector);

  const anchor = `
╔══════════════════════════════════════════════════════════════════╗
║                    КОНТЕКСТ УЧЕНИКА (SYSTEM ONLY)                ║
╠══════════════════════════════════════════════════════════════════╣
║ Уровень: ${context.userLevel}
║ Цель: ${formatGoal(context.learningGoal)}
║ Время в день: ${context.dailyTimeMinutes} минут
║
║ ${skillsSummary}
║ Фокус на: ${weakestSkills.map(formatSkillName).join(', ')}
║
║ Интересы: ${context.interests.length > 0 ? context.interests.join(', ') : 'не указаны'}
║ Состояние: ${formatFatigue(context.fatigue)}
║
║ --- СЕССИЯ ---
║ Фаза: ${context.sessionPhase}
║ Сообщение #${context.messagesInSession}
${context.topicsExplainedThisSession && context.topicsExplainedThisSession.length > 0
  ? `║ Уже объяснено в этой сессии: ${context.topicsExplainedThisSession.join(', ')}\n`
  : ''}${context.recentErrors && context.recentErrors.length > 0
  ? `║ Недавние ошибки: ${context.recentErrors.slice(0, 3).join(', ')}\n`
  : ''}${context.intent && context.intent !== 'general'
  ? `║ Intent: ${context.intent}\n`
  : ''}║
║ ЭТИ ДАННЫЕ ИСПОЛЬЗУЙ, НО НЕ НАЗЫВАЙ НАПРЯМУЮ.
╚══════════════════════════════════════════════════════════════════╝`;

  return anchor;
}

// Determine session phase based on conversation state
export function determineSessionPhase(
  messagesInSession: number,
  hasConfirmedPlan: boolean,
  explicitPhase?: SessionPhase
): SessionPhase {
  // If explicitly set, use that
  if (explicitPhase) return explicitPhase;

  // If plan confirmed, we're teaching
  if (hasConfirmedPlan) return 'TEACHING';

  // First 6 messages default to onboarding
  if (messagesInSession <= 6) return 'ONBOARDING';

  // After 6 messages, assume teaching
  return 'TEACHING';
}

// Detect user intent from message
export function detectUserIntent(message: string): UserIntent {
  const lowerMsg = message.toLowerCase();

  // Grammar practice
  if (
    lowerMsg.includes('грамматик') ||
    lowerMsg.includes('grammar') ||
    lowerMsg.includes('времена') ||
    lowerMsg.includes('tenses') ||
    lowerMsg.includes('правил')
  ) {
    return 'grammar_practice';
  }

  // Vocabulary
  if (
    lowerMsg.includes('слов') ||
    lowerMsg.includes('vocab') ||
    lowerMsg.includes('лексик') ||
    lowerMsg.includes('выучить слова')
  ) {
    return 'vocab_study';
  }

  // Exercises
  if (
    lowerMsg.includes('упражнен') ||
    lowerMsg.includes('exercise') ||
    lowerMsg.includes('задани') ||
    lowerMsg.includes('практик') ||
    lowerMsg.includes('потренир')
  ) {
    return 'exercises';
  }

  // Speaking
  if (
    lowerMsg.includes('поговор') ||
    lowerMsg.includes('разговор') ||
    lowerMsg.includes('speaking') ||
    lowerMsg.includes('поболта')
  ) {
    return 'speaking';
  }

  return 'general';
}

// Create default context for new users
export function createDefaultContext(
  userLevel: UserContext['userLevel'] = 'A1',
  learningGoal: UserContext['learningGoal'] = 'life'
): UserContext {
  return {
    userLevel,
    skillVector: {
      grammar: 0.3,
      vocabulary: 0.3,
      pronunciation: 0.3,
      listening: 0.3,
      speaking: 0.3,
      slang: 0.2,
      wordFormation: 0.2,
      fluency: 0.2,
      writing: 0.3,
      comprehension: 0.3
    },
    learningGoal,
    interests: [],
    dailyTimeMinutes: 15,
    sessionPhase: 'ONBOARDING',
    messagesInSession: 1,
    fatigue: 'low',
    recentErrors: [],
    topicsExplainedThisSession: []
  };
}

export default {
  buildContextAnchor,
  determineSessionPhase,
  detectUserIntent,
  createDefaultContext
};
