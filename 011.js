/*
11. Container With Most Water
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  'use strict'
  const len = height.length
  let i = 0
  let j = len - 1
  let res = 0
  while (i < j) {
    if (i > 0 && height[i - 1] >= height[i]) {
      ++i
    } else if (j < len - 1 && height[j] <= height[j + 1]) {
      --j
    } else {
      res = Math.max(Math.min(height[i], height[j]) * (j - i), res)
      if (height[i] < height[j]) ++i
      else --j
    }
  }
  return res
}

let tc = [
  [1, 2, 3, 4]
]
let ans = [
  4
]
for (let i = 0; i < tc.length; ++i) {
  let a = ans[i]
  let r = maxArea(tc[i])
  console.log(a === r, a, r)
}
