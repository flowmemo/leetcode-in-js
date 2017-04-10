/*
500. Keyboard Row
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

![American keyboard](https://leetcode.com/static/images/problemset/keyboard.png)

Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  'use strict'
  const m = Object.create(null)
  const s = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

  for (let i = 0; i < 3; ++i) {
    const ss = s[i]
    for (const c of ss) {
      m[c] = i + 1
      m[c.toUpperCase()] = i + 1
    }
  }

  const ret = []

  for (const w of words) {
    let pre = null
    let add = true
    for (const c of w) {
      if (pre && m[c] !== pre) {
        add = false
        break
      } else pre = m[c]
    }
    if (add) ret.push(w)
  }

  return ret
}

module.exports = findWords
