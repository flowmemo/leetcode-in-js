/*
153. Find Minimum in Rotated Sorted Array
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  'use strict'
  const n = nums.length
  if (n === 1) return nums[0]
  let l = 0
  let r = n - 1
  while (l < r) {
    const m = (l + r) >>> 1
    if (nums[m] < nums[r]) {
      r = m
    } else l = m + 1
  }
  return nums[l]
}

module.exports = findMin
