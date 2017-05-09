// 575. Distribute Candies

const data = [
  {
    input: [[1, 1, 2, 2, 3, 3]],
    ans: 3
  },
  {
    input: [[1, 1, 2, 3]],
    ans: 2
  },
  {
    input: [[1, 2, 3, 4, 5, 6]],
    ans: 3
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
