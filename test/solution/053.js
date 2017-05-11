// 53. Maximum Subarray

const data = [
  {
    input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
    ans: 6
  },
  {
    input: [[-1]],
    ans: -1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
