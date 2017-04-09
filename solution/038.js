/*
38. Count and Say
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*/

/**
* @param {number} n
* @return {string}
*/
var countAndSay = function (n) {
  'use strict'
  let s = '1'
  while (--n) s = helper(s)
  return s
}

function helper (s) {
  'use strict'
  let res = ''
  let ccount = 1
  for (let i = 1; i < s.length; ++i) {
    if (s[i] !== s[i - 1]) {
      res += ccount + s[i - 1]
      ccount = 1
    } else ++ccount
  }
  res += ccount + s[s.length - 1]
  return res
}

module.exports = countAndSay
