/*
90. Subsets II
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  'use strict'
  Array.prototype.back = function () {
    return this[this.length - 1]
  }
  nums.sort((a, b) => a - b)
  const n = nums.length
  const ret = [[]]
  let nstart = 0
  let nend = 1
  for (let i = 0; i < n; ++i) {
    const c = nums[i]
    let jstart = 0
    if (ret.length > 1 && ret.back().back() === c) {
      jstart = nstart
    }

    for (let j = jstart; j < nend; ++j) {
      const v = ret[j].slice()
      v.push(c)
      ret.push(v)
    }
    nstart = nend
    nend = ret.length
  }

  return ret
}

module.exports = subsetsWithDup
