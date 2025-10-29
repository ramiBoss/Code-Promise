import type { QuestionMetadata } from '../../types';

export const climbStairsMetadata: QuestionMetadata = {
  id: '8',
  title: 'Climb Stairs',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  description:
    'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
  examples: [
    {
      input: 'n = 2',
      output: '2',
    },
    {
      input: 'n = 3',
      output: '3',
    },
  ],
  explanation:
    'This problem can be solved using dynamic programming by recognizing that the number of ways to reach step n is the sum of the ways to reach steps n-1 and n-2.',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
};

/**
 * Climb Stairs Solution
 * @param n - Number of steps to reach the top
 * @returns Number of distinct ways to climb to the top
 *
 * Pseudo code:
 * 1. If n is 1, return 1
 * 2. Initialize two variables a and b to represent the number of ways to reach the last two steps
 * 3. Loop from 2 to n:
 *    - Calculate the current number of ways as a + b
 *    - Update a to b and b to current
 * 4. Return b
 */

export function climbStairs(n: number): number {
  if (n === 1) return 1;

  let a = 1; // Ways to reach step 1
  let b = 2; // Ways to reach step 2

  for (let i = 2; i < n; i++) {
    const current = a + b; // Current ways to reach step i
    a = b; // Update a to previous b
    b = current; // Update b to current
  }

  return b; // Return ways to reach step n
}
