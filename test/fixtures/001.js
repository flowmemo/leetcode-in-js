const data = [
  {
    input: [[2, 7, 11, 15], 9],
    ans: [0, 1]
  },
  {
    input: [[3, 2, 4], 6],
    ans: [1, 2]
  },
  {
    input: [[1, 2, 4], 6],
    ans: [1, 2]
  }
]

const checker = require('../checkers.js').normalChecker
module.exports = {
  data,
  checker
}
