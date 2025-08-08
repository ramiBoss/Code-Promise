import type { QuestionMetadata } from '../../types';

export const maximumSubarrayMetadata: QuestionMetadata = {
  id: '3',
  title: 'Maximum Subarray',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  description:
    'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
  examples: [
    {
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'The subarray [4,-1,2,1] has the largest sum 6.',
    },
    {
      input: 'nums = [1]',
      output: '1',
    },
  ],
  explanation:
    "We use Kadane's algorithm. At each position, we decide whether to start a new subarray or extend the existing one by comparing the current element with the sum of current element and previous subarray.",
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
};

/**
 * Maximum Subarray Solution (Kadane's Algorithm)
 * @param nums - Array of integers
 * @returns Maximum sum of any subarray
 */
export function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
