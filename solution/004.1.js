/*
4. Median of Two Sorted Arrays
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  'use strict'
  const n1 = nums1.length
  const n2 = nums2.length
  const n = n1 + n2

  let l = 0
  let r = n1
  while (l <= r) {
    let i = l + ((r - l) >> 1)
    let j = (n >> 1) - i
    if (j < 0) {
      r = i - 1
      continue
    } else if (j > n2) {
      l = i + 1
      continue
    }
    let v0 = (i > 0) ? nums1[i - 1] : -Infinity
    let v1 = (i < n1) ? nums1[i] : Infinity
    let v2 = (j > 0) ? nums2[j - 1] : -Infinity
    let v3 = (j < n2) ? nums2[j] : Infinity
    if (v1 < v2) {
      l = i + 1
    } else if (v0 > v3) {
      r = i - 1
    } else {
      if ((n1 + n2) % 2) return Math.min(v1, v3)
      else return (Math.max(v0, v2) + Math.min(v1, v3)) / 2
    }
  }

  return 0
}

module.exports = findMedianSortedArrays
