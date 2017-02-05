/*
424. Longest Repeating Character Replacement
Given a string that consists of only uppercase English letters, you can replace any letter in the string with another letter at most k times. Find the length of a longest substring containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:

Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  'use strict'
  s = string2intArray(s, 'A'.charCodeAt(0))
  const ccount = Array(26).fill(0)
  let res = 0
  let start = 0
  let cur = 0
  let maxDup = 0
  while (cur < s.length) {
    const c = s[cur]
    ++ccount[c]
    maxDup = Math.max(maxDup, ccount[c])
    // notice that maxDup will never decrease.
    if (cur + 1 - start - maxDup > k) {
      --ccount[s[start++]]
    }
    ++cur
    // res = Math.max(res, cur - start)
    res = cur - start
  }
  return res
}

function string2intArray (s, base) {
  'use strict'
  base = base || 0
  const res = Array(s.length)
  for (let i = 0; i < s.length; ++i) {
    res[i] = s.charCodeAt(i) - base
  }
  return res
}

module.exports = characterReplacement
