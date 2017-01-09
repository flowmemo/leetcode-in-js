/*
120. Triangle
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:
Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
*/

/**
* @param {number[][]} triangle
* @return {number}
*/
var minimumTotal = function (triangle) {
  const len = triangle.length
  if (!len) return 0
  const v = [triangle[0][0]]
  let level = 2
  while (level <= len) {
    v.push(v[level - 2])
    for (let i = level - 1; i > 0; --i) {
      v[i] = Math.min(v[i], v[i - 1]) + triangle[level - 1][i]
    }
    v[0] += triangle[level - 1][0]
    level++
  }
  let res = v[0]
  for (let i = 0; i < len; ++i) res = Math.min(res, v[i])
  return res
}

module.exports = minimumTotal
