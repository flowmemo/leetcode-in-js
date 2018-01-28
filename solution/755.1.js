/*
775. Global and Local Inversions
We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.

The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].

The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].

Return true if and only if the number of global inversions is equal to the number of local inversions.

Example 1:

Input: A = [1,0,2]
Output: true
Explanation: There is 1 global inversion, and 1 local inversion.

Example 2:

Input: A = [1,2,0]
Output: false
Explanation: There are 2 global inversions, and 1 local inversion.

Note:

    A will be a permutation of [0, 1, ..., A.length - 1].
    A will have length in range [1, 5000].
    The time limit for this problem has been reduced.
*/

const arr = Array(5000)
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isIdealPermutation = function (A) {
  'use strict'
  return glb(A) === loc(A)
}

function merge (v, l, r) {
  'use strict'
  if (l + 1 >= r) return 0
  const m = (l + r) >> 1
  let ret = 0
  let k = l
  let i = l
  let j = m
  ret += merge(v, l, m)
  ret += merge(v, m, r)
  while (k < r) {
    if (j < r && (i === m || v[i] > v[j])) {
      ret += m - i
      arr[k++] = v[j++]
    } else arr[k++] = v[i++]
  }
  for (let i = l; i < r; ++i) {
    v[i] = arr[i]
  }
  return ret
}

function glb (vv) {
  'use strict'
  const v = Array.from(vv)
  return merge(v, 0, v.length)
}

function loc (v) {
  'use strict'
  const n = v.length
  let ret = 0
  for (let i = 0; i + 1 < n; ++i) {
    if (v[i] > v[i + 1]) ret++
  }
  return ret
}

module.exports = isIdealPermutation
