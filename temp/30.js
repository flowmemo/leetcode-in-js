/*
30. Substring with Concatenation of All Words
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  'use strict'
  // https://discuss.leetcode.com/post/8302
  // object as map
  const slen = s.length
  const wc = words.length
  const res = []
  if (!slen || !wc) return res
  const k = words[0].length
  const map = Object.create(null)
  for (let word of words) {
    map[word] = (map[word] || 0) + 1
  }

  for (let i = 0; i < k; i++) {
    let left = i
    let count = 0
    let visited = Object.create(null)
    for (let j = i; j <= slen - k; j += k) {
      let cur = s.slice(j, j + k)
      if (map[cur]) {
        visited[cur] = (visited[cur] || 0) + 1
        count++
        while (visited[cur] > map[cur]) {
          let w = s.slice(left, left + k)
          visited[w]--
          count--
          left += k
        }
        if (count === wc) {
          res.push(left)
          let w = s.slice(left, left + k)
          visited[w]--
          count--
          left += k
        }
      } else {
        visited = Object.create(null)
        count = 0
        left = j + k
      }
    }
  }
  return res
}

let tc = [
  {
    s: 'barfoothefoobarman',
    words: ['foo', 'bar']
  }
]

let ans = [
  [0, 9]
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i].sort().join()
  let r = findSubstring(tc[i].s, tc[i].words).sort().join()
  console.log(a === r, a, r)
}
