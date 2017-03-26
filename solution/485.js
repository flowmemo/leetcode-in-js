/*
485. Max Consecutive Ones
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  'use strict'
  let ret = 0
  let p = 0
  for (let c of nums) {
    if (c === 1) {
      p++
      ret = Math.max(p, ret)
    } else p = 0
  }

  return ret
}

module.exports = findMaxConsecutiveOnes
