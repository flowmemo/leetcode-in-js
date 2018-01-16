/*
81. Search in Rotated Sorted Array II
    Follow up for "Search in Rotated Sorted Array":
    What if duplicates are allowed?

    Would this affect the run-time complexity? How and why?

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Write a function to determine if a given target is in the array.

The array may contain duplicates.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  'use strict'
  const n = nums.length
  if (!n) return false
  let l = 0
  let r = n - 1
  while (l <= r) {
    const mid = (l + r) >>> 1
    if (nums[mid] === target) return true
    if (nums[mid] > nums[l]) {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1
      } else l = mid + 1
    } else if (nums[mid] < nums[l]) {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1
      } else r = mid - 1
    } else {
      l++
    }
  }

  return false
}

module.exports = search
