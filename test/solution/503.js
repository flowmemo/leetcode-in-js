// 503. Next Greater Element II

const data = [
  {
    input: [[1, 2, 1]],
    ans: [2, -1, 2]
  },
  {
    input: [[5, 4, 3, 2, 1]],
    ans: [-1, 5, 5, 5, 5]
  },
  {
    input: [[]],
    ans: []
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
