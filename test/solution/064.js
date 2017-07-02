// 64. Minimum Path Sum

const data = [
  {
    input: [
      [[0]]
    ],
    ans: 0
  },
  {
    input: [
      [[1, 2], [3, 4]]
    ],
    ans: 7
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
