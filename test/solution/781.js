// 781. Rabbits in Forest

const data = [
  {
    input: [[1, 1, 2]],
    ans: 5
  },
  {
    input: [[10, 10, 10]],
    ans: 11
  },
  {
    input: [[]],
    ans: 0
  },
  {
    input: [[1, 0, 1, 0, 0]],
    ans: 5
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
