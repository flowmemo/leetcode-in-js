/*
530. Minimum Absolute Difference in BST
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
Note: There are at least two nodes in this BST.
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
var getMinimumDifference = function (root) {
  'use strict'
  let pre = null
  let res = Infinity
  function inorder (root) {
    if (!root) return
    inorder(root.left)
    if (pre && root.val - pre.val < res) {
      res = root.val - pre.val
    }
    pre = root
    inorder(root.right)
  }

  inorder(root)
  return res
}

module.exports = getMinimumDifference
