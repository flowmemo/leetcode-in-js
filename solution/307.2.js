/*
307. Range Sum Query - Mutable
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

The update(i, val) function modifies nums by updating the element at index i to val.
Example:
Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
Note:
The array is only modifiable by the update function.
You may assume the number of calls to update and sumRange function is distributed evenly.
*/

/** Binary indexed tree
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  'use strict'
  const len = nums.length
  this.nums = Array(len).fill(0)
  this.len = len
  this.a = Array(this.len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    this.update(i, nums[i])
  }
  this.nums = nums
}

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  'use strict'
  const diff = val - this.nums[i]
  const a = this.a
  this.nums[i] = val
  let index = i + 1
  while (index <= this.len) {
    a[index] += diff
    // index = index + (index & (-index))
    // index += index ^ (index & (index - 1))
    // index += (index | (index & (index - 1))) & ~(index & (index & (index - 1)))
    index += index & ~(index & (index - 1))
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  'use strict'
  return this.getSum(j) - this.getSum(i - 1)
}

NumArray.prototype.getSum = function (i) {
  'use strict'
  let index = i + 1
  const a = this.a
  let ans = 0
  while (index) {
    ans += a[index]
    index = index & (index - 1)
  }
  return ans
}
/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */

module.exports = NumArray
