/*
473. Matchsticks to Square
Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, please find out a way you can make one square by using up all those matchsticks. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

Your input will be several matchsticks the girl has, represented with their stick length. Your output will either be true or false, to represent whether you could make one square using all the matchsticks the little match girl has.

Example 1:
Input: [1,1,2,2,2]
Output: true

Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
Example 2:
Input: [3,3,3,3,4]
Output: false

Explanation: You cannot find a way to form a square with all the matchsticks.
Note:
The length sum of the given matchsticks is in the range of 0 to 10^9.
The length of the given matchstick array will not exceed 15.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function (nums) {
  'use strict'
  const n = nums.length
  if (n < 4) return false

  let sum = 0
  for (let n of nums) sum += n
  if (sum % 4) return false
  const m = sum / 4
  nums.sort((a, b) => b - a)
  return dfs(0, nums, [0, 0, 0, 0], m)
}

function dfs (k, nums, rsum, m) {
  'use strict'
  if (k === nums.length) {
    if (rsum[0] === m && rsum[1] === m && rsum[2] === m && rsum[3] === m) return true
    return false
  }

  for (let i = 0; i < 4; ++i) {
    if (rsum[i] + nums[k] <= m) {
      rsum[i] += nums[k]
      if (dfs(k + 1, nums, rsum, m)) return true
      rsum[i] -= nums[k]
    }
  }

  return false
}

module.exports = makesquare
