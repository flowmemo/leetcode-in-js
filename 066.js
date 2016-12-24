/*
66. Plus One
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1
  for (let i = digits.length - 1; i >= 0; --i) {
    let digit = (digits[i] + carry) % 10
    carry = (digits[i] + carry) / 10 | 0
    digits[i] = digit
  }
  if (carry) digits.splice(0, 0, carry)
  return digits
}

module.exports = plusOne
