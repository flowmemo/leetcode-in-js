/*
118. Pascal's Triangle
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = []
  let level = 1
  let v = []
  while (level <= numRows) {
    const nv = Array(level)
    nv[0] = nv[level - 1] = 1
    for (let i = 1; i < level - 1; ++i) nv[i] = v[i - 1] + v[i]
    res.push(nv)
    v = nv
    level++
  }
  return res
}

module.exports = generate
