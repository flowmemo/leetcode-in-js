/*
556. Next Greater Element III
Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive 32-bit integer exists, you need to return -1.

Example 1:
Input: 12
Output: 21
Example 2:
Input: 21
Output: -1
*/

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  'use strict'
  const s = String(n).split('')

  let i = s.length - 2
  while (i >= 0 && s[i] >= s[i + 1])--i
  if (i === -1) return -1

  let j = s.length - 1
  while (s[j] <= s[i])--j
  swap(s, i, j)
  reverse(s, i + 1, s.length)
  const rs = s.join('')
  const maxStr = String(~(1 << 31))
  if (rs.length >= maxStr.length && rs > maxStr) return -1
  return parseInt(rs, 10)
}

module.exports = nextGreaterElement

function swap (arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function reverse (arr, first, last) {
  let right = last - 1
  while (first < right) {
    const tmp = arr[first]
    arr[first] = arr[right]
    arr[right] = tmp
    ++first
    --right
  }
}
