/*
416. Partition Equal Subset Sum
Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:
Each of the array element will not exceed 100.
The array size will not exceed 200.
Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  'use strict'
  nums.sort((a, b) => b - a)
  const n = nums.length
  let sum = 0
  const rsum = Array(n + 1)
  rsum[n] = 0
  for (let i = n - 1; i >= 0; --i) {
    rsum[i] = rsum[i + 1] + nums[i]
  }
  for (const c of nums) sum += c
  if (sum % 2) return false
  const target = sum / 2
  for (let i = 0; i < nums.length; ++i) {
    if (rsum[i] === target) return true
    else if (rsum[i] < target) return false
    if (dfs(nums, i, target, rsum)) return true
  }
  return false
}

function dfs (nums, i, target, rsum) {
  'use strict'
  target -= nums[i]
  if (!target) return true
  for (let j = i + 1; j < nums.length; ++j) {
    if (target - nums[j] >= 0) {
      if (rsum[j] === target) return true
      else if (rsum[j] < target) return false
      if (dfs(nums, j, target, rsum)) return true
    }
  }
  return false
}

module.exports = canPartition
