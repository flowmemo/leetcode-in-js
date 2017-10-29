// 719. Find K-th Smallest Pair Distance

const data = [
  {
    input: [[1, 3, 1], 1],
    ans: 0
  },
  {
    input: [[5, 1, 2, 3], 1],
    ans: 1
  },
  {
    input: [[5, 1, 2, 3], 2],
    ans: 1
  },
  {
    input: [[5, 1, 2, 3], 3],
    ans: 2
  },
  {
    input: [[5, 1, 2, 3], 4],
    ans: 2
  },
  {
    input: [[5, 1, 2, 3], 5],
    ans: 3
  },
  {
    input: [[5, 1, 2, 3], 6],
    ans: 4
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
