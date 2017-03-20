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
  return helper(root, p, q).node
}

function helper (root, p, q) {
  'use strict'
  const cur = {node: null}
  if (!root) return cur
  if (root === p) cur.p = 1
  if (root === q) cur.q = 1

  if (root.p && root.q) {
    cur.node = root
    return cur
  }

  let l = helper(root.left, p, q)
  if (l.node) return { p: 1, q: 1, node: l.node }
  let r = helper(root.right, p, q)
  if (r.node) return { p: 1, q: 1, node: r.node }
  const hasP = cur.p || l.p || r.p
  const hasQ = cur.q || l.q || r.q
  if (hasP && hasQ) return { p: 1, q: 1, node: root }
  if (hasP) return { p: 1, q: 0, node: null }
  if (hasQ) return { p: 0, q: 1, node: null }
  return {p: 0, q: 0, node: null}
}

module.exports = lowestCommonAncestor
