/*
525. Contiguous Array
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  'use strict'
  const n = nums.length
  const m = Array(2 * n + 1).fill(-1)
  const v = Array(n + 1).fill(0)
  for (let i = 0; i < n; ++i) {
    if (nums[i]) v[i + 1] = v[i] + 1
    else v[i + 1] = v[i] - 1
  }

  let ret = 0
  for (let i = 0; i <= n; ++i) {
    const mi = v[i] + n
    if (m[mi] !== -1) {
      ret = Math.max(i - m[mi], ret)
    } else {
      m[mi] = i
    }
  }

  return ret
}

module.exports = findMaxLength
