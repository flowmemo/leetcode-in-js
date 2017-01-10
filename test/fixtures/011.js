// 11. Container With Most Water
const data = [
  {
    input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
    ans: 49
  },
  {
    input: [[1, 2, 13, 14, 5, 6]],
    ans: 18
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
