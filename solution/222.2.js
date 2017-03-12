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
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  'use strict'
  return helper(root, null, null)
}

function helper (root, lh, rh) {
  'use strict'
  if (lh === null) {
    lh = 0
    let node = root
    while (node) {
      node = node.left
      lh++
    }
  }

  if (rh === null) {
    rh = 0
    let node = root
    while (node) {
      node = node.right
      rh++
    }
  }

  if (lh === rh) return (1 << lh) - 1
  else return 1 + helper(root.left, lh - 1, null) + helper(root.right, null, rh - 1)
}

module.exports = countNodes
