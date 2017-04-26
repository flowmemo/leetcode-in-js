/*
217. Contains Duplicate
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  'use strict'
  const st = new Set()
  for (const c of nums) {
    if (st.has(c)) return true
    st.add(c)
  }
  return false
}

module.exports = containsDuplicate
