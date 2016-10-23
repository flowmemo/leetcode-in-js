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
  // https://discuss.leetcode.com/post/6681
  let len1 = nums1.length
  let len2 = nums2.length
  if (len1 > len2)[nums1, nums2, len1, len2] = [nums2, nums1, len2, len1]
  const len = len1 + len2
  let imin = 0
  let imax = len1
  let i
  let j
  while (imin <= imax) {
    i = (imin + imax) >>> 1
    j = ((len1 + len2) >>> 1) - i

    if ((i === 0 || j === len2 || nums1[i - 1] <= nums2[j]) &&
      (i === len1 || j === 0 || nums2[j - 1] <= nums1[i])) {
      break
    } else if (nums1[i - 1] > nums2[j]) imax = i
    else imin = i + 1
  }

  if (len % 2) return Math.min(nums1[i] || Infinity, nums2[j] || Infinity)
  return (Math.min(nums1[i] || Infinity, nums2[j] || Infinity) +
    Math.max(nums1[i - 1] || -Infinity, nums2[j - 1] || -Infinity)) / 2
}

let tc = [
  [
    [2, 3],
    [1, 2, 3]
  ],
  [
    [1, 2, 3],
    [4]
  ],
  [
    [4],
    [1, 2, 3]
  ],
  [
    [1, 3],
    [2]
  ],
  [
    [],
    [1, 2]
  ],
  [
    [1],
    []
  ],
  [
    [1, 2],
    []
  ],
  [
    [3, 4, 5, 6, 7, 8],
    []
  ],
  [
    [1],
    [2, 3]
  ],
  [
    [1, 2, 3, 5, 6],
    [4]
  ]
]

let ans = [
  2, 2.5, 2.5, 2, 1.5, 1, 1.5, 5.5, 2, 3.5
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = findMedianSortedArrays(...tc[i])
  console.log(a === r, a, r)
}
