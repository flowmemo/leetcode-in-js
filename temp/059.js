/*
59. Spiral Matrix II
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array(n).fill().map(() => Array(n))
  let ind = 0
  let level = 0
  let row = 0
  let col = 0

  while (ind < n * n) {
    while (col < n - level) {
      matrix[row][col++] = 1 + ind++
    }

    if (ind === n * n) break
    --col
    ++row
    while (row < n - level) {
      matrix[row++][col] = 1 + ind++
    }

    if (ind === n * n) break
    --row
    --col
    while (col >= level) {
      matrix[row][col--] = 1 + ind++
    }
    --row
    ++col
    while (row > level) {
      matrix[row--][col] = 1 + ind++
    }
    ++row
    ++col
    ++level
  }
  return matrix
}

module.exports = generateMatrix
