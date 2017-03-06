/*
226. Invert Binary Tree
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  'use strict'
  if (!root) return root
  const stk = [root]
  while (stk.length) {
    let cur = stk.pop()
    ;[cur.left, cur.right] = [cur.right, cur.left]
    if (cur.left) stk.push(cur.left)
    if (cur.right) stk.push(cur.right)
  }
  return root
}

module.exports = invertTree
