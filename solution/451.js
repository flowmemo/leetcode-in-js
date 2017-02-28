/*
451. Sort Characters By Frequency
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  'use strict'
  const map = Object.create(null)
  for (const c of s) {
    map[c] = (map[c] || 0) + 1
  }
  const count = []
  for (const key in map) {
    count.push({ ch: key, freq: map[key] })
  }

  count.sort((a, b) => b.freq - a.freq)
  let res = ''
  for (const pair of count) {
    res += pair.ch.repeat(pair.freq)
  }
  return res
}

module.exports = frequencySort

