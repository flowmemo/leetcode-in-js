// 532. K-diff Pairs in an Array

const data = [
  {
    input: [[3, 1, 4, 1, 5], 2],
    ans: 2
  },
  {
    input: [[1, 2, 3, 4, 5], 1],
    ans: 4
  },
  {
    input: [[1, 3, 1, 5, 4], 0],
    ans: 1
  },
  {
    input: [[1, 1, 1], -1],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
