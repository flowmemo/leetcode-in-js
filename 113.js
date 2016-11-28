/*
113. Path Sum II
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const res = []
  const path = []
  dfs(root, sum, path, res)
  return res
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @param {number[]} path
 * @param {number[][]} res
 */
function dfs (root, sum, path, res) {
  if (!root) return
  sum -= root.val
  path.push(root.val)
  if (!root.left && !root.right) {
    if (!sum) res.push(path.slice())
    path.pop()
    return
  }
  dfs(root.left, sum, path, res)
  dfs(root.right, sum, path, res)
  path.pop()
}
