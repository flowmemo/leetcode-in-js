/*
456. 132 Pattern
Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.

Note: n will be less than 15,000.

Example 1:
Input: [1, 2, 3, 4]

Output: False

Explanation: There is no 132 pattern in the sequence.
Example 2:
Input: [3, 1, 4, 2]

Output: True

Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:
Input: [-1, 3, 2, 0]

Output: True

Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  'use strict'
  // https://discuss.leetcode.com/post/148864
  const n = nums.length
  if (n < 3) return false
  const minBefore = Array(n)
  minBefore[0] = nums[0]
  for (let i = 1; i < n; ++i) {
    minBefore[i] = Math.min(minBefore[i - 1], nums[i])
  }
  const stk = []
  let len
  for (let i = n - 1; i >= 1; --i) {
    const c = nums[i]
    if (c > minBefore[i - 1]) {
      while ((len = stk.length) && stk[len - 1] <= minBefore[i - 1]) stk.pop()
      if ((len = stk.length) && c > stk[len - 1]) return true
      stk.push(c)
    }
  }

  return false
}

module.exports = find132pattern
