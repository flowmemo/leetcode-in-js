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
  const stk = []
  let cur = root
  while (cur || stk.length) {
    if (cur) {
      stk.push(cur)
      cur = cur.left
    } else {
      cur = stk.pop()
      res.push(cur.val)
      cur = cur.right
    }
  }
  return res
}

module.exports = inorderTraversal
