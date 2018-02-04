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
  const n = nums.length
  const v = Array(n)
  for (let i = 0; i < n; ++i) v[i] = i
  v.sort((a, b) => nums[a] - nums[b])
  let i = 0
  let j = n - 1
  while (i < j) {
    let r = nums[v[i]] + nums[v[j]]
    if (r === target) {
      return [v[i], v[j]]
    } else if (r > target) {
      --j
    } else ++i
  }
  return [0, 0]
}

module.exports = twoSum
