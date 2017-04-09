/*
106. Construct Binary Tree from Inorder and Postorder Traversal
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.
*/

const reverse = require('../helper/algorithm.js').reverse
const invertBinaryTree = require('./226.1.js')
const buildTreeFromPreAndInorder = require('./105.1.js')

var buildTree = function (inorder, postorder) {
  'use strict'
  const len = inorder.length
  reverse(postorder, 0, len)
  reverse(inorder, 0, len)
  const root = buildTreeFromPreAndInorder(postorder, inorder)
  return invertBinaryTree(root)
}

module.exports = buildTree
