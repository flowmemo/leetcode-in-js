/*
51. N-Queens
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

![](http://www.leetcode.com/wp-content/uploads/2012/03/8-queens.png)

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

For example,
There exist two distinct solutions to the 4-queens puzzle:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  'use strict'
  const cols = Array(n)
  const diags = Array(2 * n - 1)
  const rdiags = Array(2 * n - 1)
  const line = Array(n)
  line.fill('.')
  const grid = Array(n).fill(line).map(() => line.slice())
  const ret = []
  dfs(0, cols, diags, rdiags, grid, ret, n)
  return ret
}

function dfs (row, cols, diags, rdiags, grid, ret, n) {
  'use strict'
  if (row === n) {
    ret.push(grid.map(line => line.join('')))
    return
  }
  for (let i = 0; i < n; ++i) {
    if (!cols[i] && !diags[row - i + n - 1] && !rdiags[row + i]) {
      cols[i] = diags[row - i + n - 1] = rdiags[row + i] = true
      grid[row][i] = 'Q'
      dfs(row + 1, cols, diags, rdiags, grid, ret, n)
      grid[row][i] = '.'
      cols[i] = diags[row - i + n - 1] = rdiags[row + i] = false
    }
  }
}

module.exports = solveNQueens
