/*
84. Largest Rectangle in Histogram
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

![](http://www.leetcode.com/wp-content/uploads/2012/04/histogram.png)
Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

![](http://www.leetcode.com/wp-content/uploads/2012/04/histogram_area.png)
The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0)
  const len = heights.length
  let max = 0
  if (len <= 1) return max
  const stk = []
  let i = 0
  while (i < len) {
    if (!stk.length || heights[i] >= heights[stk[stk.length - 1]]) {
      stk.push(i)
      i++
    } else {
      let j = stk.pop()
      let area = heights[j] * (!stk.length ? i : i - stk[stk.length - 1] - 1)
      if (area > max) max = area
    }
  }
  return max
}

let tc = [
  [2, 1, 5, 6, 2, 3],
  [1],
  []
]
tc.push(require('./84.tc.json'))
console.log(tc[3].length)
let ans = [
  10, 1, 0, 100000000
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = largestRectangleArea(tc[i])
  console.log(a === r, a, r)
}
