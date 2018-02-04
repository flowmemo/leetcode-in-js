
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
  // binary search + union-find
  const n = grid.length
  const pre = Array(n * n)

  function cfind (x) {
    if (pre[x] !== x) pre[x] = cfind(pre[x])
    return pre[x]
  }
  function cunion (a, b) {
    pre[cfind(a)] = cfind(b)
  }

  function connect (x) {
    for (let i = 0; i < n * n; ++i) pre[i] = i
    for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
        if (grid[i][j] > x) continue
        if (i + 1 < n && grid[i + 1][j] <= x) {
          cunion(i * n + j, (i + 1) * n + j)
        }
        if (j + 1 < n && grid[i][j + 1] <= x) {
          cunion(i * n + j, i * n + j + 1)
        }
      }
    }

    return cfind(0) === cfind(n * n - 1)
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
