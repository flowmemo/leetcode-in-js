/*
165. Compare Version Numbers
Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 13.37
Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  'use strict'
  const v1 = version1.split('.').map(n => +n)
  const v2 = version2.split('.').map(n => +n)
  const len = Math.max(v1.length, v2.length)
  while (v1.length < len) v1.push(0)
  while (v2.length < len) v2.push(0)
  for (let i = 0; i < len; ++i) {
    if (v1[i] > v2[i]) return 1
    else if (v1[i] < v2[i]) return -1
  }
  return 0
}

module.exports = compareVersion
