// 198. House Robber

const data = [
  {
    input: [[1, 2]],
    ans: 2
  },
  {
    input: [[1, 2, 2]],
    ans: 3
  },
  {
    input: [[1, 4, 1]],
    ans: 4
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
