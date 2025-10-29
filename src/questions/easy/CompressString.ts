import type { QuestionMetadata } from '../../types';

export const compressStringMetadata: QuestionMetadata = {
  id: '102',
  title: 'Compress String',
  difficulty: 'Easy',
  category: 'String Manipulation',
  description:
    'Compress a string by replacing consecutive identical characters with the character followed by the count of repetitions.',
  examples: [
    {
      input: `"aaabbbccdaa"`,
      output: `"a3b3c2d1a2"`,
      explanation: `The string "aaabbbccdaa" can be compressed to "a3b3c2d1a2" where 'a' appears 3 times, 'b' appears 3 times, 'c' appears 2 times, 'd' appears 1 time, and 'a' appears 2 times at the end.`,
    },
    {
      input: `"abcd"`,
      output: `"a1b1c1d1"`,
      explanation: `The string "abcd" has no consecutive identical characters, so each character is followed by 1.`,
    },
  ],
  explanation:
    'We iterate through the string, counting consecutive identical characters and appending the character along with its count to the result string.',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
};

/**
 * Compresses a string by replacing consecutive identical characters with the character followed by the count of repetitions.
 * @param str - The input string to be compressed.
 * @returns The compressed string.
 */

export function compressString(str: string): string {
  if (str.length === 0) return '';
  let compressed = '';
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;
      count = 1;
    }
  }
  // Add the last character group
  compressed += str[str.length - 1] + count;

  return compressed;
}
