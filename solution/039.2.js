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
  // knapsack 1
  const n = v.length
  const dp = Array(target + 1).fill().map(() => [])
  dp[0].push([])

  for (let i = 1; i <= n; ++i) {
    const c = v[i - 1]
    for (let j = target; j > 0; --j) {
      let k = 1
      const rpeatc = []
      while (j - k * c >= 0) {
        rpeatc.push(c)
        const p = dp[j - k * c]
        for (let vv of p) {
          let nv = vv.slice()
          dp[j].push(nv.concat(rpeatc))
        }
        k++
      }
    }
  }

  return dp[target]
}

module.exports = combinationSum
