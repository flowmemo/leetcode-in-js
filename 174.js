/*
174. Dungeon Game
The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).

In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.

For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN -> DOWN.

-2 (K)  -3     3
-5      -10    1
10      30     -5 (P)

Notes:

The knight's health has no upper bound.
Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.
*/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const row = dungeon.length
  if (!row) return 1
  const col = dungeon[0].length
  if (!col) return 1
  const dp = Array(row)
  for (let i = 0; i < row; i++) {
    dp[i] = Array(col)
  }
  dp[row - 1][col - 1] = Math.max(-dungeon[row - 1][col - 1] + 1, 1)
  for (let i = col - 2; i >= 0; i--) {
    dp[row - 1][i] = Math.max(dp[row - 1][i + 1] - dungeon[row - 1][i], 1)
  }

  for (let i = row - 2; i >= 0; i--) {
    dp[i][col - 1] = Math.max(dp[i + 1][col - 1] - dungeon[i][col - 1], 1)
  }

  for (let i = row - 2; i >= 0; i--) {
    for (let j = col - 2; j >= 0; j--) {
      let cur = dungeon[i][j]
      dp[i][j] = Math.min(dp[i + 1][j] - cur, dp[i][j + 1] - cur)
      dp[i][j] = Math.max(dp[i][j], 1)
    }
  }

  return dp[0][0]
}

let tc = [
  [
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]
  ],
  [[]],
  [[1]],
  [[-1]],
  [
    [0, 0, 0],
    [1, 1, -1]
  ],
  [
    [1, -3, 3],
    [0, -2, 0],
    [-3, -3, -3]]
]

let ans = [
  7, 1, 1, 2, 1, 3
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = calculateMinimumHP(tc[i])
  console.log(a === r, a, r)
}
