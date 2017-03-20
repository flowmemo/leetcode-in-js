/*
235. Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
*/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null
  const fret = { ret: undefined }

  const stk = [[root, { ret: undefined }, fret]]
  let len
  while ((len = stk.length)) {
    const frame = stk[len - 1]
    const node = frame[0]
    const fret = frame[2]
    if (frame[1].ret !== undefined) {
      fret.ret = frame[1].ret
      stk.pop()
    } else {
      if (node === p || node === q) {
        fret.ret = node
        stk.pop()
      } else if ((node.val < p.val) ^ (node.val < q.val)) {
        fret.ret = node
        stk.pop()
      } else if (node.val > p.val) {
        stk.push([node.left, {ret: undefined}, frame[1]])
      } else {
        stk.push([node.right, {ret: undefined}, frame[1]])
      }
    }
  }
  return fret.ret
}
module.exports = lowestCommonAncestor
