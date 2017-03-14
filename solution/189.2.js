/*
189. Rotate Array
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

[show hint]

Related problem: Reverse Words in a String II

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  'use strict'
  const n = nums.length
  k = ((k % n) + n) % n
  const m = gcd(k, n)
  for (let start = 0; start < m; ++start) {
    let pre = null
    for (let i = 0; i <= n / m; ++i) {
      let j = (start + i * k) % n
      ;[pre, nums[j]] = [nums[j], pre]
    }
  }
}

function gcd (a, b) {
  'use strict'
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}
module.exports = rotate

