/*
204. Count Primes
Description:

Count the number of prime numbers less than a non-negative number, n.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
*/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 2) return 0
  const arr = Array(n)
  arr[0] = arr[1] = true
  const upperBound = Math.sqrt(n)
  for (let i = 2; i < upperBound; ++i) {
    if (arr[i]) continue
    for (let j = i * 2; j < n; j += i) arr[j] = true
  }
  let res = 0
  for (let i = 0; i < n; ++i) if (!arr[i]) ++res
  return res
}

let tc = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1500000
]
let ans = [
  0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 114155
]

for (let i = 0; i < tc.length; ++i) {
  let r = countPrimes(tc[i])
  let a = ans[i]
  console.log(a === r, a, r)
}
