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
  const res = []
  if (!n) return res
  const path = []
  dfs(0, 0, 2 * n, path, res)
  return res
}

function dfs (i, count, len, path, res) {
  if (len === path.length) {
    res.push(path.join(''))
    return
  }

  if (len - i > count) {
    path.push('(')
    dfs(i + 1, count + 1, len, path, res)
    path.pop()
  }

  if (count > 0) {
    path.push(')')
    dfs(i + 1, count - 1, len, path, res)
    path.pop()
  }
};

module.exports = generateParenthesis
