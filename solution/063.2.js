/*
63. Unique Paths II
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (g) {
  'use strict'
  const m = g.length
  if (!m) return 0
  const n = g[0].length
  if (!n) return 0
  const dp = Array(n).fill(0)
  if (g[0][0] === 0) dp[0] = 1
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (g[i][j]) dp[j] = 0
      else if (j > 0) dp[j] += dp[j - 1]
    }
  }
  return dp[n - 1]
}

module.exports = uniquePathsWithObstacles
