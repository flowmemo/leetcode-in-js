/*
664. Strange Printer 
There is a strange printer with the following two special requirements:

1. The printer can only print a sequence of the same character each time.
2. At each turn, the printer can print new characters starting from and ending at any places, and will cover the original existing characters.

Given a string consists of lower English letters only, your job is to count the minimum number of turns the printer needed in order to print it.

Example 1:

Input: "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".

Example 2:

Input: "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.

Hint: Length of the given string will not exceed 100.
*/

/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  'use strict'
  const n = s.length
  const dp = Array(n + 1).fill().map(() => Array(n + 1))

  for (let l = n; l >= 0; l--) {
    for (let r = l; r <= n; ++r) {
      if (l === r) {
        dp[l][r] = 0
        continue
      }
      let ret = dp[l][r - 1] + 1
      for (let k = l; k + 1 < r; ++k) {
        if (s[k] === s[r - 1]) {
          ret = Math.min(ret, dp[l][k] + dp[k + 1][r])
        }
      }

      dp[l][r] = ret
    }
  }

  return dp[0][n]
}

module.exports = strangePrinter
