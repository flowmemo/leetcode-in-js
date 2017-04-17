/*
506. Relative Ranks
Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  'use strict'
  const n = nums.length
  const nodes = Array(n)
  for (let i = 0; i < n; ++i) {
    nodes[i] = [nums[i], i]
  }

  nodes.sort((node1, node2) => node2[0] - node1[0])

  const rank = Array(n)
  const award = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
  for (let i = 0; i < n; ++i) {
    const node = nodes[i]
    if (i < 3) {
      rank[node[1]] = award[i]
    } else {
      rank[node[1]] = String(i + 1)
    }
  }

  return rank
}

module.exports = findRelativeRanks
