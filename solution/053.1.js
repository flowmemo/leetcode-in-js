/*
53. Maximum Subarray
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * DP
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  'use strict'
  const n = nums.length
  let pre = nums[0]
  let res = pre
  for (let i = 1; i < n; ++i) {
    pre = Math.max(pre, 0) + nums[i]
    res = Math.max(res, pre)
  }
  return res
}

module.exports = maxSubArray
