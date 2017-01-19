/*
421. Maximum XOR of Two Numbers in an Array
Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Example:

Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.
*/

class Node {
  constructor () {
    this.left = null
    this.right = null
  }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  'use strict'
  let res = 0
  const root = new Node()
  for (const c of nums) {
    // insert number
    let node = root
    for (let i = (1 << 31); i; i >>>= 1) {
      const cbit = c & i
      if (cbit) {
        if (!node.right) node.right = new Node()
        node = node.right
      } else {
        if (!node.left) node.left = new Node()
        node = node.left
      }
    }

    // find reverse
    let rc = ~c
    node = root
    let r = 0
    for (let i = (1 << 31); i; i >>>= 1) {
      const cbit = rc & i
      if (cbit) {
        if (node.right) {
          r += i
          node = node.right
        } else {
          node = node.left
        }
      } else {
        if (node.left) {
          r += i
          node = node.left
        } else {
          node = node.right
        }
      }
    }

    res = Math.max(res, r)
  }
  return res
}

module.exports = findMaximumXOR
