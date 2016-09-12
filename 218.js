/*
218. The Skyline Problem
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

![Figure A](https://leetcode.com/static/images/problemset/skyline1.jpg)
![Figure B]https://leetcode.com/static/images/problemset/skyline1.jpg)

 Buildings  Skyline Contour
The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

The output is a list of "key points" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].

Notes:

The number of buildings in any input list is guaranteed to be in the range [0, 10000].
The input list is already sorted in ascending order by the left x position Li.
The output list must be sorted by the x position.
There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...[2 3], [4 5], [12 7], ...]
*/

const PQ = require('./priority-queue.js')
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  // https://discuss.leetcode.com/post/41101

  const pq = new PQ(Infinity, (a, b) => b - a)
  const blen = buildings.length
  if (!blen) return []
  const critic = Array(blen * 2)
  for (let i = 0; i < blen; i++) {
    let b = buildings[i]
    critic[i * 2] = [b[0], b[2]]
    critic[i * 2 + 1] = [b[1], -b[2]]
  }
  critic.sort((a, b) => {
    if (a[0] - b[0]) return a[0] - b[0]
    return a[1] - b[1]
  })
  const res = []
  res.push(critic[0])

  pq.add(critic[0][1])
  for (let i = 1; i < 2 * blen; i++) {
    let [x, h] = critic[i]
    let top = pq.peek() || 0
    if (h > 0) {
      if (h > top) {
        let lastres = res[res.length - 1]
        if (lastres[0] === x) {
          lastres[1] = Math.max(lastres[1], h)
        } else res.push(critic[i])
      }
      pq.add(h)
    } else {
      if (-h === top) {
        pq.poll()
        let newtop = pq.peek() || 0
        let lastres = res[res.length - 1]
        if (lastres[0] === x) {
          lastres[1] = Math.min(lastres[1], newtop)
        } else res.push([x, newtop])
      } else {
        for (let j = 1; j < pq.arr.length; j++) {
          if (pq.arr[j] === -h) {
            pq.arr[j] = pq.arr[pq.arr.length - 1]
            pq.arr.length--
            pq.count--
            pq.sink(j)
            break
          }
        }
      }
    }
  }
  return res.filter((val, index) => {
    if (!index) return true
    return val[1] !== res[index - 1][1]
  })
}

let tc = [
  [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]],
  [],
  [[1, 2, 1]],
  [[1, 2, 1], [1, 2, 1]],
  [[1, 2, 1], [1, 2, 2], [1, 2, 3]],
  [[1, 2, 1], [2, 3, 2]],
  [[1, 2, 2], [2, 3, 1]],
  [[1, 2, 1], [2, 3, 1]],
  [[1, 3, 1], [2, 4, 1]]
]

let ans = [
  [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]],
  [],
  [[1, 1], [2, 0]],
  [[1, 1], [2, 0]],
  [[1, 3], [2, 0]],
  [[1, 1], [2, 2], [3, 0]],
  [[1, 2], [2, 1], [3, 0]],
  [[1, 1], [3, 0]],
  [[1, 1], [4, 0]]
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i].join()
  let r = getSkyline(tc[i]).join()
  console.log(a === r, a, r)
}
