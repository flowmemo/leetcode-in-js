/*
567. Permutation in String
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:
Input:s1 = "ab" s2 = "eidbaooo"
Output:True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False
Note:
The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  'use strict'
  const n1 = s1.length
  const n2 = s2.length
  if (n1 > n2) return false
  const base = 'a'.charCodeAt(0)
  const a1 = Array(n1)
  const a2 = Array(n2)
  for (let i = 0; i < n1; ++i) {
    a1[i] = s1.charCodeAt(i) - base
  }
  for (let i = 0; i < n2; ++i) {
    a2[i] = s2.charCodeAt(i) - base
  }
  const target = Array(26).fill(0)
  for (const c of a1) target[c]++
  const ct = Array(26).fill(0)
  for (let i = 0; i < n1; ++i) {
    ct[a2[i]]++
  }
  if (check(target, ct)) return true
  for (let i = n1; i < n2; ++i) {
    ct[a2[i - n1]]--
    ct[a2[i]]++
    if (check(target, ct)) return true
  }
  return false
}

function check (a, b) {
  'use strict'
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }

  return true
}

module.exports = checkInclusion
