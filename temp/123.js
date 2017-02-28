/*
123. Best Time to Buy and Sell Stock III   Add to List QuestionEditorial Solution  My Submissions
Total Accepted: 73075
Total Submissions: 260682
Difficulty: Hard
Contributors: Admin
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length
  if (!len) return 0
  let [v1, v2, v3, v4] = [-prices[0], 0, -prices[0], 0]
  /**
   * v1 - balance after buy first stock on or before day i
   * v2 - balance after sell first stock on or before day i
   * v3 - balance after buy second stock on or befor day i
   * v4 - balance after sell second stock on or before day i
   * We can buy and sell in the same day, which is equivlent to do nothing.
   */
  for (let i = 1; i < len; ++i) {
    v1 = Math.max(v1, -prices[0])
    v2 = Math.max(v2, v1 + prices[i])
    v3 = Math.max(v3, v2 - prices[i])
    v4 = Math.max(v4, v3 + prices[i])
  }
  return v4
}

let tc = [
  [4, 1, 7, 2],
  [],
  [1, 1],
  [1, 2, 1, 2]
]

let ans = [
  6, 0, 0, 2
]

for (let i = 0; i < tc.length; ++i) {
  let r = maxProfit(tc[i])
  let a = ans[i]
  console.log(a === r, a, r)
}
