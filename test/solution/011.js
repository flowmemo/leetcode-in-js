// 11. Container With Most Water
const data = [
  {
    input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
    ans: 49
  },
  {
    input: [[1, 2, 13, 14, 5, 6]],
    ans: 18
  },
  {
    input: [Array(15000).fill().map((_, i) => i + 1)],
    ans: 56250000
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
