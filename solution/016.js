/*
16. 3Sum Closest
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  'use strict'
  const n = nums.length
  let res = nums[0] + nums[1] + nums[2]
  nums.sort((a, b) => a - b)
  for (let i = 0; i < n - 2; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1
    let k = n - 1
    const rest = target - nums[i]
    while (j < k) {
      if (j > i + 1 && nums[j] === nums[j - 1]) ++j
      else if (k < n - 1 && nums[k] === nums[k + 1]) --k
      else {
        const sum2 = nums[j] + nums[k]
        if (Math.abs(rest - sum2) < Math.abs(res - target)) res = nums[i] + sum2
        if (sum2 < rest) ++j
        else if (sum2 > rest) --k
        else return target
      }
    }
  }
  return res
}

module.exports = threeSumClosest
