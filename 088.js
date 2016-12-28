/*
88. Merge Sorted Array
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i1 = m - 1
  let i2 = n - 1
  let ri = m + n - 1
  while (i1 >= 0 && i2 >= 0) {
    if (nums1[i1] > nums2[i2]) {
      nums1[ri--] = nums1[i1--]
    } else {
      nums1[ri--] = nums2[i2--]
    }
  }

  while (i2 >= 0) {
    nums1[ri--] = nums2[i2--]
  }
}

module.exports = merge
