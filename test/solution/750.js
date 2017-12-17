// 750. Number Of Corner Rectangles

const data = [
  {
    input: [[
      [1, 1],
      [1, 1]]
    ],
    ans: 1
  },
  {
    input: [[
      [1, 0, 0, 1, 0],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 1, 0],
      [1, 0, 1, 0, 1]]],
    ans: 1
  },
  {
    input: [[
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]]],
    ans: 9
  },
  {
    input: [[[1, 1, 1, 1]]],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
