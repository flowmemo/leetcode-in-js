/*
110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
var isBalanced = function (root) {
  return getDepth(root) >= 0
}

function getDepth (root) {
  // return root's depth if root is balanced, else return -1
  if (!root) return 0
  const ldep = getDepth(root.left)
  if (ldep < 0) return -1
  const rdep = getDepth(root.right)
  if (rdep < 0) return -1
  if (Math.abs(ldep - rdep) > 1) return -1
  return Math.max(ldep, rdep) + 1
}

module.exports = isBalanced
