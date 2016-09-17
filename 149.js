/*
149. Max Points on a Line
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
*/

/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const len = points.length
  if (!len) return 0
  let max = 1
  for (let i = 0; i < len - 1; i++) {
    const map = Object.create(null)
    let same = 1
    const p1 = points[i]
    for (let j = i + 1; j < len; j++) {
      const p2 = points[j]
      if (p1.x === p2.x) {
        if (p1.y === p2.y) same++
        else {
          map[Infinity] = (map[Infinity] || 0) + 1
        }
      } else {
        const c = (p1.y - p2.y) / (p1.x - p2.x)
        map[c] = (map[c] || 0) + 1
      }
    }
    max = Math.max(max, same)
    for (let key of Object.keys(map)) {
      max = Math.max(max, map[key] + same)
    }
  }
  return max
}

let tc = [
  [],
  [new Point(0, 0)],
  [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)],
  [new Point(0, 0), new Point(1, 1), new Point(2, 2)]
]
let ans = [
  0, 1, 4, 3
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = maxPoints(tc[i])
  console.log(a === r, a, r)
}

function Point (x, y) {
  this.x = x
  this.y = y
}

