/*
98. Validate Binary Search Tree
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:
    2
   / \
  1   3
Binary tree [2,1,3], return true.
Example 2:
    1
   / \
  2   3
Binary tree [1,2,3], return false.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // it is not a good idea to use Infinity or -Infinity
  // https://discuss.leetcode.com/post/6344
  return valid(root, Infinity, -Infinity)
}

function valid (root, upper, lower) {
  if (!root) return true
  if (root.val <= lower || root.val >= upper) return false
  return valid(root.left, root.val, lower) && valid(root.right, upper, root.val)
}

module.exports = isValidBST
