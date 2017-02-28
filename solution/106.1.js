/*
106. Construct Binary Tree from Inorder and Postorder Traversal
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const TreeNode = require('./TreeNode.js')
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  'use strict'
  const map = new Map()
  const len = postorder.length
  for (let i = 0; i < len; ++i) {
    map.set(inorder[i], i)
  }
  return helper(postorder, 0, len, inorder, 0, len, map)
}

function helper (postorder, s1, e1, inorder, s2, e2, map) {
  'use strict'
  if (s1 === e1) return null
  const root = new TreeNode(postorder[e1 - 1])
  if (s1 + 1 === e1) return root
  const ci = map.get(root.val)
  const leftcount = ci - s2
  root.left = helper(postorder, s1, s1 + leftcount, inorder, s2, ci, map)
  root.right = helper(postorder, s1 + leftcount, e1 - 1, inorder, ci + 1, e2, map)
  return root
}

module.exports = buildTree
