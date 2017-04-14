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
  const wset = new Set(wordDict)
  let minL = Infinity
  let maxL = 0
  const n = s.length
  for (let item of wordDict) {
    let curL = item.length
    if (curL < minL) minL = curL
    if (curL > maxL) maxL = curL
  }
  let dp = Array(n + 1)
  dp[0] = true
  for (let i = minL; i <= n; i++) {
    for (let j = i - minL; j >= 0 && i - j <= maxL; j--) {
      let word = s.slice(j, i)
      if (dp[j] && wset.has(word)) {
        dp[i] = true
        break
      }
    }
  }
  return dp[n]
}

module.exports = wordBreak
