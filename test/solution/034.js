// 34. Search for a Range

const data = [
  {
    input: [[5, 7, 7, 8, 8, 10], 8],
    ans: [3, 4]
  },
  {
    input: [[], 1],
    ans: [-1, -1]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
