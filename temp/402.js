/*
402. Remove K Digits
Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const len = num.length
  if (k >= len) return '0'
  else if (k === 0) return num

  num = Array.prototype.map.call(num, c => +c)

  let rest = len - k
  const res = Array(rest)
  let i = 0
  let j = 0
  let bottom = 0
  while (rest) {
    while (len - i - 1 >= rest - 1) {
      while (j > bottom && num[i] < res[j - 1]) j--
      if (j < len - k) {
        res[j] = num[i]
        j++
      }
      i++
    }
    bottom++
    rest--
  }
  for (let i = 0; i < len; i++) {
    if (res[i]) {
      return res.slice(i).join('')
    }
  }
  return '0'
}

let tc = [
  ['1432219', 3],
  ['10200', 1],
  ['10', 2],
  ['10', 1],
  ['111111111111111111111111111111', 0]
]

let ans = [
  '1219',
  '200',
  '0',
  '0',
  '111111111111111111111111111111'
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = removeKdigits(...tc[i])
  console.log(a === r, a, r)
}
