/*
309. Best Time to Buy and Sell Stock with Cooldown
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]
*/

/** O(1) space complexity.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  'use strict'
  const len = prices.length
  if (len <= 1) return 0
  let [v1, ppv2, pv2, v2] = [0, 0, 0, 0]
  v1 = -prices[0]
  v1 = Math.max(v1, pv2 - prices[1])
  v2 = Math.max(pv2, v1 + prices[1])
  pv2 = v2
  for (let i = 2; i < len; ++i) {
    v1 = Math.max(v1, ppv2 - prices[i])
    v2 = Math.max(v2, v1 + prices[i])
    ;[ppv2, pv2] = [pv2, v2]
  }
  return v2
}

let tc = [
  [1, 2, 3, 0, 2],
  [7, 1, 5, 3, 6, 4],
  [7, 1, 9, 2, 6, 4],
  [7, 6, 4, 3, 1],
  [1, 2, 3],
  [1, 2, 2, 3, 4],
  [6, 1, 3, 2, 4, 7],
  [1, 3, 5, 4, 3, 7, 6, 9, 2, 4],
  [1, 2]
]

let ans = [
  3, 5, 8, 0, 2, 3, 6, 10, 1
]

for (let i = 0; i < ans.length; i++) {
  let a = ans[i]
  let r = maxProfit(tc[i])
  console.log(a === r, a, r)
}
