/*
56. Merge Intervals
Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
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
 * @return {Interval[]}
 */
var merge = function (intervals) {
  'use strict'
  const n = intervals.length
  if (!n) return []
  intervals.sort((a, b) => a.start - b.start)
  const res = []
  let i = 0
  res.push(intervals[0])
  let last = intervals[0]
  while (++i < n) {
    const p = intervals[i]
    if (p.start <= last.end) {
      last.end = Math.max(last.end, p.end)
    } else {
      res.push(p)
      last = p
    }
  }
  return res
}

module.exports = merge
