/*
188. Best Time to Buy and Sell Stock IV
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.
*/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  'use strict'
  const n = prices.length
  if (k > n / 2) return maxProfit0(prices)

  const alreadyBuy = Array(n)
  alreadyBuy[0] = -prices[0]
  for (let i = 1; i < n; ++i) alreadyBuy[i] = Math.max(alreadyBuy[i - 1], -prices[i])

  const noStock = Array(n).fill(0)
  let r = 0
  for (let t = 0; t < k; ++t) {
    for (let i = 1; i < n; ++i) {
      noStock[i] = Math.max(noStock[i - 1], alreadyBuy[i] + prices[i])
      alreadyBuy[i] = Math.max(alreadyBuy[i - 1], noStock[i] - prices[i])
    }
    if (noStock[n - 1] === r) return r
    else r = noStock[n - 1]
  }
  return r
}

function maxProfit0 (prices) {
  'use strict'
  let ret = 0
  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > prices[i - 1]) ret += prices[i] - prices[i - 1]
  }
  return ret
}

module.exports = maxProfit
