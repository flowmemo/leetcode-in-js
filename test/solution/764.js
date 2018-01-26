// 764. Largest Plus Sign

const data = [
  {
    input: [5, [[4, 2]]],
    ans: 2
  },
  {
    input: [2, []],
    ans: 1
  },
  {
    input: [1, [[0, 0]]],
    ans: 0
  },
  {
    input: [2, [[0, 0], [1, 1]]],
    ans: 1
  },
  {
    input: [5, [[4, 2]]],
    ans: 2
  },
  {
    input: [5,
      [[0, 0], [0, 1], [0, 4], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [3, 0], [4, 0], [4, 1], [4, 3], [4, 4]]],
    ans: 1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
