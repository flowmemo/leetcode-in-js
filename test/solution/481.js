// 481. Magical String

const data = [
  {
    input: [1],
    ans: 1
  },
  {
    input: [6],
    ans: 3
  },
  {
    input: [100000],
    ans: 49972
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
