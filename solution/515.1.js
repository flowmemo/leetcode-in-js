/*
515. Find Largest Value in Each Tree Row
You need to find the largest value in each row of a binary tree.

Example:
Input:

          1
         / \
        3   2
       / \   \
      5   3   9

Output: [1, 3, 9]
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
 * @return {number[]}
 */
var largestValues = function (root) {
  'use strict'
  const ret = []
  if (!root) return ret
  let clevel = [root]

  while (clevel.length) {
    let nlevel = []
    let m = -Infinity
    for (let node of clevel) {
      m = Math.max(m, node.val)
      if (node.left) nlevel.push(node.left)
      if (node.right) nlevel.push(node.right)
    }
    ret.push(m)
    clevel = nlevel
  }
  return ret
}

module.exports = largestValues
