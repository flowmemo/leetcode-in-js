// 81. Search in Rotated Sorted Array II

const data = [
  {
    input: [[1, 1, 1, 3, 1], 0],
    ans: false
  },
  {
    input: [[1], 1],
    ans: true
  },
  {
    input: [[1, 3], 0],
    ans: false
  },
  {
    input: [[3, 1, 1], 3],
    ans: true
  },
  {
    input: [[1, 3], 3],
    ans: true
  },
  {
    input: [[1, 3, 1, 1], 3],
    ans: true
  },
  {
    input: [[], 5],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
