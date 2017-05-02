/*
10. Regular Expression Matching
Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
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

  dp[0][0] = true

  for (let i = 0; i <= sn; ++i) {
    for (let j = 0; j <= pn; ++j) {
      if (!dp[i][j] || (j < pn && p[j] === '*')) continue
      if (i < sn && j < pn) {
        const c = s[i]

        if (j === pn - 1 || p[j + 1] !== '*') {
          // compare single character
          if (p[j] === '.' || p[j] === c) {
            dp[i + 1][j + 1] = true
          }
        }
      }

      if (i < sn) {
        if (j >= 2 && p[j - 1] === '*') {
          if (p[j - 2] === '.' || p[j - 2] === s[i]) {
            dp[i + 1][j] = true
          }
        }
      }

      if (j < pn) {
        if (j < pn - 1 && p[j + 1] === '*') {
          dp[i][j + 2] = true
        }
      }
    }
  }

  return dp[sn][pn]
}

module.exports = isMatch
