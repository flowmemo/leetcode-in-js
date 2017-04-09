/*
202. Happy Number
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Credits:
Special thanks to @mithmatt and @ts for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  'use strict'
  // https://discuss.leetcode.com/post/14272
  // cycle detection
  let n2 = trans(n)
  while (n !== n2) {
    n = trans(n)
    n2 = trans(trans(n2))
  }
  return n === 1
}

function trans (n) {
  'use strict'
  let r = 0
  while (n) {
    r += (n % 10) * (n % 10)
    n = n / 10 | 0
  }
  return r
}
module.exports = isHappy
