/*
198. House Robber
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  'use strict'
  let p1 = 0
  let p2 = 0
  for (let i = 0; i < nums.length; ++i) {
    let cur = Math.max(p2, p1 + nums[i])
    ;[p1, p2] = [p2, cur]
  }
  return p2
}

module.exports = rob
