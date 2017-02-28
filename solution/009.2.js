/*
9. Palindrome Number
Determine whether an integer is a palindrome. Do this without extra space.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  let width = 1
  let base = 1
  while (x / base >= 10) {
    base *= 10
    ++width
  }
  let count = 0
  let half1 = 0
  let half2 = 0
  while (count++ < (width >> 1)) {
    let digi = x % 10
    half1 = half1 * 10 + digi
    x = x / 10 | 0
  }
  if (width % 2) half2 = x / 10 | 0
  else half2 = x
  return half1 === half2
}

module.exports = isPalindrome
