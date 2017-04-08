/*
539. Minimum Time Difference
Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.

Example 1:
Input: ["23:59","00:00"]
Output: 1
Note:
The number of time points in the given list is at least 2 and won't exceed 20000.
The input time is legal and ranges from 00:00 to 23:59.
*/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (v) {
  'use strict'
  v.sort()
  v.push(v[0])
  let ret = Infinity
  for (let i = 1; i < v.length; ++i) {
    ret = Math.min(ret, calc(v[i - 1], v[i]))
  }
  return ret
}

function calc (s1, s2) {
  'use strict'
  let t1 = +s1.slice(0, 2) * 60 + +s1.slice(3, 5)
  let t2 = +s2.slice(0, 2) * 60 + +s2.slice(3, 5)
  let d = (t1 - t2 + 24 * 60) % (24 * 60)
  return Math.min(d, 24 * 60 - d)
}

module.exports = findMinDifference
