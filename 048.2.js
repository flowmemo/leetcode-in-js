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
  const n = matrix.length
  for (let i = 0; i < n; ++i) {
    reverse(matrix[i], 0, n)
  }

  for (let i = 0; i < n - 1; ++i) {
    for (let j = 0; j < n - i - 1; ++j) {
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[n - 1 - j][n - 1 - i]
      matrix[n - 1 - j][n - 1 - i] = tmp
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
