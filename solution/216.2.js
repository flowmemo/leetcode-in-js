/*
216. Combination Sum III
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]
Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  'use strict'
  return helper(k, n, 9)
}

function helper (k, n, upper) {
  'use strict'
  let res = []
  if (k * 1 > n || k * upper < n) return res
  if (k === 1) {
    if (upper >= n) return [[n]]
    else return res
  }

  for (let i = k; i <= upper; ++i) {
    let r = helper(k - 1, n - i, i - 1)
    for (let rr of r) {
      rr.push(i)
      res.push(rr)
    }
  }
  return res
}

module.exports = combinationSum3
