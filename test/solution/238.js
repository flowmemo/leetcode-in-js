// 238. Product of Array Except Self

const data = [
  {
    input: [[1, 2, 3, 4]],
    ans: [24, 12, 8, 6]
  },
  {
    input: [[0, 1, 0]],
    ans: [0, 0, 0]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
