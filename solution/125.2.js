/*
125. Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0
  let j = s.length - 1
  while (i <= j) {
    while (i <= j && !isAlphanumeric(s[i])) ++i
    while (i <= j && !isAlphanumeric(s[j])) --j
    if (i > j) break
    if (!isSame(s[i], s[j])) return false
    ++i
    --j
  }
  return true
}

function isAlphanumeric (c) {
  return /[a-z0-9]/i.test(c)
}

function isSame (c1, c2) {
  c1 = c1.toLowerCase()
  c2 = c2.toLowerCase()
  return c1 === c2
}

module.exports = isPalindrome
