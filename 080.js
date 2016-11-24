/*
80. Remove Duplicates from Sorted Array II
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length
  if (len <= 2) return len
  let i = 1
  for (let j = 2; j < len; ++j) {
    if (nums[j] !== nums[i] ||
      nums[j] !== nums[i - 1]) {
      nums[++i] = nums[j]
    }
  }
  return i + 1
}

let tc = [
  [1, 1, 1, 2, 2, 3],
  [1, 1, 1]

]

let ans = [
  [1, 1, 2, 2, 3],
  [1, 1]
]

for (let i = 0; i < tc.length; ++i) {
  let r = tc[i].slice(0, removeDuplicates(tc[i])).join()
  let a = ans[i].join()
  console.log(a === r, a, r)
}
