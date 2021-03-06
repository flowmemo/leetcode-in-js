/*
7. Reverse Integer
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  'use strict'
  let sign = 1
  if (x < 0) {
    sign = -1
    x = -x
  }
  let rs = sign * parseInt(String(x).split('').reverse().join(''), 10)
  if (rs < 1 << 31 || rs > ~(1 << 31)) return 0
  return rs
}

module.exports = reverse
