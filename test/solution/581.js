// 581. Shortest Unsorted Continuous Subarray

const data = [
  {
    input: [[2, 6, 4, 8, 10, 9, 15]],
    ans: 5
  },
  {
    input: [[1, 1, 2, 3]],
    ans: 0
  },
  {
    input: [[2, 2, 1, 1]],
    ans: 4
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
