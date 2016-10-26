/*
438. Find All Anagrams in a String
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

function check (pmap, map) {
  for (let key in pmap) {
    if (pmap[key] !== map[key]) return false
  }
  return true
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
  const plen = p.length
  const slen = s.length

  // pmap stores info of p
  const pmap = Object.create(null)
  for (let c of p) {
    if (!pmap[c]) {
      pmap[c] = 1
    } else {
      pmap[c]++
    }
  }

  const map = Object.create(null)
  const res = []

  // check s.slice(0, plen)
  for (let i = 0; i < plen && i < slen; ++i) {
    let c = s[i]
    if (pmap[c]) {
      map[c] = (map[c] || 0) + 1
    }
  }
  if (check(pmap, map)) res.push(0)

  for (let i = plen; i < slen; ++i) {
    let c = s[i]
    if (map[s[i - plen]]) {
      map[s[i - plen]]--
    }
    if (pmap[c]) {
      map[c] = (map[c] || 0) + 1
    }
    if (check(pmap, map)) {
      res.push(i - plen + 1)
    }
  }

  return res
}

let tc = [
  ['cbatbac', 'abc'],
  ['cbaebabacd', 'abc'],
  ['abab', 'ab'],
  ['aabaa', 'aab'],
  ['aaaaaaa', 'aaa']
]

let ans = [
  [0, 4],
  [0, 6],
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2, 3, 4]
]

for (let i = 0; i < tc.length; ++i) {
  let a = ans[i].join()
  let r = findAnagrams(...tc[i]).join()
  console.log(a === r, a, r)
}
