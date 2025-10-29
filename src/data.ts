import type { CodingQuestion } from './types';
import {
  twoSumMetadata,
  twoSum,
  validParenthesesMetadata,
  isValid,
  maximumSubarrayMetadata,
  maxSubArray,
  mergeTwoSortedListsMetadata,
  mergeTwoLists,
  binaryTreeInorderTraversalMetadata,
  inorderTraversal,
  longestValidParenthesesMetadata,
  longestValidParentheses,
  editDistanceMetadata,
  editDistance,
  reverseStringMetadata,
  reverseString,
  activitySelectionMetadata,
  activitySelection,
  allSumCombination,
  allSumCombinationMetadata,
  climbStairs,
  climbStairsMetadata,
  coinChange,
  coinChangeMetadata,
} from './questions';
import { threeSum, threeSumMetadata } from './questions/medium/ThreeSum';

export const codingQuestions: CodingQuestion[] = [
  // Easy Problems
  {
    ...reverseStringMetadata,
    solution: reverseString,
  },
  {
    ...twoSumMetadata,
    solution: twoSum,
  },
  {
    ...validParenthesesMetadata,
    solution: isValid,
  },
  {
    ...mergeTwoSortedListsMetadata,
    solution: mergeTwoLists,
  },
  {
    ...binaryTreeInorderTraversalMetadata,
    solution: inorderTraversal,
  },

  // Medium Problems
  {
    ...maximumSubarrayMetadata,
    solution: maxSubArray,
  },
  // Hard Problems
  {
    ...longestValidParenthesesMetadata,
    solution: longestValidParentheses,
  },
  {
    ...editDistanceMetadata,
    solution: editDistance,
  },
  {
    ...activitySelectionMetadata,
    solution: activitySelection,
  },
  {
    ...threeSumMetadata,
    solution: threeSum,
  },
  {
    ...coinChangeMetadata,
    solution: coinChange,
  },
  {
    ...climbStairsMetadata,
    solution: climbStairs,
  },
  {
    ...allSumCombinationMetadata,
    solution: allSumCombination,
  },
];
