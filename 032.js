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
  const n = s.length
  let start = 0
  let i = 0
  let ccount = 0
  let res = 0
  while (i < n) {
    if (s[i] === ')') ccount--
    else ccount++

    if (ccount === 0) res = Math.max(res, i + 1 - start)
    else if (ccount < 0) {
      ccount = 0
      start = i + 1
    }
    ++i
  }

  ccount = 0
  start = n
  i = n - 1
  while (i >= 0) {
    if (s[i] === '(') ccount--
    else ccount++

    if (ccount === 0) res = Math.max(res, start - i)
    else if (ccount < 0) {
      ccount = 0
      start = i
    }
    --i
  }

  return res
}

module.exports = longestValidParentheses
