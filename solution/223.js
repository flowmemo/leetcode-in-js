/*
223. Rectangle Area
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area
![](https://leetcode.com/static/images/problemset/rectangle_area.png)
Assume that the total area is never beyond the maximum possible value of int.

Credits:
Special thanks to @mithmatt for adding this problem, creating the above image and all test cases.
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  'use strict'
  const all = (C - A) * (D - B) + (G - E) * (H - F)
  let ux = Math.min(C, G)
  let lx = Math.max(A, E)
  if (ux <= lx) return all
  let uy = Math.min(D, H)
  let ly = Math.max(B, F)
  if (uy <= ly) return all
  return all - (uy - ly) * (ux - lx)
}

module.exports = computeArea
