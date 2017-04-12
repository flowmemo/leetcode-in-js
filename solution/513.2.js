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
  // bfs, right to left
  const q = [root]
  let ret
  while (q.length) {
    const cur = q.shift()
    ret = cur.val
    if (cur.right) q.push(cur.right)
    if (cur.left) q.push(cur.left)
  }
  return ret
}

module.exports = findBottomLeftValue
