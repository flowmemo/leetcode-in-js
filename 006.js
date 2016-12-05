/*
6. ZigZag Conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  'use strict'
  const len = s.length
  const v = Array(numRows)
  for (let i = 0; i < numRows; ++i) v[i] = ''
  let i = 0
  while (i < len) {
    let ccount = 0
    while (i < len && ccount < numRows) {
      v[ccount++] += s[i++]
    }
    ccount -= 2
    while (i < len && ccount > 0) {
      v[ccount--] += s[i++]
    }
  }
  let res = ''
  for (let i = 0; i < numRows; ++i) res += v[i]
  return res
}

let tc = [
  ['PAYPALISHIRING', 3]
]
let ans = [
  'PAHNAPLSIIGYIR'
]

for (let i = 0; i < tc.length; ++i) {
  let r = convert(...tc[i])
  let a = ans[i]
  console.log(a === r, a, r)
}
