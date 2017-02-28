/*
111. Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** BFS
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  const q = [[root, 1]]
  while (q.length) {
    const [node, curdep] = q.shift()
    if (!node.left && !node.right) return curdep
    if (node.left) q.push([node.left, curdep + 1])
    if (node.right) q.push([node.right, curdep + 1])
  }
}

module.exports = minDepth
