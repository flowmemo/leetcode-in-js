/*
562. Longest Line of Consecutive One in Matrix
Given a 01 matrix M, find the longest line of consecutive one in the matrix. The line could be horizontal, vertical, diagonal or anti-diagonal.

Example:
Input:
[[0,1,1,0],
 [0,1,1,0],
 [0,0,0,1]]
Output: 3
Hint: The number of elements in the given matrix will not exceed 10,000.
*/

/**
 * @param {number[][]} M
 * @return {number}
 */
var longestLine = function (M) {
  'use strict'
  const m = M.length
  if (!m) return 0
  const n = M[0].length
  if (!n) return 0
  let dp = Array(m).fill().map(() => Array(n).fill(0))
  let ret = 0
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (M[i][j]) {
        dp[i][j] = 1
        if (j > 0) dp[i][j] = Math.max(dp[i][j], dp[i][j - 1] + 1)
      }

      ret = Math.max(ret, dp[i][j])
    }
  }
  dp = Array(m).fill().map(() => Array(n).fill(0))

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (M[i][j]) {
        dp[i][j] = 1
        if (i > 0) dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + 1)
      }

      ret = Math.max(ret, dp[i][j])
    }
  }
  dp = Array(m).fill().map(() => Array(n).fill(0))

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (M[i][j]) {
        dp[i][j] = 1
        if (i > 0 && j > 0) dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1)
      }

      ret = Math.max(ret, dp[i][j])
    }
  }
  dp = Array(m).fill().map(() => Array(n).fill(0))

  for (let i = 0; i < m; ++i) {
    for (let j = n - 1; j >= 0; --j) {
      if (M[i][j]) {
        dp[i][j] = 1
        if (i > 0 && j < n - 1) { dp[i][j] = Math.max(dp[i][j], dp[i - 1][j + 1] + 1) }
      }

      ret = Math.max(ret, dp[i][j])
    }
  }
  return ret
}

module.exports = longestLine
