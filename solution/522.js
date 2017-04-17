/*
522. Longest Uncommon Subsequence II
Given a list of strings, you need to find the longest uncommon subsequence among them. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

Example 1:
Input: "aba", "cdc", "eae"
Output: 3
Note:

All the given strings' lengths will not exceed 10.
The length of the given list will be in the range of [2, 50].
*/

/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  'use strict'
  strs.sort((a, b) => b.length - a.length)

  const n = strs.length
  for (let i = 0; i < n; ++i) {
    const w = strs[i]
    let r = w.length
    for (let j = 0; j < n; ++j) {
      if (i === j) continue
      if (contain(strs[j], w)) {
        r = -1
        break
      }
    }
    if (r > -1) return r
  }
  return -1
}

function contain (s, w) {
  'use strict'
  let i = 0
  let j = 0
  const ns = s.length
  const nw = w.length
  while (i < ns && j < nw) {
    if (s[i] === w[j]) {
      ++j
    }
    ++i
  }

  return j === nw
}

module.exports = findLUSlength
