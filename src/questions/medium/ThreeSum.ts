import type { QuestionMetadata } from '../../types';

export const threeSumMetadata: QuestionMetadata = {
  id: '7',
  title: '3Sum',
  difficulty: 'Medium',
  category: 'Array',
  description:
    'Given an array of integers, find all unique triplets (a, b, c) such that a + b + c = 0.',
  examples: [
    {
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
    },
    {
      input: 'nums = []',
      output: '[]',
    },
    {
      input: 'nums = [0]',
      output: '[]',
    },
  ],
  explanation:
    'We can solve this problem by sorting the array and using a two-pointer technique to find pairs that sum to the negative of the current element.',
  timeComplexity: 'O(n^2)',
  spaceComplexity: 'O(n)',
};

/**
 * 3Sum Solution
 * @param nums - Array of integers
 * @returns Array of unique triplets that sum to zero
 */
/**
 * Pseudo code:
 * 1. Sort the input array nums
 * 2. Initialize an empty array result to store the triplets
 * 3. Loop through the array with index i from 0 to length-3:
 *    - If i > 0 and nums[i] == nums[i-1], continue to next iteration (skip duplicates)
 *    - Set left pointer to i + 1 and right pointer to end of array
 *    - While left < right:
 *      - Calculate currentSum = nums[i] + nums[left] + nums[right]
 *      - If currentSum == 0:
 *        - Add [nums[i], nums[left], nums[right]] to result
 *        - Increment left and decrement right while skipping duplicates
 *      - Else if currentSum < 0:
 *        - Increment left
 *      - Else:
 *        - Decrement right
 * 4. Return result
 */
export function threeSum(nums: number[]): number[][] {
  // Sort the input array
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // Loop through the array
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // Increment left and decrement right while skipping duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (currentSum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

/**
 * Dry run example:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Sorted nums = [-4,-1,-1,0,1,2]
 * i=0: nums[i]=-4, left=1, right=5
 *   currentSum = -4 + -1 + 2 = -3 < 0 -> left++
 *   left=2: currentSum = -4 + -1 + 2 = -3 < 0 -> left++
 *   left=3: currentSum = -4 + 0 + 2 = -2 < 0 -> left++
 *   left=4: currentSum = -4 + 1 + 2 = -1 < 0 -> left++
 *   left=5: exit while loop
 * i=1: nums[i]=-1, left=2, right=5
 *   currentSum = -1 + -1 + 2 = 0 -> add [-1,-1,2] to result
 *   left=3, right=4
 *   currentSum = -1 + 0 + 1 = 0 -> add [-1,0,1] to result
 *   left=4, right=3: exit while loop
 * i=2: nums[i]=-1 (skip duplicate)
 * i=3: nums[i]=0, left=4, right=5
 *   currentSum = 0 + 1 + 2 = 3 > 0 -> right--
 *   left=4, right=4: exit while loop
 * Result = [[-1,-1,2],[-1,0,1]]
 */
