/*
39. Combination Sum
Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7,
A solution set is:
[
  [7],
  [2, 2, 3]
]
*/

/**
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/
var combinationSum = function (candidates, target) {
  'use strict'
  candidates.sort((a, b) => a - b)
  const res = []
  const path = []
  for (let i = 0; i < candidates.length; ++i) {
    dfs(i, candidates, target, path, res)
  }
  return res
}

function dfs (pos, v, rest, path, res) {
  'use strict'
  rest -= v[pos]
  if (rest < 0) return
  path.push(v[pos])
  if (rest === 0) res.push(path.slice())
  for (let i = pos; i < v.length; ++i) {
    dfs(i, v, rest, path, res)
  }
  path.pop()
}

module.exports = combinationSum
