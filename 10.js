/*
10. Regular Expression Matching
Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const slen = s.length
  const plen = p.length
  if (!slen && !plen) return true
  for (let i = 0; i < plen && i <= slen; i++) {
    if (p[i + 1] === '*') {
      let ch = p[i]
      let prest = p.slice(i + 2)
      do {
        if (isMatch(s.slice(i), prest)) return true
      } while (i < slen && (s[i++] === ch || ch === '.'))
      return false
    } else if (p[i] !== '.' && p[i] !== s[i]) return false
  }
  if (slen === plen) return true
  return false
}

let tc = [
  ['aa', 'a'],
  ['aa', 'aa'],
  ['aaa', 'aa'],
  ['aa', 'a*'],
  ['aa', '.*'],
  ['ab', '.*'],
  ['aab', 'c*a*b'],
  ['a', '.*..a*'],
  ['a', 'ab*'],
  ['b', '.b*.'],
  ['bbba', 'b*bba'],
  ['baab', 'b*baa'],
  ['aa', 'b*a'],
  ['a', 'a*c*']

]

let ans = [
  false, true, false, true, true, true, true, false, true, false, true, false, false, true
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = isMatch(...tc[i])
  console.log(a === r, a, r)
}
