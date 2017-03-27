/*
18. 4Sum
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  'use strict'
  nums.sort((a, b) => a - b)
  const n = nums.length
  const ret = []
  for (let i = 0; i < n; ++i) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      for (let j = i + 1; j < n; ++j) {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          const c = nums[i] + nums[j]
          const nc = target - c

          // two sum
          let k = j + 1
          let l = n - 1
          while (k < l) {
            if (k > j + 1 && nums[k] === nums[k - 1]) k++
            else if (l < n - 1 && nums[l] === nums[l + 1]) l--
            else if (nums[k] + nums[l] > nc) --l
            else if (nums[k] + nums[l] < nc) ++k
            else {
              ret.push([nums[i], nums[j], nums[k], nums[l]])
              ++k
              --l
            }
          }
        }
      }
    }
  }

  return ret
}

module.exports = fourSum
