/*
435. Non-overlapping Intervals
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note:
You may assume the interval's end point is always bigger than its start point.
Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.
Example 1:
Input: [ [1,2], [2,3], [3,4], [1,3] ]

Output: 1

Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
Example 2:
Input: [ [1,2], [1,2], [1,2] ]

Output: 2

Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
Example 3:
Input: [ [1,2], [2,3] ]

Output: 0

Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  'use strict'
  const n = intervals.length
  if (!n) return 0
  intervals.sort((a, b) => a.end - b.end || a.start - a.start)
  let res = n
  const dp = Array(n + 1).fill(0)
  for (let i = 1; i <= n; ++i) {
    const cur = intervals[i - 1]
    let j = i - 1
    while (j >= 0) {
      if (j === 0 || cur.start >= intervals[j - 1].end) dp[i] = Math.max(dp[i], dp[j] + 1)
      --j
    }
    res = Math.min(res, n - dp[i])
  }
  return res
}

module.exports = eraseOverlapIntervals
