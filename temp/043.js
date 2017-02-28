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
  const len1 = num1.length
  const len2 = num2.length
  const len3 = len1 + len2
  const v = Array(len3).fill(0)
  for (let i = len1 - 1; i >= 0; --i) {
    let ri = len3 - (len1 - i)
    let carry = 0
    for (let j = len2 - 1; j >= 0; --j, --ri) {
      let r = +num1[i] * +num2[j] + +v[ri] + carry
      carry = r / 10 | 0
      v[ri] = +r % 10
    }
    v[ri] += carry
  }
  let i = 0
  while (i < len3 && v[i] === 0) ++i
  if (i === len3) return '0'
  return v.slice(i).join('')
}

module.exports = multiply
