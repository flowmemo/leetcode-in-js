/*
140. Word Break II
Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.

Return all such possible sentences.

For example, given
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].

A solution is ["cats and dog", "cat sand dog"].
*/

/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
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

  if (!slen || !maxL) return []
  let dp = Array(slen + 1)
  for (let i = 0; i < slen; i++) dp[i] = []
  dp[slen] = [Infinity]

  // dp
  for (let i = slen - minL; i >= minL; i--) {
    for (let j = i + minL; j - i <= maxL && j <= slen; j++) {
      let word = s.slice(i, j)
      if (dp[j].length && wordDict.has(word)) {
        dp[i].push(j)
      }
    }
  }

  let i = 0
  for (let j = i + minL; j - i <= maxL && j <= slen; j++) {
    let word = s.slice(i, j)
    if (dp[j].length && wordDict.has(word)) {
      dp[i].push(j)
    }
  }

  const res = []

  // construct results
  function dfs (cur, i) {
    if (i === slen) {
      return res.push(cur)
    }
    for (let j = 0; j < dp[i].length; j++) {
      let end = dp[i][j]
      let word = s.slice(i, end)
      let newcur = cur.slice()
      newcur.push(word)
      dfs(newcur, end)
    }
  }

  dfs([], 0)
  return res.map(item => item.join(' '))
}

let tc = [
  ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']],
  [''],
  ['a', ['a']],
  ['ab', ['a']],
  [
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']
  ]
]

tc.forEach(item => { item[1] = new Set(item[1]) })
let ans = [
  ['cats and dog', 'cat sand dog'],
  [],
  ['a'],
  [],
  []
]
for (let i = 0; i < tc.length - 1; i++) {
  let a = ans[i].sort().join()
  let r = wordBreak(...tc[i]).sort().join()
  console.log(a === r, a, r)
}
