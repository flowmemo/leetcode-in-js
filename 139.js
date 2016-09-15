/*
139. Word Break
Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".
*/

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let minL = Infinity
  let maxL = 0
  const slen = s.length
  for (let item of wordDict) {
    let curL = item.length
    if (curL < minL) minL = curL
    if (curL > maxL) maxL = curL
  }
  let dp = Array(slen + 1)
  dp[0] = true
  for (let i = minL; i <= slen; i++) {
    for (let j = i - minL; j >= 0 && i - j <= maxL; j--) {
      let word = s.slice(j, i)
      if (dp[j] && wordDict.has(word)) {
        dp[i] = true
        break
      }
    }
  }
  return dp[slen]
}

let tc = [
  ['leetcode', ['leet', 'code']]
]

tc.forEach(item => { item[1] = new Set(item[1]) })

let ans = [true]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = wordBreak(...tc[i])
  console.log(a === r, a, r)
}
