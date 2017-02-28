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
  let bit = (1 << nums.length) - 1
  const res = []
  while (bit >= 0) {
    let b = bit
    let i = 0
    const r = []
    while (b) {
      if (b & 1) r.push(nums[i])
      b >>= 1
      ++i
    }
    res.push(r.slice())
    --bit
  }
  return res
}

module.exports = subsets
