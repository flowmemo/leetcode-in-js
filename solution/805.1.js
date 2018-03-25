/*
805. Split Array With Same Average
In a given integer array A, we must move every element of A to either list B or list C. (B and C initially start empty.)

Return true if and only if after such a move, it is possible that the average value of B is equal to the average value of C, and B and C are both non-empty.

Example :
Input:
[1,2,3,4,5,6,7,8]
Output: true
Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have the average of 4.5.

Note:
1. The length of A will be in the range [1, 30].
2. A[i] will be in the range of [0, 10000].
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var splitArraySameAverage = function (A) {
  'use strict'
  const n = A.length
  if (n <= 1) return false
  let sum = 0
  for (const c of A) sum += c
  const v = Array(n)

  // average(A) == average(B) == average(C)
  // A[i] -= average(A), for i = 0...n
  // find sum(subset(A)) == 0
  // is equal to
  // v[i] = A[i] * n  - sum(A)
  // find sum(subset(v)) == 0
  for (let i = 0; i < n; ++i) {
    v[i] = A[i] * n - sum
  }

  const k = n >> 1

  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < k; ++i) sum1 += v[i]
  for (let i = k; i < n; ++i) sum2 += v[i]
  if (sum1 === 0 || sum2 === 0) return true
  const mt1 = Object.create(null)
  const mt2 = Object.create(null)

  function dfs (p, n, csum, mt) {
    if (p === n) {
      mt[csum] = (mt[csum] || 0) + 1
      return
    }
    dfs(p + 1, n, csum + v[p], mt)
    dfs(p + 1, n, csum, mt)
  }
  dfs(0, k, 0, mt1)
  dfs(k, n, 0, mt2)
  mt1[0]--
  mt1[sum1]--
  mt2[0]--
  mt2[sum2]--
  if (mt1[0] || mt2[0]) return true
  for (const c in mt1) {
    if (mt1[c] && mt2[-c]) return true
  }
  return false
}

module.exports = splitArraySameAverage
