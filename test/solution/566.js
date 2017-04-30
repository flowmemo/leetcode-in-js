// 566. Reshape the Matrix

const data = [
  {
    input: [
      [[1, 2], [3, 4]],
      1, 4
    ],
    ans: [[1, 2, 3, 4]]
  },
  {
    input: [
      [[1, 2, 3, 4]],
      2, 2
    ],
    ans: [[1, 2], [3, 4]]
  },
  {
    input: [
      [[1, 2, 3, 4]],
      2, 3
    ],
    ans: [[1, 2, 3, 4]]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
