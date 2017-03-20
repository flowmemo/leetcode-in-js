/*
209. Minimum Size Subarray Sum
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  'use strict'
  let i = 0
  let j = 1
  let sum = 0
  let r = nums.length + 1
  while (j <= nums.length) {
    sum += nums[j - 1]
    if (sum < s) {
      j++
      continue
    }
    while (i < j && sum - nums[i] >= s) {
      sum -= nums[i]
      i++
    }
    r = Math.min(r, j - i)
    j++
  }
  if (r === nums.length + 1) return 0
  return r
}

module.exports = minSubArrayLen
