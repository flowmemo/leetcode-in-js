// 785. Is Graph Bipartite?

const data = [
  {
    input: [[[1, 3], [0, 2], [1, 3], [0, 2]]],
    ans: true
  },
  {
    input: [[[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]],
    ans: false
  },
  {
    input: [[[1], [0], [4], [4], [2, 3]]],
    ans: true
  },
  {
    input: [[[4], [], [4], [4], [0, 2, 3]]],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
