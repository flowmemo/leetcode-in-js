/*
335. Self Crossing
You are given an array x of n positive numbers. You start at point (0,0) and moves x[0] metres to the north, then x[1] metres to the west, x[2] metres to the south, x[3] metres to the east and so on. In other words, after each move your direction changes counter-clockwise.

Write a one-pass algorithm with O(1) extra space to determine, if your path crosses itself, or not.

Example 1:
Given x = [2, 1, 1, 2],
┌───┐
│   │
└───┼──>
    │

Return true (self crossing)
Example 2:
Given x = [1, 2, 3, 4],
┌──────┐
│      │
│
│
└────────────>

Return false (not self crossing)
Example 3:
Given x = [1, 1, 1, 1],
┌───┐
│   │
└───┼>

Return true (self crossing)
*/

/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function (x) {
  'use strict'
  const len = x.length
  if (len <= 3) return false
  const ver = [x[0], x[2]]
  const hor = [0, x[1]]
  const pre = [ver, hor]
  let zoom
  if (x[2] > x[0]) zoom = 1
  else zoom = -1
  let index = 3
  while (index < len) {
    let cur = x[index]
    let parallel = pre[index % 2]
    let orthogonal = pre[(index + 1) % 2]
    if (zoom < 0) {
      if (cur >= parallel.pop()) return true
    } else {
      if (cur <= parallel[parallel.length - 1]) {
        zoom = -1
        if (cur >= parallel.pop() - parallel.pop()) {
          orthogonal.push(orthogonal.pop() - orthogonal.pop())
        }
      }
    }
    parallel.push(cur)
    if (parallel.length > 2) parallel.shift()
    index++
  }
  return false
}

let tc = [
  [1, 1, 2, 1, 1],
  [2, 1, 1, 2],
  [1, 2, 3, 4],
  [1, 1, 1, 1],
  [1, 2, 3, 4, 1, 3],
  [1, 2, 3, 4, 2, 2],
  [1, 2, 3, 4, 3, 1, 2],
  [],
  [1],
  [1, 2],
  [1, 2, 3]

]

let ans = [
  true, true, false, true, false, true, false, false, false, false, false
]
for (let i = 0; i < ans.length; i++) {
  let a = ans[i]
  let r = isSelfCrossing(tc[i])
  console.log(a === r, a, r)
}
 // console.log(isSelfCrossing(tc[0]))
