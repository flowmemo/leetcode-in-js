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
  const ret = []
  const path = []
  dfs(0, nums, path, ret)
  return ret
}

function dfs (p, nums, path, ret) {
  'use strict'
  ret.push(path.slice())
  for (let i = p; i < nums.length; ++i) {
    if (i === p || nums[i] !== nums[i - 1]) {
      path.push(nums[i])
      dfs(i + 1, nums, path, ret)
      path.pop()
    }
  }

  return ret
}

module.exports = subsetsWithDup
