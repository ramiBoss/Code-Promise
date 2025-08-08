import type { QuestionMetadata } from '../../types';

// Definition for singly-linked list
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const mergeTwoSortedListsMetadata: QuestionMetadata = {
  id: '5',
  title: 'Merge Two Sorted Lists',
  difficulty: 'Easy',
  category: 'Linked List',
  description:
    'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.',
  examples: [
    {
      input: 'list1 = [1,2,4], list2 = [1,3,4]',
      output: '[1,1,2,3,4,4]',
    },
    {
      input: 'list1 = [], list2 = []',
      output: '[]',
    },
  ],
  explanation:
    'We use a dummy node to simplify the logic. We compare the values of the current nodes from both lists and attach the smaller one to our result list.',
  timeComplexity: 'O(m + n)',
  spaceComplexity: 'O(1)',
};

/**
 * Merge Two Sorted Lists Solution
 * @param list1 - First sorted linked list
 * @param list2 - Second sorted linked list
 * @returns Merged sorted linked list
 */
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Create a dummy node to serve as the head of our merged list
  const dummy = new ListNode(0);
  // Current pointer to build the merged list
  let current = dummy;

  // While both lists have nodes to compare
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      // If list1's value is smaller, add it to merged list
      current.next = list1;
      list1 = list1.next;
    } else {
      // If list2's value is smaller, add it to merged list
      current.next = list2;
      list2 = list2.next;
    }
    // Move the current pointer forward
    current = current.next;
  }

  // Attach remaining nodes from either list (if any)
  current.next = list1 || list2;

  // Return the merged list (excluding dummy node)
  return dummy.next;
}
