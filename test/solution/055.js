// 55. Jump Game

const data = [
  {
    input: [[2, 3, 1, 1, 4]],
    ans: true
  },
  {
    input: [[3, 2, 1, 0, 4]],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
