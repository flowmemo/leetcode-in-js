/*
221. Maximal Square
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.
Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  'use strict'
  const m = matrix.length
  if (!m) return 0
  const n = matrix[0].length
  let dp0 = Array(n).fill(0)
  let dp1 = Array(n).fill(0)
  let ret = 0
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] === '1') {
        if (i > 0 && j > 0) {
          dp1[j] = Math.min(dp1[j - 1], dp0[j], dp0[j - 1]) + 1
        } else dp1[j] = 1
        ret = Math.max(ret, dp1[j])
      } else dp1[j] = 0
    }
    const temp = dp0
    dp0 = dp1
    dp1 = temp
  }
  return ret * ret
}

module.exports = maximalSquare
