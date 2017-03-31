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
  const visited = Array(n).fill(0)
  const path = []
  dfs(path, visited, ret, nums, n)
  return ret
}

function dfs (path, visited, ret, nums, n) {
  'use strict'
  if (path.length === n) {
    ret.push(path.slice())
    return
  }
  for (let i = 0; i < n; ++i) {
    if (!visited[i]) {
      visited[i] = 1
      path.push(nums[i])
      dfs(path, visited, ret, nums, n)
      path.pop()
      visited[i] = 0
    }
  }
}

module.exports = permute
