// 165. Compare Version Numbers

const data = [
  {
    input: ['0.1', '1.1'],
    ans: -1
  },
  {
    input: ['1', '1.1'],
    ans: -1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
