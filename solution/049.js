/*
49. Group Anagrams
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.

Show Company Tags
Show Tags
Show Similar Problems
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  'use strict'
  const map = new Map()
  for (const s of strs) {
    const ct = Array(26).fill(0)
    for (let i = 0; i < s.length; ++i) {
      ct[s.charCodeAt(i) - 97]++
    }

    const key = ct.join()
    if (map.has(key)) {
      map.get(key).push(s)
    } else {
      map.set(key, [s])
    }
  }

  const ret = []
  for (const gp of map.values()) {
    ret.push(gp)
  }

  return ret
}

module.exports = groupAnagrams
