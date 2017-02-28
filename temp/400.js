/*
400. Nth Digit
Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3

Output:
3
Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let width = 1
  let k = 9
  while (n) {
    if (n - k * width <= 0) {
      // in this range
      let single = Math.pow(10, width - 1) + Math.floor((n - 1) / width)
      let pos = (n - 1) % width + 1
      return Math.floor(single / Math.pow(10, width - pos)) % 10
    } else {
      n -= k * width
      width++
      k *= 10
    }
  }
}

let tc = [
  3, 11, 1, 190, 100
]

let ans = [
  3, 0, 1, 1, 5
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = findNthDigit(tc[i])
  console.log(a === r, a, r)
}
