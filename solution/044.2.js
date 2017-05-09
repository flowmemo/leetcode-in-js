/*
44. Wildcard Matching
Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  'use strict'
  const sn = s.length
  const pn = p.length
  const dp = Array(sn + 1).fill().map(() => Array(pn + 1).fill(false))

  dp[0][0] = 1
  for (let i = 0; i <= sn; ++i) {
    for (let j = 0; j < pn; ++j) {
      if (!dp[i][j]) continue
      if (i < sn) {
        const c1 = s[i]
        const c2 = p[j]
        if (c2 === '?') {
          dp[i + 1][j + 1] = 1
        } else if (c2 === '*') {
          dp[i + 1][j] = true
          dp[i][j + 1] = true
        } else {
          dp[i + 1][j + 1] = (c1 === c2)
        }
      } else {
        if (p[j] === '*') dp[i][j + 1] = true
      }
    }
  }
  return dp[sn][pn]
}

module.exports = isMatch
