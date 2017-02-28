/*
96. Unique Binary Search Trees
Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // Catalan number
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      dp[i] += dp[j] * dp[i - j - 1]
    }
  }
  return dp[n]
}

module.exports = numTrees
