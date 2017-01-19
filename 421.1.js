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
  insert (a, i) {
    if (i === 32) return
    const cbit = 1 << (31 - i)
    if (a & cbit) {
      if (!this.right) this.right = new Node()
      this.right.insert(a, i + 1)
    } else {
      if (!this.left) this.left = new Node()
      this.left.insert(a, i + 1)
    }
  }
  find (a, i) {
    if (i === 32) return 0
    const cbit = 1 << (31 - i)
    if (a & cbit) {
      if (this.right) return cbit + this.right.find(a, i + 1)
      return this.left.find(a, i + 1)
    } else {
      if (this.left) return cbit + this.left.find(a, i + 1)
      return this.right.find(a, i + 1)
    }
  }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  'use strict'
  let r = 0
  const root = new Node()
  for (const c of nums) {
    root.insert(c, 0)
    r = Math.max(r, root.find(~c, 0))
  }
  return r
}

module.exports = findMaximumXOR
