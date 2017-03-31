// 33. Search in Rotated Sorted Array

const data = [
  {
    input: [[4, 5, 6, 7, 0, 1, 2], 4],
    ans: 0
  },
  {
    input: [[4, 5, 6, 7, 0, 1, 2], 9],
    ans: -1
  },
  {
    input: [[3, 5, 1], 0],
    ans: -1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
