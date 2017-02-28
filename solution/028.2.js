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
  // https://github.com/jaehyunp/stanfordacm/blob/master/code/KMP.cc
  'use strict'
  return search(haystack, needle)
}

function buildTable (pattern) {
  'use strict'
  const len = pattern.length
  const t = Array(len)
  if (!len) return t
  let i = 2
  let j = 0
  t[0] = -1
  if (len === 1) return t
  t[1] = 0
  while (i < len) {
    if (pattern[i - 1] === pattern[j]) {
      t[i] = j + 1
      ++i
      ++j
    } else if (j > 0) j = t[j]
    else {
      t[i] = 0
      ++i
    }
  }
  return t
}

function search (s, pattern) {
  'use strict'
  let m = 0
  let i = 0
  const slen = s.length
  const plen = pattern.length
  if (!plen) return 0
  const t = buildTable(pattern)
  while (m + i < slen) {
    if (pattern[i] === s[m + i]) {
      ++i
      if (i === plen) return m
    } else {
      m += i - t[i]
      if (i > 0) i = t[i]
    }
  }
  return -1
}

module.exports = strStr
