import type { QuestionMetadata } from '../../types';

export const editDistanceMetadata: QuestionMetadata = {
  id: '5',
  title: 'Edit Distance',
  difficulty: 'Hard',
  category: 'Dynamic Programming',
  description:
    'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.',
  examples: [
    {
      input: 'word1 = "horse", word2 = "ros"',
      output: '3',
    },
    {
      input: 'word1 = "intention", word2 = "execution"',
      output: '5',
    },
  ],
  explanation:
    'We can use dynamic programming to solve this problem by building a matrix that represents the edit distance between substrings of the two words.',
  timeComplexity: 'O(m * n)',
  spaceComplexity: 'O(m * n)',
};

/**
 * Edit Distance Solution
 * @param word1 - First string
 * @param word2 - Second string
 * @returns Minimum number of operations to convert word1 to word2
 */
/**
 * Pseudo code:
 * 1. Get lengths m and n of word1 and word2
 * 2. Create dp matrix of size (m+1) x (n+1)
 * 3. Initialize first row and column:
 *    - dp[i][0] = i (cost of deleting characters)
 *    - dp[0][j] = j (cost of inserting characters)
 * 4. For each cell dp[i][j]:
 *    - If characters match: dp[i][j] = dp[i-1][j-1]
 *    - If characters differ: dp[i][j] = min(delete, insert, replace) + 1
 *      where:
 *      delete = dp[i-1][j]
 *      insert = dp[i][j-1]
 *      replace = dp[i-1][j-1]
 * 5. Return dp[m][n]
 */
export function editDistance(word1: string, word2: string): number {
  // Get lengths of both strings
  const m = word1.length;
  const n = word2.length;

  // Create a matrix of size (m+1) x (n+1) filled with 0s
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Initialize first row and column
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // Base case: cost of deleting all characters from word1
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j; // Base case: cost of inserting all characters from word2
  }

  // Fill the dp matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // If characters match, no operation needed
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Take minimum of delete, insert, or replace operations
        // dp[i-1][j]: deletion
        // dp[i][j-1]: insertion
        // dp[i-1][j-1]: replacement
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  // Return minimum operations needed
  return dp[m][n];
}
