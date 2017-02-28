/*
17. Letter Combinations of a Phone Number
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

![](http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  'use strict'
  digits = Array.prototype.map.call(digits, c => +c)
  const v = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const res = []
  const path = []
  if (!digits.length) return res
  dfs(digits, 0, path, res, v)
  return res
}

function dfs (digits, pos, path, res, v) {
  'use strict'
  if (pos === digits.length) {
    res.push(path.join(''))
    return
  }
  const digit = digits[pos]
  if (digit < 2) {
    dfs(digits, pos + 1, path, res, v)
    return
  }
  const n = v[digit]
  for (let i = 0; i < n.length; ++i) {
    const c = n[i]
    path.push(c)
    dfs(digits, pos + 1, path, res, v)
    path.pop()
  }
}

module.exports = letterCombinations
