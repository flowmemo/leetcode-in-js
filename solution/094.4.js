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
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = []
  let cur = root
  let prev = null
  while (cur) {
    if (!cur.left) {
      res.push(cur.val)
      cur = cur.right
    } else {
      prev = cur.left
      while (prev.right && prev.right != cur) prev = prev.right

      if (prev.right == null) {
        prev.right = cur
        cur = cur.left
      } else {
        res.push(cur.val)
        prev.right = null
        cur = cur.right
      }
    }
  }
  return res
}

module.exports = inorderTraversal
