const data = [
  {
    input: [[2, 3], [1, 2, 3]],
    ans: 2
  },
  {
    input: [[1, 2, 3], [4]],
    ans: 2.5
  },
  {
    input: [[2, 3, 4], [1]],
    ans: 2.5
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
