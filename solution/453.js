/*
453. Minimum Moves to Equal Array Elements
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  'use strict'
  const n = nums.length
  if (!n) return 0
  let min = nums[0]
  for (const c of nums) min = Math.min(c, min)

  let ret = 0
  for (const c of nums) ret += c - min
  return ret
}

module.exports = minMoves
