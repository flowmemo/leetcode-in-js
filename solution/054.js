/*
54. Spiral Matrix
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  'use strict'
  const m = matrix.length
  if (!m) return []
  const n = matrix[0].length
  const res = Array(m * n)
  let ind = 0
  let level = 0
  let row = 0
  let col = 0

  while (ind < m * n) {
    while (col < n - level) {
      res[ind++] = matrix[row][col++]
    }

    if (ind === m * n) break
    --col
    ++row
    while (row < m - level) {
      res[ind++] = matrix[row++][col]
    }

    if (ind === m * n) break
    --row
    --col
    while (col >= level) {
      res[ind++] = matrix[row][col--]
    }
    --row
    ++col
    while (row > level) {
      res[ind++] = matrix[row--][col]
    }
    ++row
    ++col
    ++level
  }
  return res
}

module.exports = spiralOrder
