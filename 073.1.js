/*
73. Set Matrix Zeroes
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

Follow up:
Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const g = matrix
  const m = matrix.length
  const n = matrix[0].length
  let col0 = 1

  for (let i = 0; i < m; ++i) { if (!g[i][0]) col0 = 0 }
  for (let j = 0; j < n; ++j) {
    if (!g[i][j]) {
      g[i][0] = g[0][j] = 0
    }
  }

  for (let i = m - 1; i >= 1; --i) {
    for (let j = n - 1; j >= 0; --j) {
      if (!g[i][0] || !g[0][j]) g[i][j] = 0
    }
  }
  if (!col0) for (let j = 0; j < n; ++j) g[0][j] = 0
}
