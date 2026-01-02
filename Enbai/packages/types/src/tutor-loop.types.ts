/**
 * TutorLoop Types for V3/V4
 *
 * State machine types for the teaching pipeline.
 */

/**
 * TutorLoop States V3
 */
export type TutorLoopStateV3 =
  | 'WARMUP'       // 1-2 phrases, emotional check-in
  | 'GOAL_ALIGN'   // What today and why (skill vector + errors)
  | 'TEACH'        // Micro-lesson: hook + 3-6 sentences + 2 examples
  | 'SELF_CHECK'   // Internal: AI checks itself (not shown to user)
  | 'CHECK'        // 1 short question for understanding
  | 'ADAPT'        // If not understood → simpler + different example
  | 'PRACTICE'     // 1-3 tasks (no more!)
  | 'REVIEW'       // Summary + what improved
  | 'NEXT_STEP';   // Next micro-step

/**
 * Allowed state transitions in V3 TutorLoop
 */
export const TUTOR_LOOP_V3_TRANSITIONS: Record<TutorLoopStateV3, TutorLoopStateV3[]> = {
  WARMUP: ['GOAL_ALIGN'],
  GOAL_ALIGN: ['TEACH'],
  TEACH: ['SELF_CHECK'],           // MANDATORY self-check after teach
  SELF_CHECK: ['CHECK'],           // After self-check → check understanding
  CHECK: ['ADAPT', 'PRACTICE'],    // Not understood → adapt, understood → practice
  ADAPT: ['CHECK'],                // After adaptation → check again
  PRACTICE: ['REVIEW'],
  REVIEW: ['NEXT_STEP'],
  NEXT_STEP: ['WARMUP', 'GOAL_ALIGN'], // New cycle
};

/**
 * Check if a V3 TutorLoop transition is valid
 */
export function isValidTutorLoopTransition(
  from: TutorLoopStateV3,
  to: TutorLoopStateV3
): boolean {
  const allowed = TUTOR_LOOP_V3_TRANSITIONS[from];
  return allowed ? allowed.includes(to) : false;
}

/**
 * Get next default state in V3 TutorLoop
 */
export function getDefaultNextTutorState(current: TutorLoopStateV3): TutorLoopStateV3 {
  const transitions = TUTOR_LOOP_V3_TRANSITIONS[current];
  return transitions?.[0] || 'WARMUP';
}
