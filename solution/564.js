/*
564. Find the Closest Palindrome
Given an integer n, find the closest integer (not including itself), which is a palindrome.

The 'closest' is defined as absolute difference minimized between two integers.

Example 1:
Input: "123"
Output: "121"
Note:
The input n is a positive integer represented by string, whose length will not exceed 18.
If there is a tie, return the smaller one as answer.
*/

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  'use strict'
  const cand = []
  const sl = n.length
  if (sl === 1) return String(+n - 1)

  // sl >= 2
  let cs = n.split('').map(c => +c)
  cand.push('9'.repeat(sl - 1))
  cand.push('1' + '0'.repeat(sl - 1) + '1')
  if (!isPalin(cs)) {
    cand.push(mirror(cs).join(''))
  }

  if (cs[((sl + 1) >> 1) - 1] < 9) {
    cs[((sl + 1) >> 1) - 1]++
    cand.push(mirror(cs).join(''))
    cs[((sl + 1) >> 1) - 1]--
  }

  if (cs[((sl + 1) >> 1) - 1] > 0) {
    cs[((sl + 1) >> 1) - 1]--
    cand.push(mirror(cs).join(''))
    cs[((sl + 1) >> 1) - 1]++
  }

  let ret = cand[0]
  for (let c of cand) {
    if (Math.abs(+c - +n) < Math.abs(+ret - +n)) {
      ret = c
    } else if (Math.abs(+c - +n) === Math.abs(+ret - +n)) {
      if (+c < +ret) ret = c
    }
  }

  return ret
}
function isPalin (s) {
  'use strict'
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i++] !== s[j--]) return false
  }
  return true
}
function mirror (s) {
  'use strict'
  let cs = s.slice()
  let i = 0
  let j = cs.length - 1
  while (i < j) {
    cs[j--] = cs[i++]
  }

  return cs
}

module.exports = nearestPalindromic
