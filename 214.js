/*
214. Shortest Palindrome
Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

For example:

Given "aacecaaa", return "aaacecaaa".

Given "abcd", return "dcbabcd".
*/

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let max = longestPalindrome(s)
  return Array.from(s.slice(max)).reverse().join('') + s
}

function longestPalindrome (s) {
  // return length of the longest palindrome beginning with the first character
  // manacher's algorithm
  const ns = Array(s.length * 2 + 2)
  ns[0] = '$'
  ns[1] = '#'
  for (let i = 0; i < s.length; i++) {
    let j = s.length - i - 1
    ns[j * 2 + 2] = s[i]
    ns[j * 2 + 3] = '#'
  }

  const p = Array(s.length * 2 + 2).fill(1)

  let rightmost = 0 // the rightmost index of found palindromes' right edge
  let center = 0 // the center of `rightmost` palindrome
  for (let i = 1; i < p.length; i++) {
    if (rightmost > i) {
      let symmetry = center - (i - center)
      if (i + p[symmetry] < rightmost) p[i] = p[symmetry]
      else {
        p[i] = rightmost - i
      }
    }
    while (ns[i + p[i]] === ns[i - p[i]]) p[i]++
    if (i + p[i] > rightmost) {
      rightmost = i + p[i]
      center = i
    }
    if (rightmost === p.length) return p[i] - 1
  }
}

let tc = [
  '',
  'a',
  'aacecaaa',
  'abcd',
  'aacecaa',
  'aaaa'
]

let ans = [
  '',
  'a',
  'aaacecaaa',
  'dcbabcd',
  'aacecaa',
  'aaaa'
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = shortestPalindrome(tc[i])
  console.log(a === r, a, r)
}
