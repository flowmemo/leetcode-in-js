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
  const dp = Array(sn + 1).fill().map(() => Array(pn + 1).fill(-1))

  function dfs (i, j) {
    if (j === pn) {
      if (i === sn) return 1
      else return 0
    }
    if (dp[i][j] !== -1) return dp[i][j]
    if (i < sn) {
      const c1 = s[i]
      const c2 = p[j]
      if (c2 === '?') {
        dp[i][j] = dfs(i + 1, j + 1)
      } else if (c2 === '*') {
        dp[i][j] = dfs(i + 1, j) || dfs(i, j + 1)
      } else {
        dp[i][j] = ((c1 === c2) ? 1 : 0) && dfs(i + 1, j + 1)
      }
    } else {
      if (p[j] === '*') dp[i][j] = dfs(i, j + 1)
      else dp[i][j] = 0
    }

    return dp[i][j]
  }
  return dfs(0, 0) === 1
}

module.exports = isMatch
