// 228. Summary Ranges

const data = [
  {
    input: [[0, 1, 2, 4, 5, 7]],
    ans: ['0->2', '4->5', '7']
  },
  {
    input: [[0, 1, 2, 3, 4, 5, 6, 7]],
    ans: ['0->7']
  },
  {
    input: [[0, 2, 4]],
    ans: ['0', '2', '4']
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
