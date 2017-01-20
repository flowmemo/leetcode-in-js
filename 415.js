/*
415. Add Strings
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  'use strict'
  num1 = Array.prototype.map.call(num1, c => +c)
  num2 = Array.prototype.map.call(num2, c => +c)
  if (num1.length < num2.length) [num1, num2] = [num2, num1]
  const n1 = num1.length
  const n2 = num2.length
  const n = Math.max(n1, n2) + 1
  const res = Array(n)
  let carry = 0
  let i = 1
  while (i <= n2) {
    let digit = num1[n1 - i] + num2[n2 - i] + carry
    carry = digit / 10 | 0
    digit = digit % 10
    res[n - i] = digit
    i++
  }

  while (i <= n1) {
    let digit = num1[n1 - i] + carry
    carry = digit / 10 | 0
    digit = digit % 10
    res[n - i] = digit
    i++
  }

  res[0] = carry

  let start = 0
  while (start < n && res[start] === 0) start++
  if (start === n) return '0'
  return res.slice(start, n).join('')
}

module.exports = addStrings
