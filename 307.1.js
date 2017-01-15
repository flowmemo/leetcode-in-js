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

/** Segment tree
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const n = nums.length
  this.n = n
  const tree = Array(n)
  this.tree = tree
  for (let i = 0; i < n; ++i) tree[n + i] = nums[i]
  for (let i = n - 1; i >= 0; --i) {
    tree[i] = tree[i * 2] + tree[i * 2 + 1]
  }
}

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  let j = i + this.n
  const diff = val - this.tree[j]
  while (j) {
    this.tree[j] += diff
    j >>= 1
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  const tree = this.tree
  let res = 0
  i += this.n
  j += this.n
  while (i <= j) {
    if (i % 2) {
      res += tree[i]
      ++i
    }

    if (j % 2 === 0) {
      res += tree[j]
      --j
    }

    i >>= 1
    j >>= 1
  }
  return res
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */

module.exports = NumArray
