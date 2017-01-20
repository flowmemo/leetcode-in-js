/*
434. Number of Segments in a String
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  'use strict'
  return s.split(/\s+/g).filter(w => w).length
}

module.exports = countSegments
