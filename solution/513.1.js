/*
513. Find Bottom Left Tree Value
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2:
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL.
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
var findBottomLeftValue = function (root) {
  'use strict'
  return helper(root)[1]
}

function helper (root) {
  'use strict'
  if (!root) return [-1, 0]
  if (!root.left && !root.right) return [1, root.val]

  let lret = helper(root.left)
  let rret = helper(root.right)
  if (lret[0] >= rret[0]) {
    return [lret[0] + 1, lret[1]]
  } else return [rret[0] + 1, rret[1]]
}

module.exports = findBottomLeftValue
