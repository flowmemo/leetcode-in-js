// 498. Diagonal Traverse

const data = [
  {
    input: [[
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]],
    ans: [1, 2, 4, 7, 5, 3, 6, 8, 9]
  },
  {
    input: [[
      [1, 2],
      [3, 4]
    ]],
    ans: [1, 2, 3, 4]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
