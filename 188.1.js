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
  if (!k) return 0
  const len = prices.length
  if (len <= 1) return 0

  const point = countMaxTransaction(prices)
  if (k >= point) return quickProfit(prices)

  let v0 = Array(len).fill(0)
  let v1 = Array(len).fill(0)
  let v2 = Array(len).fill(0)
  v1[0] = -prices[0]
  for (let t = 0; t < k; ++t) {
    for (let i = 1; i < len; ++i) {
      v1[i] = Math.max(v1[i - 1], v0[i - 1] - prices[i])
      v2[i] = Math.max(v2[i - 1], v1[i] + prices[i])
    }
    ;[v0, v2] = [v2, v0]
  }
  return v0[len - 1]
}

function quickProfit (prices) {
  const len = prices.length
  if (!len) return 0
  let v1 = -prices[0]
  let v2 = 0
  for (let i = 1; i < len; ++i) {
    v1 = Math.max(v1, v2 - prices[i])
    v2 = Math.max(v2, v1 + prices[i])
  }
  return v2
}

function countMaxTransaction (prices) {
  // count max necessary transactions
  const len = prices.length
  if (len <= 1) return 0
  let point = 0
  let hasbuy = false
  if (prices[1] > prices[0]) {
    hasbuy = true
  }
  for (let i = 1; i < len - 1; ++i) {
    if (!hasbuy) {
      if (prices[i - 1] >= prices[i] && prices[i] < prices[i + 1]) {
        hasbuy = true
      }
    } else {
      if (prices[i - 1] < prices[i] && prices[i] >= prices[i + 1]) {
        ++point
        hasbuy = false
      }
    }
  }
  if (hasbuy && prices[len - 2] < prices[len - 1]) ++point
  return point
}

let tc = [
  [1, [2, 1, 2, 0, 1]],
  [2, [2, 1, 2, 0, 1]],
  [1, [1]]
]

let ans = [
  1, 2, 0
]
for (let i = 0; i < tc.length; ++i) {
  let r = maxProfit(...tc[i])
  let a = ans[i]
  console.log(a === r, a, r)
}

