/*
560. Subarray Sum Equals K
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  'use strict'
  const map = Object.create(null)
  map[0] = 1
  let psum = 0
  let ret = 0
  for (const c of nums) {
    psum += c
    ret += map[psum - k] | 0
    map[psum] = (map[psum] | 0) + 1
  }
  return ret
}

module.exports = subarraySum
