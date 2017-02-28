/*
219. Contains Duplicate II
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map()
  const len = nums.length
  let pre
  for (let i = 0; i < len; i++) {
    pre = map.get(nums[i])
    if (pre !== undefined && i - pre <= k) return true
    map.set(nums[i], i)
  }
  return false
}

let tc = [
  [
    [1, 2], 1
  ],
  [
    [1, 3, 4, 3], 2
  ],
  [
    [1, 3, 4, 5, 3], 2
  ]
]

let ans = [
  false, true, false
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = containsNearbyDuplicate(...tc[i])
  console.log(a === r, a, r)
}
