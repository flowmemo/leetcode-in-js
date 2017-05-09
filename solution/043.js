/*
43. Multiply Strings
Given two numbers represented as strings, return multiplication of the numbers as a string.

Note:
The numbers can be arbitrarily large and are non-negative.
Converting the input string to integer is NOT allowed.
You should NOT use internal library such as BigInteger.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  'use strict'
  const n1 = num1.length
  const n2 = num2.length
  const n = n1 + n2
  num1 = Array.from(num1).map(r => +r)
  num2 = Array.from(num2).map(r => +r)
  let vn = Array(n).fill(0)
  let index = n - 1
  for (let i = n1 - 1; i >= 0; i--) {
    index = n - n1 + i
    for (let j = n2 - 1; j >= 0; j--, index--) {
      let cur = num1[i] * num2[j] + vn[index]
      vn[index] = cur % 10
      vn[index - 1] += (cur - vn[index]) / 10
    }
  }

  let start = 0
  while (start < n && vn[start] === 0) start++
  if (start === n) return '0'
  return vn.slice(start).join('')
}

module.exports = multiply
