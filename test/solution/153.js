// 153. Find Minimum in Rotated Sorted Array

const data = [
  {
    input: [[4, 5, 6, 7, 0, 1, 2]],
    ans: 0
  },
  {
    input: [[1, 2]],
    ans: 1
  },
  {
    input: [[2, 1]],
    ans: 1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
