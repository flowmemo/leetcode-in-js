/*
395. Longest Substring with At Least K Repeating Characters
Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const len = s.length
  if (len < k) return 0
  let count = Array(26).fill(0)
  const base = 'a'.charCodeAt(0)

  // count frequency of char
  for (let i = 0; i < len; i++) {
    count[s.charCodeAt(i) - base]++
  }

  let max = 0
  let start = 0
  let end = -1
  for (let i = 0; i < len; i++) {
    if (count[s.charCodeAt(i) - base] < k) {
      if (end - start > max) {
        let r = longestSubstring(s.slice(start, end), k)
        if (r > max) max = r
        end = -1
      }
      start = i + 1
    } else end = i + 1
  }

  if (end - start === len) return len

  // when the last char frenquency >= k
  if (end - start > max) {
    let r = longestSubstring(s.slice(start, end), k)
    if (r > max) max = r
  }
  return max
}

let tc = [
  ['a', 1],
  ['abc', 2],
  ['aa', 1],
  ['aaabb', 3],
  ['ababbc', 2]
]

let ans = [
  1, 0, 2, 3, 5
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = longestSubstring(...tc[i])
  console.log(a === r)
}

