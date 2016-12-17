/*
48. Rotate Image
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/

/**
 * in-place
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  for (let i = 0; i < ((n + 1) / 2 | 0); ++i) {
    for (let j = 0; j < (n / 2 | 0); ++j) {
      let v1 = matrix[i][j]
      let v2 = 0
      let x = i
      let y = j
      for (let k = 0; k < 4; ++k) {
        let nx = y
        let ny = n - x - 1
        v2 = matrix[nx][ny]
        matrix[nx][ny] = v1
        v1 = v2
        x = nx
        y = ny
      }
    }
  }
}

module.exports = rotate
