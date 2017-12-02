// 735. Asteroid Collision

const data = [
  {
    input: [[5, 10, -5]],
    ans: [5, 10]
  },
  {
    input: [[8, -8]],
    ans: []
  },
  {
    input: [[10, 2, -5]],
    ans: [10]
  },
  {
    input: [[-2, -1, 1, 2]],
    ans: [-2, -1, 1, 2]
  },
  {
    input: [[1, 1, -1, -1]],
    ans: []
  },
  {
    input: [[1, 2, -2, -1]],
    ans: []
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
