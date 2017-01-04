/*
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
  const n = strs.length
  if (!n) return ''
  const s = strs[0]
  const sl = s.length
  for (let j = 0; j < sl; ++j) {
    const c = s[j]
    for (let i = 1; i < n; ++i) {
      if (j === strs[i].length || strs[i][j] !== c) return s.slice(0, j)
    }
  }
  return s
}

module.exports = longestCommonPrefix
