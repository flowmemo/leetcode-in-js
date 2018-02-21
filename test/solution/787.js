// 787. Cheapest Flights Within K Stops

const data = [
  {
    input: [3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1],
    ans: 200

  },
  {
    input: [3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0],
    ans: 500
  },
  {
    input: [5, [[4, 1, 1], [1, 2, 3], [0, 3, 2], [0, 4, 10], [3, 1, 1], [1, 4, 3]],
      2, 1, 1],
    ans: -1
  },
  {
    input: [2, [[0, 1, 2]],
      1, 0, 0],
    ans: -1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
