/*
399. Evaluate Division
Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].
The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const map = new Map()

  // set map
  function setMap (numerator, denominator, val) {
    let r = map.get(numerator)
    if (!r) {
      r = []
      map.set(numerator, r)
    }
    r.push([denominator, val])
  }

  const len = equations.length
  for (let i = 0; i < len; i++) {
    let eq = equations[i]
    setMap(eq[0], eq[1], values[i])
    setMap(eq[1], eq[0], 1 / values[i])
  }
  const res = Array(queries.length)

  function getAns (numerator, denominator) {
    // asume that numerator and denominator exists.
    if (!map.has(denominator)) return -1
    const q = [{ numerator, curval: 1 }]
    const visited = new Set()
    visited.add(numerator)
    while (q.length) {
      let {numerator: cur, curval} = q.shift()
      let list = map.get(cur)
      if (!list) continue
      for (let [next, val] of list) {
        if (val === Infinity || val === -Infinity) {
          visited.add(next)
          continue
        }
        if (next === denominator) return curval * val
        if (!visited.has(next)) {
          visited.add(next)
          q.push({ numerator: next, curval: curval * val })
        }
      }
    }
    return -1
  }
  for (let i = 0; i < queries.length; i++) {
    let [numerator, denominator] = queries[i]
    res[i] = getAns(numerator, denominator)
  }

  return res
}

let tc = [
  [
    [['a', 'b'], ['b', 'c']],
    [2.0, 3.0],
    [['a', 'c'], ['b', 'c'], ['a', 'e'], ['a', 'a'], ['x', 'x']]
  ], [
    [['a', 'b']],
    [1],
    [['b', 'a']]]
]

let ans = [
  [ 6, 3, -1, 1, -1 ],
  [1]
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i].join()
  let r = calcEquation(...tc[i]).join()
  console.log(a === r, a, r)
}
