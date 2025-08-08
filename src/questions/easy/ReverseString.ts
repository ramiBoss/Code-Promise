import type { QuestionMetadata } from '../../types';

export const reverseStringMetadata: QuestionMetadata = {
  id: '3',
  title: 'Reverse String',
  difficulty: 'Easy',
  category: 'String',
  description:
    'Write a function that reverses a string without using the built-in method.',
  examples: [
    {
      input: 's = "hello"',
      output: '"olleh"',
    },
    {
      input: 's = "world"',
      output: '"dlrow"',
    },
  ],
  explanation:
    'To reverse a string without using the built-in method, we can use a loop to iterate through the string and build the reversed string manually.',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
};

/** * Reverse String Solution
 * @param s - String to be reversed
 * @returns Reversed string
 */
export function reverseString(s: string): string {
  let reversed = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }
  return reversed;
}
