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
  // find the last integer `res` than res * res <= x
  // std::upper_bound
  if (x <= 1) return x
  let left = 1
  let right = x
  while (left < right) {
    const mid = left + (right - left) / 2 | 0
    if (mid > (x / mid | 0)) right = mid
    else left = mid + 1
  }
  return right - 1
}

module.exports = mySqrt
