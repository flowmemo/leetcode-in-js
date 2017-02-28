/*
87. Scramble String
Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const len = s1.length
  if (len !== s2.length) return false
  if (len <= 3) {
    return Array.from(s1).sort().join('') === Array.from(s2).sort().join('')
  }
  const stat1 = Array(26).fill(0)
  const stat2 = Array(26).fill(0)
  const base = 'a'.charCodeAt(0)
  let end = 0
  const mid = len / 2
  for (let i = 0; i < len - 1; i++) {
    stat1[s1.charCodeAt(i) - base]++
    stat2[s2.charCodeAt(i) - base]++
    if (diffArr(stat1, stat2)) {
      if (end === 0 || Math.abs(i + 1 - mid) < Math.abs(mid - end)) {
        end = i + 1
      }
    }
  }

  if (end !== 0) {
    let r1 = isScramble(s1.slice(0, end), s2.slice(0, end))
    let r2 = isScramble(s1.slice(end), s2.slice(end))
    if (r1 && r2) return true
  }
  stat1.fill(0)
  stat2.fill(0)
  end = 0
  for (let i = 0, j = len - 1; i < len - 1; i++, j--) {
    stat1[s1.charCodeAt(i) - base]++
    stat2[s2.charCodeAt(j) - base]++
    if (diffArr(stat1, stat2)) {
      if (end === 0 || Math.abs(i + 1 - mid) < Math.abs(mid - end)) {
        end = i + 1
      }
    }
  }

  if (end !== 0) {
    let r1 = isScramble(s1.slice(0, end), s2.slice(len - end))
    let r2 = isScramble(s1.slice(end), s2.slice(0, len - end))
    return r1 && r2
  }
  return false
}

function diffArr (a1, a2) {
  for (let i = 0; i < 26; i++) {
    if (a1[i] !== a2[i]) return false
  }
  return true
}

let tc = [
  ['a', 'a'],
  ['great', 'eatgr'],
  ['great', 'egart'],
  ['great', 'rgeat'],
  ['great', 'rgtae'],
  ['gr', 'rg'],
  ['abab', 'baba'],
  ['oatzzffqpnwcxhejzjsnpmkmzngneo',
    'acegneonzmkmpnsjzjhxwnpqffzzto']
]
let ans = [true, true, false, true, true, true, true, true]
for (let i = 0; i < ans.length; i++) {
  let a = ans[i]
  let r = isScramble(...tc[i])
  console.log(a === r)
}
