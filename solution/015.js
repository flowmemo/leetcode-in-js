/*
15. 3Sum
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  'use strict'
  const n = nums.length
  const res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < n - 2; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let j = i + 1
    let k = n - 1
    const target = -nums[i]
    while (j < k) {
      if (j > i + 1 && nums[j] === nums[j - 1]) ++j
      else if (k < n - 1 && nums[k] === nums[k + 1]) --k
      else
      if (nums[j] + nums[k] < target) ++j
      else if (nums[j] + nums[k] > target) --k
      else {
        res.push([-target, nums[j], nums[k]])
        ++j
        --k
      }
    }
  }
  return res
}

module.exports = threeSum
