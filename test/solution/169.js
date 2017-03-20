// 169. Majority Element

const data = [
  {
    input: [[1, 1, 2]],
    ans: 1
  },
  {
    input: [[1, 1, 1, 2, 3]],
    ans: 1
  },
  {
    input: [[1, 2, 3, 4, 5, 1, 1, 1, 1]],
    ans: 1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
