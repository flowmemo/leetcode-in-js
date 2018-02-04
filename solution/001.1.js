/*
1. Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
UPDATE (2016/2/13):
The return format had been changed to zero-based indices. Please read the above updated description carefully.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  'use strict'
  const map = new Map()
  for (let i = 0; i < nums.length; ++i) {
    let cur = nums[i]
    if (map.has(target - cur)) {
      const res = [i, map.get(target - cur)]
      if (res[0] > res[1]) res.reverse()
      return res
    }
    map.set(nums[i], i)
  }
}

module.exports = twoSum
