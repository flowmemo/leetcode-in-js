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
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const res = []
  const path = []
  for (let i = 0; i < candidates.length; ++i) {
    if (i === 0 || candidates[i] !== candidates[i - 1]) {
      dfs(i, candidates, target, path, res)
    }
  }
  return res
}

function dfs (pos, v, rest, path, res) {
  rest -= v[pos]
  if (rest < 0) return
  path.push(v[pos])
  if (rest === 0) res.push(path.slice())
  for (let i = pos + 1; i < v.length; ++i) {
    if (i === pos + 1 || v[i] !== v[i - 1]) {
      dfs(i, v, rest, path, res)
    }
  }
  path.pop()
}

module.exports = combinationSum2

