/*
306. Additive Number
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

For example:
"112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
"199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.
1 + 99 = 100, 99 + 100 = 199
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Follow up:
How would you handle overflow for very large input integers?
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const len = num.length
  for (let end1 = 1; end1 <= (len - 1 >> 1); end1++) {
    for (let end2 = end1 + 1; end2 <= len && Math.max(end1, end2 - end1) <= len - end2; end2++) {
      let start = 0
      let p1 = end1
      let p2 = end2
      while (p2 < len) {
        const n1 = num.slice(start, p1)
        const n2 = num.slice(p1, p2)
        const sum = bigAdd(n1, n2)
        const slen = sum.length

        // validate
        let i = 0
        while (i < slen) {
          if (sum[i] !== num[p2 + i]) break
          i++
        }
        if (i === slen) {
          start = p1
          p1 = p2
          p2 = p2 + slen
        } else break
      }

      if (p2 === len) {
        return true
      }

      // leading '0'
      if (num[end1] === '0') break
    }
    // leading '0'
    if (num[0] === '0') break
  }
  return false
}

let tc = [
  '112358',
  '199100199',
  '0112358132134',
  '011235813213',
  '114'
]

let ans = [
  true, true, true, false, false
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = isAdditiveNumber(tc[i])
  console.log(a === r, a, r)
}

function bigAdd (n1, n2) {
  const len = Math.max(n1.length, n2.length) + 1
  let a = Array(len).fill(0)
  let ind1 = n1.length - 1
  let ind2 = n2.length - 1
  let i = len - 1
  while (i > 0) {
    let cur = +(n1[ind1] || 0) + +(n2[ind2] || 0) + a[i]
    a[i] = cur % 10
    a[i - 1] = (cur - a[i]) / 10
    ind1--
    ind2--
    i--
  }
  if (len > 1 && a[0] === 0) {
    return a.slice(1).join('')
  }
  return a.join('')
}
