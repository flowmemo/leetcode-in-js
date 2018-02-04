/*
166. Fraction to Recurring Decimal
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

For example,

    Given numerator = 1, denominator = 2, return "0.5".
    Given numerator = 2, denominator = 1, return "2".
    Given numerator = 2, denominator = 3, return "0.(6)".

*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (num, de) {
  'use strict'
  if ((num % de) === 0) return '' + num / de
  const intpart = (num / de).toFixed(2).split('.')[0]
  num = Math.abs(num)
  de = Math.abs(de)
  let rm = num % de

  const mp = new Map()
  let decimal = []

  while (rm) {
    if (mp.has(rm)) {
      decimal.splice(mp.get(rm), 0, '(')
      decimal.push(')')
      break
    }

    mp.set(rm, decimal.length)
    rm *= 10
    decimal.push(Math.floor(rm / de))
    rm = rm % de
  }

  return intpart + '.' + decimal.join('')
}

module.exports = fractionToDecimal
