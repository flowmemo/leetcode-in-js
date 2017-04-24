/*
264. Ugly Number II
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number, and n does not exceed 1690.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  'use strict'
  const v = Array(n)
  v[0] = 1

  let i = 0
  let j = 0
  let k = 0
  for (let p = 1; p < n; ++p) {
    const cur = Math.min(v[i] * 2, v[j] * 3, v[k] * 5)
    v[p] = cur
    if (cur === v[i] * 2) i++
    if (cur === v[j] * 3) j++
    if (cur === v[k] * 5) k++
  }

  return v[n - 1]
}

module.exports = nthUglyNumber
