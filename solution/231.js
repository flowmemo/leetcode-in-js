/*
231. Power of Two
Given an integer, write a function to determine if it is a power of two.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  'use strict'
  return (n > 0) && (n & (n - 1)) === 0
}

module.exports = isPowerOfTwo
