/*
354. Russian Doll Envelopes
You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Example:
Given envelopes = [[5,4],[6,4],[6,7],[2,3]], the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
*/

/**
 * O(N*logN)
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (v) {
  'use strict'
  v.sort((p1, p2) => p1[0] - p2[0] || p2[1] - p1[1])

  const vv = []
  for (const p of v) {
    const c = p[1]

    // lower bound
    let l = 0
    let r = vv.length

    while (l < r) {
      const m = l + ((r - l) >> 1)
      if (vv[m] < c) {
        l = m + 1
      } else {
        r = m
      }
    }

    if (l === vv.length) vv.push(c)
    else if (vv[l] !== c) vv[l] = c
  }

  return vv.length
}

module.exports = maxEnvelopes
