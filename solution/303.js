/*
303. Range Sum Query - Immutable
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  'use strict'
  const len = nums.length
  const sum = Array(len + 1)
  sum[0] = 0
  for (let i = 0; i < len; i++) {
    sum[i + 1] = sum[i] + nums[i]
  }
  this.sum = sum
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  'use strict'
  return this.sum[j + 1] - this.sum[i]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */

module.exports = NumArray
