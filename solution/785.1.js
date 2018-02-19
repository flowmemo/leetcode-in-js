/*
785. Is Graph Bipartite?
Given a graph, return true if and only if it is bipartite.

Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.

The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation:
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.

Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation:
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent ubsets.

Note:
1. graph will have length in range [1, 100].
2. graph[i] will contain integers in range [0, graph.length - 1].
3. graph[i] will not contain i or duplicate values.
*/

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  'use strict'
  const n = graph.length
  const color = Array(n).fill(0)
  function dfs (p, c) {
    if (color[p]) return
    color[p] = c
    for (const nxt of graph[p]) {
      dfs(nxt, 3 - c)
    }
  }

  for (let i = 0; i < n; ++i) {
    dfs(i, 1)
  }

  for (let i = 0; i < n; ++i) {
    for (const nxt of graph[i]) {
      if (color[i] === color[nxt]) return false
    }
  }
  return true
}

module.exports = isBipartite
