// 525. Contiguous Array

const data = [
  {
    input: [[0, 1]],
    ans: 2
  },
  {
    input: [[0, 1, 0]],
    ans: 2
  },
  {
    input: [[0, 1, 0, 1]],
    ans: 4
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
