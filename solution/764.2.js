/*
764. Largest Plus Sign
 In a 2D grid from (0, 0) to (N-1, N-1), every cell contains a 1, except those cells in the given list mines which are 0. What is the largest axis-aligned plus sign of 1s contained in the grid? Return the order of the plus sign. If there is none, return 0.

An "axis-aligned plus sign of 1s of order k" has some center grid[x][y] = 1 along with 4 arms of length k-1 going up, down, left, and right, and made of 1s. This is demonstrated in the diagrams below. Note that there could be 0s or 1s beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1s.

Examples of Axis-Aligned Plus Signs of Order k:

Order 1:
000
010
000

Order 2:
00000
00100
01110
00100
00000

Order 3:
0000000
0001000
0001000
0111110
0001000
0001000
0000000

Example 1:

Input: N = 5, mines = [[4, 2]]
Output: 2
Explanation:
11111
11111
11111
11111
11011
In the above grid, the largest plus sign can only be order 2.  One of them is marked in bold.

Example 2:

Input: N = 2, mines = []
Output: 1
Explanation:
There is no plus sign of order 2, but there is of order 1.

Example 3:

Input: N = 1, mines = [[0, 0]]
Output: 0
Explanation:
There is no plus sign, so return 0.

Note:

1. N will be an integer in the range [1, 500].
2. mines will have length at most 5000.
3. mines[i] will be length 2 and consist of integers in the range [0, N-1].
(Additionally, programs submitted in C, C++, or C# will be judged with a slightly smaller time limit.)
*/
const { lowerBound } = require('../helper/algorithm')
/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  'use strict'
  const { max, min } = Math
  const rows = Array(N).fill().map(() => [-1, N])
  const cols = Array(N).fill().map(() => [-1, N])
  for (const [x, y] of mines) {
    rows[x].push(y)
    cols[y].push(x)
  }

  for (const line of rows) line.sort((a, b) => a - b)
  for (const line of cols) line.sort((a, b) => a - b)
  let ret = 0

  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      const row = rows[i]
      const col = cols[j]
      let cur = min(i + 1, N - i, j + 1, N - j)
      let i1 = lowerBound(row, 0, row.length, j)
      cur = min(cur, row[i1] - j, j - row[i1 - 1])

      let j1 = lowerBound(col, 0, col.length, i)
      cur = min(cur, col[j1] - i, i - col[j1 - 1])

      ret = max(ret, cur)
    }
  }
  return ret
}

module.exports = orderOfLargestPlusSign
