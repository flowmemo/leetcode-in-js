/*
127. Word Ladder
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time
Each intermediate word must exist in the word list
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  'use strict'
  wordList.delete(beginWord)
  wordList.delete(endWord)
  const base = 'a'.charCodeAt(0)
  const len = beginWord.length
  let d = diff(beginWord, endWord, len)
  if (d <= 1) return d + 1
  const beginSet = new Set()
  const endSet = new Set()
  let qbegin = new Set([beginWord])
  let qend = new Set([endWord])
  const az = Array(26)
  for (let i = 0; i < 26; i++) {
    az[i] = String.fromCharCode(base + i)
  }
  beginSet.add(beginWord)
  endSet.add(endWord)
  let path = 2

  while (qbegin.size && qend.size) {
    let visited
    let counterpart
    let layerset
    let ref

    // only process smaller set
    if (beginSet.size <= endSet.size) {
      ;[visited, counterpart, layerset, ref] = [beginSet, qend, qbegin, 0]
    } else {
      ;[visited, counterpart, layerset, ref] = [endSet, qbegin, qend, 1]
    }

    let temp = new Set()
    for (let cur of layerset) {
      let a = Array.from(cur)
      for (let i = 0; i < len; i++) {
        for (let ch of az) {
          a[i] = ch
          let nstr = a.join('')
          if (!visited.has(nstr) && wordList.has(nstr)) {
            if (counterpart.has(nstr)) return path
            visited.add(nstr)
            temp.add(nstr)
          }
        }
        a[i] = cur[i]
      }
    }
    if (ref) qend = temp
    else qbegin = temp
    path++
  }
  return 0
}

function diff (s1, s2, len) {
  'use strict'
  let res = 0
  for (let i = 0; i < len; i++) {
    if (s1[i] !== s2[i]) res++
  }
  return res
}

let tc = [
  ['a', 'a', []],
  ['a', 'b', []],
  ['hit', 'hog', ['hot']],
  ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']],
  ['kiss', 'tusk',
    ['miss', 'dusk', 'kiss', 'musk', 'tusk', 'diss', 'disk', 'sang', 'ties', 'muss']],
  [
    'qa',
    'sq',
    new Set(['os', 'uh', 'wm', 'an', 'me', 'mo', 'na', 'la', 'st', 'er', 'sc', 'ne', 'mn', 'mi', 'am', 'ex', 'pt', 'io', 'be', 'fm', 'ta', 'tb', 'ni', 'mr', 'pa', 'he', 'lr'])
  ],
  [
    'qa',
    'sq',
    new Set(['si', 'go', 'se', 'cm', 'so', 'ph', 'mt', 'db', 'mb', 'sb', 'kr', 'ln', 'tm', 'le', 'av', 'sm', 'ar', 'ci', 'ca', 'br', 'ti', 'ba', 'to', 'ra', 'fa', 'yo', 'ow', 'sn', 'ya', 'cr', 'po', 'fe', 'ho', 'ma', 're', 'or', 'rn', 'au', 'ur', 'rh', 'sr', 'tc', 'lt', 'lo', 'as', 'fr', 'nb', 'yb', 'if', 'pb', 'ge', 'th', 'pm', 'rb', 'sh', 'co', 'ga', 'li', 'ha', 'hz', 'no', 'bi', 'di', 'hi', 'qa', 'pi', 'os', 'uh', 'wm', 'an', 'me', 'mo', 'na', 'la', 'st', 'er', 'sc', 'ne', 'mn', 'mi', 'am', 'ex', 'pt', 'io', 'be', 'fm', 'ta', 'tb', 'ni', 'mr', 'pa', 'he', 'lr', 'sq', 'ye'])
  ]
]
tc.forEach(t => { t[2] = new Set(t[2]) })

let ans = [
  1, 2, 3, 5, 5, 5, 5
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = ladderLength(...tc[i])
  console.log(a === r, a, r)
}
