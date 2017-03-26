/*
477. Total Hamming Distance
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Now your job is to find the total Hamming distance between all pairs of the given numbers.

Example:
Input: 4, 14, 2

Output: 6

Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case). So the answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
Note:
Elements of the given array are in the range of 0 to 10^9
Length of the array will not exceed 10^4.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  'use strict'
  const n = nums.length
  const ct = Array(32).fill(0)
  for (let c of nums) {
    let i = 0
    while (c) {
      if (c & 1) ct[i]++
      i++
      c >>>= 1
    }
  }
  let ret = 0
  for (let c of ct) ret += c * (n - c)
  return ret
}

module.exports = totalHammingDistance
