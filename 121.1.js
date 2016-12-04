/*
121. Best Time to Buy and Sell Stock
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length
  if (!len) return 0
  let v1 = -prices[0]
  let v2 = 0
  for (let i = 0; i < len; ++i) {
    v1 = Math.max(v1, -prices[i])
    v2 = Math.max(v2, v1 + prices[i])
  }
  return v2
}

let tc = [
  [7, 1, 5, 3, 6, 4],
  [7, 1, 9, 2, 6, 4],
  [7, 6, 4, 3, 1]
]

let ans = [
  5, 8, 0
]

for (let i = 0; i < ans.length; i++) {
  let a = ans[i]
  let r = maxProfit(tc[i])
  console.log(a === r, a, r)
}
