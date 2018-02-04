/*
60. Permutation Sequence
The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  'use strict'
  let ret = ''
  const used = Array(n)
  function findChar (n) {
    let i = 0
    let count = 0
    while (count < n) {
      if (!used[i]) count++
      ++i
    }
    used[i - 1] = true
    return i
  }
  k--
  while (n) {
    let order = k / factorial(n - 1) | 0
    let digit = findChar(order + 1)
    ret += digit
    k = k - order * factorial(n - 1)
    --n
  }
  return ret
}

function factorial (n) {
  'use strict'
  let r = 1
  while (n) {
    r *= n--
  }
  return r
}

module.exports = getPermutation
