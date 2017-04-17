// 495. Teemo Attacking

const data = [
  {
    input: [[1, 4], 2],
    ans: 4
  },
  {
    input: [[1, 2], 2],
    ans: 3
  },
  {
    input: [[], 10],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
