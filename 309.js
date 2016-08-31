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

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length
  if (len <= 1) return 0
  const sell = Array(len)
  const buy = Array(len)
  sell[0] = 0
  if (prices[1] > prices[0]) sell[1] = prices[1] - prices[0]
  else sell[1] = 0
  buy[0] = -prices[0]
  buy[1] = -Math.max(prices[0], prices[1])
  let max = Math.max(0, sell[1])
  for (let i = 2; i < len; i++) {
    sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1] + prices[i] - prices[i - 1])
    if (sell[i] > max) max = sell[i]
    buy[i] = Math.max(buy[i - 1] + prices[i - 1] - prices[i], sell[i - 2] - prices[i])
  }
  return max
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
