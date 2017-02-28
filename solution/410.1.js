/*
410. Split Array Largest Sum
Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays.

Note:
If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
Examples:

Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
*/

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  'use strict'
  const n = nums.length
  const dp = Array(n + 1)
  dp[0] = 0
  for (let i = 1; i <= n; ++i) {
    dp[i] = dp[i - 1] + nums[i - 1]
  }
  const sum = dp.slice()
  for (let i = 2; i <= m; ++i) {
    for (let j = n - (m - i); j >= i; --j) {
      let left = i - 1
      let right = j - 1
      let ma = Infinity
      while (left <= right) {
        const mid = (left + right) >> 1
        const lpart = dp[mid]
        const rest = sum[j] - sum[mid]
        if (lpart > rest) {
          ma = Math.min(ma, lpart)
          right = mid - 1
        } else if (lpart < rest) {
          ma = Math.min(ma, rest)
          left = mid + 1
        } else {
          ma = lpart
          break
        }
      }

      dp[j] = ma
    }
  }
  return dp[n]
}

module.exports = splitArray
