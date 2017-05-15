/*
279. Perfect Squares
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  'use strict'
  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= n; ++i) {
    for (let k = 1; k * k <= i; ++k) {
      dp[i] = Math.min(dp[i], dp[i - k * k] + 1)
    }
  }
  return dp[n]
}

module.exports = numSquares
