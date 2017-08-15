/*
659. Split Array into Consecutive Subsequences
You are given an integer array sorted in ascending order (may contain duplicates), you need to split them into several subsequences, where each subsequences consist of at least 3 consecutive integers. Return whether you can make such a split.

Example 1:
Input: [1,2,3,3,4,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3
3, 4, 5
Example 2:
Input: [1,2,3,3,4,4,5,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3, 4, 5
3, 4, 5
Example 3:
Input: [1,2,3,4,4,5]
Output: False
Note:
The length of the input is in range of [1, 10000]
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  'use strict'
  const count = Object.create(null)
  const tailCount = Object.create(null)
  for (const c of nums) {
    count[c] = tailCount[c - 1] = count[c + 1] = tailCount[c + 2] = 0
  }
  for (const c of nums) count[c]++
  for (const c of nums) {
    if (count[c]) {
      let pl = tailCount[c - 1]
      let maxcat = Math.min(pl, count[c])
      count[c] -= maxcat
      tailCount[c - 1] -= maxcat
      tailCount[c] += maxcat
      if (count[c + 1] >= count[c] && count[c + 2] >= count[c]) {
        count[c + 1] -= count[c]
        count[c + 2] -= count[c]
        tailCount[c + 2] += count[c]
        count[c] = 0
      }
      if (count[c]) return false
    }
  }
  return true
}

module.exports = isPossible
