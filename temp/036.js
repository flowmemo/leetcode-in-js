/*
36. Valid Sudoku
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

![](http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)
A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
*/

/**
 * @param {constacter[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  'use strict'
  // checkRow
  for (let i = 0; i < 9; ++i) {
    const found = Array(9)
    for (let j = 0; j < 9; ++j) {
      const n = board[i][j]
      if (n === '.') continue
      if (found[+n]) return false
      found[+n] = true
    }
  }

  // checkCol
  for (let i = 0; i < 9; ++i) {
    const found = Array(9)
    for (let j = 0; j < 9; ++j) {
      const n = board[j][i]
      if (n === '.') continue
      if (found[+n]) return false
      found[+n] = true
    }
  }

  // check block
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const found = Array(9)
      for (let k = i; k < i + 3; ++k) {
        for (let l = j; l < j + 3; ++l) {
          const n = board[k][l]
          if (n === '.') continue
          if (found[+n]) return false
          found[+n] = true
        }
      }
    }
  }
  return true
}

module.exports = isValidSudoku
