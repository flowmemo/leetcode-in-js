/*
53. Maximum Subarray
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
* Divide and conquer approach.
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function (nums) {
  return helper(nums, 0, nums.length)
}

function helper (nums, start, end) {
  if (start === end) return nums[0]
  if (start + 1 === end) return nums[start]
  let mid = start + (end - start) / 2 | 0
  let lmax = helper(nums, start, mid)
  let rmax = helper(nums, mid + 1, end)
  let mrmax = 0
  let rpart = 0
  for (let i = mid + 1; i < end; ++i) {
    rpart += nums[i]
    mrmax = Math.max(mrmax, rpart)
  }
  let mlmax = 0
  let lpart = 0
  for (let i = mid - 1; i >= start; --i) {
    lpart += nums[i]
    mlmax = Math.max(mlmax, lpart)
  }
  return Math.max(lmax, rmax, nums[mid] + mrmax + mlmax)
}

module.exports = maxSubArray
