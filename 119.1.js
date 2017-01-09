/*
119. Pascal's Triangle II
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const v = Array(rowIndex + 1)
  v[0] = v[rowIndex] = 1
  for (let i = 1; i <= rowIndex - i; ++i) {
    v[i] = v[rowIndex - i] = v[i - 1] * (rowIndex - i + 1) / i
  }
  return v
}

module.exports = getRow
