/*
417. Pacific Atlantic Water Flow
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:
The order of returned grid coordinates does not matter.
Both m and n are less than 150.
Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  'use strict'
  const res = []
  const m = matrix.length
  if (!m) return res
  const n = matrix[0].length
  if (!n) return res
  const reach = Array(m).fill().map(() => Array(n).fill(0))
  for (let x = 0; x < m; ++x) {
    bfs(x, 0, matrix, reach, 1, m, n)
    bfs(x, n - 1, matrix, reach, 2, m, n)
  }
  for (let y = 0; y < n; ++y) {
    bfs(0, y, matrix, reach, 1, m, n)
    bfs(m - 1, y, matrix, reach, 2, m, n)
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (reach[i][j] === 3) res.push([i, j])
    }
  }
  // cout << reach[1][4] << endl;
  return res
}

function bfs (i, j, matrix, reach, d, m, n) {
  'use strict'
  const q = []
  q.push([i, j])
  reach[i][j] |= d
  while (q.length) {
    let p = q.shift()
    let x = p[0]
    let y = p[1]
    let nx, ny
    const c = matrix[x][y]
    nx = x + 1
    ny = y
    if (nx >= 0 && nx < m &&
      ny >= 0 && ny < n &&
      !(reach[nx][ny] & d) &&
      matrix[nx][ny] >= c) {
      reach[nx][ny] |= d
      q.push([nx, ny])
    }
    nx = x - 1
    ny = y
    if (nx >= 0 && nx < m &&
      ny >= 0 && ny < n &&
      !(reach[nx][ny] & d) &&
      matrix[nx][ny] >= c) {
      reach[nx][ny] |= d
      q.push([nx, ny])
    }
    nx = x
    ny = y + 1
    if (nx >= 0 && nx < m &&
      ny >= 0 && ny < n &&
      !(reach[nx][ny] & d) &&
      matrix[nx][ny] >= c) {
      reach[nx][ny] |= d
      q.push([nx, ny])
    }
    nx = x
    ny = y - 1
    if (nx >= 0 && nx < m &&
      ny >= 0 && ny < n &&
      !(reach[nx][ny] & d) &&
      matrix[nx][ny] >= c) {
      reach[nx][ny] |= d
      q.push([nx, ny])
    }
  }
}

module.exports = pacificAtlantic
