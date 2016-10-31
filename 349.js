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
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  if (set1.size > set2.size) {
    let tmp = set1
    set1 = set2
    set2 = tmp
  }
  const res = []
  for (let ele of set1) {
    if (set2.has(ele)) {
      res.push(ele)
    }
  }
  return res
}

let tc = [
  [[1, 2, 2, 1], [2, 2]]
]

let ans = [
  [2]
]

for (let i = 0; i < tc.length; i++) {
  let a = Array.from(ans[i]).join()
  let r = Array.from(intersection(...tc[i])).join()
  console.log(a === r, a, r)
}
