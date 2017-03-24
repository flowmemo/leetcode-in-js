// 474. Ones and Zeroes

const data = [
  {
    input: [['10', '0001', '111001', '1', '0'], 5, 3],
    ans: 4
  },
  {
    input: [['10', '0', '1'], 1, 1],
    ans: 2
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
