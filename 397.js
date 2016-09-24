/*
397. Integer Replacement
Given a positive integer n and you can do operations as follow:

If n is even, replace n with n/2.
If n is odd, you can replace n with either n + 1 or n - 1.
What is the minimum number of replacements needed for n to become 1?

Example 1:

Input:
8

Output:
3

Explanation:
8 -> 4 -> 2 -> 1
Example 2:

Input:
7

Output:
4

Explanation:
7 -> 8 -> 4 -> 2 -> 1
or
7 -> 6 -> 3 -> 2 -> 1
*/
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  const map = new Map()
  function helper(n) {
    if (n <= 3) return n - 1
    let r = map.get(n)
    if (r) return r
    else {
      if (n % 2) {
        r = Math.min(2 + helper(n >> 1), 2 + helper((n + 1) >>> 1))
        // `(n >> 1) + 1` is same as `(n + 1) >>> 1` when n is odd positive int32 number.
        // notice usage of `>>>`
      } else {
        r = 1 + helper(n >> 1)
      }
      map.set(n, r)
    }
    return r
  }
  return helper(n)
}

let tc = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 237467, 2147483647
]
let ans = [
  0, 1, 2, 2, 3, 3, 4, 3, 4, 4, 24, 32
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = integerReplacement(tc[i])
  console.log(a === r, a, r)
}

