/*
440. K-th Smallest in Lexicographical Order
Given integers n and k, find the lexicographically k-th smallest integer in the range from 1 to n.

Note: 1 ≤ k ≤ n ≤ 109.

Example:

Input:
n: 13   k: 2

Output:
10

Explanation:
The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function getKdigit (n, k) {
  return +('' + n)[k - 1]
}

function generateM1 (m) {
  return +('1'.repeat(m))
}

var findKthNumber = function (n, k) {
  let init = getKdigit(n, 1)
  let wid = ('' + n).length
  let pre = 0
  let i = 1
  let res = 0
  for (; i <= 9; ++i) {
    let inc
    if (i < init) {
      inc = generateM1(wid)
    } else if (i === init) {
      inc = generateM1(wid - 1) + n % Math.pow(10, wid - 1) + 1
    } else {
      inc = generateM1(wid - 1)
    }
    if (pre + inc >= k) break
    else {
      pre += inc
    }
  }

  k -= pre
  res = i // find a digit
  if (k === 1) return res
  k--
  let j = 2

  while (j < wid + 1) {
    let pre = 0
    let i = 0
    let kmax = Math.floor(n / Math.pow(10, wid - j))
    for (; i <= 9; ++i) {
      let inc
      if (10 * res + i < kmax) {
        inc = generateM1(wid - j + 1)
      } else if (10 * res + i === kmax) {
        inc = generateM1(wid - j) + n % Math.pow(10, wid - j) + 1
      } else {
        inc = generateM1(wid - j)
      }
      if (pre + inc >= k) break
      else {
        pre += inc
      }
    }
    k -= pre

    res = res * 10 + i  // find a digit
    if (k === 1) return res
    k--
    j++
  }
}

let tc = [
  [11, 3],
  [99, 98],
  [213, 29],
  [1921, 999],
  [2413, 1112],
  [2413, 1111],
  [321432, 4323],
  [1756, 778],
  [1E9, 5E8]
]

let ans = [
  11,
  98,
  124,
  1898,
  2,
  1999,
  103888,
  1699,
  549999998
]

for (let i = 0; i < ans.length; ++i) {
  let a = ans[i]
  let r = findKthNumber(...tc[i])
  console.log(a === r, a, r)
}

