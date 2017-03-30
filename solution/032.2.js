/*
32. Longest Valid Parentheses
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  'use strict'
  const len = s.length
  const dp = Array(len + 1).fill(0)
  let res = 0
  for (let i = 2; i <= len; ++i) {
    if (s[i - 1] === ')') {
      if (s[i - 2] === '(') dp[i] = dp[i - 2] + 2
      else {
        const ci = i - dp[i - 1] - 2
        dp[i] = s[ci] === '('
                ? dp[i - 1] + dp[ci] + 2
                : 0
      }
      res = Math.max(res, dp[i])
    }
  }
  return res
}

module.exports = longestValidParentheses
