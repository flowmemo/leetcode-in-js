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
  dfs(0, ret, root)
  return ret
}

function dfs (dep, ret, root) {
  'use strict'
  if (!root) return
  if (ret.length <= dep) ret.push(-Infinity)
  ret[dep] = Math.max(ret[dep], root.val)
  dfs(dep + 1, ret, root.left)
  dfs(dep + 1, ret, root.right)
}

module.exports = largestValues
