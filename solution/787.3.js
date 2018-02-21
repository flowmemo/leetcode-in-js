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

const MinPQ = require('../helper/PriorityQueue').MinPQ
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
  const edges = Array(n)
  for (let i = 0; i < n; ++i) edges[i] = []
  for (const [u, v, w] of flights) {
    edges[u].push([v, w])
  }
  const d = Array(n).fill(Infinity)
  d[src] = 0
  const ct = Array(n).fill(Infinity)
  ct[src] = 0

  // MinPQ<[dist, nodeId]>
  const pq = new MinPQ((s1, s2) => s1[0] - s2[0])
  pq.push([0, src])
  while (pq.size()) {
    const [dd, id] = pq.pop()
    if (d[id] !== dd) continue
    const k = ct[id]
    for (const [nxt, w] of edges[id]) {
      if (dd + w < d[nxt]) {
        d[nxt] = dd + w
        ct[nxt] = min(ct[nxt], k + 1)
        if (k + 1 <= K) pq.push([d[nxt], nxt])
      }
    }
  }

  if (d[dst] === Infinity) return -1
  return d[dst]
}

module.exports = findCheapestPrice
