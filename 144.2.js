/*
144. Binary Tree Preorder Traversal
Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

Note: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** iterative
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = []
  if (!root) return res
  const stk = [[root, 2]]
  let len
  while ((len = stk.length)) {
    const p = stk[len - 1]
    const node = p[0]
    if (p[1] === 2) {
      res.push(node.val)
      if (node.left) stk.push([node.left, 2])
      p[1]--
    } else {
      stk.pop()
      if (node.right) stk.push([node.right, 2])
    }
  }
  return res
}

module.exports = preorderTraversal
