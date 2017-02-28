/*
336. Palindrome Pairs
Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:
Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]
Example 2:
Given words = ["abcd", "dcba", "lls", "s", "sssll"]
Return [[0, 1], [1, 0], [3, 2], [2, 4]]
The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]
*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const len = words.length
  const lens = words.map(w => w.length)
  const index = Array(len)
  for (let i = 0; i < len; i++) index[i] = i
  index.sort((a, b) => lens[a] - lens[b])
  const map = new Map()
  map.set(words[index[0]], index[0])
  const res = []
  for (let i = 1; i < len; i++) {
    let ci = index[i]
    let w = words[ci]
    let aw = Array.from(w).reverse().join('')
    let wl = w.length
    // cur-another
    for (let i = 0; i <= wl; i++) {
      if (isP(w, i, wl)) {
        let another = map.get(aw.slice(wl - i, wl))
        if (another !== undefined) {
          res.push([ci, another])
        }
      }
    }

    // another-cur
    for (let i = wl; i >= 0; i--) {
      if (isP(w, 0, i)) {
        let another = map.get(aw.slice(0, wl - i))
        if (another !== undefined) {
          res.push([another, ci])
        }
      }
    }
    map.set(w, ci)
  }

  return res
}

function isP (s, start, end) {
  for (let i = start, j = end - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) return false
  }
  return true
}
let tc = [
  ['bat', 'tab'],
  ['bat', 'tab', 'cat'],
  ['abcd', 'dcba', 'lls', 's', 'sssll'],
  ['abcd', 'dcba', 'lls', 's', 'sssll', '']
]

let ans = [
  [[1, 0], [0, 1]],
  [[1, 0], [0, 1]],
  [[3, 2], [1, 0], [0, 1], [2, 4]]
]

for (let i = 0; i < tc.length - 1; i++) {
  let a = ans[i].sort().join()
  let r = palindromePairs(tc[i]).sort().join()
  console.log(a === r, a, r)
}
