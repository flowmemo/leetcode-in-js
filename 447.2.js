/*
447. Number of Boomerangs
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
*/
const dist = Array(500)
for (let i = 0; i < 500; ++i) dist[i] = Array(500)

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  'use strict'
  const n = points.length

  for (let i = 0; i < n; ++i) {
    const p10 = points[i][0]
    const p11 = points[i][1]
    for (let j = i; j < n; ++j) {
      const p20 = points[j][0]
      const p21 = points[j][1]
      const d = (p10 - p20) * (p10 - p20) +
        (p11 - p21) * (p11 - p21)
      dist[i][j] = dist[j][i] = d
    }
  }
  let res = 0
  for (let i = 0; i < n; ++i) {
    const v = dist[i]
    v.length = n
    v.sort((a, b) => a - b)
    v.length = 500
    let i1 = 1
    while (i1 < n) {
      let i2 = i1 + 1
      while (i2 < n && v[i2] === v[i1])++i2
      const d = i2 - i1
      res += d * (d - 1)
      i1 = i2
    }
  }
  return res
}

module.exports = numberOfBoomerangs
