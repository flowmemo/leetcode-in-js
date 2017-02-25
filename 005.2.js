/*
5. Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  'use strict'
  const len = s.length
  let rstart = 0
  let rstep = 0
  for (let i = 1; i < 2 * len; ++i) {
    let j = (i - 1) >> 1
    let k = i >> 1
    let [ts, tend] = maxP(s, j, k)
    if (tend - ts > rstep) {
      rstart = ts
      rstep = tend - ts
    }
  }

  return s.slice(rstart, rstart + rstep)
}

function maxP (s, j, k) {
  'use strict'
  const len = s.length
  while (j >= 0 && k < len) {
    if (s[j] !== s[k]) {
      break
    }
    --j
    ++k
  }

  return [j + 1, k]
}

module.exports = longestPalindrome
