/*
133. Clone Graph
Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.

OJ's undirected graph serialization:
Nodes are labeled uniquely.

We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
As an example, consider the serialized graph {0,1,2#1,2#2,2}.

The graph has a total of three nodes, and therefore contains three parts as separated by #.

First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
Second node is labeled as 1. Connect node 1 to node 2.
Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
Visually, the graph looks like the following:

       1
      / \
     /   \
    0 --- 2
         / \
         \_/
*/

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
  const map = new Map()
  if (!graph) return graph

  // bfs
  const head = new UndirectedGraphNode(graph.label)
  const q = [graph]
  map.set(head.label, head)
  while (q.length) {
    const cur = q.shift()
    const mcur = map.get(cur.label)
    for (let nb of cur.neighbors) {
      let mnb = map.get(nb.label)
      if (!mnb) {
        mnb = new UndirectedGraphNode(nb.label)
        q.push(nb)
        map.set(mnb.label, mnb)
      }
      mcur.neighbors.push(mnb)
    }
  }

  return head
}
