/*
40. Combination Sum II
Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (v, target) {
  'use strict'
  v.sort((a, b) => b - a)
  const ret = []
  const path = []
  for (let i = 0; i < v.length; ++i) {
    if (i === 0 || v[i] !== v[i - 1]) {
      dfs(i, path, target, v, ret)
    }
  }
  return ret
}

function dfs (p, path, rest, v, ret) {
  'use strict'
  if (p === v.length) {
    if (rest === 0) ret.push(path.slice())
    return
  }

  rest -= v[p]
  if (rest < 0) return
  path.push(v[p])

  for (let i = p + 1; i < v.length; ++i) {
    if (i === p + 1 || v[i] !== v[i - 1]) {
      dfs(i, path, rest, v, ret)
    }
  }

  dfs(v.length, path, rest, v, ret)
  path.pop()
}

module.exports = combinationSum2
