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
  let count5 = 0
  let base = 5
  while (base <= n) {
    count5 += n / base | 0
    n = n / base | 0
  }
  return count5
}

module.exports = trailingZeroes
