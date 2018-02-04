/*
546. Remove Boxes
Given several boxes with different colors represented by different positive numbers.
You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (composed of k boxes, k >= 1), remove them and get k*k points.
Find the maximum points you can get.

Example 1:
Input:

[1, 3, 2, 2, 2, 3, 4, 3, 1]
Output:
23
Explanation:
[1, 3, 2, 2, 2, 3, 4, 3, 1]
----> [1, 3, 3, 4, 3, 1] (3*3=9 points)
----> [1, 3, 3, 3, 1] (1*1=1 points)
----> [1, 1] (3*3=9 points)
----> [] (2*2=4 points)
Note: The number of boxes n would not exceed 100.
*/

/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (boxes) {
  'use strict'
  const n = boxes.length
  const dp = Array(n + 1).fill().map(() => Array(n + 1).fill().map(() => Array(n).fill()))
  let r = calc(0, n, 0, boxes, dp)
  return r
}

function calc (l, r, k, v, dp) {
  'use strict'
  if (l === r) return 0
  if (l + 1 === r) return (k + 1) * (k + 1)
  let j = r - 1
  while (j > 0 && v[j - 1] === v[j]) {
    --j
    --r
    ++k
  }
  if (dp[l][r][k]) return dp[l][r][k]
  dp[l][r][k] = calc(l, r - 1, 0, v, dp) + (k + 1) * (k + 1)

  for (let i = l; i < r - 1; ++i) {
    if (v[i] === v[r - 1] && (v[i + 1] !== v[r - 1])
    ) {
      dp[l][r][k] = Math.max(dp[l][r][k], calc(l, i + 1, k + 1, v, dp) + calc(i + 1, r - 1, 0, v, dp))
    }
  }

  return dp[l][r][k]
}

module.exports = removeBoxes
