/*
91. Decode Ways
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.
*/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s) return 0
  const valid = new Set()
  for (let i = 1; i <= 26; ++i) {
    valid.add('' + i)
  }

  const dp = Array(s.length + 1).fill(0)
  dp[0] = 1
  if (valid.has(s.slice(0, 1))) dp[1] = 1
  for (let i = 2; i <= s.length; ++i) {
    if (valid.has(s.slice(i - 1, i))) dp[i] += dp[i - 1]
    if (valid.has(s.slice(i - 2, i))) dp[i] += dp[i - 2]
  }
  return dp[s.length]
}

module.exports = numDecodings
