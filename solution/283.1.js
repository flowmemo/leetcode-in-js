/*
283. Move Zeroes
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  'use strict'
  let k = 0
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      ;[nums[k], nums[i]] = [nums[i], nums[k]]
      k++
    }
  }
}

module.exports = moveZeroes
