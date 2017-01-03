/*
100. Same Tree
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const stk1 = [p]
  const stk2 = [q]
  while (stk1.length) {
    const node1 = stk1.pop()
    const node2 = stk2.pop()
    if (node1) {
      if (node2 === null || node2.val !== node1.val) return false
      stk1.push(node1.left)
      stk1.push(node1.right)
      stk2.push(node2.left)
      stk2.push(node2.right)
    } else {
      if (node2 !== null) return false
    }
  }
  return true
}

module.exports = isSameTree
