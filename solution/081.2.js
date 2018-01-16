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
  let ind = findStart(nums, 0, n - 1)
  let left = 0
  let right = n
  while (left < right) {
    let mid = (left + right) / 2 | 0
    let v = nums[(ind + mid) % n]
    if (target < v) right = mid
    else if (target > v) left = mid + 1
    else return true
  }
  return false
}

function findStart (nums, left, right) {
  'use strict'
  if (left > right) throw new Error('invalid input')
  if (left === right) return left
  const mid = (left + right) >>> 1
  if (nums[mid] < nums[left]) {
    return findStart(nums, left + 1, mid)
  } else if (nums[left] > nums[right]) {
    return findStart(nums, left + 1, right)
  }

  const li = findStart(nums, left, mid)
  const ri = findStart(nums, mid + 1, right)
  if (nums[ri] < nums[ri - 1]) return ri
  else return li
}

module.exports = search
