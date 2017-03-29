/*
29. Divide Two Integers
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  'use strict'
  if (divisor === 1) return dividend

  let sign = 1
  if (dividend > 0) {
    dividend *= -1
    sign *= -1
  }

  if (divisor > 0) {
    divisor *= -1
    sign *= -1
  }

  return sign * divNeg(dividend, divisor)
}

function divNeg (d0, d1) {
  'use strict'

  const INT_MIN = 1 << 31
  const INT_MAX = ~INT_MIN
  if (d1 === 0) return INT_MAX
  if (d0 === 0) return 0
  if (d0 === INT_MIN && d1 === -1) return INT_MAX

  let base = d1
  let mask = 1
  while (base > d0 && base >= (d0 >> 1)) {
    base <<= 1
    mask <<= 1
  }
  let r = 0
  while (mask && d0) {
    if (d0 - base <= 0) {
      r += mask
      d0 -= base
    }
    mask >>= 1
    base >>= 1
  }
  return r
}

module.exports = divide
