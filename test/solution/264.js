// 264. Ugly Number II

const data = [
  {
    input: [1],
    ans: 1
  },
  {
    input: [10],
    ans: 12
  },
  {
    input: [100],
    ans: 1536
  },
  {
    input: [1000],
    ans: 51200000
  },
  {
    input: [1690],
    ans: 2123366400
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
