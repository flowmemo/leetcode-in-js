/*
13. Roman to Integer
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const len = s.length
  const m = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let res = 0
  for (let i = len - 1; i >= 0; --i) {
    if (i < len - 1 && m[s[i]] < m[s[i + 1]]) res -= m[s[i]]
    else res += m[s[i]]
  }
  return res
}

module.exports = romanToInt
