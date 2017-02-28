/*
26. Remove Duplicates from Sorted Array
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length
  if (len <= 1) return len

  let i = 1
  for (let j = 1; j < len; ++j) {
    if (nums[j] !== nums[j - 1]) {
      nums[i++] = nums[j]
    }
  }
  return i
}

let tc = [
  [1, 1, 2],
  [],
  [1],
  [1, 1, 2, 2],
  [1, 2, 2]
]

let ans = [
  [1, 2],
  [],
  [1],
  [1, 2],
  [1, 2]
]

for (let i = 0; i < tc.length; ++i) {
  let r = tc[i].slice(0, removeDuplicates(tc[i])).join()
  let a = ans[i].join()
  console.log(a === r, a, r)
}
