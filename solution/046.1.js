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
  const res = []
  dfs(0, nums, res)
  return res
}

function dfs (pos, path, res) {
  'use strict'
  if (pos + 1 === path.length) {
    res.push(path.slice())
    return
  }
  for (let i = pos; i < path.length; ++i) {
    swap(path, pos, i)
    dfs(pos + 1, path, res)
    swap(path, pos, i)
  }
}

function swap (arr, i, j) {
  'use strict'
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

module.exports = permute
