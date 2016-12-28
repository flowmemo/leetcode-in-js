/*
77. Combinations
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  for (let i = 1; i <= n + 1 - k; ++i) {
    dfs(i, n, k, [], res)
  }
  return res
}

function dfs (pos, n, rcount, path, res) {
  path.push(pos)
  rcount--
  if (rcount == 0) {
    res.push(path.slice())
    path.pop()
    return
  }

  for (let i = pos + 1; i <= n + 1 - rcount; ++i) {
    dfs(i, n, rcount, path, res)
  }
  path.pop()
}

module.exports = combine
