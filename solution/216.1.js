/*
216. Combination Sum III
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]
Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  'use strict'
  const res = []
  const path = []
  for (let i = 1; i <= 10 - k; ++i) dfs(i, k, n, res, path)
  return res
}

function dfs (i, k, rest, res, path) {
  'use strict'

  if (i * k > rest || i + (k - 1) * 9 < rest) return
  rest -= i
  k--
  path.push(i)
  if (k === 0) {
    if (rest === 0) {
      res.push(path.slice())
    }
    path.pop()
    return
  }

  for (let ni = i + 1; ni <= 10 - k; ++ni) dfs(ni, k, rest, res, path)
  path.pop()
}

module.exports = combinationSum3
