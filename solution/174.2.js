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
  'use strict'
  // o(n) space
  const m = dungeon.length
  const n = dungeon[0].length
  const dp = Array(n).fill(Infinity)
  dp[n - 1] = 0
  for (let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      if (j === n - 1) dp[j] = dp[j] - dungeon[i][j]
      else {
        dp[j] = Math.min(dp[j + 1], dp[j]) - dungeon[i][j]
      }
      dp[j] = Math.max(0, dp[j])
    }
  }
  return dp[0] + 1
}

module.exports = calculateMinimumHP
