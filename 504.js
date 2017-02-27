/*
504. Base 7
Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].
*/

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  'use strict'
  let sign = 1
  if (num < 0) {
    sign = -1
    num = -num
  }
  const arr = []
  do {
    const digit = num % 7
    arr.push(digit)
    num = num / 7 | 0
  } while (num)
  if (sign === -1) arr.push('-')
  return arr.reverse().join('')
}

module.exports = convertToBase7
