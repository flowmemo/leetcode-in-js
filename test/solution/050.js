// 50. Pow(x, n)

const data = [
  {
    input: [1, 1 << 31],
    ans: 1
  },
  {
    input: [0.99, ~(1 << 31)],
    ans: 0
  },
  {
    input: [2, -2],
    ans: 0.25
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
