/*
85. Maximal Rectangle
Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 6.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  // https://discuss.leetcode.com/post/8335
  const row = matrix.length
  if (!row) return 0
  const col = matrix[0].length
  if (!col) return 0
  function newArray (row, col) {
    const a = Array(row)
    for (let i = 0; i < row; i++) {
      a[i] = Array(col)
    }
    return a
  }
  const left = newArray(row, col)
  const right = newArray(row, col)
  const height = newArray(row, col)

  // convert matrix to number matrix
  for (let i = 0; i < row; i++) {
    matrix[i] = Array.prototype.map.call(matrix[i], ch => +ch)
  }

  // build left[][]
  for (let i = 0; i < row; i++) {
    let curleft = 0
    for (let j = 0; j < col; j++) {
      if (matrix[i][j]) {
        left[i][j] = Math.max(i && left[i - 1][j] || 0, curleft)
      } else {
        left[i][j] = 0
        curleft = j + 1
      }
    }
  }

  // build right[][]
  for (let i = 0; i < row; i++) {
    let curright = col
    for (let j = col - 1; j >= 0; j--) {
      if (matrix[i][j]) {
        right[i][j] = Math.min(i && right[i - 1][j] || col, curright)
      } else {
        right[i][j] = col
        curright = j
      }
    }
  }

  // build height[][]
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j]) {
        height[i][j] = i && matrix[i - 1][j] ? height[i - 1][j] + 1 : 1
      } else {
        height[i][j] = 0
      }
    }
  }

  // calculate
  let max = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let cur = (right[i][j] - left[i][j]) * height[i][j]
      if (cur > max) max = cur
    }
  }

  return max
}

let tc = [
  ['10100', '10111', '11111', '10010'],
  ['0001000', '0011100', '0111110']
]

let ans = [
  6, 6
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = maximalRectangle(tc[i])
  console.log(a === r, a, r)
}
