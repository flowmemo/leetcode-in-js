/*
70. Climbing Stairs
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  'use strict'
  let p1 = 0
  let p2 = 1
  let i = 0
  while (i < n) {
    ;[p1, p2] = [p2, p1 + p2]
    i++
  }
  return p2
}

module.exports = climbStairs
