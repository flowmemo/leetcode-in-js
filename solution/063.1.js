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
var uniquePathsWithObstacles = function (obstacleGrid) {
  const grid = obstacleGrid
  const m = grid.length
  const n = grid[0].length
  const ret = Array(m).fill().map(() => Array(n).fill(0))
  ret[0][0] = 1 - grid[0][0]
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!grid[i][j]) {
        if (i > 0) ret[i][j] += ret[i - 1][j]
        if (j > 0) ret[i][j] += ret[i][j - 1]
      }
    }
  }
  return ret[m - 1][n - 1]
}

module.exports = uniquePathsWithObstacles
