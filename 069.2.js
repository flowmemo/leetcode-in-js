/*
69. Sqrt(x)
Implement int sqrt(int x).

Compute and return the square root of x.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // Newton's method
  if (x <= 1) return x
  let res = x
  while (res > x / res) {
    res = x / res + (res - x / res) / 2 | 0
  }
  return res
}

module.exports = mySqrt
