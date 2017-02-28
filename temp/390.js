/*
390. Elimination Game
There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.

Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.

We keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Find the last number that remains starting with a list of length n.

Example:

Input:
n = 9,
1 2 3 4 5 6 7 8 9
2 4 6 8
2 6
6

Output:
6
*/

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let min = 1
  let max = n
  let bit = 1
  while (min < max) {
    let p = min & bit
    min += bit
    if ((max & bit) === p) max -= bit
    if (min === max) return min
    bit = bit << 1
    p = max & bit
    max -= bit
    if ((min & bit) === p) min += bit
    bit = bit << 1
  }
  return min
}

let tc = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let ans = [1, 2, 2, 2, 2, 4, 4, 6, 6]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = lastRemaining(tc[i])
  console.log(a === r, a, r)
}
