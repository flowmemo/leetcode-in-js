/*
213. House Robber II
Note: This is an extension of House Robber.

After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  'use strict'
  const n = nums.length
  if (n === 1) return nums[0]
  return Math.max(rob0(nums, 0, n - 1), rob0(nums, 1, n))
}

module.exports = rob

function rob0 (nums, start, end) {
  // from 198.js
  'use strict'
  let p1 = 0
  let p2 = 0
  for (let i = start; i < end; ++i) {
    let cur = Math.max(p2, p1 + nums[i])
    ;[p1, p2] = [p2, cur]
  }
  return p2
}
