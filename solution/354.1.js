/*
354. Russian Doll Envelopes
You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Example:
Given envelopes = [[5,4],[6,4],[6,7],[2,3]], the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
*/

/**
 * O(N^2)
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (v) {
  'use strict'
  v.sort((p1, p2) => p1[0] - p2[0])
  const n = v.length
  const dp = Array(n).fill(1)
  for (let i = 1; i < n; ++i) {
    const cp = v[i]
    const w = cp[0]
    const h = cp[1]
    for (let j = 0; j < i; ++j) {
      if (v[j][0] < w && v[j][1] < h && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1
      }
    }
  }

  let ret = 0
  for (let i = 0; i < n; ++i) {
    if (ret < dp[i]) ret = dp[i]
  }
  return ret
}

module.exports = maxEnvelopes
