/*
787. Cheapest Flights Within K Stops
There are n cities connected by m flights. Each fight starts from city u and arrives at v with a price w.

Now given all the cities and fights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

Example 1:
Input:
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph looks like this:

https://s3-lc-upload.s3.amazonaws.com/uploads/2018/02/16/995.png

The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.

Example 2:
Input:
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph looks like this:

https://s3-lc-upload.s3.amazonaws.com/uploads/2018/02/16/995.png

The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.

Note:

1. The number of nodes n will be in range [1, 100], with nodes labeled from 0 to n - 1.
2. The size of flights will be in range [0, n * (n - 1) / 2].
3. The format of each flight will be (src, dst, price).
4. The price of each flight will be in the range [1, 10000].
5. k is in the range of [0, n - 1].
6. There will not be any duplicated flights or self cycles.

*/
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  'use strict'
  const min = Math.min
  const g = Array(n)
  for (let i = 0; i < n; ++i) {
    g[i] = Array(n).fill(Infinity)
    g[i][i] = 0
  }
  const dp = Array(n)
  for (let i = 0; i < n; ++i) {
    dp[i] = Array(K + 1).fill(Infinity)
  }
  dp[src][0] = 0
  for (const [u, v, w] of flights) {
    g[u][v] = w
    if (u === src) dp[v][0] = w
  }
  for (let k = 1; k <= K; ++k) {
    for (let t = 0; t < n; ++t) {
      dp[t][k] = min(dp[t][k], dp[t][k - 1])
      for (let p = 0; p < n; ++p) {
        dp[t][k] = min(dp[t][k], dp[p][k - 1] + g[p][t])
      }
    }
  }

  if (dp[dst][K] === Infinity) return -1
  return dp[dst][K]
}

module.exports = findCheapestPrice
