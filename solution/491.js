/*
491. Increasing Subsequences
Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2 .

Example:
Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
Note:
The length of the given array will not exceed 15.
The range of integer in the given array is [-100,100].
The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  'use strict'
  const ret = []
  const n = nums.length
  const path = []
  for (let i = 0; i < n; ++i) dfs(i, path, ret, nums, n)
  return ret
}

function dfs (k, path, ret, nums, n) {
  'use strict'
  if (k === n) {
    if (path.length > 1) ret.push(path.slice())
    return
  }

  path.push(nums[k])
  for (let i = k + 1; i <= n; ++i) {
    if (i < n && nums[i] === nums[k]) {
      dfs(i, path, ret, nums, n)
      break
    } else if (i === n || nums[i] > nums[k]) {
      dfs(i, path, ret, nums, n)
    }
  }

  path.pop()
}

module.exports = findSubsequences
