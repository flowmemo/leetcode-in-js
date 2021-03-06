// 74. Search a 2D Matrix

const data = [
  {
    input: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ], 3
    ],
    ans: true
  },
  {
    input: [
      [[0]], 1
    ],
    ans: false
  },
  {
    input: [
      [[0]], -1
    ],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
