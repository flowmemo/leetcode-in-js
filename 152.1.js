/*
152. Maximum Product Subarray
Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const len = nums.length
  let res = nums[0]
  let maxRes = 1
  let minRes = 1
  for (let i = 0; i < len; ++i) {
    const c = nums[i]
    if (c > 0) {
      maxRes = Math.max(c, maxRes * c)
      minRes = Math.min(c, minRes * c)
    } else {
      const nmaxRes = Math.max(c, minRes * c)
      minRes = Math.min(c, maxRes * c)
      maxRes = nmaxRes
    }
    res = Math.max(res, maxRes)
  }
  return res
}

module.exports = maxProduct
