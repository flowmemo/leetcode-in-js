/*
222. Count Complete Tree Nodes
Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
*/
/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
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
var countNodes = function (root) {
  'use strict'
  if (!root) return 0
  let lh = 0
  let node = root
  while (node) {
    node = node.left
    lh++
  }

  node = root
  let rh = 0
  while (node) {
    node = node.right
    rh++
  }
  if (lh === rh) return (1 << lh) - 1
  // notice that only one of the subtrees is not full binary tree
  else return 1 + countNodes(root.left) + countNodes(root.right)
}

module.exports = countNodes
