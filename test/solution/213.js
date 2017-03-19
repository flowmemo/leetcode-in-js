// 213. House Robber II

const data = [
  {
    input: [[1, 2]],
    ans: 2
  },
  {
    input: [[1, 2, 2]],
    ans: 2
  },
  {
    input: [[1, 4, 1]],
    ans: 4
  },
  {
    input: [[1, 2, 2, 3]],
    ans: 5
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
