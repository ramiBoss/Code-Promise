import type { QuestionMetadata } from '../../types';

export const palindromeCheckMetadata: QuestionMetadata = {
  id: '4',
  title: 'Palindrome Check',
  difficulty: 'Easy',
  category: 'String',
  description: 'Check if a given string is a palindrome.',
  examples: [
    {
      input: 's = "racecar"',
      output: 'true',
    },
    {
      input: 's = "hello"',
      output: 'false',
    },
    {
      input: 's = "madam"',
      output: 'true',
    },
  ],
  explanation:
    'A palindrome reads the same backward as forward. We can check this by comparing characters from the start and end of the string moving towards the center.',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
};

/**
 * Palindrome Check Solution
 * @param s - String to check
 * @returns True if the string is a palindrome, false otherwise
 */
export function isPalindrome(s: string): boolean {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Initialize two pointers at the start and end of string
  let left = 0;
  let right = cleaned.length - 1;

  // Compare characters from both ends moving towards center
  while (left < right) {
    // If characters don't match, string is not a palindrome
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    // Move pointers towards center
    left++;
    right--;
  }

  // If we get here, string is a palindrome
  return true;
}
