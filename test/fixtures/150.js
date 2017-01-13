// 150. Evaluate Reverse Polish Notation

const data = [
  {
    input: [['2', '1', '+', '3', '*']],
    ans: 9
  },
  {
    input: [['4', '13', '5', '/', '+']],
    ans: 6
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
