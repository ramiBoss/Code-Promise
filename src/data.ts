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
} from './questions';

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
];
