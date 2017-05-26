// 323. Number of Connected Components in an Undirected Graph

const data = [
  {
    input: [5, [[0, 1], [1, 2], [3, 4]]],
    ans: 2
  },
  {
    input: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]],
    ans: 1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
