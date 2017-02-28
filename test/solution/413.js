// 413. Arithmetic Slices

const data = [
  {
    input: [[1, 2, 3, 4]],
    ans: 3
  },
  {
    input: [[1, 1, 2, 5, 7]],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
