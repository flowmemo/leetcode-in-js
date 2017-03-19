/*
228. Summary Ranges
Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  'use strict'
  let start = 0
  let res = []
  let i = 1
  while (start < nums.length) {
    while (start + i < nums.length &&
    nums[start + i] === nums[start] + i) i++
    if (i === 1) res.push('' + nums[start])
    else res.push('' + nums[start] + '->' + nums[(start + i - 1)])
    start = start + i
    i = 1
  }
  return res
}

module.exports = summaryRanges
