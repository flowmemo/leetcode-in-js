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
  let node = root
  const stk = []
  while (node) {
    res.push(node.val)
    if (node.right) stk.push(node.right)
    if (node.left) node = node.left
    else node = stk.pop()
  }
  return res
}

module.exports = preorderTraversal
