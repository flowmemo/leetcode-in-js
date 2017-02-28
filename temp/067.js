/*
67. Add Binary
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const len1 = a.length
  const len2 = b.length
  let i = len1 - 1
  let j = len2 - 1
  const arr = Array(Math.max(len1, len2))
  let ri = arr.length - 1
  let carry = 0
  while (ri >= 0) {
    let digit = +(a[i] | 0) + +(b[j] | 0) + carry
    carry = digit >> 1
    arr[ri] = digit & 1
    --ri
    --i
    --j
  }
  if (carry) return '1' + arr.join('')
  return arr.join('')
}

module.exports = addBinary
