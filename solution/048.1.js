/*
48. Rotate Image
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  'use strict'
  const n = matrix.length

  for (let i = 0; i < (n >> 1); ++i) {
    for (let j = 0; j < ((n + 1) >> 1); ++j) {
      let ci = i
      let cj = j
      for (let k = 0; k < 3; ++k) {
        let ni = n - cj - 1
        let nj = ci
        ;[matrix[ci][cj], matrix[ni][nj]] = [matrix[ni][nj], matrix[ci][cj]]
        ci = ni
        cj = nj
      }
    }
  }
}

module.exports = rotate
