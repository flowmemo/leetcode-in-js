// 779. K-th Symbol in Grammar

const data = [
  {
    input: [100000, 1],
    ans: 0
  },
  {
    input: [Number.MAX_SAFE_INTEGER, 1000000000],
    ans: 1
  },
  {
    input: [53, 100523],
    ans: 1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
