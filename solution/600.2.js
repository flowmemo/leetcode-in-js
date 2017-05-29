/*
600. Non-negative Integers without Consecutive Ones
Given a positive integer n, find the number of non-negative integers less than or equal to n, whose binary representations do NOT contain consecutive ones.

Example 1:
Input: 5
Output: 5
Explanation:
Here are the non-negative integers <= 5 with their corresponding binary representations:
0 : 0
1 : 1
2 : 10
3 : 11
4 : 100
5 : 101
Among them, only integer 3 disobeys the rule (two consecutive ones) and the other 5 satisfy the rule.
Note: 1 <= n <= 109
*/

/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function (n) {
  'use strict'
  const dp = Array(33)
  dp[0] = 1
  dp[1] = 2
  for (let i = 2; i <= 32; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  let offset = 32
  let pre = 0
  let ret = 0
  while (offset) {
    if ((1 << (offset - 1)) & n) {
      ret += dp[offset - 1]
      if (pre) {
        break
      }
    }
    pre = (1 << (offset - 1)) & n
    offset--
  }
  if (offset === 0) ret++
  return ret
}

module.exports = findIntegers
