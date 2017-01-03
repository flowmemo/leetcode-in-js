/*
100. Same Tree
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === q) return true
  if (p !== null && q != null && p.val == q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  return false
}

module.exports = isSameTree
