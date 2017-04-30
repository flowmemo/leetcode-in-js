/*
322. Coin Change
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
coins = [1, 2, 5], amount = 11
return 3 (11 = 5 + 5 + 1)

Example 2:
coins = [2], amount = 3
return -1.

Note:
You may assume that you have an infinite number of each kind of coin.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  'use strict'
  coins.sort((a, b) => b - a)
  const n = coins.length
  let ret = Infinity
  function dfs (p, ct, rest) {
    if (rest === 0) {
      ret = Math.min(ret, ct)
      return true
    }
    if (p === n) return
    const c = coins[p]
    const lim = rest / c | 0

    for (let i = lim; i >= 0; --i) {
      if (ct + i >= ret) break // TLE if omit this line
      dfs(p + 1, ct + i, rest - i * c)
    }
    return false
  }
  dfs(0, 0, amount)
  return ret === Infinity ? -1 : ret
}

module.exports = coinChange
