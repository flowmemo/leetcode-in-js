/*
236. Lowest Common Ancestor of a Binary Tree
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  'use strict'
  if (!root) return null
  if (!(hasNode(root, p) && hasNode(root, q))) return null
  return helper(root, p, q)
}

function helper (root, p, q) {
  'use strict'
  if (!root || root === p || root === q) return root
  let lp = hasNode(root.left, p)
  let lq = hasNode(root.left, q)
  if (lp !== lq) return root

  if (lp) {
    return helper(root.left, p, q)
  } else return helper(root.right, p, q)
}

function hasNode (root, node) {
  'use strict'
  if (root === node) return true
  if (!root) return false
  return hasNode(root.left, node) || hasNode(root.right, node)
}

module.exports = lowestCommonAncestor
