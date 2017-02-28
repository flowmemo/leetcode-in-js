/*
375. Guess Number Higher or Lower II
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.

However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.

Example:

n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

You end up paying $5 + $7 + $9 = $21.
Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.

Hint:

The best strategy to play the game is to minimize the maximum loss you could possibly face. Another strategy is to minimize the expected loss. Here, we are interested in the first scenario.
Take a small example (n = 3). What do you end up paying in the worst case?
Check out (this article)[https://en.wikipedia.org/wiki/Minimax] if you're still stuck.
The purely recursive implementation of minimax would be worthless for even a small n. You MUST use dynamic programming.
As a follow-up, how would you modify your code to solve the problem of minimizing the expected loss, instead of the worst-case loss?
*/

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  const dp = Array(n + 1)
  for (let i = 1; i <= n; i++) {
    dp[i] = Array(n + 1)
    dp[i][i] = 0
  }
  for (let step = 1; step < n; step++) {
    for (let i = 1; i < n + 1 - step; i++) {
      let j = i + step
      let min = Math.min(i + dp[i + 1][j], j + dp[i][j - 1])
      for (let k = i + 1; k < j; k++) {
        let cur = k + Math.max(dp[i][k - 1], dp[k + 1][j])
        if (cur < min) min = cur
      }
      dp[i][j] = min
    }
  }
  return dp[1][n]
}

let ans = [
  // OEIS A276128
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 21, 24, 27, 30, 34, 38, 42, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 86, 90, 94, 98, 102, 106, 110, 114, 119, 124, 129, 134, 139, 144, 149, 154, 160, 166, 172
]

for (let i = 1; i < 50; i++) {
  let a = ans[i - 1]
  let r = getMoneyAmount(i)
  console.log(a === r, a, r)
}
