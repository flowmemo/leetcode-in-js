// 167. Two Sum II - Input array is sorted

const data = [
  {
    input: [[2, 7, 11, 15], 9],
    ans: [1, 2]
  },
  {
    input: [[2, 3, 4], 6],
    ans: [1, 3]
  },
  {
    input: [[1, 2, 4], 6],
    ans: [2, 3]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
