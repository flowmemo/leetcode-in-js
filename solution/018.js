/*
18. 4Sum
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const res = []
  const n = nums.length
  for (let i = 0; i < n - 3; ++i) {
    let n1 = nums[i]
    if (4 * n1 > target) break
    if (i > 0 && n1 === nums[i - 1]) continue
    if (n1 + 3 * nums[n - 1] < target) continue
    for (let j = i + 1; j < n - 2; ++j) {
      let n2 = nums[j]
      if (n1 + 3 * n2 > target) break
      if (j > i + 1 && n2 === nums[j - 1]) continue
      if (n1 + n2 + 2 * nums[n - 1] < target) continue

      // 2sum
      let l = j + 1
      let r = n - 1
      let rest = target - n1 - n2
      while (l < r) {
        let sum2 = nums[l] + nums[r]
        if (sum2 < rest) {
          ++l
        } else if (sum2 > rest) {
          --r
        } else {
          res.push([n1, n2, nums[l], nums[r]])
          ++l
          --r
        }

        // avoid duplicated
        while (l > j + 1 && l < r && nums[l] === nums[l - 1]) ++l
        while (r < n - 1 && l < r && nums[r] === nums[r + 1]) --r
      }
    }
  }
  return res
}
