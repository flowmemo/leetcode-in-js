/*
44. Wildcard Matching
Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
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
  let is = 0
  let ip = 0
  let prestar = -1
  let prepos = 0
  while (is < slen) {
    if (p[ip] === '*') {
      prestar = ip
      prepos = is
      ip++
    } else if (p[ip] === '?' || p[ip] === s[is]) {
      ip++
      is++
    } else {
      if (prestar > -1) {
        ip = prestar + 1
        is = ++prepos
      } else return false
    }
  }
  while (p[ip] === '*') ip++
  return (ip === plen)
}

let tc = [
  ['aa', 'a'],
  ['aa', 'aa'],
  ['aaa', 'aa'],
  ['aa', '*'],
  ['aa', 'a*'],
  ['ab', '?*'],
  ['aab', 'c*a*b'],
  [
    'i',
    '*i'
  ], ['abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb',
    '**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb']
]

let ans = [
  false, true, false, true, true, true, false, true, false, false
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = isMatch(...tc[i])
  console.log(a === r, a, r)
}

