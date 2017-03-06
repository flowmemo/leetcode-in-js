/*
201. Bitwise AND of Numbers Range
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.

Credits:
Special thanks to @amrsaqr for adding this problem and creating all test cases.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  'use strict'
  const d = n - m
  let mask = 0
  while ((mask & d) !== d) mask = mask * 2 + 1
  mask = ~mask
  return mask & m & n
}

module.exports = rangeBitwiseAnd
