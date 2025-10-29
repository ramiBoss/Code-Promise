import type { QuestionMetadata } from '../../types';

export const allSumCombinationMetadata: QuestionMetadata = {
  id: '9',
  title: 'All Sum Combination',
  difficulty: 'Medium',
  category: 'Backtracking',
  description:
    'Given an array of distinct integers and a target integer, find all unique combinations in the array where the numbers sum to the target. Each number may be used multiple times in the combination.',
  examples: [
    {
      input: 'candidates = [2,3,6,7], target = 7',
      output: '[[7],[2,2,3]]',
    },
    {
      input: 'candidates = [2,3,5], target = 8',
      output: '[[2,2,2,2],[2,3,3],[3,5]]',
    },
  ],
  explanation:
    'We use backtracking to explore all possible combinations of numbers that can sum up to the target. We start from each number and recursively try to build combinations.',
  timeComplexity:
    'O(2^{T/min}) where T is the target and min is the smallest candidate',
  spaceComplexity: 'O(target)', // where target is the input target value
};

/**
 * All Sum Combination Solution
 * @param candidates - Array of distinct integers
 * @param target - Target integer
 * @returns Array of unique combinations that sum to the target
 */

/** Pseudo code:
 * 1. Initialize result array to store combinations
 * 2. Define backtrack function with parameters: start index, current path, remaining target
 * 3. If remaining target is 0, add current path to result
 * 4. Loop through candidates starting from 'start' index:
 *    - If candidate is greater than remaining target, skip
 *    - Add candidate to current path
 *    - Recursively call backtrack with updated remaining target and same start index
 *    - Remove last candidate from current path (backtrack)
 * 5. Call backtrack with initial parameters
 * 6. Return result
 */

export function allSumCombination(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];

  const backtrack = (start: number, path: number[], remaining: number) => {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) continue;
      path.push(candidates[i]);
      backtrack(i, path, remaining - candidates[i]);
      path.pop();
    }
  };

  backtrack(0, [], target);
  return result;
}
