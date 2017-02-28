/*
68. Text Justification
Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

For example,
words: ["This", "is", "an", "example", "of", "text", "justification."]
L: 16.

Return the formatted lines as:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Note: Each word is guaranteed not to exceed L in length.
*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = []
  let line = []
  let linestr = ''
  const len = words.length
  let index = 0
  let length = 0
  while (index < len) {
    let cur = words[index]
    if (length + cur.length > maxWidth) {
      let strcount = line.reduce((pre, cur) => pre + cur.length, 0)
      let whitespace = maxWidth - strcount
      linestr = line.shift()
      while (line.length) {
        let wsnum = Math.ceil(whitespace / (line.length))
        linestr += ' '.repeat(wsnum)
        linestr += line.shift()
        whitespace -= wsnum
      }
      linestr += ' '.repeat(whitespace)
      res.push(linestr)
      linestr = ''
      length = 0
    } else {
      length += cur.length + 1
      line.push(cur)
      index++
    }
  }

  let strcount = line.reduce((pre, cur) => pre + cur.length, 0)
  let whitespace = maxWidth - strcount
  linestr = line.shift()
  while (line.length) {
    linestr += ' '
    linestr += line.shift()
    whitespace--
  }
  linestr += ' '.repeat(whitespace)
  res.push(linestr)

  return res
}

let tc = [
  [
    ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16
  ],
  [
    ['aa'], 3
  ],
  [
    ['abcd', 'asdf'], 4
  ],
  [
    ['a', 'b', 'c', 'd', 'e'], 3
  ],
  [
    ['What', 'must', 'be', 'shall', 'be.'], 12
  ]
]

for (let i = 0; i < tc.length; i++) {
  let r = fullJustify(...tc[i])
  console.log(r)
}
