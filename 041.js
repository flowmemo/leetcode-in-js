/*
41. First Missing Positive
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; ++i) {
    while (1) {
      let v = nums[i]
      if (v - 1 !== i && v - 1 >= 0 && v - 1 < n && v !== nums[v - 1]) {
        nums[i] = nums[v - 1]
        nums[v - 1] = v
      } else break
    }
  }

  let i = 0
  while (i < n && nums[i] - 1 === i) ++i
  return i + 1
}

module.exports = firstMissingPositive
