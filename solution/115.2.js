/*
115. Distinct Subsequences
Given a string S and a string T, count the number of distinct subsequences of T in S.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Here is an example:
S = "rabbbit", T = "rabbit"

Return 3.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const slen = s.length
  const tlen = t.length
  const dp = Array(slen + 1).fill().map(() => Array(tlen + 1).fill(0))
  for (let i = 0; i <= slen; ++i) dp[i][0] = 1

  for (let i = 1; i <= slen; ++i) {
    for (let j = 1; j <= tlen; ++j) {
      dp[i][j] = dp[i - 1][j]
      if (s[i - 1] === t[j - 1]) dp[i][j] += dp[i - 1][j - 1]
    }
  }
  return dp[slen][tlen]
}

module.exports = numDistinct
