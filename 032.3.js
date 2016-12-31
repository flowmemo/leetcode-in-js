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
  const stk = []
  let res = 0
  let prel = 0
  for (let i = 0; i < s.length; ++i) {
    const c = s[i]
    if (c === '(') {
      stk.push(i - prel)
      prel = 0
    } else {
      if (stk.length) {
        const ci = stk.pop()
        prel = i + 1 - ci
        res = Math.max(res, prel)
      } else {
        prel = 0
      }
    }
  }

  return res
}

module.exports = longestValidParentheses
