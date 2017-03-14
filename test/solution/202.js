// 202. Happy Number

const data = [
  {
    input: [19],
    ans: true
  },
  {
    input: [0],
    ans: false
  },
  {
    input: [7],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
