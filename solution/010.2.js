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
  const dp = Array(sn + 1).fill().map(() => Array(pn + 1).fill(-1))
  function check (i1, i2) {
    if (i1 === sn && i2 === pn) return 1
    if (i2 === pn) return 0
    if (dp[i1][i2] !== -1) return dp[i1][i2]

    if (i2 < pn - 1 && p[i2 + 1] === '*') {
      if (check(i1, i2 + 2)) {
        dp[i1][i2] = 1
        return 1
      }

      if (i1 < sn && (p[i2] === '.' || p[i2] === s[i1])) {
        if (check(i1 + 1, i2)) {
          dp[i1][i2] = 1
          return 1
        }
      }

      dp[i1][i2] = 0
      return 0
    } else {
      // single
      if (i1 === sn || i2 === pn) {
        dp[i1][i2] = 0
        return 0
      }
      if (p[i2] === '.' || p[i2] === s[i1]) {
        if (check(i1 + 1, i2 + 1)) {
          dp[i1][i2] = 1
          return 1
        }
      }

      dp[i1][i2] = 0
      return 0
    }
  }

  return check(0, 0) === 1
}

module.exports = isMatch
