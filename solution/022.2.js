/*
22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  'use strict'
  // https://discuss.leetcode.com/post/5159
  const rmap = Array(n + 1).fill().map(() => [])
  rmap[0] = ['']
  for (let i = 1; i <= n; ++i) {
    for (let left = 0; left < i; ++left) {
      let right = i - left - 1
      for (let s1 of rmap[left]) {
        for (let s2 of rmap[right]) {
          rmap[i].push('(' + s1 + ')' + s2)
        }
      }
    }
  }
  return rmap[n]
}

module.exports = generateParenthesis
