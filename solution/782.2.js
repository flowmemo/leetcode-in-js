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
  const n = board.length
  const col = Array(n)
  const row = Array(n)
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === 0) continue
      col[i] |= 1 << j
      row[j] |= 1 << i
    }
  }

  let ret = sol(col) + sol(row)
  if (ret === Infinity) return -1
  return ret
}

function sol (v) {
  'use strict'
  const n = v.length
  const min = Math.min
  const mt = Object.create(null)
  for (const c of v) mt[c] = (mt[c] | 0) + 1
  if (Object.keys(mt).length !== 2) return Infinity
  let [less, more] = Object.keys(mt).map(c => +c)
  if (less & more) return Infinity
  if (mt[less] > mt[more]) {
    [less, more] = [more, less]
  }
  if (mt[more] - mt[less] > 1) return Infinity
  const tar = Array(n).fill().map((a, i) => i % 2)
  let ret = Infinity
  {
    let ct = 0
    for (let i = 0; i < n; ++i) {
      ct += v[i] & 1 ^ tar[i]
    }

    if (ct % 2 === 0) {
      ret = min(ret, ct / 2)
    }
  }
  {
    for (let i = 0; i < n; ++i) tar[i] ^= 1
    let ct = 0
    for (let i = 0; i < n; ++i) {
      ct += v[i] & 1 ^ tar[i]
    }

    if (ct % 2 === 0) {
      ret = min(ret, ct / 2)
    }
  }
  return ret
}
module.exports = movesToChessboard
