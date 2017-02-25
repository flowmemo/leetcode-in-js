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
  const n = s.length
  if (!n) return ''
  const dp = Array(n).fill(true)
  let range = [0, 1]
  let mlen = 1
  for (let i = 1; i < n; ++i) {
    const c = s[i]
    for (let j = 0; j < i; ++j) {
      if (c === s[j]) dp[j] = dp[j + 1]
      else dp[j] = false
      if (dp[j] && i - j + 1 > mlen) {
        mlen = i - j + 1
        range = [j, i + 1]
      }
    }
  }
  return s.slice(...range)
}

module.exports = longestPalindrome
