/*
130. Surrounded Regions
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  'use strict'
  const row = board.length
  if (!row) return
  const col = board[0].length
  if (!col) return
  function bfs (i, j) {
    if (board[i][j] !== 'O') return
    board[i][j] = 'o'
    const q = []
    q.push([i, j])
    while (q.length) {
      const [x, y] = q.shift()
      const dir = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
      ]
      for (const [nx, ny] of dir) {
        if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue
        if (board[nx][ny] === 'O') {
          board[nx][ny] = 'o'
          q.push([nx, ny])
        }
      }
    }
  }
  for (let i = 0; i < row; i++) {
    bfs(i, 0)
    bfs(i, col - 1)
  }
  for (let j = 0; j < col; j++) {
    bfs(0, j)
    bfs(row - 1, j)
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'o') board[i][j] = 'O'
      else if (board[i][j] === 'O') board[i][j] = 'X'
    }
  }
}

module.exports = solve
