/*
456. 132 Pattern
Given a sequence of negers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.

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
  // https://discuss.leetcode.com/post/148177
  const n = nums.length
  let s3 = -Infinity
  const stk = []
  let len
  for (let i = n - 1; i >= 0; i--) {
    const c = nums[i]
    if (c < s3) { return true } else {
      while ((len = stk.length) && c > stk[len - 1]) {
        s3 = stk[len - 1]
        stk.pop()
      }
    }
    stk.push(c)
  }
  return false
}

module.exports = find132pattern
