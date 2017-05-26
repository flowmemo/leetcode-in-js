/*
323. Number of Connected Components in an Undirected Graph
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

Example 1:
     0          3
     |          |
     1 --- 2    4
Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.

Example 2:
     0           4
     |           |
     1 --- 2 --- 3
Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.

Note:
You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
*/

let pre = null
let ret = 0
function cfind (x) {
  'use strct'
  if (pre[x] !== x) pre[x] = cfind(pre[x])
  return pre[x]
}
function cunion (x, y) {
  'use strict'
  const r1 = cfind(x)
  const r2 = cfind(y)
  if (r1 === r2) return
  pre[r1] = r2
  ret--
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  'use strict'
  ret = n
  pre = Array(n)
  for (let i = 0; i < n; ++i) pre[i] = i

  for (const p of edges) {
    cunion(p[0], p[1])
  }

  return ret
}

module.exports = countComponents
