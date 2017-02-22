/*
28. Implement strStr()
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // http://algs4.cs.princeton.edu/53substring/KMPplus.java.html
  'use strict'
  return search(haystack, needle)
}

function buildTable (pattern) {
  'use strict'
  const len = pattern.length
  const next = Array(len)
  let j = -1
  for (let i = 0; i < len; ++i) {
    if (i === 0) next[i] = -1
    else if (pattern[i] !== pattern[j]) next[i] = j
    else next[i] = next[j]
    while (j >= 0 && pattern[i] !== pattern[j]) {
      j = next[j]
    }
    ++j
  }
  return next
}

function search (s, pattern) {
  'use strict'
  const plen = pattern.length
  const slen = s.length
  const next = buildTable(pattern)
  let i
  let j
  for (i = 0, j = 0; i < slen && j < plen; ++i) {
    while (j >= 0 && s[i] !== pattern[j]) {
      j = next[j]
    }
    ++j
  }

  if (j === plen) return i - plen
  return -1
}

module.exports = strStr
