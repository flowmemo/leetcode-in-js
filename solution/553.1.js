/*
553. Optimal Division
Given a list of positive integers, the adjacent integers will perform the float division. For example, [2,3,4] -> 2 / 3 / 4.

However, you can add any number of parenthesis at any position to change the priority of operations. You should find out how to add parenthesis to get the maximum result, and return the corresponding expression in string format. Your expression should NOT contain redundant parenthesis.

Example:
Input: [1000,100,10,2]
Output: "1000/(100/10/2)"
Explanation:
1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in "1000/((100/10)/2)" are redundant,
since they don't influence the operation priority. So you should return "1000/(100/10/2)".

Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2
Note:

The length of the input array is [1, 10].
Elements in the given array will be in range [2, 1000].
There is only one optimal division for each test case.
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  'use strict'
  const n = nums.length
  const dp = Array(n + 1).fill().map(() => Array(n + 1))
  return calc(0, n, nums, dp).smax
}

function calc (l, r, v, dp) {
  'use strict'
  if (dp[l][r]) return dp[l][r]
  let rmin = v[l]
  let smin = '' + rmin
  let rmax = v[l]
  let smax = '' + rmax
  for (let i = l + 1; i < r; ++i) {
    rmin = rmax = rmin / v[i]
    smin += '/' + v[i]
    smax += '/' + v[i]
  }

  for (let i = l + 1; i < r; ++i) {
    const r1 = calc(l, i, v, dp)
    const r2 = calc(i, r, v, dp)
    const rmin0 = r1.min / r2.max
    const rmax0 = r1.max / r2.min

    if (rmin0 < rmin) {
      rmin = rmin0
      smin = r1.smin + '/'
      if (l + 1 < r) {
        smin += '(' + r2.smax + ')'
      } else smin += r2.smax
    }

    if (rmax0 > rmax) {
      rmax = rmax0
      smax = r1.smax + '/'
      if (l + 1 < r) {
        smax += '(' + r2.smin + ')'
      } else smax += r2.smin
    }
  }

  const ret = {
    min: rmin,
    smin: smin,
    max: rmax,
    smax: smax
  }
  dp[l][r] = ret
  return ret
}

module.exports = optimalDivision
