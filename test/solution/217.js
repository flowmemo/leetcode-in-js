// 217. Contains Duplicate

const data = [
  {
    input: [[1, 1]],
    ans: true
  },
  {
    input: [[-1]],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
