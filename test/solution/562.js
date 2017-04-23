// 562. Longest Line of Consecutive One in Matrix

const data = [
  {
    input: [[
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1]
    ]],
    ans: 3
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
