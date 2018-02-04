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
  const m = grid.length
  if (!m) return 0
  const n = grid[0].length

  const visited = Array(m).fill().map(() => Array(n).fill(0))
  let ret = 0
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (!visited[i][j] && grid[i][j] === '1') {
        ret++

        // bfs

        visited[i][j] = 1
        const q = [[i, j]]
        const checkAdd = function (nx, ny) {
          if (nx >= 0 && nx < m &&
              ny >= 0 && ny < n &&
              !visited[nx][ny] && grid[nx][ny] === '1') {
            q.push([nx, ny])
            visited[nx][ny] = 1
          }
        }
        while (q.length) {
          let [x, y] = q.shift()
          checkAdd(x - 1, y)
          checkAdd(x + 1, y)
          checkAdd(x, y - 1)
          checkAdd(x, y + 1)
        }
      }
    }
  }
  return ret
}

module.exports = numIslands
