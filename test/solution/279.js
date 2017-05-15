// 279. Perfect Squares

const data = [
  {
    input: [1],
    ans: 1
  },
  {
    input: [10],
    ans: 2
  },
  {
    input: [100],
    ans: 1
  },
  {
    input: [1000],
    ans: 2
  },
  {
    input: [16903],
    ans: 4
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
