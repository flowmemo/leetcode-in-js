/*
442. Find All Duplicates in an Array
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

const swap = require('./algorithm').swap
/**
* @param {number[]} nums
* @return {number[]}
*/
var findDuplicates = function (nums) {
  'use strict'
  const res = []
  const len = nums.length
  let c
  for (let i = 0; i < len; ++i) {
    while ((c = nums[i]) !== i + 1 && nums[c - 1] !== c) {
      swap(nums, c - 1, i)
    }
  }
  for (let i = 0; i < len; ++i) {
    if (nums[i] !== i + 1) res.push(nums[i])
  }
  return res
}

module.exports = findDuplicates

