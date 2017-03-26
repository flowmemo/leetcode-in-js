// 473. Matchsticks to Square

const data = [
  {
    input: [[1, 1, 2, 2, 2]],
    ans: true
  },
  {
    input: [[3, 3, 3, 3, 4]],
    ans: false
  },
  {
    input: [[12, 12, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60]],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
