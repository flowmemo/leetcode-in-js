/*
343. Integer Break
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: You may assume that n is not less than 2 and not larger than 58.

Hint:

There is a simple O(n) solution to this problem.
You may check the breaking results of n ranging from 7 to 10 to discover the regularities.
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  'use strict'
  if (n === 2) return 1
  if (n === 3) return 2
  let mod = n % 3

  let div = Math.floor(n / 3)
  if (mod === 0) return Math.pow(3, div)
  if (mod === 1) return Math.pow(3, div - 1) * 4
  else return Math.pow(3, div) * mod
}

module.exports = integerBreak
