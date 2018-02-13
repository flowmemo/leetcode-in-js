// 780. Reaching Points

const data = [
  {
    input: [2, 4, 15, 9],
    ans: false
  },
  {
    input: [1, 1, 3, 5],
    ans: true
  },
  {
    input: [1, 1, 2, 2],
    ans: false
  },
  {
    input: [1, 1, 1, 1],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
