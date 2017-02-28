/*
103. Binary Tree Zigzag Level Order Traversal
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  const res = []
  let level = [root]
  let nextLevel = []
  let count = 0
  while (level.length) {
    const vals = []
    for (let node of level) {
      vals.push(node.val)
      if (node.left) nextLevel.push(node.left)
      if (node.right) nextLevel.push(node.right)
    }
    level = nextLevel
    nextLevel = []
    if (count % 2) vals.reverse()
    res.push(vals)
    count++
  }
  return res
}

module.exports = zigzagLevelOrder
