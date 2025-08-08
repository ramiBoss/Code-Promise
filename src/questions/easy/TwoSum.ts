import type { QuestionMetadata } from '../../types';

export const twoSumMetadata: QuestionMetadata = {
  id: '1',
  title: 'Two Sum',
  difficulty: 'Easy',
  category: 'Array',
  description:
    'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
    },
  ],
  explanation:
    'We use a hash map to store the numbers we have seen and their indices. For each number, we calculate its complement (target - current number) and check if the complement exists in the map. If it does, we found our pair.',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
};

/**
 * Two Sum Solution
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Array of indices that sum to target
 */
export function twoSum(nums: number[], target: number): number[] {
  // Create a map to store numbers and their indices
  const map = new Map<number, number>();

  // Loop through each number in the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach target
    const complement = target - nums[i];

    // If complement exists in map, we found a pair
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    // Store current number and its index in map
    map.set(nums[i], i);
  }

  // Return empty array if no solution found
  return [];
}
