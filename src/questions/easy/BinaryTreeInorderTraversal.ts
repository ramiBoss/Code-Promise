import type { QuestionMetadata } from '../../types';

// Definition for a binary tree node
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const binaryTreeInorderTraversalMetadata: QuestionMetadata = {
  id: '5',
  title: 'Binary Tree Inorder Traversal',
  difficulty: 'Easy',
  category: 'Tree',
  description:
    "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
  examples: [
    {
      input: 'root = [1,null,2,3]',
      output: '[1,3,2]',
    },
    {
      input: 'root = []',
      output: '[]',
    },
  ],
  explanation:
    'Inorder traversal visits nodes in the order: left subtree, root, right subtree. We use recursion to traverse the tree.',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(h) where h is the height of the tree',
};

/**
 * Binary Tree Inorder Traversal Solution
 * @param root - Root of the binary tree
 * @returns Array of values in inorder traversal
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  // Array to store the inorder traversal result
  const result: number[] = [];

  // Helper function to perform recursive traversal
  function traverse(node: TreeNode | null) {
    if (node) {
      // First traverse left subtree
      traverse(node.left);
      // Then visit current node
      result.push(node.val);
      // Finally traverse right subtree
      traverse(node.right);
    }
  }

  // Start traversal from root
  traverse(root);
  return result;
}
