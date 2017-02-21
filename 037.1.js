/*
37. Sudoku Solver
Write a program to solve a Sudoku puzzle by filling the empty cells.

Empty cells are indicated by the character '.'.

You may assume that there will be only one unique solution.
![](http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)
A sudoku puzzle...

![](http://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)
...and its solution numbers marked in red.
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  'use strict'
  const rows = Array(9).fill().map(() => Array(9))
  const cols = Array(9).fill().map(() => Array(9))
  const blocks = Array(9).fill().map(() => Array(9))

  const dot = []
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      const c = board[i][j]
      if (c === '.') {
        dot.push([i, j])
      } else {
        const n = +c - 1
        rows[i][n] = true
        cols[j][n] = true
        const bid = (i / 3 | 0) * 3 + (j / 3 | 0)
        blocks[bid][n] = true
      }
    }
  }
  dfs(0, board, dot, rows, cols, blocks)
}

function dfs (pos, board, dot, rows, cols, blocks) {
  'use strict'
  if (pos === dot.length) return true
  const [x, y] = dot[pos]
  for (let i = 0; i < 9; ++i) {
    const bid = (x / 3 | 0) * 3 + (y / 3 | 0)
    if (rows[x][i] || cols[y][i] || blocks[bid][i]) continue

    rows[x][i] = cols[y][i] = blocks[bid][i] = true
    board[x][y] = '' + (i + 1)
    if (dfs(pos + 1, board, dot, rows, cols, blocks)) return true
    rows[x][i] = cols[y][i] = blocks[bid][i] = false
    board[x][y] = '.'
  }
  return false
}

module.exports = solveSudoku
