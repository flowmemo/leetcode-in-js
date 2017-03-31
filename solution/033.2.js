/*
33. Search in Rotated Sorted Array
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  'use strict'
  // find ind
  // nums[ind - 1] > nums[ind] || ind == 0
  const n = nums.length
  if (!n) return -1

  let ind
  if (nums[0] <= nums[n - 1]) {
    ind = 0
  } else {
    let left = 1
    let right = n - 1
    while (left < right) {
      let mid = left + (right - left) / 2 | 0
      if (nums[mid] > nums[0]) { left = mid + 1 } else right = mid
    }
    ind = right
  }

  // binary search
  let left = 0
  let right = n - 1
  while (left <= right) {
    let mid = left + (right - left) / 2 | 0
    let ti = (mid + ind) % n
    let val = nums[ti]
    if (val > target) {
      right = mid - 1
    } else if (val < target) {
      left = mid + 1
    } else {
      return ti
    }
  }
  return -1
}

module.exports = search
