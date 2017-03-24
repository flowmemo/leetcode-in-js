/*
467. Unique Substrings in Wraparound String
Consider the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so s will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

Now we have another string p. Your job is to find out how many unique non-empty substrings of p are present in s. In particular, your input is the string p and you need to output the number of different non-empty substrings of p in the string s.

Note: p consists of only lowercase English letters and the size of p might be over 10000.

Example 1:
Input: "a"
Output: 1

Explanation: Only the substring "a" of string "a" is in the string s.
Example 2:
Input: "cac"
Output: 2
Explanation: There are two substrings "a", "c" of string "cac" in the string s.
Example 3:
Input: "zab"
Output: 6
Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.
*/

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  const arr = str2int(p)
  const ct = Array(26).fill(0)
  const n = p.length
  if (!n) return 0
  ct[arr[0]] = 1
  let pl = 1
  for (let i = 1; i < n; ++i) {
    const c = arr[i]
    if (c === ((arr[i - 1] + 1) % 26)) {
      ++pl
    } else pl = 1
    ct[c] = Math.max(ct[c], pl)
  }

  let ret = 0
  for (let c of ct) ret += c
  return ret
}

function str2int (s) {
  const n = s.length
  const base = 'a'.charCodeAt(0)
  const ret = Array(n)
  for (let i = 0; i < n; ++i) {
    ret[i] = s.charCodeAt(i) - base
  }
  return ret
}

module.exports = findSubstringInWraproundString
