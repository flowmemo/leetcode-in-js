/*
46. Permutations
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  'use strict'
  const n = nums.length
  const ret = []
  const set = new Set(nums)
  const path = []
  dfs(path, set, ret, nums, n)
  return ret
}

function dfs (path, set, ret, nums, n) {
  'use strict'
  if (path.length === n) {
    ret.push(path.slice())
    return
  }
  const cset = new Set(set)
  for (let num of cset) {
    path.push(num)
    set.delete(num)
    dfs(path, set, ret, nums, n)
    set.add(num)
    path.pop()
  }
}

module.exports = permute
