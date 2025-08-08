import type { QuestionMetadata } from '../../types';

export const longestValidParenthesesMetadata: QuestionMetadata = {
  id: '6',
  title: 'Longest Valid Parentheses',
  difficulty: 'Hard',
  category: 'Dynamic Programming',
  description:
    "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
  examples: [
    {
      input: 's = "(()"',
      output: '2',
      explanation: 'The longest valid parentheses substring is "()".',
    },
    {
      input: 's = ")()())"',
      output: '4',
      explanation: 'The longest valid parentheses substring is "()()".',
    },
    {
      input: 's = ""',
      output: '0',
    },
  ],
  explanation:
    'We use dynamic programming where dp[i] represents the length of the longest valid parentheses ending at index i. For each closing parenthesis, we check if it can form a valid pair and extend previous valid sequences.',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
};

/**
 * Longest Valid Parentheses Solution
 * @param s - String containing only '(' and ')'
 * @returns Length of the longest valid parentheses substring
 */
export function longestValidParentheses(s: string): number {
  const n = s.length;
  // Return 0 for empty string or single character
  if (n <= 1) return 0;

  // dp[i] represents length of longest valid parentheses ending at index i
  const dp = new Array(n).fill(0);
  let maxLen = 0;

  for (let i = 1; i < n; i++) {
    if (s[i] === ')') {
      // Only process closing parentheses
      if (s[i - 1] === '(') {
        // Direct match case: ...()
        // Add 2 for current pair plus any valid sequence before it
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (dp[i - 1] > 0) {
        // Nested match case: ...))
        // Try to find matching '(' for current ')'
        const matchIndex = i - dp[i - 1] - 1;
        if (matchIndex >= 0 && s[matchIndex] === '(') {
          // Add current pair (2) + inner valid sequence + valid sequence before matching '('
          dp[i] = dp[i - 1] + 2 + (matchIndex > 0 ? dp[matchIndex - 1] : 0);
        }
      }
      maxLen = Math.max(maxLen, dp[i]); // Update maximum length found so far
    }
  }

  return maxLen;
}
