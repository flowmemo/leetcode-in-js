/*
179. Largest Number
Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  'use strict'
  nums.sort((n1, n2) => {
    if (n1 === n2) return 0
    return ('' + n1 + n2 > '' + n2 + n1) ? -1 : 1
  })
  let s = nums.join('')
  let i = 0
  while (i < nums.length - 1 && s[i] === '0') i++
  return s.slice(i)
}

module.exports = largestNumber
