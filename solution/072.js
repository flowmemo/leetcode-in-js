/*
72. Edit Distance
Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:

a) Insert a character
b) Delete a character
c) Replace a character
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  'use strict'
  const n1 = word1.length
  const n2 = word2.length
  const dp = Array(n1 + 1).fill().map(() => Array(n2 + 1))
  for (let i = 0; i <= n1; ++i) {
    for (let j = 0; j <= n2; ++j) {
      if (i === 0 || j === 0) dp[i][j] = i + j
      else if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      }
    }
  }
  return dp[n1][n2]
}

module.exports = minDistance
