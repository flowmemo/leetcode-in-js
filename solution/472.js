/*
472. Concatenated Words
Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.

A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example:
Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
Note:
The number of elements of the given array will not exceed 10,000
The length sum of elements in the given array will not exceed 600,000.
All the input string will only include lower case letters.
The returned elements order does not matter.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  'use strict'
  words.sort((a, b) => a.length - b.length)

  const wdict = new Set()
  const ret = []
  let minL = Infinity
  let maxL = -Infinity
  for (const s of words) {
    if (!s) continue
    if (check(s, wdict, minL, maxL)) ret.push(s)
    minL = Math.min(minL, s.length)
    maxL = Math.max(maxL, s.length)
    wdict.add(s)
  }
  return ret
}

function check (s, wdict, minL, maxL) {
  'use strict'
  const n = s.length
  const dp = Array(n + 1).fill(false)
  dp[0] = true
  for (let i = minL; i <= n; ++i) {
    for (let j = i - minL; j >= 0 && j >= i - maxL; --j) {
      if (!dp[j]) continue
      if (wdict.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[n]
}

module.exports = findAllConcatenatedWordsInADict
