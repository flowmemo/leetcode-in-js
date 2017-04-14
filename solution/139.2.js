/*
139. Word Break
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".

UPDATE (2017/1/4):
The wordDict parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  'use strict'
  const n = s.length
  const dp = Array(n + 1).fill(false)

  dp[0] = true
  for (let i = 1; i <= n; ++i) {
    for (const w of wordDict) {
      const wl = w.length
      if (i - wl >= 0 && dp[i - wl]) {
        if (check(s, i - wl, w)) dp[i] = true
      }
    }
  }
  return dp[n]
}

function check (s, beg, w) {
  'use strict'
  for (let i = 0; i < w.length; ++i, ++beg) {
    if (s[beg] !== w[i]) return false
  }
  return true
}

module.exports = wordBreak
