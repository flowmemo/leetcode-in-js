/*
200. Number of Islands
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  'use strict'
  function cantor (i, j) {
    return (i * n) + j
  }
  function decantor (k) {
    return [k / n | 0, k % n]
  }
  function find (i) {
    if (pre[i] !== i) pre[i] = find(pre[i])
    return pre[i]
  }

  function union (i, j) {
    let r1 = find(i)
    let r2 = find(j)
    if (rank[r1] < rank[r2]) {
      pre[r1] = r2
    } else if (rank[r1] > rank[r2]) {
      pre[r2] = r1
    } else {
      pre[r1] = r2
      rank[r2]++
    }
  }
  const m = grid.length
  if (!m) return 0
  const n = grid[0].length
  const pre = Array(m * n)
  const rank = Array(m * n).fill(0)
  for (let i = 0; i < m * n; ++i) pre[i] = i
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === '1') {
        if (i > 0 && grid[i - 1][j] === '1') {
          union(cantor(i, j), cantor(i - 1, j))
        }
        if (j > 0 && grid[i][j - 1] === '1') {
          union(cantor(i, j), cantor(i, j - 1))
        }
      }
    }
  }
  let ret = 0
  for (let i = 0; i < m * n; ++i) {
    let [x, y] = decantor(i)
    if (grid[x][y] === '1' && pre[i] === i) ret++
  }
  return ret
}

module.exports = numIslands
