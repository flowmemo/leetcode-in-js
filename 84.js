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
