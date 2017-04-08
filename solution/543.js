/*
543. Diameter of Binary Tree
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
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
var diameterOfBinaryTree = function (root) {
  'use strict'
  let ret = 0
  function helper(root) {
    if (!root) return [0, 0] // depth, diameter
    let lret = helper(root.left)
    let rret = helper(root.right)
    ret = Math.max(lret[1], rret[1], lret[0] + rret[0])
    return [1 + Math.max(lret[0], rret[0]), ret]
  }

  return helper(root)[1]
}

module.exports = diameterOfBinaryTree

