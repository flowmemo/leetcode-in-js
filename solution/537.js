/*
537. Complex Number Multiplication
Given two strings representing two complex numbers.

You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

Example 1:
Input: "1+1i", "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
Example 2:
Input: "1+-1i", "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
Note:

The input strings will not have extra blank.
The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  'use strict'
  let n1 = s2cn(a)
  let n2 = s2cn(b)
  const r1 = n1[0] * n2[0] - n1[1] * n2[1]
  const r2 = n1[0] * n2[1] + n1[1] * n2[0]
  return '' + r1 + '+' + r2 + 'i'
}

function s2cn (s) {
  'use strict'
  let p1 = s.indexOf('+')
  let n1 = +s.slice(0, p1)
  let n2 = +s.slice(p1 + 1, s.length - 1)
  return [n1, n2]
}

module.exports = complexNumberMultiply
