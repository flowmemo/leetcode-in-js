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
  let ret = 0

  // horizontal
  for (let i = 0; i < m; ++i) {
    let pl = 0
    for (let j = 0; j < n; ++j) {
      if (M[i][j]) {
        pl++
        ret = Math.max(ret, pl)
      } else pl = 0
    }
  }
  // vertical
  for (let j = 0; j < n; ++j) {
    let pl = 0
    for (let i = 0; i < m; ++i) {
      if (M[i][j]) {
        pl++
        ret = Math.max(ret, pl)
      } else pl = 0
    }
  }

  // diag
  for (let k = -(n - 1); k <= m - 1; ++k) {
    let i = Math.max(k, 0)
    let j = i - k
    let pl = 0
    while (i < m && j < n) {
      if (M[i][j]) {
        pl++
        ret = Math.max(ret, pl)
      } else pl = 0
      i++
      j++
    }
  }
  // anti-diag

  for (let k = 0; k <= m + n - 1; ++k) {
    let j = Math.min(n - 1, k)
    let i = k - j
    let pl = 0
    while (i < m && j >= 0) {
      if (M[i][j]) {
        pl++
        ret = Math.max(ret, pl)
      } else pl = 0
      i++
      j--
    }
  }

  return ret
}

module.exports = longestLine
