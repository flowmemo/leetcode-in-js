/*
111. Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  let res = Infinity
  if (root.left) res = Math.min(minDepth(root.left) + 1, res)
  if (root.right) res = Math.min(minDepth(root.right) + 1, res)
  return res
}

module.exports = minDepth
