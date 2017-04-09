/*
549. Binary Tree Longest Consecutive Sequence II
Given a binary tree, you need to find the length of Longest Consecutive Path in Binary Tree.

Especially, this path can be either increasing or decreasing. For example, [1,2,3,4] and [4,3,2,1] are both considered valid, but the path [1,2,4,3] is not valid. On the other hand, the path can be in the child-Parent-child order, where not necessarily be parent-child order.

Example 1:
Input:
        1
       / \
      2   3
Output: 2
Explanation: The longest consecutive path is [1, 2] or [2, 1].
Example 2:
Input:
        2
       / \
      1   3
Output: 3
Explanation: The longest consecutive path is [1, 2, 3] or [3, 2, 1].
Note: All the values of tree nodes are in the range of [-1e7, 1e7].
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
var longestConsecutive = function (root) {
  'use strict'
  return helper(root)[0]
}

function helper (root) {
  'use strict'
  if (!root) return [0, 0, 0, 0] // ret, longest inc, longest dec, val
  const l = helper(root.left)
  const r = helper(root.right)

  let minc = 1
  if (root.val === l[3] + 1) minc += l[1]
  if (root.val + 1 === r[3]) minc += r[2]

  let mdec = 1
  if (root.val + 1 === l[3]) mdec += l[2]
  if (root.val === r[3] + 1) mdec += r[1]

  let ret = Math.max(l[0], r[0], minc, mdec)

  let sinc = 1
  if (root.val === l[3] + 1) sinc = Math.max(sinc, 1 + l[1])
  if (root.val === r[3] + 1) sinc = Math.max(sinc, 1 + r[1])

  let sdec = 1
  if (root.val === l[3] - 1) sdec = Math.max(sdec, 1 + l[2])
  if (root.val === r[3] - 1) sdec = Math.max(sdec, 1 + r[2])

  return [ret, sinc, sdec, root.val]
};

module.exports = longestConsecutive
