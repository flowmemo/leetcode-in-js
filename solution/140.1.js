/*
140. Word Break II
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. You may assume the dictionary does not contain duplicate words.

Return all such possible sentences.

For example, given
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].

A solution is ["cats and dog", "cat sand dog"].

UPDATE (2017/1/4):
The wordDict parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  'use strict'
  const n = s.length
  if (!n) return []
  const wset = new Set(wordDict)
  const dp = Array(n + 1).fill(false)
  const pre = Array(n + 1).fill().map(() => [])
  dp[0] = 1

  let minL = Infinity
  let maxL = -Infinity

  for (const w of wordDict) {
    minL = Math.min(minL, w.length)
    maxL = Math.max(maxL, w.length)
  }

  for (let i = minL; i <= n; ++i) {
    for (let j = i - minL; j >= 0 && j >= i - maxL; --j) {
      if (!dp[j]) continue
      if (wset.has(s.slice(j, i))) {
        dp[i] = true
        pre[i].push(j)
      }
    }
  }
  const ret = []
  const path = []
  function dfs (p, pre, path) {
    if (p === 0) {
      ret.push(path.slice().reverse().join(' '))
      return
    }
    const preis = pre[p]
    for (const pi of preis) {
      path.push(s.slice(pi, p))
      dfs(pi, pre, path)
      path.pop()
    }
  }

  dfs(n, pre, path)
  return ret
}

module.exports = wordBreak
