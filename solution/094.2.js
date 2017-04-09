/*
94. Binary Tree Inorder Traversal
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

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
var inorderTraversal = function (root) {
  const res = []
  if (!root) return
  const stk = []
  stk.push([root, 2])
  let len
  while ((len = stk.length)) {
    const pair = stk[len - 1]
    const node = pair[0]
    if (pair[1] === 2) {
      pair[1]--
      if (node.left) stk.push([node.left, 2])
    } else if (pair[1] === 1) {
      res.push(node.val)
      stk.pop()
      if (node.right) stk.push([node.right, 2])
    }
  }
  return res
}

module.exports = inorderTraversal
