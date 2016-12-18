/*
58. Length of Last Word
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = s.length - 1
  while (i >= 0 && s[i] === ' ') --i
  const pos1 = i + 1
  while (i >= 0 && s[i] !== ' ') --i
  return pos1 - (i + 1)
}

module.exports = lengthOfLastWord
