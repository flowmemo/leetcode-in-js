// 209. Minimum Size Subarray Sum

const data = [
  {
    input: [7, [2, 3, 1, 2, 4, 3]],
    ans: 2
  },
  {
    input: [5, [1, 1, 1]],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
