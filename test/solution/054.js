// 54. Spiral Matrix

const data = [
  {
    input: [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
    ],
    ans: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  },
  {
    input: [
      [[1, 2, 3]]
    ],
    ans: [1, 2, 3]
  },
  {
    input: [
      [[1],
      [2],
      [3]]
    ],
    ans: [1, 2, 3]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
