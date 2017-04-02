// 343. Integer Break

const data = [
  {
    input: [2],
    ans: 1
  },
  {
    input: [3],
    ans: 2
  },
  {
    input: [4],
    ans: 4
  },
  {
    input: [5],
    ans: 6
  },
  {
    input: [10],
    ans: 36
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
