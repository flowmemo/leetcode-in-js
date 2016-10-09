/*
3. Longest Substring Without Repeating Characters
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = Object.create(null)
  const len = s.length
  let max = 0
  let start = 0
  for (let i = 0; i < len; ++i) {
    let cur = s[i]
    if (set[cur] !== undefined) {
      start = Math.max(start, set[cur] + 1)
    }
    set[cur] = i
    max = Math.max(max, i + 1 - start)
  }
  return max
}

let tc = [
  'abcabcbb',
  'bbbbb',
  'pwwkew',
  ''
]

let ans = [
  3, 1, 3, 0
]

for (let i = 0; i < ans.length; ++i) {
  let a = ans[i]
  let r = lengthOfLongestSubstring(tc[i])
  console.log(a === r, a, r)
}
