// 456. 132 Pattern

const data = [
  {
    input: [[1, 2, 3, 4]],
    ans: false
  },
  {
    input: [[3, 1, 4, 2]],
    ans: true
  },
  {
    input: [[-1, 3, 2, 0]],
    ans: true
  },
  {
    input: [[]],
    ans: false
  },
  {
    input: [[-2, 1, 2, -2, 1, 2]],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
