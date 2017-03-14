/*
189. Rotate Array
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

[show hint]

Related problem: Reverse Words in a String II

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.
*/

/**
 * for Forward Iterator in C++
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  'use strict'
  const len = nums.length
  k = (k % len + len) % len
  const m = (len - k) % len
  let nFirst = m
  let i = 0
  let j = nFirst
  while (i !== j) {
    swap(nums, i++, j++)
    if (j === len) {
      j = nFirst
    } else if (i === nFirst) nFirst = j
  }
}

function swap (nums, i, j) {
  'use strict'
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

module.exports = rotate

