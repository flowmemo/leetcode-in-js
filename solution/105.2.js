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
const TreeNode = require('../helper/TreeNode.js')
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const len = preorder.length
  if (!len) return null
  let i = 0
  let j = 0
  let slen
  const stk = []
  const root = new TreeNode(preorder[i])
  let node = root
  while (node) {
    if (node.val !== inorder[j]) {
      stk.push(node)
      node.left = new TreeNode(preorder[++i])
      node = node.left
    } else {
      ++j
      slen = stk.length
      if (i + 1 < len && (!slen || stk[slen - 1].val !== inorder[j])) {
        node.right = new TreeNode(preorder[++i])
        node = node.right
      } else {
        node = (slen === 0 ? null : stk.pop())
      }
    }
  }
  return root
}

module.exports = buildTree
