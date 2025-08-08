import type { QuestionMetadata } from '../../types';

export const validParenthesesMetadata: QuestionMetadata = {
  id: '2',
  title: 'Valid Parentheses',
  difficulty: 'Easy',
  category: 'Stack',
  description:
    "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
  examples: [
    {
      input: 's = "()"',
      output: 'true',
    },
    {
      input: 's = "()[]{}"',
      output: 'true',
    },
    {
      input: 's = "(]"',
      output: 'false',
    },
  ],
  explanation:
    'We use a stack to keep track of opening brackets. When we encounter a closing bracket, we check if the top of the stack contains the matching opening bracket.',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
};

/**
 * Valid Parentheses Solution
 * @param s - String containing parentheses
 * @returns True if the parentheses are valid, false otherwise
 */
export function isValid(s: string): boolean {
  // Stack to keep track of opening brackets
  const stack: string[] = [];
  // Map of closing brackets to their corresponding opening brackets
  const pairs: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // Iterate through each character in the string
  for (const char of s) {
    // If character is an opening bracket, push to stack
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      // For closing bracket, check if stack is empty or if last opening bracket doesn't match
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  // String is valid only if all brackets are matched (stack is empty)
  return stack.length === 0;
}
