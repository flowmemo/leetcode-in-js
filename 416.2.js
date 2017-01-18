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

/** DP, 0-1 knapsack
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  'use strict'
  const n = nums.length
  let sum = 0
  for (const c of nums) sum += c
  if (sum % 2) return false
  const target = sum / 2
  const dp = Array(n + 1).fill().map(() => Array(target + 1))
  for (let i = 0; i <= n; ++i) {
    for (let j = 0; j <= target; ++j) {
      if (i === 0 && j === 0) {
        dp[i][j] = true
      } else if (i && j) {
        dp[i][j] = dp[i][j] || dp[i - 1][j]
        if (j - nums[i - 1] >= 0) dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]]
      }
    }
    if (dp[i][target]) return true
  }
  return false
}

module.exports = canPartition
