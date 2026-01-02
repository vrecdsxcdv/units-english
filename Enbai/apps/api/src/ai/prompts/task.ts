import type { SkillType, SkillVector } from '@enbai/types';

/**
 * Prompt for generating tasks
 */
export function buildTaskGenerationPrompt(params: {
  skillVector: SkillVector;
  targetSkill?: SkillType | 'auto';
  difficulty?: number | 'auto';
  preferredType?: string;
  topic?: string;
  interests: string[];
}): string {
  const { skillVector, targetSkill, difficulty, preferredType, topic, interests } = params;

  const weakSkills = Object.entries(skillVector)
    .filter(([_, v]) => v < 0.4)
    .sort((a, b) => a[1] - b[1])
    .map(([k]) => k);

  const resolvedSkill = targetSkill === 'auto' || !targetSkill
    ? weakSkills[0] || 'grammar'
    : targetSkill;

  const resolvedDifficulty = difficulty === 'auto' || !difficulty
    ? Math.round(skillVector[resolvedSkill as keyof SkillVector] * 10) + 1
    : difficulty;

  return `Generate an English learning task.

## User Profile
- Skill Vector: ${JSON.stringify(skillVector)}
- Weak Areas: ${weakSkills.join(', ') || 'balanced'}
- Interests: ${interests.join(', ') || 'general topics'}

## Task Requirements
- Target Skill: ${resolvedSkill}
- Difficulty: ${resolvedDifficulty}/10
${preferredType ? `- Preferred Type: ${preferredType}` : ''}
${topic ? `- Topic/Theme: ${topic}` : ''}

## Available Template Types
- multiple_choice_v1: Single correct answer from options
- fill_blanks_v1: Complete sentences with missing words
- fill_blanks_v2: With word bank provided
- match_pairs_v1: Connect related items
- reorder_sentence_v1: Arrange words in correct order
- error_correction_v1: Find and fix grammar/spelling errors
- speaking_repeat_v1: Repeat a phrase (for pronunciation)
- speaking_describe_v1: Describe an image or scenario
- listening_comprehension_v1: Listen and answer questions

## Output Format
Return ONLY valid JSON matching this exact schema:

{
  "templateId": "fill_blanks_v1",
  "type": "grammar",
  "difficulty": 5,
  "objectives": ["Learn past simple tense"],
  "targetSkills": ["grammar"],
  "content": {
    "type": "fill_blanks",
    "text": "Yesterday, I {{blank_1}} to the store.",
    "blanks": [
      {
        "id": "blank_1",
        "hint": "past tense of 'go'",
        "correctAnswers": ["went"]
      }
    ]
  },
  "uiHints": {
    "showTimer": true,
    "allowHint": true
  },
  "evaluation": {
    "type": "auto",
    "scoringMethod": "exact",
    "skillWeights": {"grammar": 1.0}
  },
  "expectedTimeSeconds": 60
}

Important:
- Content structure depends on template type
- For fill_blanks: use {{blank_id}} markers in text
- For multiple_choice: include options array with id and text
- For match_pairs: include leftItems and rightItems arrays
- Keep task focused and achievable
- Make content engaging based on user interests`;
}

/**
 * Prompt for evaluating task attempts
 */
export function buildTaskEvaluationPrompt(params: {
  task: any;
  answer: any;
  userLevel: string;
}): string {
  const { task, answer, userLevel } = params;

  return `Evaluate this English learning task attempt.

## Task
${JSON.stringify(task.content, null, 2)}

## User's Answer
${JSON.stringify(answer, null, 2)}

## Evaluation Criteria
${JSON.stringify(task.evaluationRubric || task.evaluation, null, 2)}

## User Level
${userLevel}

## Output Format
Return ONLY valid JSON:

{
  "isCorrect": true,
  "score": 0.85,
  "feedback": "Great job! You correctly used the past tense. One small note: 'went' is irregular.",
  "mistakes": [
    {
      "type": "grammar",
      "description": "Minor hesitation visible",
      "correction": null,
      "severity": "minor"
    }
  ],
  "skillDeltas": {
    "grammar": 0.02
  },
  "encouragement": "You're making excellent progress with past tense!"
}

Guidelines:
- Score from 0.0 to 1.0
- Be encouraging but honest
- Identify specific mistakes with helpful corrections
- Calculate skill deltas based on performance:
  - Perfect: +0.02 to +0.03
  - Good (minor errors): +0.01 to +0.02
  - Partial: 0 to +0.01
  - Poor: -0.01 to 0
- Keep feedback concise (2-3 sentences)`;
}
