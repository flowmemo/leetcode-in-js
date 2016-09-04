/*
43. Multiply Strings
Given two numbers represented as strings, return multiplication of the numbers as a string.

Note:
The numbers can be arbitrarily large and are non-negative.
Converting the input string to integer is NOT allowed.
You should NOT use internal library such as BigInteger.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const len1 = num1.length
  const len2 = num2.length
  const len = len1 + len2
  num1 = Array.from(num1).map(r => +r)
  num2 = Array.from(num2).map(r => +r)
  let res = Array(len).fill(0)
  let index = len - 1
  for (let i = len1 - 1; i >= 0; i--) {
    index = len - len1 + i
    for (let j = len2 - 1; j >= 0; j--) {
      let cur = num1[i] * num2[j] + res[index]
      res[index] = cur % 10
      res[index - 1] += (cur - res[index]) / 10
      index--
    }
  }

  res = res.join('')
  let i
  for (i = 0; i < len && res[i] === '0'; i++);
  if (i === len) return '0'
  return res.slice(i)
}

let tc = [
  ['124', '345'],
  ['0', '21'],
  ['43', '0'],
  ['999', '99'],
  ['0', '0']
]
for (let i = 0; i < tc.length; i++) {
  console.log(multiply(...tc[i]))
}
