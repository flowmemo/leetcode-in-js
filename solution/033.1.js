/*
33. Search in Rotated Sorted Array
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  'use strict'
  return helper(nums, 0, nums.length, target)
}

function helper (nums, start, end, target) {
  'use strict'
  if (start === end) return -1
  if (nums[end - 1] >= nums[start]) {
    return bsearch(nums, start, end, target)
  } else {
    let mid = ((start + end) >> 1)
    if (nums[mid] >= nums[start]) {
      let leftres = bsearch(nums, start, mid + 1, target)
      if (leftres > -1) return leftres
      return helper(nums, mid + 1, end, target)
    } else {
      let rightres = bsearch(nums, mid, end, target)
      if (rightres > -1) return rightres
      return helper(nums, start, mid, target)
    }
  }
}

function bsearch (v, start, end, target) {
  'use strict'
  if (start === end) return -1
  let l = start
  let r = end
  while (l < r) {
    let mid = ((l + r) >> 1)
    if (v[mid] > target) r = mid
    else if (v[mid] < target) l = mid + 1
    else return mid
  }

  return -1
}

module.exports = search
