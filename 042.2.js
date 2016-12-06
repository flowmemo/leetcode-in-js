/*
42. Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example,
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
![](http://www.leetcode.com/wp-content/uploads/2012/08/rainwatertrap.png)
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
*/

/**
 * two pointer.
 * O(n) time and O(1) space.
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length
  let i = 0
  let j = n - 1
  let res = 0
  let mheight = 0
  while (i <= j) {
    const bound = Math.min(height[i], height[j])
    if (bound > mheight) {
      // `res` includes the volume of bars
      res += (bound - mheight) * (j - i + 1)
      mheight = bound
    }
    if (height[i] > height[j]) --j
    else ++i
  }

  for (let i = 0; i < n; ++i) res -= height[i]
  return res
}

let tc = [
  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], []
]

let ans = [
  6, 0
]

for (let i = 0; i < tc.length; ++i) {
  let r = trap(tc[i])
  let a = ans[i]
  console.log(a === r, a, r)
}
