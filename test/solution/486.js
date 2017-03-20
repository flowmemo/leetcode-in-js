// 486. Predict the Winner

const data = [
  {
    input: [[1, 5, 2]],
    ans: false
  },
  {
    input: [[1, 5, 233, 7]],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
