/*
78. Subsets
Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  const path = []
  for (let i = 0; i <= nums.length; ++i) {
    dfs(i, nums, path, res)
  }
  return res
}

function dfs (pos, nums, path, res) {
  if (pos === nums.length) {
    res.push(path.slice())
    return
  }
  path.push(nums[pos])
  for (let i = pos + 1; i <= nums.length; ++i) {
    dfs(i, nums, path, res)
  }
  path.pop()
}

module.exports = subsets

