/*
286. Walls and Gates
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

For example, given the 2D grid:
INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:
  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  'use strict'
  const m = rooms.length
  if (!m) return
  const n = rooms[0].length
  if (!n) return

  const d = [0, 1, 0, -1, 0]
  const q = []

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (rooms[i][j] === 0) q.push({x: i, y: j})
    }
  }
  while (q.length) {
    const {x, y} = q.shift()

    for (let i = 0; i < 4; ++i) {
      const nx = x + d[i]
      const ny = y + d[i + 1]

      if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue
      if (rooms[nx][ny] !== 2147483647) continue

      rooms[nx][ny] = rooms[x][y] + 1
      q.push({x: nx, y: ny})
    }
  }
}

module.exports = wallsAndGates
