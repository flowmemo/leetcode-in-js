/*
423. Reconstruct Original Digits from English
Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

Note:
Input contains only lowercase English letters.
Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
Input length is less than 50,000.
Example 1:
Input: "owoztneoer"

Output: "012"
Example 2:
Input: "fviefuro"

Output: "45"
*/

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  'use strict'
  const ns = string2intArray(s)
  const dict = ['zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'].map(string2intArray)
  const numcount = Array(10).fill(0)
  const ccount = Array(26).fill(0)
  for (const c of ns) ccount[c]++
  // z -> zero, then delete all counts from chars of zero
  // x -> six, then delete all counts from chars of six
  // ...
  const order = string2intArray('zxwugrfovi')
  const nums = '0624835179'.split('').map(c => +c)
  for (let i = 0; i < 10; ++i) {
    const key = order[i]
    const n = nums[i]
    const count = ccount[key]
    numcount[n] = count
    for (const c of dict[n]) {
      ccount[c] -= count
    }
  }

  let res = ''
  for (let i = 0; i < 10; ++i) {
    res += ('' + i).repeat(numcount[i])
  }
  return res
}

function string2intArray (s) {
  'use strict'
  const base = 'a'.charCodeAt(0)
  const res = Array(s.length)
  for (let i = 0; i < s.length; ++i) {
    res[i] = s.charCodeAt(i) - base
  }
  return res
}

module.exports = originalDigits
