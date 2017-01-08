/*
115. Distinct Subsequences
Given a string S and a string T, count the number of distinct subsequences of T in S.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Here is an example:
S = "rabbbit", T = "rabbit"

Return 3.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const slen = s.length
  const tlen = t.length
  const v = Array(t.length + 1).fill(0)
  v[0] = 1
  for (let i = 0; i < slen; ++i) {
    const c = s[i]
    for (let j = tlen; j > 0; --j) {
      if (t[j - 1] === c) v[j] = v[j] + v[j - 1]
    }
  }
  return v[tlen]
}

module.exports = numDistinct
