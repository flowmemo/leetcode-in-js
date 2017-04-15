/*
498. Diagonal Traverse
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output:  [1,2,4,7,5,3,6,8,9]
Explanation:
![](https://leetcode.com/static/images/problemset/diagonal_traverse.png)
Note:
The total number of elements of the given matrix will not exceed 10,000.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (w) {
  'use strict'
  const m = w.length
  if (!m) return []
  const n = w[0].length

  const ret = Array(m * n)
  let p = 0

  for (let k = 0; k < m + n; ++k) {
    if (k % 2) {
      let j = Math.min(k, n - 1)
      let i = k - j
      while (j >= 0 && i < m) {
        ret[p++] = w[i++][j--]
      }
    } else {
      let i = Math.min(k, m - 1)
      let j = k - i
      while (i >= 0 && j < n) {
        ret[p++] = w[i--][j++]
      }
    }
  }

  return ret
}

module.exports = findDiagonalOrder
