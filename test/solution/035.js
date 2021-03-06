// 35. Search Insert Position

const data = [
  {
    input: [[1, 3, 5, 6], 5],
    ans: 2
  },
  {
    input: [[1, 3, 5, 6], 2],
    ans: 1
  },
  {
    input: [[1, 3, 5, 6], 7],
    ans: 4
  },
  {
    input: [[1, 3, 5, 6], 0],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
