// 118. Pascal's Triangle

const data = [
  {
    input: 5,
    ans: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]
  }
]

const checker = require('../checkers.js').normalChecker
module.exports = {
  data,
  checker
}
