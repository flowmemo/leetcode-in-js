/*
20. Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stk = []
  const m = {
    '(': ')',
    ')': '(',
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{'
  }
  for (let c of s) {
    if ('([{'.includes(c)) stk.push(c)
    else if (!stk.length || stk[stk.length - 1] !== m[c]) return false
    else stk.pop()
  }
  return !stk.length
}
