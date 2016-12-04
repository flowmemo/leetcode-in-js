/*
122. Best Time to Buy and Sell Stock II
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again). */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length
  let res = 0
  for (let i = 1; i < len; i++) {
    if (prices[i] > prices[i - 1]) res += prices[i] - prices[i - 1]
  }
  return res
}

let tc = [
  [7, 1, 5, 3, 6, 4],
  [7, 1, 9, 2, 6, 4],
  [7, 6, 4, 3, 1]
]

let ans = [
  7, 12, 0
]

for (let i = 0; i < ans.length; i++) {
  let a = ans[i]
  let r = maxProfit(tc[i])
  console.log(a === r, a, r)
}
