/*
31. Next Permutation
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length
  let i = len - 2
  while (i >= 0) {
    if (nums[i] < nums[i + 1]) break
    --i
  }

  if (i < 0) {
    reverse(nums, 0, len)
    return
  }

  let j = len - 1
  while (j > i) {
    if (nums[j] > nums[i]) break
    --j
  }
  ;[nums[i], nums[j]] = [nums[j], nums[i]]
  reverse(nums, i + 1, len)
}

/**
 * Reverses the order of the elements in the range [start, end)
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 * @return {void} reverse in-place.
 */
function reverse (arr, start, end) {
  for (let i = start, j = end - 1; i < j; ++i, --j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

let tc = [
  [1, 2, 3],
  [3, 2, 1],
  [1, 1, 5],
  [],
  [1]
]

let ans = [
  [1, 3, 2],
  [1, 2, 3],
  [1, 5, 1],
  [],
  [1]
]

for (let i = 0; i < tc.length; ++i) {
  let a = ans[i].join()
  nextPermutation(tc[i])
  let r = tc[i].join()

  console.log(a === r, a, r)
}
