// 120. Triangle
const data = [
  {
    input: [
      [
        [2],
        [3, 4],
        [6, 5, 7],
        [4, 1, 8, 3]
      ]
    ],
    ans: 11
  },
  {
    input: [[
      [1],
      [2, 3]
    ]],
    ans: 3
  }
]

const checker = require('../checkers.js').normalChecker
module.exports = {
  data,
  checker
}
