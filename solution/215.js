/*
215. Kth Largest Element in an Array
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  'use strict'
  return findKth(nums, nums.length - k)
}

function findKth (nums, k) {
  'use strict'
  let l = 0
  let r = nums.length
  while (1) {
    let [i, j] = partition(nums, l, r)
    if (k < i) {
      r = i
    } else if (k >= j) {
      l = j
    } else return nums[k]
  }
}

function partition (nums, start, end) {
  'use strict'
  if (start + 1 >= end) return [start, end]
  const pivot = nums[start]
  let i = start
  let j = end
  let k = start
  while (k < j) {
    if (nums[k] < pivot) {
      const tmp = nums[k]
      nums[k] = nums[i]
      nums[i] = tmp
      ++i
      ++k
    } else if (nums[k] === pivot) {
      k++
    } else {
      const tmp = nums[k]
      nums[k] = nums[j - 1]
      nums[j - 1] = tmp
      --j
    }
  }
  return [i, j]
}

module.exports = findKthLargest
