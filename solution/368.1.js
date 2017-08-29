/*
368. Largest Divisible Subset
Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies: Si % Sj = 0 or Sj % Si = 0.

If there are multiple solutions, return any subset is fine.

Example 1:

nums: [1,2,3]

Result: [1,2] (of course, [1,3] will also be ok)
Example 2:

nums: [1,2,4,8]

Result: [1,2,4,8]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  'use strict'
  const n = nums.length
  const dp = Array(n).fill(1)
  const pre = Array(n).fill(-1)
  nums.sort((a, b) => a - b)

  for (let i = 1; i < n; ++i) {
    const c = nums[i]
    for (let j = 0; j < i; ++j) {
      if ((c % nums[j]) === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1
        pre[i] = j
      }
    }
  }
  let ind = -1
  for (let i = 0; i < n; ++i) {
    if (ind === -1 || dp[i] > dp[ind]) ind = i
  }
  const ret = []
  while (ind !== -1) {
    ret.push(nums[ind])
    ind = pre[ind]
  }
  return ret
}

module.exports = largestDivisibleSubset
