/*
55. Jump Game
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  'use strict'
  const n = nums.length
  let i = 0
  let rmax = 0
  while (i <= rmax && rmax + 1 < n) {
    rmax = Math.max(rmax, nums[i] + i)
    ++i
  }
  return (rmax + 1) >= n
}

module.exports = canJump
