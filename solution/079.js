/*
79. Word Search
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  'use strict'
  const m = board.length
  if (!m) return false
  const n = board[0].length
  const visited = Array(m).fill().map(() => Array(n).fill(false))
  if (!word.length) return true
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (dfs(i, j, word, 0, board, visited, m, n)) return true
    }
  }
  return false
}

function dfs (x, y, w, pos, board, visited, m, n) {
  'use strict'
  if (pos === w.length) return true
  if (x < 0 || x >= m || y < 0 || y >= n) return false
  if (board[x][y] !== w[pos]) return false
  if (visited[x][y]) return false
  visited[x][y] = true
  ++pos
  let r = (
    dfs(x + 1, y, w, pos, board, visited, m, n) ||
    dfs(x - 1, y, w, pos, board, visited, m, n) ||
    dfs(x, y + 1, w, pos, board, visited, m, n) ||
    dfs(x, y - 1, w, pos, board, visited, m, n)
  )

  visited[x][y] = false
  return r
}

module.exports = exist
