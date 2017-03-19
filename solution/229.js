/*
229. Majority Element II
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.

Hint:

How many majority elements could it possibly have?
Do you have a better hint? Suggest it!
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  'use strict'
  if (nums.length <= 1) return nums
  let n1
  let n2
  let c1 = 0
  let c2 = 0

  for (let num of nums) {
    if (num === n1) c1++
    else if (num === n2) c2++
    else if (c1 === 0) {
      n1 = num
      c1 = 1
    } else if (c2 === 0) {
      n2 = num
      c2 = 1
    } else {
      c1--
      c2--
    }
  }

  c1 = c2 = 0
  for (let num of nums) {
    if (num === n1) c1++
    else if (num === n2) c2++
  }
  let res = []
  if (c1 > Math.floor(nums.length / 3)) res.push(n1)
  if (c2 > Math.floor(nums.length / 3)) res.push(n2)
  return res
}

module.exports = majorityElement
