/*
363. Max Sum of Rectangle No Larger Than K
Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k.

Example:
Given matrix = [
  [1,  0, 1],
  [0, -2, 3]
]
k = 2
The answer is 2. Because the sum of rectangle [[0, 1], [-2, 3]] is 2 and 2 is the max number no larger than k (k = 2).

Note:
The rectangle inside the matrix must have an area > 0.
What if the number of rows is much larger than the number of columns?
*/

const Treap = require('./treap.js')
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  // https://discuss.leetcode.com/post/50560
  const row = matrix.length
  const col = matrix[0].length

  let max = -Infinity
  for (let start = 0; start < col; start++) {
    let cur = Array(row).fill(0)
    for (let end = start; end < col; end++) {
      // build cur[]
      for (let i = 0; i < row; i++) {
        cur[i] += matrix[i][end]
      }
      // https://www.quora.com/Given-an-array-of-integers-A-and-an-integer-k-find-a-subarray-that-contains-the-largest-sum-subject-to-a-constraint-that-the-sum-is-less-than-k
      // build sum[]
      // sum[i]: sum of [0, i]
      const sum = Array(row)
      sum[0] = cur[0]
      for (let i = 1; i < row; i++) {
        sum[i] = sum[i - 1] + cur[i]
      }

      let treap = new Treap()
      treap.add(0)
      for (let i = 0; i < row; i++) {
        let r = treap.ceiling(sum[i] - k)
        treap.add(sum[i])
        if (r === null) continue
        max = Math.max(max, sum[i] - r)
        if (max === k) return k
      }
    }
  }

  return max
}

let tc = [
  [[[1, 0, 1], [0, -2, 3]], 2],
  [[[2, 2, -1]], 3],
  [[[2, 2, -1]], 0],
  [[[7, 29],
    [-20, -4]],
    -10],
  [[[7, 29, -12, 5, -5, 26, -5, 10, -5, 24, -9, -19, 20, 0],
    [-7, -11, -8, 12, 19, 18, -15, 17, 7, -1, -11, -10, -1, 25],
    [-3, -20, -20, -7, 14, -12, 22, 1, -9, 11, 14, -16, -5, -12],
    [-20, -4, -17, 3, 3, -18, 22, -13, -1, 16, -11, 29, 17, -2]],
    -100]
]

let ans = [
  2, 3, -1, -13, -101
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = maxSumSubmatrix(...tc[i])
  console.log(a === r, a, r)
}
