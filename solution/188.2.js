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

  const alreadyBuy = Array(k + 1).fill(-prices[0])
  const noStock = Array(k + 1).fill(0)
  for (let i = 1; i < n; ++i) {
    for (let j = k; j > 0; --j) {
      noStock[j] = Math.max(noStock[j], alreadyBuy[j] + prices[i])
      alreadyBuy[j] = Math.max(alreadyBuy[j], noStock[j - 1] - prices[i])
    }
  }
  return noStock[k]
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
