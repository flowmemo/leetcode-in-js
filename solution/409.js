/*
409. Longest Palindrome
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  'use strict'
  const map = Object.create(null)
  for (let c of s) map[c] = (map[c] || 0) + 1
  let center = 0
  let ret = 0
  for (let key in map) {
    ret += (map[key] & (~1))
    if (map[key] % 2) center = 1
  }
  return ret + center
}

module.exports = longestPalindrome
