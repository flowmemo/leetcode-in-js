/*
34. Search for a Range
Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const n = nums.length
  let left = 0
  let right = n
  while (left < right) {
    let mid = (left + right) / 2 | 0
    if (nums[mid] >= target) right = mid
    else left = mid + 1
  }

  let i1 = right

  left = i1
  right = n
  while (left < right) {
    let mid = (left + right) / 2 | 0
    if (nums[mid] <= target) left = mid + 1
    else right = mid
  }
  let i2 = right

  if (i1 === i2) return [-1, -1]
  else return [i1, i2 - 1]
}

module.exports = searchRange
