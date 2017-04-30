// 568. Maximum Vacation Days

const data = [
  {
    input: [[[0, 1, 1], [1, 0, 1], [1, 1, 0]], [[1, 3, 1], [6, 0, 3], [3, 3, 3]]],
    ans: 12
  },
  {
    input: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[1, 1, 1], [7, 7, 7], [7, 7, 7]]],
    ans: 3
  },
  {
    input: [[[0, 1, 1], [1, 0, 1], [1, 1, 0]], [[7, 0, 0], [0, 7, 0], [0, 0, 7]]],
    ans: 21
  }

]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
