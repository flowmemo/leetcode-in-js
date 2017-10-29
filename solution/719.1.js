/*
719. Find K-th Smallest Pair Distance
Given an integer array, return the k-th smallest distance among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B.

Example 1:

Input:
nums = [1,3,1]
k = 1
Output: 0
Explanation:
Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.

Note:

    2 <= len(nums) <= 10000.
    0 <= nums[i] < 1000000.
    1 <= k <= len(nums) * (len(nums) - 1) / 2.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  'use strict'
  nums.sort((a, b) => a - b)
  let l = 0
  let r = 1000000
  let ret = 0
  while (l <= r) {
    let x = (l + r) >> 1
    let ct = countSmall(x, nums)

    if (ct > k - 1) {
      r = x - 1
    } else {
      ret = x
      l = x + 1
    }
  }

  return ret
}

function countSmall (x, v) {
  'use strict'
  let j = 0
  let ret = 0
  const n = v.length
  for (let i = 0; i < n; ++i) {
    while (j < n && v[j] - v[i] < x) j++
    ret += j - i - 1
  }

  return ret
}

module.exports = smallestDistancePair
