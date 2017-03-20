/*
136. Single Number
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  'use strict'
  let res = 0
  for (let n of nums) res ^= n
  return res
}

module.exports = singleNumber
