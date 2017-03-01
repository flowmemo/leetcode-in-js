// 172. Factorial Trailing Zeroes

const data = [
  {
    input: [134],
    ans: 32
  },
  {
    input: [23],
    ans: 4
  },
  {
    input: [5],
    ans: 1
  },
  {
    input: [12],
    ans: 2
  },
  {
    input: [1808548329],
    ans: 452137076
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
