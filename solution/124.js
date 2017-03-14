/*
124. Binary Tree Maximum Path Sum
Given a binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

For example:
Given the below binary tree,

       1
      / \
     2   3
Return 6.
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
var maxPathSum = function (root) {
  'use strict'
  return helper(root)[0]
}

function helper (root) {
  'use strict'
  if (!root) return [-Infinity, 0]
  let lsub = helper(root.left)
  let rsub = helper(root.right)

  let rcurrent = root.val + lsub[1] + rsub[1]
  let rsum = Math.max(rcurrent, lsub[0], rsub[0])
  let rpath = Math.max(0, root.val + lsub[1], root.val + rsub[1])
  return [rsum, rpath]
}

module.exports = maxPathSum
