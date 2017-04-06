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
  // easy to understand
  'use strict'
  return getMax(height, 0, height.length - 1)
}

function getMax (v, l, r) {
  'use strict'
  if (l === r) return 0
  const current = Math.min(v[l], v[r]) * (r - l)
  if (v[l] < v[r]) return Math.max(current, getMax(v, l + 1, r))
  else return Math.max(current, getMax(v, l, r - 1))
}

module.exports = maxArea
