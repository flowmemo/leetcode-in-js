/*
217. Contains Duplicate
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set()
  for (let num of nums) {
    if (set.has(num)) return true
    else set.add(num)
  }
  return false
}

let tc = [
  [1, 2],
  [1, 1]
]
let ans = [
  false, true
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = containsDuplicate(tc[i])
  console.log(a === r)
}
