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
var combinationSum = function (v, target) {
  'use strict'
  // knapsack 2
  const n = v.length
  const dp = Array(target + 1).fill().map(() => [])
  dp[0].push([])

  for (let i = 1; i <= target; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i - v[j] >= 0) {
        let p = dp[i - v[j]]
        for (let vv of p) {
          if (vv.length > 0 && v[j] < vv[vv.length - 1]) continue
          let nv = vv.slice()
          nv.push(v[j])
          dp[i].push(nv)
        }
      }
    }
  }

  return dp[target]
}

module.exports = combinationSum
