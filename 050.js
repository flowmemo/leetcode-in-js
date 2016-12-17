/*
50. Pow(x, n)
Implement pow(x, n).
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let res = 1
  if (n < 0) {
    x = 1 / x
    res = x
    n = ~n // avoid overflow in int32
  }
  while (n) {
    if (n & 1) res *= x
    x *= x
    n >>= 1
  }
  return res
}

module.exports = myPow
