/*
52. N-Queens II
Follow up for N-Queens problem.

Now, instead outputting board configurations, return the total number of distinct solutions.

![](http://www.leetcode.com/wp-content/uploads/2012/03/8-queens.png)
*/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const cols = Array(n)
  const diags = Array(2 * n - 1)
  const rdiags = Array(2 * n - 1)
  const o = {res: 0}
  dfs(0, cols, diags, rdiags, o, n)
  return o.res
}

function dfs (row, cols, diags, rdiags, o, n) {
  if (row === n) {
    ++o.res
    return
  }
  for (let i = 0; i < n; ++i) {
    if (!cols[i] && !diags[row - i + n - 1] && !rdiags[row + i]) {
      cols[i] = diags[row - i + n - 1] = rdiags[row + i] = true
      dfs(row + 1, cols, diags, rdiags, o, n)
      cols[i] = diags[row - i + n - 1] = rdiags[row + i] = false
    }
  }
}

module.exports = totalNQueens
