// 29. Divide Two Integers

const INT_MIN = 1 << 31
const INT_MAX = ~INT_MIN

const data = [
  {
    input: [123, 5],
    ans: 24
  },
  {
    input: [0, 0],
    ans: INT_MAX
  },
  {
    input: [INT_MIN, -1],
    ans: INT_MAX
  },
  {
    input: [INT_MAX - 1, 1],
    ans: INT_MAX - 1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
