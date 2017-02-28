/*
332. Reconstruct Itinerary
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:
If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:
tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
Example 2:
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
*/

class Node {
  constructor (val) {
    this.val = val
    this.next = []
  }

  addNext (val) {
    this.next.push({ val, visited: 0 })
  }
  sort () {
    this.next.sort((a, b) => {
      if (a.val < b.val) return -1
      else if (a.val === b.val) return 0
      else return 1
    })
  }
}

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let len = tickets.length
  if (len === 0) return []
  if (len === 1) return tickets[0]
  const station = new Map()
  for (let i = 0; i < len; i++) {
    const [from, to] = tickets[i]
    let node = station.get(from)
    if (node) {
      node.addNext(to)
    } else {
      node = new Node(from)
      node.addNext(to)
      station.set(from, node)
    }
  }
  const res = []
  function dfs (node, depth) {
    if (depth === len) {
      res.unshift(node.val)
      return true
    }
    if (!node.next.length) return false
    node.sort()
    for (let next of node.next) {
      if (!next.visited) {
        next.visited = 1
        let nnode = station.get(next.val)
        if (!nnode) nnode = { val: next.val, next: [] }
        let r = dfs(nnode, depth + 1)
        if (r) {
          res.unshift(node.val)
          return true
        }
        next.visited = 0
      }
    }
    return false
  }

  let head = station.get('JFK')
  dfs(head, 0)
  return res
}

let tc =
  [
    [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']],
    [['MUC', 'LHR'], ['JFK', 'MUC']],
    [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']],
    [['JFK', 'SFO'], ['SFO', 'JFK']]
  ]
let ans = [
  ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'],
  ['JFK', 'MUC', 'LHR'],
  ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'],
  ['JFK', 'SFO', 'JFK']
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i].join()
  let r = findItinerary(tc[i]).join()
  console.log(a === r, a, r)
}
