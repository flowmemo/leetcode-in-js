// 507. Perfect Number

const data = [
  {
    input: [28],
    ans: true
  },
  {
    input: [1E8],
    ans: false
  },
  {
    input: [1],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
