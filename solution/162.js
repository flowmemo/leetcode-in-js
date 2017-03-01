/*
162. Find Peak Element
A peak element is an element that is greater than its neighbors.

Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that num[-1] = num[n] = -∞.

For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

click to show spoilers.

Note:
Your solution should be in logarithmic complexity.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  'use strict'
  // nlogn
  let left = 0
  let right = nums.length
  while (left + 1 !== right) {
    const i1 = (left + right - 1) / 2 | 0
    const i2 = i1 + 1
    const n1 = nums[i1]
    const n2 = nums[i2]
    if (n1 > n2) right = i2
    else left = i2
  }
  return left
}

module.exports = findPeakElement
