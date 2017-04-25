/*
172. Factorial Trailing Zeroes
Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  'use strict'
  if (n < 5) return 0
  let ct = n / 5 | 0
  return ct + trailingZeroes(ct)
}

module.exports = trailingZeroes
