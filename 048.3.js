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
  reverse(matrix, 0, n)

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    }
  }
}

function reverse (arr, first, last) {
  let right = last - 1
  while (first < right) {
    const tmp = arr[first]
    arr[first] = arr[right]
    arr[right] = tmp
    ++first
    --right
  }
}

module.exports = rotate
