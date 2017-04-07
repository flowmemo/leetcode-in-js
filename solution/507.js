/*
507. Perfect Number
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000. (1e8)
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (n) {
  'use strict'
  if (n <= 1) return false
  let sum = 1
  for (let i = 2; i < n; ++i) {
    const j = n / i | 0
    if (i >= j) break
    if (i * j === n) {
      sum += i + j
      if (sum > n) return false
    }
  }

  return sum === n
}

module.exports = checkPerfectNumber
