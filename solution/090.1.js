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
  nums.sort((a, b) => a - b)
  const ret = [[]]
  const path = []
  for (let i = 0; i < nums.length; ++i) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      dfs(i, nums, path, ret)
    }
  }
  return ret
}

function dfs (pos, nums, path, ret) {
  'use strict'
  if (pos === nums.length) {
    ret.push(path.slice())
    return
  }
  path.push(nums[pos])
  for (let i = pos + 1; i < nums.length; ++i) {
    if (i === pos + 1 || nums[i] !== nums[i - 1]) {
      dfs(i, nums, path, ret)
    }
  }
  dfs(nums.length, nums, path, ret)
  path.pop()
}

module.exports = subsetsWithDup
