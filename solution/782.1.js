/*
782. Transform to Chessboard
An N x N board contains only 0s and 1s. In each move, you can swap any 2 rows with each other, or any 2 columns with each other.

What is the minimum number of moves to transform the board into a "chessboard" - a board where no 0s and no 1s are 4-directionally adjacent? If the task is impossible, return -1.

Examples:
Input: board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
Output: 2
Explanation:
One potential sequence of moves is shown below, from left to right:

0110     1010     1010
0110 --> 1010 --> 0101
1001     0101     1010
1001     0101     0101

The first move swaps the first and second column.
The second move swaps the second and third row.

Input: board = [[0, 1], [1, 0]]
Output: 0
Explanation:
Also note that the board with 0 in the top left corner,
01
10

is also a valid chessboard.

Input: board = [[1, 0], [1, 0]]
Output: -1
Explanation:
No matter what sequence of moves you make, you cannot end with a valid chessboard.

Note:

1. board will have the same number of rows and columns, a number in the range [2, 30].
2. board[i][j] will be only 0s or 1s.
*/
/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function (board) {
  'use strict'
  const { abs, min } = Math
  const n = board.length
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] ^ board[i][0] ^ board[0][j] ^ board[0][0]) return -1
    }
  }

  const col = Array(n)
  const row = Array(n)
  for (let i = 0; i < n; ++i) col[i] = board[i][0] & 1
  for (let i = 0; i < n; ++i) row[i] = board[0][i] & 1

  function sol (v) {
    {
      let ct1 = 0
      for (const c of v) ct1 += c
      if (abs(v.length - ct1 - ct1) > 1) return Infinity
    }
    const tar = Array(n).fill().map((a, i) => i % 2)
    let ret = Infinity
    {
      let ct = 0
      for (let i = 0; i < n; ++i) {
        ct += tar[i] ^ v[i]
      }
      if (ct % 2 === 0) {
        ret = min(ret, ct / 2)
      }
    }
    for (let i = 0; i < n; ++i) tar[i] ^= 1
    {
      let ct = 0
      for (let i = 0; i < n; ++i) {
        ct += tar[i] ^ v[i]
      }
      if (ct % 2 === 0) {
        ret = min(ret, ct / 2)
      }
    }

    return ret
  }

  let ret = sol(col) + sol(row)
  if (ret === Infinity) return -1
  return ret
}

module.exports = movesToChessboard
