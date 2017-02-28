/*
81. Search in Rotated Sorted Array II
Follow up for "Search in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?

Write a function to determine if a given target is in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const n = nums.length
  let ind = findStart(nums, 0, n)
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
  if (right - left <= 2) {
    if (nums[left] <= nums[right - 1]) return left
    return left + 1
  }
  let mid = left + (right - left) / 2 | 0
  if (nums[mid] < nums[left]) return findStart(nums, left, mid + 1)
  else if (nums[mid] > nums[right - 1]) return findStart(nums, mid + 1, right)
  let li = findStart(nums, left, mid + 1)
  let ri = findStart(nums, mid + 1, right)
  if (ri != nums.length && nums[ri - 1] > nums[ri]) return ri
  else return li
}

module.exports = search
