/*
290. Word Pattern
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

Credits:
Special thanks to @minglotus6 for adding this problem and creating all test cases.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const words = str.split(' ')
  const m = Object.create(null)
  const rm = Object.create(null)
  if (pattern.length !== words.length) return false
  for (let i = 0; i < pattern.length; ++i) {
    const ch = pattern[i]
    const w = words[i]
    if (!m[ch] && !rm[w]) {
      m[ch] = w
      rm[w] = ch
    }
    if (m[ch] !== w || rm[w] !== ch) return false
  }
  return true
}

let tc = [
  ['abba', 'dog cat cat dog'],
  ['abba', 'dog cat cat fish'],
  ['aaaa', 'dog cat cat dog'],
  ['abba', 'dog dog dog dog']
]

let ans = [
  true,
  false,
  false,
  false
]

for (let i = 0; i < tc.length; ++i) {
  let a = ans[i]
  let r = wordPattern(...tc[i])
  console.log(a === r, a, r)
}
