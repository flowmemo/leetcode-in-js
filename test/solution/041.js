// 41. First Missing Positive

const data = [
  {
    input: [[1, 2, 0]],
    ans: 3
  },
  {
    input: [[3, 4, -1, 1]],
    ans: 2
  },
  {
    input: [[]],
    ans: 1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
