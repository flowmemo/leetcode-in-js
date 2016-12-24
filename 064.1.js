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
  const m = grid.length
  const n = grid[0].length
  const res = Array(m).fill().map(() => Array(n).fill(Number.MAX_SAFE_INTEGER))
  res[0][0] = grid[0][0]
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i > 0) res[i][j] = Math.min(res[i][j], res[i - 1][j] + grid[i][j])
      if (j > 0) res[i][j] = Math.min(res[i][j], res[i][j - 1] + grid[i][j])
    }
  }
  return res[m - 1][n - 1]
}

module.exports = minPathSum
