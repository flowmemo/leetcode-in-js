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

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const len = nums.length
  this.nums = Array(len + 1).fill(0)
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
  const diff = val - this.nums[i]
  const a = this.a
  this.nums[i] = val
  let index = i + 1
  while (index <= this.len) {
    a[index] += diff
    index = index + (index & (-index))
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.getSum(j) - this.getSum(i - 1)
}

NumArray.prototype.getSum = function (i) {
  let index = i + 1
  const a = this.a
  let ans = 0
  while (index > 0) {
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

let tc = [
  [5, 1, 6, 4, 2, 3, 3],
  [-2, 0, 3, -5, 2, -1]
]

let ans = [
  [5, 6, 12, 16, 18, 21, 24],
  [-2, -2, 1, -4, -2, -3]
]

for (let i = 0; i < tc.length; i++) {
  let numArray = new NumArray(tc[i])
  let a = ans[i].join()
  let r = []
  for (let j = 0; j < tc[i].length; j++) r.push(numArray.sumRange(0, j))
  r = r.join()
  console.log(a === r, a, r)
}

let nn = new NumArray([7, 2, 7, 2, 0])
nn.update(4, 6)
nn.update(0, 2)
nn.update(0, 9)
console.log(nn.sumRange(4, 4) === 6)
nn.update(3, 8)
console.log(nn.sumRange(0, 4) === 32)
nn.update(4, 1)
console.log(nn.sumRange(0, 3) === 26)
console.log()

nn = new NumArray([41, -53, -11, -58, 94, -18, -80, 10, -98, -3])
nn.update(8, 6)
console.log(nn.sumRange(9, 9) === -3)
console.log()

nn = new NumArray([1, 3, 5])
console.log(nn.sumRange(0, 2) === 9)
nn.update(1, 2)
console.log(nn.sumRange(0, 2) === 8)

