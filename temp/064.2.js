/*
64. Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/

/**
 * O(n) space
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let prerow = Array(n).fill(Number.MAX_SAFE_INTEGER)
  let currow = Array(n).fill(Number.MAX_SAFE_INTEGER)
  currow[0] = grid[0][0]
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i > 0) currow[j] = Math.min(currow[j], prerow[j] + grid[i][j])
      if (j > 0) currow[j] = Math.min(currow[j], currow[j - 1] + grid[i][j])
    }
    prerow = currow
    currow = Array(n).fill(Number.MAX_SAFE_INTEGER)
  }

  return prerow[n - 1]
}

module.exports = minPathSum
