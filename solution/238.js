/*
238. Product of Array Except Self
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  'use strict'
  const n = nums.length
  const ret = Array(n).fill(1)
  let c = 1
  for (let i = 1; i < n; ++i) {
    c *= nums[i - 1]
    ret[i] = c
  }
  c = 1
  for (let i = n - 2; i >= 0; i--) {
    c *= nums[i + 1]
    ret[i] *= c
  }

  return ret
}

module.exports = productExceptSelf
