import type { QuestionMetadata } from '../../types';

export const coinChangeMetadata: QuestionMetadata = {
  id: '9',
  title: 'Coin Change',
  difficulty: 'Medium',
  category: 'Dynamic Programming',
  description:
    'Given an array of coin denominations and a total amount, determine the fewest number of coins needed to make up that amount. If it is not possible, return -1.',
  examples: [
    {
      input: 'coins = [1,2,5], amount = 11',
      output: '3',
    },
    {
      input: 'coins = [2], amount = 3',
      output: '-1',
    },
    {
      input: 'coins = [1], amount = 0',
      output: '0',
    },
  ],
  explanation:
    'We can use dynamic programming to build up a solution by finding the minimum coins needed for all amounts up to the target amount.',
  timeComplexity:
    'O(n * m) where n is the amount and m is the number of coin denominations',
  spaceComplexity: 'O(n)',
};

/**
 * Coin Change Solution
 * @param coins - Array of coin denominations
 * @param amount - Total amount
 * @returns Fewest number of coins needed to make up the amount or -1 if not possible
 */
/**
 * Pseudo code:
 * 1. Initialize dp array of size amount + 1 with Infinity, set dp[0] = 0
 * 2. Loop through each coin in coins:
 *    - For each coin, loop through amounts from coin to amount:
 *      - Update dp[currentAmount] = min(dp[currentAmount], dp[currentAmount - coin] + 1)
 * 3. If dp[amount] is still Infinity, return -1, else return dp[amount]
 */
export function coinChange(coins: number[], amount: number): number {
  const dp: number[] = Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Base case: 0 coins needed to make amount 0

  // Loop through each coin denomination
  for (const coin of coins) {
    // Update dp array for all amounts from coin to target amount
    for (let currentAmount = coin; currentAmount <= amount; currentAmount++) {
      dp[currentAmount] = Math.min(
        dp[currentAmount],
        dp[currentAmount - coin] + 1
      );
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]; // Return result
}
