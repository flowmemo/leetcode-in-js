/*
12. Integer to Roman
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const s1 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  const s2 = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  const s3 = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const s4 = ['', 'M', 'MM', 'MMM']
  return s4[num / 1000 | 0] + s3[(num % 1000) / 100 | 0] + s2[(num % 100) / 10 | 0] + s1[num % 10]
}

module.exports = intToRoman
