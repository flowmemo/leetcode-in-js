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
  // https://leetcode.com/articles/longest-valid-parentheses/
  const stk = [ -1 ]
  let res = 0
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') stk.push(i)
    else {
      stk.pop()
      if (stk.length) {
        // what is the top element now ?
        // (the start index of longest valid paren so far) - 1
        res = Math.max(res, i - stk[stk.length - 1])
      } else {
        stk.push(i)
      }
    }
  }
  return res
}

module.exports = longestValidParentheses
