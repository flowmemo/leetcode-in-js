/*
349. Intersection of Two Arrays
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const cmp = (a, b) => a - b
  nums1.sort(cmp)
  nums2.sort(cmp)
  const len1 = nums1.length
  const len2 = nums2.length

  const res = []
  let i = 0
  let j = 0
  while (i < len1 && nums1[i] < nums2[j]) i++
  while (i < len1 && j < len2) {
    // invariant: nums[i] >= nums[j]
    if (nums1[i] === nums2[j]) {
      res.push(nums2[j])
      i++
    }
    j++
    while (j < len2 && nums2[j] === nums2[j - 1]) j++

    while (i < len1 && nums1[i] < nums2[j]) i++
    // invariant: nums[i] >= nums[j]
  }

  return res
}


let tc = [
  [[1, 2, 2, 1], [2, 2]],
  [[2, 2], [1, 2, 2, 1]]
]

let ans = [
  [2],
  [2]
]

for (let i = 0; i < tc.length; i++) {
  let a = Array.from(ans[i]).join()
  let r = Array.from(intersection(...tc[i])).join()
  console.log(a === r, a, r)
}
