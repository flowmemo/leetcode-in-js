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
  const stk = [ -1 ]
  let res = 0
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') stk.push(i + 1)
    else {
      stk.pop()
      if (stk.length) {
        res = Math.max(res, i + 1 - stk[stk.length - 1])
      } else {
        stk.push(i + 1)
      }
    }
  }
  return res
}

module.exports = longestValidParentheses
