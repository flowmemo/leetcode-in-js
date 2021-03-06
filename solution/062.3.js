/*
62. Unique Paths
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  'use strict'
  const dp = Array(n).fill(0)
  dp[0] = 1
  for (let i = 0; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[n - 1]
}

module.exports = uniquePaths
