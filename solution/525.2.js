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
  const v = Array(n + 1).fill(0)
  for (let i = 0; i < n; ++i) {
    if (nums[i]) v[i + 1] = v[i] + 1
    else v[i + 1] = v[i] - 1
  }

  const ind = Array(n + 1)
  for (let i = 0; i < n + 1; ++i) ind[i] = i
  ind.sort((a, b) => v[a] - v[b] || a - b)
  let i = 0
  let j = 0
  let ret = 0
  while (j <= n) {
    while (j <= n && v[ind[j]] === v[ind[i]]) j++
    ret = Math.max(ret, ind[j - 1] - ind[i])
    i = j
  }
  return ret
}

module.exports = findMaxLength
