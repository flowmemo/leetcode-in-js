/*
104. Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    const stk = [[root, 1]]
    let res = 0
    while(stk.length) {
      const [node, dep] = stk.pop()
      res = Math.max(res, dep)
      if (node.left) stk.push([node.left, dep + 1])
      if (node.right) stk.push([node.right, dep + 1])
    }
    return res
};

module.exports = maxDepth