/*
777. Swap Adjacent in LR String
In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", a move consists of either replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given the starting string start and the ending string end, return True if and only if there exists a sequence of moves to transform one string to the other.

Example:

Input: start = "RXXLRXRXL", end = "XRLXXRRLX"
Output: True
Explanation:
We can transform start to end following these steps:
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX

Note:
1. 1 <= len(start) = len(end) <= 10000.
2. Both start and end will only consist of characters in {'L', 'R', 'X'}.
*/

/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  'use strict'
  const n = start.length
  let s1 = ''
  let s2 = ''
  for (const c of start) if (c !== 'X') s1 += c
  for (const c of end) if (c !== 'X') s2 += c

  if (s1 !== s2) return false

  {
    let j = 0
    for (let i = 0; i < n; ++i) {
      if (start[i] === 'L') {
        while (j < n && end[j] !== 'L') j++
        if (i < j) return false
        j++
      }
    }
  }

  {
    let j = 0
    for (let i = 0; i < n; ++i) {
      if (start[i] === 'R') {
        while (j < n && end[j] !== 'R') j++
        if (i > j) return false
        j++
      }
    }
  }

  return true
}

module.exports = canTransform
