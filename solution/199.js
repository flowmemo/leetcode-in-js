/*
199. Binary Tree Right Side View
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].

Credits:
Special thanks to @amrsaqr for adding this problem and creating all test cases.
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
var rightSideView = function (root) {
  'use strict'
  const ret = []
  if (!root) return ret
  let cl = []
  let nl = []
  cl.push(root)
  while (cl.length) {
    ret.push(cl[0].val)
    for (let node of cl) {
      if (node.right) nl.push(node.right)
      if (node.left) nl.push(node.left)
    }
    cl = nl
    nl = []
  }
  return ret
}

module.exports = rightSideView
