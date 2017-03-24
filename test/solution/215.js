// 215. Kth Largest Element in an Array

const data = [
  {
    input: [[3, 2, 1, 5, 6, 4], 2],
    ans: 5
  },
  {
    input: [[1], 1],
    ans: 1
  },
  {
    input: [[2, 1], 1],
    ans: 2
  },
  {
    input: [[-1, 2, 0], 1],
    ans: 2
  },
  {
    input: [Array(5000).fill().map((_, i) => i), 1],
    ans: 4999
  },
  {
    input: [Array(5000).fill().map((_, i) => 5000 - i), 1],
    ans: 5000
  },
  {
    input: [Array(50000).fill(0), 49999],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
