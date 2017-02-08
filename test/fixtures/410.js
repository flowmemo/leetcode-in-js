// 410. Split Array Largest Sum

const data = [
  {
    input: [[7, 2, 5, 10, 8], 2],
    ans: 18
  },
  {
    input: [[2, 3, 1, 2, 4, 3], 3],
    ans: 6
  },
  {
    input: [[1, 2, 2], 2],
    ans: 3
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
