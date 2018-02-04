
/*
778. Swim in Rising Water
On an N x N grid, each square grid[i][j] represents the elevation at that point (i,j).

Now rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distance in zero time. Of course, you must stay within the boundaries of the grid during your swim.

You start at the top left square (0, 0). What is the least time until you can reach the bottom right square (N-1, N-1)?

Example 1:

Input: [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.

You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.

Example 2:

Input: [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
Explanation:
 0  1  2  3  4
24 23 22 21  5
12 13 14 15 16
11 17 18 19 20
10  9  8  7  6

The final route is marked in bold.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.

Note:
1. 2 <= N <= 50.
2. grid[i][j] is a permutation of [0, ..., N*N - 1].
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  'use strict'
  // binary search + DFS
  const n = grid.length
  const visited = Array(n * n)
  const dir = [0, 1, 0, -1, 0]
  function dfs (x, y, tt) {
    if (grid[x][y] > tt) return false
    if (x === n - 1 && y === n - 1) return true
    if (visited[x * n + y]) return false
    visited[x * n + y] = 1
    for (let k = 0; k < 4; ++k) {
      const nx = x + dir[k]
      const ny = y + dir[k + 1]
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (dfs(nx, ny, tt)) return true
      }
    }
    return false
  }
  function connect (x) {
    visited.fill(0)
    return dfs(0, 0, x)
  }
  let l = 0
  let r = n * n - 1
  let ret = r
  while (l <= r) {
    const x = (l + r) >> 1
    if (connect(x)) {
      ret = x
      r = x - 1
    } else l = x + 1
  }
  return ret
}

module.exports = swimInWater
