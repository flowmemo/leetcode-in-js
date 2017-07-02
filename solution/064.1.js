/*
64. Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/

/** O(m * n) space
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  'use strict'
  const m = grid.length
  const n = grid[0].length
  const ret = Array(m).fill().map(() => Array(n).fill(Infinity))
  ret[0][0] = grid[0][0]
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i > 0) ret[i][j] = Math.min(ret[i][j], ret[i - 1][j] + grid[i][j])
      if (j > 0) ret[i][j] = Math.min(ret[i][j], ret[i][j - 1] + grid[i][j])
    }
  }
  return ret[m - 1][n - 1]
}

module.exports = minPathSum
