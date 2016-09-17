/*
53. Maximum Subarray
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Maximum subarray problem
  const len = nums.length
  if (len === 1) return nums[0]
  let minsum = 0
  let sum = 0
  let max = nums[0]
  for (let i = 0; i < len; i++) {
    sum += nums[i]
    if (sum - minsum > max) max = sum - minsum
    if (sum < minsum) minsum = sum
  }
  return max
}

let tc = [
  [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  [1],
  [-1],
  [-3, 1],
  [-2, -1],
  [1, 2]
]

let ans = [
  6, 1, -1, 1, -1, 3
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = maxSubArray(tc[i])
  console.log(a === r, a, r)
}
