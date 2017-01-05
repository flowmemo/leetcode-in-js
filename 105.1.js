/*
105. Construct Binary Tree from Preorder and Inorder Traversal
Given preorder and inorder traversal of a tree, construct the binary tree.

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const map = new Map()
  const len = preorder.length
  for (let i = 0; i < len; ++i) {
    map.set(inorder[i], i)
  }
  return helper(preorder, 0, len, inorder, 0, len, map)
}

function helper (preorder, s1, e1, inorder, s2, e2, map) {
  if (s1 === e1) return null
  const root = new TreeNode(preorder[s1])
  if (s1 + 1 === e1) return root
  const ci = map.get(root.val)
  const leftcount = ci - s2
  root.left = helper(preorder, s1 + 1, s1 + 1 + leftcount, inorder, s2, ci, map)
  root.right = helper(preorder, s1 + 1 + leftcount, e1, inorder, ci + 1, e2, map)
  return root
}

module.exports = buildTree
