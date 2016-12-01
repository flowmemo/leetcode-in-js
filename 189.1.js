/*
189. Rotate Array
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

[show hint]

Related problem: Reverse Words in a String II

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length
  k = ((k % len) + len) % len
  reverse(nums, 0, len)
  reverse(nums, 0, k)
  reverse(nums, k, len)
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
  [[1, 2, 3, 4, 5, 6, 7], 3],
  [[1, 2, 3, 4, 5, 6, 7], -4],
  [[1, 2, 3, 4, 5, 6, 7], 10]
]

let ans = [
  [5, 6, 7, 1, 2, 3, 4],
  [5, 6, 7, 1, 2, 3, 4],
  [5, 6, 7, 1, 2, 3, 4]
]

for (let i = 0; i < tc.length; ++i) {
  rotate(...tc[i])
  let r = tc[i][0].join()
  let a = ans[i].join()
  console.log(a === r, a, r)
}
