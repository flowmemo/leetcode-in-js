// 659. Split Array into Consecutive Subsequences

const data = [
  {
    input: [[1, 2, 3, 3, 4, 5]],
    ans: true
  },
  {
    input: [[1, 2, 3, 3, 4, 4, 5, 5]],
    ans: true
  },
  {
    input: [[1, 2, 3, 4, 4, 5]],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
