/*
101. Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** iteratively
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const stk1 = [root]
  const stk2 = [root]
  while (stk1.length) {
    const node1 = stk1.pop()
    const node2 = stk2.pop()
    if (!isSame(node1, node2)) return false
    if (node1) {
      stk1.push(node1.left)
      stk1.push(node1.right)

      stk2.push(node2.right)
      stk2.push(node2.left)
    }
  }
  return true
}

function isSame (node1, node2) {
  return (node1 === node2) || (node1 && node2 && node1.val === node2.val)
}

module.exports = isSymmetric
